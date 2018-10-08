import Ember from 'ember';

export default Ember.Component.extend({
    router: Ember.inject.service('-routing'),
    actions : {
        assignTo(){
            this.get('ticket').save().then(ticket=>{
              this.get('router').transitionTo('ticket');
            });
        },
    }
});
