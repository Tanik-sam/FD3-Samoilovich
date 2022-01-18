"use strict";

import React from 'react';
import renderer from 'react-test-renderer';
import SpareParts from '../components/SpareParts';
let sp=require('../spareParts.json')
test('Проверка кнопок "Удалить"', () => {
    
  let columnName=sp[0]   
  let spareParts=sp.slice(1) 

    // создаём тестовую версию компонента
   
    const component = renderer.create(
      <SpareParts spParts={spareParts} columnName={columnName}/>
      
    );
   
    
 
  let sParts=spareParts

  // получаем снэпшот (HTML-снимок) компонента для сверки, что вёрстка не испортилась
  let componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();
  for (let i=0;i<sParts.length;i++){
  // найдём в вёрстке компонента саму кнопку
  console.log (sParts.length)
  let dataDel='del'+sParts[i].code
  console.log (i)
  console.log (dataDel)
  const buttonElem = component.root.find(el => el.type=='input' && el.props.data==dataDel ); 
  console.log (buttonElem)
  
  buttonElem.props.onClick();
  }

  // получаем уже изменённый снэпшот
  componentTree=component.toJSON();
  expect(componentTree).toMatchSnapshot();

  
});
