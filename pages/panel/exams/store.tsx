import { NextPageWithLayout } from "@/pages/_app";
import UserPanelLayout from "@/app/components/layouts/userPanelLayout";
import ExamForm from "@/app/forms/panel/ExamForm";
import { useState } from "react";
import { SWRGetCall } from "@/app/hooks/swrGetCall";

const ExamStore: NextPageWithLayout = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [allClasses, setAllClasses] = useState([]);
  const [allStudents, setAllStudents] = useState([]);

  const { data, paginate, error, isLoading } = SWRGetCall("/allExams/create");

  console.log(data);

  return (
    <>
      <ExamForm />
    </>
  );
};

ExamStore.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;
export default ExamStore;
