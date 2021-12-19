import React from 'react';
import PropTypes from 'prop-types';

import './EquipmentSort.css';
import {spEvents} from './events';

class EquipmentSort extends React.PureComponent {



    
  render() {
    console.log("EquipmentSort render","code",this.props.eq);
    var classSp="EquipmentSort"   
  

    return (
      
      <option className={classSp}> {this.props.eqS} </option>
       
    )        
  }

}

export default EquipmentSort;

