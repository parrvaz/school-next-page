import { NextPageWithLayout } from "@/pages/_app";
import Panel from "..";
import UserPanelLayout from "@/app/components/layouts/userPanelLayout";
import Table from "@/app/components/shared/table/table";
import callApi from "@/app/components/general/callApi";
import Cookies from "universal-cookie";
import useSWR from "swr";
import { GetDataApi } from "@/app/components/general/getData";

const ClassShow: NextPageWithLayout = () => {
  const { data, error } = useSWR("/classrooms/show", GetDataApi);

  const classrooms = data?.data?.data;

  console.log(classrooms);

  const columns = [
    { header: "شناسه", accessor: "id" },
    { header: "نام", accessor: "title" },
    { header: "شماره", accessor: "number" },
    { header: "رشته", accessor: "field" },
    { header: "طبقه", accessor: "floor" },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">لیست دانش‌آموزان</h1>
      <Table data={classrooms} columns={columns} />
    </>
  );
};

ClassShow.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;
export default ClassShow;
