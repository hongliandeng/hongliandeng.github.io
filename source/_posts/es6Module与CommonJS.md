---
title: es6Module与CommonJS
date: 2019-06-08 22:18:12
toc: true
tags: [js]
---

## 什么是模块化

在了解es6Module与RequireJS之前，还是需要先来简单地了解下什么是模块化，模块化开发

模块化是指在解决某一个复杂问题或者一系列的杂糅问题时，依照一种分类的思维把问题进行系统性的分解以之处理。模块化是一种处理复杂系统分解为代码结构更合理，可维护性更高的可管理的模块的方式。

<!-- more -->

作为一个模块化系统所必须的能力：

 - 定义封装的模块

 - 定义新模块对其他模块的依赖

 - 可对其他模块的引入支持

历史上，JavaScript 一直没有模块（module）体系，无法将一个大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。其他语言都有这项功能，比如 Ruby 的require、Python 的import，甚至就连 CSS 都有@import，但是 JavaScript 任何这方面的支持都没有，这对开发大型的、复杂的项目形成了巨大障碍。

所以社区制定了CommonJs规范，Node 从 Commonjs 规范中借鉴了思想于是有了 Node 的 module，而 AMD 异步模块 也同样脱胎于 Commonjs 规范，之后有了运行在浏览器上的 require.js。

ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。

## CommonJS

Node.js是commonJS规范的主要实践者，它有四个重要的环境变量为模块化的实现提供支持：module、exports、require、global。实际使用时，用module.exports定义当前模块对外输出的接口，用require加载模块。
```js
// 定义模块 area.js
function area(radius) {
  return Math.PI * radius * radius;
}

// 在这里写上需要向外暴露的函数、变量
module.exports = { 
  area: area
}

// 引用自定义的模块时，参数包含路径
var math = require('./math');
math.area(2);
```
但是我们并没有直接定义 module、exports、require这些模块，以及 Node 的 API 文档中提到的__filename、__dirname。那么是从何而来呢？其实在编译的过程中，Node 对我们定义的 JS 模块进行了一次基础的包装：
```js
(function(exports, require, modules, __filename, __dirname)) {
  ...
})
```
这样我们便可以访问这些传入的arguments以及隔离了彼此的作用域。CommonJS 的一个模块，就是一个脚本文件。require命令第一次加载该脚本，就会执行整个脚本，然后在内存生成一个对象。
```js
{
  id: '...',
  exports: { ... },
  loaded: true,
  ...
}
```
以后需要用到这个模块的时候，就会到exports属性上面取值。即使再次执行require命令，也不会再次执行该模块，而是到缓存之中取值。commonJS用同步的方式加载模块，只有在代码执行到require的时候，才回去执行加载。

CommonJS规范规定，每个模块内部，module变量代表当前模块。这个变量是一个对象，它的exports属性（即module.exports）是对外的接口。加载某个模块，其实是加载该模块的module.exports属性。

## modules对象具有以下属性

 - id：当前模块的bi

 - exports：表示当前模块暴露给外部的值

 - parent： 是一个对象，表示调用当前模块的模块

 - children：是一个对象，表示当前模块调用的模块

 - filename：模块的绝对路径

 - paths：从当前文件目录开始查找node_modules目录；然后依次进入父目录，查找父目录下的node_modules目录；依次迭代，直到根目录下的node_modules目录

 - loaded：一个布尔值，表示当前模块是否已经被完全加载

## CommonJS特性

 - 所有代码都运行在模块作用域，不会污染全局作用域

 - 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。

下面是Module._load的源码
```js
Module._load = function(request, parent, isMain) {

  //  计算绝对路径
  var filename = Module._resolveFilename(request, parent);

  //  第一步：如果有缓存，取出缓存
  var cachedModule = Module._cache[filename];
  if (cachedModule) {
    return cachedModule.exports;

  // 第二步：是否为内置模块
  if (NativeModule.exists(filename)) {
    return NativeModule.require(filename);
  }

  // 第三步：生成模块实例，存入缓存
  var module = new Module(filename, parent);
  Module._cache[filename] = module;

  // 第四步：加载模块
  try {
    module.load(filename);
    hadException = false;
  } finally {
    if (hadException) {
      delete Module._cache[filename];
    }
  }

  // 第五步：输出模块的exports属性
  return module.exports;
};
```
 - 模块加载的顺序，按照其在代码中出现的顺序。

 - CommonJS模块输出的是一个值的拷贝。
```js
// exportDemo.js
count = 1;
module.exports.count = count;
module.exports.Hello = function() {
  var name;
  this.setName = function(newName) {
    name = newName;
  }
  this.sayHello = function() {
    console.log("hello Mr." + name);
  }
  this.getId = function() {
    return count++
  }
}

var { Hello, count } = require('./exportDemo')
var hello = new Hello();
// 让count自增
console.log(hello.getId());
console.log(hello.getId());
// 发现获取的count还是原值
console.log(count)

// 真正的count其实是已经改了的
var newHello = new Hello();
console.log(newHello.getId())

var { Hello: newHello, count: newCount } = require('./exportDemo')
console.log(newCount, 'newCount');
// 再次require，取得的newHello和之前require的Hello指向同一个拷贝
console.log(newHello === Hello)
```
 - CommonJS模块是运行时加载。

## es6 Modules

es6在语言标准的层面上，实现了模块功能。

ES6 模块不是对象，而是通过export命令显式指定输出的代码，再通过import命令输入。
```js
import { stat, exists, readFile } from 'fs';
```
上面代码的实质是从fs模块加载 3 个方法，其他方法不加载。这种加载称为“编译时加载”或者静态加载，即 ES6 可以在编译时就完成模块加载，效率要比 CommonJS 模块的加载方式高。当然，这也导致了没法引用 ES6 模块本身，因为它不是对象。

由于 ES6 模块是编译时加载，使得静态分析成为可能。有了它，就能进一步拓宽 JavaScript 的语法，比如引入宏（macro）和类型检验（type system）这些只能靠静态分析实现的功能。

除了静态加载带来的各种好处，ES6 模块还有以下好处。

 - 不再需要UMD模块格式了，将来服务器和浏览器都会支持 ES6 模块格式。目前，通过各种工具库，其实已经做到了这一点。

 - 将来浏览器的新 API 就能用模块格式提供，不再必须做成全局变量或者navigator对象的属性。

 - 不再需要对象作为命名空间（比如Math对象），未来这些功能可以通过模块提供。

## es6 Modules特性

 - ES6 Modules 输出的是值的引用
```js
// exportDemo.mjs
export let counter = 1;
export function incCounter() {
  counter ++;
}

// importDemo.mjs
import { counter, incCounter } from './exportDemo.mjs'

incCounter();
console.log(counter)		// 打印结果为2，而不是初始值的1
```
 - ES6模块是编译时加载

## 动态import()

这是一个从静态到动态导入转换的例子
```js
// STATIC
import './a.js';

import b from './b.js';
b();

import {c} from './c.js';
c();

// DYNAMIC
import('./a.js').then(()=>{
  console.log('a.js is loaded dynamically');
});

import('./b.js').then((module)=>{
  const b = module.default;
  b('isDynamic');
});

import('./c.js').then(({c})=>{
  c('isDynamic');
});
```
 - 动态的 import() 提供一个基于Promise的API

 - import() 遵循ES模块规则：singleton，说明符，CORS等.

 - import() 可以在经典脚本和模块脚本中使用

 - 在代码中使用的import()的顺序与它们被解析的顺序没有什么共同之处

动态import()给我们提供了用异步方式使用ES模块的额外功能。可以让我们根据我们的需要动态或有条件地加载它们。

## 两者的主要区别

### CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用

CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。

ES6 Modules 的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令import，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。换句话说，ES6 的 import 有点像 Unix 系统的“符号连接”，原始值变了，import加载的值也会跟着变。因此，ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。

### CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。

运行时加载: CommonJS 模块就是对象；即在输入时是先加载整个模块，生成一个对象，然后再从这个对象上面读取方法，这种加载称为“运行时加载”。

编译时加载: ES6 模块不是对象，而是通过 export 命令显式指定输出的代码，import时采用静态命令的形式。即在import时可以指定加载某个输出值，而不是加载整个模块，这种加载称为“编译时加载”

CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。

### ES6 模块之中，顶层的this指向undefined；CommonJS 模块的顶层this指向当前模块

以下这些顶层变量在ES6模块之中都是不存在的

 - arguments

 - require

 - module

 - exports

 - __filename

 - __dirname 