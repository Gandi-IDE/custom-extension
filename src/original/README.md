# ccw-user-extensions

[中文文档](./README.zh.md)

[TOC]

## What for
This repo is for CCW Creator who wants make and test their own extensions.
## How to jump in
There are two ways to develop and test your extensions.
### Normal remote extension (for anyone)
You can build your blocks and test them.

You can use all javascript capacity to do what you want.

There only have one limit: normal remote extension will be running in a sandbox and unable to access vm or runtime utilities.
### CCW approved extension (for CCW collaborator)

As a CCW collaborator, your can push code into this repo.

Extensions in this repo will have full access to vm and runtime utilities allows you build advanced block for all CCW Creator.

When your complete testing,you can apply for publish extensions to CCW Extension Library. All CCW Creator can use it in their project.
### Apply for CCW collaborator
- fork this repo and submit your PR。
## How to develop 

### Define a extension

#### use extension-kit

run command 'yarn extension-kit create'

When selecting a template, choose "original." Then, follow the prompts to proceed to the next step. Once completed, open the newly created JS file to start development.

#### normal remote extension

[.example/normal-ext.js](https://github.com/CCW-Site/ccw-user-extension/blob/main/example/normal-ext.js)

#### CCW approved extension

[.example/ccw-approved-ext.js](https://github.com/CCW-Site/ccw-user-extension/blob/main/example/ccw-approved-ext.js)
### Test your extension
#### normal remote extension
if your work on a normal remote extension, you can upload your extension js file to any http server and make sure it can be accessed in open network.

when complete above moves, use below url in browser(recommend Chrome)
```
https://www.ccw.site/creator?extension=${your_file_url}
```

For example
```
https://www.ccw.site/creator?extension=https://ccw-user-extension.ccw.site/example/normal-ext.js
```
Extensions will be added to the bottom of block menu if there is no error in your code.

#### CCW approved extension
Upload your extension JS file to any HTTP server and ensure that it can be accessed on the public network. 
After completing these steps, use the following URL in your browser (preferably Chrome):
```
https://www.ccw.site/creator?ext=${your_file_url}
```
For example
```
https://www.ccw.site/creator?ext=https://ccw-user-extension.ccw.site/dannydev/scCOM.js
```

Extensions will be registed in Extension Library. You must add it by hand before you use it.

### Asset standard

Extension cover
type: png/jpg/svg
size: 600 × 372 px

Extension block icon
type: svg
size: 80 x 80 px

Extension menu icon
type: svg
size: 80 x 80 px

