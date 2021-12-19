"use strict";

import React from 'react';
import renderer from 'react-test-renderer';
import SpareParts from '../components/SpareParts';
let sp=require('../spareParts.json')

test('Проверка кнопки "Добавить"', () => {
  let columnName=sp[0]   
  let spareParts=sp.slice(1) 
  // создаём тестовую версию компонента
 
  const component = renderer.create(
    <SpareParts spParts={spareParts} columnName={columnName}/>
    
  );

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
 
  // найдём в вёрстке компонента саму кнопку
  const buttonElem = component.root.find(el => el.type=='input' && el.props.data=='add' );//  && el.props.aaa == 'bbb' ); 
  // и "нажмём" на неё
  buttonElem.props.onClick();
 

  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  // "нажмём" кнопку ещё раз
  buttonElem.props.onClick();
  
  // и получаем окончательный снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  
});
