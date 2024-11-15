'use client'
import TabNavigation from "../../../components/payments/components/tabNavigation";
import React, { useEffect, useState } from "react";
import Layout from "../layout";
import ArrowUp from "../../../assets/images/P-arrow-up.svg";
import Image from "next/image";
import Link from "next/link";
import BarChart from "../../../components/payments/components/barchart/BarChart";
import { useClientMediaQuery } from "@/utils/srchooksuseClientMediaQuery";
import InsightDesktop from "../../paymentDesktop/insights"


const barChartSvgContainerStyle: React.CSSProperties = {
  width: "100%",
  height: "250px",
  position: "relative",
  top: "0",
  marginTop: '20px',
  left: "0",
  backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc0NDAnIGhlaWdodD0nNDQxJyB2aWV3Qm94PScwIDAgNDQwIDQ0MScgZmlsbD0nbm9uZSc+PHBhdGggZD0nTTM5Ny4zMjUgNDQxSDQyLjY3NDhDMTkuMTY4MiA0NDEgMCA0MjEuNzE2IDAgMzk4LjI0NFY0Mi43NTY0QzAgMTkuMjA0OCAxOS4yNDcgMCA0Mi42NzQ4IDBIMzk3LjMyNUM0MjAuODMyIDAgNDQwIDE5LjI4MzkgNDQwIDQyLjc1NjRWMzk4LjI0NEM0NDAgNDIxLjc5NSA0MjAuNzUzIDQ0MSAzOTcuMzI1IDQ0MVonIGZpbGw9JyNFMEUwRTAnLz48L3N2Zz4=')`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
};

const localSearchBarChartStyle: React.CSSProperties = {
  position: "relative",
  top: "151.77px",
  left: "0",
};

type BarChartSvgComponentProps = {
  targetHeights: number[];
};

const BarChartSvgComponent: React.FC<BarChartSvgComponentProps> = ({
  targetHeights,
}) => (
  <div style={barChartSvgContainerStyle}>
    <BarChart targetHeights={targetHeights} />
  </div>
);

const targetHeights = [10, 75, 50, 20, 60, 120];

function index() {
  const isMobile = useClientMediaQuery('(max-width: 769px)')
  const tabData = [
    {
      tabName: "Insight",
      tabUrl: "/Payment/insights",
    },
    {
      tabName: "Transactions",
      tabUrl: "/Payment/transactions",
    },
  ];

  const [animatedHeights, setAnimatedHeights] = useState<number[]>(
    new Array(targetHeights.length).fill(0)
  );

  useEffect(() => {
    const duration = 2000;
    const frameRate = 1000 / 60;
    const totalFrames = duration / frameRate;

    const increments = targetHeights.map(
      (targetHeight) => targetHeight / totalFrames
    );

    const intervalBars1 = setInterval(() => {
      setAnimatedHeights((prevHeights) =>
        prevHeights.map((prevHeight, index) =>
          Math.min(prevHeight + increments[index], targetHeights[index])
        )
      );
    }, frameRate);
    return () => {
      clearInterval(intervalBars1);
    };
  }, []);


  if (isMobile) {
    return (
      <Layout
        hHeading="Payments"
        Childrens={
          <div className="px-[15px] pt-[18px] flex-1 flex flex-col h-full bg-cultured ">
            <TabNavigation tabsData={tabData} />
            <div className="section flex-1 overflow-y-auto">
              <InsightsCard
                headerText="Amount Processed"
                Children={
                  <div className="pb-[40px]">
                    <div className="flex mt-[10px] justify-around">
                      <button className="text-[12px] font-bold text-palatinatePurple py-[6px] px-[17px] bg-white rounded-lg">
                        Month
                      </button>
                      <button className="text-[12px] font-bold text-palatinatePurple py-[6px] px-[17px]">
                        7 Days
                      </button>

                      <button className="text-[12px] font-bold text-palatinatePurple py-[6px] px-[17px]">
                        Today
                      </button>
                    </div>
                    <div className="flex justify-center mt-[17px] ">
                      <h5 className="text-[48px] font-bold text-palatinatePurple">
                        $76,259.00
                      </h5>
                    </div>
                    <div className="flex justify-center mt-[7px] ">
                      <h5 className="text-[20px]  text-darkSilverColor">
                        So far this month
                      </h5>
                    </div>

                    <div className="flex justify-center mt-[7px] ">
                      <div className="py-[6px] px-[25px] rounded-3xl  bg-darkSilverColor text-[16px] font-bold text-cultured">
                        <span className="text-limeGreen inline">
                          <Image src={ArrowUp} alt="" className="inline" /> 13%
                        </span>
                        versus last month
                      </div>
                    </div>

                    <div className="flex justify-center mt-[10px] ">
                      <div className=" text-[16px] font-bold text-darkSilverColor ">
                        <span className="text-palatinatePurple inline">
                          {" "}
                          $68,125.00{" "}
                        </span>
                        this time last month
                      </div>
                    </div>
                  </div>
                }
              />

              <InsightsCard
                headerText="Amount Collected"
                Children={
                  <div className="px-[10px]">
                    <BarChartSvgComponent targetHeights={animatedHeights} />
                  </div>
                }
              />
              <InsightsCard
                headerText="Estimated Deposits"
                Children={
                  <div className="px-[5px]">
                    <BarChartSvgComponent targetHeights={animatedHeights} />
                  </div>
                }
              />
            </div>
          </div>
        }
      />
    );
  } else return <InsightDesktop />


}

export default index;

interface InsightsCardProps {
  headerText: string;
  Children: React.ReactNode;
}

const InsightsCard: React.FC<InsightsCardProps> = ({
  headerText,
  Children,
}) => {
  return (
    <div className="w-full flex flex-col mt-[18px] bg-chinesWhite  rounded-lg">
      <div className="cardHeader w-full rounded-xl bg-palatinatePurple text-white text-[16px] font-bold py-[10px] pl-[15px]">
        {headerText}
      </div>
      <div className="flex-1 overflow-x-auto">{Children}</div>
    </div>
  );
};
