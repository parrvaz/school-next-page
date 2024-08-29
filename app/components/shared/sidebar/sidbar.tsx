// components/Sidebar.js

import React, { useState } from "react";
import { HomeIcon, UsersIcon, ChartBarIcon } from "@heroicons/react/24/outline";
import ListItem from "./listItem";

export default function Sidebar() {
  const [selectedItem, setSelectedItem] = useState("dashboard");

  const [isOpen, setIsOpen] = useState({
    users: false,
    reports: false,
  });

  const toggleDropdown = (section: string) => {
    setIsOpen((prev: any) => ({ ...prev, [section]: !prev[section] }));
  };
  console.log(selectedItem);

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
            url="/admin"
            icon={<HomeIcon className="h-6 w-6 ml-2 text-gray-600" />}
            hasSub={false}
            setSelect={setSelectedItem}
            selectedItem={selectedItem}
          />
          <ListItem
            name="users"
            lable="کاربران"
            icon={<UsersIcon className="h-6 w-6 ml-2 text-gray-600" />}
            hasSub={true}
            isOpen={isOpen.users}
            setSelect={setSelectedItem}
            selectedItem={selectedItem}
            setOpen={() => toggleDropdown("users")}
            subList={[
              {
                name: "userList",
                lable: "لیست کاربران",
                url: "/admin/users/userList",
              },
              {
                name: "gradeList",
                lable: "لیست پایه ها",
                url: "/admin/users/gradeList",
              },
            ]}
          />
          <ListItem
            name="reports"
            lable="گزارشات"
            icon={<ChartBarIcon className="h-6 w-6 ml-2 text-gray-600" />}
            hasSub={true}
            isOpen={isOpen.reports}
            setSelect={setSelectedItem}
            selectedItem={selectedItem}
            setOpen={() => toggleDropdown("reports")}
            subList={[
              {
                name: "logs",
                lable: "خطاها",
                url: "/admin/users/userList",
              },
              {
                name: "registers",
                lable: "ثبت نام ها",
                url: "/admin/users/gradeList",
              },
            ]}
          />
        </ul>
      </div>
    </div>
  );
}
