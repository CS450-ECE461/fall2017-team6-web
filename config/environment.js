/* eslint-env node */
'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'car',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
        'ds-improved-ajax': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    'ember-cli-google': {
      recaptcha: {
        siteKey: '6LfjfDsUAAAAAPO3PEm76Uf3dJE0sM5vZ49CCmHh'
      }
    },

    gatekeeper: {
      baseUrl: 'http://localhost:5000/gatekeeper',
      tokenOptions: {
        client_id: '5a0af85d2c4dc224bc336cd8',
        client_secret: 'VJ-Fk66vI3Y4MhF9axJTK4VmNJKOU7VRCuphLuAd3MfShwzy4vEIBTsbCPxqq8JeKWHoNWIE9zG54w-UDMDkf3A0KsH4i-W8givlOAWnKS57XuBXOZ9HIiyjM_3puAeN_uXcPLgx0x0M1USXuRa0qXQTirw3EJU_0hdy8QBNXlw'
      },
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }
  ENV['ember-cli-mirage'] = { enabled: false };
  ENV['ember-cli-google-recaptcha'] = ENV['ember-cli-google'] = { enabled: false };

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    // do nothing
  }

  return ENV;
};
