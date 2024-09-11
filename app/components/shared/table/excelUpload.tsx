import React, { useState } from "react";
import * as XLSX from "xlsx";

function ExcelUpload() {
  const [excelData, setExcelData] = useState([]);

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0]; // فایل اکسل
    const reader = new FileReader();

    reader.onload = (e) => {
      const binaryStr = e?.target?.result;
      const workbook = XLSX.read(binaryStr, { type: "binary" });
      const worksheetName = workbook.SheetNames[0]; // اولین شیت را انتخاب کنید
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet); // تبدیل شیت به JSON
      setExcelData(data);
    };

    reader.readAsBinaryString(file); // فایل اکسل را به رشته باینری تبدیل می‌کند
  };

  return (
    <div className="p-4">
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={handleFileUpload}
        className="mb-4"
      />
      <table className="table-auto w-full">
        <thead>
          <tr>
            {excelData.length > 0 &&
              Object.keys(excelData[0]).map((key) => (
                <th key={key} className="px-4 py-2 border">
                  {key}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {excelData.map((row, index) => (
            <tr key={index}>
              {Object.values(row).map((value, i) => (
                <td key={i} className="border px-4 py-2">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ExcelUpload;
