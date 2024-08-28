import { NextPage } from "next";
import { NextPageWithLayout } from "../_app";
import UserPanelLayout from "@/app/components/layouts/userPanelLayout";
import { useEffect, useState } from "react";
import useAuth from "@/app/hooks/useAuth";
import Router, { useRouter } from "next/router";

const Panel: NextPageWithLayout = () => {
  const router = useRouter();
  const { user, error, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  if (error) {
    //show error
    router.push("/auth/login");
    return <></>;
  }

  console.log("user");

  console.log("us", user);

  return (
    <div>
      <h1>user dashboard</h1>
    </div>
  );
};

Panel.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;
export default Panel;
