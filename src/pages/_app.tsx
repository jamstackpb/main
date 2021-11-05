import { AppProps } from 'next/app';
import { defaultTheme } from '../theme/theme';
import React from 'react';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyle } from '../utils';
import 'tailwindcss/tailwind.css';
import { Navigation } from '@/src/components';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Global styles={globalStyle} />
            <Navigation />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default App;
