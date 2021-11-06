import React from 'react';
import PropTypes from 'prop-types';

import './DoubleButton.css';

class DoubleButton extends React.Component {
pressedButton1=()=>{
  this.props.cbPressed(1)
  }
  pressedButton2=()=>{
    this.props.cbPressed(2)
  }  
  
  render() {
    let textInFrame=this.props.children
    
    return (
      <div>
      <input type='button' value={this.props.caption1} onClick={this.pressedButton1} />
      {textInFrame}
      <input type='button' value={this.props.caption2}  onClick={this.pressedButton2} />
      
      </div>
    )
  }
}


export default DoubleButton;



