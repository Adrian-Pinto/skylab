import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => (
  <>
    <Router>
      <h1>Nav Menu</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  </>
);

export default App;