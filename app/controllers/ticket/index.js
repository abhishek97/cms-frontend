import Ember from 'ember';

export default Ember.Controller.extend({
    actions : {
      routeToShowTicket(id){
        console.log(id);
        this.transitionToRoute('ticket.show',id);
      }
    }
});
