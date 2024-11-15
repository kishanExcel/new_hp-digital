"use client";

import React, { useEffect, useState } from "react";
import Layout from "./layout";
import SearchBox from "./components/searchBOx";
import BackgroundMap from "../../assets/images/background-map.svg";
import Image from "next/image";
import TwoSemiCircles from "./components/TwoSemiCircles";

import DashboardCricle1 from "@/assets/images/dashboardCircle_1.svg";
import Dashboard2 from "@/assets/images/dashboard2.svg";
import Dashboard3 from "@/assets/images/dashboard3.svg";
import Dashboard4 from "@/assets/images/dashboard4.svg";
import Dashboard5 from "@/assets/images/dashboard5.svg";
import Circle from "./components/Circle";
import DonutChart from "./components/donutChart";
import DonutChartCircle from "./components/donutChartCircle";
import CircularChart, { Segment } from "./components/CircularChart";
import BarChart1 from "./components/BarChart1";
import SemiCircle from "./components/SemiCircle";
import Slider from "./components/slider/Slider";
import { useClientMediaQuery } from "@/utils/srchooksuseClientMediaQuery";
import Map from "./components/map";

const initialSegments: Segment[] = [
  { color: "#FFFFFF", percentage: 0 },
  { color: "#631363", percentage: 0 },
  { color: "#40F440", percentage: 0 },
  { color: "#3D3D3D", percentage: 0 },
  { color: "#27272D", percentage: 0 },
];

const targetSegments: Segment[] = [
  { color: "#FFFFFF", percentage: 5 },
  { color: "#631363", percentage: 5 },
  { color: "#40F440", percentage: 20 },
  { color: "#3D3D3D", percentage: 30 },
  { color: "#27272D", percentage: 34 },
];

const targetHeights = [165, 75, 110, 138, 105, 160];

function index() {
  const [isShowSupportDialog, setSupportDialog] = useState(false);
  const [activeOption, setActiveOption] = useState(null);
  const location = { latitude: 37.7749, longitude: -122.4194 };

  const [firstPercentage, setFirstPercentage] = useState(0);
  const [secondPercentage, setSecondPercentage] = useState(0);
  const [counter1, setCounter1] = useState(0);
  const [thirdPercentage, setThirdPercentage] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [segments, setSegments] = useState<Segment[]>(initialSegments);
  const [fifthPercentage, setFifthPercentage] = useState(0);
  const [fourthPercentage, setFourthPercentage] = useState(0);
  const [counter4, setCounter4] = useState(0);
  const [
    counterCalendarAppointmentsTotal,
    setCounterCalendarAppointmentsTotal,
  ] = useState(0);
  const [innerBarHeight1, setInnerBarHeight1] = useState(0);
  const [innerBarHeight2, setInnerBarHeight2] = useState(0);
  const [innerBarHeight3, setInnerBarHeight3] = useState(0);
  const [counter5, setCounter5] = useState(0);
  const [counter6, setCounter6] = useState(0);
  const [counter7, setCounter7] = useState(0);
  const [outerPercentage, setOuterPercentage] = useState(0);
  const [innerPercentage, setInnerPercentage] = useState(0);
  const [counterNewCustomersPerMonth, setCounterNewCustomersPerMonth] =
    useState(0);
  const [counterTotalActiveCustomers, setCounterTotalActiveCustomers] =
    useState(0);
  const [
    counterOuterPercentageAndInnerPercentage,
    setCounterOuterPercentageAndInnerPercentage,
  ] = useState(0);
  const [counter10, setCounter10] = useState(0);
  const [counter11, setCounter11] = useState(0);
  const [sixthPercentage, setSixthPercentage] = useState(0);
  const [seventhPercentage, setSeventhPercentage] = useState(0);
  const [counter12, setCounter12] = useState(0);
  const [counter13, setCounter13] = useState(0);
  const [eighthPercentage, setEighthPercentage] = useState(0);
  const [ninthPercentage, setNinthPercentage] = useState(0);
  const [animatedHeights, setAnimatedHeights] = useState<number[]>(
    new Array(targetHeights.length).fill(0)
  );
  const [counterUnread, setCounterUnread] = useState(0);
  const [counterRead, setCounterRead] = useState(0);

  const isMobile = useClientMediaQuery("(max-width: 769px)");

  const items = [
    {
      id: "live-chat",
      label: "Live Chat",
      svg: (
        <svg
          width="28"
          height="24"
          viewBox="0 0 28 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <mask
            id="mask0_3_453"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="28"
            height="24">
            <path d="M28 0.399994H0V23.6H28V0.399994Z" fill="white" />
          </mask>
          <g mask="url(#mask0_3_453)">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M14.4001 0.500002C12.2001 0.400002 9.90003 1.00002 8.00003 2.30002C5.80003 3.80002 4.30006 5.9 3.60006 8.4C3.40006 8.4 3.20005 8.4 2.90005 8.5C1.90005 8.8 1.10004 9.6 0.700038 10.4C0.200038 11.4 0.100074 12.7 0.300074 14C0.500074 15.3 1.10007 16.4 1.80007 17.1C2.50007 17.8 3.30006 18 4.10006 17.8C5.30006 17.5 5.80004 17.4 5.70004 16.3L4.90005 11C5.10005 8.1 6.50003 5.40002 9.00003 3.80002C12.3 1.60002 16.7001 1.70001 19.8001 4.20001C22.0001 5.90001 23.3 8.40001 23.4 11.1L22.8001 14.8C21.6001 18.2 18.5 20.6 14.9001 20.9H12.5C11.9 20.9 11.4001 21.4 11.4001 22V22.6C11.4001 23.2 11.9 23.7 12.5 23.7H15.5C16.1 23.7 16.6001 23.2 16.6001 22.6V22.3C19.3001 21.6 21.6001 20 23.1001 17.7L24.1001 18C24.9001 18.2 25.7 17.9 26.4 17.3C27.1 16.6 27.7 15.5 27.9 14.2C28.1 12.9 27.9 11.6 27.5 10.6C27 9.60001 26.4001 9.00002 25.6001 8.80002C25.3001 8.70002 24.9001 8.70001 24.6001 8.70001C24.0001 6.50001 22.7001 4.50001 20.8001 3.10001C18.8001 1.30001 16.6 0.500002 14.4001 0.500002Z"
              fill="#631363"
            />
          </g>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.8 10C18.6 10 19.2 10.6 19.2 11.4C19.2 12.2 18.6 12.8 17.8 12.8C17 12.8 16.4 12.2 16.4 11.4C16.4 10.6 17 10 17.8 10ZM14 10C14.8 10 15.4 10.6 15.4 11.4C15.4 12.2 14.8 12.8 14 12.8C13.2 12.8 12.6 12.2 12.6 11.4C12.6 10.6 13.2 10 14 10ZM10.1 10C10.9 10 11.5 10.6 11.5 11.4C11.5 12.2 10.9 12.8 10.1 12.8C9.30004 12.8 8.70001 12.2 8.70001 11.4C8.70001 10.6 9.40004 10 10.1 10ZM14 3.80002C9.8 3.80002 6.40002 7.09999 6.40002 11.4C6.40002 13.5 7.2 15.3 8.5 16.7L8 18.7C7.8 19.4 8.30002 19.8 8.90002 19.5L10.9 18.4C11.8 18.8 12.9 19 14 19C18.2 19 21.6 15.7 21.6 11.4C21.6 7.09999 18.2 3.80002 14 3.80002Z"
            fill="#631363"
          />
        </svg>
      ),
    },
    {
      id: "live-video",
      label: "Live Video",
      svg: (
        <svg
          width="24"
          height="14"
          viewBox="0 0 24 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <mask
            id="mask0_3_461"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="24"
            height="14">
            <path d="M23.2 0.800018H0V14H23.2V0.800018Z" fill="white" />
          </mask>
          <g mask="url(#mask0_3_461)">
            <path
              d="M0 1.60002V10.3C0 12.3 1.6 13.9 3.5 13.8H15.9C16.2 13.8 16.5 13.5 16.5 13.2V4.50001C16.5 2.50001 14.9 0.90001 13 1.00001H0.599976C0.299976 1.00001 0 1.30002 0 1.60002ZM17.3 5.00001L22.4 1.20002C22.8 0.800022 23.2 0.900016 23.2 1.60002V13.3C23.2 14.1 22.8 14 22.4 13.7L17.3 9.9V5.00001Z"
              fill="#631363"
            />
          </g>
        </svg>
      ),
    },
    {
      id: "phone-call",
      label: "Phone Call",
      svg: (
        <svg
          width="19"
          height="27"
          viewBox="0 0 19 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <mask
            id="mask0_3_485"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="19"
            height="27">
            <path d="M18.3 0.899994H0V26.4H18.3V0.899994Z" fill="white" />
          </mask>
          <g mask="url(#mask0_3_485)">
            <path
              d="M2.90004 19C4.60004 21.8 7 24.3 9.3 25.6C10.3 26.1 11.7 26.6 12.9 26.3C13.1 26.2 13.4 26.2 13.6 26L14.9 25.3C15.5 25 15.7 24.2 15.3 23.7L13.2 20.2C12.8 19.6 12.1 19.4 11.4 19.8L9.8 20.7C9.60001 20.8 9.40001 20.7 9.3 20.6L4.70003 13.1C4.60003 12.9 4.70001 12.8 4.8 12.7C5.3 12.4 5.90004 12.1 6.40004 11.8C7.00004 11.5 7.20004 10.7 6.90004 10.1L4.8 6.70002C4.4 6.10002 3.60002 5.90002 3.00002 6.30002L1.8 7.00001C1.4 7.20001 1 7.60001 0.800005 8.00001C0.300005 8.80001 0.0999926 9.70002 0.0999926 10.8C-7.39843e-06 13 1.20004 16.1 2.90004 19ZM8.20003 11.9L12.3 9.80002C13.9 9.90002 15.5 9.50001 16.7 8.50001C18.9 6.80001 18.9 3.90002 16.7 2.20002C14.6 0.500018 11.1 0.500018 9.00002 2.20002C6.70002 4.00002 6.89999 6.90001 9.09999 8.60001L8.20003 11.9ZM14.4 6.20002C14.4 5.90002 14.7 5.60001 15 5.60001C15.3 5.60001 15.6 5.90002 15.6 6.20002C15.6 6.50002 15.3 6.80002 15 6.80002C14.7 6.80002 14.4 6.50002 14.4 6.20002ZM12.2 6.20002C12.2 5.90002 12.5 5.60001 12.8 5.60001C13.1 5.60001 13.4 5.90002 13.4 6.20002C13.4 6.50002 13.1 6.80002 12.8 6.80002C12.5 6.80002 12.2 6.50002 12.2 6.20002ZM10.6 5.60001C11 5.60001 11.2 5.90002 11.2 6.20002C11.2 6.50002 10.9 6.80002 10.6 6.80002C10.2 6.80002 10 6.50002 10 6.20002C9.90002 5.90002 10.2 5.60001 10.6 5.60001Z"
              fill="#631363"
            />
          </g>
          <path
            d="M10.5 7C10.9418 7 11.3 6.64184 11.3 6.20001C11.3 5.75818 10.9418 5.39999 10.5 5.39999C10.0582 5.39999 9.70001 5.75818 9.70001 6.20001C9.70001 6.64184 10.0582 7 10.5 7Z"
            fill="#F4F4F4"
          />
          <path
            d="M12.8 7C13.2418 7 13.6 6.64184 13.6 6.20001C13.6 5.75818 13.2418 5.39999 12.8 5.39999C12.3582 5.39999 12 5.75818 12 6.20001C12 6.64184 12.3582 7 12.8 7Z"
            fill="#F4F4F4"
          />
          <path
            d="M15.1 7C15.5418 7 15.9 6.64184 15.9 6.20001C15.9 5.75818 15.5418 5.39999 15.1 5.39999C14.6581 5.39999 14.3 5.75818 14.3 6.20001C14.3 6.64184 14.6581 7 15.1 7Z"
            fill="#F4F4F4"
          />
        </svg>
      ),
    },
    {
      id: "email",
      label: "Email",
      svg: (
        <svg
          width="26"
          height="24"
          viewBox="0 0 26 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.39996 8.60001L1 15.3C0.9 15.2 0.899963 15 0.899963 14.9V2.39999C0.899963 2.29999 0.9 2.1 1 2L8.39996 8.60001Z"
            fill="#631363"
          />
          <path
            d="M13.8 12.5C12.9 12.5 12.2 13.2 12.2 14.1V15.9H1.79999C1.69999 15.9 1.59998 15.9 1.59998 15.9L9 9.30002L9.79999 10C10.4 10.5 10.9 10.8 11.5 10.8C12.1 10.8 12.6 10.5 13.2 10L14 9.30002L17.7 12.6H13.8V12.5Z"
            fill="#631363"
          />
          <path
            d="M10.3 9.30002L1.59998 1.5C1.69998 1.5 1.79999 1.5 1.79999 1.5H21C21.1 1.5 21.2 1.5 21.3 1.5L12.6 9.30002C11.7 10 11.1 10 10.3 9.30002Z"
            fill="#631363"
          />
          <path
            d="M14.5 8.60001L21.9 2C22 2.1 22 2.29999 22 2.39999V12.5H18.8L14.5 8.60001Z"
            fill="#631363"
          />
          <path
            d="M23.4 13.3H13.8C13.4 13.3 13 13.7 13 14.1V19.8C13 20.2 13.4 20.6 13.8 20.6H18.4C18.5 20.6 18.6 20.6 18.6 20.7L21.6 22.5V21C21.6 20.8 21.8 20.6 22 20.6H23.4C23.8 20.6 24.2 20.2 24.2 19.8V14.1C24.2 13.7 23.9 13.3 23.4 13.3ZM16.1 17.4C15.9 17.4 15.7 17.2 15.7 17C15.7 16.8 15.9 16.6 16.1 16.6C16.4 16.6 16.5 16.8 16.5 17C16.5 17.2 16.4 17.4 16.1 17.4ZM18.6 17.4C18.4 17.4 18.2 17.2 18.2 17C18.2 16.8 18.4 16.6 18.6 16.6C18.8 16.6 19 16.8 19 17C19.1 17.2 18.9 17.4 18.6 17.4ZM21.1 17.4C20.9 17.4 20.7 17.2 20.7 17C20.7 16.8 20.9 16.6 21.1 16.6C21.3 16.6 21.5 16.8 21.5 17C21.6 17.2 21.4 17.4 21.1 17.4Z"
            fill="#631363"
          />
          <path
            d="M16.1 17.8C16.5418 17.8 16.9 17.4418 16.9 17C16.9 16.5582 16.5418 16.2 16.1 16.2C15.6581 16.2 15.3 16.5582 15.3 17C15.3 17.4418 15.6581 17.8 16.1 17.8Z"
            fill="#F4F4F4"
          />
          <path
            d="M18.6 17.8C19.0418 17.8 19.4 17.4418 19.4 17C19.4 16.5582 19.0418 16.2 18.6 16.2C18.1581 16.2 17.8 16.5582 17.8 17C17.8 17.4418 18.1581 17.8 18.6 17.8Z"
            fill="#F4F4F4"
          />
          <path
            d="M21.1 17.8C21.5418 17.8 21.9 17.4418 21.9 17C21.9 16.5582 21.5418 16.2 21.1 16.2C20.6581 16.2 20.3 16.5582 20.3 17C20.3 17.4418 20.6581 17.8 21.1 17.8Z"
            fill="#F4F4F4"
          />
        </svg>
      ),
    },
    {
      id: "create-ticket",
      label: "Create Ticket",
      svg: (
        <svg
          width="26"
          height="16"
          viewBox="0 0 26 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <mask
            id="mask0_3_431"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="26"
            height="16">
            <path
              d="M1.55411 0H24.2682C25.105 0 25.8223 0.717272 25.8223 1.55411V14.3457C25.8223 15.1826 25.105 15.8998 24.2682 15.8998H1.55411C0.717272 15.8998 0 15.1826 0 14.3457V1.55411C0 0.717272 0.717272 0 1.55411 0Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask0_3_431)">
            <path
              d="M25.3441 5.61873H25.7028C25.8223 5.61873 25.8223 5.49917 25.8223 5.49917V0.119521C25.8223 -2.67178e-05 25.7028 -0.119553 25.7028 -0.119553H21.0404C20.9208 -0.119553 20.9209 -2.67178e-05 20.9209 0.119521V2.2714C20.9209 2.63005 20.6818 2.86914 20.3231 2.86914C19.9645 2.86914 19.7254 2.63005 19.7254 2.2714V0.119521C19.7254 -2.67178e-05 19.6058 -0.119553 19.6058 -0.119553H1.67363C0.836791 -0.119553 0 0.597727 0 1.55411V5.37965C0 5.4992 0.119519 5.49917 0.119519 5.49917H0.478147C1.67363 5.49917 2.63007 6.45558 2.63007 7.77061C2.63007 8.96609 1.67363 10.042 0.478147 10.042H0.119519C-2.91883e-05 10.042 0 10.1616 0 10.1616V15.4217C0 15.5412 0.119519 15.5412 0.119519 15.5412H19.4863C19.6058 15.5412 19.6058 15.4217 19.6058 15.4217V14.8239C19.6058 14.4653 19.8449 14.2262 20.2035 14.2262C20.5622 14.2262 20.8013 14.4653 20.8013 14.8239V15.4217C20.8013 15.5412 20.9209 15.5412 20.9209 15.5412H24.0291C24.9855 15.5412 25.7028 14.8239 25.7028 13.8675V10.042C25.7028 9.92246 25.5832 9.92245 25.5832 9.92245H25.2246C24.0291 9.92245 22.9532 8.96608 22.9532 7.65105C23.0727 6.69467 24.0291 5.61873 25.3441 5.61873ZM5.8578 7.65105C5.37961 7.41196 5.26007 6.69466 5.49917 6.21647L6.69465 4.06462C6.81419 3.82552 7.05329 3.58644 7.29239 3.58644C7.53148 3.46689 7.77062 3.58641 8.00972 3.70595H8.12923L8.24875 3.58644C8.24875 2.9887 8.72697 2.51048 9.32471 2.51048H11.8352C12.4329 2.51048 12.9111 2.9887 12.9111 3.58644C12.9111 3.58644 12.9111 3.70595 13.0307 3.70595C13.1502 3.70595 13.1503 3.70595 13.1503 3.70595C13.6284 3.46686 14.2262 3.58643 14.5848 4.06462L15.7803 6.21647C15.8999 6.45556 15.8998 6.69467 15.8998 7.05331C15.7803 7.29241 15.6607 7.53151 15.4216 7.65105C15.3021 7.65105 15.3021 7.77061 15.3021 7.77061C15.3021 7.89016 15.3021 7.89013 15.4216 7.89013C15.6607 8.00968 15.7803 8.24877 15.8998 8.48787C16.0194 8.72696 15.8999 9.08562 15.7803 9.32471L14.5848 11.4766C14.3457 11.9548 13.6284 12.1939 13.1503 11.8352H13.0307L12.9111 11.9548C12.9111 12.5525 12.4329 13.0307 11.8352 13.0307H9.32471C8.72697 13.0307 8.24875 12.5525 8.24875 11.9548C8.24875 11.8352 8.24878 11.8352 8.12923 11.8352C8.12923 11.8352 8.12926 11.8352 8.00972 11.8352C7.89017 11.8352 8.00967 11.8352 7.89012 11.8352C7.41193 12.0743 6.81418 11.9548 6.45554 11.4766L5.49917 9.8029C5.14053 9.08561 5.37966 8.36835 5.61876 7.77061C5.61876 7.77061 5.61876 7.7706 5.61876 7.65105C5.9774 7.7706 5.8578 7.7706 5.8578 7.65105ZM20.3231 8.00968C19.9645 8.00968 19.7254 7.77059 19.7254 7.41194V4.90143C19.7254 4.54279 19.9645 4.30369 20.3231 4.30369C20.6818 4.30369 20.9209 4.54279 20.9209 4.90143V7.41194C20.8013 7.77059 20.5622 8.00968 20.3231 8.00968ZM19.7254 9.92245C19.7254 9.56381 19.9645 9.32471 20.3231 9.32471C20.6818 9.32471 20.9209 9.56381 20.9209 9.92245V12.433C20.9209 12.7916 20.6818 13.0307 20.3231 13.0307C19.9645 13.0307 19.7254 12.7916 19.7254 12.433V9.92245Z"
              fill="#631363"
            />
          </g>
          <path
            d="M6.5752 8.84653C6.45565 8.84653 6.45565 8.96606 6.5752 9.08561L7.53156 10.8788C7.53156 10.8788 7.53153 10.9984 7.65108 10.9984H7.77067L8.60752 10.5202C8.72707 10.4006 8.96617 10.4006 9.20526 10.5202C9.32481 10.6397 9.4443 10.7593 9.4443 10.9984V11.9548C9.4443 12.0743 9.56389 12.0743 9.56389 12.0743H11.5962C11.7158 12.0743 11.7157 11.9548 11.7157 11.9548V10.9984C11.7157 10.7593 11.8353 10.6397 11.9548 10.5202C12.0744 10.4006 12.3135 10.4006 12.5526 10.5202L13.3894 10.9984H13.509C13.509 10.9984 13.6285 10.9984 13.6285 10.8788L14.7044 9.08561C14.7044 8.96606 14.7045 8.84653 14.5849 8.84653L13.7481 8.36835C13.6285 8.2488 13.509 8.12922 13.509 7.89013C13.509 7.65103 13.6285 7.53149 13.7481 7.41194L14.5849 6.93376C14.7045 6.93376 14.7044 6.8142 14.7044 6.69465L13.7481 4.90143C13.7481 4.90143 13.748 4.78191 13.6285 4.78191H13.509L12.6721 5.2601C12.5526 5.37965 12.3135 5.37965 12.0744 5.2601C11.9548 5.14055 11.8353 5.02101 11.8353 4.78191V3.82551C11.8353 3.70596 11.7157 3.70596 11.7157 3.70596H9.68341C9.56386 3.70596 9.56389 3.82551 9.56389 3.82551V4.78191C9.56389 5.02101 9.44433 5.14055 9.32478 5.2601C9.20523 5.37965 8.96614 5.37965 8.72704 5.2601L7.89019 4.78191H7.77067C7.77067 4.78191 7.65108 4.78189 7.65108 4.90143L6.69471 6.69465C6.69471 6.8142 6.69476 6.93376 6.81431 6.93376L7.65108 7.41194C7.77063 7.53149 7.89019 7.65103 7.89019 7.89013C7.89019 8.12922 7.77063 8.2488 7.65108 8.36835L6.5752 8.84653ZM8.36841 7.89013C8.36841 6.5751 9.44434 5.49917 10.7594 5.49917C12.0744 5.49917 13.1503 6.5751 13.1503 7.89013C13.1503 9.20515 12.0744 10.2811 10.7594 10.2811C9.32479 10.2811 8.36841 9.20515 8.36841 7.89013Z"
            fill="#631363"
          />
          <path
            d="M10.6398 9.20516C11.3571 9.20516 11.9549 8.60741 11.9549 7.89012C11.9549 7.17284 11.3571 6.57513 10.6398 6.57513C9.92251 6.57513 9.3248 7.17284 9.3248 7.89012C9.44435 8.60741 9.92251 9.20516 10.6398 9.20516Z"
            fill="#631363"
          />
        </svg>
      ),
    },
  ];
  // first component
  const dashboardInboxTwoSemiCirclesComponentStyle: React.CSSProperties = {
    position: "absolute",
    top: isMobile ? "30px" : "131.2px",
    left: isMobile ? "20px" : "131.1px",
  };
  const dashboardInboxTotalMessagesTitleTextValue: React.CSSProperties = {
    // width: '57px',
    // height: '58.401px',
    position: "absolute",
    top: isMobile ? "45px" : "184.36px",
    left: isMobile ? "35px" : "193.56px",
    color: "#27272D",
    fontFamily: "Glacial Indifference",
    fontSize: isMobile ? "12px" : "48px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };

  const dashboardTotalReviewsTitleTextValue: React.CSSProperties = {
    // width: '60px',
    // height: '58.401px',
    position: "absolute",
    top: isMobile ? "17px" : "80px",
    left: isMobile ? "19px" : "100px",
    color: "#6D6D6D",
    fontFamily: "Glacial Indifference",
    fontSize: isMobile ? "8px" : "28px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };
  const dashboardTotalReviewsTitleTextValue2: React.CSSProperties = {
    // width: '60px',
    // height: '58.401px',
    position: "absolute",
    top: isMobile ? "17px" : "75px",
    left: isMobile ? "35px" : "190px",
    color: "#000",
    fontFamily: "Glacial Indifference",
    fontSize: isMobile ? "12px" : "48px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  };

  const dashboardCalendarAppointmentsDonutChartComponent1Style: React.CSSProperties =
    {
      position: "absolute",
      top: isMobile ? "0" : "50px",
      left: isMobile ? "0" : "28px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    };

  const dashboardCalendarAppointmentsDonutChartComponent2Style: React.CSSProperties =
    {
      position: "absolute",
      top: isMobile ? "0" : "50px",
      right: isMobile ? "5px" : "29px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    };

  const dashboardCalendarAppointmentsTodayTextValue: React.CSSProperties = {
    position: "absolute",
    top: isMobile ? "10px" : "90px",
    left: isMobile ? "14px" : "80px",
    color: "#FFF",
    fontFamily: "Glacial Indifference",
    fontSize: isMobile ? "12px" : "48px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };
  const dashboardCalendarAppointmentsTotalText: React.CSSProperties = {
    width: "38px",
    height: "73px",
    position: "absolute",
    top: "162.71px",
    left: "194px",
    color: "#631363",
    fontFamily: "Glacial Indifference",
    fontSize: "60px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "0%" /* 0px */,
  };

  const dashboardCalendarAppointmentsTomorrowTextValue: React.CSSProperties = {
    position: "absolute",
    top: isMobile ? "10px" : "90px",
    right: isMobile ? "18px" : "80px",
    color: "#FFF",
    fontFamily: "Glacial Indifference",
    fontSize: isMobile ? "12px" : "48px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };
  const dashboardPaymentTitleText: React.CSSProperties = {
    // width: '',
    // height: '',
    // position: 'absolute',
    // top: '38.69px',
    // left: '45px',
    color: "#6D6D6D",
    fontFamily: "Glacial Indifference",
    fontSize: isMobile ? "10px" : "30px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };
  const dashboardPaymentTotalPerMonthTitleText: React.CSSProperties = {
    // width: '237px',
    // height: '25.796px',
    // position: 'absolute',
    // top: '73.42px',
    // left: '45px',
    display: "block",
    color: "#6D6D6D",
    fontFamily: "Glacial Indifference",
    fontSize: isMobile ? "10px" : "30px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };

  const dashboardPaymentBarChart1Style: React.CSSProperties = {
    position: isMobile ? "relative" : "absolute",
    top: isMobile ? "0" : "150.95px",
    left: isMobile ? "0" : "0",
  };

  const dashboardPaymentTotalPerMonthTextValue: React.CSSProperties = {
    // width: '182px',
    // height: '25.796px',
    // position: 'absolute',
    // top: '107.15px',
    // left: '45px',
    color: "#40F440",
    fontFamily: "Glacial Indifference",
    fontSize: isMobile ? "10px" : "30px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "normal",
  };

  const dashboardPaymentMonth1TextValue: React.CSSProperties = {
    // position: 'absolute',
    // top: '205.89px',
    // left: '79.93px',
    display: "inline-block",
    color: "#6D6D6D",
    fontFamily: "Glacial Indifference",
    fontSize: isMobile ? "6px" : "22px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };
  const dashboardPaymentMonth2TextValue: React.CSSProperties = {
    // position: 'absolute',
    // top: '205.89px',
    // left: '146.64px',
    display: "inline-block",
    marginLeft: "14px",
    color: "#6D6D6D",
    fontFamily: "Glacial Indifference",
    fontSize: isMobile ? "6px" : "22px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };
  const dashboardPaymentMonth3TextValue: React.CSSProperties = {
    // position: 'absolute',
    // top: '205.89px',
    // left: '214.93px',
    display: "inline-block",
    marginLeft: "14px",
    color: "#6D6D6D",
    fontFamily: "Glacial Indifference",
    fontSize: isMobile ? "6px" : "22px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };

  const dashboardPaymentMonth1Text: React.CSSProperties = {
    // position: 'absolute',
    // top: '389px',
    // left: '68px',
    display: isMobile ? "inline-block" : "flex",
    justifyContent: isMobile ? "" : "space-around",
    color: "#6D6D6D",
    fontFamily: "Glacial Indifference",
    fontSize: isMobile ? "6px" : "22px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };

  const dashboardPaymentMonth2Text: React.CSSProperties = {
    // position: 'absolute',
    // top: '389px',
    // left: '134px',
    marginLeft: "8px",
    display: isMobile ? "inline-block" : "flex",
    justifyContent: isMobile ? "" : "space-around",
    color: "#6D6D6D",
    fontFamily: "Glacial Indifference",
    fontSize: isMobile ? "6px" : "22px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };

  const dashboardPaymentMonth3Text: React.CSSProperties = {
    // position: 'absolute',
    // top: '389px',
    // left: '212px',
    marginLeft: "8px",
    display: isMobile ? "inline-block" : "flex",
    justifyContent: isMobile ? "" : "space-around",
    color: "#6D6D6D",
    fontFamily: "Glacial Indifference",
    fontSize: isMobile ? "6px" : "22px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };

  const dashboardPaymentMonth4Text: React.CSSProperties = {
    // position: 'absolute',
    // top: '389px',
    // left: '285px',
    marginLeft: "8px",
    display: isMobile ? "inline-block" : "flex",
    justifyContent: isMobile ? "" : "space-around",
    color: "#6D6D6D",
    fontFamily: "Glacial Indifference",
    fontSize: isMobile ? "6px" : "22px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };

  const dashboardPaymentMonth5Text: React.CSSProperties = {
    // position: 'absolute',
    // top: '389px',
    // left: '351px',
    marginLeft: "8px",
    display: isMobile ? "inline-block" : "flex",
    justifyContent: isMobile ? "" : "space-around",
    color: "#6D6D6D",
    fontFamily: "Glacial Indifference",
    fontSize: isMobile ? "6px" : "22px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };

  const dashboardCrmSemiCircleComponentStyle: React.CSSProperties = {
    position: "absolute",
    top: isMobile ? "7px" : "100px",
    right: isMobile ? "28px" : "100px",
  };

  const dashboardCrmNewCustomersPerMonthTextValue: React.CSSProperties = {
    position: "absolute",
    top: isMobile ? "13px" : "86px",
    right: isMobile ? "11px" : "67px",
    color: "#27272D",
    fontFamily: "Glacial Indifference",
    fontSize: isMobile ? "6px" : "24px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };

  const dashboardCrmTotalActiveCustomersTextValue: React.CSSProperties = {
    position: "absolute",
    top: isMobile ? "13px" : "140px",
    left: isMobile ? "3px" : "65px",
    color: "#8C8C8C",
    fontFamily: "Glacial Indifference",
    fontSize: isMobile ? "6px" : "24px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };

  const dashboardCrmNewPerMonthPlusTotalActiveTextValue: React.CSSProperties = {
    position: "absolute",
    top: isMobile ? "28px" : "200px",
    left: isMobile ? "26px" : "170px",
    color: "#27272D",
    fontFamily: "Glacial Indifference",
    fontSize: isMobile ? "10px" : "40px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };

  const dashboardInvoicesTitleText: React.CSSProperties = {
    // width: '116px',
    // height: '36.75px',
    // position: 'absolute',
    // top: '26.54px',
    // left: '55px',
    color: "#6D6D6D",
    fontFamily: "Glacial Indifference",
    fontSize: "8px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };

  const dashboardInvoicesPaidText: React.CSSProperties = {
    // width: '65px',
    // height: '39.813px',
    // position: 'absolute',
    // top: '105.15px',
    // left: '55px',
    color: "#6D6D6D",
    fontFamily: "Glacial Indifference",
    fontSize: "8px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };

  const dashboardInvoicesPaidTextValue: React.CSSProperties = {
    // width: '57px',
    // height: '52.063px',
    // position: 'absolute',
    // top: '151.15px',
    // left: '55px',
    color: "#6D6D6D",
    fontFamily: "Glacial Indifference",
    fontSize: "8px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "0%" /* 0px */,
  };

  const dashboardInvoicesDonutChartComponent3Style: React.CSSProperties = {
    // position: 'absolute',
    // top: '99.45px',
    // left: '232px',
  };

  const dashboardInvoicesUnpaidText: React.CSSProperties = {
    // width: '105px',
    // height: '39.813px',
    // position: 'absolute',
    // top: '289.92px',
    // left: '55px',
    color: "#6D6D6D",
    fontFamily: "Glacial Indifference",
    fontSize: "8px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  };

  const dashboardInvoicesUnpaidTextValue: React.CSSProperties = {
    // width: '60px',
    // height: '45.938px',
    // position: 'absolute',
    // top: '335.92px',
    // left: '55px',
    color: "#6D6D6D",
    fontFamily: "Glacial Indifference",
    fontSize: isMobile ? "8px" : "28px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "0%" /* 0px */,
  };

  const dashboardInvoicesDonutChartComponent4Style: React.CSSProperties = {
    // position: 'absolute',
    // top: '274.32px',
    // left: '232px',
  };

  const dashboardEstimatesSlider2ContainerStyle: React.CSSProperties = {
    width: isMobile ? "94px" : "371px",
    height: isMobile ? "10px" : "45px",
    // position: 'absolute',
    // top: '332.13px',
    // left: '34px',
    backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCA5NiAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkwIDAuMDg4MTY1M0g1Ljg5OTk2QzIuOTk5OTYgMC4wODgxNjUzIDAuNjk5OTUxIDIuMzg5OTYgMC42OTk5NTEgNS4yOTIyMkMwLjY5OTk1MSA4LjE5NDQ3IDIuOTk5OTYgMTAuNDk2MiA1Ljg5OTk2IDEwLjQ5NjJIOTBDOTIuOSAxMC40OTYyIDk1LjIgOC4xOTQ0NyA5NS4yIDUuMjkyMjJDOTUuMiAyLjQ5MDA0IDkyLjkgMC4wODgxNjUzIDkwIDAuMDg4MTY1M1oiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzIyMykiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xXzIyMyIgeDE9IjQ3Ljk0MyIgeTE9IjEwLjUwNTciIHgyPSI0Ny45NDMiIHkyPSIwLjQzMjUzMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRDVEREVGIi8+CjxzdG9wIG9mZnNldD0iMC4xODUzIiBzdG9wLWNvbG9yPSIjQkRDM0NGIi8+CjxzdG9wIG9mZnNldD0iMC4zOTQyIiBzdG9wLWNvbG9yPSIjQThBQkIyIi8+CjxzdG9wIG9mZnNldD0iMC42MDE3IiBzdG9wLWNvbG9yPSIjOTg5QTlEIi8+CjxzdG9wIG9mZnNldD0iMC44MDUyIiBzdG9wLWNvbG9yPSIjOEY4RjkwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzhDOEM4QyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  };

  const dashboardEstimatesSlider2ComponentStyle: React.CSSProperties = {
    position: isMobile ? "relative" : "absolute",
    top: isMobile ? "" : "16.91px",
    left: isMobile ? "" : "20.36px",
    zIndex: 4,
  };

  const dashboardEstimatesSlider1ContainerStyle: React.CSSProperties = {
    width: isMobile ? "94px" : "371px",
    height: isMobile ? "10px" : "45px",
    // position: 'absolute',
    // top: '188.33px',
    // left: '34px',
    backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCA5NiAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTkwIDAuMDg4MTY1M0g1Ljg5OTk2QzIuOTk5OTYgMC4wODgxNjUzIDAuNjk5OTUxIDIuMzg5OTYgMC42OTk5NTEgNS4yOTIyMkMwLjY5OTk1MSA4LjE5NDQ3IDIuOTk5OTYgMTAuNDk2MiA1Ljg5OTk2IDEwLjQ5NjJIOTBDOTIuOSAxMC40OTYyIDk1LjIgOC4xOTQ0NyA5NS4yIDUuMjkyMjJDOTUuMiAyLjQ5MDA0IDkyLjkgMC4wODgxNjUzIDkwIDAuMDg4MTY1M1oiIGZpbGw9InVybCgjcGFpbnQwX2xpbmVhcl8xXzIyMykiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xXzIyMyIgeDE9IjQ3Ljk0MyIgeTE9IjEwLjUwNTciIHgyPSI0Ny45NDMiIHkyPSIwLjQzMjUzMiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjRDVEREVGIi8+CjxzdG9wIG9mZnNldD0iMC4xODUzIiBzdG9wLWNvbG9yPSIjQkRDM0NGIi8+CjxzdG9wIG9mZnNldD0iMC4zOTQyIiBzdG9wLWNvbG9yPSIjQThBQkIyIi8+CjxzdG9wIG9mZnNldD0iMC42MDE3IiBzdG9wLWNvbG9yPSIjOTg5QTlEIi8+CjxzdG9wIG9mZnNldD0iMC44MDUyIiBzdG9wLWNvbG9yPSIjOEY4RjkwIi8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzhDOEM4QyIvPgo8L2xpbmVhckdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo=')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
  };
  const dashboardEstimatesSlider1ComponentStyle: React.CSSProperties = {
    position: isMobile ? "relative" : "absolute",
    top: isMobile ? "" : "12.91px",
    left: isMobile ? "" : "20.36px",
    zIndex: 4,
  };

  useEffect(() => {
    const targetPercentageFirst = 120;
    const targetPercentageSecond = 55;
    const targetCounterRead = 50;
    const targetCounterUnread = 7;
    const targetPercentageThird = 75;
    const targetCounter2 = 75;
    const targetCounter3 = 89;
    const targetPercentageFourth = 75;
    const targetPercentageFifth = 50;
    const targetCounterCalendarAppointmentsTotal = 6;
    const targetCounter4 = 2;
    const targetHeight1 = isMobile ? 14 : 55;
    const targetHeight2 = isMobile ? 26 : 105;
    const targetHeight3 = isMobile ? 30 : 125;

    const duration = 2000; // Animation duration in milliseconds
    const frameRate = 1000 / 60; // 60 frames per second
    const totalFrames = duration / frameRate;

    const targetCounter5 = 5;
    const targetCounter6 = 10;
    const targetCounter7 = 12;

    const targetCounter10 = 57;
    const targetCounter11 = 45;

    const targetPercentageSixth = 75;
    const targetPercentageSeventh = 60;

    const targetCounter12 = 96;
    const targetCounter13 = 199.69;

    const targetPercentageEighth = 50;
    const targetPercentageNinth = 80;

    const targetOuterPercentage = 70;
    const targetInnerPercentage = 85;
    const targetCounterNewCustomersPerMonth = 12;
    const targetCounterTotalActiveCustomers = 45;
    const targetCounterOuterPercentageAndInnerPercentage = 57;

    // Calculate the increment for the first circle
    const incrementFirst = targetPercentageFirst / (2000 / (1000 / 60));
    const incrementSecond = targetPercentageSecond / (2000 / (1000 / 60));
    const incrementThird = targetPercentageThird / (2000 / (1000 / 60));
    const intervalMs = 20; // Interval duration in milliseconds
    const targetCounter1 = 57;
    const totalDurationMs = 2000; // Total duration for the counter to reach targetCounter1

    const totalSteps = totalDurationMs / intervalMs;

    const intervalFirst = setInterval(() => {
      setFirstPercentage((prevPercentage) => {
        const updatedPercentage = prevPercentage + incrementFirst;
        if (updatedPercentage >= targetPercentageFirst) {
          clearInterval(intervalFirst);
          return targetPercentageFirst;
        }
        return updatedPercentage;
      });
    }, 1000 / 60);

    const intervalSecond = setInterval(() => {
      setSecondPercentage((prevPercentage) => {
        const updatedPercentage = prevPercentage + incrementSecond;
        if (updatedPercentage >= targetPercentageSecond) {
          clearInterval(intervalSecond);
          return targetPercentageSecond;
        }
        return updatedPercentage;
      });
    }, 1000 / 60);

    const incrementPerStep1 = targetCounter1 / totalSteps;
    const counterInterval1 = setInterval(() => {
      setCounter1((prevCounter) => {
        const updatedCounter = prevCounter + incrementPerStep1;
        if (updatedCounter >= targetCounter1) {
          clearInterval(counterInterval1);
          return targetCounter1;
        }
        return updatedCounter;
      });
    }, intervalMs);

    const intervalThird = setInterval(() => {
      setThirdPercentage((prevPercentage) => {
        const updatedPercentage = prevPercentage + incrementThird;
        if (updatedPercentage >= targetPercentageThird) {
          clearInterval(intervalThird);
          return targetPercentageThird;
        }
        return updatedPercentage;
      });
    }, 1000 / 60);

    const incrementPerStep2 = targetCounter2 / totalSteps;

    const counterInterval2 = setInterval(() => {
      setCounter2((prevCounter) => {
        const updatedCounter = prevCounter + incrementPerStep2;
        if (updatedCounter >= targetCounter2) {
          clearInterval(counterInterval2);
          return targetCounter2;
        }
        return updatedCounter;
      });
    }, intervalMs);

    const incrementPerStep3 = targetCounter3 / totalSteps;

    const counterInterval3 = setInterval(() => {
      setCounter3((prevCounter) => {
        const updatedCounter = prevCounter + incrementPerStep3;
        if (updatedCounter >= targetCounter3) {
          clearInterval(counterInterval3);
          return targetCounter3;
        }
        return updatedCounter;
      });
    }, intervalMs);

    const intervalSegments = setInterval(() => {
      setSegments((currentSegments) => {
        return currentSegments.map((segment, index) => {
          if (segment.percentage < targetSegments[index].percentage) {
            let increment = targetSegments[index].percentage / 100; // Use 100 steps for 2 seconds
            let newPercentage = segment.percentage + increment;
            if (newPercentage > targetSegments[index].percentage) {
              newPercentage = targetSegments[index].percentage;
            }
            return { ...segment, percentage: newPercentage };
          }
          return segment;
        });
      });
    }, 20);

    const incrementFifth = targetPercentageFifth / (2000 / (1000 / 60));
    const intervalFifth = setInterval(() => {
      setFifthPercentage((prevPercentage) => {
        const updatedPercentage = prevPercentage + incrementFifth;
        if (updatedPercentage >= targetPercentageFifth) {
          clearInterval(intervalFifth);
          return targetPercentageFifth;
        }
        return updatedPercentage;
      });
    }, 1000 / 60);

    const incrementFourth = targetPercentageFourth / (2000 / (1000 / 60));
    const intervalFourth = setInterval(() => {
      setFourthPercentage((prevPercentage) => {
        const updatedPercentage = prevPercentage + incrementFourth;
        if (updatedPercentage >= targetPercentageFourth) {
          clearInterval(intervalFourth);
          return targetPercentageFourth;
        }
        return updatedPercentage;
      });
    }, 1000 / 60);

    const incrementPerStepCalendarAppointmentsTotal =
      targetCounterCalendarAppointmentsTotal / totalSteps;

    const counterIntervalCalendarAppointmentsTotal = setInterval(() => {
      setCounterCalendarAppointmentsTotal((prevCounter) => {
        const updatedCounter =
          prevCounter + incrementPerStepCalendarAppointmentsTotal;
        if (updatedCounter >= targetCounterCalendarAppointmentsTotal) {
          clearInterval(counterIntervalCalendarAppointmentsTotal);
          return targetCounterCalendarAppointmentsTotal;
        }
        return updatedCounter;
      });
    }, intervalMs);

    const incrementPerStep4 = targetCounter4 / totalSteps;

    const counterInterval4 = setInterval(() => {
      setCounter4((prevCounter) => {
        const updatedCounter = prevCounter + incrementPerStep4;
        if (updatedCounter >= targetCounter4) {
          clearInterval(counterInterval4);
          return targetCounter4;
        }
        return updatedCounter;
      });
    }, intervalMs);

    const increment1 = targetHeight1 / totalFrames;
    const increment2 = targetHeight2 / totalFrames;
    const increment3 = targetHeight3 / totalFrames;

    const intervalBars2 = setInterval(() => {
      setInnerBarHeight1((prevHeight) =>
        Math.min(prevHeight + increment1, targetHeight1)
      );
      setInnerBarHeight2((prevHeight) =>
        Math.min(prevHeight + increment2, targetHeight2)
      );
      setInnerBarHeight3((prevHeight) =>
        Math.min(prevHeight + increment3, targetHeight3)
      );
    }, frameRate);

    const incrementPerStep5 = targetCounter5 / totalSteps;

    const counterInterval5 = setInterval(() => {
      setCounter5((prevCounter) => {
        const updatedCounter = prevCounter + incrementPerStep5;
        if (updatedCounter >= targetCounter5) {
          clearInterval(counterInterval5);
          return targetCounter5;
        }
        return updatedCounter;
      });
    }, intervalMs);

    const incrementPerStep6 = targetCounter6 / totalSteps;

    const counterInterval6 = setInterval(() => {
      setCounter6((prevCounter) => {
        const updatedCounter = prevCounter + incrementPerStep6;
        if (updatedCounter >= targetCounter6) {
          clearInterval(counterInterval6);
          return targetCounter6;
        }
        return updatedCounter;
      });
    }, intervalMs);

    const incrementPerStep7 = targetCounter7 / totalSteps;

    const counterInterval7 = setInterval(() => {
      setCounter7((prevCounter) => {
        const updatedCounter = prevCounter + incrementPerStep7;
        if (updatedCounter >= targetCounter7) {
          clearInterval(counterInterval7);
          return targetCounter7;
        }
        return updatedCounter;
      });
    }, intervalMs);

    const incrementOuterPercentage =
      targetOuterPercentage / (2000 / (1000 / 60));
    const intervalOuterPercentage = setInterval(() => {
      setOuterPercentage((prevPercentage) => {
        const updatedPercentage = prevPercentage + incrementOuterPercentage;
        if (updatedPercentage >= targetOuterPercentage) {
          clearInterval(intervalOuterPercentage);
          return targetOuterPercentage;
        }
        return updatedPercentage;
      });
    }, 1000 / 60);

    const incrementInnerPercentage =
      targetInnerPercentage / (2000 / (1000 / 60));
    const intervalInnerPercentage = setInterval(() => {
      setInnerPercentage((prevPercentage) => {
        const updatedPercentage = prevPercentage + incrementInnerPercentage;
        if (updatedPercentage >= targetInnerPercentage) {
          clearInterval(intervalInnerPercentage);
          return targetInnerPercentage;
        }
        return updatedPercentage;
      });
    }, 1000 / 60);

    const incrementPerStepNewCustomersPerMonth =
      targetCounterNewCustomersPerMonth / totalSteps;

    const counterIntervalNewCustomersPerMonth = setInterval(() => {
      setCounterNewCustomersPerMonth((prevCounter) => {
        const updatedCounter =
          prevCounter + incrementPerStepNewCustomersPerMonth;
        if (updatedCounter >= targetCounterNewCustomersPerMonth) {
          clearInterval(counterIntervalNewCustomersPerMonth);
          return targetCounterNewCustomersPerMonth;
        }
        return updatedCounter;
      });
    }, intervalMs);

    const incrementPerStepTotalActiveCustomers =
      targetCounterTotalActiveCustomers / totalSteps;

    const counterIntervalTotalActiveCustomers = setInterval(() => {
      setCounterTotalActiveCustomers((prevCounter) => {
        const updatedCounter =
          prevCounter + incrementPerStepTotalActiveCustomers;
        if (updatedCounter >= targetCounterTotalActiveCustomers) {
          clearInterval(counterIntervalTotalActiveCustomers);
          return targetCounterTotalActiveCustomers;
        }
        return updatedCounter;
      });
    }, intervalMs);

    const incrementPerStepOuterPercentageAndInnerPercentage =
      targetCounterOuterPercentageAndInnerPercentage / totalSteps;

    const counterIntervalOuterPercentageAndInnerPercentage = setInterval(() => {
      setCounterOuterPercentageAndInnerPercentage((prevCounter) => {
        const updatedCounter =
          prevCounter + incrementPerStepOuterPercentageAndInnerPercentage;
        if (updatedCounter >= targetCounterOuterPercentageAndInnerPercentage) {
          clearInterval(counterIntervalOuterPercentageAndInnerPercentage);
          return targetCounterOuterPercentageAndInnerPercentage;
        }
        return updatedCounter;
      });
    }, intervalMs);

    const incrementPerStep10 = targetCounter10 / totalSteps;

    const counterInterval10 = setInterval(() => {
      setCounter10((prevCounter) => {
        const updatedCounter = prevCounter + incrementPerStep10;
        if (updatedCounter >= targetCounter10) {
          clearInterval(counterInterval10);
          return targetCounter10;
        }
        return updatedCounter;
      });
    }, intervalMs);

    const incrementPerStep11 = targetCounter11 / totalSteps;

    const counterInterval11 = setInterval(() => {
      setCounter11((prevCounter) => {
        const updatedCounter = prevCounter + incrementPerStep11;
        if (updatedCounter >= targetCounter11) {
          clearInterval(counterInterval11);
          return targetCounter11;
        }
        return updatedCounter;
      });
    }, intervalMs);

    const incrementSixth = targetPercentageSixth / (2000 / (1000 / 60));
    const intervalSixth = setInterval(() => {
      setSixthPercentage((prevPercentage) => {
        const updatedPercentage = prevPercentage + incrementSixth;
        if (updatedPercentage >= targetPercentageSixth) {
          clearInterval(intervalSixth);
          return targetPercentageSixth;
        }
        return updatedPercentage;
      });
    }, 1000 / 60);

    const incrementSeventh = targetPercentageSeventh / (2000 / (1000 / 60));
    const intervalSeventh = setInterval(() => {
      setSeventhPercentage((prevPercentage) => {
        const updatedPercentage = prevPercentage + incrementSeventh;
        if (updatedPercentage >= targetPercentageSeventh) {
          clearInterval(intervalSeventh);
          return targetPercentageSeventh;
        }
        return updatedPercentage;
      });
    }, 1000 / 60);

    const incrementPerStep12 = targetCounter12 / totalSteps;

    const counterInterval12 = setInterval(() => {
      setCounter12((prevCounter) => {
        const updatedCounter = prevCounter + incrementPerStep12;
        if (updatedCounter >= targetCounter12) {
          clearInterval(counterInterval12);
          return targetCounter12;
        }
        return updatedCounter;
      });
    }, intervalMs);

    const incrementPerStep13 = targetCounter13 / totalSteps;

    const counterInterval13 = setInterval(() => {
      setCounter13((prevCounter) => {
        const updatedCounter = prevCounter + incrementPerStep13;
        if (updatedCounter >= targetCounter13) {
          clearInterval(counterInterval13);
          return targetCounter13;
        }
        return updatedCounter;
      });
    }, intervalMs);

    const incrementEighth = targetPercentageEighth / (2000 / (1000 / 60));

    const intervalEighth = setInterval(() => {
      setEighthPercentage((prevPercentage) => {
        const updatedPercentage = prevPercentage + incrementEighth;
        if (updatedPercentage >= targetPercentageEighth) {
          clearInterval(intervalEighth);
          return targetPercentageEighth;
        }
        return updatedPercentage;
      });
    }, 1000 / 60);

    const incrementNinth = targetPercentageNinth / (2000 / (1000 / 60));

    const intervalNinth = setInterval(() => {
      setNinthPercentage((prevPercentage) => {
        const updatedPercentage = prevPercentage + incrementNinth;
        if (updatedPercentage >= targetPercentageNinth) {
          clearInterval(intervalNinth);
          return targetPercentageNinth;
        }
        return updatedPercentage;
      });
    }, 1000 / 60);

    const increments = targetHeights.map(
      (targetHeight) => targetHeight / totalFrames
    );

    const intervalBars1 = setInterval(() => {
      setAnimatedHeights((prevHeights) =>
        prevHeights.map((prevHeight, index) =>
          Math.min(prevHeight + increments[index], targetHeights[index])
        )
      );
    }, frameRate);

    // Counter animation setup

    const incrementPerStepRead = targetCounterRead / totalSteps;

    const counterIntervalRead = setInterval(() => {
      setCounterRead((prevCounter) => {
        const updatedCounter = prevCounter + incrementPerStepRead;
        if (updatedCounter >= targetCounterRead) {
          clearInterval(counterIntervalRead);
          return targetCounterRead; // Ensure counterRead does not exceed targetCounterRead
        }
        return updatedCounter;
      });
    }, intervalMs);

    const incrementPerStepUnread = targetCounterUnread / totalSteps;

    const counterIntervalUnread = setInterval(() => {
      setCounterUnread((prevCounter) => {
        const updatedCounter = prevCounter + incrementPerStepUnread;
        if (updatedCounter >= targetCounterUnread) {
          clearInterval(counterIntervalUnread);
          return targetCounterUnread;
        }
        return updatedCounter;
      });
    }, intervalMs);

    // Cleanup the intervals on component unmount
    return () => {
      clearInterval(intervalFirst);
      clearInterval(intervalSecond);
      clearInterval(counterIntervalRead);
      clearInterval(counterIntervalUnread);
      clearInterval(intervalThird);
      clearInterval(intervalSegments);
      clearInterval(counterInterval1);
      clearInterval(counterInterval2);
      clearInterval(intervalBars1);
      clearInterval(intervalFourth);
      clearInterval(intervalFifth);
      clearInterval(counterInterval3);
      clearInterval(counterIntervalCalendarAppointmentsTotal);
      clearInterval(counterInterval4);
      clearInterval(intervalBars2);
      clearInterval(counterInterval5);
      clearInterval(counterInterval6);
      clearInterval(counterInterval7);
      clearInterval(intervalOuterPercentage);
      clearInterval(intervalInnerPercentage);
      clearInterval(counterIntervalNewCustomersPerMonth);
      clearInterval(counterIntervalTotalActiveCustomers);
      clearInterval(counterIntervalOuterPercentageAndInnerPercentage);
      clearInterval(counterInterval10);
      clearInterval(counterInterval11);
      clearInterval(intervalSixth);
      clearInterval(intervalSeventh);
      clearInterval(counterInterval12);
      clearInterval(counterInterval13);
      clearInterval(intervalEighth);
      clearInterval(intervalNinth);
    };
  }, []);

  return (
    <Layout
      hHeading="Dashboard"
      Childrens={
        <div className="relative px-[17px]  flex-1 flex flex-col h-full bg-cultured overflow-y-auto pt-[10px] ">
          <SearchBox onSearch={() => ""} Component="Dashboard" />
          <div className="mt-[20px] grid grid-cols-3 gap-4 ">
            <DashboardCard
              className="h-[107px] rounded-3xl w-[107px] md:h-[440px] md:w-[440px] bg-limeGreen border border-palatinatePurple "
              children={
                <div className="h-full px-[10px] py-[10px] ">
                  <div className="relative h-full flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between">
                        <h5 className="text-[10px] md:text-[30px] font-bold text-btnBlack">
                          Inbox
                        </h5>
                        <span>
                          <svg
                            viewBox="0 0 11 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[11px] h-[7px]  md:w-[40px] md:h-[25px] ">
                            <path
                              d="M10.2 4.0932C10.2 4.29335 10.0999 4.39343 9.89995 4.49351L6.29995 6.59514C6.19995 6.69522 6.09995 6.69522 5.99995 6.69522C5.79995 6.69522 5.59995 6.59514 5.49995 6.39499C5.29995 6.09475 5.39995 5.79452 5.69995 5.59436L7.59995 4.49351H1.29995C0.99995 4.49351 0.699951 4.19328 0.699951 3.89304C0.699951 3.59281 0.99995 3.29258 1.29995 3.29258H7.59995L5.39995 1.99157C5.09995 1.79141 4.99995 1.49118 5.19995 1.19095C5.39995 0.890716 5.69995 0.790634 5.99995 0.990789L9.79995 3.29258C9.99995 3.39266 10.1 3.59281 10.1 3.69289C10.1 3.79297 10.1 3.79297 10.1 3.89304C10.2 3.99312 10.2 4.0932 10.2 4.0932Z"
                              fill="#6D6D6D"
                            />
                          </svg>
                        </span>
                      </div>
                      <h5 className="text-[10px] md:text-[30px]  text-darkSilverColor ">
                        Total Messages
                      </h5>
                    </div>

                    <div style={dashboardInboxTwoSemiCirclesComponentStyle}>
                      <TwoSemiCircles
                        percentage1={firstPercentage}
                        percentage2={secondPercentage}
                      />
                    </div>

                    <div
                      style={
                        dashboardInboxTotalMessagesTitleTextValue
                      }>{`${Math.round(counter1)}`}</div>

                    <div>
                      <div className="flex justify-between">
                        <div className="flex">
                          <div className="h-[5px]  mr-[4px] w-[5px] md:h-[25px] md:w-[25px] rounded-lg bg-blackOlive " />
                          <h5 className="text-[6px]  md:text-[24px]    text-btnBlack">
                            Read
                          </h5>
                        </div>
                        <h5 className="text-[6px] md:text-[24px]  text-btnBlack">
                          50
                        </h5>
                      </div>
                      <div className="h-[0.5px] mb-[2px] w-full bg-darkSilverColor" />
                      <div className="flex justify-between ">
                        <div className="flex">
                          <div className="h-[5px] mr-[4px] w-[5px] md:h-[25px] md:w-[25px] bg-darkSilverColor rounded-lg" />
                          <h5 className="text-[6px] md:text-[24px]  text-btnBlack">
                            Unread
                          </h5>
                        </div>
                        <h5 className="text-[6px]  md:text-[24px] text-btnBlack">
                          7
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
            <DashboardCard
              className="h-[107px] rounded-3xl w-[107px]  md:h-[440px] md:w-[440px] bg-chinesWhite border border-palatinatePurple "
              children={
                <div className="h-full flex flex-col justify-between px-[10px] py-[10px]">
                  <div>
                    <div className="flex justify-between">
                      <h5 className="text-[10px] md:text-[30px] font-bold text-btnBlack">
                        Marketing
                      </h5>
                      <span>
                        <svg
                          viewBox="0 0 11 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[11px] h-[7px]  md:w-[40px] md:h-[25px] ">
                          <path
                            d="M10.2 4.0932C10.2 4.29335 10.0999 4.39343 9.89995 4.49351L6.29995 6.59514C6.19995 6.69522 6.09995 6.69522 5.99995 6.69522C5.79995 6.69522 5.59995 6.59514 5.49995 6.39499C5.29995 6.09475 5.39995 5.79452 5.69995 5.59436L7.59995 4.49351H1.29995C0.99995 4.49351 0.699951 4.19328 0.699951 3.89304C0.699951 3.59281 0.99995 3.29258 1.29995 3.29258H7.59995L5.39995 1.99157C5.09995 1.79141 4.99995 1.49118 5.19995 1.19095C5.39995 0.890716 5.69995 0.790634 5.99995 0.990789L9.79995 3.29258C9.99995 3.39266 10.1 3.59281 10.1 3.69289C10.1 3.79297 10.1 3.79297 10.1 3.89304C10.2 3.99312 10.2 4.0932 10.2 4.0932Z"
                            fill="#6D6D6D"
                          />
                        </svg>
                      </span>
                    </div>
                    <div className="flex justify-around mt-[4px]">
                      <div className="text-center">
                        <h5 className="text-[6px] md:text-[26px] text-btnBlack">
                          New <br />
                          Opportunities
                        </h5>
                        <h5 className="text-[10px] md:text-[26px] text-palatinatePurple font-bold">
                          456
                        </h5>
                      </div>
                      <div className="text-center">
                        <h5 className="text-[6px] md:text-[26px] text-btnBlack">
                          New <br />
                          Opportunities
                        </h5>
                        <h5 className="text-[10px] md:text-[26px] text-palatinatePurple font-bold">
                          456
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="relative flex mb-2 justify-around items-center">
                    <div className="">
                      <Circle
                        outerPercentage={thirdPercentage}
                        innerPercentage={thirdPercentage}
                      />
                    </div>
                    <div
                      style={
                        dashboardTotalReviewsTitleTextValue
                      }>{`${Math.round(counter2)}%`}</div>
                    <div>
                      <div className="flex">
                        <div className="h-[5px] mr-[4px] w-[5px] md:w-[28px] md:h-[28px] bg-palatinatePurple rounded-full" />
                        <h5 className="text-[6px] md:text-[22px]  text-btnBlack">
                          Open Rate
                        </h5>
                      </div>
                      <div className="flex">
                        <div className="h-[5px] mr-[4px] w-[5px] md:w-[28px] md:h-[28px] bg-limeGreen rounded-full" />

                        <h5 className="text-[6px] md:text-[22px]  text-btnBlack">
                          Replies
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
            <DashboardCard
              className="h-[107px] rounded-3xl w-[107px] md:h-[440px] md:w-[440px] bg-grayX11 border border-palatinatePurple "
              children={
                <div className="relative h-full flex flex-col justify-between px-[10px] py-[10px]">
                  <div>
                    <div className="flex justify-between">
                      <div className="text-[10px] md:text-[30px] leading-tight font-bold text-btnBlack">
                        Reviews
                      </div>
                      <span>
                        <svg
                          viewBox="0 0 11 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[11px] h-[7px] leading-tight md:w-[40px] md:h-[25px] ">
                          <path
                            d="M10.2 4.0932C10.2 4.29335 10.0999 4.39343 9.89995 4.49351L6.29995 6.59514C6.19995 6.69522 6.09995 6.69522 5.99995 6.69522C5.79995 6.69522 5.59995 6.59514 5.49995 6.39499C5.29995 6.09475 5.39995 5.79452 5.69995 5.59436L7.59995 4.49351H1.29995C0.99995 4.49351 0.699951 4.19328 0.699951 3.89304C0.699951 3.59281 0.99995 3.29258 1.29995 3.29258H7.59995L5.39995 1.99157C5.09995 1.79141 4.99995 1.49118 5.19995 1.19095C5.39995 0.890716 5.69995 0.790634 5.99995 0.990789L9.79995 3.29258C9.99995 3.39266 10.1 3.59281 10.1 3.69289C10.1 3.79297 10.1 3.79297 10.1 3.89304C10.2 3.99312 10.2 4.0932 10.2 4.0932Z"
                            fill="#6D6D6D"
                          />
                        </svg>
                      </span>
                    </div>
                    <h5 className="text-[10px] md:text-[30px] leading-[0.5rem] lg:leading-5 text-darkSilverColor ">
                      Total Reviews
                    </h5>
                  </div>
                  <div className="relative">
                    <div className="flex justify-center">
                      <CircularChart segments={segments} />
                    </div>
                    <div
                      style={
                        dashboardTotalReviewsTitleTextValue2
                      }>{`${Math.round(counter3)}`}</div>
                  </div>

                  <div className="flex justify-around">
                    <div className="flex flex-col items-center">
                      <div className="h-[5px]  w-[5px] md:w-[24px] md:h-[24px] bg-white rounded-full" />
                      <div className="text-btnBlack text-[6px] md:text-[23px]">
                        1
                      </div>
                      <div className="text-btnBlack text-[6px] md:text-[23px] leading-[1px] ">
                        Star
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-[5px]  w-[5px] md:w-[24px] md:h-[24px] bg-palatinatePurple rounded-full" />
                      <h5 className="text-btnBlack text-[6px] md:text-[23px]">
                        2
                      </h5>
                      <h5 className="text-btnBlack text-[6px] md:text-[23px] leading-[1px]  ">
                        Star
                      </h5>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-[5px]  w-[5px] md:w-[24px] md:h-[24px] bg-limeGreen rounded-full" />
                      <div className="text-btnBlack text-[6px] md:text-[23px]">
                        3
                      </div>
                      <div className="text-btnBlack text-[6px] md:text-[23px] leading-[1px]">
                        Star
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-[5px] w-[5px] md:w-[24px] md:h-[24px] bg-btnBlack rounded-full" />
                      <div className="text-btnBlack text-[6px] md:text-[23px]">
                        4
                      </div>
                      <div className="text-btnBlack text-[6px] md:text-[23px]  leading-[1px] ">
                        Star
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="h-[5px]  w-[5px] md:w-[24px] md:h-[24px] bg-btnBlack rounded-full" />
                      <div className="text-btnBlack text-[6px] md:text-[23px]">
                        5
                      </div>
                      <div className="text-btnBlack text-[6px] md:text-[23px] leading-[1px] ">
                        Star
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
            <DashboardCard
              className="h-[107px]  md:h-[440px] md:w-[440px] rounded-3xl w-[107px] bg-chinesWhite border border-palatinatePurple "
              children={
                <div className="h-full flex flex-col px-[10px] py-[10px]">
                  <div>
                    <div className="flex justify-between">
                      <h5 className="text-[10px] md:text-[30px] font-bold text-btnBlack">
                        SEO
                      </h5>
                      <span>
                        <svg
                          className="w-[11px] h-[7px]  md:w-[40px] md:h-[25px] "
                          viewBox="0 0 11 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10.2 4.0932C10.2 4.29335 10.0999 4.39343 9.89995 4.49351L6.29995 6.59514C6.19995 6.69522 6.09995 6.69522 5.99995 6.69522C5.79995 6.69522 5.59995 6.59514 5.49995 6.39499C5.29995 6.09475 5.39995 5.79452 5.69995 5.59436L7.59995 4.49351H1.29995C0.99995 4.49351 0.699951 4.19328 0.699951 3.89304C0.699951 3.59281 0.99995 3.29258 1.29995 3.29258H7.59995L5.39995 1.99157C5.09995 1.79141 4.99995 1.49118 5.19995 1.19095C5.39995 0.890716 5.69995 0.790634 5.99995 0.990789L9.79995 3.29258C9.99995 3.39266 10.1 3.59281 10.1 3.69289C10.1 3.79297 10.1 3.79297 10.1 3.89304C10.2 3.99312 10.2 4.0932 10.2 4.0932Z"
                            fill="#6D6D6D"
                          />
                        </svg>
                      </span>
                    </div>
                    <h5 className="text-[10px]  md:text-[30px]   text-darkSilverColor ">
                      Ranking Report
                    </h5>
                  </div>
                  <div className="flex  justify-center ">
                    <button className="py-[] px-[6px]  md:text-[20px] bg-palatinatePurple text-[6px] text-[#f4f4f4] rounded-lg">
                      Target Keyword
                    </button>
                  </div>
                  <div className="flex justify-center relative">
                    <div className="h-[55px] md:w-full overflow-hidden md:h-[95%]">
                      <Map location={location} />
                    </div>
                    {/* <Image src={BackgroundMap} alt="" className="h-[55px] md:w-full md:h-[95%]" /> */}
                    <div className="absolute grid grid-cols-5 gap-[1px]  w-[73px] md:w-full">
                      <div className="w-[10px] h-[10px] md:w-[60px] md:h-[60px] md:text-[30px] flex justify-center items-center rounded-full bg-[#CF232A] text-[4px] text-white">
                        11
                      </div>
                      <div className="w-[10px] h-[10px] md:w-[60px] md:h-[60px] md:text-[30px] flex justify-center items-center rounded-full bg-[#CF232A] text-[4px] text-white">
                        13
                      </div>
                      <div className="w-[10px] h-[10px] md:w-[60px] md:h-[60px] md:text-[30px] flex justify-center items-center rounded-full bg-[#CF232A] text-[4px] text-white">
                        13
                      </div>
                      <div className="w-[10px] h-[10px] md:w-[60px] md:h-[60px] md:text-[30px] flex justify-center items-center rounded-full bg-[#00914C] text-[4px] text-white">
                        1
                      </div>
                      <div className="w-[10px] h-[10px] md:w-[60px] md:h-[60px] md:text-[30px] flex justify-center items-center rounded-full bg-[#00914C] text-[4px] text-white">
                        3
                      </div>
                      <div className="w-[10px] h-[10px] md:w-[60px] md:h-[60px] md:text-[30px] flex justify-center items-center rounded-full bg-[#CF232A] text-[4px] text-white">
                        9
                      </div>
                      <div className="w-[10px] h-[10px] md:w-[60px] md:h-[60px] md:text-[30px] flex justify-center items-center rounded-full bg-[#CF232A] text-[4px] text-white">
                        7
                      </div>
                      <div className="w-[10px] h-[10px] md:w-[60px] md:h-[60px] md:text-[30px] flex justify-center items-center rounded-full bg-[#CF232A] text-[4px] text-white">
                        7
                      </div>
                      <div className="w-[10px] h-[10px] md:w-[60px] md:h-[60px] md:text-[30px] flex justify-center items-center rounded-full bg-[#CF232A] text-[4px] text-white">
                        6
                      </div>
                      <div className="w-[10px] h-[10px] md:w-[60px] md:h-[60px] md:text-[30px] flex justify-center items-center rounded-full bg-[#00914C] text-[4px] text-white">
                        1
                      </div>
                      <div className="w-[10px] h-[10px] md:w-[60px] md:h-[60px] md:text-[30px] flex justify-center items-center rounded-full bg-[#CF232A] text-[4px] text-white">
                        1
                      </div>
                      <div className="w-[10px] h-[10px] md:w-[60px] md:h-[60px] md:text-[30px] flex justify-center items-center rounded-full bg-[#CF232A] text-[4px] text-white">
                        10
                      </div>
                      <div className="w-[10px] h-[10px] md:w-[60px] md:h-[60px] md:text-[30px] flex justify-center items-center rounded-full bg-[#00914C] text-[4px] text-white">
                        1
                      </div>
                      <div className="w-[10px] h-[10px] md:w-[60px] md:h-[60px] md:text-[30px] flex justify-center items-center rounded-full bg-[#00914C] text-[4px] text-white">
                        1
                      </div>
                      <div className="w-[10px] h-[10px] md:w-[60px] md:h-[60px] md:text-[30px] flex justify-center items-center rounded-full bg-[#00914C] text-[4px] text-white">
                        2
                      </div>
                      <div className="w-[10px] h-[10px] md:w-[60px] md:h-[60px] md:text-[30px] flex justify-center items-center rounded-full bg-[#00914C] text-[4px] text-white">
                        2
                      </div>

                      <div className="w-[10px] h-[10px] md:w-[60px] md:h-[60px] md:text-[30px] flex justify-center items-center rounded-full bg-[#00914C] text-[4px] text-white">
                        8
                      </div>
                      <div className="w-[10px] h-[10px] md:w-[60px] md:h-[60px] md:text-[30px] flex justify-center items-center rounded-full bg-[#00914C] text-[4px] text-white">
                        2
                      </div>
                      <div className="w-[10px] h-[10px] md:w-[60px] md:h-[60px] md:text-[30px] flex justify-center items-center rounded-full bg-[#00914C] text-[4px] text-white">
                        1
                      </div>

                      <div className="w-[10px] h-[10px] md:w-[60px] md:h-[60px] md:text-[30px] flex justify-center items-center rounded-full bg-[#00914C] text-[4px] text-white">
                        1
                      </div>
                      <div className="w-[10px] h-[10px] md:w-[60px] md:h-[60px] md:text-[30px] flex justify-center items-center rounded-full bg-[#00914C] text-[4px] text-white">
                        3
                      </div>
                      <div className="w-[10px] h-[10px] md:w-[60px] md:h-[60px] md:text-[30px] flex justify-center items-center rounded-full bg-[#CF232A] text-[4px] text-white">
                        6
                      </div>
                      <div className="w-[10px] h-[10px] md:w-[60px] md:h-[60px] md:text-[30px] flex justify-center items-center rounded-full bg-[#CF232A] text-[4px] text-white">
                        10
                      </div>
                      <div className="w-[10px] h-[10px] md:w-[60px] md:h-[60px] md:text-[30px] flex justify-center items-center rounded-full bg-[#CF232A] text-[4px] text-white">
                        11
                      </div>
                      <div className="w-[10px] h-[10px] md:w-[60px] md:h-[60px] md:text-[30px]  flex justify-center items-center rounded-full bg-[#00914C] text-[4px] text-white">
                        4
                      </div>
                    </div>
                  </div>
                </div>
              }
            />

            <DashboardCard
              className="h-[107px] rounded-3xl w-[107px] md:h-[440px] md:w-[440px] bg-grayX11 border border-palatinatePurple "
              children={
                <div className="h-full flex flex-col  px-[10px] py-[10px]">
                  <div>
                    <div className="flex justify-between">
                      <h5 className="text-[10px] md:text-[30px] font-bold text-btnBlack">
                        Calendar
                      </h5>
                      <span>
                        <svg
                          className="w-[11px] h-[7px]  md:w-[40px] md:h-[25px] "
                          viewBox="0 0 11 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10.2 4.0932C10.2 4.29335 10.0999 4.39343 9.89995 4.49351L6.29995 6.59514C6.19995 6.69522 6.09995 6.69522 5.99995 6.69522C5.79995 6.69522 5.59995 6.59514 5.49995 6.39499C5.29995 6.09475 5.39995 5.79452 5.69995 5.59436L7.59995 4.49351H1.29995C0.99995 4.49351 0.699951 4.19328 0.699951 3.89304C0.699951 3.59281 0.99995 3.29258 1.29995 3.29258H7.59995L5.39995 1.99157C5.09995 1.79141 4.99995 1.49118 5.19995 1.19095C5.39995 0.890716 5.69995 0.790634 5.99995 0.990789L9.79995 3.29258C9.99995 3.39266 10.1 3.59281 10.1 3.69289C10.1 3.79297 10.1 3.79297 10.1 3.89304C10.2 3.99312 10.2 4.0932 10.2 4.0932Z"
                            fill="#6D6D6D"
                          />
                        </svg>
                      </span>
                    </div>
                    <h5 className="text-[10px] md:text-[30px]  text-darkSilverColor ">
                      Appointments{" "}
                    </h5>
                    <div className="text-center">
                      <h5 className="text-[10px] md:text-[60px] text-palatinatePurple font-bold">
                        <div>{`${Math.round(
                          counterCalendarAppointmentsTotal
                        )}`}</div>
                      </h5>
                    </div>
                  </div>
                  <div className="relative flex mb-4 justify-between">
                    <div
                      style={
                        dashboardCalendarAppointmentsDonutChartComponent1Style
                      }>
                      <DonutChart
                        percentage={fourthPercentage}
                        showSecondaryCircle={false}
                      />
                      <h5 className="text-[6px]  md:text-[24px]  text-btnBlack">
                        Today
                      </h5>
                    </div>
                    <div
                      style={
                        dashboardCalendarAppointmentsTodayTextValue
                      }>{`${Math.round(counter3)}`}</div>
                    <div
                      style={
                        dashboardCalendarAppointmentsDonutChartComponent2Style
                      }>
                      <DonutChart
                        percentage={fifthPercentage}
                        showSecondaryCircle={false}
                      />
                      <h5 className="text-[6px] md:text-[24px]  text-btnBlack">
                        Tomorrow
                      </h5>
                    </div>

                    <div
                      style={
                        dashboardCalendarAppointmentsTomorrowTextValue
                      }>{`${Math.round(counter4)}`}</div>
                  </div>
                </div>
              }
            />

            <DashboardCard
              className="h-[107px] rounded-3xl w-[107px] md:h-[440px] md:w-[440px] bg-chinesWhite border border-palatinatePurple "
              children={
                <div className="relative h-full px-[10px] py-[10px]">
                  <div className="flex justify-between">
                    <div style={dashboardPaymentTitleText}>Payment</div>
                    <svg
                      width="11"
                      height="7"
                      viewBox="0 0 11 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M10.3999 4.18487C10.3999 4.38502 10.2999 4.48511 10.0999 4.58519L6.49991 6.68681C6.39991 6.78688 6.29989 6.78689 6.19989 6.78689C5.99989 6.78689 5.79989 6.68681 5.69989 6.48665C5.49989 6.18642 5.5999 5.88619 5.8999 5.68603L7.7999 4.58519H1.49991C1.19991 4.58519 0.899902 4.28495 0.899902 3.98471C0.899902 3.68448 1.19991 3.38424 1.49991 3.38424H7.7999L5.59988 2.08324C5.29988 1.88309 5.1999 1.58285 5.3999 1.28262C5.5999 0.982385 5.89989 0.882311 6.19989 1.08247L9.99991 3.38424C10.1999 3.48432 10.2999 3.68448 10.2999 3.78456C10.2999 3.88464 10.2999 3.88464 10.2999 3.98471C10.3999 4.08479 10.3999 4.08479 10.3999 4.18487Z"
                        fill="#6D6D6D"
                      />
                    </svg>
                  </div>
                  <div style={dashboardPaymentTotalPerMonthTitleText}>
                    Total Per Month
                  </div>
                  <div style={dashboardPaymentTotalPerMonthTextValue}>
                    $1,200/June
                  </div>
                  <div className="relative -top-3 md:flex md:w-full md:justify-around">
                    <div
                      className="md:mt-28 md:mr-3"
                      style={dashboardPaymentMonth1TextValue}>{`${Math.round(
                      counter5
                    )}`}</div>
                    <div
                      className="md:mt-28 md:mr-3"
                      style={dashboardPaymentMonth2TextValue}>{`${Math.round(
                      counter6
                    )}`}</div>
                    <div
                      className="md:mt-28 md:mr-3"
                      style={dashboardPaymentMonth3TextValue}>{`${Math.round(
                      counter7
                    )}`}</div>
                    <div
                      className="md:mt-28 md:mr-3"
                      style={dashboardPaymentMonth3TextValue}>{``}</div>
                    <div
                      className="md:mt-28 md:mr-3"
                      style={dashboardPaymentMonth3TextValue}>{``}</div>

                    <div
                      className="md:w-full"
                      style={dashboardPaymentBarChart1Style}>
                      <BarChart1
                        innerBarHeight1={innerBarHeight1}
                        innerBarHeight2={innerBarHeight2}
                        innerBarHeight3={innerBarHeight3}
                      />
                    </div>
                    <div className="absolute md:flex md:justify-around md:w-full -bottom-[14px] md:bottom-0 md:top-[280px] md:text-[22px] md:mt-2">
                      <div style={dashboardPaymentMonth1Text}>Apr</div>
                      <div style={dashboardPaymentMonth2Text}>May</div>
                      <div style={dashboardPaymentMonth3Text}>Jun</div>
                      <div style={dashboardPaymentMonth4Text}>Jul</div>
                      <div style={dashboardPaymentMonth5Text}>Aug</div>
                    </div>
                  </div>
                  {/* <div>
                    <div className="flex justify-between">
                      <h5 className="text-[10px] font-bold text-btnBlack">
                        Payments
                      </h5>
                      <span>
                        <svg
                          width="11"
                          height="7"
                          viewBox="0 0 11 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.2 4.0932C10.2 4.29335 10.0999 4.39343 9.89995 4.49351L6.29995 6.59514C6.19995 6.69522 6.09995 6.69522 5.99995 6.69522C5.79995 6.69522 5.59995 6.59514 5.49995 6.39499C5.29995 6.09475 5.39995 5.79452 5.69995 5.59436L7.59995 4.49351H1.29995C0.99995 4.49351 0.699951 4.19328 0.699951 3.89304C0.699951 3.59281 0.99995 3.29258 1.29995 3.29258H7.59995L5.39995 1.99157C5.09995 1.79141 4.99995 1.49118 5.19995 1.19095C5.39995 0.890716 5.69995 0.790634 5.99995 0.990789L9.79995 3.29258C9.99995 3.39266 10.1 3.59281 10.1 3.69289C10.1 3.79297 10.1 3.79297 10.1 3.89304C10.2 3.99312 10.2 4.0932 10.2 4.0932Z"
                            fill="#6D6D6D"
                          />
                        </svg>
                      </span>
                    </div>
                    <h5 className="text-[10px]  text-darkSilverColor ">
                      Total Per Month{" "}
                    </h5>
                    <h5 className="text-[10px] text-limeGreen font-bold">
                      $1,200/June
                    </h5>
                  </div>
                  <div className="flex justify-around">
                    <h5 className="text-[6px] flex flex-col items-center text-darkSilverColor">
                      <span><svg width="3" height="34" viewBox="0 0 3 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 33.9468C0.7 33.9468 0 33.2462 0 32.4456V1.92191C0 1.12129 0.7 0.420746 1.5 0.420746C2.3 0.420746 3 1.12129 3 1.92191V32.4456C2.9 33.2462 2.3 33.9468 1.5 33.9468Z" fill="#27272D" />
                        <path d="M1.5 33.9468C0.7 33.9468 0 33.2462 0 32.4456V20.7365C0 19.9359 0.7 19.2354 1.5 19.2354C2.3 19.2354 3 19.9359 3 20.7365V32.4456C2.9 33.2462 2.3 33.9468 1.5 33.9468Z" fill="#8C8C8C" />
                      </svg>

                      </span>
                      Apr</h5>
                    <h5 className="text-[6px] flex flex-col items-center text-darkSilverColor">
                      <span><svg width="3" height="34" viewBox="0 0 3 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 33.9468C0.7 33.9468 0 33.2462 0 32.4456V1.92191C0 1.12129 0.7 0.420746 1.5 0.420746C2.3 0.420746 3 1.12129 3 1.92191V32.4456C3 33.2462 2.3 33.9468 1.5 33.9468Z" fill="#27272D" />
                        <path d="M1.5 33.9468C0.7 33.9468 0 33.2462 0 32.4456V9.12754C0 8.32692 0.7 7.62637 1.5 7.62637C2.3 7.62637 3 8.32692 3 9.12754V32.4456C3 33.2462 2.3 33.9468 1.5 33.9468Z" fill="#8C8C8C" />
                      </svg>
                      </span>
                      May</h5>
                    <h5 className="text-[6px] flex flex-col items-center  text-darkSilverColor">
                      <span>
                        <svg width="4" height="34" viewBox="0 0 4 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.59998 33.9468C0.799976 33.9468 0.0999756 33.2462 0.0999756 32.4456V1.92191C0.0999756 1.12129 0.799976 0.420746 1.59998 0.420746C2.39998 0.420746 3.09998 1.12129 3.09998 1.92191V32.4456C3.09998 33.2462 2.39998 33.9468 1.59998 33.9468Z" fill="#27272D" />
                          <path d="M1.5 33.9468C0.7 33.9468 0 33.2462 0 32.4456V4.82416C0 4.02354 0.7 3.323 1.5 3.323C2.3 3.323 3 4.02354 3 4.82416V32.4456C3 33.2462 2.3 33.9468 1.5 33.9468Z" fill="#40F440" />
                        </svg>

                      </span>
                      Jun</h5>
                    <h5 className="text-[6px] flex flex-col items-center text-darkSilverColor">
                      <span>
                        <svg width="4" height="34" viewBox="0 0 4 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.59998 33.9468C0.799976 33.9468 0.0999756 33.2462 0.0999756 32.4456V1.92191C0.0999756 1.12129 0.799976 0.420746 1.59998 0.420746C2.39998 0.420746 3.09998 1.12129 3.09998 1.92191V32.4456C3.09998 33.2462 2.39998 33.9468 1.59998 33.9468Z" fill="#27272D" />
                        </svg>

                      </span>
                      Jul</h5>
                    <h5 className="text-[6px] flex flex-col items-center text-darkSilverColor">
                      <span><svg width="4" height="34" viewBox="0 0 4 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.59998 33.9468C0.799976 33.9468 0.0999756 33.2462 0.0999756 32.4456V1.92191C0.0999756 1.12129 0.799976 0.420746 1.59998 0.420746C2.39998 0.420746 3.09998 1.12129 3.09998 1.92191V32.4456C3.09998 33.2462 2.39998 33.9468 1.59998 33.9468Z" fill="#27272D" />
                      </svg>
                      </span>
                      Aug</h5>
                  </div> */}
                </div>
              }
            />

            <DashboardCard
              className="h-[107px] rounded-3xl w-[107px] md:h-[440px] md:w-[440px] bg-grayX11 border border-palatinatePurple "
              children={
                <div className="h-full flex flex-col justify-between px-[10px] py-[10px]">
                  <div>
                    <h5 className="text-[10px] md:text-[30px] font-bold text-btnBlack">
                      Reports
                    </h5>

                    <div className="mt-[6px]">
                      <div className="flex">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 5 5"
                            className="w-[5px] h-[5px] md:h-[40px] md:w-[40px]"
                            fill="none">
                            <path
                              d="M2.59998 4.48989C3.70455 4.48989 4.59998 3.59377 4.59998 2.48834C4.59998 1.38291 3.70455 0.486786 2.59998 0.486786C1.49541 0.486786 0.599976 1.38291 0.599976 2.48834C0.599976 3.59377 1.49541 4.48989 2.59998 4.48989Z"
                              fill="url(#paint0_linear_1_401)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_1_401"
                                x1="0.600376"
                                y1="2.45611"
                                x2="4.53468"
                                y2="2.45611"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#64C08A" />
                                <stop offset="0.5" stop-color="#00A550" />
                                <stop offset="1" stop-color="#00914C" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                        <h5 className="ml-[3px] text-[6px] md:text-[24px] font-bold text-darkSilverColor">
                          Good
                        </h5>
                      </div>

                      <div className="flex">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[5px] h-[5px] md:h-[40px] md:w-[40px]"
                            viewBox="0 0 5 5"
                            fill="none">
                            <path
                              d="M2.59998 4.79635C3.70455 4.79635 4.59998 3.90022 4.59998 2.7948C4.59998 1.68937 3.70455 0.793243 2.59998 0.793243C1.49541 0.793243 0.599976 1.68937 0.599976 2.7948C0.599976 3.90022 1.49541 4.79635 2.59998 4.79635Z"
                              fill="url(#paint0_linear_1_400)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_1_400"
                                x1="0.600376"
                                y1="2.77568"
                                x2="4.53468"
                                y2="2.77568"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FFE7A3" />
                                <stop offset="0.5" stop-color="#FFCA05" />
                                <stop offset="1" stop-color="#FAAC18" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                        <h5 className="ml-[3px] text-[6px] md:text-[24px] font-bold text-darkSilverColor">
                          Incorrect
                        </h5>
                      </div>
                      <div className="flex">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[5px] h-[5px] md:h-[40px] md:w-[40px]"
                            viewBox="0 0 5 4"
                            fill="none">
                            <path
                              d="M2.59998 4.00347C3.70455 4.00347 4.59998 3.10735 4.59998 2.00192C4.59998 0.896492 3.70455 0.000366211 2.59998 0.000366211C1.49541 0.000366211 0.599976 0.896492 0.599976 2.00192C0.599976 3.10735 1.49541 4.00347 2.59998 4.00347Z"
                              fill="url(#paint0_linear_1_399)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_1_399"
                                x1="0.600476"
                                y1="2.01003"
                                x2="4.53478"
                                y2="2.01003"
                                gradientUnits="userSpaceOnUse">
                                <stop stop-color="#F37E5F" />
                                <stop offset="0.5" stop-color="#EC1C24" />
                                <stop offset="1" stop-color="#CF232A" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </span>
                        <h5 className="ml-[3px] text-[6px] md:text-[24px] font-bold text-darkSilverColor">
                          Doesn’t exist
                        </h5>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex">
                      <div className="h-2 w-[70%] bg-gradient-to-r from-[#00914C] via-[#00A550] to-[#64C08A] rounded-r-2xl"></div>
                      <h5 className="ml-[3px] text-[6px] md:text-[24px] font-bold text-darkSilverColor">
                        131
                      </h5>
                    </div>
                    <div className="flex">
                      <div className="h-2 w-full bg-gradient-to-r from-[#FAAC18] via-[#FFCA05] to-[#FFE7A3] rounded-r-2xl"></div>
                      <h5 className="ml-[3px]  text-[6px] md:text-[24px] font-bold text-darkSilverColor">
                        180
                      </h5>
                    </div>
                    <div className="flex">
                      <div className="h-2 w-[60%] bg-gradient-to-r from-[#CF232A] via-[#EC1C24] to-[#F37E5F] rounded-r-2xl"></div>
                      <h5 className="ml-[3px] text-[6px] md:text-[24px] font-bold text-darkSilverColor">
                        97
                      </h5>
                    </div>
                  </div>
                </div>
              }
            />

            <DashboardCard
              className="h-[107px] rounded-3xl w-[107px] md:h-[440px] md:w-[440px] bg-chinesWhite border border-palatinatePurple "
              children={
                <div className="h-full flex flex-col justify-between px-[10px] py-[10px]">
                  <div className="md:relative">
                    <div className="flex text-center md:inline-block">
                      <h5 className="text-[9px] md:text-[30px] font-bold text-btnBlack">
                        Internal Messages
                      </h5>
                    </div>

                    <div className="flex justify-end md:inline-block md:absolute md:right-0">
                      <span>
                        <svg
                          width="11"
                          height="7"
                          className="w-[11px] h-[7px]  md:w-[40px] md:h-[25px] "
                          viewBox="0 0 11 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M10.2 4.0932C10.2 4.29335 10.0999 4.39343 9.89995 4.49351L6.29995 6.59514C6.19995 6.69522 6.09995 6.69522 5.99995 6.69522C5.79995 6.69522 5.59995 6.59514 5.49995 6.39499C5.29995 6.09475 5.39995 5.79452 5.69995 5.59436L7.59995 4.49351H1.29995C0.99995 4.49351 0.699951 4.19328 0.699951 3.89304C0.699951 3.59281 0.99995 3.29258 1.29995 3.29258H7.59995L5.39995 1.99157C5.09995 1.79141 4.99995 1.49118 5.19995 1.19095C5.39995 0.890716 5.69995 0.790634 5.99995 0.990789L9.79995 3.29258C9.99995 3.39266 10.1 3.59281 10.1 3.69289C10.1 3.79297 10.1 3.79297 10.1 3.89304C10.2 3.99312 10.2 4.0932 10.2 4.0932Z"
                            fill="#6D6D6D"
                          />
                        </svg>
                      </span>
                    </div>

                    <div className="flex items-center md:mt-[100px]">
                      <span>
                        <svg
                          width="48"
                          height="35"
                          className="w-[48px] h-[35px] md:w-[140px] md:h-[95px] "
                          viewBox="0 0 48 35"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M8.99997 19.3976C8.49997 20.3983 7.39997 21.0989 6.19997 21.0989C4.29997 21.0989 2.89998 19.4977 2.89998 17.4961C2.89998 15.5946 4.39997 13.8933 6.19997 13.8933C7.39997 13.8933 8.49997 14.4938 8.99997 15.5946H11.8C11 13.1928 8.79997 11.5915 6.19997 11.5915C2.89997 11.5915 0.299973 14.2936 0.299973 17.4961C0.299973 20.7987 2.99997 23.4007 6.19997 23.4007C8.79997 23.4007 11.1 21.6994 11.8 19.2975L8.99997 19.3976Z"
                            fill="#6D6D6D"
                          />
                          <path
                            d="M35.2 11.7917H33.1L28.4 23.3006H31.1L31.9 20.9988H36.3L37.1 23.3006H39.8L35.2 11.7917ZM32.7 18.8972L34.2 14.794L35.7 18.8972H32.7Z"
                            fill="#6D6D6D"
                          />
                          <path
                            d="M38.5 11.7917V14.0935H41.8V23.3006H44.3V14.0935H47.6V11.7917H38.5Z"
                            fill="#6D6D6D"
                          />
                          <path
                            d="M13.5 1.68383L27.1 6.58763V29.7056L13.5 34.2091V1.68383ZM22.4 25.0019H26.6V8.88941H22.4V14.6939H18.1V8.88941H13.9V25.0019H18.1V18.597H22.4V25.0019Z"
                            fill="#631363"
                          />
                          <path
                            d="M14 2.38436L26.6 6.98794V8.4891H26.1H22.9H21.9V9.48988V14.2936H18.6V9.48988V8.4891H17.6H14.4H13.9V2.38436M21.9 19.0973V24.5015V25.5023H22.9H26.1H26.6V29.3053L14 33.5085V25.5023H14.5H17.7H18.7V24.5015V19.0973H21.9ZM13 0.983276V34.9096L27.6 30.1059V6.28741L13 0.983276ZM17.6 15.1943H22.9V9.3898H26.1V24.5015H22.9V18.0966H17.6V24.5015H14.4V9.3898H17.6V15.1943Z"
                            fill="#631363"
                          />
                        </svg>
                      </span>

                      <button className="ml-[10px] text-[6px] md:text-[24px] w-[31px] h-[11px] md:h-[46px] md:w-[129px] flex items-center bg-darkSilverColor rounded-lg text-[#f4f4f4] px-[3px] py-[2px]">
                        Online
                        <span className="ml-[4px]">
                          <svg
                            width="5"
                            height="3"
                            className="h-[3px] w-[5px] md:h-[20px] md:w-[75px]"
                            viewBox="0 0 5 3"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M2.19997 2.89876L-3.05176e-05 0.596985H4.39998L2.19997 2.89876Z"
                              fill="#40F440"
                            />
                          </svg>
                        </span>
                      </button>
                    </div>

                    <h5 className="text-[9px] md:text-[30px] text-darkSilverColor">
                      Pending Messages
                    </h5>

                    <h5 className="text-[18px] md:text-[60px] text-limeGreen font-bold">
                      7
                    </h5>
                  </div>
                </div>
              }
            />

            <DashboardCard
              className="h-[107px] rounded-3xl w-[107px] md:h-[440px] md:w-[440px] bg-limeGreen border border-palatinatePurple "
              children={
                <div className="h-full px-[10px] py-[10px] ">
                  <div className="relative h-full flex flex-col">
                    <div>
                      <div className="flex justify-between">
                        <h5 className="text-[10px] md:text-[30px] font-bold text-btnBlack">
                          CRM
                        </h5>
                        <span>
                          <svg
                            width="11"
                            height="7"
                            className="w-[11px] h-[7px]  md:w-[40px] md:h-[25px] "
                            viewBox="0 0 11 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M10.2 4.0932C10.2 4.29335 10.0999 4.39343 9.89995 4.49351L6.29995 6.59514C6.19995 6.69522 6.09995 6.69522 5.99995 6.69522C5.79995 6.69522 5.59995 6.59514 5.49995 6.39499C5.29995 6.09475 5.39995 5.79452 5.69995 5.59436L7.59995 4.49351H1.29995C0.99995 4.49351 0.699951 4.19328 0.699951 3.89304C0.699951 3.59281 0.99995 3.29258 1.29995 3.29258H7.59995L5.39995 1.99157C5.09995 1.79141 4.99995 1.49118 5.19995 1.19095C5.39995 0.890716 5.69995 0.790634 5.99995 0.990789L9.79995 3.29258C9.99995 3.39266 10.1 3.59281 10.1 3.69289C10.1 3.79297 10.1 3.79297 10.1 3.89304C10.2 3.99312 10.2 4.0932 10.2 4.0932Z"
                              fill="#6D6D6D"
                            />
                          </svg>
                        </span>
                      </div>
                    </div>

                    <div className="mt-[12px]">
                      <div className="flex md:items-center">
                        <div className="h-[5px] mr-[4px] w-[5px] md:h-[25px] md:w-[25px] bg-darkSilverColor rounded-full" />
                        <h5 className="text-[6px] md:text-[26px]  text-btnBlack">
                          New Customers Per Month
                        </h5>
                      </div>
                      <div className="flex md:items-center mt-[7px]">
                        <div className="h-[5px] mr-[4px] w-[5px] md:h-[25px] md:w-[25px] bg-blackOlive rounded-full" />

                        <h5 className="text-[6px] md:text-[26px]  text-btnBlack">
                          Total Active Customers
                        </h5>
                      </div>
                    </div>
                    {isMobile ? (
                      // for mobile
                      <div className="relative">
                        <svg
                          style={{
                            position: "absolute",
                            top: "20px",
                            left: "8px",
                          }}
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M0.800049 1.42633L7.00006 6.63038"
                            stroke="#8C8C8C"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            strokeDasharray="33.055"
                            strokeDashoffset="-33.055">
                            <animate
                              attributeName="stroke-dashoffset"
                              begin="1.5s"
                              dur=".5s"
                              fill="freeze"
                              to="0"
                            />
                          </path>
                        </svg>

                        <svg
                          style={{
                            position: "absolute",
                            top: "15px",
                            right: "25px",
                          }}
                          width="9"
                          height="7"
                          viewBox="0 0 9 7"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M1.19995 6.21919L7.39996 1.01514"
                            stroke="#27272D"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            strokeDasharray="33.055"
                            strokeDashoffset="33.055">
                            <animate
                              attributeName="stroke-dashoffset"
                              begin="1s"
                              dur=".5s"
                              fill="freeze"
                              to="0"
                            />
                          </path>
                        </svg>

                        <svg
                          style={{
                            position: "absolute",
                            top: "15px",
                            right: "18px",
                          }}
                          width="9"
                          height="3"
                          viewBox="0 0 9 3"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M0.199951 1.11523H8.19995"
                            stroke="#27272D"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            strokeDasharray="32.809"
                            strokeDashoffset="32.809">
                            <animate
                              attributeName="stroke-dashoffset"
                              begin="1.5s"
                              dur=".5s"
                              fill="freeze"
                              to="0"
                            />
                          </path>
                        </svg>

                        <div style={dashboardCrmSemiCircleComponentStyle}>
                          <SemiCircle
                            outerPercentage={outerPercentage}
                            innerPercentage={innerPercentage}
                          />
                        </div>
                        <div
                          className="dashboard-fade-in-text"
                          style={
                            dashboardCrmNewCustomersPerMonthTextValue
                          }>{`${Math.round(counterNewCustomersPerMonth)}`}</div>
                        <div
                          className="dashboard-fade-in-text"
                          style={
                            dashboardCrmTotalActiveCustomersTextValue
                          }>{`${Math.round(counterTotalActiveCustomers)}`}</div>
                        <div
                          className="dashboard-fade-in-text"
                          style={
                            dashboardCrmNewPerMonthPlusTotalActiveTextValue
                          }>{`${Math.round(
                          counterOuterPercentageAndInnerPercentage
                        )}`}</div>
                      </div>
                    ) : (
                      // for desktop
                      <div className="relative">
                        <svg
                          style={{
                            position: "absolute",
                            top: isMobile ? "336.12px" : "165px",
                            left: isMobile ? "67.47px" : "85px",
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="24"
                          viewBox="0 0 28 24"
                          fill="none">
                          <path
                            d="M1.46973 1.12305L26.5864 22.6128"
                            stroke="#8C8C8C"
                            strokeWidth="1.56979"
                            strokeMiterlimit="10"
                            strokeDasharray="33.055"
                            strokeDashoffset="-33.055">
                            <animate
                              attributeName="stroke-dashoffset"
                              begin="1.5s"
                              dur=".5s"
                              fill="freeze"
                              to="0"
                            />
                          </path>
                        </svg>
                        <svg
                          style={{
                            position: "absolute",
                            top: isMobile ? "276.43px" : "100px",
                            left: isMobile ? "289.6px" : "270px",
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          width="27"
                          height="24"
                          viewBox="0 0 27 24"
                          fill="none">
                          <path
                            d="M0.595703 22.919L25.7124 1.4292"
                            stroke="#27272D"
                            strokeWidth="1.56979"
                            strokeMiterlimit="10"
                            strokeDasharray="33.055"
                            strokeDashoffset="33.055">
                            <animate
                              attributeName="stroke-dashoffset"
                              begin="1s"
                              dur=".5s"
                              fill="freeze"
                              to="0"
                            />
                          </path>
                        </svg>
                        <svg
                          style={{
                            position: "absolute",
                            top: isMobile ? "276.83px" : "100px",
                            left: isMobile ? "314.01px" : "295px",
                          }}
                          xmlns="http://www.w3.org/2000/svg"
                          width="33"
                          height="2"
                          viewBox="0 0 33 2"
                          fill="none">
                          <path
                            d="M0.00585938 0.827393H32.8145"
                            stroke="#27272D"
                            strokeWidth="1.56979"
                            strokeMiterlimit="10"
                            strokeDasharray="32.809"
                            strokeDashoffset="32.809">
                            <animate
                              attributeName="stroke-dashoffset"
                              begin="1.5s"
                              dur=".5s"
                              fill="freeze"
                              to="0"
                            />
                          </path>
                        </svg>
                        <div style={dashboardCrmSemiCircleComponentStyle}>
                          <SemiCircle
                            outerPercentage={outerPercentage}
                            innerPercentage={innerPercentage}
                          />
                        </div>
                        <div
                          className="dashboard-fade-in-text"
                          style={
                            dashboardCrmNewCustomersPerMonthTextValue
                          }>{`${Math.round(counterNewCustomersPerMonth)}`}</div>
                        <div
                          className="dashboard-fade-in-text"
                          style={
                            dashboardCrmTotalActiveCustomersTextValue
                          }>{`${Math.round(counterTotalActiveCustomers)}`}</div>
                        <div
                          className="dashboard-fade-in-text"
                          style={
                            dashboardCrmNewPerMonthPlusTotalActiveTextValue
                          }>{`${Math.round(
                          counterOuterPercentageAndInnerPercentage
                        )}`}</div>
                      </div>
                    )}
                  </div>
                </div>
              }
            />

            <DashboardCard
              className="h-[107px] rounded-3xl w-[107px] md:h-[440px] md:w-[440px] bg-chinesWhite border border-palatinatePurple "
              children={
                <div className="h-full px-[10px] py-[10px] ">
                  <div className="h-full flex flex-col">
                    <div>
                      <div className="flex justify-between">
                        <h5 className="text-[10px] md:text-[30px] font-bold text-btnBlack">
                          Invoices
                        </h5>
                        <span>
                          <svg
                            width="11"
                            height="7"
                            viewBox="0 0 11 7"
                            className="w-[11px] h-[7px]  md:w-[40px] md:h-[25px] "
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M10.2 4.0932C10.2 4.29335 10.0999 4.39343 9.89995 4.49351L6.29995 6.59514C6.19995 6.69522 6.09995 6.69522 5.99995 6.69522C5.79995 6.69522 5.59995 6.59514 5.49995 6.39499C5.29995 6.09475 5.39995 5.79452 5.69995 5.59436L7.59995 4.49351H1.29995C0.99995 4.49351 0.699951 4.19328 0.699951 3.89304C0.699951 3.59281 0.99995 3.29258 1.29995 3.29258H7.59995L5.39995 1.99157C5.09995 1.79141 4.99995 1.49118 5.19995 1.19095C5.39995 0.890716 5.69995 0.790634 5.99995 0.990789L9.79995 3.29258C9.99995 3.39266 10.1 3.59281 10.1 3.69289C10.1 3.79297 10.1 3.79297 10.1 3.89304C10.2 3.99312 10.2 4.0932 10.2 4.0932Z"
                              fill="#6D6D6D"
                            />
                          </svg>
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <h5 className="ml-[10px] text-[8px] md:text-[28px]  text-darkSilverColor ">
                          <span className="ml-1">Paid</span>
                          <span className="relative">
                            <DonutChartCircle
                              percentage={sixthPercentage}
                              strokeColor="#40F440"
                              showSecondaryCircle={true}
                            />
                            <div className="absolute top-[17px] md:top-[70px] md:-left-[25px] -left-[12px]">{`${Math.round(
                              counter10
                            )}`}</div>
                          </span>
                        </h5>
                        <div className="flex justify-end">
                          <h5 className="text-[8px] md:text-[28px] font-bold text-darkSilverColor">
                            $899.00
                          </h5>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <h5 className="ml-[10px] text-[8px] md:text-[28px] text-darkSilverColor ">
                          Unpaid
                          <span className="relative">
                            <DonutChartCircle
                              percentage={seventhPercentage}
                              strokeColor="#631363"
                              showSecondaryCircle={true}
                            />
                            <div
                              className="absolute top-[23px] md:top-[85px] md:-left-[50px] -left-[16px]"
                              style={
                                dashboardInvoicesUnpaidTextValue
                              }>{`${Math.round(counter11)}`}</div>
                          </span>
                        </h5>
                        <div className="flex justify-end">
                          <h5 className="text-[8px] md:text-[28px] font-bold text-[#F40018]">
                            $899.00
                          </h5>
                        </div>
                      </div>
                    </div>

                    {/* <div className="relative">
                      <div style={dashboardInvoicesPaidText}>Paid</div>
                      <div style={dashboardInvoicesPaidTextValue}>{`${Math.round(counter10)}`}</div>
                      <div style={dashboardInvoicesDonutChartComponent3Style}>
                        <DonutChartCircle percentage={sixthPercentage} strokeColor="#40F440" showSecondaryCircle={true} />
                      </div>
                      <div style={dashboardInvoicesUnpaidText}>Unpaid</div>
                      <div style={dashboardInvoicesUnpaidTextValue}>{`${Math.round(counter11)}`}</div>
                      <div style={dashboardInvoicesDonutChartComponent4Style}>
                        <DonutChartCircle percentage={seventhPercentage} strokeColor="#631363" showSecondaryCircle={true} />
                      </div>
                    </div> */}

                    {/* <div className="ml-[10px] flex items-center justify-between ">
                      <h5 className="text-[8px]  text-darkSilverColor">
                        Unpaid
                        <span>
                          <svg width="25" height="25" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.1372 18.2675V16.5389H7.62158V15.0975L11.3481 9.64246H12.731V15.0917H13.7974V16.5389H12.731V18.2675H11.1372ZM11.1372 15.0917V12.1561L9.1626 15.0917H11.1372ZM14.6118 16.0585L16.2524 15.8885C16.2993 16.2596 16.438 16.5546 16.6685 16.7733C16.8989 16.9882 17.1646 17.0956 17.4653 17.0956C17.8091 17.0956 18.1001 16.9569 18.3384 16.6796C18.5767 16.3983 18.6958 15.9764 18.6958 15.4139C18.6958 14.8866 18.5767 14.4921 18.3384 14.2303C18.104 13.9647 17.7974 13.8319 17.4185 13.8319C16.9458 13.8319 16.522 14.0409 16.147 14.4589L14.811 14.2655L15.6548 9.7948H20.0083V11.3358H16.9028L16.645 12.7948C17.0122 12.6112 17.3872 12.5194 17.77 12.5194C18.5005 12.5194 19.1196 12.785 19.6274 13.3163C20.1353 13.8475 20.3892 14.537 20.3892 15.3846C20.3892 16.0917 20.1841 16.7225 19.7739 17.2772C19.2153 18.035 18.4399 18.4139 17.4478 18.4139C16.6548 18.4139 16.0083 18.201 15.5083 17.7753C15.0083 17.3495 14.7095 16.7772 14.6118 16.0585Z" fill="#6D6D6D" />
                            <path d="M14.8 29.2333C6.99998 29.2333 0.599976 22.8283 0.599976 15.0223C0.599976 7.2162 6.99998 0.811218 14.8 0.811218C22.6 0.811218 29 7.2162 29 15.0223C29 22.9284 22.6 29.2333 14.8 29.2333ZM14.8 4.31394C8.89998 4.31394 4.09998 9.11768 4.09998 15.0223C4.09998 20.9268 8.89998 25.7306 14.8 25.7306C20.7 25.7306 25.5 20.9268 25.5 15.0223C25.6 9.11768 20.7 4.31394 14.8 4.31394Z" fill="#8C8C8C" />
                            <path d="M14.8 29.2332C11.2 29.2332 7.69997 27.8321 4.99997 25.3302L7.39997 22.8282C9.39997 24.7297 12 25.7305 14.8 25.7305C20.7 25.7305 25.5 20.9268 25.5 15.0222C25.5 9.1176 20.7 4.31386 14.8 4.31386V0.911255C22.6 0.911255 29 7.31624 29 15.1223C29 22.9284 22.6 29.2332 14.8 29.2332Z" fill="#631363" />
                          </svg>

                        </span>
                      </h5>
                      <div className="flex justify-end">
                        <h5 className="text-[8px] font-bold text-[#F40018]">
                          $899.00
                        </h5>
                      </div>
                    </div> */}
                  </div>
                </div>
              }
            />

            <DashboardCard
              className="h-[107px] rounded-3xl w-[107px]  md:h-[440px] md:w-[440px] bg-grayX11 border border-palatinatePurple "
              children={
                <div className="h-full px-[10px] py-[10px] ">
                  <div className="h-full flex flex-col">
                    <div className="flex justify-between">
                      <h5 className="text-[10px] md:text-[30px] font-bold text-btnBlack">
                        Estimates
                      </h5>
                    </div>

                    <div className="flex justify-between mt-[12px]">
                      <h5 className="text-[6px]  md:text-[28px] mb-1  text-btnBlack">
                        Number Of Estimates
                      </h5>
                      <h5 className="text-[6px] md:text-[28px] font-bold text-btnBlack">
                        96
                      </h5>
                    </div>
                    <div className="mr-2 relative">
                      <div style={dashboardEstimatesSlider1ContainerStyle}>
                        <div style={dashboardEstimatesSlider1ComponentStyle}>
                          <Slider
                            fixedPercentage={eighthPercentage}
                            uniqueId="eighth"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-[12px]">
                      <h5 className="text-[6px] md:text-[28px]  text-btnBlack">
                        Dollar Value
                      </h5>
                      <h5 className="text-[6px] md:text-[28px] font-bold text-btnBlack">
                        $199.696
                      </h5>
                    </div>
                    <div className="relative">
                      <div style={dashboardEstimatesSlider2ContainerStyle}>
                        <div style={dashboardEstimatesSlider2ComponentStyle}>
                          <Slider
                            fixedPercentage={ninthPercentage}
                            uniqueId="ninth"
                          />
                        </div>
                      </div>
                      {/* <span>
                        <svg width="90" height="17" viewBox="0 0 96 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M90 3.21545H5.89996C2.99996 3.21545 0.699951 5.51725 0.699951 8.41951C0.699951 11.3218 2.99996 13.6236 5.89996 13.6236H90C92.9 13.6236 95.2 11.3218 95.2 8.41951C95.2 5.61733 92.9 3.21545 90 3.21545Z" fill="url(#paint0_linear_0_1)" />
                          <path opacity="0.32" d="M88.9 9.72049H6.89996C6.19996 9.72049 5.69995 9.12001 5.69995 8.51955C5.69995 7.819 6.29996 7.3186 6.89996 7.3186H88.9C89.6 7.3186 90.1 7.91908 90.1 8.51955C90.2 9.12001 89.6 9.72049 88.9 9.72049Z" fill="url(#paint1_linear_0_1)" />
                          <path d="M71.5 7.21857H7.00005C6.30005 7.21857 5.80005 7.81905 5.80005 8.41951C5.80005 9.01998 6.40005 9.62046 7.00005 9.62046H71.5V7.21857Z" fill="#40F440" />
                          <g opacity="0.25">
                            <path opacity="0.0909" d="M70.9 16.0254C74.9869 16.0254 78.3 12.7097 78.3 8.61966C78.3 4.52957 74.9869 1.21388 70.9 1.21388C66.8131 1.21388 63.5 4.52957 63.5 8.61966C63.5 12.7097 66.8131 16.0254 70.9 16.0254Z" fill="url(#paint2_linear_0_1)" />
                            <path opacity="0.1818" d="M70.9 15.7251C74.8212 15.7251 78 12.5439 78 8.61965C78 4.69538 74.8212 1.5141 70.9 1.5141C66.9787 1.5141 63.8 4.69538 63.8 8.61965C63.8 12.5439 66.9787 15.7251 70.9 15.7251Z" fill="url(#paint3_linear_0_1)" />
                            <path opacity="0.2727" d="M70.9 15.4249C74.6555 15.4249 77.7 12.3781 77.7 8.61965C77.7 4.86119 74.6555 1.81432 70.9 1.81432C67.1444 1.81432 64.1 4.86119 64.1 8.61965C64.1 12.3781 67.1444 15.4249 70.9 15.4249Z" fill="url(#paint4_linear_0_1)" />
                            <path opacity="0.3636" d="M70.9 15.1247C74.4898 15.1247 77.4 12.2123 77.4 8.61966C77.4 5.02702 74.4898 2.11461 70.9 2.11461C67.3101 2.11461 64.4 5.02702 64.4 8.61966C64.4 12.2123 67.3101 15.1247 70.9 15.1247Z" fill="url(#paint5_linear_0_1)" />
                            <path opacity="0.4545" d="M70.9 14.8244C74.3241 14.8244 77.1 12.0465 77.1 8.61965C77.1 5.19283 74.3241 2.41483 70.9 2.41483C67.4758 2.41483 64.7 5.19283 64.7 8.61965C64.7 12.0465 67.4758 14.8244 70.9 14.8244Z" fill="url(#paint6_linear_0_1)" />
                            <path opacity="0.5455" d="M70.9 14.5242C74.1584 14.5242 76.8 11.8807 76.8 8.61965C76.8 5.35864 74.1584 2.71504 70.9 2.71504C67.6415 2.71504 65 5.35864 65 8.61965C65 11.8807 67.6415 14.5242 70.9 14.5242Z" fill="url(#paint7_linear_0_1)" />
                            <path opacity="0.6364" d="M70.9 14.224C73.9928 14.224 76.5 11.7149 76.5 8.61966C76.5 5.52446 73.9928 3.01527 70.9 3.01527C67.8072 3.01527 65.3 5.52446 65.3 8.61966C65.3 11.7149 67.8072 14.224 70.9 14.224Z" fill="url(#paint8_linear_0_1)" />
                            <path opacity="0.7273" d="M70.9 13.9238C73.8271 13.9238 76.2 11.549 76.2 8.61966C76.2 5.69027 73.8271 3.31549 70.9 3.31549C67.9729 3.31549 65.6 5.69027 65.6 8.61966C65.6 11.549 67.9729 13.9238 70.9 13.9238Z" fill="url(#paint9_linear_0_1)" />
                            <path opacity="0.8182" d="M70.9 13.6235C73.6614 13.6235 75.9 11.3832 75.9 8.61965C75.9 5.85608 73.6614 3.61577 70.9 3.61577C68.1385 3.61577 65.9 5.85608 65.9 8.61965C65.9 11.3832 68.1385 13.6235 70.9 13.6235Z" fill="url(#paint10_linear_0_1)" />
                            <path opacity="0.9091" d="M70.9 13.3233C73.4957 13.3233 75.6 11.2174 75.6 8.61965C75.6 6.02189 73.4957 3.91599 70.9 3.91599C68.3042 3.91599 66.2 6.02189 66.2 8.61965C66.2 11.2174 68.3042 13.3233 70.9 13.3233Z" fill="url(#paint11_linear_0_1)" />
                            <path d="M70.9 13.023C73.33 13.023 75.3 11.0516 75.3 8.61966C75.3 6.18772 73.33 4.21622 70.9 4.21622C68.4699 4.21622 66.5 6.18772 66.5 8.61966C66.5 11.0516 68.4699 13.023 70.9 13.023Z" fill="url(#paint12_linear_0_1)" />
                          </g>
                          <path d="M75 10.4211C76 8.21936 75 5.61735 72.8 4.61658C70.6 3.6158 68 4.61653 67 6.81824C66 9.01995 67 11.622 69.2 12.6228C71.4 13.6236 74 12.6228 75 10.4211Z" fill="url(#paint13_linear_0_1)" />
                          <path d="M73.1999 9.62045C73.7999 8.31944 73.2 6.9183 71.9 6.31784C70.6 5.71737 69.1999 6.31788 68.5999 7.61889C67.9999 8.9199 68.6 10.321 69.9 10.9214C71.2 11.4218 72.5999 10.8214 73.1999 9.62045Z" fill="#40F440" />
                          <defs>
                            <linearGradient id="paint0_linear_0_1" x1="47.943" y1="13.6348" x2="47.943" y2="3.56052" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#D5DDEF" />
                              <stop offset="0.1853" stop-color="#BDC3CF" />
                              <stop offset="0.3942" stop-color="#A8ABB2" />
                              <stop offset="0.6017" stop-color="#989A9D" />
                              <stop offset="0.8052" stop-color="#8F8F90" />
                              <stop offset="1" stop-color="#8C8C8C" />
                            </linearGradient>
                            <linearGradient id="paint1_linear_0_1" x1="5.71695" y1="8.4612" x2="90.1646" y2="8.4612" gradientUnits="userSpaceOnUse">
                              <stop offset="1.01e-06" stop-color="#631363" />
                              <stop offset="1" stop-color="#40F440" />
                            </linearGradient>
                            <linearGradient id="paint2_linear_0_1" x1="63.6294" y1="8.05769" x2="78.2566" y2="9.10299" gradientUnits="userSpaceOnUse">
                              <stop offset="1.01e-06" stop-color="#24C953" />
                              <stop offset="1" stop-color="#4EDD79" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_0_1" x1="64.036" y1="7.58752" x2="77.8563" y2="9.57304" gradientUnits="userSpaceOnUse">
                              <stop offset="1.01e-06" stop-color="#24C953" />
                              <stop offset="1" stop-color="#4EDD79" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_0_1" x1="64.4661" y1="7.17159" x2="77.4319" y2="9.98989" gradientUnits="userSpaceOnUse">
                              <stop offset="1.01e-06" stop-color="#24C953" />
                              <stop offset="1" stop-color="#4EDD79" />
                            </linearGradient>
                            <linearGradient id="paint5_linear_0_1" x1="64.9144" y1="6.81025" x2="76.9888" y2="10.3529" gradientUnits="userSpaceOnUse">
                              <stop offset="1.01e-06" stop-color="#24C953" />
                              <stop offset="1" stop-color="#4EDD79" />
                            </linearGradient>
                            <linearGradient id="paint6_linear_0_1" x1="65.3753" y1="6.50379" x2="76.5321" y2="10.6619" gradientUnits="userSpaceOnUse">
                              <stop offset="1.01e-06" stop-color="#24C953" />
                              <stop offset="1" stop-color="#4EDD79" />
                            </linearGradient>
                            <linearGradient id="paint7_linear_0_1" x1="65.8436" y1="6.25158" x2="76.0673" y2="10.917" gradientUnits="userSpaceOnUse">
                              <stop offset="1.01e-06" stop-color="#24C953" />
                              <stop offset="1" stop-color="#4EDD79" />
                            </linearGradient>
                            <linearGradient id="paint8_linear_0_1" x1="66.3139" y1="6.05293" x2="75.5996" y2="11.1193" gradientUnits="userSpaceOnUse">
                              <stop offset="1.01e-06" stop-color="#24C953" />
                              <stop offset="1" stop-color="#4EDD79" />
                            </linearGradient>
                            <linearGradient id="paint9_linear_0_1" x1="66.7811" y1="5.90601" x2="75.134" y2="11.2699" gradientUnits="userSpaceOnUse">
                              <stop offset="1.01e-06" stop-color="#24C953" />
                              <stop offset="1" stop-color="#4EDD79" />
                            </linearGradient>
                            <linearGradient id="paint10_linear_0_1" x1="67.2406" y1="5.80937" x2="74.6752" y2="11.3706" gradientUnits="userSpaceOnUse">
                              <stop offset="1.01e-06" stop-color="#24C953" />
                              <stop offset="1" stop-color="#4EDD79" />
                            </linearGradient>
                            <linearGradient id="paint11_linear_0_1" x1="67.6876" y1="5.76041" x2="74.2279" y2="11.4233" gradientUnits="userSpaceOnUse">
                              <stop offset="1.01e-06" stop-color="#24C953" />
                              <stop offset="1" stop-color="#4EDD79" />
                            </linearGradient>
                            <linearGradient id="paint12_linear_0_1" x1="68.1181" y1="5.75681" x2="73.7963" y2="11.4305" gradientUnits="userSpaceOnUse">
                              <stop offset="1.01e-06" stop-color="#24C953" />
                              <stop offset="1" stop-color="#4EDD79" />
                            </linearGradient>
                            <linearGradient id="paint13_linear_0_1" x1="66.5116" y1="8.58065" x2="75.3669" y2="8.58065" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#D5DDEF" />
                              <stop offset="0.1853" stop-color="#BDC3CF" />
                              <stop offset="0.3942" stop-color="#A8ABB2" />
                              <stop offset="0.6017" stop-color="#989A9D" />
                              <stop offset="0.8052" stop-color="#8F8F90" />
                              <stop offset="1" stop-color="#8C8C8C" />
                            </linearGradient>
                          </defs>
                        </svg>

                      </span> */}
                    </div>
                  </div>
                </div>
              }
            />

            <DashboardCard
              className="h-[107px] rounded-3xl w-[107px] md:h-[440px] md:w-[440px] bg-chinesWhite border border-palatinatePurple "
              children={
                <div className="h-full px-[10px] py-[10px] ">
                  <div className="h-full flex flex-col">
                    <div className="flex justify-between">
                      <h5 className="text-[10px] md:text-[30px] font-bold text-btnBlack">
                        Documents
                      </h5>
                    </div>

                    <div className="flex justify-center mt-[7px]">
                      <div className="w-[64px] h-[64px] md:w-[190px] md:h-[190px] bg-[#fff] flex justify-center items-center rounded-full shadow-md">
                        <div className="w-[47px] h-[47px]  md:w-[150px] md:h-[150px] flex justify-center items-center bg-palatinatePurple rounded-full shadow-md">
                          <span>
                            <svg
                              width="24"
                              height="32"
                              className="h-[32px] w-[24px] md:w-[72px] md:h-[96px]"
                              viewBox="0 0 24 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M23.3 9.89423C23.2 9.19369 22.9 8.59321 22.3 8.09282L15.8 1.58777C15.3 0.987302 14.6 0.687069 13.9 0.586992V0.486908H4C2 0.486908 0.5 2.08815 0.5 3.98963V27.708C0.6 29.5094 2.2 31.0106 4 31.0106H19.8C21.7 31.0106 23.3 29.5094 23.3 27.5079V9.89423ZM17.9 17.7003H17.2H15H5.89999C5.19999 17.7003 4.69998 18.2007 4.69998 18.9012C4.69998 19.5017 5.19999 20.1022 5.89999 20.1022H15.6H17.8C18.4 20.1022 19 19.6018 19 18.9012C19 18.2007 18.5 17.7003 17.9 17.7003ZM17.9 22.3038H8.19998H6C5.3 22.3038 4.79999 22.8043 4.79999 23.4047C4.79999 24.1053 5.3 24.6057 6 24.6057H6.69998H14.9H17.9C18.5 24.6057 19.1 24.1053 19.1 23.4047C19 22.9043 18.5 22.3038 17.9 22.3038ZM14.9 3.88957L20 8.99351H16.1C15.5 8.99351 14.9 8.49314 14.9 7.7926V3.88957ZM21 27.608C21 28.3085 20.5 28.8089 19.8 28.8089H3.89999C3.19999 28.8089 2.69998 28.3085 2.69998 27.608V4.08971C2.69998 3.38917 3.19999 2.8888 3.89999 2.8888H12.5V7.7926C12.5 9.79415 14.1 11.2953 16 11.2953H20.9V27.608H21Z"
                                fill="white"
                              />
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              }
            />
          </div>

          <div className="mt-[14px] mb-[17px]">
            <button
              onClick={() => setSupportDialog(true)}
              className="bg-palatinatePurple py-[7px] w-full text-white text-[20px] font-bold text-center rounded-lg">
              Support
            </button>
          </div>

          {isShowSupportDialog && (
            <>
              <div
                onClick={() => setSupportDialog(false)}
                className="fixed left-0 top-0 h-full w-full bg-black-transparet z-10"
              />
              <div className="fixed left-0 top-0 h-full w-full z-20 flex justify-center items-center">
                <div
                  className="h-[254px] w-[254px] bg-white px-[21px] pt-[25px] pb-5
                 rounded-lg  ">
                  <div className="flex justify-end">
                    <span
                      onClick={() => setSupportDialog(false)}
                      className="cursor-pointer">
                      <svg
                        width="15"
                        height="16"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1.50013 14.7L0.700146 13.9C0.300146 13.5 0.300146 12.9 0.700146 12.6L12.6001 0.700024C13.0001 0.300024 13.6001 0.300024 13.9001 0.700024L14.7001 1.50001C15.1001 1.90001 15.1001 2.50003 14.7001 2.80003L2.80012 14.7C2.40012 15.1 1.80013 15.1 1.50013 14.7Z"
                          fill="#631363"
                        />
                        <path
                          d="M14.7001 14L13.9001 14.8C13.5001 15.2 12.9001 15.2 12.6001 14.8L0.700146 2.90001C0.300146 2.50001 0.300146 1.90002 0.700146 1.60002L1.50013 0.800031C1.90013 0.400031 2.50012 0.400031 2.80012 0.800031L14.7001 12.7C15.1001 13 15.1001 13.6 14.7001 14Z"
                          fill="#631363"
                        />
                      </svg>
                    </span>
                  </div>
                  {items.map((item, index) => (
                    <div
                      key={item.id}
                      className={`flex mt-[12px] ripple ${
                        index == 4 ? "mb-[17px]" : " "
                      } `}
                      onClick={() => setActiveOption(item.id)}>
                      <div className="w-[28px] h-[28px] bg-chinesWhite rounded-full flex justify-center align-middle">
                        <div
                          className={`mt-[5px] rounded-full w-[18px] h-[18px] ${
                            activeOption === item.id
                              ? "bg-palatinatePurple"
                              : ""
                          }`}></div>
                      </div>
                      <span className="ml-[9px]">{item.svg}</span>
                      <h5
                        className={`text-[18px] font-bold ml-[9px] ${
                          activeOption === item.id
                            ? "text-palatinatePurple"
                            : "text-darkSilverColor"
                        }`}>
                        {item.label}
                      </h5>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      }
    />
  );
}

export default index;

interface DashboardCardProps {
  children: React.ReactElement;
  className: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  children,
  className,
}) => {
  return <div className={className}>{children}</div>;
};
