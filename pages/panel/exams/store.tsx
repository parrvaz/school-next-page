import { NextPageWithLayout } from "@/pages/_app";
import UserPanelLayout from "@/app/components/layouts/userPanelLayout";
import { useMemo, useState } from "react";
import { SWRGetCall } from "@/app/hooks/swrGetCall";
import ExamForm from "@/app/forms/panel/ExamForm";
import { log } from "console";
import { useFieldArray, useForm } from "react-hook-form";
import FormSelect from "@/app/components/shared/RHF/formSelect";
import LoadingBox from "@/app/components/shared/RHF/loadingBox";
import FormInput from "@/app/components/shared/RHF/formInput";
import { ItemShortProps } from "@/app/contracts/auth";

const ExamStore: NextPageWithLayout = () => {
  const rules = { required: true };

  const { data, error, isLoading } = SWRGetCall("/allExams/create");

  const {
    handleSubmit,
    setValue,
    formState: { errors },
    control,
    watch,
    register,
  } = useForm({
    defaultValues: {
      classroom: "",
      students: [{ student_id: "", score: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "students",
  });

  const onSubmit = (e: any) => {
    console.log("submit", e);
  };

  const classOptions = data?.classrooms?.data?.map((k: ItemShortProps) => ({
    value: k.id,
    label: k.title,
  }));

  const courseOptions = data?.courses?.data?.map((k: ItemShortProps) => ({
    value: k.id,
    label: k.name,
  }));

  const students = data?.classrooms?.data?.find(
    (k: any) => k?.id === watch("classroom")
  )?.students.data;
  const studentOptions = students?.map((k: ItemShortProps) => ({
    value: k.id,
    label: k.name,
  }));

  const handleFillForm = () => {
    const newStudents = students.map((k: ItemShortProps) => ({
      student_id: k.id,
      score: "",
    }));
    console.log("fill");

    setValue("students", newStudents);
  };

  return (
    <LoadingBox {...{ error }} loading={isLoading} reload={() => {}}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex h-full w-full flex-col items-center px-5"
      >
        <div className="flex flex-col w-full md:flex-row gap-4">
          <FormSelect
            {...{ errors, control }}
            className="w-full md:w-1/2"
            name="classroom"
            options={classOptions}
            rules={{ required: true }}
            placeholder="انتخاب کلاس"
          />
          <FormSelect
            {...{ errors, control }}
            className="w-full md:w-1/2"
            name="course"
            options={courseOptions}
            rules={{ required: true }}
            placeholder="انتخاب درس"
          />

          <FormInput
            {...{ errors, control }}
            className="w-full md:w-1/2"
            name={`date`}
            placeholder="تاریخ را وارد کنید"
            type="date"
          />
        </div>

        <div className="mt-5">
          <div className="flex flex-col md:flex-row gap-4">
            <button
              type="button"
              className="btn"
              onClick={() => append({ student_id: "", score: "" })}
            >
              اضافه کردن دانش آموز جدید
            </button>
            <button onClick={handleFillForm} className="btn" type="button">
              جدول دانش آموزان
            </button>
          </div>
        </div>
        <div className="mt-10">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="flex flex-col w-full md:flex-row gap-4"
            >
              <FormSelect
                {...{ errors, control, rules }}
                className="w-full md:w-1/2"
                name={`students[${index}].student_id`}
                options={studentOptions}
                placeholder="نام دانش آموز"
              />

              <FormInput
                {...{ errors, control }}
                name={`students[${index}].score`}
                placeholder="نمره را وارد کنید"
              />

              <button type="button" onClick={() => remove(index)}>
                Remove
              </button>
            </div>
          ))}
        </div>

        <button className="btn mt-4 mb-6 w-full">'submit'</button>
      </form>
    </LoadingBox>
  );
};

ExamStore.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;
export default ExamStore;
