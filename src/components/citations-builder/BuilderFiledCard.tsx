"use client";
import React, { useState } from "react";
import HeadBar from "./HeadBar";
import InputBarField from "./InputBarField";
import BusinessDetails from "./BusinessDetails";
import BusinessHours from "./BusinessHours";
import AboutBusiness from "./AboutBusiness";
import CitizanBuilderData from "./CitizanBuilderData";
import BuilderItemCard from "./BuilderItemCard";
import {
  BuilderDataSvg,
  BuilderFourSquareSvg,
  BuilderGpsSvg,
  BuilderNeustarSvg,
  BuilderYPSvg,
  FourSquareSvgs,
} from "@/svgs/seo-screens/svgs";
import { DisableLocationSvgs } from "@/svgs/citations-builder/svgs";
import BuilderFilterCard from "./BuilderFilterCard";
import { InfoTooltip } from "./Tooltip";
import CitationTable from "./ExistingCitationTable";
import AvailableitationTable from "./AvailableitationTable";
import BuilderModel from "./BuilderModel";

const Typography: React.CSSProperties = {
  fontSize: "20px",
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

/**
 * BuilderFiledCard component
 *
 * A comprehensive form and display component for managing citation data.
 * This component includes form fields, item cards, citation tables, and action buttons.
 * It also manages the display of modals and includes various sections for business information.
 *
 * @returns {JSX.Element} The rendered component
 */
const BuilderFiledCard: React.FC = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div className="flex flex-col items-center justify-center gap-2 w-full px-4 pt-4">
      {/* Header for the general settings */}
      {/* Client and Location Reference input fields */}
      <HeadBar title="General Settings" />
      <div className="flex flex-col md:flex-row items-center rounded-3xl -mt-12 z-10 min-h-[160px] md:min-h-fit justify-start px-4 md:px-7 mx-auto w-full bg-[#E0E0E0] py-3">
        <div className="mt-9 flex flex-col md:flex-row md:gap-4 gap-2 w-full">
          <InputBarField
            label="Client"
            placeHolder="Show Client Name"
            textCenter="text-left"
          />
          <InputBarField
            label="Unique Location Reference: *"
            placeHolder="Show Client HubSpark Account Number"
            textCenter="text-left"
          />
        </div>
      </div>

      {/* Various sections related to business details */}
      <BusinessDetails />
      <BusinessHours />
      <AboutBusiness />
      <CitizanBuilderData />

      {/* Save, Cancel, and Delete buttons */}
      <div className="w-full">
        {/* Display of item cards */}
        <div className="flex w-full  mt-10 flex-col items-center">
          <div className="hidden md:flex w-full">
            <HeadBar title="Item" />
          </div>
          <div className="flex rounded-3xl -mt-10 z-10 min-h-[160px] w-full relative justify-start bg-[#F4F4F4] md:bg-[#E0E0E0] py-3">
            <div className=" text-[#6D6D6D] rounded-full text-[20px] absolute left-5  text-md font-semibold">
              Item
            </div>
            <div className="mt-9 flex flex-col md:flex-row gap-6 w-full">
              <div className="grid grid-cols-1 w-full gap-2 px-2 md:grid-cols-2 lg:grid-cols-3 ">
                <BuilderItemCard
                  label={"Foursquare"}
                  id={"Foursquare"}
                  labelSvg={<BuilderFourSquareSvg />}
                  titleSvg={<DisableLocationSvgs />}
                  isLocation
                />
                <BuilderItemCard
                  label={"Data Axle"}
                  id={"Data Axle"}
                  labelSvg={<BuilderDataSvg />}
                  titleSvg={<DisableLocationSvgs />}
                  isLocation
                />
                <BuilderItemCard
                  label={"Neustar"}
                  id={"Neustar"}
                  labelSvg={<BuilderNeustarSvg />}
                  titleSvg={<DisableLocationSvgs />}
                  isLocation
                />
                <BuilderItemCard
                  label={"YP Network"}
                  id={"YP Network"}
                  labelSvg={<BuilderYPSvg />}
                  titleSvg={<DisableLocationSvgs />}
                  isLocation
                />
                <BuilderItemCard
                  label={"GPS Network"}
                  id={"GPS Network"}
                  labelSvg={<BuilderGpsSvg />}
                  titleSvg={<DisableLocationSvgs />}
                  isLocation
                />

                {/* Existing citations and filter cards */}
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full bg-[#F4F4F4] rounded-3xl mt-2 md:mt-9  md:bg-[#E0E0E0] flex-col">
          <div className="flex w-fit md:hidden md:w-full my-3 gap-1 items-center px-5">
            <span className="" style={{ ...Typography }}>
              Existing Citations (0)
            </span>
            <div className="ml-2 -mt-5">
              <InfoTooltip />
            </div>
          </div>
          <div className="hidden md:flex w-full">
            <HeadBar title="Existing Citations (0)" />
          </div>
          <div className="flex rounded-3xl z-10 w-full relative justify-start">
            <div className="flex flex-col md:flex-row gap-6 w-full">
              <div className="grid grid-cols-1 gap-2 px-4 pt-0 md:pt-2 w-full md:grid-cols-3">
                <BuilderFilterCard />
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full md:w-full px-0 md:px-4 py-4 gap-2 flex-col">
            <CitationTable />
          </div>
        </div>
        <div className="flex w-full bg-[#F4F4F4] rounded-3xl mt-0 md:mt-9  md:bg-[#E0E0E0] flex-col">
          <div className="flex w-fit md:hidden md:w-full my-3 gap-1 items-center px-5">
            <span
              className="whitespace-nowrap text-lg"
              style={{ ...Typography }}>
              Available New Citations (141)
            </span>
            <div className="ml-2 -mt-5">
              <InfoTooltip />
            </div>
          </div>
          <div className="hidden md:flex w-full">
            <HeadBar title="  Available New Citations (141)" />
          </div>
          <div className="flex rounded-3xl z-10 w-full relative justify-start">
            <div className="flex flex-col md:flex-row gap-6 w-full">
              <div className="grid grid-cols-1 gap-2 px-4 pt-0 md:pt-2 w-full md:grid-cols-3">
                <BuilderFilterCard />
              </div>
            </div>
          </div>
          <div className="flex justify-center w-full md:w-full py-4 gap-2  px-0 md:px-2 flex-col">
            <AvailableitationTable />
          </div>
        </div>

        <div className="flex justify-end gap-2 w-full py-1">
          <button
            className="bg-[#40F440] px-2 text-xs md:text-xl  font-[700] text-[#3D3D3D] p-2 rounded-2xl mt-5"
            onClick={openModal}>
            Confirm & Continue
          </button>
          <button className=" px-2 font-[700] text-xs md:text-xl border-2 border-[#631363] text-[#631363] p-2 rounded-2xl mt-5">
            Save For Later
          </button>
        </div>

        {showModal && <BuilderModel closeModal={closeModal} />}

        {/* Footer section */}
        <div className="flex md:hidden w-full mt-10 justify-center items-center bg-[#40F440] h-[55px] rounded-t-3xl"></div>
      </div>
    </div>
  );
};

export default BuilderFiledCard;
