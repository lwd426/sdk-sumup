var path = require('path')
var set = require("./utils/set");
var args = require("./utils/args")();
//var command = args[2];
//var param = args[3] || '';

module.exports = {
	"upload": {
		desc: "upload your sdk file to lem_sdk",
		todo: function () {
			require("./upload")();
		}
	},
	"name": {
		desc: "set it with your sdk name which you can name by yourself",
		todo: function (name) {
			set('sdk_name', name);
		}
	},
	"src": {
		desc: "set it with the path of your sdk file/files which has been packaged",
		todo: function (src) {
			set('src_dir', src);
		}
	},
	"branch": {
		desc: "set it with the branch name which you can name by yourself",
		todo: function (branchname) {
			set('branch_name', branchname);
		}
	},
	"config": {
		desc: "output your config.yml infomation",
		todo: function () {
			YAML = require('yamljs').load(path.join(__dirname, 'config.yml'));
			console.log(YAML);
		}
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