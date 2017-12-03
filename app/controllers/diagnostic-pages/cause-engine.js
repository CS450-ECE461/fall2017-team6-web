import Ember from 'ember';

export default Ember.Controller.extend({
  selected: null,
  array: [],
  actions: {
    problemSelected() {
      alert(this.get('selected'));
    },
    selectEngine(choice) {
      this.set('selected', choice);
    },
    nextPage(){
      if (this.get('selected') !== null){
      let paramArr = this.get('param');
      this.set('array', [paramArr[0],
        paramArr[1],
        paramArr[2],
        paramArr[3],
        paramArr[4],
        this.get('selected')]);
      let param = this.array;
      this.transitionToRoute('diagnostic-pages.cause-driving').then(function(newRoute){
        newRoute.controller.set('param',param);
      });
    }
    }
  }
});
