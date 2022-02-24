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
      manufacturer: PropTypes.string.isRequired,
      quantity:PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      joint: PropTypes.string.isRequired,
      equipment: PropTypes.string.isRequired,
      urlSP: PropTypes.string.isRequired,
      category:PropTypes.string.isRequired,
      subcategory:PropTypes.string.isRequired,
      group:PropTypes.string.isRequired,
      
    })
  }
 
state={
  saveMode: 1,
  classCard:'SparePartsItemCard'
}
clicked=(eo)=>{
  if (this.state.saveMode){
this.setState({classCard:'SparePartsItemCardHide'})
setTimeout(this.defaultPosition,1000)

  }
 

 }


   
   defaultPosition=(eo)=>{

    spEvents.emit('SpDefault',false)
    this.setState({saveMode:1})
    spEvents.emit('ButtonEnbled');

   }

  savePosition=(eo)=>{
 
      this.setNewSpName (); 
      this.setNewArticul ();
      this.setNewmanufacturer ();
      this.setNewQuantity ();
      this.setNewPrice ();
      this.setNewJoint ();
      this.setNewEquipment ();
      let t={code:this.props.info.code,spName:this.newSpNameRef.value,articul:this.newArticulRef.value,manufacturer:this.newmanufacturerRef.value,quantity:parseInt(this.newQuantityRef.value),price:parseFloat(this.newPriceRef.value),joint: this.newJointRef.value,equipment: this.newEquipmentRef.value,urlSP:this.newUrlSPRef.value,}
      this.setState({saveMode:1}) 
      spEvents.emit('SpSave',t); 
  
  }

   newSpNameRef = this.props.info.spName;
   newArticulRef = this.props.info.articul;
   newmanufacturerRef = this.props.info.manufacturer;
   
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
  setNewManufacturerRef = (ref) => {
    this.newmanufacturerRef=ref;
  };

  setNewmanufacturer = () => {
    if (this.newmanufacturerRef) { 
      let newmanufacturer=this.newmanufacturerRef.value;
        
    }
  }; 
  checkManufacturerValue=()=>{
    
    if (this.newmanufacturerRef.value==''){
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
  
      setNewJointRef = (ref) => {
        this.newJointRef=ref;
      };
    
      setNewJoint = () => {
        if ( this.newJointRef) { 
          let newJoint=this.newJointRef.value;
         
        }
      }; 
      checkJointValue=()=>{
        if (this.newJointRef.value==''){
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

    console.log("SparePartsItemCard render");
    if (this.props.cardMode==1){

    return (
      
<div className={this.state.classCard} >
<div className="close" width={30} height={30} onClick={this.clicked}> </div>
<img className='Img' src={this.props.info.urlSP} width={430} height={290} float="left"/> 
        <legend className="SparePartsName">{"Карточка товара"}</legend>
          <table className='itemData'>
            <tbody>
            
             
              <tr>
                <td className='itemData'>
                  {this.props.nameRow.articul}
                </td>
                <td  className='itemData'>
                  {this.props.info.articul}
                </td>
                </tr>
                <tr>
                <td className='itemData'>
                  {this.props.nameRow.manufacturer}
                </td>
                <td  className='itemData'>
                  {this.props.info.manufacturer}
                </td>  
              
              </tr> 
              <tr>
                <td className='itemData'>
                  {this.props.nameRow.price}
                </td>
                <td  className='itemData'>
                  {this.props.info.price}
                </td>  
              </tr> 
              <tr>
                <td className='itemData'>
                  {this.props.nameRow.joint}
                </td>
                <td  className='itemData'>
                  {this.props.info.joint}
                </td>  
              </tr> 
              <tr>
                <td className='itemData'>
                  {this.props.nameRow.quantity}
                </td>
                <td  className='itemData'>
                  {this.props.info.quantity}
                </td>  
              </tr> 
              <tr>
                <td className='itemData'>
                Статус
                </td>
          
              <td className={this.props.info.quantity >0?"StatusActive":"StatusBlocked"}>{this.props.info.quantity!==0?"в наличии":"нет в наличии"}
              </td>
                 
              </tr> 
              <tr>
                <td className='itemData'>
                  {this.props.nameRow.equipment}
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
      <div className={this.state.classCard}>
       
        <div className="close" width={30} height={30} onClick={this.clicked}> </div>
         <img className='Img' src={this.props.info.urlSP} width={300} height={170}/> 
        <legend className="SparePartsName">{"Изменение карточки клиента"}</legend>
          <table className='itemData2'>
            <tbody>
         
              <tr className='itemData2'>
                <td className='itemData2'>
                  {this.props.nameRow.spName}
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
                  {this.props.nameRow.articul}
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
                  {this.props.nameRow.manufacturer}
                </td>
                <td className='itemData2'>
                {this.props.info.manufacturer}
                </td>
                <td className='itemData2'>
                  <input className='itemData2' type="text" defaultValue={this.props.info.manufacturer} ref={this.setNewManufacturerRef} onBlur={this.checkManufacturerValue}/>
                </td>
                </tr>
                <tr>
                <td className='itemData2'>
                  {this.props.nameRow.quantity}
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
                  {this.props.nameRow.price}
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
                  {this.props.nameRow.joint}
                </td>
                <td  className='itemData2'>
                {this.props.info.joint}
                </td>  
                <td className='itemData2'>
                  <input className='itemData2' type="text" defaultValue={this.props.info.joint} ref={this.setNewJointRef} onBlur={this.checkJointValue}/>
                </td>
               
              </tr> 
              
              <tr>
                <td className='itemData2'>
                Статуc
                </td>
                <td className={this.props.info.quantity>0?"StatusActive":"StatusBlocked"}>{this.props.info.quantity===0?"в наличии":"нет в наличии"}
              </td>
              <td className='itemData2'>

                </td>
              </tr> 
              <tr>
                <td className='itemData2'>
                  {this.props.nameRow.equipment}
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
                    <input className="CardButton" type='button' value='СБРОСИТЬ' onClick={this.clicked} />   
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
