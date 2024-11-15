import React, { useEffect, useRef } from "react";
import "./SliderStyles.css";
import { useClientMediaQuery } from "@/utils/srchooksuseClientMediaQuery";

interface SliderProps {
  fixedPercentage: number;
  uniqueId: string; // A uniqueId prop for dynamic identification
}

let isMobile = true;

const Slider: React.FC<SliderProps> = ({ fixedPercentage, uniqueId }) => {
  const sliderRef = useRef<HTMLDivElement>(null); // Reference to the slider's container for positioning the SVG
  const svgRef1 = useRef<HTMLDivElement>(null); // Reference to the SVG element1
  const svgRef2 = useRef<SVGSVGElement>(null); // Reference to the SVG element2
  const svgRef3 = useRef<HTMLDivElement>(null); // Reference to the SVG element3

  useEffect(() => {
    // Use the uniqueId to form a unique class name for each slider instance
    const uniqueClass = `slider-${uniqueId}`;
    // Dynamically update the slider's background gradient
    const slider = document.querySelector(`.${uniqueClass}`) as HTMLElement;
    if (slider) {
      // Use RGBA for the gradient to include the opacity in the color values
      // Note: Assuming the entire gradient to the right of the thumb should have an opacity of 0.32
      const gradientStart = `rgba(99, 19, 99, 0.32)`; // #631363 at 0.01% with opacity
      const gradientEnd = `rgba(64, 244, 64, 0.32)`; // #40F440 at 99.99% with opacity

      // Apply the gradient from the fixedPercentage point onwards
      slider.style.background = `
                linear-gradient(to right, 
                #40F440 ${fixedPercentage}%, 
                ${gradientStart} ${fixedPercentage}%, 
                ${gradientStart} 0.01%, 
                ${gradientEnd} 99.99%
                )`;
    }

    // Position SVGs based on the fixedPercentage
    if (
      sliderRef.current &&
      svgRef1.current &&
      svgRef2.current &&
      svgRef3.current
    ) {
      const sliderWidth = sliderRef.current.offsetWidth; // Total width of the slider
      const thumbWidth = 10;
      const svgWidth1 = svgRef1.current.clientWidth; // Dynamic width of the SVG1
      const svgWidth2 = svgRef2.current.clientWidth; // Dynamic width of the SVG2
      //const svgWidth3 = svgRef3.current.clientWidth; // Dynamic width of the SVG3
      const svgWidth3 = svgRef3.current.clientWidth; // Assuming SVG width matches thumb width
      const correctionFactor = 1;

      // Calculate the thumb's starting position as a percentage of the slider's total width
      const thumbStartPosition =
        (sliderWidth - thumbWidth) * (fixedPercentage / 100);

      // Calculate the position to center the SVGs relative to the thumb's position, applying the correction factor
      svgRef1.current.style.left = `${
        thumbStartPosition + thumbWidth / 2 - svgWidth1 / 2 + correctionFactor
      }px`;
      svgRef2.current.style.left = `${
        thumbStartPosition + thumbWidth / 2 - svgWidth2 / 2 + correctionFactor
      }px`;
      //svgRef3.current.style.left = `${thumbStartPosition + (thumbWidth / 2) - (svgWidth3 / 2) + correctionFactor}px`;

      // Calculate thumb's center position as a percentage of the slider's total width, applying the correction factor
      let thumbCenterPosition =
        (sliderWidth - svgWidth3) * (fixedPercentage / 100) +
        svgWidth3 / 2 +
        correctionFactor;
      svgRef3.current.style.left = `${thumbCenterPosition - svgWidth3 / 2}px`; // Apply corrected positioning
    }
  }, [fixedPercentage, uniqueId]);

  return (
    <div
      ref={sliderRef}
      style={{
        position: "relative",
        width: isMobile ? "85px" : "341px",
        top: "3px",
      }}>
      {" "}
      {/* Reduced width by 50% */}
      <input
        type="range"
        min="0"
        max="100"
        value={fixedPercentage}
        className={`slider slider-${uniqueId}`} // Apply both the general and unique class names
        onChange={() => {}}
        disabled={true}
      />
      {/* <svg
        ref={svgRef3}
        width="6"
        style={{ position: "absolute", top: -1, zIndex: 3, left: "0px" }}
        height="6"
        viewBox="0 0 6 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.89991 4.49314C5.49991 3.19213 4.8999 1.79105 3.5999 1.19059C2.2999 0.590122 0.899901 1.19058 0.299901 2.49159C-0.300099 3.7926 0.299904 5.1937 1.5999 5.79417C2.7999 6.29456 4.29991 5.69407 4.89991 4.49314Z"
          fill="#40F440"
        />
      </svg> */}
      {/* <svg
        ref={svgRef3}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="22"
        style={{ position: "absolute", top: -6, zIndex: 3 }}
        fill="none">
        <circle cx="10" cy="11" r="5" fill="#40F440" />
      </svg> */}
      <div
        ref={svgRef1}
        style={{ position: "absolute", top: -2.5, zIndex: 2 }}
        className="h-2 w-2 rounded-full flex items-center justify-center bg-gradient-to-r from-[#D5DDEF] via-[#989A9D] to-[#8C8C8C]">
        <div ref={svgRef3} className="h-1 w-1  rounded-full bg-[#40F440]"></div>
      </div>
      {/* <svg
        ref={svgRef1}
        style={{ position: "absolute", top: -2, zIndex: 2 }}
        width="9"
        height="9"
        viewBox="0 0 9 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8.59997 6.29377C9.59997 4.09206 8.59997 1.49002 6.39997 0.489246C4.19997 -0.51153 1.59997 0.489259 0.59997 2.69097C-0.40003 4.89268 0.599967 7.49468 2.79997 8.49546C4.99997 9.49624 7.59997 8.49548 8.59997 6.29377Z"
          fill="url(#paint0_linear_1_244)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_244"
            x1="0.15997"
            y1="4.45042"
            x2="9.01707"
            y2="4.45042"
            gradientUnits="userSpaceOnUse">
            <stop stop-color="#D5DDEF" />
            <stop offset="0.1853" stop-color="#BDC3CF" />
            <stop offset="0.3942" stop-color="#A8ABB2" />
            <stop offset="0.6017" stop-color="#989A9D" />
            <stop offset="0.8052" stop-color="#8F8F90" />
            <stop offset="1" stop-color="#8C8C8C" />
          </linearGradient>
        </defs>
      </svg> */}
      <svg
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
        ref={svgRef2}
        style={{ position: "absolute", top: -6, zIndex: 1 }}
        xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.25">
          <path
            opacity="0.0909"
            d="M8.5999 15.8979C12.6868 15.8979 15.9999 12.5822 15.9999 8.49211C15.9999 4.40203 12.6868 1.08636 8.5999 1.08636C4.51299 1.08636 1.19989 4.40203 1.19989 8.49211C1.19989 12.5822 4.51299 15.8979 8.5999 15.8979Z"
            fill="url(#paint0_linear_1_229)"
          />
          <path
            opacity="0.1818"
            d="M8.5999 15.5979C12.5211 15.5979 15.6999 12.4166 15.6999 8.49235C15.6999 4.56808 12.5211 1.38686 8.5999 1.38686C4.67868 1.38686 1.49989 4.56808 1.49989 8.49235C1.49989 12.4166 4.67868 15.5979 8.5999 15.5979Z"
            fill="url(#paint1_linear_1_229)"
          />
          <path
            opacity="0.2727"
            d="M8.5999 15.2976C12.3554 15.2976 15.3999 12.2508 15.3999 8.49236C15.3999 4.7339 12.3554 1.68709 8.5999 1.68709C4.84436 1.68709 1.7999 4.7339 1.7999 8.49236C1.7999 12.2508 4.84436 15.2976 8.5999 15.2976Z"
            fill="url(#paint2_linear_1_229)"
          />
          <path
            opacity="0.3636"
            d="M8.5999 14.9974C12.1898 14.9974 15.0999 12.085 15.0999 8.49235C15.0999 4.89971 12.1898 1.9873 8.5999 1.9873C5.01005 1.9873 2.0999 4.89971 2.0999 8.49235C2.0999 12.085 5.01005 14.9974 8.5999 14.9974Z"
            fill="url(#paint3_linear_1_229)"
          />
          <path
            opacity="0.4545"
            d="M8.5999 14.6972C12.0241 14.6972 14.7999 11.9192 14.7999 8.49235C14.7999 5.06552 12.0241 2.28755 8.5999 2.28755C5.17573 2.28755 2.3999 5.06552 2.3999 8.49235C2.3999 11.9192 5.17573 14.6972 8.5999 14.6972Z"
            fill="url(#paint4_linear_1_229)"
          />
          <path
            opacity="0.5455"
            d="M8.5999 14.397C11.8584 14.397 14.4999 11.7534 14.4999 8.49235C14.4999 5.23133 11.8584 2.58777 8.5999 2.58777C5.34142 2.58777 2.69989 5.23133 2.69989 8.49235C2.69989 11.7534 5.34142 14.397 8.5999 14.397Z"
            fill="url(#paint5_linear_1_229)"
          />
          <path
            opacity="0.6364"
            d="M14.1999 8.49236C14.1999 5.38995 11.6999 2.88803 8.5999 2.88803C5.4999 2.88803 2.99989 5.38995 2.99989 8.49236C2.99989 11.5948 5.4999 14.0967 8.5999 14.0967C11.6999 13.9966 14.1999 11.4947 14.1999 8.49236Z"
            fill="url(#paint6_linear_1_229)"
          />
          <path
            opacity="0.7273"
            d="M13.8999 8.49235C13.8999 5.5901 11.4999 3.18825 8.5999 3.18825C5.6999 3.18825 3.2999 5.5901 3.2999 8.49235C3.2999 11.3946 5.6999 13.7965 8.5999 13.7965C11.4999 13.6964 13.8999 11.3946 13.8999 8.49235Z"
            fill="url(#paint7_linear_1_229)"
          />
          <path
            opacity="0.8182"
            d="M13.5999 8.49235C13.5999 5.79025 11.3999 3.48846 8.5999 3.48846C5.7999 3.48846 3.5999 5.69017 3.5999 8.49235C3.5999 11.2945 5.7999 13.4962 8.5999 13.4962C11.2999 13.3962 13.5999 11.1944 13.5999 8.49235Z"
            fill="url(#paint8_linear_1_229)"
          />
          <path
            opacity="0.9091"
            d="M13.2999 8.49234C13.2999 5.89032 11.1999 3.78871 8.5999 3.78871C5.9999 3.78871 3.8999 5.89032 3.8999 8.49234C3.8999 11.0944 5.9999 13.196 8.5999 13.196C11.1999 13.196 13.2999 10.9943 13.2999 8.49234Z"
            fill="url(#paint9_linear_1_229)"
          />
          <path
            d="M12.8999 8.49236C12.8999 6.09049 10.8999 4.08894 8.49989 4.08894C6.09989 4.08894 4.0999 6.09049 4.0999 8.49236C4.0999 10.8942 6.09989 12.8958 8.49989 12.8958C10.9999 12.7957 12.8999 10.8942 12.8999 8.49236Z"
            fill="url(#paint10_linear_1_229)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_1_229"
            x1="1.27779"
            y1="7.92688"
            x2="15.9049"
            y2="8.97228"
            gradientUnits="userSpaceOnUse">
            <stop offset="1.01e-06" stop-color="#24C953" />
            <stop offset="1" stop-color="#4EDD79" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_1_229"
            x1="1.68449"
            y1="7.45697"
            x2="15.5047"
            y2="9.44249"
            gradientUnits="userSpaceOnUse">
            <stop offset="1.01e-06" stop-color="#24C953" />
            <stop offset="1" stop-color="#4EDD79" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_1_229"
            x1="2.1147"
            y1="7.04103"
            x2="15.0805"
            y2="9.85945"
            gradientUnits="userSpaceOnUse">
            <stop offset="1.01e-06" stop-color="#24C953" />
            <stop offset="1" stop-color="#4EDD79" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_1_229"
            x1="2.5631"
            y1="6.67985"
            x2="14.6374"
            y2="10.2224"
            gradientUnits="userSpaceOnUse">
            <stop offset="1.01e-06" stop-color="#24C953" />
            <stop offset="1" stop-color="#4EDD79" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_1_229"
            x1="3.0241"
            y1="6.37342"
            x2="14.1809"
            y2="10.5315"
            gradientUnits="userSpaceOnUse">
            <stop offset="1.01e-06" stop-color="#24C953" />
            <stop offset="1" stop-color="#4EDD79" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_1_229"
            x1="3.49239"
            y1="6.12132"
            x2="13.7161"
            y2="10.7867"
            gradientUnits="userSpaceOnUse">
            <stop offset="1.01e-06" stop-color="#24C953" />
            <stop offset="1" stop-color="#4EDD79" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_1_229"
            x1="3.96179"
            y1="5.92438"
            x2="13.2476"
            y2="10.9909"
            gradientUnits="userSpaceOnUse">
            <stop offset="1.01e-06" stop-color="#24C953" />
            <stop offset="1" stop-color="#4EDD79" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_1_229"
            x1="4.43"
            y1="5.77586"
            x2="12.783"
            y2="11.1399"
            gradientUnits="userSpaceOnUse">
            <stop offset="1.01e-06" stop-color="#24C953" />
            <stop offset="1" stop-color="#4EDD79" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_1_229"
            x1="4.8894"
            y1="5.67926"
            x2="12.3243"
            y2="11.2405"
            gradientUnits="userSpaceOnUse">
            <stop offset="1.01e-06" stop-color="#24C953" />
            <stop offset="1" stop-color="#4EDD79" />
          </linearGradient>
          <linearGradient
            id="paint9_linear_1_229"
            x1="5.3348"
            y1="5.63244"
            x2="11.8753"
            y2="11.2955"
            gradientUnits="userSpaceOnUse">
            <stop offset="1.01e-06" stop-color="#24C953" />
            <stop offset="1" stop-color="#4EDD79" />
          </linearGradient>
          <linearGradient
            id="paint10_linear_1_229"
            x1="5.7671"
            y1="5.62684"
            x2="11.4455"
            y2="11.3009"
            gradientUnits="userSpaceOnUse">
            <stop offset="1.01e-06" stop-color="#24C953" />
            <stop offset="1" stop-color="#4EDD79" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Slider;
