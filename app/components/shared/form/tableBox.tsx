import { ErrorMessage, Field, FieldArray } from "formik";
import { FC } from "react";
import Input from "./input";
import { TrashIcon } from "@heroicons/react/16/solid";

interface ItemInterface {
  id: string;
  name?: string;
  title?: string;
}

interface TableBoxProps {
  name: string;
  lable: string;
  columns: { name: string; lable: string }[];
  allItems: [];
}

const TableBox: FC<TableBoxProps> = ({ name, lable, columns, allItems }) => {
  return (
    <>
      <FieldArray name={name}>
        {({ push, remove }) => (
          <div className="mt-6">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
              <thead className="bg-green-500 text-white">
                <tr>
                  <th className="py-2 px-4 text-right">{lable}</th>

                  {columns.map((item) => (
                    <th className="py-2 px-4 text-right">{item.lable}</th>
                  ))}
                  <th className="py-2 px-4 text-right">عملیات</th>
                </tr>
              </thead>
              <tbody>
                {items.map((elements, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td className="py-2 px-4 text-right">
                      <Field
                        as="select"
                        name={`${items}.${index}.id`}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                      >
                        <option value="">انتخاب {lable}</option>
                        {allItems.map((item: ItemInterface) => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </Field>
                    </td>
                    {columns.map((column) => (
                      <td className="py-2 px-4 text-right">
                        <Input
                          name={`${items}.${index}.${column.name}`}
                          lable=""
                          type="number"
                          //   inputClassName="w-full border-green-500"
                        />
                      </td>
                    ))}

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
              افزودن {lable}
            </button>
          </div>
        )}
      </FieldArray>
    </>
  );
};

export default TableBox;
