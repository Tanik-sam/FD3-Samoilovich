import React from 'react';
import PropTypes from 'prop-types';

import './MobileClientCard.css';
import {clientEvents} from './events';
class MobileClientCard extends React.Component {

  static propTypes = {
    info:PropTypes.shape({
      id: PropTypes.number.isRequired,
      surname: PropTypes.string.isRequired,
      nameCl: PropTypes.string.isRequired,
      patronymic: PropTypes.string.isRequired,
      balance: PropTypes.number
      
    })
  }
 
  state = {
    info:this.props.info,
    saveMode: 0,// 0 - сохранять, 1 - не сохранить
    surnameDefault: this.props.info.surname,
    nameClDefault: this.props.info.nameCl,
    patronymicDefault: this.props.info.patronymic,
    balanceDefault:this.props.info.balance,
   }
   
   defaultPosition=(eo)=>{
    
    clientEvents.emit('ClientDefault',false)
   }

  savePosition=(eo)=>{
      //this.setState({saveMode:0})  
      this.setNewSurname (); 
      this.setNewNameCl ();
      this.setNewPatronymic ();
      this.setNewBalance ();
      let t={id:this.props.info.id,surname:this.newSurnameRef.value,nameCl:this.newNameClRef.value,patronymic:this.newPatronymicRef.value, balance:this.newBalanceRef.value}
      console.log('t',t)
      clientEvents.emit('ClientSave',t); 
      
  }

   newSurnameRef = this.props.info.surname;
   newNameClRef = this.props.info.nameCl;
   newPatronymicRef = this.props.info.patronymic;
   newBalanceRef = this.props.info.balance;
   

  setNewSurnameRef = (ref) => {
    this.newSurnameRef=ref;
  };

  setNewSurname = () => {
    if ( this.newSurnameRef ) { 
      let newSurname=this.newSurnameRef.value;
     // this.setState({surnameDefault:newSurname});    
    }
  }; 
//-----------------------------------------------------
  setNewNameClRef = (ref) => {
    this.newNameClRef=ref;
  };

  setNewNameCl = () => {
    if ( this.newNameClRef ) { 
      let newNameCl=this.newNameClRef.value;
      //this.setState({nameClDefault:newNameCl});    
    }
  }; 
  //-----------------------------------------------------
  setNewPatronymicRef = (ref) => {
    this.newPatronymicRef=ref;
  };

  setNewPatronymic = () => {
    if ( this.newPatronymicRef ) { 
      let newPatronymic=this.newPatronymicRef.value;
      //this.setState({partonymicDefault:newPatronymic});    
    }
  }; 
  //-----------------------------------------------------
  setNewBalanceRef = (ref) => {
    this.newBalanceRef=ref;
  };

  setNewBalance = () => {
    if ( this.newBalanceRef ) { 
      let newBalance=this.newBalanceRef.value;
     // this.setState({balanceDefault:newBalance});    
    }
  }; 
  
 

  render() {

    
    if (this.props.cardMode==1){

    return (
      
<div className="MobileClientCard">
        <legend className="MobileCompanyName">{"Карточка клиента"}</legend>
          <table className='itemData'>
            <tbody>

              <tr>
                <td className='itemData'>
                  {this.props.nameRow[0].text}
                </td>
                <td className='itemData'>
                  {this.props.info.surname}
                </td>
              </tr>
              <tr>
                <td className='itemData'>
                  {this.props.nameRow[1].text}
                </td>
                <td  className='itemData'>
                  {this.props.info.nameCl}
                </td>  
              </tr> 
              <tr>
                <td className='itemData'>
                  {this.props.nameRow[2].text}
                </td>
                <td  className='itemData'>
                  {this.props.info.patronymic}
                </td>  
              </tr> 
              <tr>
                <td className='itemData'>
                  {this.props.nameRow[3].text}
                </td>
                <td  className='itemData'>
                  {this.props.info.balance}
                </td>  
              </tr> 
              <tr>
                <td className='itemData'>
                {this.props.nameRow[4].text}
                </td>
              <td className={this.props.info.balance>0?"StatusActive":"StatusBlocked"}>{this.props.info.balance0?"active":"blocked"}
              </td>
                 
              </tr> 
            
        </tbody>
        </table>
      </div> 

        
 
    )   }
    else     {
    return (
      <div className="MobileClientCard">
        <legend className="MobileCompanyName">{"Изменение карточки клиента"}</legend>
          <table className='itemData2'>
            <tbody>
              <tr className='itemData2'>
                <td className='itemData2'>
                  {this.props.nameRow[0].text}
                </td>
                <td className='itemData2'>      
                {this.props.info.surname}
                </td>
                <td>
                  <input className='itemData2' type="text" defaultValue={this.newSurnameRef} ref={this.setNewSurnameRef}/> 
                </td>
                
              </tr>
              <tr>
                <td className='itemData2'>
                  {this.props.nameRow[1].text}
                </td>
                <td className='itemData2'>
                {this.props.info.nameCl}
                </td>
                <td className='itemData2'>
                  <input className='itemData2' type="text" defaultValue={this.newNameClRef} ref={this.setNewNameClRef}/>
                </td>
              
              </tr>
              <tr>
                <td className='itemData2'>
                  {this.props.nameRow[2].text}
                </td>
                <td  className='itemData2'>
                {this.props.info.patronymic}
                </td>  
                <td className='itemData2'>
                  <input className='itemData2' type="text" defaultValue={this.newPatronymicRef} ref={this.setNewPatronymicRef}/>
                </td>
               
              </tr> 
              <tr>
                <td className='itemData2'>
                  {this.props.nameRow[3].text}
                </td>
                <td  className='itemData2'>
                  {this.props.info.balance}
                </td>  
                <td className='itemData2'>
                  <input className='itemData2' type="text" defaultValue={this.newBalanceRef} ref={this.setNewBalanceRef}/>
                </td>
               
              </tr> 
              <tr>
                <td className='itemData2'>
                {this.props.nameRow[4].text}
                </td>
                <td className={this.newBalanceRef.value>0?"StatusActive":"StatusBlocked"}>{this.newBalanceRef.value>0?"active":"blocked"}
              </td>
              <td className='itemData2'>

                </td>
              </tr> 
             <tr>
                 <td  className='itemData2'>
                   <input className="CardButton" type='button' value='СОХРАНИТЬ' onClick={this.savePosition}  />   
                 </td>  
                 <td  className='itemData2'>
                    <input className="CardButton" type='button' value='СБРОСИТЬ' onClick={this.defaultPosition} />   
                 </td>
              </tr>
        </tbody>
        </table>
      </div> 
      )
      }
  }
}

  export default MobileClientCard;
