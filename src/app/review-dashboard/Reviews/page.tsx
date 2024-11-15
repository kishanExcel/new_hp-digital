"use client";
import { MenuIcon } from "@/svgs/checkIn/svgs";
import React, { useEffect, useState } from "react";

import { SearchSvg } from "@/svgs/seo-screens/svgs";
import SeoDatePicker from "@/components/seo-screens/SeoDatePicker";
import CalenderDropdown from "@/components/seo-screens/CalenderDropdown";
import EmployeeListTable from "@/components/seo-screens/EmployeeListTable";
import LeaderBoardTable, {
  LeaderboardTable,
} from "@/components/review-dashboard-mobile/LeaderBoardTable";
import LocationPerformanceTable from "@/components/review-dashboard-mobile/LocationPerformanceTable";
import ReviewTable from "@/components/review-dashboard-mobile/ReviewTable";
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

  // Ensure consistent rendering on client-side
  useEffect(() => {
    setPage(window.localStorage.getItem("page") || "");
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col absolute top-0 w-full bg-[#F4F4F4]">
        <div className="w-full bg-[#F4F4F4]">
          <div className="w-full justify-center relative flex flex-col ">
            <ReviewNavbar heading={"Review Dashboard"} />
          </div>
          <div className="px-4 md:px-[10%]">
            <div className="flex flex-col gap-2 py-3">
              <div className="flex justify-between items-center ">
                <div className="bg-[#F4F4F4] md:bg-[#631363] pl-[5%] text-[#6D6D6D] md:text-white font-[Arial] text-xl font-semibold  w-full rounded-none md:rounded-3xl py-1  md:py-4 ">
                  Reviews
                </div>
              </div>
              <div className="py-0 w-fit md:py-2 my-0 md:my-3 ">
                <SeoDatePicker bgColor="#FFFFFF" />
              </div>

              <div className="flex justify-between items-start px-2 w-full">
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
            <div className="w-full flex py-2 items-center justify-center">
              <ReviewTable />
            </div>
          </div>
        </div>
        {/* <LeaderboardTable /> */}

        <div className="flex relative z-20 md:hidden justify-center items-center bg-[#40F440] h-[55px] rounded-t-3xl"></div>
      </div>
    </div>
  );
};

export default LocationPerformance;
