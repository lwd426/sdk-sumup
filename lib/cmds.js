var path = require('path')
var set = require("./utils/set");
var upload = require("./upload");
var YAML = require('yamljs');

module.exports = {
	cmds: ['upload', 'name', 'src', 'branch', 'config'],
	exec: function(cmd, param){
		switch(cmd){
			case "upload": upload(); break;
			case "name": set('sdk_name', param);break;
			case "src": set('src_dir', param);break;
			case "branch": set('branch_name', param);break;
			case "config":console.log(YAML.load(path.join(__dirname, 'config.yml')));break;
		}
	}
}