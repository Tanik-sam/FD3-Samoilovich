import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './PagesLinks.css';
let spareParts=require('../spareParts.json');

class PagesLinks extends React.Component {
          
  render() {
    
    return (
      
      <NavLink to={"/"+this.props.pageNum+"/"+this.props.pageNum} className="PageLink" activeClassName="ActivePageLink">{this.props.pageNum}</NavLink>
      
    );
    
  }

}
    
export default PagesLinks;
    

