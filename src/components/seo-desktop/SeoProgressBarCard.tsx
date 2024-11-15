import React from "react";

/**
 * Interface for ProgressBarCard component props.
 * 
 * @property {string} title1 - The primary title text to be displayed on the card.
 * @property {string} title2 - The secondary title text to be displayed on the card.
 * @property {number} value - The percentage value for the progress bar (0 to 100).
 * @property {string} color - The color of the progress bar.
 */
interface ProgressBarCardProps {
  title1: string;
  title2: string;
  value: number; // Expecting a percentage (0 to 100)
  color: string;
}

/**
 * CSS properties for typography used in the card.
 */
const Typography: React.CSSProperties = {
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

/**
 * A card component that displays a progress bar along with two titles.
 * The width of the progress bar is based on the percentage value.
 * 
 * @param {ProgressBarCardProps} props - The props for the component.
 * @returns {JSX.Element} The rendered SeoProgressBarCard component.
 */
const SeoProgressBarCard: React.FC<ProgressBarCardProps> = ({
  title1,
  title2,
  value,
  color,
}: ProgressBarCardProps): JSX.Element => {
  // Calculate the width of the inner progress bar based on the percentage value
  const progressBarWidth = (value / 100) * 600; // 600 is the width of the outer bar in pixels

  return (
    <div className="flex justify-start items-start w-[600px]">
      <div className="flex flex-col gap-2 w-[600px] h-full">
        <div className="flex justify-between items-center px-3">
          <span style={{ ...Typography, color: "#6D6D6D" }}>{title1}</span>
          <span style={{ ...Typography, color: "#6D6D6D", fontSize: "15px" }}>{title2}</span>
        </div>
        <div className="w-[600px] h-[20px] bg-[#F4F4F4] rounded-full">
          <div
            className="h-[20px] rounded-full"
            style={{ width: `${progressBarWidth}px`, backgroundColor: color }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SeoProgressBarCard;
