import React from 'react';

import SpareParts from '../components/SpareParts';
import appData from '../appData';

let spareParts=require('../spareParts.json')

class Page_SpareParts extends React.PureComponent {
  
          
  render() {
    if (this.props.match.params.clid!='Все'){
    var pageNmb=(parseInt(this.props.match.params.clid)-1)*10;
    var pages=spareParts.slice(pageNmb,pageNmb+10)
    }
    else{
      pages=spareParts
    }
    
    return (
      <SpareParts
      spParts={pages} columnName={appData}
      />
    );
    
  }

}
    
export default Page_SpareParts;
    