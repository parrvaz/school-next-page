import UserInfo from "@/app/components/panel/userInfo";
import { NextPageWithLayout } from "../_app";
import UserPanelLayout from "@/app/components/layouts/userPanelLayout";
import Filter from "@/app/components/general/filtet";
import { useState } from "react";
import { SWRGetCall } from "@/app/hooks/swrGetCall";
import BigForm from "@/app/components/shared/RHF/bigForm";
import ChartBar from "@/app/components/shared/reports/chartbar";
import ChartLine from "@/app/components/shared/reports/chartLine";

const Panel: NextPageWithLayout = () => {
  const [filterUrl, setFilterUrl] = useState("");
  const { data, paginate, error, isLoading } = SWRGetCall(
    `/dashboard?${filterUrl}`,
    false
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const allCount = data?.allCount;
  const examProgress = data?.examProgress;
  const classScoreProgress = data?.classScoreProgress;

  return (
    <>
      <Filter setFilterUrl={setFilterUrl} student={allCount?.user} />

      <div className="flex flex-col w-full md:flex-row gap-4">
        <ChartBar
          exams={allCount.exam}
          classScores={allCount.classScore}
          tickFormat={allCount.tickFormat}
          tickValues={allCount.tickValues}
        />
      </div>
      <div className="flex flex-col w-full md:flex-row gap-4">
        <ChartLine
          data={examProgress.exam}
          tickFormat={examProgress.tickFormat}
          tickValues={examProgress.tickValues}
          title="روند امتحانات کتبی"
        />
        <ChartLine
          data={classScoreProgress.exam}
          tickFormat={classScoreProgress.tickFormat}
          tickValues={classScoreProgress.tickValues}
          title="روند امتحانات شفاهی"
        />
      </div>
    </>
  );
};

Panel.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;
export default Panel;
