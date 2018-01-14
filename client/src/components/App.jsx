import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch } from 'react-router-dom';
import $ from 'jquery';

import { response } from './../../../database/dummy-data.js';
import Login from './Login.jsx';
import Main from './Main.jsx';
import ProfilePage from './ProfilePage.jsx';
import VenmooTitle from './VenmooTitle.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToProfilePage: false,
      user: {},
      transactionHist: [],
    };
    this.renderUser = this.renderUser.bind(this);
  }


  renderUser(user, transactionHist) {
    this.setState({
      user,
      transactionHist,
      redirectToProfilePage: true,
    });
    // this.props.history.push('/profilepage');
  }

  render() {
    return (
      <div className="appbody">
        <VenmooTitle />
        <Main
          user={this.state.user}
          transactionHist={this.state.transactionHist}
          renderUser={this.renderUser}
          redirectToProfilePage={this.state.redirectToProfilePage}
        />
      </div>
    );
  }
}

export default App;
