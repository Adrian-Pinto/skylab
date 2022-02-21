import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import Home from './pages/Home';
import UserProfile from './pages/UserProfile';

const App = () => (
  <Router>
    <h1>Nav Menu</h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
    </ul>
    <hr />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={UserProfile} />
    </Switch>
  </Router>
);

export default App;
