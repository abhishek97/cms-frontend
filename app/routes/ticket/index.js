import Ember from 'ember';
import moment from 'moment';

export default Ember.Route.extend({
    model(){
        return this.get('store').query('ticket', {
          filter : {
            after : moment().subtract(1,'days').format()
          }
        });
    }
});
