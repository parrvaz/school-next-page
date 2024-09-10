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
import ReportExamCount from "./examCount";

const NewReportExamCount: NextPageWithLayout = () => {
  const [filterUrl, setFilterUrl] = useState("");

  return (
    <>
      <Filter setFilterUrl={setFilterUrl} />
      <ReportExamCount filterUrl={filterUrl} />
    </>
  );
};

NewReportExamCount.getLayout = (page) => (
  <UserPanelLayout>{page}</UserPanelLayout>
);
export default NewReportExamCount;
