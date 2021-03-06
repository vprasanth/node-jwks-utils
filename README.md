[![Build Status](https://travis-ci.org/OADA/node-jwks-utils.svg?branch=master)](https://travis-ci.org/OADA/node-jwks-utils)
[![Coverage Status](https://coveralls.io/repos/OADA/node-jwks-utils/badge.svg?branch=master)](https://coveralls.io/r/OADA/node-jwks-utils?branch=master)
[![Dependency Status](https://david-dm.org/oada/node-jwks-utils.svg)](https://david-dm.org/oada/node-jwks-utils)
[![License](http://img.shields.io/:license-Apache%202.0-green.svg)](http://www.apache.org/licenses/LICENSE-2.0.html)

node-jwks-utils
===============

A set of useful tools when working with [JSON Web Key (JWK)][JWK] and [JSON Web
Key Set (JWKs)][JWKs].

Install
-------
```shell
$ npm install jwks-utils
```

Example
-------
```javascript
var jwksUtils = require('jwks-utils');

var jwk = { kid: '1234', kty: 'RSA', n: '12345...XYZ=', e: 'AQAB' };
var jwks = { keys: [ jwk ] }

// Detect a JWK object
if(jwksUtils.isJWK(jwk)) {
    // Do stuff with the JWk
}

// Detect a JWKs object
if(jwksUtils.isJWKset(jwks)) {
    // Do stuff with the JWKs
}

// Find a particilar JWK within a JWKs
var jwk1 = jwkUtils.findJWK('1234', jwks);

// Find the JWK corsponding to a particular JWS (or JWT)
var signature = getJWSFromSomwhere();
jwkUtils.jwkForSignature(signature, false, {timeout: 100}, function(err, jwk2) {
    if (!err) {
        // jwk2 is the corresponding JWK
    }
};

```

References
----------
1. [JSON Web Key (JWK) Draft 40](https://tools.ietf.org/html/draft-ietf-jose-json-web-key-40)

[JWK]: https://tools.ietf.org/html/draft-ietf-jose-json-web-key-40#section-4 "JSON Web Key"
[JWKs]: https://tools.ietf.org/html/draft-ietf-jose-json-web-key-40#section-5 "JSON Web Key Set"
