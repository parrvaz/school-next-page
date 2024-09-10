import { NextPageWithLayout } from "../_app";
import UserPanelLayout from "@/app/components/layouts/userPanelLayout";
import Filter from "@/app/components/general/filtet";
import { useState } from "react";
import ChartBar from "@/app/components/shared/reports/chartbar";
import ChartLine from "@/app/components/shared/reports/chartLine";

const Panel: NextPageWithLayout = () => {
  const [filterUrl, setFilterUrl] = useState("");
  // const { data, paginate, error, isLoading } = SWRGetCall(
  //   `/dashboard?${filterUrl}`,
  //   false
  // );

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;

  // const allCount = data?.allCount;
  // const examProgress = data?.examProgress;
  // const classScoreProgress = data?.classScoreProgress;

  return (
    <>
      <Filter setFilterUrl={setFilterUrl} />

      <div className="flex flex-col w-full md:flex-row gap-4">
        <ChartBar url="/reports/exams/count" filterUrl={filterUrl} />
      </div>
      <div className="flex flex-col w-full md:flex-row gap-4">
        <ChartLine
          url="/reports/classScores/progress"
          filterUrl={filterUrl}
          title="روند امتحانات شفاهی"
        />
        <ChartLine
          url="/reports/exams/progress"
          filterUrl={filterUrl}
          title="روند امتحانات کتبی"
        />
      </div>
    </>
  );
};

Panel.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;
export default Panel;
