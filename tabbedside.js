import React from 'react';



export default ({point, rotation=0, length, offset, tabLength, tabDepth,swarf=0, inside=false, firstOffset=0, lastOffset=0}) => {
  const wavelength = tabLength * 2;
  const numberOfTabs = Math.floor((length - offset * 2) / wavelength);
  const realOffset = (length - numberOfTabs * wavelength + tabLength) / 2;
  const direction = inside ? -1 : 1;
  const swf = inside ? swarf : 0;

  let points = [];
  for(let i=0;i<numberOfTabs;i++) {
    points.push({x:realOffset+i*wavelength-swf, y:0});
    points.push({x:realOffset+i*wavelength-swf, y:direction * tabDepth});
    points.push({x:realOffset+i*wavelength+tabLength+swf, y: direction * tabDepth});
    points.push({x:realOffset+i*wavelength+tabLength+swf, y:0});
  };
  points.unshift({x:-firstOffset,y:0});
  points.push({x:length-lastOffset,y:0});
  const d = points.map((point, i) => {
    return `${point.x},${point.y}`;
  })
  const transform = `translate(${point.x} ${point.y}) rotate(${rotation})`;
  return <path d={"M "+d} fill="transparent" stroke="#f00" strokeWidth="0.3" transform={transform} />
};
