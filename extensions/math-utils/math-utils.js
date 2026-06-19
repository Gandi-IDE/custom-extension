(function (_Scratch) {
    const {ArgumentType, BlockType, Cast, extensions, runtime} = _Scratch;

    // ---------- 多语言配置 ----------
    const translate = _Scratch.translate;
    translate.setup({
        'zh': {
            'extensionName': '数学便利工具',
            // 基础数学
            '平方': '平方 [数]',
            '平方根': '平方根 [数]',
            '绝对值': '绝对值 [数]',
            '取余': '取余 [数] 除以 [除数]',
            '幂运算': '幂运算 [底数] 的 [指数] 次方',
            '立方': '立方 [数]',
            '立方根': '立方根 [数]',
            '正弦': '正弦 [角度] 度',
            '余弦': '余弦 [角度] 度',
            '正切': '正切 [角度] 度',
            '对数': '以 [底数] 为底 [数] 的对数',
            '取整': '取整 [数]',
            '向上取整': '向上取整 [数]',
            '四舍五入': '四舍五入 [数] 保留 [小数位数] 位',
            '最大值': '最大值 [数1] 和 [数2]',
            '最小值': '最小值 [数1] 和 [数2]',
            // 字符串
            '拼接': '拼接 [文本1] 和 [文本2]',
            '长度': '[文本] 的长度',
            '截取': '截取 [文本] 从 [起始] 到 [结束]（不含结束）',
            '替换': '将 [文本] 中的 [旧] 替换为 [新]',
            '替换一次': '将 [文本] 中的第一个 [旧] 替换为 [新]',
            '查找': '在 [文本] 中查找 [子文本] 首次出现的位置',
            '反向查找': '在 [文本] 中反向查找 [子文本] 最后出现的位置',
            '出现次数': '[子文本] 在 [文本] 中出现的次数',
            '转大写': '[文本] 转为大写',
            '转小写': '[文本] 转为小写',
            '大小写互换': '[文本] 大小写互换',
            '首字母大写': '[文本] 首字母大写',
            '单词首字母大写': '[文本] 每个单词首字母大写',
            '去首尾空格': '去除 [文本] 首尾空格',
            '去左空格': '去除 [文本] 左侧空格',
            '去右空格': '去除 [文本] 右侧空格',
            '去所有空格': '去除 [文本] 所有空格',
            '去指定字符': '去除 [文本] 中的 [字符]',
            '分割': '按 [分隔符] 分割 [文本] 为列表（JSON）',
            '分割转列表': '按 [分隔符] 分割 [文本] 为 JSON 列表',
            '分割行': '按行分割 [文本] 为 JSON 列表',
            '包含': '[文本] 包含 [子文本]?',
            '开头是': '[文本] 以 [前缀] 开头?',
            '结尾是': '[文本] 以 [后缀] 结尾?',
            '是全数字': '[文本] 全为数字?',
            '是全字母': '[文本] 全为字母?',
            '是全大写': '[文本] 全为大写?',
            '是全小写': '[文本] 全为小写?',
            '是全空格': '[文本] 全为空格?',
            '反转': '反转 [文本]',
            '重复': '重复 [文本] [次数] 次',
            '截取前': '取 [文本] 前 [长度] 个字符',
            '截取后': '取 [文本] 后 [长度] 个字符',
            '左对齐': '左对齐 [文本] 到宽度 [长度] 填充 [填充]',
            '右对齐': '右对齐 [文本] 到宽度 [长度] 填充 [填充]',
            '居中对齐': '居中对齐 [文本] 到宽度 [长度] 填充 [填充]',
            '提取数字': '提取 [文本] 中的数字',
            '提取字母': '提取 [文本] 中的字母',
            '提取中文': '提取 [文本] 中的中文',
            '比较文本': '[文本1] 等于 [文本2]?',
            '比较文本不区分大小写': '[文本1] 等于 [文本2]（不区分大小写）?',
            '替换多行': '将 [文本] 中的 [旧] 替换为 [新]（支持多行）',
            '去除换行': '去除 [文本] 中的换行',
            'MD5加密': 'MD5 加密 [文本]',
            'Base64编码': 'Base64 编码 [文本]',
            'Base64解码': 'Base64 解码 [文本]',
            // 数组
            '创建数组': '创建数组 [元素1] [元素2] [元素3]（JSON）',
            '创建数组转列表': '创建列表 [元素1] [元素2] [元素3]（JSON）',
            '数组长度': '[数组] 的长度',
            '添加元素': '向 [数组] 添加 [元素]（JSON）',
            '插入元素': '在 [数组] 的 [位置] 插入 [元素]（JSON）',
            '删除元素': '删除 [数组] 中位置 [位置] 的元素（JSON）',
            '删除指定元素': '删除 [数组] 中的 [元素]（JSON）',
            '获取元素': '获取 [数组] 中位置 [位置] 的元素',
            '获取第一个元素': '获取 [数组] 的第一个元素',
            '获取最后一个元素': '获取 [数组] 的最后一个元素',
            '修改元素': '将 [数组] 中位置 [位置] 修改为 [新值]（JSON）',
            '查找元素': '在 [数组] 中查找 [元素] 的位置',
            '数组包含': '[数组] 包含 [元素]?',
            '反转数组': '反转 [数组]（JSON）',
            '排序数组': '升序排序 [数组]（JSON）',
            '降序排序数组': '降序排序 [数组]（JSON）',
            '拼接数组': '拼接 [数组1] 和 [数组2]（JSON）',
            '清空数组': '清空 [数组]（JSON）',
            '连接数组': '用 [分隔符] 连接 [数组] 为文本',
            '数组去重': '去除 [数组] 中的重复元素（JSON）',
            '数组切片': '切片 [数组] 从 [起始] 到 [结束]（JSON）',
            // 几何
            '勾股求弦': '勾 [勾] 股 [股] 求弦',
            '弦勾求股': '弦 [弦] 勾 [勾] 求股',
            '弦股求勾': '弦 [弦] 股 [股] 求勾',
            '直角三角形面积': '直角边 [直角边1] 和 [直角边2] 的三角形面积',
            '三角形周长': '三边 [边1] [边2] [边3] 的三角形周长',
            '三角形面积': '三边 [边1] [边2] [边3] 的三角形面积（海伦公式）',
            '圆周长': '半径 [半径] 的圆周长',
            '圆面积': '半径 [半径] 的圆面积',
            '矩形面积': '长 [长] 宽 [宽] 的矩形面积',
            '矩形周长': '长 [长] 宽 [宽] 的矩形周长',
            '正方形面积': '边长 [边长] 的正方形面积',
            '正方形周长': '边长 [边长] 的正方形周长',
            // 统计与随机
            '数组求和': '[数组] 中所有数字的和',
            '数组平均值': '[数组] 中所有数字的平均值',
            '数组最大值': '[数组] 中的最大值',
            '数组最小值': '[数组] 中的最小值',
            '数组中位数': '[数组] 的中位数',
            '随机整数': '随机整数从 [最小] 到 [最大]',
            '随机小数': '随机小数从 [最小] 到 [最大]',
            '随机选择': '从 [数组] 中随机选择一项',
            '随机打乱数组': '随机打乱 [数组]（JSON）',
            '随机布尔': '随机布尔值',
            '随机字母': '随机字母',
            '随机数字': '随机数字字符',
            '随机字符串': '随机字符串长度 [长度]',
            // 逻辑判断
            '是偶数': '[数] 是偶数?',
            '是奇数': '[数] 是奇数?',
            '是正数': '[数] 是正数?',
            '是负数': '[数] 是负数?',
            '是零': '[数] 是零?',
            '是直角三角形': '边 [边1] [边2] [边3] 能构成直角三角形?',
            '是等腰三角形': '边 [边1] [边2] [边3] 能构成等腰三角形?',
            '是等边三角形': '边 [边1] [边2] [边3] 能构成等边三角形?',
            '是数组': '[值] 是数组（JSON）?',
            '是文本': '[值] 是文本?',
            '是数字': '[值] 是数字?',
            '是布尔': '[值] 是布尔?'
        },
        'en': {
            'extensionName': 'Math Utils',
            '平方': 'square [数]',
            '平方根': 'sqrt [数]',
            '绝对值': 'abs [数]',
            '取余': '[数] mod [除数]',
            '幂运算': '[底数] ^ [指数]',
            '立方': 'cube [数]',
            '立方根': 'cbrt [数]',
            '正弦': 'sin [角度]°',
            '余弦': 'cos [角度]°',
            '正切': 'tan [角度]°',
            '对数': 'log [数] base [底数]',
            '取整': 'floor [数]',
            '向上取整': 'ceil [数]',
            '四舍五入': 'round [数] to [小数位数] decimals',
            '最大值': 'max [数1] and [数2]',
            '最小值': 'min [数1] and [数2]',
            '拼接': 'concat [文本1] and [文本2]',
            '长度': 'length of [文本]',
            '截取': 'substring [文本] from [起始] to [结束]',
            '替换': 'replace [旧] with [新] in [文本]',
            '替换一次': 'replace first [旧] with [新] in [文本]',
            '查找': 'find [子文本] in [文本]',
            '反向查找': 'find last [子文本] in [文本]',
            '出现次数': 'count [子文本] in [文本]',
            '转大写': 'uppercase [文本]',
            '转小写': 'lowercase [文本]',
            '大小写互换': 'swapcase [文本]',
            '首字母大写': 'capitalize [文本]',
            '单词首字母大写': 'titlecase [文本]',
            '去首尾空格': 'trim [文本]',
            '去左空格': 'ltrim [文本]',
            '去右空格': 'rtrim [文本]',
            '去所有空格': 'remove spaces [文本]',
            '去指定字符': 'remove [字符] from [文本]',
            '分割': 'split [文本] by [分隔符] (JSON)',
            '分割转列表': 'split [文本] by [分隔符] (JSON)',
            '分割行': 'split lines [文本] (JSON)',
            '包含': '[文本] contains [子文本]?',
            '开头是': '[文本] starts with [前缀]?',
            '结尾是': '[文本] ends with [后缀]?',
            '是全数字': '[文本] is all digits?',
            '是全字母': '[文本] is all letters?',
            '是全大写': '[文本] is all uppercase?',
            '是全小写': '[文本] is all lowercase?',
            '是全空格': '[文本] is all spaces?',
            '反转': 'reverse [文本]',
            '重复': 'repeat [文本] [次数] times',
            '截取前': 'first [长度] of [文本]',
            '截取后': 'last [长度] of [文本]',
            '左对齐': 'ljust [文本] to [长度] with [填充]',
            '右对齐': 'rjust [文本] to [长度] with [填充]',
            '居中对齐': 'center [文本] to [长度] with [填充]',
            '提取数字': 'extract digits from [文本]',
            '提取字母': 'extract letters from [文本]',
            '提取中文': 'extract Chinese from [文本]',
            '比较文本': '[文本1] equals [文本2]?',
            '比较文本不区分大小写': '[文本1] equals [文本2] (case-insensitive)?',
            '替换多行': 'replace [旧] with [新] in [文本] (multiline)',
            '去除换行': 'remove newlines from [文本]',
            'MD5加密': 'MD5 hash of [文本]',
            'Base64编码': 'Base64 encode [文本]',
            'Base64解码': 'Base64 decode [文本]',
            '创建数组': 'create array [元素1] [元素2] [元素3] (JSON)',
            '创建数组转列表': 'create list [元素1] [元素2] [元素3] (JSON)',
            '数组长度': 'length of [数组]',
            '添加元素': 'add [元素] to [数组] (JSON)',
            '插入元素': 'insert [元素] at [位置] in [数组] (JSON)',
            '删除元素': 'delete at [位置] from [数组] (JSON)',
            '删除指定元素': 'delete [元素] from [数组] (JSON)',
            '获取元素': 'get element at [位置] from [数组]',
            '获取第一个元素': 'get first element of [数组]',
            '获取最后一个元素': 'get last element of [数组]',
            '修改元素': 'set [位置] of [数组] to [新值] (JSON)',
            '查找元素': 'find [元素] in [数组]',
            '数组包含': '[数组] contains [元素]?',
            '反转数组': 'reverse [数组] (JSON)',
            '排序数组': 'sort ascending [数组] (JSON)',
            '降序排序数组': 'sort descending [数组] (JSON)',
            '拼接数组': 'concat [数组1] and [数组2] (JSON)',
            '清空数组': 'clear [数组] (JSON)',
            '连接数组': 'join [数组] with [分隔符]',
            '数组去重': 'unique [数组] (JSON)',
            '数组切片': 'slice [数组] from [起始] to [结束] (JSON)',
            '勾股求弦': 'hypotenuse of [勾] and [股]',
            '弦勾求股': 'leg from hypotenuse [弦] and leg [勾]',
            '弦股求勾': 'leg from hypotenuse [弦] and leg [股]',
            '直角三角形面积': 'area of right triangle legs [直角边1] and [直角边2]',
            '三角形周长': 'perimeter of triangle sides [边1] [边2] [边3]',
            '三角形面积': 'area of triangle sides [边1] [边2] [边3] (Heron)',
            '圆周长': 'circumference of circle radius [半径]',
            '圆面积': 'area of circle radius [半径]',
            '矩形面积': 'area of rectangle [长] x [宽]',
            '矩形周长': 'perimeter of rectangle [长] x [宽]',
            '正方形面积': 'area of square side [边长]',
            '正方形周长': 'perimeter of square side [边长]',
            '数组求和': 'sum of [数组]',
            '数组平均值': 'average of [数组]',
            '数组最大值': 'max of [数组]',
            '数组最小值': 'min of [数组]',
            '数组中位数': 'median of [数组]',
            '随机整数': 'random integer from [最小] to [最大]',
            '随机小数': 'random float from [最小] to [最大]',
            '随机选择': 'random choice from [数组]',
            '随机打乱数组': 'shuffle [数组] (JSON)',
            '随机布尔': 'random boolean',
            '随机字母': 'random letter',
            '随机数字': 'random digit',
            '随机字符串': 'random string length [长度]',
            '是偶数': '[数] is even?',
            '是奇数': '[数] is odd?',
            '是正数': '[数] is positive?',
            '是负数': '[数] is negative?',
            '是零': '[数] is zero?',
            '是直角三角形': 'sides [边1] [边2] [边3] form a right triangle?',
            '是等腰三角形': 'sides [边1] [边2] [边3] form an isosceles triangle?',
            '是等边三角形': 'sides [边1] [边2] [边3] form an equilateral triangle?',
            '是数组': '[值] is an array (JSON)?',
            '是文本': '[值] is a string?',
            '是数字': '[值] is a number?',
            '是布尔': '[值] is a boolean?'
        }
    });

    // ---------- 辅助函数 ----------
    function toNumber(v) {
        const n = Cast.toNumber(v);
        return isNaN(n) ? NaN : n;
    }
    function toString(v) { return Cast.toString(v); }
    function toBoolean(v) { return Cast.toBoolean(v); }
    function parseArray(json) {
        try { const arr = JSON.parse(json); return Array.isArray(arr) ? arr : null; } 
        catch(e) { return null; }
    }

    // ---------- 扩展主类 ----------
    class MathUtilsExtension {
        constructor() {
            // 绑定所有方法，使得它们可以通过 opcode 名称直接调用
            this['平方'] = this._平方.bind(this);
            this['平方根'] = this._平方根.bind(this);
            this['绝对值'] = this._绝对值.bind(this);
            this['取余'] = this._取余.bind(this);
            this['幂运算'] = this._幂运算.bind(this);
            this['立方'] = this._立方.bind(this);
            this['立方根'] = this._立方根.bind(this);
            this['正弦'] = this._正弦.bind(this);
            this['余弦'] = this._余弦.bind(this);
            this['正切'] = this._正切.bind(this);
            this['对数'] = this._对数.bind(this);
            this['取整'] = this._取整.bind(this);
            this['向上取整'] = this._向上取整.bind(this);
            this['四舍五入'] = this._四舍五入.bind(this);
            this['最大值'] = this._最大值.bind(this);
            this['最小值'] = this._最小值.bind(this);
            this['拼接'] = this._拼接.bind(this);
            this['长度'] = this._长度.bind(this);
            this['截取'] = this._截取.bind(this);
            this['替换'] = this._替换.bind(this);
            this['替换一次'] = this._替换一次.bind(this);
            this['查找'] = this._查找.bind(this);
            this['反向查找'] = this._反向查找.bind(this);
            this['出现次数'] = this._出现次数.bind(this);
            this['转大写'] = this._转大写.bind(this);
            this['转小写'] = this._转小写.bind(this);
            this['大小写互换'] = this._大小写互换.bind(this);
            this['首字母大写'] = this._首字母大写.bind(this);
            this['单词首字母大写'] = this._单词首字母大写.bind(this);
            this['去首尾空格'] = this._去首尾空格.bind(this);
            this['去左空格'] = this._去左空格.bind(this);
            this['去右空格'] = this._去右空格.bind(this);
            this['去所有空格'] = this._去所有空格.bind(this);
            this['去指定字符'] = this._去指定字符.bind(this);
            this['分割'] = this._分割.bind(this);
            this['分割转列表'] = this._分割转列表.bind(this);
            this['分割行'] = this._分割行.bind(this);
            this['包含'] = this._包含.bind(this);
            this['开头是'] = this._开头是.bind(this);
            this['结尾是'] = this._结尾是.bind(this);
            this['是全数字'] = this._是全数字.bind(this);
            this['是全字母'] = this._是全字母.bind(this);
            this['是全大写'] = this._是全大写.bind(this);
            this['是全小写'] = this._是全小写.bind(this);
            this['是全空格'] = this._是全空格.bind(this);
            this['反转'] = this._反转.bind(this);
            this['重复'] = this._重复.bind(this);
            this['截取前'] = this._截取前.bind(this);
            this['截取后'] = this._截取后.bind(this);
            this['左对齐'] = this._左对齐.bind(this);
            this['右对齐'] = this._右对齐.bind(this);
            this['居中对齐'] = this._居中对齐.bind(this);
            this['提取数字'] = this._提取数字.bind(this);
            this['提取字母'] = this._提取字母.bind(this);
            this['提取中文'] = this._提取中文.bind(this);
            this['比较文本'] = this._比较文本.bind(this);
            this['比较文本不区分大小写'] = this._比较文本不区分大小写.bind(this);
            this['替换多行'] = this._替换多行.bind(this);
            this['去除换行'] = this._去除换行.bind(this);
            this['MD5加密'] = this._MD5加密.bind(this);
            this['Base64编码'] = this._Base64编码.bind(this);
            this['Base64解码'] = this._Base64解码.bind(this);
            this['创建数组'] = this._创建数组.bind(this);
            this['创建数组转列表'] = this._创建数组转列表.bind(this);
            this['数组长度'] = this._数组长度.bind(this);
            this['添加元素'] = this._添加元素.bind(this);
            this['插入元素'] = this._插入元素.bind(this);
            this['删除元素'] = this._删除元素.bind(this);
            this['删除指定元素'] = this._删除指定元素.bind(this);
            this['获取元素'] = this._获取元素.bind(this);
            this['获取第一个元素'] = this._获取第一个元素.bind(this);
            this['获取最后一个元素'] = this._获取最后一个元素.bind(this);
            this['修改元素'] = this._修改元素.bind(this);
            this['查找元素'] = this._查找元素.bind(this);
            this['数组包含'] = this._数组包含.bind(this);
            this['反转数组'] = this._反转数组.bind(this);
            this['排序数组'] = this._排序数组.bind(this);
            this['降序排序数组'] = this._降序排序数组.bind(this);
            this['拼接数组'] = this._拼接数组.bind(this);
            this['清空数组'] = this._清空数组.bind(this);
            this['连接数组'] = this._连接数组.bind(this);
            this['数组去重'] = this._数组去重.bind(this);
            this['数组切片'] = this._数组切片.bind(this);
            this['勾股求弦'] = this._勾股求弦.bind(this);
            this['弦勾求股'] = this._弦勾求股.bind(this);
            this['弦股求勾'] = this._弦股求勾.bind(this);
            this['直角三角形面积'] = this._直角三角形面积.bind(this);
            this['三角形周长'] = this._三角形周长.bind(this);
            this['三角形面积'] = this._三角形面积.bind(this);
            this['圆周长'] = this._圆周长.bind(this);
            this['圆面积'] = this._圆面积.bind(this);
            this['矩形面积'] = this._矩形面积.bind(this);
            this['矩形周长'] = this._矩形周长.bind(this);
            this['正方形面积'] = this._正方形面积.bind(this);
            this['正方形周长'] = this._正方形周长.bind(this);
            this['数组求和'] = this._数组求和.bind(this);
            this['数组平均值'] = this._数组平均值.bind(this);
            this['数组最大值'] = this._数组最大值.bind(this);
            this['数组最小值'] = this._数组最小值.bind(this);
            this['数组中位数'] = this._数组中位数.bind(this);
            this['随机整数'] = this._随机整数.bind(this);
            this['随机小数'] = this._随机小数.bind(this);
            this['随机选择'] = this._随机选择.bind(this);
            this['随机打乱数组'] = this._随机打乱数组.bind(this);
            this['随机布尔'] = this._随机布尔.bind(this);
            this['随机字母'] = this._随机字母.bind(this);
            this['随机数字'] = this._随机数字.bind(this);
            this['随机字符串'] = this._随机字符串.bind(this);
            this['是偶数'] = this._是偶数.bind(this);
            this['是奇数'] = this._是奇数.bind(this);
            this['是正数'] = this._是正数.bind(this);
            this['是负数'] = this._是负数.bind(this);
            this['是零'] = this._是零.bind(this);
            this['是直角三角形'] = this._是直角三角形.bind(this);
            this['是等腰三角形'] = this._是等腰三角形.bind(this);
            this['是等边三角形'] = this._是等边三角形.bind(this);
            this['是数组'] = this._是数组.bind(this);
            this['是文本'] = this._是文本.bind(this);
            this['是数字'] = this._是数字.bind(this);
            this['是布尔'] = this._是布尔.bind(this);
        }

        // -------- 实现方法（全部） --------
        // 基础数学
        _平方(args) { const x = toNumber(args.数); return isNaN(x) ? NaN : x*x; }
        _平方根(args) { const x = toNumber(args.数); return (isNaN(x) || x < 0) ? NaN : Math.sqrt(x); }
        _绝对值(args) { const x = toNumber(args.数); return isNaN(x) ? NaN : Math.abs(x); }
        _取余(args) { const a = toNumber(args.数), b = toNumber(args.除数); return (isNaN(a) || isNaN(b) || b === 0) ? NaN : ((a % b) + b) % b; }
        _幂运算(args) { const a = toNumber(args.底数), b = toNumber(args.指数); return (isNaN(a) || isNaN(b)) ? NaN : Math.pow(a, b); }
        _立方(args) { const x = toNumber(args.数); return isNaN(x) ? NaN : x*x*x; }
        _立方根(args) { const x = toNumber(args.数); return isNaN(x) ? NaN : Math.cbrt(x); }
        _正弦(args) { const deg = toNumber(args.角度); return isNaN(deg) ? NaN : Math.sin(deg * Math.PI / 180); }
        _余弦(args) { const deg = toNumber(args.角度); return isNaN(deg) ? NaN : Math.cos(deg * Math.PI / 180); }
        _正切(args) { const deg = toNumber(args.角度); return isNaN(deg) ? NaN : Math.tan(deg * Math.PI / 180); }
        _对数(args) { const x = toNumber(args.数), base = toNumber(args.底数); if (isNaN(x) || isNaN(base) || x <= 0 || base <= 0 || base === 1) return NaN; return Math.log(x) / Math.log(base); }
        _取整(args) { const x = toNumber(args.数); return isNaN(x) ? NaN : Math.floor(x); }
        _向上取整(args) { const x = toNumber(args.数); return isNaN(x) ? NaN : Math.ceil(x); }
        _四舍五入(args) { const x = toNumber(args.数), d = Math.floor(toNumber(args.小数位数)); if (isNaN(x) || isNaN(d) || d < 0) return NaN; const factor = Math.pow(10, d); return Math.round(x * factor) / factor; }
        _最大值(args) { const a = toNumber(args.数1), b = toNumber(args.数2); return (isNaN(a) || isNaN(b)) ? NaN : Math.max(a, b); }
        _最小值(args) { const a = toNumber(args.数1), b = toNumber(args.数2); return (isNaN(a) || isNaN(b)) ? NaN : Math.min(a, b); }

        // 字符串
        _拼接(args) { return toString(args.文本1) + toString(args.文本2); }
        _长度(args) { return toString(args.文本).length; }
        _截取(args) { const s = toString(args.文本), start = Math.max(0, Math.min(Math.floor(toNumber(args.起始)), s.length)), end = Math.max(0, Math.min(Math.floor(toNumber(args.结束)), s.length)); return start < end ? s.substring(start, end) : NaN; }
        _替换(args) { return toString(args.文本).replace(new RegExp(toString(args.旧), 'g'), toString(args.新)); }
        _替换一次(args) { return toString(args.文本).replace(toString(args.旧), toString(args.新)); }
        _查找(args) { return toString(args.文本).indexOf(toString(args.子文本)); }
        _反向查找(args) { return toString(args.文本).lastIndexOf(toString(args.子文本)); }
        _出现次数(args) { const s = toString(args.文本), sub = toString(args.子文本); if (!sub) return 0; return (s.match(new RegExp(sub.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length; }
        _转大写(args) { return toString(args.文本).toUpperCase(); }
        _转小写(args) { return toString(args.文本).toLowerCase(); }
        _大小写互换(args) { const s = toString(args.文本); return s.replace(/[a-zA-Z]/g, c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()); }
        _首字母大写(args) { const s = toString(args.文本); return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase(); }
        _单词首字母大写(args) { return toString(args.文本).replace(/\w\S*/g, w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()); }
        _去首尾空格(args) { return toString(args.文本).trim(); }
        _去左空格(args) { return toString(args.文本).trimStart ? toString(args.文本).trimStart() : toString(args.文本).replace(/^\s+/, ''); }
        _去右空格(args) { return toString(args.文本).trimEnd ? toString(args.文本).trimEnd() : toString(args.文本).replace(/\s+$/, ''); }
        _去所有空格(args) { return toString(args.文本).replace(/\s/g, ''); }
        _去指定字符(args) { return toString(args.文本).replace(new RegExp(toString(args.字符), 'g'), ''); }
        _分割(args) { return JSON.stringify(toString(args.文本).split(toString(args.分隔符))); }
        _分割转列表(args) { return JSON.stringify(toString(args.文本).split(toString(args.分隔符))); }
        _分割行(args) { return JSON.stringify(toString(args.文本).split(/\r?\n/)); }
        _包含(args) { return toString(args.文本).includes(toString(args.子文本)); }
        _开头是(args) { return toString(args.文本).startsWith(toString(args.前缀)); }
        _结尾是(args) { return toString(args.文本).endsWith(toString(args.后缀)); }
        _是全数字(args) { return /^\d+$/.test(toString(args.文本)); }
        _是全字母(args) { return /^[a-zA-Z]+$/.test(toString(args.文本)); }
        _是全大写(args) { return /^[A-Z]+$/.test(toString(args.文本)); }
        _是全小写(args) { return /^[a-z]+$/.test(toString(args.文本)); }
        _是全空格(args) { return /^\s+$/.test(toString(args.文本)); }
        _反转(args) { return toString(args.文本).split('').reverse().join(''); }
        _重复(args) { const n = Math.floor(toNumber(args.次数)); return n > 0 ? toString(args.文本).repeat(n) : ''; }
        _截取前(args) { const s = toString(args.文本), n = Math.floor(toNumber(args.长度)); return s.substring(0, Math.max(0, n)); }
        _截取后(args) { const s = toString(args.文本), n = Math.floor(toNumber(args.长度)); return n > 0 ? s.substring(Math.max(0, s.length - n)) : ''; }
        _左对齐(args) { const s = toString(args.文本), len = Math.floor(toNumber(args.长度)), fill = toString(args.填充) || ' '; return s.padEnd(Math.max(0, len), fill[0] || ' '); }
        _右对齐(args) { const s = toString(args.文本), len = Math.floor(toNumber(args.长度)), fill = toString(args.填充) || ' '; return s.padStart(Math.max(0, len), fill[0] || ' '); }
        _居中对齐(args) { const s = toString(args.文本), len = Math.floor(toNumber(args.长度)), fill = toString(args.填充) || ' '; return s.padStart((len - s.length) / 2 + s.length, fill[0] || ' ').padEnd(len, fill[0] || ' '); }
        _提取数字(args) { return (toString(args.文本).match(/\d+/g) || []).join(''); }
        _提取字母(args) { return (toString(args.文本).match(/[a-zA-Z]+/g) || []).join(''); }
        _提取中文(args) { return (toString(args.文本).match(/[\u4e00-\u9fa5]+/g) || []).join(''); }
        _比较文本(args) { return toString(args.文本1) === toString(args.文本2); }
        _比较文本不区分大小写(args) { return toString(args.文本1).toLowerCase() === toString(args.文本2).toLowerCase(); }
        _替换多行(args) { return toString(args.文本).replace(new RegExp(toString(args.旧), 'g'), toString(args.新)); }
        _去除换行(args) { return toString(args.文本).replace(/[\r\n]+/g, ''); }
        _MD5加密(args) {
            // 浏览器环境使用SubtleCrypto或简单实现（此版本使用内置crypto，但Scratch沙盒可能无crypto，若报错请删除此积木）
            try {
                const s = toString(args.文本);
                const hash = require('crypto').createHash('md5').update(s).digest('hex');
                return hash;
            } catch(e) {
                // 降级方案：使用第三方MD5简单实现（这里省略，若需要可加入一个纯JS MD5）
                return '';
            }
        }
        _Base64编码(args) { try { return btoa(unescape(encodeURIComponent(toString(args.文本)))); } catch(e) { return ''; } }
        _Base64解码(args) { try { return decodeURIComponent(escape(atob(toString(args.文本)))); } catch(e) { return ''; } }

        // 数组（JSON字符串）
        _创建数组(args) { return JSON.stringify([args.元素1, args.元素2, args.元素3]); }
        _创建数组转列表(args) { return JSON.stringify([args.元素1, args.元素2, args.元素3]); }
        _数组长度(args) { const arr = parseArray(toString(args.数组)); return arr ? arr.length : NaN; }
        _添加元素(args) { const arr = parseArray(toString(args.数组)); return arr ? JSON.stringify([...arr, args.元素]) : '[]'; }
        _插入元素(args) { const arr = parseArray(toString(args.数组)); if (!arr) return '[]'; const pos = Math.max(0, Math.min(Math.floor(toNumber(args.位置)), arr.length)); arr.splice(pos, 0, args.元素); return JSON.stringify(arr); }
        _删除元素(args) { const arr = parseArray(toString(args.数组)); if (!arr) return '[]'; const pos = Math.floor(toNumber(args.位置)); if (pos >= 0 && pos < arr.length) arr.splice(pos, 1); return JSON.stringify(arr); }
        _删除指定元素(args) { const arr = parseArray(toString(args.数组)); if (!arr) return '[]'; const idx = arr.indexOf(args.元素); if (idx !== -1) arr.splice(idx, 1); return JSON.stringify(arr); }
        _获取元素(args) { const arr = parseArray(toString(args.数组)); if (!arr) return NaN; const pos = Math.floor(toNumber(args.位置)); return (pos >= 0 && pos < arr.length) ? arr[pos] : NaN; }
        _获取第一个元素(args) { const arr = parseArray(toString(args.数组)); return arr && arr.length > 0 ? arr[0] : NaN; }
        _获取最后一个元素(args) { const arr = parseArray(toString(args.数组)); return arr && arr.length > 0 ? arr[arr.length-1] : NaN; }
        _修改元素(args) { const arr = parseArray(toString(args.数组)); if (!arr) return '[]'; const pos = Math.floor(toNumber(args.位置)); if (pos >= 0 && pos < arr.length) arr[pos] = args.新值; return JSON.stringify(arr); }
        _查找元素(args) { const arr = parseArray(toString(args.数组)); if (!arr) return -1; return arr.indexOf(args.元素); }
        _数组包含(args) { const arr = parseArray(toString(args.数组)); return arr ? arr.includes(args.元素) : false; }
        _反转数组(args) { const arr = parseArray(toString(args.数组)); return arr ? JSON.stringify([...arr].reverse()) : '[]'; }
        _排序数组(args) { const arr = parseArray(toString(args.数组)); return arr ? JSON.stringify([...arr].sort((a,b) => a-b)) : '[]'; }
        _降序排序数组(args) { const arr = parseArray(toString(args.数组)); return arr ? JSON.stringify([...arr].sort((a,b) => b-a)) : '[]'; }
        _拼接数组(args) { const a1 = parseArray(toString(args.数组1)), a2 = parseArray(toString(args.数组2)); return (a1 && a2) ? JSON.stringify([...a1, ...a2]) : '[]'; }
        _清空数组(args) { return '[]'; }
        _连接数组(args) { const arr = parseArray(toString(args.数组)); return arr ? arr.join(toString(args.分隔符)) : ''; }
        _数组去重(args) { const arr = parseArray(toString(args.数组)); return arr ? JSON.stringify([...new Set(arr)]) : '[]'; }
        _数组切片(args) { const arr = parseArray(toString(args.数组)); if (!arr) return '[]'; const start = Math.max(0, Math.min(Math.floor(toNumber(args.起始)), arr.length)), end = Math.max(0, Math.min(Math.floor(toNumber(args.结束)), arr.length)); return JSON.stringify(arr.slice(start, end)); }

        // 几何
        _勾股求弦(args) { const a = toNumber(args.勾), b = toNumber(args.股); return (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) ? NaN : Math.hypot(a, b); }
        _弦勾求股(args) { const c = toNumber(args.弦), a = toNumber(args.勾); return (isNaN(c) || isNaN(a) || c <= 0 || a <= 0 || c <= a) ? NaN : Math.sqrt(c*c - a*a); }
        _弦股求勾(args) { const c = toNumber(args.弦), b = toNumber(args.股); return (isNaN(c) || isNaN(b) || c <= 0 || b <= 0 || c <= b) ? NaN : Math.sqrt(c*c - b*b); }
        _直角三角形面积(args) { const a = toNumber(args.直角边1), b = toNumber(args.直角边2); return (isNaN(a) || isNaN(b) || a <= 0 || b <= 0) ? NaN : a*b/2; }
        _三角形周长(args) { const a = toNumber(args.边1), b = toNumber(args.边2), c = toNumber(args.边3); return (isNaN(a)||isNaN(b)||isNaN(c)||a<=0||b<=0||c<=0) ? NaN : a+b+c; }
        _三角形面积(args) { const a = toNumber(args.边1), b = toNumber(args.边2), c = toNumber(args.边3); if (isNaN(a)||isNaN(b)||isNaN(c)||a<=0||b<=0||c<=0||a+b<=c||a+c<=b||b+c<=a) return NaN; const s=(a+b+c)/2; return Math.sqrt(s*(s-a)*(s-b)*(s-c)); }
        _圆周长(args) { const r = toNumber(args.半径); return (isNaN(r) || r <= 0) ? NaN : 2*Math.PI*r; }
        _圆面积(args) { const r = toNumber(args.半径); return (isNaN(r) || r <= 0) ? NaN : Math.PI*r*r; }
        _矩形面积(args) { const a = toNumber(args.长), b = toNumber(args.宽); return (isNaN(a)||isNaN(b)||a<=0||b<=0) ? NaN : a*b; }
        _矩形周长(args) { const a = toNumber(args.长), b = toNumber(args.宽); return (isNaN(a)||isNaN(b)||a<=0||b<=0) ? NaN : 2*(a+b); }
        _正方形面积(args) { const a = toNumber(args.边长); return (isNaN(a)||a<=0) ? NaN : a*a; }
        _正方形周长(args) { const a = toNumber(args.边长); return (isNaN(a)||a<=0) ? NaN : 4*a; }

        // 统计与随机
        _数组求和(args) { const arr = parseArray(toString(args.数组)); if (!arr) return NaN; const nums = arr.map(v => toNumber(v)).filter(v => !isNaN(v)); return nums.reduce((a,b) => a+b, 0); }
        _数组平均值(args) { const arr = parseArray(toString(args.数组)); if (!arr) return NaN; const nums = arr.map(v => toNumber(v)).filter(v => !isNaN(v)); return nums.length ? nums.reduce((a,b) => a+b, 0)/nums.length : NaN; }
        _数组最大值(args) { const arr = parseArray(toString(args.数组)); if (!arr) return NaN; const nums = arr.map(v => toNumber(v)).filter(v => !isNaN(v)); return nums.length ? Math.max(...nums) : NaN; }
        _数组最小值(args) { const arr = parseArray(toString(args.数组)); if (!arr) return NaN; const nums = arr.map(v => toNumber(v)).filter(v => !isNaN(v)); return nums.length ? Math.min(...nums) : NaN; }
        _数组中位数(args) { const arr = parseArray(toString(args.数组)); if (!arr) return NaN; const nums = arr.map(v => toNumber(v)).filter(v => !isNaN(v)); if (!nums.length) return NaN; nums.sort((a,b) => a-b); const mid = Math.floor(nums.length/2); return nums.length % 2 ? nums[mid] : (nums[mid-1]+nums[mid])/2; }
        _随机整数(args) { const min = Math.floor(toNumber(args.最小)), max = Math.floor(toNumber(args.最大)); return (isNaN(min)||isNaN(max)||min>max) ? NaN : Math.floor(Math.random()*(max-min+1))+min; }
        _随机小数(args) { const min = toNumber(args.最小), max = toNumber(args.最大); return (isNaN(min)||isNaN(max)||min>max) ? NaN : Math.random()*(max-min)+min; }
        _随机选择(args) { const arr = parseArray(toString(args.数组)); return arr && arr.length ? arr[Math.floor(Math.random()*arr.length)] : NaN; }
        _随机打乱数组(args) { const arr = parseArray(toString(args.数组)); if (!arr) return '[]'; const copy = [...arr]; for (let i=copy.length-1; i>0; i--) { const j=Math.floor(Math.random()*(i+1)); [copy[i], copy[j]] = [copy[j], copy[i]]; } return JSON.stringify(copy); }
        _随机布尔(args) { return Math.random() < 0.5; }
        _随机字母(args) { return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'[Math.floor(Math.random()*52)]; }
        _随机数字(args) { return '0123456789'[Math.floor(Math.random()*10)]; }
        _随机字符串(args) { const len = Math.floor(toNumber(args.长度)); if (!isFinite(len) || len <= 0) return ''; const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; let result = ''; for (let i=0; i<len; i++) result += chars[Math.floor(Math.random()*chars.length)]; return result; }

        // 逻辑判断
        _是偶数(args) { const x = toNumber(args.数); return !isNaN(x) && Math.floor(x) === x && x % 2 === 0; }
        _是奇数(args) { const x = toNumber(args.数); return !isNaN(x) && Math.floor(x) === x && x % 2 !== 0; }
        _是正数(args) { const x = toNumber(args.数); return !isNaN(x) && x > 0; }
        _是负数(args) { const x = toNumber(args.数); return !isNaN(x) && x < 0; }
        _是零(args) { const x = toNumber(args.数); return !isNaN(x) && Math.abs(x) < 1e-9; }
        _是直角三角形(args) { const a = toNumber(args.边1), b = toNumber(args.边2), c = toNumber(args.边3); if (isNaN(a)||isNaN(b)||isNaN(c)||a<=0||b<=0||c<=0) return false; const sides = [a,b,c].sort((x,y)=>x-y); return Math.abs(sides[0]*sides[0] + sides[1]*sides[1] - sides[2]*sides[2]) < 1e-9; }
        _是等腰三角形(args) { const a = toNumber(args.边1), b = toNumber(args.边2), c = toNumber(args.边3); if (isNaN(a)||isNaN(b)||isNaN(c)||a<=0||b<=0||c<=0||a+b<=c||a+c<=b||b+c<=a) return false; return Math.abs(a-b)<1e-9 || Math.abs(a-c)<1e-9 || Math.abs(b-c)<1e-9; }
        _是等边三角形(args) { const a = toNumber(args.边1), b = toNumber(args.边2), c = toNumber(args.边3); if (isNaN(a)||isNaN(b)||isNaN(c)||a<=0||b<=0||c<=0) return false; return Math.abs(a-b)<1e-9 && Math.abs(a-c)<1e-9; }
        _是数组(args) { try { const arr = JSON.parse(toString(args.值)); return Array.isArray(arr); } catch(e) { return false; } }
        _是文本(args) { return typeof args.值 === 'string'; }
        _是数字(args) { const x = toNumber(args.值); return !isNaN(x); }
        _是布尔(args) { return typeof args.值 === 'boolean'; }

        // -------- getInfo 返回积木元数据 --------
        getInfo() {
            // 为了可维护性，我们动态生成 blocks 数组，每个积木对象都包含 opcode, blockType, text, arguments
            // 这里我们按照类别列出所有积木的配置（text 使用翻译ID）
            const blockDefs = [
                // ---- 基础数学 ----
                { opcode: '平方', text: '平方', args: {数: {type: ArgumentType.NUMBER, defaultValue: 114}} },
                { opcode: '平方根', text: '平方根', args: {数: {type: ArgumentType.NUMBER, defaultValue: 114514}} },
                { opcode: '绝对值', text: '绝对值', args: {数: {type: ArgumentType.NUMBER, defaultValue: -114514}} },
                { opcode: '取余', text: '取余', args: {数: {type: ArgumentType.NUMBER, defaultValue: 114514}, 除数: {type: ArgumentType.NUMBER, defaultValue: 78}} },
                { opcode: '幂运算', text: '幂运算', args: {底数: {type: ArgumentType.NUMBER, defaultValue: 2}, 指数: {type: ArgumentType.NUMBER, defaultValue: 10}} },
                { opcode: '立方', text: '立方', args: {数: {type: ArgumentType.NUMBER, defaultValue: 114}} },
                { opcode: '立方根', text: '立方根', args: {数: {type: ArgumentType.NUMBER, defaultValue: 114514}} },
                { opcode: '正弦', text: '正弦', args: {角度: {type: ArgumentType.NUMBER, defaultValue: 30}} },
                { opcode: '余弦', text: '余弦', args: {角度: {type: ArgumentType.NUMBER, defaultValue: 30}} },
                { opcode: '正切', text: '正切', args: {角度: {type: ArgumentType.NUMBER, defaultValue: 30}} },
                { opcode: '对数', text: '对数', args: {数: {type: ArgumentType.NUMBER, defaultValue: 100}, 底数: {type: ArgumentType.NUMBER, defaultValue: 10}} },
                { opcode: '取整', text: '取整', args: {数: {type: ArgumentType.NUMBER, defaultValue: 114.514}} },
                { opcode: '向上取整', text: '向上取整', args: {数: {type: ArgumentType.NUMBER, defaultValue: 114.1}} },
                { opcode: '四舍五入', text: '四舍五入', args: {数: {type: ArgumentType.NUMBER, defaultValue: 114.514}, 小数位数: {type: ArgumentType.NUMBER, defaultValue: 2}} },
                { opcode: '最大值', text: '最大值', args: {数1: {type: ArgumentType.NUMBER, defaultValue: 114}, 数2: {type: ArgumentType.NUMBER, defaultValue: 514}} },
                { opcode: '最小值', text: '最小值', args: {数1: {type: ArgumentType.NUMBER, defaultValue: 114}, 数2: {type: ArgumentType.NUMBER, defaultValue: 514}} },
                // ---- 字符串 ----
                { opcode: '拼接', text: '拼接', args: {文本1: {type: ArgumentType.STRING, defaultValue: '114'}, 文本2: {type: ArgumentType.STRING, defaultValue: '514'}} },
                { opcode: '长度', text: '长度', args: {文本: {type: ArgumentType.STRING, defaultValue: '1145147891'}} },
                { opcode: '截取', text: '截取', args: {文本: {type: ArgumentType.STRING, defaultValue: '114514'}, 起始: {type: ArgumentType.NUMBER, defaultValue: 0}, 结束: {type: ArgumentType.NUMBER, defaultValue: 3}} },
                { opcode: '替换', text: '替换', args: {文本: {type: ArgumentType.STRING, defaultValue: '114514'}, 旧: {type: ArgumentType.STRING, defaultValue: '114'}, 新: {type: ArgumentType.STRING, defaultValue: '78'}} },
                { opcode: '替换一次', text: '替换一次', args: {文本: {type: ArgumentType.STRING, defaultValue: '114514114'}, 旧: {type: ArgumentType.STRING, defaultValue: '114'}, 新: {type: ArgumentType.STRING, defaultValue: '78'}} },
                { opcode: '查找', text: '查找', args: {文本: {type: ArgumentType.STRING, defaultValue: '1145147891'}, 子文本: {type: ArgumentType.STRING, defaultValue: '514'}} },
                { opcode: '反向查找', text: '反向查找', args: {文本: {type: ArgumentType.STRING, defaultValue: '1145147891514'}, 子文本: {type: ArgumentType.STRING, defaultValue: '514'}} },
                { opcode: '出现次数', text: '出现次数', args: {文本: {type: ArgumentType.STRING, defaultValue: '114514114'}, 子文本: {type: ArgumentType.STRING, defaultValue: '114'}} },
                { opcode: '转大写', text: '转大写', args: {文本: {type: ArgumentType.STRING, defaultValue: 'hello114514'}} },
                { opcode: '转小写', text: '转小写', args: {文本: {type: ArgumentType.STRING, defaultValue: 'HELLO7891'}} },
                { opcode: '大小写互换', text: '大小写互换', args: {文本: {type: ArgumentType.STRING, defaultValue: 'Hello114514'}} },
                { opcode: '首字母大写', text: '首字母大写', args: {文本: {type: ArgumentType.STRING, defaultValue: 'hello world'}} },
                { opcode: '单词首字母大写', text: '单词首字母大写', args: {文本: {type: ArgumentType.STRING, defaultValue: 'hello world 114514'}} },
                { opcode: '去首尾空格', text: '去首尾空格', args: {文本: {type: ArgumentType.STRING, defaultValue: '  114514  '}} },
                { opcode: '去左空格', text: '去左空格', args: {文本: {type: ArgumentType.STRING, defaultValue: '  114514  '}} },
                { opcode: '去右空格', text: '去右空格', args: {文本: {type: ArgumentType.STRING, defaultValue: '  114514  '}} },
                { opcode: '去所有空格', text: '去所有空格', args: {文本: {type: ArgumentType.STRING, defaultValue: ' 1 1 4 5 1 4 '}} },
                { opcode: '去指定字符', text: '去指定字符', args: {文本: {type: ArgumentType.STRING, defaultValue: '114-514-78'}, 字符: {type: ArgumentType.STRING, defaultValue: '-'}} },
                { opcode: '分割', text: '分割', args: {文本: {type: ArgumentType.STRING, defaultValue: '114,514,78,91'}, 分隔符: {type: ArgumentType.STRING, defaultValue: ','}} },
                { opcode: '分割转列表', text: '分割转列表', args: {文本: {type: ArgumentType.STRING, defaultValue: '114,514,78,91'}, 分隔符: {type: ArgumentType.STRING, defaultValue: ','}} },
                { opcode: '分割行', text: '分割行', args: {文本: {type: ArgumentType.STRING, defaultValue: '114\n514\n78'}} },
                { opcode: '包含', text: '包含', blockType: BlockType.BOOLEAN, args: {文本: {type: ArgumentType.STRING, defaultValue: '1145147891'}, 子文本: {type: ArgumentType.STRING, defaultValue: '514'}} },
                { opcode: '开头是', text: '开头是', blockType: BlockType.BOOLEAN, args: {文本: {type: ArgumentType.STRING, defaultValue: '114514'}, 前缀: {type: ArgumentType.STRING, defaultValue: '114'}} },
                { opcode: '结尾是', text: '结尾是', blockType: BlockType.BOOLEAN, args: {文本: {type: ArgumentType.STRING, defaultValue: '114514'}, 后缀: {type: ArgumentType.STRING, defaultValue: '514'}} },
                { opcode: '是全数字', text: '是全数字', blockType: BlockType.BOOLEAN, args: {文本: {type: ArgumentType.STRING, defaultValue: '114514'}} },
                { opcode: '是全字母', text: '是全字母', blockType: BlockType.BOOLEAN, args: {文本: {type: ArgumentType.STRING, defaultValue: 'hello'}} },
                { opcode: '是全大写', text: '是全大写', blockType: BlockType.BOOLEAN, args: {文本: {type: ArgumentType.STRING, defaultValue: 'HELLO'}} },
                { opcode: '是全小写', text: '是全小写', blockType: BlockType.BOOLEAN, args: {文本: {type: ArgumentType.STRING, defaultValue: 'hello'}} },
                { opcode: '是全空格', text: '是全空格', blockType: BlockType.BOOLEAN, args: {文本: {type: ArgumentType.STRING, defaultValue: '   '}} },
                { opcode: '反转', text: '反转', args: {文本: {type: ArgumentType.STRING, defaultValue: '114514'}} },
                { opcode: '重复', text: '重复', args: {文本: {type: ArgumentType.STRING, defaultValue: '114'}, 次数: {type: ArgumentType.NUMBER, defaultValue: 3}} },
                { opcode: '截取前', text: '截取前', args: {文本: {type: ArgumentType.STRING, defaultValue: '114514'}, 长度: {type: ArgumentType.NUMBER, defaultValue: 3}} },
                { opcode: '截取后', text: '截取后', args: {文本: {type: ArgumentType.STRING, defaultValue: '114514'}, 长度: {type: ArgumentType.NUMBER, defaultValue: 3}} },
                { opcode: '左对齐', text: '左对齐', args: {文本: {type: ArgumentType.STRING, defaultValue: '114'}, 长度: {type: ArgumentType.NUMBER, defaultValue: 6}, 填充: {type: ArgumentType.STRING, defaultValue: ' '}} },
                { opcode: '右对齐', text: '右对齐', args: {文本: {type: ArgumentType.STRING, defaultValue: '114'}, 长度: {type: ArgumentType.NUMBER, defaultValue: 6}, 填充: {type: ArgumentType.STRING, defaultValue: ' '}} },
                { opcode: '居中对齐', text: '居中对齐', args: {文本: {type: ArgumentType.STRING, defaultValue: '114'}, 长度: {type: ArgumentType.NUMBER, defaultValue: 6}, 填充: {type: ArgumentType.STRING, defaultValue: ' '}} },
                { opcode: '提取数字', text: '提取数字', args: {文本: {type: ArgumentType.STRING, defaultValue: 'abc114def514'}} },
                { opcode: '提取字母', text: '提取字母', args: {文本: {type: ArgumentType.STRING, defaultValue: 'abc114def514'}} },
                { opcode: '提取中文', text: '提取中文', args: {文本: {type: ArgumentType.STRING, defaultValue: '你好114世界514'}} },
                { opcode: '比较文本', text: '比较文本', blockType: BlockType.BOOLEAN, args: {文本1: {type: ArgumentType.STRING, defaultValue: 'abc'}, 文本2: {type: ArgumentType.STRING, defaultValue: 'ABC'}} },
                { opcode: '比较文本不区分大小写', text: '比较文本不区分大小写', blockType: BlockType.BOOLEAN, args: {文本1: {type: ArgumentType.STRING, defaultValue: 'abc'}, 文本2: {type: ArgumentType.STRING, defaultValue: 'ABC'}} },
                { opcode: '替换多行', text: '替换多行', args: {文本: {type: ArgumentType.STRING, defaultValue: '114\n514'}, 旧: {type: ArgumentType.STRING, defaultValue: '\n'}, 新: {type: ArgumentType.STRING, defaultValue: ','}} },
                { opcode: '去除换行', text: '去除换行', args: {文本: {type: ArgumentType.STRING, defaultValue: '114\n514\n78'}} },
                { opcode: 'MD5加密', text: 'MD5加密', args: {文本: {type: ArgumentType.STRING, defaultValue: '114514'}} },
                { opcode: 'Base64编码', text: 'Base64编码', args: {文本: {type: ArgumentType.STRING, defaultValue: '114514'}} },
                { opcode: 'Base64解码', text: 'Base64解码', args: {文本: {type: ArgumentType.STRING, defaultValue: 'MTE0NTE0'}} },
                // ---- 数组 ----
                { opcode: '创建数组', text: '创建数组', args: {元素1: {type: ArgumentType.ANY, defaultValue: 114}, 元素2: {type: ArgumentType.ANY, defaultValue: 514}, 元素3: {type: ArgumentType.ANY, defaultValue: 78}} },
                { opcode: '创建数组转列表', text: '创建数组转列表', args: {元素1: {type: ArgumentType.ANY, defaultValue: 114}, 元素2: {type: ArgumentType.ANY, defaultValue: 514}, 元素3: {type: ArgumentType.ANY, defaultValue: 78}} },
                { opcode: '数组长度', text: '数组长度', args: {数组: {type: ArgumentType.STRING, defaultValue: '[114,514,78,91]'}} },
                { opcode: '添加元素', text: '添加元素', args: {数组: {type: ArgumentType.STRING, defaultValue: '[114,514]'}, 元素: {type: ArgumentType.ANY, defaultValue: 78}} },
                { opcode: '插入元素', text: '插入元素', args: {数组: {type: ArgumentType.STRING, defaultValue: '[114,514,91]'}, 位置: {type: ArgumentType.NUMBER, defaultValue: 2}, 元素: {type: ArgumentType.ANY, defaultValue: 78}} },
                { opcode: '删除元素', text: '删除元素', args: {数组: {type: ArgumentType.STRING, defaultValue: '[114,514,78,91]'}, 位置: {type: ArgumentType.NUMBER, defaultValue: 2}} },
                { opcode: '删除指定元素', text: '删除指定元素', args: {数组: {type: ArgumentType.STRING, defaultValue: '[114,514,78,91]'}, 元素: {type: ArgumentType.ANY, defaultValue: 78}} },
                { opcode: '获取元素', text: '获取元素', args: {数组: {type: ArgumentType.STRING, defaultValue: '[114,514,78,91]'}, 位置: {type: ArgumentType.NUMBER, defaultValue: 2}} },
                { opcode: '获取第一个元素', text: '获取第一个元素', args: {数组: {type: ArgumentType.STRING, defaultValue: '[114,514,78,91]'}} },
                { opcode: '获取最后一个元素', text: '获取最后一个元素', args: {数组: {type: ArgumentType.STRING, defaultValue: '[114,514,78,91]'}} },
                { opcode: '修改元素', text: '修改元素', args: {数组: {type: ArgumentType.STRING, defaultValue: '[114,514,78,91]'}, 位置: {type: ArgumentType.NUMBER, defaultValue: 2}, 新值: {type: ArgumentType.ANY, defaultValue: 100}} },
                { opcode: '查找元素', text: '查找元素', args: {数组: {type: ArgumentType.STRING, defaultValue: '[114,514,78,91]'}, 元素: {type: ArgumentType.ANY, defaultValue: 78}} },
                { opcode: '数组包含', text: '数组包含', blockType: BlockType.BOOLEAN, args: {数组: {type: ArgumentType.STRING, defaultValue: '[114,514,78,91]'}, 元素: {type: ArgumentType.ANY, defaultValue: 78}} },
                { opcode: '反转数组', text: '反转数组', args: {数组: {type: ArgumentType.STRING, defaultValue: '[114,514,78,91]'}} },
                { opcode: '排序数组', text: '排序数组', args: {数组: {type: ArgumentType.STRING, defaultValue: '[514,114,91,78]'}} },
                { opcode: '降序排序数组', text: '降序排序数组', args: {数组: {type: ArgumentType.STRING, defaultValue: '[114,514,78,91]'}} },
                { opcode: '拼接数组', text: '拼接数组', args: {数组1: {type: ArgumentType.STRING, defaultValue: '[114,514]'}, 数组2: {type: ArgumentType.STRING, defaultValue: '[78,91]'}} },
                { opcode: '清空数组', text: '清空数组', args: {数组: {type: ArgumentType.STRING, defaultValue: '[114,514,78,91]'}} },
                { opcode: '连接数组', text: '连接数组', args: {数组: {type: ArgumentType.STRING, defaultValue: '[114,514,78,91]'}, 分隔符: {type: ArgumentType.STRING, defaultValue: ','}} },
                { opcode: '数组去重', text: '数组去重', args: {数组: {type: ArgumentType.STRING, defaultValue: '[114,514,114,78]'}} },
                { opcode: '数组切片', text: '数组切片', args: {数组: {type: ArgumentType.STRING, defaultValue: '[114,514,78,91]'}, 起始: {type: ArgumentType.NUMBER, defaultValue: 0}, 结束: {type: ArgumentType.NUMBER, defaultValue: 2}} },
                // ---- 几何 ----
                { opcode: '勾股求弦', text: '勾股求弦', args: {勾: {type: ArgumentType.NUMBER, defaultValue: 114}, 股: {type: ArgumentType.NUMBER, defaultValue: 514}} },
                { opcode: '弦勾求股', text: '弦勾求股', args: {弦: {type: ArgumentType.NUMBER, defaultValue: 527}, 勾: {type: ArgumentType.NUMBER, defaultValue: 114}} },
                { opcode: '弦股求勾', text: '弦股求勾', args: {弦: {type: ArgumentType.NUMBER, defaultValue: 527}, 股: {type: ArgumentType.NUMBER, defaultValue: 514}} },
                { opcode: '直角三角形面积', text: '直角三角形面积', args: {直角边1: {type: ArgumentType.NUMBER, defaultValue: 78}, 直角边2: {type: ArgumentType.NUMBER, defaultValue: 91}} },
                { opcode: '三角形周长', text: '三角形周长', args: {边1: {type: ArgumentType.NUMBER, defaultValue: 78}, 边2: {type: ArgumentType.NUMBER, defaultValue: 91}, 边3: {type: ArgumentType.NUMBER, defaultValue: 100}} },
                { opcode: '三角形面积', text: '三角形面积', args: {边1: {type: ArgumentType.NUMBER, defaultValue: 78}, 边2: {type: ArgumentType.NUMBER, defaultValue: 91}, 边3: {type: ArgumentType.NUMBER, defaultValue: 100}} },
                { opcode: '圆周长', text: '圆周长', args: {半径: {type: ArgumentType.NUMBER, defaultValue: 10}} },
                { opcode: '圆面积', text: '圆面积', args: {半径: {type: ArgumentType.NUMBER, defaultValue: 10}} },
                { opcode: '矩形面积', text: '矩形面积', args: {长: {type: ArgumentType.NUMBER, defaultValue: 20}, 宽: {type: ArgumentType.NUMBER, defaultValue: 10}} },
                { opcode: '矩形周长', text: '矩形周长', args: {长: {type: ArgumentType.NUMBER, defaultValue: 20}, 宽: {type: ArgumentType.NUMBER, defaultValue: 10}} },
                { opcode: '正方形面积', text: '正方形面积', args: {边长: {type: ArgumentType.NUMBER, defaultValue: 10}} },
                { opcode: '正方形周长', text: '正方形周长', args: {边长: {type: ArgumentType.NUMBER, defaultValue: 10}} },
                // ---- 统计与随机 ----
                { opcode: '数组求和', text: '数组求和', args: {数组: {type: ArgumentType.STRING, defaultValue: '[114,514,78,91,100]'}} },
                { opcode: '数组平均值', text: '数组平均值', args: {数组: {type: ArgumentType.STRING, defaultValue: '[114,514,78,91,100]'}} },
                { opcode: '数组最大值', text: '数组最大值', args: {数组: {type: ArgumentType.STRING, defaultValue: '[114,514,78,91,100]'}} },
                { opcode: '数组最小值', text: '数组最小值', args: {数组: {type: ArgumentType.STRING, defaultValue: '[114,514,78,91,100]'}} },
                { opcode: '数组中位数', text: '数组中位数', args: {数组: {type: ArgumentType.STRING, defaultValue: '[114,514,78,91,100]'}} },
                { opcode: '随机整数', text: '随机整数', args: {最小: {type: ArgumentType.NUMBER, defaultValue: 1}, 最大: {type: ArgumentType.NUMBER, defaultValue: 100}} },
                { opcode: '随机小数', text: '随机小数', args: {最小: {type: ArgumentType.NUMBER, defaultValue: 0}, 最大: {type: ArgumentType.NUMBER, defaultValue: 10}} },
                { opcode: '随机选择', text: '随机选择', args: {数组: {type: ArgumentType.STRING, defaultValue: '[114,514,78,91]'}} },
                { opcode: '随机打乱数组', text: '随机打乱数组', args: {数组: {type: ArgumentType.STRING, defaultValue: '[114,514,78,91]'}} },
                { opcode: '随机布尔', text: '随机布尔', blockType: BlockType.BOOLEAN, args: {} },
                { opcode: '随机字母', text: '随机字母', args: {} },
                { opcode: '随机数字', text: '随机数字', args: {} },
                { opcode: '随机字符串', text: '随机字符串', args: {长度: {type: ArgumentType.NUMBER, defaultValue: 6}} },
                // ---- 逻辑判断 ----
                { opcode: '是偶数', text: '是偶数', blockType: BlockType.BOOLEAN, args: {数: {type: ArgumentType.NUMBER, defaultValue: 78}} },
                { opcode: '是奇数', text: '是奇数', blockType: BlockType.BOOLEAN, args: {数: {type: ArgumentType.NUMBER, defaultValue: 91}} },
                { opcode: '是正数', text: '是正数', blockType: BlockType.BOOLEAN, args: {数: {type: ArgumentType.NUMBER, defaultValue: 114514}} },
                { opcode: '是负数', text: '是负数', blockType: BlockType.BOOLEAN, args: {数: {type: ArgumentType.NUMBER, defaultValue: -10}} },
                { opcode: '是零', text: '是零', blockType: BlockType.BOOLEAN, args: {数: {type: ArgumentType.NUMBER, defaultValue: 0}} },
                { opcode: '是直角三角形', text: '是直角三角形', blockType: BlockType.BOOLEAN, args: {边1: {type: ArgumentType.NUMBER, defaultValue: 114}, 边2: {type: ArgumentType.NUMBER, defaultValue: 514}, 边3: {type: ArgumentType.NUMBER, defaultValue: 527}} },
                { opcode: '是等腰三角形', text: '是等腰三角形', blockType: BlockType.BOOLEAN, args: {边1: {type: ArgumentType.NUMBER, defaultValue: 10}, 边2: {type: ArgumentType.NUMBER, defaultValue: 10}, 边3: {type: ArgumentType.NUMBER, defaultValue: 15}} },
                { opcode: '是等边三角形', text: '是等边三角形', blockType: BlockType.BOOLEAN, args: {边1: {type: ArgumentType.NUMBER, defaultValue: 10}, 边2: {type: ArgumentType.NUMBER, defaultValue: 10}, 边3: {type: ArgumentType.NUMBER, defaultValue: 10}} },
                { opcode: '是数组', text: '是数组', blockType: BlockType.BOOLEAN, args: {值: {type: ArgumentType.STRING, defaultValue: '[114,514]'}} },
                { opcode: '是文本', text: '是文本', blockType: BlockType.BOOLEAN, args: {值: {type: ArgumentType.STRING, defaultValue: '114514'}} },
                { opcode: '是数字', text: '是数字', blockType: BlockType.BOOLEAN, args: {值: {type: ArgumentType.STRING, defaultValue: '114514'}} },
                { opcode: '是布尔', text: '是布尔', blockType: BlockType.BOOLEAN, args: {值: {type: ArgumentType.ANY, defaultValue: true}} }
            ];

            // 构建 blocks 数组，将文本替换为 translate 调用，并设置默认 blockType 为 REPORTER
            const blocks = blockDefs.map(def => {
                const block = {
                    opcode: def.opcode,
                    blockType: def.blockType || BlockType.REPORTER,
                    text: translate({id: def.opcode}),  // 使用 opcode 作为翻译ID
                    arguments: def.args
                };
                return block;
            });

            return {
                id: 'mathUtils',
                name: translate({id: 'extensionName'}),
                color1: '#FF8C1A',
                color2: '#DB6E00',
                blocks: blocks
            };
        }
    }

    // ---------- 注册扩展 ----------
    extensions.register(new MathUtilsExtension());

}(Scratch));
