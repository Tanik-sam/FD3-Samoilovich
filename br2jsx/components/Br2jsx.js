import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import './Br2jsx.css';

 
class Br2jsx extends React.Component {

  static propTypes = {
    
    textBr: PropTypes.string.isRequired,
    };

  render() {
      let br= this.props.textBr
 
      let newStr=br.split(/<br>|<\/\br>/g).join('/<br>/')
      let newArr=newStr.split('/')
      console.log(newArr)
       
      function ff(v,i,a) {if (v=='<br>'){v=<br key={i}></br>} return (v)}
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

