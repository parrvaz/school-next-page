import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/router";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GuestPanelLayout = ({ children }: Props) => {
  const router = useRouter();
  const { user, error, loading } = useAuth();

  if (user) {
    router.push("/panel");
    return <></>;
  }

  return <div className="w-full text-2x1 ">{children}</div>;
};

export default GuestPanelLayout;
