import type { AppProps } from "next/app";
import "src/styles/init.css";
import "src/styles/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
