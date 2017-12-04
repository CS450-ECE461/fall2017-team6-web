import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    goBack() {
      alert('Test');
      this.transitionToRoute('dashboard');
    }
  }
});
