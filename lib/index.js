#!/usr/bin/env node
var path = require('path')
console.log(path.join(__dirname, 'config.yml'));
YAML = require('yamljs').load(path.join(__dirname, 'config.yml'));
var fs = require('fs')
var fse = require('fs-extra');
var exec = require('child_process').exec;
var sdk = path.join(__dirname, YAML.lem_sdk_dir);
var sdkName = YAML.sdk_name;
var srcDir = path.resolve(YAML.src_dir);
var destDir = path.join(sdk,  YAML.sdk_name);
var branchName = YAML.branch_name;
var gitclone = YAML.git + " '" + sdk + "'";
var dosth, dosth2;

if (fs.existsSync(sdk)) {//如果已经下载,就更新
  dosth = "cd " + sdk + " && git pull && git checkout master";
} else {//clone
  dosth = gitclone;
}
console.log("执行命令:" + dosth);

var child = exec(dosth, function (err, stdout, stderr) {
  if (err) return console.error(err);
  if (/\.js$/.test(srcDir)) {//如果拷贝的是单文件
    var filename = srcDir.split('/')[srcDir.split('/').length - 1]
    console.log("正在拷贝:" + filename);
    fse.copySync(srcDir, destDir + '/' + filename);
    console.log("拷贝" + filename + "完成");
  } else {
    console.log("正在拷贝:" + srcDir);
    fse.copySync(srcDir, destDir);
    console.log("拷贝" + srcDir + "完成");
  }

  dosth2 = "cd " + sdk + " && ";
  dosth2 += "git add . " + " && ";
  dosth2 += "git commit -m \"" + sdkName + " sdk更新\" && ";
  dosth2 += "git push origin master:" + branchName + " --force";
  exec(dosth2, function (err2, stdout2, stderr2) {
    console.error("git提交日志: " + stdout2);
    console.error("git提交结果: " + stderr2);
    if (err2) return false;
    console.log("=>sdk已经提交到git，请使用上线工具上线到测试机或生产环境");
    console.log("=>上线工具地址:http://10.154.30.228/manny/publish/front/pages/seemyownonetask.html进行");
    console.log("=>如有权限问题,请联系禚永然");
  });
});
