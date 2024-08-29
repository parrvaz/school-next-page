import { SubListItemProps } from "@/app/contracts/auth";
import Link from "next/link";
import { FC } from "react";

const SubListItem: FC<SubListItemProps> = ({ name, lable, url }) => {
  return (
    <>
      <li id={name}>
        <Link
          href={url}
          className={`block p-2 text-sm bg-white hover:bg-green-300 rounded-md text-right transition-colors duration-300 `}
        >
          {lable}
        </Link>
      </li>
    </>
  );
};

export default SubListItem;
