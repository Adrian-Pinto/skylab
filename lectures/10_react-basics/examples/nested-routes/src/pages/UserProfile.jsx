import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  useRouteMatch,
  Link,
  Route,
} from 'react-router-dom';
import '../assets/UserProfile.css';
import UserFriends from './UserFriends';
import UserHobbies from './UserHobbies';
import UserOptions from './UserOptions';

const UserProfile = () => {
  const { path, url } = useRouteMatch();

  return (
    <Router>
      <center>
        <h1>John Doe</h1>
        <h2>Profile</h2>
      </center>
      <nav className="navBar">
        <ul>
          <li>
            <Link to={`${url}/friends`}>Friends</Link>
          </li>
          <li>
            <Link to={`${url}/hobies`}>hobbies</Link>
          </li>
          <li>
            <Link to={`${url}/options`}>Options</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path={`${path}/friends`} component={UserFriends} />
        <Route path={`${path}/hobies`} component={UserHobbies} />
        <Route path={`${path}/options`} component={UserOptions} />
      </Switch>
    </Router>
  );
};

export default UserProfile;
