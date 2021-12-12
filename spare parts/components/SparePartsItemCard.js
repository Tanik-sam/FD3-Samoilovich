import React from 'react';
import PropTypes from 'prop-types';


import './SparePartsItemCard.css';
import {spEvents} from './events';
class SparePartsItemCard extends React.Component {

  static propTypes = {
    info:PropTypes.shape({
      
      code:PropTypes.number.isRequired,
      spName: PropTypes.string.isRequired,
      articul: PropTypes.string.isRequired,
      articulCode: PropTypes.string.isRequired,
      quantity:PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      priceNDS: PropTypes.number.isRequired,
      equipment: PropTypes.string.isRequired,
      urlSP: PropTypes.string.isRequired,
      
    })
  }
 
state={
  saveMode: 1,
}



   
   defaultPosition=(eo)=>{
    const wrapper = document.getElementById('wrapper');
    wrapper.classList.toggle('is-close')
    spEvents.emit('SpDefault',false)
    this.setState({saveMode:1}) 

   }

  savePosition=(eo)=>{
 
      this.setNewSpName (); 
      this.setNewArticul ();
      this.setNewQuantity ();
      this.setNewPrice ();
      let t={code:this.props.info.code, articulCode:this.props.info.articulCode,spName:this.newSpNameRef.value,articul:this.newArticulRef.value,price:this.newPriceRef.value, quantity:parseInt(this.newQuantityRef.value), urlSP:this.newUrlSPRef.value,}
      console.log('t',t)
      spEvents.emit('SpSave',t); 
  
  }

   newSpNameRef = this.props.info.spName;
   newArticulRef = this.props.info.articul;
   newArticulCodeRef = this.props.info.articulCode;
   newPriceRef = this.props.info.price;
   newQuantityRef = this.props.info.quantity;
   newEquipmentRef = this.props.info.equipment;
   
//-----------------------------------------------------
  setNewSpNameRef = (ref) => {
    this.newSpNameRef=ref;

  };

  setNewSpName = () => {
    if ( this.newSpNameRef ) { 
      let newSpName=this.newSpNameRef.value;
           
    }
  }; 
  checkSpNameValue=()=>{
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
      let newArticul=this.newArticulRef.value;
        
    }
  }; 
  checkArticulValue=()=>{
    if (this.newArticulRef.value==''){
      this.setState({saveMode:0})  }
      else{
        this.setState({saveMode:1}) 
        }
   }
   //-----------------------------------------------------
  setNewArticulCodeRef = (ref) => {
    this.newArticulRef=ref;
  };

  setNewArticulCode = () => {
    if ( this.newArticulCodeRef ) { 
      let newArticul=this.newArticulCodeRef.value;
        
    }
  }; 
  checkArticulCodeValue=()=>{
    if (this.newArticulCodeRef.value==''){
      this.setState({saveMode:0})  }
      else{
        this.setState({saveMode:1}) 
        }
   }
  //-----------------------------------------------------
  setNewPriceRef = (ref) => {
    this.newPriceRef=ref;
  };

  setNewPrice = () => {
    if ( this.newPriceRef ) { 
      let newPrice=this.newPriceRef.value;
        
    }
  }; 
  checkPriceValue=()=>{
    if (this.newPriceRef.value==''){
      this.setState({saveMode:0}) }
      else{
      this.setState({saveMode:1}) 
      }
  }
  //-----------------------------------------------------
  setNewQuantityRef = (ref) => {
    this.newQuantityRef=ref;
  };

  setNewQuantity = () => {
    if ( this.newQuantityRef ) { 
      let newQuantity=this.newQuantityRef.value;
     
    }
  }; 
  checkQuantityValue=()=>{
    if (this.newQuantityRef.value==''){
      this.setState({saveMode:0}) }
      else{
      this.setState({saveMode:1}) 
      }
    }
    //-----------------------------------------------------
  setNewEquipmentRef = (ref) => {
    this.newEquipmentRef=ref;
  };

  setNewEquipment = () => {
    if ( this.newEquipmentRef ) { 
      let newEquipment=this.newEquipmentRef.value;
     
    }
  }; 
  checkEquipmentValue=()=>{
    if (this.newEquipmentRef.value==''){
      this.setState({saveMode:0}) }
      else{
      this.setState({saveMode:1}) 
      }
    }
  //-----------------------------------------------------
  
    setNewUrlSPRef = (ref) => {
      this.newUrlSPRef=ref;
    };
  
    setNewUrlSP = () => {
      if ( this.newUrlSPRef) { 
        let newUrlSP=this.newUrlSPRef.value;
       
      }
    }; 
    checkUrlSPValue=()=>{
      if (this.newUrlSPRef.value==''){
        this.setState({saveMode:0}) }
        else{
        this.setState({saveMode:1}) 
        }
      }
    //-----------------------------------------------------

  render() {

    
    if (this.props.cardMode==1){

    return (
      
<div className="SparePartsItemCard" id="wrapper">
<div className="SparePartsItemCardClose" ><img  onClick={this.defaultPosition} src="../close.png" width={30} height={30} />  </div>
<img className='Img' src={this.props.info.urlSP} width={430} height={290} float="left"/> 
        <legend className="SparePartsName">{"Карточка товара"}</legend>
          <table className='itemData'>
            <tbody>
            
             
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
                  {this.props.info.articulCode}
                </td>  
              
              </tr> 
              <tr>
                <td className='itemData'>
                  {this.props.nameRow[4].text}
                </td>
                <td  className='itemData'>
                  {this.props.info.price}
                </td>  
              </tr> 
              <tr>
                <td className='itemData'>
                  {this.props.nameRow[5].text}
                </td>
                <td  className='itemData'>
                  {this.props.info.priceNDS}
                </td>  
              </tr> 
              <tr>
                <td className='itemData'>
                  {this.props.nameRow[3].text}
                </td>
                <td  className='itemData'>
                  {this.props.info.quantity}
                </td>  
              </tr> 
              <tr>
                <td className='itemData'>
                {this.props.nameRow[7].text}
                </td>
          
              <td className={this.props.info.quantity >0?"StatusActive":"StatusBlocked"}>{this.props.info.quantity >0?"в наличии":"нет в наличии"}
              </td>
                 
              </tr> 
              <tr>
                <td className='itemData'>
                  {this.props.nameRow[6].text}
                </td>
                <td  className='itemData'>
                  {this.props.info.equipment}
                </td>  
              </tr> 
            
        </tbody>
        </table>
      </div> 
    

        
 
    )   }
    else     {
    return (
      <div className="SparePartsItemCard">
        <div className="SparePartsItemCardClose" ><img  onClick={this.defaultPosition} src="../close.png" width={30} height={30} />  </div>
         <img className='Img' src={this.props.info.urlSP} width={430} height={290}/> 
        <legend className="SparePartsName">{"Изменение карточки клиента"}</legend>
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
                  <input className='itemData2' type="text" defaultValue={this.props.info.articul} ref={this.setNewArticulRef} onBlur={this.checkArticulValue}/>
                </td>
              
              </tr>
              <tr>
                <td className='itemData2'>
                  {this.props.nameRow[2].text}
                </td>
                <td className='itemData2'>
                {this.props.info.articulCode}
                </td>
                <td className='itemData2'>
                  <input className='itemData2' type="text" defaultValue={this.props.info.articulCode} ref={this.setNewArticulCodeRef} onBlur={this.checkArticulCodeValue}/>
                </td>
              
              </tr>
              <tr>
                <td className='itemData2'>
                  {this.props.nameRow[4].text}
                </td>
                <td  className='itemData2'>
                {this.props.info.price}
                </td>  
                <td className='itemData2'>
                  <input className='itemData2' type="text" defaultValue={this.props.info.price} ref={this.setNewPriceRef} onBlur={this.checkPriceValue}/>
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
                  <input className='itemData2' type="text" defaultValue={this.props.info.quantity} ref={this.setNewQuantityRef} onBlur={this.checkQuantityValue}/>
                </td>
               
              </tr> 
              <tr>
                <td className='itemData2'>
                {this.props.nameRow[7].text}
                </td>
                <td className={this.props.info.quantity>0?"StatusActive":"StatusBlocked"}>{this.props.info.quantity>0?"в наличии":"нет в наличии"}
              </td>
              <td className='itemData2'>

                </td>
              </tr> 
              <tr>
                <td className='itemData2'>
                  {this.props.nameRow[6].text}
                </td>
                <td  className='itemData2'>
                  {this.props.info.equipment}
                </td>  
                <td className='itemData2'>
                  <input className='itemData2' type="text" defaultValue={this.props.info.equipment} ref={this.setNewEquipmentRef} onBlur={this.checkEquipmentValue}/>
                </td>
               
              </tr> 
              <tr>
                <td className='itemData2'>
                  Введите URL картинки
                </td>
                <td  className='itemData2'>
                  {this.props.info.urlSP}
                </td>  
                <td className='itemData2'>
                  <input className='itemData2' type="text" defaultValue={this.props.info.urlSP} ref={this.setNewUrlSPRef} onBlur={this.checkUrlSPValue}/>
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
