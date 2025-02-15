import { Badge, Box, ButtonBase } from "@mui/material";

const ActionButton = ({
  bgcolor,
  icon,
  badge,
  sx = {},
  type = "button",
  onClick,
}) => {
  const btn = (
    <Box
      sx={{
        bgcolor: bgcolor,
        p: 1,
        borderRadius: 2,
        display: "flex",
        ...sx,
      }}
      component={ButtonBase}
      type={type}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {icon}
    </Box>
  );

  return badge ? (
    <Badge
      color={badge.color}
      badgeContent={badge.content}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
    >
      {btn}
    </Badge>
  ) : (
    btn
  );
};
export default ActionButton;
