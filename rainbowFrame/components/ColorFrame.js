import React from 'react';
import PropTypes from 'prop-types';

class ColorFrame extends React.Component {

  
  
  render() {
    let frameColor=this.props.children

    
  var elem=this.props.colors.forEach((v)=>{<div>{frameColor}</div>})
 
    return (
      {frameColor}
      
    );
  }

}

export default ColorFrame;
