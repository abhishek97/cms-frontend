import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
    CID : DS.attr(),
    time : DS.attr(),
    status : DS.attr('number', { defaultValue: 0 }),
    body : DS.attr(),
    customer : DS.belongsTo('customer'),
    fb : DS.belongsTo('fb'),
    helper: DS.belongsTo('fb'),
    statusText : Ember.computed('status', function () {
      const status = this.get('status');
      let statusText = 'Invalid Status';
      
      switch (status) {
        case 0: statusText = 'Open'; break;
        case 1: statusText = 'Assigned To Agent'; break;
        case 2: statusText = 'Resolved By Agent'; break;
        case 3: statusText = 'Closed'; break;
      }

      return statusText;
    })
});
