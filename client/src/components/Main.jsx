import React from 'react';
import ProfilePage from './ProfilePage.jsx';
import Login from './Login.jsx';
import { Link, Route, Switch } from 'react-router-dom';

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
        </Switch>
      </div>);
  }
}
export default Main;
