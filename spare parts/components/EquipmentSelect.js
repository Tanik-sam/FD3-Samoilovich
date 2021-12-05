import React from 'react';
import PropTypes from 'prop-types';

import './EquipmentSelect.css';
import {spEvents} from './events';

class EquipmentSelect extends React.PureComponent {

 


  
 /* componentDidMount = () => {
    spEvents.addListener('ButtonEnbled',this.buttonEnbled)
  }
  componentWillUnmount = () => {
    spEvents.removeListener('ButtonEnbled',this.buttonEnbled)
  }
  componentDidMount = () => {
    this.spEquipment()
    console.log(this.state.equip)
  }*/


 
  render() {
    console.log("EquipmentSelect render","code",this.props.eq);
    var classSp="EquipmentSelect"
    /*
    if (this.props.selectedSparePartsId==this.props.info.code) {classSp="SpItemChosen"} else if (this.props.info.code%2==0) {classSp="SparePartsItemEven"} else {classSp="SparePartsItemOdd"}
    console.log (this.props.selectedSparePartsId) */var classSp="EquipmentSelect"
    /*
    if (this.props.selectedSparePartsId==this.props.info.code) {classSp="SpItemChosen"} else if (this.props.info.code%2==0) {classSp="SparePartsItemEven"} else {classSp="SparePartsItemOdd"}
    console.log (this.props.selectedSparePartsId) */

        
  

    return (
      
      <option classname={classSp}> {this.props.eq} </option>
       
    )        
  }

}

export default EquipmentSelect;

