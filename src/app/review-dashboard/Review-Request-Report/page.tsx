"use client";
import { MenuIcon } from "@/svgs/checkIn/svgs";
import React, { useEffect, useState } from "react";

import { SearchSvg } from "@/svgs/seo-screens/svgs";
import SeoDatePicker from "@/components/seo-screens/SeoDatePicker";
import CalenderDropdown from "@/components/seo-screens/CalenderDropdown";
import TrashDesk from "@/assets/images/hubspark/trash_desk.png";
import EmployeeListTable from "@/components/seo-screens/EmployeeListTable";
import LeaderBoardTable, {
  LeaderboardTable,
} from "@/components/review-dashboard-mobile/LeaderBoardTable";
import LocationPerformanceTable from "@/components/review-dashboard-mobile/LocationPerformanceTable";
import LocationActivityReportTable from "@/components/review-dashboard-mobile/LocationActivityReportTable";
import ReviewRequestCard from "@/components/review-dashboard-mobile/ReviewRequestCard";
import ReviewNavbar from "@/components/review-dashboard-mobile/ReviewNavbar";
import { Star } from "lucide-react";
import Image from "next/image";
import { DatePickerWithRange } from "@/components/CustomComponents/DatePickerWithRange";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Typography: React.CSSProperties = {
  fontFamily: "Arial",
  lineHeight: "normal",
};

const CheckInStyle: React.CSSProperties = {
  ...Typography,
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

const ReviewRequest = () => {
  const [activeTab, setActiveTab] = useState("city");
  const [page, setPage] = useState("");

  const handleActiveTab = (tab: string) => {
    setActiveTab(tab);
  };

  const pages = [
    { value: "11", label: "1" },
    { value: "12", label: "2" },
    { value: "13", label: "3" },
    { value: "14", label: "4" },
    { value: "15", label: "5" },
    { value: "16", label: "6" },
  ];

  const reviews = [
    {
      user: "Brian Smith",
      customer: "John D.",
      rating: 5,
      requested: "01-15-2024 5:40 PM",
      via: "7014283529",
      location: "123 Main St, Anytown, USA",
      review:
        "The team was professional, the work was completed on time, and the pricing was fair. Highly recommend their services!",
      status: "Viewed",
      completed: "No",
      response: "",
      delete: "ji",
    },
    {
      user: "Todd Jones",
      customer: "Jane S.",
      rating: 5,
      requested: "01-15-2024 5:40 PM",
      via: "7014283529",
      location: "123 Main St, Anytown, USA",
      review:
        "The team was professional, the work was completed on time, and the pricing was fair. Highly recommend their services!",
      status: "Viewed",
      completed: "Yes",
      response:
        "Thank you for your positive review! We're glad to hear that you had a great experience and that your HVAC system is working well.",
    },
    {
      user: "Jane Doe",
      rating: 5,
      customer: "Jenny F.",
      requested: "01-15-2024 5:40 PM",
      via: "7014283529",
      location: "123 Main St, Anytown, USA",
      review:
        "The team was professional, the work was completed on time, and the pricing was fair. Highly recommend their services!",
      status: "Viewed",
      completed: "No",
      response: "",
    },
    {
      user: "John Doe",
      rating: 5,
      customer: "Jimmy M.",
      requested: "01-15-2024 5:40 PM",
      via: "7014283529",
      location: "123 Main St, Anytown, USA",
      review:
        "The team was professional, the work was completed on time, and the pricing was fair. Highly recommend their services!",
      status: "Viewed",
      completed: "No",
      response: "",
    },
  ];

  const handlePageChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPage(event.target.value);
  };

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="flex -ml-2 justify-center items-center w-full">
      <div className="flex flex-col w-full ml-4  absolute top-0 bg-[#F4F4F4]">
        <div className="w-full justify-center relative flex flex-col ">
          <ReviewNavbar heading={"Review Dashboard"} />
        </div>
        <div className="px-4 md:px-[5%] lg:px-[6%]">
          <div className="flex flex-col gap-2 py-3">
            <div className="flex justify-between items-center ml-0 ">
              <div className="bg-[#F4F4F4] md:bg-[#631363] pl-[5%] text-[#6D6D6D] md:text-white font-[Arial] text-xl font-semibold  w-full rounded-none md:rounded-3xl py-1  md:py-4 ">
                Review Request Report
              </div>
            </div>
            <div className="flex w-full md:justify-between gap-1 justify-normal ">
              <div className="w-fit px-0 md:md:px-5">
                <div className="py-2 md:my-3 h-fit my-2 ">
                  <DatePickerWithRange />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-start py-2 px-0 md:px-4">
              <div className="flex gap-3 flex-1 pl-1 justify-start items-center">
                <div className="text-[#6D6D6D] justify-start items-start text-xs md:text-lg font-normal md:font-medium">
                  Show
                </div>
                <Select>
                  <SelectTrigger className="w-[60px] bg-white rounded-2xl border">
                    <SelectValue defaultValue="1" placeholder="1" />
                  </SelectTrigger>
                  <SelectContent className="bg-white w-[30px] z-50">
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                  </SelectContent>
                </Select>
                <span
                  className="text-[#6D6D6D] justify-start items-start text-xs md:text-lg font-normal md:font-medium"
                  style={{
                    ...Typography,
                  }}>
                  Entries
                </span>
              </div>
              <div className="flex w-full flex-1 relative justify-end items-center ">
                <input
                  type="text"
                  className="h-[30px] w-[80%] md:w-[70%] lg:md:w-[40%] placeholder:text-start pl-[22%] text-xs md:text-sm md:pl-[11%] bg-[#FFFFFF] text-start text-[#6D6D6D] rounded-full focus:outline-none"
                  placeholder="Search"
                />
                <div className="absolute inset-y-0 left-[20%] md:left-[30%] lg:left-[60%]  flex justify-center items-center py-2 px-4">
                  <SearchSvg />
                </div>
              </div>
            </div>
          </div>
          <div className=" h-full w-full flex items-center justify-center">
            <div className="container mx-auto">
              {/* Desktop view */}
              <div className="hidden md:flex w-full">
                {isClient ? (
                  <table className="w-full">
                    <thead>
                      <tr className="bg-[#631363] text-white">
                        <th className="lg:p-2 md:p-1 border-r rounded-tl-3xl">
                          User
                        </th>
                        <th className="lg:p-2 md:p-1 border-r">Customer</th>
                        <th className="lg:p-2 md:p-1 border-r">Requested</th>
                        <th className="lg:p-2 md:p-1 border-r">Via</th>
                        <th className="lg:p-2 md:p-1 border-r">Location</th>
                        <th className="lg:p-2 md:p-1 border-r">Review</th>
                        <th className="lg:p-2 md:p-1 border-r">Status</th>
                        <th className="lg:p-2 md:p-1 border-r text-wrap">
                          Completed
                        </th>
                        <th className="lg:p-2 md:p-1 rounded-tr-3xl">
                          Response
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {reviews.map((review, index) => (
                        <tr
                          key={index}
                          className="border-b bg-[#F9F9F9] w-full">
                          <td className="p-2 break-words text-wrap  md:max-w-[80px] border lg:text-lg md:text-base font-normal text-[#6D6D6D]  lg:max-w-[100px]">
                            {review.user}
                          </td>
                          <td className="p-2 break-words text-wrap md:max-w-[50px] border lg:text-lg md:text-base font-normal text-[#6D6D6D] lg:max-w-[100px]">
                            {review.customer}
                          </td>
                          <td className="p-2 break-words text-wrap  md:max-w-[50px] border lg:max-w-[100px] borderlg:text-lg md:text-base font-normal text-[#6D6D6D]">
                            {review.requested}
                          </td>
                          <td className="p-2 break-words text-wrap  md:max-w-[45px] border  lg:max-w-[80px] borderlg:text-lg md:text-base font-normal text-[#6D6D6D]">
                            {review.via}
                          </td>
                          <td className="p-2 break-words text-wrap  md:max-w-[80px]  lg:max-w-[120px] borderlg:text-lg md:text-base font-normal text-[#6D6D6D]">
                            {review.location}
                          </td>
                          <td className="p-2 break-words text-wrap md:max-w-[100px]  lg:max-w-[150px] border lg:text-lg md:text-base font-normal text-[#6D6D6D]">
                            <div className="flex mb-1">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                                />
                              ))}
                            </div>
                            {review.review}
                          </td>
                          <td className="p-2 break-words text-wrap max-w-[50px] lg:max-w-[100px] border lg:text-lg md:text-base font-normal text-[#6D6D6D]">
                            {review.status}
                          </td>
                          <td className="p-2 break-words text-wrap  max-w-[80px] lg:max-w-[160px] border lg:text-lg md:text-base font-normal text-[#6D6D6D]">
                            {review.completed}
                          </td>
                          <td className="p-2 break-words text-wrap  max-w-[80px] lg:max-w-[160px] border lg:text-lg md:text-base font-normal text-[#6D6D6D]">
                            {review.response}
                          </td>
                          <td className="p-2 break-words text-wrap cursor-pointer flex-shrink w-[40px] bg-[#F4F4F4] lg:text-lg md:text-base font-normal text-[#6D6D6D]">
                            <Image
                              alt="Trash"
                              className="object-cover w-4 h-4 flex-shrink-0 "
                              src={TrashDesk}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : null}
              </div>

              {/* Mobile view */}
              {isClient ? (
                <div className="md:hidden">
                  {reviews.map((review, index) => (
                    <div className="flex w-full" key={index}>
                      <div
                        key={index}
                        className=" text-white rounded-2xl pb-4 w-full overflow-hidden">
                        <div className=" w-full">
                          <div className="flex w-full">
                            {" "}
                            <div className="bg-[#631363] text-white border-b w-[100px] text-xs p-2">
                              User
                            </div>{" "}
                            <div className="text-[#6D6D6D] bg-[#FFFFFF] rounded-tr-2xl p-2 text-xs break-words w-full">
                              {review.user}
                            </div>{" "}
                          </div>
                          <div className="flex w-full">
                            <div className="bg-[#631363] border-b w-[100px] text-xs p-2">
                              Customer
                            </div>{" "}
                            <div className="text-[#6D6D6D] w-full p-2 text-xs break-words">
                              {review.customer}
                            </div>{" "}
                          </div>
                          <div className="flex w-full">
                            <div className="bg-[#631363] border-b w-[100px] text-xs p-2">
                              Requested
                            </div>{" "}
                            <div className="text-[#6D6D6D] bg-white w-full text-xs p-2 break-words">
                              {review.requested}
                            </div>{" "}
                          </div>
                          <div className="flex w-full">
                            <div className="bg-[#631363] border-b w-[100px] p-2 text-xs">
                              Via
                            </div>
                            <div className="text-[#6D6D6D] w-full p-2 text-xs break-words">
                              {" "}
                              {review.via}
                            </div>{" "}
                          </div>
                          <div className="flex w-full">
                            <div className="bg-[#631363] border-b w-[100px] p-2 text-xs">
                              Location
                            </div>
                            <div className="text-[#6D6D6D] w-full bg-white p-2 text-xs break-words">
                              {" "}
                              {review.location}
                            </div>{" "}
                          </div>
                          <div className="flex w-full">
                            <div className="bg-[#631363] border-b w-[100px] text-xs p-2">
                              {" "}
                              Review
                            </div>
                            <div className="w-full p-2">
                              <div className="flex mb-1 text-xs break-words">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                                  />
                                ))}
                              </div>
                              <div className="text-[#6D6D6D] text-xs break-words">
                                {" "}
                                {review.review}
                              </div>
                            </div>
                          </div>
                          <div className="flex w-full">
                            {" "}
                            <div className="bg-[#631363] border-b w-[100px] text-xs p-2">
                              {" "}
                              Status
                            </div>
                            <div className="text-[#6D6D6D] bg-white p-2 text-xs break-words w-full">
                              {review.status}
                            </div>
                          </div>
                          <div className="flex w-full border-b">
                            {" "}
                            <div className="bg-[#631363] w-[100px]  text-xs p-2">
                              {" "}
                              Completed
                            </div>
                            <div className="text-[#6D6D6D] p-2 text-xs break-words w-full">
                              {review.completed}
                            </div>
                          </div>
                          <div className="flex w-full">
                            {" "}
                            <div className="bg-[#631363] w-[100px] rounded-bl-2xl text-xs p-2">
                              {" "}
                              Response
                            </div>
                            <div className="text-[#6D6D6D] p-2 text-xs rounded-br-2xl bg-white break-words w-full">
                              {review.response}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <Image
                          alt="Share"
                          className="object-contain w-5 h-5 m-1"
                          src={TrashDesk}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
        {/* <LeaderboardTable /> */}

        <div className="flex relative  md:hidden z-20 mt-5 justify-center items-center w-full bg-[#40F440] h-[55px] rounded-t-3xl"></div>
      </div>
    </div>
  );
};

export default ReviewRequest;
