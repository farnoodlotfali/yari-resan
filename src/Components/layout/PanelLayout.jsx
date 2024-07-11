import {
  Box,
  Card,
  Container,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Header from "./Header";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
const PanelLayout = ({ children }) => {
  const [first, setfirst] = useState(0);

  const handleClick = (id) => {
    setfirst(id);
  };
  return (
    <Container
      sx={{
        px: 2,
        py: 1.5,
      }}
      maxWidth="xl"
    >
      <Header />

      <Stack
        direction="row"
        sx={{
          bgcolor: "white",
          mt: 2,
          px: 12,
        }}
      >
        <X active={first === 0} id={0} handleClick={handleClick} />
        <X active={first === 1} id={1} handleClick={handleClick} />
      </Stack>
      <Box
        sx={{
          bgcolor: "grey.300",
          p: 2,
          borderRadius: 3,
        }}
      >
        {children}
      </Box>
    </Container>
  );
};

const X = ({ active, id, handleClick }) => {
  return (
    <Box
      sx={{
        bgcolor: active ? "grey.300" : "white",
        py: 1,
        px: 1.5,
        width: 230,
        borderTopLeftRadius: (theme) => theme.shape.borderRadius * 2,
        borderTopRightRadius: (theme) => theme.shape.borderRadius * 2,
        position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "all 0.3s",
        zIndex: active ? 10 : 1,
        ":after": {
          content: '""',
          position: "absolute",
          width: 0,
          height: 0,
          borderRight: "10px solid transparent",
          borderBottom: "6px solid",
          borderBottomColor: active ? "grey.300" : "white",
          right: -8,
          bottom: 0,
          transition: "all 0.2s",
        },
        ":before": {
          content: '""',
          position: "absolute",
          width: 0,
          height: 0,
          borderLeft: "10px solid transparent",
          borderBottom: "6px solid",
          borderBottomColor: active ? "grey.300" : "white",
          left: -8,
          bottom: 0,
          transition: "all 0.2s",
        },
      }}
      onClick={() => handleClick(id)}
    >
      <Typography fontSize={14} color="grey.700">
        جستجو بیمه‌شده
      </Typography>
      <IconButton size="small">
        <CloseRoundedIcon sx={{ fontSize: 15 }} />
      </IconButton>
    </Box>
  );
};

export default PanelLayout;
