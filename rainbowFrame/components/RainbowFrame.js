import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

import ColorFrame from './ColorFrame';

class RainbowFrame extends React.Component {

  static propTypes = {
    childText: PropTypes.string.isRequired,
     } 

  render() {

    return ( 
   <ColorFrame  colors={this.props.colors} >
      {this.props.childText}
   </ColorFrame>
    )   
  }

}

export default RainbowFrame;
