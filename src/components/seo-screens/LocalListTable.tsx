import { MenuIcon } from "@/svgs/checkIn/svgs";
import React from "react";
import LocalListingCard from "./LocalListingCard";
import ListTable from "./ListTable";

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

const LocalListTable = () => {
  return (
    <div className="flex flex-col w-full min-w-[450px] ml-7  gap-6 absolute top-0 lg:w-[450px]  ">
      <div className="flex rounded-b-3xl items-center justify-center w-full md:w-[450px] h-[60px] bg-[#E0E0E0]">
        <div className="flex px-5 ml-7 py-4">
          <MenuIcon />
        </div>
        <div className="flex -ml-10 justify-center items-center flex-grow">
          <span style={CheckInStyle}>SEO</span>
        </div>
      </div>
      <div className="flex justify-between items-center px-2 ml-4">
        <span
          className="text-[#6D6D6D] justify-center items-center"
          style={{ ...Typography, fontSize: "20px" }}
        >
          Local Listings
        </span>
      </div>
    <div className="flex flex-col gap-3">
    <div className="flex  justify-center items-center w-[450px] gap-3">
        <LocalListingCard
          title={"131"}
          subTitle={"Good"}
          titleColor={
            "linear-gradient(180deg, #00914C -5.21%, #00A550 48.68%, #64C08A 102.57%)"
          }
          subTitleColor={
            "linear-gradient(180deg, #00914C -5.13%, #00A550 48.77%, #64C08A 102.66%)"
          }
        />

        <LocalListingCard
          title={"181"}
          subTitle={"Incorrect"}
          titleColor={
            "linear-gradient(180deg, rgba(250, 172, 24, 0.94) -5.21%, #FFCA05 48.68%, #FFE7A3 102.57%)"
          }
          subTitleColor={
            "linear-gradient(180deg, #FAAC18 -5.13%, #FFCA05 48.77%, #FFE7A3 102.66%)"
          }
        />

        <LocalListingCard
          title={"13"}
          subTitle={"Doesn’t exist"}
          titleColor={
            "linear-gradient(180deg, #CF232A -3.84%, #EC1C24 50.06%, #F37E5F 103.95%)"
          }
          subTitleColor={
            "linear-gradient(180deg, #CF232A -3.84%, #EC1C24 50.06%, #F37E5F 103.95%)"
          }
        />
       
      </div>
      <ListTable />
    </div>
    </div>
  );
};

export default LocalListTable;
