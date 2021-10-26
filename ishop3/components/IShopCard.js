import React from 'react';
import PropTypes from 'prop-types';

import './IShopCard.css';
class IShopCard extends React.Component {


 
  state = {
      
    saveMode: 0,// 0 - не сохранять, 1 - сохранить
    nameDefault: this.props.nameGood,
    priceDefault: this.props.priceGood,
    quantityDefault: this.props.quantityGood,
    nameFault:'',
    priceFault:'',
    quantityFault:'',
   }
   defaultPosition=(eo)=>{
    this.setState({saveMode:0}) 
    this.setState({nameDefault:this.props.nameGood})
    this.setState({priceDefault:this.props.priceGood})
    this.setState({quantityDefault:this.props.quantityGood})
    this.props.cbnewValue(1,this.props.codValue, this.state.nameDefault,this.state.priceDefault,this.state.quantityDefault,)
   }


  savePosition=(eo)=>{
    this.setState({saveMode:1})  
    console.log('вы ввели значение', this.state.nameDefault)  
    this.props.cbnewValue(1,this.props.codValue, this.state.nameDefault,this.state.priceDefault,this.state.quantityDefault,)
  }
  
  
  goodChangedValue=(eo)=>{
    if ((this.state.saveMode==1)&&(eo.target.value=="")){
      this.setState({nameDefault:eo.target.value})}
      else {this.setState({nameFault:"Вы не ввели значение!"});
      
    }
  }

  priceChangedValue=(eo)=>{
    if ((this.state.saveMode==1)&&(eo.target.value=="")){
    this.setState({priceDefault:eo.target.value});}
    else {this.setState({priceFault:"Вы не ввели значение!"})}
    }
  
  quatityChangedValue=(eo)=>{
    if ((this.state.saveMode==1)&&(eo.target.value=="")){
      this.setState({quantityDefault:eo.target.value});}
      else {this.setState({quantityFault:"Вы не ввели значение!"})}
      
    }
  
 

  render() {
    if (this.props.cardMode==1){

    return (
      
<div className="IShopCard">
        <legend>{"Карточка товара"}</legend>
          <table className='itemData'>
            <tbody>
              <tr className='itemData'>
                <td className='itemData'>
                  <img className='Img' src={this.props.urlGood} width={150} height={150}/> 
                </td>
              </tr>
              <tr className='itemData'>
                <td className='itemData'>
                  {this.props.nameRow[0].text}
                </td>
                <td className='itemData'>
                  {this.props.nameGood}
                </td>
              </tr>
              <tr>
                <td className='itemData'>
                  {this.props.nameRow[1].text}
                </td>
                <td className='itemData'>
                  {this.props.priceGood}
                </td>
              </tr>
              <tr>
                <td className='itemData'>
                  {this.props.nameRow[3].text}
                </td>
                <td  className='itemData'>
                  {this.props.quantityGood}
                </td>  
              </tr> 
            
        </tbody>
        </table>
      </div> 

        
 
    )   }
    else     {
    return (
      <div className="IShopCard">
        <legend>{"Изменение карточки товара"}</legend>
          <table className='itemData2'>
            <tbody>
              <tr className='itemData2'>
                <td className='itemData2'>
                  <img className='Img' src={this.props.urlGood} width={150} height={150}/> 
                </td>
              </tr>
              <tr className='itemData2'>
                <td className='itemData2'>
                  {this.props.nameRow[0].text}
                </td>
                <td className='itemData2'>
                  {this.props.nameGood}
                </td>
                <td>
                  <input className='itemData2' type="text" defaultValue={this.state.nameDefault} 
                 onChange={this.goodChangedValue}/> 
                </td>
                <td className='itemData2'>
                  <span>{this.state.nameFault}</span>
                </td>
              </tr>
              <tr>
                <td className='itemData2'>
                  {this.props.nameRow[1].text}
                </td>
                <td className='itemData2'>
                  {this.props.priceGood}
                </td>
                <td className='itemData2'>
                  <input className='itemData2' type="text" defaultValue={this.state.priceDefault} 
                 onChange={this.priceChangedValue}/>
                </td>
                <td className='itemData2'>
                  <span>{this.state.priceFault}</span>
                </td>
              </tr>
              <tr>
                <td className='itemData2'>
                  {this.props.nameRow[3].text}
                </td>
                <td  className='itemData2'>
                  {this.props.quantityGood}
                </td>  
                <td className='itemData2'>
                  <input className='itemData2' type="text" defaultValue={this.state.quantityDefault} 
                 onChange={this.quantityChangedValue}/>
                </td>
                <td className='itemData2'>
                  <span>{this.state.quantityFault}</span>
                </td>
              </tr> 
              <tr>
                 <td  className='itemData2'>
                   <input type='button' value='сохранить' onClick={this.savePosition}/>   
                 </td>  
                 <td  className='itemData2'>
                    <input type='button' value='сбросить' onClick={this.defaultPosition}/>   
                 </td>
              </tr>
        </tbody>
        </table>
      </div> 
      )
      }
  }
}

  export default IShopCard;
