import React from 'react';
import PropTypes from 'prop-types';

class ColorFrame extends React.Component {

  
  
  render() {
    let textInFrame=this.props.children

    
  var frameColor=this.props.colors.map((v)=>{<div key={v} style={{border:"solid 1px "+{v},padding:"10px"}}>{textInFrame}</div>})
 
    return (
      
      {frameColor}
      
    );
  }

}

export default ColorFrame;
