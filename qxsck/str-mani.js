const icon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1OTkuNSIgaGVpZ2h0PSIzNzEuNSIgdmlld0JveD0iMCwwLDU5OS41LDM3MS41Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1OS43NSw1Ljc1KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0tNTgsMzY0di0zNjhoNTk2djM2OHoiIGZpbGw9IiM1M2FhZTciIHN0cm9rZT0iIzUzYWFlNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYjBkNWVlIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjxwYXRoIGQ9Ik0xODguNjUxOCw3OS4wODQ3NWMwLDAgLTUzLjA3MjU4LDEyLjcyMTE5IC00OS42NzE3OSwzNy45ODQzMWMzLjQwMDgzLDI1LjI2MzExIDU2LjQ1OTU1LDkuMjIzNzUgNTkuODk4MzYsMzcuOTg0MzFjMy4zNTExNSwyOC4wMjc3MSAtNTAuMTI3MzYsMzAuMTYwOSAtNTAuMTI3MzYsMzAuMTYwOWMwLDAgLTEuMTYzNzQsLTAuNjExMDEgLTEuNzM1ODUsLTAuOTQyMTciLz48Zz48cGF0aCBkPSJNMjAyLjIyMjA2LDEzNC42MTk2N2MyMS44MTQ4NywtMTUuMDk1OTUgNTUuNDk1NTUsLTEzLjA5MTY5IDY2Ljg3NzY3LDEyLjE3Mzg3IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtvcmlnUm90JnF1b3Q7OjB9Ii8+PHBhdGggZD0iTTI1OC4xOTkyOCwyMDAuOTc3ODRjMCwwIC0yMy4wNjQ3MSw2MC4xNDUwOCAtMjUuMDg4NDUsMTUuMDEyMzRjLTIuMDIzNywtNDUuMTMyNzMgMjAuODgxMzMsLTEwOC44MzkyNyAyMC44ODEzMywtMTA4LjgzOTI3IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtvcmlnUm90JnF1b3Q7OjB9Ii8+PC9nPjxnPjxwYXRoIGQ9Ik0yODMuNjg0MTEsMjgwLjkxNTI1YzAsMCAtMTAuNjY2MiwtNTguOTU4NzggLTQuODgxNDQsLTc4LjY0NTU0YzUuNzg0NzYsLTE5LjY4Njc3IDM4LjUwOTE5LC0zNS43OTcyNyAzOC41MDkxOSwtMzUuNzk3MjciLz48cGF0aCBkPSJNMzQxLjE3NjcxLDIwNC45ODE1OWMwLDAgLTE4LjcxOTczLDE2LjgwMTM1IC0yOC43NTMyOCwxNi41Mjc2OWMtOS44NTA0NywtMC4yNjg2NSAtMzIuMjEwNTUsLTE5LjEzMTE0IC0zMi4yMTA1NSwtMTkuMTMxMTQiLz48L2c+PC9nPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzUzYWFlNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTE4OC42NTE4LDc5LjA4NDc1YzAsMCAtNTMuMDcyNTgsMTIuNzIxMTkgLTQ5LjY3MTc5LDM3Ljk4NDMxYzMuNDAwODMsMjUuMjYzMTEgNTYuNDU5NTUsOS4yMjM3NSA1OS44OTgzNiwzNy45ODQzMWMzLjM1MTE1LDI4LjAyNzcxIC01MC4xMjczNiwzMC4xNjA5IC01MC4xMjczNiwzMC4xNjA5YzAsMCAtMS4xNjM3NCwtMC42MTEwMSAtMS43MzU4NSwtMC45NDIxNyIvPjxnPjxwYXRoIGQ9Ik0yMDIuMjIyMDYsMTM0LjYxOTY3YzIxLjgxNDg3LC0xNS4wOTU5NSA1NS40OTU1NSwtMTMuMDkxNjkgNjYuODc3NjcsMTIuMTczODciIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O29yaWdSb3QmcXVvdDs6MH0iLz48cGF0aCBkPSJNMjU4LjE5OTI4LDIwMC45Nzc4NGMwLDAgLTIzLjA2NDcxLDYwLjE0NTA4IC0yNS4wODg0NSwxNS4wMTIzNGMtMi4wMjM3LC00NS4xMzI3MyAyMC44ODEzMywtMTA4LjgzOTI3IDIwLjg4MTMzLC0xMDguODM5MjciIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O29yaWdSb3QmcXVvdDs6MH0iLz48L2c+PGc+PHBhdGggZD0iTTI4My42ODQxMSwyODAuOTE1MjVjMCwwIC0xMC42NjYyLC01OC45NTg3OCAtNC44ODE0NCwtNzguNjQ1NTRjNS43ODQ3NiwtMTkuNjg2NzcgMzguNTA5MTksLTM1Ljc5NzI3IDM4LjUwOTE5LC0zNS43OTcyNyIvPjxwYXRoIGQ9Ik0zNDEuMTc2NzEsMjA0Ljk4MTU5YzAsMCAtMTguNzE5NzMsMTYuODAxMzUgLTI4Ljc1MzI4LDE2LjUyNzY5Yy05Ljg1MDQ3LC0wLjI2ODY1IC0zMi4yMTA1NSwtMTkuMTMxMTQgLTMyLjIxMDU1LC0xOS4xMzExNCIvPjwvZz48L2c+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6Mjk5Ljc0OTk5OTk5OTk5OTgzOjE4NS43NS0tPg==';
const insetIcon = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI3OS44IiBoZWlnaHQ9Ijc5LjgiIHZpZXdCb3g9IjAsMCw3OS44LDc5LjgiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDAuMSwtMTQwLjEpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTIwMS44NSwxODBjMCwtMjEuMDY5NjYgMTcuMDgwMzQsLTM4LjE1IDM4LjE1LC0zOC4xNWMyMS4wNjk2NiwwIDM4LjE1LDE3LjA4MDM0IDM4LjE1LDM4LjE1YzAsMjEuMDY5NjYgLTE3LjA4MDM0LDM4LjE1IC0zOC4xNSwzOC4xNWMtMjEuMDY5NjYsMCAtMzguMTUsLTE3LjA4MDM0IC0zOC4xNSwtMzguMTV6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNiMGQ1ZWUiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2IwZDVlZSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjxwYXRoIGQ9Ik0yMjUuOTUzNzksMTUyLjM5NDgxYzAsMCAtMTQuNTE3OTEsMy40Nzk4NiAtMTMuNTg3NjMsMTAuMzkwNTRjMC45MzAyOSw2LjkxMDY4IDE1LjQ0NDQxLDIuNTIzMTQgMTYuMzg1MDksMTAuMzkwNTRjMC45MTY3LDcuNjY2OTMgLTEzLjcxMjI1LDguMjUwNDYgLTEzLjcxMjI1LDguMjUwNDZjMCwwIC0wLjMxODM0LC0wLjE2NzE0IC0wLjQ3NDg0LC0wLjI1NzczIi8+PGc+PHBhdGggZD0iTTIyOS42NjU5MSwxNjcuNTg2MjljNS45Njc0MiwtNC4xMjk0NyAxNS4xODA3MSwtMy41ODEyMSAxOC4yOTQyNywzLjMzMDE0IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtvcmlnUm90JnF1b3Q7OjB9Ii8+PHBhdGggZD0iTTI0NC45NzgzOCwxODUuNzM4NDVjMCwwIC02LjMwOTMxLDE2LjQ1MjU4IC02Ljg2MjksNC4xMDY2Yy0wLjU1MzU4LC0xMi4zNDU5OCA1LjcxMjA1LC0yOS43NzI3OSA1LjcxMjA1LC0yOS43NzI3OSIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7b3JpZ1JvdCZxdW90OzowfSIvPjwvZz48Zz48cGF0aCBkPSJNMjUxLjk0OTcxLDIwNy42MDUxOWMwLDAgLTIuOTE3NzIsLTE2LjEyODA3IC0xLjMzNTMxLC0yMS41MTMzNWMxLjU4MjQxLC01LjM4NTI4IDEwLjUzNDEyLC05Ljc5MjI4IDEwLjUzNDEyLC05Ljc5MjI4Ii8+PHBhdGggZD0iTTI2Ny42NzY3MSwxODYuODMzNjdjMCwwIC01LjEyMDc1LDQuNTk1OTggLTcuODY1NDEsNC41MjExMmMtMi42OTQ1OCwtMC4wNzM0OSAtOC44MTExNCwtNS4yMzMyOSAtOC44MTExNCwtNS4yMzMyOSIvPjwvZz48L2c+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNTNhYWU3IiBzdHJva2Utd2lkdGg9IjAuNzUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTIyNS45NTM3OSwxNTIuMzk0ODFjMCwwIC0xNC41MTc5MSwzLjQ3OTg2IC0xMy41ODc2MywxMC4zOTA1NGMwLjkzMDI5LDYuOTEwNjggMTUuNDQ0NDEsMi41MjMxNCAxNi4zODUwOSwxMC4zOTA1NGMwLjkxNjcsNy42NjY5MyAtMTMuNzEyMjUsOC4yNTA0NiAtMTMuNzEyMjUsOC4yNTA0NmMwLDAgLTAuMzE4MzQsLTAuMTY3MTQgLTAuNDc0ODQsLTAuMjU3NzMiLz48Zz48cGF0aCBkPSJNMjI5LjY2NTkxLDE2Ny41ODYyOWM1Ljk2NzQyLC00LjEyOTQ3IDE1LjE4MDcxLC0zLjU4MTIxIDE4LjI5NDI3LDMuMzMwMTQiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O29yaWdSb3QmcXVvdDs6MH0iLz48cGF0aCBkPSJNMjQ0Ljk3ODM4LDE4NS43Mzg0NWMwLDAgLTYuMzA5MzEsMTYuNDUyNTggLTYuODYyOSw0LjEwNjZjLTAuNTUzNTgsLTEyLjM0NTk4IDUuNzEyMDUsLTI5Ljc3Mjc5IDUuNzEyMDUsLTI5Ljc3Mjc5IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtvcmlnUm90JnF1b3Q7OjB9Ii8+PC9nPjxnPjxwYXRoIGQ9Ik0yNTEuOTQ5NzEsMjA3LjYwNTE5YzAsMCAtMi45MTc3MiwtMTYuMTI4MDcgLTEuMzM1MzEsLTIxLjUxMzM1YzEuNTgyNDEsLTUuMzg1MjggMTAuNTM0MTIsLTkuNzkyMjggMTAuNTM0MTIsLTkuNzkyMjgiLz48cGF0aCBkPSJNMjY3LjY3NjcxLDE4Ni44MzM2N2MwLDAgLTUuMTIwNzUsNC41OTU5OCAtNy44NjU0MSw0LjUyMTEyYy0yLjY5NDU4LC0wLjA3MzQ5IC04LjgxMTE0LC01LjIzMzI5IC04LjgxMTE0LC01LjIzMzI5Ii8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjozOS45MDAwMDAwMDAwMDAxMjozOS44OTk5OTk5OTk5OTk5OC0tPg==';

const extID = 'strmani';

class str_mani {
  constructor(runtime) {
    this.runtime = runtime;
    this._formatMessage = runtime.getFormatMessage({
      'zh-cn': {
        'qxsckstrmani.name': '字符串处理',

        'qxsckstrmani.first': '第一个',
        'qxsckstrmani.all': '所有',

        'qxsckstrmani.upper': '大写',
        'qxsckstrmani.lower': '小写',

        'qxsckstrmani.start': '开头',
        'qxsckstrmani.end': '末尾',

        'qxsckstrmani.email': '邮箱',
        'qxsckstrmani.website': '网址',

        'qxsckstrmani.length': '[STR] 的长度',//hide
        'qxsckstrmani.strictlyequal': '[STR] === [STR2]',
        'qxsckstrmani.reversal': '反转 [STR]',
        'qxsckstrmani.strPalindrome': '[STR] 对称吗？',
        'qxsckstrmani.indexOf': '从 [STR] 的第 [NUM] 个字符开始寻找第一个 [STR2]',
        'qxsckstrmani.indexOfCount': '从 [STR] 的第 [NUM] 个字符开始寻找第 [NUM2] 个 [STR2]',
        'qxsckstrmani.lastIndexOf': '从 [STR] 的第 [NUM] 个字符开始往前寻找最后一个 [STR2]',
        'qxsckstrmani.indexOfDefault': '从 [STR] 开头寻找第一个 [STR2]',
        'qxsckstrmani.indexOfCountDefault': '从 [STR] 开头寻找第 [NUM2] 个 [STR2]',
        'qxsckstrmani.lastIndexOfDefault': '从 [STR] 末尾开始往前寻找最后一个 [STR2]',
        'qxsckstrmani.charAt': '[STR] 的第 [NUM] 个字符',
        'qxsckstrmani.slicetwo': '[STR] 的第 [NUM1] 到 [NUM2] 位的字符串',
        'qxsckstrmani.sliceone': '[STR] 的第 [NUM] 位开始的内容',
        'qxsckstrmani.substr': '[STR] 的第 [NUM1] 个字符开始长度为 [NUM2] 的子串',

        'qxsckstrmani.replace': '替把 [STR] 的第一个 [STR2] 为 [STR3]',//hide
        'qxsckstrmani.replaceAll': '替把 [STR] 的所有 [STR2] 为 [STR3]',//hide
        'qxsckstrmani.replaceType': '替换 [STR] 的 [TYPE] [STR2] 为 [STR3]',
        'qxsckstrmani.replacestrIndex': '替换 [STR] 的第 [INDEX] 个 [STR2] 为 [STR3]',
        'qxsckstrmani.getStrNumInStr': '[STR2] 在 [STR] 的数量',

        'qxsckstrmani.toUpperCase': '将 [STR] 转为大写',//hide
        'qxsckstrmani.toLowerCase': '将 [STR] 转为小写',//hide
        'qxsckstrmani.toggleCase': '将 [STR] 转为 [TYPE]',

        'qxsckstrmani.padStart': '在 [STR] 开头填充 [STR2] 到长度为 [NUM]',//hide
        'qxsckstrmani.padEnd': '在 [STR] 结尾填充 [STR2] 到长度为 [NUM]',//hide
        'qxsckstrmani.padType': '在 [STR] [TYPE] 填充 [STR2] 到长度为 [NUM]',

        'qxsckstrmani.titleCase': '大写 [STR] 中每个单词的首字母',

        'qxsckstrmani.includes': '[STR] 包括 [STR2] ？',
        'qxsckstrmani.includesNum': '[STR] 的第 [NUM] 个字符开始包括 [STR2] ？',

        'qxsckstrmani.startsWith': '[STR] 以 [STR2] 开头？',//hide
        'qxsckstrmani.endsWith': '[STR] 以 [STR2] 结尾？',//hide
        'qxsckstrmani.typeWith': '[STR] 以 [STR2] [TYPE] ？',

        'qxsckstrmani.splittojson': '用 [STR2] 分割 [STR]，并返回json',
        'qxsckstrmani.split': '用 [STR2] 分割 [STR]，并返回',
        'qxsckstrmani.splitid': '用 [STR2] 分割 [STR]，并返回第 [ID] 项',
        'qxsckstrmani.splitlength': '用 [STR2] 分割 [STR] 后的项数',

        'qxsckstrmani.strIsAvailable': '[STR] 是有效 [CLASS]？',

        'qxsckstrmani.fillStart': '在 [STR] 的开头填充 [NUM] 个 [STR2]',//hide
        'qxsckstrmani.fillEnd': '在 [STR] 的末尾填充 [NUM] 个 [STR2]',//hide
        'qxsckstrmani.fillType': '在 [STR] 的 [TYPE] 填充 [NUM] 个 [STR2]',

        'qxsckstrmani.repeatString': '重复 [NUM] 个 [STR]',

        'qxsckstrmani.deleteSpace': '删除 [STR] 两边的空格',
        'qxsckstrmani.replaceIndex': '替换 [STR] 第 [NUM] 个字符为 [STR2]',
        'qxsckstrmani.replaceIndexs': '替换 [STR] 第 [NUM] 到 [NUM2] 个字符为 [STR2]',
        'qxsckstrmani.deleteIndex': '删除 [STR] 第 [NUM] 个字符',
        'qxsckstrmani.deleteIndexs': '删除 [STR] 第 [NUM] 到 [NUM2] 个字符',
        'qxsckstrmani.insertIndex': '在 [STR] 第 [NUM] 个字符前插入 [STR2]',

        'qxsckstrmani.splitStringWidth': '把字体是 [FONT] 的字符串 [STR] 按每 [WIDTH] 宽度分割',
        'qxsckstrmani.splitStringLength': '把字符串 [STR] 按每 [LENGTH] 个字符分割',
      },
      en: {
        'qxsckstrmani.name': 'String proces',

        'qxsckstrmani.first': 'first',
        'qxsckstrmani.all': 'all',

        'qxsckstrmani.upper': 'uppercase',
        'qxsckstrmani.lower': 'lowercase',

        'qxsckstrmani.start': 'beginning',
        'qxsckstrmani.end': 'end',

        'qxsckstrmani.email': 'e-mail address',
        'qxsckstrmani.website': 'website link',

        'qxsckstrmani.length': 'length of [STR]',//hide
        'qxsckstrmani.strictlyequal': '[STR] === [STR2]',
        'qxsckstrmani.reversal': 'reverse [STR]',
        'qxsckstrmani.strPalindrome': 'is [STR] a palindrome?',
        'qxsckstrmani.indexOf': 'find the position of first [STR2] in [STR] starting [NUM]',
        'qxsckstrmani.indexOfCount': 'find the position of the [NUM2] th [STR2] in [STR] starting [NUM]',
        'qxsckstrmani.lastIndexOf': 'find forward the position of last [STR2] in [STR] starting [NUM]',
        'qxsckstrmani.indexOfDefault': 'find the position of first [STR2] in [STR] from starting',
        'qxsckstrmani.indexOfCountDefault': 'find the position of the [NUM2] th [STR2] in [STR] from starting',
        'qxsckstrmani.lastIndexOfDefault': 'find forward the position of last [STR2] in [STR] from end',
        'qxsckstrmani.charAt': 'letter [NUM] of [STR]',
        'qxsckstrmani.slicetwo': 'letter [NUM1] to [NUM2] of [STR]',
        'qxsckstrmani.sliceone': 'letter start [NUM] of [STR]',
        'qxsckstrmani.substr': 'substr from [STR] start [NUM1] with length [NUM2]',

        'qxsckstrmani.replace': 'replace first [STR2] in [STR] with [STR3]',
        'qxsckstrmani.replaceAll': 'replace all [STR2] in [STR] with [STR3]',
        'qxsckstrmani.replaceType': 'replace [TYPE] [STR2] in [STR] with [STR3]',
        'qxsckstrmani.replacestrIndex': 'replace the [STR2] of [INDEX] in [STR] with [STR3]',
        'qxsckstrmani.getStrNumInStr': 'numbers of [STR2] in [STR]',

        'qxsckstrmani.toUpperCase': 'convert [STR] to uppercase',//hide
        'qxsckstrmani.toLowerCase': 'convert [STR] to lowercase',//hide
        'qxsckstrmani.toggleCase': 'convert [STR] to [TYPE]',

        'qxsckstrmani.padStart': 'pad [STR] with [STR2] at the beginning until length is [NUM]',//hide
        'qxsckstrmani.padEnd': 'pad [STR] with [STR2] at the end until length is [NUM]',//hide
        'qxsckstrmani.padType': 'pad [STR] with [STR2] at the [TYPE] until length is [NUM]',

        'qxsckstrmani.titleCase': 'uppercase the letter first of each word in [STR]',

        'qxsckstrmani.includes': 'is [STR] include [STR2] ?',
        'qxsckstrmani.includesNum': 'starting from character [NUM] in [STR], is include [STR2] ?',

        'qxsckstrmani.startsWith': 'is [STR] beginning with [STR2] ?',//hide
        'qxsckstrmani.endsWith': 'is [STR] end with [STR2] ?',//hide
        'qxsckstrmani.typeWith': 'is [STR] [TYPE] with [STR2] ?',

        'qxsckstrmani.splittojson': 'split [STR] by [STR2] and return as JSON',
        'qxsckstrmani.split': 'split [STR] by [STR2] and return',
        'qxsckstrmani.splitid': 'split [STR] by [STR2] and return item [ID]',
        'qxsckstrmani.splitlength': 'split [STR] by [STR2] and return it length',

        'qxsckstrmani.strIsAvailable': 'is [STR] a valid [CLASS] ?',

        'qxsckstrmani.fillStart': 'pad the beginning of [STR] with [NUM] times of [STR2]',//hide
        'qxsckstrmani.fillEnd': 'pad the end of [STR] with [NUM] times of [STR2] ',//hide
        'qxsckstrmani.fillType': 'pad the [TYPE] of [STR] with [NUM] times of [STR2]',

        'qxsckstrmani.repeatString': '[NUM] times of [STR]',
        'qxsckstrmani.deleteSpace': 'trim spaces from both sides of [STR]',
        'qxsckstrmani.replaceIndex': 'replace letter [NUM] of [STR] to [STR2]',
        'qxsckstrmani.replaceIndexs': 'replace letter [NUM] to [NUM2] of [STR] to [STR2]',
        'qxsckstrmani.deleteIndex': 'delete letter [NUM] of [STR]',
        'qxsckstrmani.deleteIndexs': 'delete letter [NUM] to [NUM2] of [STR]',
        'qxsckstrmani.insertIndex': 'insert [STR2] before letter [NUM] of [STR]',
        'qxsckstrmani.splitStringWidth': 'split [STR] by width per [WIDTH] in font [FONT]',
        'qxsckstrmani.splitStringLength': 'split [STR] by every [LENGTH] character',
      },
    });
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
      id: extID,
      name: this.formatMessage('qxsckstrmani.name'),
      color1: '#53aae7',
      color2: '#53aae7',
      menuIconURI: 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI3OS44IiBoZWlnaHQ9Ijc5LjgiIHZpZXdCb3g9IjAsMCw3OS44LDc5LjgiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDAuMSwtMTQwLjEpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTIwMS44NSwxODBjMCwtMjEuMDY5NjYgMTcuMDgwMzQsLTM4LjE1IDM4LjE1LC0zOC4xNWMyMS4wNjk2NiwwIDM4LjE1LDE3LjA4MDM0IDM4LjE1LDM4LjE1YzAsMjEuMDY5NjYgLTE3LjA4MDM0LDM4LjE1IC0zOC4xNSwzOC4xNWMtMjEuMDY5NjYsMCAtMzguMTUsLTE3LjA4MDM0IC0zOC4xNSwtMzguMTV6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNiMGQ1ZWUiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2IwZDVlZSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjxwYXRoIGQ9Ik0yMjUuOTUzNzksMTUyLjM5NDgxYzAsMCAtMTQuNTE3OTEsMy40Nzk4NiAtMTMuNTg3NjMsMTAuMzkwNTRjMC45MzAyOSw2LjkxMDY4IDE1LjQ0NDQxLDIuNTIzMTQgMTYuMzg1MDksMTAuMzkwNTRjMC45MTY3LDcuNjY2OTMgLTEzLjcxMjI1LDguMjUwNDYgLTEzLjcxMjI1LDguMjUwNDZjMCwwIC0wLjMxODM0LC0wLjE2NzE0IC0wLjQ3NDg0LC0wLjI1NzczIi8+PGc+PHBhdGggZD0iTTIyOS42NjU5MSwxNjcuNTg2MjljNS45Njc0MiwtNC4xMjk0NyAxNS4xODA3MSwtMy41ODEyMSAxOC4yOTQyNywzLjMzMDE0IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtvcmlnUm90JnF1b3Q7OjB9Ii8+PHBhdGggZD0iTTI0NC45NzgzOCwxODUuNzM4NDVjMCwwIC02LjMwOTMxLDE2LjQ1MjU4IC02Ljg2MjksNC4xMDY2Yy0wLjU1MzU4LC0xMi4zNDU5OCA1LjcxMjA1LC0yOS43NzI3OSA1LjcxMjA1LC0yOS43NzI3OSIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7b3JpZ1JvdCZxdW90OzowfSIvPjwvZz48Zz48cGF0aCBkPSJNMjUxLjk0OTcxLDIwNy42MDUxOWMwLDAgLTIuOTE3NzIsLTE2LjEyODA3IC0xLjMzNTMxLC0yMS41MTMzNWMxLjU4MjQxLC01LjM4NTI4IDEwLjUzNDEyLC05Ljc5MjI4IDEwLjUzNDEyLC05Ljc5MjI4Ii8+PHBhdGggZD0iTTI2Ny42NzY3MSwxODYuODMzNjdjMCwwIC01LjEyMDc1LDQuNTk1OTggLTcuODY1NDEsNC41MjExMmMtMi42OTQ1OCwtMC4wNzM0OSAtOC44MTExNCwtNS4yMzMyOSAtOC44MTExNCwtNS4yMzMyOSIvPjwvZz48L2c+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNTNhYWU3IiBzdHJva2Utd2lkdGg9IjAuNzUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTIyNS45NTM3OSwxNTIuMzk0ODFjMCwwIC0xNC41MTc5MSwzLjQ3OTg2IC0xMy41ODc2MywxMC4zOTA1NGMwLjkzMDI5LDYuOTEwNjggMTUuNDQ0NDEsMi41MjMxNCAxNi4zODUwOSwxMC4zOTA1NGMwLjkxNjcsNy42NjY5MyAtMTMuNzEyMjUsOC4yNTA0NiAtMTMuNzEyMjUsOC4yNTA0NmMwLDAgLTAuMzE4MzQsLTAuMTY3MTQgLTAuNDc0ODQsLTAuMjU3NzMiLz48Zz48cGF0aCBkPSJNMjI5LjY2NTkxLDE2Ny41ODYyOWM1Ljk2NzQyLC00LjEyOTQ3IDE1LjE4MDcxLC0zLjU4MTIxIDE4LjI5NDI3LDMuMzMwMTQiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O29yaWdSb3QmcXVvdDs6MH0iLz48cGF0aCBkPSJNMjQ0Ljk3ODM4LDE4NS43Mzg0NWMwLDAgLTYuMzA5MzEsMTYuNDUyNTggLTYuODYyOSw0LjEwNjZjLTAuNTUzNTgsLTEyLjM0NTk4IDUuNzEyMDUsLTI5Ljc3Mjc5IDUuNzEyMDUsLTI5Ljc3Mjc5IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtvcmlnUm90JnF1b3Q7OjB9Ii8+PC9nPjxnPjxwYXRoIGQ9Ik0yNTEuOTQ5NzEsMjA3LjYwNTE5YzAsMCAtMi45MTc3MiwtMTYuMTI4MDcgLTEuMzM1MzEsLTIxLjUxMzM1YzEuNTgyNDEsLTUuMzg1MjggMTAuNTM0MTIsLTkuNzkyMjggMTAuNTM0MTIsLTkuNzkyMjgiLz48cGF0aCBkPSJNMjY3LjY3NjcxLDE4Ni44MzM2N2MwLDAgLTUuMTIwNzUsNC41OTU5OCAtNy44NjU0MSw0LjUyMTEyYy0yLjY5NDU4LC0wLjA3MzQ5IC04LjgxMTE0LC01LjIzMzI5IC04LjgxMTE0LC01LjIzMzI5Ii8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjozOS45MDAwMDAwMDAwMDAxMjozOS44OTk5OTk5OTk5OTk5OC0tPg==',
      blockIconURI: '',
      docsURI: 'https://learn.ccw.site/article/e6ba96d6-17a4-4f63-b5e1-126acbbb82d4',
      blocks: [
        {
          opcode: 'length',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.length'),
          hideFromPalette: true,
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'string'
            }
          }
        },
        {
          opcode: 'strictlyequal',
          blockType: 'Boolean',
          text: this.formatMessage('qxsckstrmani.strictlyequal'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'Str'
            },
            STR2: {
              type: 'string',
              defaultValue: 'str'
            }
          }
        },
        {
          opcode: 'reversal',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.reversal'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'string'
            }
          }
        },
        {
          opcode: 'strPalindrome',
          blockType: 'Boolean',
          text: this.formatMessage('qxsckstrmani.strPalindrome'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'strrts'
            }
          }
        },
        {
          opcode: 'indexOf',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.indexOf'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'string'
            },
            STR2: {
              type: 'string',
              defaultValue: 'str'
            },
            NUM: {
              type: 'number',
              defaultValue: '1'
            }
          }
        },
        {
          opcode: 'indexOfCount',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.indexOfCount'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'str str'
            },
            STR2: {
              type: 'string',
              defaultValue: 'str'
            },
            NUM: {
              type: 'number',
              defaultValue: '1'
            },
            NUM2: {
              type: 'number',
              defaultValue: '2'
            }
          }
        },
        {
          opcode: 'lastIndexOf',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.lastIndexOf'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'str str'
            },
            STR2: {
              type: 'string',
              defaultValue: 'str'
            },
            NUM: {
              type: 'number',
              defaultValue: '5'
            }
          }
        },
        {
          opcode: 'indexOfDefault',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.indexOfDefault'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'string'
            },
            STR2: {
              type: 'string',
              defaultValue: 'str'
            },
          }
        },
        {
          opcode: 'indexOfCountDefault',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.indexOfCountDefault'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'str str'
            },
            STR2: {
              type: 'string',
              defaultValue: 'str'
            },
            NUM2: {
              type: 'number',
              defaultValue: '1'
            },
          }
        },
        {
          opcode: 'lastIndexOfDefault',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.lastIndexOfDefault'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'str str'
            },
            STR2: {
              type: 'string',
              defaultValue: 'str'
            },
          }
        },
        {
          opcode: 'charAt',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.charAt'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'string'
            },
            NUM: {
              type: 'number',
              defaultValue: '1'
            }
          }
        },
        {
          opcode: 'slicetwo',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.slicetwo'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'string'
            },
            NUM1: {
              type: 'number',
              defaultValue: '1'
            },
            NUM2: {
              type: 'number',
              defaultValue: '2'
            }
          }
        },
        {
          opcode: 'sliceone',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.sliceone'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'string'
            },
            NUM: {
              type: 'number',
              defaultValue: '1'
            }
          }
        },
        {
          opcode: 'substr',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.substr'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'string'
            },
            NUM1: {
              type: 'number',
              defaultValue: '1'
            },
            NUM2: {
              type: 'number',
              defaultValue: '3'
            }
          }
        },

        {
          opcode: 'replace',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.replace'),
          hideFromPalette: true,
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'str in string'
            },
            STR2: {
              type: 'string',
              defaultValue: 'str'
            },
            STR3: {
              type: 'string',
              defaultValue: 'num'
            }
          }
        },
        {
          opcode: 'replaceAll',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.replaceAll'),
          hideFromPalette: true,
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'str in string'
            },
            STR2: {
              type: 'string',
              defaultValue: 'str'
            },
            STR3: {
              type: 'string',
              defaultValue: 'num'
            }
          }
        },
        {
          opcode: 'replaceType',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.replaceType'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'str in string'
            },
            STR2: {
              type: 'string',
              defaultValue: 'str'
            },
            STR3: {
              type: 'string',
              defaultValue: 'num'
            },
            TYPE: {
              type: 'string',
              menu: 'replaceType.List'
            }
          }
        },
        {
          opcode: 'replacestrIndex',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.replacestrIndex'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'str in string'
            },
            STR2: {
              type: 'string',
              defaultValue: 'str'
            },
            STR3: {
              type: 'string',
              defaultValue: 'num'
            },
            INDEX: {
              type: 'string',
              defaultValue: '2'
            }
          }
        },
        {
          opcode: 'getStrNumInStr',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.getStrNumInStr'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'str in string'
            },
            STR2: {
              type: 'string',
              defaultValue: 'str'
            }
          }
        },

        {
          opcode: 'toUpperCase',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.toUpperCase'),
          hideFromPalette: true,
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'string'
            }
          }
        },
        {
          opcode: 'toLowerCase',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.toLowerCase'),
          hideFromPalette: true,
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'STRING'
            }
          }
        },
        {
          opcode: 'toggleCase',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.toggleCase'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'string'
            },
            TYPE: {
              type: 'string',
              menu: 'toggleCase.List'
            }
          }
        },

        {
          opcode: 'padStart',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.padStart'),
          hideFromPalette: true,
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'str'
            },
            STR2: {
              type: 'string',
              defaultValue: 's'
            },
            NUM: {
              type: 'number',
              defaultValue: '5'
            }
          }
        },
        {
          opcode: 'padEnd',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.padEnd'),
          hideFromPalette: true,
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'str'
            },
            STR2: {
              type: 'string',
              defaultValue: 'r'
            },
            NUM: {
              type: 'number',
              defaultValue: '5'
            }
          }
        },
        {
          opcode: 'padType',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.padType'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'str'
            },
            STR2: {
              type: 'string',
              defaultValue: 'r'
            },
            NUM: {
              type: 'number',
              defaultValue: '5'
            },
            TYPE: {
              type: 'string',
              menu: 'padType.List'
            }
          }
        },


        {
          opcode: 'titleCase',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.titleCase'),
          hideFromPalette: true,
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'string is good'
            }
          }
        },

        {
          opcode: 'includes',
          blockType: 'Boolean',
          text: this.formatMessage('qxsckstrmani.includes'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'string'
            },
            STR2: {
              type: 'string',
              defaultValue: 'str'
            }
          }
        },
        {
          opcode: 'includesNum',
          blockType: 'Boolean',
          text: this.formatMessage('qxsckstrmani.includesNum'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'string'
            },
            STR2: {
              type: 'string',
              defaultValue: 'str'
            },
            NUM: {
              type: 'number',
              defaultValue: '2'
            }
          }
        },

        {
          opcode: 'startsWith',
          blockType: 'Boolean',
          text: this.formatMessage('qxsckstrmani.startsWith'),
          hideFromPalette: true,
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'string'
            },
            STR2: {
              type: 'string',
              defaultValue: 'str'
            }
          }
        },
        {
          opcode: 'endsWith',
          blockType: 'Boolean',
          text: this.formatMessage('qxsckstrmani.endsWith'),
          hideFromPalette: true,
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'string'
            },
            STR2: {
              type: 'string',
              defaultValue: 'str'
            }
          }
        },
        {
          opcode: 'typeWith',
          blockType: 'Boolean',
          text: this.formatMessage('qxsckstrmani.typeWith'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'string'
            },
            STR2: {
              type: 'string',
              defaultValue: 'str'
            },
            TYPE: {
              type: 'string',
              menu: 'typeWith.List'
            }
          }
        },

        {
          opcode: 'splittojson',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.splittojson'),
          hideFromPalette: true,
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'str.ing'
            },
            STR2: {
              type: 'string',
              defaultValue: '.'
            }
          }
        },
        {
          opcode: 'split',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.split'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'str.ing'
            },
            STR2: {
              type: 'string',
              defaultValue: '.'
            }
          }
        },
        {
          opcode: 'splitid',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.splitid'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'str.ing'
            },
            STR2: {
              type: 'string',
              defaultValue: '.'
            },
            ID: {
              type: 'string',
              defaultValue: '1'
            }
          }
        },
        {
          opcode: 'splitlength',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.splitlength'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'str.ing'
            },
            STR2: {
              type: 'string',
              defaultValue: '.'
            },
          }
        },

        {
          opcode: 'strIsAvailable',
          blockType: 'Boolean',
          text: this.formatMessage('qxsckstrmani.strIsAvailable'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: '114514@homo.com'
            },
            CLASS: {
              type: 'string',
              menu: 'strIsAvailable.List',
            }
          }
        },

        {
          opcode: 'fillStart',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.fillStart'),
          hideFromPalette: true,
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'str'
            },
            STR2: {
              type: 'string',
              defaultValue: 'ing'
            },
            NUM: {
              type: 'number',
              defaultValue: '2'
            }
          }
        },
        {
          opcode: 'fillEnd',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.fillEnd'),
          hideFromPalette: true,
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'str'
            },
            STR2: {
              type: 'string',
              defaultValue: 'ing'
            },
            NUM: {
              type: 'number',
              defaultValue: '2'
            }
          }
        },
        {
          opcode: 'fillType',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.fillType'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'str'
            },
            STR2: {
              type: 'string',
              defaultValue: 'ing'
            },
            NUM: {
              type: 'number',
              defaultValue: '2'
            },
            TYPE: {
              type: 'string',
              menu: 'fillType.List'
            }
          }
        },

        {
          opcode: 'repeatString',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.repeatString'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'str'
            },
            NUM: {
              type: 'number',
              defaultValue: '2'
            }
          }
        },
        {
          opcode: 'deleteSpace',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.deleteSpace'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: '  str  '
            },
          }
        },
        {
          opcode: 'replaceIndex',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.replaceIndex'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'sar'
            },
            NUM: {
              type: 'string',
              defaultValue: '2',
            },
            STR2: {
              type: 'string',
              defaultValue: 't'
            }
          }
        },
        {
          opcode: 'replaceIndexs',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.replaceIndexs'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'sarkosr'
            },
            NUM: {
              type: 'string',
              defaultValue: '2',
            },
            NUM2: {
              type: 'string',
              defaultValue: '6',
            },
            STR2: {
              type: 'string',
              defaultValue: 't'
            }
          }
        },
        {
          opcode: 'deleteIndex',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.deleteIndex'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'satr'
            },
            NUM: {
              type: 'string',
              defaultValue: '2',
            },
          }
        },
        {
          opcode: 'deleteIndexs',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.deleteIndexs'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'sarkostr'
            },
            NUM: {
              type: 'string',
              defaultValue: '2',
            },
            NUM2: {
              type: 'string',
              defaultValue: '6',
            },
          }
        },
        {
          opcode: 'insertIndex',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.insertIndex'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'sr'
            },
            NUM: {
              type: 'string',
              defaultValue: '2',
            },
            STR2: {
              type: 'string',
              defaultValue: 't'
            }
          }
        },
        {
          opcode: 'splitStringWidth',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.splitStringWidth'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'str'
            },
            WIDTH: {
              type: 'string',
              defaultValue: '10'
            },
            FONT: {
              type: 'string',
              defaultValue: 'Arial 30px'
            },
          }
        },
        {
          opcode: 'splitStringLength',
          blockType: 'reporter',
          text: this.formatMessage('qxsckstrmani.splitStringLength'),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'strstrstr'
            },
            LENGTH: {
              type: 'string',
              defaultValue: '5'
            },
          }
        },
      ],
      menus: {
        'strIsAvailable.List': [
          {
            text: this.formatMessage('qxsckstrmani.email'),
            value: 'email'
          },
          {
            text: this.formatMessage('qxsckstrmani.website'),
            value: 'website'
          },
        ],
        'replaceType.List': [
          {
            text: this.formatMessage('qxsckstrmani.first'),
            value: 'first'
          },
          {
            text: this.formatMessage('qxsckstrmani.all'),
            value: 'all'
          },
        ],
        'toggleCase.List': [
          {
            text: this.formatMessage('qxsckstrmani.upper'),
            value: 'upper'
          },
          {
            text: this.formatMessage('qxsckstrmani.lower'),
            value: 'lower'
          },
        ],
        'padType.List': { items: 'getSartAndEnd' },
        'typeWith.List': { items: 'getSartAndEnd' },
        'fillType.List': { items: 'getSartAndEnd' },
      }
    };
  }

  getSartAndEnd() {
    return [
      {
        text: this.formatMessage('qxsckstrmani.start'),
        value: 'start'
      },
      {
        text: this.formatMessage('qxsckstrmani.end'),
        value: 'end'
      },
    ];
  }

  strictlyequal(args) {
    return String(args.STR) === String(args.STR2);
  }
  length(args) {
    return String(args.STR).length;
  }
  reversal(args) {
    let arr = String(args.STR).split('');
    arr = arr.reverse().join("");
    return arr;
  }
  strPalindrome(args) {
    let arr = String(args.STR).split('');
    arr = arr.reverse().join("");
    return arr === String(args.STR);
  }
  indexOf(args) {
    let str = String(args.STR), str2 = String(args.STR2), num = Number(args.NUM);
    if (str.indexOf(str2, num - 1) != -1) return str.indexOf(str2, num - 1) + 1;
    else return -1;
  }
  indexOfCount(args) {
    let str = String(args.STR), str2 = String(args.STR2),
      num = Number(args.NUM), num2 = Number(args.NUM2);
    let oldlength = str.slice(0, num - 1).length;
    let str_ = str.slice(num - 1), strindexs = [str_.indexOf(str2)];
    let index_ = strindexs[strindexs.length - 1] + 1;
    while (str_.indexOf(str2, index_) != -1) {
      strindexs.push(str_.indexOf(str2, index_));
      index_ = strindexs[strindexs.length - 1] + 1;
    }
    if (strindexs.length >= num2) return strindexs[num2 - 1] + 1 + oldlength;
    else return -1;
  }
  lastIndexOf(args) {
    let str = String(args.STR), str2 = String(args.STR2), num = Number(args.NUM);
    if (str.lastIndexOf(str2, num - 1) != -1) return str.lastIndexOf(str2, num - 1) + 1;
    else return -1;
  }
  indexOfDefault(args) {
    let str = String(args.STR), str2 = String(args.STR2);
    if (str.indexOf(str2, 0) != -1) return str.indexOf(str2, 0) + 1;
    else return -1;
  }
  indexOfCountDefault(args) {
    let str = String(args.STR), str2 = String(args.STR2),
      num2 = Number(args.NUM2);
    let str_ = str, strindexs = [str_.indexOf(str2)];
    let index_ = strindexs[strindexs.length - 1] + 1;
    while (str_.indexOf(str2, index_) != -1) {
      strindexs.push(str_.indexOf(str2, index_));
      index_ = strindexs[strindexs.length - 1] + 1;
    }
    if (strindexs.length >= num2) return strindexs[num2 - 1] + 1;
    else return -1;
  }
  lastIndexOfDefault(args) {
    let str = String(args.STR), str2 = String(args.STR2);
    if (str.lastIndexOf(str2, str.length - 1) != -1) return str.lastIndexOf(str2, str.length - 1) + 1;
    else return -1;
  }
  charAt(args) {
    return String(args.STR).charAt(Number(args.NUM) - 1);
  }
  slicetwo(args) {
    return String(args.STR).slice(Number(args.NUM1) - 1, Number(args.NUM2));
  }
  sliceone(args) {
    return String(args.STR).slice(Number(args.NUM) - 1);
  }
  substr(args) {
    return String(args.STR).substr(Number(args.NUM1) - 1, Number(args.NUM2));
  }

  replace(args) {
    return String(args.STR).replace(String(args.STR2), String(args.STR3));
  }
  replaceAll(args) {
    return String(args.STR).replaceAll(String(args.STR2), String(args.STR3));
  }
  replaceType(args) {
    if (args.TYPE === 'first') {
      return String(args.STR).replace(String(args.STR2), String(args.STR3));
    } else if (args.TYPE === 'all') {
      return String(args.STR).replaceAll(String(args.STR2), String(args.STR3));
    }
  }
  replacestrIndex(args) {
    let strs = String(args.STR).split(String(args.STR2));
    let index = Number(args.INDEX);
    let str_ = "";
    for (let i = 0; i < strs.length; i++) {
      str_ = str_ + strs[i];
      if (i + 1 != strs.length) {
        if (i + 1 === index) str_ = str_ + String(args.STR3);
        else str_ = str_ + String(args.STR2);
      }
    }
    return str_;
  }
  getStrNumInStr(args) {
    let str = String(args.STR), str2 = String(args.STR2);
    if (str2 === "" || str === "") return 0;
    else if (str.indexOf(str2) === -1) return 0;
    else {
      let str_ = str, strindexs = [str_.indexOf(str2)];
      let index_ = strindexs[strindexs.length - 1] + 1;
      while (str_.indexOf(str2, index_) != -1) {
        strindexs.push(str_.indexOf(str2, index_));
        index_ = strindexs[strindexs.length - 1] + 1;
      }
      return strindexs.length;
    }
  }

  toUpperCase(args) {
    return String(args.STR).toUpperCase();
  }
  toLowerCase(args) {
    return String(args.STR).toLowerCase();
  }
  toggleCase(args) {
    if (args.TYPE === 'upper') {
      return String(args.STR).toUpperCase();
    } else if (args.TYPE === 'lower') {
      return String(args.STR).toLowerCase();
    }
  }

  padStart(args) {
    return String(args.STR).padStart(Number(args.NUM), String(args.STR2));
  }
  padEnd(args) {
    return String(args.STR).padEnd(Number(args.NUM), String(args.STR2));
  }
  padType(args) {
    if (args.TYPE === 'start') {
      return String(args.STR).padStart(Number(args.NUM), String(args.STR2));
    } else if (args.TYPE === 'end') {
      return String(args.STR).padEnd(Number(args.NUM), String(args.STR2));
    }
  }

  titleCase(args) {
    let newStr = String(args.STR).split(" ");
    for (let i = 0; i < newStr.length; i++) {
      newStr[i] = newStr[i].slice(0, 1).toUpperCase() + newStr[i].slice(1).toLowerCase();
    }
    return newStr.join(" ");
  }

  includes(args) {
    return String(args.STR).includes(String(args.STR2));
  }
  includesNum(args) {
    return String(args.STR).includes(String(args.STR2), Number(args.NUM));
  }

  startsWith(args) {
    return String(args.STR).startsWith(String(args.STR2));
  }
  endsWith(args) {
    return String(args.STR).endsWith(String(args.STR2));
  }
  typeWith(args) {
    if (args.TYPE === 'start') {
      return String(args.STR).startsWith(String(args.STR2));
    } else if (args.TYPE === 'end') {
      return String(args.STR).endsWith(String(args.STR2));
    }
  }


  splittojson(args) {
    let str_ = String(args.STR).split(String(args.STR2));
    return JSON.stringify(str_);
  }
  split(args) {
    let str_ = String(args.STR).split(String(args.STR2));
    return JSON.stringify(str_);
  }
  splitid(args) {
    let str_ = String(args.STR).split(String(args.STR2));
    let id = Number(args.ID);
    if (id <= str_.length) return str_[id - 1];
  }
  splitlength(args) {
    let str_ = String(args.STR).split(String(args.STR2));
    return str_.length;
  }

  strIsAvailable(args) {
    let str = String(args.STR), regex;
    if (args.CLASS === 'email') {
      regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    } else if (args.CLASS === 'website') {
      regex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    } else {
      return false;
    }
    return regex.test(str);
  }

  fillStart(args) {
    let str = String(args.STR), str2 = String(args.STR2), num = Number(args.NUM);
    for (let i = 0; i < num; i++) str = str2 + str;
    return str;
  }
  fillEnd(args) {
    let str = String(args.STR), str2 = String(args.STR2), num = Number(args.NUM);
    for (let i = 0; i < num; i++) str = str + str2;
    return str;
  }
  fillType(args) {
    let str = String(args.STR), str2 = String(args.STR2), num = Number(args.NUM);
    if (args.TYPE === 'start') {
      for (let i = 0; i < num; i++) str = str2 + str;
    } else if (args.TYPE === 'end') {
      for (let i = 0; i < num; i++) str = str + str2;
    }
    return str;
  }

  repeatString(args) {
    let str = "";
    for (let i = 0; i < Number(args.NUM); i++) str += String(args.STR);
    return str;
  }
  deleteSpace(args) {
    return String(args.STR).replace(/^\s+|\s+$/gm, '');
  }
  replaceIndex(args) {
    let str = '';
    for (let i = 0; i < String(args.STR).length; i++) {
      if (i + 1 == Number(args.NUM)) str += String(args.STR2);
      else str += String(args.STR)[i];
    }
    return str;
  }
  replaceIndexs(args) {
    let str = '';
    for (let i = 0; i < String(args.STR).length; i++) {
      if (i + 1 == Number(args.NUM)) str += String(args.STR2);
      else if (i + 1 < Number(args.NUM) || i + 1 > Number(args.NUM2)) str += String(args.STR)[i];
    }
    return str;
  }
  deleteIndex(args) {
    let str = '';
    for (let i = 0; i < String(args.STR).length; i++) {
      if (i + 1 != Number(args.NUM)) str += String(args.STR)[i];
    }
    return str;
  }
  deleteIndexs(args) {
    let str = '';
    for (let i = 0; i < String(args.STR).length; i++) {
      if (i + 1 < Number(args.NUM) || i + 1 > Number(args.NUM2)) str += String(args.STR)[i];
    }
    return str;
  }
  insertIndex(args) {
    let str = '';
    for (let i = 0; i < String(args.STR).length; i++) {
      if (i + 1 == Number(args.NUM)) str += String(args.STR2);
      str += String(args.STR)[i];
    }
    return str;
  }
  splitStringWidth(args) {
    let str = String(args.STR), width_ = Number(args.WIDTH), font_ = String(args.FONT);
    let measureText;
    if (!measureText) {
      measureText = document.createElement("canvas");
    }
    const ctx = measureText.getContext('2d');
    ctx.font = font_;
    let strs = [];
    let str_ = "";
    for (let i = 0; i < str.length; i++) {
      if (ctx.measureText(str_ + str[i]).width > width_) {
        if (str_.length > 0) strs.push(str_), str_ = str[i];
        else return '[]';
      } else {
        str_ = str_ + str[i];
      }
    }
    if (str_.length > 0) strs.push(str_);
    return JSON.stringify(strs);
  }
  splitStringLength(args) {
    let str = String(args.STR), length_ = Number(args.LENGTH);
    let strs = [];
    let str_ = "";
    for (let i = 0; i < str.length; i++) {
      if (str_.length === length_) strs.push(str_), str_ = str[i];
      else str_ = str_ + str[i];
    }
    if (str_.length > 0) strs.push(str_);
    return JSON.stringify(strs);
  }
}

window.tempExt = {
  Extension: str_mani,
  info: {
    name: 'qxsckstrmani.name',
    description: 'qxsckstrmani.description',
    extensionId: extID,
    iconURL: icon,
    insetIconURL: insetIcon,
    featured: true,
    disabled: false,
    collaborator: 'CK七星松@CCW',
  },
  l10n: {
    'zh-cn': {
      'qxsckstrmani.name': '字符串处理',
      'qxsckstrmani.description': '一些关于处理字符串的积木',
    },
    en: {
      'qxsckstrmani.name': 'String proces',
      'qxsckstrmani.description': 'Some blocks about string processing.',
    },
  },
}
