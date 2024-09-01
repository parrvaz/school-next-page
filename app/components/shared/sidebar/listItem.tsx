import { ChevronDownIcon, HomeIcon } from "@heroicons/react/20/solid";
import { FC, useState } from "react";
import { ListItemProps } from "@/app/contracts/auth";
import Link from "next/link";

const ListItem: FC<ListItemProps> = ({
  name,
  lable,
  hasSub,
  url,
  icon,
  subList,
  setSelect,
  selectedItem,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = (name: string) => {
    setSelect(name);
  };

  return (
    <>
      <li key={name} className="mb-4">
        <Link
          href={url ?? ""}
          className={`flex justify-between items-center p-2  hover:bg-green-300 rounded-md transition-colors duration-300 ${selectedItem === name ? "bg-green-300" : "bg-white hover:bg-green-300"} `}
          onClick={hasSub ? () => toggleDropdown() : () => handleClick(name)}
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
                  className={`block p-2 text-sm hover:bg-green-300 rounded-md text-right transition-colors duration-300 ${selectedItem === item.name ? "bg-green-300" : "bg-white hover:bg-green-300"}`}
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
