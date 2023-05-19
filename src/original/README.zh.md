# ccw-user-extensions

[English documentation](./README.md)

[TOC]

## 用途
这个仓库是为了那些想要创建和测试自己扩展的CCW创作者而设的。

## 如何开始

有两种方式来开发和测试你的扩展。

### 普通远程扩展（适用于任何地方）

你可以构建并测试你的模块。

你可以利用JavaScript的所有能力来实现你想要的功能。

只有一个限制：普通远程扩展将在沙盒中运行，无法访问虚拟机或运行时工具。

### CCW认可的扩展（适用于CCW合作者）

作为CCW合作者，你可以将代码推送到这个仓库中。

这个仓库中的扩展将完全访问虚拟机和运行时工具，允许你为所有CCW创作者构建高级模块。

当你完成测试后，你可以申请将扩展发布到CCW扩展库中。所有CCW创作者都可以在他们的项目中使用它。

### 申请成为CCW合作者

- fork这个仓库并提交你的PR。

## 怎么开发

### 定义你的扩展

#### 使用extension-kit

运行命令 'yarn extension-kit create'
在选择模板时选择 original ，然后按照提示进行下一步。完成之后打开新创建的js文件就可以开始开发。

#### 普通远程扩展
可参考复制此文件
[.example/normal-ext.js](./example/normal-ext.js)

#### CCW扩展
可参考复制此文件
[.example/ccw-approved-ext.js](./example/ccw-approved-ext.js)

### 测试

#### 普通远程扩展

如果你在开发普通远程扩展，你可以将你的扩展JS文件上传到任何HTTP服务器，并确保可以在公共网络中访问它。

完成上述操作后，在浏览器中（推荐使用Chrome）使用下面的URL：
```
https://www.ccw.site/creator?extension=${your_file_url}
```

例如
```
https://www.ccw.site/creator?extension=https://ccw-user-extension.ccw.site/example/normal-ext.js
```
如果你的代码没有错误，扩展将会添加到块菜单的底部。

#### CCW认可的扩展

将你的扩展JS文件上传到任何HTTP服务器，并确保可以在公共网络中访问它。
完成上述操作后，在浏览器中（推荐使用Chrome）使用下面的URL：

```
https://www.ccw.site/creator?ext=${your_file_url}
```
例如
```
https://www.ccw.site/creator?ext=https://ccw-user-extension.ccw.site/dannydev/scCOM.js
```

扩展将会在扩展库的自定义扩展中注册。在使用之前，你必须手动添加它。

### 资源标准

扩展封面
type: png/jpg/svg
size: 600 × 372 px

扩展代码icon
type: svg
size: 80 x 80 px

扩展菜单icon
type: svg
size: 80 x 80 px

