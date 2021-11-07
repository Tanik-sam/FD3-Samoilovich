import React from 'react';

function withRainbowFrame(colors){
  return  function withRainbowFrame(CompFrame) {
 let k
  //  colors.forEach(v=>{wrappedText=<div key={v} background={v} style={{border:"solid 20px ",padding:"10px",color:v,textAlign:"center"}}>{wrappedText}</div>})
    // console.log(wrappedText) 
    return p => 
    
    <div >{
      
        colors.forEach(v=>{k=<div key={v} background={v} style={{border:"solid 20px ",padding:"10px",color:v,textAlign:"center"}}><CompFrame  {...p}/>{k}</div>})
    }
       
      {k}
    </div>
      
  }
}


 
export {withRainbowFrame};





//let wrappedText=<FramedDoubleButton caption1="Я начертал" caption2="Косые скулы океана" cbPressed={num=>alert(num)}>
//На блюде студня
//</FramedDoubleButton>

