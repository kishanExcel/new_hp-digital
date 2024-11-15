import { SeoFlagSvg } from "@/svgs/seo-desktop/svgs";
import { FiveStarsSvg, FlagSvg } from "@/svgs/seo-screens/svgs";
import React from "react";

const TextHeadStyle = {
  fontFamily: "Arial",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "11px",
  lineHeight: "normal",
  color: "#FFF",
};

const PerformanceTable = ({
  width = "380px",
  isCenter = false,
  isMobile = false,
}: {
  width?: string;
  isCenter?: boolean;
  isMobile?: boolean;
}) => {
  const paddingClass = isMobile ? "p-2" : "p-3";
  const fontSize = isCenter ? "16px" : "11px";
  const textAlign = isCenter ? "center" : "left";
  const flexDirection = isCenter ? "row" : "column";
  const justifyContent = isCenter ? "center" : "start";

  return (
    <div className={`flex justify-center items-center  ${isMobile ? "ml-1" : ""}  w-[${width}]`}>
      <div className={`flex flex-col justify-center items-center w-[${width}]`}>
        <table className={`table-auto w-[${width}] border-collapse`}>
          <thead>
            <tr>
              <th
                className={`${paddingClass} bg-[#631363] border border-white`}
                style={{ ...TextHeadStyle, fontSize }}
              >
                Business Name
              </th>
              <th
                className={`${paddingClass} bg-[#631363] border border-white`}
                style={{ ...TextHeadStyle, fontSize }}
              >
                Avg. Rank
              </th>
              <th
                className={`${paddingClass} bg-[#631363] border border-white`}
                style={{ ...TextHeadStyle, fontSize }}
              >
                Reviews
              </th>
              <th
                className={`${paddingClass} bg-[#631363] border border-white`}
                style={{ ...TextHeadStyle, fontSize }}
              >
                Rating
              </th>
              <th
                className={`${paddingClass} bg-[#631363] border border-white`}
                style={{ ...TextHeadStyle, fontSize }}
              >
                Primary Category
              </th>
              <th
                className={`${paddingClass} bg-[#631363] border border-white`}
                style={{ ...TextHeadStyle, fontSize }}
              >
                Additional Categories
              </th>
            </tr>
          </thead>
          <tbody>
           
                <tr
                className="border border-b-white"
                 
                  style={{
                    ...TextHeadStyle,
                    color: "#6D6D6D",
                    fontSize,
                    textAlign,
                  }}
                >
                  <td
                    className={`${paddingClass} `}
                    style={{
                      ...TextHeadStyle,
                      color: "#6D6D6D",
                      fontSize,
                      textAlign,
                      display: "flex",
                      flexDirection,
                      gap: "15px",
                      justifyContent,
                      alignItems: "center",
                    }}
                  >
                    <span>Handym...</span>
                    <span>{isCenter ? <SeoFlagSvg /> : <FlagSvg />}</span>
                  </td>
                  <td className={`${paddingClass} text-center border border-white`}>13.8</td>
                  <td className={`${paddingClass}  border border-white`}>36</td>
                  <td
                    className={`${paddingClass} `}
                    style={{
                      ...TextHeadStyle,
                      color: "#6D6D6D",
                      fontSize,
                      textAlign,
                      display: "flex",
                      flexDirection: "column",
                      gap: "15px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span className="ml-10 pr-5 -pt-4 text-center">
                      <FiveStarsSvg />
                    </span>
                    <span className="ml-5 -pt-4 text-center">5</span>
                  </td>
                  <td className={`${paddingClass} border border-white`}>Roofing Contractor</td>
                  <td className={`${paddingClass} border-b border-white`}>
                    Contractor Siding contractor Construction company
                  </td>
                </tr>
                <tr
                className="border border-b-white"
                 
                  style={{
                    ...TextHeadStyle,
                    color: "#6D6D6D",
                    fontSize,
                    textAlign,
                  }}
                >
                  <td
                    className={`${paddingClass} `}
                    style={{
                      ...TextHeadStyle,
                      color: "#6D6D6D",
                      fontSize,
                      textAlign,
                      display: "flex",
                      flexDirection,
                      gap: "15px",
                      justifyContent,
                      alignItems: "center",
                    }}
                  >
                    <span>Handym...</span>
                    <span>{isCenter ? <SeoFlagSvg /> : <FlagSvg />}</span>
                  </td>
                  <td className={`${paddingClass} text-center border border-white`}>13.8</td>
                  <td className={`${paddingClass}  border border-white`}>36</td>
                  <td
                    className={`${paddingClass} `}
                    style={{
                      ...TextHeadStyle,
                      color: "#6D6D6D",
                      fontSize,
                      textAlign,
                      display: "flex",
                      flexDirection: "column",
                      gap: "15px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span className="ml-10 pr-5 -pt-4 text-center">
                      <FiveStarsSvg />
                    </span>
                    <span className="ml-5 -pt-4 text-center">5</span>
                  </td>
                  <td className={`${paddingClass} border border-white`}>Roofing Contractor</td>
                  <td className={`${paddingClass} border-b border-white`}>
                    Contractor Siding contractor Construction company
                  </td>
                </tr>
                <tr
                className="border border-t-white"
                 
                  style={{
                    ...TextHeadStyle,
                    color: "#6D6D6D",
                    fontSize,
                    textAlign,
                  }}
                >
                  <td
                    className={`${paddingClass} `}
                    style={{
                      ...TextHeadStyle,
                      color: "#6D6D6D",
                      fontSize,
                      textAlign,
                      display: "flex",
                      flexDirection,
                      gap: "15px",
                      justifyContent,
                      alignItems: "center",
                    }}
                  >
                    <span>Handym...</span>
                    <span>{isCenter ? <SeoFlagSvg /> : <FlagSvg />}</span>
                  </td>
                  <td className={`${paddingClass} text-center border-l border-white`}>13.8</td>
                  <td className={`${paddingClass}  border-l border-white`}>36</td>
                  <td
                    className={`${paddingClass} border-l h-20 border-white `}
                    style={{
                      ...TextHeadStyle,
                      color: "#6D6D6D",
                      fontSize,
                      textAlign,
                      display: "flex",
                      flexDirection: "column",
                      gap: "15px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span className="ml-10 pr-5 -pt-4 text-center">
                      <FiveStarsSvg />
                    </span>
                    <span className="ml-5 -pt-4 text-center">5</span>
                  </td>
                  <td className={`${paddingClass} border-l border-white`}>Roofing Contractor</td>
                  <td className={`${paddingClass} border-l border-white`}>
                    Contractor Siding contractor Construction company
                  </td>
                </tr>
              
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PerformanceTable;
