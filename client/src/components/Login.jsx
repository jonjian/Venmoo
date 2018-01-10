import React from 'react';
import ProfilePage from './ProfilePage.jsx';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

class Login extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
          <form action="/login" method="post">
    <div>
      <label>Username:</label>
      <input type="text" name="username" />
    </div>
    <div>
      <label>Password:</label>
      <input type="password" name="password" />
    </div>
    <div>
        <Link to="/profilepage">
          <input type="submit" value="Log In" />
        </Link>
      </div>
  </form>
    );
  }
}

export default Login;
