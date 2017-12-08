import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    let currentUser = {
      id: '1',
      username: 'Test1',
      password: 'Pass1',
      firstname: 'Poe',
      lastname: 'Dameron',
      email: 'poe.dameron@gmail.com',
      gender: 'male',
      age: '32',
      phonenumber: '888-777-7777',
      forms: [{

      }]
    };
  }
});
