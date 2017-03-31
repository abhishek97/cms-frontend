import DS from 'ember-data';

export default DS.Model.extend({
    CID: DS.attr(),
    Name: DS.attr(),
    Address : DS.attr(),
    Mobile : DS.attr(),
    Email : DS.attr(),
    expiry : DS.attr(),
    tickets : DS.hasMany('ticket')
});
