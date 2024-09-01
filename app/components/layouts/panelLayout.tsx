import React, { FC } from "react";
import Sidebar from "../shared/sidebar/sidbar";
import { SidebarProps } from "@/app/contracts/auth";
import Header from "../shared/sidebar/header";
import HidenSidebar from "../shared/sidebar/hidenSidbar";

export interface PanelLayoutProps {
  children: React.ReactNode;
  sidebarData: SidebarProps;
}

const PanelLayout: FC<PanelLayoutProps> = ({ children, sidebarData }) => {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <HidenSidebar data={sidebarData.data} />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar data={sidebarData.data} />
          <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default PanelLayout;
