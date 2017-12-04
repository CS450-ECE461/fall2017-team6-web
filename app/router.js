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
  this.route('diagnostic-pages', function() {
    this.route('car-select');
    this.route('problems-list');
    this.route('cause-temperature');
    this.route('cause-speed');
    this.route('cause-engine');
    this.route('cause-driving');
    this.route('cause-ro');
    this.route('cause-fuel');
    this.route('cause-when');
    this.route('cause-media');
    this.route('form-review');
    this.route('form-submitted');
    this.route('begin-page');
  });
  this.route('mechanic');
  this.route('sign-in');
  this.route('sign-up');
  this.route('chat');
});

export default Router;
