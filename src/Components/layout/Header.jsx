import { Avatar, Box, Stack, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import FlashOnRoundedIcon from "@mui/icons-material/FlashOnRounded";
import ActionButton from "../ActionButton";
import Image from "next/image";
import { StyledBadge } from "../StyledBadge";

const HEADER_BUTTON_ITEMS = [
  {
    icon: <FlashOnRoundedIcon color="error" sx={{ fontSize: 24 }} />,
    bgcolor: "error.50",
  },
  {
    icon: (
      <NotificationsNoneRoundedIcon color="success" sx={{ fontSize: 24 }} />
    ),
    bgcolor: "success.50",
  },
  {
    icon: <ConfirmationNumberOutlinedIcon color="info" sx={{ fontSize: 24 }} />,
    bgcolor: "info.50",
  },
  {
    badge: {
      content: 1,
      color: "warning",
    },
    icon: <EmailOutlinedIcon color="warning" sx={{ fontSize: 24 }} />,
    bgcolor: "warning.100",
  },
];

const Header = () => {
  return (
    <Stack
      component="header"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box
        sx={{
          minWidth: { md: 120, xs: 60 },
          minHeight: { md: 50, xs: 25 },
          position: "relative",
        }}
      >
        <Image
          fill
          src="/assets/images/logo.svg"
          alt="yariresan"
          priority={true}
        />
      </Box>

      <Stack direction="row" spacing={3} alignItems="center">
        <Box display={{ md: "flex", xs: "none" }} gap={1.5}>
          {HEADER_BUTTON_ITEMS.map((item, i) => {
            return <ActionButton key={i} {...item} />;
          })}
        </Box>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            borderRadius: 8,
            bgcolor: "secondary.50",
            alignItems: "center",
            pr: { md: 1.5, xs: 1 },
            pl: { md: 2, xs: 1 },
            py: { md: 1.2, xs: 0.5 },
            width: "fit-content",
          }}
        >
          <Typography color="secondary.main" fontSize={{ md: 16, xs: 13 }}>
            مجید رنجکش
          </Typography>
          <Box>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              variant="dot"
            >
              <Avatar alt="man" src="/assets/images/man.jpg" />
            </StyledBadge>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Header;
