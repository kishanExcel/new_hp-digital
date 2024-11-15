import Image from "next/image";
import CloseIcon from "../../../assets/images/close-icon.svg";
import FilterIcon from "../../../assets/images/filter-icon.svg";
import BuildingIcon from "../../../assets/images/building.svg";
import VanIcon from "../../../assets/images/van-icon.svg";

interface FilterMenuProps {
  text: string;
}

const FilterMenu: React.FC<FilterMenuProps> = ({ text }) => {
  return (
    <h5 className="text-darkSilverColor text-[10px] font-bold my-[12px] cursor-pointer hover:text-palatinatePurple">
      {text}
    </h5>
  );
};

interface FilterCompaniesProps {
  setShowFilterCard: React.Dispatch<React.SetStateAction<boolean>>;
}

const FilterCompanies: React.FC<FilterCompaniesProps> = ({
  setShowFilterCard,
}) => {
  return (
    <div className="absolute top-0 left-0 w-[220px] bg-[#F4F4F4] rounded-r-xl pb-2 border-palatinatePurple border-2">
      <div className="flex justify-between pl-[14px] pr-[22px] mt-[16px] w-full ">
        <div className="flex">
          <Image src={FilterIcon} alt="filter" className="h-3  w-4" />
          <h5 className="ml-[7px] text-xs text-darkSilverColor font-bold">
            Filters
          </h5>
        </div>
        <div>
          <Image
            src={CloseIcon}
            onClick={() => setShowFilterCard(false)}
            alt="close"
            className="h-3 w-3"
          />
        </div>
      </div>

      <div className="h-[36.8px] w-full bg-palatinatePurple mt-[22px] mr-[10px] flex items-center">
        <Image
          src={BuildingIcon}
          alt="close"
          className="h-[22px] w-[22px] ml-[14px]"
        />
        <h5 className="text-xs font-bold ml-[7px] text-cultured">Size</h5>
      </div>

      <div className="ml-[44px] overflow-y-auto h-40">
        <FilterMenu text="1 Employee" />
        <FilterMenu text="2-9 Employees" />
        <FilterMenu text="10-49 Employees" />
        <FilterMenu text="50-249 Employees" />
        <FilterMenu text="250 or more Employees" />
      </div>

      <div className="h-[36.8px] w-full bg-palatinatePurple mt-[22px] mr-[10px] flex items-center">
        <Image
          src={VanIcon}
          alt="close"
          className="h-[22px] w-[22px] ml-[14px]"
        />
        <h5 className="text-xs font-bold ml-[7px] text-cultured">Sector</h5>
      </div>

      <div className="ml-[44px] overflow-y-auto h-60">
        <FilterMenu text="Communication Services" />
        <FilterMenu text="Consumer Discretionary" />
        <FilterMenu text="Consumer Staples" />
        <FilterMenu text="Energy" />
        <FilterMenu text="Financials" />
        <FilterMenu text="Consumer Discretionary" />
        <FilterMenu text="Consumer Staples" />
        <FilterMenu text="Energy" />
        <FilterMenu text="Financials" />
        <FilterMenu text="Communication Services" />
        <FilterMenu text="Consumer Discretionary" />
        <FilterMenu text="Consumer Staples" />
        <FilterMenu text="Energy" />
        <FilterMenu text="Financials" />
        <FilterMenu text="Consumer Discretionary" />
        <FilterMenu text="Consumer Staples" />
        <FilterMenu text="Energy" />
        <FilterMenu text="Financials" />
        <FilterMenu text="Communication Services" />
        <FilterMenu text="Consumer Discretionary" />
        <FilterMenu text="Consumer Staples" />
        <FilterMenu text="Energy" />
        <FilterMenu text="Financials" />
        <FilterMenu text="Consumer Discretionary" />
        <FilterMenu text="Consumer Staples" />
        <FilterMenu text="Energy" />
        <FilterMenu text="Financials" />
      </div>
    </div>
  );
};

export default FilterCompanies;
