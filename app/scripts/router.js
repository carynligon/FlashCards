import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import Card from './Components/Card';

const router = (
  <Router history={hashHistory}>
    <Route path="/" component={Card}/>
  </Router>
);

export default router;
