## vue-cli
> 使用vue开发大型项目时，需要考虑到目录结构、项目构建以及部署、热加载、代码单元化测试等事情，如果手动完成这些，效率非常低，一般情况下我们使用脚手架完成这样的工作。在vuejs的生态中，我们可以使用vue-cli来快速的构建项目。
### 搭建vue-cli开发环境
1. 在命令行里面输入下面这个命令 这个命令是用来安装vue-cli
```
npm install -g @vue/cli
```
2. 判断是否安装成功 在命令行工具里面输入 vue -V 敲回车会出现vue的版本 如果出现版本就代表安装成功

3. 创建vue的项目  vue create my-project

4. es6 导入和导出
+ 导出模块  我们用export 导出我们需要导出的变量或函数 export暴露的变量 我们在导入的时候必须和它暴露的变量名称相同
```
var str  = "张三" ;
var fuc = function(){
    alert(str)
}
export {
    str,
    fuc
}
```
+ 导入模块 用import 导入我们需要导入的模块
```
import {str , fuc} from "./exports.js";
console.log(str,fuc() ,"111111")
```
+ es6 的导入和导出另一种写法 
export default 暴露变量 我们在引入的时候不用把变量名一一对应起来

