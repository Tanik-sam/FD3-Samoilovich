import React from 'react';
import ReactDOM from 'react-dom';
import './Pages.css';
import { BrowserRouter } from 'react-router-dom';
import PagesRouter from '../pages/PagesRouter';
import PagesLinks from '../pages/PagesLinks';
import {spEvents} from './events';
import isoFetch from 'isomorphic-fetch';

class Pages extends React.PureComponent {

 constructor(props) {
    super(props);
    // this.loadData();
    // не надо запускать асинхронные или долгие операции из конструктора
    // конструктор инициализирует только КЛАСС, это ещё не React-компонент
    // конструктор должен быть лёгким и быстрым
  }
    state = {
    dataReady: false,
    name: "???",
    sp_Parts: [],
    column_Name: [],
  };
  fetchError = (errorMessage) => {
    console.error(errorMessage);
  };

  fetchSuccess = (loadedData) => {
    console.log(loadedData);
    this.setState({
      dataReady:true,
      column_Name:loadedData.nameArr,
      sp_Parts: loadedData.spArr,
      
    });
    console.log(column_Name)
  };

  loadData = () => {

    isoFetch("http://fe.it-academy.by/EditSite.php?site=37299", {
        method: 'POST',
        headers: {
            "Accept": "application/json",
        },
    })
        .then( response => { // response - HTTP-ответ
            if (!response.ok)
                throw new Error("fetch error " + response.status); // дальше по цепочке пойдёт отвергнутый промис
            else
                return response.json(); // дальше по цепочке пойдёт промис с пришедшими по сети данными
        })
        .then( data => {
            this.fetchSuccess(data); // передаём полезные данные в fetchSuccess, дальше по цепочке пойдёт успешный пустой промис
        })
        .catch( error => {
            this.fetchError(error.message);
        })
    ;

  };
  
  componentDidMount = () => {
    this.loadData();}

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