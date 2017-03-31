import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('ticket', function() {
    this.route('add');
  });
  this.route('home');
  this.route('500');
});

export default Router;
