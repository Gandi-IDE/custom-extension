# ccw-extensions-template

[中文文档](./README.zh.md)
If you don't want to use new templates,please refer to this [document](./src/original/README.md)

[TOC]

<br/>
<br/>

## What is for

This branch is a template for developing extensions for Gandi IDE, an in-browser game engine, a mod of [Scratch](https://scratch.mit.edu/).

## Requirements

1. a modern PC or Mac
2. any web development IDE you like.(highly recommended VSCode)
3. install 'git'
4. install 'node.js' version > 12.16
5. install 'yarn' latest version

## How to create a new extension

1. create a new folder
2. fork and git clone this branch
3. run command 'yarn'
4. run command 'yarn extension-kit create'
5. follow the instructions to create extension files
6. now you will see your new extension files in 'src/extension/{{developer}}/{{extensionId}}' folder
7. open 'src/extension/{{developer}}/{{extensionId}}/index.ts' file to start coding

    Tips: don not modify any files if you don't know what those files are.

## Localization

run command 'yarn extension l10n {extension_path}'

like 'yarn extension l10n src/extension/Arkos/file_helper'

l10n file will be created in path 'src/extension/Arkos/file_helper/l10n'

it will analyze your code and generate l10n key-value into zh-cn.json and en.json like below

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

keys and arguments placeholder are mapping from block code, you just need translate it.

## How to test

1. run 'yarn dev' to start the local dev server. Keep it running if no errors are shown.
2. open Gandi, choose [Custom Extension] in Extension Library.
3. paste URL 'http://localhost:9999/static/js/main.js' to the input and confirm
4. the extension will be shown in the Custom category.

## How to publish

1. submit to Gandi team
    - make a PR to this Branch
    - when PR is reviewed and merged, you extension will show in Gandi Extension Library
2. deploy by yourself, use URL load
    - run 'yarn build'
    - upload 'dist' folder to any http or CDN server
    - make sure the file is accessible by URL after upload

        recommend CDN service: <https://www.jsdelivr.com/?docs=gh>
    - add Custom Extension by URL

## How to create a block

use function in 'BlockUtil', all functions

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

you can find usage simple in 'index.ts' after use create command


## Runtime API

[TODO]

#### Gandi Community API

[TODO]

## Asset

You can change the cover and icon in the 'assets' folder.
The image type and resolution should be correct, as shown below:

Extension cover
type: jpg
size: 600 × 372 px

Extension icon
type: png
size: 80 x 80 px

## Q & A

If you have any other questions, feel free to leave a message and discuss it in the issues section.
