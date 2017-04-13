import Ember from 'ember';

export default Ember.Component.extend({
    actions : {
      showTicket(id){
        this.get('onClick')(id);
      }
    }
});
