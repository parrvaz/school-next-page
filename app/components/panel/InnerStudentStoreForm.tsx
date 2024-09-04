import { Form, Formik, FormikProps } from "formik";
import Input from "../shared/form/input";
import {
  ItemShortProps,
  StudentStoreFormValuesInterface,
} from "@/app/contracts/auth";
import SelectBox from "../shared/form/selectBox";

interface InnerStudentStoreProps {
  classrooms: ItemShortProps[];
}

const InnerStudentStoreForm = (
  props: FormikProps<StudentStoreFormValuesInterface> & InnerStudentStoreProps
) => {
  const { classrooms } = props;
  return (
    <>
      <Form>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/3">
            <Input name="firstName" lable="نام" />
          </div>
          <div className="w-full md:w-1/3">
            <Input name="lastName" lable="نام خانوادگی" />
          </div>
          <div className="w-full md:w-1/3">
            <Input name="nationalId" lable="کد ملی" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2">
            <SelectBox name="classroom_id" lable="کلاس" items={classrooms} />
          </div>
          <div className="w-full md:w-1/2">
            <Input name="number" lable="شماره کلاس" />
          </div>
          <div className="w-full md:w-1/2">
            <Input name="floor" lable="طبقه" />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full md:w-1/4 py-2 px-4 bg-green-300 font-semibold rounded-md shadow hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2"
        >
          ثبت دانش آموز
        </button>
      </Form>
    </>
  );
};

export default InnerStudentStoreForm;
