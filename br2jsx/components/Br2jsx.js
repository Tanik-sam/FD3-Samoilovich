import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import './Br2jsx.css';

 
class Br2jsx extends React.Component {

  static propTypes = {
    
    textBr: PropTypes.string.isRequired,
    };

  render() {
      let br= this.props.textBr
      let newArr=br.split('<br>')
      console.log(newArr)
      function ff(v,i,a){return v=="<br>" }
      newArr.filter(ff); 
      console.log(newArr)
      let textBreak= newArr.map(v => <p key={v+1}>{v}<br></br>
      </p>)
  
      return (
        <div  className='Br2jsx'>
{textBreak}
      </div>
    );
  }

}

export default Br2jsx;

