'use strict';
const config = require('./protractor.shared.conf').config;

config.capabilities = {
    browserName: 'chrome',
    chromeOptions: {
        args: ['disable-infobars']
    },
    shardTestFiles: true,
    maxInstances: 5,
    deviceProperties: {
        browser: {
            name: 'chrome',
            version: 'latest'
        },
        device: 'local development machine',
        platform: {
            name: 'windows 10',
            version: ''
        }
    }
};

exports.config = config;
