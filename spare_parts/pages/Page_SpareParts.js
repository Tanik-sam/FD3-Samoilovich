import React from 'react';
import {parts} from '../globalData'
import SpareParts from '../components/SpareParts';
let sp=require('../spareParts.json')
  
class Page_SpareParts extends React.PureComponent {
  
 
  render() {
  
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
      <div>
        <input className="inTable" data='view' type="button"/>
      <SpareParts
      spParts={pages} columnName={columnName} adm={false}
      />
      </div>
    );
    
  }

}
    
export default Page_SpareParts;


    