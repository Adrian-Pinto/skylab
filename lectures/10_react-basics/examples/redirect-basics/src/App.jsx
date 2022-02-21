import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
  Switch,
} from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';

const App = () => (
  <Router>
    <h1>Redirect example</h1>
    <p>Try to navigate to unexist path, this redirect to Home page</p>
    <p>Example: localhost:3000/example</p>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/profile">Profile</Link>
      </li>
      <li>
        <Link to="/unexistrute">Unexist path</Link>
      </li>
    </ul>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Redirect from="*" to="/" />
    </Switch>
  </Router>
);

export default App;
