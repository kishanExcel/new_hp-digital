"use client";
import React, { useState } from "react";
import HeadBar from "./HeadBar";
import InputBarField from "./InputBarField";
import SquareCheckBoxButton from "./SquareCheckBox";
import ListDropDown from "./ListDropDown";
import SocialMedia from "./SocialMedia";
import {
  FacebookSvgs,
  Instasvgs,
  LinkdinSvgs,
  PinterestSvgs,
  TwitterSvgs,
} from "@/svgs/citations-builder/svgs";
import Link from "next/link";

// Styles for text and payment sections
const textStyle: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontStyle: "normal",
  wordWrap: "break-word",
  fontWeight: 700,
  lineHeight: "118%", // 11.8px
  letterSpacing: "0.5px",
};

const paymentStyle: React.CSSProperties = {
  fontFamily: "Arial",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

const members = [
  { value: "option1", label: "option1" },
  { value: "option2", label: "option2" },
  { value: "option3", label: "option3" },
  { value: "option4", label: "option4" },
  { value: "option5", label: "option5" },
  { value: "option6", label: "option6" },
];

/**
 * CitizanBuilderData component
 *
 * This component provides a form for users to enter citation builder data,
 * including business contact details, payment methods, business categories,
 * and social media links. The form is styled and includes various input
 * fields and dropdowns for additional information.
 *
 * @returns {JSX.Element} The rendered CitizanBuilderData component.
 */
const CitizanBuilderData = (): JSX.Element => {
  const [categories, setCategories] = useState<string>("");

  // Handle category change
  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategories(event.target.value);
  };

  // Handle dropdown selection
  const handleSelect = (option: { label: string; value: string }) => {
    console.log("Selected option:", option);
  };

  return (
    <div className="w-full">
      <div className="flex flex-col mb-6 my-3 w-full">
        <HeadBar title="Citation Builder Data" />

        <div className="flex rounded-3xl -mt-10 z-0 min-h-[160px] justify-start px-5 md:max-w-full bg-[#E0E0E0] py-3">
          <div className="my-9 w-full">
            {/* Instructions and placeholders */}
            <span
              className="break-words text-[10px] md:tracking-normal tracking-normal w-full text-xs md:text-lg"
              style={textStyle}>
              Here you can provide additional, optional information such as
              Business Location contact details, working hours, photos, etc.
              This information is required if you plan to use our Citation
              Builder directory submission service for this location.
            </span>
            <br />
            <br />
            <span
              className="break-words text-[10px]  md:tracking-normal tracking-normal w-full text-xs md:text-lg"
              style={textStyle}>
              Enter the contact details that you want to be displayed on this
              client&apos;s directory listings. Brightlocal will never use this
              information to directly contact your clients.
            </span>
            <br />
            <br />

            {/* Input fields */}
            <div className="flex justify-between flex-col md:flex-row w-full">
              <div className="w-full flex-1">
                <InputBarField
                  label="Business contact first name"
                  placeHolder=""
                />
                <InputBarField
                  label="Business contact last name"
                  placeHolder=""
                />
                <InputBarField label="Business contact email" placeHolder="" />
                <InputBarField label="Mobile phone number" placeHolder="" />
                <InputBarField label="Business fax number" placeHolder="" />
              </div>
              <div className="w-full flex-1 flex-col md:pl-24 pl-0 justify-end items-end text-end">
                <InputBarField
                  filesLabel="Business contact first name"
                  placeHolder=""
                  files={true}
                  filesHelperText="jpeg / jpg / png format only. Max size 2 MB."
                />
                <InputBarField
                  filesLabel="Location Photos (up to 3)"
                  placeHolder=""
                  files={true}
                  filesHelperText="jpeg / jpg / png format only. Max size 2 MB"
                />
              </div>
            </div>

            {/* Payment methods section */}
            <div
              className="text-[#6D6D6D] text-[10px] py-3 md:py-5 md:text-lg md:text-[#631363] lg:text-[24px]"
              style={paymentStyle}>
              Payment methods accepted
            </div>
            <div className="grid grid-cols-3 md:grid-cols-6 py-1 justify-start items-center gap-1 lg:gap-2">
              <SquareCheckBoxButton label="Cash" id="Cash" />
              <SquareCheckBoxButton label="Visa" id="Visa" />
              <SquareCheckBoxButton
                label="Financing "
                id="Financing"
              />
              <SquareCheckBoxButton
                label="Personal Check"
                id="Personal Check"
              />
              <SquareCheckBoxButton label="Invoice" id="Invoice" />
              <SquareCheckBoxButton
                label="Traveler"
                id="Traveler’s Check"
              />
              <SquareCheckBoxButton label="Mastercard" id="Mastercard" />
              <SquareCheckBoxButton label="Insurance" id="Insurance" />
              <SquareCheckBoxButton label="ATM / Debit" id="ATM / Debit" />
              <SquareCheckBoxButton label="PayPal" id="PayPal" />
              <SquareCheckBoxButton label="Discover" id="Discover" />
              <SquareCheckBoxButton
                label="American "
                id="American Express"
              />
            </div>

            {/* Extra business categories */}
            <div
              className="text-[#6D6D6D] text-xs py-2 md:py-5 md:text-lg md:text-[#631363] lg:text-[24px]"
              style={paymentStyle}>
              Extra business categories (recommended)
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ListDropDown options={members} onSelect={handleSelect} />
              <ListDropDown options={members} onSelect={handleSelect} />
              <ListDropDown options={members} onSelect={handleSelect} />
              <ListDropDown options={members} onSelect={handleSelect} />
              <ListDropDown options={members} onSelect={handleSelect} />
            </div>

            {/* List of services/products */}
            <div
              className="text-[#6D6D6D] text-xs pt-3 pb-2 md:pt-5 md:text-lg md:text-[#631363]  lg:text-[24px]"
              style={paymentStyle}>
              List of services / products
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <ListDropDown options={members} onSelect={handleSelect} />
              <ListDropDown options={members} onSelect={handleSelect} />
              <ListDropDown options={members} onSelect={handleSelect} />
              <ListDropDown options={members} onSelect={handleSelect} />
              <ListDropDown options={members} onSelect={handleSelect} />
            </div>

            {/* Social media links */}
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 md:py-18 py-4 ">
              <SocialMedia
                label={"Facebook (recommended)"}
                svg={<FacebookSvgs />}
              />
              <SocialMedia
                label={"Linkedin (recommended)"}
                svg={<LinkdinSvgs />}
              />
              <SocialMedia label={"X (recommended)"} svg={<TwitterSvgs />} />
              <SocialMedia
                label={"Instagram (recommended)"}
                svg={<Instasvgs />}
              />
              <SocialMedia
                label={"Pinterest (recommended)"}
                svg={<PinterestSvgs />}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full md:items-end  items-start">
        <button className="bg-[#40F440] w-[320px] ml-3 md:mr-3 mr-0 font-bold text-black rounded-md lg:rounded-xl mt-5 lg:text-[36px] lg:w-[365px]">
         <Link href='/citations-builder/final'>
          Save
          </Link>
        </button>
        <div className="flex justify-around  lg:justify-end   px-4 py-2 w-full">
          <button className="bg-[#631363] text-[12px] px-3 py-1 font-bold text-white rounded-md  lg:rounded-xl mt-5 lg:text-[20px] lg:w-[174px] lg:h-[50px] lg:mr-2">
            Cancel Update
          </button>
          <button className="bg-[#DB0020] text-[12px] px-3 py-1 font-bold text-white  rounded-md lg:rounded-xl mt-5 lg:text-[20px] lg:w-[174px] lg:h-[50px]">
            Delete Location
          </button>
        </div>
      </div>
    </div>
  );
};

export default CitizanBuilderData;
