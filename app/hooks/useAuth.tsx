import useSWR from "swr";
import callApi from "../components/general/ApiCalls/callApi";
import Cookies from "universal-cookie";
import Router from "next/router";

const fetcher = async (url: string) => {
  const cookie = new Cookies();

  if (!cookie.get("school_token")) {
    Router.push("/auth/login");
    return;
  }

  console.log(cookie.get("school_token"));

  try {
    const response = callApi().get("/user", {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + cookie.get("school_token"),
      },
    });
    return response;
  } catch (error) {
    Router.push("/auth/login");
    return;
  }
};
export default function useAuth() {
  const { data, error } = useSWR("http://localhost:8000/api/user", fetcher);

  return {
    user: data?.data?.data,
    error,
    loading: !error && !data,
  };
}
