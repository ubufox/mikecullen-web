import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';

import './App.css';

import Welcome from './views/Welcome';
import Survey from './views/Survey';
import Gallery from './views/Gallery';
import Instagram from './views/Instagram';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/welcome" component={Welcome} />
          <Route path="/survey" component={Survey} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/insta" component={Instagram} />
          <Redirect path="*" to="/welcome" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
