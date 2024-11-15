"use client";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker, { CalendarContainer } from "react-datepicker";
import { format, addDays } from "date-fns";
import { CalanderSvg } from "@/svgs/seo-screens/svgs";
import { SeoDropDownSvg } from "@/svgs/seo-desktop/svgs";
const Typography: React.CSSProperties = {
  fontFamily: "Arial",
  // fontSize: "14px",
  // fontStyle: "normal",
  // fontWeight: 700,
  lineHeight: "normal",
};

interface pickerProps {
  bgColor?: string;
}
const MyContainer = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className="flex relative w-full h-full"
      style={{
        paddingLeft: "200px",
        display: "flex",
        flexDirection: "column",
        background: "#FFF",
        color: "#6D6D6D",
      }}>
      <div className="flex absolute z-50 border-r-2 left-0 border-[#6D6D6D] right-10 -ml-3 pl-3 top-0  h-full  w-[205px]  text-left font-bold">
        <div className=" flex-col gap-1  w-full h-full justify-start ml-10 pl-4 py-2 flex">
          <span
            className="text-right cursor-pointer pl-4 font-bold  p-1 ml-2"
            style={{ ...Typography, fontSize: "14px", fontWeight: 700 }}>
            Year to Date
          </span>
          <span
            className=" text-right  cursor-pointer pl-4  p-1 ml-2"
            style={{ ...Typography, fontSize: "14px" }}>
            This Month
          </span>
          <span
            className=" bg-[#631363] cursor-pointer text-right pl-4 py-2 text-white p-1 ml-2  rounded-l-2xl"
            style={{ ...Typography, fontSize: "14px" }}>
            This Week
          </span>
        </div>
      </div>
      <CalendarContainer className={className}>
        <div style={{ position: "relative" }}>{children}</div>
      </CalendarContainer>
    </div>
  );
};
const SeoDatePicker = ({ bgColor = "#FFF" }: pickerProps) => {
  const today = new Date();
  const oneWeekLater = addDays(today, 7);

  const [page, setPage] = useState<string>("");
  const [dateRange, setDateRange] = useState<[Date | null, Date | null]>([
    today,
    oneWeekLater,
  ]);
  const [startDate, endDate] = dateRange;
  const formatDateRange = (start: Date | null, end: Date | null): string => {
    if (!start && !end) return "No date selected";
    if (start && !end) return `From ${format(start, "MMMM d, yyyy")}`;
    if (!start && end) return `To ${format(end, "MMMM d, yyyy")}`;
    return `${format(start!, "MMMM d, yyyy")} - ${format(
      end!,
      "MMMM d, yyyy"
    )}`;
  };

  return (
    <>
      <div className="flex relative w-full h-full z-50  justify-start items-center">
        <DatePicker
          className={`w-[240px] flex-shrink-0 md:w-[340px] flex  py-2 bg-[${bgColor}] text-[#6D6D6D] cursor-pointer opacity-0  rounded-lg focus:outline-none`}
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          calendarContainer={MyContainer}
          onChange={(update) => {
            setDateRange(update as [Date | null, Date | null]);
          }}
        />
      </div>
      <div className="flex sticky z-10 -mt-12 gap-2 top-10   w-full h-full   justify-start items-center">
        <div
          className={`text-[#6D6D6D] flex gap-2 items-center bg-[${bgColor}] py-1 md:py-3 px-2 md:px-4 rounded-full`}>
          <span>
            <CalanderSvg />{" "}
          </span>{" "}
          <span
            className="text-[9px] md:text-sm font-normal"
            style={{ ...Typography }}>
            {formatDateRange(startDate, endDate)}
          </span>
          <span>
            <SeoDropDownSvg />
          </span>
        </div>
      </div>
    </>
  );
};

export default SeoDatePicker;
