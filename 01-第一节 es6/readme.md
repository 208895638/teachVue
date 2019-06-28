## es6入门
> es6 简介
ECMAScript 6.0（以下简称 ES6）是 JavaScript 语言的下一代标准，已经在 2015 年 6 月正式发布了。它的目标，是使得 JavaScript 语言可以用来编写复杂的大型应用程序，成为企业级开发语言。

> 定义变量 let const
    ES6 新增了let命令，用来声明变量。它的用法类似于var，但是所声明的变量，只在let命令所在的代码块内有效。
    let 定义的值可以被修改 而const定义的值不能被修改 let和const只作用与当前代码块
1. let 
```
    {
        let a = 10;
        var b = 1;
    }

    console.log(a,b) // ReferenceError: a is not defined. 1

    for (var i = 0; i < 10; i++) {
       console.log(i);  // i = 10
    }

    for (let i = 0; i < 10; i++) {
       console.log(i);  // i = 0,1,2,3,4,5,6,7,8,9
    }
    
```
2. const  const声明一个只读的常量。一旦声明，常量的值就不能改变。
```
    const PI = 3.1415;
    PI // 3.1415

    PI = 3;
    // TypeError: Assignment to constant variable.
```
上面代码表明改变常量的值会报错。const声明的变量不得改变值，这意味着，const一旦声明变量，就必须立即初始化，不能留到以后赋值。
> 解构赋值 [a , b] = [1 ,2] 剩余运算符 ...
1. ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。
```
    let [a, b, c] = [1, 2, 3];
```
上面代码表示，可以从数组中提取值，按照对应位置，对变量赋值。
本质上，这种写法属于“模式匹配”，只要等号两边的模式相同，左边的变量就会被赋予对应的值。
+ 数组解构
```
let [foo, [[bar], baz]] = [1, [[2], 3]];
foo // 1
bar // 2
baz // 3

let [ , , third] = ["foo", "bar", "baz"];
third // "baz"

let [x, , y] = [1, 2, 3];
x // 1
y // 3

let [head, ...tail] = [1, 2, 3, 4];
head // 1
tail // [2, 3, 4]

let [x, y, ...z] = ['a'];
x // "a"
y // undefined
z // []
```
+ 对象解构 解构不仅可以用于数组，还可以用于对象。
```
let { foo, bar } = { foo: 'aaa', bar: 'bbb' };
foo // "aaa"
bar // "bbb"
```
对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。
> 箭头函数 
  1. 不带参数的写法 () =>  a 
  2. 带一个参数的写法 a => a
  3. 带多个参数的写法  (a,b) => a+b
  4. return 多行写法 (a,b) => {
      return a+b;
  }
  5. 箭头函数的this指向 settimeout会改变this的指向 如果我们用箭头函数 箭头函数就指向父级
  ```
    var obj = {
        num : 1,
        add:function(){
            setTimeout(() => {
                console.log(this);
            },300)
        }
    };
    obj.add();
  ```
> array.from 把一个类数组对象转换成数组  把字符串转换成数组
```
    var a = function(a,b){
            
        //var c = arguments.splice(0,1); // 类数组的特点 不能执行数组的方法;
        var d = Array.from(arguments).splice(1,1);
        console.log(d);
    }
    a(1,2);
```
```
   var str = 'abc'; ///str.split("").join()
   var ars = Array.from(str);
```
数组去重 array.from(new Set(arr))
> promise 解决回调的写法
```
var msg = new Promise(function(resolve,reject){ // resolve 处理成功的函数 reject是处理失败的的函数
        $.ajax({
               method : "post", // get或post DELETE update
               url : "http://www.bufantec.com/api/douban/movie/in_theaters", // 请求的地址
               dataType : "JSON", // 返回数据的类型
               success (val){ // 成功返回执行的函数
                 resolve(val)
               },
               failed(val){ // 请求失败的函数
                reject(val)
               }
           });
    })
    msg
    .then(function(val){
        console.log(val,"成功请求")
    }).catch(function(val){
        console.log(val,"失败请求")
    })
```
> 常用的数组的操作 map、filter、foreach、some、every、includs、find、findIndex  这几个都是对数组进行循环 
1. map可以对循环的数组添加一些属性 循环之后再定义一个变量去保存这个循环之后的数组 这个变量的值是改变之后的
2. forEach 是对数组的循环 但是循环之后再定义一个变量去保存这个循环之后的数组 这个变量的值没有找到
3. filter 筛选返回符合条件的元素  
4. some 、 erery
   + some 当数组里面的元素有某一项符合时就返回一个布尔值 true 如果没有就返回false
   + every 当数组中的每一项都符合某个条件时就返回true 如果有一项不满足就返回false
5. includes 当数组中的某一项符合时返回true 不满足返回false 跟indexOf()很像 
6. find和findIndex 分别是找到某个元素 和找到某个元素对应的一个下表 如果找到那个元素即使下面有符合条件的元素也不会向下执行



