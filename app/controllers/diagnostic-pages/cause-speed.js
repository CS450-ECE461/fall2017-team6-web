import Ember from 'ember';

export default Ember.Controller.extend({
  speed: 50,
  rpm: 0,
  array: [],
  actions: {
    problemSelected() {
      alert(this.get('speed'));
      alert(this.get('rpm'));
    },
    selectSpeed(choice) {
      this.set('speed', choice);
    },
    selectRpm(choice) {
      this.set('rpm', choice);
    },
    goBack (){
      this.transitionToRoute('diagnostic-pages.cause-temperature');
    },
    nextPage(){
      let paramArr = this.get('param');
      this.set('array', [paramArr[0],
        paramArr[1],
        paramArr[2],
        paramArr[3],
        paramArr[4],
        this.get('speed'),
        this.get('rpm')]);
      let param = this.array;
      this.transitionToRoute('diagnostic-pages.cause-engine').then(function(newRoute){
        newRoute.controller.set('param',param);
      });
    }
  }
});
