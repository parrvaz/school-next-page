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

const ReportExamCount: NextPageWithLayout = () => {
  const { data, paginate, error, isLoading } = SWRGetCall(
    "/reports/exams/count"
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const exam = data?.exam;
  const classScore = data?.classScore;
  const tickValues = data?.tickValues;
  const tickFormat = data?.tickFormat;

  console.log("exam", exam);
  console.log("classScore", classScore);

  return (
    <>
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
          x={300}
          y={50}
          orientation="horizontal"
          gutter={50}
          symbolSpacer={-10}
          // direction=""
          data={[
            { name: "امتحانات کتبی", symbol: { fill: "#AA4465" } },
            { name: "امتحانات شفاهی", symbol: { fill: "#E7CFCD" } },
          ]}
        />

        <VictoryStack>
          <VictoryBar
            data={exam}
            x="id"
            y="count"
            style={{
              data: { fill: "#AA4465" },
            }}
          />
          <VictoryBar
            data={classScore}
            x="id"
            y="count"
            style={{
              data: { fill: "#E7CFCD" },
            }}
          />
        </VictoryStack>
      </VictoryChart>
    </>
  );
};

ReportExamCount.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;
export default ReportExamCount;
