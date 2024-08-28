import { Form, FormikProps } from "formik";
import Input from "../shared/form/input";
import { PhoneVerifyFormValuesInterface } from "@/app/contracts/auth";

const InnerPhoneVerifyForm = (
  props: FormikProps<PhoneVerifyFormValuesInterface>
) => {
  return (
    <Form className="space-y-6" action="#" method="POST" dir="rtl">
      <div>
        <Input name="code" type="number" lable="کد ارسال شده" />
      </div>
      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          ثبت
        </button>
      </div>
    </Form>
  );
};

export default InnerPhoneVerifyForm;
