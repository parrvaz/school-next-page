import { withFormik } from "formik";
import * as yup from "yup";
import { ExamFormValuesInterface } from "../../contracts/auth";
import callApi from "@/app/components/general/ApiCalls/callApi";
import Router from "next/router";
import InnerExamForm from "@/app/components/panel/InnerExamForm";

const examFormValidationSchema = yup.object().shape({
  date: yup.string().required(),
  classroom_id: yup.number().required(),
  course_id: yup.number().required(),
});

interface ExamFormProps {
  courses: [];
  classes: [];
  students: [];
}

const ExamForm = withFormik<ExamFormProps, ExamFormValuesInterface>({
  mapPropsToValues: (props) => ({
    date: "",
    classroom_id: null,
    course_id: null,
  }),
  validationSchema: examFormValidationSchema,

  handleSubmit: async (values) => {
    const res = await callApi().post("/exams/store", values);
    if (res.status === 200) {
      Router.push("/panel/exams/show");
    }
  },
})(InnerExamForm);

export default ExamForm;
