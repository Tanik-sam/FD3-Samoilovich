"use strict";

import React from 'react';
import renderer from 'react-test-renderer';
import MobileCompany from '../components/MobileCompany';
test('Проверка кнопок "Удалить"', () => {
  
  // создаём тестовую версию компонента
   const component = renderer.create(
    <MobileCompany clients={[ 
      {id:101, surname:"Иванов",nameCl:"Иван",patronymic:"Иванович", balance:2}, 
      {id:102, surname:"Сидоров ",nameCl:"Сидор",patronymic:"Сидорович ", balance:250}, 
      {id:103, surname:"Петров",nameCl:"Петр",patronymic:"Петрович", balance:180}, 
      {id:104, surname:"Григорьев",nameCl:"Григорий",patronymic:"Григорьевич", balance:0}, 
     ]} columnName={[ 
      {text:'Фамилия',code:0}, 
      {text:'Имя',code:1}, 
      {text:'Отчество',code:2},
      {text:'Баланс',code:3},
      {text:'Статус',code:4},
      {text:'Редактировать',code:5},
      {text:'Удалить',code:6},
    ]}/>
    
  );
  let clients=[ 
    {id:101, surname:"Иванов",nameCl:"Иван",patronymic:"Иванович", balance:2}, 
    {id:102, surname:"Сидоров ",nameCl:"Сидор",patronymic:"Сидорович ", balance:250}, 
    {id:103, surname:"Петров",nameCl:"Петр",patronymic:"Петрович", balance:180}, 
    {id:104, surname:"Григорьев",nameCl:"Григорий",patronymic:"Григорьевич", balance:0}, 
   ]

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  for (let i=0;i<clients.length;i++){
  // найдём в вёрстке компонента саму кнопку
  console.log (clients.length)
  let dataDel='del'+clients[i].id
  console.log (i)
  console.log (dataDel)
  const buttonElem = component.root.find(el => el.type=='input' && el.props.data==dataDel ); 
  console.log (buttonElem)

  buttonElem.props.onClick();
  }

  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // "нажмём" кнопку ещё раз
  buttonElem.props.onClick();
  
  // и получаем окончательный снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  
});
