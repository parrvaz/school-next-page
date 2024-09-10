import { SWRGetCall } from "@/app/hooks/swrGetCall";
import { MultiSelect } from "primereact/multiselect";
import { useState, useEffect } from "react";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { ItemShortProps } from "@/app/contracts/auth";

interface FilterProps {
  setFilterUrl: (url: string) => void;
  student?: any;
}

const Filter = (props: FilterProps) => {
  const role = localStorage.getItem("role");
  const role_id = localStorage.getItem("role_id");
  const role_name = localStorage.getItem("role_name");

  const [filterSelections, setFilterSelections] = useState({
    classrooms: [] as ItemShortProps[],
    courses: [] as ItemShortProps[],
    students:
      role === "student" && role_id ? [{ id: role_id, name: role_name }] : [],
  });

  const { data, isLoading, error } = SWRGetCall("/reports/listItems");

  useEffect(() => {
    const cls = filterSelections.classrooms
      .map((item: ItemShortProps) => `classroom[]=${item.id}`)
      .join("&");
    const crs = filterSelections.courses
      .map((item: ItemShortProps) => `course[]=${item.id}`)
      .join("&");
    const std = filterSelections.students
      .map((item: any) => `student[]=${item.id}`)
      .join("&");

    const url = `${cls}${crs}${std}`;
    props.setFilterUrl(url); // به روز رسانی URL با هر تغییر
  }, [filterSelections]); // اجرا هر زمان که مقادیر سلکت تغییر کنند

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const classroom = data?.classrooms?.data;
  const course = data?.courses?.data;
  const student = data?.students?.data;

  const handleSelectionChange = (type: string, value: ItemShortProps[]) => {
    setFilterSelections((prevSelections) => ({
      ...prevSelections,
      [type]: value, // به روزرسانی سلکت‌های مختلف در state
    }));
  };

  return (
    <>
      <div className="flex flex-col w-full md:flex-row gap-4">
        {role !== "student" && (
          <MultiSelect
            value={filterSelections.classrooms}
            onChange={(e) => handleSelectionChange("classrooms", e.value)}
            options={classroom}
            optionLabel="title"
            filter
            placeholder="انتخاب کلاس"
            className="md:w-1/3 bg-white border-2 hover:border-green-300 rounded-md"
          />
        )}
        <MultiSelect
          value={filterSelections.courses}
          onChange={(e) => handleSelectionChange("courses", e.value)}
          options={course}
          optionLabel="name"
          filter
          placeholder="انتخاب درس"
          className="md:w-1/3 bg-white border-2 hover:border-green-300 rounded-md"
        />
        <MultiSelect
          value={filterSelections.students}
          onChange={(e) => handleSelectionChange("students", e.value)}
          options={student}
          optionLabel="name"
          filter
          placeholder="انتخاب دانش آموز"
          className="md:w-1/3 bg-white border-2 hover:border-green-300 rounded-md"
          disabled={role === "student"}
        />
      </div>
    </>
  );
};

export default Filter;
