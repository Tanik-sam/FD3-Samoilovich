import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import PageLogin from './PageLogin'; 

class PagesRouter extends React.Component {
          
  render() {
    let pathPage="/"+this.props.pageNum+"/:clid"
    
    return (
      <div className='Routing'>
      <Route path={pathPage} component={PageLogin}  />

      </div>
    );
    
  }

}
    
export default PagesRouter;
    