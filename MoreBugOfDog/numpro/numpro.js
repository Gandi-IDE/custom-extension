//Version:v1.0.1-beta 详情请见版本日志（Version log.txt）
((Scratch) => {
    'use strict';
    const OPERATION_EXT_extensionId = "numpro";
    const OPERATION_EXT_picture = "https://m.ccw.site/user_projects_assets/47a14685789ba3c957c82f14cb9802e3.png";    
    const OPERATION_EXT_icon = "https://m.ccw.site/user_projects_assets/240948213d2fc2650c375fb2573bfacd.png";
    const OPERATION_EXT_icon2 = "https://m.ccw.site/user_projects_assets/a4bc960bfbc7215940c24eb3820f5663.png";
    const { Cast, ArgumentType, BlockType } = Scratch;

    Scratch.translate.setup({
        "zh-cn": {
            "OPERATION_EXT_NAME": "运算pro",
            "OPERATION_SETING": "设置",
            "OPERATION.SHOW": "显示",
            "OPERATION.HIDE": "隐藏",
            "OPERATION.EXPAND": "展开",
            "OPERATION.COLLAPSE": "收起",
            "OPERATION.RARE_BLOCK": "不常用块",
            "OPERATION.EXPAND_MENU": "展开下拉框",
            "OPERATION.MATH_LABEL": "数学",
            "OPERATION.BOOLEAN_LABEL": "布尔值",
            "OPERATION.STRING_LABEL": "字符",
            "OPERATION.GRAPH_LABEL": "图形",
            "OPERATION.BASE_LABEL": "进制",
            "OPERATION.CONSTANT_LABEL": "常量",
            "OPERATION.SHOW_MATH_BLOCK": "显示运算块",
            "OPERATION.HIDE_MATH_BLOCK": "隐藏运算块",
            "OPERATION.SHOW_BOOLEAN_BLOCK": "显示布尔块",
            "OPERATION.HIDE_BOOLEAN_BLOCK": "隐藏布尔块",
            "OPERATION.SHOW_STRING_BLOCK": "显示字符串块",
            "OPERATION.HIDE_STRING_BLOCK": "隐藏字符串块",
            "OPERATION.SHOW_RARD": "显示不常用块",
            "OPERATION.HIDE_RARD": "隐藏不常用块",
            "OPERATION.SHOW_GRAPH_BLOCK": "显示图形块",
            "OPERATION.HIDE_GRAPH_BLOCK": "隐藏图形块",
            "OPERATION.SHOW_BASE_BLOCK": "显示进制块",
            "OPERATION.HIDE_BASE_BLOCK": "隐藏进制块",
            "OPERATION.CONSTRAIN": "限制 [NUM] 在 [LOW] 与 [HIGH] 之间",
            "OPERATION.LOOP_NUMBER": "让 [NUM] 在 [START] 到 [END] 中循环",
            "OPERATION.ROUND": "四舍五入 [NUM1] 到小数点后 [NUM2] 位",
            "OPERATION.MAP_OFF": "映射 [NUM] 从 [START1] ~ [END1] 到 [START2] ~ [END2]",
            "OPERATION.BASE": "把 [INTO1] 进制的 [NUM] 转换为 [INTO2] 进制",
            "OPERATION.CALCULATE": "计算 [TEXT]",
            "OPERATION.FIND_PARTITION": "把 [RANGE_START] 到 [RANGE_END] 等分为 [NUM_PARTITIONS] 个部分并获取 [VALUE] 的分区",
            "OPERATION.BOOLEAN_TO_NUMBER": "转换 [BOOLEAN] 为二进制数字",
            "OPERATION.NUMBER_NOT": "二进制取反 [NUM]",
            "OPERATION.PERCENT_OF": "[NUM2] 的 [NUM1] %",
            "OPERATION.IS_TRUE": "[OPERAND] 为真？",
            "OPERATION.CHECK_TYPE": "[INPUT] 是 [MODE] ？",
            "OPERATION.TEXT": "文本 [STRING]",
            "OPERATION.TEST": "如果 [BOOLEAN] 那么 [STRING1] 否则 [STRING2]",
            "OPERATION.REPEAT": "重复 [STRING] [NUMBER] 次",
            "OPERATION.TRIM": "消除 [STRING] 两侧的空白文本",
            "OPERATION.INTERCEPT": "截取 [STRING] 的 [START] 到 [END]",
            "OPERATION.REPLACE": "替换 [STRING1] 中的 [STRING2] 为 [STRING3]",
            "OPERATION.REPLACE_INDEX": "替换 [STRING] 中的第 [START] 到 [END] 为 [REPLACEMENT]",
            "OPERATION.SPLIT": "按 [SYMBOL] 分割 [STRING] 取第 [NUM] 项",
            "OPERATION.TOGGLE_CASE": "[STRING1] 在 [STRING2] 中 [MODE]",
            "OPERATION.CONVERT": "转换 [STRING] 为 [MODE]",
            "OPERATION.JOIN": "连接文字 [STRING]",
            "OPERATION.GET_JOIN": "连接的文本",
            "OPERATION.GET_TO_UNICODE": "[STRING] 的 Unicode",
            "OPERATION.UNICODE_TO_STRING": "Unicode 为 [STRING] 的字符",
            "OPERATION.OVERWRITE": "使用 [OTHER] 覆盖 [ORIGINAL]，方向：[DIRECTION]",
            "OPERATION.CALCULATE_LINE_LENGTH": "([X1],[Y1]) 到 ([X2],[Y2]) 的长度",
            "OPERATION.CALCULATE_LINE_DIRECTION": "([X1],[Y1]) 到 ([X2],[Y2]) 的角度",
            "OPERATION.CALCULATE_INTERSECTION": "计算交点 ([X1],[Y1]) 到 ([X2],[Y2]) 与 ([X3],[Y3]) 到 ([X4],[Y4])",
            "OPERATION.TRIANGLE": "三角形 ([X1],[Y1]) ([X2],[Y2]) ([X3],[Y3]) 的 [MODE]",
            "OPERATION.TRIANGLE_AREA": "三角形 [S1] [S2] [S3] 的面积",
            "OPERATION.RECTANGLE": "四边形 ([X1],[Y1]) ([X2],[Y2]) ([X3],[Y3]) ([X4],[Y4]) 的 [MODE]",
            "OPERATION.GRAPH": "多边形 [GRAPH] 的 [MODE]",
            "OPERATION.CIRCLE": "[UNITS] 为 [LENGTH] 的圆的 [MODE]",
            "OPERATION.CALCULATE_ANGLE_DIFFERENCE": "角度 [ANGLE1] 到 [ANGLE2] 的 [MODE]",
            "OPERATION.GET_CONSTANT": "常量 [OPTION]",
            "OPERATION.TRUE": "真",
            "OPERATION.FALSE": "假",
            "OPERATION.RANDOM": "随机",
            "OPERATION.TYPE_NUMBER": "数字",
            "OPERATION.TYPE_POSITIVE_NUMBER": "正数",
            "OPERATION.TYPE_NEGATIVE_NUMBER": "负数",
            "OPERATION.TYPE_EVEN_NUMBER": "偶数",
            "OPERATION.TYPE_ODD_NUMBER": "奇数",
            "OPERATION.TYPE_INTEGER_NUMBER": "整数",
            "OPERATION.TYPE_DECIMAL_NUMBER": "小数",
            "OPERATION.TYPE_PRIME_NUMBER": "质数",
            "OPERATION.TYPE_COMPOSITE_NUMBER": "合数",
            "OPERATION.TYPE_TEXT": "文字",
            "OPERATION.TYPE_BOOLEAN": "布尔值",
            "OPERATION.NAND": "与非",
            "OPERATION.NOR": "或非",
            "OPERATION.XOR": "异或",
            "OPERATION.XNOR": "同或",
            "OPERATION.FIRST_OCCURRENCE": "第一次出现的位置",
            "OPERATION.LAST_OCCURRENCE": "最后出现的位置",
            "OPERATION.NUMBER_OF": "出现的次数",
            "OPERATION.UPPERCASE": "大写",
            "OPERATION.LOWERCASE": "小写",
            "OPERATION.CAPITALIZE": "首字母大写",
            "OPERATION.REVERSE": "倒序",
            "OPERATION.AREA": "面积",
            "OPERATION.CIRCUMFERENCE": "周长",
            "OPERATION.RADIUS": "半径",
            "OPERATION.DIAMETER": "直径",
            "OPERATION.INTERIOR_ANGLE": "内角",
            "OPERATION.EXTERIOR_ANGLE": "外角",
            "OPERATION.CLOCKWISE": "顺时针",
            "OPERATION.COUNTER_CLOCKWISE": "逆时针",
            "OPERATION.ARG_APPLE": "苹果",
            "OPERATION.ARG_BANANA": "香蕉"
        },
        "zh-tw": {
            "OPERATION_EXT_NAME": "運算pro",
            "OPERATION_SETING": "設定",
            "OPERATION.SHOW": "顯示",
            "OPERATION.HIDE": "隱藏",
            "OPERATION.EXPAND": "展開",
            "OPERATION.COLLAPSE": "收起",
            "OPERATION.RARE_BLOCK": "不常用積木",
            "OPERATION.EXPAND_MENU": "展開下拉選單",
            "OPERATION.MATH_LABEL": "數學",
            "OPERATION.BOOLEAN_LABEL": "布林值",
            "OPERATION.STRING_LABEL": "字串",
            "OPERATION.GRAPH_LABEL": "幾何",
            "OPERATION.BASE_LABEL": "進位制",
            "OPERATION.CONSTANT_LABEL": "常數",
            "OPERATION.SHOW_MATH_BLOCK": "顯示運算積木",
            "OPERATION.HIDE_MATH_BLOCK": "隱藏運算積木",
            "OPERATION.SHOW_BOOLEAN_BLOCK": "顯示布林值積木",
            "OPERATION.HIDE_BOOLEAN_BLOCK": "隱藏布林值積木",
            "OPERATION.SHOW_STRING_BLOCK": "顯示字串積木",
            "OPERATION.HIDE_STRING_BLOCK": "隱藏字串積木",
            "OPERATION.SHOW_GRAPH_BLOCK": "顯示幾何積木",
            "OPERATION.HIDE_GRAPH_BLOCK": "隱藏幾何積木",
            "OPERATION.SHOW_BASE_BLOCK": "顯示進位制積木",
            "OPERATION.HIDE_BASE_BLOCK": "隱藏進位制積木",
            "OPERATION.SHOW_RARD": "顯示不常用積木",
            "OPERATION.HIDE_RARD": "隱藏不常用積木",
            "OPERATION.CONSTRAIN": "約束 [NUM] 介於 [LOW] 與 [HIGH] 之間",
            "OPERATION.LOOP_NUMBER": "將 [NUM] 循環在 [START] 到 [END]",
            "OPERATION.ROUND": "四捨五入 [NUM1] 到小數點後 [NUM2] 位",
            "OPERATION.MAP_OFF": "映射 [NUM] 從 [START1] ~ [END1] 到 [START2] ~ [END2]",
            "OPERATION.BASE": "把 [INTO1] 進位的 [NUM] 變為 [INTO2] 進位",
            "OPERATION.CALCULATE": "計算 [TEXT]",
            "OPERATION.FIND_PARTITION": "將 [RANGE_START] 到 [RANGE_END] 等分為 [NUM_PARTITIONS] 個部分，並獲取 [VALUE] 所屬的分區",
            "OPERATION.BOOLEAN_TO_NUMBER": "轉換 [BOOLEAN] 为二位制數字",
            "OPERATION.NUMBER_NOT": "二位制取反 [NUM]",
            "OPERATION.PERCENT_OF": "[NUM2] 的 [NUM1] %",
            "OPERATION.IS_TRUE": "[OPERAND] 為真？",
            "OPERATION.CHECK_TYPE": "[INPUT] 是 [MODE] ？",
            "OPERATION.TEXT": "字串 [STRING]",
            "OPERATION.TEST": "如果 [BOOLEAN] 那麼 [STRING1] 否則 [STRING2]",
            "OPERATION.REPEAT": "重複 [STRING] [NUMBER] 次",
            "OPERATION.TRIM": "消除 [STRING] 兩側的空白文本",
            "OPERATION.INTERCEPT": "截取 [STRING] 的 [START] 到 [END]",
            "OPERATION.REPLACE": "將 [STRING1] 中的 [STRING2] 替換為 [STRING3]",
            "OPERATION.REPLACE_INDEX": "將 [STRING] 中的第 [START] 到 [END] 替換為 [REPLACEMENT]",
            "OPERATION.SPLIT": "用 [SYMBOL] 分解 [STRING] 取第 [NUM] 個",
            "OPERATION.TOGGLE_CASE": "[STRING1] 在 [STRING2] 中 [MODE]",
            "OPERATION.CONVERT": "轉換 [STRING] 為 [MODE]",
            "OPERATION.JOIN": "組合字串 [STRING]",
            "OPERATION.GET_JOIN": "組合的字串",
            "OPERATION.GET_TO_UNICODE": "[STRING] 的 Unicode 編碼",
            "OPERATION.UNICODE_TO_STRING": "Unicode 編碼為 [STRING] 的字串",
            "OPERATION.OVERWRITE": "使用 [OTHER] 覆蓋 [ORIGINAL]，方向：[DIRECTION]",
            "OPERATION.CALCULATE_LINE_LENGTH": "([X1],[Y1]) 到 ([X2],[Y2]) 的間距",
            "OPERATION.CALCULATE_LINE_DIRECTION": "([X1],[Y1]) 到 ([X2],[Y2]) 的方向",
            "OPERATION.CALCULATE_INTERSECTION": "計算交点 ([X1],[Y1]) 到 ([X2],[Y2]) 與 ([X3],[Y3]) 到 ([X4],[Y4])",
            "OPERATION.TRIANGLE": "三角形 ([X1],[Y1]) ([X2],[Y2]) ([X3],[Y3]) 的 [MODE]",
            "OPERATION.TRIANGLE_AREA": "三角形 [S1] [S2] [S3] 的面積",
            "OPERATION.RECTANGLE": "四邊形 ([X1],[Y1]) ([X2],[Y2]) ([X3],[Y3]) ([X4],[Y4]) 的 [MODE]",
            "OPERATION.GRAPH": "多邊形 [GRAPH] 的 [MODE]",
            "OPERATION.CIRCLE": "[UNITS] 為 [LENGTH] 的圆的 [MODE]",
            "OPERATION.CALCULATE_ANGLE_DIFFERENCE": "角度 [ANGLE1] 到 [ANGLE2] 的 [MODE]",
            "OPERATION.GET_CONSTANT": "常數 [OPTION]",
            "OPERATION.TRUE": "真",
            "OPERATION.FALSE": "假",
            "OPERATION.RANDOM": "隨機",
            "OPERATION.TYPE_NUMBER": "數字",
            "OPERATION.TYPE_POSITIVE_NUMBER": "正數",
            "OPERATION.TYPE_NEGATIVE_NUMBER": "負數",
            "OPERATION.TYPE_EVEN_NUMBER": "偶數",
            "OPERATION.TYPE_ODD_NUMBER": "奇數",
            "OPERATION.TYPE_INTEGER_NUMBER": "整數",
            "OPERATION.TYPE_DECIMAL_NUMBER": "小數",
            "OPERATION.TYPE_PRIME_NUMBER": "質數",
            "OPERATION.TYPE_COMPOSITE_NUMBER": "合數",
            "OPERATION.TYPE_TEXT": "文字",
            "OPERATION.TYPE_BOOLEAN": "布林值",
            "OPERATION.NAND": "與非",
            "OPERATION.NOR": "或非",
            "OPERATION.XOR": "異或",
            "OPERATION.XNOR": "同或",
            "OPERATION.FIRST_OCCURRENCE": "首次出現的位置",
            "OPERATION.LAST_OCCURRENCE": "最後出現的位置",
            "OPERATION.NUMBER_OF": "出現的次數",
            "OPERATION.UPPERCASE": "大寫",
            "OPERATION.LOWERCASE": "小寫",
            "OPERATION.CAPITALIZE": "首字大寫",
            "OPERATION.REVERSE": "翻轉",
            "OPERATION.AREA": "面積",
            "OPERATION.CIRCUMFERENCE": "周長",
            "OPERATION.RADIUS": "半徑",
            "OPERATION.DIAMETER": "直徑",
            "OPERATION.INTERIOR_ANGLE": "內角",
            "OPERATION.EXTERIOR_ANGLE": "外角",
            "OPERATION.CLOCKWISE": "順時針",
            "OPERATION.COUNTER_CLOCKWISE": "逆時針",
            "OPERATION.ARG_APPLE": "apple",
            "OPERATION.ARG_BANANA": "banna"
        },
    });
    const formatMessage = Scratch.translate;

    const seting = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjI3MjA2IDIuNjgzNzdDOC40MDgxOCAyLjI3NTQzIDguNzkwMzIgMiA5LjIyMDc1IDJIMTAuNzc5MkMxMS4yMDk3IDIgMTEuNTkxOCAyLjI3NTQzIDExLjcyNzkgMi42ODM3N0wxMi4zMjE5IDQuNDY1OEMxMi43OTE0IDQuNjYzIDEzLjIzMDQgNC45MTgxOCAxMy42MzAyIDUuMjIyMzhMMTUuNDcyMSA0Ljg0NTQ3QzE1Ljg5MzggNC43NTkxNyAxNi4zMjM0IDQuOTUyNCAxNi41Mzg2IDUuMzI1MTZMMTcuMzE3OCA2LjY3NDg1QzE3LjUzMyA3LjA0NzYxIDE3LjQ4NTYgNy41MTYyNyAxNy4yIDcuODM4MzJMMTUuOTUyOSA5LjI0NDY4QzE1Ljk4NCA5LjQ5MjA4IDE2IDkuNzQ0MTcgMTYgMTBDMTYgMTAuMjU1OCAxNS45ODQgMTAuNTA3OSAxNS45NTI5IDEwLjc1NTNMMTcuMiAxMi4xNjE3QzE3LjQ4NTYgMTIuNDgzNyAxNy41MzMgMTIuOTUyNCAxNy4zMTc4IDEzLjMyNTJMMTYuNTM4NiAxNC42NzQ4QzE2LjMyMzQgMTUuMDQ3NiAxNS44OTM4IDE1LjI0MDggMTUuNDcyMSAxNS4xNTQ1TDEzLjYzMDIgMTQuNzc3NkMxMy4yMzA0IDE1LjA4MTggMTIuNzkxNCAxNS4zMzcgMTIuMzIxOSAxNS41MzQyTDExLjcyNzkgMTcuMzE2MkMxMS41OTE4IDE3LjcyNDYgMTEuMjA5NyAxOCAxMC43NzkyIDE4SDkuMjIwNzVDOC43OTAzMiAxOCA4LjQwODE4IDE3LjcyNDYgOC4yNzIwNiAxNy4zMTYyTDcuNjc4MDUgMTUuNTM0MkM3LjIwODYyIDE1LjMzNyA2Ljc2OTU1IDE1LjA4MTggNi4zNjk4MiAxNC43Nzc2TDQuNTI3OTIgMTUuMTU0NUM0LjEwNjIzIDE1LjI0MDggMy42NzY2MyAxNS4wNDc2IDMuNDYxNDEgMTQuNjc0OEwyLjY4MjE3IDEzLjMyNTJDMi40NjY5NiAxMi45NTI0IDIuNTE0NDIgMTIuNDgzNyAyLjggMTIuMTYxN0w0LjA0NzA4IDEwLjc1NTNDNC4wMTYgMTAuNTA3OSAzLjk5OTk5IDEwLjI1NTggMy45OTk5OSAxMEMzLjk5OTk5IDkuNzQ0MTYgNC4wMTYgOS40OTIwNyA0LjA0NzA3IDkuMjQ0NjZMMi44IDcuODM4MzJDMi41MTQ0MiA3LjUxNjI3IDIuNDY2OTYgNy4wNDc2MSAyLjY4MjE3IDYuNjc0ODVMMy40NjE0MSA1LjMyNTE2QzMuNjc2NjMgNC45NTI0IDQuMTA2MjMgNC43NTkxNyA0LjUyNzkyIDQuODQ1NDdMNi4zNjk4IDUuMjIyMzhDNi43Njk1NCA0LjkxODE4IDcuMjA4NjEgNC42NjMgNy42NzgwNSA0LjQ2NThMOC4yNzIwNiAyLjY4Mzc3Wk05Ljk5OTk5IDhDOC44OTU0MiA4IDcuOTk5OTkgOC44OTU0MyA3Ljk5OTk5IDEwQzcuOTk5OTkgMTEuMTA0NiA4Ljg5NTQyIDEyIDkuOTk5OTkgMTJDMTEuMTA0NiAxMiAxMiAxMS4xMDQ2IDEyIDEwQzEyIDguODk1NDMgMTEuMTA0NiA4IDkuOTk5OTkgOFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPgo=';;
    const close = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhLS0gQ3JlYXRlZCB3aXRoIElua3NjYXBlIChodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy8pIC0tPgoKPHN2ZwogICB3aWR0aD0iMjQiCiAgIGhlaWdodD0iMjQiCiAgIHZpZXdCb3g9IjAgMCA2LjM0OTk5OTcgNi4zNDk5OTk3IgogICB2ZXJzaW9uPSIxLjEiCiAgIGlkPSJzdmcxIgogICB4bWw6c3BhY2U9InByZXNlcnZlIgogICBpbmtzY2FwZTp2ZXJzaW9uPSIxLjMuMSAoOTFiNjZiMDc4MywgMjAyMy0xMS0xNikiCiAgIHNvZGlwb2RpOmRvY25hbWU9ImNsb3NlSWNvbi5zdmciCiAgIHhtbG5zOmlua3NjYXBlPSJodHRwOi8vd3d3Lmlua3NjYXBlLm9yZy9uYW1lc3BhY2VzL2lua3NjYXBlIgogICB4bWxuczpzb2RpcG9kaT0iaHR0cDovL3NvZGlwb2RpLnNvdXJjZWZvcmdlLm5ldC9EVEQvc29kaXBvZGktMC5kdGQiCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgeG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHNvZGlwb2RpOm5hbWVkdmlldwogICAgIGlkPSJuYW1lZHZpZXcxIgogICAgIHBhZ2Vjb2xvcj0iIzAwMDAwMCIKICAgICBib3JkZXJjb2xvcj0iIzAwMDAwMCIKICAgICBib3JkZXJvcGFjaXR5PSIwLjI1IgogICAgIGlua3NjYXBlOnNob3dwYWdlc2hhZG93PSIyIgogICAgIGlua3NjYXBlOnBhZ2VvcGFjaXR5PSIwLjAiCiAgICAgaW5rc2NhcGU6cGFnZWNoZWNrZXJib2FyZD0iMCIKICAgICBpbmtzY2FwZTpkZXNrY29sb3I9IiNkMWQxZDEiCiAgICAgaW5rc2NhcGU6ZG9jdW1lbnQtdW5pdHM9Im1tIgogICAgIGlua3NjYXBlOnpvb209IjEzLjMxMTUzMyIKICAgICBpbmtzY2FwZTpjeD0iMTMuMjU5MTc5IgogICAgIGlua3NjYXBlOmN5PSIxNi4xODg5NjkiCiAgICAgaW5rc2NhcGU6d2luZG93LXdpZHRoPSIxOTIwIgogICAgIGlua3NjYXBlOndpbmRvdy1oZWlnaHQ9IjEwMjciCiAgICAgaW5rc2NhcGU6d2luZG93LXg9IjE5MTIiCiAgICAgaW5rc2NhcGU6d2luZG93LXk9Ii04IgogICAgIGlua3NjYXBlOndpbmRvdy1tYXhpbWl6ZWQ9IjEiCiAgICAgaW5rc2NhcGU6Y3VycmVudC1sYXllcj0ibGF5ZXIxIiAvPjxkZWZzCiAgICAgaWQ9ImRlZnMxIj48c3R5bGUKICAgICAgIGlkPSJzdHlsZTEiPi5jbHMtMXtmaWxsOm5vbmU7c3Ryb2tlOiNmZmY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS13aWR0aDoycHg7fTwvc3R5bGU+PC9kZWZzPjxnCiAgICAgaW5rc2NhcGU6bGFiZWw9IuWbvuWxgiAxIgogICAgIGlua3NjYXBlOmdyb3VwbW9kZT0ibGF5ZXIiCiAgICAgaWQ9ImxheWVyMSI+PGcKICAgICAgIGlkPSJnMSIKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuNTI2MzI1NjgsMC41MjYzMjU2OCwtMC41MjYzMjU2OCwwLjUyNjMyNTY4LDMuMTc1LC0wLjc2MTkxNjA3KSIKICAgICAgIGlua3NjYXBlOmxhYmVsPSJnMSIKICAgICAgIHN0eWxlPSJzdHJva2Utd2lkdGg6MC43MTA5MjM1ODtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlOiM1NjYyNzY7c3Ryb2tlLW9wYWNpdHk6MSI+PGxpbmUKICAgICAgICAgY2xhc3M9ImNscy0xIgogICAgICAgICB4MT0iMy43NCIKICAgICAgICAgeTE9IjYuNDgiCiAgICAgICAgIHgyPSIzLjc0IgogICAgICAgICB5Mj0iMSIKICAgICAgICAgaWQ9ImxpbmUxIgogICAgICAgICBzdHlsZT0ic3Ryb2tlLXdpZHRoOjAuNzEwOTIzNTg7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZTojNTY2Mjc2O3N0cm9rZS1vcGFjaXR5OjEiIC8+PGxpbmUKICAgICAgICAgY2xhc3M9ImNscy0xIgogICAgICAgICB4MT0iMSIKICAgICAgICAgeTE9IjMuNzQiCiAgICAgICAgIHgyPSI2LjQ4IgogICAgICAgICB5Mj0iMy43NCIKICAgICAgICAgaWQ9ImxpbmUyIgogICAgICAgICBzdHlsZT0ic3Ryb2tlLXdpZHRoOjAuNzEwOTIzNTg7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZTojNTY2Mjc2O3N0cm9rZS1vcGFjaXR5OjEiIC8+PC9nPjwvZz48L3N2Zz4K';

    // const isLang = ['ar', 'fa', 'he', 'ckb'];
    // let isRTL = isLang.includes(localStorage.getItem('tw:language'));
    let isRTL = false; // 这个是获取界面布局是否是右到左，gandi 没有阿拉伯语希伯来语的 rtl 布局，所以应当设为假

    let mask = document.createElement('div');
    mask.style.position = 'fixed';
    mask.style.top = '0';
    mask.style.left = '0';
    mask.style.width = '100vw';
    mask.style.height = '100vh';
    mask.style.backgroundColor = '#0000004c';
    mask.style.zIndex = '998';
    mask.style.display = 'none';
    document.body.appendChild(mask);

    mask.addEventListener('click', (event) => {
        if (!settingwindow.contains(event.target)) {
            hideWindow();
        }
    });

    let settingwindow = document.createElement('div');
    settingwindow.style.position = 'fixed';
    settingwindow.style.top = 'calc(100px + 225px)';
    settingwindow.style.left = '50%';
    settingwindow.style.transform = 'translate(-50%, -50%)';
    settingwindow.style.width = '480px';
    settingwindow.style.height = '450px';
    settingwindow.style.overflow = 'hidden';
    settingwindow.style.overflowX = 'hidden';
    settingwindow.style.backgroundColor = '#FFFFFF';
    settingwindow.style.borderRadius = '10px';
    settingwindow.style.display = 'none';
    settingwindow.style.paddingBottom = '5px';
    settingwindow.style.zIndex = '999';
    settingwindow.style.boxShadow = '0 0 10px 4px rgba(0, 0, 0, 0.2)';
    settingwindow.style.userSelect = 'none';
    document.body.appendChild(settingwindow);

    let windowContent = document.createElement('div');
    windowContent.style.position = 'absolute';
    windowContent.style.top = '72px';
    windowContent.style.width = 'calc(100% - 44px)';
    windowContent.style.height = 'auto';
    windowContent.style.padding = '22px';
    settingwindow.appendChild(windowContent);

    let titleBar = document.createElement('div');
    titleBar.style.height = '72px';
    titleBar.style.backgroundColor = '#0FBD8C';
    titleBar.style.color = '#000';
    titleBar.style.lineHeight = '72px';
    titleBar.style.maxHeight = '72px';
    titleBar.style.fontSize = '16px';
    titleBar.style.top = '0';
    settingwindow.appendChild(titleBar);

    let titleText = document.createElement('div');
    titleText.style.fontWeight = '700';
    titleText.style.display = 'flex';
    titleText.style.justifyContent = 'center';
    titleText.style.alignItems = 'center';
    titleBar.appendChild(titleText);

    let textLabel = document.createElement('div');
    textLabel.innerText = formatMessage({ id: 'OPERATION_SETING', default: 'Seting' });
    textLabel.style.position = 'absolute';
    textLabel.style.top = '0px';
    textLabel.style.fontSize = '12px';
    textLabel.style.display = 'flex';
    textLabel.style.alignItems = 'center';
    if (isRTL) {
        textLabel.style.right = '24px';
        textLabel.style.left = 'auto';
    }
    else {
        textLabel.style.left = '24px';
        textLabel.style.right = 'auto';
    }
    titleBar.appendChild(textLabel);

    let settingIcon = document.createElement('img');
    settingIcon.src = seting;
    settingIcon.style.width = '18px';
    settingIcon.style.height = '18px';
    settingIcon.style.marginLeft = '8px';
    settingIcon.style.marginRight = '8px';
    textLabel.insertBefore(settingIcon, textLabel.firstChild);

    let closeButton = document.createElement('div');
    closeButton.style.position = 'absolute';
    closeButton.style.top = '24px';
    closeButton.style.width = '24px';
    closeButton.style.height = '24px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.backgroundColor = '#00000000';
    closeButton.style.borderRadius = '5px';
    closeButton.style.transition = 'all 0.2s';
    titleBar.appendChild(closeButton);

    closeButton.addEventListener('click', () => {
        hideWindow();
    });

    let closeIcon = document.createElement('img');
    closeIcon.src = close;
    closeIcon.style.position = 'absolute';
    closeIcon.style.top = '0px';
    closeIcon.style.width = '100%';
    closeIcon.style.height = '100%';
    closeButton.appendChild(closeIcon);

    closeButton.onmouseover = function () {
        closeButton.style.backgroundColor = '#ffffffff';

    }

    closeButton.onmouseout = function () {
        closeButton.style.backgroundColor = '#00000000';
    };

    const newOption = ({ text, buttonText, runCode }) => {
        let optionDiv = document.createElement('div');
        optionDiv.style.width = 'auto';
        optionDiv.style.height = 'auto';
        optionDiv.style.color = '#262B33';
        optionDiv.innerText = (text ?? '') + ': ';

        let optionButton = document.createElement('button');
        optionButton.style.margin = '4px';
        optionButton.style.padding = '9.6px 12px';
        optionButton.style.borderRadius = '8px';
        optionButton.style.backgroundColor = '#F7F7F7';
        optionButton.style.color = '#262B33';
        optionButton.style.fontWeight = '700';
        optionButton.style.fontSize = '14px';
        optionButton.style.border = 'none';
        optionButton.innerText = buttonText ?? '';
        optionButton.addEventListener('click', runCode)
        optionDiv.appendChild(optionButton);

        return optionDiv;
    }

    const showAndHideType = (type, style) => {
        HideBlockType[type] = style;
        Operation.runtime._events.TOOLBOX_EXTENSIONS_NEED_UPDATE();
        updateButton()
    }

    const updateButton = () => {
        const show = formatMessage({ id: 'OPERATION.SHOW', default: 'Show' });
        const hide = formatMessage({ id: 'OPERATION.HIDE', default: 'Hide' });
        const expand = '+ ' + formatMessage({ id: 'OPERATION.EXPAND', default: 'Expand' });
        const collapse = '- ' + formatMessage({ id: 'OPERATION.COLLAPSE', default: 'Collapse' });
        const rareBlock = formatMessage({ id: 'OPERATION.RARE_BLOCK', default: 'Rare block' });
        const expandMenu = formatMessage({ id: 'OPERATION.EXPAND_MENU', default: 'expand menu' });
        const mathBlock = formatMessage({ id: 'OPERATION.MATH_LABEL', default: 'Math' });
        const booleanBlock = formatMessage({ id: 'OPERATION.BOOLEAN_LABEL', default: 'Boolean' });
        const stringBlock = formatMessage({ id: 'OPERATION.STRING_LABEL', default: 'String' });
        const graphBlock = formatMessage({ id: 'OPERATION.GRAPH_LABEL', default: 'Graph' });
        const baseBlock = formatMessage({ id: 'OPERATION.BASE_LABEL', default: 'Base' });

        const br = document.createElement("br");

        while (windowContent.firstChild) {
            windowContent.removeChild(windowContent.firstChild);
        }

        windowContent.appendChild(newOption({
            text: rareBlock,
            buttonText: HideBlockType.rareBlock ? show : hide,
            runCode: (() => {
                showAndHideType('rareBlock', !HideBlockType.rareBlock);
            })
        }));

        windowContent.appendChild(newOption({
            text: expandMenu,
            buttonText: HideBlockType.expandMenu ? expand : collapse,
            runCode: (() => {
                showAndHideType('expandMenu', !HideBlockType.expandMenu);
            })
        }));

        windowContent.appendChild(br);

        windowContent.appendChild(newOption({
            text: mathBlock,
            buttonText: HideBlockType.math ? expand : collapse,
            runCode: (() => {
                showAndHideType('math', !HideBlockType.math);
            })
        }));

        windowContent.appendChild(newOption({
            text: booleanBlock,
            buttonText: HideBlockType.bool ? expand : collapse,
            runCode: (() => {
                showAndHideType('bool', !HideBlockType.bool);
            })
        }));

        windowContent.appendChild(newOption({
            text: stringBlock,
            buttonText: HideBlockType.string ? expand : collapse,
            runCode: (() => {
                showAndHideType('string', !HideBlockType.string);
            })
        }));

        windowContent.appendChild(newOption({
            text: graphBlock,
            buttonText: HideBlockType.graph ? expand : collapse,
            runCode: (() => {
                showAndHideType('graph', !HideBlockType.graph);
            })
        }));

        windowContent.appendChild(newOption({
            text: baseBlock,
            buttonText: HideBlockType.base ? expand : collapse,
            runCode: (() => {
                showAndHideType('base', !HideBlockType.base);
            })
        }));
    }

    const setRTL = () => {
        // isRTL = isLang.includes(localStorage.getItem('tw:language'));
        isRTL = false;
        if (isRTL) {
            settingwindow.style.direction = 'rtl';
        } else {
            settingwindow.style.direction = 'ltr';
        }
        if (isRTL) {
            closeButton.style.left = '14px';
            closeButton.style.right = 'auto';
        } else {
            closeButton.style.right = '14px';
            closeButton.style.left = 'auto';
        }
        if (isRTL) {
            textLabel.style.right = '24px';
            textLabel.style.left = 'auto';
        }
        else {
            textLabel.style.left = '24px';
            textLabel.style.right = 'auto';
        }
    }

    const hideWindow = () => {
        settingwindow.style.display = 'none';
        mask.style.display = 'none';
    }

    const showWindow = () => {
        setRTL();
        updateButton();
        titleText.innerText = formatMessage({ id: 'OPERATION_EXT_NAME', default: 'Operation' });
        settingwindow.style.display = 'block';
        mask.style.display = 'block';
        closeButton.style.backgroundColor = '#00000000';
    }

    let HideBlockType = {
        math: false,
        bool: false,
        string: false,
        graph: true,
        base: true,
        rareBlock: true,
        expandMenu: true
    }

    const sep = (hide) => {
        if (hide) return [''];
        return ['---'];
    };

    const negSep = (hide) => [/* 废弃 */];

    const rareHideAndSow = (type) => HideBlockType[type] || HideBlockType.rareBlock;

    const expandMenuHideAndSow = (type) => HideBlockType[type] || HideBlockType.expandMenu;

    const allCompare = () => [
        ...sep(expandMenuHideAndSow('bool')),
        {
            opcode: 'trueBlock',
            blockType: BlockType.BOOLEAN,
            disableMonitor: true,
            text: formatMessage({
                id: 'OPERATION.TRUE',
                default: 'true'
            }),
            hideFromPalette: expandMenuHideAndSow('bool')
        },
        ...negSep(expandMenuHideAndSow('bool')),
        {
            opcode: 'falseBlock',
            blockType: BlockType.BOOLEAN,
            disableMonitor: true,
            text: formatMessage({
                id: 'OPERATION.FALSE',
                default: 'false'
            }),
            hideFromPalette: expandMenuHideAndSow('bool')
        },
        {
            opcode: 'strictlyEqualBlock',
            blockType: BlockType.BOOLEAN,
            text: '[OPERAND1] ≡ [OPERAND2]',
            arguments: {
                OPERAND1: {
                    type: ArgumentType.STRING,
                    defaultValue: ''
                },
                OPERAND2: {
                    type: ArgumentType.STRING,
                    defaultValue: '50'
                }
            },
            hideFromPalette: expandMenuHideAndSow('bool')
        },
        ...negSep(expandMenuHideAndSow('bool')),
        {
            opcode: 'greaterOrEqualBlock',
            blockType: BlockType.BOOLEAN,
            text: '[OPERAND1] ≥ [OPERAND2]',
            arguments: {
                OPERAND1: {
                    type: ArgumentType.STRING,
                    defaultValue: ''
                },
                OPERAND2: {
                    type: ArgumentType.STRING,
                    defaultValue: '50'
                }
            },
            hideFromPalette: expandMenuHideAndSow('bool')
        },
        ...negSep(expandMenuHideAndSow('bool')),
        {
            opcode: 'lessOrEqualBlock',
            blockType: BlockType.BOOLEAN,
            text: '[OPERAND1] ≤ [OPERAND2]',
            arguments: {
                OPERAND1: {
                    type: ArgumentType.STRING,
                    defaultValue: ''
                },
                OPERAND2: {
                    type: ArgumentType.STRING,
                    defaultValue: '50'
                }
            },
            hideFromPalette: expandMenuHideAndSow('bool')
        },
        ...negSep(expandMenuHideAndSow('bool')),
        {
            opcode: 'unequalBlock',
            blockType: BlockType.BOOLEAN,
            text: '[OPERAND1] ≠ [OPERAND2]',
            arguments: {
                OPERAND1: {
                    type: ArgumentType.STRING,
                    defaultValue: ''
                },
                OPERAND2: {
                    type: ArgumentType.STRING,
                    defaultValue: '50'
                }
            },
            hideFromPalette: expandMenuHideAndSow('bool')
        },
        ...negSep(expandMenuHideAndSow('bool')),
        {
            opcode: 'strictlyUnequalBlock',
            blockType: BlockType.BOOLEAN,
            text: '[OPERAND1] ≢ [OPERAND2]',
            arguments: {
                OPERAND1: {
                    type: ArgumentType.STRING,
                    defaultValue: ''
                },
                OPERAND2: {
                    type: ArgumentType.STRING,
                    defaultValue: '50'
                }
            },
            hideFromPalette: expandMenuHideAndSow('bool')
        },
        ...negSep(expandMenuHideAndSow('bool')),
        {
            opcode: 'equalNegativeBlock',
            blockType: BlockType.BOOLEAN,
            text: '[OPERAND1] =- [OPERAND2]',
            arguments: {
                OPERAND1: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                },
                OPERAND2: {
                    type: ArgumentType.NUMBER,
                    defaultValue: '50'
                }
            },
            hideFromPalette: expandMenuHideAndSow('bool')
        },
        ...negSep(expandMenuHideAndSow('bool')),
        {
            opcode: 'EqualPONBlock',
            blockType: BlockType.BOOLEAN,
            text: '[OPERAND1] =± [OPERAND2]',
            arguments: {
                OPERAND1: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                },
                OPERAND2: {
                    type: ArgumentType.NUMBER,
                    defaultValue: '50'
                }
            },
            hideFromPalette: expandMenuHideAndSow('bool')
        },
        ...negSep(expandMenuHideAndSow('bool')),
        {
            opcode: 'approximatelyEqualBlock',
            blockType: BlockType.BOOLEAN,
            text: '[OPERAND1] ≈ [OPERAND2]',
            arguments: {
                OPERAND1: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                },
                OPERAND2: {
                    type: ArgumentType.NUMBER,
                    defaultValue: '50'
                }
            },
            hideFromPalette: expandMenuHideAndSow('bool')
        },
        ...negSep(expandMenuHideAndSow('bool')),
        {
            opcode: 'verticalBlock',
            blockType: BlockType.BOOLEAN,
            text: '[OPERAND1] ⊥ [OPERAND2]',
            arguments: {
                OPERAND1: {
                    type: ArgumentType.ANGLE,
                    defaultValue: ''
                },
                OPERAND2: {
                    type: ArgumentType.ANGLE,
                    defaultValue: '90'
                }
            },
            hideFromPalette: expandMenuHideAndSow('bool')
        },
        ...negSep(expandMenuHideAndSow('bool')),
        {
            opcode: 'parallelBlock',
            blockType: BlockType.BOOLEAN,
            text: '[OPERAND1] ∥ [OPERAND2]',
            arguments: {
                OPERAND1: {
                    type: ArgumentType.ANGLE,
                    defaultValue: ''
                },
                OPERAND2: {
                    type: ArgumentType.ANGLE,
                    defaultValue: '90'
                }
            },
            hideFromPalette: expandMenuHideAndSow('bool')
        },
        {
            opcode: 'nandBlock',
            blockType: BlockType.BOOLEAN,
            text: `[OPERAND1] ${formatMessage({ id: 'OPERATION.NAND', default: 'nand' })} [OPERAND2]`,
            arguments: {
                OPERAND1: {
                    type: ArgumentType.BOOLEAN
                },
                OPERAND2: {
                    type: ArgumentType.BOOLEAN
                }
            },
            hideFromPalette: expandMenuHideAndSow('bool')
        },
        ...negSep(expandMenuHideAndSow('bool')),
        {
            opcode: 'norBlock',
            blockType: BlockType.BOOLEAN,
            text: `[OPERAND1] ${formatMessage({ id: 'OPERATION.NOR', default: 'nor' })} [OPERAND2]`,
            arguments: {
                OPERAND1: {
                    type: ArgumentType.BOOLEAN
                },
                OPERAND2: {
                    type: ArgumentType.BOOLEAN
                }
            },
            hideFromPalette: expandMenuHideAndSow('bool')
        },
        ...negSep(expandMenuHideAndSow('bool')),
        {
            opcode: 'xorBlock',
            blockType: BlockType.BOOLEAN,
            text: `[OPERAND1] ${formatMessage({ id: 'OPERATION.XOR', default: 'xor' })} [OPERAND2]`,
            arguments: {
                OPERAND1: {
                    type: ArgumentType.BOOLEAN
                },
                OPERAND2: {
                    type: ArgumentType.BOOLEAN
                }
            },
            hideFromPalette: expandMenuHideAndSow('bool')
        },
        ...negSep(expandMenuHideAndSow('bool')),
        {
            opcode: 'xnorBlock',
            blockType: BlockType.BOOLEAN,
            text: `[OPERAND1] ${formatMessage({ id: 'OPERATION.XNOR', default: 'xnor' })} [OPERAND2]`,
            arguments: {
                OPERAND1: {
                    type: ArgumentType.BOOLEAN
                },
                OPERAND2: {
                    type: ArgumentType.BOOLEAN
                }
            },
            hideFromPalette: expandMenuHideAndSow('bool')
        }
    ];

    const allBitwise = (isRTL) => [
        ...sep(expandMenuHideAndSow('base')),
        {
            opcode: 'bitwiseAndBlock',
            blockType: BlockType.REPORTER,
            text: '[NUM1] & [NUM2]',
            arguments: {
                NUM1: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                },
                NUM2: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                }
            },
            hideFromPalette: expandMenuHideAndSow('base')
        },
        ...negSep(expandMenuHideAndSow('base')),
        {
            opcode: 'bitwiseOrBlock',
            blockType: BlockType.REPORTER,
            text: '[NUM1] | [NUM2]',
            arguments: {
                NUM1: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                },
                NUM2: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                }
            },
            hideFromPalette: expandMenuHideAndSow('base')
        },
        ...negSep(expandMenuHideAndSow('base')),
        {
            opcode: 'bitwiseXorBlock',
            blockType: BlockType.REPORTER,
            text: '[NUM1] ^ [NUM2]',
            arguments: {
                NUM1: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                },
                NUM2: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                }
            },
            hideFromPalette: expandMenuHideAndSow('base')
        },
        ...negSep(expandMenuHideAndSow('base')),
        {
            opcode: 'bitwiseLeftShiftBlock',
            blockType: BlockType.REPORTER,
            text: '[NUM1]' + (!isRTL ? '<<' : '>>') + '[NUM2]',
            arguments: {
                NUM1: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                },
                NUM2: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                }
            },
            hideFromPalette: expandMenuHideAndSow('base')
        },
        ...negSep(expandMenuHideAndSow('base')),
        {
            opcode: 'bitwiseRightShiftBlock',
            blockType: BlockType.REPORTER,
            text: '[NUM1]' + (!isRTL ? '>>' : '<<') + '[NUM2]',
            arguments: {
                NUM1: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                },
                NUM2: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                }
            },
            hideFromPalette: expandMenuHideAndSow('base')
        },
        ...negSep(expandMenuHideAndSow('base')),
        {
            opcode: 'bitwiseLogicalRightShiftBlock',
            blockType: BlockType.REPORTER,
            text: '[NUM1]' + (!isRTL ? '>>>' : '<<<') + '[NUM2]',
            arguments: {
                NUM1: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                },
                NUM2: {
                    type: ArgumentType.NUMBER,
                    defaultValue: ''
                }
            },
            hideFromPalette: expandMenuHideAndSow('base')
        }
    ];

    const getInfo = () => ({
        color1: '#6859ff',
        color2: '#5E50E6',
        color3: '#5347CC',
        id: 'OPERATION',
        name: formatMessage({
            id: 'OPERATION_EXT_NAME',
            default: 'Operation'
        }),
        blocks: descriptor(formatMessage, isRTL),
        menus: menus(formatMessage, isRTL),
        menuIconURI: OPERATION_EXT_icon,
        blockIconURI: OPERATION_EXT_icon2,
    })

    const descriptor = (formatMessage) => {
        return [
            {
                onClick: () => {
                    showWindow()
                },
                blockType: BlockType.BUTTON,
                text: formatMessage({
                    id: 'OPERATION_SETING',
                    default: 'Seting'
                }),
            },
            {
                opcode: 'exponent',
                blockType: BlockType.REPORTER,
                text: '[NUM1] ^ [NUM2]',
                arguments: {
                    NUM1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    },
                    NUM2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    }
                },
                hideFromPalette: HideBlockType.math
            },
            {
                opcode: 'root',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.ROOT',
                    default: '[NUM1] √ [NUM2]'
                }),
                arguments: {
                    NUM1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    },
                    NUM2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    }
                },
                hideFromPalette: HideBlockType.math
            },
            {
                opcode: 'negative',
                blockType: BlockType.REPORTER,
                text: '- [NUM]',
                arguments: {
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    }
                },
                hideFromPalette: HideBlockType.math
            },
            ...sep(HideBlockType.math),
            {
                opcode: 'constrain',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.CONSTRAIN',
                    default: 'constrain [NUM] low [LOW] high [HIGH]'
                }),
                arguments: {
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '50'
                    },
                    LOW: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '1'
                    },
                    HIGH: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '100'
                    }
                },
                hideFromPalette: HideBlockType.math
            },
            {
                opcode: 'loopNum',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.LOOP_NUMBER',
                    default: '[NUM] loop in [START] to [END]'
                }),
                arguments: {
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '1'
                    },
                    START: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '1'
                    },
                    END: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '4'
                    }
                },
                hideFromPalette: HideBlockType.math
            },
            {
                opcode: 'round',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.ROUND',
                    default: 'round [NUM1] to [NUM2] decimal places'
                }),
                arguments: {
                    NUM1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '3.14'
                    },
                    NUM2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '1'
                    },
                },
                hideFromPalette: HideBlockType.math
            },
            {
                opcode: 'mapOff',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.MAP_OFF',
                    default: 'map [NUM] from [START1] ~ [END1] to [START2] ~ [END2]'
                }),
                arguments: {
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '10'
                    },
                    START1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    END1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '100'
                    },
                    START2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    END2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '1000'
                    }
                },
                hideFromPalette: HideBlockType.math
            },
            ...sep(rareHideAndSow('math')),
            {
                opcode: 'cubeRoot',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.CUBE_ROOT',
                    default: '∛ [NUM]'
                }),
                arguments: {
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    }
                },
                hideFromPalette: rareHideAndSow('math')
            },
            {
                opcode: 'toPercent',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.TO_PERCENT',
                    default: '[NUM] %'
                }),
                arguments: {
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    }
                },
                hideFromPalette: rareHideAndSow('math')
            },
            ...sep(rareHideAndSow('math')),
            {
                opcode: 'percentOf',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.PERCENT_OF',
                    default: '[NUM1] % of [NUM2]'
                }),
                arguments: {
                    NUM1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    },
                    NUM2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    }
                },
                hideFromPalette: rareHideAndSow('math')
            },
            {
                opcode: 'calculate',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.CALCULATE',
                    default: 'calculate [TEXT]'
                }),
                arguments: {
                    TEXT: {
                        type: ArgumentType.STRING,
                        defaultValue: 'abs(3-5)'
                    }
                },
                hideFromPalette: rareHideAndSow('math')
            },
            ...sep(rareHideAndSow('math')),
            {
                opcode: 'findPartition',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.FIND_PARTITION',
                    default: 'find partition of [VALUE] in range [RANGE_START] to [RANGE_END] divided into [NUM_PARTITIONS] partitions'
                }),
                arguments: {
                    VALUE: {
                        type: ArgumentType.NUMBER,
                        defaultValue: 10
                    },
                    RANGE_START: {
                        type: ArgumentType.NUMBER,
                        defaultValue: 1
                    },
                    RANGE_END: {
                        type: ArgumentType.NUMBER,
                        defaultValue: 20
                    },
                    NUM_PARTITIONS: {
                        type: ArgumentType.NUMBER,
                        defaultValue: 10
                    }
                },
                hideFromPalette: rareHideAndSow('math')
            },
            !HideBlockType.bool ? (
                '---' +
                formatMessage({
                    id: 'OPERATION.BOOLEAN_LABEL',
                    default: 'Boolean'
                })
            ) : '',
            {
                opcode: 'booleanMenu',
                blockType: BlockType.BOOLEAN,
                disableMonitor: true,
                text: '[BOOLEAN]',
                arguments: {
                    BOOLEAN: {
                        type: ArgumentType.STRING,
                        menu: 'BOOLEAN_MENU'
                    }
                },
                hideFromPalette: HideBlockType.bool
            },
            {
                opcode: 'isTrue',
                blockType: BlockType.BOOLEAN,
                text: formatMessage({
                    id: 'OPERATION.IS_TRUE',
                    default: '[OPERAND] is true?'
                }),
                arguments: {
                    OPERAND: {
                        type: ArgumentType.STRING,
                        defaultValue: ''
                    }
                },
                hideFromPalette: HideBlockType.bool
            },
            {
                opcode: 'checkType',
                blockType: BlockType.BOOLEAN,
                text: formatMessage({
                    id: 'OPERATION.CHECK_TYPE',
                    default: '[INPUT] is [MODE] ?'
                }),
                arguments: {
                    INPUT: {
                        type: ArgumentType.STRING,
                        defaultValue: ''
                    },
                    MODE: {
                        type: ArgumentType.STRING,
                        menu: 'CHECK_TYPE',
                        defaultValue: 'number'
                    }
                },
                hideFromPalette: HideBlockType.bool
            },
            ...sep(HideBlockType.bool),
            {
                opcode: 'compare',
                blockType: BlockType.BOOLEAN,
                text: '[OPERAND1] [SYMBOL] [OPERAND2]',
                arguments: {
                    OPERAND1: {
                        type: ArgumentType.STRING,
                        defaultValue: ''
                    },
                    OPERAND2: {
                        type: ArgumentType.STRING,
                        defaultValue: '50'
                    },
                    SYMBOL: {
                        type: ArgumentType.STRING,
                        menu: 'EQUAL_SYMBOL',
                        defaultValue: 'unequal'
                    }
                },
                hideFromPalette: HideBlockType.bool
            },
            {
                opcode: 'continuousCompare',
                blockType: BlockType.BOOLEAN,
                text: '[OPERAND1] [SYMBOL1] [OPERAND2] [SYMBOL2] [OPERAND3]',
                arguments: {
                    OPERAND1: {
                        type: ArgumentType.STRING,
                        defaultValue: ''
                    },
                    OPERAND2: {
                        type: ArgumentType.STRING,
                        defaultValue: ''
                    },
                    OPERAND3: {
                        type: ArgumentType.STRING,
                        defaultValue: ''
                    },
                    SYMBOL1: {
                        type: ArgumentType.STRING,
                        menu: 'EQUAL_SYMBOL',
                        defaultValue: 'lessOrEqual'
                    },
                    SYMBOL2: {
                        type: ArgumentType.STRING,
                        menu: 'EQUAL_SYMBOL',
                        defaultValue: 'lessOrEqual'
                    }
                },
                hideFromPalette: HideBlockType.bool
            },
            {
                opcode: 'approximatelyEqual',
                blockType: BlockType.BOOLEAN,
                text: '[OPERAND1] ≈ [OPERAND2] ± [NUM]',
                arguments: {
                    OPERAND1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '5'
                    },
                    OPERAND2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '6'
                    },
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '1'
                    }
                },
                hideFromPalette: HideBlockType.bool
            },
            ...sep(HideBlockType.bool),
            {
                opcode: 'logicGateOperation',
                blockType: BlockType.BOOLEAN,
                text: '[OPERAND1] [SYMBOL] [OPERAND2]',
                arguments: {
                    OPERAND1: {
                        type: ArgumentType.BOOLEAN
                    },
                    OPERAND2: {
                        type: ArgumentType.BOOLEAN
                    },
                    SYMBOL: {
                        type: ArgumentType.STRING,
                        menu: 'LOGIC_GATE_SYMBOL'
                    }
                },
                hideFromPalette: HideBlockType.bool
            },
            ...allCompare(),
            !HideBlockType.string ? (
                '---' +
                formatMessage({
                    id: 'OPERATION.STRING_LABEL',
                    default: 'String'
                })
            ) : '',
            {
                opcode: 'text',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.TEXT',
                    default: 'text [STRING]'
                }),
                arguments: {
                    STRING: {
                        type: ArgumentType.STRING,
                        defaultValue: formatMessage({
                            id: 'OPERATION.ARG_APPLE',
                            default: 'apple'
                        })
                    }
                },
                hideFromPalette: HideBlockType.string
            },
            {
                opcode: 'test',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.TEST',
                    default: 'test [BOOLEAN] true: [STRING1] false: [STRING2]'
                }),
                arguments: {
                    BOOLEAN: {
                        type: ArgumentType.BOOLEAN
                    },
                    STRING1: {
                        type: ArgumentType.STRING,
                        defaultValue: 'a'
                    },
                    STRING2: {
                        type: ArgumentType.STRING,
                        defaultValue: 'b'
                    }
                },
                hideFromPalette: HideBlockType.string
            },
            ...sep(HideBlockType.string),
            {
                opcode: 'repeat',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.REPEAT',
                    default: 'repeat [STRING] [NUMBER] times'
                }),
                arguments: {
                    STRING: {
                        type: ArgumentType.STRING,
                        defaultValue: formatMessage({
                            id: 'OPERATION.ARG_APPLE',
                            default: 'apple'
                        }) + ' '
                    },
                    NUMBER: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '3'
                    }
                },
                hideFromPalette: HideBlockType.string
            },
            {
                opcode: 'trim',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.TRIM',
                    default: 'trim whitespace from [STRING]'
                }),
                arguments: {
                    STRING: {
                        type: ArgumentType.STRING,
                        defaultValue: '     ' + formatMessage({
                            id: 'OPERATION.ARG_APPLE',
                            default: 'apple'
                        }) + '     '
                    }
                },
                hideFromPalette: HideBlockType.string
            },
            {
                opcode: 'letters',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.INTERCEPT',
                    default: 'letters [START] to [END] of [STRING]'
                }),
                arguments: {
                    START: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '4'
                    },
                    END: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '6'
                    },
                    STRING: {
                        type: ArgumentType.STRING,
                        defaultValue: '123456'
                    }
                },
                hideFromPalette: HideBlockType.string
            },
            {
                opcode: 'replace',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.REPLACE',
                    default: 'replace [STRING2] with [STRING3] in [STRING1]'
                }),
                arguments: {
                    STRING2: {
                        type: ArgumentType.STRING,
                        defaultValue: 'world'
                    },
                    STRING3: {
                        type: ArgumentType.STRING,
                        defaultValue: 'Scratch'
                    },
                    STRING1: {
                        type: ArgumentType.STRING,
                        defaultValue: 'Hello world!'
                    }
                },
                hideFromPalette: HideBlockType.string
            },
            {
                opcode: 'replaceIndex',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.REPLACE_INDEX',
                    default: 'replace [STRING] from [START] to [END] with [REPLACEMENT]'
                }),
                arguments: {
                    START: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '7'
                    },
                    END: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '11'
                    },
                    STRING: {
                        type: ArgumentType.STRING,
                        defaultValue: 'Hello world!'
                    },
                    REPLACEMENT: {
                        type: ArgumentType.STRING,
                        defaultValue: 'Scratch'
                    }
                },
                hideFromPalette: HideBlockType.string
            },
            {
                opcode: 'split',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.SPLIT',
                    default: 'split [STRING] by [SYMBOL] and take the [NUM]th item'
                }),
                arguments: {
                    STRING: {
                        type: ArgumentType.STRING,
                        defaultValue: formatMessage({
                            id: 'OPERATION.ARG_APPLE',
                            default: 'apple'
                        }) + '_' + formatMessage({
                            id: 'OPERATION.ARG_BANANA',
                            default: 'banana'
                        })
                    },
                    SYMBOL: {
                        type: ArgumentType.STRING,
                        defaultValue: '_'
                    },
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '1'
                    }
                },
                hideFromPalette: HideBlockType.string
            },
            {
                opcode: 'toggleCase',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.TOGGLE_CASE',
                    default: '[MODE] of [STRING2] in [STRING1]'
                }),
                arguments: {
                    MODE: {
                        type: ArgumentType.STRING,
                        menu: 'TOGGLE_CASE_MODE'
                    },
                    STRING2: {
                        type: ArgumentType.STRING,
                        defaultValue: 'te'
                    },
                    STRING1: {
                        type: ArgumentType.STRING,
                        defaultValue: 'The text test'
                    }
                },
                hideFromPalette: HideBlockType.string
            },
            {
                opcode: 'convert',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.CONVERT',
                    default: 'convert [STRING] to [MODE]'
                }),
                arguments: {
                    MODE: {
                        type: ArgumentType.STRING,
                        menu: 'CONVERT_MODE'
                    },
                    STRING: {
                        type: ArgumentType.STRING,
                        defaultValue: 'apple banana'
                    }
                },
                hideFromPalette: HideBlockType.string
            },
            ...sep(HideBlockType.string),
            {
                opcode: 'join',
                blockType: BlockType.COMMAND,
                text: formatMessage({
                    id: 'OPERATION.JOIN',
                    default: 'join [STRING]'
                }),
                arguments: {
                    STRING: {
                        type: ArgumentType.STRING,
                        defaultValue: formatMessage({
                            id: 'OPERATION.ARG_APPLE',
                            default: 'apple'
                        }) + ' '
                    }
                },
                hideFromPalette: HideBlockType.string
            },
            {
                opcode: 'getJoin',
                blockType: BlockType.REPORTER,
                disableMonitor: true,
                text: formatMessage({
                    id: 'OPERATION.GET_JOIN',
                    default: 'join value'
                }),
                hideFromPalette: HideBlockType.string
            },
            ...sep(rareHideAndSow('string')),
            {
                opcode: 'getUnicode',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.GET_TO_UNICODE',
                    default: 'unicode of [STRING]'
                }),
                arguments: {
                    STRING: {
                        type: ArgumentType.STRING,
                        defaultValue: 'a'
                    }
                },
                hideFromPalette: rareHideAndSow('string')
            },
            {
                opcode: 'unicodeToString',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.UNICODE_TO_STRING',
                    default: 'character with Unicode [STRING]'
                }),
                arguments: {
                    STRING: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '97'
                    }
                },
                hideFromPalette: rareHideAndSow('string')
            },
            ...sep(rareHideAndSow('string')),
            {
                opcode: 'overwrite',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.OVERWRITE',
                    default: 'overlay [ORIGINAL] with [OTHER], direction: [DIRECTION]'
                }),
                arguments: {
                    ORIGINAL: {
                        type: ArgumentType.STRING,
                        defaultValue: '1234567890'
                    },
                    OTHER: {
                        type: ArgumentType.STRING,
                        defaultValue: 'abcde'
                    },
                    DIRECTION: {
                        type: ArgumentType.STRING,
                        menu: 'OVERWRITE_DIRECTION'
                    }
                },
                hideFromPalette: rareHideAndSow('string')
            },
            !HideBlockType.graph ? (
                '---' +
                formatMessage({
                    id: 'OPERATION.GRAPH_LABEL',
                    default: 'Graph'
                })
            ) : '',
            {
                opcode: 'calculateLineLength',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.CALCULATE_LINE_LENGTH',
                    default: 'length from ([X1],[Y1]) to ([X2],[Y2])'
                }),
                arguments: {
                    X1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    Y1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    X2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '100'
                    },
                    Y2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    }
                },
                hideFromPalette: HideBlockType.graph
            },
            {
                opcode: 'calculateLineDirection',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.CALCULATE_LINE_DIRECTION',
                    default: 'direction from ([X1],[Y1]) to ([X2],[Y2])'
                }),
                arguments: {
                    X1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    Y1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    X2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '100'
                    },
                    Y2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    }
                },
                hideFromPalette: HideBlockType.graph
            },
            {
                opcode: 'calculateIntersection',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.CALCULATE_INTERSECTION',
                    default: 'calculate intersection ([X1],[Y1]) to ([X2],[Y2]) & ([X3],[Y3]) to ([X4],[Y4])'
                }),
                arguments: {
                    X1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '-100'
                    },
                    Y1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    X2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '100'
                    },
                    Y2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    X3: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    Y3: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '100'
                    },
                    X4: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    Y4: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '-100'
                    }
                },
                hideFromPalette: HideBlockType.graph
            },
            ...sep(HideBlockType.graph),
            {
                opcode: 'triangle',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.TRIANGLE',
                    default: 'triangle ([X1],[Y1]) ([X2],[Y2]) ([X3],[Y3]) \'s [MODE]'
                }),
                arguments: {
                    X1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    Y1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '10'
                    },
                    X2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '10'
                    },
                    Y2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '10'
                    },
                    X3: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '10'
                    },
                    Y3: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    MODE: {
                        type: ArgumentType.STRING,
                        menu: 'GRAPH_MODE'
                    }
                },
                hideFromPalette: HideBlockType.graph
            },
            {
                opcode: 'triangleArea',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.TRIANGLE_AREA',
                    default: 'triangle [S1] [S2] [S3] \'s area'
                }),
                arguments: {
                    S1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '3'
                    },
                    S2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '4'
                    },
                    S3: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '5'
                    }
                },
                hideFromPalette: HideBlockType.graph
            },
            {
                opcode: 'rectangle',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.RECTANGLE',
                    default: 'quadrangle ([X1],[Y1]) ([X2],[Y2]) ([X3],[Y3]) ([X4],[Y4]) \'s [MODE]'
                }),
                arguments: {
                    X1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    Y1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '10'
                    },
                    X2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '10'
                    },
                    Y2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '10'
                    },
                    X3: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '10'
                    },
                    Y3: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    X4: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    Y4: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '0'
                    },
                    MODE: {
                        type: ArgumentType.STRING,
                        menu: 'GRAPH_MODE'
                    }
                },
                hideFromPalette: HideBlockType.graph
            },
            {
                opcode: 'graph',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.GRAPH',
                    default: 'graph [GRAPH] \'s [MODE]'
                }),
                arguments: {
                    GRAPH: {
                        type: ArgumentType.STRING,
                        defaultValue: '(0,0) (0,2) (2,4) (4,2) (4,0)'
                    },
                    MODE: {
                        type: ArgumentType.STRING,
                        menu: 'GRAPH_MODE'
                    }
                },
                hideFromPalette: rareHideAndSow('graph')
            },
            ...sep(HideBlockType.graph),
            {
                opcode: 'circle',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.CIRCLE',
                    default: 'circle of [UNITS] [LENGTH] \'s [MODE]'
                }),
                arguments: {
                    UNITS: {
                        type: ArgumentType.STRING,
                        menu: 'LENGTH_UNITS'
                    },
                    LENGTH: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '10'
                    },
                    MODE: {
                        type: ArgumentType.STRING,
                        menu: 'GRAPH_MODE'
                    }
                },
                hideFromPalette: HideBlockType.graph
            },
            ...sep(HideBlockType.graph),
            {
                opcode: 'calculateAngleDifference',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.CALCULATE_ANGLE_DIFFERENCE',
                    default: 'calculate angle difference [ANGLE1] to [ANGLE2] [MODE]'
                }),
                arguments: {
                    ANGLE1: {
                        type: ArgumentType.ANGLE,
                        defaultValue: 0
                    },
                    ANGLE2: {
                        type: ArgumentType.ANGLE,
                        defaultValue: 90
                    },
                    MODE: {
                        type: ArgumentType.STRING,
                        menu: 'ANGLE_MODE'
                    }
                },
                hideFromPalette: HideBlockType.graph
            },
            !HideBlockType.base ? (
                '---' +
                formatMessage({
                    id: 'OPERATION.BASE_LABEL',
                    default: 'Base'
                })
            ) : '',
            {
                opcode: 'base',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.BASE',
                    default: 'convert [NUM] in base [INTO1] to base [INTO2]'
                }),
                arguments: {
                    NUM: {
                        type: ArgumentType.STRING,
                        defaultValue: '10'
                    },
                    INTO1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '10'
                    },
                    INTO2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: '2'
                    }
                },
                hideFromPalette: HideBlockType.base
            },
            ...sep(HideBlockType.base),
            {
                opcode: 'booleanToNumber',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.BOOLEAN_TO_NUMBER',
                    default: 'converts [BOOLEAN] to binary num'
                }),
                arguments: {
                    BOOLEAN: {
                        type: ArgumentType.BOOLEAN,
                        defaultValue: ''
                    }
                },
                hideFromPalette: HideBlockType.base
            },
            {
                opcode: 'numberNot',
                blockType: BlockType.REPORTER,
                text: formatMessage({
                    id: 'OPERATION.NUMBER_NOT',
                    default: 'binary Inversion [NUM]'
                }),
                arguments: {
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    }
                },
                hideFromPalette: HideBlockType.base
            },
            ...sep(HideBlockType.base),
            {
                opcode: 'bitwiseBlock',
                blockType: BlockType.REPORTER,
                text: '[NUM1] [SYMBOL] [NUM2]',
                arguments: {
                    NUM1: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    },
                    NUM2: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    },
                    SYMBOL: {
                        type: ArgumentType.NUMBER,
                        menu: 'BITWISE_SYMBOL'
                    }
                },
                hideFromPalette: HideBlockType.base
            },
            {
                opcode: 'bitwiseNot',
                blockType: BlockType.REPORTER,
                text: '~ [NUM]',
                arguments: {
                    NUM: {
                        type: ArgumentType.NUMBER,
                        defaultValue: ''
                    }
                },
                hideFromPalette: HideBlockType.base
            },
            ...allBitwise(isRTL),
            (
                '---' +
                formatMessage({
                    id: 'OPERATION.CONSTANT_LABEL',
                    default: 'Constant'
                })
            ),
            {
                opcode: 'getConstant',
                blockType: BlockType.REPORTER,
                disableMonitor: true,
                text: formatMessage({
                    id: 'OPERATION.GET_CONSTANT',
                    default: 'constant [OPTION]'
                }),
                arguments: {
                    OPTION: {
                        type: ArgumentType.STRING,
                        menu: 'CONSTANT'
                    }
                }
            }
        ];
    }

    const menus = (formatMessage, isRTL) => {
        return {
            BOOLEAN_MENU: {
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'OPERATION.TRUE',
                            default: 'true'
                        }),
                        value: 'true'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.FALSE',
                            default: 'false'
                        }),
                        value: 'false'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.RANDOM',
                            default: 'random'
                        }),
                        value: 'random'
                    }
                ]
            },
            EQUAL_SYMBOL: {
                acceptReporters: false,
                items: [
                    {
                        text: '=',
                        value: 'equal'
                    },
                    {
                        text: '≡',
                        value: 'strictlyEqual'
                    },
                    {
                        text: '>',
                        value: 'greater'
                    },
                    {
                        text: '<',
                        value: 'less'
                    },
                    {
                        text: '≥',
                        value: 'greaterOrEqual'
                    },
                    {
                        text: '≤',
                        value: 'lessOrEqual'
                    },
                    {
                        text: '≠',
                        value: 'unequal'
                    },
                    {
                        text: '≢',
                        value: 'strictlyUnequal'
                    },
                    {
                        text: '=-',
                        value: 'equalNegative'
                    },
                    {
                        text: '=±',
                        value: 'EqualPON'
                    },
                    {
                        text: '≈',
                        value: 'approximatelyEqual'
                    },
                    {
                        text: '⊥',
                        value: 'vertical'
                    },
                    {
                        text: '∥',
                        value: 'parallel'
                    }
                ]
            },
            LOGIC_GATE_SYMBOL: {
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'OPERATION.NAND',
                            default: 'nand'
                        }),
                        value: 'nand'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.NOR',
                            default: 'nor'
                        }),
                        value: 'nor'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.XOR',
                            default: 'xor'
                        }),
                        value: 'xor'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.XNOR',
                            default: 'xnor'
                        }),
                        value: 'xnor'
                    }
                ]
            },
            CHECK_TYPE: {
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'OPERATION.TYPE_NUMBER',
                            default: 'number'
                        }),
                        value: 'number'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.TYPE_POSITIVE_NUMBER',
                            default: 'positive number'
                        }),
                        value: 'positiveNumber'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.TYPE_NEGATIVE_NUMBER',
                            default: 'negative number'
                        }),
                        value: 'negativeNumber'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.TYPE_EVEN_NUMBER',
                            default: 'even number'
                        }),
                        value: 'evenNumber'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.TYPE_ODD_NUMBER',
                            default: 'odd number'
                        }),
                        value: 'oddNumber'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.TYPE_INTEGER_NUMBER',
                            default: 'integer number'
                        }),
                        value: 'integerNumber'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.TYPE_DECIMAL_NUMBER',
                            default: 'decimal number'
                        }),
                        value: 'decimalNumber'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.TYPE_PRIME_NUMBER',
                            default: 'prime number'
                        }),
                        value: 'primeNumber'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.TYPE_COMPOSITE_NUMBER',
                            default: 'composite number'
                        }),
                        value: 'compositeNumber'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.TYPE_TEXT',
                            default: 'text'
                        }),
                        value: 'text'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.TYPE_BOOLEAN',
                            default: 'boolean'
                        }),
                        value: 'boolean'
                    }
                ]
            },
            OVERWRITE_DIRECTION: {
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'OPERATION.FRONT2BACK',
                            default: '→'
                        }),
                        value: 'f2b'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.BACK2FRONT',
                            default: '←'
                        }),
                        value: 'b2f'
                    }
                ]
            },
            TOGGLE_CASE_MODE: {
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'OPERATION.FIRST_OCCURRENCE',
                            default: 'first occurrence'
                        }),
                        value: 'first'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.LAST_OCCURRENCE',
                            default: 'last occurrence'
                        }),
                        value: 'last'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.NUMBER_OF',
                            default: 'number'
                        }),
                        value: 'number'
                    }
                ]
            },
            CONVERT_MODE: {
                acceptReporters: false,
                items: [
                    {
                        text: formatMessage({
                            id: 'OPERATION.UPPERCASE',
                            default: 'uppercase'
                        }),
                        value: 'uppercase'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.LOWERCASE',
                            default: 'lowercase'
                        }),
                        value: 'lowercase'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.CAPITALIZE',
                            default: 'capitalize the first letter'
                        }),
                        value: 'capitalize'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.REVERSE',
                            default: 'reverse'
                        }),
                        value: 'reverse'
                    }
                ]
            },
            GRAPH_MODE: {
                acceptReporters: true,
                items: [
                    {
                        text: formatMessage({
                            id: 'OPERATION.AREA',
                            default: 'area'
                        }),
                        value: 'area'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.CIRCUMFERENCE',
                            default: 'circumference'
                        }),
                        value: 'circumference'
                    }
                ]
            },
            LENGTH_UNITS: {
                acceptReporters: true,
                items: [
                    {
                        text: formatMessage({
                            id: 'OPERATION.RADIUS',
                            default: 'radius'
                        }),
                        value: 'radius'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.DIAMETER',
                            default: 'diameter'
                        }),
                        value: 'diameter'
                    }
                ]
            },
            ANGLE_MODE: {
                acceptReporters: true,
                items: [
                    {
                        text: formatMessage({
                            id: 'OPERATION.INTERIOR_ANGLE',
                            default: 'interior angle'
                        }),
                        value: 'interiorAngle'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.EXTERIOR_ANGLE',
                            default: 'exterior angle'
                        }),
                        value: 'exteriorAngle'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.CLOCKWISE',
                            default: 'clockwise'
                        }),
                        value: 'clockwise'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.COUNTER_CLOCKWISE',
                            default: 'counter clockwise'
                        }),
                        value: 'counterClockwise'
                    }
                ]
            },
            BITWISE_SYMBOL: {
                acceptReporters: false,
                items: [
                    {
                        text: '&',
                        value: 'and'
                    },
                    {
                        text: '|',
                        value: 'or'
                    },
                    {
                        text: '^',
                        value: 'xor'
                    },
                    {
                        text: !isRTL ? '<<' : '>>',
                        value: 'leftShift'
                    },
                    {
                        text: !isRTL ? '>>' : '<<',
                        value: 'rightShift'
                    },
                    {
                        text: !isRTL ? '>>>' : '<<<',
                        value: 'logicalRightShift'
                    }
                ]
            },
            CONSTANT: {
                acceptReporters: false,
                items: [
                    {
                        text: 'π',
                        value: 'pi'
                    },
                    {
                        text: 'φ',
                        value: 'phi'
                    },
                    {
                        text: 'γ',
                        value: 'gamma'
                    },
                    {
                        text: 'e',
                        value: 'e'
                    },
                    {
                        text: formatMessage({
                            id: 'OPERATION.SQRT2',
                            default: '√2'
                        }),
                        value: 'sqrt2'
                    },
                    {
                        text: '∞',
                        value: 'Infinity'
                    },
                    {
                        text: '↵',
                        value: 'newLine'
                    }
                ]
            }
        };
    }

    class Operation {
        constructor(runtime) {
            Operation.runtime = runtime;
        }

        getInfo() {
            return getInfo();
        }

        opensettingwindow() {
            showWindow();
        }

        exponent({ NUM1, NUM2 }) {
            return Cast.toNumber(NUM1) ** Cast.toNumber(NUM2);
        }

        root({ NUM1, NUM2 }) {
            return Math.pow(Cast.toNumber(NUM2), 1 / Cast.toNumber(NUM1));
        }

        negative({ NUM }) {
            return 0 - Cast.toNumber(NUM);
        }

        constrain({ NUM, LOW, HIGH }) {
            return Math.min(Math.max(NUM, LOW), HIGH);
        }

        loopNum({ NUM, START, END }) {
            let num = Cast.toNumber(NUM);
            let start = Cast.toNumber(START);
            let end = Cast.toNumber(END);
            let range_num = end - start + 1;
            let result = ((num - start) % range_num + range_num) % range_num + start;
            if (result > end) {
                result -= range_num;
            }
            return result;
        }

        round({ NUM1, NUM2 }) {
            return Cast.toNumber(NUM1).toFixed(Cast.toNumber(NUM2));
        }

        mapOff({ NUM, START1, END1, START2, END2 }) {
            NUM = Cast.toNumber(NUM);
            START1 = Cast.toNumber(START1);
            END1 = Cast.toNumber(END1);
            START2 = Cast.toNumber(START2);
            END2 = Cast.toNumber(END2);
            return ((NUM - START1) / (END1 - START1)) * (END2 - START2) + START2;
        }

        cubeRoot({ NUM }) {
            return Math.pow(Cast.toNumber(NUM), 1 / 3);
        }

        toPercent({ NUM }) {
            return Cast.toNumber(NUM) / 100;
        }

        percentOf({ NUM1, NUM2 }) {
            return (
                Cast.toNumber(NUM2) / 100
            ) * NUM1;
        }

        calculate({ TEXT }) {
            const expression = String(TEXT);
            const isNumRegex = /^-?\d+(\.\d+)?$/;
            if (isNumRegex.test(expression)) return expression;
            try {
                let processedExpression = expression
                    .replaceAll('[', '(').replaceAll('{', '(')
                    .replaceAll(']', ')').replaceAll('}', ')')
                    .replaceAll('×', '*').replaceAll('÷', '/')
                    .replaceAll('^', '**');
                processedExpression = processedExpression.replace(/[a-zA-Z]+/g, match => `Math.${match}`);
                const func = new Function('Math', `return (${processedExpression})`);
                const result = func(Math);
                if (typeof result === 'number') return result;
                else return '';
            }
            catch {
                return '';
            }
        }

        findPartition({ VALUE, RANGE_START, RANGE_END, NUM_PARTITIONS }) {
            VALUE = Cast.toNumber(VALUE);
            RANGE_START = Cast.toNumber(RANGE_START) - 1;
            RANGE_END = Cast.toNumber(RANGE_END);
            NUM_PARTITIONS = Cast.toNumber(NUM_PARTITIONS);
            const partitionSize = (RANGE_END - RANGE_START) / NUM_PARTITIONS;
            const partitionIndex = Math.floor((VALUE - RANGE_START) / partitionSize + 0.5);
            return partitionIndex;
        }

        booleanMenu({ BOOLEAN }) {
            if (BOOLEAN === 'random') return Math.random() < 0.5 ? true : false
            return BOOLEAN == 'true' ? true : false;
        }

        isTrue({ OPERAND }) {
            return Cast.toBoolean(OPERAND);
        }

        _isPrime = (number) => {
            if (number <= 1) return false;
            if (number <= 3) return true;
            if (number % 2 === 0 || number % 3 === 0) return false;
            let i = 5;
            while (i * i <= number) {
                if (number % i === 0 || number % (i + 2) === 0) return false;
                i += 6;
            }
            return true;
        }

        _isComposite = (number) => {
            if (number <= 1) return false;
            for (let i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) return true;
            }
            return false;
        }

        checkType({ INPUT, MODE }) {
            INPUT = String(INPUT);
            const isNumRegex = /^-?\d+(\.\d+)?$/;
            switch (MODE) {
                case 'number': return isNumRegex.test(INPUT);
                case 'positiveNumber': return Cast.toNumber(INPUT) > 0 && isNumRegex.test(INPUT);
                case 'negativeNumber': return Cast.toNumber(INPUT) < 0 && isNumRegex.test(INPUT);
                case 'evenNumber': return Cast.toNumber(INPUT) % 2 === 0 && isNumRegex.test(INPUT);
                case 'oddNumber': return Cast.toNumber(INPUT) % 2 !== 0 && isNumRegex.test(INPUT);
                case 'integerNumber': return Cast.toNumber(INPUT) % 1 === 0 && isNumRegex.test(INPUT);
                case 'decimalNumber': return Cast.toNumber(INPUT) % 1 !== 0 && isNumRegex.test(INPUT);
                case 'primeNumber': return this._isPrime(Cast.toNumber(INPUT)) && isNumRegex.test(INPUT);
                case 'compositeNumber': return this._isComposite(Cast.toNumber(INPUT)) && isNumRegex.test(INPUT);
                case 'text': return !isNumRegex.test(INPUT) && INPUT.length >= 1;
                case 'boolean': return INPUT === 'true' || INPUT === 'false';
                default: return false;
            }
        }

        _compare(arg1, arg2, symbol) {
            if (symbol === 'equal') return Cast.compare(arg1, arg2) === 0;
            if (symbol === 'strictlyEqual') return String(arg1) === String(arg2);
            if (symbol === 'greater') return Cast.compare(arg1, arg2) > 0;
            if (symbol === 'less') return Cast.compare(arg1, arg2) < 0;
            if (symbol === 'greaterOrEqual') return Cast.compare(arg1, arg2) >= 0;
            if (symbol === 'lessOrEqual') return Cast.compare(arg1, arg2) <= 0;
            if (symbol === 'unequal') return Cast.compare(arg1, arg2) !== 0;
            if (symbol === 'strictlyUnequal') return String(arg1) !== String(arg2);
            if (symbol === 'equalNegative') return Cast.compare(arg1, -arg2) === 0;
            if (symbol === 'EqualPON') return Cast.compare(arg1, -arg2) === 0 || Cast.compare(arg1, arg2) === 0;
            if (symbol === 'approximatelyEqual') return Math.abs(arg1 - arg2) <= 0.5;
            if (symbol === 'vertical') return ((arg1 - (arg2 - 90)) % 180) === 0;
            if (symbol === 'parallel') return ((arg1 - arg2) % 180) === 0;
            return false;
        }

        compare({ OPERAND1, OPERAND2, SYMBOL }) {
            return this._compare(OPERAND1, OPERAND2, SYMBOL);
        }

        continuousCompare({ OPERAND1, OPERAND2, OPERAND3, SYMBOL1, SYMBOL2 }) {
            const result1 = this._compare(OPERAND1, OPERAND2, SYMBOL1);
            const result2 = this._compare(OPERAND2, OPERAND3, SYMBOL2);
            return result1 && result2;
        }

        approximatelyEqual({ OPERAND1, OPERAND2, NUM }) {
            OPERAND1 = Cast.toNumber(OPERAND1);
            OPERAND2 = Cast.toNumber(OPERAND2);
            NUM = Cast.toNumber(NUM);
            return Math.abs(OPERAND1 - OPERAND2) <= NUM;
        }

        trueBlock = () => true;

        falseBlock = () => false;

        logicGateOperation({ OPERAND1, OPERAND2, SYMBOL }) {
            const operand1 = Cast.toBoolean(OPERAND1);
            const operand2 = Cast.toBoolean(OPERAND2);
            if (SYMBOL === 'nand') return !(operand1 && operand2);
            if (SYMBOL === 'nor') return !(operand1 || operand2);
            if (SYMBOL === 'xor') return operand1 !== operand2;
            if (SYMBOL === 'xnor') return operand1 === operand2;
            return false;
        }

        strictlyEqualBlock({ OPERAND1, OPERAND2 }) {
            return this._compare(OPERAND1, OPERAND2, 'strictlyEqual')
        }

        greaterOrEqualBlock({ OPERAND1, OPERAND2 }) {
            return this._compare(OPERAND1, OPERAND2, 'greaterOrEqual')
        }

        lessOrEqualBlock({ OPERAND1, OPERAND2 }) {
            return this._compare(OPERAND1, OPERAND2, 'lessOrEqual')
        }

        unequalBlock({ OPERAND1, OPERAND2 }) {
            return this._compare(OPERAND1, OPERAND2, 'unequal')
        }

        strictlyUnequalBlock({ OPERAND1, OPERAND2 }) {
            return this._compare(OPERAND1, OPERAND2, 'strictlyUnequal')
        }

        equalNegativeBlock({ OPERAND1, OPERAND2 }) {
            return this._compare(OPERAND1, OPERAND2, 'equalNegative')
        }

        EqualPONBlock({ OPERAND1, OPERAND2 }) {
            return this._compare(OPERAND1, OPERAND2, 'EqualPON')
        }

        approximatelyEqualBlock({ OPERAND1, OPERAND2 }) {
            return this._compare(OPERAND1, OPERAND2, 'approximatelyEqual')
        }

        verticalBlock({ OPERAND1, OPERAND2 }) {
            return this._compare(OPERAND1, OPERAND2, 'vertical')
        }

        parallelBlock({ OPERAND1, OPERAND2 }) {
            return this._compare(OPERAND1, OPERAND2, 'parallel')
        }

        text({ STRING }) {
            return Cast.toString(STRING);
        }

        test({ BOOLEAN, STRING1, STRING2 }) {
            return Cast.toBoolean(BOOLEAN) ? STRING1 : STRING2;
        }

        nandBlock = ({ OPERAND1, OPERAND2 }) => !(Cast.toBoolean(OPERAND1) && Cast.toBoolean(OPERAND2));

        norBlock = ({ OPERAND1, OPERAND2 }) => !(Cast.toBoolean(OPERAND1) || Cast.toBoolean(OPERAND2));

        xorBlock = ({ OPERAND1, OPERAND2 }) => Cast.toBoolean(OPERAND1) !== Cast.toBoolean(OPERAND2);

        xnorBlock = ({ OPERAND1, OPERAND2 }) => Cast.toBoolean(OPERAND1) === Cast.toBoolean(OPERAND2);

        repeat({ STRING, NUMBER }) {
            const text = String(STRING);
            const times = Cast.toNumber(NUMBER);
            return text.repeat(times);
        }

        trim({ STRING }) {
            return String(STRING).trim();
        }

        letters({ START, END, STRING }) {
            return String(STRING).slice(
                Cast.toNumber(START) - 1, Cast.toNumber(END)
            );
        }

        replace({ STRING1, STRING2, STRING3 }) {
            const text = String(STRING1);
            const oldStr = String(STRING2);
            const newStr = String(STRING3);
            return text.replace(new RegExp(oldStr, 'g'), newStr);
        }

        replaceIndex({ STRING, START, END, REPLACEMENT }) {
            STRING = String(STRING);
            START = Cast.toNumber(START) - 1;
            END = Cast.toNumber(END);
            START = Math.max(0, START);
            END = Math.min(STRING.length, END);
            return STRING.slice(0, START) + REPLACEMENT + STRING.slice(END);
        }

        split({ STRING, SYMBOL, NUM }) {
            const str = String(STRING);
            const symbol = String(SYMBOL);
            const num = Cast.toNumber(NUM);
            return (str.split(symbol)[(num - 1)]) ?? '';
        }

        countKeyword = (sentence, keyword) => (sentence.match(new RegExp(keyword, 'gi')) || []).length;

        toggleCase({ MODE, STRING2, STRING1 }) {
            if (MODE === 'first') return String(STRING1).indexOf(String(STRING2)) + 1;
            if (MODE === 'last') return String(STRING1).lastIndexOf(String(STRING2)) + 1;
            if (MODE === 'number') return this.countKeyword(String(STRING1), String(STRING2));
            return '';
        }

        _textToTitleCase = (str) => str.replace(/\S+/g, function (txt) {
            return txt[0].toUpperCase() + txt.substring(1).toLowerCase();
        });

        convert({ STRING, MODE }) {
            if (MODE === 'uppercase') return String(STRING).toUpperCase();
            if (MODE === 'lowercase') return String(STRING).toLowerCase();
            if (MODE === 'capitalize') return this._textToTitleCase(String(STRING));
            if (MODE === 'reverse') return (String(STRING)).split('').reverse().join('');
            return '';
        }

        join({ STRING }, util) {
            const thread = util.thread;
            thread.joinValue = thread.joinValue ?? {
                value: '',
                readyClean: 'false'
            }
            if (thread.joinValue.readyClean) {
                thread.joinValue = {
                    value: Cast.toString(STRING),
                    readyClean: false
                }
                return;
            }
            thread.joinValue = {
                value: thread.joinValue.value + Cast.toString(STRING),
                readyClean: false
            }
        }

        getJoin({ }, util) {
            const thread = util.thread;
            if (thread.joinValue) {
                thread.joinValue.readyClean = true;
                return thread.joinValue.value ?? '';
            }
            return '';
        }

        getUnicode({ STRING }) {
            STRING = String(STRING);
            if (STRING.length < 1) return '';
            return STRING.charCodeAt();
        }

        unicodeToString({ STRING }) {
            if (isNaN(STRING)) return '';
            return String.fromCharCode(STRING);
        }

        overwrite({ ORIGINAL, OTHER, DIRECTION }) {
            const originalStr = String(ORIGINAL);
            const otherStr = String(OTHER);
            const isFromStart = DIRECTION === 'f2b';
            const oLength = originalStr.length;
            const fLength = otherStr.length;
            let result = '';
            if (isFromStart) result = otherStr + originalStr.slice(fLength, oLength);
            else result = originalStr.slice(0, oLength - fLength) + otherStr;
            if (oLength <= fLength) result = otherStr;
            return result;
        }

        calculateLineLength({ X1, Y1, X2, Y2 }) {
            const x1 = Cast.toNumber(X1);
            const y1 = Cast.toNumber(Y1);
            const x2 = Cast.toNumber(X2);
            const y2 = Cast.toNumber(Y2);
            return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
        }

        calculateLineDirection({ X1, Y1, X2, Y2 }) {
            const x1 = Cast.toNumber(X1);
            const y1 = Cast.toNumber(Y1);
            const x2 = Cast.toNumber(X2);
            const y2 = Cast.toNumber(Y2);
            let angleRadians = Math.atan2(y2 - y1, x2 - x1);
            let angleDegrees = angleRadians * 180 / Math.PI;
            let scratchAngle = -angleDegrees + 90;
            if (scratchAngle < -180) {
                scratchAngle = 360 + scratchAngle;
            }
            else if (scratchAngle > 180) {
                scratchAngle = scratchAngle - 360;
            }
            return scratchAngle;
        }

        calculateIntersection({ X1, Y1, X2, Y2, X3, Y3, X4, Y4 }) {
            const x1 = Cast.toNumber(X1);
            const y1 = Cast.toNumber(Y1);
            const x2 = Cast.toNumber(X2);
            const y2 = Cast.toNumber(Y2);
            const x3 = Cast.toNumber(X3);
            const y3 = Cast.toNumber(Y3);
            const x4 = Cast.toNumber(X4);
            const y4 = Cast.toNumber(Y4);
            let denominator = (x2 - x1) * (y4 - y3) - (y2 - y1) * (x4 - x3);
            if (denominator === 0) {
                return '';
            }
            let ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;
            let x = x1 + ua * (x2 - x1);
            let y = y1 + ua * (y2 - y1);
            return String([x, y]);
        }

        triangle({ X1, Y1, X2, Y2, X3, Y3, MODE }) {
            const x1 = Cast.toNumber(X1);
            const y1 = Cast.toNumber(Y1);
            const x2 = Cast.toNumber(X2);
            const y2 = Cast.toNumber(Y2);
            const x3 = Cast.toNumber(X3);
            const y3 = Cast.toNumber(Y3);
            if (MODE === 'area') {
                let points = [[x1, y1], [x2, y2], [x3, y3]];
                let area = 0;
                let n = points.length;
                for (let i = 0; i < n; i++) {
                    let x1 = points[i][0];
                    let y1 = points[i][1];
                    let x2 = points[(i + 1) % n][0];
                    let y2 = points[(i + 1) % n][1];
                    area += x1 * y2;
                    area -= x2 * y1;
                }
                area = Math.abs(area) / 2;
                return (area);
            }
            if (MODE === 'circumference') {
                let i = 0;
                i += Math.sqrt(Math.pow(x1 - Cast.toNumber(x2), 2) + Math.pow(y1 - y2, 2));
                i += Math.sqrt(Math.pow(x2 - Cast.toNumber(x3), 2) + Math.pow(y2 - y3, 2));
                i += Math.sqrt(Math.pow(x3 - Cast.toNumber(x1), 2) + Math.pow(y3 - y1, 2));
                return i;
            }
            return 0;
        }

        triangleArea({ S1, S2, S3 }) {
            const s1 = Cast.toNumber(S1);
            const s2 = Cast.toNumber(S2);
            const s3 = Cast.toNumber(S3);
            const s = (s1 + s2 + s3) / 2;
            const area = Math.sqrt(s * (s - s1) * (s - s2) * (s - s3));
            return area;
        }

        rectangle({ X1, Y1, X2, Y2, X3, Y3, X4, Y4, MODE }) {
            const x1 = Cast.toNumber(X1);
            const y1 = Cast.toNumber(Y1);
            const x2 = Cast.toNumber(X2);
            const y2 = Cast.toNumber(Y2);
            const x3 = Cast.toNumber(X3);
            const y3 = Cast.toNumber(Y3);
            const x4 = Cast.toNumber(X4);
            const y4 = Cast.toNumber(Y4);
            if (MODE === 'area') {
                let points = [[x1, y1], [x2, y2], [x3, y3], [x4, y4]];
                let area = 0;
                let n = points.length;
                for (let i = 0; i < n; i++) {
                    let x1 = points[i][0];
                    let y1 = points[i][1];
                    let x2 = points[(i + 1) % n][0];
                    let y2 = points[(i + 1) % n][1];
                    area += x1 * y2;
                    area -= x2 * y1;
                }
                area = Math.abs(area) / 2;
                return (area);
            }
            if (MODE === 'circumference') {
                let i = 0;
                i += Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
                i += Math.sqrt(Math.pow(x2 - x3, 2) + Math.pow(y2 - y3, 2));
                i += Math.sqrt(Math.pow(x3 - x4, 2) + Math.pow(y3 - y4, 2));
                i += Math.sqrt(Math.pow(x4 - x1, 2) + Math.pow(y4 - y1, 2));
                return i;
            }
            return 0;
        }

        _parseGraphString(graphString) {
            const cleanedGraphString = graphString.replace(/\s/g, '');
            const regex = /\((\d+),(\d+)\)/g;
            let match;
            const points = [];

            while ((match = regex.exec(cleanedGraphString)) !== null) {
                points.push([parseInt(match[1]), parseInt(match[2])]);
            }

            return points;
        }

        graph({ GRAPH, MODE }) {
            try {
                let points = String(GRAPH);
                if (GRAPH.includes('(')) {
                    points = this._parseGraphString(points);
                }
                else {
                    points = JSON.parse(GRAPH);
                }
                let n = points.length;
                if (MODE === 'area') {
                    let area = 0;
                    for (let i = 0; i < n; i++) {
                        let x1 = points[i][0];
                        let y1 = points[i][1];
                        let x2 = points[(i + 1) % n][0];
                        let y2 = points[(i + 1) % n][1];
                        area += x1 * y2;
                        area -= x2 * y1;
                    }
                    area = Math.abs(area) / 2;
                    return (area);
                }
                if (MODE === 'circumference') {
                    let j = 0;
                    const numPoints = points.length;
                    for (let i = 0; i < numPoints; i++) {
                        const x1 = points[i][0];
                        const y1 = points[i][1];
                        const x2 = points[(i + 1) % numPoints][0];
                        const y2 = points[(i + 1) % numPoints][1];
                        j += Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
                    }
                    return j;
                }
            }
            catch {
                return 0;
            }
            return 0;
        }

        circle({ UNITS, LENGTH, MODE }) {
            const length = Cast.toNumber(LENGTH);
            if (MODE === 'circumference') {
                return 2 * Math.PI * (UNITS === 'radius' ? length : length / 2);
            }
            if (MODE === 'area') {
                return Math.PI * ((UNITS === 'radius' ? length : length / 2) ** 2);
            }
            return 0;
        }

        calculateAngleDifference({ ANGLE1, ANGLE2, MODE }) {
            const angle1 = Cast.toNumber(ANGLE1);
            const angle2 = Cast.toNumber(ANGLE2);
            let diff = Math.abs(angle1 - angle2) % 360;
            switch (MODE) {
                case 'interiorAngle': return diff <= 180 ? diff : 360 - diff;
                case 'exteriorAngle': return diff <= 180 ? 360 - diff : diff;
                case 'clockwise': return angle1 <= angle2 ? (angle2 - angle1) % 360 : (360 - (angle1 - angle2) % 360);
                case 'counterClockwise': return angle1 >= angle2 ? (angle1 - angle2) % 360 : (360 - (angle2 - angle1) % 360);
            }
            return 0;
        }

        base({ NUM, INTO1, INTO2 }) {
            const into1 = Cast.toNumber(INTO1);
            const into2 = Cast.toNumber(INTO2);
            if (into1 > 1 && into1 < 37 && into2 > 1 && into2 < 37) {
                const dec = parseInt(NUM, into1);
                const result = dec.toString(into2);
                return result;
            }
            else {
                return '';
            }
        }

        numberNot({ NUM }) {
            const num = Cast.toBoolean(NUM);
            return num ? 0 : 1;
        }

        booleanToNumber({ BOOLEAN }) {
            const input = Cast.toNumber(
                Cast.toBoolean(BOOLEAN)
            );
            return input ? 1 : 0;
        }

        bitwiseBlock({ NUM1, SYMBOL, NUM2 }) {
            const num1 = Cast.toNumber(NUM1);
            const num2 = Cast.toNumber(NUM2);
            if (SYMBOL === 'and') return num1 & num2;
            if (SYMBOL === 'or') return num1 | num2;
            if (SYMBOL === 'xor') return num1 ^ num2;
            if (SYMBOL === 'leftShift') return num1 << num2;
            if (SYMBOL === 'rightShift') return num1 >> num2;
            if (SYMBOL === 'logicalRightShift') return num1 >>> num2;
            return 0;
        }

        bitwiseNot({ NUM }) {
            return ~Cast.toNumber(NUM);
        }

        bitwiseAndBlock = ({ NUM1, NUM2 }) => this.bitwiseBlock({ NUM1: NUM1, SYMBOL: 'and', NUM2: NUM2 });

        bitwiseOrBlock = ({ NUM1, NUM2 }) => this.bitwiseBlock({ NUM1: NUM1, SYMBOL: 'or', NUM2: NUM2 });

        bitwiseXorBlock = ({ NUM1, NUM2 }) => this.bitwiseBlock({ NUM1: NUM1, SYMBOL: 'xor', NUM2: NUM2 });

        bitwiseLeftShiftBlock = ({ NUM1, NUM2 }) => this.bitwiseBlock({ NUM1: NUM1, SYMBOL: 'leftShift', NUM2: NUM2 });

        bitwiseRightShiftBlock = ({ NUM1, NUM2 }) => this.bitwiseBlock({ NUM1: NUM1, SYMBOL: 'rightShift', NUM2: NUM2 });

        bitwiseLogicalRightShiftBlock = ({ NUM1, NUM2 }) => this.bitwiseBlock({ NUM1: NUM1, SYMBOL: 'logicalRightShift', NUM2: NUM2 });

        getConstant({ OPTION }) {
            if (OPTION === 'pi') return 3.141592653589793;
            if (OPTION === 'phi') return 1.618033988749895;
            if (OPTION === 'gamma') return 0.577215664901532;
            if (OPTION === 'e') return 2.718281828459045;
            if (OPTION === 'sqrt2') return 1.4142135623730951;
            if (OPTION === 'sqrt3') return 1.7320508075688772;
            if (OPTION === 'ln2') return 0.6931471805599453;
            if (OPTION === 'Infinity') return Infinity;
            if (OPTION === 'NaN') return NaN;
            if (OPTION === 'newLine') return '\n';
            return OPTION;
        }
    }

    window.tempExt = {
        Extension: Operation,
        info: {
          name: "OPERATION_EXT_NAME",
          description: "OPERATION_EXT.descp",
          extensionId: OPERATION_EXT_extensionId,
          iconURL: OPERATION_EXT_picture,
          insetIconURL: OPERATION_EXT_icon,
          featured: true,
          disabled: false,
          collaboratorList: [
            {
              collaborator: '多bug的啸天犬 @ CCW',
              collaboratorURL:
                'https://www.ccw.site/student/6200811f05660557606c8b15',
            },
            {
              collaborator: 'لا اسم@CCW',
              collaboratorURL:
                'https://www.ccw.site/student/6267e862a6666f52c7c97059',
            },
          ]},
        l10n: {
          "zh-cn": {
            "OPERATION_EXT_NAME": "运算pro",
            "OPERATION_EXT.descp": "数学课作弊神器！更好的计算！！"
          },
          en: {
            "OPERATION_EXT_NAME": "operation pro",
            "OPERATION_EXT.descp": "Math class cheating device! Better calculation!!"
          }
        }
       };
    
})(Scratch);
