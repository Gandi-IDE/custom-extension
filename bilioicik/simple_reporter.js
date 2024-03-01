//感谢多莉pro的源码让我知道如何隐藏积木

const { Scratch } = window;

const {
    BlockType, ArgumentType, TargetType, Cast,
  } = Scratch;

const simplereporterpicture = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI2MDAiIGhlaWdodD0iMzc1IiB2aWV3Qm94PSIwLDAsNjAwLDM3NSI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGN4PSIyODcuMDg1OTQiIGN5PSIyMzcuNiIgcj0iMTE2LjQ4MTQ4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzU5YzA1OSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzU5YzA1OSIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48cmFkaWFsR3JhZGllbnQgY3g9IjI0MCIgY3k9IjEyMi40IiByPSIxODcuNjQ4MTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNTljMDU5Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNTljMDU5IiBzdG9wLW9wYWNpdHk9IjAiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MCw3LjUpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0tNjAsMzY3LjV2LTM3NWg2MDB2Mzc1eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMTcwLjYwNDQ2LDE5Ny42TTIxMC42MDQ0NiwxOTcuNmgxNTIuOTYyOTZjMjIuMDkxMzksMCA0MCwxNy45MDg2MSA0MCw0MGMwLDIyLjA5MTM5IC0xNy45MDg2MSw0MCAtNDAsNDBoLTE1Mi45NjI5NmMtMjIuMDkxMzksMCAtNDAsLTE3LjkwODYxIC00MCwtNDBjMCwtMjIuMDkxMzkgMTcuOTA4NjEsLTQwIDQwLC00MHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0idXJsKCNjb2xvci0xKSIgc3Ryb2tlLXdpZHRoPSIyMCIvPjxwYXRoIGQ9Ik0xNzAuNjA0NDYsMTk3LjZNMjEwLjYwNDQ2LDE5Ny42aDE1Mi45NjI5NmMyMi4wOTEzOSwwIDQwLDE3LjkwODYxIDQwLDQwYzAsMjIuMDkxMzkgLTE3LjkwODYxLDQwIC00MCw0MGgtMTUyLjk2Mjk2Yy0yMi4wOTEzOSwwIC00MCwtMTcuOTA4NjEgLTQwLC00MGMwLC0yMi4wOTEzOSAxNy45MDg2MSwtNDAgNDAsLTQweiIgZmlsbD0iIzU5YzA1OSIgc3Ryb2tlPSIjNDc5YTQ3IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNNTIuMzUxODUsODIuNE05Mi4zNTE4NSw4Mi40aDI5NS4yOTYzbDQwLDQwbC00MCw0MGgtMjk1LjI5NjNsLTQwLC00MHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0idXJsKCNjb2xvci0yKSIgc3Ryb2tlLXdpZHRoPSIyMCIvPjxwYXRoIGQ9Ik01Mi4zNTE4NSw4Mi40TTkyLjM1MTg1LDgyLjRoMjk1LjI5NjNsNDAsNDBsLTQwLDQwaC0yOTUuMjk2M2wtNDAsLTQweiIgZmlsbD0iIzU5YzA1OSIgc3Ryb2tlPSIjNDc5YTQ3IiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTIuMzgyODEsMTM2LjgpIHNjYWxlKDMsMykiIGZvbnQtc2l6ZT0iMTYiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjNDc5YTQ3IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSImcXVvdDtDb29wZXIgQmxhY2smcXVvdDssIFNhbnMgU2VyaWYiIGZvbnQtd2VpZ2h0PSI1MDAiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0c3BhbiB4PSIwIiBkeT0iMCI+c29tZXRoaW5nPC90c3Bhbj48L3RleHQ+PHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjA2LjU1NDY5LDI1Mikgc2NhbGUoMywzKSIgZm9udC1zaXplPSIxNiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9IiM0NzlhNDciIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IiZxdW90O0Nvb3BlciBCbGFjayZxdW90OywgU2FucyBTZXJpZiIgZm9udC13ZWlnaHQ9IjUwMCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHRzcGFuIHg9IjAiIGR5PSIwIj5zaW1wbGU8L3RzcGFuPjwvdGV4dD48cGF0aCBkPSJNNzYuNzg2NzcsMjQ1LjFjLTQuMTQyMTQsMCAtNy41LC0xLjExOTI5IC03LjUsLTIuNDk5OTl2LTkuOTk5OTljMCwtMS4zODA3MiAzLjM1Nzg2LC0yLjQ5OTk5IDcuNSwtMi40OTk5OWg3LjV2LTcuNWMwLC00LjE0MjE0IDEuMTE5MjgsLTcuNSAyLjQ5OTk5LC03LjVoOS45OTk5OWMxLjM4MDcyLDAgMi40OTk5OSwzLjM1Nzg2IDIuNDk5OTksNy41djcuNWg3LjUwMDAyYzQuMTQyMTUsMCA3LjUsMS4xMTkyOCA3LjUsMi40OTk5OXY5Ljk5OTk5YzAsMS4zODA3MiAtMy4zNTc4NSwyLjQ5OTk5IC03LjUsMi40OTk5OWgtNy41MDAwMnY3LjUwMDAxYzAsNC4xNDIxNCAtMS4xMTkyOCw3LjUgLTIuNDk5OTksNy41aC05Ljk5OTk5Yy0xLjM4MDcyLDAgLTIuNDk5OTksLTMuMzU3ODYgLTIuNDk5OTksLTcuNXYtNy41MDAwMXoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzM4OTQzOCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MzAwOjE4Ny41LS0+";

const simplereportericon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCwwLDgwLDgwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjI3NC4wOTQ1MyIgeTE9IjIxNC4wOTQ1NSIgeDI9IjIwNS45MDU1IiB5Mj0iMTQ1LjkwNTUyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzhiYmY4YiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzhiYmY4YiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMC4wMDAwMSwtMTQwLjAwMDAzKSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMjIwLjE2MjYxLDIyMC4wMDAwM2MtMTEuMTM1NSwwIC0yMC4xNjI2LC05LjAyNzEgLTIwLjE2MjYsLTIwLjE2MjZ2LTM5LjY3NDhjMCwtMTEuMTM1NSA5LjAyNzEsLTIwLjE2MjYgMjAuMTYyNiwtMjAuMTYyNmgzOS42NzQ4YzExLjEzNTUsMCAyMC4xNjI2LDkuMDI3MSAyMC4xNjI2LDIwLjE2MjZ2MzkuNjc0OGMwLDExLjEzNTUgLTkuMDI3MSwyMC4xNjI2IC0yMC4xNjI2LDIwLjE2MjZ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0idXJsKCNjb2xvci0xKSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjIyLjY0MjI5LDIxNS4wMDAwNGMtOS43NDM1NiwwIC0xNy42NDIyNywtNy44OTg3MSAtMTcuNjQyMjcsLTE3LjY0MjI3di0zNC43MTU0NWMwLC05Ljc0MzU2IDcuODk4NzEsLTE3LjY0MjI4IDE3LjY0MjI3LC0xNy42NDIyOGgzNC43MTU0NWM5Ljc0MzU2LDAgMTcuNjQyMjgsNy44OTg3MiAxNy42NDIyOCwxNy42NDIyOHYzNC43MTU0NWMwLDkuNzQzNTYgLTcuODk4NzIsMTcuNjQyMjcgLTE3LjY0MjI4LDE3LjY0MjI3eiIgZmlsbD0iIzU5YzA1OSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMjI1LjAwMDAyLDE4Ny41MDAwMWMtNC4xNDIxNCwwIC03LjUsLTEuMTE5MjkgLTcuNSwtMi40OTk5OXYtOS45OTk5OWMwLC0xLjM4MDcyIDMuMzU3ODYsLTIuNDk5OTkgNy41LC0yLjQ5OTk5aDcuNXYtNy41YzAsLTQuMTQyMTQgMS4xMTkyOCwtNy41IDIuNDk5OTksLTcuNWg5Ljk5OTk5YzEuMzgwNzIsMCAyLjQ5OTk5LDMuMzU3ODYgMi40OTk5OSw3LjV2Ny41aDcuNTAwMDJjNC4xNDIxNSwwIDcuNSwxLjExOTI4IDcuNSwyLjQ5OTk5djkuOTk5OTljMCwxLjM4MDcyIC0zLjM1Nzg1LDIuNDk5OTkgLTcuNSwyLjQ5OTk5aC03LjUwMDAydjcuNTAwMDFjMCw0LjE0MjE0IC0xLjExOTI4LDcuNSAtMi40OTk5OSw3LjVoLTkuOTk5OTljLTEuMzgwNzIsMCAtMi40OTk5OSwtMy4zNTc4NiAtMi40OTk5OSwtNy41di03LjUwMDAxeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMzg5NDM4IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjozOS45OTk5ODUwMDAwMDAwNDozOS45OTk5NjUwMDAwMDAwOS0tPg==";

const simplereporterextensionId = "simplereporter";

const EXTCONFIGCOMMENTID = '_ExtensionConfig_';

class simplereporter{
    static extCount = 0;
    constructor(runtime) {
        this.runtime = runtime;
        simplereporter.extCount += 1;
        this.id = simplereporter.extCount;
        this.hideExtraBlocks = true;
        if (!this.parseExtConfig()) {
            runtime.on('PROJECTLOADED', () => {
              this.parseExtConfig();
            });
        }
        this._formatMessage = runtime.getFormatMessage({
            "zh-cn": {
                'rname':'简单返回值',
                'simplereporterdocs':'文档',
                'simplereportershowBlock': '显示不常用积木',
                'simplereporterhideBlock': '隐藏不常用积木',
                'simplereportershowBlock?':'为了避免积木过多，一些不常用积木被隐藏了。\n是否显示隐藏积木？',

                'boolean':'布尔值',
                'number':'数字',
                'object':'数组或对象',
                'string':'字符串',
                'undefined':'不明确值',

                'titleStrings':'字符串',
                'rreporterDV': '你好',
                'rif': '若[a]则[b]否则[c]',
                'rifbDV': '是',
                'rifcDV': '否',
                'band': '[a]与[b]',
                'bor': '[a]或[b]',
                'bnot': '[a]不成立',
                'rremove':'[a]去除[b]',
                'rinterchange':'[a]字符[b]互换[c]',
                'rdefault':'[a]空值则[b]',
                'bdefined':'[a]有值',
                'bundefined':'[a]空值',
                'bnotstrictlyequal':'[a]不全等[b]',
                'bnotcontain':'[a]不含[b]',

                'titleOperators':'运算',
                'rmod':'[a]/[b]余数',
                'rnearestmultiple':'[a]最近[b]倍数',
                'rround':'[a]四舍五入[b]位',
                'rrintfromto':'[a]四舍五入，从[b]位至[c]位',
                'rrinttotimes':'[a]四舍五入，从[b]位往前[c]次',
                'rrinttimesto':'[a]四舍五入，往前[b]次至[c]位',
                'rPI':'π保留[a]位',
                'rradsin':'弧度制sin[a]',
                'rradcos':'弧度制cos[a]',
                'rradtan':'弧度制tan[a]',
                'rradasin':'弧度制asin[a]',
                'rradacos':'弧度制acos[a]',
                'rradatan':'弧度制atan[a]',
                'rtoonehundredeighty':'[a]在-180~180角度中',
                'rtothreehundredsixty':'[a]在0~360角度中',
                'raddto':'[a]增加[b]至[c]',

                'rJSONtypeof':'[a]类型',
                'bJSONtypeof':'[a]类型为[b]',

                'titleArray':'数组',
                'bArraystrictlyequal':'[a]全等[b]',
                'rArraysum':'[a]之和',
                'rArrayproduct':'[a]之积',
                'rArrayaverage':'[a]平均数',
                'rArraymax':'[a]最大值',
                'rArraymin':'[a]最小值',
                'bArrayhavebignumber':'[a]包含数>[b]',
                'bArrayhavenotsmallnumber':'[a]包含数≥[b]',
                'bArrayhavesmallnumber':'[a]包含数<[b]',
                'bArrayhavenotbignumber':'[a]包含数≤[b]',
                'bArrayhave':'[a]包含数=[b]',
                'bArrayhavestr':'[a]包含"[b]"',
                'bArrayhavesth':'[a]包含[b]',
                'bArrayhaveJSON':'[a]包含JSON[b]',
                'bArraybebignumber':'[a]全是数>[b]',
                'bArraybenotsmallnumber':'[a]全是数≥[b]',
                'bArraybesmallnumber':'[a]全是数<[b]',
                'bArraybenotbignumber':'[a]全是数≤[b]',
                'bArraybe':'[a]全是数=[b]',
                'bArraybestr':'[a]全是"[b]"',
                'bArraybesth':'[a]全是[b]',
                'bArraybeJSON':'[a]全是JSON[b]',
                'rArrayremovebignumber':'[a]删除数>[b]',
                'rArrayremovenotsmallnumber':'[a]删除数≥[b]',
                'rArrayremovesmallnumber':'[a]删除数<[b]',
                'rArrayremovenotbignumber':'[a]删除数≤[b]',
                'rArrayremove':'[a]删除所有数=[b]',
                'rArrayremovestr':'[a]删除所有"[b]"',
                'rArrayremovesth':'[a]删除所有[b]',
                'rArrayremoveJSON':'[a]删除所有JSON[b]',
                'rArrayremoveshift':'[a]删除首项',
                'rArrayremovepop':'[a]删除末项',
                'rArrayremoveitem':'[a]删除第[b]项',
                'rArrayremoveitems':'[a]删除第[b]项',
                'rArrayremoveitemtoitem':'[a]删除第[b]至[c]项',
                'rArrayreserveitem':'[a]保留第[b]项',
                'rArrayshift':'[a]首项',
                'rArraypop':'[a]末项',
                'rArrayitem':'[a]第[b]项',
                'rArrayitems':'[a]第[b]项',
                'rArrayshiftJSON':'[a]首项转JSON',
                'rArraypopJSON':'[a]末项转JSON',
                'rArrayitemJSON':'[a]第[b]项转JSON',
                'rArrayitemtoitem':'[a]第[b]至[c]项',
                'rArrayunshift':'[a]加入[b]到开头',
                'rArraypush':'[a]加入[b]到末尾',
                'rArrayinsert':'[a]插入[b]到[c]项',
                'rArrayinsertindextoindex':'[a]插入[b]到[c]至[d]项',
                'rArrayunshiftstr':'[a]加入"[b]"到开头',
                'rArraypushstr':'[a]加入"[b]"到末尾',
                'rArrayinsertstr':'[a]插入"[b]"到[c]项',
                'rArrayinsertstrindextoindex':'[a]插入"[b]"到[c]至[d]项',
                'rArrayunshiftJSON':'[a]加入JSON[b]到开头',
                'rArraypushJSON':'[a]加入JSON[b]到末尾',
                'rArrayinsertJSON':'[a]插入JSON[b]到[c]项',
                'rArrayinsertJSONindextoindex':'[a]插入JSON[b]到[c]至[d]项',
                'rArraymove':'[a]第[b]项移到第[c]项',
                'rArrayinterchange':'[a]第[b]项与第[c]项互换',
                'rArrayreplace':'[a]第[b]项设为[c]',
                'rArrayreplaceindexes':'[a]第[b]项设为[c]',
                'rArrayreplaceindextoindex':'[a]第[b]到[c]项设为[d]',
                'rArrayreplacestr':'[a]第[b]项设为"[c]"',
                'rArrayreplaceindexesstr':'[a]第[b]项设为"[c]"',
                'rArrayreplaceindextoindexstr':'[a]第[b]到[c]项设为"[d]"',
                'rArrayreplaceJSON':'[a]第[b]项设为JSON[c]',
                'rArrayreplaceindexesJSON':'[a]第[b]项设为JSON[c]',
                'rArrayreplaceindextoindexJSON':'[a]第[b]到[c]项设为JSON[d]',
                'rArrayplusindex':'[a]第[b]项增加[c]',
                'rArrayplusindextoindex':'[a]第[b]到[c]项增加[d]',
                'rArrayplus':'[a]各项增加[b]',
                'rArrayindex':'[a]第一[b]编号',
                'rArrayindexstr':'[a]第一"[b]"编号',
                'rArrayindexJSON':'[a]第一JSON[b]编号',
                'rArraylastindex':'[a]最后一[b]编号',
                'rArraylastindexstr':'[a]最后一"[b]"编号',
                'rArraylastindexJSON':'[a]最后一JSON[b]编号',
                'rArrayallindex':'[a]所有[b]编号',
                'rArrayallindexstr':'[a]所有"[b]"编号',
                'rArrayallindexJSON':'[a]所有JSON[b]编号',
                'rArrayfindIndexbignumber':'[a]第一数>[b]编号',
                'rArrayfindIndexnotsmallnumber':'[a]第一数≥[b]编号',
                'rArrayfindIndexsmallnumber':'[a]第一数<[b]编号',
                'rArrayfindIndexnotbignumber':'[a]第一数≤[b]编号',
                'rArraycountbignumber':'[a]数>[b]数量',
                'rArraycountnotsmallnumber':'[a]数≥[b]数量',
                'rArraycountsmallnumber':'[a]数<[b]数量',
                'rArraycountnotbignumber':'[a]数≤[b]数量',
                'rArraycount':'[a]数=[b]数量',
                'rArraycountstr':'[a]"[b]"数量',
                'rArraycountsth':'[a][b]数量',
                'rArraycountJSON':'[a]JSON[b]数量',
                'rArraysortnaturalOrder':'[a]顺序排序',
                'rArraysortreverseOrder':'[a]倒序排序',
                'rArrayreverse':'[a]反转',
                'bArrayclear':'[a]无元素',
                'rArraylength':'[a]元素量',
                'bisArray':'[a]是数组',

                'titleObject':'对象',
                'rObjectvalue':'[a]键[b]的值',
                'rObjectvalueJSON':'[a]键[b]的值转JSON',
                'rObjectkey':'[a]第一值[b]键',
                'rObjectlastkey':'[a]最后一值[b]键',
                'rObjectallkey':'[a]所有值[b]键',
                'rObjectkeystr':'[a]第一值"[b]"键',
                'rObjectlastkeystr':'[a]最后一值"[b]"键',
                'rObjectallkeystr':'[a]所有值"[b]"键',
                'rObjectkeyJSON':'[a]第一值JSON[b]键',
                'rObjectlastkeyJSON':'[a]最后一值JSON[b]键',
                'rObjectallkeyJSON':'[a]所有值JSON[b]键',
                'rObjectputkey':'[a]键[b]值设为[c]',
                'rObjectputkeystr':'[a]键[b]值设为"[c]"',
                'rObjectputkeyJSON':'[a]键[b]值设为JSON[c]',
                'rObjectpluskey':'[a]键[b]值增加[c]',
                'rObjectplus':'[a]值增加[b]',
                'rObjectputAll':'[a][b]合并',
                'rObjectremove':'[a]删除键[b]',
                'rObjectremovekeys':'[a]删除键[b]',
                'rObjectkeys':'[a]所有键',
                'rObjectvalues':'[a]所有值',
                'rObjectentries':'[a]所有数据',
                'rObjectfromentries':'[a]数据转对象',
                'bObjecthasownproperty':'[a]包含键[b]',
                'bObjectclear':'[a]无键值',
                'rObjectlength':'[a]键值量',
                'bisObject':'[a]是对象',

                'titleMore':'更多',

                'titletobecontinued':'未完待续',
                
                'r':'',
            },
            en: {
                'rname':'simple reporter',
                'simplereporterdocs':'documentation',
                'simplereportershowBlock': 'show other blocks',
                'simplereporterhideBlock': 'hide other blocks',
                'simplereportershowBlock?':'To avoid clutter, some infrequently used blocks are hidden.\nDo you want to show hidden blocks?',

                'boolean':'Boolean',
                'number':'Number',
                'object':'Array or Object',
                'string':'String',
                'undefined':'undefined',

                'titleStrings':'Strings',
                'rreporterDV': 'hello',
                'rif': 'if[a]then[b]else[c]',
                'rifbDV': 'yes',
                'rifcDV': 'no',
                'band': '[a]and[b]',
                'bor': '[a]or[b]',
                'bnot': 'not[a]',
                'rremove':'remove[b]from[a]',
                'rinterchange':'[a]interchanges[b]and[c]',
                'rdefault':'[a],default=[b]',
                'bdefined':'[a]is defined',
                'bundefined':'[a]is undefined',
                'bnotstrictlyequal':'[a]is not identically[b]',
                'bnotcontain':'[a]does not contain[b]',

                'titleOperators':'Operators',
                'rmod':'[a]mod[b]',
                'rnearestmultiple':'multiple of[b]near[a]',
                'rround':'round[a]to[b]decimal places',
                'rrintfromto':'round[a]from[b]to[c]decimal places',
                'rrinttotimes':'round[a]to[b]decimal places,round it[c]times',
                'rrinttimesto':'round[a][b]times to[c]decimal places',
                'rPI':'round π to[a]decimal places',
                'rradsin':'sin[a]in rad',
                'rradcos':'cos[a]in rad',
                'rradtan':'tan[a]in rad',
                'rradasin':'asin[a]in rad',
                'rradacos':'acos[a]in rad',
                'rradatan':'atan[a]in rad',
                'rtoonehundredeighty':'[a]changes into -180~180',
                'rtothreehundredsixty':'[a]changes into 0~360',
                'raddto':'[a]add[b]to[c]',

                'rJSONtypeof':'the type of[a]',
                'bJSONtypeof':'the type of[a]is[b]',

                'titleArray':'Array',
                'bArraystrictlyequal':'[a]is identically[b]',
                'rArraysum':'sum of[a]',
                'rArrayproduct':'product of[a]',
                'rArrayaverage':'average of[a]',
                'rArraymax':'max[a]',
                'rArraymin':'min[a]',
                'bArrayhavebignumber':'[a]contains number>[b]',
                'bArrayhavenotsmallnumber':'[a]contains number≥[b]',
                'bArrayhavesmallnumber':'[a]contains number<[b]',
                'bArrayhavenotbignumber':'[a]contains number≤[b]',
                'bArrayhave':'[a]contains number=[b]',
                'bArrayhavestr':'[a]contains "[b]"',
                'bArrayhavesth':'[a]contains[b]',
                'bArrayhaveJSON':'[a]contains JSON[b]',
                'bArraybebignumber':'[a]only contains number>[b]',
                'bArraybenotsmallnumber':'[a]only contains number≥[b]',
                'bArraybesmallnumber':'[a]only contains number<[b]',
                'bArraybenotbignumber':'[a]only contains number≤[b]',
                'bArraybe':'[a]only contains number=[b]',
                'bArraybestr':'[a]only contains "[b]"',
                'bArraybesth':'[a]only contains[b]',
                'bArraybeJSON':'[a]only contains SJON[b]',
                'rArrayremovebignumber':'number>[b]delete from[a]',
                'rArrayremovenotsmallnumber':'number≥[b]delete from[a]',
                'rArrayremovesmallnumber':'number<[b]delete from[a]',
                'rArrayremovenotbignumber':'number≤[b]delete from[a]',
                'rArrayremove':'all number[b]delete from[a]',
                'rArrayremovestr':'all "[b]" delete from[a]',
                'rArrayremovesth':'all[b]delete from[a]',
                'rArrayremoveJSON':'all JSON[b]delete from[a]',
                'rArrayremoveshift':'[a]delete the first item',
                'rArrayremovepop':'[a]delete the last item',
                'rArrayremoveitem':'delete item[b]of[a]',
                'rArrayremoveitems':'delete items[b]of[a]',
                'rArrayremoveitemtoitem':'delete item from[b]to[c]of[a]',
                'rArrayreserveitem':'reserve item[b]of[a]',
                'rArrayshift':'the first item of[a]',
                'rArraypop':'the last item of[a]',
                'rArrayitem':'item[b]of[a]',
                'rArrayitems':'items[b]of[a]',
                'rArrayshiftJSON':'the first item as JSON of[a]',
                'rArraypopJSON':'the last item as JSON of[a]',
                'rArrayitemJSON':'item[b]as JSON of[a]',
                'rArrayitemtoitem':'item from[b]to[c]of[a]',
                'rArrayunshift':'[a]inserts[b]at the first one',
                'rArraypush':'[a]inserts[b]at the last one',
                'rArrayinsert':'[a]inserts[b]at[c]',
                'rArrayinsertindextoindex':'[a]inserts[b]from[c]to[d]',
                'rArrayunshiftstr':'[a]inserts "[b]" at the first one',
                'rArraypushstr':'[a]inserts "[b]" at the last one',
                'rArrayinsertstr':'[a]inserts "[b]" at[c]',
                'rArrayinsertstrindextoindex':'[a]inserts "[b]" from[c]to[d]',
                'rArrayunshiftJSON':'[a]inserts JSON[b]at the first one',
                'rArraypushJSON':'[a]inserts JSON[b]at the last one',
                'rArrayinsertJSON':'[a]inserts JSON[b]at[c]',
                'rArrayinsertJSONindextoindex':'[a]inserts JSON[b]from[c]to[d]',
                'rArraymove':'[a]item[b]move to[c]',
                'rArrayinterchange':'[a]interchanges item[b]and item[c]',
                'rArrayreplace':'set item[b]of[a]to[c]',
                'rArrayreplaceindexes':'set items[b]of[a]to[c]',
                'rArrayreplaceindextoindex':'set item from[b]to[c]of[a]to[d]',
                'rArrayreplacestr':'set item[b]of[a]to "[c]"',
                'rArrayreplaceindexesstr':'set items[b]of[a]to "[c]"',
                'rArrayreplaceindextoindexstr':'set item from[b]to[c]of[a]to "[d]"',
                'rArrayreplaceJSON':'set item[b]of[a]to JSON[c]',
                'rArrayreplaceindexesJSON':'set items[b]of[a]to JSON[c]',
                'rArrayreplaceindextoindexJSON':'set item from[b]to[c]of[a]to JSON[d]',
                'rArrayplusindex':'change by[c]at[b]of[a]',
                'rArrayplusindextoindex':'change by[d]from[b]to[c]of[a]',
                'rArrayplus':'change by[b]at every item of[a]',
                'rArrayindex':'the first[b]in[a]',
                'rArrayindexstr':'the first "[b]" in[a]',
                'rArrayindexJSON':'the first JSON[b]in[a]',
                'rArraylastindex':'the last[b]in[a]',
                'rArraylastindexstr':'the last "[b]" in[a]',
                'rArraylastindexJSON':'the last JSON[b]in[a]',
                'rArrayallindex':'all[b]in[a]',
                'rArrayallindexstr':'all "[b]" in[a]',
                'rArrayallindexJSON':'all JSON[b]in[a]',
                'rArrayfindIndexbignumber':'the first number>[b]in[a]',
                'rArrayfindIndexnotsmallnumber':'the first number≥[b]in[a]',
                'rArrayfindIndexsmallnumber':'the first number<[b]in[a]',
                'rArrayfindIndexnotbignumber':'the first number≤[b]in[a]',
                'rArraycountbignumber':'count number>[b]in[a]',
                'rArraycountnotsmallnumber':'count number≥[b]in[a]',
                'rArraycountsmallnumber':'count number<[b]in[a]',
                'rArraycountnotbignumber':'count number≤[b]in[a]',
                'rArraycount':'count number=[b]in[a]',
                'rArraycountstr':'count "[b]" in[a]',
                'rArraycountsth':'count[b]in[a]',
                'rArraycountJSON':'count JSON[b]in[a]',
                'rArraysortnaturalOrder':'sort[a]by ascending',
                'rArraysortreverseOrder':'sort[a]by descending',
                'rArrayreverse':'reverse[a]',
                'bArrayclear':'[a]has nothing',
                'rArraylength':'length of[a]',
                'bisArray':'[a]is Array',

                'titleObject':'Object',
                'rObjectvalue':'value of key[b]in[a]',
                'rObjectvalueJSON':'value as JSON of key[b]in[a]',
                'rObjectkey':'key of the first value[b]in[a]',
                'rObjectlastkey':'key of the last value[b]in[a]',
                'rObjectallkey':'keys of value[b]in[a]',
                'rObjectkeystr':'key of the first value "[b]" in[a]',
                'rObjectlastkeystr':'key of the last value "[b]" in[a]',
                'rObjectallkeystr':'keys of value "[b]" in[a]',
                'rObjectkeyJSON':'key of the first value JSON[b]in[a]',
                'rObjectlastkeyJSON':'key of the last value JSON[b]in[a]',
                'rObjectallkeyJSON':'keys of value JSON[b]in[a]',
                'rObjectputkey':'set[b]in[a]to[c]',
                'rObjectputkeystr':'set[b]in[a]to"[c]"',
                'rObjectputkeyJSON':'set[b]in[a]to JSON[c]',
                'rObjectpluskey':'value of key[b]change by[c]in[a]',
                'rObjectplus':'values change by[b]in[a]',
                'rObjectputAll':'concat[a][b]',
                'rObjectremove':'delete key[b]from[a]',
                'rObjectremovekeys':'delete keys[b]from[a]',
                'rObjectkeys':'keys of[a]',
                'rObjectvalues':'values of[a]',
                'rObjectentries':'data of[a]',
                'rObjectfromentries':'[a]as Object',
                'bObjecthasownproperty':'[a]contians key[b]',
                'bObjectclear':'[a]has nothing',
                'rObjectlength':'length of[a]',
                'bisObject':'[a]is Object',

                'titleMore':'More',
                
                'titletobecontinued':'To be continued',

                'r':'',
            }
        })
	}
    formatMessage(id) {
        return this._formatMessage({
            id,
            default: id,
            description: id
        });
    }
    getInfo(){
        return{
            id:simplereporterextensionId,
            name:this.formatMessage('rname'),
            blockIconURI:'',
            menuIconURI: simplereportericon,
            color1:'#59c059',
            color2:'#8bbf8b',
            blocks:[
                {
                    blockType: "button",
                    text: this.formatMessage('simplereporterdocs'),
                    onClick: this.docs,
                },
                {
                    blockType: 'button',
                    hideFromPalette: !this.hideExtraBlocks,
                    text: this.formatMessage('simplereportershowBlock'),
                    onClick: () => {
                      if (confirm(this.formatMessage('simplereportershowBlock?'))) {
                        this.hideExtraBlocks = false;
                        this.storeExtConfig();
                        this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE')
                      }
                    },
                  },
                  {
                    blockType: 'button',
                    text: this.formatMessage('simplereporterhideBlock'),
                    hideFromPalette: this.hideExtraBlocks,
                    onClick: () => {
                      this.hideExtraBlocks = true;
                      this.storeExtConfig();
                      this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE')
                    },
                  },
                '---' + this.formatMessage('titleStrings'),
                {
                    opcode:'rreporter',
                    blockType:'reporter',
                    text:'[a]',
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:this.formatMessage('rreporterDV')
                        }
                    }
                },
                {
                    opcode:'rboolean',
                    blockType:'Boolean',
                    text:'[a]',
                    arguments:{
                        a:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bToBoolean',
                    blockType:'Boolean',
                    text:'[a]'
                },
                {
                    opcode:'rif',
                    blockType:'reporter',
                    text: this.formatMessage('rif'),
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            type:'string',
                            defaultValue:this.formatMessage('rifbDV')
                        },
                        c:{
                            type:'string',
                            defaultValue:this.formatMessage('rifcDV')
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rifToBoolean',
                    blockType:'reporter',
                    text: this.formatMessage('rif'),
                    arguments:{
                        b:{
                            type:'string',
                            defaultValue:this.formatMessage('rifbDV')
                        },
                        c:{
                            type:'string',
                            defaultValue:this.formatMessage('rifcDV')
                        }
                    }
                },
                {
                    opcode:'band',
                    blockType:'Boolean',
                    text: this.formatMessage('band'),
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bor',
                    blockType:'Boolean',
                    text: this.formatMessage('bor'),
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bnot',
                    blockType:'Boolean',
                    text: this.formatMessage('bnot'),
                    arguments:{
                        a:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bandToBoolean',
                    blockType:'Boolean',
                    text: this.formatMessage('band')
                },
                {
                    opcode:'borToBoolean',
                    blockType:'Boolean',
                    text: this.formatMessage('bor')
                },
                {
                    opcode:'bnotToBoolean',
                    blockType:'Boolean',
                    text: this.formatMessage('bnot')
                },
                {
                    opcode:'rjoin',
                    blockType:'reporter',
                    text:'[a][b][c]',
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'c'
                        },
                        b:{
                            type:'string',
                            defaultValue:'c'
                        },
                        c:{
                            type:'string',
                            defaultValue:'w'
                        }
                    }
                },
                {
                    opcode:'rremove',
                    blockType:'reporter',
                    text: this.formatMessage('rremove'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'bilioicik'
                        },
                        b:{
                            type:'string',
                            defaultValue:'i'
                        }
                    }
                },
                {
                    opcode:'rinterchange',
                    blockType:'reporter',
                    text: this.formatMessage('rinterchange'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'god'
                        },
                        b:{
                            type:'string',
                            defaultValue:'d'
                        },
                        c:{
                            type:'string',
                            defaultValue:'g'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rdefault',
                    blockType:'reporter',
                    text: this.formatMessage('rdefault'),
                    arguments:{
                        b:{
                            type:'string'
                        }
                    }
                },
                {
                    opcode:'bdefined',
                    blockType:'Boolean',
                    text: this.formatMessage('bdefined'),
                },
                {
                    opcode:'bundefined',
                    blockType:'Boolean',
                    text: this.formatMessage('bundefined'),
                },
                {
                    opcode:'bnotstrictlyequal',
                    blockType:'Boolean',
                    text:this.formatMessage('bnotstrictlyequal'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'Shawn'
                        },
                        b:{
                            type:'string',
                            defaultValue:'shawn'
                        }
                    }
                },
                {
                    opcode:'bnotcontain',
                    blockType:'Boolean',
                    text:this.formatMessage('bnotcontain'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'apple'
                        },
                        b:{
                            type:'string',
                            defaultValue:'app'
                        }
                    }
                }, 
                '---' + this.formatMessage('titleOperators'),
                {
                    opcode:'bnotequal',
                    blockType:'Boolean',
                    text:'[a]≠[b]',
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            type:'string'
                        }
                    }
                }, 
                {
                    opcode:'rsign',
                    blockType:'reporter',
                    text:'±[a]',
                    arguments:{
                        a:{
                            type:'string'
                        }
                    }
                },
                {
                    opcode:'raddition',
                    blockType:'reporter',
                    text:'[a]+[b]+[c]',
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            type:'string'
                        },
                        c:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                }, 
                {
                    opcode:'radditionmultiplication',
                    blockType:'reporter',
                    text:'([a]+[b])*[c]',
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            type:'string'
                        },
                        c:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                }, 
                {
                    opcode:'rmod',
                    blockType:'reporter',
                    text: this.formatMessage('rmod'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:-12
                        },
                        b:{
                            type:'string',
                            defaultValue:7
                        }
                    }
                }, 
                {
                    opcode:'rnearestmultiple',
                    blockType:'reporter',
                    text: this.formatMessage('rnearestmultiple'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:12
                        },
                        b:{
                            type:'string',
                            defaultValue:7
                        }
                    }
                }, 
                {
                    opcode:'rround',
                    blockType:'reporter',
                    text: this.formatMessage('rround'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:3.1415926
                        },
                        b:{
                            type:'string',
                            defaultValue:3
                        }
                    }
                }, 
                {
                    opcode:'rrintfromto',
                    blockType:'reporter',
                    text: this.formatMessage('rrintfromto'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:3.1415926
                        },
                        b:{
                            type:'string',
                            defaultValue:6
                        },
                        c:{
                            type:'string',
                            defaultValue:3
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                }, 
                {
                    opcode:'rrinttotimes',
                    blockType:'reporter',
                    text: this.formatMessage('rrinttotimes'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:3.1415926
                        },
                        b:{
                            type:'string',
                            defaultValue:6
                        },
                        c:{
                            type:'string',
                            defaultValue:3
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                }, 
                {
                    opcode:'rrinttimesto',
                    blockType:'reporter',
                    text: this.formatMessage('rrinttimesto'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:3.1415926
                        },
                        b:{
                            type:'string',
                            defaultValue:3
                        },
                        c:{
                            type:'string',
                            defaultValue:3
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rPI',
                    blockType:'reporter',
                    text:this.formatMessage('rPI'),
                    arguments:{
                        a:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rradsin',
                    blockType:'reporter',
                    text:this.formatMessage('rradsin'),
                    arguments:{
                        a:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rradcos',
                    blockType:'reporter',
                    text:this.formatMessage('rradcos'),
                    arguments:{
                        a:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rradtan',
                    blockType:'reporter',
                    text:this.formatMessage('rradtan'),
                    arguments:{
                        a:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rradasin',
                    blockType:'reporter',
                    text:this.formatMessage('rradasin'),
                    arguments:{
                        a:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rradacos',
                    blockType:'reporter',
                    text:this.formatMessage('rradacos'),
                    arguments:{
                        a:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rradatan',
                    blockType:'reporter',
                    text:this.formatMessage('rradatan'),
                    arguments:{
                        a:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rsinmultiplication',
                    blockType:'reporter',
                    text:'[a]*sin[b]',
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                }, 
                {
                    opcode:'rcosmultiplication',
                    blockType:'reporter',
                    text:'[a]*cos[b]',
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                }, 
                {
                    opcode:'rtanmultiplication',
                    blockType:'reporter',
                    text:'[a]*tan[b]',
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rasindivision',
                    blockType:'reporter',
                    text:'asin[a]/[b]',
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                }, 
                {
                    opcode:'racosdivision',
                    blockType:'reporter',
                    text:'acos[a]/[b]',
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                }, 
                {
                    opcode:'ratandivision',
                    blockType:'reporter',
                    text:'atan[a]/[b]',
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rtoonehundredeighty',
                    blockType:'reporter',
                    text:this.formatMessage('rtoonehundredeighty'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:666
                        }
                    }
                },
                {
                    opcode:'rtothreehundredsixty',
                    blockType:'reporter',
                    text:this.formatMessage('rtothreehundredsixty'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:666
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'raddto',
                    blockType:'reporter',
                    text:this.formatMessage('raddto'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:233
                        },
                        b:{
                            type:'string',
                            defaultValue:6
                        },
                        c:{
                            type:'string',
                            defaultValue:250
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                '---JSON',
                {
                    opcode:'rJSONtypeof',
                    blockType:'reporter',
                    text:this.formatMessage('rJSONtypeof'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bJSONtypeof',
                    blockType:'Boolean',
                    text:this.formatMessage('bJSONtypeof'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[]'
                        },
                        b:{
                            menu:'type'
                        }
                    }
                },

                '---' + this.formatMessage('titleArray'),
                {
                    opcode:'bArrayequal',
                    blockType:'Boolean',
                    text: '[a]=[b]',
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:'["fun","k",1,"1",4,5,1,4]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArraystrictlyequal',
                    blockType:'Boolean',
                    text: this.formatMessage('bArraystrictlyequal'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:'["Fun","k",1,"1",4,5,1,4]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraysum',
                    blockType:'reporter',
                    text: this.formatMessage('rArraysum'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        }
                    }
                },
                {
                    opcode:'rArrayproduct',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayproduct'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayaverage',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayaverage'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraymax',
                    blockType:'reporter',
                    text: this.formatMessage('rArraymax'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        }
                    }
                },
                {
                    opcode:'rArraymin',
                    blockType:'reporter',
                    text: this.formatMessage('rArraymin'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        }
                    }
                },
                {
                    opcode:'bArrayhavebignumber',
                    blockType:'Boolean',
                    text: this.formatMessage('bArrayhavebignumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArrayhavenotsmallnumber',
                    blockType:'Boolean',
                    text: this.formatMessage('bArrayhavenotsmallnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArrayhavesmallnumber',
                    blockType:'Boolean',
                    text: this.formatMessage('bArrayhavesmallnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArrayhavenotbignumber',
                    blockType:'Boolean',
                    text: this.formatMessage('bArrayhavenotbignumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArrayhave',
                    blockType:'Boolean',
                    text: this.formatMessage('bArrayhave'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    }
                },
                {
                    opcode:'bArrayhavestr',
                    blockType:'Boolean',
                    text: this.formatMessage('bArrayhavestr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    }
                },
                {
                    opcode:'bArrayhavesth',
                    blockType:'Boolean',
                    text: this.formatMessage('bArrayhavesth'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    }
                },
                {
                    opcode:'bArrayhaveJSON',
                    blockType:'Boolean',
                    text: this.formatMessage('bArrayhaveJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    }
                },
                {
                    opcode:'bArraybebignumber',
                    blockType:'Boolean',
                    text: this.formatMessage('bArraybebignumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArraybenotsmallnumber',
                    blockType:'Boolean',
                    text: this.formatMessage('bArraybenotsmallnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArraybesmallnumber',
                    blockType:'Boolean',
                    text: this.formatMessage('bArraybesmallnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArraybenotbignumber',
                    blockType:'Boolean',
                    text: this.formatMessage('bArraybenotbignumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArraybe',
                    blockType:'Boolean',
                    text: this.formatMessage('bArraybe'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArraybestr',
                    blockType:'Boolean',
                    text: this.formatMessage('bArraybestr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArraybesth',
                    blockType:'Boolean',
                    text: this.formatMessage('bArraybesth'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArraybeJSON',
                    blockType:'Boolean',
                    text: this.formatMessage('bArraybeJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayremovebignumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayremovebignumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayremovenotsmallnumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayremovenotsmallnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayremovesmallnumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayremovesmallnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayremovenotbignumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayremovenotbignumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayremove',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayremove'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    }
                },
                {
                    opcode:'rArrayremovestr',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayremovestr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    }
                },
                {
                    opcode:'rArrayremovesth',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayremovesth'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    }
                },
                {
                    opcode:'rArrayremoveJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayremoveJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    }
                },
                {
                    opcode:'rArrayremoveshift',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayremoveshift'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayremovepop',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayremovepop'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayremoveitem',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayremoveitem'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:0
                        }
                    }
                },
                {
                    opcode:'rArrayremoveitems',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayremoveitems'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:'[1,1,0,2]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayremoveitemtoitem',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayremoveitemtoitem'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:0
                        },
                        c:{
                            type:'string',
                            defaultValue:6
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayreserveitem',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayreserveitem'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:0
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayshift',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayshift'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraypop',
                    blockType:'reporter',
                    text: this.formatMessage('rArraypop'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayitem',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayitem'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:-1
                        }
                    }
                },
                {
                    opcode:'rArrayshiftJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayshiftJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraypopJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rArraypopJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayitemJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayitemJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:-1
                        }
                    }
                },
                {
                    opcode:'rArrayitems',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayitems'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:'[1,1,0,2]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayitemtoitem',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayitemtoitem'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:-8
                        },
                        c:{
                            type:'string',
                            defaultValue:-2
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayunshift',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayunshift'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraypush',
                    blockType:'reporter',
                    text: this.formatMessage('rArraypush'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayinsert',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayinsert'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        },
                        c:{
                            type:'string',
                            defaultValue:1
                        }
                    }
                },
                {
                    opcode:'rArrayinsertindexes',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayinsert'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        },
                        c:{
                            type:'string',
                            defaultValue:'[1,1,0,2]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayinsertindextoindex',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayinsertindextoindex'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        },
                        c:{
                            type:'string',
                            defaultValue:1
                        },
                        d:{
                            type:'string',
                            defaultValue:6
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayunshiftstr',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayunshiftstr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraypushstr',
                    blockType:'reporter',
                    text: this.formatMessage('rArraypushstr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayinsertstr',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayinsertstr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        },
                        c:{
                            type:'string',
                            defaultValue:1
                        }
                    }
                },
                {
                    opcode:'rArrayinsertstrindexes',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayinsertstr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        },
                        c:{
                            type:'string',
                            defaultValue:'[1,1,0,2]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayinsertstrindextoindex',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayinsertstrindextoindex'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        },
                        c:{
                            type:'string',
                            defaultValue:1
                        },
                        d:{
                            type:'string',
                            defaultValue:6
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayunshiftJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayunshiftJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraypushJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rArraypushJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayinsertJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayinsertJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        },
                        c:{
                            type:'string',
                            defaultValue:1
                        }
                    }
                },
                {
                    opcode:'rArrayinsertJSONindexes',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayinsertJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        },
                        c:{
                            type:'string',
                            defaultValue:'[1,1,0,2]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayinsertJSONindextoindex',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayinsertJSONindextoindex'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        },
                        c:{
                            type:'string',
                            defaultValue:1
                        },
                        d:{
                            type:'string',
                            defaultValue:6
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraymove',
                    blockType:'reporter',
                    text: this.formatMessage('rArraymove'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        },
                        c:{
                            type:'string',
                            defaultValue:6
                        }
                    }
                },
                {
                    opcode:'rArrayinterchange',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayinterchange'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        },
                        c:{
                            type:'string',
                            defaultValue:6
                        }
                    }
                },
                {
                    opcode:'rArrayreplace',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayreplace'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        },
                        c:{
                            type:'string',
                            defaultValue:114514
                        }
                    }
                },
                {
                    opcode:'rArrayreplaceindexes',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayreplaceindexes'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:'[1,1,0,2]'
                        },
                        c:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayreplaceindextoindex',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayreplaceindextoindex'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        },
                        c:{
                            type:'string',
                            defaultValue:6
                        },
                        d:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayreplacestr',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayreplacestr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        },
                        c:{
                            type:'string',
                            defaultValue:114514
                        }
                    }
                },
                {
                    opcode:'rArrayreplaceindexesstr',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayreplaceindexesstr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:'[1,1,0,2]'
                        },
                        c:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayreplaceindextoindexstr',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayreplaceindextoindexstr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        },
                        c:{
                            type:'string',
                            defaultValue:6
                        },
                        d:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayreplaceJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayreplaceJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        },
                        c:{
                            type:'string',
                            defaultValue:114514
                        }
                    }
                },
                {
                    opcode:'rArrayreplaceindexesJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayreplaceindexesJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:'[1,1,0,2]'
                        },
                        c:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayreplaceindextoindexJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayreplaceindextoindexJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        },
                        c:{
                            type:'string',
                            defaultValue:6
                        },
                        d:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayplusindex',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayplusindex'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        },
                        c:{
                            type:'string',
                            defaultValue:114514
                        }
                    }
                },
                {
                    opcode:'rArrayplusindexes',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayplusindex'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue:'[1,1,0,2]'
                        },
                        c:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayplusindextoindex',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayplusindextoindex'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        },
                        c:{
                            type:'string',
                            defaultValue:6
                        },
                        d:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayplus',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayplus'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        }
                    }
                },
                {
                    opcode:'rArrayindex',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayindex'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    }
                },
                {
                    opcode:'rArrayindexstr',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayindexstr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    }
                },
                {
                    opcode:'rArrayindexJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayindexJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    }
                },
                {
                    opcode:'rArraylastindex',
                    blockType:'reporter',
                    text: this.formatMessage('rArraylastindex'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraylastindexstr',
                    blockType:'reporter',
                    text: this.formatMessage('rArraylastindexstr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraylastindexJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rArraylastindexJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayallindex',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayallindex'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayallindexstr',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayallindexstr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayallindexJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayallindexJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayfindIndexbignumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayfindIndexbignumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayfindIndexnotsmallnumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayfindIndexnotsmallnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayfindIndexsmallnumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayfindIndexsmallnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayfindIndexnotbignumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayfindIndexnotbignumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraycountbignumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArraycountbignumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraycountnotsmallnumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArraycountnotsmallnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraycountsmallnumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArraycountsmallnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraycountnotbignumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArraycountnotbignumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraycount',
                    blockType:'reporter',
                    text: this.formatMessage('rArraycount'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraycountstr',
                    blockType:'reporter',
                    text: this.formatMessage('rArraycountstr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraycountsth',
                    blockType:'reporter',
                    text: this.formatMessage('rArraycountsth'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraycountJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rArraycountJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraysortnaturalOrder',
                    blockType:'reporter',
                    text: this.formatMessage('rArraysortnaturalOrder'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                        }
                    }
                },
                {
                    opcode:'rArraysortreverseOrder',
                    blockType:'reporter',
                    text: this.formatMessage('rArraysortreverseOrder'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                        }
                    }
                },
                {
                    opcode:'rArrayreverse',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayreverse'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArrayclear',
                    blockType:'Boolean',
                    text: this.formatMessage('bArrayclear'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraylength',
                    blockType:'reporter',
                    text: this.formatMessage('rArraylength'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[]'
                        }
                    }
                },
                {
                    opcode:'bisArray',
                    blockType:'Boolean',
                    text: this.formatMessage('bisArray'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                '---' + this.formatMessage('titleObject'),
                {
                    opcode:'rObjectvalue',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectvalue'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","job":"CCW creator"}'
                        },
                        b:{
                            type:'string',
                            defaultValue:'job'
                        }
                    }
                },
                {
                    opcode:'rObjectvalueJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectvalueJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","job":"CCW creator"}'
                        },
                        b:{
                            type:'string',
                            defaultValue:'job'
                        }
                    }
                },
                {
                    opcode:'rObjectkey',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectkey'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","id":1701001}'
                        },
                        b:{
                            type:'string',
                            defaultValue:1701001
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectlastkey',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectlastkey'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","id":1701001}'
                        },
                        b:{
                            type:'string',
                            defaultValue:1701001
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectallkey',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectallkey'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","id":1701001}'
                        },
                        b:{
                            type:'string',
                            defaultValue:1701001
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectkeystr',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectkeystr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","job":"CCW creator"}'
                        },
                        b:{
                            type:'string',
                            defaultValue:'CCW creator'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectlastkeystr',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectlastkeystr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","job":"CCW creator"}'
                        },
                        b:{
                            type:'string',
                            defaultValue:'CCW creator'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectallkeystr',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectallkeystr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","job":"CCW creator"}'
                        },
                        b:{
                            type:'string',
                            defaultValue:'CCW creator'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectkeyJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectkeyJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","id":1701001}'
                        },
                        b:{
                            type:'string',
                            defaultValue:1701001
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectlastkeyJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectlastkeyJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","id":1701001}'
                        },
                        b:{
                            type:'string',
                            defaultValue:1701001
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectallkeyJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectallkeyJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","id":1701001}'
                        },
                        b:{
                            type:'string',
                            defaultValue:1701001
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectputkey',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectputkey'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn"}'
                        },
                        b:{
                            type:'string',
                            defaultValue:'id'
                        },
                        c:{
                            type:'string',
                            defaultValue:1701001
                        }
                    }
                },
                {
                    opcode:'rObjectputkeystr',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectputkeystr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn"}'
                        },
                        b:{
                            type:'string',
                            defaultValue:'job'
                        },
                        c:{
                            type:'string',
                            defaultValue:'CCW creator'
                        }
                    }
                },
                {
                    opcode:'rObjectputkeyJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectputkeyJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn"}'
                        },
                        b:{
                            type:'string',
                            defaultValue:'id'
                        },
                        c:{
                            type:'string',
                            defaultValue:1701001
                        }
                    }
                },
                {
                    opcode:'rObjectpluskey',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectpluskey'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"sharpness":5,"knockback":2}'
                        },
                        b:{
                            type:'string',
                            defaultValue:'knockback'
                        },
                        c:{
                            type:'string',
                            defaultValue:1
                        }
                    }
                },
                {
                    opcode:'rObjectplus',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectplus'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"sharpness":5,"knockback":2}'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    }
                },
                {
                    opcode:'rObjectputAll',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectputAll'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"job":"CCW creator"}'
                        },
                        b:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","job":"CCW creater"}'
                        }
                    }
                },
                {
                    opcode:'rObjectplusObject',
                    blockType:'reporter',
                    text:'[a]+[b]',
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"sharpness":5,"knockback":2}'
                        },
                        b:{
                            type:'string',
                            defaultValue:'{"knockback":1,"fire aspect":2,"looting":3}'
                        }
                    }
                },
                {
                    opcode:'rObjectremove',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectremove'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","job":"CCW creater"}'
                        },
                        b:{
                            type:'string',
                            defaultValue:'job'
                        }
                    }
                },
                {
                    opcode:'rObjectremovekeys',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectremovekeys'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","job":"CCW creater"}'
                        },
                        b:{
                            type:'string',
                            defaultValue:'["name","job"]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectkeys',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectkeys'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","job":"CCW creator"}'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectvalues',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectvalues'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","job":"CCW creator"}'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectentries',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectentries'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","job":"CCW creator"}'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectfromentries',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectfromentries'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[["name","Shawn"],["job","CCW creator"]]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bObjecthasownproperty',
                    blockType:'Boolean',
                    text: this.formatMessage('bObjecthasownproperty'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","job":"CCW creator"}'
                        },
                        b:{
                            type:'string',
                            defaultValue:'job'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bObjectclear',
                    blockType:'Boolean',
                    text: this.formatMessage('bObjectclear'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{}'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectlength',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectlength'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{}'
                        }
                    }
                },
                {
                    opcode:'bisObject',
                    blockType:'Boolean',
                    text: this.formatMessage('bisObject'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{}'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                '---' + this.formatMessage('titleMore'),
                
                '---' + this.formatMessage('titletobecontinued')
            ],
            menus:{
                boolean:{
                    acceptReporters:true,
                    items:['','true','false']
                },
                type: {
                    acceptReporters:true,
                    items:[
                        {
                            text: this.formatMessage('boolean'), 
                            value: 'boolean'
                        },
                        {
                            text: this.formatMessage('number'), 
                            value: 'number'
                        },
                        {
                            text: this.formatMessage('object'), 
                            value: 'object'
                        },
                        {
                            text: this.formatMessage('string'), 
                            value: 'string'
                        },
                        {
                            text: this.formatMessage('undefined'), 
                            value: 'undefined'
                        }
                    ]
                },
            }
        }
    }

    docs() {
        let a = document.createElement('a');
        a.href = "https://learn.ccw.site/article/306d54d0-b83a-43f3-ba84-bd41a7183239";
        a.rel = "noopener noreferrer";
        a.target = "blank";
        a.click();
    }
    findExtConfigComment() {
        const stage = this.runtime.getTargetForStage();
        if (!stage || !stage.comments) return undefined;
        return stage.comments[EXTCONFIGCOMMENTID];
    }
    getAllExtConfig() {
        const comment = this.findExtConfigComment();
        if (!comment) return undefined;
        const lines = comment.text.split('\n');
        if (lines.length === 0) {
          console.warn(
            `${simplereporterextensionId}: Extension config comment does not contain valid line.`,
          );
          return undefined;
        }
        const jsonText = lines[lines.length - 1];
        try {
          const parsed = JSON.parse(jsonText);
          if (!parsed || typeof parsed !== 'object') {
            throw new Error('Invalid object');
          }
          return parsed;
        } catch (e) {
          console.warn(`${simplereporterextensionId}: Config comment has invalid JSON`, e);
          return undefined;
        }
    }
    parseExtConfig() {
        let config = this.getAllExtConfig();
        if (!config) return false;
        config = config[simplereporterextensionId];
        if (!config) return false;
        if ('hideExtraBlocks' in config) {
          this.hideExtraBlocks = Cast.toBoolean(config.hideExtraBlocks);
          this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE');
        }
        return true;
    }
    generateExtConfig() {
        const options = {};
        options.hideExtraBlocks = this.hideExtraBlocks;
        return options;
    }
    
      storeExtConfig() {
        let config = this.getAllExtConfig();
        if (!config) config = {};
        config[simplereporterextensionId] = this.generateExtConfig();
    
        const existingComment = this.findExtConfigComment();
        if (existingComment) {
          const lines = existingComment.text.split('\n');
          if (lines.length === 0) {
            lines.push('');
          }
          lines[lines.length - 1] = JSON.stringify(config);
          existingComment.text = lines.join('\n');
        } else {
          const target = this.runtime.getTargetForStage();
          const text = `${this.formatMessage('config.tip')}\n${JSON.stringify(
            config,
          )}`;
          target.createComment(
            EXTCONFIGCOMMENTID,
            null,
            text,
            1,
            1,
            400,
            200,
            false,
          );
        }
        this.runtime.emitProjectChanged();
    }
    ToBoolean(a){
        return ! [0,false,'','0','false','undefined','null'].includes(a)
    }
    rreporter(args){
        return args.a
    }
    rboolean(args){
        return args.a
    }
    bToBoolean(args){
        return this.ToBoolean(args.a)
    }
    rif(args){
        return args.a ? args.b : args.c
    }
    rifToBoolean(args){
        return [0,false,'','0','false','undefined','null'].includes(args.a) ? args.c : args.b
    }
    band(args){
        return args.a && args.b
    }
    bor(args){
        return args.a || args.b
    }
    bnot(args){
        return ! args.a
    }
    bandToBoolean(args){
        return this.ToBoolean(args.a) && this.ToBoolean(args.b)
    }
    borToBoolean(args){
        return this.ToBoolean(args.a) || this.ToBoolean(args.b)
    }
    bnotToBoolean(args){
        return [0,false,'','0','false','undefined','null'].includes(args.a)
    }
    rjoin(args){
        return args.a+args.b+args.c
    }
    rremove(args){
        return args.a.replaceAll(args.b,'')
    }
    rinterchange(args){
        const list = String(args.a).split(args.b);
        let a =list[0].replaceAll(args.c,args.b)
        for (let i = 1; i < list.length; i++){
            a=a+args.c+list[i].replaceAll(args.c,args.b)
        }
        return a
    }
    rdefault(args){
        if (['undefined','null',''].includes(args.a)) return args.b
        return args.a
    }
    bdefined(args){
        return ! ['undefined','null',''].includes(args.a)
    }
    bundefined(args){
        return ['undefined','null',''].includes(args.a)
    }
    bnotstrictlyequal(args){
        return args.a !== args.b
    }
    bnotcontain(args){
        return ! args.a.includes(args.b)
    }
    bnotequal(args){
        return args.a != args.b
    }
    rsign(args){
        return Math.floor(Math.random()*2) ? args.a : 0-args.a
    }
    raddition(args){
        return Number(args.a)+Number(args.b)+Number(args.c)
    }
    radditionmultiplication(args){
        return (Number(args.a)+Number(args.b))*args.c
    }
    rmod(args){
        return args.a % args.b
    }
    rnearestmultiple(args){
        return Math.round(args.a/args.b)*args.b
    }
    rround(args) {
        return (Number(args.a)).toFixed(args.b)
    }
    rrintfromto(args){
        let a = Number(args.a);
        const b = args.b-args.c
        for (let i = 0; i <= b; i++){
            a=Number(a.toFixed(args.b-i))
        }
        return a
    }
    rrinttotimes(args){
        let a = Number(args.a)
        for (let i = 0; i <= args.c; i++){
            a=Number(a.toFixed(args.b-i))
        }
        return a
    }
    rrinttimesto(args){
        let a = Number(args.a);
        const b = Number(args.b)+Number(args.c)
        for (let i = 0; i <= args.b; i++){
            a=Number(a.toFixed(b-i))
        }
        return a
    }
    rPI(args){
        return Math.PI.toFixed(args.a)
    }
    rradsin(args){
        return Math.sin(args.a)
    }
    rradcos(args){
        return Math.cos(args.a)
    }
    rradtan(args){
        return Math.tan(args.a)
    }
    rradasin(args){
        return Math.asin(args.a)
    }
    rradacos(args){
        return Math.acos(args.a)
    }
    rradatan(args){
        return Math.atan(args.a)
    }
    rsinmultiplication(args){
        return Math.sin(args.b)*Math.PI/180*args.a
    }
    rcosmultiplication(args){
        return Math.cos(args.b)*Math.PI/180*args.a
    }
    rtanmultiplication(args){
        return Math.tan(args.b)*Math.PI/180*args.a
    }
    rasindivision(args){
        return Math.asin(args.a/args.b)/Math.PI*180
    }
    racosdivision(args){
        return Math.acos(args.a/args.b)/Math.PI*180
    }
    ratandivision(args){
        return Math.atan(args.a/args.b)/Math.PI*180
    }
    rtoonehundredeighty(args){
        const a = args.a % 360
        return a+(a > -180 ? (a > 180 ? -360 : 0) : 360)
    }
    rtothreehundredsixty(args){
        let a = Number(args.a)
        while (a < 0){
            a+=360
        }
        return a % 360
    }
    raddto(args){
        const a = Number(args.a);
        const b = Number(args.b);
        const c = args.c;
        let list = [];
        let i = a + b
        while (i < c){
            list.push(i)
            i += b
        }
        return list
    }
    rJSONtypeof(args){
        return typeof JSON.parse(args.a)
    }
    bJSONtypeof(args){
        return typeof JSON.parse(args.a) == args.b
    }
    bArrayequal(args){
        return JSON.stringify(JSON.parse(args.a).sort(Scratch.Cast.compare))==JSON.stringify(JSON.parse(args.b).sort(Scratch.Cast.compare))
    }
    bArraystrictlyequal(args){
        return JSON.stringify(JSON.parse(args.a).sort(Scratch.Cast.compare))===JSON.stringify(JSON.parse(args.b).sort(Scratch.Cast.compare))
    }
    rArraysum(args){
        return JSON.parse(args.a).reduce((a, b) => a + b)
    }
    rArrayproduct(args){
        return JSON.parse(args.a).reduce((a, b) => a * b)
    }
    rArrayaverage(args){
        const list = JSON.parse(args.a);
        const sum = list.reduce((a, b) => a + b);
        return sum / list.length
    }
    rArraymax(args){
        return Math.max(...(JSON.parse(args.a)))
    }
    rArraymin(args){
        return Math.min(...(JSON.parse(args.a)))
    }
    bArrayhavebignumber(args){
        return JSON.parse(args.a).some(i => i > args.b)
    }
    bArrayhavenotsmallnumber(args){
        return JSON.parse(args.a).some(i => i >= args.b)
    }
    bArrayhavesmallnumber(args){
        return JSON.parse(args.a).some(i => i < args.b)
    }
    bArrayhavenotbignumber(args){
        return JSON.parse(args.a).some(i => i <= args.b)
    }
    bArrayhave(args){
        return JSON.parse(args.a).includes(Number(args.b))
    }
    bArrayhavestr(args){
        return JSON.parse(args.a).includes(args.b)
    }
    bArrayhavesth(args){
        return JSON.parse(args.a).some(i => i == args.b)
    }
    bArrayhaveJSON(args){
        return JSON.parse(args.a).some(i => JSON.stringify(i) == args.b)
    }
    bArraybebignumber(args){
        return JSON.parse(args.a).every(i => i > args.b)
    }
    bArraybenotsmallnumber(args){
        return JSON.parse(args.a).every(i => i >= args.b)
    }
    bArraybesmallnumber(args){
        return JSON.parse(args.a).every(i => i < args.b)
    }
    bArraybenotbignumber(args){
        return JSON.parse(args.a).every(i => i <= args.b)
    }
    bArraybe(args){
        return JSON.parse(args.a).every(i => i === Number(args.b))
    }
    bArraybestr(args){
        return JSON.parse(args.a).every(i => i === args.b)
    }
    bArraybesth(args){
        return JSON.parse(args.a).every(i => i == args.b)
    }
    bArraybeJSON(args){
        return JSON.parse(args.a).every(i => JSON.stringify(i) == args.b)
    }
    rArrayremovebignumber(args){        
        let na=[]
        JSON.parse(args.a).forEach(t => {
            if (t<=args.b)na.push(t)
        });
        return JSON.stringify(na)
    }
    rArrayremovenotsmallnumber(args){
        let na=[]
        JSON.parse(args.a).forEach(t => {
            if (t<args.b)na.push(t)
        });
        return JSON.stringify(na)
    }
    rArrayremovesmallnumber(args){
        let na=[]
        JSON.parse(args.a).forEach(t => {
            if (t>=args.b)na.push(t)
        });
        return JSON.stringify(na)
    }
    rArrayremovenotbignumber(args){
        let na=[]
        JSON.parse(args.a).forEach(t => {
            if (t>args.b)na.push(t)
        });
        return JSON.stringify(na)
    }
    rArrayremove(args){
        const b = Number(args.b)
        let na=[]
        JSON.parse(args.a).forEach(t => {
            if (t!==b)na.push(t)
        });
        return JSON.stringify(na)
    }
    rArrayremovestr(args){
        let na=[]
        JSON.parse(args.a).forEach(t => {
            if (t!==args.b)na.push(t)
        });
        return JSON.stringify(na)
    }
    rArrayremovesth(args){
        let na=[]
        JSON.parse(args.a).forEach(t => {
            if (t!=args.b)na.push(t)
        });
        return JSON.stringify(na)
    }
    rArrayremoveJSON(args){
        let na=[]
        JSON.parse(args.a).forEach(t => {
            if (JSON.stringify(t)!=args.b)na.push(t)
        });
        return JSON.stringify(na)
    }
    rArrayremoveshift(args){
        let a = JSON.parse(args.a);
        a.shift()
        return JSON.stringify(a)
    }
    rArrayremovepop(args){
        let a = JSON.parse(args.a);
        a.pop()
        return JSON.stringify(a)
    }
    rArrayremoveitem(args){
        let a = JSON.parse(args.a);
        a.splice(Number(args.b), 1)
        return JSON.stringify(a)
    }
    rArrayremoveitems(args){
        let a = JSON.parse(args.a)
        JSON.parse(args.b).sort(function(a,b){return b-a}).forEach(t=>{
            a.splice(Number(t), 1)
        })
        return JSON.stringify(a)
    }
    rArrayremoveitemtoitem(args){
        let a = JSON.parse(args.a);
        a.splice(Number(args.b), args.c-args.b)
        return JSON.stringify(a)
    }
    rArrayreserveitem(args){
        return JSON.stringify(JSON.parse(args.a).splice(Number(args.b), 1))
    }
    rArrayshift(args){
        return JSON.parse(args.a).shift()
    }
    rArraypop(args){
        return JSON.parse(args.a).pop()
    }
    rArrayitem(args){
        return JSON.parse(args.a).at(args.b)
    }
    rArrayshiftJSON(args){
        return JSON.stringify(JSON.parse(args.a).shift())
    }
    rArraypopJSON(args){
        return JSON.stringify(JSON.parse(args.a).pop())
    }
    rArrayitemJSON(args){
        return JSON.stringify(JSON.parse(args.a).at(args.b))
    }
    rArrayitems(args){
        const a = JSON.parse(args.a);
        let c = []
        JSON.parse(args.b).forEach(t=>{
            c.push(a.at(t))
        })
        return JSON.stringify(c)
    }
    rArrayitemtoitem(args){
        return JSON.stringify(JSON.parse(args.a).slice(args.b,args.c))
    }
    rArrayunshift(args){
        let a = JSON.parse(args.a);
        a.unshift(Number(args.b))
        return JSON.stringify(a)
    }
    rArraypush(args){
        let a = JSON.parse(args.a);
        a.push(Number(args.b))
        return JSON.stringify(a)
    }
    rArrayinsert(args){
        let a = JSON.parse(args.a);
        a.splice(args.c,0,Number(args.b))
        return JSON.stringify(a)
    }
    rArrayinsertindexes(args){
        let a = JSON.parse(args.a);
        const b = Number(args.b)
        JSON.parse(args.c).sort(function(a,b){return b-a}).forEach(t=>{
            a.splice(t,0,b)
        })
        return JSON.stringify(a)
    }
    rArrayinsertindextoindex(args){
        let a = JSON.parse(args.a);
        const b = Number(args.b);
        const c = Number(args.c)
        for(let i = 0; i < args.d-c; i++){
            a.splice(c+i,0,b)
        }
        return JSON.stringify(a)
    }
    rArrayunshiftstr(args){
        let a = JSON.parse(args.a);
        a.unshift(args.b)
        return JSON.stringify(a)
    }
    rArraypushstr(args){
        let a = JSON.parse(args.a);
        a.push(args.b)
        return JSON.stringify(a)
    }
    rArrayinsertstr(args){
        let a = JSON.parse(args.a);
        a.splice(args.c,0,args.b)
        return JSON.stringify(a)
    }
    rArrayinsertstrindexes(args){
        let a = JSON.parse(args.a)
        JSON.parse(args.c).sort(function(a,b){return b-a}).forEach(t=>{
            a.splice(t,0,args.b)
        })
        return JSON.stringify(a)
    }
    rArrayinsertstrindextoindex(args){
        let a = JSON.parse(args.a);
        const c = Number(args.c)
        for(let i = 0; i < args.d-c; i++){
            a.splice(c+i,0,args.b)
        }
        return JSON.stringify(a)
    }
    rArrayunshiftJSON(args){
        let a = JSON.parse(args.a);
        a.unshift(JSON.parse(args.b))
        return JSON.stringify(a)
    }
    rArraypushJSON(args){
        let a = JSON.parse(args.a);
        a.push(JSON.parse(args.b))
        return JSON.stringify(a)
    }
    rArrayinsertJSON(args){
        let a = JSON.parse(args.a);
        a.splice(args.c,0,JSON.parse(args.b))
        return JSON.stringify(a)
    }
    rArrayinsertJSONindexes(args){
        let a = JSON.parse(args.a);
        const b =JSON.parse(args.b)
        JSON.parse(args.c).sort(function(a,b){return b-a}).forEach(t=>{
            a.splice(t,0,b)
        })
        return JSON.stringify(a)
    }
    rArrayinsertJSONindextoindex(args){
        let a = JSON.parse(args.a);
        const b =JSON.parse(args.b);
        const c = Number(args.c)
        for(let i = 0; i < args.d-c; i++){
            a.splice(c+i,0,b)
        }
        return JSON.stringify(a)
    }
    rArraymove(args){
        let a = JSON.parse(args.a);
        const b = a[args.b]
        if (args.b>args.c){
            a.splice(args.b,1);
            a.splice(args.c,0,b)
        }
        else{
            a.splice(args.c,0,b);
            a.splice(args.b,1)
        }
        return JSON.stringify(a)
    }
    rArrayinterchange(args){
        let a = JSON.parse(args.a);
        const b = a[args.b];
        a[args.b] = a[args.c];
        a[args.c] = b
        return JSON.stringify(a)
    }
    rArrayreplace(args){
        let a = JSON.parse(args.a);
        const b = Number(args.b);
        a.fill(Number(args.c),b,b+1)
        return JSON.stringify(a)
    }
    rArrayreplaceindexes(args){
        let a = JSON.parse(args.a);
        const c = Number(args.c)
        JSON.parse(args.b).forEach(t=>{
            a.fill(c,t,t+1)
        })
        return JSON.stringify(a)
    }
    rArrayreplaceindextoindex(args){
        let a = JSON.parse(args.a);
        a.fill(Number(args.d),args.b,args.c)
        return JSON.stringify(a)
    }
    rArrayreplacestr(args){
        let a = JSON.parse(args.a);
        const b = Number(args.b);
        a.fill(args.c,b,b+1)
        return JSON.stringify(a)
    }
    rArrayreplaceindexesstr(args){
        let a = JSON.parse(args.a)
        JSON.parse(args.b).forEach(t=>{
            a.fill(args.c,t,t+1)
        })
        return JSON.stringify(a)
    }
    rArrayreplaceindextoindexstr(args){
        let a = JSON.parse(args.a);
        a.fill(args.d,args.b,args.c)
        return JSON.stringify(a)
    }
    rArrayreplaceJSON(args){
        let a = JSON.parse(args.a);
        const b = Number(args.b);
        a.fill(JSON.parse(args.c),b,b+1)
        return JSON.stringify(a)
    }
    rArrayreplaceindexesJSON(args){
        let a = JSON.parse(args.a);
        const c = JSON.parse(args.c)
        JSON.parse(args.b).forEach(t=>{
            a.fill(c,t,t+1)
        })
        return JSON.stringify(a)
    }
    rArrayreplaceindextoindexJSON(args){
        let a = JSON.parse(args.a);
        a.fill(JSON.parse(args.d),args.b,args.c)
        return JSON.stringify(a)
    }
    rArrayplusindex(args){
        let a = JSON.parse(args.a);
        a[args.b]+=Number(args.c)
        return JSON.stringify(a)
    }
    rArrayplusindexes(args){
        let a = JSON.parse(args.a);
        const c = Number(args.c)
        JSON.parse(args.b).forEach(t=>{
            a[t]+=c
        })
        return JSON.stringify(a)
    }
    rArrayplusindextoindex(args){
        let a = JSON.parse(args.a);
        const b = Number(args.b);
        const d = Number(args.d)
        for(let i = 0; i < args.c-b; i++){
            a[b+i]+=d
        }
        return JSON.stringify(a)
    }
    rArrayplus(args){
        const b = Number(args.b)
        return JSON.stringify(JSON.parse(args.a).map(t => t+b))
    }
    rArrayminus(args){
        return JSON.stringify(JSON.parse(args.a).map(t => t-args.b))
    }
    rArrayindex(args){
        return JSON.parse(args.a).indexOf(Number(args.b))
    }
    rArrayindexstr(args){
        return JSON.parse(args.a).indexOf(args.b)
    }
    rArrayindexJSON(args){
        return JSON.parse(args.a).indexOf(JSON.parse(args.b))
    }
    rArraylastindex(args){
        return JSON.parse(args.a).lastIndexOf(Number(args.b))
    }
    rArraylastindexstr(args){
        return JSON.parse(args.a).lastIndexOf(args.b)
    }
    rArraylastindexJSON(args){
        return JSON.parse(args.a).lastIndexOf(JSON.parse(args.b))
    }
    rArrayallindex(args){
        const b = Number(args.b);
        let idx = []
        JSON.parse(args.a).forEach((t,i)=>{
            if(t===b)idx.push(i)
        })
        return JSON.stringify(idx)
    }
    rArrayallindexstr(args){
        let idx = []
        JSON.parse(args.a).forEach((t,i)=>{
            if(t===args.b)idx.push(i)
        })
        return JSON.stringify(idx)
    }
    rArrayallindexJSON(args){
        let idx = []
        JSON.parse(args.a).forEach((t,i)=>{
            if(JSON.stringify(t)==args.b)idx.push(i)
        })
        return JSON.stringify(idx)
    }
    rArrayfindIndexbignumber(args){
        return JSON.parse(args.a).findIndex(i => i > args.b)
    }
    rArrayfindIndexnotsmallnumber(args){
        return JSON.parse(args.a).findIndex(i => i >= args.b)
    }
    rArrayfindIndexsmallnumber(args){
        return JSON.parse(args.a).findIndex(i => i < args.b)
    }
    rArrayfindIndexnotbignumber(args){
        return JSON.parse(args.a).findIndex(i => i <= args.b)
    }
    rArraycountbignumber(args){
        const b =Number(args.b);
        let c = 0
        JSON.parse(args.a).forEach(t=>{
            if(t>b)c+=1
        })
        return c
    }
    rArraycountnotsmallnumber(args){
        const b =Number(args.b);
        let c = 0
        JSON.parse(args.a).forEach(t=>{
            if(t>=b)c+=1
        })
        return c
    }
    rArraycountsmallnumber(args){
        const b =Number(args.b);
        let c = 0
        JSON.parse(args.a).forEach(t=>{
            if(t<b)c+=1
        })
        return c
    }
    rArraycountnotbignumber(args){
        const b =Number(args.b);
        let c = 0
        JSON.parse(args.a).forEach(t=>{
            if(t<=b)c+=1
        })
        return c
    }
    rArraycount(args){
        const b =Number(args.b);
        let c = 0
        JSON.parse(args.a).forEach(t=>{
            if(t===b)c+=1
        })
        return c
    }
    rArraycountstr(args){
        let c = 0
        JSON.parse(args.a).forEach(t=>{
            if(t===args.b)c+=1
        })
        return c
    }
    rArraycountsth(args){
        let c = 0
        JSON.parse(args.a).forEach(t=>{
            if(t==args.b)c+=1
        })
        return c
    }
    rArraycountJSON(args){
        let c = 0
        JSON.parse(args.a).forEach(t=>{
            if(JSON.stringify(t)==args.b)c+=1
        })
        return c
    }
    rArraysortnaturalOrder(args){
        return JSON.stringify(JSON.parse(args.a).sort(Scratch.Cast.compare))
    }
    rArraysortreverseOrder(args){
        return JSON.stringify(JSON.parse(args.a).sort(Scratch.Cast.compare).reverse())
    }
    rArrayreverse(args){
        return JSON.stringify(JSON.parse(args.a).reverse())
    }
    bArrayclear(args){
        return args.a == '[]'
    }
    rArraylength(args){
        return JSON.parse(args.a).length
    }
    bisArray(args){
        return Array.isArray(JSON.parse(args.a))
    }
    rObjectvalue(args){
        return JSON.parse(args.a)[args.b]
    }
    rObjectvalueJSON(args){
        return JSON.stringify(JSON.parse(args.a)[args.b])
    }
    rObjectkey(args){
        const a = JSON.parse(args.a);
        const keys = Object.keys(a);
        const values = Object.values(a)
        return keys[values.indexOf(Number(args.b))]
    }
    rObjectlastkey(args){
        const a = JSON.parse(args.a);
        const keys = Object.keys(a);
        const values = Object.values(a)
        return keys[values.lastIndexOf(Number(args.b))]
    }
    rObjectallkey(args){
        const a = JSON.parse(args.a);
        const b =Number(args.b);
        const keys = Object.keys(a);
        let key = []
        Object.values(a).forEach((t,i)=>{
            if(t===b)key.push(keys[i])
        })
        return JSON.stringify(key)
    }
    rObjectkeystr(args){
        const a = JSON.parse(args.a);
        const keys = Object.keys(a);
        const values = Object.values(a)
        return keys[values.indexOf(args.b)]
    }
    rObjectlastkeystr(args){
        const a = JSON.parse(args.a);
        const keys = Object.keys(a);
        const values = Object.values(a)
        return keys[values.lastIndexOf(args.b)]
    }
    rObjectallkeystr(args){
        const a = JSON.parse(args.a);
        const keys = Object.keys(a);
        let key = []
        Object.values(a).forEach((t,i)=>{
            if(t===args.b)key.push(keys[i])
        })
        return JSON.stringify(key)
    }
    rObjectkeyJSON(args){
        const a = JSON.parse(args.a);
        const keys = Object.keys(a);
        const values = Object.values(a)
        return keys[values.indexOf(JSON.parse(args.b))]
    }
    rObjectlastkeyJSON(args){
        const a = JSON.parse(args.a);
        const keys = Object.keys(a);
        const values = Object.values(a)
        return keys[values.lastIndexOf(JSON.parse(args.b))]
    }
    rObjectallkeyJSON(args){
        const a = JSON.parse(args.a);
        const b =JSON.parse(args.b);
        const keys = Object.keys(a);
        let key = []
        Object.values(a).forEach((t,i)=>{
            if(t===b)key.push(keys[i])
        })
        return JSON.stringify(key)
    }
    rObjectputkey(args){
        let a=JSON.parse(args.a);
        a[args.b]=Number(args.c)
        return JSON.stringify(a)
    }
    rObjectputkeystr(args){
        let a=JSON.parse(args.a);
        a[args.b]=args.c
        return JSON.stringify(a)
    }
    rObjectputkeyJSON(args){
        let a=JSON.parse(args.a);
        a[args.b]=JSON.parse(args.c)
        return JSON.stringify(a)
    }
    rObjectpluskey(args){
        let a=JSON.parse(args.a);
        a[args.b]+=Number(args.c)
        return JSON.stringify(a)
    }
    rObjectplus(args){
        let a=JSON.parse(args.a);
        const b = Number(args.b)
        Object.keys(a).forEach(t=>{
            a[t] += b
        })
        return JSON.stringify(a)
    }
    rObjectputAll(args){
        return JSON.stringify(Object.assign(JSON.parse(args.b),JSON.parse(args.a)))
    }
    rObjectplusObject(args){
        let a = JSON.parse(args.a);
        const b = JSON.parse(args.b)
        Object.keys(b).forEach(t=>{
            if(a[t] !== undefined){
                a[t]+=b[t]
            }
            else {
                a[t]=b[t]
            }
        })
        return JSON.stringify(a)
    }
    rObjectremove(args){
        let a=JSON.parse(args.a);
        delete a[args.b]
        return JSON.stringify(a)
    }
    rObjectremovekeys(args){
        let a=JSON.parse(args.a)
        JSON.parse(args.b).forEach(t=>{
            delete a[t]
        })
        return JSON.stringify(a)
    }
    rObjectkeys(args){
        return JSON.stringify(Object.keys(JSON.parse(args.a)))
    }
    rObjectvalues(args){
        return JSON.stringify(Object.values(JSON.parse(args.a)))
    }
    rObjectentries(args){
        return JSON.stringify(Object.entries(JSON.parse(args.a)))
    }
    rObjectfromentries(args){
        return JSON.stringify(Object.fromEntries(JSON.parse(args.a)))
    }
    bObjecthasownproperty(args){
        return JSON.parse(args.a).hasOwnProperty(args.b)
    }
    bObjectclear(args){
        return args.a == '{}'
    }
    rObjectlength(args){
        return Object.keys(JSON.parse(args.a)).length
    }
    bisObject(args){
        return Object.isObject(JSON.parse(args.a))
    }
}

window.tempExt = {
    Extension: simplereporter,
    info: {
        name: "simplereporter.name",
        description: "simplereporter.descp",
        extensionId: simplereporterextensionId,
        iconURL: simplereporterpicture,
        insetIconURL: simplereportericon,
        featured: true,
        disabled: false,
        collaborator: "bilioicik @ CCW",
        collaboratorURL: "https://www.ccw.site/student/6218cd094daafc57cebfc1d3"
    },
    l10n: {
        "zh-cn": {
            "simplereporter.name": "绿色通行",
            "simplereporter.descp": "返回值积木"
        },
        en: {
            "simplereporter.name": "Green for Go",
            "simplereporter.descp": "reporter block"
        }
    }
};