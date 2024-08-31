---

title: 1.0.2 使用NAT1打洞进行IPV4联机
order: 2
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
  - NAT
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在星标文章中
star: true
copyright: Copyright © 2024 BetterMinecraftHelpDocs Project
---
> [!warning]
> 本文需要一定的电脑常识

> [!caution]
> 注意：暴露在公网的设备可能会遭受网络攻击，若暂时没有服务需要，请把Natter关闭

# 准备工作

1. 下载 [NatTypeTester](https://mirror.ghproxy.com/https://github.com/HMBSbige/NatTypeTester/releases/download/8.0.3/NatTypeTester-8.0.3-x64.7z)并解压。Github项目[地址](https://github.com/HMBSbige/NatTypeTester)

2. 下载[natter](https://mirror.ghproxy.com/https://github.com/BetterMinecraftHelpDocs/docs-file/raw/main/natter_nuitka.7z)并解压。Github项目[地址](https://github.com/MikeWang000000/Natter)

# 前言

NAT1打洞 是通过STUN打洞从而将您的设备暴露在公网的方法。通过这项方法，你可以在公网访问内网服务。

以下是NAT类型提供参考：

- NAT1：全锥形NAT（Full Cone NAT）

- NAT2：受限锥形NAT（Restricted Cone NAT）

- NAT3：端口受限锥形NAT（Port Restricted Cone NAT）

- NAT4：对称NAT（Symmetric NAT）



# 联机步骤

## NAT1的检查与获取

### NAT1的检查

1. 解压 NatTypeTester 后，找到`NatTypeTester.exe`并打开，选择![1.png](./nat1_1.png)项，点击测试。

若“NAT 类型”显示`UdpBlocked`则在上方地址栏右侧 的向下箭头中切换服务器。若“NAT 类型”显示`FullCone`则你的NAT类型为NAT1，此时可以直接前往下一步。

2. 若您的“NAT 类型”并非为`FullCone`则需要按照下文“NAT1的获取”操作

### NAT1的获取

1. `Win + R`输入`cmd`后回车进入 **命令行**
2. 输入`ipconfig`后回车，找到`默认网关`一项，这里以`192.168.1.1`为例
```
   默认网关. . . . . . . . . . . . . : fe80::10%12
                                       192.168.1.1
```
3. 打开浏览器输入 192.168.1.1，通过路由器背后贴着的密码进入路由器后台。

4. 找到与`DMZ`类似的选项

5. `局域网主机`项填写第二步中`IPv4 地址`项后面的IP，例如：
```
 IPv4 地址 . . . . . . . . . . . . : 192.168.1.114
```
6. 若有 开启/关闭 选项，选择打开后提交

7. 重复 `NAT1的检查` 步骤，观察是否变成`FullCone`。若仍不行，检查步骤是否出错。若无错误，那便是你家的网络环境不支持进行NAT1打洞。

8. 您可以进入 `NAT1的再检查`

### NAT1的再检查

1. 解压natter.7z

2. 打开natter.exe，出现如下画面：
```
[I] tcp://192.168.1.114:2839 <--Natter--> tcp://114.514.191.191:9944
```
3. 手机关闭WIFI，打开移动数据，在浏览器地址栏中输入 114.514.191.191:9944 并访问，若出现`It works!`字样代表您可以进入下一步`开始联机`，若没有您需要其他的联机方式

## 开始联机

1. 启动MC并进入世界

2. 按下`Esc`,进入![3.png](./nat1_3.png)

3. 输入端口号，若不能自定义端口号就直接`创建局域网世界`

4. 聊天栏会显示 `本地游戏已在端口[4393]上开启`之类的字样

5. 在 natter.exe 文件夹下打开cmd

6. 输入`natter.exe -p <端口号>` ， 例如 `natter.exe -p 4394`

7. 出现
```
[I] tcp://192.168.1.114:4394 <--Natter--> tcp://114.514.191.191:2233
```

8. 其他玩家输入`114.514.191.191:2233`即可进入