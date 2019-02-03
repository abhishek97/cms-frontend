import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';
import ENV from 'cms-frontend/config/environment';

export default AjaxService.extend({
  host: ENV.host
});