import useAuth from "@/app/hooks/useAuth";

const UserInfo = () => {
  const { user } = useAuth();
  return (
    <>
      <span>username: </span>
      <h2>{user?.name}</h2>
    </>
  );
};

export default UserInfo;
