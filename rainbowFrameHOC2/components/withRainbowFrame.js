import React from 'react';

function withRainbowFrame(colors){
return  function withRainbowFrame(CompFrame) {
  
  
      
    return props => {
      let wrappedText={...props}
      colors.forEach(v=>{wrappedText=<div key={v} background={v} style={{border:"solid 20px ",padding:"10px",color:v,textAlign:"center"}}>{wrappedText}</div>})(
     
      <div style={{backgroundColor:colors[1]}}>
             
      <CompFrame  />
     {wrappedText}
      </div>
    );}
  };}


 
export {withRainbowFrame};





//let wrappedText=<FramedDoubleButton caption1="Я начертал" caption2="Косые скулы океана" cbPressed={num=>alert(num)}>
//На блюде студня
//</FramedDoubleButton>

