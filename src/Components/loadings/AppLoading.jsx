import { Box, CircularProgress, Typography } from "@mui/material";

const AppLoading = ({ label = "در حال بارگذاری..." }) => {
  return (
    <Box textAlign="center" my={1}>
      <CircularProgress color="secondary" />
      <Typography color="secondary.main">{label}</Typography>
    </Box>
  );
};

export default AppLoading;
