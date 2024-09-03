import { NextPageWithLayout } from "@/pages/_app";
import UserPanelLayout from "@/app/components/layouts/userPanelLayout";
import Table from "@/app/components/shared/table/table";
import { SWRGetCall } from "@/app/hooks/swrGetCall";
import Pagination from "@/app/components/shared/table/pagination";
import { useState } from "react";

const ExamShow: NextPageWithLayout = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, paginate, error, isLoading } = SWRGetCall(
    "/allExams/show",
    currentPage
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const columns = [
    { header: "عنوان", accessor: "title" },
    { header: "نوع", accessor: "type" },
    { header: "کلاس", accessor: "classroom" },
    { header: "تاریخ", accessor: "date" },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">لیست امتحانات</h1>
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

ExamShow.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;
export default ExamShow;
