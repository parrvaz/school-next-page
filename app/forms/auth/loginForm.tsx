import Input from "@/app/components/shared/form/input";
import { Form, FormikProps, withFormik } from "formik";
import * as yup from "yup";
import { LoginFormValuesInterface } from "../../contracts/auth";
import InnerLoginForm from "../../components/auth/InnerLoginForm";
import callApi from "@/app/components/general/ApiCalls/callApi";
import ValidationError from "@/app/exceptions/validationError";
import { storeLoginTokne } from "@/app/components/general/auth";
import Router from "next/router";

const LoginFormValidationSchema = yup.object().shape({
  phone: yup.number().required(),
  password: yup.string().required().min(6),
});

interface LoginFormProps {
  setToken: (token: string) => void;
}

const LoginForm = withFormik<LoginFormProps, LoginFormValuesInterface>({
  mapPropsToValues: (props) => ({
    phone: "",
    password: "",
  }),
  validationSchema: LoginFormValidationSchema,

  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      const res = await callApi().post("/login", values);
      if (res.status === 200) {
        storeLoginTokne(res.data?.token);
        Router.push("/panel");
      }
    } catch (error) {
      if (error instanceof ValidationError) {
        console.log(error);
        Object.entries(error.messages).forEach(([key, value]) =>
          setFieldError(key, value as string)
        );
      }
    }
  },
})(InnerLoginForm);

export default LoginForm;
