import UserInfo from "@/app/components/panel/userInfo";
import { NextPageWithLayout } from "../_app";
import UserPanelLayout from "@/app/components/layouts/userPanelLayout";

const Panel: NextPageWithLayout = () => {
  return <div></div>;
};

Panel.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;
export default Panel;
