import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api/v1/chat/getMessage?sessionId=SESSION_ID_HERE&message=USER_INPUT_HERE'
});
