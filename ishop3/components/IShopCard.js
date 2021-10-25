import React from 'react';
import PropTypes from 'prop-types';

import './IShopCard.css';
class IShopCard extends React.Component {

  render() {
    var classGoodName="IShopCard";
    return (
      <div>
        <tr  className='itemData'>
          <td className='itemData'>{this.props.priceGood}</td>
        </tr>
        <tr  className='itemData'>
          <td className='itemData'>
            <img className='Img' src={this.props.urlGood} width={150} height={150}/> 
          </td>
        </tr>
        <tr  className={itemData}>
           <td className='itemData'>{this.props.quantityGood}</td>
        </tr>
        <tr  className={itemData}>
           <td className='itemData'>
              <input type='button' value='delete' onClick={ }/></td>   
        </tr>
      </div>
        
    )        
  }
}

  export default IShopCard;
