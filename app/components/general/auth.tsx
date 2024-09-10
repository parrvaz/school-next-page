import Cookies from "universal-cookie";

const storeLoginTokne = (
  token: string,
  user: { role_id: string; role: string; name: string }
) => {
  const cookies = new Cookies(null, {
    path: "/",
    // domain: ".semimgroup.ir",
    maxAge: 10 * 24 * 3600,
  });
  cookies.set("school_token", token);

  localStorage.setItem("role", user.role);
  localStorage.setItem("role_id", user.role_id);
  localStorage.setItem("role_name", user.name);
};

const removeLoginTokne = async () => {
  let cookie = new Cookies();
  cookie.remove("school_token", { path: "/" });
  localStorage.removeItem("role");
  localStorage.removeItem("role_id");
  localStorage.removeItem("role_name");
};

export { storeLoginTokne, removeLoginTokne };
