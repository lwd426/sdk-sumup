### sdk归集工具

#### 此工具目的是为SDK开发人员提供上传打包完的SDK文件或目录到lem_sdk中

#### 操作步骤:

1.在SDK开发目录下执行以下命令将sdk归集工具安装到全局环境中

```js
npm i sdk-sumup -g
```

2.执行对应的参数进行环境修改:

| command      | dramas          |  explain | example
| ------------- |:-------------:| :-----|:------|
|  ssn   | sdk的名称(开发者自定义) | (sdk-sumup name的简称)设置sdk名称为参数值 | ssn danmu |
| sss  |要使用工具进行上传的文件名或目录名| (sdk-sumup src的简称)设置sdk编译后的源目录为参数值 | 多个文件: sss dist/ <br/> 单个文件: sss dist/danma.js
| ssb |sdk开发者自己专属的分支名(开发者自定义)  | (sdk-sumup branch的简称)设置用户分支名称为参数值|  ssb danmu| 
| ssc |  输出所有的配置参数 | (sdk-sumup config的简称)输出所有的配置参数，核实是否已经正确设置| 直接执行ssc| 


3.进入SDK根目录,进行sdk的打包和编译操作, 具体操作开发人员自由定义

4.执行以下命令把自己的sdk归集到lem_sdk工程git库自定义的分支下
```js
ssup  (sdk-sumup upload的简称)
```

