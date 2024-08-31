import { NextPageWithLayout } from "@/pages/_app";
import Panel from "..";
import UserPanelLayout from "@/app/components/layouts/userPanelLayout";
import Table from "@/app/components/shared/table/table";

const ClassShow: NextPageWithLayout = () => {
  const data = [
    { id: 1, name: "علی رضایی", age: 17, grade: "یازدهم" },
    { id: 2, name: "زهرا محمدی", age: 16, grade: "دهم" },
    { id: 3, name: "حسین احمدی", age: 18, grade: "دوازدهم" },
  ];

  const columns = [
    { header: "شناسه", accessor: "id" },
    { header: "نام", accessor: "name" },
    { header: "سن", accessor: "age" },
    { header: "پایه", accessor: "grade" },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">لیست دانش‌آموزان</h1>
      <Table data={data} columns={columns} />
    </>
  );
};

ClassShow.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;
export default ClassShow;
