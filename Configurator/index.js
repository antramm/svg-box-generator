import React from 'react';
import './styles.css';

const capitalize = string => string.charAt(0).toUpperCase() + string.slice(1);
const camel2label = string => capitalize(string).split(/(?=[A-Z])/).join(" ");

export default ({vars, onChange}) => (
  <div className="configurator">
    {Object.keys(vars).map((key,i) => (
      <label key={key} className="configurator-label">
        <span className="configurator-label-text">{camel2label(key)}</span>
        <input 
          className="configurator-label-input"
          type="number" 
          value={vars[key]}
          onChange={e => onChange({[key]:+e.target.value})}
        />
      </label>
    ))}
  </div>
);
