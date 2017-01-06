#!/usr/bin/env node
var path = require("path");
YAML = require('yamljs').load(path.join(__dirname, 'config.yml'));
console.log(YAML);