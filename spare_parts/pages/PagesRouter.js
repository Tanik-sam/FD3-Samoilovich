import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Page_SpareParts from './Page_SpareParts';
import Login from './Login';
 

class PagesRouter extends React.Component {
          
  render() {
    let pathPage="/"+this.props.pageNum+"/:clid"
    let kk=<Route path={pathPage} component={Page_SpareParts}  />
    if (this.props.pageNum=="admin") {kk=<Route path={pathPage} component={Login}  />}
    return (
      <div className='Routing'>
        {kk}

      </div>
    );
    
  }

}
    
export default PagesRouter;
    