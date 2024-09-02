import { NextPageWithLayout } from "@/pages/_app";
import Panel from "..";
import UserPanelLayout from "@/app/components/layouts/userPanelLayout";
import Table from "@/app/components/shared/table/table";
import callApi from "@/app/components/general/ApiCalls/callApi";
import Cookies from "universal-cookie";
import useSWR from "swr";
import useAuth from "@/app/hooks/useAuth";
import { SWRGetCall } from "@/app/hooks/swrGetCall";

const ClassShow: NextPageWithLayout = () => {
  const { data, paginate, error, isLoading } = SWRGetCall("/classrooms/show");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);

  const columns = [
    { header: "نام", accessor: "title" },
    { header: "شماره", accessor: "number" },
    { header: "رشته", accessor: "field" },
    { header: "طبقه", accessor: "floor" },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">لیست کلاس ها</h1>
      <Table data={data} columns={columns} />
    </>
  );
};

ClassShow.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;
export default ClassShow;
