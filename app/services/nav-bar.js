import Service from '@ember/service';

export default Service.extend({
  show: true,
  toggle () {
    this.toggleProperty('show')
  }
});
