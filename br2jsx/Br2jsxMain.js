"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import Br2jsx from './components/Br2jsx';

let textBr=require('./textBr.json');


ReactDOM.render(
  <Br2jsx 
    textBr={textBr.text}
  />
  , document.getElementById('container') 
);

