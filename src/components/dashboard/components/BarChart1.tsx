import React from 'react';
import BarChart1Bars from './BarChart1Bars'
import BarChart1Bars2 from './BarChart1Bars2'

interface BarChart1Props {
    innerBarHeight1: number;
    innerBarHeight2: number;
    innerBarHeight3: number;
}

const BarChart1: React.FC<BarChart1Props> = ({ innerBarHeight1, innerBarHeight2, innerBarHeight3 }) => {
    const innerBarHeight4 = 0;
    const innerBarHeight5 = 0;
    return (
        <div className='flex md:justify-around md:w-full'>
            <BarChart1Bars innerBarHeight={innerBarHeight1} />
            <span style={{marginLeft: '16px'}}><BarChart1Bars innerBarHeight={innerBarHeight2} /></span>
            <span style={{marginLeft: '16px'}}><BarChart1Bars2 innerBarHeight={innerBarHeight3} /></span>
            <span style={{marginLeft: '14px'}}><BarChart1Bars innerBarHeight={innerBarHeight4} /></span>
            <span style={{marginLeft: '14px'}}><BarChart1Bars innerBarHeight={innerBarHeight5} /></span>
        </div>

    );
};

export default BarChart1;
