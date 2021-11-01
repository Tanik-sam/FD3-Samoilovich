"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame from './components/RainbowFrame';

let childText='Hello';
let colors=['red','orange','yellow','green','#00BFF','blue','purpule']

ReactDOM.render(
  <RainbowFrame 
  childText={childText}
  colors={colors}
  />
  , document.getElementById('container') 
);

