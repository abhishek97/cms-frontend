import Ember from 'ember';

export default Ember.Component.extend({
    session : Ember.inject.service('session'),
    navBar: Ember.inject.service('nav-bar'),
    isVisible: Ember.computed.alias('navBar.show'),
    actions : {
        logOut(){
            this.get('session').invalidate();
        }
    }
});
