YAML = require('yamljs');
var path = require("path");
var yamlObj = YAML.load(path.join(__dirname, '../config.yml'));
var fse = require('fs-extra');

module.exports = function(paramName, value){
//Use YAML to set sdk name
	yamlObj[paramName] = value;
//Serialize yaml object
	yamlObj = YAML.stringify(yamlObj, 4);
//Output yaml string to config.xml
	var result = fse.outputFileSync( path.join(__dirname, '../config.yml'),yamlObj);
	if(result) return console.log("Error: " + result);
	console.log("You have setted "+paramName+ " successfully!");
}