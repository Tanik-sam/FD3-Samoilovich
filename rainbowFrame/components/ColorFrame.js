import React from 'react';
import PropTypes from 'prop-types';

import './ColorFrame.css';

class ColorFrame extends React.Component {

  
  
  render() {
    let textInFrame=this.props.children
    this.props.colors.forEach(colors=>{textInFrame=<div key={colors} background={colors} style={{border:"solid 20px ",padding:"10px",color:colors,textAlign:"center"}}>{textInFrame}</div>})



    return (
      <div>
      {textInFrame}
      </div>
    )
  }
}


export default ColorFrame;



