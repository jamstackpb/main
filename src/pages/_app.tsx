import '../styles/global.css';
import { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { defaultTheme } from '@/src/styles/theme';

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default App;
