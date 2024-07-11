import { Box, Card, Paper, Stack } from "@mui/material";
import { useState } from "react";

const BrowserTabs = () => {
  const [first, setfirst] = useState(0);

  const handleClick = (id) => {
    setfirst(id);
  };
  return (
    <>
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
      <Paper
        sx={{
          bgcolor: "grey.300",
          p: 2,
          borderRadius: 3,
        }}
        elevation={0}
      >
        <Card
          sx={{
            borderRadius: 3,
            p: 2,
            minHeight: "90dvh",
          }}
          elevation={0}
        ></Card>
      </Paper>
    </>
  );
};

const X = ({ active, id, handleClick }) => {
  return (
    <Box
      sx={
        {
          // mx: 1,
        }
      }
    >
      <Box
        sx={{
          bgcolor: active ? "grey.300" : "white",
          p: 1,
          width: 230,
          borderTopLeftRadius: (theme) => theme.shape.borderRadius * 2,
          borderTopRightRadius: (theme) => theme.shape.borderRadius * 2,
          position: "relative",
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
        1212
      </Box>
    </Box>
  );
};

export default BrowserTabs;

/***
 * 
 * 
 *   <div className="chrome-tab-background">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <symbol id="chrome-tab-geometry-left" viewBox="0 0 214 36">
                <path d="M17 0h197v36H0v-2c4.5 0 9-3.5 9-8V8c0-4.5 3.5-8 8-8z" />
              </symbol>
              <symbol id="chrome-tab-geometry-right" viewBox="0 0 214 36">
                <use xlinkHref="#chrome-tab-geometry-left" />
              </symbol>
              <clipPath id="crop">
                <rect className="mask" width="100%" height="100%" x="0" />
              </clipPath>
            </defs>
            <svg width="52%" height="100%">
              <use
                xlinkHref="#chrome-tab-geometry-left"
                width="214"
                height="36"
                className="chrome-tab-geometry"
              />
            </svg>
            <g transform="scale(-1, 1)">
              <svg width="52%" height="100%" x="-100%" y="0">
                <use
                  xlinkHref="#chrome-tab-geometry-right"
                  width="214"
                  height="36"
                  className="chrome-tab-geometry"
                />
              </svg>
            </g>
          </svg>
        </div>
 */
