### sdk归集工具

#### 此工具目的是为SDK开发人员提供上传打包完的SDK文件或目录到lem_sdk中

#### 操作步骤:

1.在SDK开发目录下执行以下命令将sdk归集工具安装到全局环境中

```js
npm i sdk-sumup -g
```

2.执行`sdksum`命令进行环境修改的sdk归集操作

参数说明:

| command      | dramas          |  explain | example
| ------------- |:-------------:| :-----|:------|
|  name   | sdk的名称(开发者自定义) | 设置sdk名称为参数值 | sdksum name danmu |
| src  |要使用工具进行上传的文件名或目录名|设置sdk编译后的源目录为参数值 | 多个文件:sdksum src dist/ <br/> 单个文件: sdksum src dist/danma.js
| branch |sdk开发者自己专属的分支名(开发者自定义)  |设置用户分支名称为参数值|  sdksum branch danmu| 
| config |  输出所有的配置参数 | 输出所有的配置参数，核实是否已经正确设置|sdksum config| 

可以通过查看帮助
```js
sdksum --help 

Usage: sdksum [options] <param ...>

  Options:

    -h, --help                               output usage information
    -V, --version                            output the version number
    -name [set sdk name], --string <n>       set it with your sdk name which you can name by yourself
    -branch [set branch name], --string <n>  set it with the branch name which you can name by yourself
    -src [set your dist src], --string<n>    set it with the path of your sdk file/files which has been packaged
    -config [show you config]<n>             output your config.yml infomation
    -upload [upload your sdk]<n>             upload your sdk file to lem_sdk

```


3.进入SDK根目录,进行sdk的打包和编译操作, 具体操作开发人员自由定义

4.执行以下命令把自己的sdk归集到lem_sdk工程git库自定义的分支下
```js
sdksum upload
```

