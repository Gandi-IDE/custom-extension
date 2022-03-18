class StrictEqualityExtension {
    getInfo() {
        return {
            id: 'strictequalityexample', // change this if you make an actual extension! ccw_À©Õ¹Ãû
            name: 'Strict Equality',
            blocks: [
                {
                    opcode: 'strictlyEquals',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[ONE] strictly equals [TWO]',
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'First value'
                        },
                        TWO: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'Second value'
                        }
                    }
                },
                {
                    opcode: 'numGreaterThen',
                    blockType: Scratch.BlockType.BOOLEAN,
                    text: '[ONE] > [TWO]',
                    arguments: {
                        ONE: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: 0
                        },
                        TWO: {
                            type: Scratch.ArgumentType.NUMBER,
                            defaultValue: ''
                        }
                    }
                },
                {
                    opcode: 'getDirFromAToB',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'getDirFromA[X1][Y1]ToB[X2][Y2]',
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
                }
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
        const { X1, X2, Y1, Y2 } = args
        if (Y1 < Y2)
            return Math.atan((X2 - X1) / (Y2 - Y1)) / Math.PI * 180;
        else if (Y1 > Y2) {
            let a = 180.0 + Math.atan((X2 - X1) / (Y2 - Y1)) / Math.PI * 180.0;
            if (a > 180.0)
                a -= 360.0;
            return a;
        }
        else if (X2 > X1)
            return 90;
        else if (X2 < X1)
            return -90;
        else
            return 'NaN';
    }

}
Scratch.extensions.register(new StrictEqualityExtension());