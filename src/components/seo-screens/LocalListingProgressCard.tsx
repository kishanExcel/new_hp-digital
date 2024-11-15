import React from "react";

interface ProgressBarCardProps {
  title1: string;
  border?: string;
  value: number; // Expecting a value (not necessarily a percentage)
  color: string;
  width?: string;
  isActive?: boolean;
  color2?: string;
  isMobile?: boolean;
}

const Typography: React.CSSProperties = {
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

const LocalListingProgressCard = ({
  title1 = "200",
  isMobile = false,
  border = "rounded-r-full",
  value,
  color,
  color2 = "#40F440",
  isActive = false,
}: ProgressBarCardProps) => {
  // Calculate the widths of the inner progress bars based on the value and title1
  const totalValue = parseInt(title1);
  const progressWidth = (value / totalValue) * 100;
  const remainingWidth = 100 - progressWidth;
  const progressBarWidth = (value / 100) * 300;
  // Calculate the width percentage
  const progressBar = Math.min((totalValue / 200) * 100, 100); // Cap at 100%
  return (
    <div className="flex justify-start  w-full items-start">
      <div className="flex flex-col gap-2 h-full w-full">
        <div className="flex justify-between w-full items-center px-3"></div>
        <div className="gap-1 flex  h-[20px] rounded-full w-full">
          {isActive ? (
            <div className={`flex h-[20px] w-full ${border}`}>
              <div
                className="rounded-l-full h-[20px] text-white text-center flex justify-center items-center"
                style={{ width: `${progressWidth}%`, background: color }}>
                {value}
              </div>
              <div
                className="rounded-r-full h-[20px] text-[#3D3D3D] text-center flex justify-center items-center"
                style={{ width: `${remainingWidth}%`, background: color2 }}>
                {totalValue - value}
              </div>
            </div>
          ) : (
            // <div className="gap-1 flex h-[20px] w-[60%] lg:w-full rounded-full">
            //   <div
            //     className={`h-[20px]  ${border}`}
            //     style={{
            //       width: `${progressBarWidth}px`,
            //       background: color,
            //     }}></div>
            // </div>
            <div className="gap-1 flex h-[20px] w-full rounded-full">
              <div
                className={`h-[20px] w-full ${border}`}
                style={{
                  width: `${progressBar}%`,
                  background: color,
                }}></div>
            </div>
          )}
          <span
            className="min-w-[25px]"
            style={{ ...Typography, color: "#6D6D6D" }}>
            {title1}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LocalListingProgressCard;
