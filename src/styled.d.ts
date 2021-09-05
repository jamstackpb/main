import '@emotion/react';

interface ColorsPalette {
    backgroundColor: string;
    textColor: string;
}
interface Font {
    fontSize: { primary: string; secondary: string };
    fontWeight: { primary: string; secondary: string };
}
declare module '@emotion/react' {
    export interface Theme {
        border: {
            button: string;
        };
        colorsPalette: {
            common: {
                black: string;
                white: string;
            };
            fontColors: {
                primary: string;
                secondary: string;
                tertiary: string;
                quaternary: string;
                quinary: string;
                senary: string;
                septenary: string;
                octonary: string;
                nonary: string;
            };
            backgroundColors: {
                primary: string;
                secondary: string;
                tertiary: string;
                quaternary: string;
                quinary: string;
                senary: string;
                septenary: string;
                octonary: string;
                nonary: string;
            };
            hoverColors: {
                primary: string;
            };
        };
        font: {
            fontSize: {
                primary: string;
                secondary: string;
                tertiary: string;
                quaternary: string;
                quinary: string;
                senary: string;
                septenary: string;
                octonary: string;
                nonary: string;
            };
            fontWeight: {
                primary: string;
                secondary: string;
                tertiary: string;
                quaternary: string;
                quinary: string;
                senary: string;
                septenary: string;
                octonary: string;
                nonary: string;
            };
        };

        boxShadow: {
            primary: string;
            secondary: string;
        };
    }
}
