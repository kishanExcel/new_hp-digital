import { SeoBBB, SeoCity, SeoFb, SeoGoogle, SeoMap, SeoSquare, SeoYellow, SeoYelp } from "@/svgs/seo-desktop/svgs";
import React from "react";

const TextHeadStyle = {
  fontFamily: "Arial",
  fontStyle: "normal",
  fontWeight: "700",
  fontSize: "20px",
  lineHeight: "normal",
  color: "#631363",
};

const rowData = [
  {
    svg: <SeoFb />,
    color:'linear-gradient(90deg, #64C08A 0.11%, #00A550 50.01%, #00914C 99.91%)',
    site: "Facebook",
    name: "Jane Doe",
    address: "123 Main Street, Apt 4B Anytown, NY 12345",
    zip: "12345-6789",
    phone: "(555) 123-4567",
  },
  {
    svg: <SeoBBB />,
    color:'linear-gradient(90deg, #FFE7A3 -0.14%, #FFCA05 49.76%, #FAAC18 99.66%)',
    site: "BBB.org",
    name: "Jane Doe",
    address: "123 Main Street, Apt 4B Anytown, NY 12345",
    zip: "12345-6789",
    phone: "(555) 123-4567",
  },
  { svg: <SeoSquare />,
    color:'linear-gradient(90deg, #F37E5F -0.13%, #EC1C24 49.77%, #CF232A 99.67%)',
    site: "Foursquare",
    name: "Jane Doe",
    address: "123 Main Street, Apt 4B Anytown, NY 12345",
    zip: "12345-6789",
    phone: "(555) 123-4567",
  },
  { svg: <SeoGoogle />,
    color:'linear-gradient(90deg, #64C08A 0.11%, #00A550 50.01%, #00914C 99.91%)',
    site: "Google",
    name: "Jane Doe",
    address: "123 Main Street, Apt 4B Anytown, NY 12345",
    zip: "12345-6789",
    phone: "(555) 123-4567",
  },
  { svg: <SeoYellow />,
    color:'linear-gradient(90deg, #64C08A 0.11%, #00A550 50.01%, #00914C 99.91%)',
    site: "Yelp",
    name: "Jane Doe",
    address: "123 Main Street, Apt 4B Anytown, NY 12345",
    zip: "12345-6789",
    phone: "(555) 123-4567",
  },
  { svg: <SeoCity />,
    site: "Citysearch",
    color:'linear-gradient(90deg, #FFE7A3 -0.14%, #FFCA05 49.76%, #FAAC18 99.66%)',
    name: "Jane Doe",
    address: "123 Main Street, Apt 4B Anytown, NY 12345",
    zip: "12345-6789",
    phone: "(555) 123-4567",
  },
  { svg: <SeoMap />,
    site: "MapQuest",
    color:'linear-gradient(90deg, #FFE7A3 -0.14%, #FFCA05 49.76%, #FAAC18 99.66%)',
    name: "Jane Doe",
    address: "123 Main Street, Apt 4B Anytown, NY 12345",
    zip: "12345-6789",
    phone: "(555) 123-4567",
  },
  { svg: <SeoYelp />,
    color:'linear-gradient(90deg, #FFE7A3 -0.14%, #FFCA05 49.76%, #FAAC18 99.66%)',
    site: "Merchant Circle",
    name: "Jane Doe",
    address: "123 Main Street, Apt 4B Anytown, NY 12345",
    zip: "12345-6789",
    phone: "(555) 123-4567",
  },
];

const SeoListTable = () => {
  return (
    <div className="flex justify-center items-center px-10 w-full ">
      <div className="flex flex-col justify-center items-center w-full">
        <table className="table-auto w-full mx-10 border-collapse">
          <thead >
            <tr >
              <th className="p-3 pr-32 " style={TextHeadStyle}>
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
                className="border-t "
                style={{
                  ...TextHeadStyle,
                  fontSize: "15px",
                  fontWeight: "400",
                  color: "#6D6D6D",
                }}
              >
                <td className="flex p-3 text-center ml-10 items-center">
                  <span
                    className="w-3 h-3 rounded-full inline-block mr-2"
                    style={{
                      background:
                        row.color || "linear-gradient(90deg, #64C08A 0.11%, #00A550 50.01%, #00914C 99.91%)",
                    }}
                  ></span>
                  {row.svg} <span className="ml-2 text-center">{row.site}</span>
                </td>
                <td className="p-3 text-center">{row.name}</td>
                <td className="p-3 text-center">{row.address}</td>
                <td className="p-3 text-center">{row.zip}</td>
                <td className="p-3 text-center">{row.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SeoListTable;
