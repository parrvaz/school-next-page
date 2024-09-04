import { Form, FormikProps, withFormik } from "formik";
import * as yup from "yup";
import Router from "next/router";
import {
  StudentStoreFormValuesInterface,
  ItemShortProps,
} from "@/app/contracts/auth";

import { PostCall } from "@/app/hooks/postCall";
import InnerStudentStoreForm from "@/app/components/panel/InnerStudentStoreForm";

const StudentStoreFormValidationSchema = yup.object().shape({
  title: yup.string().required(),
  field_id: yup.number().required(),
  number: yup.number().nullable(),
  floor: yup.number().nullable(),
});

interface StudentStoreFormProps {
  classrooms: ItemShortProps[];
}

const StudentStoreForm = withFormik<
  StudentStoreFormProps,
  StudentStoreFormValuesInterface
>({
  mapPropsToValues: (props) => ({
    firstName: "",
    lastName: "",
    nationalId: "",
    classroom_id: null,
    birthday: "",
    onlyChild: false,
    address: "",
    phone: "",
    socialMediaID: "",
    numberOfGlasses: null,
    leftHand: false,
    religion: "",
    specialDisease: "",
  }),
  validationSchema: StudentStoreFormValidationSchema,

  handleSubmit: async (values) => {
    const res = await PostCall("/classrooms/store", values);
    if (res?.status === 200) Router.push("/classes/show");
  },
})(InnerStudentStoreForm);

export default StudentStoreForm;
