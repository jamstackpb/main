
export const defaultTheme =  {

        border: {
        button: '2px solid #2727a3',
    },
    colorsPalette: {
        common: {
            black: '#000',
            white: '#fff',
        },
        fontColors: {
            primary: '#78a0fa',
            secondary: '#7e849d',
            tertiary: '#25acd9',
            quaternary: '#15159b',
            quinary: '#808080',
            senary: '',
            septenary: '',
            octonary: '',
            nonary: '',
        },
        backgroundColors: {
            primary: '#2727a3',
            secondary: '#eeeef176',
            tertiary: '#f6fafd',
            quaternary: '#ffff00',
            quinary: '#ff8788',
            senary: '#bbdc65',
            septenary: '#65efdd',
            octonary: '#6e62d8',
            nonary: '',
        },
        hoverColors: {
            primary: '#ffff65',
        },
    },
    font: {
        fontSize: {
            primary: '5rem',
            secondary: '4rem',
            tertiary: '3rem',
            quaternary: '2rem',
            quinary: '1.8rem',
            senary: '1.6rem',
            septenary: '1.5rem',
            octonary: '1.4rem',
            nonary: '1.2rem',
        },
        fontWeight: {
            primary: '900',
            secondary: '700',
            tertiary: '600',
            quaternary: '500',
            quinary: '400',
            senary: '300',
            septenary: '',
            octonary: '',
            nonary: '',
        },
    },
    boxShadow: {
        primary: '0px 2px 6px -1px black',
        secondary: '6px 6px 6px -1px black',
    },
};

export type EditorTheme = typeof defaultTheme;
