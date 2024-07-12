import { Typography } from "@mui/material";

const ItemData = ({ title, value }) => {
  return (
    <Typography fontSize={14} fontWeight={600}>
      <Typography fontSize={12} color="grey.600" component="span">
        {title}:
      </Typography>{" "}
      {value}
    </Typography>
  );
};
export default ItemData;
