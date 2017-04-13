import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        const ticket = this.get('store').createRecord('ticket');
        return this.get('store').findRecord('fb',0).then(fb=>{
                ticket.set('fb',fb);
                  return ticket;
        });

    }
});
