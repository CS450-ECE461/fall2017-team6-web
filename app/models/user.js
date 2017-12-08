import DS from 'ember-data';

export default DS.Model.extend({
  first_name: DS.attr(),
  last_name: DS.attr(),
  email: DS.attr(),
  birthday: DS.attr(),
  phoneNumber: DS.attr(),
  gender: DS.attr(),
  cars: DS.hasMany('car'),
});
