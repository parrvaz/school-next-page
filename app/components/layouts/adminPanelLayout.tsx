import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/router";
import { ReactNode } from "react";

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
    <div className="min-h-screen bg-gray-50  w-full text-2x1 ">{children}</div>
  );
};

export default AdminPanelLayout;
