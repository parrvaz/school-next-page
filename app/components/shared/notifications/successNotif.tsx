import React, { useState, useEffect } from "react";

const SuccessNotification = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000); // ناپدید شدن پس از 3 ثانیه

    return () => clearTimeout(timer); // پاکسازی تایمر
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg">
      عملیات با موفقیت انجام شد
    </div>
  );
};

export default SuccessNotification;
