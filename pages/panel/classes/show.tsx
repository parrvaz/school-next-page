import { NextPageWithLayout } from "@/pages/_app";
import Panel from "..";
import UserPanelLayout from "@/app/components/layouts/userPanelLayout";
import Table from "@/app/components/shared/table/table";
import callApi from "@/app/components/general/ApiCalls/callApi";
import Cookies from "universal-cookie";
import useSWR from "swr";
import useAuth from "@/app/hooks/useAuth";
import { SWRGetCall } from "@/app/hooks/swrGetCall";
import Pagination from "@/app/components/shared/table/pagination";
import { useState } from "react";

const ClassShow: NextPageWithLayout = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, paginate, error, isLoading } = SWRGetCall(
    "/classrooms/show",
    currentPage
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  console.log(data);

  const columns = [
    { header: "نام", accessor: "title" },
    { header: "شماره", accessor: "number" },
    { header: "رشته", accessor: "field" },
    { header: "طبقه", accessor: "floor" },
  ];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">لیست کلاس ها</h1>
      <Table data={data} columns={columns} />
      {paginate && paginate?.last_page > 1 && (
        <Pagination
          currentPage={paginate?.current_page}
          totalPages={paginate?.last_page}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

ClassShow.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;
export default ClassShow;
