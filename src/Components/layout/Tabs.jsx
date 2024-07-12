import { Box, IconButton, Stack, Typography } from "@mui/material";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { useTabsStore } from "@/context/features/tabs";
import { useShallow } from "zustand/react/shallow";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ActionButton from "../ActionButton";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { useRouter } from "next/router";

const Tab = ({ tab }) => {
  const router = useRouter();

  const [activeTab, tabs, setActiveTab, handleRemoveTab] = useTabsStore(
    (state) => [
      state.activeTab,
      state.tabs,
      state.setActiveTab,
      state.handleRemoveTab,
    ]
  );

  const handleClickRemove = () => {
    const replaceTab = tabs[0];
    handleRemoveTab(tab.id);
    setActiveTab(replaceTab);
    router.replace(replaceTab?.url);
  };
  const handleClick = () => {
    setActiveTab(tab);
    router.push(tab.url);
  };

  const active = activeTab.id === tab.id;
  const color = active ? "grey.300" : "background.paper";
  return (
    <Box
      sx={{
        bgcolor: color,
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
        cursor: "default",
        ":after": {
          content: '""',
          position: "absolute",
          width: 0,
          height: 0,
          borderRight: "10px solid transparent",
          borderBottom: "6px solid",
          borderBottomColor: color,
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
          borderBottomColor: color,
          left: -8,
          bottom: 0,
          transition: "all 0.2s",
        },
      }}
      onClick={() => handleClick()}
    >
      <Typography fontSize={14} color="grey.700">
        {tab.title}
      </Typography>
      <IconButton
        size="small"
        onClick={(e) => {
          e.stopPropagation();
          handleClickRemove();
        }}
      >
        <CloseRoundedIcon sx={{ fontSize: 15 }} />
      </IconButton>
    </Box>
  );
};

const Tabs = () => {
  const [tabs, addNewTab] = useTabsStore(
    useShallow((state) => [state.tabs, state.addNewTab])
  );

  return (
    <Stack
      direction="row"
      sx={{
        bgcolor: "background.paper",
        mt: 2,
        px: 1,
      }}
      alignItems="center"
    >
      <ActionButton
        sx={{ bgcolor: "grey.300", height: 30, width: 30, mx: 1 }}
        icon={<KeyboardArrowDownRoundedIcon />}
      />
      {tabs.map((tab) => {
        return <Tab key={tab.id} tab={tab} />;
      })}
      <ActionButton
        onClick={addNewTab}
        sx={{ bgcolor: "grey.300", height: 30, width: 30, mx: 1 }}
        icon={<AddRoundedIcon sx={{ fontSize: 15 }} />}
      />
    </Stack>
  );
};

export default Tabs;
