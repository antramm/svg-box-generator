import React from 'react';
import TabbedSide from './tabbedside';
import { polarToCartesian } from './svgutils';



export default ({centreX, centreY, sides, apothem, tabOffset, tabLength, tabDepth, swarf=0, bleed=0}) => {
  const degreeIncrement = 360/sides;
  const length = 2*apothem * Math.tan(Math.PI/sides);
  const radius = apothem /Math.cos(Math.PI/sides);
  return (
    <g>
      {new Array(sides).fill('foo').map((p, i) => {
        let rotation = degreeIncrement*i;
        const pnt = polarToCartesian(centreX, centreY, radius, rotation-180/sides);

        return (
          <TabbedSide point={pnt} length={length} offset={tabOffset} tabLength={tabLength} tabDepth={tabDepth} rotation={rotation} />
        )
      })}
    </g>
  )
};
