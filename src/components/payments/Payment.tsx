"use client"
import React, { Suspense } from "react";
import Payment from "@/components/payments/FortisPayment";
import PaymentCard from "@/components/skeleton/PaymentFallback";
import CitationNavbar from "@/components/review-dashboard-mobile/ReviewNavbar";
import Insights from './Insights'
import { ToastProvider } from "./components/toasterProvider";
async function getClientToken() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_NODE_ENV === "production" ? process.env.NEXT_PUBLIC_PROD_ENV : process.env.NEXT_PUBLIC_BASE_URL}/api/fortis/transectionIntention`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        `HTTP error! Status: ${response.status} - ${response.statusText}`
      );
    }

    const data = await response.json();

    if (!data.data || !data.data.client_token) {
      throw new Error("Client token not found in response data");
    }
    return data.data.client_token;
  } catch (error: any) {
    console.error("Error fetching client token:", error);

    throw new Error(`Failed to retrieve client token: ${error.message}`);
  }
}

const PaymentOptions = React.lazy(async () => {
  const clientToken = await getClientToken();
  return { default: () => <Payment clientToken={clientToken} /> };
});

export default function page() {
  return (
    <Suspense fallback={<PaymentCard />}>
        <ToastProvider>
       {/* <CitationNavbar heading="Navbar" isHeaderVisible={false} /> */}
       <Insights />
      {/* <PaymentOptions /> */}
      </ToastProvider>
    </Suspense>
  );
}
