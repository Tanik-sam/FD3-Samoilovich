import React from 'react';
import PropTypes from 'prop-types';

import './SparePartsItemCard.css';
import {spEvents} from './events';
class SparePartsItemCard extends React.Component {

  static propTypes = {
    info:PropTypes.shape({
      spName: PropTypes.string.isRequired,
      articul: PropTypes.string.isRequired,
      articulCode: PropTypes.string.isRequired,
      quantity:PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      priceNDS: PropTypes.number.isRequired,
      equipment: PropTypes.string.isRequired,
      
    })
  }
 
state={
  saveMode: 1,
 
}
   
   defaultPosition=(eo)=>{
    
    spEvents.emit('SpDefault',false)
    this.setState({saveMode:1}) 

   }

  savePosition=(eo)=>{
 
      this.setNewSpName (); 
      this.setNewArticul ();
      this.setNewQuantity ();
      this.setNewPrice ();
      let t={articulCode:this.props.info.articulCode,spName:this.newSpNameRef.value,nameCl:this.newArticulRef.value,patronymic:this.newPriceRef.value, balance:parseInt(this.newQuantityRef.value)}
      console.log('t',t)
      spEvents.emit('SpSave',t); 
  
  }

   newSpNameRef = this.props.info.spName;
   newArticulRef = this.props.info.articul;
   newPriceRef = this.props.info.price;
   newQuantityRef = this.props.info.quantity;
   
//-----------------------------------------------------
  setNewSpNameRef = (ref) => {
    this.newSpNameRef=ref;

  };

  setNewSpName = () => {
    if ( this.newSpNameRef ) { 
      let newSpName=this.newSpNameRef.value;
           
    }
  }; 
  checkSurnameValue=()=>{
    if (this.newSpNameRef.value==''){
      this.setState({saveMode:0}) }
      else{
      this.setState({saveMode:1}) 
      }
    
   }
//-----------------------------------------------------
  setNewArticulRef = (ref) => {
    this.newArticulRef=ref;
  };

  setNewArticul = () => {
    if ( this.newArticulRef ) { 
      let newNameCl=this.newArticulRef.value;
        
    }
  }; 
  checkNameClValue=()=>{
    if (this.newArticulRef.value==''){
      this.setState({saveMode:0})  }
      else{
        this.setState({saveMode:1}) 
        }
   }
  //-----------------------------------------------------
  setNewQuantityRef = (ref) => {
    this.newPriceRef=ref;
  };

  setNewQuantity = () => {
    if ( this.newPriceRef ) { 
      let newPatronymic=this.newPriceRef.value;
        
    }
  }; 
  checkPatronymicValue=()=>{
    if (this.newPriceRef.value==''){
      this.setState({saveMode:0}) }
      else{
      this.setState({saveMode:1}) 
      }
  }
  //-----------------------------------------------------
  setNewPriceRef = (ref) => {
    this.newQuantityRef=ref;
  };

  setNewPrice = () => {
    if ( this.newQuantityRef ) { 
      let newBalance=this.newQuantityRef.value;
     
    }
  }; 
  checkBalancecValue=()=>{
    if (this.newBalancecRef.value==''){
      this.setState({saveMode:0}) }
      else{
      this.setState({saveMode:1}) 
      }
    }
  //-----------------------------------------------------


  render() {

    
    if (this.props.cardMode==1){

    return (
      
<div className="SparePartsItemCard">
        <legend className="MobileCompanyName">{"Карточка клиента"}</legend>
          <table className='itemData'>
            <tbody>

              <tr>
                <td className='itemData'>
                  {this.props.nameRow[0].text}
                </td>
                <td className='itemData'>
                  {this.props.info.spName}
                </td>
              </tr>
              <tr>
                <td className='itemData'>
                  {this.props.nameRow[1].text}
                </td>
                <td  className='itemData'>
                  {this.props.info.articul}
                </td>  
              </tr> 
              <tr>
                <td className='itemData'>
                  {this.props.nameRow[2].text}
                </td>
                <td  className='itemData'>
                  {this.props.info.price}
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
          
              <td className={this.props.info.quantity >0?"StatusActive":"StatusBlocked"}>{this.props.info.quantity >0?"active":"blocked"}
              </td>
                 
              </tr> 
            
        </tbody>
        </table>
      </div> 

        
 
    )   }
    else     {
    return (
      <div className="SparePartsItemCard">
        <legend className="MobileCompanyName">{"Изменение карточки клиента"}</legend>
          <table className='itemData2'>
            <tbody>
              <tr className='itemData2'>
                <td className='itemData2'>
                  {this.props.nameRow[0].text}
                </td>
                <td className='itemData2'>      
                {this.props.info.spName}
                </td>
                <td>
                  <input className='itemData2' type="text" defaultValue={this.props.info.spName} ref={this.setNewSpNameRef} onBlur={this.checkSurnameValue}/> 
                </td>
                
              </tr>
              <tr>
                <td className='itemData2'>
                  {this.props.nameRow[1].text}
                </td>
                <td className='itemData2'>
                {this.props.info.articul}
                </td>
                <td className='itemData2'>
                  <input className='itemData2' type="text" defaultValue={this.props.info.articul} ref={this.setNewArticulRef} onBlur={this.checkNameClValue}/>
                </td>
              
              </tr>
              <tr>
                <td className='itemData2'>
                  {this.props.nameRow[2].text}
                </td>
                <td  className='itemData2'>
                {this.props.info.price}
                </td>  
                <td className='itemData2'>
                  <input className='itemData2' type="text" defaultValue={this.props.info.price} ref={this.setNewQuantityRef} onBlur={this.checkPatronymicValue}/>
                </td>
               
              </tr> 
              <tr>
                <td className='itemData2'>
                  {this.props.nameRow[3].text}
                </td>
                <td  className='itemData2'>
                  {this.props.info.quantity}
                </td>  
                <td className='itemData2'>
                  <input className='itemData2' type="text" defaultValue={this.props.info.quantity} ref={this.setNewPriceRef} onBlur={this.checkBalanceValue}/>
                </td>
               
              </tr> 
              <tr>
                <td className='itemData2'>
                {this.props.nameRow[4].text}
                </td>
                <td className={this.props.info.quantity>0?"StatusActive":"StatusBlocked"}>{this.props.info.quantity>0?"active":"blocked"}
              </td>
              <td className='itemData2'>

                </td>
              </tr> 
             <tr>
                 <td  className='itemData2'>
                   <input className="CardButton" type='button' value='СОХРАНИТЬ' onClick={this.savePosition} disabled={this.state.saveMode==0} />   
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

  export default SparePartsItemCard;
