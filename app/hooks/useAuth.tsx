import useSWR from "swr";
import callApi from "../components/general/callApi";
import Cookies from "universal-cookie";

const fetcher = async (url: string) => {
  const cookie = new Cookies();

  const response = callApi().get("/user", {
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + cookie.get("shool_token"),
    },
  });

  return response;
};
export default function useAuth() {
  const { data, error } = useSWR("http://localhost:8000/api/user", fetcher);

  return {
    user: data?.data?.data,
    error,
    loading: !error && !data,
  };
}
