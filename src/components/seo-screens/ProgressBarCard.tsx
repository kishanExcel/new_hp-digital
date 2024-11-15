import React from "react";

interface ProgressBarCardProps {
  title1: string;
  title2: string;
  value: number; // Expecting a percentage (0 to 100)
  color: string;
  width?: string;
  isMobile?: boolean;
}
const Typography: React.CSSProperties = {
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};
const ProgressBarCard = ({
  title1,
  title2,
  isMobile = false,
  width = isMobile ? "370" : "full",
  value,
  color,
}: ProgressBarCardProps) => {
  // Calculate the width of the inner progress bar based on the percentage value
  const progressBarWidth = (value / 100) * 400; // 400 is the width of the outer bar in pixels

  return (
    <div className="flex justify-center items-center w-[400px]">
      <div className={`flex flex-col gap-2  w-[${width}px]   h-full`}>
        <div className="flex justify-between items-center px-3" >
          <span style={{ ...Typography, color: "#6D6D6D" }}>{title1}</span>
          <span style={{ ...Typography, color:  "#6D6D6D", fontSize: "12px" }}>{title2}</span>
        </div>
        <div className={`w-[${width}px] h-[20px] bg-[#F4F4F4] rounded-full`}>
          <div
            className="h-[20px] rounded-full"
            style={{ width: `${progressBarWidth}px`, backgroundColor: color }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBarCard;
