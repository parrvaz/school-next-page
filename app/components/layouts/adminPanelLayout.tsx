import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import Sidebar from "../shared/sidebar/sidbar";
import PanelLayout from "./panelLayout";
import { ChartBarIcon, HomeIcon, UsersIcon } from "@heroicons/react/24/outline";

interface Props {
  children: ReactNode;
}

const sidebarData = {
  data: [
    {
      name: "dashboard",
      lable: "داشبورد",
      url: "/admin",
      icon: <HomeIcon className="h-6 w-6 ml-2 text-gray-600" />,
      hasSub: false,
    },
    {
      name: "users",
      lable: "کاربران",
      icon: <UsersIcon className="h-6 w-6 ml-2 text-gray-600" />,
      hasSub: true,
      subList: [
        {
          name: "userList",
          lable: "لیست کاربران",
          url: "/admin/users/userList",
        },
        {
          name: "gradeList",
          lable: "لیست پایه ها",
          url: "/admin/users/gradeList",
        },
      ],
    },
    {
      name: "reports",
      lable: "گزارشات",
      icon: <ChartBarIcon className="h-6 w-6 ml-2 text-gray-600" />,
      hasSub: true,
      subList: [
        {
          name: "logs",
          lable: "خطاها",
          url: "/admin/reports/logs",
        },
        {
          name: "registers",
          lable: "ثبت نام ها",
          url: "/admin/reports/registers",
        },
      ],
    },
  ],
};

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
      <PanelLayout sidebarData={sidebarData}>{children}</PanelLayout>
    </>
  );
};

export default AdminPanelLayout;
