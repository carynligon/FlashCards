import React from 'react';
import _ from 'underscore';

import store from '../store';

import NewCard from './NewCard';
import Nav from './Nav';

export default React.createClass({
  getInitialState() {
    return {
      showForm: false,
      index: 0,
      showAnswer: false
    }
  },
  newCard() {
    this.setState({showForm: true});
  },
  setPracticeCards() {
    let practiceCards = [];
    store.morePractice.forEach((model) => {
      practiceCards.push(model.get('question')._obj);
    });
    console.log(practiceCards);
    this.setState({
      showPractice: true,
      practice: _.shuffle(practiceCards),
      index: 0
    });
  },
  practiceSet() {
    store.morePractice.on('update', this.setPracticeCards);
    store.morePractice.fetch({
      data: {
        "resolve": "question"
      }
    });
  },
  fullSet() {
    this.setState({showPractice: false, index: 0})
  },
  morePractice() {
    store.morePractice.addCard(this.state.cards[this.state.index]);
  },
  nextCard() {
    if (this.state.showPractice) {
      if (this.state.index + 1 >= this.state.practice.length) {
        this.setState({index: 0})
      } else {
        this.setState({index: this.state.index + 1});
      }
    } else {
      if ((this.state.index + 1) >= this.state.cards.length) {
        this.setState({index: 0})
      } else {
        this.setState({index: this.state.index + 1});
      }
    }
  },
  showAnswer() {
    this.setState({showAnswer: true});
  },
  hideAnswer() {
    this.setState({showAnswer: false});
  },
  updateState() {
    this.setState({cards: _.shuffle(store.cardsCollection.toJSON())});
  },
  componentDidMount() {
    store.cardsCollection.on('update', this.updateState);
    store.cardsCollection.fetch();
  },
  componentWillUnmount() {
    store.cardsCollection.off('update', this.updateState);
    store.morePractice.off('update', this.setPracticeCards);
  },
  render() {
    console.log(this.state);
    let form;
    let questions;
    let card;
    let answer;
    let button = <button onClick={this.practiceSet} id="practice-cards">Practice</button>;
    if (this.state.showForm) {
      form = <NewCard/>
    }
    if (this.state.cards && !this.state.showAnswer && !this.state.showPractice) {
      card = <p onClick={this.showAnswer}>{this.state.cards[this.state.index].question}</p>;
    }
    if (this.state.showPractice) {
      card = <p onClick={this.showAnswer}>{this.state.practice[this.state.index].question}</p>;
      button = <button onClick={this.fullSet} id="practice-cards">Full Set</button>
    }
    if (this.state.showAnswer) {
      card = <p onClick={this.hideAnswer}>{this.state.cards[this.state.index].answer}</p>;
    }
    return (
      <main>
        <Nav/>
        <section className="card">
          {button}
          <button onClick={this.newCard} id="add-card">New</button>
          {form}
          <div id="card-wrapper">
            {card}
          </div>
          <div className="btn-wrapper">
            <button onClick={this.morePractice} id="practice-btn">Needs Practice</button>
            <button onClick={this.nextCard} id="next-card">Next</button>
          </div>
        </section>
      </main>
    );
  }
});
