# ccw-extensions-template

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

## How to test
1. run 'yarn dev' to start the local dev server. Keep it running if no errors are shown.
2. [TODO] open Gandi, and add a remote extension with the URL 'http://localhost:9999/static/js/main.js' 
3. [TODO] the extension will be shown in the menu

## APIs
[TODO]
### runtime apis
[TODO]
#### ccw apis
[TODO]

## Localization
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
