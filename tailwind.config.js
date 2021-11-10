module.exports = {
    purge: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
    mode: 'jit',
    theme: {
        extend: {
            keyframes: {
                'fade-out-down': {
                    '0%': {
                        opacity: '1',
                        transform: 'translateY(0px)'
                    },
                    '100%': {
                        opacity: '0',
                        transform: 'translateY(200px)'
                    },
                },
                'fade-in-up': {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(200px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    },
                },
            },
            animation: {
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
            colors: {
                primaryFontColor: '#78a0fa',
                secondaryFontColor: '#7e849d',
                tertiaryFontColor: '#25acd9',
                quaternaryFontColor: '#15159b',
                quinaryFontColor: '#808080',
                senaryFontColor: '',
                septenaryFontColor: '',
                octonaryFontColor: '',
                nonaryFontColor: '',
                primaryBackgroundColor: '#2727a3',
                secondaryBackgroundColor: '#f7f7f9',
                tertiaryBackgroundColor: '#f6fafd',
                quaternaryBackgroundColor: '#ffff00',
                quinaryBackgroundColor: '#ff8788',
                senaryBackgroundColor: '#bbdc65',
                septenaryBackgroundColor: '#65efdd',
                octonaryBackgroundColor: '#6e62d8',
                nonaryBackgroundColor: '#0BCCE9',
                denaryBackgroundColor: '#E9A701',
                primaryHoverColor: '#ffff65',
                secondaryHoverColor: '#6699ff',
            },
            spacing: {
                22: '5.5rem',
                74: '18.5rem',
                76: '19rem',
                78: '19.5rem',
                82: '20.5rem',
                84: '21rem',
                88: '22rem',
                92: '23rem',
                100: '26rem',
                101: '28rem',
                102: '37.5rem',
                103: '39rem',
                106: '44rem',
                108: '46rem',
                110: '50rem',
                112: '54rem',
                114: '58rem',
                116: '62rem',
                118: '66rem',
                120: '70rem',
            },
            fontFamily: {
                Festive: ['Festive', 'cursive'],
                Dosis: ['Dosis', 'sans-serif'],
                Roboto: ['Roboto Mono', 'monospace'],
            },
        },
        letterSpacing: {
            tighter: '-0.05em',
            tight: '-0.025em',
            normal: '0em',
            wide: '0.025em',
            wider: '0.05em',
            widest: '0.1em',
        },
        lineHeight: {
            none: '1',
            tight: '1.25',
            snug: '1.375',
            normal: '1.5',
            relaxed: '1.625',
            loose: '2',
            3: '.75rem',
            4: '1rem',
            5: '1.25rem',
            6: '1.5rem',
            7: '1.75rem',
            8: '2rem',
            9: '2.25rem',
            10: '2.5rem',
        },
        listStyleType: {
            none: 'none',
            disc: 'disc',
            decimal: 'decimal',
        },
        margin: (theme, { negative }) => ({
            auto: 'auto',
            ...theme('spacing'),
            ...negative(theme('spacing')),
        }),
        maxHeight: (theme) => ({
            ...theme('spacing'),
            full: '100%',
            screen: '100vh',
        }),
        maxWidth: (theme, { breakpoints }) => ({
            none: 'none',
            0: '0rem',
            xs: '20rem',
            sm: '24rem',
            md: '28rem',
            lg: '32rem',
            xl: '36rem',
            '2xl': '42rem',
            '3xl': '48rem',
            '4xl': '56rem',
            '5xl': '64rem',
            '6xl': '72rem',
            '7xl': '80rem',
            full: '100%',
            min: 'min-content',
            max: 'max-content',
            prose: '65ch',
            ...breakpoints(theme('screens')),
        }),
        minHeight: {
            0: '0px',
            full: '100%',
            screen: '100vh',
        },
        minWidth: {
            0: '0px',
            full: '100%',
            min: 'min-content',
            max: 'max-content',
        },
        objectPosition: {
            bottom: 'bottom',
            center: 'center',
            left: 'left',
            'left-bottom': 'left bottom',
            'left-top': 'left top',
            right: 'right',
            'right-bottom': 'right bottom',
            'right-top': 'right top',
            top: 'top',
        },
        opacity: {
            0: '0',
            5: '0.05',
            10: '0.1',
            20: '0.2',
            25: '0.25',
            30: '0.3',
            40: '0.4',
            50: '0.5',
            60: '0.6',
            70: '0.7',
            75: '0.75',
            80: '0.8',
            90: '0.9',
            95: '0.95',
            100: '1',
        },
        order: {
            first: '-9999',
            last: '9999',
            none: '0',
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '5',
            6: '6',
            7: '7',
            8: '8',
            9: '9',
            10: '10',
            11: '11',
            12: '12',
        },
        outline: {
            none: ['2px solid transparent', '2px'],
            white: ['2px dotted white', '2px'],
            black: ['2px dotted black', '2px'],
        },
        padding: (theme) => theme('spacing'),
        placeholderColor: (theme) => theme('colors'),
        placeholderOpacity: (theme) => theme('opacity'),
        ringColor: (theme) => ({
            DEFAULT: theme('colors.blue.500', '#3b82f6'),
            ...theme('colors'),
        }),
        ringOffsetColor: (theme) => theme('colors'),
        ringOffsetWidth: {
            0: '0px',
            1: '1px',
            2: '2px',
            4: '4px',
            8: '8px',
        },
        ringOpacity: (theme) => ({
            DEFAULT: '0.5',
            ...theme('opacity'),
        }),
        ringWidth: {
            DEFAULT: '3px',
            0: '0px',
            1: '1px',
            2: '2px',
            4: '4px',
            8: '8px',
        },
        rotate: {
            '-180': '-180deg',
            '-90': '-90deg',
            '-45': '-45deg',
            '-30': '-30deg',
            '-12': '-12deg',
            '-6': '-6deg',
            '-3': '-3deg',
            '-2': '-2deg',
            '-1': '-1deg',
            0: '0deg',
            1: '1deg',
            2: '2deg',
            3: '3deg',
            6: '6deg',
            12: '12deg',
            30: '30deg',
            45: '45deg',
            90: '90deg',
            180: '180deg',
        },
        saturate: {
            0: '0',
            50: '.5',
            100: '1',
            150: '1.5',
            200: '2',
        },
        scale: {
            0: '0',
            50: '.5',
            75: '.75',
            90: '.9',
            95: '.95',
            100: '1',
            105: '1.05',
            110: '1.1',
            125: '1.25',
            150: '1.5',
        },
        sepia: {
            0: '0',
            DEFAULT: '100%',
        },
        skew: {
            '-30': '-30deg',
            '-2': '-2deg',
            '-1': '-1deg',
            0: '0deg',
            1: '1deg',
            30: '30deg',
        },
        space: (theme, { negative }) => ({
            ...theme('spacing'),
            ...negative(theme('spacing')),
        }),
        stroke: {
            current: 'currentColor',
        },
        strokeWidth: {
            0: '0',
            1: '1',
            2: '2',
        },
        textColor: (theme) => theme('colors'),
        textOpacity: (theme) => theme('opacity'),
        transformOrigin: {
            center: 'center',
            top: 'top',
            'top-right': 'top right',
            right: 'right',
            'bottom-right': 'bottom right',
            bottom: 'bottom',
            'bottom-left': 'bottom left',
            left: 'left',
            'top-left': 'top left',
        },
        transitionDelay: {
            75: '75ms',
            100: '100ms',
            150: '150ms',
            200: '200ms',
            300: '300ms',
            450: '450ms',
            500: '500ms',
            600: '600ms',
            700: '700ms',
            1000: '1000ms',
        },
        transitionDuration: {
            DEFAULT: '150ms',
            75: '75ms',
            100: '100ms',
            150: '150ms',
            200: '200ms',
            300: '300ms',
            500: '500ms',
            700: '700ms',
            1000: '1000ms',
        },
        transitionProperty: {
            none: 'none',
            all: 'all',
            DEFAULT: 'background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter',
            colors: 'background-color, border-color, color, fill, stroke',
            opacity: 'opacity',
            shadow: 'box-shadow',
            transform: 'transform',
        },
        transitionTimingFunction: {
            DEFAULT: 'cubic-bezier(0.4, 0, 0.2, 1)',
            linear: 'linear',
            in: 'cubic-bezier(0.4, 0, 1, 1)',
            out: 'cubic-bezier(0, 0, 0.2, 1)',
            'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        },
        translate: (theme, { negative }) => ({
            ...theme('spacing'),
            ...negative(theme('spacing')),
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            full: '100%',
            '-1/2': '-50%',
            '-1/3': '-33.333333%',
            '-2/3': '-66.666667%',
            '-1/4': '-25%',
            '-2/4': '-50%',
            '-3/4': '-75%',
            '-full': '-100%',
        }),
        width: (theme) => ({
            auto: 'auto',
            ...theme('spacing'),
            '1/2': '50%',
            '1/3': '33.333333%',
            '2/3': '66.666667%',
            '1/4': '25%',
            '2/4': '50%',
            '3/4': '75%',
            '1/5': '20%',
            '2/5': '40%',
            '3/5': '60%',
            '4/5': '80%',
            '1/6': '16.666667%',
            '2/6': '33.333333%',
            '3/6': '50%',
            '4/6': '66.666667%',
            '5/6': '83.333333%',
            '1/12': '8.333333%',
            '2/12': '16.666667%',
            '3/12': '25%',
            '4/12': '33.333333%',
            '5/12': '41.666667%',
            '6/12': '50%',
            '7/12': '58.333333%',
            '8/12': '66.666667%',
            '9/12': '75%',
            '10/12': '83.333333%',
            '11/12': '91.666667%',
            full: '100%',
            screen: '100vw',
            min: 'min-content',
            max: 'max-content',
        }),
        zIndex: {
            auto: 'auto',
            0: '0',
            10: '10',
            20: '20',
            30: '30',
            40: '40',
            50: '50',
        },

    },
    variants: {
        backgroundImage: ['hover', 'focus'],
        backgroundSize: ['hover', 'focus'],
        borderWidth: ['hover', 'focus'],
    },
    plugins: [],
}