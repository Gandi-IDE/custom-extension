# ccw-extensions-template

[English documentation](./README.md)
如果你不想使用新模版，可以移步至[文档](./src/original/README.zh.md)
[TOC]

<br/>
<br/>

## 用途

该分支是为 Gandi IDE 开发扩展而创建的模板， Gandi IDE 是一个基于浏览器的游戏引擎，是 [Scratch](https://scratch.mit.edu/) 的一个修改版本。
此文档主要是针对使用新模板进行开发的文档，若需要使用官方模板开发请查看此文档

## 开发要求

1. 一台现代的 PC 或 Mac
2. 任何你喜欢的 Web 开发 IDE （强烈推荐使用 VSCode ）
3. 安装 'git'
4. 安装 'node.js' version > 12.16
5. 安装 'yarn'

## 如何创建一个新扩展

1. 创建一个新文件夹
2. fork 并克隆该分支
3. 运行命令 'yarn'
4. 运行命令 'yarn extension-kit create'
5. 按照指示创建扩展文件
6. 现在你将在 'src/extension/{{developer}}/{{extensionId}}' 文件夹中看到你的新扩展文件
7. 打开 'src/extension/{{developer}}/{{extensionId}}/index.ts' 文件开始编写代码

    Tips: 如果有的文件你不知道是做什么的，那么请勿修改它.

## 国际化翻译

运行命令 'yarn extension l10n {extension_path}'

例如 'yarn extension l10n src/extension/Arkos/file_helper'

l10n文件将被创建在路径 'src/extension/Arkos/file_helper/l10n' 中

它会分析你的代码并生成中英文的 l10n 键值，如下所示

```
{
  test: 'test[A][B][C]',
  commandArugA: 'commandArugA',
  menuOpt1: 'menuOpt1',
  menuOpt12: 'menuOpt12',
  commandArguB: 'commandArguB',
  targetReporter: 'targetReporter[A][B][C]',
  globalReporter: 'globalReporter[A][B][C]',
  conditionalBlocks: 'conditionalBlocks[A][B][C]',
  loopBlocks: 'loopBlocks[A][B][C]',
  eventBlocks: 'eventBlocks[A][B][C]',
  hatBlocks: 'hatBlocks[A][B][C]'
}
```

key 和 arguments 占位符与块代码进行映射，你只需要进行翻译。

## 如何进行测试

1. 运行 'yarn dev' 启动本地开发服务器。如果没有显示错误，请保持运行状态。
2. 打开Gandi，在扩展库中选择 [Custom Extension]。
3. 将 URL 'http://localhost:9999/static/js/main.js' 粘贴到输入框并确认。
4. 该扩展将显示在自定义类别中。

## 如何发布

1. 提交给Gandi团队
    - 在该分支上创建一个 PR
    - 当 PR 被审核并合并后，你的扩展将显示在 Gandi 扩展库中
2. 自行部署，使用URL加载
    - 运行 'yarn build'
    - 将 'dist' 文件夹上传至任何HTTP或CDN服务器
    - 确保上传后的文件可以通过URL访问

        推荐使用CDN服务：https://www.jsdelivr.com/?docs=gh
    - 通过URL添加自定义扩展

## 如何创建一个代码块

使用 'BlockUtil' 中的函数，包括以下所有函数：

```js
    export default {
        createReporter, 
        createBool, 
        createCommand, 
        createConditional, 
        createLoop, 
        createButton, 
        createEvent, 
        createHat, 
        createMenu, 
        createDynamicMenu, 
        createArgument
    }
```

使用 create 命令后，您可以在 'index.ts' 文件中找到简单的使用示例。

## Runtime API

[TODO]

#### Gandi Community API

[TODO]

## 资源文件

您可以在 'assets' 文件夹中更改封面和图标。
图片类型和分辨率应该正确，如下所示：

扩展封面
type: jpg
size: 600 × 372 px

扩展图标
type: png
size: 80 x 80 px

## Q & A

如果你有任何其他问题，欢迎在issues中进行留言讨论
