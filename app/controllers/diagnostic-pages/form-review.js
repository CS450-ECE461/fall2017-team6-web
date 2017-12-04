import Ember from 'ember';

export default Ember.Controller.extend({
  array: [],
  actions: {
    goBack (){
      this.transitionToRoute('diagnostic-pages.cause-media');
    },
    prevParam() {
      let paramArr = this.get('param');
        this.set('model.carimage', '/assets/images/toyota_rav-4_2010.jpg');
        this.set('model.carmodel', paramArr[2]);
        this.set('model.carid', paramArr[0]);
        this.set('model.driving', paramArr[6]);
        this.set('model.engine', paramArr[5]);
        this.set('model.fuel', paramArr[8]);
        this.set('model.ro', paramArr[7]);
        this.set('model.speed', paramArr[3]);
        this.set('model.rpm', paramArr[4]);
        this.set('model.temp', paramArr[2]);
        this.set('model.when', paramArr[10]);
        this.set('model.problem', paramArr[1]);
        this.set('model.other1', paramArr[9]);
        this.set('model.other2', paramArr[11]);
    },
    nextPage(){
      this.transitionToRoute('diagnostic-pages.form-submitted');
    }
  }
});
