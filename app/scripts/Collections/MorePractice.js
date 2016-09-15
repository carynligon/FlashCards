import Backbone from 'backbone';

import MorePracticeMod from '../Models/MorePracticeMod';

import settings from '../settings';

export default Backbone.Collection.extend({
  url: `https://baas.kinvey.com/appdata/${settings.appKey}/MorePractice`,
  model: MorePracticeMod
});
