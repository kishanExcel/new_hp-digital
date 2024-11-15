import React from 'react';
import { RedProgressSvg, YellowProgressSvg } from "@/svgs/seo-screens/svgs"; // Assuming this imports your SVG

interface TimelinePointProps {
    date: string;
    isActive: boolean;
}
const Typography: React.CSSProperties = {
    fontFamily: "Arial",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  };

const TimelinePoint = ({ date, isActive }: TimelinePointProps) => {
  return (
    <div className="flex flex-col items-center">
      <div className={`w-6 h-6 rounded-full  flex items-center justify-center`}>
        {isActive ? <YellowProgressSvg /> : <RedProgressSvg  />}
      </div>
      <div className="text-center mt-1">
        <div className="text-[8px]" style={{...Typography,fontSize:"10px"}}>{date}</div>
      </div>
    </div>
  );
};

const SeoLineProgressBar = () => {
  const timelinePoints = [
    { date: '10th Nov 2023', isActive: false },
    { date: '10th Dec 2023', isActive: false },
    { date: '10th Jan 2024', isActive: false },
    { date: '10th Feb 2024', isActive: false },
    { date: '10th Mar 2024', isActive: false },
    { date: '10th Apr 2024', isActive: true },
  ];

  return (
    <div className="relative flex items-center justify-between w-full">
      <div className="absolute bottom-[25px] w-full transform -translate-y-1/2 border-t-2 border-[#6D6D6D] border-solid border-10"></div>
      {timelinePoints.map((point, index) => (
        <div key={index} className="relative flex flex-col items-center">
          <TimelinePoint date={point.date} isActive={point.isActive} />
          {index < timelinePoints.length - 1 && (
            <div className="absolute border-l-1 border-gray-400 top-1/2 h-6 transform translate-y-3 -ml-3"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SeoLineProgressBar;
