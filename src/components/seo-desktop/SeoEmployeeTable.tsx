import React from "react";
const TextHeadStyle: React.CSSProperties = {
  fontFamily: " Arial",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "15px",
  lineHeight: "normal",
  color: "#FFF",
};

const SeoEmployeeListTable = () => {
  return (
    <div className="flex justify-center items-center    w-full">
      <div className="flex flex-col justify-center items-center mx-6 w-full">
      <table className="table-auto w-full  border-collapse bg-[#FFF]">
          <thead>
            <tr>
              <th
                className="p-3 bg-[#631363] border border-[#E0E0E0]"
                style={TextHeadStyle}
              >
                Employee
              </th>
              <th
                className="p-3 bg-[#631363] border border-[#E0E0E0]"
                style={TextHeadStyle}
              >
               Check-Ins
              </th>
              <th
                className="p-3 bg-[#631363] border border-[#E0E0E0]"
                style={TextHeadStyle}
              >
               Review Requests
              </th>
              <th
                className="p-3  bg-[#631363] border border-[#E0E0E0]"
                style={TextHeadStyle}
              >
              Completed Reviews
              </th>
              <th
                className="p-3 bg-[#631363] border border-[#E0E0E0]"
                style={TextHeadStyle}
              >
                Average
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="odd:bg-[#E0E0E0] text-center"   style={{...TextHeadStyle, color: "#6D6D6D"}}>
              <td className="p-3 border border-[#E0E0E0]">Stanley</td>
              <td className="p-3 border border-[#E0E0E0]">3</td>
              <td className="p-3 border border-[#E0E0E0]">3</td>
              <td className="p-3 border border-[#E0E0E0]">56</td>
              <td className="p-3 border border-[#E0E0E0]">1</td>
            </tr>
            <tr className="odd:bg-[#E0E0E0] text-center"  style={{...TextHeadStyle, color: "#6D6D6D"}}>
              <td className="p-3 border border-[#E0E0E0]">Stanley</td>
              <td className="p-3 border border-[#E0E0E0]">3</td>
              <td className="p-3 border border-[#E0E0E0]">3</td>
              <td className="p-3 border border-[#E0E0E0]">56</td>
              <td className="p-3 border border-[#E0E0E0]">1</td>
            </tr>
            <tr className="odd:bg-[#E0E0E0] text-center"  style={{...TextHeadStyle, color: "#6D6D6D"}}>
              <td className="p-3 border border-[#E0E0E0]">Stanley</td>
              <td className="p-3 border border-[#E0E0E0]">3</td>
              <td className="p-3 border border-[#E0E0E0]">3</td>
              <td className="p-3 border border-[#E0E0E0]">56</td>
              <td className="p-3 border border-[#E0E0E0]">1</td>
            </tr>
            <tr className="odd:bg-[#E0E0E0] text-center"  style={{...TextHeadStyle, color: "#6D6D6D"}}>
              <td className="p-3 border border-[#E0E0E0]">Stanley</td>
              <td className="p-3 border border-[#E0E0E0]">3</td>
              <td className="p-3 border border-[#E0E0E0]">3</td>
              <td className="p-3 border border-[#E0E0E0]">56</td>
              <td className="p-3 border border-[#E0E0E0]">1</td>
            </tr>
            <tr className="odd:bg-[#E0E0E0] text-center"  style={{...TextHeadStyle, color: "#631363"}}>
              <td className="p-3 border border-[#E0E0E0]">Stanley</td>
              <td className="p-3 border border-[#E0E0E0]">3</td>
              <td className="p-3 border border-[#E0E0E0]">3</td>
              <td className="p-3 border border-[#E0E0E0]">56</td>
              <td className="p-3 border border-[#E0E0E0]">1</td>
            </tr>
            <tr className="odd:bg-[#E0E0E0] text-center"  style={{...TextHeadStyle, color: "#6D6D6D"}}>
              <td className="p-3 border border-[#E0E0E0]">Stanley</td>
              <td className="p-3 border border-[#E0E0E0]">3</td>
              <td className="p-3 border border-[#E0E0E0]">3</td>
              <td className="p-3 border border-[#E0E0E0]">56</td>
              <td className="p-3 border border-[#E0E0E0]">1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SeoEmployeeListTable;
