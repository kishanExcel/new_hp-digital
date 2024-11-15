"use client";
import React, { useState } from "react";
import SeoEmployeeListTable from "./SeoEmployeeTable";
import { SearchSvg } from "@/svgs/seo-screens/svgs";
import CalenderDropdown from "../seo-screens/CalenderDropdown";
import "react-datepicker/dist/react-datepicker.css";

import {
  SeoDownloadSvg,
  SeoSaveSvg,
  SeoScheduleSvg,
  SeoSearchSvg,
  SeoShareSvg,
} from "@/svgs/seo-desktop/svgs";
import SeoDatePicker from "../seo-screens/SeoDatePicker";

const Typography: React.CSSProperties = {
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

const SeoCheckInReviewRequest: React.FC = () => {
  const [page, setPage] = useState<string>("");

  const pages = [
    { value: "11", label: "1" },
    { value: "12", label: "2" },
    { value: "13", label: "3" },
    { value: "14", label: "4" },
    { value: "15", label: "5" },
    { value: "16", label: "6" },
  ];

  const handlePageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPage(event.target.value);
  };

  return (
    <div className="w-full flex-col flex my-10 justify-center items-center flex-auto grow gap-2">
      <div className="flex w-full h-full px-7 gap-3 justify-end items-center">
        <span
          className="text-[#6D6D6D] w-[150px] cursor-pointer bg-[#631363] rounded-lg py-4 text-center items-center justify-center"
          style={{ ...Typography, fontSize: "14px", color: "#fff" }}
        >
          Create Check-In
        </span>
        <span
          className="text-[#6D6D6D] w-[150px] cursor-pointer bg-[#40F440] rounded-lg py-4 text-center items-center justify-center"
          style={{ ...Typography, fontSize: "14px", color: "#3D3D3D" }}
        >
          Request Review
        </span>
      </div>
      <div className="flex w-full h-full px-7 justify-start items-center">
        <div className="flex relative justify-center items-center py-1">
          <input
            type="text"
            className="w-[250px] h-[45px] text-[17px] font-semibold bg-[#FFF] pl-12 text-[#6D6D6D] rounded-full focus:outline-none"
            placeholder="Search"
          />
          <div className="absolute inset-y-0 -left-1 flex justify-center items-center py-2 px-4">
            <SeoSearchSvg />
          </div>
        </div>
      </div>
      <div className=" w-full ml-12">
      <SeoDatePicker />
      </div>

      <div className="flex w-full h-full px-7 justify-between items-center">
        <div className="flex gap-3 pt-2 justify-center items-center">
          <span
            className="text-[#6D6D6D] justify-start items-start"
            style={{ ...Typography, fontSize: "14px", fontWeight: 200 }}
          >
            Show
          </span>
          <CalenderDropdown
            bgColor="#FFF"
            options={pages}
            value={page}
            onChange={handlePageChange}
          />
          <span
            className="text-[#6D6D6D] justify-start items-start"
            style={{ ...Typography, fontSize: "14px", fontWeight: 200 }}
          >
            Entries
          </span>
        </div>
        <div className="flex gap-3 pt-2 justify-center items-center">
          <div className="flex px-4 mt-3 gap-2  justify-center items-center  ml-5 py-3 w-[400px]">
            <div className="flex cursor-pointer justify-center items-center gap-2 text-[#6D6D6D] w-[150px] bg-[#631363] rounded-lg py-2 h-[30px]">
              <SeoShareSvg />
              <span
                className=" text-center items-center justify-center"
                style={{ ...Typography, fontSize: "12px", color: " #fff " }}
              >
                Share
              </span>
            </div>{" "}
            <div className="flex cursor-pointer justify-center items-center gap-2 text-[#6D6D6D] w-[150px] bg-[#631363] rounded-lg py-2 h-[30px]">
              <SeoSaveSvg />
              <span
                className=" text-center items-center justify-center"
                style={{ ...Typography, fontSize: "12px", color: " #fff " }}
              >
                Save
              </span>
            </div>{" "}
            <div className="flex  cursor-pointer justify-center items-center gap-2 text-[#6D6D6D] w-[150px] bg-[#631363] rounded-lg py-2 h-[30px]">
              <SeoScheduleSvg />
              <span
                className=" text-center items-center justify-center"
                style={{ ...Typography, fontSize: "12px", color: " #fff " }}
              >
                Schedule
              </span>
            </div>{" "}
            <div className="flex cursor-pointer justify-center items-center gap-2 text-[#6D6D6D] w-[150px] bg-[#631363] rounded-lg py-2 h-[30px]">
              <SeoDownloadSvg />
              <span
                className=" text-center items-center justify-center"
                style={{ ...Typography, fontSize: "12px", color: " #fff " }}
              >
                Download
              </span>
            </div>{" "}
          </div>
        </div>
      </div>
      <SeoEmployeeListTable />
    </div>
  );
};

export default SeoCheckInReviewRequest;
