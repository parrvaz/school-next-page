import { NextPageWithLayout } from "@/pages/_app";
import UserPanelLayout from "@/app/components/layouts/userPanelLayout";
import Table from "@/app/components/shared/table/table";
import { SWRGetCall } from "@/app/hooks/swrGetCall";
import Pagination from "@/app/components/shared/table/pagination";
import { useState } from "react";

const ClassShow: NextPageWithLayout = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, paginate, error, isLoading } = SWRGetCall(
    "/teachers/show",
    currentPage
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const columns = [
    { header: "نام", accessor: "name" },
    { header: "کد ملی", accessor: "nationalId" },
    { header: "مدرک", accessor: "degree" },
    { header: "کد پرسنلی", accessor: "personalId" },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">لیست معلم ها</h1>
      <Table data={data} columns={columns} />
      {paginate && (
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
