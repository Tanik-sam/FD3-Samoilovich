"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import IShop3 from './components/IShop3';

let marketNameText='Яблыка на талерке';
let goods=require('./goods.json');
let columnGoods=[ 
    {text:'название',code:1}, 
    {text:'цена',code:2}, 
    {text:'URL фото',code:3},
    {text:'единиц на складе',code:4} 
  ];

ReactDOM.render(
  <IShop3 
  marketName={marketNameText}
  rowG={goods}
  columnG={columnGoods}
  startWorkMode={1}
  />
  , document.getElementById('container') 
);



