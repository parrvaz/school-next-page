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
  VictoryLine,
} from "victory";
import Filter from "@/app/components/general/filtet";
import ChartLine from "@/app/components/shared/reports/chartLine";
import { useState } from "react";

const ReportClassScoreProgress: NextPageWithLayout = () => {
  const [filterUrl, setFilterUrl] = useState("");
  const { data, paginate, error, isLoading } = SWRGetCall(
    `/reports/classScores/progress?${filterUrl}`
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const exam = data?.exam;
  const tickValues = data?.tickValues;
  const tickFormat = data?.tickFormat;

  return (
    <>
      <Filter setFilterUrl={setFilterUrl} student={data.user} />
      <ChartLine data={exam} tickFormat={tickFormat} tickValues={tickValues} />
    </>
  );
};

ReportClassScoreProgress.getLayout = (page) => (
  <UserPanelLayout>{page}</UserPanelLayout>
);
export default ReportClassScoreProgress;
