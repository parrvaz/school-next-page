import { NextPageWithLayout } from "@/pages/_app";
import UserPanelLayout from "@/app/components/layouts/userPanelLayout";
import { FC, useMemo, useState } from "react";
import { SWRGetCall } from "@/app/hooks/swrGetCall";
import ExamForm from "@/app/forms/panel/ExamForm";
import { log } from "console";
import { useFieldArray, useForm } from "react-hook-form";
import FormSelect from "@/app/components/shared/RHF/formSelect";
import LoadingBox from "@/app/components/shared/RHF/loadingBox";
import FormInput from "@/app/components/shared/RHF/formInput";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PostCall } from "@/app/hooks/postCall";
import { ItemShortProps } from "@/app/contracts/auth";

interface BigFormProps {
  url: string;
}

const BigForm: FC<BigFormProps> = ({ url }) => {
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

  const onSubmit = async (e: any) => {
    console.log("submit", {
      ...e,
      classroom_id: e.classroom,
    });
    const res = await PostCall(url, {
      ...e,
      classroom_id: e.classroom,
    });
  };

  const classOptions = data?.classrooms?.data?.map((k: ItemShortProps) => ({
    value: k.id,
    label: k.title,
  }));

  const ccourseOptions = data?.courses?.data?.map((k: ItemShortProps) => ({
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

  const isClassSelected = watch("classroom");

  return (
    <LoadingBox {...{ error }} loading={isLoading} reload={() => {}}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex h-full w-full flex-col items-center px-5"
      >
        <div className="flex flex-col w-full md:flex-row gap-4">
          <FormSelect
            {...{ errors, control }}
            className="w-full md:w-1/4"
            name="classroom"
            options={classOptions}
            rules={{ required: true }}
            placeholder="انتخاب کلاس"
          />
          <FormSelect
            {...{ errors, control }}
            className="w-full md:w-1/4"
            name="course_id"
            options={ccourseOptions}
            rules={{ required: true }}
            placeholder="انتخاب درس"
          />
          <FormInput
            {...{ errors, control }}
            className="w-full md:w-1/4"
            name="totalScore"
            rules={{ required: true }}
            placeholder="نمره کل"
            type="number"
          />
          <FormInput
            {...{ errors, control }}
            className="w-full md:w-1/4"
            name="expected"
            placeholder="نمره مورد انتظار"
            type="number"
          />
          <FormInput
            {...{ errors, control }}
            className="w-full md:w-1/4"
            name="date"
            rules={{ required: true }}
            placeholder="تاریخ"
            type="date"
          />
        </div>
        <div className="flex flex-col w-full md:flex-row gap-4 mt-5">
          <button
            type="button"
            className="bg-green-300 btn hover:bg-green-400 w-full md:w-1/4"
            onClick={() => append({ student_id: "", score: "" })}
          >
            اضافه کردن دانش آموز جدید
          </button>
          <button
            onClick={handleFillForm}
            className="btn bg-green-300 hover:bg-green-400 w-full md:w-1/4"
            type="button"
            disabled={!isClassSelected}
          >
            کل دانش آموزان کلاس
          </button>
        </div>

        <div className="mt-10">
          {fields.map((field, index) => (
            <div key={field.id} className="flex mb-5 gap-3 w-full">
              <FormSelect
                {...{ errors, control, rules }}
                className="w-full md:w-1/2"
                name={`students[${index}].student_id`}
                options={studentOptions}
                placeholder="نام دانش آموز"
              />

              <FormInput
                {...{ errors, control }}
                className="w-full md:w-1/4"
                name={`students[${index}].score`}
                placeholder="نمره"
              />

              <button
                type="button"
                onClick={() => remove(index)}
                className="text-red-500 hover:text-red-700"
              >
                <TrashIcon className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>

        <button className="btn mt-4 mb-6 w-full md:w-1/4 bg-green-300 hover:bg-green-400">
          ثبت آزمون
        </button>
      </form>
    </LoadingBox>
  );
};

export default BigForm;
