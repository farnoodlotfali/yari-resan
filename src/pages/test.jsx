import PanelLayout from "@/Components/layout/PanelLayout";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const Test = () => {
  const router = useRouter();

  return (
    <Box
      bgcolor="background.paper"
      minHeight="inherit"
      borderRadius={3}
      px={2}
      py={4}
    >
      <Button
        onClick={() => {
          router.back();
        }}
        variant="outlined"
        fullWidth
      >
        back
      </Button>
    </Box>
  );
};
Test.PageLayout = PanelLayout;

export default Test;
