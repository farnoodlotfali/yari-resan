import ActionButton from "@/Components/ActionButton";
import PanelLayout from "@/Components/layout/PanelLayout";
import {
  Avatar,
  Box,
  Card,
  Grid,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useForm } from "react-hook-form";
import { useInsured } from "@/hooks/queries/useInsured";
import Image from "next/image";
import { PAGES_URL } from "@/constants/pagesUrl";
import { useRouter } from "next/router";
import ItemData from "@/Components/ItemData";

const Home = () => {
  const router = useRouter();

  const { handleSubmit, reset, register } = useForm({
    values: {
      ...router.query,
    },
  });
  const { data, isLoading, isFetching } = useInsured(
    {
      enabled: router.isReady,
      staleTime: 2 * 60 * 1000,
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
    <Stack
      bgcolor="background.paper"
      minHeight="inherit"
      borderRadius={3}
      px={2}
      py={4}
    >
      <Grid container spacing={2} justifyContent="center">
        {/* filtering */}
        <Grid item xs={12} md={6} pb={{ md: 12, xs: 0 }}>
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

        {isLoading || isFetching ? (
          // loading
          <Grid item xs={12} pb={{ md: 12, xs: 0 }}>
            <Stack alignItems="center">
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
        ) : (
          // load data
          data?.data.map((insure) => {
            return (
              <Grid key={insure.id} item xs={12}>
                <Card
                  sx={{
                    bgcolor: "grey.100",
                    borderRadius: 2,
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "grey.300",
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    gap: 2,
                    boxShadow: 0,
                    ":hover": {
                      boxShadow: 1,
                    },
                  }}
                >
                  <Avatar
                    sx={{ width: 80, height: 80 }}
                    alt="man"
                    src="/assets/images/man.jpg"
                  />
                  <Stack>
                    <Typography fontWeight={600}>
                      بیمه شده سرپرست:{" "}
                      {insure.attributes.firstName +
                        " " +
                        insure.attributes.lastName}{" "}
                    </Typography>
                    <ItemData
                      title="کد ملی"
                      value={insure.attributes.firstName}
                    />
                    <ItemData title="نسبت" value={insure.attributes.relation} />
                    <ItemData title="آدرس" value={insure.attributes.address} />
                  </Stack>
                </Card>
              </Grid>
            );
          })
        )}
      </Grid>
    </Stack>
  );
};

Home.PageLayout = PanelLayout;

export default Home;
