"use client";

import TextField from "@mui/material/TextField";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import LogoCircle from "@/assets/images/hubspark/LogoCIrcle.png";
import CircleImage from "@/assets/images/hubspark/circleImage.png";
import PhoneInputComp from "@/components/webchat/CustomPhoneInput";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Page() {
  const [value, setValue] = useState<string>("");

  function handeleChange(newValue: any) {
    setValue(newValue);
  }
  return (
    <div className="bg-[#F8F8F8] h-screen flex justify-center">
      <div className="w-full max-w-[1280px]">
        <div className="text-2xl md:text-3xl px-6 pt-8 font-medium">
          Let&apos;s chat
        </div>
        <p className="text-[#606060] text-sm md:text-base px-6 font-normal">
          Ask us any question
        </p>
        <div className="flex gap-4 py-2 px-6">
          <div className="relative">
            <Image alt="logo " src={LogoCircle} />
            <div className="absolute top-2 left-[0.55rem]">
              <Image alt="logo" src={CircleImage} />
              <div className="pt-4 text-[#606060] text-sm">Name</div>
            </div>
          </div>
          <div className="relative">
            <Image alt="logo " src={LogoCircle} />
            <div className="absolute top-2 left-[0.55rem]">
              <Image alt="logo" src={CircleImage} />
              <div className="pt-4 text-[#606060] text-sm">Name</div>
            </div>
          </div>
          <div className="relative">
            <Image alt="logo " src={LogoCircle} />
            <div className="absolute top-2 left-[0.55rem]">
              <Image alt="logo " src={CircleImage} />
              <div className="pt-4 text-[#606060] text-sm">Name</div>
            </div>
          </div>
        </div>
        <form className="w-full flex  justify-center" action="">
          <div className="px-10 lg:w-[40%] md:w-[60%] mt-8 gap-2 pt-8 bg-[#FFFFFF] py-4 flex justify-center flex-col w-full ">
            <TextField id="standard-basic" label="Name" variant="standard" />
            <TextField id="standard-basic" label="Email" variant="standard" />
            <PhoneInput
              defaultCountry="US"
              placeholder="Enter phone number"
              value={value}
              onChange={handeleChange}
              inputComponent={PhoneInputComp}
            />
            <TextField id="standard-basic" label="Message" variant="standard" />
            <Button
              className="bg-[#1976D3] font-normal mt-4 text-white"
              variant="default">
              Send
            </Button>
            <p className="text-xs tracking-tight text-[#969595]">
              By sending this message, you expressly consent to receive
              communications from us. You may opt out at any time.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
