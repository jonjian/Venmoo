import React from 'react';
import { Link, Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';
// import createHashHistory from 'history/createHashHistory';
import ProfilePage from './ProfilePage.jsx';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';

// const history = createHashHistory();

// The react-route 'render' method takes a callback, which itself takes in props and generates
// jsx element. This is used to pass props down to components via react-routing.
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToProfilePage: props.redirectToProfilePage,
    };
    console.log('props: ', props);
    console.log('state: ', this.state);
    this.generateProfilePage = this.generateProfilePage.bind(this);
    this.generateHomePage = this.generateHomePage.bind(this);
  }

  componentDidUpdate() {
    console.log('Main does update');
    console.log('updated props', this.props);
    console.log('updated state', this.state)
    this.render();
    // if (this.props.redirectToProfilePage) {
    //   // history.push('/profilepage');

    // }
    // this.render();
  }

  generateProfilePage() {
    console.log('tries to generate profile page')
    return (
      <ProfilePage
        user={this.props.user}
        transactionHist={this.props.transactionHist}
        renderUser={this.props.renderUser}
        updateState={this.props.updateState}
      />
    );
  }

  generateHomePage() {
    const { renderUser, user, redirectToProfilePage } = this.props;
    console.log(this.props.redirectToProfilePage);
    return this.props.redirectToProfilePage ? (
      <ProfilePage
        user={this.props.user}
        transactionHist={this.props.transactionHist}
        renderUser={this.props.renderUser}
      />
    ) : (
      <Login
        renderUser={renderUser}
        user={user}
        redirectToProfilePage={redirectToProfilePage}
      />
    )
  }

  render() {
    // if (this.state.redirectToProfilePage) {
    //   this.state.redirectToProfilePage = false;
    //   return (
    //     <Redirect to="/profilepage" render={this.generateProfilePage} />
    //   )
    // }

    return (
      <div>
        <BrowserRouter >
          <Switch>
            <Route path="/" render={this.generateHomePage} />
            <Route path="/profilepage" render={this.generateProfilePage} />
            <Route path="/signup" component={SignUp} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Main;
