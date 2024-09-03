import React, { useState, useEffect } from "react";
import { Formik, Form, FieldArray, Field } from "formik";
import * as Yup from "yup";
import { TrashIcon } from "@heroicons/react/24/solid";
import Input from "@/app/components/shared/form/input";

interface StudentGrade {
  id: string;
  grade: string;
}

interface FormValues {
  date: string;
  course: string;
  classId: string;
  students: StudentGrade[];
}

const ExamForm = () => {
  const [allCourses, setAllCourses] = useState([]);
  const [allClasses, setAllClasses] = useState([]);
  const [allStudents, setAllStudents] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const courses = await callApi("/api/courses");
  //       const classes = await callApi("/api/classes");
  //       const students = await callApi("/api/students");
  //       setAllCourses(courses.data);
  //       setAllClasses(classes.data);
  //       setAllStudents(students.data);
  //     };

  //     fetchData();
  //   }, []);

  const initialValues: FormValues = {
    date: "",
    course: "",
    classId: "",
    students: [],
  };

  const validationSchema = Yup.object({
    date: Yup.string().required("تاریخ الزامی است"),
    course: Yup.string().required("درس الزامی است"),
    classId: Yup.string().required("کلاس الزامی است"),
    students: Yup.array().of(
      Yup.object({
        id: Yup.string().required("شناسه دانش‌آموز الزامی است"),
        grade: Yup.number()
          .min(0, "نمره باید بین 0 و 20 باشد")
          .max(20, "نمره باید بین 0 و 20 باشد")
          .required("نمره الزامی است"),
      })
    ),
  });

  const handleSubmit = async (values: FormValues) => {
    // const grades = values.students.reduce(
    //   (acc: { [key: string]: string }, student: StudentGrade) => {
    //     acc[student.id] = student.grade;
    //     return acc;
    //   },
    //   {}
    // );
    // const response = await callApi("/api/exams", "POST", {
    //   date: values.date,
    //   course: values.course,
    //   classId: values.classId,
    //   grades,
    // });
    // console.log("Exam created:", response.data);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <div className="flex flex-col md:flex-row gap-4">
              <div className="w-full md:w-1/3">
                <Input
                  name="date"
                  lable="تاریخ"
                  type="date"
                  inputClassName="border-green-500"
                />
              </div>
              <div className="w-full md:w-1/3">
                <label className="block text-sm font-medium text-gray-700">
                  درس:
                </label>
                <Field
                  as="select"
                  name="course"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                >
                  <option value="">انتخاب درس</option>
                  {allCourses.map((course: any) => (
                    <option key={course.id} value={course.id}>
                      {course.name}
                    </option>
                  ))}
                </Field>
              </div>
              <div className="w-full md:w-1/3">
                <label className="block text-sm font-medium text-gray-700">
                  کلاس:
                </label>
                <Field
                  as="select"
                  name="classId"
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                >
                  <option value="">انتخاب کلاس</option>
                  {allClasses.map((classItem: any) => (
                    <option key={classItem.id} value={classItem.id}>
                      {classItem.name}
                    </option>
                  ))}
                </Field>
              </div>
            </div>

            <FieldArray name="students">
              {({ push, remove }) => (
                <div className="mt-6">
                  <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                    <thead className="bg-green-500 text-white">
                      <tr>
                        <th className="py-2 px-4 text-right">دانش‌آموز</th>
                        <th className="py-2 px-4 text-right">نمره</th>
                        <th className="py-2 px-4 text-right">عملیات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {values.students.map((student, index) => (
                        <tr key={index} className="border-b border-gray-300">
                          <td className="py-2 px-4 text-right">
                            <Field
                              as="select"
                              name={`students.${index}.id`}
                              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                            >
                              <option value="">انتخاب دانش‌آموز</option>
                              {allStudents.map((student: any) => (
                                <option key={student.id} value={student.id}>
                                  {student.name}
                                </option>
                              ))}
                            </Field>
                          </td>
                          <td className="py-2 px-4 text-right">
                            <Input
                              name={`students.${index}.grade`}
                              lable=""
                              type="number"
                              inputClassName="w-full border-green-500"
                            />
                          </td>
                          <td className="py-2 px-4 text-center">
                            <button
                              type="button"
                              onClick={() => remove(index)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <TrashIcon className="h-5 w-5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <button
                    type="button"
                    onClick={() => push({ id: "", grade: "" })}
                    className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-md shadow hover:bg-green-600"
                  >
                    افزودن دانش‌آموز
                  </button>
                </div>
              )}
            </FieldArray>

            <button
              type="submit"
              className="mt-6 w-full py-2 px-4 bg-green-500 text-white font-semibold rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              ثبت امتحان
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ExamForm;
