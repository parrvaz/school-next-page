import React from "react";

const Skeleton: React.FC = () => (
  <div className="w-full flex-col items-center">
    <div className="bg-gray-300 my-5 h-5 animate-pulse rounded-full bg-black11" />
    <div className="bg-gray-300 my-5 h-5 animate-pulse rounded-full bg-black11" />
    <div className="bg-gray-300 my-5 h-5 animate-pulse rounded-full bg-black11" />
    <div className="bg-gray-300 my-5 h-5 animate-pulse rounded-full bg-black11" />
    <div className="bg-gray-300 my-5 h-5 animate-pulse rounded-full bg-black11" />
    <div className="bg-gray-300 my-5 h-5 animate-pulse rounded-full bg-black11" />
  </div>
);

export default Skeleton;
