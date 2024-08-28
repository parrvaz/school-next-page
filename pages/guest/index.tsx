import { NextPage } from "next";
import { NextPageWithLayout } from "../_app";
import { useEffect, useState } from "react";
import GuestPanelLayout from "@/app/components/layouts/guestPanelLayout";

const Guest: NextPageWithLayout = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Guest dashboard</h1>
    </div>
  );
};

Guest.getLayout = (page) => <GuestPanelLayout>{page}</GuestPanelLayout>;
export default Guest;
