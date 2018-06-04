const basicImports = `
import React, { Component } from 'react'
`
const initConstructor = (states = '') => {
    return `
    constructor(props){
        super(props)
        this.state = ${states}
    }
`
}

module.exports = (componentName, opts) =>{
    let initProps = ''
    let imports = basicImports

    if(opts.init_props){
        initConstr = initConstructor()
    }

    if(opts.init_states){
        initConstr = initConstructor(opts.init_states)
    }

    //final Return
    return `
${imports}

class ${componentName} extends Component {
    ${initConstr}

    render() {
        return (
            <div>
                ${componentName}
            </div>
        )
    }
}

export default ${componentName}
    `

}
