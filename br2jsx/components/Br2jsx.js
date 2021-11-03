import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import './Br2jsx.css';

 
class Br2jsx extends React.Component {

  static propTypes = {
    
    textBr: PropTypes.string.isRequired,
    };

  render() {
      let br= this.props.textBr
 
      let newArr=br.split(/<br>|<\/\br>/g)
      let newStr=[]
       
      for(let i=0; i<newArr.length;i++){
      newStr.push(newArr[i]);
      newStr.push(<br key={i}></br>);}
          //  newStr[i*2-2]=newArr[i-1]
      //newStr[i*2-1]=<br></br>}
     
 //function ff(v,i,a) {return(<br key={i}>{v}</br>)}
 //let r=newArr.map(ff)
//console.log(r)
      return (
        <div  className='Br2jsx'>
        {newStr}
       </div>
    );
  }

};

export default Br2jsx;

