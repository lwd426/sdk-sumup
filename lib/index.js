#!/usr/bin/env node
var program = require('commander');
var pkg = require('../package.json');
var cmds = require("./cmds");
//var colors = require('colors');


var entrance = function (cmd, param){

}

program
  .version(pkg.version)
  .usage('[options] <param ...>')
  .arguments('<cmd> [param]')
  .option('-name [set sdk name], --string <n>', 'set it with your sdk name which you can name by yourself')
  .option('-branch [set branch name], --string <n>', 'set it with the branch name which you can name by yourself')
  .option('-src [set your dist src], --string<n>', 'set it with the path of your sdk file/files which has been packaged')
  .option('-config [show you config]<n>', 'output your config.yml infomation')
  .option('-upload [upload your sdk]<n>', "upload your sdk file to lem_sdk")
  .action(function(cmd, param){
    //console.log(cmd)
    //console.log(param)
    cmdValue = cmd;
    envValue = param;
    cmds(cmdValue, envValue);
  })
  .parse(process.argv);

//if (typeof cmdValue === 'undefined') {
//  console.error('no command given!');
//  process.exit(1);
//}
//console.log('command:', cmdValue);
//console.log('environment:', envValue || "no environment given");

//if (!process.argv.slice(3).length) {
//  program.outputHelp(make_red);
//}
//
//function make_red(txt) {
//  return colors.red(txt); //display the help text in red on the console
//}