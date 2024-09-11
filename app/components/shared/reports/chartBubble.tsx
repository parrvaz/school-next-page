import React from "react";
import {
  VictoryChart,
  VictoryScatter,
  VictoryAxis,
  VictoryTheme,
  VictoryLegend,
  VictoryTooltip,
} from "victory";

const data = [
  { x: 1, y: 15, size: 8, subject: "ریاضی", exams: 2 },
  { x: 2, y: 5, size: 5, subject: "فیزیک", exams: 1 },
  { x: 3, y: 10, size: 15, subject: "شیمی", exams: 3 },
  { x: 4, y: 11.2, size: 6, subject: "زیست", exams: 1 },
  { x: 5, y: 8, size: 4, subject: "انگلیسی", exams: 2 },
  { x: 6, y: 12, size: 7, subject: "عربی", exams: 4 },
  // داده‌های بیشتر در اینجا
];

const ChartBubble = () => {
  return (
    <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
      {/* راهنمای رنگ‌ها */}
      <VictoryLegend
        x={270}
        y={0}
        orientation="vertical"
        gutter={20}
        symbolSpacer={25}
        data={[
          { name: "ریاضی", symbol: { fill: "#1f77b4" } },
          { name: "فیزیک", symbol: { fill: "#ff7f0e" } },
          { name: "شیمی", symbol: { fill: "#2ca02c" } },
          { name: "زیست", symbol: { fill: "#d62728" } },
          { name: "انگلیسی", symbol: { fill: "#9467bd" } },
          { name: "عربی", symbol: { fill: "#8c564b" } },
        ]}
      />

      {/* محور X: تعداد امتحانات */}
      <VictoryAxis
        label="تعداد امتحانات"
        tickValues={[1, 2, 3, 4, 5]}
        tickFormat={["1", "2", "3", "4", "5"]}
        style={{
          axisLabel: { padding: 30 },
          tickLabels: { fontSize: 10, padding: 5 },
        }}
      />

      {/* محور Y: میانگین نمره */}
      <VictoryAxis
        dependentAxis
        style={{
          axisLabel: { padding: 40 },
          tickLabels: { fontSize: 10, padding: 5 },
        }}
      />

      {/* نمودار حبابی */}
      <VictoryScatter
        data={data}
        x="exams"
        y="y"
        size={(datum) => datum.size}
        style={{
          data: {
            fill: ({ datum }) => {
              switch (datum.subject) {
                case "ریاضی":
                  return "#1f77b4";
                case "فیزیک":
                  return "#ff7f0e";
                case "شیمی":
                  return "#2ca02c";
                case "زیست":
                  return "#d62728";
                case "انگلیسی":
                  return "#9467bd";
                case "عربی":
                  return "#8c564b";
                default:
                  return "#000";
              }
            },
          },
        }}
        labels={({ datum }) =>
          `${datum.subject}\nمیانگین نمره: ${datum.y}\nساعت مطالعه: ${datum.size}`
        }
        labelComponent={<VictoryTooltip />}
      />
    </VictoryChart>
  );
};

export default ChartBubble;
