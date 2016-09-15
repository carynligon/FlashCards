import React from 'react';

import store from '../store';

import Login from './Login';

export default React.createClass({
  getInitialState() {
    if (store.session.get('username')) {
      return {loggedIn: true}
    } else {
      return {loggedIn: false}
    }
  },
  login() {
    this.setState({showModal: true, showLogin: true});
  },
  signup() {
    this.setState({showModal: true, showSignup: true})
  },
  logout() {
    store.session.logout();
  },
  render() {
    console.log(this.props);
    let button = (<div id="nav-btn-wrapper"><button onClick={this.login} id="login-btn">Login</button><button onClick={this.signup} id="signup-btn">Signup</button></div>)
    if (this.state.loggedIn) {
      button = (<div id="nav-btn-wrapper"><button onClick={this.logout} id="logout-btn">Logout</button></div>)
    }
    let modal;
    if (this.state.showModal) {
      if (this.state.showLogin) {
        modal = <Login hideModal={this.props.hideModal}/>
      }
      if (this.state.showSignup) {
        modal = <Signup/>
      }
    }
    return (
      <nav>
        {button}
        {modal}
      </nav>
    );
  }
});
