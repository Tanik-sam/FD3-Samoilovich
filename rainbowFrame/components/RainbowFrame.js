import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

import ColorFrame from './ColorFrame';

class RainbowFrame extends React.Component {

  static propTypes = {
    childText: PropTypes.string.isRequired,
     }

     

  render() {
   // var kkkk=this.props.colors.map(v=>

   //   console.log(kkkk)
    return ( 
      <ColorFrame  color={'red'} >
      {this.props.childText}
      </ColorFrame>
    )   
  }

}

export default RainbowFrame;
