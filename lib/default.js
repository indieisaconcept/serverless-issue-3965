'use strict';

const config = require('../config');

/**
 * @ngdoc function
 * @param {object}      event     Incoming request event
 * @param {object}      context   Execution context
 * @param {function}    cb        Callback
 *
 */

module.exports.handler = (event, context, cb) => {

    // do something with kinesis etc

    console.log(`adding records to ${config.streamName}`);

    cb(null, {
        statusCode : 200,
        body       : JSON.stringify({ event, context })
    });
};
