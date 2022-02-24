import React from 'react';
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
    movies: [],
    menuClassName:'Menu',
   
  };
  fetchError = (errorMessage) => {
    console.error(errorMessage);
   
  };

  fetchSuccess = (loadedData) => {
    this.setState({
      dataReady:true,
       
      movies:loadedData.slice(0),  
      });
       
  }
  loadData = () => {

    isoFetch("http://localhost:3000/movieArr", {
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
menuClicked=()=>{
  if(this.state.menuClassName=="Menu"){
      this.setState({menuClassName:'MenuOpen'})
  }
  else{
    this.setState({menuClassName:'Menu'})  
  }
}


  render() {
    console.log("Pages render");
     if ( !this.state.dataReady )
      return <div>загрузка данных...</div>;
  
      let movie=this.state.movies
  let page=['login', 'create', 'main','terms']
  let page1=['login', 'create', 'main','terms']
  for (let i=0;i<movie.length;i++){
    page[i+5]=movie[i].show.id
  }

  var linkSheet=page1.map(p=><PagesLinks   key={p+'l'} pageNum={p}/>)
  var routeSheet=page.map(p=><PagesRouter key={p+'p'} pageNum={p}/>)

    return (
  <BrowserRouter>
  <div className='MoviePages'>
      {routeSheet}
      <div className='MenuImage' onClick={this.menuClicked}> </div>
      <div className={this.state.menuClassName}>
      {linkSheet}
      </div>
  </div>
   </BrowserRouter>
 
);
    }
  }

export default Pages;
 


