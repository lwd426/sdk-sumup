var path = require('path')
var set = require("./utils/set");
var args = require("./utils/args")();
var upload = require("./upload");
var YAML = require('yamljs');
//var command = args[2];
//var param = args[3] || '';

module.exports = function(cmd, param){
	switch(cmd){
		case "upload": upload(); break;
		case "name": set('sdk_name', param);break;
		case "src": set('src_dir', param);break;
		case "branch": set('branch_name', param);break;
		case "config":console.log(YAML.load(path.join(__dirname, 'config.yml')));break;
	}

}

//}
//
//
//modules.exports = {
//  upload: {
//    description: 'start the switch-hosts service',
//    exec: function(){exec(command);}
//  },
//  name: {
//    description: 'start the switch-hosts service',
//    exec: function(){exec(command);}
//  },
//  branch: {
//    description: 'start the switch-hosts service',
//    exec: function(){exec(command);}
//  },
//  src: {
//    description: 'start the switch-hosts service',
//    exec: function(){exec(command);}
//  },
//  config: {
//    description: 'start the switch-hosts service',
//    exec: function(){exec(command);}
//  }
//}
//
//program.version(pkg.version);
//program.usage('sdksum');
//
//var key;
//
//for (key in fds.commanders) {
//  var commander = fds.commanders[key];
//  program.command(key).description(commander['description']).action(commander['exec']);
//}
//
//program.parse(process.argv);
//
//if (!program.args.length){
//  program.help();
//}