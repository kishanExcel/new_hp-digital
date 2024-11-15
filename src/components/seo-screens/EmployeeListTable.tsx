import React from "react";
const TextHeadStyle: React.CSSProperties = {
  fontFamily: " Arial",
  fontStyle: "normal",
  fontWeight: "400",
  fontSize: "11px",
  lineHeight: "normal",
  color: "#FFF",
};

const EmployeeListTable = () => {
  return (
    <div className="flex justify-center items-center w-[450px]">
      <div>
        <table className="table-auto border w-[450px] ">
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
            <tr className="odd:bg-[#F4F4F4]"   style={{...TextHeadStyle, color: "#6D6D6D"}}>
              <td className="p-3 border border-[#E0E0E0]">Stanley</td>
              <td className="p-3 border border-[#E0E0E0]">3</td>
              <td className="p-3 border border-[#E0E0E0]">3</td>
              <td className="p-3 border border-[#E0E0E0]">56</td>
              <td className="p-3 border border-[#E0E0E0]">1</td>
            </tr>
            <tr className="odd:bg-[#F4F4F4]"  style={{...TextHeadStyle, color: "#6D6D6D"}}>
              <td className="p-3 border border-[#E0E0E0]">Stanley</td>
              <td className="p-3 border border-[#E0E0E0]">3</td>
              <td className="p-3 border border-[#E0E0E0]">3</td>
              <td className="p-3 border border-[#E0E0E0]">56</td>
              <td className="p-3 border border-[#E0E0E0]">1</td>
            </tr>
            <tr className="odd:bg-[#F4F4F4]"  style={{...TextHeadStyle, color: "#6D6D6D"}}>
              <td className="p-3 border border-[#E0E0E0]">Stanley</td>
              <td className="p-3 border border-[#E0E0E0]">3</td>
              <td className="p-3 border border-[#E0E0E0]">3</td>
              <td className="p-3 border border-[#E0E0E0]">56</td>
              <td className="p-3 border border-[#E0E0E0]">1</td>
            </tr>
            <tr className="odd:bg-[#F4F4F4]"  style={{...TextHeadStyle, color: "#6D6D6D"}}>
              <td className="p-3 border border-[#E0E0E0]">Stanley</td>
              <td className="p-3 border border-[#E0E0E0]">3</td>
              <td className="p-3 border border-[#E0E0E0]">3</td>
              <td className="p-3 border border-[#E0E0E0]">56</td>
              <td className="p-3 border border-[#E0E0E0]">1</td>
            </tr>
            <tr className="odd:bg-[#F4F4F4]"  style={{...TextHeadStyle, color: "#631363"}}>
              <td className="p-3 border border-[#E0E0E0]">Stanley</td>
              <td className="p-3 border border-[#E0E0E0]">3</td>
              <td className="p-3 border border-[#E0E0E0]">3</td>
              <td className="p-3 border border-[#E0E0E0]">56</td>
              <td className="p-3 border border-[#E0E0E0]">1</td>
            </tr>
            <tr className="odd:bg-[#F4F4F4]"  style={{...TextHeadStyle, color: "#6D6D6D"}}>
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

export default EmployeeListTable;
