---
# 这是文章的标题
title: 启动器的进阶使用
# 你可以自定义封面图片
cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: file
# 这是侧边栏的顺序
order: 3
# 设置作者
author: LIPiston
# 设置写作时间
date: 2024-08-30
# 一个页面可以有多个分类
category:
  - 使用指南
# 一个页面可以有多个标签
tag:
  - 进阶
# 此页面会在文章列表置顶
sticky: true
# 此页面会出现在星标文章中
star: true
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
copyright: Copyright © 2024 BetterMinecraftHelpDocs Project
---

在本文你将深入了解 Minecraft 启动器的较为进阶选项

## HMCL 相关

HMCL 具有较高的可玩性

### 版本列表

![这就是 HMCL 的版本列表界面了喵](image.png)
这是 HMCL 的版本管理界面  
左侧分为上下两部分`游戏目录`和`“版本列表工具”`
右侧则是当前目录下的游戏版本

在右侧你可以打开每个版本的单独设置，也可以快速对游戏进行测试（点击 小火箭 即可启动游戏的同时打开日志面板以查看游戏运行数据）  
![单独设置](image-1.png)

#### 游戏目录

你可以自行添加任何一个文件夹作为你存放 Minecraft 游戏文件  
!!谁想用系统盘装 Minecraft 呢不是!!  
_请保证你的文件夹具有读写权限_

#### 版本列表工具

`安装新游戏版本`详见[新手上路](/get-start/)  
`安装整合包`可以对指定格式的整合包进行安装，也可以通过链接去安装，这里推荐使用“从 Curseforge/Modrinth 下载安装整合包”
> 上面有相当多他人制作的 mod 整合包、优化游戏帧数整合包等等

### 全局游戏设置

![这就是 HMCL 的全局游戏设置了喵](image-2.png)
在这你可以使用`内存分配`，`版本隔离`，`Java选择`等功能  

!!各选项详细往后再写!!
  
__注意：这里的设置会默认作用于所有未开启`游戏特定设置`的版本__

#### 游戏管理

![这就是 HMCL 的游戏设置了喵](image-3.png)
在此处可以对游戏的`模组/mods`，`世界/worlds`，`模组加载器/modLoader`，`游戏各文件夹`进行管理

## PCL2 相关

PCL2的界面和动画相对美观，但高度自定义的主题需要赞助后解锁。 PCL2仅支持Windows

> PCL2内置的帮助文档 `更多->帮助`
> ![PCL2内置帮助文档界面](image-7.png)

### 第三方登录验证服务器

PCL2支持以第三方登录验证服务器登录 如[统一通行证](https://login.mc-user.com:233/account/login)，[LittleSkin](https://littleskin.cn/)，自建的Yggdrasil API等

在`启动->版本设置->设置->服务器`中选择要使用的登录方式，并按照说明填入配置项  
![PCL2启动器登录验证服务器设置界面](image-4.png)

> 部分皮肤站会提供快捷配置按钮（如图），按标注操作即可   
> ![LittleSkin快速配置按钮](image-5.png)
  
### 版本选择/版本设置

![PCL2版本选择界面](image-6.png)

这是PCL2的版本选择界面。  
左侧栏可以：
- 选择`\.minecraft`文件夹  
  - 官方启动器文件夹默认为`C:\Users\Username\AppData\Roaming\.minecraft`  
  - 也可手动指定文件夹
- 导入整合包
> 整合包可从CurseForge、Modrinth等网站下载，后缀名一般为`.rar` `.zip` `.mrpack`  
> !!也可以使用PCL2内置下载 但那可以自动安装!!

右侧栏可以：选择版本  
将鼠标悬停在对应版本后其右侧会浮现三个按钮：收藏、删除、设置  
![PCL2版本选择界面悬浮显示按钮](image-8.png)
点击设置将进入对应版本的版本设置界面  
  
![PCL2版本设置界面](image-9.png)
你可以在此处调整对于`单个游戏版本`的设置，全局设置请去`设置->游戏`  
!!剩下的后面写!!
  
## BakaXL 相关

## multimc 相关