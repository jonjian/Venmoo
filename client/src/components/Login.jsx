import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch, Redirect } from 'react-router-dom';
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import jquery from 'jquery';
import Axios from 'axios';

import ProfilePage from './ProfilePage.jsx';

class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log('login: ', props);
    this.state = {
      redirectToProfilePage: props.redirectToProfilePage,
      username: '',
      password: '',
    };
    console.log(this.state);
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

  // Login button sends post request. Post request triggers state change.
  // should render profile page after state change.

  postRequest(username, password) {
    Axios.post('/profilepage', {
      username,
      password,
    })
      .then((res) => {
        console.log('data: ', res.data);
        this.props.renderUser(res.data.user, res.data.transactions);
      })
      .catch(err => console.error(err));
   
    // jquery.ajax({
    //   url: `/profilepage`,
    //   type: 'POST',
    //   dataType: 'json',
    //   contentType: 'application/json',
    //   data: JSON.stringify({
    //     username,
    //     password,
    //   }),
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

  // Make the password form change the state on change. Upon form submission, send POST request.
  // Currently, we use a link to load the profile page, which renders with the hardcoded
  // information regardless of what comes back from the server. We shouldn't try to render
  // the profile page until a response is received from the server.

  // Can we use routing to direct the page from inside renderUser?

  // <Link to={`/profilepage/username/${this.state.username}`}>
  // </Link>

  render() {
    console.log('redirect: ', this.state.redirectToProfilePage);
    // if (this.state.redirectToProfilePage) {
    //   return (
    //     <Redirect to="/profilepage" />
    //   )
    // }

    return (<div id="contentLogin">
        <div>
          <form>
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
              
                <input className="loginButton" type="submit" onClick={this.handleSubmit.bind(this)} value="Log In" />
              
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