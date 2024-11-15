"use client";
import { MenuIcon } from "@/svgs/checkIn/svgs";
import React, { useState } from "react";

import { SearchSvg } from "@/svgs/seo-screens/svgs";
import SeoDatePicker from "@/components/seo-screens/SeoDatePicker";
import CalenderDropdown from "@/components/seo-screens/CalenderDropdown";
import EmployeeListTable from "@/components/seo-screens/EmployeeListTable";
import LeaderBoardTable, {
  LeaderboardTable,
} from "@/components/review-dashboard-mobile/LeaderBoardTable";
import LocationPerformanceTable from "@/components/review-dashboard-mobile/LocationPerformanceTable";
import TeamReviewTable from "@/components/review-dashboard-mobile/TeamReviewTable";
import ReviewNavbar from "@/components/review-dashboard-mobile/ReviewNavbar";

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

const LocationPerformance = () => {
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
          <ReviewNavbar heading={"Review Dashboard"} />{" "}
        </div>
        <div className="px-4 md:px-[10%]">
          <div className="flex flex-col gap-2 py-3">
            <div className="flex justify-between items-center ml-0 ">
              <div className="bg-[#F4F4F4] md:bg-[#631363] pl-[5%] text-[#6D6D6D] md:text-white font-[Arial] text-xl font-semibold  w-full rounded-none md:rounded-3xl py-1  md:py-4 ">
                Team Review Request
              </div>
            </div>
            <div className="flex w-full md:justify-between gap-1 justify-normal ">
              <div className="w-fit px-0 md:md:px-5">
                <div className="py-2 md:my-3 h-fit my-2 ">
                  <SeoDatePicker bgColor="#FFFFFF" />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-start py-2 px-0 md:px-4">
              <div className="flex gap-3 flex-1 pl-1 justify-start items-center">
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
              <div className="flex w-full flex-1 relative justify-end items-center ">
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
          <div className=" h-full w-full flex items-center justify-center">
            <TeamReviewTable />
          </div>
        </div>
        {/* <LeaderboardTable /> */}

        <div className="flex relative  md:hidden z-20 mt-5 justify-center items-center w-full bg-[#40F440] h-[55px] rounded-t-3xl"></div>
      </div>
    </div>
  );
};

export default LocationPerformance;
