"use client";
import { MenuIcon } from "@/svgs/checkIn/svgs";
import React, { useState } from "react";
import EmployeeListTable from "./EmployeeListTable";
import MemberDropDown from "../check-in/MemberDropDown";
import CalenderDropdown from "./CalenderDropdown";
import {
  CalanderSvg,
  DownloadSvg,
  SaveSvg,
  ScheduleSvg,
  SearchSvg,
  ShareSvg,
} from "@/svgs/seo-screens/svgs";
import SeoDatePicker from "./SeoDatePicker";

const Typography: React.CSSProperties = {
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

const CheckInStyle: React.CSSProperties = {
  ...Typography,
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

const SeoScreens = () => {
  const [activeTab, setActiveTab] = useState("city");
  const [page, setPage] = useState("");

  const handleActiveTab = (tab: string) => {
    setActiveTab(tab);
  };

  const pages = [
    { value: "11", label: "1" },
    { value: "12", label: "2" },
    { value: "13", label: "3" },
    { value: "14", label: "4" },
    { value: "15", label: "5" },
    { value: "16", label: "6" },
  ];

  const handlePageChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPage(event.target.value);
  };

  return (
    <div className="flex ml-2 justify-center items-center w-full">
      <div className="flex flex-col w-full min-w-[450px] ml-7  absolute top-0 lg:w-[450px] h-full ">
        <div className="flex rounded-b-3xl  items-center  justify-center w-full md:w-[450px] h-[60px] bg-[#E0E0E0]">
          <div className="flex px-5 ml-7 py-4">
            <MenuIcon />
          </div>
          <div className="flex -ml-10 justify-center items-center flex-grow">
            <span style={CheckInStyle}>SEO </span>
          </div>
        </div>
        <div className="flex flex-col mt-3 gap-2 py-3">
          <div className="flex justify-between items-center px-2 ml-4 ">
            <span
              className="text-[#6D6D6D]  justify-center items-center"
              style={{ ...Typography, fontSize: "20px" }}
            >
              Check-Ins & Review Requests
            </span>
          </div>
          <div className="py-2  my-3 ">
            <SeoDatePicker bgColor="#E0E0E0" />
          </div>
          <div className="flex items-end justify-end -mt-16 px-4 ">
            <span
              className="text-[#6D6D6D] px-2 bg-[#631363] rounded-lg cursor-pointer py-2 h-[30px] text-center items-end justify-end"
              style={{ ...Typography, fontSize: "12px", color: " #FFFFFF " }}
            >
             Create Check-In
            </span>
          </div>
          <div className="flex w-full justify-between items-start px-2 my-4 -ml-2 ">
            <div className="flex ml-4">
              <span
                onClick={() => handleActiveTab("city")}
                className="text-[#6D6D6D] flex px-4 border border-[#6D6D6D] rounded-l-full cursor-pointer py-2 h-[30px] text-center items-end justify-end"
                style={{
                  ...Typography,
                  fontSize: "12px",
                  color: activeTab === "city" ? "#FFFFFF" : "#6D6D6D",
                  backgroundColor: activeTab === "city" ? "#631363" : "transparent",
                }}
              >
                City
              </span>
              <span
                onClick={() => handleActiveTab("employee")}
                className="text-[#6D6D6D] px-3 border border-[#6D6D6D] rounded-r-full cursor-pointer py-2 h-[30px] text-center items-end justify-end"
                style={{
                  ...Typography,
                  fontSize: "12px",
                  color: activeTab === "employee" ? "#FFFFFF" : "#6D6D6D",
                  backgroundColor: activeTab === "employee" ? "#631363" : "transparent",
                }}
              >
                Employee
              </span>
            </div>
            <span
              className="text-[#6D6D6D]   bg-[#40F440] cursor-pointer rounded-lg px-2 py-2 h-[30px] text-center items-center justify-center"
              style={{ ...Typography, fontSize: "12px", color: " #3D3D3D " }}
            >
              Request Review
            </span>
          </div>
          <div className="flex justify-between items-start px-2 ml-4 ">
            <div className="flex gap-3 pt-2 justify-center items-center">
              <span
                className="text-[#6D6D6D] justify-start items-start"
                style={{ ...Typography, fontSize: "14px", fontWeight: "200" }}
              >
                Show
              </span>
              <CalenderDropdown
                options={pages}
                value={page}
                onChange={handlePageChange}
              />
              <span
                className="text-[#6D6D6D] justify-start items-start"
                style={{ ...Typography, fontSize: "14px", fontWeight: "200" }}
              >
                Entries
              </span>
            </div>
            <div className="flex relative justify-center items-center py-1">
              <input
                type="text"
                className="w-[150px] h-[30px] bg-[#f1f1f1] text-center text-[#6D6D6D] rounded-full focus:outline-none"
                placeholder="Search"
              />
              <div className="absolute inset-y-0 -left-1 flex justify-center items-center py-2 px-4">
                <SearchSvg />
              </div>
            </div>
          </div>
        </div>
        <EmployeeListTable />
        <div className="flex px-4 mt-3 gap-2 justify-center items-center ml-5 py-3 w-[400px]">
          <div className="flex justify-center items-center gap-2 text-[#6D6D6D] w-[150px] bg-[#631363] rounded-lg py-2 h-[30px]">
            <ShareSvg />
            <span
              className="text-center items-center justify-center"
              style={{ ...Typography, fontSize: "12px", color: "#fff" }}
            >
              Share
            </span>
          </div>
          <div className="flex justify-center items-center gap-2 text-[#6D6D6D] w-[150px] bg-[#631363] rounded-lg py-2 h-[30px]">
            <SaveSvg />
            <span
              className="text-center items-center justify-center"
              style={{ ...Typography, fontSize: "12px", color: "#fff" }}
            >
              Save
            </span>
          </div>
          <div className="flex justify-center items-center gap-2 text-[#6D6D6D] w-[150px] bg-[#631363] rounded-lg py-2 h-[30px]">
            <ScheduleSvg />
            <span
              className="text-center items-center justify-center"
              style={{ ...Typography, fontSize: "12px", color: "#fff" }}
            >
              Schedule
            </span>
          </div>
          <div className="flex justify-center items-center gap-2 text-[#6D6D6D] w-[150px] bg-[#631363] rounded-lg py-2 h-[30px]">
            <DownloadSvg />
            <span
              className="text-center items-center justify-center"
              style={{ ...Typography, fontSize: "12px", color: "#fff" }}
            >
              Download
            </span>
          </div>
        </div>
        <div className="flex relative z-20 mt-5 justify-center items-center w-[450px] bg-[#40F440] h-[55px] rounded-t-3xl"></div>
      </div>
    </div>
  );
};

export default SeoScreens;
