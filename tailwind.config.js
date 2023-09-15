/** @type {import('tailwindcss').Config} */
export default {
    mode: 'jit',
    content: ['index.html', './src/**/*.jsx'],
    theme: {
        extend: {
            fontFamily: {
                montserrat: ['Roboto', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
            colors: {
                primary: {
                    50: '#ffffff',
                    100: '#efefef',
                    200: '#dcdcdc',
                    300: '#bdbdbd',
                    400: '#989898',
                    500: '#7c7c7c',
                    600: '#656565',
                    700: '#525252',
                    800: '#464646',
                    900: '#3d3d3d',
                    950: '#292929',
                },
                secondary: {
                    50: '#f6f6f6',
                    100: '#e7e7e7',
                    200: '#d1d1d1',
                    300: '#b0b0b0',
                    400: '#888888',
                    500: '#6d6d6d',
                    600: '#5d5d5d',
                    700: '#4f4f4f',
                    800: '#454545',
                    900: '#3d3d3d',
                    950: '#000000',
                },
                accent: {
                    50: '#fff1f3',
                    100: '#ffe4e8',
                    200: '#ffccd5',
                    300: '#fea3b3',
                    400: '#fd6f8b',
                    500: '#f8567b',
                    600: '#e41a52',
                    700: '#c10f45',
                    800: '#a11040',
                    900: '#8a113d',
                    950: '#4d041c',
                },
            },
            keyframes: {
                spin: {
                    from: {
                        transform: 'rotate(0deg)',
                    },
                    to: {
                        transform: 'rotate(360deg)',
                    },
                },
            },
            animation: {
                spin: 'spin 1s linear infinite',
            },
        },
    },
    plugins: [],
};
