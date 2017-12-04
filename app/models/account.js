import DS from 'ember-data';

export default DS.Model.extend({
  _id: DS.attr(),
  username: DS.attr(),
  password: DS.attr(),
  email:  DS.attr()
/*
  carmake: DS.attr(),
  carmodel: DS.attr(),
  carmiles: DS.attr(),
  caryear: DS.attr(),
  carimage: DS.attr(),
  */
});
