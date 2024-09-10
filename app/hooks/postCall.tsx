import Cookies from "universal-cookie";
import callApi from "../components/general/ApiCalls/callApi";
import SuccessNotification from "../components/shared/notifications/successNotif";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export async function PostCall(url: string, values: any) {
  console.log("here");

  const cookie = new Cookies();
  const headers = {
    Authorization: "Bearer " + cookie.get("school_token"),
    grade: "bMIuudAP8DCUtHvuP22sy4523DPodj",
  };

  const res = await callApi(headers).post(url, {
    ...values,
  });

  if (res.status === 200 || res.status === 201) {
    toast.success("عملیات با موفقیت انجام شد");
    return res;
  }
}
