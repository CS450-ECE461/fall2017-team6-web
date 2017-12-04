import Ember from 'ember';

export default Ember.Controller.extend({
  selected: null,
  optional: null,
  array: [],
  actions: {
    problemSelected() {
      alert(this.get('selected'));
    },
    selectWhen(choice) {
      this.set('selected', choice);
    },
    goBack (){
      this.transitionToRoute('diagnostic-pages.cause-fuel');
    },
    nextPage(){
      if (this.get('selected') !== null){
      this.set('optional', this.get('option'));
      let paramArr = this.get('param');
      this.set('array', [paramArr[0],
        paramArr[1],
        paramArr[2],
        paramArr[3],
        paramArr[4],
        paramArr[5],
        paramArr[6],
        paramArr[7],
        paramArr[8],
        paramArr[9],
        paramArr[10],
        paramArr[11],
        this.get('selected'),
        this.get('optional')]);
      let param = this.array;
      this.transitionToRoute('diagnostic-pages.cause-media').then(function(newRoute){
        newRoute.controller.set('param',param);
      });
    }
    }
  }
});
