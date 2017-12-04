import Ember from 'ember';

export default Ember.Controller.extend({
  array: [],
  form: null,
  actions: {
    nextPage() {
        let paramArr = this.get('param');
          let carimage = paramArr[2];
          let carmodel = paramArr[1];
          let carid = paramArr[0];
          let driving = paramArr[8];
          let engine = paramArr[7];
          let fuel = paramArr[10];
          let ro = paramArr[9];
          let speed = paramArr[5];
          let rpm = paramArr[6];
          let temp = paramArr[4];
          let when = paramArr[12];
          let problem = paramArr[3];
          let other1 = paramArr[11];
          let other2 = paramArr[13];
        let form = this.get ('store').createRecord ('form',
         {carimage, carmodel, carid,
         driving, engine, fuel,
         ro, speed, rpm, temp,
         when, problem, other1,
         other2});

        form.save ().then (form => {
          this.set('form', form);
          this.transitionToRoute('diagnostic-pages.form-review');
        }).catch (reason => {
          alert(reason);
        });
    },
    goBack (){
      this.transitionToRoute('diagnostic-pages.cause-when');
    },
    createAccount (){
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
        paramArr[11]]);
      let param = this.array;
      this.transitionToRoute('diagnostic-pages.form-review').then(function(newRoute){
        newRoute.controller.set('param',param);
      });
    }
  }
});
