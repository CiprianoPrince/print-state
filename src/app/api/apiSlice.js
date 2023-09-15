import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { setCredentials, logOut } from '../../features/auth/authSlice';

// Default base query with token handling
const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:8000',
    credentials: 'include',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().auth.token;
        if (token) {
            headers.set('authorization', `Bearer ${token}`);
            
        }
        return headers;
    },
});

// Handle the refresh logic
export const handleRefresh = async (api, extraOptions) => {
    console.log('sending refresh token');
    const refreshResult = await baseQuery('/refresh', api, extraOptions);
    if (refreshResult?.data) {
        console.log(refreshResult);
        // store the new token
        api.dispatch(setCredentials(refreshResult.data));
        return true; // Indicates successful refresh
    } else {
        api.dispatch(logOut());
        return false; // Indicates failed refresh
    }
};

// Base query with reauthentication logic
const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    // If a 403 error occurs, try refreshing the token
    if (result?.error?.originalStatus === 403) {
        const refreshed = await handleRefresh(api, extraOptions);
        // If token was refreshed successfully, retry the original query
        if (refreshed) {
            result = await baseQuery(args, api, extraOptions);
        }
    }

    return result;
};

// Create the API slice
export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    endpoints: (builder) => ({}),
});
