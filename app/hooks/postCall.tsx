import Cookies from "universal-cookie";
import callApi from "../components/general/ApiCalls/callApi";
import SuccessNotification from "../components/shared/notifications/successNotif";

export async function PostCall(
  url: string,
  values: any,
  showNotification: () => void = () => {}
) {
  const cookie = new Cookies();
  const headers = {
    Authorization: "Bearer " + cookie.get("school_token"),
    grade: "bMIuudAP8DCUtHvuP22sy4523DPodj",
  };

  const res = await callApi(headers).post(url, {
    ...values,
  });
  if (res.status === 200) {
    showNotification();
    return res;
  }
}
