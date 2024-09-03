import { NextPageWithLayout } from "@/pages/_app";
import UserPanelLayout from "@/app/components/layouts/userPanelLayout";

import ExamForm from "@/app/forms/auth/ExamForm";

const ExamStore: NextPageWithLayout = () => {
  return (
    <>
      <ExamForm />
    </>
  );
};

ExamStore.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;
export default ExamStore;
