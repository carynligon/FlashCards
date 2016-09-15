import React from 'react';

import store from '../store';

import Modal from './Modal';

export default React.createClass({
  getInitialState() {
    return {};
  },
  login(e) {
    e.preventDefault();
    let username = this.refs.username.value;
    let password = this.refs.password.value;
    store.session.login(username, password).then((response) => {
      if (response) {
        this.props.hideModal();
      } else {
        this.setState({error: true});
      }
    });
  },
  clearErrors() {
    this.setState({error: false});
  },
  render() {
    let styles;
    console.log(this.props);
    let errorMsg;
    if (this.state.error) {
      styles = {
        background: '#FF3C38',
        color: '#fff'
      };
      errorMsg = (<p id="login-error">invalid username or password</p>);
    }
    return(
      <Modal hideModal={this.props.hideModal}>
      <form className="login-signup-form" onSubmit={this.login}>
        <h2 className="login-title">SIGN IN</h2>
        <div className="username">
          <label htmlFor="username"><i className="fa fa-user user-icon" aria-hidden="true"></i></label>
          <input type="text" placeholder="username" id="username" ref="username" onKeyUp={this.clearErrors} style={styles} required/>
        </div>
        <div className="password">
          <label htmlFor="password"><i className="fa fa-unlock-alt password-icon" aria-hidden="true"></i></label>
          <input type="password" placeholder="password" id="password" ref="password" onKeyUp={this.clearErrors} style={styles} required/>
        </div>
        {errorMsg}
        <button type="submit" value="submit" id="submit-login-btn">submit</button>
      </form>
      </Modal>
    );
  }
});
