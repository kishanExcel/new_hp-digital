import React from 'react';
import { useClientMediaQuery } from "@/utils/srchooksuseClientMediaQuery";


interface TwoSemiCirclesProps {
    percentage1: number;
    percentage2: number;
    radius?: number;
    strokeWidth?: number;
}

const TwoSemiCircles: React.FC<TwoSemiCirclesProps> = ({ percentage1, percentage2, radius = 15, strokeWidth = 5 }) => {
    const cx = radius + strokeWidth; // Adjusted for stroke width
    const cy = radius + strokeWidth; // Adjusted for stroke width
    const isMobile = useClientMediaQuery('(max-width: 769px)')
    strokeWidth = isMobile ? strokeWidth : 4
    const calculatePath = (radius: number, percentage: number, reverseDirection: boolean): string => {
        // Starting angle is 60 degrees or 120 degrees, converted to radians
        const startAngleRadians = percentage2 > percentage1 && percentage2 > 99 ? 2 * Math.PI / 3 : Math.PI / 3;

        // Calculate the end angle, adjusting based on whether the arc should extend in the reverse direction
        // reverseDirection = false for the natural progression (counterclockwise from 90 to 270 degrees)
        // reverseDirection = true to reverse this progression (which visually still moves counterclockwise from 270 to 90 degrees)
        const endAngleRadians = reverseDirection
            ? startAngleRadians - Math.PI * (percentage / 100) // Adjusted to 'reverse' direction
            : startAngleRadians + Math.PI * (percentage / 100); // Standard progression

        // Adjust startY calculation for reverse direction
        const startYAdjustment = reverseDirection ? 1 : -1;

        // Calculate the start position (top of the circle)
        const startX = cx + radius * Math.cos(startAngleRadians);
        const startY = cy + startYAdjustment * radius * Math.sin(startAngleRadians);

        // Calculate the end position based on the end angle
        const endX = cx + radius * Math.cos(endAngleRadians);
        const endY = cy + startYAdjustment * radius * Math.sin(endAngleRadians);

        //const largeArcFlag = 0;
        const largeArcFlag = percentage > 100 ? 1 : 0;

        // Construct the SVG path command for the arc
        return `M ${startX} ${startY} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${endX} ${endY}`;
    };


    // Calculate paths for both semicircles, specifying direction
    const semiCircle1 = calculatePath(radius, percentage1, false); // Standard progression, visually counterclockwise from 90 to 270 degrees
    const semiCircle2 = calculatePath(radius, percentage2, true); // 'Reverse' progression, visually appears to follow the same path due to SVG drawing logic

    const viewBoxWidth = radius * 2 + strokeWidth * 2;
    const viewBoxHeight = radius * 2 + strokeWidth * 2;

    return (
        <svg
            className='h-[40px] w-[40px] md:h-[170px] md:w-[170px]'
            viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        >
            <path d={semiCircle1} fill="none" stroke="#3D3D3D" strokeWidth={strokeWidth} strokeLinecap="round" />
            <path d={semiCircle2} fill="none" stroke="#8C8C8C" strokeWidth={strokeWidth} strokeLinecap="round" />
        </svg>
    );
};

export default TwoSemiCircles;
