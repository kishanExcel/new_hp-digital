import { MenuIcon } from "@/svgs/checkIn/svgs";
import React from "react";
import ProgressBarCard from "./ProgressBarCard";
import LocalListingProgressCard from "./LocalListingProgressCard";
import Link from "next/link";

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
  fontSize: "22px",
};

const CircleStyle: React.CSSProperties = {
  background:
    "linear-gradient(90deg, #64C08A -0.47%, #00A550 49.51%, #00914C 99.5%)",
};
const CircleStyle1: React.CSSProperties = {
  background:
    "linear-gradient(90deg, #FFE7A3 -0.47%, #FFCA05 49.52%, #FAAC18 99.5%)",
};
const CircleStyle2: React.CSSProperties = {
  background:
    "linear-gradient(90deg, #F37E5F -0.47%, #EC1C24 49.52%, #CF232A 99.5%)",
};
const LocalListings = () => {
  return (
    <div className="flex flex-col w-full min-w-[450px] ml-8  gap-6 absolute top-0 lg:w-[450px]  ">
      <div className="flex rounded-b-3xl items-center justify-center w-full md:w-[450px] h-[60px] bg-[#E0E0E0]">
        <div className="flex px-5 ml-7 py-4">
          <MenuIcon />
        </div>
        <div className="flex -ml-10 justify-center items-center flex-grow">
          <span style={CheckInStyle}>SEO</span>
        </div>
      </div>
      <div className="flex justify-between items-center w-[80%] px-2 ml-4">
        <span
          className="text-[#6D6D6D] justify-center items-center"
          style={{ ...Typography, fontSize: "20px" }}>
          Local Listings
        </span>
      </div>

      <div className="flex flex-col justify-center ml-7 items-center w-[400px] bg-[#E0E0E0] h-[140px] rounded-2xl">
        <div className="  grid grid-cols-12 justify-center items-center gap-2 w-full">
          <div className="grid col-span-4 gap-2 m-2 py-2 justify-start items-center">
            <div className="flex gap-3 justify-start items-start">
              <span
                style={CircleStyle}
                className="w-[10px] h-[10px] rounded-full"></span>
              <span style={{ ...Typography, color: "#6D6D6D" }}>Good</span>
            </div>
            <div className="flex gap-3 justify-start items-start">
              <span
                style={CircleStyle1}
                className="w-[10px] h-[10px] rounded-full"></span>
              <span style={{ ...Typography, color: "#6D6D6D" }}>
                {" "}
                Incorrect
              </span>
            </div>
            <div className="flex gap-3 justify-start items-start">
              <span
                style={CircleStyle2}
                className="w-[10px] h-[10px] rounded-full"></span>
              <span style={{ ...Typography, color: "#6D6D6D" }}>
                Doesn’t exist
              </span>
            </div>
          </div>
          <div className="grid col-span-8 m-3 py-2 justify-start items-center border-l-2 border-[#6D6D6D]">
            <div className=" -mt-2">
              <LocalListingProgressCard
                title1="137 "
                value={49}
                color="linear-gradient(90deg, #00914C -0.03%, #00A550 49.97%, #64C08A 99.98%)"
              />
              <LocalListingProgressCard
                title1="158 "
                value={60}
                color=" linear-gradient(90deg, #FAAC18 -0.03%, #FFCA05 49.96%, #FFE7A3 99.94%)"
              />
              <LocalListingProgressCard
                title1="77 "
                value={40}
                color=" linear-gradient(90deg, #CF232A -0.04%, #EC1C24 49.97%, #F37E5F 99.98%)"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex  justify-end ml-7 items-end w-[400px]">
        <Link
          href={"/seo-screens/localListings/local-list-table"}
          style={{ ...Typography, color: "#631363" }}>
          More...
        </Link>
      </div>
      <div className="flex  justify-start ml-7 items-start w-[400px]">
        <span style={{ ...Typography, color: "#6D6D6D", fontSize: "19px" }}>
          Rankings
        </span>
      </div>
      <div className="flex flex-col justify-center ml-7 items-center w-[400px] bg-[#E0E0E0] h-[240px] rounded-2xl">
        <div className="  grid grid-cols-12 justify-center items-center gap-2 w-full">
          <div className="grid col-span-5 gap-2 justify-center items-center">
            <div className="flex flex-col gap-3 justify-center items-center">
              <span
                style={{ ...Typography, fontSize: "16px", color: "#6D6D6D" }}>
                Selected Keyword
              </span>
              <span
                className="bg-[#631363] px-3 py-2 rounded-3xl"
                style={{ ...Typography, fontSize: "12px", color: "#F4F4F4" }}>
                Target Keyword
              </span>
            </div>
          </div>
          <div className="grid col-span-7 rounded-lg  py-2 justify-start items-center h-[240px] bg-slate-500 "></div>
        </div>
      </div>
      <div className="flex  justify-end ml-7 items-end w-[400px]">
        <Link
          href={"/seo-screens/rankings"}
          style={{ ...Typography, color: "#631363" }}>
          More...
        </Link>
      </div>
      <div className="flex  justify-start ml-7 items-start w-[400px]">
        <span style={{ ...Typography, color: "#6D6D6D", fontSize: "19px" }}>
          Check-Ins & Review Requests
        </span>
      </div>

      <div className="  grid grid-cols-12  gap-2 justify-center ml-7 items-center w-[400px] bg-[#E0E0E0] h-[140px] rounded-2xl">
        <div className="grid col-span-4 gap-2 m-2 pl-5 py-2 justify-start items-center">
          <div className="flex gap-3 justify-start items-start">
            <span style={{ ...Typography, color: "#6D6D6D" }}>Today</span>
          </div>
          <div className="flex gap-3 justify-start items-start">
            <span style={{ ...Typography, color: "#6D6D6D" }}> This Week</span>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <span style={{ ...Typography, color: "#6D6D6D" }}>This Month</span>
          </div>
        </div>
        <div className="grid col-span-8 m-3 py-2 justify-start items-center ">
          <div className=" -mt-2">
            <LocalListingProgressCard
              title1="12"
              border="rounded-full"
              isActive={true}
              value={7}
              color="#631363"
            />
            <LocalListingProgressCard
              title1="131"
              border="rounded-full"
              value={30}
              isActive={true}
              color="#631363"
            />
            <LocalListingProgressCard
              title1="157 "
              border="rounded-full"
              value={120}
              isActive={true}
              color="#631363"
            />
          </div>
        </div>
      </div>
      <div className="flex  justify-end ml-7 items-end w-[400px]">
        <Link
          href={"/seo-screens/localListings"}
          style={{ ...Typography, color: "#631363" }}>
          More...
        </Link>
      </div>
      <div className="flex relative ml- z-20 mt-5 justify-center items-center w-[450px] bg-[#40F440] h-[55px] rounded-t-3xl"></div>
    </div>
  );
};

export default LocalListings;
