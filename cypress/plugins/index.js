const { on } = require('events')
const { config } = require('process')

const cucumber = require('@badeball/cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {
on('file:preprocessor', cucumber ())
} 