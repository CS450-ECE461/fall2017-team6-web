import DS from 'ember-data';

export default DS.Model.extend({
  //username: DS.attr(),
  //password: DS.attr(),
  firstname: DS.attr(),
  lastname: DS.attr(),
  email: DS.attr(),
  gender: DS.attr(),
  age: DS.attr(),
  phonenumber: DS.attr(),
  cars: DS.hasMany('car'),
  //forms: DS.hasMany('form')
});
