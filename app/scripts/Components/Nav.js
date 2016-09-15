import React from 'react';

import store from '../store';

export default React.createClass({
  getInitialState() {
    if (store.session.get('username')) {
      return {loggedIn: true}
    } else {
      return {loggedIn: false}
    }
  },
  login() {
    this.setState({showLogin: true});
  },
  signup() {
    this.setState({showSignup: true})
  },
  logout() {
    store.session.logout();
  },
  render() {
    let button = (<div id="nav-btn-wrapper"><button onClick={this.login} id="login-btn">Login</button><button onClick={this.signup} id="signup-btn">Signup</button></div>)
    if (this.state.loggedIn) {
      button = (<div id="nav-btn-wrapper"><button onClick={this.logout} id="logout-btn">Logout</button></div>)
    }
    return (
      <nav>
        {button}
      </nav>
    );
  }
});
