'use strict';

const env = process.env.STAGE || process.env.NODE_ENV || 'dev';

module.exports = {
    stream : {
        name : `my-stream-${env}`
    }
};

// allow serverless.yml to access config
module.exports._get = function () { return this; };
