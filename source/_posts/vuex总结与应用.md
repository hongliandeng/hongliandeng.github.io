---
title: vuex总结与应用
date: 2018-05-09 10:18:12
toc: true
tags: [Vue]
---
## 原理

Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式
<!-- more -->
![图解](/img/vuex.png)

### Mutation
- 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
- Mutation 必须是同步函数（里面不能有异步操作）

### Action
- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作

## 安装
```
npm install vuex --save
```
<!-- more -->
## 引入

main.js

```js
import store from './store'

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

```
## 目录结构

### src/store

```
├── actions.js        #存放actions函数
├── getters.js        #非必须，当需要用...mapGetters简化获取状态值时，需要添加
├── index.js          #vuex初始化与引入各个文件
├── mutation-types.js #统一存放Mutation方法名
├── mutations.js      #存放Mutation函数
├── state.js          #存放状态值
```

### state.js

```js
const state = {
    user: {
        value: '123'
    }
}

export default state
```
### getters.js
```js
export const user  = state => state.user
```

### mutation-types.js

```js
export const SET_USER = 'SET_USER'
```
### mutations.js
```js
import * as types from './mutation-types'

const mutations = {
    [types.SET_USER](state, user) {
        state.user = user
    }
}

export default mutations
```
### actions.js
```js
import * as types from './mutation-types'

const actions = {
    setUser: ({ commit }, value) => {
        commit(types.SET_USER, value)
    }
}

export default actions
```
### index.js

```js
import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters.js' // 通过 * as 导入可以用actions.xxx来引用actions.js里面的变量和方法
import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'
Vue.use(Vuex)

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
})
```
## 使用

通常获取状态值的方法：
```js
console.log(this.$store.state.user)
```
通过...mapGetters映射获取状态值
```js
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'user'
    ])
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.user)
    })
  },
}
```
通常触发mutation的方法
```js
this.$store.commit('SET_USER', {value: '321'})
```

通过...mapMutations触发mutation方法
```js
import { mapMutations } from 'vuex'

methods: {
    change() {
    // 调用
      this.setUser({
        value: '321'
    }),
    // 在methods最底下定义映射
    ...mapMutations({
      setUser: 'SET_USER'
    })
```

通常触发action的方法
```js
this.$store.dispatch('setUser', {value: '321'})
```

通过...mapActions触发action方法
```js
import { mapActions } from 'vuex'

methods: {
    change() {
    // 调用
      this.setUser({
        value: '321'
    }),
    // 在methods最底下定义映射
    ...mapActions({
      setUser: 'setUser'
    })
```