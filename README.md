# ccw-user-extensions

- [ccw-user-extensions](#ccw-user-extensions)
  - [What for](#what-for)
  - [About license](#about-license)
  - [How to jump in](#how-to-jump-in)
    - [Normal remote extension (for anyone)](#normal-remote-extension-for-anyone)
    - [CCW approved extension (for CCW collaborator)](#ccw-approved-extension-for-ccw-collaborator)
    - [Apply for CCW collaborator](#apply-for-ccw-collaborator)
  - [How to develop](#how-to-develop)
    - [Define a extension](#define-a-extension)
      - [normal remote extension](#normal-remote-extension)
      - [CCW approved extension](#ccw-approved-extension)
    - [Test your extension](#test-your-extension)
      - [normal remote extension](#normal-remote-extension-1)
      - [CCW approved extension](#ccw-approved-extension-1)
    - [Asset standard](#asset-standard)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

## What for
This repo is for CCW Creator who wants make and test their own extensions.
## About license
Extensions in this repository are licensed under [LGPL-2.1](./LICENSE) by default, but certain extensions may have different licenses (such as extensions ported from TurboWarp for which we are grateful for their contributions).
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

