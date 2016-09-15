import Backbone from 'backbone';

import settings from '../settings';

export default Backbone.Collection.extend({
  urlRoot: `https://baas.kinvey.com/appdata/${settings.appKey}/MorePractice`,
  idAttribute: '_id'
});