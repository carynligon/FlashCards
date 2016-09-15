import React from 'react';
import _ from 'underscore';

import store from '../store';

export default React.createClass({
  closeModal(e) {
    if (e.target.className === 'modal-container') {
      this.props.hideModal();
    }
  },
  render() {
    let containerStyles = {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 10,
      background: 'rgba(0,0,0,.5)'
    };
    let contentStyles = {
        background: 'white',
        width: '500px',
        margin: '0 auto',
        height: '60vh',
        marginTop: '12.5%',
        overflow: 'scroll'
    };
    return (
      <div className="modal-container" style={containerStyles} onClick={this.closeModal}>
        <div className="modal-content" style={contentStyles}>
          {this.props.children}
        </div>
      </div>
    );
  }
});
