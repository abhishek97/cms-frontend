import Ember from 'ember';
import { inject as service } from '@ember/service';
/*
0 -> Open
1 -> Assigned to fb
2 -> Resolved by fb
3 -> Closed
*/
export default Ember.Component.extend({
    notify: service(),
    router: service(),
    actions : {
        reOpenTicket(){
            this.send('changeStatus', 0);
        },
        closeTicket(){
            this.send('changeStatus', 3);
        },
        changeStatus(status){
            const ticket = this.get('ticket');
            ticket.set('status', status);
            ticket.save().then(() => {
              this.get('notify').success('Ticket updated successfully')
              this.get('router').transitionTo('ticket')
            })
        }
    }
});