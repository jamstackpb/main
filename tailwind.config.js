const colors = require('./colors');

module.exports = {
    mode: 'jit',
    purge: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
    darkMode: false,
    theme: {
        extend: {
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                black: colors.black,
                white: colors.white,
                gray: colors.gray,
                red: colors.red,
                yellow: colors.amber,
                orange: colors.orange,
                green: colors.emerald,
                blue: colors.blue,
                indigo: colors.indigo,
                purple: colors.violet,
                pink: colors.pink,
                primaryFontColor: '#78a0fa', //also you can use "blue-font"
                secondaryFontColor: '#7e849d', // "gray-font"
                tertiaryFontColor: '#25acd9', // "blue-strange"
                quaternaryFontColor: '#15159b', // "blue-darkfont"
                quinaryFontColor: '#808080', // "red-font"
                primaryBackgroundColor: '#2727a3', // "blue-bg"
                secondaryBackgroundColor: '#f7f7f9', // -||- "blue-whitebg2"
                tertiaryBackgroundColor: '#f6fafd', // -||- "blue-whitebg"
                quaternaryBackgroundColor: '#ffff00', // -||- "yellow-bg"
                octonaryBackgroundColor: '#6e62d8', // "purple-bg"
                primaryHoverColor: '#ffff65', // "yellow-hover"
                secondaryHoverColor: '#6699ff', // "blue-hover"
            },
            spacing: {
                22: '5.5rem',
                50: '12.5rem',
                74: '18.5rem',
                76: '19rem',
                84: '21rem',
                88: '22rem',
                92: '23rem',
                98: '26rem',
                150: '37.5rem',
                400: '100rem',
            },
            skew: {
                '-30': '-30deg',
            },
            animation: {
                none: 'none',
                spin: 'spin 1s linear infinite',
                ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
                pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                bounce: 'bounce 1s infinite',
                fadeoutdown: 'fade-out-down 0.5s forwards',
                fadeinup: 'fade-in-up 0.5s ease-out',
            },
            backgroundImage: {
                git: 'url("public/images/teamMembersAvatars/git_icon.svg")',
                arrow: 'url("public/images/ProjectsSiteImgs/arrow.svg")',
            },
            backgroundSize: {
                body: '91%',
            },
            translate: {
                '3/7': '42.8571429%',
            },
            contrast: {
                0: '0',
                50: '.5',
                75: '.75',
                100: '1',
                125: '1.25',
                150: '1.5',
                200: '2',
            },
            container: {},
            content: {
                none: 'none',
            },
            fontFamily: {
                Festive: ['Festive', 'cursive'],
                Dosis: ['Dosis', 'sans-serif'],
                Roboto: ['Roboto Mono', 'monospace'],
            },
            variants: {
                backgroundImage: ['hover', 'focus'],
                backgroundSize: ['hover', 'focus'],
                borderWidth: ['hover', 'focus'],
            },
            keyframes: {
                'fade-out-down': {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(0px)',
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateY(200px)',
                    },
                },
                'fade-in-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(200px)',
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)',
                    },
                },
                spin: {
                    to: {
                        transform: 'rotate(360deg)',
                    },
                },
                ping: {
                    '75%, 100%': {
                        transform: 'scale(2)',
                        opacity: '0',
                    },
                },
                pulse: {
                    '50%': {
                        opacity: '.5',
                    },
                },
                bounce: {
                    '0%, 100%': {
                        transform: 'translateY(-25%)',
                        animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
                    },
                    '50%': {
                        transform: 'none',
                        animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
                    },
                },
            },
        },
    },
    plugins: [],
};
