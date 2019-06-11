---
title: git常用命令
date: 2019-05-08 22:18:12
toc: true
tags: [git]
---

## 拉项目

git clone: 克隆远程仓库

## 查看分支

git branch 查看本地分支

git branch -r 查看远程分支

git branch -a 查看所有分支

<!-- more -->

## 创建切换分支

git branch [branch_name]: 创建分支

git checkout [branch_name]: 切换分支

git checkout -b [branch_name]：创建并切换分支

## 删除分支

删除远程分支：git push origin --delete [branch_name]

## 提交

git文件状态

commit <--（git commit） stage <--（git add -A） modify

提交到暂存区

git add -A  提交所有变化（一般使用这个）

git add -u  提交被修改(modified)和被删除(deleted)文件，不包括新文件(new)

git add .  提交新文件(new)和被修改(modified)文件，不包括被删除(deleted)文件

将暂存区改动提交到本地版本库

git commit -m “message”

推送到远程仓库

git push [remote_name(默认origin)] [branch_name]

## 拉取

git fetch 从远程获取最新到本地，不会自动merge

git fetch orgin master 将远程仓库的master分支下载到本地当前branch中

git log -p master  ..origin/master 比较本地的master分支和origin/master分支的差别

git merge origin/master //进行合并

git pull [remote_name(默认origin)] [branch_name]  相当于是从远程获取最新版本并merge到本地

一般情况下，用git pull比较省事，当然git fetch更安全一点。

## 合并分支

将test分支合并到develop

git checkout develop

git merge test

## 修改文件名

git mv -f [你想要删掉的文件] [你想要留下的文件]

git mv -f a.js A.js 

等同于： git rm a.js git add A.js