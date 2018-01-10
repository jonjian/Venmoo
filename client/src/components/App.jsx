import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login.jsx';
import Main from './Main.jsx';
import ProfilePage from './ProfilePage.jsx';
import VenmooTitle from './VenmooTitle.jsx';
import { Link, Route, Switch } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state ={};
  }

  render() {
    return (
      <div>
        <VenmooTitle />
        <Main />
      </div>
    );
  }
}

export default App;
