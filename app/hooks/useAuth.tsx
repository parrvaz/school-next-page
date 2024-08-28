import useSWR from "swr";
import Cookies from "universal-cookie";
import callApi from "../components/general/callApi";

const useAuth = () => {
  const cookie = new Cookies();

  const { data, error } = useSWR("user_me", () => {
    callApi().get("/user", {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + cookie.get("shool_token"),
      },
    });
  });

  console.log("befor data");
  console.log(data, error);
  return { user: data, error, loading: !data && !error };
};

export default useAuth;
