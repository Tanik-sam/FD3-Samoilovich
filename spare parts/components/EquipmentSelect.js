import React from 'react';
import PropTypes from 'prop-types';

import './EquipmentSelect.css';
import {spEvents} from './events';

class EquipmentSelect extends React.PureComponent {

  setSelectedEq=(eo)=>{
    spEvents.emit('EqClicked',this.props.eq);
    console.log('emited',this.props.eq)
  }

 
  render() {
    console.log("EquipmentSelect render","code",this.props.eq);
    var classSp="EquipmentSelect"   
  

    return (
      
      <option className={classSp} onClick={this.setSelectedEq}> {this.props.eq} </option>
       
    )        
  }

}

export default EquipmentSelect;

