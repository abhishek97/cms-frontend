import Ember from 'ember';

export default Ember.Route.extend({
    model(params){
        return Ember.RSVP.hash({
            ticket : this.store.findRecord('ticket',params.id),
            fieldBoys : this.store.findAll('fb')
        }) ;
    }
});
