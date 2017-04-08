import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';


export default Ember.Route.extend({
   session: Ember.inject.service('session'),
   beforeModel(){
       if(! this.get('session.isAuthenticated') )
            this.transitionTo('login');
   }
});
