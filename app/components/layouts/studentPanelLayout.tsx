import useAuth from "@/app/hooks/useAuth";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import PanelLayout from "./panelLayout";
import { SidebarProps } from "@/app/contracts/auth";
import {
  BookOpenIcon,
  BuildingOfficeIcon,
  CalendarDateRangeIcon,
  ChartBarIcon,
  ChatBubbleBottomCenterIcon,
  ClipboardDocumentListIcon,
  DocumentCheckIcon,
  HomeIcon,
  PencilIcon,
  UserCircleIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

interface Props {
  children: ReactNode;
}

const sidebarData = {
  data: [
    {
      name: "dashboard",
      lable: "داشبورد",
      url: "/panel",
      icon: <HomeIcon className="h-6 w-6 ml-2 text-gray-600" />,
      hasSub: false,
    },
    {
      name: "allExamList",
      lable: "لیست امتحانات",
      url: "/panel/exams/show",
      icon: (
        <ClipboardDocumentListIcon className="h-6 w-6 ml-2 text-gray-600" />
      ),
      hasSub: false,
    },

    {
      name: "/panel/plans",
      lable: "برنامه مطالعاتی",
      icon: <CalendarDateRangeIcon className="h-6 w-6 ml-2 text-gray-600" />,
      hasSub: true,
      subList: [
        {
          name: "/panel/plans/show",
          lable: "لیست برنامه مطالعاتی",
          url: "/panel/classes/show",
        },
        {
          name: "/panel/plans/store",
          lable: "ثبت برنامه مطالعاتی جدید",
          url: "/panel/classes/store",
        },
        {
          name: "/panel/plans/students/show",
          lable: "برنامه مطالعاتی دانش آموزان",
          url: "/panel/classes/show",
        },
        {
          name: "/panel/plans/students/store",
          lable: "ثبت برنامه دانش آموز",
          url: "/panel/classes/store",
        },
      ],
    },
    {
      name: "reports",
      lable: "گزارشات",
      // url: "/panel/reports",
      icon: <ChartBarIcon className="h-6 w-6 ml-2 text-gray-600" />,
      hasSub: true,
      subList: [
        {
          name: "/panel/reports/examCount",
          lable: "فراوانی امتحانات",
          url: "/panel/reports/examCount",
        },
        {
          name: "/panel/reports/examProgress",
          lable: "روند امتحانات کتبی",
          url: "/panel/reports/examProgress",
        },
        {
          name: "/panel/reports/classScoreProgress",
          lable: "روند امتحانات شفاهی",
          url: "/panel/reports/classScoreProgress",
        },
      ],
    },
  ],
};

const StudentPanelLayout = ({ children }: Props) => {
  const router = useRouter();
  const { user, error, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (error) {
    //show error
    router.push("/auth/login");
    return <></>;
  }

  return (
    <>
      <PanelLayout sidebarData={sidebarData}>{children}</PanelLayout>
    </>
  );
};

export default StudentPanelLayout;
