const icon='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI2MDAuMTA4MDgiIGhlaWdodD0iMzcxLjIyOTY1IiB2aWV3Qm94PSIwLDAsNjAwLjEwODA4LDM3MS4yMjk2NSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE5Ljk0NTk2LDUuNjE0ODIpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTE5Ljk0NTk2LDM2NS42MTQ4M3YtMzcxLjIyOTY1aDYwMC4xMDgwOHYzNzEuMjI5NjV6IiBmaWxsPSIjYzBiYmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48Zz48cGF0aCBkPSJNMTU1LjUxNTg1LDEwNC4yOTQxMmMwLC0xMi4xNzUwNSAwLC01My4wNjg0NiAwLC03NC41ODM5YzAsLTguNTc2MTIgNS41MTUsLTEzLjQ5NDQ5IDE0LjA5MTEyLC0xMy40OTQ0OWMyMi4yMTYyMywwIDY0LjA2NDc3LDAgNzUuNzc3MjcsMGM3LjU4NjYsMCAxMi4zMDExMiw1LjMxMTE0IDEyLjMwMTEyLDEyLjg5NzhjMCwxMS45NDcwMyAwLDUzLjkwMzcxIDAsNzUuNzc3MjFjMCw3Ljg5NzU5IC00LjQwMzUyLDEzLjQ5NDQ5IC0xMi4zMDExMiwxMy40OTQ0OWMtMTEuOTI1NjQsMCAtNTUuMDk0NDQsMCAtNzYuOTcwNTksMGMtNy44MDM2NSwwIC0xMi44OTc4LC0xNC4wOTExMiAtMTIuODk3OCwtMTQuMDkxMTJ6IiBmaWxsPSIjODg4MGZmIiBzdHJva2U9IiM5Zjk4ZmYiIHN0cm9rZS13aWR0aD0iNy41IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0xODguODY5OTgsNTkuMzc4MzVjMCwwIDEyLjIwMDI5LC0yNy4zMzg3MiAyMC4zNzEzNCwtMjEuMTI1ODljMTQuNzQ1OTgsMTEuMjEyMSAtMC4zNzcyNCw2Mi4yNDU4NyAtMC4zNzcyNCw2Mi4yNDU4NyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDRkMWZmIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PGcgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiPjxwYXRoIGQ9Ik0yNjguOTE1MjUsMjE2Ljk5MzZjMCwtMTIuMTc1MTEgMCwtNTMuMDY4NDYgMCwtNzQuNTgzOWMwLC04LjU3NjEyIDUuNTE1MDcsLTEzLjQ5NDQ5IDE0LjA5MTEyLC0xMy40OTQ0OWMyMi4yMTYyMywwIDY0LjA2NDcxLDAgNzUuNzc3MjEsMGM3LjU4NjYsMCAxMi4zMDExMiw1LjMxMTE0IDEyLjMwMTEyLDEyLjg5NzhjMCwxMS45NDcwMyAwLDUzLjkwMzc3IDAsNzUuNzc3MjFjMCw3Ljg5NzUzIC00LjQwMzU5LDEzLjQ5NDQ5IC0xMi4zMDExMiwxMy40OTQ0OWMtMTEuOTI1NywwIC01NS4wOTQ0NCwwIC03Ni45NzA1OSwwYy03LjgwMzY1LDAgLTEyLjg5NzgsLTE0LjA5MTEyIC0xMi44OTc4LC0xNC4wOTExMnoiIGZpbGw9IiM4ODgwZmYiIHN0cm9rZT0iIzlmOThmZiIgc3Ryb2tlLXdpZHRoPSI3LjUiLz48cGF0aCBkPSJNMzQyLjIwNTMyLDE4MC4wMDAwM2MwLDE5LjY3Mjk0IC01LjAzNzQ0LDM1LjYyMSAtMjIuMjA1MzIsMzUuNjIxYy0xNi4wMzYxNSwwIC0yMi4yMDUzMiwtMTUuOTQ4MDcgLTIyLjIwNTMyLC0zNS42MjFjMCwtMTkuNjcyOTQgNS40MTQ2OCwtMzUuNjIxIDIyLjIwNTMyLC0zNS42MjFjMTcuNTQ1MTMsMCAyMi4yMDUzMiwxNS45NDgwNyAyMi4yMDUzMiwzNS42MjF6IiBmaWxsPSJub25lIiBzdHJva2U9IiNkNGQxZmYiIHN0cm9rZS13aWR0aD0iMTAiLz48L2c+PGc+PHBhdGggZD0iTTM4Mi4zMTQ2NCwzMjkuNjkzMTVjMCwtMTIuMTc1MDUgMCwtNTMuMDY4NDYgMCwtNzQuNTgzOWMwLC04LjU3NjEyIDUuNTE1MDcsLTEzLjQ5NDQ5IDE0LjA5MTEyLC0xMy40OTQ0OWMyMi4yMTYyMywwIDY0LjA2NDc3LDAgNzUuNzc3MjcsMGM3LjU4NjYsMCAxMi4zMDExMiw1LjMxMTE0IDEyLjMwMTEyLDEyLjg5NzhjMCwxMS45NDcwMyAwLDUzLjkwMzcxIDAsNzUuNzc3MjFjMCw3Ljg5NzU5IC00LjQwMzUyLDEzLjQ5NDQ5IC0xMi4zMDExMiwxMy40OTQ0OWMtMTEuOTI1NjQsMCAtNTUuMDk0NSwwIC03Ni45NzA1OSwwYy03LjgwMzY1LDAgLTEyLjg5NzgsLTE0LjA5MTEyIC0xMi44OTc4LC0xNC4wOTExMnoiIGZpbGw9IiM4ODgwZmYiIHN0cm9rZT0iIzlmOThmZiIgc3Ryb2tlLXdpZHRoPSI3LjUiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTQxNS42Njg3MSwyODQuNzc3MzJjMCwwIDEyLjIwMDI5LC0yNy4zMzg3MiAyMC4zNzEzNCwtMjEuMTI1ODljMTQuNzQ1OTgsMTEuMjEyMSAtMC4zNzcyNCw2Mi4yNDU4NyAtMC4zNzcyNCw2Mi4yNDU4NyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDRkMWZmIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PC9nPjwvZz48L3N2Zz4=';
const insetIcon='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI3OS44MjM0IiBoZWlnaHQ9Ijc5LjgyMzQiIHZpZXdCb3g9IjAsMCw3OS44MjM0LDc5LjgyMzQiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yODAuMDg4MywtMTQwLjA4ODMpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTI4MC4wODgzLDE4MGMwLC0yMi4wNDI2MyAxNy44NjkwOCwtMzkuOTExNyAzOS45MTE3LC0zOS45MTE3YzIyLjA0MjYyLDAgMzkuOTExNywxNy44NjkwNyAzOS45MTE3LDM5LjkxMTdjMCwyMi4wNDI2MyAtMTcuODY5MDgsMzkuOTExNyAtMzkuOTExNywzOS45MTE3Yy0yMi4wNDI2MiwwIC0zOS45MTE3LC0xNy44NjkwNyAtMzkuOTExNywtMzkuOTExN3oiIGZpbGw9IiNjMGJiZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSJOYU4iIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PGcgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0iYnV0dCI+PHBhdGggZD0iTTMxMS45MDM1MSwxODUuODYzMTZjMCwtMS45Mjk2NSAwLC04LjQxMDg5IDAsLTExLjgyMDljMCwtMS4zNTkyNCAwLjg3NDA5LC0yLjEzODc2IDIuMjMzMzIsLTIuMTM4NzZjMy41MjEwOCwwIDEwLjE1MzcsMCAxMi4wMTAwMywwYzEuMjAyNDEsMCAxLjk0OTYyLDAuODQxNzcgMS45NDk2MiwyLjA0NDE5YzAsMS44OTM1IDAsOC41NDMyOCAwLDEyLjAxMDAzYzAsMS4yNTE2OSAtMC42OTc5MywyLjEzODc2IC0xLjk0OTYyLDIuMTM4NzZjLTEuODkwMTIsMCAtOC43MzE5OSwwIC0xMi4xOTkxNywwYy0xLjIzNjgxLDAgLTIuMDQ0MTksLTIuMjMzMzIgLTIuMDQ0MTksLTIuMjMzMzJ6IiBmaWxsPSIjODg4MGZmIiBzdHJva2U9IiM5Zjk4ZmYiLz48cGF0aCBkPSJNMzIzLjUxOTM1LDE4MGMwLDMuMTE3OTkgLTAuNzk4MzksNS42NDU2MiAtMy41MTkzNSw1LjY0NTYyYy0yLjU0MTU5LDAgLTMuNTE5MzUsLTIuNTI3NjMgLTMuNTE5MzUsLTUuNjQ1NjJjMCwtMy4xMTc5OSAwLjg1ODE4LC01LjY0NTYyIDMuNTE5MzUsLTUuNjQ1NjJjMi43ODA3NSwwIDMuNTE5MzUsMi41Mjc2MyAzLjUxOTM1LDUuNjQ1NjJ6IiBmaWxsPSJub25lIiBzdHJva2U9IiNkNGQxZmYiLz48L2c+PGcgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJNMjkzLjkzMDY5LDE2OC4wMDEyN2MwLC0xLjkyOTY0IDAsLTguNDEwODkgMCwtMTEuODIwOWMwLC0xLjM1OTI0IDAuODc0MDgsLTIuMTM4NzYgMi4yMzMzMiwtMi4xMzg3NmMzLjUyMTA4LDAgMTAuMTUzNzEsMCAxMi4wMTAwNCwwYzEuMjAyNDEsMCAxLjk0OTYyLDAuODQxNzcgMS45NDk2MiwyLjA0NDE5YzAsMS44OTM1IDAsOC41NDMyNyAwLDEyLjAxMDAzYzAsMS4yNTE3IC0wLjY5NzkyLDIuMTM4NzYgLTEuOTQ5NjIsMi4xMzg3NmMtMS44OTAxMSwwIC04LjczMTk5LDAgLTEyLjE5OTE3LDBjLTEuMjM2ODEsMCAtMi4wNDQxOSwtMi4yMzMzMiAtMi4wNDQxOSwtMi4yMzMzMnoiIGZpbGw9IiM4ODgwZmYiIHN0cm9rZT0iIzlmOThmZiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjk5LjIxNzAzLDE2MC44ODI1MWMwLDAgMS45MzM2NCwtNC4zMzI5NSAzLjIyODY4LC0zLjM0ODI3YzIuMzM3MTEsMS43NzcwMiAtMC4wNTk3OSw5Ljg2NTQzIC0wLjA1OTc5LDkuODY1NDMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Q0ZDFmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PC9nPjxnIHN0cm9rZS13aWR0aD0iMiI+PHBhdGggZD0iTTMyOS44NzYzMywyMDMuNzI1MDZjMCwtMS45Mjk2NCAwLC04LjQxMDg5IDAsLTExLjgyMDljMCwtMS4zNTkyNCAwLjg3NDA5LC0yLjEzODc2IDIuMjMzMzIsLTIuMTM4NzZjMy41MjEwOCwwIDEwLjE1MzcxLDAgMTIuMDEwMDQsMGMxLjIwMjQxLDAgMS45NDk2MiwwLjg0MTc3IDEuOTQ5NjIsMi4wNDQxOWMwLDEuODkzNSAwLDguNTQzMjcgMCwxMi4wMTAwM2MwLDEuMjUxNyAtMC42OTc5MiwyLjEzODc2IC0xLjk0OTYyLDIuMTM4NzZjLTEuODkwMTEsMCAtOC43MzIsMCAtMTIuMTk5MTcsMGMtMS4yMzY4MSwwIC0yLjA0NDE5LC0yLjIzMzMyIC0yLjA0NDE5LC0yLjIzMzMyeiIgZmlsbD0iIzg4ODBmZiIgc3Ryb2tlPSIjOWY5OGZmIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0zMzUuMTYyNjcsMTk2LjYwNjI5YzAsMCAxLjkzMzY0LC00LjMzMjk1IDMuMjI4NjgsLTMuMzQ4MjdjMi4zMzcxMSwxLjc3NzAyIC0wLjA1OTc5LDkuODY1NDMgLTAuMDU5NzksOS44NjU0MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDRkMWZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L2c+PC9nPjwvZz48L3N2Zz4=';

class bitwise_oper {
    constructor(runtime) {
        this.runtime = runtime;
    }
    
    formatMessage(id) {
        return this._formatMessage({
            id,
            default: id,
            description: id,
        })
    }
    getInfo() {
        return {
            id: 'bitwiseoper',
            name: '位运算',
            color1: '#C0BBFF',
            menuIconURI: insetIcon,
            blockIconURI: insetIcon,
            blocks: [
                {
                    opcode: 'and',
                    blockType: 'reporter',
                    text: '[A] & [B]',
                    arguments: {
                        A: {
                            type: 'number',
                            defaultValue: '1'
                        },
                        B: {
                            type: 'number',
                            defaultValue: '1'
                        }
                    }
                },
                {
                    opcode: 'or',
                    blockType: 'reporter',
                    text: '[A] | [B]',
                    arguments: {
                        A: {
                            type: 'number',
                            defaultValue: '1'
                        },
                        B: {
                            type: 'number',
                            defaultValue: '0'
                        }
                    }
                },
                {
                    opcode: 'xor',
                    blockType: 'reporter',
                    text: '[A] ^ [B]',
                    arguments: {
                        A: {
                            type: 'number',
                            defaultValue: '1'
                        },
                        B: {
                            type: 'number',
                            defaultValue: '0'
                        }
                    }
                },
                {
                    opcode: 'not',
                    blockType: 'reporter',
                    text: '~ [A]',
                    arguments: {
                        A: {
                            type: 'number',
                            defaultValue: '0'
                        }
                    }
                },
                {
                    opcode: 'shl',
                    blockType: 'reporter',
                    text: '[A] << [B]',
                    arguments: {
                        A: {
                            type: 'number',
                            defaultValue: '2'
                        },
                        B: {
                            type: 'number',
                            defaultValue: '1'
                        }
                    }
                },
                {
                    opcode: 'shr',
                    blockType: 'reporter',
                    text: '[A] >> [B]',
                    arguments: {
                        A: {
                            type: 'number',
                            defaultValue: '4'
                        },
                        B: {
                            type: 'number',
                            defaultValue: '1'
                        }
                    }
                }
            ]
        };
    }

   and(args) {
        return Number(args.A) & Number(args.B);
    }
   or(args) {
        return Number(args.A) | Number(args.B);
    }
   xor(args) {
        return Number(args.A) ^ Number(args.B);
    }
  not(args) {
        return ~ Number(args.A);
    }
   shl(args) {
        return Number(args.A) << Number(args.B);
    }
   shr(args) {
        return Number(args.A) >> Number(args.B);
    }
}

window.tempExt = {
    Extension: bitwise_oper,
    info: {
        name: 'qxsck.name',
        description: 'qxsck.description',
        extensionId: 'bitwiseoper',
        iconURL: icon,
        insetIconURL: insetIcon,
        featured: true,
        disabled: false,
        collaborator: 'CK七星松@ccw',
    },
    l10n: {
        'zh-cn': {
            'qxsck.name': '位运算',
            'qxsck.description': '位运算',
        },
        en: {
            'qxsck.name': 'Bitwise operation',
            'qxsck.description': 'Bitwise operation',
        },
    },
}
