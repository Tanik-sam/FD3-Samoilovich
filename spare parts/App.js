"use strict";

import React from 'react';
import ReactDOM from 'react-dom';

import SpareParts from './components/SpareParts';
import { BrowserRouter } from 'react-router-dom';
import PagesRouter from './pages/PagesRouter';
import PagesLinks from './pages/PagesLinks';

let spareParts=require('./spareParts.json');


 
  let pageTotal= parseInt(spareParts.length/10)
  let page=[]
     for (let i=0;i<pageTotal; i++){
      page[i]=i+1
  }  
  var linkSheet=page.map(p=><PagesLinks   key={p} pageNum={p}/>)
  var routeSheet=page.map(p=><PagesRouter key={p} pageNum={p}/>)

ReactDOM.render(
  <BrowserRouter>
  <div className='SpareParts'>
      {routeSheet}
      {linkSheet}
      
      </div>
   </BrowserRouter>
  , document.getElementById('container') 
 
);

  //<SpareParts    spParts={spareParts}    columnName={columnName}  />