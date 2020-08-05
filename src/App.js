import React from 'react';
import { IndexPage } from './features/index/IndexPage'
import './App.css';

import { BrowserRouter as Router,
Switch, Route, Redirect } from 'react-router-dom'


function App() {
  return (
    
    <Router>
      <Switch>
        <Route exact path="/" component={IndexPage} />

        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
