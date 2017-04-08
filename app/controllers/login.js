import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),
    actions : {
        logIn(){
            const username = this.get('username'),
                  password = this.get('password');

            this.get('session').authenticate('authenticator:custom',username,password).then(reason=>{
                this.get('session').set('username', username);
                this.transitionToRoute('index');
            }).catch(err=>{
                console.log(err);
                this.set('LogInError', err);
            })
        }
    }
});
