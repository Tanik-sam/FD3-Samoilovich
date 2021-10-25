import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import './IShop3.css';

import IShopTr3 from './IShopTr3';
import IShopCard from './IShopCard';
 
class IShop3 extends React.Component {

  static propTypes = {
    
    marketName: PropTypes.string.isRequired,
    rowG:PropTypes.array.isRequired,
    columnG: PropTypes.array.isRequired,
    };

    state = {
      
        selectedGoodId: 23,
        rowG2: this.props.rowG.slice(),
        cardShown: [],
        cardMode:1, // 1 - отображение, 2 - редакция

    }

    selectedGood = (cdVl) => {
  
    this.setState({selectedGoodId: cdVl} ); 
    console.log("this.state.selectedGoodId=",this.state.selectedGoodId,);
    function ffff(v,i,a){return v.codeGood==cdVl}
    var l=this.state.rowG2.filter(ffff);
    this.setState ({cardShown:l})
  }
  deleteGood = (delCdVl) => {
   
    function fff(v,i,a){return v.codeGood!=delCdVl}
    var k=this.state.rowG2.filter(fff);
    
     this.setState({rowG2:k})
    console.log(this.state.rowG2)
    console.log("длина",this.state.rowG2.length)
  }

  editGood = (edtCdVl) => {
   this.setState({cardMode:2})
    
    console.log("ха-ха, вот облом", edtCdVl)
  }

  render() {
    var b=1;
    var cG=[];
    for ( var a=0; a<this.props.columnG.length; a++ ) {
      var columnGood=this.props.columnG[a];
      let cGs = <th  key={columnGood.code} className='ColumnN'>  {columnGood.text}</th>
      
      cG.push(cGs);
    }
    var stringSelect=this.state.rowG2.map( v =>
      <IShopTr3  codeValue={v.codeGood}
        nameGood={v.nameGood} priceGood={v.priceGood} urlGood={v.urlGood} quantityGood={v.quantityGood} 
        selectedGoodId={this.state.selectedGoodId}
        cbselectedGood={this.selectedGood}
        cbdeleteGood={this.deleteGood}
        cbeditGood={this.editGood}
      />)
      if (this.state.cardShown!=[]) {var cardSelected=this.state.cardShown.map(v=>
        <IShopCard   
        nameGood={v.nameGood} priceGood={v.priceGood} urlGood={v.urlGood} quantityGood={v.quantityGood} cardMode={this.state.cardMode}
        nameRow={this.props.columnG}
        />)}
      return (
        <div  className='IShop3'>
      <table className='tableIshop'> 
      <caption className='MarketName'>{this.props.marketName}</caption>
        <tbody className='tableBody'> 
        <tr className='ColumnName'>{cG}</tr> 
         {stringSelect} 
                  
                  </tbody>
                  </table>
                  {cardSelected}
      </div>
    );
  }

}

export default IShop3;

