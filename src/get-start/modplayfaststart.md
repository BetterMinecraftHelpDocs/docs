---
# 这是文章的标题
title: 模组游玩快速入门
# 你可以自定义封面图片
cover: /assets/images/cover1.jpg
# 这是页面的图标
icon: file
# 这是侧边栏的顺序
order: 2
# 设置作者
author: Linear0us
# 设置写作时间
date: 2024-09-21
# 一个页面可以有多个分类
category:
  - 使用指南
# 一个页面可以有多个标签
tag:
  - 快速开始
# 此页面会在文章列表置顶
sticky: false
# 此页面会出现在星标文章中
star: false
# 你可以自定义页脚
# footer: 这是测试显示的页脚
# 你可以自定义版权信息
copyright: Copyright © 2024 BetterMinecraftHelpDocs Project
---

# 模组游玩快速入门

本文会引导您快速开始模组游玩

> [!caution]
> 模组并非Mojang Studio开发制作的内容，模组及模组加载器是由玩家群体自行开发的   
> 游玩前请认真阅读 [Minecraft 最终用户许可协议 (“EULA”)](https://www.minecraft.net/zh-hans/eula) 及模组加载器/模组的使用条款    
> 使用模组被视为对游戏的修改，有时被视为作弊    
> 请确保使用模组时符合正确的使用情景

> [!warning]
> 在开始模组游玩前，请确保开启了版本隔离并隔离所有版本（或隔离可安装mod的版本）  
> 如果您之前在未开启版本隔离的情况下有`创建存档`、`添加Mod`、`添加资源包`的操作，请手动转移对应文件

## 安装模组加载器

通常在Minecraft中，模组是通过模组加载器对游戏进行修改的。   
常见的模组加载器（2024年9月）：
- [Forge](https://files.minecraftforge.net/net/minecraftforge/forge/) (1.1-1.21.1)
- [NeoForge](https://neoforged.net/) (1.20.1-1.21.1)
- [Fabric](https://fabricmc.net/) (1.14-1.21.1)
- [Quilt](https://quiltmc.org/en/) (1.14-1.21) （**仍处于Beta阶段**）
- [LiteLoader](http://www.liteloader.com/) (1.3.2-1.12.2) （停止维护）

PCL2、HMCL均支持在安装客户端时自动安装模组加载器，具体情况支持情况如下表    

> [!tip]
> 模组加载器互不兼容，一个游戏仅能安装一个模组加载器

|模组加载器|PCL2|HMCL|BakaXL|MulitiMC|
|---|---|---|---|---|
|Forge|✅|✅|✅|✅|
|NeoForge|✅|✅|✅|✅|
|Fabric(Fabric API)|✅|✅|✅|✅|
|Quilt(QSL/QFAPI)|❌|✅|❔|❔|
|LiteLoader|✅|✅|✅|✅|

> [!important]
> 通常在自动安装界面，还有一个叫做OptFine的东西   
> [OptFine](https://optifine.net/home)（高清修复）对游戏增加了光影支持，动态光源，更精细的纹理包支持（1.5.2+）等功能    
> 但由于OptFine对原版jar的破坏性修改导致在1.12.2以上的版本兼容性表现不佳（详见[MC百科](https://www.mcmod.cn/class/36.html)）  
> 故我们建议，在**1.13及以上版本**且**安装模组加载器的情况下** 使用   
> [Embeddium](https://www.curseforge.com/minecraft/mc-mods/embeddium)+ 
> [Oculus](https://www.curseforge.com/minecraft/mc-mods/oculus)(Forge/NeoForge)   
> [Sodium](https://www.curseforge.com/minecraft/mc-mods/sodium)+
> [Iris Shaders](https://www.irisshaders.dev)(Fabric/Quilt/NeoForge1.16+)   
> 代替OptFine的功能   
> !!HMCL为了避免这种问题直接将OptFine和加载器设为了不兼容!!   
> !!PCL2 xD群著名群员Wudust曾说过：“由OptFine导致的任何问题都不予解决”!!  
> !!所以当你的游戏安装模组后崩溃，首先把OptFine干掉!!   
> ![龙猫的告诫](mpfs-3.jpg =x70)

### PCL2

![PCL2自动安装界面](mpfs-1.png)   
这是PCL2的自动安装界面，位于`下载->自动安装`    
在右侧选择你要安装的游戏版本，此处我们以1.20.1为例    
选择游戏版本，进入安装详情界面      
![PCL2安装详情](mpfs-2.png)   
在此处选择要安装的模组加载器，建议直接选择最新版，然后点击开始安装

> [!tip]
> 安装Fabric同时要安装FabricAPI，一般都选择最新版本即可

> [!warning]
> 如果出现自动安装模组加载器失败或下载极慢，尝试`更新启动器`并检查网络环境/在全局设置中设置镜像源优先

### HMCL

## 下载/安装模组

Minecraft的模组文件是一个`.jar`结尾的Java归档文件     
将其放入`.minecraft/version/versionname/mods/`以使它被加载

通常可以在[CurseForge](https://www.curseforge.com/)、[Modrinth](https://modrinth.com/)下载到模组文件

### PCL2

在PCL2的`下载->Mod`进行Mod搜索，Mod来源于前文中的网站   
![PCL2模组下载](mpfs-4.png)
![PCL2模组信息概览](mpfs-5.png)

点击你要下载的Mod，进入版本选择页面     
![PCL2模组下载详情页](mpfs-6.png)

确认好模组加载器和游戏版本对应后，点击对应版本    
选择模组保存位置，默认为**PCL2主页选中的版本**的`mods`文件夹

点击`保存`，PCL2会开始Mod下载

> [!warning]
> 如果你的下载速度极慢或无法下载，请检查网络环境/在全局设置中设置镜像源优先

## 游玩
启动游戏后，按对应模组的操作方式使用即可    
帮助：[MC百科](https://www.mcmod.cn/)