"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import SpareParts from './components/SpareParts';

let spareParts=require('./spareParts.json');


 

 let columnName=[ 
  {text:'Название',code:0}, 
  {text:'Артикул',code:1}, 
  {text:'Код',code:2},
  {text:'Количество',code:3},
  {text:'Цена без НДС',code:4},
  {text:'Цена с НДС',code:5},
  {text:'Оборудование',code:6},
  {text:'Статус',code:7},
  {text:'Редактировать',code:8},
  {text:'Удалить',code:9}];


ReactDOM.render(
  <SpareParts
    spParts={spareParts}
    columnName={columnName}
  />
  , document.getElementById('container') 
);

