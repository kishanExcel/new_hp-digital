// components/Profile.tsx

import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import Layout from "../layout";
import Image from "next/image";
import { MyContext } from "../../../utils/MyContext";
import hubSparkLogo from "@/assets/images/HubSpark New Logo 5.png";
// import ProgressBar from "@/pages/onboarding/layout/progressBar";
import ProgressBar from "../layout/progressBar";
import { useSession } from "next-auth/react";
import { useClientMediaQuery } from "../../../utils/srchooksuseClientMediaQuery";
import DesktopOnboardingProfile from "../../onboardingDesktop/trials/profile";

const Profile: React.FC = () => {
  const router = useRouter();
  const context = useContext(MyContext);
  // const { updateContextData } = context;
  const isMobile = useClientMediaQuery("(max-width: 769px)");

  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/onboarding/trials/business-info");
    }
  }, [status, router]);

  const [firstName, setFirstName] = useState(session?.user?.firstName || "");
  const [lastName, setLastName] = useState(session?.user?.lastName || "");
  const [error, setError] = useState<string | null>(null);

  const handleContinueClick = async () => {
    if (context) {
      context.updateContextData({ firstName, lastName });
    }
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
    router
      .push("/onboarding/trials/business-info")
      .catch((error) => console.error("Navigation error:", error));
    // } catch (error) {
    //   console.error("Profile update error:", error);
    //   setError("Failed to update profile");
    // }
  };
  if (isMobile) {
    return (
      <Layout
        hHeading=""
        Childrens={
          <>
            <div className="flex justify-center">
              <ProgressBar count={2} />
            </div>
            <div className="relative h-full flex items-start w-full flex-col mt-[27px] px-[43px]">
              <div className="text-[22px] font-bold text-darkSilverColor text-center">
                <h1 style={{ fontWeight: "bold" }}>
                  Let's start by setting up your profile.
                </h1>
              </div>
              <p className="text-[16px] text-darkSilverColor mt-[22px]">
                Set up your profile.
              </p>

              <div style={{ width: "100%" }}>
                <div className="text-[14px] font-bold text-darkSilverColor mt-[12px]">
                  <label style={{ fontWeight: "bold" }}>First name</label>
                </div>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full bg-white h-[33px] text-[12px] text-darkSilverColor pl-[18px] py-[10px] rounded-lg"
                />
              </div>

              <div style={{ width: "100%", marginTop: "5px" }}>
                <div className="text-[14px] font-bold text-darkSilverColor">
                  <label style={{ fontWeight: "bold" }}>Last name</label>
                </div>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full bg-white h-[33px] text-[12px] text-darkSilverColor pl-[18px] py-[10px] rounded-lg"
                />
              </div>

              <div className="flex justify-center w-full">
                <button
                  className="text-[16px] font-bold text-white py-[10px] mt-[25px] w-[221px] text-center bg-palatinatePurple rounded-lg"
                  onClick={handleContinueClick}
                  style={{ cursor: "pointer" }}>
                  Continue
                </button>
              </div>
              <div className="absolute bottom-14 flex justify-center left-[25%]">
                <Image src={hubSparkLogo} alt="Hub Spark Logo" />
              </div>
            </div>
          </>
        }
      />
    );
  } else return <DesktopOnboardingProfile />;
};

export default Profile;
