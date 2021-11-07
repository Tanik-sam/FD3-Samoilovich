import React from 'react';

function withRainbowFrame(colors){
return  function withRainbowFrame(CompFrame) {
  let wrappedText=this.props.children
  colors.forEach(v=>{wrappedText=<div key={v} background={v} style={{border:"solid 20px ",padding:"10px",color:v,textAlign:"center"}}>{wrappedText}</div>})
      
    return props => {

      <div style={{backgroundColor:colors[1]}}>
             
      <CompFrame {...props} />
      
      </div>
    };
  };}


 
export {withRainbowFrame};





//let wrappedText=<FramedDoubleButton caption1="Я начертал" caption2="Косые скулы океана" cbPressed={num=>alert(num)}>
//На блюде студня
//</FramedDoubleButton>

