import React, { FC, useState } from "react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/outline";
import ListItem from "./listItem";
import { SidebarProps } from "@/app/contracts/auth";

const Sidebar: FC<SidebarProps> = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState("dashboard");
  const [isOpen‌Burger, setIsOpen‌Burger] = useState(false);

  return (
    <div className=" md:hidden">
      {/* Burger Menu Button */}
      <div className="bg-white p-4 md:hidden flex justify-between items-center">
        <h1 className="text-xl font-bold text-gray-800">منو</h1>
        <button
          onClick={() => setIsOpen‌Burger(!isOpen‌Burger)}
          className="text-gray-800 focus:outline-none"
        >
          {isOpen‌Burger ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`${
          isOpen‌Burger ? "block" : "hidden"
        } md:block h-screen w-64 bg-white text-gray-800 flex flex-col`}
        dir="rtl"
      >
        <div className="flex-1 overflow-y-auto">
          <ul className="p-4">
            {data?.map((item) => (
              <ListItem
                name={item.name}
                lable={item.lable}
                url={item.url}
                icon={item.icon}
                hasSub={item.hasSub}
                setSelect={setSelectedItem}
                selectedItem={selectedItem}
                subList={item.subList}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
