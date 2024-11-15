import { UploadSvg } from "@/svgs/seo-screens/svgs";
import React from "react";
interface TitleRatingBarProps {
  title?: string;
  icon1?: React.ReactElement;
  icon2?: React.ReactElement;
  text1?: string;
  text2?: string;
}
const titleStyle: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontSize: "13px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

const TitleRatingBar = ({
  title,
  icon1,
  icon2,
  text1,
  text2,
}: TitleRatingBarProps) => {
  return (
    <div className="flex justify-center items-center w-[370px] py-2 px-3 rounded-lg bg-[#F4F4F4]">
      <div className="flex  justify-between items-center w-full h-[40px] bg-[#F4F4F4]">
        <div className="flex gap-2">
          {icon1}
          <span style={titleStyle}>{title}.</span>
        </div>
        <div className="flex  ">
          <span
            className={`flex justify-center items-center bg-[#631363]  w-[60px] ${text2 ? "rounded-l-lg" : "rounded-lg"} p-3 py-2`}
            style={{ ...titleStyle, color: "#F4F4F4" }}
          >
            {text1}
          </span>
          {text2 && (
              <>  <div className="flex justify-center items-center bg-[#E0E0E0] gap-1 p-3 rounded-r-lg mx-1 py-2">
          
                {" "}
                <span
                  className="flex justify-center items-center w-[20px] "
                  style={{ ...titleStyle, color: "#631363" }}
                >
                  {text2}
                </span>
                {icon2}
            
          </div>
          </>
            )}
        </div>
      </div>
    </div>
  );
};

export default TitleRatingBar;
