// components/Sidebar.js

import React, { useState } from "react";
import {
  HomeIcon,
  UsersIcon,
  ChartBarIcon,
  CogIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import ListItem from "./listItem";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState({
    dashboard: false,
    users: false,
    reports: false,
  });

  const toggleDropdown = (section: string) => {
    setIsOpen((prev: any) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div
      className="h-screen w-64 bg-white text-gray-800 flex flex-col"
      dir="rtl"
    >
      <div className="flex items-center justify-center h-20 bg-green-200">
        <h1 className="text-2xl font-bold">سمیم</h1>
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul className="p-4">
          <ListItem
            name="dashboard"
            lable="داشبورد"
            icon={<HomeIcon className="h-6 w-6 ml-2 text-gray-600" />}
            hasSub={false}
          />
          <ListItem
            name="users"
            lable="کاربران"
            icon={<UsersIcon className="h-6 w-6 ml-2 text-gray-600" />}
            hasSub={true}
            isOpen={isOpen.users}
            setOpen={() => toggleDropdown("users")}
            subList={[
              { name: "userList", lable: "لیست کاربران" },
              { name: "gradeList", lable: "لیست پایه ها" },
            ]}
          />
        </ul>
      </div>
    </div>
  );
}
