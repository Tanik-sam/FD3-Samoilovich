import React from 'react';

import SpareParts from '../components/SpareParts';
let sp=require('../spareParts.json')

class Page_SpareParts extends React.PureComponent {

 
  render() {
   let columnName=sp[0]
   console.log(columnName)
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


    