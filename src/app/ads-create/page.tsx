"use client";

import AdsetComponent from "@/components/ads-create/Adset";
import CampaignComponent from "@/components/ads-create/Campaign";
import AdCreativeComponent from "@/components/ads-create/Adscreative";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useFetch } from "@/hooks/useFetch";
export default function Component() {
  const { data: session, status } = useSession();
  const [adAccounts, setAdAccounts] = useState("");

  async function getAdAccounts() {
    try {
      const response = await axios.get("https://graph.facebook.com/v20.0/me", {
        params: {
          fields: "adaccounts",
          access_token: (session as any).accessToken,
        },
      });

      const adAccounts = response.data.adaccounts.data;
      setAdAccounts(adAccounts[0].account_id);
      return adAccounts;
    } catch (error) {
      console.error("Failed to fetch ad accounts:", error);
      throw error;
    }
  }

  const [currentStep, setCurrentStep] = useState(1);
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };
  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  useEffect(() => {
    getAdAccounts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-auto max-w-3xl md:max-w-full md:py-12 py-0">
      {currentStep === 1 && (
        <CampaignComponent adId={adAccounts} handleclick={handleNext} />
      )}
      {currentStep === 2 && (
        <AdsetComponent
          adId={adAccounts}
          handleclick={handleNext}
          handleprevious={handlePrevious}
        />
      )}
      {currentStep === 3 && (
        <AdCreativeComponent
          adId={adAccounts}
          handleclick={handleNext}
          handleprevious={handlePrevious}
        />
      )}
    </div>
  );
}
