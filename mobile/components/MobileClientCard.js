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
      balance: PropTypes.number.isRequired,
      
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
    
    //this.setState({saveMode:0}) 
    this.setState({surnameDefault:this.props.info.surname})
    this.setState({nameClDefault:this.props.info.nameCl})
    this.setState({patronymicDefault:this.props.info.patronymic})
    this.setState({balanceDefault:this.props.info.balance})
    let tt= {id:this.props.info.id,surname:this.state.surnameDefault,nameCl:this.state.nameClDefault,patronymic:this.state.patronymicDefault, balance:this.state.balanceDefault}
    clientEvents.emit('ClientDefault',tt)
   }

  savePosition=(eo)=>{
      //this.setState({saveMode:0})  
      
      let t={id:this.props.info.id,surname:this.state.surnameDefault,nameCl:this.state.nameClDefault,patronymic:this.state.patronymicDefault, balance:this.state.balanceDefault}
      console.log('t',t)
      clientEvents.emit('ClientSave',t); 
      this.setNewSurname ();
  }

   newSurnameRef = null;

  setNewSurnameRef = (ref) => {
    this.newSurnameRef=ref;
    console.log(this.newSurnameRef.value)
  };

  setNewSurname = () => {
    if ( this.newSurnameRef ) { 
      let newSurname=this.newSurnameRef.value;
      this.setState({surnameDefault:newSurname});
      console.log(this.state.surnameDefault)
      
    }
  }; 

  
 

  

  nameClChangedValue=(eo)=>{
    this.setState({nameClDefault:eo.target.value});
    this.setState({saveMode:0}) 
           
   }
    
  
   partonymicChangedValue=(eo)=>{
    this.setState({partonymicDefault:eo.target.value});
    this.setState({saveMode:0}) 
   }
   balanceChangedValue=(eo)=>{
    this.setState({balanceDefault:eo.target.value});
    this.setState({saveMode:0}) 
   }
  
 

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
              <td className={this.props.info.balance>0?"StatusActive":"StatusBlocked"}>{this.props.info.balance>0?"active":"blocked"}
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
                  <input className='itemData2' type="text" defaultValue={this.state.surnameDefault} ref={this.setNewSurnameRef}/> 
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
                  <input className='itemData2' type="text" 
                 onChange={this.priceChangedValue}/>
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
                  <input className='itemData2' type="text" 
                 onChange={this.quatityChangedValue}/>
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
                  <input className='itemData2' type="text"
                 onChange={this.quatityChangedValue}/>
                </td>
               
              </tr> 
              <tr>
                <td className='itemData2'>
                {this.props.nameRow[4].text}
                </td>
              <td className={this.props.info.balance>0?"StatusActive":"StatusBlocked"}>{this.props.info.balance>0?"active":"blocked"}
              </td>
              <td className='itemData2'>
                  <input className='itemData2' type="text" onBlur={this.checkQuantityValue} value={this.state.quantityDefault} 
                 onChange={this.quatityChangedValue}/>
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
