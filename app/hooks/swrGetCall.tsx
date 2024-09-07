import useSWR from "swr";
import Cookies from "universal-cookie";
import callApi from "../components/general/ApiCalls/callApi";

export async function fetcherMethode(props: any) {
  const cookie = new Cookies();
  const pagestr = props.paginate
    ? `?page=${props.page ?? 1}&perPage=${props.per_page ?? 15}`
    : "";

  let response = await callApi().get(`${props.url}${pagestr}`, {
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + cookie.get("shool_token"),
      grade: "bMIuudAP8DCUtHvuP22sy4523DPodj",
    },
  });
  return await response;
}

export function SWRGetCall(
  url: string,
  paginate: boolean = false,
  page: number = 1
) {
  const { data, error } = useSWR({ url, paginate, page }, fetcherMethode);

  return {
    data: data?.data?.data || null,
    paginate: data?.data?.meta || null,
    error: error || null,
    isLoading: !data && !error,
  };
}
