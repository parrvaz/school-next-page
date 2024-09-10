import { SWRGetCall } from "@/app/hooks/swrGetCall";
import { ErrorMessage, Field } from "formik";
import { FC } from "react";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryLegend,
  VictoryLine,
  VictoryStack,
} from "victory";

interface ChartLineProps {
  url: string;
  filterUrl?: string;
  title?: string;
}

const ChartLine: FC<ChartLineProps> = ({ url, filterUrl, title }) => {
  const colors = ["#AA4465", "#E7CFCD", "#037971", "#276FBF"];
  const { data, paginate, error, isLoading } = SWRGetCall(
    `${url}?${filterUrl}`
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const exam = data?.exam;
  const tickValues = data?.tickValues;
  const tickFormat = data?.tickFormat;

  return (
    <>
      <VictoryChart domainPadding={20} title={title ?? ""}>
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

export default ChartLine;
