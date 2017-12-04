import Ember from 'ember';

export default Ember.Controller.extend({
  array: [],
  actions: {
    goBack (){
      this.transitionToRoute('signup');
    },
    nextPage(param){
      alert(param);
      alert(this.get('password'));
      /*
      if (this.get('selected') !== null){
        this.set('array', [this.get('selected'),
        this.get('selected2'),
        this.get('selected3')]);
        let param = this.array;
        this.transitionToRoute('diagnostic-pages.problems-list').then(function(newRoute){
          newRoute.controller.set('param',param);
        });
      }
      */
    },
  }
});
