import $ from 'jquery';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';

import settings from './settings';
import store from './store';
import router from './router';

$(document).ajaxSend(function(evt, xhrAjax, jqueryAjax) {
  if (jqueryAjax.url.indexOf('spotify') === -1) {
    if (localStorage.getItem('authtoken')) {
      xhrAjax.setRequestHeader('Authorization', 'Kinvey ' + localStorage.getItem('authtoken'));
    } else {
      xhrAjax.setRequestHeader('Authorization', 'Basic ' + settings.basicAuth);
    }
  }
});

console.log('hi');

// store.session.save({
//   username: 'caryn',
//   password: '1234'
// }, {
//   success: function(data) {
//     localStorage.setItem('authtoken', data.get('authtoken'));
//     store.session.set({
//       username: 'caryn',
//       password: '1234'
//     });
//   }
// });

ReactDOM.render(router, document.getElementById('container'));
