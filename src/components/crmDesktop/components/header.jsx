"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import Logo from "@/assets/images/D-logo.png";
import LogoIcon from "@/assets/images/D-logo-icon.svg";
import LogoIcon1 from "@/assets/images/D-logo-icon1.svg";
import LogoIcon2 from "@/assets/images/D-logo-icon2.svg";
import RoundIcon from "@/assets/images/D-round.svg";
import UserImage from "@/assets/images/user-image.png";

export default function Header() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const name = searchParams.get("name");

  const isActive = (path) => {
    return pathname.includes(path) || name === path;
  };

  return (
    <div className="w-full grid grid-cols-4 h-[87px] bg-white justify-between">
      <div className="logo flex ml-[60px]">
        <div>
          <Image src={Logo} alt="logo" />
        </div>
        <div className="flex">
          <Image src={LogoIcon} alt="logo icon" />
          <Image src={LogoIcon1} alt="logo icon1" />
          <Image src={LogoIcon2} alt="logo icon2" />
        </div>
      </div>
      <nav className="tabs col-span-2">
        <ul className="flex h-full items-center justify-center text-[20px]  lg:text-[28px] font-bold text-darkSilverColor">
          <li
            className={`px-4 py-5 cursor-pointer ${
              isActive("Companies")
                ? "border-b-palatinatePurple border-b-[6px]"
                : "border-b-white border-b-[6px]"
            }`}>
            <Link href="/crm/companies?name=Companies">Companies</Link>
          </li>
          <li
            className={`px-[29px] py-5 cursor-pointer ${
              isActive("Contact")
                ? "border-b-palatinatePurple border-b-[6px]"
                : "border-b-white border-b-[6px]"
            }`}>
            <Link href="/crm/contacts?name=Contact">Contact</Link>
          </li>
          <li
            className={`px-[29px] py-5 cursor-pointer ${
              isActive("Deals")
                ? "border-b-palatinatePurple border-b-[6px]"
                : "border-b-white border-b-[6px]"
            }`}>
            <Link href="/crm/deals?name=Deals">Deals</Link>
          </li>
        </ul>
      </nav>
      <div className="vector-bg w-full flex justify-end items-center">
        <Image src={RoundIcon} alt="round icon" className="mr-[23px]" />
        <div className="usr-logo h-[53px] w-[53px] rounded-full bg-chinesWhite mr-[16px]">
          <Image src={UserImage} alt="user image" />
        </div>
        <h5 className="text-[28px] font-bold text-white md:mr-[20px] lg:mr-[40px]">
          John Doe
        </h5>
      </div>
    </div>
  );
}
