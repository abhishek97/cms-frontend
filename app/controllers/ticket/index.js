import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams : ['category'], // assume any value like = '
    actions : {
      routeToShowTicket(id){
        console.log(id);
        this.transitionToRoute('ticket.show',id);
      }
    }
});
