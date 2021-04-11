import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import Sign from '../src/components/Sign';
import { BrowserRouter as Router, Route } from 'react-router-dom';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Route path='/' exact render={() => <App />} />
      <Route path='/sign' exact component={Sign} />
    </Router>
  </React.StrictMode >,
  document.getElementById('landingContent')
);
