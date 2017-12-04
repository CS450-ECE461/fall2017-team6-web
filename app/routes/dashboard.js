//import Ember from 'ember';
import Gatekeeper from 'ember-cli-gatekeeper';

export default Gatekeeper.User.AuthenticatedRoute.extend({
//export default Ember.Route.extend({
  model () {
    let currentUser = this.get ('currentUser');
    return this.get('store').findRecord('user', currentUser.id);
  }
});
