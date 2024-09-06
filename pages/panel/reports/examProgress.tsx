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

const ReportExamProgress: NextPageWithLayout = () => {
  const [filterUrl, setFilterUrl] = useState("");
  const { data, paginate, error, isLoading } = SWRGetCall(
    `/reports/exams/progress?${filterUrl}`
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const exam = data?.exam;
  const tickValues = data?.tickValues;
  const tickFormat = data?.tickFormat;

  return (
    <>
      <Filter setFilterUrl={setFilterUrl} />
      {/* <Filter /> */}
      <VictoryChart domainPadding={20}>
        {/* محور X */}
        <VictoryAxis
          tickValues={tickValues}
          tickFormat={tickFormat}
          tickLabelComponent={
            <VictoryLabel angle={-45} textAnchor="start" dy={-10} dx={5} />
          }
          style={{
            tickLabels: { fontSize: 10, padding: 10 },
          }}
        />

        {/* محور Y */}
        <VictoryAxis
          dependentAxis
          tickValues={[0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20]} // تنظیم دستی مقادیر محور Y
          style={{
            tickLabels: {
              fontFamily: "IRANSans_SemiBold",
              fontSize: 10,
              padding: 10,
            },
          }}
        />

        {/* راهنمای رنگ‌ها */}
        <VictoryLegend
          x={200}
          y={50}
          orientation="horizontal"
          gutter={30}
          symbolSpacer={-10}
          // direction=""
          data={[
            { name: "نمره میانگین", symbol: { fill: "#AA4465" } },
            { name: "مورد انتظار", symbol: { fill: "#037971" } },
            { name: "نمره کل", symbol: { fill: "#276FBF" } },
          ]}
        />

        <VictoryLine
          data={exam}
          x="date"
          y="score"
          style={{
            data: { stroke: "#AA4465" },
          }}
        />
        <VictoryLine
          data={exam}
          x="date"
          y="totalScore"
          style={{
            data: { stroke: "#276FBF" },
          }}
        />
        <VictoryLine
          data={exam}
          x="date"
          y="expected"
          style={{
            data: { stroke: "#037971" },
          }}
        />
      </VictoryChart>
    </>
  );
};

ReportExamProgress.getLayout = (page) => (
  <UserPanelLayout>{page}</UserPanelLayout>
);
export default ReportExamProgress;
