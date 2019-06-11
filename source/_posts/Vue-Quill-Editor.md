---
title: Vue-Quill-Editor富文本编辑器
date: 2019-06-11 13:54:33
tags: [Vue]
---

## 背景

新项目有一个富文本编辑器的需求，最终选用Vue-quill-editor这个富文本编辑器，但是里面图片上传功能是将图片转为base64格式，这种形式形成的base64字符串非常长，而且无法做上传限制。

我觉得上传方式有必要改成先上传到服务器，再获取图片url的方式。经过调研，引入quill-image-extend-module模块

<!-- more -->

## Vue-Quill-Editor介绍

vue-quill-editor是基于 Quill、适用于 Vue 的富文本编辑器，支持服务端渲染和单页应用

文档：https://www.npmjs.com/package/vue-quill-editor

### 安装
```js
npm install vue-quill-editor --save-dev
```
安装相关依赖：
```js
npm install quill --save-dev
```
### 使用

html部分
```html
<quill-editor 
    v-model="content"
    :options="editorOption" 
    @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
    @change="onEditorChange($event)">
</quill-editor>
```
js部分
```js
import { quillEditor } from "vue-quill-editor"; //调用编辑器
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

// 设置部分
editorOption: {
  modules:{
  	// 工具栏设置
    toolbar:[
      ['bold', 'italic', 'underline', 'strike'],    //加粗，斜体，下划线，删除线
      ['blockquote', 'code-block'],     //引用，代码块


      [{ 'header': 1 }, { 'header': 2 }],        // 标题，键值对的形式；1、2表示字体大小
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],     //列表
      [{ 'script': 'sub'}, { 'script': 'super' }],   // 上下标
      [{ 'indent': '-1'}, { 'indent': '+1' }],     // 缩进
      [{ 'direction': 'rtl' }],             // 文本方向


      [{ 'size': ['small', false, 'large', 'huge'] }], // 字体大小
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],     //几级标题


      [{ 'color': [] }, { 'background': [] }],     // 字体颜色，字体背景颜色
      [{ 'font': [] }],     //字体
      [{ 'align': [] }],    //对齐方式


      ['clean'],    //清除字体样式
      ['image','video']    //上传图片、上传视频

    ]
  },
  theme:'snow' // 主题设置，默认snow
}
```
## 图片上传部分改造

这部分借助quill-image-extend-module这个模块。

quill-image-extend-module是vue-quill-editor的增强模块，主要功能是：

 - 提供图片上传到服务器的功能

 - 复制插入

 - 拖拽插入

 - 显示上传进度

 - 显示上传成功或者失败

 - 支持与其他模块一起使用（例如调整图片大小）

### 安装quill-image-extend-module
```js
npm install quill-image-extend-module --save-dev
```
### 引入
```js
import {quillEditor, Quill} from 'vue-quill-editor'
import {container, ImageExtend, QuillWatch} from 'quill-image-extend-module'
Quill.register('modules/ImageExtend', ImageExtend)

quill-image-extend-module所有可配置项

modules: {
   ImageExtend: {  // 如果不作设置，即{}  则依然开启复制粘贴功能且以base64插入 
       name: 'img',  // 图片参数名
       size: 3,  // 可选参数 图片大小，单位为M，1M = 1024kb
       action: updateUrl,  // 服务器地址, 如果action为空，则采用base64插入图片
       // response 为一个函数用来获取服务器返回的具体图片地址
       // 例如服务器返回{code: 200; data:{ url: 'baidu.com'}}
       // 则 return res.data.url
       response: (res) => {
           return res.info
       },
       headers: (xhr) => {
       // xhr.setRequestHeader('myHeader','myValue')
       },  // 可选参数 设置请求头部
       sizeError: () => {},  // 图片超过大小的回调
       start: () => {},  // 可选参数 自定义开始上传触发事件
       end: () => {},  // 可选参数 自定义上传结束触发的事件，无论成功或者失败
       error: () => {},  // 可选参数 上传失败触发的事件
       success: () => {},  // 可选参数  上传成功触发的事件
       change: (xhr, formData) => {
       // xhr.setRequestHeader('myHeader','myValue')
       // formData.append('token', 'myToken')
       } // 可选参数 每次选择图片触发，也可用来设置头部，但比headers多了一个参数，可设置formData
   },
   toolbar: {  // 如果不上传图片到服务器，此处不必配置
       container: container,  // container为工具栏，此次引入了全部工具栏，也可自行配置
       handlers: {
           'image': function () {  // 劫持原来的图片点击按钮事件
               QuillWatch.emit(this.quill.id)
           }
       }
   }
}
```
具体代码实现
```js
editorOption = {
    modules: {
      ImageExtend: {
        loading: true, // 是否显示加载动画
        name: 'img',
        size: 3,
        action: '', // 服务器地址
        response: (res) => {
          return res.data.originalLink // 获取服务器返回的具体图片地址
        },
        // 设置上传Venus的请求头部信息
        headers: (xhr) => {
          xhr.setRequestHeader('Authorization', this.token.Authorization)
          xhr.setRequestHeader('time', this.token.time)
        },
        // 上传结束时重新获取鉴权信息
        end: () => {
          getBAAuthorization().then(res => {
            this.token.Authorization = res.authorization
            this.token.time = res.time
            console.log('getbaa')
            console.log(this.token)
          })
        }
      },
      toolbar: {
        container: [
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            [{ 'header': 1 }, { 'header': 2 }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }],
            [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ 'indent': '-1' }, { 'indent': '+1' }],
            [{ 'direction': 'rtl' }],
            [{ 'align': [] }],
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            ['link', 'image', 'video']
        ],
        handlers: {
        // 劫持原来的图片点击按钮事件
          'image': function() { 
            QuillWatch.emit(this.quill.id)
          }
        }
      }
    }
  }
  created() {
  实例创建时获取上传所需的鉴权信息
    getBAAuthorization().then(res => {
      this.token.Authorization = res.authorization
      this.token.time = res.time
    })
  }
```
## 注意事项

1. 原本打算在start的回调中获取鉴权信息，但是发现无法写入头部，后改为先获取一次鉴权信息，然后在图片上传完成再去更新鉴权信息。

2. 官方文档中有写到可以在change回调中写入头部信息，但是测试发现报错，这个可能是bug，需要再测试一下。

3. 服务器返回的数据格式可能不相同

因此在配置中，你必须如下操作
```js
// 你必须把返回的数据中所包含的图片地址 return 回去
 respnse: (res) => {
    return res.info  // 这里切记要return回你的图片地址
 }
```
4. 工具栏增加文本描述

可以添加after
```css
.ql-formats>.ql-font {
  margin-left: 35px;
}
.ql-formats>.ql-font::after {
  content: '字体：';
  position: absolute;
  left: -35px;
}
```
