"use client";
import { MenuIcon } from "@/svgs/checkIn/svgs";
import React, { useState } from "react";
import HeadBar from "../citations-builder/HeadBar";
import TitleRatingBar from "./TitleRatingBar";
import { DownSvg, UploadSvg } from "@/svgs/seo-screens/svgs";
import LineProgressBar from "./LineProgressBar";
import ProgressBarCard from "./ProgressBarCard";
import PerformanceTable from "./PerformanceTable";
import SeoDropDown from "../seo-desktop/SeoDropDown";
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
const PerformanceOverview = () => {
  const [rankingSelected, setRankingSelected] = useState("roof repair");
  const pages = [
    { value: "11", label: "roof repair" },
    { value: "12", label: "roof repair near me" },
    { value: "13", label: "roofing" },
    { value: "14", label: "roofing near me" },
    { value: "15", label: "residential roofing" },
    { value: "16", label: "commercial roofing" },
  ];
  const handleSelect = (option: { label: string; value: string }) => {
    console.log("Selected option:", option);
    setRankingSelected(option.label);
  };
  return (
    <div className="flex flex-col w-full min-w-[450px] gap-6 -ml-5  pb-5 lg:w-[450px]  ">
      <div className="flex flex-col items-center w-[440px]  ">
        <HeadBar title="Performance Overview" width="440px" />
        <div className="flex flex-col items-center w-[440px] px-3 py-5 gap-4 ml-5 bg-[#E0E0E0] -mt-10 rounded-3xl">
          <div className="flex flex-col items-center w-[440px] px-3 py-10 gap-4  bg-red">
            <TitleRatingBar
              title="All Keywords Avg."
              text1="11.6"
              text2="1.5"
              icon2={<UploadSvg />}
            />
            <TitleRatingBar title="Total Keywords" text1="57" />
            <TitleRatingBar
              title="Keywords Up"
              text1="5"
              icon1={<UploadSvg />}
            />
            <TitleRatingBar
              title="Keywords Down"
              text1="5"
              icon1={<DownSvg />}
            />
          </div>
          <div className="flex  items-center w-[400px] px-3  ml-3">
            <span style={{ ...Typography, color: "#6D6D6D", fontSize: "16px" }}>
              Results for ‘
            </span>
            <span style={{ ...Typography, color: "#631363", fontSize: "16px" }}>
              <SeoDropDown options={pages} onSelect={handleSelect} />
            </span>
          </div>
          <div className="flex flex-col  items-center w-[400px] px-3 gap-4 ml-3">
            <LineProgressBar />
            <div className="flex flex-col justify-center items-center w-[380px] h-[100px] border border-[#6D6D6D] px-3 -ml-2 bg-[#CF232A]  rounded-3xl">
              <span
                style={{ ...Typography, fontSize: "30px", color: "#F4F4F4" }}>
                11.6
              </span>
              <span
                style={{ ...Typography, fontSize: "16px", color: "#F4F4F4" }}>
                Average Map Rank
              </span>
            </div>
            <div className="flex flex-col justify-center items-center w-[380px] h-[100px] border border-[#6D6D6D] px-3 -ml-2 gap-2  rounded-3xl">
              <div className="flex">
                <span
                  style={{ ...Typography, fontSize: "30px", color: "#6D6D6D" }}>
                  11
                </span>
                <span
                  className="ml-1 mt-4"
                  style={{ ...Typography, fontSize: "10px", color: "#6D6D6D" }}>
                  <UploadSvg />
                </span>
              </div>
              <span
                style={{ ...Typography, fontSize: "16px", color: "#6D6D6D" }}>
                Change
              </span>
            </div>
            <ProgressBarCard
              title1="High-ranking Grid Points"
              title2="2"
              value={20}
              color="#40F440"
              isMobile={true}
            />
            <ProgressBarCard
              title1="Medium-ranking Grid Points"
              title2="2"
              value={60}
              color="#FAAC18"
              isMobile={true}
            />
            <ProgressBarCard
              title1="Low-ranking Grid Points"
              title2="2"
              value={80}
              color="#CF232A"
              isMobile={true}
            />
            <div className="flex flex-col items-center w-[380px] -ml-2 h-[300px] rounded-lg bg-slate-200"></div>
            <div className="flex flex-col items-start w-[400px] ml-10 gap-4 "></div>
            <div className="flex flex-col gap-1 items-start w-[400px] ">
              <span
                style={{ ...Typography, fontSize: "18px", color: "#6D6D6D" }}>
                Overall Top Ranking Competitors
              </span>
              <div className="flex w-[300px] gap-3 items-center">
                <span
                  style={{ ...Typography, fontSize: "18px", color: "#6D6D6D" }}>
                  for
                </span>{" "}
                <span
                  style={{ ...Typography, fontSize: "18px", color: "#631363" }}>
                  {rankingSelected}
                </span>
              </div>
              <span
                style={{
                  ...Typography,
                  fontSize: "14px",
                  color: "#6D6D6D",
                  fontWeight: 700,
                  fontFamily: "Glacial Indifference",
                }}>
                Top-performing search results competitors, based on the Grid
                Points for this keyword.
              </span>
              <PerformanceTable isMobile={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex   relative ml-  z-20 mt-5 justify-center items-center w-[450px]    bg-[#40F440] h-[55px] rounded-t-3xl"></div>
    </div>
  );
};

export default PerformanceOverview;
