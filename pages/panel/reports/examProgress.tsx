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
import { useState } from "react";
import ChartLine from "@/app/components/shared/reports/chartLine";

const ReportExamProgress: NextPageWithLayout = () => {
  const [filterUrl, setFilterUrl] = useState("");

  return (
    <>
      <Filter setFilterUrl={setFilterUrl} />
      <ChartLine
        url="/reports/exams/progress"
        filterUrl={filterUrl}
        title="روند امتحانات شفاهی"
      />
    </>
  );
};

ReportExamProgress.getLayout = (page) => (
  <UserPanelLayout>{page}</UserPanelLayout>
);
export default ReportExamProgress;
