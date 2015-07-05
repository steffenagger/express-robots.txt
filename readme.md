## express-robots.txt

Express middleware to handle different robots.txt responses on different domains.
The goal with this middleware, is to avoid search engine indexing of public dev/test/demo/staging-servers etc.


### Install

Install with npm: `npm install express-robots.txt --save`


### Setup

`robotsTxt(allowedDomains[, allowedText] [, disallowedText]);`


### Defaults

allowedText defaults to:

```
User-agent: *
Disallow:
```

disallowedText defaults to:

```
User-agent: *
Disallow: /
```

### Usage:

```
var robotsTxt        = require('enxpress-robots.txt');
var robotsTxtHandler = robotsTxt(['domain.com', 'www.domain.com']);

app.use(robotsTxtHandler);
```
