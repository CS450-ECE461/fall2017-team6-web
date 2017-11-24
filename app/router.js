import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('signup');
  this.route('register');
  this.route('personal-info');
  this.route('vehicle-info');
  this.route('login');
  this.route('dashboard');
  this.route('sign-in');
});

export default Router;
