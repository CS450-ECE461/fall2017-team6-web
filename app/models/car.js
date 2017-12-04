import DS from 'ember-data';

export default DS.Model.extend({
  model: DS.attr(),
  make: DS.attr(),
  miles: DS.attr(),
  user: DS.belongsTo('user')
});
