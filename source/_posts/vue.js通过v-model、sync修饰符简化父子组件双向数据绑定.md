---
title: vue.js通过v-model、sync修饰符简化父子组件双向数据绑定
date: 2018-04-20 23:18:12
toc: true
tags: [Vue.js]
---
前言
--

Prop是单向绑定的：当父组件的属性变化时，将传导给子组件，但是反过来不会。这是为了防止子组件无意间修改了父组件的状态，来避免应用的数据流变得难以理解。
另外，每次父组件更新时，子组件的所有 prop 都会更新为最新值。这意味着你不应该在子组件内部改变 prop。如果你这么做了，Vue
会在控制台给出警告：`Avoid mutating a prop directly since the value will be overwritten whenever the parent component re-renders......`
<!-- more -->

那我们应该怎么做呢？
通常做法
----

 1. 在组件内的data对象中创建一个props属性的副本，同时在组件内所有需要调用这个属性的地方调用其在data对象中的副本。
 2. 对props属性进行监听(watch)，实时更新data对象中props属性副本的值，来同步组件外对props的修改
 3. 对data对象中props属性副本进行监听()，用$emit触发事件的方式通知父组件属性值已经改变，父组件用v-on自定义事件监听获取改变后的值


----------
相信大家都清楚这种做法，但是这种做法有个问题，在子组件用$emit触发事件后，父组件还要用v-on自定义事件获取改变后的值，假设我们不需要在值改变的情况下处理特定的业务逻辑。这部分代码完全是多余的，有没有办法把这部分代码省略，让父组件自动更新获取数据？`我们可以通过v-model和sync修饰符的方法来绑定数据。`

1、使用v-model来进行双向数据绑定
---------

需要知道的是
```html
<input v-model="something">
```
不过是以下实例的语法糖：
```html
<input
  v-bind:value="something"
  v-on:input="something = $event.target.value">
```
所以在组件中使用时，它相当于下面的简写：
```html
<custom-input
  v-bind:value="something"
  v-on:input="something = arguments[0]">
</custom-input>
```

所以要让组件的 v-model 生效，它应该

 - 接受一个 value prop  
 - 在有新的值时触发 input 事件并将新值作为参数

**实现**：

父组件：

```html
<mod-alert v-model="value"></mod-alert>
```

子组件：
```js
props: ['value'],
data() {
    return {
        // 新建props属性副本
        value_p: this.value
    }
},
watch: {
    // 监听props属性值，实时更新副本值
    value(val) {
        this.value_p = val
    }
}
methods: {
    valueChange() {
        // 触发Input事件，将新增传递给父组件，父组件会自动更新
        this.$emit('input', this.value_p)
    }
}
```

默认情况下，一个组件的 v-model 会使用 value prop 和 input 事件。但是诸如单选框、复选框之类的输入类型可能把 value 用作了别的目的。model 选项可以避免这样的冲突：
```js
model: {
    prop: 'newValue', // 自定义v-model接收到的属性名
    event: 'change' // 自定义事件名
},
props: ['newValue'],
data() {
    return {
        // 新建props属性副本
        value_p: this.newValue
    }
},
watch: {
    // 监听props属性值，实时更新副本值
    newValue(val) {
        this.value_p = val
    }
}
methods: {
    valueChange() {
        // 触发Input事件，将新增传递给父组件，父组件会自动更新
        this.$emit('change', this.value_p)
    }
}
```
```html
<mod-alert v-model="foo" value="someValue"></mod-alert>
```
上述代码等价于：
```html
<mod-alert
  :newValue="foo"
  @change="val => { newValue = val }"
  value="someValue">
</mod-alert>
```
2、通过sync修饰符绑定数据
---------------
sync修饰符在vue2.0被移除，在vue2.3.0被重新引入。但是这次它只是作为一个编译时的语法糖存在。它会被扩展为一个自动更新父组件属性的 v-on 监听器。
如下代码：

```html
<mod-alert :value.sync="value"></mod-alert>
```
会被扩展为：
```html
<mod-alert :value="value" @update:foo="val => value = val"></mod-alert>
```

**实现：**

父组件：

```html
<mod-alert :value.sync="value"></mod-alert>
```

子组件：

```js
props: ['value'], 
data() {
    return {
        // 新建props属性副本
        value_p: this.value
    }
},
watch: {
    // 监听props属性值，实时更新副本值
    value(val) {
        this.value_p = val
    }
}
methods: {
    valueChange() {
        // 值改变时显式地触发一个更新事件，父组件自动更新
        this.$emit('update:value', this.value_p)
    }
}
```