import React from "react";

const typography: React.CSSProperties = {
  color: "#FFF",
  fontFamily: "Arial",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
};

type CitationRowProps = {
  site: string;
  type: string;
  authority: string;
  value: string;
  fontSize?: string;
  fontWeight?: number;
  width?: string;
  notes: React.ReactNode;
  bgColor?: string; // Optional background color for the row
};

/**
 * CitationRow component
 *
 * Renders a row displaying citation details with customizable background color. The row includes columns for site, type,
 * authority, value, and notes.
 *
 * @param {CitationRowProps} props - The properties for the CitationRow component.
 * @returns {JSX.Element} The rendered component.
 */
export const CitationRow: React.FC<CitationRowProps> = ({
  site,

  type,
  authority,
  fontWeight = 400,
  bgColor = "#F2F2F2",
  value,
  notes,
}) => {
  return (
    <div
      className={`flex w-full justify-center items-center text-xs md:text-lg h-[45px] bg-[${bgColor}]`}>
      <div className="flex p-2 w-full gap-2 justify-between items-center">
        <div className="flex gap-1 flex-1 h-[40px] justify-center items-center">
          <span
            className="text-xs md:text-lg"
            style={{
              ...typography,
              color: "#6D6D6D",
              fontWeight: fontWeight,
            }}>
            {site}
          </span>
        </div>
        <div className="flex flex-1 gap-1 h-[40px] justify-center text-center items-center">
          <span
            style={{
              ...typography,
              color: "#6D6D6D",
              fontWeight: fontWeight,
            }}>
            {type}
          </span>
        </div>
        <div className="flex flex-1 gap-1 h-[40px] justify-center items-center">
          <span
            style={{
              ...typography,
              color: "#6D6D6D",
              fontWeight: fontWeight,
            }}>
            {authority}
          </span>
        </div>
        <div className="flex flex-1 h-[40px] justify-center items-center">
          <span
            style={{
              ...typography,
              color: "#6D6D6D",
              fontWeight: fontWeight,
            }}>
            {value}
          </span>
        </div>
        <div className="flex flex-1 gap-2 h-[40px] justify-center items-center">
          {notes}
        </div>
      </div>
    </div>
  );
};
