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

  return (
    <>
      <Filter setFilterUrl={setFilterUrl} />
      <ChartBar url="/reports/exams/count" filterUrl={filterUrl} />
    </>
  );
};

ReportExamCount.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;
export default ReportExamCount;
