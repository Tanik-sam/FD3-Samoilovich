import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import './Br2jsx.css';

 
class Br2jsx extends React.Component {

  static propTypes = {
    
    textBr: PropTypes.string.isRequired,
    };

    

  textBreak = () => {
  let br= this.props.textBr
  let newArr=br.split('<br>')
  console.log(newArr)
  function ff(v,i,a){return v=="<br>" }
  newArr.filter(ff); 
  console.log(newArr)
  return newArr.map(v => <p key={i}>{v}<br></br>
  </p>)
  }
  
  render() {
  
      return (
        <div  className='Br2jsx'>
{textBreak}
      </div>
    );
  }

}

export default IShop3;

