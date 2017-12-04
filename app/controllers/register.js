import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    goBack (){
      this.transitionToRoute('signup');
    },
  }
});
