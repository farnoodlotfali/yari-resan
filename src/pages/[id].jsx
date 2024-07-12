import { fetcher } from "@/axiosApi/axios";
import ItemData from "@/Components/ItemData";
import PanelLayout from "@/Components/layout/PanelLayout";
import AppLoading from "@/Components/loadings/AppLoading";
import { API_URL } from "@/constants/api";
import { QueryKeys } from "@/constants/queryKeys";
import { useInsuredPerson } from "@/hooks/queries/useInsuredPerson";
import { convertGrToJa, renderQueryKey } from "@/utility/utils";
import {
  Avatar,
  Breadcrumbs,
  Card,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useRouter } from "next/router";
import NavigateBeforeRoundedIcon from "@mui/icons-material/NavigateBeforeRounded";

const InsuredInfo = (props) => {
  return (
    <Grid item md={6} xs={12}>
      <ItemData {...props} />
    </Grid>
  );
};

const User = () => {
  const params = useParams();
  const router = useRouter();
  const { data: insure, isLoading } = useInsuredPerson(params?.id, {
    enabled: router.isReady && !!params?.id,
  });

  if (isLoading) return <AppLoading />;

  return (
    <Stack p={1} spacing={2}>
      <Card
        sx={{
          borderRadius: 2,
          p: 2,
        }}
        elevation={0}
      >
        <Breadcrumbs
          sx={{
            fontWeight: 700,
            color: "text.primary",
          }}
          separator={<NavigateBeforeRoundedIcon fontSize="small" />}
        >
          <Typography key="1" fontWeight="inherit">
            صدور بیمه‌نامه
          </Typography>
          <Typography key="2" fontWeight="inherit">
            بیمه‌شده
          </Typography>
          <Typography key="3" color="success.600" fontWeight="inherit">
            {insure.attributes.firstName + " " + insure.attributes.lastName}
          </Typography>
        </Breadcrumbs>
      </Card>
      <Card
        sx={{
          borderRadius: 2,
          p: 2,
        }}
        elevation={0}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar
            sx={{ width: 80, height: 80 }}
            alt="man"
            src="/assets/images/man.jpg"
          />
          <Stack>
            <Typography fontWeight={600}>
              بیمه شده سرپرست:{" "}
              {insure.attributes.firstName + " " + insure.attributes.lastName}{" "}
            </Typography>
            <ItemData title="کد ملی" value={insure.attributes.nationalCode} />
            <ItemData title="نسبت" value={insure.attributes.relation} />
            <ItemData title="آدرس" value={insure.attributes.address} />
          </Stack>
        </Stack>
        <Divider sx={{ my: 3 }} />
        <Grid container spacing={2}>
          <InsuredInfo
            title="نام و نام‌خانوادکی"
            value={
              insure.attributes.firstName + " " + insure.attributes.lastName
            }
          />
          <InsuredInfo
            title="وضعیت"
            value={insure.attributes.state ? "فعال" : "غیر فعال"}
          />
          <InsuredInfo title="وضعیت سرپرستی" value={"تحت تکفل"} />
          <InsuredInfo title="مکان" value={insure.attributes.place} />
          <InsuredInfo title="شماره تماس" value={insure.attributes.phone} />
          <InsuredInfo title="کد ملی" value={insure.attributes.nationalCode} />
          <InsuredInfo title="کد" value={insure.attributes.code} />
          <InsuredInfo
            title="کد پرسنلی"
            value={insure.attributes.personalCode}
          />
          <InsuredInfo
            title="تاریخ شروع پوشش"
            value={convertGrToJa(insure.attributes.CoverageStartDate)}
          />
          <InsuredInfo
            title="تاریخ پایان پوشش"
            value={convertGrToJa(insure.attributes.CoverageEndDate)}
          />
        </Grid>
      </Card>
    </Stack>
  );
};
User.PageLayout = PanelLayout;

export const getServerSideProps = async (ctx) => {
  const { id } = ctx.params;

  const queryClient = new QueryClient();
  let status = 200;

  await queryClient.prefetchQuery({
    queryKey: renderQueryKey([QueryKeys.Insured.insured, id]),
    queryFn: () =>
      fetcher
        .get(`${API_URL.Insured.insured}/${id}`)
        .then((res) => res.data)
        .catch((e) => {
          status = e.response.status;
        }),
  });

  if (status === 404) {
    return {
      notFound: true,
      props: {},
    };
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default User;
