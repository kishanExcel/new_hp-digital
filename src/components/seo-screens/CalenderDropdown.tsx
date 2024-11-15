import { DropDownSvg } from "@/svgs/reviews/svgs";
import { CalanderSvg } from "@/svgs/seo-screens/svgs";
import React, { ChangeEvent } from "react";

interface Option {
  value: string;
  label: string;
}

interface Props {
  options: Option[];
  value: string;
  bgColor?: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
  calender?: boolean;
}

export const Typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontSize: "10.559px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
};
const CalenderDropdown: React.FC<Props> = ({
  options,
  bgColor = "#FFFFFF",
  calender = false,
  value,
  onChange,
}) => {
  return (
    <div className="flex border h-7 rounded-lg border-none relative">
      <select
        className={`w-full focus:outline-none cursor-pointer bg-[${bgColor}] h-full rounded-lg  px-6 md:px-8 md:w-10 appearance-none`}
        value={value}
        onChange={onChange}
        style={Typography}>
        {options.map((option, index) => (
          <option
            key={index}
            className="text-center  bg-[#8C8C8C] bg-opacity-20 p-3 py-4 px-4"
            value={option.value}
            style={Typography}>
            {option.label}
          </option>
        ))}
      </select>
      {calender && (
        <div className="absolute inset-y-0 -left-2 flex justify-center items-center py-2 px-4">
          <CalanderSvg />
        </div>
      )}
      <div className="absolute inset-y-0 -right-2 flex justify-center items-center py-2 px-4">
        <DropDownSvg />
      </div>
    </div>
  );
};

export default CalenderDropdown;
