import AdminPanelLayout from "@/app/components/layouts/adminPanelLayout";
import { NextPageWithLayout } from "@/pages/_app";

const gradeList: NextPageWithLayout = () => {
  return (
    <div>
      <h1>grades List</h1>
    </div>
  );
};

gradeList.getLayout = (page) => <AdminPanelLayout>{page}</AdminPanelLayout>;
export default gradeList;
