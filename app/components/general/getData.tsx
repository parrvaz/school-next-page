import { error } from "console";
import callApi from "./callApi";
import Cookies from "universal-cookie";

export async function GetDataApi({ url = "", page = 1, per_page = 15 }) {
  const cookie = new Cookies();

  let res = await callApi().get(`${url}?page=${page}&perPage=${per_page}`, {
    headers: {
      Accept: "application/json",
      Authorization: "Bearer " + cookie.get("shool_token"),
      grade: "bMIuudAP8DCUtHvuP22sy4523DPodj",
    },
  });

  return { data: res?.data, error: undefined };
}
