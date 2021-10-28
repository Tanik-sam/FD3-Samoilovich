"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import IShop3 from './components/IShop3';

let marketNameText='Яблык на талерке';
let goods=require('./goods.json');
let columnGoods=[ 
    {text:'название',code:0}, 
    {text:'цена',code:1}, 
    {text:'URL фото',code:2},
    {text:'фото',code:3},
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



