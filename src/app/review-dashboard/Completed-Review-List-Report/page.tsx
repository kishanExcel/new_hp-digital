"use client";
import { MenuIcon } from "@/svgs/checkIn/svgs";
import React, { useState, useEffect } from "react";
import Image from "next/image";

import { SearchSvg } from "@/svgs/seo-screens/svgs";
import SeoDatePicker from "@/components/seo-screens/SeoDatePicker";
import CalenderDropdown from "@/components/seo-screens/CalenderDropdown";
import EmployeeListTable from "@/components/seo-screens/EmployeeListTable";
import LeaderBoardTable, {
  LeaderboardTable,
} from "@/components/review-dashboard-mobile/LeaderBoardTable";
import LocationPerformanceTable from "@/components/review-dashboard-mobile/LocationPerformanceTable";
import LocationActivityReportTable from "@/components/review-dashboard-mobile/LocationActivityReportTable";
import ReviewRequestCard, {
  CompletedReviewRequestCard,
} from "@/components/review-dashboard-mobile/ReviewRequestCard";
import ReviewNavbar from "@/components/review-dashboard-mobile/ReviewNavbar";
import FacebookDesk from "@/assets/images/hubspark/fb_desk.png";
import InstagramDesk from "@/assets/images/hubspark/Insta_desk.png";
import TwitterDesk from "@/assets/images/hubspark/twitter_desk.png";
import LinkdinDesk from "@/assets/images/hubspark/linkdin_desk.png";
import TrashDesk from "@/assets/images/hubspark/trash_desk.png";
import ShareDesk from "@/assets/images/hubspark/Share_desk.png";
import GreenDesk from "@/assets/images/hubspark/green_desk.png";
import { Star } from "lucide-react";

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

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const pages = [
    { value: "11", label: "1" },
    { value: "12", label: "2" },
    { value: "13", label: "3" },
    { value: "14", label: "4" },
    { value: "15", label: "5" },
    { value: "16", label: "6" },
  ];

  const handlePageChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPage(event.target.value);
  };

  const reviews = [
    {
      user: "johndoe@companyname.com",
      customer: "Jenny F.",
      email: "jennyf@gmail.com",
      requested: "01-15-2024 2:45 PM",
      location: "123 Main St, Anytown, USA",
      review:
        "The team was professional, the work was completed on time, and the pricing was fair. Highly recommend their services!",
      rating: 5,
      completed: "01-17-2024 1:55 PM",
      response:
        "It was a pleasure working with you, and we appreciate your recommendation.",
    },
    {
      user: "janedoe@companyname.com",
      customer: "Tom V.",
      email: "tomv@gmail.com",
      requested: "02-02-2024 7:37 PM",
      location: "123 Main St, Anytown, USA",
      review:
        "They were knowledgeable, responsive, and provided clear guidance throughout my case. I felt confident and well-represented.",
      rating: 5,
      completed: "02-03-2024 3:55 PM",
      response:
        "Thank you for your wonderful review! We're delighted to hear that you had a positive experience and felt well-supported.",
    },
    {
      user: "janedoe@companyname.com",
      customer: "Tom V.",
      email: "tomv@gmail.com",
      requested: "02-02-2024 7:37 PM",
      location: "123 Main St, Anytown, USA",
      review:
        "They were knowledgeable, responsive, and provided clear guidance throughout my case. I felt confident and well-represented.",
      rating: 5,
      completed: "02-03-2024 3:55 PM",
      response:
        "Thank you for your wonderful review! We're delighted to hear that you had a positive experience and felt well-supported.",
    },
    {
      user: "janedoe@companyname.com",
      customer: "Tom V.",
      email: "tomv@gmail.com",
      requested: "02-02-2024 7:37 PM",
      location: "123 Main St, Anytown, USA",
      review:
        "They were knowledgeable, responsive, and provided clear guidance throughout my case. I felt confident and well-represented.",
      rating: 5,
      completed: "02-03-2024 3:55 PM",
      response:
        "Thank you for your wonderful review! We're delighted to hear that you had a positive experience and felt well-supported.",
    },
  ];

  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex flex-col w-full absolute top-0 bg-[#F4F4F4]">
        {/* <div className="flex md:hidden rounded-b-3xl  items-center  justify-center w-full h-[60px] bg-[#E0E0E0]">
          <div className="flex px-5 ml-7 py-4">
            <MenuIcon />
          </div>
          <div className="flex -ml-10 justify-center items-center flex-grow">
            <span style={CheckInStyle}>Review Dashboard </span>
          </div>
        </div> */}
        <div className="w-full justify-center relative flex flex-col ">
          <ReviewNavbar heading={"Review Dashboard"} />
        </div>
        <div className="px-4 md:px-[5%] lg:px-[10%]">
          <div className="flex flex-col mt-3 gap-2 py-3">
            <div className="flex justify-between items-center ml-0 ">
              <div className="bg-[#631363] pl-[5%] text-white font-[Arial] text-lg font-semibold hidden md:flex  w-full rounded-2xl py-4">
                Leaderboard Report
              </div>
            </div>
            <div className="flex w-full px-0 md:px-4  md:justify-between gap-1 justify-normal ">
              <div className="w-fit">
                <div className="py-2 md:my-3 h-fit my-2">
                  <SeoDatePicker bgColor="#FFFFFF" />
                </div>
                <div className="rounded-xl flex border border-[#5F1762] w-fit">
                  <button className="px-2 py-1 outline-none rounded-l-xl h-fit text-xs md:text-sm md:font-semibold bg-[#631363] text-white">
                    City
                  </button>
                  <div className="bg-[#631363] w-full border border-[#631363]"></div>
                  <button className="px-2 py-1 h-fit text-xs rounded-xl outline-none  md:text-sm font-semibold text-[#631363] bg-[#F4F4F4]">
                    Employee
                  </button>
                </div>
              </div>
              <div className="py-2 md:ml-1 ml-0 flex justify-end items-end md:items-start w-full flex-col md:flex-row gap-2">
                <button className="bg-[#631363] p-2 h-fit w-fit text-[10px] md:text-sm font-semibold  text-white rounded-lg">
                  Create Check-In
                </button>
                <button className="bg-[#40F440] p-2 h-fit w-fit text-[10px] md:text-sm font-semibold  text-black rounded-lg">
                  Request Review
                </button>
              </div>
            </div>

            <div className="flex justify-between items-start px-0 md:px-2 ml-2 ">
              <div className="flex gap-3 flex-1 pt-2 justify-start items-center">
                <span
                  className="text-[#6D6D6D] justify-start items-start text-xs md:text-lg font-normal md:font-medium"
                  style={{
                    ...Typography,
                  }}>
                  Show
                </span>
                <CalenderDropdown
                  options={pages}
                  value={page}
                  onChange={handlePageChange}
                />
                <span
                  className="text-[#6D6D6D] justify-start items-start text-xs md:text-lg font-normal md:font-medium"
                  style={{
                    ...Typography,
                  }}>
                  Entries
                </span>
              </div>
              <div className="flex w-full flex-1 relative justify-end items-center py-2">
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
        </div>
        <div className=" h-full w-full flex items-center justify-center md:px-4 lg:px-[10%]">
          <div className="container mx-auto">
            {/* Desktop view */}
            <div className="hidden md:flex">
              {isClient ? (
                <table className="w-full">
                  <thead>
                    <tr className="bg-[#631363] text-white">
                      <th className="p-2 border-r rounded-tl-3xl">User</th>
                      <th className="p-2 border-r">Customer</th>
                      <th className="p-2 border-r">Requested</th>
                      <th className="p-2 border-r">Location</th>
                      <th className="p-2 border-r">Review</th>
                      <th className="p-2 border-r">Completed</th>
                      <th className="p-2 border-r">Response</th>
                      <th className="p-2 rounded-tr-3xl"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {reviews.map((review, index) => (
                      <tr key={index} className="border-b bg-[#F9F9F9]">
                        <td className="p-2 break-words text-wrap  md:max-w-[80px] border lg:text-lg md:text-base font-normal text-[#6D6D6D]  lg:max-w-[100px]">
                          {review.user}
                        </td>
                        <td className="p-2 break-words text-wrap md:max-w-[80px] border lg:text-lg md:text-base font-normal text-[#6D6D6D] lg:max-w-[100px]">
                          {review.customer} via: {review.email}
                        </td>
                        <td className="p-2 break-words text-wrap  md:max-w-[50px] lg:max-w-[100px] borderlg:text-lg md:text-base font-normal text-[#6D6D6D]">
                          {review.requested}
                        </td>
                        <td className="p-2 break-words text-wrap  md:max-w-[100px]  lg:max-w-[120px] borderlg:text-lg md:text-base font-normal text-[#6D6D6D]">
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
                          {review.completed}
                        </td>
                        <td className="p-2 break-words text-wrap  max-w-[80px] lg:max-w-[160px] border lg:text-lg md:text-base font-normal text-[#6D6D6D]">
                          {review.response}
                        </td>
                        <td className="md:w-[100px] max-w-[100px] lg:max-w-[150px] flex flex-col justify-center py-2 gap-2 text-center items-start">
                          <div className="flex cursor-pointer gap-1 md:px-1 pl-2 items-center w-full md:flex-col  lg:flex-row pt-[25%] ">
                            <Image
                              alt="Share"
                              className="object-contain cursor-pointer"
                              src={TrashDesk}
                            />
                            <Image
                              alt="logo"
                              className="object-contain cursor-pointer"
                              src={GreenDesk}
                            />
                          </div>
                          <div className="flex w-full items-center md:flex-col lg:flex-row gap-1 md:px-1 pl-2">
                            <Image
                              alt="logo"
                              className="object-contain w-5 h-5 flex-shrink-0 cursor-pointer"
                              src={ShareDesk}
                            />
                            <Image
                              alt="logo"
                              className="object-cover w-4 h-4  flex-shrink-0 cursor-pointer"
                              src={FacebookDesk}
                            />
                            <Image
                              alt="logo"
                              className="object-cover w-4 h-4 flex-shrink-0  cursor-pointer"
                              src={InstagramDesk}
                            />
                            <Image
                              alt="logo"
                              className="object-cover  w-4 h-4 flex-shrink-0 cursor-pointer"
                              src={TwitterDesk}
                            />
                            <Image
                              alt="logo"
                              className="object-cover w-4 h-4 flex-shrink-0 cursor-pointer"
                              src={LinkdinDesk}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : null}
            </div>

            {/* Mobile view */}
            {isClient ? (
              <div className="md:hidden  px-[4%]">
                {reviews.map((review, index) => (
                  <div className="flex space-x-2 w-full" key={index}>
                    <div
                      key={index}
                      className=" text-white rounded-2xl pb-4 overflow-hidden">
                      <div className="">
                        <div className="flex w-full">
                          {" "}
                          <div className="bg-[#631363] text-white w-[100px] text-xs p-2">
                            User
                          </div>{" "}
                          <div className="text-[#6D6D6D] bg-[#FFFFFF] rounded-tr-2xl p-2 text-xs break-words w-full">
                            {review.user}
                          </div>{" "}
                        </div>
                        <div className="flex w-full">
                          <div className="bg-[#631363] w-[100px] text-xs p-2">
                            Customer
                          </div>{" "}
                          <div className="text-[#6D6D6D] w-full p-2 text-xs break-words">
                            {review.customer} via: {review.email}
                          </div>{" "}
                        </div>
                        <div className="flex w-full">
                          <div className="bg-[#631363] w-[100px] text-xs p-2">
                            Requested
                          </div>{" "}
                          <div className="text-[#6D6D6D] bg-white w-full p-2 text-xs break-words">
                            {review.requested}
                          </div>{" "}
                        </div>
                        <div className="flex w-full">
                          <div className="bg-[#631363] w-[100px] p-2 text-xs">
                            Location
                          </div>
                          <div className="text-[#6D6D6D] w-full p-2 text-xs break-words">
                            {" "}
                            {review.location}
                          </div>{" "}
                        </div>
                        <div className="flex w-full">
                          <div className="bg-[#631363] w-[100px] text-xs p-2">
                            {" "}
                            Review
                          </div>
                          <div className="w-full p-2 bg-white">
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
                              {review.location}
                            </div>
                          </div>
                        </div>
                        <div className="flex w-full">
                          {" "}
                          <div className="bg-[#631363] w-[100px] text-xs p-2">
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
                    <div className="w-fit pt-2">
                      <div className="pb-2 flex flex-col  gap-2">
                        <Image
                          alt="Share"
                          className="object-contain cursor-pointer w-6 h-6"
                          src={TrashDesk}
                        />
                        <Image
                          alt="logo"
                          className="object-contain w-6 h-6"
                          src={GreenDesk}
                        />
                      </div>
                      <div className="bg-white flex flex-col justify-center items-center gap-2 py-1 px-1 w-8 rounded-2xl">
                        <Image
                          alt="logo"
                          className="object-contain w-5 h-5 flex-shrink-0"
                          src={ShareDesk}
                        />
                        <Image
                          alt="logo"
                          className="object-contain w-5 h-5  flex-shrink-0"
                          src={FacebookDesk}
                        />
                        <Image
                          alt="logo"
                          className="object-contain w-5 h-5 flex-shrink-0 "
                          src={InstagramDesk}
                        />
                        <Image
                          alt="logo"
                          className="object-contain w-6 h-6 flex-shrink-0"
                          src={TwitterDesk}
                        />
                        <Image
                          alt="logo"
                          className="object-contain w-5 h-5 flex-shrink-0"
                          src={LinkdinDesk}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div>Loading...</div>
            )}
          </div>
        </div>
        {/* <LeaderboardTable /> */}

        <div className="flex relative  md:hidden z-20 mt-5 justify-center items-center w-full bg-[#40F440] h-[55px] rounded-t-3xl"></div>
      </div>
    </div>
  );
};

export default ReviewRequest;
