import React from 'react';
import { useClientMediaQuery } from "@/utils/srchooksuseClientMediaQuery";


interface SemiCircleProps {
    outerPercentage: number;
    innerPercentage: number;
    outerRadius?: number;
    strokeWidth?: number;
}

const SemiCircle: React.FC<SemiCircleProps> = ({ outerPercentage, innerPercentage, outerRadius = 20, strokeWidth = 7 }) => {
    const isMobile = useClientMediaQuery('(max-width: 769px)')

    // Can increase the innerRadius, so it's slightly larger than outerRadius - strokeWidth
    const innerRadius = outerRadius - strokeWidth + 0.2; // '+ 0.2' makes inner arc slightly overlap the outer arc
    const cx = outerRadius + strokeWidth; // Adjusted for stroke width
    const cy = outerRadius + strokeWidth; // Adjusted for stroke width

    // if(!isMobile){
    //     outerPercentage = 130
    //     strokeWidth = 7
    // }

    const calculatePath = (radius: number, percentage: number): string => {
        // Convert percentage to angle in radians, starting from the right (0 degrees)
        const startAngle = 0;
        const endAngle = startAngle - Math.PI * percentage / 100; // Counterclockwise

        // Start position (rightmost point of the circle)
        const startX = cx + radius * Math.cos(startAngle);
        const startY = cy + radius * Math.sin(startAngle);

        // End position
        const endX = cx + radius * Math.cos(endAngle);
        const endY = cy + radius * Math.sin(endAngle);

        /* Determine the large-arc-flag (1 if the angle is more than 180 degrees, else 0)
        const largeArcFlag = percentage > 100 ? 1 : 0;*/
        // Determine the large-arc-flag (always 0 for a semicircle)
        const largeArcFlag = 0;

        // SVG path for the arc
        return `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${endX} ${endY}`;
    };

    const outerArcPath = calculatePath(outerRadius, outerPercentage);
    const innerArcPath = calculatePath(innerRadius, innerPercentage);

    const viewBoxWidth = isMobile ? outerRadius * 2 + strokeWidth * 2 : 260;
    const viewBoxHeight = isMobile ? outerRadius * 2 + strokeWidth * 2 : 260;

    strokeWidth = isMobile ? 7 : 7
    


    return (
        <svg
            width={viewBoxWidth}
            height={viewBoxHeight}
            viewBox={`0 0 ${outerRadius * 2 + strokeWidth * 2} ${outerRadius * 2 + strokeWidth * 2}`}
        >
            <path d={outerArcPath} fill="none" stroke="#3D3D3D" strokeWidth={strokeWidth} />
            <path d={innerArcPath} fill="none" stroke="#8C8C8C" strokeWidth={strokeWidth} />
        </svg>
    );
};

export default SemiCircle;
