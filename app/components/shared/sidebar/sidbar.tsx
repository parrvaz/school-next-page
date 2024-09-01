// components/Sidebar.js

import React, { FC, useState } from "react";
import { HomeIcon, UsersIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import ListItem from "./listItem";
import { SidebarProps } from "@/app/contracts/auth";

const Sidebar: FC<SidebarProps> = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState("dashboard");

  return (
    <div
      className="hidden md:block h-screen w-64 bg-white text-gray-800 flex flex-col"
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
  );
};

export default Sidebar;
