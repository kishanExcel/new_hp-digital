"use client";

import React from "react";
import LayoutView from "../../layout/page";
import CustomInput from "../../component/customInput";
import CustomSelect from "../../component/customSelect";
import TabNavigation from "../../component/tabNavigation";
import ToggleSwitch from "../../component/toggleSwitch";
import { useClientMediaQuery } from "../../../../utils/srchooksuseClientMediaQuery";
import DesktopAddNewContact from "../../../../components/crmDesktop/contacts/addNewContact";

const AddNewContact: React.FC = () => {
  const isMobile = useClientMediaQuery("(max-width: 769px)");
if(isMobile){
  return (
    <LayoutView
      Childrens={
        <div className="relative flex flex-col px-[20px] w-full">
          <div className="w-full mt-4 flex">
            <TabNavigation />
          </div>
          <div className=" pb-[8px] mt-[15px] rounded-xl bg-chinesWhite">
            <div className="w-full rounded-xl bg-palatinatePurple h-[40px] text-white text-[16px] font-bold flex items-center">
              <h5 className="ml-[14.7px]">Profile Information</h5>
            </div>
            <div className="grid grid-cols-6 gap-1 px-[14px]">
              <div className="col-span-3">
                <label
                  htmlFor="name"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px]">
                  First Name
                </label>
                <CustomInput
                  placeholder=""
                  id="name"
                  className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2"
                  type="text"
                />
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="sector"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px]">
                  Last Name
                </label>
                <CustomInput
                  placeholder=""
                  id="name"
                  className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2"
                  type="text"
                />
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="adress"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px]">
                  Title
                </label>
                <CustomInput
                  placeholder=""
                  id="adress"
                  className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2"
                  type="text"
                />
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="size"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px]">
                  Company
                </label>
                <CustomSelect
                  id="size"
                  className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2"
                  name=""
                  childrens={
                    <>
                      <option value="" disabled selected hidden></option>
                      <option value="volvo">Volvo</option>
                      <option value="saab">Saab</option>
                      <option value="mercedes">Mercedes</option>
                      <option value="audi">Audi</option>
                    </>
                  }
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="adress"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px]">
                  Email
                </label>
                <CustomInput
                  placeholder=""
                  id="adress"
                  className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2"
                  type="text"
                />
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="city"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px]">
                  Phone Number 1
                </label>
                <CustomInput
                  placeholder=""
                  id="city"
                  className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2"
                  type="text"
                />
              </div>
              <div className="col-span-3">
                <label
                  htmlFor="zipCode"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px]">
                  Phone Number 2
                </label>
                <CustomInput
                  placeholder=""
                  id="zipCode"
                  className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2"
                  type="text"
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="state"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px]">
                  Background
                </label>
                <CustomInput
                  placeholder=""
                  id="state"
                  className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2"
                  type="text"
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="file-upload"
                  className="text-darkSilverColor text-[12px] font-bold mb-[6px] ">
                  Avatar
                </label>
                <CustomInput
                  placeholder=""
                  id="name"
                  className="
                        w-full outline-none border-none bg-[#F4F4F4] rounded-2xl h-[44px] text-[12px] px-3 py-2
                        file:mr-5 file:py-1 file:px-3 file:rounded-lg file:bg-[#6D6D6D] file:text-white 
                        file:text-[10px]                         
                        italic
                        "
                  type="file"
                />
              </div>
              <div className="col-span-6 mt-[8px] text-right">
                <button className="bg-limeGreen px-[11px] py-[8px] rounded-lg text-[10px] font-bold ripple">
                  Save Profile
                </button>
              </div>
            </div>
          </div>
          <div className="ml-[14px] mt-[17px]">
            <ToggleSwitch />
            <span className="font-bold text-xs text-darkSilverColor ml-[17px]">
              Has Newsletter
            </span>
          </div>
        </div>
      }
    />
  );
}else return <DesktopAddNewContact/>;
  
};

export default AddNewContact;
