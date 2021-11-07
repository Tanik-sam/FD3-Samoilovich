import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

import { withRainbowFrame } from './withRainbowFrame';
import DoubleButton from './DoubleButton';

class RainbowFrame extends React.Component {


  render() {
    let FramedDoubleButton=withRainbowFrame(this.props.colors)(DoubleButton);
    
    return ( 
      
   <FramedDoubleButton caption1="Я живо смазал" caption2="расплескав краски из стакана" cbPressed={num=>alert(num)}>
      Карту будней
      
   </FramedDoubleButton>
   
   
   
    )   
  }

}

export default RainbowFrame;
