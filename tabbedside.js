import React from 'react';



export default ({point, rotation=0, length, offset, tabLength, tabDepth,swarf=0, inside=false}) => {
  const wavelength = tabLength * 2;
  const numberOfTabs = Math.floor((length - offset * 2) / wavelength);
  const realOffset = (length - numberOfTabs * wavelength + tabLength) / 2;
  const direction = inside ? -1 : 1;
  let points = [];
  for(let i=0;i<numberOfTabs;i++) {
    points.push({x:realOffset+i*wavelength, y:0});
    points.push({x:realOffset+i*wavelength, y:direction * tabDepth});
    points.push({x:realOffset+i*wavelength+tabLength, y: direction * tabDepth});
    points.push({x:realOffset+i*wavelength+tabLength, y:0});
  };
  points.unshift({x:0,y:0});
  points.push({x:length,y:0});
  const d = points.map((point, i) => {
    return `${point.x},${point.y}`;
  })
  const transform = `translate(${point.x} ${point.y}) rotate(${rotation})`;
  return <path d={"M "+d} fill="transparent" stroke="#f00" strokeWidth="0.3" transform={transform} />
};
