import Document, { Html, Head, Main, NextScript } from 'next/document';

// commented things are for google analytics

// import { GA_TRACKING_ID } from "@/lib/gtag";

// const isProduction = process.env.NODE_ENV === "production";

export default class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html lang="pl-PL">
                <Head>
                <link rel="shortcut icon" href={process.env.NEXT_PUBLIC_BASE_PATH + '/favicon.ico'} />
                    {/* enable analytics script only for production */}
                    {/* {isProduction && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
              />
            </>
          )} */}
                </Head>
                <body style={{margin: 0}}>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
