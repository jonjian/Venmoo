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

  getRequest() {
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

    Axios.post('/profilepage', {
      username: 'annie',
      password: '123',
    })
      .then((res) => {
        this.props.renderUser(res.data.user, res.data.transactions);
      })
      .catch(err => console.error(err));
  }

  handleChange(event) {
    this.setState({ username: event.target.value });
  }

  // Make the password form change the state on change. Upon form submission, send POST request.
  render() {
    return (<div id="contentLogin">
        <div>
          <form action="/login" method="post">
            <div>
              <br />
              <br />
              <br />
              <label>Username:</label>
              <input type="text" onChange={this.handleChange.bind(this)} name="username" />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" name="password" />
            </div>
            <div>
              <Link to={`/profilepage/username/${this.state.username}`}>
                <input className="loginButton" type="submit" onClick={() => this.getRequest()} value="Log In" />
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