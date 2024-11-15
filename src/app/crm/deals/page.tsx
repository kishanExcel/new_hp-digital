"use client";

import React, { useState } from "react";
import LayoutView from "../layout/page";
import SearchBox from "../component/searchBox/page";
import TabNavigation from "../component/tabNavigation";
import ExportIcon from "../../../assets/images/export-icon.svg";
import Image from "next/image";
import Company1 from "../../../assets/images/companies-1.png";
import Company2 from "../../../assets/images/companies-2.png";
import DownArrow from "../../../assets/images/down-arrow.svg";
import SortIcon from "../../../assets/images/sort-icon.svg";
import ToggleSwitch from "../component/toggleSwitch";
import ExpansionPanel from "../component/expansionPanel";
import ExpansionCard from "../component/expansionCard";
import Link from "next/link";

// import DesktopDeals from "../../../components/crmDesktop/deals";
import DesktopDeals from "@/components/crmDesktop/deals";
import { useClientMediaQuery } from "../../../utils/srchooksuseClientMediaQuery";

const Deals: React.FC = () => {
  const [showSorting, setShowSorting] = useState(false);
  const [showStage, setShowStage] = useState(false);
  const isMobile = useClientMediaQuery("(max-width: 769px)");

  if (isMobile) {
    return (
      <LayoutView
        Childrens={
          <div className="relative h-full w-full">
            <div className="h-[63%] px-[20px]">
              <div className="w-full mt-4 flex">
                <TabNavigation />
              </div>
              <div className="mt-4 ">
                <SearchBox Component={""} />
              </div>

              <div className="section relative w-full mt-[16px]">
                <div className="relative w-full flex justify-end text-[10px] font-bold font-arial text-cultured">
                  <span className="relative">
                    <button
                      onClick={() => setShowStage(!showStage)}
                      className="bg-palatinatePurple px-[6px] mr-[40px] text-[10px] font-bold py-[7px] text-cultured rounded-lg">
                      + New Stage
                    </button>
                    {showStage && (
                      <div className="absolute bg-white top-8 left-0 w-[290px] px-[10px] border border-palatinatePurple rounded-2xl z-50">
                        <h5 className="text-[12px] font-bold text-darkSilverColor mt-[6px]">
                          Stage Name
                        </h5>
                        <div className="mt-[10px] mb-[15px] flex">
                          <input className="h-[32px] w-full rounded-3xl text-black bg-cultured border-0 outline-none px-[12px] " />
                          <button className="bg-palatinatePurple px-[10px] w-[120px] text-[10px] font-bold py-[6px] ml-[12px] text-cultured rounded-xl">
                            Add Stage
                          </button>
                        </div>
                      </div>
                    )}
                  </span>
                  <div className="relative flex items-center mr-[14px]">
                    <Image
                      onClick={() => setShowSorting(!showSorting)}
                      src={DownArrow}
                      alt="sort"
                      className={`mr-[5px] ${showSorting ? "-rotate-180" : ""}`}
                    />
                    <h5
                      onClick={() => setShowSorting(!showSorting)}
                      className="text-palatinatePurple text-[10px] font-bold mr-[5px]">
                      TYPE
                    </h5>
                    <Image
                      onClick={() => setShowSorting(!showSorting)}
                      src={SortIcon}
                      alt="sort"
                    />
                    {showSorting && (
                      <div className="absolute w-[137px] z-[999] text-[10px] top-7 left-0 text-[#5F1762] bg-white border-[1px] border-palatinatePurple rounded-md">
                        <h5 className="mt-[7px] pl-[17px] px-[3px] ripple">
                          Other
                        </h5>
                        <h5 className="mt-[7px] pl-[17px] px-[3px] ripple">
                          Copywriting
                        </h5>
                        <h5 className="mt-[7px] pl-[17px] px-[3px] ripple">
                          Print Project
                        </h5>
                        <h5 className="mt-[7px] pl-[17px] px-[3px] ripple">
                          UI Design
                        </h5>
                        <h5 className="mt-[7px] pl-[17px] px-[3px] mb-[10px] ripple">
                          Website Design
                        </h5>
                      </div>
                    )}
                  </div>
                  <button className="px-[5px] py-[7px] bg-palatinatePurple flex items-center text-white mr-[5px] rounded-lg">
                    <Image src={ExportIcon} alt="export" className="mr-[5px]" />
                    Export
                  </button>
                  <Link
                    href={{
                      pathname: "/crm/deals/addNewDeals",
                      query: { name: "Deals" },
                    }}>
                    <button className="px-[6px] py-[7px] bg-palatinatePurple text-white rounded-lg">
                      + New Deals
                    </button>
                  </Link>
                </div>
              </div>

              <div className="flex justify-end mt-[20px]">
                <ToggleSwitch />
                <h5 className="text-[10px] text-darkSilverColor font-bold ml-[11px]">
                  Only Companies I Manage
                </h5>
              </div>

              <div className="mt-[14px] overflow-y-auto h-[100%] pe-2">
                <ExpansionPanel title="Opportunity">
                  <ExpansionCard
                    logoSrc={Company1}
                    description="Description for item"
                    quantity={1}
                    price={100}
                    category="Finance"
                  />
                  <ExpansionCard
                    logoSrc={Company2}
                    description="Description for item"
                    quantity={1}
                    price={100}
                    category="Finance"
                  />
                </ExpansionPanel>
                <ExpansionPanel title="Proposal Sent">
                  <ExpansionCard
                    logoSrc={Company1}
                    description="Description for item"
                    quantity={1}
                    price={100}
                    category="Finance"
                  />
                  <ExpansionCard
                    logoSrc={Company2}
                    description="Description for item"
                    quantity={1}
                    price={100}
                    category="Finance"
                  />
                </ExpansionPanel>
                <ExpansionPanel title="In Negotiation">
                  <ExpansionCard
                    logoSrc={Company1}
                    description="Description for item"
                    quantity={1}
                    price={100}
                    category="Finance"
                  />
                  <ExpansionCard
                    logoSrc={Company2}
                    description="Description for item"
                    quantity={1}
                    price={100}
                    category="Finance"
                  />
                </ExpansionPanel>
                <ExpansionPanel title="Won">
                  <ExpansionCard
                    logoSrc={Company1}
                    description="Description for item"
                    quantity={1}
                    price={100}
                    category="Finance"
                  />
                  <ExpansionCard
                    logoSrc={Company2}
                    description="Description for item"
                    quantity={1}
                    price={100}
                    category="Finance"
                  />
                </ExpansionPanel>
                <ExpansionPanel title="Lost">
                  <ExpansionCard
                    logoSrc={Company1}
                    description="Description for item"
                    quantity={1}
                    price={100}
                    category="Finance"
                  />
                  <ExpansionCard
                    logoSrc={Company2}
                    description="Description for item"
                    quantity={1}
                    price={100}
                    category="Finance"
                  />
                </ExpansionPanel>
                <ExpansionPanel title="Delayed">
                  <ExpansionCard
                    logoSrc={Company1}
                    description="Description for item"
                    quantity={1}
                    price={100}
                    category="Finance"
                  />
                  <ExpansionCard
                    logoSrc={Company2}
                    description="Description for item"
                    quantity={1}
                    price={100}
                    category="Finance"
                  />
                </ExpansionPanel>
              </div>
            </div>
          </div>
        }
      />
    );
  } else return <DesktopDeals />;
};

export default Deals;
