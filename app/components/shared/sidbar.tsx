// components/Sidebar.js

import React, { useState } from "react";
import {
  HomeIcon,
  UsersIcon,
  ChartBarIcon,
  CogIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
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
        <h1 className="text-2xl font-bold">حسابفا</h1>
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul className="p-4">
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
          <li className="mb-4">
            <a
              href="#"
              className="flex justify-between items-center p-2 bg-white hover:bg-green-300 rounded-md transition-colors duration-300"
              onClick={() => toggleDropdown("users")}
            >
              <span className="flex items-center justify-start w-full">
                <UsersIcon className="h-6 w-6 ml-2 text-gray-600" />
                اشخاص
              </span>
              <ChevronDownIcon
                className={`h-5 w-5 text-gray-600 transition-transform duration-300 ${
                  isOpen.users ? "rotate-180" : ""
                }`}
              />
            </a>
            {isOpen.users && (
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
          <li className="mb-4">
            <a
              href="#"
              className="flex justify-between items-center p-2 bg-white hover:bg-green-300 rounded-md transition-colors duration-300"
              onClick={() => toggleDropdown("reports")}
            >
              <span className="flex items-center justify-start w-full">
                <ChartBarIcon className="h-6 w-6 ml-2 text-gray-600" />
                گزارشات
              </span>
              <ChevronDownIcon
                className={`h-5 w-5 text-gray-600 transition-transform duration-300 ${
                  isOpen.reports ? "rotate-180" : ""
                }`}
              />
            </a>
            {isOpen.reports && (
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
          <li className="mb-4">
            <a
              href="#"
              className="flex items-center justify-start p-2 bg-white hover:bg-green-300 rounded-md transition-colors duration-300"
            >
              <CogIcon className="h-6 w-6 ml-2 text-gray-600" />
              تنظیمات
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
