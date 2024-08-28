import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/router";
import { ReactNode } from "react";

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
  }

  console.log("user", user);
  return <div className="w-full text-2x1">{children}</div>;
};

export default UserPanelLayout;
