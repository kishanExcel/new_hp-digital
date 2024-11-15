import React from "react";
interface IProps {
    title: string;
    subTitle: string;
    titleColor: string;
    subTitleColor: string;
}
const Typography: React.CSSProperties = {
  color: "#F4F4F4",
  fontFamily: "Arial",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};
const CardTitle: React.CSSProperties = {
  background:
    "linear-gradient(180deg, #00914C -5.21%, #00A550 48.68%, #64C08A 102.57%)",
};
const cardSubTitle: React.CSSProperties = {
  background:
    "linear-gradient(180deg, #00914C -5.13%, #00A550 48.77%, #64C08A 102.66%);",
};

const LocalListingCard = ({ title, subTitle, titleColor, subTitleColor }: IProps) => {
  return (
    <div className="flex relative justify-center items-center">
      <div
        className="flex flex-col  w-[130px] h-[80px] rounded-lg text-center "
        style={{background: titleColor}}
      >
        <span
          className="flex text-center justify-center items-center mt-2 "
          style={{ ...Typography, fontSize: "20px" }}
        >
          {title}
        </span>
        <div
          className="flex flex-col absolute bottom-0 w-[130px] h-[40px] rounded-full text-center justify-center items-center"
          style={{background: subTitleColor}}
        >
          <span
            className="flex text-center justify-center items-center"
            style={{ ...Typography, fontSize: "14px" }}
          >
           {subTitle}
          </span>
        </div>
      </div>
    </div>
  );
};

export default LocalListingCard;
