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
      
      console.log(newArr)

 function ff(v,i,a) {return(<br key={i}>{v}</br>)}
 let r=newArr.map(ff)
console.log(r)
      return (
        <div  className='Br2jsx'>
        {r}
       </div>
    );
  }

};

export default Br2jsx;

