import { SubListItemProps } from "@/app/contracts/auth";
import { FC } from "react";

const SubListItem: FC<SubListItemProps> = ({
  name,
  lable,
  subListItemClassName,
}) => {
  return (
    <>
      <li id={name}>
        <a
          href="#"
          className={`block p-2 text-sm bg-white hover:bg-green-300 rounded-md text-right transition-colors duration-300 ${subListItemClassName ?? ""}`}
        >
          {lable}
        </a>
      </li>
    </>
  );
};

export default SubListItem;
