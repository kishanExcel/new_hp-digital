"use client";
import React from "react";
import LayoutView from "../../layout/page";
import SearchBox from "../../component/searchBox/page";
import TabNavigation from "../../component/tabNavigation";
import CustomSelect from "../../component/customSelect";
import CustomInput from "../../component/customInput";
import { useClientMediaQuery } from "../../../../utils/srchooksuseClientMediaQuery";
import DesktopAddNewDeal from "../../../../components/crmDesktop/deals/addNewDeal";

const AddNewDeals: React.FC = () => {
  const isMobile = useClientMediaQuery("(max-width: 769px)");
  if(isMobile){
    return (
      <LayoutView
        Childrens={
          <div className="relative h-full w-full">
            <div className="h-[75%] px-[20px]">
              <div className="w-full mt-4 flex">
                <TabNavigation />
              </div>
              <div className="mt-4 ">
                <SearchBox Component={"Deals"} />
              </div>
              <div className="  section relative w-full bg-chinesWhite -mt-11 rounded-lg  " >
                <div className="flex pl-[14px] items-center text-[16px] text-white font-bold rounded-lg justify-between cursor-pointer bg-palatinatePurple h-[39px]">
                  Deal Information
                </div>
                <div className="grid grid-cols-6 gap-1 px-[14px]">
                  <div className="col-span-6">
                    <label
                      htmlFor="name"
                      className="text-darkSilverColor text-[12px] font-bold mb-[6px]">
                      Deal Name*
                    </label>
                    <CustomInput
                      placeholder=""
                      id="name"
                      className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2"
                      type="text"
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="description"
                      className="text-darkSilverColor text-[12px] font-bold mb-[6px]">
                      Description
                    </label>
                    <CustomInput
                      placeholder=""
                      id="description"
                      className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[75px] text-[12px] px-2"
                      type="text"
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="company"
                      className="text-darkSilverColor text-[12px] font-bold mb-[6px]">
                      Company*
                    </label>
                    <CustomSelect
                      id="company"
                      className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2"
                      name=""
                      childrens={
                        <>
                          <option value="" selected disabled hidden></option>
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
                      htmlFor="startAt"
                      className="text-darkSilverColor text-[12px] font-bold mb-[6px]">
                      Start At
                    </label>
                    <CustomInput
                      placeholder={''}
                      id="startAt"
                      className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2  appearance-none placeholder-transparent"
                      type="date"
                    />
                  </div>
                  <div className="col-span-6">
                    <label
                      htmlFor="stage"
                      className="text-darkSilverColor text-[12px] font-bold mb-[6px]">
                      Stage*
                    </label>
                    <CustomSelect
                      id="stage"
                      className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2"
                      name=""
                      childrens={
                        <>
                        <option value="" selected disabled hidden></option>
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
                      htmlFor="type"
                      className="text-darkSilverColor text-[12px] font-bold mb-[6px]">
                      Type
                    </label>
                    <CustomSelect
                      name=""
                      id="type"
                      className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2"
                      childrens={
                        <>
                        <option value="" selected disabled hidden></option>
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
                      htmlFor="amount"
                      className="text-darkSilverColor text-[12px] font-bold mb-[6px]">
                      Amount
                    </label>
                    <CustomInput
                      placeholder=""
                      id="amount"
                      className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2"
                      type="text"
                    />
                  </div>
                  <div className="col-span-6 mt-[8px] text-right mb-[9px]">
                    <button className="bg-limeGreen px-[11px] py-[8px] rounded-lg text-[10px] font-bold ripple">
                      Save Deals
                    </button>
                  </div>
                </div>
              </div>
              <br />
            </div>
          </div>
        }
      />
    );
  }else return <DesktopAddNewDeal/>
 
};

export default AddNewDeals;
