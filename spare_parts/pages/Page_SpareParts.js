import React from 'react';
import {parts} from '../globalData'
import SpareParts from '../components/SpareParts';
let sp=require('../spareParts.json')
let k=parts
class Page_SpareParts extends React.PureComponent {
  
 
  render() {
    console.log (k[0])
   let columnName=sp[0]
   
   let spareParts=sp.slice(1) 
    if (this.props.match.params.clid!='Все'){
    
    var pageNmb=(parseInt(this.props.match.params.clid)-1)*10;
    var pgs=spareParts
    var pages=pgs.slice(pageNmb,pageNmb+10)
    }
    else{
      pages=spareParts
    }

    return (
      <SpareParts
      spParts={pages} columnName={columnName}
      />
    );
    
  }

}
    
export default Page_SpareParts;


    