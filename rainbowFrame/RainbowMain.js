"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import RainbowFrame from './components/RainbowFrame';

let childText='Hello';
let colors=['#ff6677','#ffa457','#ffed00','#89ff51','#7ffffe','#6798ff','#c87cff']

ReactDOM.render(
  <RainbowFrame 
  childText={childText}
  colors={colors}
  />
  , document.getElementById('container') 
);

