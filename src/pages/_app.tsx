import "../styles/global.css";
import { AppProps } from "next/app";

export default ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
