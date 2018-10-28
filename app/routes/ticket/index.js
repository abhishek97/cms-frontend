import Ember from 'ember';
import config from 'cms-frontend/config/environment'

export default Ember.Route.extend({
  activate () {
    window.setInterval( () => {
      this.refresh()
    }, config.autoRefreshTimeout || 1000)
  },
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
