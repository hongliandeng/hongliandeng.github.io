---
title: 关于Vue.js通过代理解决开发环境的跨域问题
date: 2018-04-23 10:00:12
toc: true
tags: [Vue]
---

## 何为代理？

代理服务器英文全称是Proxy Server，其功能就是代理网络用户去取得网络信息。本地会虚拟一个服务端接收你的请求并代你发送该请求。形象的说：它是网络信息的中转站。可以简单粗暴理解为把你的域名转换成你访问的域名，形成同源，这样就不会有跨域问题了。`（只适用于开发环境）`

<!-- more -->
## 实现

在Vue项目下=>config=>index.js=>module.exports=>dev对象中有一个`proxyTable`对象,实现代码如下：(vue3.0直接写在vue.config.js里面：devServer=>proxy)

```js
proxyTable: {
      '/test': { // 用/test代替target里面的地址，后面我们调接口时直接用test代替 
                 // 比如我要调用'http://192.168.1.82:7029/be/login'，直接写‘/test/login'即可,
                 // 在本地网页请求的地址是 http://192.168.1.101:8082/test/login （http://192.168.1.101:8082是本地地址。）
        target: "http://192.168.1.82:7029/be", // 接口地址
        changeOrigin: true, // 如果设置为true,那么本地会虚拟一个服务端接收你的请求并代你发送该请求
        pathRewrite: {
          '^/test': '' // 意思是在真正请求的时候去掉test。这里跟上面的必须一致。详见下面解释。
        }
      }
    },
```

用代理, 首先你得有一个标识, 告诉他你这个连接要用代理. 不然的话, 可能你的 html, css, js这些静态资源都跑去代理. 所以我们只要接口用代理, 静态文件用本地。
'/test': {}, 就是告诉node, 我接口只要是'/test'开头的才用代理.所以你的接口就要这么写 /test/xx/xx. 最后代理的路径就是 http://xxx.xx.com/test/xx/xx.
但是正确的接口路径里面没有/test，所以就需要 pathRewrite,用''^/test'':'', 把'/test'去掉, 这样既能有正确标识, 又能在请求接口的时候去掉/test
