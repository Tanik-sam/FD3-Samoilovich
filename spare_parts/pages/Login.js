import React from 'react';
import {parts} from '../globalData'
import ReactDOM from 'react-dom';
import './Login.css';
import { BrowserRouter } from 'react-router-dom';
import PagesRouter from './PagesRouter';
import PagesLinks from './PagesLinks';
import isoFetch from 'isomorphic-fetch';
import SpareParts from '../components/SpareParts';
let sp=require('../spareParts.json')



class Login extends React.PureComponent {

/* constructor(props) {
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
    
}*/
constructor (props) {
  super(props);
  this.state = {
    emailError:'',
    passwordError:'',
    emailValid: false,
    passwordValid: false,
    valueE:'',
    valueP:'',
    formValid1:false,
       }
}
handleUserInputE = (eo) => {
  this.setState({valueE:eo.target.value})
  }

handleUserInputP = (eo) => {
  this.setState({valueP:eo.target.value})
  }

validateFieldEmail=()=>{  
  let value= this.state.valueE
      if (value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
          this.setState({emailValid: true,
                        emailError:''})
      }
      else {
          this.setState({emailError: "Неверно введен e-mail!"})
      }
}
validateFieldPassword=()=>{
  let value= this.state.valueP  
      if (value==="123456789"){
          this.setState({passwordValid: true,
                        passwordError: ""} )
      }
      else {
        this.setState({passwordError: "Неверно введен пароль!"})
    }
}
onclickBtn=()=>{
  this.setState({formValid1:true})
  console.log(this.state.formValid1)
}

render () {
  let spareParts=sp.slice(1) 
  let columnName=sp[0]
   
  let formValid=false;
  if (this.state.passwordValid==true && this.state.passwordValid==true){
      formValid=true
  }
  
  if (this.state.formValid1==false){
  return (
    <form className="Form">
      <h2>Вход</h2>
      <div className="form-group">
        <label className="form-group-label" htmlFor="email">Адрес почты</label>
        <input className="form-group-input" type="email"   value={this.state.valueE} onChange={this.handleUserInputE} onBlur={this.validateFieldEmail}/>
        <span>{this.state.emailError}</span>
      </div>
      <div className="form-group">
        <label className="form-group-label" htmlFor="password">Пароль</label>
        <input className="form-group-input" type="password"   value={this.state.valueP} onChange={this.handleUserInputP} onBlur={this.validateFieldPassword} />
        <span>{this.state.passwordError}</span>
      </div>
      <button type="submit" className="form-group-btn" disabled={!formValid} onClick={this.onclickBtn}>
         Войти
      </button>
     
    </form>
  )
}
if (this.state.formValid1==true){
  return (
  <SpareParts spParts={spareParts} columnName={columnName} adm={true}/>)
}
  }
}
export default Login;


