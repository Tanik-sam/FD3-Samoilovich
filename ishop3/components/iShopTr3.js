import React from 'react';
import PropTypes from 'prop-types';

import './IShopTr3.css';

class IShopTr3 extends React.Component {

  answerClicked = (EO) => {
    this.props.cbSelected(this.props.code);
  }
  selectedGoodClicked=(eo)=>{
  this.props.cbselectedGood(this.props.codeValue);
  console.log("сработал selectedGoodClicked", this.props.codeValue);
  }
  deleteRow=(eo)=>{
    eo.stopPropagation();
    console.log("ты меня нажал", "я", this.props.codeValue);
    this.props.cbdeleteGood(this.props.codeValue);
  }
  editRow=(eo)=>{
    eo.stopPropagation();
    console.log("жду редакции", "я", this.props.codeValue);
    this.props.cbeditGood(this.props.codeValue);
  }

  render() {
    var classGoodName="IShopTr3"
    if (this.props.selectedGoodId==this.props.codeValue) {classGoodName="IShopTrRed"} else classGoodName="IShopTr3"
    console.log('выбрали строку',classGoodName)


    return (
      <tr  className={classGoodName} key={this.props.codeValue} onClick={this.selectedGoodClicked }>

      <td className='RowN'>{this.props.priceGood}</td>
      <td className='RowN'>
        <img className='Img' src={this.props.urlGood} width={150} height={150}/> 
      </td>
      <td className='RowN'>{this.props.quantityGood}</td>
      <td className='RowN'><input type='button' value='delete' onClick={this.deleteRow}/></td>   
      <td className='RowN'><input type='button' value='edit' onClick={this.editRow}/></td>   
      </tr>
    )        
  }
}

  export default IShopTr3;
