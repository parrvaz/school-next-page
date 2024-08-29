import React from "react";
import Sidebar from "../shared/sidebar/sidbar";

const PanelLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-50 overflow-y-auto">{children}</div>
    </div>
  );
};

export default PanelLayout;
