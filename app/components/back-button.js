import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    goBack() {
      this.sendAction('goBack');
    }
  }
});
