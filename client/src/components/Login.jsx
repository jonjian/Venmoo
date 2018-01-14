import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import jquery from 'jquery';
import Axios from 'axios';

import { insertBreaks } from './../helpers.jsx';
import ProfilePage from './ProfilePage.jsx';
import LoginWarning from './LoginWarning.jsx';

class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log('login: ', props);
    this.state = {
      redirectToProfilePage: props.redirectToProfilePage,
      username: '',
      password: '',
      displayWarning: false,
    };
    console.log(this.state);
  }

  postRequest(username, password) {
    Axios.post('/profilepage', {
      username,
      password,
    })
      .then((res) => {
        console.log('data: ', res);
        this.props.renderUser(res.data.user, res.data.transactions);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          this.setState({
            displayWarning: true,
          });
        } else {
          console.error(err);
        }
      });
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault()
    this.postRequest(this.state.username, this.state.password);
  }

  // renderLoginWarning() {
  //   return (this.state.displayWarning) ? <LoginWarning /> : null;
  // }

  // {this.state.displayWarning ? <LoginWarning /> : null}
  render() {
    return (
      <div id="login">
        <p id="loginWarning" className={this.state.displayWarning ? 'display' : 'hide'}>
          Invalid username and/or password. Please try again, or sign up.
        </p>
        <div id="contentLogin">
          <form>
            <div>
              {insertBreaks(3)}
              <label>Username:</label>
              <input type="text" onChange={this.handleUsernameChange.bind(this)} name="username" />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" onChange={this.handlePasswordChange.bind(this)} name="password" />
            </div>
            <div>             
              <input className="loginButton" type="submit" onClick={this.handleSubmit.bind(this)} value="Log In" />   
              {insertBreaks(6)}
              <Link to="/signup">
                <input className="loginButton" type="submit" value="No Account? Sign Up Here" />
              </Link>
            </div>
          </form>
        </div>
      </div>
      
    );
  }
}


export default Login;
