import { Box, Container } from "@mui/material";
import Header from "./Header";
import Tabs from "./Tabs";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useTabsStore } from "@/context/features/tabs";
import { useShallow } from "zustand/react/shallow";
import AppLoading from "../loadings/AppLoading";

const PanelLayout = ({ children }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [hasHydrated, tabs, setActiveTab, handleActiveTab] = useTabsStore(
    useShallow((state) => [
      state._hasHydrated,
      state.tabs,
      state.setActiveTab,
      state.handleActiveTab,
    ])
  );

  useEffect(() => {
    const handleStart = (url) => {
      url !== router.asPath && setLoading(true);
      const find = tabs.find((tab) => tab.url === url);
      if (find) {
        setActiveTab(find);
      }
      handleActiveTab({
        url: url,
      });
    };
    const handleComplete = (url) => {
      setLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  if (!hasHydrated) {
    return <AppLoading />;
  }

  return (
    <Container
      sx={{
        px: 2,
        py: 1.5,
      }}
      maxWidth="xl"
    >
      <Header />

      <Tabs />

      <Box
        sx={{
          bgcolor: "grey.300",
          p: 2,
          borderRadius: 3,
          minHeight: 900,
        }}
      >
        {loading ? (
          <Box
            sx={{
              minHeight: "inherit",
              borderRadius: 3,
              bgcolor: "background.paper",
              pt: 6,
            }}
          >
            <AppLoading />
          </Box>
        ) : (
          children
        )}
      </Box>
    </Container>
  );
};

export default PanelLayout;
