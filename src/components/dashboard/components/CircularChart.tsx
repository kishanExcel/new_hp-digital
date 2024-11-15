import React from 'react';
import { useClientMediaQuery } from "@/utils/srchooksuseClientMediaQuery";


export interface Segment {
    color: string;
    percentage: number;
}

interface CircularChartProps {
    segments: Segment[];
}

const CircularChart: React.FC<CircularChartProps> = ({ segments }) => {
    const gapSize = 0.5; // Size of the gap in degrees

    const isMobile = useClientMediaQuery('(max-width: 769px)')

    const size = isMobile ? '50' : '200'


    const calculateArc = (index: number, totalPercentage: number) => {
        const adjustedPercentage = totalPercentage - (gapSize * index);
        const startAngle = (adjustedPercentage / 100) * 360;
        const endAngle = startAngle - ((segments[index].percentage - gapSize) / 100) * 360;
        const largeArcFlag = endAngle - startAngle > -180 ? 0 : 1;
        const innerRadius = 60;
        const outerRadius = 90;
        const startInner = polarToCartesian(0, 0, innerRadius, endAngle);
        const endInner = polarToCartesian(0, 0, innerRadius, startAngle);
        const startOuter = polarToCartesian(0, 0, outerRadius, endAngle);
        const endOuter = polarToCartesian(0, 0, outerRadius, startAngle);

        return {
            pathData: [
                `M ${startInner.x} ${startInner.y}`,
                `L ${startOuter.x} ${startOuter.y}`,
                `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${endOuter.x} ${endOuter.y}`,
                `L ${endInner.x} ${endInner.y}`,
                `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${startInner.x} ${startInner.y}`,
                `Z`
            ].join(" "),
            endPercentage: adjustedPercentage - segments[index].percentage
        };
    };

    const paths = segments.reduce<{ pathData: string; endPercentage: number; }[]>((acc, segment, index) => {
        if (index === 0) {
            const { pathData, endPercentage } = calculateArc(0, 100);
            return [...acc, { pathData, endPercentage }];
        } else {
            const { pathData, endPercentage } = calculateArc(index, acc[index - 1].endPercentage);
            return [...acc, { pathData, endPercentage }];
        }
    }, []);

    return (
        <svg width={size} height={size} viewBox="-100 -100 200 200">
            {paths.map((path, index) => (
                <path d={path.pathData} fill={segments[index].color} key={index} />
            ))}
        </svg>
    );
};

const round = (value: number, decimals: number): number => {
    return Number(value.toFixed(decimals));
};

const polarToCartesian = (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
        x: round(centerX + radius * Math.cos(angleInRadians), 5), // Round to 5 decimal places
        y: round(centerY + radius * Math.sin(angleInRadians), 5)  // Adjust the number of decimal places if needed
    };
};

export default CircularChart;
