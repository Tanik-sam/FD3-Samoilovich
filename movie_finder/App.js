"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import Pages from './components/Pages';

let movies=require('./movies.json');

ReactDOM.render(
  
  <Pages className='MoviePages' />

  , document.getElementById('container') 
 
);

