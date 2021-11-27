"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import SpareParts from './components/SpareParts';

let spareParts=require('./spareParts.json');


let clientsArr=[ 
  {id:101, surname:"Иванов",nameCl:"Иван",patronymic:"Иванович", balance:2}, 
  {id:102, surname:"Сидоров ",nameCl:"Сидор",patronymic:"Сидорович ", balance:250}, 
  {id:103, surname:"Петров",nameCl:"Петр",patronymic:"Петрович", balance:180}, 
  {id:104, surname:"Григорьев",nameCl:"Григорий",patronymic:"Григорьевич", balance:0}, 
 ];

 let columnName=[ 
  {text:'Название',code:0}, 
  {text:'Артикул',code:1}, 
  {text:'Код',code:2},
  {text:'Количество',code:3},
  {text:'Цена без НДС',code:4},
  {text:'Цена с НДС',code:5},
  {text:'Оборудование',code:6},
  {text:'Редактировать',code:7},
  {text:'Удалить',code:8}];


ReactDOM.render(
  <SpareParts
    spParts={spareParts}
    columnName={columnName}
  />
  , document.getElementById('container') 
);

