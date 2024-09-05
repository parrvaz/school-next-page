import { NextPageWithLayout } from "@/pages/_app";
import UserPanelLayout from "@/app/components/layouts/userPanelLayout";
import { SWRGetCall } from "@/app/hooks/swrGetCall";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryLabel,
} from "victory";

const Report: NextPageWithLayout = () => {
  const { data, paginate, error, isLoading } = SWRGetCall(
    "/reports/exams/count"
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data);

  return (
    <>
      <VictoryChart domainPadding={20}>
        {/* محور X */}
        <VictoryAxis
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

        <VictoryBar
          data={data}
          x="title"
          y="exam_count"
          style={{
            data: { fill: "#AA4465" },
          }}
        />
      </VictoryChart>
    </>
  );
};

Report.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;
export default Report;
