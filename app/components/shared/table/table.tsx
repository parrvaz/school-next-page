import React from "react";
import { TrashIcon, PencilIcon, EyeIcon } from "@heroicons/react/16/solid";

interface TableProps {
  data: { [key: string]: any }[];
  columns: { header: string; accessor: string }[];
}

const Table: React.FC<TableProps> = ({ data, columns }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            {/* <th className="py-2 px-4 text-gray-600 border-b border-gray-200 text-right">
              #
            </th> */}
            {columns.map((column) => (
              <th
                key={column.accessor}
                className="py-2 px-4 text-gray-600 border-b border-gray-200 text-right"
              >
                {column.header}
              </th>
            ))}
            <th className="py-2 px-4 text-gray-600 border-b border-gray-200 text-right">
              عملیات
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-green-100">
              {/* <td className="py-2 px-4 border-b border-gray-200 text-right text-gray-700">
                {rowIndex + 1}
              </td> */}
              {columns.map((column) => (
                <td
                  key={column.accessor}
                  className="py-2 px-4 border-b border-gray-200 text-right text-gray-700"
                >
                  {row[column.accessor]}
                </td>
              ))}
              <td className="py-2 px-4 border-b border-gray-200 text-right">
                <div className="flex items-center justify-end space-x-2">
                  <button className="text-green-500 hover:text-green-700">
                    <EyeIcon className="h-5 w-5" />
                  </button>
                  <button className="text-blue-500 hover:text-blue-700">
                    <PencilIcon className="h-5 w-5" />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <TrashIcon className="h-5 w-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
