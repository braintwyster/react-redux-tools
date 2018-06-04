'use strict'
const fs = require('fs')
const path = require('path');
const copydir = require('copy-dir')
const root = path.resolve(__dirname);

const componentTemplate = require('./lib/templates/component')


////
const CreateComponent = (componentName, options) => {
    let state = JSON.parse(options.init_states)

    if(state && typeof state != 'object'){
        console.log(typeof state);
        return console.log(`Initialized states must be a JOSN[Object] Value. Exp: '{"name":"Bob"}'`);
    }
    console.log(componentTemplate(componentName, options));
}

module.exports = CreateComponent
