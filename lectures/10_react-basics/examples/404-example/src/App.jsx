import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Unexist from './pages/Unexist';

const App = () => (
  <Router>
    <h1>404 Example</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/fghjk">404</Link>
      </li>
      <li>
        <Link to="/fgyhu">Unexist</Link>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="*" component={Unexist} />
    </Switch>
  </Router>
);

export default App;
