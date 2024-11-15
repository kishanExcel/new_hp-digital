import { useEffect, useRef } from "react";
import { useClientMediaQuery } from "@/utils/srchooksuseClientMediaQuery";


interface DonutChartProps {
    percentage: number;
    strokeColor?: string;
    showSecondaryCircle: boolean;
}

const DonutChart: React.FC<DonutChartProps> = ({ percentage, strokeColor = '#27272D', showSecondaryCircle }) => {
    const chartRef = useRef<SVGCircleElement>(null);
    const isMobile = useClientMediaQuery('(max-width: 769px)')

    // Original sizes
    const strokeWidth = showSecondaryCircle ? 10 : isMobile ? 10 :  15;
    const r = showSecondaryCircle ? 40 : 65;
    
    // Reduced size factor
    const sizeFactor = showSecondaryCircle ? 1 : isMobile ? .27 :  1; // Reduce size by 60%
    
    // Calculate reduced SVG size and circle radius
    const originalSize = showSecondaryCircle ? 20 : 2 * (r + strokeWidth / 2);
    const svgSize = originalSize * sizeFactor;
    const reducedRadius = r * sizeFactor;
    const reducedStrokeWidth = strokeWidth * sizeFactor;

    // Circumference of the circle (2 * π * r)
    const totalLength = 2 * Math.PI * reducedRadius;
    const center = svgSize / 2;

    useEffect(() => {
        if (chartRef.current) {
            const offset = totalLength * (1 - percentage / 100);
            chartRef.current.style.strokeDashoffset = `${offset}`;
        }
    }, [percentage, totalLength]);

    // Rotate the circle to start from the top
    const rotationTransform = `rotate(-90 ${center} ${center})`;

    return (
        <svg width={svgSize} height={svgSize} viewBox={`0 0 ${svgSize} ${svgSize}`}>
            {showSecondaryCircle && (
                <circle
                    cx={center}
                    cy={center}
                    r={reducedRadius}
                    fill="transparent"
                    stroke="#8C8C8C"
                    strokeWidth={reducedStrokeWidth}
                />
            )}
            <circle
                cx={center}
                cy={center}
                r={reducedRadius}
                fill="transparent"
                stroke={strokeColor}
                strokeWidth={reducedStrokeWidth}
                strokeDasharray={totalLength.toString()}
                strokeDashoffset={totalLength.toString()}
                ref={chartRef}
                transform={rotationTransform}
            />
        </svg>
    );
};

export default DonutChart;
