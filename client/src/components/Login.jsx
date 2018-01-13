import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import jquery from 'jquery';
import Axios from 'axios';

import ProfilePage from './ProfilePage.jsx';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }


  // getRequest() {
  // jquery.ajax({
  //   url: `/profilepage/username/${this.state.username}`,
  //   type: 'GET',
  //   dataType: 'json',
  //   success: (data) => {
  //     console.log('success: ', data);
  //     this.props.renderUser(data.user, data.transactions);
  //     console.log(data.user);
  //     console.log(data.transactions);
  //   },
  //   error: (err) => {
  //     console.log('error in ajax get ', err);
  //   },
  // });

  // }

  postRequest(username, password) {
    Axios.post('/profilepage', {
      username,
      password,
    })
      .then((res) => {
        this.props.renderUser(res.data.user, res.data.transactions);
      })
      .catch(err => console.error(err));
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit() {
    this.postRequest(this.state.username, this.state.password);
  }

  // Make the password form change the state on change. Upon form submission, send POST request.
  // Currently, we use a link to load the profile page, which renders with the hardcoded
  // information regardless of what comes back from the server. We shouldn't try to render
  // the profile page until a response is received from the server.

  // Can we use routing to direct the page from inside renderUser?
  render() {
    return (<div id="contentLogin">
        <div>
          <form action="/login" method="post">
            <div>
              <br />
              <br />
              <br />
              <label>Username:</label>
              <input type="text" onChange={this.handleUsernameChange.bind(this)} name="username" />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" onChange={this.handlePasswordChange.bind(this)} name="password" />
            </div>
            <div>
              <Link to={`/profilepage/username/${this.state.username}`}>
                <input className="loginButton" type="submit" onClick={this.handleSubmit.bind(this)} value="Log In" />
              </Link>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <Link to="/signup">
                <input className="loginButton" type="submit" value="No Account? Sign Up Here" />
              </Link>
            </div>
          </form>
        </div>
      </div>);
  }
}


export default Login;