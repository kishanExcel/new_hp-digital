import React, { useState } from "react";
import Layout from "../layout";
import TabNavigation from "../../../components/payments/components/tabNavigation";
import CustomInput from "../../../components/payments/components/customInput";
import CustomSelect from "../../../components/payments/components/customSelect";
import ToggleSwitch from "../../../components/payments/components/toggleSwitch";
import CreditCard from "../../../assets/images/P-credit-card.svg";
import Image from "next/image";

const Index = () => {
  const [showDiscountCard, setShowDiscountCord] = useState(false);
  const tabData = [
    {
      tabName: "Quick Invoice",
      tabUrl: "/Payment/quickInvoice",
    },
    {
      tabName: "Virtual Terminal",
      tabUrl: "/Payment/virtualTerminal",
    },
    {
      tabName: `Keyed Credit Card`,
      tabUrl: "/Payment/keyedCreditCard",
    },
  ];
  return (
    <Layout
      hHeading="Payments"
      Childrens={
        <div className="px-[15px] pt-[18px] flex-1 flex flex-col h-full bg-cultured ">
          <TabNavigation tabsData={tabData} />
          <div className="h-full overflow-y-auto">
            <div className="mb-[19px] bg-chinesWhite rounded-lg">
              <div className="w-full  bg-palatinatePurple rounded-lg mt-[16px] text-white">
                <h5 className="text-[16px] font-bold  pl-[15px] py-[10px]">
                  Information
                </h5>
              </div>
              <div className="px-[16px]  py-[27px]">
                <div >
                  <label
                    htmlFor="invtitle"
                    className="text-[12px] font-bold text-darkSilverColor"
                  >
                    Contact
                  </label>
                  <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                    <CustomInput
                      className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                      id="invtitle"
                      placeholder=""
                      readOnly={false}
                      type=""
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="location"
                    className="text-[12px] font-bold text-darkSilverColor"
                  >
                    Account Type*
                  </label>
                  <div className="w-full h-[27px]  rounded-lg px-2 bg-[#F4F4F4]">
                    <CustomSelect
                      className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                      id="location"
                      name=""
                      childrens={
                        <>
                          <option value="test"></option>
                        </>
                      }
                    />
                  </div>
                </div>
                <div className="mt-[6px]">
                  <label
                    htmlFor="invtitle"
                    className="text-[12px] font-bold text-darkSilverColor"
                  >
                    Title
                  </label>
                  <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                    <CustomInput
                      className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                      id="invtitle"
                      placeholder=""
                      readOnly={false}
                      type=""
                    />
                  </div>
                </div>
                <div className="mt-[6px]">
                  <label
                    htmlFor="invtitle"
                    className="text-[12px] font-bold text-darkSilverColor"
                  >
                    Account Holder Name
                  </label>
                  <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                    <CustomInput
                      className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                      id="invtitle"
                      placeholder=""
                      readOnly={false}
                      type=""
                    />
                  </div>
                </div>
                <div className="mt-[6px]">
                  <label
                    htmlFor="dueDate"
                    className="text-[12px] font-bold text-darkSilverColor"
                  >
                    Card Number*
                  </label>
                  <div className="w-full flex items-center  h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                    <Image src={CreditCard} alt="" />
                    <CustomInput
                      className="w-full text-[12px] bg-[#F4F4F4] ml-2 h-full outline-none"
                      id="dueDate"
                      placeholder=""
                      readOnly={false}
                      type=""
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="location"
                    className="text-[12px] font-bold text-darkSilverColor"
                  >
                    Exp Month*
                  </label>
                  <div className="w-full h-[27px]  rounded-lg px-2 bg-[#F4F4F4]">
                    <CustomSelect
                      className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                      id="location"
                      name=""
                      childrens={
                        <>
                          <option value="test"></option>
                        </>
                      }
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="location"
                    className="text-[12px] font-bold text-darkSilverColor"
                  >
                    Exp Year*
                  </label>
                  <div className="w-full h-[27px]  rounded-lg px-2 bg-[#F4F4F4]">
                    <CustomSelect
                      className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                      id="location"
                      name=""
                      childrens={
                        <>
                          <option value="test"></option>
                        </>
                      }
                    />
                  </div>
                </div>
                <div className="mt-[6px]">
                  <label
                    htmlFor="invtitle"
                    className="text-[12px] font-bold text-darkSilverColor"
                  >
                    Billing Street
                  </label>
                  <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                    <CustomInput
                      className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                      id="invtitle"
                      placeholder=""
                      readOnly={false}
                      type=""
                    />
                  </div>
                </div>
                <div className="mt-[6px]">
                  <label
                    htmlFor="invtitle"
                    className="text-[12px] font-bold text-darkSilverColor"
                  >
                    Billing City
                  </label>
                  <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                    <CustomInput
                      className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                      id="invtitle"
                      placeholder=""
                      readOnly={false}
                      type=""
                    />
                  </div>
                </div>
                <div className="mt-[6px]">
                  <label
                    htmlFor="invtitle"
                    className="text-[12px] font-bold text-darkSilverColor"
                  >
                    Billing State
                  </label>
                  <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                    <CustomInput
                      className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                      id="invtitle"
                      placeholder=""
                      readOnly={false}
                      type=""
                    />
                  </div>
                </div>
                <div className="mt-[6px]">
                  <label
                    htmlFor="invtitle"
                    className="text-[12px] font-bold text-darkSilverColor"
                  >
                    Billing Zip
                  </label>
                  <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                    <CustomInput
                      className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                      id="invtitle"
                      placeholder=""
                      readOnly={false}
                      type=""
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="location"
                    className="text-[12px] font-bold text-darkSilverColor"
                  >
                    Billing Country
                  </label>
                  <div className="w-full h-[27px]  rounded-lg px-2 bg-[#F4F4F4]">
                    <CustomSelect
                      className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                      id="location"
                      name=""
                      childrens={
                        <>
                          <option value="test"></option>
                        </>
                      }
                    />
                  </div>
                </div>
                <div className="mt-[6px]">
                  <label
                    htmlFor="invtitle"
                    className="text-[12px] font-bold text-darkSilverColor"
                  >
                    Billing Phone
                  </label>
                  <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                    <CustomInput
                      className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                      id="invtitle"
                      placeholder=""
                      readOnly={false}
                      type=""
                    />
                  </div>
                </div>
                <div className="mt-[6px]">
                  <label
                    htmlFor="invtitle"
                    className="text-[12px] font-bold text-darkSilverColor"
                  >
                    Account API Id
                  </label>
                  <div className="w-full h-[27px] rounded-lg px-2 bg-[#F4F4F4]">
                    <CustomInput
                      className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                      id="invtitle"
                      placeholder=""
                      readOnly={false}
                      type=""
                    />
                  </div>
                </div>
                <div className="">
                  <label
                    htmlFor="location"
                    className="text-[12px] font-bold text-darkSilverColor"
                  >
                    Run AVS Transaction?
                  </label>
                  <div className="w-full h-[27px]  rounded-lg px-2 bg-[#F4F4F4]">
                    <CustomSelect
                      className="w-full text-[12px] bg-[#F4F4F4] h-full outline-none"
                      id="location"
                      name=""
                      childrens={
                        <>
                          <option value="test"></option>
                        </>
                      }
                    />
                  </div>
                </div>
                <div className="mt-[12px] flex justify-end col-span-10">
                  <button className="text-[10px] font-bold py-[6px] rounded-lg px-[19px] mr-[13px] bg-limeGreen text-btnBlack">
                    Save
                  </button>
                  <button className="text-[10px] font-bold py-[6px] rounded-lg px-[19px] text-white bg-red text-btnBlack">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Index;
