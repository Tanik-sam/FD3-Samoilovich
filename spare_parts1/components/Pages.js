import React from 'react';
import ReactDOM from 'react-dom';
import './Pages.css';
import { BrowserRouter } from 'react-router-dom';
import PagesRouter from '../pages/PagesRouter';
import PagesLinks from '../pages/PagesLinks';
import {spEvents} from './events';

class Pages extends React.PureComponent {


  render() {
 let spareParts=this.props.spareParts
  let pageTotal= parseInt(spareParts.length/10)+1
  let page=[]
     for (let i=0;i<pageTotal; i++){
      page[i]=i+1
  }  
  page.push('Все')
  var linkSheet=page.map(p=><PagesLinks   key={p+'l'} pageNum={p}/>)
  var routeSheet=page.map(p=><PagesRouter key={p+'p'} pageNum={p}/>)

    return (
  <BrowserRouter>
  <div className='SpareParts'>
      {routeSheet}
      {linkSheet}
      
      </div>
   </BrowserRouter>
 
);
    }
  }
export default Pages;