"use client";
import React from "react";
import SeoCard from "./SeoCard";
import LocalListingProgressCard from "../seo-screens/LocalListingProgressCard";
import SeoLocalListing from "./SeoLocalListing";
import SeoRanking from "./SeoRanking";
import SeoCheckInReviewRequest from "./SeoCheckInReviewRequest";

const SeoDesktop = () => {
  const [activeTab, setActiveTab] = React.useState("tab1");

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

  return (
    <div className="flex flex-col bg-[#F4F4F4] overflow-x-hidden lg:w-full md:min-w-[1200px] min-h-screen flex-wrap">
      <div className="flex w-full gap-4 justify-between m-2 px-4">
        <SeoCard
          title="Local Listings"
          onClick={() => setActiveTab("tab1")}
          isActive={activeTab === "tab1"}
        >
          <div className="grid grid-cols-12 justify-center items-center mx-7 gap-2 w-full">
            <div className="grid col-span-4 gap-2 m-2 py-2 justify-start items-center">
              <div className="flex gap-3 justify-start items-start">
                <span
                  style={CircleStyle}
                  className="w-[10px] h-[10px] rounded-full"
                ></span>
                <span style={{ ...Typography, color: "#6D6D6D" }}>Good</span>
              </div>
              <div className="flex gap-3 justify-start items-start">
                <span
                  style={CircleStyle1}
                  className="w-[10px] h-[10px] rounded-full"
                ></span>
                <span style={{ ...Typography, color: "#6D6D6D" }}>
                  Incorrect
                </span>
              </div>
              <div className="flex gap-3 justify-start items-start">
                <span
                  style={CircleStyle2}
                  className="w-[10px] h-[10px] rounded-full"
                ></span>
                <span style={{ ...Typography, color: "#6D6D6D" }}>
                  Doesn’t exist
                </span>
              </div>
            </div>
            <div className="grid col-span-8 m-3 py-2 justify-start items-center border-l-2 border-[#6D6D6D]">
              <div className="-mt-2">
                <LocalListingProgressCard
                  title1="131 "
                  value={60}
                  color="linear-gradient(90deg, #00914C -0.03%, #00A550 49.97%, #64C08A 99.98%)"
                />
                <LocalListingProgressCard
                  title1="180 "
                  value={80}
                  color=" linear-gradient(90deg, #FAAC18 -0.03%, #FFCA05 49.96%, #FFE7A3 99.94%)"
                />
                <LocalListingProgressCard
                  title1="97 "
                  value={40}
                  color=" linear-gradient(90deg, #CF232A -0.04%, #EC1C24 49.97%, #F37E5F 99.98%)"
                />
              </div>
            </div>
          </div>
        </SeoCard>

        <SeoCard
          title="Rankings"
          onClick={() => setActiveTab("tab2")}
          isActive={activeTab === "tab2"}
        >
           <div className="grid grid-cols-12 rounded-3xl    w-full">
            <div className="grid col-span-5     h-full">
              <div className="flex flex-col gap-2 justify-center items-center">
              <span style={{ ...Typography, color: "#6D6D6D",fontSize: "15px" }}>
              Selected Keyword
              </span>
              <span className="text-[#F4F4F4] bg-[#631363] px-4 py-2 rounded-xl" style={{ ...Typography, color: "#F4F4F4", fontWeight: "500"}}>
              Target Keyword
              </span>
              </div>
            </div>
            <div className={`grid col-span-7 border-l-2 rounded-3xl ${activeTab === "tab2" ? "border-[#631363]" : "border-[#b6b2b2]"} justify-start items-center bg-[#b6b2b2]  h-full`}></div>
          </div>
        </SeoCard>
        <SeoCard
          title="Check-Ins & Review Requests"
          onClick={() => setActiveTab("tab3")}
          isActive={activeTab === "tab3"}
        >
           <div className="  grid grid-cols-12 justify-center items-center gap-2 w-full">
          <div className="grid col-span-4 gap-2 m-2 pl-5 py-2 justify-start items-center">
            <div className="flex gap-3 justify-start items-start">
              
              <span style={{ ...Typography, color: "#6D6D6D" }}>Today</span>
            </div>
            <div className="flex gap-3 justify-start items-start">
              
              <span style={{ ...Typography, color: "#6D6D6D" }}>
                {" "}
                This Week
              </span>
            </div>
            <div className="flex gap-3 justify-center items-center">
            
              <span style={{ ...Typography, color: "#6D6D6D" }}>
              This Month
              </span>
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
        </SeoCard>
      </div>
      <div className="flex flex-col justify-center items-center  w-full">
        {activeTab === "tab1" && <SeoLocalListing />}
        {activeTab === "tab2" && <SeoRanking />}
        {activeTab === "tab3" && <SeoCheckInReviewRequest />}
      </div>
    </div>
  );
};

export default SeoDesktop;
