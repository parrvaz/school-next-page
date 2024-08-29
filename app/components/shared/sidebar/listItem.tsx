import { ChevronDownIcon, HomeIcon } from "@heroicons/react/20/solid";
import { FC } from "react";
import SubListItem from "./subListItem";
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
}) => {
  return (
    <>
      <li id={name} className="mb-4">
        <Link
          href={url ?? ""}
          className="flex justify-between items-center p-2 bg-white hover:bg-green-300 rounded-md transition-colors duration-300"
          onClick={setOpen}
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
              <SubListItem name={item.name} lable={item.lable} url={item.url} />
            ))}
          </ul>
        )}
      </li>
    </>
  );
};

export default ListItem;
