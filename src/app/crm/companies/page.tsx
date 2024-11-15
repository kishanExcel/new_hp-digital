"use client";

import LayoutView from "../layout/page";
import SearchBox from "../component/searchBox/page";
import TabNavigation from "../component/tabNavigation";
import FilterIcon from "@/assets/images/filter-icon.svg";
import ExportIcon from "@/assets/images/export-icon.svg";
import Company1 from "@/assets/images/companies-1.png";
import Company2 from "@/assets/images/companies-2.png";
import Image from "next/image";
import CompaniesCard from "../component/companiesCard";
// import AddNewCompany from "./newCompanyForm";
import { useState } from "react";
import FilterCompanies from "./filterCompanies";
import { useRouter } from "next/navigation";
import { useClientMediaQuery } from "../../../utils/srchooksuseClientMediaQuery";
import DesktopCompanies from "../../../components/crmDesktop/companies/page";

const Companies: React.FC = () => {
  const [addNewCompany, setAddNewCompany] = useState<boolean>(false);
  const [showFilterCard, setShowFilterCard] = useState<boolean>(false);
  const router = useRouter();

  const isMobile = useClientMediaQuery("(max-width: 769px)");

  function navigation() {
    router.push("/crm/companies/newCompanyForm");
  }
  if (isMobile) {
    return (
      // addNewCompany ? (
      //     <AddNewCompany />
      // ) : (
      <LayoutView
        Childrens={
          <div className="relative h-full px-[20px] w-full  ">
            <div className=" overflow-y-scroll h-[93%]">
              <div className="w-full  mt-4 flex">
                <TabNavigation />
              </div>
              <div className="mt-4">
                <SearchBox Component={"Company"} />
              </div>

              <div className="section relative flex w-full justify-between mt-[16px]">
                <button
                  onClick={() => setShowFilterCard(true)}
                  className="ml-[4px]">
                  <Image src={FilterIcon} alt="filter" />
                </button>
                {showFilterCard && (
                  <FilterCompanies setShowFilterCard={setShowFilterCard} />
                )}

                <div className="w-full flex justify-end text-[10px] font-bold font-arial text-cultured">
                  <button className="px-[6px] py-[7px] bg-palatinatePurple flex items-center text-white mr-[5px] rounded-lg">
                    <Image src={ExportIcon} alt="export" className="mr-[5px]" />
                    Export
                  </button>
                  <button
                    onClick={() => navigation()}
                    className="px-[6px] py-[7px] bg-palatinatePurple text-white rounded-lg">
                    + New Company
                  </button>
                </div>
              </div>

              <div>
                <CompaniesCard
                  comLogo={Company1}
                  comName={"Handyman Repair Service"}
                  comDesc={"Legal Services"}
                  compContacts={17}
                  compDeals={7}
                />

                <CompaniesCard
                  comLogo={Company1}
                  comName={"Hanover Attorney At Law"}
                  comDesc={"Legal Services"}
                  compContacts={17}
                  compDeals={7}
                />

                <CompaniesCard
                  comLogo={Company1}
                  comName={"Hanover Attorney At Law"}
                  comDesc={"Legal Services"}
                  compContacts={17}
                  compDeals={7}
                />

                <CompaniesCard
                  comLogo={Company1}
                  comName={"Hanover Attorney At Law"}
                  comDesc={"Legal Services"}
                  compContacts={17}
                  compDeals={7}
                />

                <CompaniesCard
                  comLogo={Company1}
                  comName={"Hanover Attorney At Law"}
                  comDesc={"Legal Services"}
                  compContacts={17}
                  compDeals={7}
                />
              </div>
            </div>
          </div>
        }
      />
      // )
    );
  } 
  else return <DesktopCompanies />;
};

export default Companies;
