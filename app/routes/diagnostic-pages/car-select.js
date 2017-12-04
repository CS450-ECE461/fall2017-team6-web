//import Ember from 'ember';
import Gatekeeper from 'ember-cli-gatekeeper';

export default Gatekeeper.User.AuthenticatedRoute.extend({
//export default Ember.Route.extend({
  model() {
    return this.modelFor('diagnostic-pages');
    //return this.get('store').findAll('car');
  }
});
