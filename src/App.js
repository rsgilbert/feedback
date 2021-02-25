import React from 'react';
import { IndexPage } from './features/index/IndexPage'
import './App.css';

import {
  BrowserRouter as Router,
  Switch, Route, Redirect
} from 'react-router-dom'
import { Q1 } from './features/q1/Q1';
import { Q2 } from './features/q2/Q2';
import { Q3 } from './features/q3/Q3';
import { Q4 } from './features/q4/Q4';
import { Q5 } from './features/q5/Q5';
import { Q6 } from './features/q6/Q6';
// import { Dashboard } from './features/dashboard/Dashboard';
import { Dash } from './features/dash/Dashboard';
import { D } from './features/dashboard/D';
import { Header } from './features/headers/Header'
import { IndexHeader } from './features/headers/IndexHeader';
import { CommentPage } from './features/comment/CommentPage';

function App() {
  return (
    <div className="app">
        <Router>
            <header>
                <Switch>
                    <Route exact path="/" component={IndexHeader} />
                    <Route exact path="/1" component={Header } />
                    <Route exact path="/2" component={Header} />
                    <Route exact path="/3" component={Header} />
                    <Route exact path="/4" component={Header} />
                    <Route exact path="/5" component={Header} />
                    <Route exact path="/6" component={Header} />
                    <Route exact path="/7" component={Header} />
                    <Route exact path="/dashboard" component={Header} />
                    <Route exact path="/d" component={Header} />
                </Switch>
            </header>
          
            <main className="main">
                <Switch>
                    <Route exact path="/" component={IndexPage} />
                    <Route exact path="/1" component={Q1} />
                    <Route exact path="/2" component={Q2} />
                    <Route exact path="/3" component={Q3} />
                    <Route exact path="/4" component={Q4} />
                    <Route exact path="/5" component={Q5} />
                    <Route exact path="/6" component={Q6} />
                    <Route exact path="/dashboard" component={Dash} />
                    <Route exact path="/d" component={Dash} />
                    <Route exact path="/7" component={CommentPage} />
                    <Redirect to="/" />
                </Switch>
            </main>
      </Router>
    </div>
  );
}

export default App;
