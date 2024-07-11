import {
  SECONDARY,
  BACKGROUND,
  GREY,
  PRIMARY,
  TEXT,
  ERROR,
  INFO,
  WARNING,
  SUCCESS,
} from "@/constants/mui/Colors";
import { createTheme } from "@mui/material";
import { BORDER_RADIUS } from "@/constants/mui/BorderRadius";
import { BOXSHADOW } from "@/constants/mui/BoxShadow";
import { SPACING } from "@/constants/mui/Spacing";
import localFont from "next/font/local";

// fonts
export const VazirMatnFont = localFont({
  src: [
    {
      path: "../../../public/assets/fonts/Vazirmatn-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/Vazirmatn-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/Vazirmatn-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/Vazirmatn-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/Vazirmatn-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/Vazirmatn-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/Vazirmatn-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/Vazirmatn-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../../../public/assets/fonts/Vazirmatn-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  display: "swap",
  preload: true,
  fallback: ["Roboto", "sans-serif", "Helvetica", "Arial"],
});

export const YariResanTheme = createTheme({
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: BORDER_RADIUS * 4,
          backgroundColor: GREY.light[100],
        },
      },
    },
  },
  direction: "rtl",
  spacing: SPACING,
  shape: {
    borderRadius: BORDER_RADIUS,
  },
  palette: {
    mode: "light",
    primary: PRIMARY.light,
    secondary: SECONDARY.light,
    error: ERROR.light,
    info: INFO.light,
    success: SUCCESS.light,
    warning: WARNING.light,
    background: BACKGROUND.light,
    text: TEXT.light,
    grey: GREY.light,
  },
  shadows: BOXSHADOW.light,
  typography: {
    fontFamily: VazirMatnFont.style.fontFamily,
  },
});

export const YariResanGlobalStyle = {
  html: {
    fontFamily: VazirMatnFont.style.fontFamily,
  },
};
