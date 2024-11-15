import { BBBSvgs, CitySvgs, FbSvgs, FourSquareSvgs, GoogleSvgs, MapSvg, YelloSvg } from "@/svgs/seo-screens/svgs";
import React from "react";

const TextHeadStyle = {
  fontFamily: "Arial",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "11px",
  lineHeight: "normal",
  color: "#631363",
};

const rowData = [
  {
    svg: <FbSvgs />,
    site: "Facebook",
    color:'linear-gradient(90deg, #64C08A 0.11%, #00A550 50.01%, #00914C 99.91%)',
    name: "Jane Doe",
    address: "123 Main Street, Apt 4B Anytown, NY 12345",
    zip: "12345-6789",
    phone: "(555) 123-4567",
  },
  {
    svg: <BBBSvgs />,
    site: "BBB.org",
    name: "Jane Doe",
    color:'linear-gradient(90deg, #FFE7A3 -0.14%, #FFCA05 49.76%, #FAAC18 99.66%)',
    address: "123 Main Street, Apt 4B Anytown, NY 12345",
    zip: "12345-6789",
    phone: "(555) 123-4567",
  },
  { svg: <FourSquareSvgs />,
    site: "Foursquare",
    name: "Jane Doe",
    color:'linear-gradient(90deg, #F37E5F -0.13%, #EC1C24 49.77%, #CF232A 99.67%)',
    address: "123 Main Street, Apt 4B Anytown, NY 12345",
    zip: "12345-6789",
    phone: "(555) 123-4567",
  },
  { svg: <GoogleSvgs />,
    color:'linear-gradient(90deg, #64C08A 0.11%, #00A550 50.01%, #00914C 99.91%)',
    site: "Google",
    name: "Jane Doe",
    address: "123 Main Street, Apt 4B Anytown, NY 12345",
    zip: "12345-6789",
    phone: "(555) 123-4567",
  },
  { svg: <YelloSvg />,
    color:'linear-gradient(90deg, #64C08A 0.11%, #00A550 50.01%, #00914C 99.91%)',
    site: "Yelp",
    name: "Jane Doe",
    address: "123 Main Street, Apt 4B Anytown, NY 12345",
    zip: "12345-6789",
    phone: "(555) 123-4567",
  },
  { svg: <CitySvgs />,
    color:'linear-gradient(90deg, #64C08A 0.11%, #00A550 50.01%, #00914C 99.91%)',
    site: "Citysearch",
    name: "Jane Doe",
    address: "123 Main Street, Apt 4B Anytown, NY 12345",
    zip: "12345-6789",
    phone: "(555) 123-4567",
  },
  { svg: <MapSvg />,
    color:'linear-gradient(90deg, #FFE7A3 -0.14%, #FFCA05 49.76%, #FAAC18 99.66%)',
    site: "MapQuest",
    name: "Jane Doe",
    address: "123 Main Street, Apt 4B Anytown, NY 12345",
    zip: "12345-6789",
    phone: "(555) 123-4567",
  },
  { svg: <YelloSvg />,
    color:'linear-gradient(90deg, #FFE7A3 -0.14%, #FFCA05 49.76%, #FAAC18 99.66%)',
    site: "Merchant Circle",
    name: "Jane Doe",
    address: "123 Main Street, Apt 4B Anytown, NY 12345",
    zip: "12345-6789",
    phone: "(555) 123-4567",
  },
];

const ListTable = () => {
  return (
    <div className="flex justify-center items-center w-[450px]">
      <div>
        <table className="table-auto w-[450px]">
          <thead>
            <tr>
              <th className="p-3" style={TextHeadStyle}>
                Site/Directory
              </th>
              <th className="p-3" style={TextHeadStyle}>
                Name
              </th>
              <th className="p-3" style={TextHeadStyle}>
                Address
              </th>
              <th className="p-3" style={TextHeadStyle}>
                Zip/Postcode
              </th>
              <th className="p-3" style={TextHeadStyle}>
                Phone
              </th>
            </tr>
          </thead>
          <tbody>
            {rowData.map((row, index) => (
              <tr
                key={index}
                style={{
                  ...TextHeadStyle,
                  fontSize: "9px",
                  fontWeight: "400",
                  color: "#6D6D6D",
                }}
              >
                <td className="flex p-3 justify-start items-center">
                  <span
                    className="w-2 h-2 rounded-full justify-start items-start inline-block mr-2"
                    style={{
                      background:
                      row.color || "linear-gradient(90deg, #64C08A 0.11%, #00A550 50.01%, #00914C 99.91%)",
                    }}
                  ></span>
                  
                 {row.svg} <span className="ml-2">{row.site}</span>
                </td>
                <td className="p-1">{row.name}</td>
                <td className="p-1 w-4">{row.address}</td>
                <td className="flex p-1 ml-4 ">{row.zip}</td>
                <td className="p-1">{row.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex   relative ml-  z-20 mt-5 justify-center items-center w-[450px]    bg-[#40F440] h-[55px] rounded-t-3xl"></div>
      </div>
    </div>
  );
};

export default ListTable;
