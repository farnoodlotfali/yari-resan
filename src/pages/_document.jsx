import { Html, Head, Main, NextScript } from "next/document";
import {
  DocumentHeadTags,
  documentGetInitialProps,
} from "@mui/material-nextjs/v14-pagesRouter";
import { PRIMARY } from "@/constants/mui/Colors";
import createEmotionCache from "@/styles/mui/emotion.config";

export default function MyDocument(props) {
  return (
    <Html lang="fa" dir="rtl">
      <Head>
        <DocumentHeadTags {...props} />

        <meta name="application-name" content="یاری‌رسان" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="یاری‌رسان" />
        <meta name="description" content="یاری‌رسان" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content={PRIMARY.light.main} />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content={PRIMARY.light.main} />

        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

MyDocument.getInitialProps = async (ctx) => {
  const finalProps = await documentGetInitialProps(ctx, {
    emotionCache: createEmotionCache(),
  });

  return finalProps;
};
