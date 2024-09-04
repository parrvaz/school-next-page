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
    const cookie = new Cookies();
    const headers = {
      Authorization: "Bearer " + cookie.get("shool_token"),
      grade: "bMIuudAP8DCUtHvuP22sy4523DPodj",
    };

    const res = await callApi(headers).post("/classrooms/store", {
      ...values,
    });
    if (res.status === 200) {
      console.log("succes");
    }
  },
})(InnerClassStoreForm);

export default ClassStoreForm;
