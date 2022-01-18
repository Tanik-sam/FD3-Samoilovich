import React from 'react';
import PropTypes from 'prop-types';
import './MoviePageCards.css';
import {movieEvents} from './events';
import { NavLink } from 'react-router-dom';
class MoviePageCards extends React.PureComponent {

 
/*  static propTypes = {
    info:PropTypes.shape({
      
      id:PropTypes.number.isRequired,
      spName: PropTypes.string.isRequired,
      articul: PropTypes.string.isRequired,
      articulCode: PropTypes.string.isRequired,
      quantity:PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      joint: PropTypes.string.isRequired,
      equipment: PropTypes.string.isRequired,
      urlSP: PropTypes.string.isRequired,
      ht:0
      
      
    }),
  };*/
 


  state = {
    info: this.props.info,
    editMode:1,
  };
  
  componentDidMount = () => {
    movieEvents.addListener('ButtonEnbled',this.buttonEnbled)
  }
  componentWillUnmount = () => {
    movieEvents.removeListener('ButtonEnbled',this.buttonEnbled)
  }
  buttonEnbled=()=>{
  this.setState({editMode:1})
  }
  componentWillReceiveProps = (newProps) => {
    this.setState({info:newProps.info});
  };

  setSelectedMovie=(eo)=>{
     movieEvents.emit('MovieClicked',this.props.info.id);
   }
   
  render() {
    console.log("MoviePageCards render","code",this.props.info.id);
    
    var classSp="MoviePageCards"
    
    if (this.props.selectedMovieId==this.props.info.id) {classSp="MoviePageCardsChosen"} 
    
    return (
      <NavLink to={"/"+this.props.info.id+"/"+this.props.info.id}>
      <div className={classSp} onClick={this.setSelectedMovie}>
      <img className='Img' src={this.props.info.image.medium} width={180} float="left"/> 
    
      <div className='itemCardName'>{this.props.info.name}</div>
      </div> 
      </NavLink>
    )        
  }

}
  export default MoviePageCards;
