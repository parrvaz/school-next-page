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

interface ReportExamCount {
  filterUrl: string;
}

const ReportExamCount = (props: ReportExamCount) => {
  const { data, paginate, error, isLoading } = SWRGetCall(
    `/reports/exams/count?${props.filterUrl}`,
    false
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const exam = data?.exam;
  const classScore = data?.classScore;
  const tickValues = data?.tickValues;
  const tickFormat = data?.tickFormat;

  return (
    <>
      <ChartBar
        exams={exam}
        classScores={classScore}
        tickFormat={tickFormat}
        tickValues={tickValues}
      />
    </>
  );
};

export default ReportExamCount;
