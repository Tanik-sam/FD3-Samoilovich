import React from 'react';
import PropTypes from 'prop-types';

import './IShopCard.css';
class IShopCard extends React.Component {


 
  state = {
      
    saveMode: 0,// 0 - не сохранять, 1 - сохранить
   }
   savePosition=()=>
  {this.setState({saveMode:1})  

  goodChangedValue=(eo)=>{
    if ((this.state.saveMode==1)&&(eo.target.value=="")){
      alert ('вы не ввели значение')}
      else alert ('вы ввели значение')
    }
    
  }

  render() {
    if (this.props.cardMode==1){

    return (
      <div className="IShopCard">
        <form>
        <fieldset>
        <legend>{'Карточка товара'}</legend>
        <img className='Img' src={this.props.urlGood} width={150} height={150}/> 
        <label className='itemData'>
          {this.props.priceGood}
        </label>
        <label  className='itemData'>
           {this.props.quantityGood}
           </label>    
              <input type='button' value='безполезная кнопка' onClick={ console.log('ты нажал на кнопку')}/>   
              <input type='button' value='безполезная кнопка' onClick={ console.log('ты нажал на кнопку')}/>   
        </fieldset>
        </form>
      </div>
        
 
    )   }
    else     {
    return (
      <div className="IShopCard">
        <legend>{"Изменение карточки товара"}</legend>
          <table>
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
                  <input className='itemData2' type="text" name="gName" onChange={this.goodChangedValue}/> 
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
                  <input className='itemData2' type="text" />
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
                  <input className='itemData2' type="text" />
                </td>
              </tr> 
              <tr>
                 <td  className='itemData2'>
                   <input type='button' value='сохранить' onClick={this.savePosition}/>   
                 </td>  
                 <td  className='itemData2'>
                    <input type='button' value='сбросить' onClick={console.log('ты нажал сброс')}/>   
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
