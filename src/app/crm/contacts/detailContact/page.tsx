"use client";

import React from "react";
import LayoutView from "../../layout/page";
import TabNavigation from "../../component/tabNavigation";
import SearchBox from "../../component/searchBox/page";
import Image from "next/image";
import EditIcon from "@/assets/images/edit-icon.svg";
import ContactIcon from "../../../assets/images/contact.svg";
import CustomInput from "../../component/customInput";
import ToggleSwitch from "../../component/toggleSwitch";
// import DesktopDetailContact from "../../../components/crmDesktop/contacts/detailContact";
import DesktopDetailContact from "../../../../components/crmDesktop/contacts/detailContact";
import { useClientMediaQuery } from "../../../../utils/srchooksuseClientMediaQuery";
import Linkedin from "@/assets/images/D-linkedin.svg";
import  company1 from '@/assets/images/companies-1.png';

function DetailContact() {
  const isMobile = useClientMediaQuery("(max-width: 769px)");

  if(isMobile){
  return (
    <LayoutView
      Childrens={
        <div className="relative flex flex-col px-[20px] w-full">
           <div className="w-full mt-4 flex">
            <TabNavigation />
          </div>
          <div className="mt-4">
            <SearchBox Component={"Contact"} />
          </div>
         
          <div className=" flex flex-col pb-[8px] mt-[15px] ">
            <div className="self-end">
              <button className="text-[10px] flex items-center text-white bg-palatinatePurple rounded-lg px-[10px] py-[10px]">
                <Image src={EditIcon} alt="edit" className="mr-[10px]" />
                <span>Edit Contact</span>
              </button>
            </div>
            <div className="bg-chinesWhite rounded-lg mt-[14px]">
              <div className="flex justify-between items-center mt-[12px] mx-[14px]">
                <div className="logo bg-grayX11 rounded-full h-[35px] w-[39px] text-[15px] text-white font-bold flex justify-center items-center">
                  JD
                </div>
                <div className="flex-grow ml-[14px]">
                  <h5 className="text-[14px] text-darkSilverColor font-bold">
                    John Doe
                  </h5>
                  <h5 className="text-[12px] text-darkSilverColor">
                    CEO at Company Name
                  </h5>
                </div>
                <div className="logo bg-white rounded-full h-[43px] w-[48px] text-[15px]  font-bold flex justify-center items-center">
                <Image src={company1} alt="" />
                </div>
              </div>

              <div className="mt-[29px] px-[14px] pb-[25px]">
                <textarea
                  onChange={() => null}
                  value="  Add Notes..."
                  className="w-full h-[101px] px-[18px] py-[9px] bg-white rounded-lg text-darkSilverColor text-[10px]"
                  id=""
                  placeholder=""
                />

                <div className="flex justify-end mt-[13.8px]">
                  <button className="text-[10px] font-bold flex items-center text-white bg-palatinatePurple rounded-lg px-[14px] py-[7px]">
                    <span>Add This Note</span>
                  </button>
                </div>
                <div className="flex justify-between mt-[22.7px] items-center">
                  <h5 className="text-[10px] text-darkSilverColor font-bold">
                    Lee added a note on Friday, January 26, 2024 at 1:43 PM
                  </h5>
                  <ToggleSwitch />
                </div>

                <div className="mt-[9.6px]">
                  <textarea
                    onChange={() => null}
                    value=" Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
                                        dolore magna aliquam erat volutpat. Ut wisi enim ad minim
                                        veniam, quis nostrud exerci tation ullamcorper suscipit
                                        lobortis nisl ut aliquip ex ea commodo consequat. Duis
                                        autem vel eum iriure dolor in hendrerit in vulputate velit
                                        esse molestie consequat,"
                    className="w-full h-[101px] px-[18px] py-[9px] bg-white rounded-lg text-darkSilverColor text-[10px]"
                    id=""
                    placeholder=""
                  />
                </div>
                <div className="mt-[29px]">
                  <h5 className="text-[16px] text-palatinatePurple font-bold">
                    Personal Info
                  </h5>
                  <div className="w-[190px] h-[1px] bg-[#6D6D6D] " />
                  <h5 className="text-[10px] mt-[11px] text-palatinatePurple font-bold">
                    info@example.com
                  </h5>
                  <h5 className="text-[10px] text-darkSilverColor my-[4px]">
                    (305) 555-3653 Work
                  </h5>

                  <h5 className="text-[10px] text-darkSilverColor">
                    (305) 555-3653 Home
                  </h5>

                  <div className="mt-2">
                    <Image src={Linkedin} alt="" />
                  </div>
                </div>

                <div className="mt-[16px]">
                  <h5 className="text-[16px] text-palatinatePurple font-bold">
                    Background
                  </h5>
                  <div className="w-[190px] h-[1px] bg-[#6D6D6D] " />
                  <h5 className="text-[10px] text-darkSilverColor font-bold mt-[11px]">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna
                  </h5>
                  <p className="text-[10px] font-normal text-darkSilverColor  mt-[16px]">
                    Added on October 29, 2022
                  </p>

                  <p className="text-[10px] text-darkSilverColor  mt-[4px]">
                    Last seen on February 4, 2024
                  </p>

                  <p className="text-[10px] text-darkSilverColor  mt-[4px]">
                    Followed by Jane Doe{" "}
                  </p>
                </div>

                <div className="mt-[25px]">
                  <h5 className="text-[16px] text-[#5F1762] font-bold">
                    Tags <span className="bg-[#5F1762] text-white  py-[2px] px-[15px] rounded-lg text-[12px]">+</span>
                  </h5>
                  <div className="w-[190px] h-[1px] bg-[#6D6D6D] " />
                  <button className="block px-[6px] py-[4px] bg-darkSilverColor text-white text-[8px] font-bold rounded-xl mt-3">
                    football-fun
                  </button>
                  <button className="px-[6px] py-[4px] bg-palatinatePurple text-white text-[8px] font-bold rounded-xl">
                    musiician
                  </button>
                </div>

                <div className="mt-[18px]">
                  <h5 className="text-[16px] text-palatinatePurple font-bold">
                    Tasks
                  </h5>
                  <div className="w-[190px] h-[1px] bg-[#6D6D6D] " />
                  <h5 className="text-[10px] text-darkSilverColor font-bold mt-[6px]">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    due 4/12/2023
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    />
  );
}else return <DesktopDetailContact/>;
}

export default DetailContact;
