import React from 'react';

import SpareParts from '../components/SpareParts';
 
import appData from '../appData';

let sParts=require('../spareParts.json')

class Page_SpareParts extends React.PureComponent {
  state={
    columnName:sParts[0],
    spareParts:sParts.slice(0) 
  }
 
          
  render() {
    if (this.props.match.params.clid!='Все'){
    var pageNmb=(parseInt(this.props.match.params.clid)-1)*10;
    var pgs=this.state.spareParts
    var pages=pgs.slice(pageNmb,pageNmb+10)
    }
    else{
      pages=this.state.spareParts
    }
    
    return (
      <SpareParts
      spParts={pages} columnName={this.state.columnName}
      />
    );
    
  }

}
    
export default Page_SpareParts;


    