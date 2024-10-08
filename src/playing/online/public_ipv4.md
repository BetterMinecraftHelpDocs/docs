---

title: 1.0.1 使用IPV4公网进行联机
order: 1
# 这是页面的图标
icon: file
author: Natsumi
date: 2024-08-30
# 一个页面可以有多个分类
category:
  - 游玩文档
# 一个页面可以有多个标签
tag:
  - 游戏中
  - 联机
  - IPV4
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在星标文章中
star: true
copyright: Copyright © 2024 BetterMinecraftHelpDocs Project
---
> [!warning]
> 本文所需要公网IPV4地址 以及 一定的电脑常识

> [!caution]
> 注意：暴露在公网的设备可能会遭受网络攻击，若暂时没有服务需要，请把端口转发关闭

1. 启动Minecraft

2. 进入一个世界

3. 创建局域网世界并输入端口(要求是你所记得的)，并检查您的电脑是否已经放行。若不会，可以查看 [这篇教程](https://blog.csdn.net/zhangxiaoquan2016/article/details/140494911)。

若您的路由器需要转发端口到公网，您需要应用如下规则
```
协议：TCP
本地IP(IP)：使用ipconfig查看本机的IP(以192.168.x.x开头的IP)
本地端口：如上你在我的世界中设置的端口
远程端口：随意设置（范围在0到65535之内）
```

此时你的端口号应当为 远程端口号

本文以 11451 为例
> [!caution]
> 注意：在公网上关闭防火墙很危险，本文极其不推荐这样做。

4. 打开 [这里](https://myip.ipip.net/) 查看自己的IP地址

例如 若打开这个网站显示为
```
当前 IP：114.514.191.1  来自于：中国 xx xx  xx
```
则您的IP为
```
114.514.191.1
```

5. 把`IP:端口号` 发给朋友，朋友也把 `IP：端口号` 输入到 `多人游戏-->添加服务器-->服务器地址` 中后点击完成，然后选中服务器加入即可