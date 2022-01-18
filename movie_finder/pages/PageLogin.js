import React from 'react';
import MoviePage from '../components/MoviePage';
import './PageLogin.css';
import { NavLink } from 'react-router-dom';
import MoviePageDetail from '../components/MoviePageDetail';
import { initializeApp } from 'firebase/app';
let moviesArr=require('../movies.json')
  
class PageLogin extends React.PureComponent {
  constructor (props) {
    super(props);
    this.state = {
      emailError:'',
      passwordError:'',
      nameValid:false,
      emailValid: false,
      passwordValid: false,
      passwordValid2: false,
      valueE:'',
      valueP:'',
      valueP2:'',
      valueN:'',
      formValid1:false,
         }
  }
  handleUserInputE = (eo) => {
    this.setState({valueE:eo.target.value})
    }

    handleUserInputN= (eo) => {
      this.setState({valueN:eo.target.value})
      }
  
  handleUserInputP = (eo) => {
    this.setState({valueP:eo.target.value})
    }

    handleUserInputP2 = (eo) => {
      this.setState({valueP2:eo.target.value})
      }
  
  validateFieldEmail=()=>{  
    let value= this.state.valueE
        if (value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)){
            this.setState({emailValid: true,
                          emailError:''})
        }
        else {
            this.setState({emailError: "INCORRECT E-MAIL!"})
        }
  }
  validateFieldName=()=>{
    let value= this.state.valueN
    if ((value.match(/[\d\w/]/))&&(value!='')){
        this.setState({nameValid: true,
                      nameError:''})
    }
    else {
        this.setState({nameError: "INCORRECT NAME!"})
    }
  }
  validateFieldPassword=()=>{
    let value= this.state.valueP  
        if (value==="123456789"){
            this.setState({passwordValid: true,
                          passwordError: ""} )
        }
        else {
          this.setState({passwordError: "INCORRECT PASSWORD!"})
      }
  }
  validateFieldPassword2=()=>{
    let value1= this.state.valueP  
    let value2= this.state.valueP2
        if (value1===value2){
            this.setState({passwordValid2: true,
                          passwordError: ""} )
        }
        else {
          this.setState({passwordError: "PASSWORDS MISMATCH!"})
      }
  }
  onclickBtn=()=>{
    this.setState({formValid1:true})
  }
  
  render () {
    let movies=moviesArr 
    let btn='btnSignIn'
    let btn1='btnSignIn1'
    let formValid=false;
    if (this.props.match.params.clid=='create'){
        if (this.state.passwordValid==true && this.state.emailValid==true&& this.state.nameValid==true&& this.state.passwordValid2==true){
            formValid=true
            btn='btnSignIn1'
            btn1='btnSignIn'
        }
   }
    if (this.props.match.params.clid=='login'){
      if (this.state.passwordValid==true && this.state.emailValid==true){
          formValid=true
          btn='btnSignIn1'
          btn1='btnSignIn'
      }
    }

 switch (this.props.match.params.clid){
 case 'login':
  return (<form className="Form">
  <img className='FormLogo' src="../logo.png"/> 
   <h2>Connect</h2>
   
   <div className="form-group">
       <div className="pass-em-group">
           <div className='mail'>  <img src="../user_icon.png" width={30}/></div>
           <input className="form-group-input" type="email" placeholder="E-mail"  value={this.state.valueE} onChange={this.handleUserInputE} onBlur={this.validateFieldEmail}/>
        </div>
        <span>{this.state.emailError}</span>
   </div>
   <div className="form-group">
     <div className="pass-em-group">
           <div className='password'>  <img src="../password_icon.png" width={30}/></div>
     <input className="form-group-input" type="password"  placeholder="Password" value={this.state.valueP} onChange={this.handleUserInputP} onBlur={this.validateFieldPassword} />
     </div>
     <span>{this.state.passwordError}</span>
   </div>
   <button type="submit" className={btn} disabled={!formValid} onClick={this.onclickBtn}>
       Sign in
       </button>
       <button type="submit" className={btn1} disabled={!formValid} onClick={this.onclickBtn}>
       <NavLink to={"/"+'main'+"/"+'main'} className="PageLink3" activeClassName="ActivePageLink3"> Sign in</NavLink>
       </button>
   <button type="submit" className="btnSignInF" disabled={!formValid} onClick={this.onclickBtn}>
   Sign in with Facebook
   </button>
   <button type="submit" className="btnSignInG" disabled={!formValid} onClick={this.onclickBtn}>
   Sign in with Google
   </button>
   <div className='CreateAcc'>
   <NavLink to={"/"+'create'+"/"+'create'} className="PageLink" activeClassName="ActivePageLink">Do you have an account? Create here</NavLink>
   </div>
 </form>
 )
 break;
 case 'create':
    return (<form className="Form">
       <h2>Create an account</h2>
       
       <div className="form-group">
           <div className="pass-em-group">
               <div className='mail'>  <img src="../user_icon.png" width={30}/></div>
               <input className="form-group-input" type="name" placeholder="Name"  value={this.state.valueN} onChange={this.handleUserInputN} onBlur={this.validateFieldName}/>
            </div>
            <span>{this.state.nameError}</span>
       </div>
       <div className="form-group">
           <div className="pass-em-group">
               <div className='mail'>  <img src="../user_icon.png" width={30}/></div>
               <input className="form-group-input" type="email" placeholder="e-mail"  value={this.state.valueE} onChange={this.handleUserInputE} onBlur={this.validateFieldEmail}/>
            </div>
            <span>{this.state.emailError}</span>
       </div>      
       <div className="form-group">
         <div className="pass-em-group">
               <div className='password'>  <img src="../password_icon.png" width={30}/></div>
         <input className="form-group-input" type="password"  placeholder="Password" value={this.state.valueP} onChange={this.handleUserInputP} onBlur={this.validateFieldPassword} />
         </div>
         <span>{this.state.passwordError}</span>
       </div>
       <div className="form-group">
         <div className="pass-em-group">
               <div className='password'>  <img src="../password_icon.png" width={30}/></div>
         <input className="form-group-input" type="password"  placeholder="Confirm password" value={this.state.valueP2} onChange={this.handleUserInputP2} onBlur={this.validateFieldPassword2} />
         </div>
         <span>{this.state.passwordError}</span>
       </div>
      
       <button type="submit" className={btn} disabled={!formValid} onClick={this.onclickBtn}>
       Sign in
       </button>
       <button type="submit" className={btn1} disabled={!formValid} onClick={this.onclickBtn}>
       <NavLink to={"/"+'main'+"/"+'main'} className="PageLink3" activeClassName="ActivePageLink3"> Sign in</NavLink>
       </button>
       <button type="submit" className="btnSignInF" disabled={!formValid} onClick={this.onclickBtn}>
       Sign in with Facebook
       </button>
       <button type="submit" className="btnSignInG" disabled={!formValid} onClick={this.onclickBtn}>
       Sign in with Google
       </button>
       <div className='Terms'>
       By registrating, you confirm that you accept our<NavLink to={"/"+'terms'+"/"+'terms'} className="PageLink2" activeClassName="ActivePageLink2">Terms of service</NavLink>
       </div>
     </form>
     )
   break;  
   case 'terms':
    return (<div className='TermsOfService'>
      <h2>Terms of Service Agreement</h2>
<p>The Terms of Service Agreement is mainly used for legal purposes by companies which provide software or services, such as web browsers, e-commerce, web search engines, social media, and transport services.</p><p>

A legitimate terms-of-service agreement is legally binding and may be subject to change. Companies can enforce the terms by refusing service. Customers can enforce by filing a lawsuit or arbitration case if they can show they were actually harmed by a breach of the terms. There is a heightened risk of data going astray during corporate changes, including mergers, divestitures, buyouts, downsizing, etc., when data can be transferred improperly.</p>
    </div>)
   
   break;
   case 'main':
         return (
          <MoviePage movies={movies}/>
                     )
        break;
  
    }
    for (let i=0;i<movies.length;i++){
    if (this.props.match.params.clid==movies[i].show.id){
      
      return(
        <MoviePageDetail key={movies[i].show.id} info={movies[i]}/>
      )
    }
  }

  }
}
    
export default PageLogin;


    