import React, { useContext } from "react";
import Layout from "../../layout";
import { useRouter } from "next/navigation";
import Image from "next/image";
import hubSparkLogo from "@/assets/images/HubSpark New Logo 5.png";
// import ProgressBar from "@/pages/onboardingDesktop/layout/progressBar";
import ProgressBar from "../../layout/progressBar";
import { MyContext } from "../../../../utils/MyContext";

const Complete: React.FC = () => {
  const router = useRouter();
  const context = useContext(MyContext);
  const handleExploreOnMyOwn = async () => {
    // router
    //   .push("/onboardingDesktop/education/schedule-call")
    //   .catch((error) => console.error("Navigation error:", error));
    try {
      await router.push("/onboarding/education/schedule-call");
      // Optionally, handle successful navigation here if needed
    } catch (error) {
      console.error("An error occurred during navigation:", error);
    }
    // You can redirect them to a dashboard or main app page here, if desired.
  };

  const handleScheduleACall = () => {
    // Redirect to a scheduling page or open up a scheduling modal, etc.
  };

  const handleContinueClick = async () => {
    // try {
    //   const response = await fetch("/api/profile/update-profile", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       token: session?.session[0],
    //       firstName: firstName,
    //       lastName: lastName,
    //       email: session?.email,
    //     }),
    //   });
    //   if (!response.ok) {
    //     if (response.status === 500) {
    //       const data = await response.json();
    //       if (data.error === "Failed to refresh access token") {
    //         // Token refresh failed, prompt user to log in again
    //         setError("Session expired. Please log in again.");
    //         return;
    //       }
    //     }
    //     throw new Error("Failed to update profile");
    //   }
    //   const updatedUser = await response.json();
    //   session.user.firstName = updatedUser.firstName;
    //   session.user.lastName = updatedUser.lastName;
    //   // Navigate to the next page
    // router
    //   .push("/onboardingDesktop/trials/business-info")
    //   .catch((error) => console.error("Navigation error:", error));
    // } catch (error) {
    //   console.error("Profile update error:", error);
    //   setError("Failed to update profile");
    // }
  };

  return (
    <Layout
      hHeading=""
      Childrens={
        <div className="h-full flex flex-col items-center px-[43px]">
          <ProgressBar count={13} />
          <div className="text-center mt-[28px]">
            <h2 className="text-[22px] font-bold text-darkSilverColor  max-w-[350px]">
              Congrats! In two minutes, you will be able to accept payments from
              your customers!
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <button
              className="text-[16px] font-bold text-white py-[10px] max-w-[300px] px-3 text-center mt-[44px] bg-palatinatePurple rounded-xl"
              onClick={handleContinueClick}
              style={{ cursor: "pointer" }}>
              Finish HubSpark Payments Setup
            </button>

            <button
              className="text-[16px] font-bold text-white py-[10px] w-[221px] text-center mt-[20px] bg-palatinatePurple rounded-xl"
              onClick={handleContinueClick}
              style={{ cursor: "pointer" }}>
              Skip This For Now
            </button>
          </div>
        </div>
      }
    />
  );
};

export default Complete;
