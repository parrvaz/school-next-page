import { NextPageWithLayout } from "@/pages/_app";
import UserPanelLayout from "@/app/components/layouts/userPanelLayout";
import { SWRGetCall } from "@/app/hooks/swrGetCall";

const Report: NextPageWithLayout = () => {
  const { data, paginate, error, isLoading } = SWRGetCall("/allExams/show");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <></>;
};

Report.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;
export default Report;
