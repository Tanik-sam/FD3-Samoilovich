import React from 'react';

function withRainbowFrame(colors){
return  function withRainbowFrame(CompFrame) {
    
      
    return props => (
     
      <div style={{backgroundColor:colors[1]}}>
             
      <CompFrame {...props} />
      
      </div>
    );
  };}


 
export {withRainbowFrame};
