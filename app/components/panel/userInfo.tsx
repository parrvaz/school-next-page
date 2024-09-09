import useAuth from "@/app/hooks/useAuth";
import { removeLoginTokne } from "../general/auth";
import Router from "next/router";

const UserInfo = () => {
  const { user } = useAuth();

  const logoutHandler = async () => {
    await removeLoginTokne();
    await Router.push("/");
  };
  return (
    <>
      {/* <span>username: </span>
      <h2>{user?.name}</h2> */}

      <button className="btn btn-warning btn-sm" onClick={logoutHandler}>
        خروج از حساب کاربری
      </button>
    </>
  );
};

export default UserInfo;
