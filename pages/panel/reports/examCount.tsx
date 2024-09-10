import { NextPageWithLayout } from "@/pages/_app";
import UserPanelLayout from "@/app/components/layouts/userPanelLayout";
import { SWRGetCall } from "@/app/hooks/swrGetCall";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLabel,
  VictoryStack,
  VictoryLegend,
} from "victory";
import ChartBar from "@/app/components/shared/reports/chartbar";
import Filter from "@/app/components/general/filtet";
import { useState } from "react";

const ReportExamCount: NextPageWithLayout = () => {
  const [filterUrl, setFilterUrl] = useState("");
  const { data, paginate, error, isLoading } = SWRGetCall(
    `/reports/exams/count?${filterUrl}`,
    false
  );

  // if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const exam = data?.exam;
  const classScore = data?.classScore;
  const tickValues = data?.tickValues;
  const tickFormat = data?.tickFormat;

  return (
    <>
      <Filter setFilterUrl={setFilterUrl} student={data.user} />

      {isLoading ? (
        <div>ssssssss</div>
      ) : (
        <ChartBar
          exams={exam}
          classScores={classScore}
          tickFormat={tickFormat}
          tickValues={tickValues}
        />
      )}
    </>
  );
};

ReportExamCount.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;
export default ReportExamCount;
