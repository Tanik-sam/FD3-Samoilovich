import React from 'react';
import PropTypes from 'prop-types';

import './EquipmentSelect.css';
import {spEvents} from './events';

class EquipmentSelect extends React.PureComponent {



    
  render() {
    console.log("EquipmentSelect render","code",this.props.eq);
    var classSp="EquipmentSelect"   
  

    return (
      
      <option className={classSp}> {this.props.eq} </option>
       
    )        
  }

}

export default EquipmentSelect;

