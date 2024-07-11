import ActionButton from "@/Components/ActionButton";
import PanelLayout from "@/Components/layout/PanelLayout";
import { Box, Grid, OutlinedInput, Stack, Typography } from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useForm } from "react-hook-form";
import { useInsured } from "@/hooks/queries/useInsured";
import Image from "next/image";
import { useRouter } from "next/router";
import { PAGES_URL } from "@/constants/pagesUrl";

const Home = () => {
  const router = useRouter();

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
    register,
  } = useForm({
    values: {
      ...router.query,
    },
  });

  const { data } = useInsured(
    {
      enabled: router.isReady,
    },
    {
      ...router.query,
    }
  );

  // handle on submit
  const onSubmit = (data) => {
    if (data?.filters !== "") {
      router.push(PAGES_URL.Home.home + `?filters=${data?.filters}`);
    } else {
      router.push(PAGES_URL.Home.home).then(() => reset());
    }
  };

  return (
    <Stack bgcolor="background.paper" borderRadius={3} px={2} py={4}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box component="form" onSubmit={handleSubmit(onSubmit)}>
            <OutlinedInput
              fullWidth
              {...register("filters")}
              endAdornment={
                <ActionButton
                  type="submit"
                  bgcolor="secondary.100"
                  icon={
                    <SearchRoundedIcon
                      color="secondary"
                      sx={{ fontSize: 24 }}
                    />
                  }
                  sx={{
                    borderRadius: 3,
                  }}
                />
              }
              placeholder="جستجو کن ..."
            />
          </Box>
        </Grid>

        <Grid item xs={12}>
          <Stack alignItems="center" py={{ md: 12, xs: 0 }}>
            <Box position="relative" width="100%" height={200} mb={4}>
              <Image src="/assets/images/empty.svg" fill alt="empty" />
            </Box>
            <Typography textAlign="center">
              هیچ بیمه‌ شده‌ای را انتخاب نکرده‌اید
            </Typography>
            <Typography
              fontSize={14}
              color="grey.500"
              textAlign="center"
              mt={0.5}
            >
              برای نمایش بیمه شدگان یکی را انتخاب کنید تا جزیئات آن برای شما
              نمایش پیدا کند
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

Home.PageLayout = PanelLayout;

export default Home;
