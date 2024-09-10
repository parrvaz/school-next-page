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
import StudentStoreForm from "@/app/forms/panel/studentStoreForm";
import FormInput from "@/app/components/shared/RHF/formInput";
import FormSelect from "@/app/components/shared/RHF/formSelect";
import LoadingBox from "@/app/components/shared/RHF/loadingBox";
import { ItemShortProps } from "@/app/contracts/auth";
import { useForm } from "react-hook-form";
import CheckBox from "@/app/components/shared/RHF/checkBox";
import { PostCall } from "@/app/hooks/postCall";
import Router from "next/router";

const TeacherStore: NextPageWithLayout = () => {
  const rules = { required: true };

  const {
    handleSubmit,
    setValue,
    formState: { errors },
    control,
    watch,
  } = useForm({});

  const onSubmit = async (e: any) => {
    console.log("submit", e);
    const res = await PostCall("/teachers/store", e);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-full w-full flex-col items-center px-5"
    >
      <div className="flex flex-col w-full md:flex-row gap-4">
        <FormInput
          {...{ errors, control }}
          className="w-full md:w-1/4"
          name={`firstName`}
          placeholder="نام"
          type="string"
          rules={{ required: true }}
        />
        <FormInput
          {...{ errors, control }}
          className="w-full md:w-1/4"
          name={`lastName`}
          placeholder="نام خانوادگی"
          type="string"
          rules={{ required: true }}
        />

        <FormInput
          {...{ errors, control }}
          className="w-full md:w-1/4"
          name={`nationalId`}
          placeholder="کد ملی"
          type="string"
          rules={{ required: true }}
        />
        <FormInput
          {...{ errors, control }}
          className="w-full md:w-1/4"
          name={`phone`}
          placeholder="موبایل"
          type="string"
          rules={{ required: true }}
        />
      </div>
      <div className="flex flex-col w-full md:flex-row gap-4 mt-5">
        <FormInput
          {...{ errors, control }}
          className="w-full md:w-1/4"
          name={`degree`}
          placeholder="مدرک"
          type="string"
        />
        <FormInput
          {...{ errors, control }}
          className="w-full md:w-1/4"
          name={`personalId`}
          placeholder="کد پرسنلی"
          type="string"
        />
      </div>

      <button className="btn mt-4 mb-6 w-full md:w-1/4 bg-green-300 hover:bg-green-400">
        ثبت معلم
      </button>
    </form>
  );
};

TeacherStore.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;

export default TeacherStore;
