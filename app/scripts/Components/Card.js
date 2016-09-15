import React from 'react';

import store from '../store';

import NewCard from './NewCard';

export default React.createClass({
  getInitialState() {
    return {
      showForm: false,
      index: 0,
      showAnswer: false
    }
  },
  newCard() {
    this.setState({showForm: true})
  },
  nextCard() {
    this.setState({index: this.state.index + 1})
  },
  showAnswer() {
    this.setState({showAnswer: true});
  },
  hideAnswer() {
    this.setState({showAnswer: false});
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
    let card;
    let answer;
    if (this.state.showForm) {
      form = <NewCard/>
    }
    if (this.state.cards) {
      card = <p onClick={this.showAnswer}>{this.state.cards[this.state.index].question}</p>
    }
    if (this.state.showAnswer) {
      answer = <p onClick={this.hideAnswer}>{this.state.cards[this.state.index].answer}</p>
    }
    return (
      <main>
        <button onClick={this.newCard} id="add-card">New</button>
        {form}
        {card}
        {answer}
        <button onClick={this.nextCard} id="next-card">Next</button>
      </main>
    );
  }
});
