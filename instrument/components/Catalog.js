import React from 'react';
import PropTypes from 'prop-types';
import './Catalog.css';
import {spEvents} from './events'
import { NavLink } from 'react-router-dom'; 

class Catalog extends React.PureComponent {


  state = {
    info: this.props.eq, 
  };
  




  componentWillReceiveProps = (newProps) => {
    this.setState({eq:newProps.eq});
  };

  setSelectedItem=(eo)=>{
     spEvents.emit('EquipmentClicked',this.props.eq);
   }
   
  render() {
    console.log("Catalog render","code",this.props.eq);
    
    var classItem="Catalog"
    
    if (this.props.selectedItem ==this.props.eq) {classItem="CatalogChosen"} 
    
    return (
      <div className={classItem} onClick={this.setSelectedItem}>
      <img className='Img' src={this.props.eq} width={180} float="left"/>
      {this.props.eq}
    
      </div> 
     
    )        
  }

}
  export default Catalog;
