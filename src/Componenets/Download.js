import React from "react";
import { saveAs } from "file-saver";
import XLSX from 'xlsx/dist/xlsx.full.min';
import { useSelector } from "react-redux";

const Download = () => {
    const jsonData = useSelector((state)=>state.auth.users);

  const handleDownload = () => {
    const worksheet = XLSX.utils.json_to_sheet(jsonData);

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet 1");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });

    const blob = new Blob([excelBuffer], { type: "application/octet-stream" });

    saveAs(blob, "data.xlsx");
  };

  return (
    <div>
      <button onClick={handleDownload}>Download Excel</button>
    </div>
  );
};

export default Download;
