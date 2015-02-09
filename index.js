'use strict';
var fs   = require('fs');
var path = require('path');

// path from the root directory from project
var root = __dirname.split('/node_modules/').shift();

var isNotEmptyString = function(v) {
    return Object.prototype.toString.call(v) === '[object String]' && v !== '';
};

process.env = process.env || {};

// ## NODE_ENV ##
if (!isNotEmptyString(process.env.NODE_ENV)) {
    if (fs.existsSync(path.join(root, '.production'))) {
        process.env.NODE_ENV = 'production';
    } else {
        process.env.NODE_ENV = 'development';
    }
}

// ## NODE_CONFIG_DIR ##
// default path for 'config' module
if (!isNotEmptyString(process.env.NODE_CONFIG_DIR)) {
    process.env.NODE_CONFIG_DIR = path.join(root, 'config');
}
