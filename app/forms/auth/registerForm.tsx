import Input from "@/app/components/shared/form/input";
import { Form, FormikProps, withFormik } from "formik";
import * as yup from "yup";
import { RegisterFormValuesInterface } from "../../contracts/auth";
import InnerRegisterForm from "../../components/auth/InnerRegisterForm";
import callApi from "@/app/components/general/callApi";
import Router from "next/router";

const registerFormValidationSchema = yup.object().shape({
  name: yup.string().required().min(2),
  phone: yup.number().required(),
  password: yup.string().required().min(6),
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

    handleSubmit: async (values) => {
      const res = await callApi().post("/register", values);
      if (res.status === 200) {
        Router.push("/auth/login");
      }
    },
  }
)(InnerRegisterForm);

export default RegisterForm;
