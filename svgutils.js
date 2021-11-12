export function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}
export function apothemToRadius(apthem, sides) {

}

export function apothemToSideLength(apothem, sides) {
  
}
export function arc(x, y, radius, startAngle, endAngle, closeShape) {

  const fullCircle = endAngle - startAngle === 360;
  const start = polarToCartesian(x, y, radius, endAngle - (fullCircle ? 0.01 : 0));
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  const d = [
    "M", start.x, start.y,
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
    (closeShape && !fullCircle ? (`L ${x} ${y} Z`) : null),
    (fullCircle && !closeShape ? 'Z' : null)
  ].join(" ");
  return d;
}

export function pie(x, y, radius, startAngle, endAngle) {
  return arc(x, y, radius, startAngle, endAngle, true);
}

export function stard(centerX, centerY, points, innerRadius, outerRadius) {
  const degreeIncrement = 360 / (points * 2);
  const d = new Array(points * 2).fill('foo').map((p, i) => {
    let radius = i % 2 == 0 ? outerRadius : innerRadius;
    let degrees = degreeIncrement * i;
    const point = polarToCartesian(centerX, centerY, radius, degrees);
    return `${point.x},${point.y}`;
  });
  return `M${d}Z`;
}
export function star(centerX, centerY, points, innerRadius, outerRadius) {
  const degreeIncrement = 360 / points;
  const radius = 0.5 * innerRadius / Math.sin(Math.PI/points);
  const d = new Array(points).fill('foo').map((p, i) => {
    let degrees = degreeIncrement * i;
    const point = polarToCartesian(centerX, centerY, radius, degrees);
    return `${point.x},${point.y}`;
  });
  return `M${d}Z`;
}

export function onePolygonSide(length, offset=22.86, tabLength=22.86, tabDepth=11.43) {
  const wavelength = tabLength * 2;
  const numberOfTabs = Math.floor((length - offset * 2) / wavelength);
  const realOffset = (length - numberOfTabs * wavelength + tabLength) / 2;
  let points = [];
  for(let i=0;i<numberOfTabs;i++) {
    points.push({x:realOffset+i*wavelength, y:0});
    points.push({x:realOffset+i*wavelength, y:tabDepth});
    points.push({x:realOffset+i*wavelength+tabLength, y:tabDepth});
    points.push({x:realOffset+i*wavelength+tabLength, y:0});
  };
  points.unshift({x:0,y:0});
  points.push({x:length,y:0});
  const d = points.map((point, i) => {
    return `${point.x},${point.y}`;
  })
  return `M${d}`;
}