/* eslint-disable react/jsx-no-useless-fragment */
import React, { ReactNode } from "react";
import Skeleton from "./skeleton";

const LoadingBox: React.FC<{
  loading: boolean;
  error: boolean;
  reload: () => void;
  children: ReactNode;
}> = ({ loading, error, reload, children }) =>
  error ? (
    <div className="text-center">
      <button onClick={reload} className="btn btn-primary">
        تلاش مجدد
      </button>
    </div>
  ) : loading ? (
    <div className="p-3">
      <Skeleton />
    </div>
  ) : (
    <>{children}</>
  );

export default LoadingBox;
