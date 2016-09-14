import React from 'react';

import store from '../store';

export default React.createClass({
  makeCard(e) {
    e.preventDefault();
    store.cardsCollection.newCard(this.refs.question.value, this.refs.answer.value, this.refs.category.value, this.refs.difficulty.value);
  },
  render() {
    return (
      <form className="new-card-form" onSubmit={this.makeCard}>
        <input type="text" name="question" id="question" placeholder="question" ref="question"/>
        <input type="text" name="answer" id="answer" placeholder="answer" ref="answer"/>
        <input type="text" name="category" id="category" placeholder="category" ref="category"/>
        <input type="text" name="difficulty" id="difficulty" placeholder="difficulty" ref="difficulty"/>
        <button type="submit" id="submit-card">Submit</button>
      </form>
    );
  }
});
