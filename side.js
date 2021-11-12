import React from 'react';
import TabbedSide from './tabbedside';
import { polarToCartesian, apothemToRadius, apothemToSideLength } from './svgutils';



export default ({centreX, centreY, sides, apothem, height, tabOffset, tabLength, tabDepth, swarf=0, bleed=0}) => {
  const degreeIncrement = 360/sides;
  const length = apothemToSideLength(apothem, sides);
  const radius = apothemToRadius(apothem, sides);
  const indentOffset = tabDepth * Math.sin(2*Math.PI/sides);
  const outdentOffset = tabDepth * Math.cos(2*Math.PI/sides);

  return (
    <g transform={`translate(${centreX} ${centreY})`}>
      <TabbedSide point={{x:0,y:indentOffset}} length={height} offset={tabOffset} tabLength={tabLength} tabDepth={tabDepth+outdentOffset+bleed} rotation={0} inside={true}/>
      <path d={`M ${height},${indentOffset},${height},${length+outdentOffset+bleed}`} stroke="#f00" strokeWidth="0.3" />
      <TabbedSide point={{x:height,y:length+outdentOffset+bleed}} length={height} offset={tabOffset} tabLength={tabLength} tabDepth={tabDepth+outdentOffset+bleed} rotation={180} />
      <TabbedSide point={{x:0,y:length}} length={length} offset={tabOffset} tabLength={tabLength} tabDepth={tabDepth+bleed} rotation={270} inside={true} firstOffset={outdentOffset+bleed} lastOffset={indentOffset} />

    </g>
  )
};
