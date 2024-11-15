"use client";
import { CrossSvgs, DownSvg, UploadSvg } from "@/svgs/seo-screens/svgs";
import React, { useMemo, useState } from "react";
import TitleRatingBar from "../seo-screens/TitleRatingBar";
import ProgressBarCard from "../seo-screens/ProgressBarCard";
import SeoLineProgressBar from "./SeoLineProgressBar";
import PerformanceTable from "../seo-screens/PerformanceTable";
import SeoProgressBarCard from "./SeoProgressBarCard";
import SeoDropDown from "./SeoDropDown";

const Typography: React.CSSProperties = {
  color: "#6D6D6D",
  fontFamily: "Arial",
  fontSize: "22px",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
};

const SeoRanking = () => {
  const [rankingSelected, setRankingSelected] = useState("roof repair");
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

  const TitleStyle = useMemo(
    () => ({
      color: "#FFF",
      fontFamily: "Arial",
      fontSize: "16px",
      fontStyle: "normal",
      fontWeight: 700,
      lineHeight: "normal",
    }),
    []
  );

  const pages = [
    { value: "11", label: "roof repair" },
    { value: "12", label: "roof repair near me" },
    { value: "13", label: "roofing" },
    { value: "14", label: "roofing near me" },
    { value: "15", label: "residential roofing" },
    { value: "16", label: "commercial roofing" },
  ];

  const handleSelect = (option: { label: string; value: string }) => {
    console.log("Selected option:", option);
    setRankingSelected(option.label);
  };

  return (
    <div className="w-full flex flex-col gap-3 ml-3 py-4">
      <div className="flex-col mx-4 flex my-10 rounded-3xl h-[600px] bg-[#E0E0E0] items-center flex-auto grow">
        <div className="w-full h-full grid grid-cols-12 px-10 my-10">
          <div className="col-span-6">
            <div className="flex w-full h-full">
              <div className="flex flex-col justify-start w-full my-32 gap-2 items-start">
                <div>
                  <span style={{ ...Typography }}>Target Keyword </span>
                  <span style={{ ...Typography, color: "#631363" }}>
                    {" "}
                    (click here){" "}
                  </span>
                </div>
                <div className="w-full">
                  <div className="flex gap-3">
                    <input
                      type="text"
                      className="w-[300px] h-[40px] italic rounded-lg bg-[#F4F4F4] px-4 focus:outline-none"
                      value={tag}
                      placeholder=" Type Keyword..."
                      onChange={handleTagChange}
                      style={{
                        ...Typography,
                        fontSize: "14px",
                        fontStyle: "italic",
                      }}
                    />
                    <button
                      className="bg-[#40F440] py-2 px-4 rounded-lg"
                      style={{
                        ...Typography,
                        color: "#3D3D3D",
                        fontSize: "14px",
                      }}
                      onClick={handleAddTag}>
                      Add
                    </button>
                  </div>
                  <div className="flex flex-wrap items-start my-5 w-full h-24 gap-2">
                    {tags.map((tagItem, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-[#F4F4F4] px-4 py-2 rounded-full">
                        <span
                          className="mr-2"
                          style={{
                            ...Typography,
                            color: "#6D6D6D",
                            fontSize: "14px",
                          }}>
                          {tagItem}
                        </span>
                        <span
                          className="cursor-pointer"
                          onClick={() => handleRemoveTag(index)}>
                          <CrossSvgs />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex w-full p-6 ml-24 justify-start items-center">
                  <button
                    className="bg-[#631363] py-3 px-5 rounded-lg"
                    style={{
                      ...Typography,
                      color: "#F4F4F4",
                      fontSize: "16px",
                    }}>
                    Run Report
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6">
            <div className="w-[90%] h-full rounded-3xl bg-[#504e4e]"></div>
          </div>
        </div>
      </div>
      <div className="w-full flex-col h-full flex justify-center items-center">
        <div className="flex w-[98%] z-20 mx-4 bg-[#631363] justify-start items-center h-[60px] rounded-3xl">
          <span className="flex px-5 ml-7 py-4" style={TitleStyle}>
            Performance Overview
          </span>
        </div>
        <div className="flex flex-col rounded-3xl h-full -mt-14 z-10 w-[98%] mx-4 min-h-[400px] justify-start ml-5 bg-[#E0E0E0]">
          <div className="flex mt-32 h-full justify-between items-center w-[98%] px-3 gap-4 ml-3">
            <TitleRatingBar
              title="All Keywords Avg."
              text1="11.6"
              text2="1.5"
              icon2={<UploadSvg />}
            />
            <TitleRatingBar title="Total Keywords" text1="57" />
            <TitleRatingBar
              title="Keywords Up"
              text1="5"
              icon1={<UploadSvg />}
            />
            <TitleRatingBar
              title="Keywords Down"
              text1="5"
              icon1={<DownSvg />}
            />
          </div>
          <div className="flex h-full items-center w-[98%] px-3 py-3 ml-3">
            <span style={{ ...Typography, color: "#6D6D6D", fontSize: "16px" }}>
              Results for ‘
            </span>
            <span style={{ ...Typography, color: "#631363", fontSize: "16px" }}>
              <SeoDropDown options={pages} onSelect={handleSelect} />
            </span>
          </div>
          <div className="flex flex-col h-full items-center w-[98%] px-3 gap-4 ml-3">
            <SeoLineProgressBar />
            <div className="flex w-full h-full justify-between items-center gap-8">
              <div className="flex flex-col justify-center items-center w-[400px] h-[150px] bg-[#CF232A] px-3 gap-2 ml-3 rounded-3xl">
                <span style={{ fontSize: "30px", color: "#F4F4F4" }}>11.6</span>
                <span style={{ fontSize: "16px", color: "#F4F4F4" }}>
                  Average Map Rank
                </span>
              </div>

              <div className="flex flex-col justify-center items-center w-[400px] h-[150px] border border-[#6D6D6D] px-3 gap-2 ml-3 rounded-3xl">
                <div className="flex">
                  <span style={{ fontSize: "30px", color: "#6D6D6D" }}>11</span>
                  <span
                    className="ml-1 mt-4"
                    style={{ fontSize: "10px", color: "#6D6D6D" }}>
                    <UploadSvg />
                  </span>
                </div>
                <span style={{ fontSize: "16px", color: "#6D6D6D" }}>
                  Change
                </span>
              </div>

              <div className="flex flex-col gap-4 h-full">
                <SeoProgressBarCard
                  title1="High-ranking Grid Points"
                  title2="20"
                  value={20}
                  color="#40F440"
                />
                <SeoProgressBarCard
                  title1="Medium-ranking Grid Points"
                  title2="60"
                  value={60}
                  color="#FAAC18"
                />
                <SeoProgressBarCard
                  title1="Low-ranking Grid Points"
                  title2="80"
                  value={80}
                  color="#CF232A"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center items-center w-[70%] h-[500px] rounded-lg bg-slate-800"></div>
            <div className="flex flex-col w-full h-full gap-1 items-start justify-start py-5">
              <div className="flex w-full h-full gap-1 items-start justify-start py-5">
                <span
                  style={{ ...Typography, fontSize: "18px", color: "#6D6D6D" }}>
                  Overall Top Ranking Competitors
                </span>
                <div className="flex gap-3 items-center">
                  <span
                    style={{
                      ...Typography,
                      fontSize: "18px",
                      color: "#6D6D6D",
                    }}>
                    for
                  </span>{" "}
                  <span
                    style={{
                      ...Typography,
                      fontSize: "18px",
                      color: "#631363",
                    }}>
                    &apos;{rankingSelected}&apos;
                  </span>
                </div>
              </div>
              <span
                style={{
                  ...Typography,
                  fontSize: "16px",
                  color: "#6D6D6D",
                  fontWeight: 400,
                }}>
                Top-performing search results competitors, based on the Grid
                Points for this keyword.
              </span>
            </div>
            <PerformanceTable width="100%" isCenter={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeoRanking;
