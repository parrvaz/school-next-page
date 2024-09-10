import { SWRGetCall } from "@/app/hooks/swrGetCall";
import { ErrorMessage, Field } from "formik";
import { FC } from "react";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryLegend,
  VictoryStack,
} from "victory";

interface ChartBarProps {
  url?: string;
  filterUrl?: string;
}

const ChartBar: FC<ChartBarProps> = ({ url, filterUrl }) => {
  const { data, paginate, error, isLoading } = SWRGetCall(
    `${url}?${filterUrl}`,
    false
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const exams = data?.exam;
  const classScores = data?.classScore;
  const tickValues = data?.tickValues;
  const tickFormat = data?.tickFormat;

  const colors = ["#AA4465", "#E7CFCD", "#037971", "#276FBF"];
  return (
    <>
      <VictoryChart domainPadding={20} title="فراوانی امتحانات">
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
          data={[
            { name: "امتحانات کتبی", symbol: { fill: "#AA4465" } },
            { name: "امتحانات شفاهی", symbol: { fill: "#E7CFCD" } },
          ]}
        />

        <VictoryStack>
          {!(exams?.length === 0) && (
            <VictoryBar
              data={exams}
              x="id"
              y="count"
              style={{
                data: { fill: "#AA4465" },
              }}
            />
          )}
          {!(classScores?.length === 0) && (
            <VictoryBar
              data={classScores}
              x="id"
              y="count"
              style={{
                data: { fill: "#E7CFCD" },
              }}
            />
          )}
        </VictoryStack>
      </VictoryChart>
    </>
  );
};

export default ChartBar;
