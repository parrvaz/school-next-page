import Input from "@/app/components/shared/form/input";
import { Form, FormikProps, withFormik } from "formik";
import * as yup from "yup";
import callApi from "@/app/components/general/ApiCalls/callApi";
import Router from "next/router";
import {
  ClassStoreFormValuesInterface,
  ItemShortProps,
} from "@/app/contracts/auth";
import InnerClassStoreForm from "@/app/components/panel/InnerClassStoreForm";

import Cookies from "universal-cookie";
import { PostCall } from "@/app/hooks/postCall";

const ClassStoreFormValidationSchema = yup.object().shape({
  title: yup.string().required(),
  field_id: yup.number().required(),
  number: yup.number().nullable(),
  floor: yup.number().nullable(),
});

interface ClassStoreFormProps {
  fields: ItemShortProps[];
}

const ClassStoreForm = withFormik<
  ClassStoreFormProps,
  ClassStoreFormValuesInterface
>({
  mapPropsToValues: (props) => ({
    title: "",
    field_id: null,
    number: null,
    floor: null,
  }),
  validationSchema: ClassStoreFormValidationSchema,

  handleSubmit: async (values) => {
    const res = await PostCall("/classrooms/store", values);
    if (res?.status === 200) Router.push("/classes/show");
  },
})(InnerClassStoreForm);

export default ClassStoreForm;
