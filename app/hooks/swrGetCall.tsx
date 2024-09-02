import useSWR from "swr";
import Cookies from "universal-cookie";
import callApi from "../components/general/ApiCalls/callApi";

export async function fetcherMethode(url: string, page = 1, per_page = 15) {
  const cookie = new Cookies();

  let response = await callApi().get(
    `${url}?page=${page}&perPage=${per_page}`,
    {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + cookie.get("shool_token"),
        grade: "bMIuudAP8DCUtHvuP22sy4523DPodj",
      },
    }
  );
  return await response;
}

export function SWRGetCall(url: string) {
  const { data, error } = useSWR(url, fetcherMethode);

  return {
    data: data?.data?.data || null,
    paginate: data?.data?.meta || null,
    error: error || null,
    isLoading: !data && !error,
  };
}
