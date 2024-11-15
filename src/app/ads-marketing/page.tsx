"use client";

import MarketingTab from "@/components/ads-marketing/MarketingTabBar";
import MobileHeader from "@/components/Header/Header-main";
import PaidCampigns from "@/components/ads-marketing/paid-campaigns/page";
import OrganicLayout from "@/components/ads-marketing/organic-campaigns/page";
import FollowUpCampaigns from "@/components/ads-marketing/follow-up-campaigns/page";
import NewOpportunities from "@/components/ads-marketing/new-opportunites/page";
import CitationNavbar from "@/components/review-dashboard-mobile/ReviewNavbar";
import { useState } from "react";
export default function RootLayout() {
  const [selectedTab, setSelectedTab] = useState("new-opportunites");

  return (
    <div className="bg-[#F4F4F4] min-h-screen">
      <CitationNavbar heading="Marketing" />
      <div className="md:py-2 py-0 ">
        <div className="px-0 md:px-6 md:py-4 py-0">
          <MarketingTab
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </div>
        <div className="md:py-2 py-0 px-2 md:px-10">
          {selectedTab === "new-opportunites" && <NewOpportunities />}
          {selectedTab === "paid-campaign" && <PaidCampigns />}
          {selectedTab === "organic-campaign" && <OrganicLayout />}
          {selectedTab === "follow-up" && <FollowUpCampaigns />}
        </div>
      </div>
    </div>
  );
}
