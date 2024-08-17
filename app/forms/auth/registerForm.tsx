import Input from "@/app/components/shared/form/input";
import { Form, FormikProps, withFormik } from "formik";
import * as yup from "yup";
import { RegisterFormValuesInterface } from "../../contracts/auth";
import InnerRegisterForm from "../../components/auth/innerRegisterForm";

const registerFormValidationSchema = yup.object().shape({
  name: yup.string().required().min(2),
  phone: yup.number().required(),
  password: yup.string().required().min(4),
});

interface RegisterFormProps {}

const RegisterForm = withFormik<RegisterFormProps, RegisterFormValuesInterface>(
  {
    mapPropsToValues: (props) => ({
      name: "",
      phone: "",
      password: "",
      password_confirmation: "",
    }),
    validationSchema: registerFormValidationSchema,

    handleSubmit: (values) => {
      console.log(values);
    },
  }
)(InnerRegisterForm);

export default RegisterForm;
