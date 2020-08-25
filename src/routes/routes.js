import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Main from '../pages/Main'
import Register from '../pages/Register'

function Routes() {
  return (
      <Switch>
          <Route exact path="/" component={Main}/>
          <Route path="/register" component={Register}/>
      </Switch>
  );
}

export default Routes;