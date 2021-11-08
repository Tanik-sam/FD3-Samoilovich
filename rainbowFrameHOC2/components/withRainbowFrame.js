import React from 'react';

function withRainbowFrame(colors){
  return  function (CompFrame){
     return props=>(
     
     class Comp2  extends React.Component {
       render() {
         let k=this.props.children
         console.log (k)
         colors.forEach(v=>{k=<div key={v} background={v} style={{border:"solid 20px ",padding:"10px",color:v,textAlign:"center"}}>{k}</div>})
             
         return (<div>{k}</div>)}
     }
      )
  }
    
}


 
export {withRainbowFrame};


