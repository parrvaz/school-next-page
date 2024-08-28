import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const AdminPanelLayout = ({ children }: Props) => {
  return (
    <div className="min-h-screen bg-gray-50  w-full text-2x1 ">{children}</div>
  );
};

export default AdminPanelLayout;
