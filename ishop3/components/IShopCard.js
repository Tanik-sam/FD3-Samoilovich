import React from 'react';
import PropTypes from 'prop-types';

import './IShopCard.css';
class IShopCard extends React.Component {


 
  state = {
   
    saveMode: 0,// 0 - сохранять, 1 - не сохранить
    nameDefault: this.props.nameGood,
    priceDefault: this.props.priceGood,
    quantityDefault: this.props.quantityGood,
    nameFault:'',
    priceFault:'',
    quantityFault:'',
    
   }
   defaultPosition=(eo)=>{
    this.setState({saveMode:0}) 
    this.setState({priceFault:""})
    this.setState({quantityFault:""})
    this.setState({nameFault:""})
    this.setState({nameDefault:this.props.nameGood})
    this.setState({priceDefault:this.props.priceGood})
    this.setState({quantityDefault:this.props.quantityGood})
    console.log ('this.props.nameGood=',this.props.nameGood,'this.state.nameDefault=', this.state.nameDefault)
    this.props.cbnewValue(1,this.props.codeValue, this.state.nameDefault,this.state.priceDefault,this.state.quantityDefault)
   }

  savePosition=(eo)=>{
    
    var r=[0,0,0];
    if (this.validation(this.state.nameDefault)!=1){
      this.setState({quantityFault:""})
      r[0]=0;
    }
    else{
      this.setState({nameFault:"Вы не ввели значение!"})
      r[0]=1;
    }
    if (this.validation(this.state.priceDefault)!=1){
      this.setState({priceFault:""})
      r[1]=0;
    }
    else{
      this.setState({priceFault:"Вы не ввели значение!"})
      r[1]=1;
    }
    if (this.validation(this.state.quantityDefault)!=1){
      this.setState({quantityFault:""})
      r[2]=0;
    }
    else{
      this.setState({quantityFault:"Вы не ввели значение!"})
      r[2]=1;
    }
    if ((r[0]+r[1]+r[2])==0){
      this.setState({saveMode:0})  
      this.props.cbnewValue(1,this.props.codeValue, this.state.nameDefault,this.state.priceDefault,this.state.quantityDefault,)
    }
    else {
      this.setState({saveMode:1})   
    }

  }
  
  validation=(vl)=>{
    if ((vl=="")||(vl==" ")){
      return 1}
  }
  
  goodChangedValue=(eo)=>{
    
    this.setState({nameDefault:eo.target.value});
    if (eo.target.value=="")
 
    this.setState({saveMode:0}) 

   }

  priceChangedValue=(eo)=>{
    this.setState({priceDefault:eo.target.value});
    this.setState({saveMode:0}) 
           
   }
    
  
  quatityChangedValue=(eo)=>{
    this.setState({quantityDefault:eo.target.value});
    this.setState({saveMode:0}) 
   }
  
 

  render() {
    console.log('this.state.savePerm',this.state.savePerm)
    if (this.props.cardMode==1){

    return (
      
<div className="IShopCard">
        <legend>{"Карточка товара"}</legend>
          <table className='itemData'>
            <tbody>
              <tr className='itemData'>
                <td className='itemData'>
                  <img className='Img' src={this.props.urlGood} width={100} height={100}/> 
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
                  <input className='itemData2' type="text" value={this.state.nameDefault}
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
                  <input className='itemData2' type="text" value={this.state.priceDefault} 
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
                  <input className='itemData2' type="text" value={this.state.quantityDefault} 
                 onChange={this.quatityChangedValue}/>
                </td>
                <td className='itemData2'>
                  <span>{this.state.quantityFault}</span>
                </td>
              </tr> 
              <tr>
                 <td  className='itemData2'>
                   <input type='button' value='сохранить' onClick={this.savePosition} disabled={this.state.saveMode==1} />   
                 </td>  
                 <td  className='itemData2'>
                    <input type='button' value='сбросить' onClick={this.defaultPosition} />   
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
