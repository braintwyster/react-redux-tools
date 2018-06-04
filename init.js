'use strict'
const fs = require('fs')
const path = require('path');
const copydir = require('copy-dir')
const root = path.resolve(__dirname);

const updateProjectVariables = (file, variable, replace) => {

    fs.readFile(file, 'utf8', (err, data) => {
        if(err){
            return console.log(err)
        }
        let result = data.replace(variable, replace)

        fs.writeFile(file, result, 'utf8', err => {
            if(err){
                return console.log(err);
            }
        })
    })

}

const toTitleCase = (str) => {
    return str.replace(/\w\S*/g, txt => {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

const copyProjectFiles = (project, rf) => {
    rf ? copydir.sync(`${root}/lib/boilerPlates/standard-reduxform`, `${project}`) : copydir.sync(`${root}/lib/boilerPlates/standard`, `${project}`);
    updateProjectVariables(`${project}/package.json`, '[project]', project.toLowerCase())
    updateProjectVariables(`${project}/public/index.html`, '[project]', toTitleCase(project.replace(/-/g, ' ')))
    rf ? console.log('React w/ Redux && Redux Form Project Created!') : console.log('React w/ Redux Project Created!');
}

const makeNew = project => {
    fs.mkdirSync(project)
}


module.exports = (project, options) => {
    !fs.existsSync(project)? makeNew(project) : console.log('A Project or Folder with that name already exists');
    copyProjectFiles(project, options.ReduxForm)
}
