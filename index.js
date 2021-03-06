import React, { Component } from 'react';
import { render } from 'react-dom';
import Configurator from './Configurator';
import { arc, pie, star, onePolygonSide } from './svgutils';
import PolygonBase from './polygon_base';
import Side from './side';
import './style.css';




class App extends Component {
  constructor() {
    super();
    this.state = {
      sides: 5,
      apothem: 40,
      height: 200,
      split:50,
      tabOffset: 6,
      tabLength: 8,
      tabDepth: 3.6,
      swarf: 0.1,
      bleed: 2,
    };
  }

  onChange = (obj) => {
    this.setState(obj)
  }

  render() {

    const{centreX, centreY, sides, apothem, height, tabOffset, tabLength, tabDepth, swarf, bleed} = this.state;
    const totalHeight = 30 + apothem*2.5;
    const totalWidth = 30+ apothem * 3+height;
    return (
      <div>
      <h4> Star Generator</h4>
        <Configurator vars={this.state} onChange={this.onChange} />
        <br/>
        <svg ref={z => this.zone = z} width={`${totalWidth}mm`} height={`${totalHeight}mm`} viewBox={`0 0 ${totalWidth} ${totalHeight}`}>
          <PolygonBase centreX={30+apothem} centreY={10+apothem} sides={sides} apothem={apothem} tabOffset={tabOffset} tabLength={tabLength} tabDepth={tabDepth} swarf={swarf} bleed={bleed}/>
          <Side centreX={20+apothem*3+tabDepth+bleed} centreY={10} sides={sides} apothem={apothem} height={height} tabOffset={tabOffset} tabLength={tabLength} tabDepth={tabDepth} swarf={swarf} bleed={bleed}/>
        </svg>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
