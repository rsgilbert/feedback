import React from 'react';
import { IndexPage } from './features/index/IndexPage'
import './App.css';

import { BrowserRouter as Router,
Switch, Route, Redirect } from 'react-router-dom'
import { Q1 } from './features/q1/Q1';
import { Q2 } from './features/q2/Q2';


function App() {
  return (

    <Router>
      <Switch>
        <Route exact path="/" component={IndexPage} />
        <Route exact path="/1" component={Q1} />
        <Route exact path="/2" component={Q2} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
