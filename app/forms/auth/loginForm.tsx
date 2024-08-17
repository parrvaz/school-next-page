import Input from "@/app/components/shared/form/input";
import { Form, FormikProps, withFormik } from "formik";
import * as yup from "yup";
interface LoginFormValues {
  password: string;
  phone: string;
}

const LoginFormValidationSchema = yup.object().shape({
  phone: yup.number().required(),
  password: yup.string().required().min(4),
});

const InnerLoginForm = (props: FormikProps<LoginFormValues>) => {
  return (
    <Form className="space-y-6" action="#" method="POST" dir="rtl">
      <div>
        <Input name="phone" type="tel" lable="شماره همراه" />
      </div>

      <div>
        <Input name="password" type="password" lable="رمز عبور" />
      </div>

      <div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          ورود
        </button>
      </div>
    </Form>
  );
};

interface LoginFormProps {}

const LoginForm = withFormik<LoginFormProps, LoginFormValues>({
  mapPropsToValues: (props) => ({
    phone: "",
    password: "",
  }),
  validationSchema: LoginFormValidationSchema,

  handleSubmit: (values) => {
    console.log(values);
  },
})(InnerLoginForm);

export default LoginForm;
