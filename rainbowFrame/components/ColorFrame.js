import React from 'react';
import PropTypes from 'prop-types';

class ColorFrame extends React.Component {


  
  render() {
    return (
      <div style={{border:"solid 3px "+this.props.color,padding:"10px"}}>
        {this.props.children}
      </div>
    );
  }

}

export default ColorFrame;
