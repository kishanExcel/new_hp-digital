"use client";
import { MenuIcon } from "@/svgs/checkIn/svgs";
import React, { useState } from "react";

import { SearchSvg } from "@/svgs/seo-screens/svgs";
import SeoDatePicker from "@/components/seo-screens/SeoDatePicker";
import CalenderDropdown from "@/components/seo-screens/CalenderDropdown";
import EmployeeListTable from "@/components/seo-screens/EmployeeListTable";
import ReviewNavbar from "@/components/review-dashboard-mobile/ReviewNavbar";
import LeaderBoardTable, {
  LeaderboardTable,
} from "@/components/review-dashboard-mobile/LeaderBoardTable";

const Typography: React.CSSProperties = {
  fontFamily: "Arial",
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

const Leaderboard = () => {
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
    <div className="flex -ml-2 justify-center items-center w-full">
      <div className="flex flex-col w-full ml-4  absolute top-0 bg-[#F4F4F4]">
        {/* <div className="flex md:hidden rounded-b-3xl  items-center  justify-center w-full h-[60px] bg-[#E0E0E0]">
          <div className="flex px-5 ml-7 py-4">
            <MenuIcon />
          </div>
          <div className="flex -ml-10 justify-center items-center flex-grow">
            <span style={CheckInStyle}>Review Dashboard </span>
          </div>
        </div> */}
        <div className="w-full justify-center relative flex flex-col ">
          <ReviewNavbar heading={"Review Dashboard"} />
        </div>
        <div className="px-4 md:px-[10%]">
          <div className="flex flex-col mt-3 gap-2 py-3">
            <div className="flex justify-between items-center ml-0 ">
              <div className="bg-[#631363] pl-[5%] text-white font-[Arial] text-lg font-semibold hidden md:flex  w-full rounded-2xl py-4">
                Leaderboard Report
              </div>
            </div>
            <div className="flex w-full px-0 md:px-4  md:justify-between gap-1 justify-normal ">
              <div className="w-fit">
                <div className="py-2 md:my-3 h-fit my-2">
                  <SeoDatePicker bgColor="#FFFFFF" />
                </div>
                <div className="rounded-xl flex border border-[#5F1762] w-fit">
                  <button className="px-2 py-1 outline-none rounded-l-xl h-fit text-xs md:text-sm md:font-semibold bg-[#631363] text-white">
                    City
                  </button>
                  <div className="bg-[#631363] w-full border border-[#631363]"></div>
                  <button className="px-2 py-1 h-fit text-xs rounded-xl outline-none  md:text-sm font-semibold text-[#631363] bg-[#F4F4F4]">
                    Employee
                  </button>
                </div>
              </div>
              <div className="py-2 md:ml-1 ml-0 flex justify-end items-end md:items-start w-full flex-col md:flex-row gap-2">
                <button className="bg-[#631363] p-2 h-fit w-fit text-[10px] md:text-sm font-semibold  text-white rounded-lg">
                  Create Check-In
                </button>
                <button className="bg-[#40F440] p-2 h-fit w-fit text-[10px] md:text-sm font-semibold  text-black rounded-lg">
                  Request Review
                </button>
              </div>
            </div>

            <div className="flex justify-between items-start px-0 md:px-2 ml-2 ">
              <div className="flex gap-3 flex-1 pt-2 justify-start items-center">
                <span
                  className="text-[#6D6D6D] justify-start items-start text-xs md:text-lg font-normal md:font-medium"
                  style={{
                    ...Typography,
                  }}>
                  Show
                </span>
                <CalenderDropdown
                  options={pages}
                  value={page}
                  onChange={handlePageChange}
                />
                <span
                  className="text-[#6D6D6D] justify-start items-start text-xs md:text-lg font-normal md:font-medium"
                  style={{
                    ...Typography,
                  }}>
                  Entries
                </span>
              </div>
              <div className="flex w-full flex-1 relative justify-end items-center py-2">
                <input
                  type="text"
                  className="h-[30px] w-[80%] md:w-[70%] lg:md:w-[40%] placeholder:text-start pl-[22%] text-xs md:text-sm md:pl-[11%] bg-[#FFFFFF] text-start text-[#6D6D6D] rounded-full focus:outline-none"
                  placeholder="Search"
                />
                <div className="absolute inset-y-0 left-[20%] md:left-[30%] lg:left-[60%]  flex justify-center items-center py-2 px-4">
                  <SearchSvg />
                </div>
              </div>
            </div>
          </div>
          <div className=" h-full w-full flex items-center justify-center ">
            <LeaderboardTable />
          </div>
        </div>
        {/* <LeaderboardTable /> */}

        <div className="flex relative  md:hidden z-20 mt-5 justify-center items-center w-full bg-[#40F440] h-[55px] rounded-t-3xl"></div>
      </div>
    </div>
  );
};

export default Leaderboard;
