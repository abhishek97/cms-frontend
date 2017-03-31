import DS from 'ember-data';
import ENV from 'cms-frontend/config/environment';

export default DS.JSONAPIAdapter.extend({
    namespace : '',
    host : ENV.host
});
