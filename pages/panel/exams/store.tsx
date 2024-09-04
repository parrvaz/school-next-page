import { NextPageWithLayout } from "@/pages/_app";
import UserPanelLayout from "@/app/components/layouts/userPanelLayout";
import { useState } from "react";
import { SWRGetCall } from "@/app/hooks/swrGetCall";
import ExamForm from "@/app/forms/panel/examForm";

const ExamStore: NextPageWithLayout = () => {
  const { data, paginate, error, isLoading } = SWRGetCall("/allExams/create");
  const [allCourses, setAllCourses] = useState(data?.courses?.data);
  const [allClasses, setAllClasses] = useState(data?.classrooms?.data);
  const [allStudents, setAllStudents] = useState(data?.students?.data);

  return (
    <>
      <ExamForm
        courses={allCourses}
        classes={allClasses}
        students={allStudents}
      />
    </>
  );
};

ExamStore.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;
export default ExamStore;
