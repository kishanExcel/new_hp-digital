"use client";
import React, { useContext } from "react";
import { useRouter } from "next/navigation";
import MobileNumberInput from "../../../../components/onboarding/MobileNumberInput";
import Layout from "../../layout";
// import ProgressBar from "@/pages/onboarding/layout/progressBar";
import ProgressBar from "../../layout/progressBar";
import { MyContext } from "../../../../utils/MyContext";
import { useClientMediaQuery } from "../../../../utils/srchooksuseClientMediaQuery";
import DesktopOnboardingPhoneNumber from "../../../onboardingDesktop/trials/input-phone-number/page";
import Image from "next/image";
import hubSparkLogo from "@/assets/images/HubSpark New Logo 5.png";

const Phone = () => {
  const context = useContext(MyContext);
  // const { contextData, updateContextData } = context;
  const [mobileNumber, setMobileNumber] = React.useState("");
  const router = useRouter();
  const isMobile = useClientMediaQuery("(max-width: 769px)");

  const handleMobileNumberChange = (mobileNumber: string) => {
    setMobileNumber(mobileNumber);
  };

  const handleSendCode = async () => {
    // Validate mobile number
    if (mobileNumber.length < 10) {
      alert("Please enter a valid mobile number.");
      return;
    }
    if (context) {
      context.updateContextData({ phoneNumber: mobileNumber });
    }
    // Send code

    // ... add code to send SMS code

    // router
    //   .push("/onboarding/trials/verify-account?product=")
    //   .catch((error) => console.error("Navigation error:", error));
    try {
      await router.push("/onboarding/trials/verify-account?product=");
      // Optionally, handle successful navigation here if needed
    } catch (error) {
      console.error("An error occurred during navigation:", error);
    }
  };

  return (
    <Layout
      hHeading=""
      Childrens={
        <div className="flex-1 px-[43px] flex items-center flex-col">
          <ProgressBar count={4} />

          <div className="flex flex-col w-full text-center mt-[27px] ">
            <h1 className="mx-auto text-[22px] w-[60%] leading-7 lg:w-full md:text-3xl lg:text-[45px] text-darkSilverColor font-bold">
              Enter your mobile number
            </h1>
            <div className="mx-auto mt-[20px] lg:mt-[30px] w-full max-w-[70%] md:w-[45%] lg:w-[40%]">
              <MobileNumberInput
                onMobileNumberChange={handleMobileNumberChange}
              />
            </div>
            <button
              className="mx-auto  text-[16px] md:text-xl lg:text-[36px] font-bold text-white py-[10px] lg:py-5  mt-[14px] lg:mt-[20px] w-[221px] lg:w-[30%]  text-center bg-palatinatePurple rounded-2xl lg:rounded-[35px]"
              onClick={handleSendCode}
              style={{ cursor: "pointer" }}>
              Send Code
            </button>
          </div>
          <div className="flex flex-col  lg:text-[26px] text-center mt-[21px]">
            <div className="mx-auto md:w-[55%] lg:w-[40%] text-[14px] md:text-lg text-center font-normal lg:text-[26px] tracking-tight leading-normal lg:leading-8 text-darkSilverColor">
              By continuing, you authorize HubSpark to send text messages to the
              mobile number provided. Message/data rates may apply.
            </div>
          </div>
          <div className="absolute lg:hidden transform bottom-14 translate-x-0">
            <Image src={hubSparkLogo} alt="Hub Spark Logo" />
          </div>
        </div>
      }
    />
  );
};

export default Phone;
