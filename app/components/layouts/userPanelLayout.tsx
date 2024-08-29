import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import PanelLayout from "./panelLayout";

interface Props {
  children: ReactNode;
}

const UserPanelLayout = ({ children }: Props) => {
  const router = useRouter();
  const { user, error, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (error) {
    //show error
    router.push("/auth/login");
    return <></>;
  }

  console.log("user", user);
  return (
    <>
      <PanelLayout>{children}</PanelLayout>
    </>
  );
};

export default UserPanelLayout;
