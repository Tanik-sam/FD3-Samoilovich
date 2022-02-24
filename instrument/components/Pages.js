import React from 'react';
import {parts} from '../globalData'
import ReactDOM from 'react-dom';
import './Pages.css';
import { BrowserRouter } from 'react-router-dom';
import PagesRouter from '../pages/PagesRouter';
import PagesLinks from '../pages/PagesLinks';
import isoFetch from 'isomorphic-fetch';
import Catalog from './Catalog';
import {spEvents} from './events';
let sp=require('../spareParts.json')


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
    catalogState:"openCat",

 
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
    spEvents.addListener('EquipmentClicked',this.EquipmentClicked);
  };
   componentWillUnmount = () => {
    spEvents.removeListener('EquipmentClicked',this.EquipmentClicked);
    };
    
    EquipmentClicked =(eq)=>{
    function f1(v,i,a){return v.equipment==eq}
    let allTools=[...this.state.spareParts];
    let allToolsFiltered=allTools.filter(f1)
    console.log( allToolsFiltered)
    function f2(v,i,a){return v.subcategory!=false} 
    let subCat=allToolsFiltered=allTools.filter(f2) 
    console.log(subCat) }
    closeCatalog=()=>{
      this.setState({catalogState:"closeCat"})
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
  
  let equipment=this.state.spareParts.map(v=> v.equipment);
  let equipment2=this.state.spareParts.map(v=>[v.equipment,v.subcategory]);
  
  function unique(anyArray){
     
    let eq1=anyArray[1]
    let uniqEq=[]
    uniqEq.push(eq1)
    
    for(let i=2; i<anyArray.length; i++){
    if (anyArray[i]!=eq1){
        uniqEq.push(anyArray[i]);
        eq1=anyArray[i]
      }
    }
    return(uniqEq)
  } 
  let uniqueEquip=unique(equipment)
  
  var linkSheet=page.map(p=><PagesLinks   key={p+'l'} pageNum={p}/>)
  var routeSheet=page1.map(p=><PagesRouter key={p+'p'} pageNum={p}/>)
  var catalog=uniqueEquip.map(p=><Catalog key={p+'p'} eq={p} />)
   
    return (
  <BrowserRouter>
  <div className='SpareParts'>
  
   
      <div className={this.state.catalogState} onClick={this.closeCatalog}>{catalog}</div>
      <div className="Cat">{routeSheet}</div>
      <div className='Links' >{linkSheet}</div>
       
       
      </div>
      
   </BrowserRouter>
 
);
    }
  }

export default Pages;



