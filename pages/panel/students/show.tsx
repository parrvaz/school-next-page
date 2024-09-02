import { NextPageWithLayout } from "@/pages/_app";
import Panel from "..";
import UserPanelLayout from "@/app/components/layouts/userPanelLayout";
import Table from "@/app/components/shared/table/table";
import callApi from "@/app/components/general/ApiCalls/callApi";
import Cookies from "universal-cookie";
import useSWR from "swr";
import { SWRGetCall } from "@/app/hooks/swrGetCall";

const ClassShow: NextPageWithLayout = () => {
  const { data, paginate, error, isLoading } = SWRGetCall("/students/show");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const onPageChangeHandler = (page: number) =>
    SWRGetCall("/students/show", page);
  console.log(paginate);

  const columns = [
    { header: "نام", accessor: "name" },
    { header: "کلاس", accessor: "classroom" },
    { header: "کد ملی", accessor: "nationalId" },
    { header: "تلفن", accessor: "phone" },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">لیست دانش آموزان</h1>
      <Table
        data={data}
        columns={columns}
        paginate={paginate}
        onPaginateHandler={onPageChangeHandler}
      />
    </>
  );
};

ClassShow.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;
export default ClassShow;
