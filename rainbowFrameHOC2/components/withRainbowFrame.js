import React from 'react';

function withRainbowFrame(colors){
  return  function (CompFrame){
     return props=>{
      var k=<CompFrame {...props}/>    
      
     class Comp2{
       
       newV=()=>colors.forEach(v=>{k=<div key={v} background={v} style={{border:"solid 20px ",padding:"10px",color:v,textAlign:"center"}}>{k}</div>})
       
      } 
      return Comp2 
     }
  
    }
    
  }


 
export {withRainbowFrame};


