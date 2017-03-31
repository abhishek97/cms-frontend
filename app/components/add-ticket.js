import Ember from 'ember';

export default Ember.Component.extend({
    store : Ember.inject.service(),
    router: Ember.inject.service('-routing'),
    actions : {
        findCustomer(){
            this.get('store').query('customer',{
                filter : {
                    CID : this.get('ticket.CID')
                }
            }).then(customers=>{
                this.set('possibleCustomers',customers);
                //console.log(customers.get('length') == 1);
                console.log(customers);
                if( customers.get('length') == 1 )
                    {
                        this.set('ticket.customer', customers.get("firstObject"));
                    }
            })
        },
        setCID(cid)
        {
            this.set('ticket.CID', cid);
            this.send('findCustomer');
        },
        addTicket(){
            this.get('ticket').save().then( ticket=>{
                this.get('router').transitionTo('home');
            }).catch(err=>{
                this.get('router').transitionTo('500');
        });
        }
    }
});
