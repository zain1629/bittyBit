// requires
const _ = require('lodash');

// module variables

// development config
const config = require('./config.json');
const defaultConfig = config.dev;
const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];
const finalConfig = _.merge(defaultConfig, environmentConfig);
// as a best practice
// all global variables should be referenced via global. syntax
// and their names should always begin with g
global.gDevConfig = finalConfig;

// test config
const testConfig    =  config.qa;
const testEnvironment = process.env.NODE_ENV || 'testing';
const testEnvironmentConfig = config[testEnvironment];
const finalTestConfig = _.merge(testConfig,testEnvironmentConfig);
global.gTestConfig = finalTestConfig;
