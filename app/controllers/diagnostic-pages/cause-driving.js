import Ember from 'ember';

export default Ember.Controller.extend({
  selected: null,
  array: [],
  actions: {
    problemSelected() {
      alert(this.get('selected'));
    },
    selectDrive(choice) {
      this.set('selected', choice);
    },
    nextPage(){
      let paramArr = this.get('param');
      this.set('array', [paramArr[0],
        paramArr[1],
        paramArr[2],
        paramArr[3],
        paramArr[4],
        paramArr[5],
        this.get('selected')]);
      let param = this.array;
      this.transitionToRoute('diagnostic-pages.cause-ro').then(function(newRoute){
        newRoute.controller.set('param',param);
      });
    }
  }
});
