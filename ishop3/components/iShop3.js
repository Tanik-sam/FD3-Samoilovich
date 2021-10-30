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
    newValue= (m,c,n,p,q)=>{
    
    var k=this.state.rowG2;
    console.log(k)
    for (let i=0;i<k.length;i++){
      if (k[i].codeGood==c){
        
        k[i].priceGood=p;
        k[i].nameGood=n;
        k[i].quantityGood=q;
        console.log('k[i].nameGood')}
    }
    this.setState({rowG2:k})
    this.setState({cardMode:m})
    
    }
    selectedGood = (cdVl) => {
  
    this.setState({selectedGoodId: cdVl} ); 
    
    function ffff(v,i,a){return v.codeGood==cdVl}
    var l=this.state.rowG2.filter(ffff);
    this.setState ({cardShown:l})
  }
  deleteGood = (delCdVl) => {
   
    function fff(v,i,a){return v.codeGood!=delCdVl}
    var k=this.state.rowG2.filter(fff);
    
     this.setState({rowG2:k})
  }

  editGood = (edtCdVl) => {
   this.setState({cardMode:2})

  }

  render() {
    var cG=[];
    for (var a=0; a<this.props.columnG.length; a++ ) {
      var columnGood=this.props.columnG[a];
      let cGs = <th className='ColumnN' key={columnGood.code}>  {columnGood.text}</th>
      
      cG.push(cGs);
    }
    var stringSelect=this.state.rowG2.map( v =>
      <IShopTr3 key={v.codeGood} codeValue={v.codeGood}
        nameGood={v.nameGood} priceGood={v.priceGood} urlGood={v.urlGood} quantityGood={v.quantityGood} 
        selectedGoodId={this.state.selectedGoodId}
        cbselectedGood={this.selectedGood}
        cbdeleteGood={this.deleteGood}
        cbeditGood={this.editGood}
        cardMode={this.state.cardMode}
      />)
      if (this.state.cardShown!=[]) {var cardSelected=this.state.cardShown.map(v=>
        <IShopCard 
        key={v.codeGood}   
        codeValue={v.codeGood}
        nameGood={v.nameGood} priceGood={v.priceGood} urlGood={v.urlGood} quantityGood={v.quantityGood} cardMode={this.state.cardMode}
        nameRow={this.props.columnG} cbnewValue={this.newValue}
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

