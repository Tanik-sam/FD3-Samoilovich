import React from 'react';
import PropTypes from 'prop-types';

import './RainbowFrame.css';

import { withRainbowFrame } from './withRainbowFrame';
import DoubleButton from './DoubleButton';

class RainbowFrame extends React.Component {


  render() {
    let FramedDoubleButton=withRainbowFrame(this.props.colors)(DoubleButton);
    let wrappedText=<FramedDoubleButton caption1="Я начертал" caption2="Косые скулы океана" cbPressed={num=>alert(num)}>
    На блюде студня
    </FramedDoubleButton>
   this.props.colors.forEach(v=>{wrappedText=<div key={v} background={v} style={{border:"solid 20px ",padding:"10px",color:v,textAlign:"center"}}>{wrappedText}</div>})
    return ( 
   <FramedDoubleButton caption1="Я живо смазал" caption2="расплескав краски из стакана" cbPressed={num=>alert(num)}>
      Карту будней
      {wrappedText}
   </FramedDoubleButton>
   
    )   
  }

}

export default RainbowFrame;
