import { ChevronDownIcon, HomeIcon } from "@heroicons/react/20/solid";
import { ErrorMessage, Field } from "formik";
import { FC, useState } from "react";

interface ListItemProps {
  name: string;
  lable: string;
  type?: string;
  listItemClassName?: string;
  errorClassName?: string;
  lableClassName?: string;
}

const ListItem: FC<ListItemProps> = ({
  name,
  lable,
  type = "text",
  listItemClassName,
  errorClassName,
  lableClassName,
}) => {
  const [isOpen, setIsOpen] = useState({
    dashboard: false,
    users: false,
    reports: false,
  });

  const toggleDropdown = (section: string) => {
    setIsOpen((prev: any) => ({ ...prev, [section]: !prev[section] }));
  };
  return (
    <>
      <li className="mb-4">
        <a
          href="#"
          className="flex justify-between items-center p-2 bg-white hover:bg-green-300 rounded-md transition-colors duration-300"
          onClick={() => toggleDropdown("dashboard")}
        >
          <span className="flex items-center justify-start w-full">
            <HomeIcon className="h-6 w-6 ml-2 text-gray-600" />
            داشبورد
          </span>
          <ChevronDownIcon
            className={`h-5 w-5 text-gray-600 transition-transform duration-300 ${
              isOpen.dashboard ? "rotate-180" : ""
            }`}
          />
        </a>
        {isOpen.dashboard && (
          <ul className="mt-2 pr-4 space-y-2">
            <li>
              <a
                href="#"
                className="block p-2 text-sm bg-white hover:bg-green-300 rounded-md text-right transition-colors duration-300"
              >
                زیرآیتم ۱
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-2 text-sm bg-white hover:bg-green-300 rounded-md text-right transition-colors duration-300"
              >
                زیرآیتم ۲
              </a>
            </li>
          </ul>
        )}
      </li>
    </>
  );
};

export default ListItem;
