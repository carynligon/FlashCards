import Backbone from 'backbone';

import MorePracticeMod from '../Models/MorePracticeMod';

import settings from '../settings';

export default Backbone.Collection.extend({
  url: `https://baas.kinvey.com/appdata/${settings.appKey}/MorePractice`,
  model: MorePracticeMod,
  addCard: function(card) {
    console.log(card);
    this.create({
      question: {
        _type: 'KinveyRef',
        _id: card._id,
        _collection: 'Cards'
      }
    }, {
      success: (data) => {
        console.log(data);
      }
    });
  }
});
