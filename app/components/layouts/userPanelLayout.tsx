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
      name: "/panel/exams/store",
      url: "/panel/exams/store",
      lable: "ثبت امتحان کتبی",
      icon: <PencilIcon className="h-6 w-6 ml-2 text-gray-600" />,
      hasSub: false,
    },
    {
      url: "/panel/exams/classScoreStore",
      name: "/panel/classScores/store",
      lable: "ثبت پرسش شفاهی",
      icon: (
        <ChatBubbleBottomCenterIcon className="h-6 w-6 ml-2 text-gray-600" />
      ),
      hasSub: false,
    },
    {
      name: "/panel/tests/store",
      lable: "ثبت آزمون تستی",
      icon: <DocumentCheckIcon className="h-6 w-6 ml-2 text-gray-600" />,
      hasSub: false,
    },
    {
      name: "/panel/classes",
      lable: "کلاس ها",
      icon: <BuildingOfficeIcon className="h-6 w-6 ml-2 text-gray-600" />,
      hasSub: true,
      subList: [
        {
          name: "/panel/classes/show",
          lable: "لیست کلاس ها",
          url: "/panel/classes/show",
        },
        {
          name: "/panel/classes/store",
          lable: "ثبت کلاس جدید",
          url: "/panel/classes/store",
        },
      ],
    },
    {
      name: "/panel/students",
      lable: "دانش آموزان",
      icon: <UserGroupIcon className="h-6 w-6 ml-2 text-gray-600" />,
      hasSub: true,
      subList: [
        {
          name: "/panel/students/show",
          lable: "لیست دانش آموزان",
          url: "/panel/students/show",
        },
        {
          name: "/panel/students/store",
          lable: "ثبت دانش آموز جدید",
          url: "/panel/students/store",
        },
      ],
    },
    {
      name: "/panel/teachers",
      lable: "معلم ها",
      icon: <UserCircleIcon className="h-6 w-6 ml-2 text-gray-600" />,
      hasSub: true,
      subList: [
        {
          name: "/panel/teachers/show",
          lable: "لیست معلمان",
          url: "/panel/teachers/show",
        },
        {
          name: "/panel/teachers/store",
          lable: "ثبت معلم جدید",
          url: "/panel/teachers/store",
        },
      ],
    },
    {
      name: "/panel/courses",
      lable: "درس ها",
      icon: <BookOpenIcon className="h-6 w-6 ml-2 text-gray-600" />,
      hasSub: true,
      subList: [
        {
          name: "courseAssigne",
          lable: "تخصیص درس",
          url: "/panel/courseAssigne",
        },
        {
          name: "/panel/courses/show",
          lable: "لیست درس ها",
          url: "/panel/courses/show",
        },
      ],
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

const UserPanelLayout = ({ children }: Props) => {
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

export default UserPanelLayout;
