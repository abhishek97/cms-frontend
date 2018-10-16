import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
  model() {
    return this.get('store').query('ticket', {
      filter: {
        status: {
          $ne: 3
        }
      }
    });
  }
});
