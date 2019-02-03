import Controller from '@ember/controller';
import {
  isUnauthorizedError,
  isNotFoundError,
  isBadRequestError
} from 'ember-ajax/errors';

export default Controller.extend({
  rating: -1,
  text: null,
  feedbackSubmitted: false,
  queryParams: ['secret'],
  secret: '',
  api: Ember.inject.service(),
  actions: {
    submit () {
      const secret = this.get('secret')
      return this.get('api').request(`/feedbacks?secret=${secret}`, {
        method: 'POST',
        data: {
          ticketId: this.get('ticketId'),
          body: this.get('text'),
          rating: this.get('rating')
        }
      }).catch(err => {
        console.log(err)
        if (isUnauthorizedError(err)) {
          alert('Missing auth for submiting feedback!')
        } else if (isNotFoundError(err)) {
          alert('The ticket no longer exists!')
        } else if (isBadRequestError(err)) {
          alert('Token Mismatch!. Cannot submit feedback.')
        } else if (err == 'OK') {
          this.set("feedbackSubmitted", true)
        }
      })
    }
  }
});
