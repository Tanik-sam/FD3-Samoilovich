import React from 'react';
import PropTypes from 'prop-types';

import './IShopTr3.css';

class IShopTr3 extends React.Component {

  selectedGoodClicked=(eo)=>{
  if (this.props.cardMode!=2){
    this.props.cbselectedGood(this.props.codeValue);}
  }
  deleteRow=(eo)=>{
    eo.stopPropagation();
    this.props.cbdeleteGood(this.props.codeValue);
  }
  editRow=(eo)=>{
   // eo.stopPropagation();
    this.props.cbeditGood(this.props.codeValue);
  }

  render() {
    var classGoodName="IShopTr3"
    if (this.props.selectedGoodId==this.props.codeValue) {classGoodName="IShopTrRed"} else classGoodName="IShopTr3"
    
   

    return (
      <tr  className={classGoodName}  onClick={this.selectedGoodClicked}>
      <td className='RowN'>{this.props.nameGood}</td>
      <td className='RowN'>{this.props.priceGood}</td>
      <td className='RowN'>{this.props.urlGood}</td>
      <td className='RowN'>
        <img className='Img' src={this.props.urlGood} width={100} height={100}/> 
      </td>
      <td className='RowN'>{this.props.quantityGood}</td>
      <td className='RowN'><input type='button' value='delete' onClick={this.deleteRow} disabled={this.props.cardMode==2}/></td>   
      <td className='RowN'><input type='button' value='edit' onClick={this.editRow} disabled={this.props.cardMode==2}/></td>   
      </tr>
    )        
  }
}

  export default IShopTr3;
