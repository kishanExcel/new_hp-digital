"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
const Sliderbar = dynamic(
  () => import("@/components/CustomComponents/SlideBar"),
  {
    ssr: false,
  }
);

import Screen from "@/assets/images/hubspark/BottomScreen.png";
import Performance from "@/components/(seo)/performance/page";
import LocalListings from "@/components/(seo)/locallistings/page";
import Rankings from "@/components/(seo)/rankings/page";
import CheckIns from "@/components/(seo)/checkins/page";
import MobileHeader from "@/components/Header/Header-main";
import Image from "next/image";
import HeadBar from "@/components/citations-builder/HeadBar";
import CitationNavbar from "@/components/review-dashboard-mobile/ReviewNavbar";
export default function SEO() {
  const [selectedTab, setSelectedTab] = useState("local");

  return (
    <div className="min-h-screen bg-[#F4F4F4]">
      <CitationNavbar heading="SEO" />
      <div className="bg-[#F4F4F4] lg:flex flex-col w-full">
        <Sliderbar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="hidden lg:flex flex-col">
          {selectedTab === "local" && <LocalListings />}
          {selectedTab === "rank" && <Rankings />}
          {selectedTab === "checkins" && <CheckIns />}
        </div>
      </div>
      <Image
        height={0}
        width={0}
        style={{
          width: "100%",
          height: "auto",
        }}
        priority={true}
        className="flex md:hidden"
        alt="screen"
        src={Screen}
      />
    </div>
  );
}
