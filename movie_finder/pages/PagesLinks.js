import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './PagesLinks.css';


class PagesLinks extends React.Component {
          
  render() {

    return (
      
      <NavLink to={"/"+this.props.pageNum+"/"+this.props.pageNum} className="PageLinkMenu" activeClassName="ActivePageLinkMenu">{this.props.pageNum}</NavLink>
      
    );
    
  }

}
    
export default PagesLinks;
    

