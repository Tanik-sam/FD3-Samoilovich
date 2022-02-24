import React from 'react';
import PropTypes from 'prop-types';
import './MovieSelect.css';

class MovieSelect extends React.PureComponent {



    
  render() {
    console.log("MovieSelect render","code",this.props.movie);
    var classSp="MovieSelect"   
  

    return (
      
      <option className={classSp}> {this.props.movie} </option>
       
    )        
  }

}

export default MovieSelect;

