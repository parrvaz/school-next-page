import Cookies from "universal-cookie";

const storeLoginTokne = (token: string, days: number = 10) => {
  const cookies = new Cookies(null, {
    path: "/",
    // domain: ".semimgroup.ir",
    maxAge: days * 24 * 3600,
  });
  cookies.set("shool_token", token);
};

const removeLoginTokne = () => {};

export { storeLoginTokne, removeLoginTokne };
