//import Response from 'ember-cli-mirage/response';

const TOKENS = [
  {token_type: 'Bearer', access_token: '1234567890', refresh_token: '0987654321'},
  {token_type: 'Bearer', access_token: 'abcdefghij', refresh_token: 'jihgfedcba'},
  {token_type: 'Bearer', access_token: '!@#$%^&*()'}
];

export default function() {
  this.namespace = '/api';

  this.get('/cars', function () {
    return {
      data: [{
        type: 'cars',
        id: '1',
        attributes: {
          carmake: 'Tesla',
          carmodel: 'Model X',
          carmiles: '117',
          caryear: '2017',
          carimage: '/assets/images/tesla_model-x_2017.jpg'
        }
      }, {
        type: 'cars',
        id: '2',
        attributes: {
          carmake: 'Toyota',
          carmodel: 'Rav 4',
          carmiles: '156997',
          caryear: '2007',
          carimage: '/assets/images/toyota_rav-4_2010.jpg'
        }
      }, {
        type: 'cars',
        id: '3',
        attributes: {
          carmake: 'Toyota',
          carmodel: 'Land Cruiser',
          carmiles: '193576',
          caryear: '1977',
          carimage: '/assets/images/toyota_land-cruiser_1997.jpg'
        }
      }]
    };
  });

  this.get('/forms/1', function () {
  return {
    data: {
      type: 'form',
      id: '1',
      attributes: {
        carmodel: 'Land Cruiser',
        carimage: '/assets/images/toyota_land-cruiser_1997.jpg',
        driving: 'Accelerating',
        engine: 'Cold',
        fuel: 'Unleaded',
        ro: 'Always',
        speed: '58',
        rpm: '0',
        temp: 'Hot (70° or above)',
        when: 'Suddenly',
        problem: 'Hard starting',
        other1: 'Test other notes',
      }
    }
  }
  });
  this.post ('/forms', function (schema, req) {
      //if (body.username === 'username') {
        return {
          data: {
            type: 'form',
            id: '1',
            attributes: {
              carimage: req.carimage,
              carmodel: req.carmodel,
              carid: req.carid,
              driving: req.driving,
              engine: req.engine,
              fuel: req.fuel,
              ro: req.ro,
              speed: req.speed,
              rpm: req.rpm,
              temp: req.temp,
              when: req.when,
              problem: req.problem,
              other1: req.other1,
              other2: req.other2
          }
        }
      }
    //}
  });

  this.urlPrefix = 'http://localhost:5000/gatekeeper';
  this.namespace = '/v1';

  function doAuthenticatedRequest (req, accessToken, f) {
    let authorization = req.requestHeaders['Authorization'];

    if (!authorization) {
      return new Response (403, {'Content-Type': 'application/json'}, {
        errors: {
          status: 403,
          message: 'Missing Authorization HTTP header'
        }
      });
    }

    let parts = authorization.split (' ');

    if (parts.length !== 2) {
      return new Response (403, {'Content-Type': 'application/json'}, {
        errors: {
          status: 403,
          message: 'Invalid HTTP Authorization header'
        }
      });
    }
    else if (parts[0] !== 'Bearer') {
      return new Response (403, {'Content-Type': 'application/json'}, {
        errors: {
          status: 403,
          message: 'Missing Bearer strategy'
        }
      });
    }
    else if (parts[1] !== accessToken) {
      return new Response (403, {'Content-Type': 'application/json'}, {
        errors: {
          status: 403,
          message: 'Invalid access token'
        }
      });
    }
    else {
      return f (req);
    }
  }

  this.post ('/oauth2/token', (schema, req) => {
    let body = JSON.parse (req.requestBody);

    if (body.client_id !== 'dummy') {
      return new Response (400, {'Content-Type': 'application/json'}, {
        errors: {code: 'invalid_client', message: body.client_id }
      });
    }

    if (body.grant_type === 'password') {
      // working with token.0

      if (body.username !== 'username') {
        return new Response (400, {'Content-Type': 'application/json'}, {
          errors: {code: 'invalid_username', message: 'Your username is incorrect.'}
        });
      }
      else if (body.password !== 'password') {
        return new Response (400, {'Content-Type': 'application/json'}, {
          errors: {code: 'invalid_password', message: 'Your password is incorrect.'}
        });
      }
      else {
        return TOKENS[0];
      }
    }
    else if (body.grant_type === 'refresh_token') {
      // working with token.1

      if (body.refresh_token !== TOKENS[0].refresh_token) {
        return new Response (400, {'Content-Type': 'application/json'}, {
          errors: {status: 400, message: 'Missing/invalid refresh token'}
        });
      }
      else {
        return TOKENS[1];
      }
    }
    else if (body.grant_type === 'client_credentials') {
      if (body.client_secret !== 'ssshhh') {
        return new Response (400, {'Content-Type': 'application/json'}, {
          errors: {status: 400, message: 'Missing/invalid client secret'}
        });
      }
      else {
        return TOKENS[2];
      }
    }
    else {
      return new Response (400, {'Content-Type': 'application/json'}, {
        errors: {status: 400, message: `Unsupported grant type: ${body.grant_type}`}
      });
    }
  });

  this.post ('/oauth2/logout', function (schema, req) {
    return doAuthenticatedRequest (req, TOKENS[0].access_token, () => {
      return new Response (200, {'Content-Type': 'application/json'}, true);
    });
  });

  this.post ('/accounts', function (schema, req) {
    return doAuthenticatedRequest (req, TOKENS[2].access_token, () => {
      let body = JSON.parse (req.requestBody);

      if (body.account.username === 'username' &&
          body.account.password === 'password' &&
          body.account.email === 'email')
      {
        return {
          account: {
            _id: 1,
            username: 'username',
            password: 'password',
            email: 'email'
          }
        }
      }

      else {
        return {
          account: {
            _id: 2,
            username: 'username',
            password: 'password',
            email: 'email'
          }
        }
      }

    });
  });

  this.get ('/accounts/me', function (schema, req) {
    return doAuthenticatedRequest (req, TOKENS[0].access_token, () => {
      return {
        account: {
          _id: 1,
          email: 'tester@no-reply.com',
          username: 'tester'
        }
      }
    });
  });

  this.get ('/dummies', function () {
    return new Response (403, {'Content-Type': 'application/json'}, {
      errors: {status: 403, message: `Your token is invalid.`}
    });
   });
}
