import Cookies from "universal-cookie";

const storeLoginTokne = (token: string, days: number = 10) => {
  const cookies = new Cookies(null, {
    path: "/",
    // domain: ".semimgroup.ir",
    maxAge: days * 24 * 3600,
  });
  cookies.set("school_token", token);
};

const removeLoginTokne = async () => {
  console.log("heer");

  let cookie = new Cookies();
  cookie.remove("school_token");
};

export { storeLoginTokne, removeLoginTokne };
