import React from 'react';
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';

import './App.css';

import MultiProvider from './data/providers/providers/MultiProvider';
import Welcome from './views/Welcome';
import Gallery from './views/Gallery';


function App() {
  return (
    <div className="App">
      <MultiProvider>
        <Router>
          <Switch>
            <Route path="/welcome" component={Welcome} />
            <Route path="/gallery" component={Gallery} />
            <Redirect path="*" to="/welcome" />
          </Switch>
        </Router>
      </MultiProvider>
    </div>
  );
}

export default App;
