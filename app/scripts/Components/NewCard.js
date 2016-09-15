import React from 'react';

import store from '../store';

export default React.createClass({
  makeCard(e) {
    e.preventDefault();
    store.cardsCollection.newCard(this.refs.question.value, this.refs.answer.value, this.refs.category.value, this.refs.difficulty.value);
    this.props.hideForm();
  },
  render() {
    return (
      <form className="new-card-form" onSubmit={this.makeCard}>
        <input type="text" name="question" id="question" placeholder="question" ref="question" required/>
        <textarea name="answer" id="answer" placeholder="answer" ref="answer" required></textarea>
        <div className="category-wrapper">
          <label htmlFor="category">Category</label>
          <select id="category" name="category" ref="category" required>
            <option></option>
            <option>HTML</option>
            <option>CSS</option>
            <option>JS</option>
            <option>Misc.</option>
          </select>
        </div>
        <div className="difficulty-wrapper">
          <label htmlFor="category">Difficulty</label>
          <select id="difficulty" name="difficulty" ref="difficulty" required>
            <option></option>
            <option>easy</option>
            <option>intermediate</option>
            <option>hard</option>
          </select>
        </div>
        <button type="submit" id="submit-card">Submit</button>
      </form>
    );
  }
});
