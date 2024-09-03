import { NextPageWithLayout } from "@/pages/_app";
import UserPanelLayout from "@/app/components/layouts/userPanelLayout";
import Table from "@/app/components/shared/table/table";
import { SWRGetCall } from "@/app/hooks/swrGetCall";
import Pagination from "@/app/components/shared/table/pagination";
import { useState } from "react";

const CourseShow: NextPageWithLayout = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const { data, paginate, error, isLoading } = SWRGetCall(
    "/courses/show",
    currentPage
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const columns = [
    { header: "نام", accessor: "name" },
    { header: "ضریب", accessor: "factor" },
    { header: "نوع", accessor: "type" },
    { header: "تعداد درس ها", accessor: "contentCount" },
  ];

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">لیست درس ها</h1>
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

CourseShow.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;
export default CourseShow;
