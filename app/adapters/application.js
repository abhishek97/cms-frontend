import DS from 'ember-data';
import ENV from 'cms-frontend/config/environment';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';


export default DS.JSONAPIAdapter.extend(DataAdapterMixin,{
    namespace : '',
    host : ENV.host,
    authorizer: 'authorizer:custom'
});
