import Link from "next/link";
import { useParams  } from "next/navigation";
// import { useRouter } from "next/navigate";
import React from "react";

interface TabPropsInterface {
  tabName: string;
  tabUrl: string;
}

interface TabsDataInterface {
  tabsData: TabPropsInterface[];
}

const TabNavigation: React.FC<TabsDataInterface> = ({ tabsData = [] }) => {
  const params = useParams ();
  return (
    <div className="h-[43px] flex w-full rounded-3xl overflow-hidden">
      {tabsData.length > 0 ? (
        tabsData.map((tab, index) => {
          const isFirst = index === 0;
          const isLast = index === tabsData.length - 1;
          const roundedClass = isFirst
            ? "rounded-tl-lg"
            : isLast
              ? "rounded-tr-lg"
              : "";
          return (
            <div key={tab.tabName} className="h-full w-full">
              <Link
                href={{
                  pathname: tab.tabUrl,
                  query: {
                    tabName: tab.tabName,
                  },
                }}>
                <div
                  className={`h-full ripple w-full flex text-center justify-center items-center p-1 text-[14px] text-darkSilverColor ${roundedClass} ${params?.tabName === tab.tabName ? "bg-limeGreen" : "bg-white"}`}>
                  <span>{tab.tabName}</span>
                </div>
              </Link>
            </div>
          );
        })
      ) : (
        <div className="h-full w-full flex items-center justify-center">
          No tabs available
        </div>
      )}
    </div>
  );
};

export default TabNavigation;
