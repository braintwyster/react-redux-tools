#!/usr/bin/env node
'use strict'
const program = require('commander')
const chalk = require('chalk')
const touch = require('touch')
const fs = require('fs')

const init = require('./init')
const component = require('./component')

program
    .version('0.1.2', '-v, --version')
    .description('A command line tool for helping create react w/ redux files and boiler plates.')

program
    .command('init <projectName>')
    .description('Initialize a React Build w/ [options]')
    .alias('i')
    .option('-f, --ReduxForm', 'Init with Redux-Form in Project')
    // .option('-m, --mongoose', 'Init with MongoDB and Mongoose in Project')
    // .option('-s, --server', 'Init with Express Server Init Setup in Project')
    .action(init)

program
    .command('newComponent <fileName>')
    .alias('nc')
    .option('-p, --init_props ', 'With Props')
    .option('-s, --init_states <states>', 'Set initial state values [Object]')
    .action(component)



program.parse(process.argv);
