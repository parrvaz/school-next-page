import TeacherPanelLayout from "@/app/components/layouts/teacherPanelLayout";
import { NextPageWithLayout } from "../_app";

const TeacherPanel: NextPageWithLayout = () => {
  return <div></div>;
};

TeacherPanel.getLayout = (page) => (
  <TeacherPanelLayout>{page}</TeacherPanelLayout>
);
export default TeacherPanel;
