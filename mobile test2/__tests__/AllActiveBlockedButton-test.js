"use strict";

import React from 'react';
import renderer from 'react-test-renderer';
import MobileCompany from '../components/MobileCompany';
test('Проверка кнопок "Все, активные, заблокированные"', () => {
  
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

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
 
  // найдём в вёрстке компонента саму кнопку
  const buttonElem = component.root.find(el => el.type=='input' && el.props.data=='all' ); 
  // и "нажмём" на неё
  buttonElem.props.onClick();
  
    // найдём в вёрстке компонента саму кнопку
    const buttonElem2 = component.root.find(el => el.type=='input' && el.props.data=='active' ); 
    // и "нажмём" на неё
    buttonElem2.props.onClick();
     
      // найдём в вёрстке компонента саму кнопку
  const buttonElem3 = component.root.find(el => el.type=='input' && el.props.data=='blocked' ); 
  // и "нажмём" на неё
  buttonElem3.props.onClick();
 

  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // "нажмём" кнопку ещё раз
  buttonElem.props.onClick();
  
  // и получаем окончательный снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  
});
