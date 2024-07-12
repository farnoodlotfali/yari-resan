import { fetcher } from "@/axiosApi/axios";
import { API_URL } from "@/constants/api";
import { QueryKeys } from "@/constants/queryKeys";
import { renderQueryKey } from "@/utility/utils";
import { useQuery } from "@tanstack/react-query";

export const useInsuredPerson = (id, options) => {
  const insured = useQuery({
    queryKey: renderQueryKey([QueryKeys.Insured.insured, id]),
    queryFn: () =>
      fetcher.get(`${API_URL.Insured.insured}/${id}`).then((res) => res.data),
    keepPreviousData: true,
    ...options,
  });
  return insured;
};
