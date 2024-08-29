import { ChevronDownIcon, HomeIcon } from "@heroicons/react/20/solid";
import { FC, useState } from "react";
import { SubListItemProps } from "@/app/contracts/auth";
import Link from "next/link";

interface ListItemProps {
  name: string;
  lable: string;
  hasSub: boolean;
  isOpen?: boolean;
  url?: string;
  setOpen?: any;
  icon?: any;
  subList?: SubListItemProps[];
  setSelect?: any;
  selectedItem?: string;
}

const ListItem: FC<ListItemProps> = ({
  name,
  lable,
  hasSub,
  isOpen = false,
  url,
  setOpen,
  icon,
  subList,
  setSelect,
  selectedItem = "dashboard",
}) => {
  const handleClick = (name: string) => {
    setSelect(name);
  };
  return (
    <>
      <li id={name} className="mb-4">
        <Link
          href={url ?? ""}
          className={`flex justify-between items-center p-2 bg-white hover:bg-green-300 rounded-md transition-colors duration-300 ${selectedItem === name ? "bg-green-300" : "bg-white hover:bg-green-300"}`}
          onClick={hasSub ? setOpen : () => handleClick(name)}
        >
          <span className="flex items-center justify-start w-full">
            {icon}
            {lable}
          </span>
          {hasSub && (
            <ChevronDownIcon
              className={`h-5 w-5 text-gray-600 transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          )}
        </Link>
        {isOpen && (
          <ul className="mt-2 pr-4 space-y-2">
            {subList?.map((item) => (
              <li id={item.name}>
                <Link
                  href={item.url}
                  className={`block p-2 text-sm bg-white hover:bg-green-300 rounded-md text-right transition-colors duration-300 ${selectedItem === item.name ? "bg-green-300" : "bg-white hover:bg-green-300"}`}
                  onClick={() => handleClick(item.name)}
                >
                  {item.lable}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    </>
  );
};

export default ListItem;
