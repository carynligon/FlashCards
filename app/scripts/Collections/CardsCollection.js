import Backbone from 'backbone';

import settings from '../settings';
import Card from '../Models/CardModel';

export default Backbone.Collection.extend({
  url: `https://baas.kinvey.com/appdata/${settings.appKey}/Cards`,
  model: Card,
  newCard: function(question, answer, category, difficulty) {
    this.create({
      question,
      answer,
      category,
      difficulty
    }, {
      success: (data) => {
        console.log(data);
      }
    });
  }
});
