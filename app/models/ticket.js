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

      if(status === 0)
        statusText = 'Open';
      else if(status === 1)
        statusText = 'Assigned To Agent';
      else if(status === 2)
        statusText = 'Resolved By Agent';

      return statusText;
    })
});
