import React, { Component } from 'react';
import { render } from 'react-dom';
import Configurator from './Configurator';
import { arc, pie, star, onePolygonSide } from './svgutils';
import PolygonBase from './polygon_base';
import './style.css';




class App extends Component {
  constructor() {
    super();
    this.state = {
      centreX: 200,
      centreY: 200,
      sides: 5,
      apothem: 80,
      tabOffset: 24,
      tabLength: 24,
      tabDepth: 12,
      swarf: 0,
      bleed: 0,
    };
  }

  onStartChange = (e) => {
    this.setState({
      starPoints: e.target.value
    })
  }

  onChange = (obj) => {
    this.setState(obj)
  }

  render() {

    const{centreX, centreY, sides, apothem, tabOffset, tabLength, tabDepth, swarf, bleed} = this.state;

    const point = {x:100,y:100};
    return (
      <div>
      <h4> Star Generator</h4>
        <Configurator vars={this.state} onChange={this.onChange} />
        <br/>
        <svg ref={z => this.zone = z} width="400px" height="400px" viewBox="0 0 400 400">
          <rect width="600" height="600" fill="transparent" />
          <PolygonBase centreX={centreX} centreY={centreY} sides={sides} apothem={apothem} tabOffset={tabOffset} tabLength={tabLength} tabDepth={tabDepth} />
        </svg>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
