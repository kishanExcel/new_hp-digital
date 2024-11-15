import React from 'react';
import { useClientMediaQuery } from "@/utils/srchooksuseClientMediaQuery";

interface CircleProps {
    outerPercentage: number;
    innerPercentage: number;
    outerRadius?: number;
    strokeWidth?: number;
}

const Circle: React.FC<CircleProps> = ({ outerPercentage, innerPercentage, outerRadius = 80 , strokeWidth = 8 }) => {
    const isMobile = useClientMediaQuery('(max-width: 769px)')
    strokeWidth = isMobile ? 3 : 8
    outerRadius = isMobile ? 18 : 80
    // Subtract additional value to create a gap
    const gapWidth = isMobile ? 3 : 8; // Adjust this value to change the gap size
    const innerRadius = outerRadius - strokeWidth - gapWidth;
    const cx = outerRadius + strokeWidth;
    const cy = outerRadius + strokeWidth;
    const diameter = outerRadius * 2 + strokeWidth * 2;

    const calculateArcPath = (radius: number, percentage: number): string => {
        if (percentage >= 100) {
            // Use a circle element for a complete circle
            return '';
        }
        else if (percentage >= 97 && percentage < 100) {
            percentage = 97;
        }

        const endAngle = (percentage / 100) * 2 * Math.PI;
        const largeArcFlag = percentage > 50 ? 1 : 0;

        const endX = cx + radius * Math.cos(endAngle - Math.PI / 2);
        const endY = cy + radius * Math.sin(endAngle - Math.PI / 2);

        return `M ${cx} ${cy - radius} A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`;
    };

    const dOuter = calculateArcPath(outerRadius, outerPercentage);
    const dInner = calculateArcPath(innerRadius, innerPercentage);

    const viewBoxSize = outerRadius * 2 + strokeWidth * 2;

    return (
        <svg width={diameter} height={diameter} viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}>
            {outerPercentage >= 100 ? (
                <circle cx={cx} cy={cy} r={outerRadius} fill="none" stroke="#631363" strokeWidth={strokeWidth} />
            ) : (
                <path d={dOuter} fill="none" stroke="#631363" strokeWidth={strokeWidth} strokeLinecap="round" />
            )}
            {innerPercentage >= 100 ? (
                <circle cx={cx} cy={cy} r={innerRadius} fill="none" stroke="#40F440" strokeWidth={strokeWidth} />
            ) : (
                <path d={dInner} fill="none" stroke="#40F440" strokeWidth={strokeWidth} strokeLinecap="round" />
            )}
        </svg>
    );
};

export default Circle;
