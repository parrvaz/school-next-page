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
      <span>username: </span>
      <h2>{user?.name}</h2>

      <button onClick={logoutHandler}>logout</button>
    </>
  );
};

export default UserInfo;
