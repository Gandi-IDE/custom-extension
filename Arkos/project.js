class StrictEqualityExtension {
    getInfo() {
        return {
            id: 'arkosextensions', //拓展id
            name: 'Arkos\' Extensions',  //拓展显示名
            blocks: [
                { //字符串比较
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
                { //计算点到点的方向
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
                { //计算两方向夹角
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
                { //计算两点距离
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
                { //返回字符串中子字符串的位置(从..开始)
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
                { //字符串插入
                    opcode: 'insertStr',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'insert[substr]at[pos]of[str]',
                    arguments: {
                        str: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'I you'
                        },
                        substr: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'like '
                        },
                        pos: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 2
                        }
                    }
                }
                //{ //朝方向...旋转...度数
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
                //}
            ]
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
        const { str, substr, pos } = args;
        pos -= 1;
        if (pos < 0) pos = 0;
        return str.slice(0, pos) + substr + str.slice(pos);
    }

    turnDegreesToDir(args) {
        //怎么调用原版的旋转积木
    }

}
Scratch.extensions.register(new StrictEqualityExtension());