import React from 'react';

import store from '../store';

import NewCard from './NewCard';

export default React.createClass({
  getInitialState() {
    return {showForm: false}
  },
  newCard() {
    this.setState({showForm: true})
  },
  updateState() {
    this.setState({cards: store.cardsCollection.toJSON()})
  },
  componentDidMount() {
    store.cardsCollection.on('update', this.updateState)
    store.cardsCollection.fetch();
  },
  render() {
    console.log(this.state);
    let form;
    let questions;
    if (this.state.showForm) {
      form = <NewCard/>
    }
    if (this.state.cards) {
      questions = this.state.cards.map((card,i) => {
        return (
          <li key={i}>
          <p>{card.question}</p>
          <p>{card.answer}</p>
          </li>
        )
      })
    }
    return (
      <main>
        <button onClick={this.newCard} id="add-card">New</button>
        {form}
        <ul id="question-list">
          {questions}
        </ul>
      </main>
    );
  }
});
