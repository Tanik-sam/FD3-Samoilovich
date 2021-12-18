"use strict";

import React from 'react';
import ReactDOM from 'react-dom';
import Pages from './components/Pages';


let spareParts=require('./spareParts.json');
global.dataLoadedGlob=[]

ReactDOM.render(
  
  <Pages className='SpareParts' spareParts={spareParts}/>

  , document.getElementById('container') 
 
);

