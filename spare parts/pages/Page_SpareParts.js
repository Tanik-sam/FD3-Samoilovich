import React from 'react';

import SpareParts from '../components/SpareParts';
import appData from '../appData';

let spareParts=require('../spareParts.json')

class Page_SpareParts extends React.PureComponent {
  
          
  render() {

    let pageNmb=(parseInt(this.props.match.params.clid)-1)*10;
    let pages=spareParts.slice(pageNmb,pageNmb+10)
    console.log(appData)

    return (
      <SpareParts
      spParts={pages} columnName={appData}
      />
    );
    
  }

}
    
export default Page_SpareParts;
    