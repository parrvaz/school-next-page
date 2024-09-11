import { NextPageWithLayout } from "@/pages/_app";
import UserPanelLayout from "@/app/components/layouts/userPanelLayout";
import { BaseSyntheticEvent, FC, useMemo, useState } from "react";
import { SWRGetCall } from "@/app/hooks/swrGetCall";
import ExamForm from "@/app/forms/panel/ExamForm";
import { log } from "console";
import {
  ErrorOption,
  Field,
  FieldArray,
  FieldArrayPath,
  FieldError,
  FieldErrors,
  FieldName,
  FieldRefs,
  FieldValues,
  FormState,
  InternalFieldName,
  RegisterOptions,
  SubmitErrorHandler,
  SubmitHandler,
  useFieldArray,
  useForm,
  UseFormRegisterReturn,
} from "react-hook-form";
import FormSelect from "@/app/components/shared/RHF/formSelect";
import LoadingBox from "@/app/components/shared/RHF/loadingBox";
import FormInput from "@/app/components/shared/RHF/formInput";
import { TrashIcon } from "@heroicons/react/24/outline";
import { PostCall } from "@/app/hooks/postCall";
import { ItemShortProps } from "@/app/contracts/auth";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import moment from "moment";
import { ToastContainer } from "react-toastify";

const CourseAssign: NextPageWithLayout = () => {
  const rules = { required: true };

  const { data, error, isLoading } = SWRGetCall("/courses/assign/create");

  const {
    handleSubmit,
    setValue,
    formState: { errors },
    control,
    watch,
    register,
  } = useForm({
    defaultValues: {
      list: [{ classroom_id: "", course_id: "", teacher_id: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "list",
  });

  const onSubmit = async (e: any) => {
    let list = { list: [] };
    // e.classrooms.map((k: ItemShortProps) => ({
    //     list[]
    // }));

    console.log("list:   ", list.list);

    console.log("submit", e);
    const res = await PostCall("courses/store", e);
  };

  const classOptions = data?.classrooms?.data?.map((k: ItemShortProps) => ({
    value: k.id,
    label: k.title,
  }));

  const ccourseOptions = data?.courses?.data?.map((k: ItemShortProps) => ({
    value: k.id,
    label: k.name,
  }));

  const teacherOptions = data?.teachers?.data?.map((k: ItemShortProps) => ({
    value: k.id,
    label: k.name,
  }));

  return (
    <LoadingBox {...{ error }} loading={isLoading} reload={() => {}}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex h-full w-full flex-col items-center px-5"
      >
        {/* <div className="flex flex-col w-full md:flex-row gap-4"> */}
        {fields.map((field, index) => (
          <div key={field.id} className="flex  mb-5 gap-3 w-full ">
            <FormSelect
              {...{ errors, control }}
              className="w-full md:w-1/3"
              name={`list[${index}].classroom_id`}
              options={classOptions}
              rules={{ required: true }}
              placeholder="انتخاب کلاس"
            />
            <FormSelect
              {...{ errors, control }}
              className="w-full md:w-1/3"
              name={`list[${index}].course_id`}
              options={ccourseOptions}
              rules={{ required: true }}
              placeholder="انتخاب درس"
            />
            <FormSelect
              {...{ errors, control }}
              className="w-full md:w-1/3"
              name={`list[${index}].teacher_id`}
              options={teacherOptions}
              rules={{ required: true }}
              placeholder="انتخاب معلم"
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
        {/* </div> */}
        <button
          type="button"
          className="bg-green-300 btn hover:bg-green-400 w-full md:w-1/4 mt-5"
          onClick={() =>
            append({ classroom_id: "", course_id: "", teacher_id: "" })
          }
        >
          اضافه کردن ردیف جدید
        </button>

        <button className="btn mt-4 mb-6 w-full md:w-1/4 bg-green-300 hover:bg-green-400">
          ثبت
        </button>
        <ToastContainer position="bottom-left" />
      </form>
    </LoadingBox>
  );
};

CourseAssign.getLayout = (page) => <UserPanelLayout>{page}</UserPanelLayout>;
export default CourseAssign;
