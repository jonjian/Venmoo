import React from 'react';
import ProfilePage from './ProfilePage.jsx';
import Login from './Login.jsx';
import { Link, Route, Switch } from 'react-router-dom';
import SignUp from './SignUp.jsx';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/profilepage" component={ProfilePage} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </div>
    );
  }
}
export default Main;
