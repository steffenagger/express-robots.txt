### express-robots.txt

Express middleware to handle different robots.txt responses on different domains.
The goal with this middleware, is to avoid search engine indexing of public dev/test/demo/staging-servers etc.


#### Install

Install with npm:

```
npm install express-robots.txt --save
```


#### Setup

A minimum of an array of domain names must be supplied.
Optional the response text for allowed domains and disallowed domains can be passed.

```
robotsTxt(allowedDomains[, allowedText] [, disallowedText]);
```

Simplest usage:

```
var robotsTxt        = require('express-robots.txt');
var robotsTxtHandler = robotsTxt(['domain.com', 'www.domain.com']);

app.use(robotsTxtHandler);
```



#### Defaults

*allowedText* defaults to:

```
User-agent: *
Disallow:
```

*disallowedText* defaults to:

```
User-agent: *
Disallow: /
```
