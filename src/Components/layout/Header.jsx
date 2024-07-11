import { Avatar, Box, Stack, Typography } from "@mui/material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import FlashOnRoundedIcon from "@mui/icons-material/FlashOnRounded";
import { StyledBadge } from "../StyledBadge";
import ActionButton from "../ActionButton";
import Image from "next/image";

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
      <Image
        src="/assets/images/logo.svg"
        width={120}
        height={50}
        alt="yariresan"
        priority={true}
      />

      <Stack direction="row" spacing={3} alignItems="center">
        <Stack direction="row" spacing={1.5}>
          {HEADER_BUTTON_ITEMS.map((item, i) => {
            return <ActionButton key={i} {...item} />;
          })}
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            borderRadius: 8,
            bgcolor: "secondary.50",
            alignItems: "center",
            pr: 1.5,
            pl: 2,
            py: 1.2,
            width: "fit-content",
          }}
        >
          <Typography color="secondary.main">مجید رنجکش</Typography>
          <Box>
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              variant="dot"
            >
              <Avatar alt="Natacha" src="/assets/images/man.jpg" />
            </StyledBadge>
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Header;
