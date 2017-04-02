import Ember from 'ember';

export default Ember.Controller.extend({
    actions : {
        showTicket(id){
            this.transitionToRoute('ticket.show',id);
        }
    }
});
