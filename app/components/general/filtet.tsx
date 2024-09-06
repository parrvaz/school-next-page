import { SWRGetCall } from "@/app/hooks/swrGetCall";
import Input from "../shared/form/input";
import SelectBox from "../shared/form/selectBox";
import LoadingBox from "../shared/RHF/loadingBox";
import { useForm } from "react-hook-form";
import FormSelect from "../shared/RHF/formSelect";
import { ItemShortProps } from "@/app/contracts/auth";
import { MultiSelect } from "primereact/multiselect";
import { useState } from "react";
import "primereact/resources/themes/lara-light-cyan/theme.css";

interface FilterProps {
  setFilterUrl: (url: string) => void;
}

const Filter = (props: FilterProps) => {
  //   const { fields } = props;
  const [slcClassroom, setSlcClassroom] = useState([]);
  const [slcCourse, setSlcCourse] = useState([]);
  const [slcStudent, setSlcStudent] = useState([]);
  const { data, paginate, error, isLoading } = SWRGetCall("/reports/listItems");

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  const classroom = data?.classrooms?.data;
  const course = data?.courses?.data;
  const student = data?.students?.data;

  const clickHandler = () => {
    const cls = slcClassroom
      .map((item: ItemShortProps) => `classroom[]=${item.id}`)
      .join("&");
    const crs = slcCourse
      .map((item: ItemShortProps) => `course[]=${item.id}`)
      .join("&");
    const std = slcStudent
      .map((item: ItemShortProps) => `student[]=${item.id}`)
      .join("&");

    const url = `${cls}&${crs}&${std}`;
    props.setFilterUrl(url);
  };

  return (
    <>
      <div className="flex flex-col w-full md:flex-row gap-4">
        <MultiSelect
          value={slcClassroom}
          onChange={(e) => setSlcClassroom(e.value)}
          options={classroom}
          optionLabel="title"
          filter
          placeholder="انتخاب کلاس"
          className="md:w-1/4 bg-white border-2 hover:border-green-300 rounded-md md:"
        />
        <MultiSelect
          value={slcCourse}
          onChange={(e) => setSlcCourse(e.value)}
          options={course}
          optionLabel="name"
          filter
          placeholder="انتخاب درس"
          className="md:w-1/4 bg-white border-2 hover:border-green-300 rounded-md"
        />
        <MultiSelect
          value={slcStudent}
          onChange={(e) => setSlcStudent(e.value)}
          options={student}
          optionLabel="name"
          filter
          placeholder="انتخاب دانش آموز"
          className="md:w-1/4 bg-white border-2 hover:border-green-300 rounded-md"
        />
        <button
          onClick={clickHandler}
          className="w-full md:w-1/4 py-2 px-4 bg-green-300 font-semibold rounded-md shadow hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-300 focus:ring-offset-2"
        >
          اعمال تغییرات
        </button>
      </div>
    </>
  );
};

export default Filter;
