import Gatekeeper from 'ember-cli-gatekeeper';
import Ember from 'ember';

export default Gatekeeper.User.RESTAdapter.extend({
  mergedProperties: ['headers'],

  host: 'http://localhost:5000',
  namespace: 'v1',

  headers: Ember.computed('gatekeeper.accessToken', function() {
    let accessToken = this.get('gatekeeper.accessToken.access_token');
    return { Authorization: `Bearer ${accessToken}` };
  })
});
