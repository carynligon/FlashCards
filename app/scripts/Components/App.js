import React from 'react';

import Nav from './Nav';
import Card from './Card';

export default React.createClass({
  getInitialState() {
    return {showModal: false}
  },
  hideModal() {
    this.setState({showModal: false})
  },
  render() {
    return (
      <main>
        <Card/>
      </main>
    );
  }
})
