"use client";
import { useState } from "react";
import MobileHeader from "@/components/Header/Header-main";
import Myprofile from "@/components/review-request-settings/MyProfie";
import CompanyProfile from "@/components/review-request-settings/CompanyProfile";
import SettingsTabbar from "@/components/review-request-settings/SettingsTabbar";
import SurveySettings from "@/components/review-request-settings/SurveySettings";
import Maps from "@/components/review-request-settings/SettingsMap";
import Api from "@/components/review-request-settings/Api";
import MyPassword from "@/components/review-request-settings/MyPassword";
export default function ReviewRequestSettings() {
  const [selectedTab, setSelectedTab] = useState("myprofile");
  return (
    <div className="bg-[#F4F4F4]">
      <MobileHeader headerTitle={"Settings"} />
      <div className="px-6">
        <div className="font-bold p-4 text-[#6D6D6D]">
          Steven&apos;s Rockstars-Account Settings
        </div>
        <SettingsTabbar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        {selectedTab === "myprofile" && <Myprofile />}
        {selectedTab === "companyprofile" && <CompanyProfile />}
        {selectedTab === "surveysettings" && <SurveySettings />}
        {selectedTab === "map" && <Maps />}
        {selectedTab === "api" && <Api />}
        {selectedTab === "password" && <MyPassword />}
      </div>
    </div>
  );
}
