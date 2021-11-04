import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

import ColorFrame from './ColorFrame';

class RainbowFrame extends React.Component {



  render() {

    return ( 
   <ColorFrame  colors={this.props.colors} >
      Hello
   </ColorFrame>
    )   
  }

}

export default RainbowFrame;
