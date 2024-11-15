"use client";

import React, { useState } from "react";
import Image from "next/image";
import LayoutView from "../layout/page";
import SearchBox from "../component/searchBox/page";
import TabNavigation from "../component/tabNavigation";
import FilterIcon from "../../../assets/images/filter-icon.svg";
import ExportIcon from "../../../assets/images/export-icon.svg";
import DownArrow from "../../../assets/images/down-arrow.svg";
import SortIcon from "../../../assets/images/sort-icon.svg";
import AddNewContacts from "./addNewContact";
import FilterContacts from "./filterContacts";
import ContactCard from "../component/contactCard";
import Link from "next/link";
import { useClientMediaQuery } from "../../../utils/srchooksuseClientMediaQuery";
import { useRouter } from "next/navigation";
import DesktopContact from "../../../components/crmDesktop/contacts/index";

const Contacts: React.FC = () => {
  const [addNewCompany, setAddNewCompany] = useState(false);
  const [showFilterCard, setShowFilterCard] = useState(false);
  const [showSorting, setShowSorting] = useState(false);
  const isMobile = useClientMediaQuery("(max-width: 769px)");

  const router = useRouter();

  function navigation() {
    router.push("/crm/contacts/addNewContact");
  }

  // function setShowSorting(){}

  // return addNewCompany ? (
  //   <AddNewContacts />
  // ) : (
    if (isMobile){
      return (
        <LayoutView
          Childrens={
            <div className="relative h-full w-full">
              <div className=" h-[65%]">
                <div className="w-full mt-4 flex px-[20px]">
                  <TabNavigation />
                </div>
    
                <div className="mt-4 px-[20px]">
                  <SearchBox Component={"Contact"} />
                </div>
    
                <div className="section relative flex w-full justify-between mt-[16px] px-[20px]">
                  <button
                    onClick={() => setShowFilterCard(true)}
                    className="ml-[4px]">
                    <Image src={FilterIcon} alt="filter" />
                  </button>
                  {showFilterCard && (
                    <FilterContacts setShowFilterCard={setShowFilterCard} />
                  )}
    
                  <div className="w-full flex justify-end text-[10px] font-bold font-arial text-cultured">
                    <div className="relative flex items-center mr-[14px]">
                      <Image
                        onClick={() => setShowSorting(!showSorting)}
                        src={DownArrow}
                        alt="sort"
                        className="mr-[5px]"
                      />
                      <h5
                        onClick={() => setShowSorting(!showSorting)}
                        className="text-palatinatePurple text-[10px] font-bold mr-[5px]">
                        SORT BY
                      </h5>
                      <Image
                        onClick={() => setShowSorting(!showSorting)}
                        src={SortIcon}
                        alt="sort"
                      />
                      {showSorting && (
                        <div className="absolute w-[137px] z-[9] text-[10px] top-7 left-0 text-palatinatePurple bg-white border-[1px] border-palatinatePurple rounded-md pb-3">
                          <h5 className="mt-[7px] pl-[17px] px-[3px] ripple">
                            Last name ascending
                          </h5>
                          <h5 className="mt-[7px] pl-[17px] px-[3px] ripple">
                            First name ascending
                          </h5>
                          <h5 className="mt-[7px] pl-[17px] px-[3px] ripple">
                            Last seen ascending
                          </h5>
                        </div>
                      )}
                    </div>
                    <button className="px-[10px] py-[7px] bg-palatinatePurple flex items-center text-white mr-[5px] rounded-lg">
                      <Image src={ExportIcon} alt="export" className="mr-[5px]" />
                      Export
                    </button>
                    <button
                      onClick={() => navigation()}
                      className="px-[6px] py-[7px] bg-palatinatePurple text-white rounded-lg">
                      + New Contact
                    </button>
                  </div>
                </div>
    
                <div className="mt-[35px] h-full overflow-y-auto">
                  <Link
                    href={{
                      pathname: "/crm/contacts/detailContact",
                      query: { name: "Contact" },
                    }}>
                    <ContactCard
                      name="John Doe"
                      role="CEO at"
                      notes={3}
                      tags={["football-fun", "musician"]}
                      daysAgo="6"
                    />
                  </Link>
    
                  <Link
                    href={{
                      pathname: "/crm/contacts/detailContact",
                      query: { name: "Contact" },
                    }}>
                    <ContactCard
                      name="John Doe"
                      role="CEO at"
                      notes={3}
                      tags={["football-fun", "musician"]}
                      daysAgo="6"
                    />
                  </Link>
                  <Link
                    href={{
                      pathname: "/crm/contacts/detailContact",
                      query: { name: "Contact" },
                    }}>
                    <ContactCard
                      name="John Doe"
                      role="CEO at"
                      notes={3}
                      tags={["football-fun", "musician"]}
                      daysAgo="6"
                    />
                  </Link>
                  <Link
                    href={{
                      pathname: "/crm/contacts/detailContact",
                      query: { name: "Contact" },
                    }}>
                    <ContactCard
                      name="John Doe"
                      role="CEO at"
                      notes={3}
                      tags={["football-fun", "musician"]}
                      daysAgo="6"
                    />
                  </Link>
                  <Link
                    href={{
                      pathname: "/crm/contacts/detailContact",
                      query: { name: "Contact" },
                    }}>
                    <ContactCard
                      name="John Doe"
                      role="CEO at"
                      notes={3}
                      tags={["football-fun", "musician"]}
                      daysAgo="6"
                    />
                  </Link>
                  <Link
                    href={{
                      pathname: "/crm/contacts/detailContact",
                      query: { name: "Contact" },
                    }}>
                    <ContactCard
                      name="John Doe"
                      role="CEO at"
                      notes={3}
                      tags={["football-fun", "musician"]}
                      daysAgo="6"
                    />
                  </Link>
                </div>
              </div>
            </div>
          }
        />
      );
    }
    else return  <DesktopContact/>;
 
};

export default Contacts;
