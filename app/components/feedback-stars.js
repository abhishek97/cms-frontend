import Component from '@ember/component';

export default Component.extend({
  totalStars: Ember.computed('total', function () {
    return (new Array(this.get('total'))).fill(0)
  }),
  total: 5,
  marked: -1,
  text: Ember.computed('marked', function () {
    const marked = this.get('marked')
    if (marked < 0) return ;

    switch (marked) {
      case 0:  return 'Terrible!'
      case 1: return 'Bad!'
      case 2: return 'Okay!'
      case 3: return 'Statisfactory!'
      case 4: return 'Excellent!'
      default: return ;
    }
  })
});
