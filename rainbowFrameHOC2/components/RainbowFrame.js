import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

import { withRainbowFrame } from './withRainbowFrame';
import DoubleButton from './DoubleButton';

class RainbowFrame extends React.Component {


  render() {
    let FramedDoubleButton=withRainbowFrame(this.props.colors)(DoubleButton);
    
    return ( 
      <div>
    <DoubleButton caption1="Я сразу смазал" caption2="плеснувши краску из стакана" cbPressed={num=>alert(num)}>карту будня </DoubleButton>
   <FramedDoubleButton caption1="Я показал" caption2="косые скулы океана" cbPressed={num=>alert(num)}>
      на блюде студня
      
   </FramedDoubleButton>
   
   </div>
   
   
    )   
  }

}

export default RainbowFrame;
