class ArkosExtensions {
    constructor (runtime) {
        this.runtime = runtime;
    }
    getInfo() {
        return {
            id: 'arkosExtensions', //拓展id
            name: 'Arkos\' Extensions',  //拓展名
            color1: '#FF8383',
            //menuIconURI:,
            //blockIconURI:
            blocks: [
                { //判断相等（区分大小写）
                    opcode: 'strictlyEquals',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '(case sensitive)[ONE]=[TWO]',
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'A'
                        },
                        TWO: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'a'
                        }
                    }
                },
                { //计算点A到点B的方向
                    opcode: 'getDirFromAToB',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'direction from x1:[X1]y1:[Y1]to x2:[X2]y2:[Y2]',
                    arguments: {
                        X1: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        Y1: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        X2: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        Y2: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                { //计算角b-角a的角度差
                    opcode: 'differenceBetweenDirections',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'direction[b] minus direction[a]',
                    arguments: {
                        a: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        b: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                { //两点距离
                    opcode: 'disFromAToB',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'distence betweem x1:[X1]y1:[Y1]and x2:[X2]y2:[Y2]',
                    arguments: {
                        X1: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        Y1: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        X2: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        Y2: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        }
                    }
                },
                { //查找子字符串，从pos开始
                    opcode: 'indexof',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'position of[substr]in[str],start from[pos]',
                    arguments: {
                        str: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'banana'
                        },
                        substr: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'na'
                        },
                        pos: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 1
                        }
                    }
                },
                { //在字符串中插入子字符串
                    opcode: 'insertStr',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'insert[substr]at[pos]of[str]',
                    arguments: {
                        str: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'ac'
                        },
                        substr: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'b'
                        },
                        pos: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 2
                        }
                    }
                },
                { //替换字符串中的从..到..的字符串
                    opcode: 'replaceStr',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'replace from[start]to[end]of[str],with[substr]',
                    arguments: {
                        str: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'ABCDEF'
                        },
                        substr: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'XX'
                        },
                        start: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 3
                        },
                        end: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 4
                        }
                    }
                }
                // { //朝..方向旋转..角度
                //    opcode: 'turnDegreesToDir',
                //    blockType: Scratch.BlockType.COMMAND,
                //    text: 'turn[degree]degrees toward direction[dir]',
                //    arguments: {
                //        degree: {
                //            type: Scratch.ArgumentType.NUMBER,
                //            defaultValue: 0
                //        },
                //        dir: {
                //            type: Scratch.ArgumentType.ANGLE,
                //            defaultValue: 0
                //        }
                //    }
                // }
            ],

            translation_map: {
                'zh-cn': {
                  'ArkosExt.extensionName': 'Arkosの拓展',
                  'ArkosExt.stringEquality': '(区分大小写)[ONE]=[TWO]',
                  'ArkoExt.directionFromAtoB': '点x1:[X1]y1:[Y1]朝向点x2:[X2]y2:[Y2]的方向',
                  'ArkoExt.diffenceBetweenDirections': '由方向1[a]到方向2[b]的角度差',
                  'ArkoExt.distence': '点x1:[X1]y1:[Y1]到点x2:[X2]y2:[Y2]的距离',
                  'ArkoExt.searchString': '在[str]中查找[substr]的位置(从位置[pos]开始找)',
                  'ArkoExt.insertString': '在[str]的第[pos]个字符前插入[substr]',
                  'ArkoExt.replaceString': '将[str]中的第[start]个到第[end]个字符,替换为[substr]',
                },
                
                en: {
                  'ArkosExt.extensionName': 'Arkos\' Extensions',
                  'ArkosExt.stringEquality': '(case sensitive)[ONE]=[TWO]',
                  'ArkoExt.directionFromAtoB': 'direction from x1:[X1]y1:[Y1]to x2:[X2]y2:[Y2]',
                  'ArkoExt.diffenceBetweenDirections': 'direction[b] minus direction[a]',
                  'ArkoExt.distence': 'distence betweem x1:[X1]y1:[Y1]and x2:[X2]y2:[Y2]',
                  'ArkoExt.searchString': 'position of[substr]in[str],start from[pos]',
                  'ArkoExt.insertString': 'insert[substr]at[pos]of[str]',
                  'ArkoExt.replaceString': 'replace from[start]to[end]of[str],with[substr]',
                },
              }
        };

    }
    strictlyEquals(args) {
        // Note strict equality: Inputs must match exactly: in type, case, etc.
        return args.ONE === args.TWO;
    }

    numGreaterThen(args) {
        return args.ONE > args.TWO;
    }

    getDirFromAToB(args) {
        const { X1, X2, Y1, Y2 } = args;
        let a = Math.atan((X2 - X1) / (Y2 - Y1)) / Math.PI * 180.0;
        if (Y1 < Y2)
            return a;
        else if (Y1 > Y2) {
            a += 180;
            if (a > 180.0)
                a -= 360.0;
            return a;
        }
        else if (X2 > X1)
            return 90;
        else if (X2 < X1)
            return -90;
        else
            return NaN;
    }

    differenceBetweenDirections(args) {
        const { a, b } = args;
        let dif = (b - a) % 360;
        if (dif > 180)
            dif -= 360;
        return dif;
    }

    disFromAToB(args) {
        const { X1, X2, Y1, Y2 } = args;
        return Math.sqrt((X1 - X2) * (X1 - X2) + (Y1 - Y2) * (Y1 - Y2));
    }

    indexof(args) {
        const { str, substr, pos } = args;
        let a = str.indexOf(substr, pos-1);
        if (a == -1) return '';
        else return a+1;
    }

    insertStr(args) {
        let { str, substr, pos } = args;
        pos -= 1;
        if (pos < 0) pos = 0;
        return str.slice(0, pos) + substr + str.slice(pos);
    }

    replaceStr(args) {
        let { str, substr, start,end } = args;
        if (start > end) {
            let t = end;
            end = start;
            start = t;
        }
        if (start < 1) start = 1;
        return str.slice(0, start-1) + substr + str.slice(end);
    }

    turnDegreesToDir(args ,util) {
        //
        //util.target.setDirection(util.target.direction + degrees);
        console.log('---util-------------\n',util);
        console.log('---args-------------\n',args);
        console.log('---runtime-------------\n',this.runtime);
    }

}
Scratch.extensions.register(new ArkosExtensions());