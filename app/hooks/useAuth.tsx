import useSWR from "swr";
import callApi from "../components/general/ApiCalls/callApi";
import Cookies from "universal-cookie";
import Router from "next/router";

const fetcher = async (url: string) => {
  const cookie = new Cookies();

  if (!cookie.get("school_token")) {
    // Router.push("/auth/login");
    return;
  }

  const response = callApi().get("/user", {
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + cookie.get("school_token"),
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
