import React, { useEffect, useRef } from "react";
import { useClientMediaQuery } from "@/utils/srchooksuseClientMediaQuery";

interface DonutChartProps {
    percentage: number;
    strokeColor?: string;
    showSecondaryCircle: boolean;
}

const DonutChartCircle: React.FC<DonutChartProps> = ({ percentage, strokeColor = '#27272D', showSecondaryCircle }) => {
    const chartRef = useRef<SVGCircleElement>(null);
    const isMobile = useClientMediaQuery('(max-width: 769px)')

    // Further reduce the stroke width and radius by 50%
    const strokeWidth = isMobile ? 2.5 : 5; // Original was 10, reduced by 75%
    const r = isMobile ?  10 : 40; // Original was 40, reduced by 75%
    const totalLength = 2 * Math.PI * r; // Recalculate circumference
    const svgSize = isMobile ? 25 : 100; // Original was 100, reduced by 75%
    const center =  svgSize / 2;

    useEffect(() => {
        if (chartRef.current) {
            const offset = totalLength * (1 - percentage / 100);
            chartRef.current.style.strokeDashoffset = `${offset}`;
        }
    }, [percentage, showSecondaryCircle, totalLength]);

    // Rotate the circle to start from the top
    const rotationTransform = `rotate(-90 ${center} ${center})`;

    return (
        <svg width={svgSize} height={svgSize} viewBox={`0 0 ${svgSize} ${svgSize}`}>
            <circle cx={center} cy={center} r={r} fill="transparent" stroke="#8C8C8C" strokeWidth={strokeWidth} />
            <circle
                cx={center}
                cy={center}
                r={r}
                fill="transparent"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeDasharray={totalLength.toString()}
                strokeDashoffset={totalLength.toString()}
                ref={chartRef}
                transform={rotationTransform}
            />
        </svg>
    );
};

export default DonutChartCircle;
