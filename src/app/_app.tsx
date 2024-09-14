import AppStateProvider from "@store/store";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <AppStateProvider>
        <Component {...pageProps} />
      </AppStateProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
