import React from 'react';
import TabbedSide from './tabbedside';
import { polarToCartesian, apothemToRadius, apothemToSideLength } from './svgutils';



export default ({centreX, centreY, sides, apothem, height, tabOffset, tabLength, tabDepth, swarf=0, bleed=0}) => {
  const degreeIncrement = 360/sides;
  const length = apothemToSideLength(apothem, sides);
  const radius = apothemToRadius(apothem, sides);
  return (
    <g transform={`translate(${centreX} ${centreY})`}>
      <TabbedSide point={{x:0,y:0}} length={height} offset={tabOffset} tabLength={tabLength} tabDepth={tabDepth} rotation={0} inside={true}/>
      <path d={`M ${height},0,${height},${length}`} stroke="#f00" strokeWidth="0.3" />
      <TabbedSide point={{x:height,y:length}} length={height} offset={tabOffset} tabLength={tabLength} tabDepth={tabDepth} rotation={180} />
      <TabbedSide point={{x:0,y:length}} length={length} offset={tabOffset} tabLength={tabLength} tabDepth={tabDepth} rotation={270} inside={true} />

    </g>
  )
};
