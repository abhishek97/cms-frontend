import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';
import env from '../config/environment';
export default Base.extend({
  restore(data) {
    return new Ember.RSVP.Promise(function (resolve, reject) {
      resolve(data);
    });
  },
  authenticate() {
    var args = [...arguments];
    return new Ember.RSVP.Promise(function(resolve, reject) {
      let form = {};
      form.username = args[0];
      form.password = args[1];
      $.post(env.host + '/login', form, function (data) {
        if (data.apiKey != undefined) {
          resolve(data);
        } else {
          reject(data);
        }
      });
    });
  },
  invalidate(data) {
    return new Ember.RSVP.Promise(function(resolve, reject) {
      resolve();
    });
  }
});