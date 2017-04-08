import Ember from 'ember';

/*
0 -> Open
1 -> Closed by Engineer
2 -> Closed
*/
export default Ember.Component.extend({
    actions : {
        reOpenTicket(){
            this.send('changeStatus', 0);
        },
        closeTicket(){
            this.send('changeStatus', 2);
        },
        changeStatus(status){
            const ticket = this.get('ticket');
            ticket.set('status', status);
            ticket.save();
        }
    }
});
