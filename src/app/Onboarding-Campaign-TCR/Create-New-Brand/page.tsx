"use client";
import CreateNewBrand from "@/components/Onboarding-Campaign-TCR/CreateNewBrand";
import Header from "@/components/Reputation-mobile/Header";
import React from "react";

const OnboardingCampaignTCR = () => {
  return (
    <div className="flex justify-center items-center w-full h-full ">
      <div className="flex flex-col w-full md:w-[430px] justify-center items-center lg:w-[430px] min-h-full ">
        
        <div className="flex flex-col gap-7 justify-center items-center w-full  ">
          <Header
            title={" Create New Brand"}
            displayName=" CreateNewBrand"
          />
          <div className="flex flex-col w-[90%] gap-3  bg-[#E0E0E0]  min-h-[70vh] rounded-2xl ">
            
              <CreateNewBrand />
          </div>
          <button className="w-[221px] h-[34px] bg-[#631363] text-[18px] font-[600] text-[#FFFFFF]  rounded-xl text-center">Continue</button>
        </div>
        <div className={`flex w-full justify-center  mt-10  items-center bg-[#40F440] h-[45px] rounded-t-3xl  `}></div>

      </div>

    </div>
  );
};

export default OnboardingCampaignTCR;
