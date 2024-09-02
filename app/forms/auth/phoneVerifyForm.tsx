import Input from "@/app/components/shared/form/input";
import { Form, FormikProps, withFormik } from "formik";
import * as yup from "yup";
import { PhoneVerifyFormValuesInterface } from "../../contracts/auth";
import InnerPhoneVerifyForm from "../../components/auth/InnerPhoneVerifyForm";
import callApi from "@/app/components/general/ApiCalls/callApi";
import ValidationError from "@/app/exceptions/validationError";

const phoneVerifyFormValidationSchema = yup.object().shape({
  code: yup.string().required().length(6),
});

interface PhoneVerifyFormProps {}

const PhoneVerifyForm = withFormik<
  PhoneVerifyFormProps,
  PhoneVerifyFormValuesInterface
>({
  mapPropsToValues: (props) => ({
    code: "",
    token: "",
  }),
  validationSchema: phoneVerifyFormValidationSchema,

  handleSubmit: async (values, { props, setFieldError }) => {
    try {
      console.log(values);
    } catch (error) {
      if (error instanceof ValidationError) {
        console.log(error);
        Object.entries(error.messages).forEach(([key, value]) =>
          setFieldError(key, value as string)
        );
      }
    }
  },
})(InnerPhoneVerifyForm);

export default PhoneVerifyForm;
