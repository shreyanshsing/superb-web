import AppStateProvider from "@store/store";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <AppStateProvider>
        <Component {...pageProps} />
      </AppStateProvider>
  );
}


export default MyApp;