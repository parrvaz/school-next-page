import { NextPageWithLayout } from "../_app";
import GuestPanelLayout from "@/app/components/layouts/guestPanelLayout";

const Guest: NextPageWithLayout = () => {
  return (
    <div>
      <h1>Guest dashboard</h1>
    </div>
  );
};

Guest.getLayout = (page) => <GuestPanelLayout>{page}</GuestPanelLayout>;
export default Guest;
