import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  router: Ember.inject.service('router'),
  didReceiveAttrs() {
    this._super(...arguments)
    this.send('setCID', this.get('cid'))
  },
  addTicketTask: task(function * () {
    try {
      const ticket = yield this.get('ticket').save()
      this.get('router').transitionTo('ticket.show', ticket.id);
    } catch(err) {
      console.error(err)
      this.get('router').transitionTo('500');
    }
  }).restartable(),
  actions: {
    findCustomer() {
      this.get('store').query('customer', {
        filter: {
          CID: this.get('ticket.CID')
        }
      }).then(customers => {
        this.set('possibleCustomers', customers);

        if (customers.get('length') == 1) {
          const ticket = this.get('ticket');
          ticket.set('customer', customers.get("firstObject"));
        } else {
          const customer = customers.find(customer => customer.get("id") == this.get("ticket.CID"))
          if (customer) {
            this.set("ticket.customer", customer)
          }
        }
      })
    },
    setCID(cid) {
      this.set('ticket.CID', cid);
      this.send('findCustomer');
    }
  }
});
