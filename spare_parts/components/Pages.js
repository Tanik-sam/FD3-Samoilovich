import React from 'react';
import {parts} from '../globalData'
import ReactDOM from 'react-dom';
import './Pages.css';
import { BrowserRouter } from 'react-router-dom';
import PagesRouter from '../pages/PagesRouter';
import PagesLinks from '../pages/PagesLinks';
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
    spareParts: [],
    columnName: [],
 
  };
  fetchError = (errorMessage) => {
    console.error(errorMessage);
    this.setState({
      columnName:this.props.spareParts[0],
      spareParts:this.props.spareParts.slice(1)  
    });
  };

  fetchSuccess = (loadedData) => {
    this.setState({
      dataReady:true,
      columnName:loadedData[0],
      spareParts:loadedData.slice(0),  
      });
      parts.push(loadedData)
  }
  loadData = () => {

    isoFetch("http://localhost:3000/spArr", {
        method: 'GET',
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
    this.loadData();
    
}

  render() {
    console.log("Pages render");
     if ( !this.state.dataReady )
      return <div>загрузка данных...</div>;
   
  let pageTotal= parseInt(this.state.spareParts.length/10)+1
  let page=[]
     for (let i=0;i<pageTotal; i++){
      page[i]=i+1
  }  
  page.push('Все')
  var page1=[...page]
  page1.push('admin')
  var linkSheet=page.map(p=><PagesLinks   key={p+'l'} pageNum={p}/>)
  var routeSheet=page1.map(p=><PagesRouter key={p+'p'} pageNum={p}/>)

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
export {parts}


