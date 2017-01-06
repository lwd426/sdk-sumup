#!/usr/bin/env node
var path = require('path')
require(path.join(__dirname,"utils/set"))('sdk_name', require(path.join(__dirname, "utils/args"))());


