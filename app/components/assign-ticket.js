import Ember from 'ember';
import { inject as service } from '@ember/service'

export default Ember.Component.extend({
    notify: service(),
    router: service(),
    actions : {
        assignTo(){
            this.get('ticket').save().then(ticket=>{
              this.get('notify').success('Ticket Assigned Sucessfully');
              this.get('router').transitionTo('ticket')
            }).catch(err => {
              console.error(err)
              this.get('notify').error('There was some error');
            })
        },
    }
});
