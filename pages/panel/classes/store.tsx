import { NextPage } from "next";
import { Field, Form, Formik } from "formik";
import Input from "@/app/components/shared/form/input";
import RegisterForm from "@/app/forms/auth/registerForm";
import Link from "next/link";
import GuestPanelLayout from "@/app/components/layouts/guestPanelLayout";
import UserPanelLayout from "@/app/components/layouts/userPanelLayout";
import { NextPageWithLayout } from "@/pages/_app";
import ClassStoreForm from "@/app/forms/panel/classStoreForm";
import { SWRGetCall } from "@/app/hooks/swrGetCall";

const ClassStore: NextPageWithLayout = () => {
  const { data, paginate, error, isLoading } = SWRGetCall("/fields/show");

  console.log(data);

  return <ClassStoreForm fields={data} />;
};

ClassStore.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;

export default ClassStore;
