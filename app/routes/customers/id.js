import Route from '@ember/routing/route';

export default Route.extend({
  model ({ cid }) {
    return this.store.findRecord('customer', cid)
  },
  setupController (controller, model) {
    controller.set("customer", model)
  }
});
