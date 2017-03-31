import DS from 'ember-data';

export default DS.Model.extend({
    CID : DS.attr(),
    time : DS.attr(),
    status : DS.attr('number', { defaultValue: 0 }),
    body : DS.attr(),
    customer : DS.belongsTo('customer')
});
