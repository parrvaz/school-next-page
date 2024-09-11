import { NextPageWithLayout } from "@/pages/_app";
import UserPanelLayout from "@/app/components/layouts/userPanelLayout";
import Table from "@/app/components/shared/table/table";
import { SWRGetCall } from "@/app/hooks/swrGetCall";
import Pagination from "@/app/components/shared/table/pagination";
import { useState } from "react";
import { TrashIcon } from "@heroicons/react/16/solid";
import { GrDocumentDownload, GrDocumentUpload } from "react-icons/gr";
import ExcelUpload from "@/app/components/shared/table/excelUpload";

const StudentShow: NextPageWithLayout = () => {
  const [showUploader, setShowUploader] = useState(false); // وضعیت نمایش فرم
  const [currentPage, setCurrentPage] = useState(1);
  const { data, paginate, error, isLoading } = SWRGetCall(
    "/students/show",
    true,
    currentPage
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleButtonClick = () => {
    setShowUploader(!showUploader); // تغییر وضعیت نمایش کامپوننت
  };

  const handleCloseModal = () => {
    setShowUploader(false); // بستن مدال
  };

  const columns = [
    { header: "نام", accessor: "name" },
    { header: "کلاس", accessor: "classroom" },
    { header: "کد ملی", accessor: "nationalId" },
    { header: "تلفن", accessor: "phone" },
  ];

  return (
    <>
      <div className="flex flex-col w-full md:flex-row gap-4">
        <h1 className="text-3xl font-bold mb-4">لیست دانش آموزان</h1>

        <button
          onClick={handleButtonClick}
          className="bg-green-500 hover:bg-green-600 text-white absolute  py-2 px-2 rounded right text-white mt-3 left-5 "
        >
          <GrDocumentUpload className="h-5 w-5 mr-2" />
        </button>
        {/* Modal */}
        {showUploader && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-1/2">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">آپلود فایل اکسل</h2>
                <button
                  onClick={handleCloseModal}
                  className="text-red-500 hover:text-red-700"
                >
                  &times;
                </button>
              </div>
              <ExcelUpload /> {/* فرم آپلود اکسل */}
              <div className="flex justify-end mt-4">
                <button
                  onClick={handleCloseModal}
                  className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
                >
                  بستن
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
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

StudentShow.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;
export default StudentShow;
