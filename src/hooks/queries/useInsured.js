import { fetcher } from "@/axiosApi/axios";
import { API_URL } from "@/constants/api";
import { QueryKeys } from "@/constants/queryKeys";
import { renderQueryKey } from "@/utility/utils";
import { useQuery } from "@tanstack/react-query";

export const useInsured = (options, filters = {}) => {
  let q = "";
  if (!!filters?.filters) {
    q = `?filters[nationalCode][%24contains]=${filters?.filters}`;
  }
  const insureds = useQuery({
    queryKey: renderQueryKey([QueryKeys.Insured.insured, filters]),
    queryFn: () => fetcher.get(`${API_URL.Insured.insured}${q}`),
    keepPreviousData: true,
    ...options,
  });
  return insureds;
};
