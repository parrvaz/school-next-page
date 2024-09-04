import { Form, Formik, FormikProps } from "formik";
import Input from "../shared/form/input";
import {
  ClassStoreFormValuesInterface,
  ItemShortProps,
} from "@/app/contracts/auth";
import SelectBox from "../shared/form/selectBox";

interface InnerClassStoreProps {
  fields: ItemShortProps[];
}

const InnerClassStoreForm = (
  props: FormikProps<ClassStoreFormValuesInterface> & InnerClassStoreProps
) => {
  const { fields } = props;
  return (
    <>
      <Form>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2">
            <Input name="title" lable="عنوان" />
          </div>
          <div className="w-full md:w-1/2">
            <SelectBox name="field_id" lable="رشته" items={fields} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
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
          ثبت کلاس
        </button>
      </Form>
    </>
  );
};

export default InnerClassStoreForm;
