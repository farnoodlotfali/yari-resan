import "@/styles/globals.css";
import { EmotionCacheInstance } from "@/styles/mui/emotion.config";
import { YariResanGlobalStyle, YariResanTheme } from "@/styles/mui/mui.theme";
import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material";
import { AppCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Head from "next/head";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 10 seconds
      staleTime: 10 * 1000,
      refetchOnWindowFocus: false,
      keepPreviousData: true,
      retry: 1,
      retryDelay: 1.5 * 1000,
    },
  },
});

export default function App({
  Component,
  emotionCache = EmotionCacheInstance,
  pageProps,
}) {
  return (
    <>
      <Head>
        <title>یاری‌رسان</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <AppCacheProvider emotionCache={emotionCache}>
            <ThemeProvider theme={responsiveFontSizes(YariResanTheme)}>
              <CssBaseline />
              <GlobalStyles styles={YariResanGlobalStyle} />
              {Component.PageLayout ? (
                <Component.PageLayout>
                  <Component {...pageProps} />
                </Component.PageLayout>
              ) : (
                <Component {...pageProps} />
              )}
            </ThemeProvider>
          </AppCacheProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}
