import DS from 'ember-data';

export default DS.Model.extend({
  _id: DS.attr(),
  model: DS.attr(),
  make: DS.attr(),
  miles: DS.attr(),
  user: DS.belongsTo('user')
});
