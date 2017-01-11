#!/usr/bin/env node
var program = require('commander');
var pkg = require('../package.json');
var cmds = require("./cmds");
var colors = require('colors');

//set help information and action with program
program
  .version(pkg.version)
  .usage('[options] <param ...>')
  .arguments('<cmd> [param]')
  .option('-name [set sdk name], --string <sdkname>'.green, 'set it with your sdk name which you can name by yourself')
  .option('-branch [set branch name], --string <branchname>'.green, 'set it with the branch name which you can name by yourself')
  .option('-src [set your dist src], --string <path>'.green, 'set it with the path of your sdk file/files which has been packaged')
  .option('-config [show you config]'.green, 'output your config.yml infomation')
  .option('-upload [upload your sdk]'.green, "upload your sdk file to lem_sdk")
  .action(function(cmd, param){
    cmdValue = cmd;
    envValue = param;
    //excute the command
    if(cmds.cmds.indexOf(cmdValue) > -1){
      cmds.exec(cmdValue, envValue);
      return true;
    }
    //show help information when the command is wrong
    console.log(('no this command: ' + cmdValue).red);
    program.outputHelp(function (txt) {
      return colors.white(txt); //display the help text in red on the console
    });

  });

program.on('--help', function(){
  console.log('  Examples:');
  console.log('');
  console.log('    $ sdksum name danmu');
  console.log('    $ sdksum branch danmu');
  console.log('    $ sdksum src dist/');
  console.log('    $ sdksum config ');
  console.log('    $ sdksum upload');
  console.log('');
});

program.parse(process.argv);

/**
 * show help information when there is no param
 */
if (!process.argv.slice(2).length) {
  program.outputHelp(function (txt) {
    return colors.white(txt); //display the help text in red on the console
  });
}
