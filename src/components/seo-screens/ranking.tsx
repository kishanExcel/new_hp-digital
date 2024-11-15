"use client";
import { MenuIcon } from "@/svgs/checkIn/svgs";
import { CrossSvgs } from "@/svgs/seo-screens/svgs";
import React, { useState } from "react";
import PerformanceOverview from "./PerformanceOverview";

const Typography: React.CSSProperties = {
  fontFamily: "Arial",
  fontSize: "14px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

const CheckInStyle: React.CSSProperties = {
  ...Typography,
  color: "#6D6D6D",
  fontSize: "22px",
};

const Ranking = () => {
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const handleTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTag(event.target.value);
  };

  const handleAddTag = () => {
    if (tag.trim()) {
      setTags([...tags, tag]);
      setTag("");
    }
  };

  const handleRemoveTag = (index: number) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
  };

  return (
    <div className="flex flex-col w-full min-w-[450px] ml-7 gap-6 absolute top-0 lg:w-[450px] h-full">
      <div className="flex rounded-b-3xl items-center justify-center w-full md:w-[450px] h-[60px] bg-[#E0E0E0]">
        <div className="flex px-5 ml-7 py-4">
          <MenuIcon />
        </div>
        <div className="flex -ml-10 justify-center items-center flex-grow">
          <span style={CheckInStyle}>SEO</span>
        </div>
      </div>
      <div className="flex justify-between items-center px-2 ml-4">
        <span
          className="text-[#6D6D6D] justify-center items-center"
          style={{ ...Typography, fontSize: "20px" }}
        >
          Rankings
        </span>
      </div>
      <div className="flex flex-col items-center w-[380px] ml-8  min-w-[380px] h-[300px] min-h-[300px] rounded-lg bg-slate-200"></div>
      <div className="flex flex-col items-start w-[400px] ml-10 py-2 gap-4">
        <div className="flex justify-center gap-2 items-center">
          <span className="flex" style={{...Typography,color:"#6D6D6D"}}>
            Target Keyword
          </span>
          <span className="flex" style={{...Typography,color:"#631363"}}>
           (click here)
          </span>
        </div>
        <div className="flex gap-3 justify-center items-center">
          <input
            type="text"
            className="w-[300px] h-[40px] rounded-lg bg-[#F4F4F4] italic px-4 focus:outline-none"
            value={tag}
            placeholder="Type keyword..."
            onChange={handleTagChange}
            style={Typography}
          />
          <button
            className="bg-[#40F440] py-3 px-4 rounded-lg"
            style={Typography}
            onClick={handleAddTag}
          >
            Add
          </button>
        </div>
        <div className="flex flex-wrap items-start w-[400px] gap-2">
          {tags.map((tagItem, index) => (
            <div
              key={index}
              className="flex items-center bg-[#F4F4F4] px-4 py-2 rounded-lg"
            >
              <span
                className="mr-2"
                style={{ ...Typography, color: "#6D6D6D" }}
              >
                {tagItem}
              </span>
              <span
                className="cursor-pointer"
                onClick={() => handleRemoveTag(index)}
              >
                <CrossSvgs />
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex p-6 justify-center items-center">
        <button
          className="bg-[#631363] py-3 px-6 rounded-2xl"
          style={{ ...Typography, color: "#F4F4F4" }}
        >
          Run Report
        </button>
      </div>
      <div className="flex justify-center w-full">
        <PerformanceOverview />
      </div>

      <div className="flex relative ml- z-20 mt-5 justify-center items-center w-[450px] bg-[#40F440] h-[55px] rounded-t-3xl"></div>
    </div>
  );
};

export default Ranking;
