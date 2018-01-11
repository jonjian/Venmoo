import React from 'react';
import { Link } from 'react-router-dom';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (<form action="/signup" method="post">
        <div>
          <label>Choose a username:</label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>Choose a password:</label>
          <input type="password" name="password" />
        </div>
        <div>
          <label>Confirm password:</label>
          <input type="password" name="password" />
        </div>
        <div>
          <Link to="/profilepage">
            <input type="submit" value="Sign up!" />
          </Link>
        </div>
      </form>);
  }
}

export default SignUp;
