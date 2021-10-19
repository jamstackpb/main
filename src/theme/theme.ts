export const defaultTheme = {
    border: {
        button: '2px solid #2727a3',
    },
    boxShadow: {
        primary: '0px 2px 6px -1px black',
        secondary: '6px 6px 6px -1px black',
    },
    colorsPalette: {
        commonBlack: '#000',
        commonWhite: '#fff',

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
        nonaryBackgroundColor: '',

        primaryHoverColor: '#ffff65',
        secondaryHoverColor: '#6699ff',
    },
};

export type EditorTheme = typeof defaultTheme;
