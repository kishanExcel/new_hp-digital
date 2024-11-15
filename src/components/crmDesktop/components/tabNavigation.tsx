"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useCallback } from "react";

interface Tab {
  link: string;
  menuName: string;
  menuString: string;
}

const TabNavigation: React.FC = () => {
  const pathname = usePathname();

  const tabs: Tab[] = [
    {
      link: "/crmDesktop/companies",
      menuName: "Companies",
      menuString: "/companies",
    },
    {
      link: "/crmDesktop/contacts",
      menuName: "Contact",
      menuString: "/contacts",
    },
    {
      link: "/crmDesktop/deals",
      menuName: "Deals",
      menuString: "/deals",
    },
  ];

  const isActive = useCallback(
    (tab: Tab) => {
      return pathname === tab.link || pathname?.includes(tab.menuString);
    },
    [pathname]
  );

  return (
    <div className="flex w-full rounded-xl bg-white">
      {tabs.map((tab, ind) => (
        <Link key={ind} href={tab.link} className="w-full">
          <div
            className={`relative w-full flex justify-center items-center text-blackOlive textBreak ripple select-none text-[14px] tab border-x border-solid border-chinesWhite cursor-pointer text-center ${
              isActive(tab) ? "bg-limeGreen" : ""
            } h-[42px] ${ind === 0 ? "rounded-l-lg" : ""} ${
              ind === tabs.length - 1 ? "rounded-r-lg" : ""
            }`}>
            {tab.menuName}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TabNavigation;
