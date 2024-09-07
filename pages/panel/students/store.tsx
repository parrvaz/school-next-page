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

const StudentStore: NextPageWithLayout = () => {
  const rules = { required: true };

  const { data, error, isLoading } = SWRGetCall("/allExams/create");

  const {
    handleSubmit,
    setValue,
    formState: { errors },
    control,
    watch,
  } = useForm({});

  const onSubmit = async (e: any) => {
    console.log("submit", e);
    const res = await PostCall("/students/store", e);
  };

  const classOptions = data?.classrooms?.data?.map((k: ItemShortProps) => ({
    value: k.id,
    label: k.title,
  }));

  return (
    <LoadingBox {...{ error }} loading={isLoading} reload={() => {}}>
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
          />
          <FormInput
            {...{ errors, control }}
            className="w-full md:w-1/4"
            name={`lastName`}
            placeholder="نام خانوادگی"
            type="string"
          />

          <FormInput
            {...{ errors, control }}
            className="w-full md:w-1/4"
            name={`nationalId`}
            placeholder="کد ملی"
            type="string"
          />

          <FormInput
            {...{ errors, control }}
            className="w-full md:w-1/4"
            name={`birthday`}
            placeholder="تاریخ تولد"
            type="string"
          />
        </div>
        <div className="flex flex-col w-full md:flex-row gap-4 mt-5">
          <FormSelect
            {...{ errors, control }}
            className="w-full md:w-1/4"
            name="classroom_id"
            options={classOptions}
            rules={{ required: true }}
            placeholder="انتخاب کلاس"
          />
          <FormInput
            {...{ errors, control }}
            className="w-full md:w-1/4"
            name={`phone`}
            placeholder="موبایل"
            type="string"
          />
          <FormInput
            {...{ errors, control }}
            className="w-full md:w-1/4"
            name={`socialMediaID`}
            placeholder="آیدی ایتا"
            type="string"
          />
          <FormInput
            {...{ errors, control }}
            className="w-full md:w-1/4"
            name={`religion`}
            placeholder="مذهب"
            type="string"
          />
        </div>
        <div className="flex flex-col w-full md:flex-row gap-4 mt-5">
          <FormInput
            {...{ errors, control }}
            className="w-full "
            name={`address`}
            placeholder="آدرس"
            type="string"
          />
        </div>
        <div className="flex flex-col w-full md:flex-row gap-4 mt-5">
          <FormInput
            {...{ errors, control }}
            className="w-full md:w-1/4"
            name={`specialDisease`}
            placeholder="بیماری های خاص"
            type="string"
          />
          {/* <CheckBox
            {...{ errors, control }}
            checked={false}
            setChecked={() => {}}
            className="w-full md:w-1/4"
            // name={`specialDisease`}
            label="چپ دست"
          /> */}
        </div>

        <button className="btn mt-4 mb-6 w-full md:w-1/4 bg-green-300 hover:bg-green-400">
          ثبت دانش آموز
        </button>
      </form>
    </LoadingBox>
  );
};

StudentStore.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;

export default StudentStore;
