import React from 'react';
import { useClientMediaQuery } from "@/utils/srchooksuseClientMediaQuery";

interface BarChart1BarsProps {
    innerBarHeight: number; // Height of the inner bar
}

const BarChart1Bars: React.FC<BarChart1BarsProps> = ({ innerBarHeight }) => {
    const isMobile = useClientMediaQuery('(max-width: 769px)')

    const outerBarHeight = isMobile ? 33 : 137; // Fixed height for the outer bar
    const cornerRadius = isMobile ? 3 : 5; // Radius of the corners for rounded edges
    const innerBarMaxHeight = Math.min(innerBarHeight, outerBarHeight); // Ensure inner bar doesn't exceed outer bar
    const width = isMobile ? 3 : 13;

    return (
        <svg width={width} height={outerBarHeight} viewBox={`0 0 ${width} ${outerBarHeight}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Outer bar with rounded edges */}
            <rect width={width} height={outerBarHeight} rx={cornerRadius} ry={cornerRadius} fill="#27272D" />

            {/* Inner bar with rounded edges */}
            {/* Adjust rx and ry to maintain roundness even for small heights */}
            <rect y={outerBarHeight - innerBarMaxHeight} width={width} height={innerBarMaxHeight}
                  rx={innerBarMaxHeight >= cornerRadius ? cornerRadius : innerBarMaxHeight / 2}
                  ry={innerBarMaxHeight >= cornerRadius ? cornerRadius : innerBarMaxHeight / 2}
                  fill="#40F440" />
        </svg>
    );
};

export default BarChart1Bars;
