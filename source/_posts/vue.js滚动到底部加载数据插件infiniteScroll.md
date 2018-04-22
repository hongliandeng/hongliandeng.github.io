---
title: vue.js滚动到底部加载数据插件infiniteScroll
date: 2018-04-22 23:18:12
toc: true
tags: [Vue.js]
---

## 安装
```
npm i vue-infinite-scroll -save
```
<!-- more -->
## 引入
```
// 注册全局
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)
 
//单独的组件里面使用
import infiniteScroll from 'vue-infinite-scroll'
new Vue({
  directives: {infiniteScroll}
})
```
## 使用
当元素到达底部，触发pullup方法
```
<div class="scroller" v-infinite-scroll="pullup" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
...
</div>
```
定义busy: true
```js
getListData(flag) {
      //显示加载遮罩
      this.$vux.loading.show({
        text: 'Loading'
      })
      pr_purchase_list(this.req).then(res => {
        this.$vux.loading.hide()
        // 如果flag有值，表示不是第一次加载数据
        if (flag) {
          // 多次加载数据
          this.list = this.list.concat(res.result)
          // 如果列表数据为空，禁用无限滚动
          if (res.result.length === 0) {
            this.busy = true
          } else {
            this.busy = false
          }
        } else {
          // 第一次加载数据
          this.list = res.result
          // 当第一次加载数据完之后，且数据量大于等于一页的条数时把这个滚动到底部的函数触发打开
          if (res.result.length >= this.req.pageSize) {
            this.busy = false
          }
        }
      }).catch(() => {
        this.$vux.loading.hide()
      })
    },
    // 滚动到底部触发事件
    pullup() {
      this.busy = true
      setTimeout(() => {
        this.req.pageNo += 1
        this.getListData(true)
      }, 100)
    },
```
## 参数说明
选项 | 描述
---|---
infinite-scroll-disabled | 如果该属性的值为true，则将禁用无限滚动。
infinite-scroll-distance | 	数字(默认值= 0)——在执行v -infinite- scroll方法之前，元素底部和viewport底部之间的最小距离。
infinite-scroll-immediate-check | 布尔值(默认值= true)表示该指令应该在绑定后立即检查。如果可能，内容不够高，不足以填满可滚动的容器。
infinite-scroll-listen-for-event | 当事件在Vue实例中发出时，无限滚动将再次检查。
infinite-scroll-throttle-delay | 下次检查和这次检查之间的间隔(默认值= 200)