import React from 'react';
import PropTypes from 'prop-types';
import './PrivetRender.css';

class PrivetRender extends React.PureComponent {

  render() {

    var privet="Привет"
    return (
      <div className='PrivetRender'>
     {privet}
      </div>
    )
    ;
s
  }

}

export default PrivetRender;
