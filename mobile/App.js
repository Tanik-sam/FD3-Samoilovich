"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let companyName='Velcom';
let clientsArr=[ 
  {id:101, surname:"Иванов",nameCl:"Иван",patronymic:"Иванович", balance:2}, 
  {id:102, surname:"Сидоров ",nameCl:"Сидор",patronymic:"Сидорович ", balance:250}, 
  {id:103, surname:"Петров",nameCl:"Петр",patronymic:"Петрович", balance:180}, 
  {id:104, surname:"Григорьев",nameCl:"Григорий",patronymic:"Григорьевич", balance:0}, 
 ];

 let columnName=[ 
  {text:'Фамилия',code:0}, 
  {text:'Имя',code:1}, 
  {text:'Отчество',code:2},
  {text:'Баланс',code:3},
  {text:'Статус',code:4},
  {text:'Редактировать',code:5},
  {text:'Удалить',code:6},
];


ReactDOM.render(
  <MobileCompany 
    name={companyName}
    clients={clientsArr}
    columnName={columnName}
  />
  , document.getElementById('container') 
);

