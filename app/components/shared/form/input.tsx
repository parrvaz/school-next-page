import { ErrorMessage, Field } from "formik";
import { FC } from "react";

interface InputProps {
  name: string;
  lable: string;
  type?: string;
  inputClassName?: string;
  errorClassName?: string;
  lableClassName?: string;
}

const Input: FC<InputProps> = ({
  name,
  lable,
  type = "text",
  inputClassName,
  errorClassName,
  lableClassName,
}) => {
  return (
    <>
      <label
        htmlFor={name}
        className={`block text-sm font-medium leading-5 text-gray-700 ${lableClassName ?? ""}`}
      >
        {lable}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        required
        className={`mt-1 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm ${inputClassName ?? ""}`}
      />
      <ErrorMessage
        name={name}
        className={`text-red-500 text-sm ${errorClassName ?? ""}`}
        component="div"
      />
    </>
  );
};

export default Input;
