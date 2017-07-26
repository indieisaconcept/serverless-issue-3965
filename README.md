# serverless-issue-3965

This project illustrates the issue reported in [#3965](https://github.com/serverless/serverless/issues/3965).

## Context

In-order to share dynamic configuration between `serverless.yml` & code within this project `./config.js` exports a `_get` method which when called returns the configuration as declared within `./config.js`.

Code can require configuration as normal eg `const config = require('./config')` and `serverless.yml` can access configuration via `${file(./config.js):_get.some.property}`.

## Cause

A refactor of .js file processing in `1.18.0` caused the execution context of the exported function to be lost as it was assigned to a variable. Prior to `1.18.0`, this function was required and executed immediately and so the execution context was preserved.

## Test

Install this package and execute the commands below. A travis matrix build has also been setup to illustrate the issue.

- https://travis-ci.org/indieisaconcept/serverless-issue-3965/

### Current

```
> npm run serverless -- package

Serverless Error ---------------------------------------

Invalid variable syntax when referencing file "./config.js". Check if your javascript is returning the correct data.
```
> Packaging fails

### Expected

```
> npm i autopilothq/serverless#preserve-context-when-executing-exported-function-from-.js-file
> npm run serverless -- package

Serverless: Packaging service...
```
> Service packaged as normal
