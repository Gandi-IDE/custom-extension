[TOC]
# What for
This repo is for CCW users who want to make and test their own extensions.
# How to jump in
There are two ways to develop and test your extensions.
## Normal remote extension (for anyone)
You can build your blocks and test them. You can use all JavaScript capacity to do what you want. There is only one limit: normal remote extension should be run in a sandbox and unable to access vm or runtime utility.
## CCW approved extension (for CCW collaborator)
As a CCW collaborator, you can push code into this repo. Extensions in this repo will have full access to vm and runtime utility that allow you to build highly functional blocks for all CCW Creators. When you complete testing, you can apply publish extensions to CCW Extension Library. All CCW Creators can use them in their projects.
## Apply for CCW collaborator
// TODO email address
// TODO apply form
# How to develop 

## Define an extension
### normal remote extension
Check out the example file [.example/normal-ext.js](https://github.com/CCW-Site/ccw-user-extension/blob/main/example/normal-ext.js)

### CCW approved extension
Check out the example file [.example/ccw-approved-ext.js](https://github.com/CCW-Site/ccw-user-extension/blob/main/example/ccw-approved-ext.js)
## Test your extension
### normal remote extension
If you work on a normal remote extension, you can upload the JS file of your extension to any http server and make sure it can be accessed on an open network.
When completing the above moves, use the URL below in your browser(recommend Chrome).
```
https://www.ccw.site/creator?extension=${your_file_url}
```
For example
```
https://www.ccw.site/creator?extension=https://ccw-user-extension.ccw.site/example/normal-ext.js
```
Extensions will be added to the bottom of block menu if there is no error in your code.
### CCW approved extension

Push code and a bot will deploy your commit to a http server automatically. The URL is like below.

The automatic deploy url format is like below
```
https://ccw-user-extension.ccw.site/${your_folder}/${jsFile}
```

When completing the above moves, use the URL below in your browser(recommend Chrome).
```
https://www.ccw.site/creator?ext=https://ccw-user-extension.ccw.site/${your_folder}/${jsFile}
```
For example
```
https://www.ccw.site/creator?ext=https://ccw-user-extension.ccw.site/example/ccw-approved-ext.js
```
Extensions will be registered in Extension Library. You must add it manually before you use it.
## Asset standard
Extension cover
type: png/jpg/svg
size: 600 × 372 px

Extension block icon
type: svg
size: 80 x 80 px

Extension menu icon
type: svg
size: 80 x 80 px

