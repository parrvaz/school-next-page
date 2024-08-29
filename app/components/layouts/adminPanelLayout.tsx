import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import Sidebar from "../shared/sidebar/sidbar";
import PanelLayout from "./panelLayout";

interface Props {
  children: ReactNode;
}

const AdminPanelLayout = ({ children }: Props) => {
  const router = useRouter();
  const { user, error, loading } = useAuth();
  if (loading) return <div>Loading...</div>;

  if (error) {
    //show error
    router.push("/auth/login");
    return <></>;
  }

  if (!user?.is_admin) {
    router.push("/");
    return <></>;
  }
  return (
    <>
      <PanelLayout>{children}</PanelLayout>
    </>
  );
};

export default AdminPanelLayout;
