// rootReducer.js
import { combineReducers } from 'redux';
import { apiSlice } from './api/apiSlice';
import authReducer from '../features/auth/authSlice';

const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
});

export default rootReducer;
