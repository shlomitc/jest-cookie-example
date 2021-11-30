const {defaults} = require('jest-config');
module.exports = {
  ...defaults,
  testEnvironment: 'jest-environment-jsdom'
};