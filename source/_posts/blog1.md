---
title: 基于Hexo搭建个人博客并发布到GitHub Pages
date: 2018-04-19 22:18:12
toc: true
tags: [Git, js]
---
前言
--

 一直想搭建一个个人主页，类似博客那种，把平时遇到的问题、工作上的收获记录下来，也算是一个打发时间的好地方。参考了网上的一些教程，最终决定用Hexo + GitHub Pages来搭建个人博客。

<!-- more -->

大概流程
----

 1. 安装Node.js、Git环境，创建仓库
 2. 安装配置Hexo
 3. 打包Hexo项目，并将打包后的文件部署到GitHub Pages
 
## 安装Node.js、git环境，创建仓库 ##

> 安装node.js环境是因为Hexo框架是基于Node.js编写的。安装Git环境是因为需要把构建后的网页文件部署到github上面

打开Node.js官网：[Node.js][1]下载最新的安装包，我的是v6.11.0 LST。安装一直点下一步即可。
装完后打开命令提示符，输入node -v和npm -v，输出版本号表示安装成功。
![b0472871gy1fqk1ff4kzsj20n90cgweh.jpg][2]
打开Git官网：[Git][3]下载最新安装包，我的是v2.11.1，安装过程默认即可。同样，装完后打开命令提示符，输入git --version，有输出版本号表示安装成功！（这里我用的是Git Bush）
![b0472871gy1fqk1l2ci3lj20gj0953z0.jpg][4]

然后登陆GitHub网站：[GitHub][5] (GitHub没有账号的要建一个账号),创建一个仓库。
![b0472871gy1fqk1tbcob4j20lv0hwgm8.jpg][6]

至此，第一步完成了。

安装配置Hexo
----

> Hexo是一个快速、简洁且高效的博客框架，更多介绍请看[Hexo官网][7]

 - 首先使用npm全局安装Hexo


```
npm install hexo-cli -g
```

 - 命令行输入hexo -v检查是否安装成功

![b0472871gy1fqk20bcq21j20mh0byaa4.jpg][8]

 - 初始化Hexo项目

```
hexo init hongliandeng.github.io
cd hongliandeng.github.io
npm install
```

Hexo项目基本结构如下：

```
├── .deploy         #需要部署的文件
├── node_modules    #依赖文件
├── public          #打包后的静态页面文件
├── scaffolds       #模板
├── source          #放置文章、图片等源文件
| ├── _drafts       #草稿
| └── _posts        #文章
├── themes          #主题
├── _config.yml     #全局配置文件
└── package.json    #npm 依赖等
```

 - 运行本地Hexo服务

```
npm install hexo -server --save
hexo s
```

打开 http://localhost:4000 如果出现以下画面：
![b0472871gy1fqk2bq2uigj20gl098juw.jpg][9]

那恭喜，Hexo本地服务已经运行成功了！

## 打包Hexo项目，并将打包后的文件部署到GitHub Pages ##

 - 生成SSH key（与远程GitHub建立联系的凭证）

```
ssh-keygen -t rsa -C "122589667@qq.com" //输入自己的邮箱地址
```
回车会提示你输入密码，如果为空则提交项目不需要输入密码

 - 添加SSH Key 到 GitHub

打开 `C:\Users\bxm09\.ssh\id_rsa.pub`，这个文件的内容就是刚才生成的Key，复制。 打开https://github.com/settings/keys 点击NEW SSH Kye黏贴刚才复制的Key。

 - 配置个人信息

桌面右键打开git Bash 输入下面代码生成个人信息(记得把名称和邮箱换成你的)。

```
git config --global user.name "hongliandeng"
git config --global user.email "hongliandeng@qq.com"

```

 - 配置Hexo项目中的_config.yml文件

```
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
  type: git
  repo: git@github.com:hongliandeng/hongliandeng.github.io.git
  branch: master
```

 - 打包并部署到GitHub

```
//安装扩展（不用每次执行，安装一次即可）
npm install hexo-deployer-git --save
// 删除旧的打包文件
hexo clean
// 生成新的打包文件
hexo g
// 开始部署，自动提交到GitHub
hexo d
```

好了，在浏览器输入https://hongliandeng.github.io (改成你自己的)，可以看到我们搭建的个人博客已经成功发布到GitHub Pages上面了~大功告成！

  [1]: https://nodejs.org/en/
  [2]: http://wx4.sinaimg.cn/mw690/b0472871gy1fqk1ff4kzsj20n90cgweh.jpg
  [3]: https://git-scm.com/downloads
  [4]: http://wx1.sinaimg.cn/mw690/b0472871gy1fqk1l2ci3lj20gj0953z0.jpg
  [5]: https://github.com/
  [6]: http://wx3.sinaimg.cn/mw690/b0472871gy1fqk1tbcob4j20lv0hwgm8.jpg
  [7]: https://hexo.io/zh-cn/
  [8]: http://wx1.sinaimg.cn/mw690/b0472871gy1fqk20bcq21j20mh0byaa4.jpg
  [9]: http://wx3.sinaimg.cn/mw690/b0472871gy1fqk2bq2uigj20gl098juw.jpg