import AdminPanelLayout from "@/app/components/layouts/adminPanelLayout";
import { NextPageWithLayout } from "@/pages/_app";

const UserList: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className="center">User List</h1>
    </div>
  );
};

UserList.getLayout = (page) => <AdminPanelLayout>{page}</AdminPanelLayout>;
export default UserList;
