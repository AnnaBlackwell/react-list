import React from 'react'
import { render } from 'react-dom'
import App from './modules/app'
import { Router, Route, browserHistory, Link } from 'react-router'
import List from './modules/list'
import ListItem from './modules/list-item'



render((
  <Router history={browserHistory}>
  <Route path="/" component={App}/>
    <Route path="/list" component={List}/>
      <Route path="/list/:ListItem" component={ListItem}/>
  </Router>
), document.getElementById('app'))
