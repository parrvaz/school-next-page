import { Form, Formik, FormikProps } from "formik";
import Input from "../shared/form/input";
import {
  ExamFormValuesInterface,
  RegisterFormValuesInterface,
} from "@/app/contracts/auth";
import SelectBox from "../shared/form/selectBox";
import { FC } from "react";
import TableBox from "../shared/form/tableBox";

interface InnerExamProps {
  courses: [];
  classes: [];
  students: [];
}

const InnerExamForm = (
  props: FormikProps<ExamFormValuesInterface> & InnerExamProps
) => {
  const { courses, classes, students } = props;
  return (
    <>
      <Form>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/3">
            <Input
              name="date"
              lable="تاریخ"
              type="date"
              inputClassName="border-green-500"
            />
          </div>
          <div className="w-full md:w-1/3">
            <SelectBox name="course" lable="درس" items={courses} />
          </div>
          <div className="w-full md:w-1/3">
            <SelectBox name="class" lable="کلاس" items={classes} />
          </div>
        </div>

        <TableBox
          name="students"
          lable="دانش آموز"
          columns={[{ name: "score", lable: "نمره" }]}
          allItems={students}
        />
        <button
          type="submit"
          className="mt-6 w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          ثبت امتحان
        </button>
      </Form>
    </>
  );
};

export default InnerExamForm;
