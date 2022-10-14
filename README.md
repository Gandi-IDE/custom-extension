# ccw-extensions-template

- [ccw-user-extensions](#ccw-user-extensions)
  * [What for](#what-for)
  * [How to jump in](#how-to-jump-in)
    + [Normal remote extension (for anyone)](#normal-remote-extension--for-anyone-)
    + [CCW approved extension (for CCW collaborator)](#ccw-approved-extension--for-ccw-collaborator-)
    + [Apply for CCW collaborator](#apply-for-ccw-collaborator)
  * [How to develop](#how-to-develop)
    + [Define a extension](#define-a-extension)
      - [normal remote extension](#normal-remote-extension)
      - [CCW approved extension](#ccw-approved-extension)
    + [Test your extension](#test-your-extension)
      - [normal remote extension](#normal-remote-extension-1)
      - [CCW approved extension](#ccw-approved-extension-1)
    + [Asset standard](#asset-standard)

<small><i><a href='http://ecotrust-canada.github.io/markdown-toc/'>Table of contents generated with markdown-toc</a></i></small>

## What for
This branch is a project template for CCW/Cocrea user who wants make and test their own extensions.

## Develop requirement 
1. a modern PC or Mac  
2. any web development IDE you like.(highly recommended VSCode)
3. install 'git'
4. install 'node.js' version > 12.16
5. install 'yarn' latest version

## How to create a new extension
1. new a folder
2. git clone this branch.(highly recommended fork first)
3. use commandLine/terminal to project folder.
4. run command 'yarn'   
5. run command 'yarn extension-kit create'
6. answer questions, input extension info
7. now you will see your new extension file in 'src/extension/{{developer}}/{{extensionId}}'
8. modify 'src/extension/{{developer}}/{{extensionId}}/index.ts' to coding
    tips: don't modify any files if your don't make sure what those files is exactly.

## How to test
1. run 'yarn dev' to start local dev server.keep its running if show no error.
2. [TODO] open gandi, and add a remote extension with url 'http://localhost:9999/static/js/main.js' 
3. [TODO] you will see your extension in menu

## APIs
[TODO]
### runtime apis
[TODO]
#### ccw apis
[TODO]

## Localization
[TODO]
## Asset
you can change cover and icon in 'assets' folder but must follow file standard below

Extension cover
type: jpg
size: 600 × 372 px

Extension icon
type: png
size: 80 x 80 px