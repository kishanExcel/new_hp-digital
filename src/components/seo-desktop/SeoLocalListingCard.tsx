import React from "react";

/**
 * Interface for SeoLocalListingCard component props.
 * 
 * @property {string} title - The main title text to be displayed on the card.
 * @property {string} subTitle - The subtitle text to be displayed on the card.
 * @property {string} titleColor - The background color for the main title section.
 * @property {string} subTitleColor - The background color for the subtitle section.
 */
interface IProps {
  title: string;
  subTitle: string;
  titleColor: string;
  subTitleColor: string;
}

/**
 * CSS properties for typography used in the card.
 */
const Typography: React.CSSProperties = {
  color: "#F4F4F4",
  fontFamily: "Arial",
  fontSize: "18px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

/**
 * CSS properties for the card title background gradient.
 */
const CardTitle: React.CSSProperties = {
  background:
    "linear-gradient(180deg, #00914C -5.21%, #00A550 48.68%, #64C08A 102.57%)",
};

/**
 * CSS properties for the card subtitle background gradient.
 */
const cardSubTitle: React.CSSProperties = {
  background:
    "linear-gradient(180deg, #00914C -5.13%, #00A550 48.77%, #64C08A 102.66%)",
};

/**
 * A card component that displays a local listing with a title and a subtitle.
 * The background colors for the title and subtitle sections are customizable.
 * 
 * @param {IProps} props - The props for the component.
 * @returns {JSX.Element} The rendered SeoLocalListingCard component.
 */
const SeoLocalListingCard: React.FC<IProps> = ({ title, subTitle, titleColor, subTitleColor }: IProps): JSX.Element => {
  return (
    <div className="flex relative justify-center items-center">
      <div
        className="flex flex-col w-[200px] h-[160px] rounded-3xl text-center"
        style={{ background: titleColor }}
      >
        <span
          className="flex text-center justify-center items-center mt-8"
          style={{ ...Typography, fontSize: "40px" }}
        >
          {title}
        </span>
        <div
          className="flex flex-col absolute bottom-0 w-[200px] h-[60px] rounded-full text-center justify-center items-center"
          style={{ background: subTitleColor }}
        >
          <span
            className="flex text-center justify-center items-center"
            style={{ ...Typography, fontSize: "20px" }}
          >
            {subTitle}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SeoLocalListingCard;
