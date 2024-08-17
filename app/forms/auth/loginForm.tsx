import Input from "@/app/components/shared/form/input";
import { Form, FormikProps, withFormik } from "formik";
import * as yup from "yup";
import { LoginFormValuesInterface } from "../../contracts/auth";
import InnerLoginForm from "../../components/auth/InnerLoginForm";

const LoginFormValidationSchema = yup.object().shape({
  phone: yup.number().required(),
  password: yup.string().required().min(4),
});

interface LoginFormProps {}

const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
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
