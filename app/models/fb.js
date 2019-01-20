import DS from 'ember-data';

export default DS.Model.extend({
    name : DS.attr(),
    pass : DS.attr(),
    ticket : DS.hasMany('ticket', {
        inverse: 'fb'
    })
});
