import Ember from 'ember';

export default Ember.Controller.extend({
  selected: null,
  selected2: null,
  selected3: null,
  array: [],
  actions: {
    selectCar(choice) {

      var res = choice.split("+");
      this.set('selected', res[0]);
      this.set('selected2', res[1]);
      this.set('selected3', res[2]);
    },
    goBack (){
      this.transitionToRoute('dashboard');
    },
    nextPage(){
      if (this.get('selected') !== null){
        this.set('array', [this.get('selected'),
        this.get('selected2'),
        this.get('selected3')]);
        let param = this.array;
        this.transitionToRoute('diagnostic-pages.problems-list').then(function(newRoute){
          newRoute.controller.set('param',param);
        });
      }
    },
    createForm () {
      alert(this.get('selected'));
      alert(this.get('selected2'));
      alert(this.get('selected3'));
    }
  }
});
