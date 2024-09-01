import { NextPageWithLayout } from "@/pages/_app";
import Panel from "..";
import UserPanelLayout from "@/app/components/layouts/userPanelLayout";
import Table from "@/app/components/shared/table/table";
import callApi from "@/app/components/general/callApi";
import Cookies from "universal-cookie";
import useSWR from "swr";
import { GetDataApi } from "@/app/components/general/getData";

const ClassShow: NextPageWithLayout = () => {
  const { data, error } = useSWR({ url: "/students/show" }, GetDataApi);

  if (!data && !error) return <div>Loading...</div>;
  const students = data?.data;

  const columns = [
    { header: "نام", accessor: "name" },
    { header: "کلاس", accessor: "classroom" },
    { header: "کد ملی", accessor: "nationalId" },
    { header: "تلفن", accessor: "phone" },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">لیست دانش آموزان</h1>
      <Table data={students} columns={columns} />
    </>
  );
};

ClassShow.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;
export default ClassShow;
