import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import PanelLayout from "./panelLayout";
import { SidebarProps } from "@/app/contracts/auth";

interface Props {
  children: ReactNode;
}

const UserPanelLayout = ({ children }: Props) => {
  const router = useRouter();
  const { user, error, loading } = useAuth();

  const sidebarData = { data: [] };
  if (loading) return <div>Loading...</div>;

  if (error) {
    //show error
    router.push("/auth/login");
    return <></>;
  }

  console.log("user", user);
  return (
    <>
      <PanelLayout sidebarData={sidebarData}>{children}</PanelLayout>
    </>
  );
};

export default UserPanelLayout;
