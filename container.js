const dependaple = require('dependable');

const path = require('path');

const container = dependaple.container();


// dependencies 
const simpleDepencies = [
    ['_', 'lodash']
];


// register dependinces

simpleDepencies.forEach(function (depency) {
    container.register(depency[0], function () {
        return require(depency[1]);
    })
});

/**  load all depencies in all controllers */

container.load(path.join(__dirname, '/controllers'));

/**  load all depencies in all helpers */

container.load(path.join(__dirname, '/helpers'));

container.register('container', function () {
    return container;
});

/** exporting */

module.exports = container;