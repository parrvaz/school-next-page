import { NextPageWithLayout } from "../_app";
import AdminPanelLayout from "@/app/components/layouts/adminPanelLayout";

const Admin: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Admin dashboard</h1>
    </div>
  );
};

Admin.getLayout = (page) => <AdminPanelLayout>{page}</AdminPanelLayout>;
export default Admin;
