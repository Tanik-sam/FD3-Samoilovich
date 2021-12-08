"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import SpareParts from './components/SpareParts';
import { BrowserRouter } from 'react-router-dom';

let spareParts=require('./spareParts.json');


 

 let columnName=[ 
  {text:'Название',code:0}, 
  {text:'Артикул',code:1}, 
  {text:'Код',code:2},
  {text:'Цена без НДС',code:3},
  {text:'Цена с НДС',code:4},
  {text:'Оборудование',code:5},
  {text:'Количество',code:6},
  {text:'Статус',code:7},
  {text:'Редактировать',code:8},
  {text:'Удалить',code:9}];


ReactDOM.render(
  <BrowserRouter>
  <SpareParts
    spParts={spareParts}
    columnName={columnName}
  />
   </BrowserRouter>
  , document.getElementById('container') 
 
);

