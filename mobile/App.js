"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import MobileCompany from './components/MobileCompany';

let companyName='Velcom';
let clientsArr=[ 
  {id:101, surname:"Иванов",nameCl:"Иван",partonymic:"Иванович",fio:"Иванов И.И.", balance:2}, 
  {id:102, surname:"Сидоров ",nameCl:"Сидор",partonymic:"Сидорович ",fio:"Сидоров С.С.", balance:250}, 
  {id:103, surname:"Петров",nameCl:"Петр",partonymic:"Петрович",fio:"Петров П.П.", balance:180}, 
  {id:104, surname:"Григорьев",nameCl:"Григорий",partonymic:"Григорьевич",fio:"Григорьев Г.Г.", balance:0}, 
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

