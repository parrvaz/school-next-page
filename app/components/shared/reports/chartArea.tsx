import React from "react";
import {
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryArea,
  VictoryTooltip,
  VictoryVoronoiContainer,
  VictoryLegend,
} from "victory";

const dataProgram = [
  { lesson: "ریاضی ۱", score: 4 },
  { lesson: "عربی ۱", score: 3 },
  { lesson: "دینی ۱", score: 2 },
  { lesson: "زیست ۱", score: 2 },
  { lesson: "فیزیک ۱", score: 1 },
];

const dataStudy = [
  { lesson: "ریاضی ۱", score: 3 },
  { lesson: "عربی ۱", score: 2 },
  { lesson: "دینی ۱", score: 1 },
  { lesson: "زیست ۱", score: 1.5 },
  { lesson: "فیزیک ۱", score: 2 },
];

const ChartArea = () => {
  return (
    <VictoryChart
      theme={VictoryTheme.material}
      domainPadding={{ x: 30, y: 20 }}
      //   containerComponent={<VictoryVoronoiContainer />}
    >
      <VictoryLegend
        x={200}
        y={50}
        orientation="horizontal"
        gutter={40}
        symbolSpacer={-10}
        data={[
          { name: "برنامه اصلی", symbol: { fill: "#5EB1BF" } },
          { name: "مطالعه دانش‌آموز", symbol: { fill: "#E7CFCD" } },
        ]}
      />

      {/* محور X */}
      <VictoryAxis
        style={{
          axisLabel: { padding: 30 },
          tickLabels: { fontSize: 10, padding: 5 },
        }}
        tickValues={dataProgram.map((d) => d.lesson)}
      />

      {/* محور Y */}
      <VictoryAxis
        dependentAxis
        style={{
          axisLabel: { padding: 40 },
          tickLabels: { fontSize: 10, padding: 5 },
        }}
        tickFormat={(x) => `${x}`}
      />

      {/* نمودار برنامه اصلی */}
      <VictoryArea
        data={dataProgram}
        x="lesson"
        y="score"
        style={{
          data: {
            fill: "#5EB1BF",
            stroke: "#5EB1BF",
            strokeWidth: 2,
            fillOpacity: 0.3,
          },
        }}
        labels={({ datum }) => `${datum.lesson}\nبرنامه اصلی: ${datum.score}`}
        labelComponent={<VictoryTooltip />}
      />

      {/* نمودار مطالعه دانش‌آموز */}
      <VictoryArea
        data={dataStudy}
        x="lesson"
        y="score"
        style={{
          data: {
            fill: "#E7CFCD",
            stroke: "#E7CFCD",
            strokeWidth: 2,
            fillOpacity: 0.7,
          },
        }}
        labels={({ datum }) =>
          `${datum.lesson}\nمطالعه دانش‌آموز: ${datum.score}`
        }
        labelComponent={<VictoryTooltip />}
      />
    </VictoryChart>
  );
};

export default ChartArea;
