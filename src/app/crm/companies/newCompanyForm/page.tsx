"use client";

import LayoutView from "../../layout/page";
import CustomInput from "../../component/customInput";
import CustomSelect from "../../component/customSelect";
import TabNavigation from "../../component/tabNavigation";
import { useClientMediaQuery } from "../../../../utils/srchooksuseClientMediaQuery";
import DesktopAddNewCompany from "../../../../components/crmDesktop/companies/addNewCompany";
const NewCompanyForm: React.FC = () => {
  const isMobile = useClientMediaQuery("(max-width: 769px)");
  if (isMobile) {
    return (
      <LayoutView
        Childrens={
          <div className="relative flex flex-col h-full px-[20px] w-full">
            <div className="w-full mt-4 flex">
              <TabNavigation />
            </div>
            <div className="flex-1 overflow-y-scroll rounded-xl pb-[8px] mt-[15px] bg-chinesWhite ">
              <div className="w-full rounded-xl bg-palatinatePurple h-[40px] text-white text-[16px] font-bold flex items-center ">
                <h5 className="ml-[14.7px]">Company Profile</h5>
              </div>
              <div className="grid grid-cols-6 gap-1 px-[14px]">
                <div className="col-span-6">
                  <label
                    htmlFor="name"
                    className="text-darkSilverColor text-[12px] font-bold mb-[6px]">
                    Name
                  </label>
                  <CustomInput
                    placeholder=""
                    id="name"
                    className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 "
                    type="text"
                  />
                </div>
                <div className="col-span-3">
                  <label
                    htmlFor="name"
                    className="text-darkSilverColor text-[12px] font-bold mb-[6px]">
                    Business Type
                  </label>
                  <CustomSelect
                    id="name"
                    name=""
                    className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 "
                    childrens={
                      <>
                        <option value="" disabled hidden selected> </option>
                        <option className="text-darkSilverColor" value="volvo" >
                          Communication Services
                        </option>
                        <option className="text-darkSilverColor" value="saab">
                          Consumer Discretionary
                        </option>
                        <option
                          className="text-darkSilverColor"
                          value="mercedes">
                          Consumer Staples
                        </option>
                        <option className="text-darkSilverColor" value="audi">
                          Energy
                        </option>
                        <option className="text-darkSilverColor" value="audi">
                          Financials
                        </option>
                        <option
                          className="text-palatinatePurple font-bold pl-[30px] my-[19px]"
                          value="audi">
                          + Add Business Type
                        </option>
                      </>
                    }
                  />
                </div>
                <div className="col-span-3">
                  <label
                    htmlFor="name"
                    className="text-darkSilverColor text-[12px] font-bold mb-[6px]">
                    Size
                  </label>
                  <CustomSelect
                    id="name"
                    name=""
                    className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 "
                    childrens={
                      <>
                       <option value="" disabled hidden selected></option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </>
                    }
                  />{" "}
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="name"
                    className="text-darkSilverColor text-[12px] font-bold mb-[6px]">
                    Address
                  </label>
                  <CustomInput
                    placeholder=""
                    id="name"
                    className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 "
                    type="text"
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="text-darkSilverColor text-[12px] font-bold mb-[6px]">
                    City
                  </label>
                  <CustomInput
                    placeholder=""
                    id="name"
                    className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 "
                    type="text"
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="text-darkSilverColor text-[12px] font-bold mb-[6px]">
                    Zip Code
                  </label>
                  <CustomInput
                    placeholder=""
                    id="name"
                    className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 "
                    type="text"
                  />
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="text-darkSilverColor text-[12px] font-bold mb-[6px]">
                    State
                  </label>
                  <CustomInput
                    placeholder=""
                    id="name"
                    className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 "
                    type="text"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="name"
                    className="text-darkSilverColor text-[12px] font-bold mb-[6px]">
                    Website
                  </label>
                  <CustomInput
                    placeholder=""
                    id="name"
                    className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 "
                    type="text"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="name"
                    className="text-darkSilverColor text-[12px] font-bold mb-[6px]">
                    Linkedin
                  </label>
                  <CustomInput
                    placeholder=""
                    id="name"
                    className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 "
                    type="text"
                  />
                </div>
                <div className="col-span-6">
                  <label
                    htmlFor="name"
                    className="text-darkSilverColor text-[12px] font-bold mb-[6px]">
                    Logo
                  </label>
                  <CustomInput
                    placeholder=""
                    id="name"
                    className="
                        w-full outline-none border-none bg-[#F4F4F4] rounded-2xl h-[44px] text-[12px] px-3 py-2
                        file:mr-5 file:py-1 file:px-3 file:rounded-lg  file:bg-[#6D6D6D] file:text-white 
                        file:text-[10px] 
                        
                        italic
                        "
                    type="file"
                  />
                </div>
                <div className="col-span-3">
                  <label
                    htmlFor="name"
                    className="text-darkSilverColor text-[12px] font-bold mb-[6px]">
                    Phone Number
                  </label>
                  <CustomInput
                    placeholder=""
                    id="name"
                    className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 "
                    type="number"
                  />
                </div>
                <div className="col-span-3">
                  <label
                    htmlFor="name"
                    className="text-darkSilverColor text-[12px] font-bold mb-[6px]">
                    Account Manager
                  </label>

                  <CustomSelect
                    id="name"
                    name=""
                    className="w-full outline-none border-none bg-[#F4F4F4] rounded-lg h-[27px] text-[12px] px-2 "
                    childrens={
                      <>
                       <option value="" disabled hidden selected></option>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                      </>
                    }
                  />
                </div>
                <div className="col-span-6 mt-[8px] text-right">
                  <button className="bg-limeGreen px-[11px] py-[8px] rounded-lg text-[10px] font-bold ripple">
                    Save Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        }
      />
    );
  } 
  else return <DesktopAddNewCompany />;
};

export default NewCompanyForm;
