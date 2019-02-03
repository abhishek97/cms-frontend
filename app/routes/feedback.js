import Route from '@ember/routing/route';

export default Route.extend({
  navBar: Ember.inject.service('nav-bar'),
  beforeModel () {
    this.get('navBar').toggle()
  },
  model ({ticketId}) {
    return {ticketId}
  },
  setupController (controller, model) {
    controller.set("ticketId", model.ticketId)
  }
});
