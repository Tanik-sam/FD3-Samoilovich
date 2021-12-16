import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

import Page_SpareParts from './Page_SpareParts';
 

class PagesRouter extends React.Component {
          
  render() {
    let pathPage="/"+this.props.pageNum+"/:clid"
    return (
      <div>
        <Route path={pathPage} component={Page_SpareParts} />

      </div>
    );
    
  }

}
    
export default PagesRouter;
    