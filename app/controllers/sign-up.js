import Ember from 'ember';

export default Ember.Controller.extend({
  account: null,
  array: [],
  actions: {
    createAccount () {

        //let {username, password, email} = this.getProperties (['username', 'password', 'email']);
        //let username = this.get('username');
        //let password = this.get('password');
        //let email = this.get('email')
        this.set('array', [this.get('username'),
          this.get('password'),
          this.get('email')]);
          let username = this.array[0];
          let password = this.array[1];
          let email = this.array[2];
        let account = this.get ('store').createRecord ('dummy',
         {username, password, email});

        account.save ().then (account => {
          //account.save ().then (() => {
          //alert(account.get('username'));
          this.set('account', account);
          this.transitionToRoute('login');
        }).catch (reason => {
          alert(reason);
        });

        //alert(account.get('username'));
    }
  }
});
