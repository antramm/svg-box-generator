import React from 'react';
import TabbedSide from './tabbedside';
import { polarToCartesian, apothemToRadius, apothemToSideLength } from './svgutils';



export default ({centreX, centreY, sides, apothem, tabOffset, tabLength, tabDepth, swarf=0, bleed=0}) => {
  const degreeIncrement = 360/sides;
  const length = apothemToSideLength(apothem+bleed, sides);
  const originalLength = apothemToSideLength(apothem, sides);
  const lenDifference = (length - originalLength)/2
  const radius = apothemToRadius(apothem+bleed, sides);
  
  return (
    <g>
      {new Array(sides).fill('foo').map((p, i) => {
        let rotation = degreeIncrement*i;
        const pnt = polarToCartesian(centreX, centreY, radius, rotation-180/sides);

        return (
          <TabbedSide point={pnt} length={length} offset={tabOffset+lenDifference} tabLength={tabLength} tabDepth={tabDepth+bleed} rotation={rotation} />
        )
      })}
    </g>
  )
};
