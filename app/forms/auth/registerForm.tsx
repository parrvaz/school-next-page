import Input from "@/app/components/shared/form/input";
import { Form, FormikProps, withFormik } from "formik";

interface RegisterFormValues {
  name: string;
  password: string;
  password_confirmation: string;
  phone: string;
}

const InnerRegisterForm = (props: FormikProps<RegisterFormValues>) => {
  return (
    <Form className="space-y-6" action="#" method="POST" dir="rtl">
      <div>
        <Input name="name" lable="Username" />
      </div>

      <div>
        <Input name="phone" type="tel" lable="Phone number" />
      </div>

      <div>
        <Input name="password" type="password" lable="Password" />
      </div>

      <div>
        <Input
          name="password_confirmation"
          type="password"
          lable="Password confirmation"
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          ثبت‌نام
        </button>
      </div>
    </Form>
  );
};

interface RegisterFormProps {}

const RegisterForm = withFormik<RegisterFormProps, RegisterFormValues>({
  mapPropsToValues: (props) => {
    return {
      name: "",
      phone: "",
      password: "",
      password_confirmation: "",
    };
  },

  handleSubmit: (values) => {
    console.log(values);
  },
})(InnerRegisterForm);

export default RegisterForm;
