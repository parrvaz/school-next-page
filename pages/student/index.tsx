import StudentPanelLayout from "@/app/components/layouts/studentPanelLayout";
import { NextPageWithLayout } from "../_app";

const StudentPanel: NextPageWithLayout = () => {
  return <div></div>;
};

StudentPanel.getLayout = (page) => (
  <StudentPanelLayout>{page}</StudentPanelLayout>
);
export default StudentPanel;
