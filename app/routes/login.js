import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.controllerFor('sign-up').get('account');
  }
});
