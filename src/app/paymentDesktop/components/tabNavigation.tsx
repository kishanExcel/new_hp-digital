import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

interface tabProps {
  tabName: string;
  tabUrl: string;
}

interface TabProps {
  tabData: tabProps[];
}

const tabNavigation: React.FC<TabProps> = ({ tabData }) => {
  const router = useRouter();
  const { query } = router;
  return (
    <div className="flex w-full overflow-x-auto mx-auto pb-2  ">
      {tabData.map((tab, i) => (
        <Link
          href={{
            pathname:
              tab.tabName === "Invoice ID#"
                ? "/Payment/transactions/transactionView"
                : tab.tabUrl,
            query: {
              name: tab.tabName,
              id:
                tab.tabName === "Invoice ID#"
                  ? "31ef2e8ecb6f85be80fc8c10"
                  : null,
            },
          }}>
          <div
            key={i}
            className={`font-bold text-[27px] text-darkSilverColor w-[300px] flex h-[77px] justify-center mx-2 items-center rounded-xl  ${query.name === tab.tabName ? "bg-limeGreen" : "bg-chinesWhite"} `}>
            <h5>{tab.tabName}</h5>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default tabNavigation;
