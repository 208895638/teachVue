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
> 箭头函数  ES6 允许使用“箭头”（=>）定义函数。
    箭头函数的写法 
    ```
    var f = v => v;

    // 等同于
    var f = function (v) {
    return v;
    };
    ```
  1. 不带参数的写法
   ```
    var f = () =>  a 
    ```
  2. 带一个参数的写法
  ```
    var f = a => a
    ```
  3. 带多个参数的写法 
  ```
    var f = (a,b) => a+b
    ```
  4. return 多行写法 
  ```
   var f = (a,b) => {
      return a+b;
  }
  ```
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
    a(1,2);  // 2
```
array.from把字符串转换成数组
```
   var str = 'abc'; ///str.split("").join()
   var ars = Array.from(str); // ['a','b','c']
```
数组去重 array.from(new Set(arr))
```
array.from(new Set([1,2,3,1,2,3,4,1])) // [1,2,3,4]
```
> promise 解决回调的写法 
Promise 是异步编程的一种解决方案，比传统的解决方案——回调函数和事件——更合理和更强大。它由社区最早提出和实现，ES6 将其写进了语言标准，统一了用法，原生提供了Promise对象。

所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。从语法上说，Promise 是一个对象，从它可以获取异步操作的消息。Promise 提供统一的 API，各种异步操作都可以用同样的方法进行处理。

```
// 使用jq的ajax获取豆瓣电影接口
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
        console.log(val,"成功请求") // 输出的是请求成功之后的结果
    }).catch(function(val){
        console.log(val,"失败请求")
    })
```
### 常用的数组的操作 map、filter、foreach、some、every、includs、find、findIndex
>  map的特点
1. map() JavaScript 数组map()方法主要创建一个新的数组使用调用此数组中的每个元素上所提供的函数的结果。即对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组。
```
var list = [1,2,3,4];
        var newList = list.map(ele =>{
            return ele*2
        });
        console.log(list,newList) // [1,2,3,4] [2,4,6,8]
```

2. forEach  方法对数组的每个元素执行一次提供的函数。
```
var array1 = ['a', 'b', 'c'];

array1.forEach(function(element) {
  console.log(element);
});

//  "a"
//  "b"
//  "c"
```
3. filter  方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
```
var list = [1,2,3,4];
        var newList = list.filter(ele => ele > 2);
        console.log(list,newList) // [1,2,3,4] [3,4]
```
4. every()与some()方法都是JS中数组的迭代方法。

every()是对数组中每一项运行给定函数，如果该函数对每一项返回true,则返回true。

some()是对数组中每一项运行给定函数，如果该函数对任一项返回true，则返回true。
```
var arr = [ 1, 2, 3, 4, 5, 6 ]; 
 
 console.log( arr.some( function( item, index, array ){ 
     return item > 3; 
 }));   // true 
  
 console.log( arr.every( function( item, index, array ){ 
     return item > 3; 
 }));  // false
```
   
5. includes 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。
```
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
```
6. find和findIndex find()函数用来查找目标元素，找到就返回该元素，找不到返回undefined，而findIndex()函数也是查找目标元素，找到就返回元素的位置，找不到就返回-1。
```
var stu =[
            {
                "name": "张三",
                "gender": "男",
                "age": 20
            },
            {
                "name": "王小毛",
                "gender": "男",
                "age": 20
            },
            {
                "name": "李四",
                "gender": "男",
                "age": 20
            }
        ]
        var item = stu.find((element) => (element.name == '李四'))  // 返回的是{name: "李四", gender: "男", age: 20}
    var index = stu.findIndex((element)=>(element.name =='李四'))  // 返回的是索引下标：2
    console.log(item , index)
```



