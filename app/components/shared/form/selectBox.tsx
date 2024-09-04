import { ItemShortProps } from "@/app/contracts/auth";
import { ErrorMessage, Field } from "formik";
import { FC } from "react";

interface SelectBoxProps {
  name: string;
  lable: string;
  items: ItemShortProps[];
}

const SelectBox: FC<SelectBoxProps> = ({ name, lable, items }) => {
  return (
    <>
      <label className="block text-sm font-medium text-gray-700">
        {lable}:
      </label>
      <Field
        as="select"
        name={name}
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
      >
        <option value="">انتخاب {lable}</option>
        {items?.map((item: ItemShortProps) => (
          <option key={item.id} value={item.id}>
            {item.name ?? item.title}
          </option>
        ))}
      </Field>{" "}
      <ErrorMessage
        name={name}
        className={`text-red-500 text-sm `}
        component="div"
      />
    </>
  );
};

export default SelectBox;
