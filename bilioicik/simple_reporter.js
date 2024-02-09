//拓展原作者：bilioicik，由 多bug的啸天犬 帮助提交审核

//感谢多莉pro的源码让我知道如何隐藏积木

const { Scratch } = window;

const {
    BlockType, ArgumentType, TargetType, Cast,
} = Scratch;

const simple_reporter_picture = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI2MDAiIGhlaWdodD0iMzc1IiB2aWV3Qm94PSIwLDAsNjAwLDM3NSI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGN4PSIzNDcuMDg1OTQiIGN5PSIyNDUuMSIgcj0iMTE2LjQ4MTQ4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzU5YzA1OSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzU5YzA1OSIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48cmFkaWFsR3JhZGllbnQgY3g9IjMwMCIgY3k9IjEyOS45IiByPSIxODcuNjQ4MTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNTljMDU5Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNTljMDU5IiBzdG9wLW9wYWNpdHk9IjAiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDM3NXYtMzc1aDYwMHYzNzV6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yMzAuNjA0NDYsMjA1LjFNMjcwLjYwNDQ2LDIwNS4xaDE1Mi45NjI5NmMyMi4wOTEzOSwwIDQwLDE3LjkwODYxIDQwLDQwYzAsMjIuMDkxMzkgLTE3LjkwODYxLDQwIC00MCw0MGgtMTUyLjk2Mjk2Yy0yMi4wOTEzOSwwIC00MCwtMTcuOTA4NjEgLTQwLC00MGMwLC0yMi4wOTEzOSAxNy45MDg2MSwtNDAgNDAsLTQweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ1cmwoI2NvbG9yLTEpIiBzdHJva2Utd2lkdGg9IjIwIi8+PHBhdGggZD0iTTIzMC42MDQ0NiwyMDUuMU0yNzAuNjA0NDYsMjA1LjFoMTUyLjk2Mjk2YzIyLjA5MTM5LDAgNDAsMTcuOTA4NjEgNDAsNDBjMCwyMi4wOTEzOSAtMTcuOTA4NjEsNDAgLTQwLDQwaC0xNTIuOTYyOTZjLTIyLjA5MTM5LDAgLTQwLC0xNy45MDg2MSAtNDAsLTQwYzAsLTIyLjA5MTM5IDE3LjkwODYxLC00MCA0MCwtNDB6IiBmaWxsPSIjNTljMDU5IiBzdHJva2U9IiM0NzlhNDciIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0xMTIuMzUxODUsODkuOU0xNTIuMzUxODUsODkuOWgyOTUuMjk2M2w0MCw0MGwtNDAsNDBoLTI5NS4yOTYzbC00MCwtNDB6IiBmaWxsPSJub25lIiBzdHJva2U9InVybCgjY29sb3ItMikiIHN0cm9rZS13aWR0aD0iMjAiLz48cGF0aCBkPSJNMTEyLjM1MTg1LDg5LjlNMTUyLjM1MTg1LDg5LjloMjk1LjI5NjNsNDAsNDBsLTQwLDQwaC0yOTUuMjk2M2wtNDAsLTQweiIgZmlsbD0iIzU5YzA1OSIgc3Ryb2tlPSIjNDc5YTQ3IiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzIuMzgyODEsMTQ0LjMpIHNjYWxlKDMsMykiIGZvbnQtc2l6ZT0iMTYiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjNDc5YTQ3IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSImcXVvdDtDb29wZXIgQmxhY2smcXVvdDssIFNhbnMgU2VyaWYiIGZvbnQtd2VpZ2h0PSI1MDAiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0c3BhbiB4PSIwIiBkeT0iMCI+c29tZXRoaW5nPC90c3Bhbj48L3RleHQ+PHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjY2LjU1NDY5LDI1OS41KSBzY2FsZSgzLDMpIiBmb250LXNpemU9IjE2IiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iIzQ3OWE0NyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0iJnF1b3Q7Q29vcGVyIEJsYWNrJnF1b3Q7LCBTYW5zIFNlcmlmIiBmb250LXdlaWdodD0iNTAwIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48dHNwYW4geD0iMCIgZHk9IjAiPnNpbXBsZTwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNy4zODI4MSwyNjkuNSkgc2NhbGUoNS4wODMzMyw1LjA4MzMzKSIgZm9udC1zaXplPSIxNiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9IiM0NzlhNDciIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IiZxdW90O0Nvb3BlciBCbGFjayZxdW90OywgU2FucyBTZXJpZiIgZm9udC13ZWlnaHQ9IjUwMCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHRzcGFuIHg9IjAiIGR5PSIwIj4rPC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjozMDA6MTg3LjUtLT4=";

const simple_reporter_icon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCwwLDgwLDgwIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTk5Ljk5OTk5LC0xNDAuMDAwMDEpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yMjAuMTYyNiwyMjAuMDAwMDJjLTExLjEzNTUsMCAtMjAuMTYyNiwtOS4wMjcxIC0yMC4xNjI2LC0yMC4xNjI2di0zOS42NzQ4YzAsLTExLjEzNTUgOS4wMjcxLC0yMC4xNjI2IDIwLjE2MjYsLTIwLjE2MjZoMzkuNjc0OGMxMS4xMzU1LDAgMjAuMTYyNiw5LjAyNzEgMjAuMTYyNiwyMC4xNjI2djM5LjY3NDhjMCwxMS4xMzU1IC05LjAyNzEsMjAuMTYyNiAtMjAuMTYyNiwyMC4xNjI2eiIgZmlsbD0iIzhiYmY4YiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjIyLjY0MjI3LDIxNS4wMDAwMmMtOS43NDM1NiwwIC0xNy42NDIyNywtNy44OTg3MSAtMTcuNjQyMjcsLTE3LjY0MjI3di0zNC43MTU0NWMwLC05Ljc0MzU2IDcuODk4NzEsLTE3LjY0MjI4IDE3LjY0MjI3LC0xNy42NDIyOGgzNC43MTU0NWM5Ljc0MzU2LDAgMTcuNjQyMjgsNy44OTg3MiAxNy42NDIyOCwxNy42NDIyOHYzNC43MTU0NWMwLDkuNzQzNTYgLTcuODk4NzIsMTcuNjQyMjcgLTE3LjY0MjI4LDE3LjY0MjI3eiIgZmlsbD0iIzU5YzA1OSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjI1LDE4Ny40OTk5OWMtNC4xNDIxNCwwIC03LjUsLTEuMTE5MjkgLTcuNSwtMi40OTk5OXYtOS45OTk5OWMwLC0xLjM4MDcyIDMuMzU3ODYsLTIuNDk5OTkgNy41LC0yLjQ5OTk5aDcuNXYtNy41YzAsLTQuMTQyMTQgMS4xMTkyOCwtNy41IDIuNDk5OTksLTcuNWg5Ljk5OTk5YzEuMzgwNzIsMCAyLjQ5OTk5LDMuMzU3ODYgMi40OTk5OSw3LjV2Ny41aDcuNTAwMDJjNC4xNDIxNSwwIDcuNSwxLjExOTI4IDcuNSwyLjQ5OTk5djkuOTk5OTljMCwxLjM4MDcyIC0zLjM1Nzg1LDIuNDk5OTkgLTcuNSwyLjQ5OTk5aC03LjUwMDAydjcuNTAwMDFjMCw0LjE0MjE0IC0xLjExOTI4LDcuNSAtMi40OTk5OSw3LjVoLTkuOTk5OTljLTEuMzgwNzIsMCAtMi40OTk5OSwtMy4zNTc4NiAtMi40OTk5OSwtNy41di03LjUwMDAxeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMzg5NDM4IiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjQwLjAwMDAwNDk5OTk5OTk5OjM5Ljk5OTk4NTAwMDAwMDAxLS0+";

const simple_reporter_extensionId = "simple_reporter";

const EXT_CONFIG_COMMENT_ID = '_ExtensionConfig_';

class simple_reporter {
    static extCount = 0;
    constructor(runtime) {
        this.runtime = runtime;
        simple_reporter.extCount += 1;
        this.id = simple_reporter.extCount;
        this.hideExtraBlocks = true;
        if (!this.parseExtConfig()) {
            runtime.on('PROJECT_LOADED', () => {
                this.parseExtConfig();
            });
        }
        this._formatMessage = runtime.getFormatMessage({
            "zh-cn": {
                'r_name': '简单返回值',
                'simple_reporter_docs': '文档',
                'simple_reporter_showBlock': '显示不常用积木',
                'simple_reporter_hideBlock': '隐藏不常用积木',
                'simple_reporter_showBlock?': '为了避免积木过多，一些不常用积木被隐藏了\n是否显示隐藏积木？',

                'title_Strings': '字符串',
                'r_reporter_DV': '你好',
                'r_if': '若[a]则[b]否则[c]',
                'r_if_b_DV': '是',
                'r_if_c_DV': '否',
                'b_and': '[a]与[b]',
                'b_or': '[a]或[b]',
                'b_not': '[a]不成立',
                'r_remove': '[a]去除[b]',
                'r_interchange': '[a]字符[b]与[c]互换',
                'r_default': '[a]空值则[b]',
                'b_defined': '[a]有值',
                'b_undefined': '[a]空值',
                'b_not_strictly_equal': '[a]不全等[b]',
                'b_not_contain': '[a]不含[b]',

                'title_Operators': '运算',
                'r_nearest_multiple': '[a]最近[b]倍数',
                'r_round': '[a]四舍五入[b]位',
                'r_rint_from_to': '[a]四舍五入，从[b]位至[c]位',
                'r_rint_to_times': '[a]四舍五入，从[b]位往前[c]次',
                'r_rint_times_to': '[a]四舍五入，往前[b]次至[c]位',
                'r_PI': 'π保留[a]位',
                'r_rad_sin': '弧度制sin[a]',
                'r_rad_cos': '弧度制cos[a]',
                'r_rad_tan': '弧度制tan[a]',
                'r_rad_asin': '弧度制asin[a]',
                'r_rad_acos': '弧度制acos[a]',
                'r_rad_atan': '弧度制atan[a]',
                'r_to_one_hundred_eighty': '[a]在-180~180角度中',
                'r_to_three_hundred_sixty': '[a]在0~360角度中',
                'r_add_to': '[a]增加[b]至[c]',

                'title_Array': '数组',
                'r_Array_sum': '[a]之和',
                'r_Array_product': '[a]之积',
                'r_Array_average': '[a]平均数',
                'r_Array_max': '[a]最大值',
                'r_Array_min': '[a]最小值',
                'b_Array_have_big_number': '[a]包含数>[b]',
                'b_Array_have_not_small_number': '[a]包含数≥[b]',
                'b_Array_have_small_number': '[a]包含数<[b]',
                'b_Array_have_not_big_number': '[a]包含数≤[b]',
                'b_Array_have': '[a]包含数=[b]',
                'b_Array_have_str': '[a]包含"[b]"',
                'b_Array_have_sth': '[a]包含[b]',
                'b_Array_have_JSON': '[a]包含JSON[b]',
                'b_Array_be_big_number': '[a]全是数>[b]',
                'b_Array_be_not_small_number': '[a]全是数≥[b]',
                'b_Array_be_small_number': '[a]全是数<[b]',
                'b_Array_be_not_big_number': '[a]全是数≤[b]',
                'b_Array_be': '[a]全是数=[b]',
                'b_Array_be_str': '[a]全是"[b]"',
                'b_Array_be_sth': '[a]全是[b]',
                'b_Array_be_JSON': '[a]全是JSON[b]',
                'r_Array_remove_big_number': '[a]删除数>[b]',
                'r_Array_remove_not_small_number': '[a]删除数≥[b]',
                'r_Array_remove_small_number': '[a]删除数<[b]',
                'r_Array_remove_not_big_number': '[a]删除数≤[b]',
                'r_Array_remove': '[a]删除所有数=[b]',
                'r_Array_remove_str': '[a]删除所有"[b]"',
                'r_Array_remove_sth': '[a]删除所有[b]',
                'r_Array_remove_JSON': '[a]删除所有JSON[b]',
                'r_Array_remove_shift': '[a]删除首项',
                'r_Array_remove_pop': '[a]删除末项',
                'r_Array_remove_item': '[a]删除第[b]项',
                'r_Array_remove_items': '[a]删除第[b]项',
                'r_Array_remove_item_to_item': '[a]删除第[b]至[c]项',
                'r_Array_reserve_item': '[a]保留第[b]项',
                'r_Array_shift': '[a]首项',
                'r_Array_pop': '[a]末项',
                'r_Array_item': '[a]第[b]项',
                'r_Array_items': '[a]第[b]项',
                'r_Array_shift_JSON': '[a]首项转JSON',
                'r_Array_pop_JSON': '[a]末项转JSON',
                'r_Array_item_JSON': '[a]第[b]项转JSON',
                'r_Array_item_to_item': '[a]第[b]至[c]项',
                'r_Array_unshift': '[a]加入[b]到开头',
                'r_Array_push': '[a]加入[b]到末尾',
                'r_Array_insert': '[a]插入[b]到[c]项',
                'r_Array_insert_index_to_index': '[a]插入[b]到[c]至[d]项',
                'r_Array_unshift_str': '[a]加入"[b]"到开头',
                'r_Array_push_str': '[a]加入"[b]"到末尾',
                'r_Array_insert_str': '[a]插入"[b]"到[c]项',
                'r_Array_insert_str_index_to_index': '[a]插入"[b]"到[c]至[d]项',
                'r_Array_unshift_JSON': '[a]加入JSON[b]到开头',
                'r_Array_push_JSON': '[a]加入JSON[b]到末尾',
                'r_Array_insert_JSON': '[a]插入JSON[b]到[c]项',
                'r_Array_insert_JSON_index_to_index': '[a]插入JSON[b]到[c]至[d]项',
                'r_Array_move': '[a]第[b]项移到第[c]项',
                'r_Array_interchange': '[a]第[b]项与第[c]项互换',
                'r_Array_replace': '[a]第[b]项设为[c]',
                'r_Array_replace_indexes': '[a]第[b]项设为[c]',
                'r_Array_replace_index_to_index': '[a]第[b]到[c]项设为[d]',
                'r_Array_replace_str': '[a]第[b]项设为"[c]"',
                'r_Array_replace_indexes_str': '[a]第[b]项设为"[c]"',
                'r_Array_replace_index_to_index_str': '[a]第[b]到[c]项设为"[d]"',
                'r_Array_replace_JSON': '[a]第[b]项设为JSON[c]',
                'r_Array_replace_indexes_JSON': '[a]第[b]项设为JSON[c]',
                'r_Array_replace_index_to_index_JSON': '[a]第[b]到[c]项设为JSON[d]',
                'r_Array_plus_index': '[a]第[b]项增加[c]',
                'r_Array_plus_index_to_index': '[a]第[b]到[c]项增加[d]',
                'r_Array_plus': '[a]各项增加[b]',
                'r_Array_index': '[a]第一[b]编号',
                'r_Array_index_str': '[a]第一"[b]"编号',
                'r_Array_index_JSON': '[a]第一JSON[b]编号',
                'r_Array_lastindex': '[a]最后一[b]编号',
                'r_Array_lastindex_str': '[a]最后一"[b]"编号',
                'r_Array_lastindex_JSON': '[a]最后一JSON[b]编号',
                'r_Array_allindex': '[a]所有[b]编号',
                'r_Array_allindex_str': '[a]所有"[b]"编号',
                'r_Array_allindex_JSON': '[a]所有JSON[b]编号',
                'r_Array_findIndex_big_number': '[a]第一数>[b]编号',
                'r_Array_findIndex_not_small_number': '[a]第一数≥[b]编号',
                'r_Array_findIndex_small_number': '[a]第一数<[b]编号',
                'r_Array_findIndex_not_big_number': '[a]第一数≤[b]编号',
                'r_Array_count_big_number': '[a]数>[b]数量',
                'r_Array_count_not_small_number': '[a]数≥[b]数量',
                'r_Array_count_small_number': '[a]数<[b]数量',
                'r_Array_count_not_big_number': '[a]数≤[b]数量',
                'r_Array_count': '[a]数=[b]数量',
                'r_Array_count_str': '[a]"[b]"数量',
                'r_Array_count_sth': '[a][b]数量',
                'r_Array_count_JSON': '[a]JSON[b]数量',
                'r_Array_sort_naturalOrder': '[a]顺序排序',
                'r_Array_sort_reverseOrder': '[a]倒序排序',
                'r_Array_reverse': '[a]反转',
                'b_Array_clear': '[a]无元素',
                'r_Array_length': '[a]元素量',
                'b_isArray': '[a]是数组',

                'title_Object': '对象',
                'r_Object_value': '[a]键[b]的值',
                'r_Object_value_JSON': '[a]键[b]的值转JSON',
                'r_Object_key': '[a]第一值[b]键',
                'r_Object_lastkey': '[a]最后一值[b]键',
                'r_Object_allkey': '[a]所有值[b]键',
                'r_Object_key_str': '[a]第一值"[b]"键',
                'r_Object_lastkey_str': '[a]最后一值"[b]"键',
                'r_Object_allkey_str': '[a]所有值"[b]"键',
                'r_Object_key_JSON': '[a]第一值JSON[b]键',
                'r_Object_lastkey_JSON': '[a]最后一值JSON[b]键',
                'r_Object_allkey_JSON': '[a]所有值JSON[b]键',
                'r_Object_put_key': '[a]键[b]值设为[c]',
                'r_Object_put_key_str': '[a]键[b]值设为"[c]"',
                'r_Object_put_key_JSON': '[a]键[b]值设为JSON[c]',
                'r_Object_plus_key': '[a]键[b]值增加[c]',
                'r_Object_plus': '[a]值增加[b]',
                'r_Object_putAll': '[a][b]合并',
                'r_Object_remove': '[a]删除键[b]',
                'b_Object_clear': '[a]无键值',
                'r_Object_length': '[a]键值量',
                'b_isObject': '[a]是对象',

                'title_JSON': 'JSON',

                'r_': '',
            },
            en: {
                'r_name': 'simple reporter',
                'simple_reporter_docs': 'documentation',
                'simple_reporter_showBlock': 'show other blocks',
                'simple_reporter_hideBlock': 'hide other blocks',
                'simple_reporter_showBlock?': 'To avoid clutter, some infrequently used blocks are hidden.\nDo you want to show hidden blocks?',

                'title_Strings': 'Strings',
                'r_reporter_DV': 'hello',
                'r_if': 'if[a]then[b]else[c]',
                'r_if_b_DV': 'yes',
                'r_if_c_DV': 'no',
                'b_and': '[a]and[b]',
                'b_or': '[a]or[b]',
                'b_not': 'not[a]',
                'r_remove': 'remove[b]from[a]',
                'r_interchange': '[a]interchanges[b]and[c]',
                'r_default': '[a],default=[b]',
                'b_defined': '[a]is defined',
                'b_undefined': '[a]is undefined',
                'b_not_strictly_equal': '[a]is not identically[b]',
                'b_not_contain': '[a]does not contain[b]',

                'title_Operators': 'Operators',
                'r_nearest_multiple': 'multiple of[b]near[a]',
                'r_round': 'round[a]to[b]decimal places',
                'r_rint_from_to': 'round[a]from[b]to[c]decimal places',
                'r_rint_to_times': 'round[a]to[b]decimal places,round it[c]times',
                'r_rint_times_to': 'round[a][b]times to[c]decimal places',
                'r_PI': 'round π to[a]decimal places',
                'r_rad_sin': 'sin[a]in rad',
                'r_rad_cos': 'cos[a]in rad',
                'r_rad_tan': 'tan[a]in rad',
                'r_rad_asin': 'asin[a]in rad',
                'r_rad_acos': 'acos[a]in rad',
                'r_rad_atan': 'atan[a]in rad',
                'r_to_one_hundred_eighty': '[a]changes into -180~180',
                'r_to_three_hundred_sixty': '[a]changes into 0~360',
                'r_add_to': '[a]add[b]to[c]',

                'title_Array': 'Array',
                'r_Array_sum': 'sum of[a]',
                'r_Array_product': 'product of[a]',
                'r_Array_average': 'average of[a]',
                'r_Array_max': 'max[a]',
                'r_Array_min': 'min[a]',
                'b_Array_have_big_number': '[a]contains number>[b]',
                'b_Array_have_not_small_number': '[a]contains number≥[b]',
                'b_Array_have_small_number': '[a]contains number<[b]',
                'b_Array_have_not_big_number': '[a]contains number≤[b]',
                'b_Array_have': '[a]contains number=[b]',
                'b_Array_have_str': '[a]contains "[b]"',
                'b_Array_have_sth': '[a]contains[b]',
                'b_Array_have_JSON': '[a]contains JSON[b]',
                'b_Array_be_big_number': '[a]only contains number>[b]',
                'b_Array_be_not_small_number': '[a]only contains number≥[b]',
                'b_Array_be_small_number': '[a]only contains number<[b]',
                'b_Array_be_not_big_number': '[a]only contains number≤[b]',
                'b_Array_be': '[a]only contains number=[b]',
                'b_Array_be_str': '[a]only contains "[b]"',
                'b_Array_be_sth': '[a]only contains[b]',
                'b_Array_be_JSON': '[a]only contains SJON[b]',
                'r_Array_remove_big_number': 'number>[b]delete from[a]',
                'r_Array_remove_not_small_number': 'number≥[b]delete from[a]',
                'r_Array_remove_small_number': 'number<[b]delete from[a]',
                'r_Array_remove_not_big_number': 'number≤[b]delete from[a]',
                'r_Array_remove': 'all number[b]delete from[a]',
                'r_Array_remove_str': 'all "[b]" delete from[a]',
                'r_Array_remove_sth': 'all[b]delete from[a]',
                'r_Array_remove_JSON': 'all JSON[b]delete from[a]',
                'r_Array_remove_shift': '[a]delete the first item',
                'r_Array_remove_pop': '[a]delete the last item',
                'r_Array_remove_item': 'delete item[b]of[a]',
                'r_Array_remove_items': 'delete items[b]of[a]',
                'r_Array_remove_item_to_item': 'delete item from[b]to[c]of[a]',
                'r_Array_reserve_item': 'reserve item[b]of[a]',
                'r_Array_shift': 'the first item of[a]',
                'r_Array_pop': 'the last item of[a]',
                'r_Array_item': 'item[b]of[a]',
                'r_Array_items': 'items[b]of[a]',
                'r_Array_shift_JSON': 'the first item as JSON of[a]',
                'r_Array_pop_JSON': 'the last item as JSON of[a]',
                'r_Array_item_JSON': 'item[b]as JSON of[a]',
                'r_Array_item_to_item': 'item from[b]to[c]of[a]',
                'r_Array_unshift': '[a]inserts[b]at the first one',
                'r_Array_push': '[a]inserts[b]at the last one',
                'r_Array_insert': '[a]inserts[b]at[c]',
                'r_Array_insert_index_to_index': '[a]inserts[b]from[c]to[d]',
                'r_Array_unshift_str': '[a]inserts "[b]" at the first one',
                'r_Array_push_str': '[a]inserts "[b]" at the last one',
                'r_Array_insert_str': '[a]inserts "[b]" at[c]',
                'r_Array_insert_str_index_to_index': '[a]inserts "[b]" from[c]to[d]',
                'r_Array_unshift_JSON': '[a]inserts JSON[b]at the first one',
                'r_Array_push_JSON': '[a]inserts JSON[b]at the last one',
                'r_Array_insert_JSON': '[a]inserts JSON[b]at[c]',
                'r_Array_insert_JSON_index_to_index': '[a]inserts JSON[b]from[c]to[d]',
                'r_Array_move': '[a]item[b]move to[c]',
                'r_Array_interchange': '[a]interchanges item[b]and item[c]',
                'r_Array_replace': 'set item[b]of[a]to[c]',
                'r_Array_replace_indexes': 'set items[b]of[a]to[c]',
                'r_Array_replace_index_to_index': 'set item from[b]to[c]of[a]to[d]',
                'r_Array_replace_str': 'set item[b]of[a]to "[c]"',
                'r_Array_replace_indexes_str': 'set items[b]of[a]to "[c]"',
                'r_Array_replace_index_to_index_str': 'set item from[b]to[c]of[a]to "[d]"',
                'r_Array_replace_JSON': 'set item[b]of[a]to JSON[c]',
                'r_Array_replace_indexes_JSON': 'set items[b]of[a]to JSON[c]',
                'r_Array_replace_index_to_index_JSON': 'set item from[b]to[c]of[a]to JSON[d]',
                'r_Array_plus_index': 'change by[c]at[b]of[a]',
                'r_Array_plus_index_to_index': 'change by[d]from[b]to[c]of[a]',
                'r_Array_plus': 'change by[b]at every item of[a]',
                'r_Array_index': 'the first[b]in[a]',
                'r_Array_index_str': 'the first "[b]" in[a]',
                'r_Array_index_JSON': 'the first JSON[b]in[a]',
                'r_Array_lastindex': 'the last[b]in[a]',
                'r_Array_lastindex_str': 'the last "[b]" in[a]',
                'r_Array_lastindex_JSON': 'the last JSON[b]in[a]',
                'r_Array_allindex': 'all[b]in[a]',
                'r_Array_allindex_str': 'all "[b]" in[a]',
                'r_Array_allindex_JSON': 'all JSON[b]in[a]',
                'r_Array_findIndex_big_number': 'the first number>[b]in[a]',
                'r_Array_findIndex_not_small_number': 'the first number≥[b]in[a]',
                'r_Array_findIndex_small_number': 'the first number<[b]in[a]',
                'r_Array_findIndex_not_big_number': 'the first number≤[b]in[a]',
                'r_Array_count_big_number': 'count number>[b]in[a]',
                'r_Array_count_not_small_number': 'count number≥[b]in[a]',
                'r_Array_count_small_number': 'count number<[b]in[a]',
                'r_Array_count_not_big_number': 'count number≤[b]in[a]',
                'r_Array_count': 'count number=[b]in[a]',
                'r_Array_count_str': 'count "[b]" in[a]',
                'r_Array_count_sth': 'count[b]in[a]',
                'r_Array_count_JSON': 'count JSON[b]in[a]',
                'r_Array_sort_naturalOrder': 'sort[a]by ascending',
                'r_Array_sort_reverseOrder': 'sort[a]by descending',
                'r_Array_reverse': 'reverse[a]',
                'b_Array_clear': '[a]has nothing',
                'r_Array_length': 'length of[a]',
                'b_isArray': '[a]is Array',

                'title_Object': 'Object',
                'r_Object_value': 'value of key[b]in[a]',
                'r_Object_value_JSON': 'value as JSON of key[b]in[a]',
                'r_Object_key': 'key of the first value[b]in[a]',
                'r_Object_lastkey': 'key of the last value[b]in[a]',
                'r_Object_allkey': 'keys of value[b]in[a]',
                'r_Object_key_str': 'key of the first value "[b]" in[a]',
                'r_Object_lastkey_str': 'key of the last value "[b]" in[a]',
                'r_Object_allkey_str': 'keys of value "[b]" in[a]',
                'r_Object_key_JSON': 'key of the first value JSON[b]in[a]',
                'r_Object_lastkey_JSON': 'key of the last value JSON[b]in[a]',
                'r_Object_allkey_JSON': 'keys of value JSON[b]in[a]',
                'r_Object_put_key': 'set[b]in[a]to[c]',
                'r_Object_put_key_str': 'set[b]in[a]to"[c]"',
                'r_Object_put_key_JSON': 'set[b]in[a]to JSON[c]',
                'r_Object_plus_key': 'value of key[b]change by[c]in[a]',
                'r_Object_plus': 'values change by[b]in[a]',
                'r_Object_putAll': 'concat[a][b]',
                'r_Object_remove': 'delete key[b]from[a]',
                'b_Object_clear': '[a]has nothing',
                'r_Object_length': 'length of[a]',
                'b_isObject': '[a]is Object',

                'title_JSON': 'JSON',

                'r_': '',
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
    getInfo() {
        return {
            id: simple_reporter_extensionId,
            name: this.formatMessage('r_name'),
            blockIconURI: '',
            menuIconURI: simple_reporter_icon,
            color1: '#59c059',
            color2: '#8bbf8b',
            blocks: [
                {
                    blockType: "button",
                    text: this.formatMessage('simple_reporter_docs'),
                    onClick: this.docs,
                },
                {
                    blockType: 'button',
                    hideFromPalette: !this.hideExtraBlocks,
                    text: this.formatMessage('simple_reporter_showBlock'),
                    onClick: () => {
                        if (confirm(this.formatMessage('simple_reporter_showBlock?'))) {
                            this.hideExtraBlocks = false;
                            this.storeExtConfig();
                            this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE');
                        }
                    },
                },
                {
                    blockType: 'button',
                    text: this.formatMessage('simple_reporter_hideBlock'),
                    hideFromPalette: this.hideExtraBlocks,
                    onClick: () => {
                        this.hideExtraBlocks = true;
                        this.storeExtConfig();
                        this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE');
                    },
                },
                '---' + this.formatMessage('title_Strings'),
                {
                    opcode: 'r_reporter',
                    blockType: 'reporter',
                    text: '[a]',
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: this.formatMessage('r_reporter_DV')
                        }
                    }
                },
                {
                    opcode: 'r_boolean',
                    blockType: 'Boolean',
                    text: '[a]',
                    arguments: {
                        a: {
                            type: 'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'b_ToBoolean',
                    blockType: 'Boolean',
                    text: '[a]'
                },
                {
                    opcode: 'r_if',
                    blockType: 'reporter',
                    text: this.formatMessage('r_if'),
                    arguments: {
                        a: {
                            type: 'string'
                        },
                        b: {
                            type: 'string',
                            defaultValue: this.formatMessage('r_if_b_DV')
                        },
                        c: {
                            type: 'string',
                            defaultValue: this.formatMessage('r_if_c_DV')
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_if_ToBoolean',
                    blockType: 'reporter',
                    text: this.formatMessage('r_if'),
                    arguments: {
                        b: {
                            type: 'string',
                            defaultValue: this.formatMessage('r_if_b_DV')
                        },
                        c: {
                            type: 'string',
                            defaultValue: this.formatMessage('r_if_c_DV')
                        }
                    }
                },
                {
                    opcode: 'b_and',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_and'),
                    arguments: {
                        a: {
                            type: 'string'
                        },
                        b: {
                            type: 'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'b_or',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_or'),
                    arguments: {
                        a: {
                            type: 'string'
                        },
                        b: {
                            type: 'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'b_not',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_not'),
                    arguments: {
                        a: {
                            type: 'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'b_and_ToBoolean',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_and')
                },
                {
                    opcode: 'b_or_ToBoolean',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_or')
                },
                {
                    opcode: 'b_not_ToBoolean',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_not')
                },
                {
                    opcode: 'r_join',
                    blockType: 'reporter',
                    text: '[a][b][c]',
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: 'c'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 'c'
                        },
                        c: {
                            type: 'string',
                            defaultValue: 'w'
                        }
                    }
                },
                {
                    opcode: 'r_remove',
                    blockType: 'reporter',
                    text: this.formatMessage('r_remove'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: 'bilioicik'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 'i'
                        }
                    }
                },
                {
                    opcode: 'r_interchange',
                    blockType: 'reporter',
                    text: this.formatMessage('r_interchange'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: 'god'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 'd'
                        },
                        c: {
                            type: 'string',
                            defaultValue: 'g'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_default',
                    blockType: 'reporter',
                    text: this.formatMessage('r_default'),
                    arguments: {
                        b: {
                            type: 'string'
                        }
                    }
                },
                {
                    opcode: 'b_defined',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_defined'),
                },
                {
                    opcode: 'b_undefined',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_undefined'),
                },
                {
                    opcode: 'b_not_strictly_equal',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_not_strictly_equal'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: 'Shawn'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 'shawn'
                        }
                    }
                },
                {
                    opcode: 'b_not_contain',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_not_contain'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: 'apple'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 'app'
                        }
                    }
                },
                '---' + this.formatMessage('title_Operators'),
                {
                    opcode: 'b_not_equal',
                    blockType: 'Boolean',
                    text: '[a]≠[b]',
                    arguments: {
                        a: {
                            type: 'string'
                        },
                        b: {
                            type: 'string'
                        }
                    }
                },
                {
                    opcode: 'r_addition',
                    blockType: 'reporter',
                    text: '[a]+[b]+[c]',
                    arguments: {
                        a: {
                            type: 'string'
                        },
                        b: {
                            type: 'string'
                        },
                        c: {
                            type: 'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_addition_multiplication',
                    blockType: 'reporter',
                    text: '([a]+[b])*[c]',
                    arguments: {
                        a: {
                            type: 'string'
                        },
                        b: {
                            type: 'string'
                        },
                        c: {
                            type: 'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_nearest_multiple',
                    blockType: 'reporter',
                    text: this.formatMessage('r_nearest_multiple'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: 12
                        },
                        b: {
                            type: 'string',
                            defaultValue: 7
                        }
                    }
                },
                {
                    opcode: 'r_round',
                    blockType: 'reporter',
                    text: this.formatMessage('r_round'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: 3.1415926
                        },
                        b: {
                            type: 'string',
                            defaultValue: 3
                        }
                    }
                },
                {
                    opcode: 'r_rint_from_to',
                    blockType: 'reporter',
                    text: this.formatMessage('r_rint_from_to'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: 3.1415926
                        },
                        b: {
                            type: 'string',
                            defaultValue: 6
                        },
                        c: {
                            type: 'string',
                            defaultValue: 3
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_rint_to_times',
                    blockType: 'reporter',
                    text: this.formatMessage('r_rint_to_times'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: 3.1415926
                        },
                        b: {
                            type: 'string',
                            defaultValue: 6
                        },
                        c: {
                            type: 'string',
                            defaultValue: 3
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_rint_times_to',
                    blockType: 'reporter',
                    text: this.formatMessage('r_rint_times_to'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: 3.1415926
                        },
                        b: {
                            type: 'string',
                            defaultValue: 3
                        },
                        c: {
                            type: 'string',
                            defaultValue: 3
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_PI',
                    blockType: 'reporter',
                    text: this.formatMessage('r_PI'),
                    arguments: {
                        a: {
                            type: 'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_rad_sin',
                    blockType: 'reporter',
                    text: this.formatMessage('r_rad_sin'),
                    arguments: {
                        a: {
                            type: 'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_rad_cos',
                    blockType: 'reporter',
                    text: this.formatMessage('r_rad_cos'),
                    arguments: {
                        a: {
                            type: 'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_rad_tan',
                    blockType: 'reporter',
                    text: this.formatMessage('r_rad_tan'),
                    arguments: {
                        a: {
                            type: 'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_rad_asin',
                    blockType: 'reporter',
                    text: this.formatMessage('r_rad_asin'),
                    arguments: {
                        a: {
                            type: 'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_rad_acos',
                    blockType: 'reporter',
                    text: this.formatMessage('r_rad_acos'),
                    arguments: {
                        a: {
                            type: 'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_rad_atan',
                    blockType: 'reporter',
                    text: this.formatMessage('r_rad_atan'),
                    arguments: {
                        a: {
                            type: 'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_sin_multiplication',
                    blockType: 'reporter',
                    text: '[a]*sin[b]',
                    arguments: {
                        a: {
                            type: 'string'
                        },
                        b: {
                            type: 'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_cos_multiplication',
                    blockType: 'reporter',
                    text: '[a]*cos[b]',
                    arguments: {
                        a: {
                            type: 'string'
                        },
                        b: {
                            type: 'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_tan_multiplication',
                    blockType: 'reporter',
                    text: '[a]*tan[b]',
                    arguments: {
                        a: {
                            type: 'string'
                        },
                        b: {
                            type: 'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_asin_division',
                    blockType: 'reporter',
                    text: 'asin[a]/[b]',
                    arguments: {
                        a: {
                            type: 'string'
                        },
                        b: {
                            type: 'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_acos_division',
                    blockType: 'reporter',
                    text: 'acos[a]/[b]',
                    arguments: {
                        a: {
                            type: 'string'
                        },
                        b: {
                            type: 'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_atan_division',
                    blockType: 'reporter',
                    text: 'atan[a]/[b]',
                    arguments: {
                        a: {
                            type: 'string'
                        },
                        b: {
                            type: 'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_to_one_hundred_eighty',
                    blockType: 'reporter',
                    text: this.formatMessage('r_to_one_hundred_eighty'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: 666
                        }
                    }
                },
                {
                    opcode: 'r_to_three_hundred_sixty',
                    blockType: 'reporter',
                    text: this.formatMessage('r_to_three_hundred_sixty'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: 666
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_add_to',
                    blockType: 'reporter',
                    text: this.formatMessage('r_add_to'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: 233
                        },
                        b: {
                            type: 'string',
                            defaultValue: 6
                        },
                        c: {
                            type: 'string',
                            defaultValue: 250
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                '---' + this.formatMessage('title_Array'),
                {
                    opcode: 'r_Array_sum',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_sum'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        }
                    }
                },
                {
                    opcode: 'r_Array_product',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_product'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_average',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_average'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_max',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_max'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        }
                    }
                },
                {
                    opcode: 'r_Array_min',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_min'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        }
                    }
                },
                {
                    opcode: 'b_Array_have_big_number',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_Array_have_big_number'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'b_Array_have_not_small_number',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_Array_have_not_small_number'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'b_Array_have_small_number',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_Array_have_small_number'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'b_Array_have_not_big_number',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_Array_have_not_big_number'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'b_Array_have',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_Array_have'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'b_Array_have_str',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_Array_have_str'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'b_Array_have_sth',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_Array_have_sth'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'b_Array_have_JSON',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_Array_have_JSON'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'b_Array_be_big_number',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_Array_be_big_number'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'b_Array_be_not_small_number',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_Array_be_not_small_number'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'b_Array_be_small_number',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_Array_be_small_number'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'b_Array_be_not_big_number',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_Array_be_not_big_number'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'b_Array_be',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_Array_be'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'b_Array_be_str',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_Array_be_str'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'b_Array_be_sth',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_Array_be_sth'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'b_Array_be_JSON',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_Array_be_JSON'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_remove_big_number',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_remove_big_number'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_remove_not_small_number',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_remove_not_small_number'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_remove_small_number',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_remove_small_number'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_remove_not_big_number',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_remove_not_big_number'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_remove',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_remove'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'r_Array_remove_str',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_remove_str'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'r_Array_remove_sth',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_remove_sth'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'r_Array_remove_JSON',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_remove_JSON'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'r_Array_remove_shift',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_remove_shift'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_remove_pop',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_remove_pop'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_remove_item',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_remove_item'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 0
                        }
                    }
                },
                {
                    opcode: 'r_Array_remove_items',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_remove_items'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: '[1,1,0,2]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_remove_item_to_item',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_remove_item_to_item'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 0
                        },
                        c: {
                            type: 'string',
                            defaultValue: 6
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_reserve_item',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_reserve_item'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 0
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_shift',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_shift'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_pop',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_pop'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_item',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_item'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: -1
                        }
                    }
                },
                {
                    opcode: 'r_Array_shift_JSON',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_shift_JSON'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_pop_JSON',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_pop_JSON'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_item_JSON',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_item_JSON'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: -1
                        }
                    }
                },
                {
                    opcode: 'r_Array_items',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_items'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: '[1,1,0,2]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_item_to_item',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_item_to_item'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: -8
                        },
                        c: {
                            type: 'string',
                            defaultValue: -2
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_unshift',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_unshift'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_push',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_push'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_insert',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_insert'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 114514
                        },
                        c: {
                            type: 'string',
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'r_Array_insert_indexes',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_insert'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 114514
                        },
                        c: {
                            type: 'string',
                            defaultValue: '[1,1,0,2]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_insert_index_to_index',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_insert_index_to_index'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 114514
                        },
                        c: {
                            type: 'string',
                            defaultValue: 1
                        },
                        d: {
                            type: 'string',
                            defaultValue: 6
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_unshift_str',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_unshift_str'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_push_str',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_push_str'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_insert_str',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_insert_str'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 114514
                        },
                        c: {
                            type: 'string',
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'r_Array_insert_str_indexes',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_insert_str'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 114514
                        },
                        c: {
                            type: 'string',
                            defaultValue: '[1,1,0,2]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_insert_str_index_to_index',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_insert_str_index_to_index'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 114514
                        },
                        c: {
                            type: 'string',
                            defaultValue: 1
                        },
                        d: {
                            type: 'string',
                            defaultValue: 6
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_unshift_JSON',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_unshift_JSON'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_push_JSON',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_push_JSON'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_insert_JSON',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_insert_JSON'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 114514
                        },
                        c: {
                            type: 'string',
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'r_Array_insert_JSON_indexes',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_insert_JSON'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 114514
                        },
                        c: {
                            type: 'string',
                            defaultValue: '[1,1,0,2]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_insert_JSON_index_to_index',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_insert_JSON_index_to_index'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 114514
                        },
                        c: {
                            type: 'string',
                            defaultValue: 1
                        },
                        d: {
                            type: 'string',
                            defaultValue: 6
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_move',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_move'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        },
                        c: {
                            type: 'string',
                            defaultValue: 6
                        }
                    }
                },
                {
                    opcode: 'r_Array_interchange',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_interchange'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        },
                        c: {
                            type: 'string',
                            defaultValue: 6
                        }
                    }
                },
                {
                    opcode: 'r_Array_replace',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_replace'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        },
                        c: {
                            type: 'string',
                            defaultValue: 114514
                        }
                    }
                },
                {
                    opcode: 'r_Array_replace_indexes',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_replace_indexes'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: '[1,1,0,2]'
                        },
                        c: {
                            type: 'string',
                            defaultValue: 114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_replace_index_to_index',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_replace_index_to_index'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        },
                        c: {
                            type: 'string',
                            defaultValue: 6
                        },
                        d: {
                            type: 'string',
                            defaultValue: 114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_replace_str',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_replace_str'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        },
                        c: {
                            type: 'string',
                            defaultValue: 114514
                        }
                    }
                },
                {
                    opcode: 'r_Array_replace_indexes_str',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_replace_indexes_str'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: '[1,1,0,2]'
                        },
                        c: {
                            type: 'string',
                            defaultValue: 114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_replace_index_to_index_str',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_replace_index_to_index_str'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        },
                        c: {
                            type: 'string',
                            defaultValue: 6
                        },
                        d: {
                            type: 'string',
                            defaultValue: 114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_replace_JSON',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_replace_JSON'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        },
                        c: {
                            type: 'string',
                            defaultValue: 114514
                        }
                    }
                },
                {
                    opcode: 'r_Array_replace_indexes_JSON',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_replace_indexes_JSON'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: '[1,1,0,2]'
                        },
                        c: {
                            type: 'string',
                            defaultValue: 114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_replace_index_to_index_JSON',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_replace_index_to_index_JSON'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        },
                        c: {
                            type: 'string',
                            defaultValue: 6
                        },
                        d: {
                            type: 'string',
                            defaultValue: 114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_plus_index',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_plus_index'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        },
                        c: {
                            type: 'string',
                            defaultValue: 114514
                        }
                    }
                },
                {
                    opcode: 'r_Array_plus_indexes',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_plus_index'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: '[1,1,0,2]'
                        },
                        c: {
                            type: 'string',
                            defaultValue: 114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_plus_index_to_index',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_plus_index_to_index'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        },
                        c: {
                            type: 'string',
                            defaultValue: 6
                        },
                        d: {
                            type: 'string',
                            defaultValue: 114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_plus',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_plus'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 114514
                        }
                    }
                },
                {
                    opcode: 'r_Array_index',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_index'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'r_Array_index_str',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_index_str'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'r_Array_index_JSON',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_index_JSON'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'r_Array_lastindex',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_lastindex'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_lastindex_str',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_lastindex_str'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_lastindex_JSON',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_lastindex_JSON'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_allindex',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_allindex'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_allindex_str',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_allindex_str'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_allindex_JSON',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_allindex_JSON'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_findIndex_big_number',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_findIndex_big_number'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_findIndex_not_small_number',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_findIndex_not_small_number'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_findIndex_small_number',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_findIndex_small_number'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_findIndex_not_big_number',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_findIndex_not_big_number'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_count_big_number',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_count_big_number'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_count_not_small_number',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_count_not_small_number'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_count_small_number',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_count_small_number'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_count_not_big_number',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_count_not_big_number'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_count',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_count'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_count_str',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_count_str'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_count_sth',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_count_sth'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_count_JSON',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_count_JSON'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_sort_naturalOrder',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_sort_naturalOrder'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        }
                    }
                },
                {
                    opcode: 'r_Array_sort_reverseOrder',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_sort_reverseOrder'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        }
                    }
                },
                {
                    opcode: 'r_Array_reverse',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_reverse'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'b_Array_clear',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_Array_clear'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Array_length',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_length'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[]'
                        }
                    }
                },
                {
                    opcode: 'b_isArray',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_isArray'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                '---' + this.formatMessage('title_Object'),
                {
                    opcode: 'r_Object_value',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Object_value'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '{"name":"Shawn","job":"CCW creator"}'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 'job'
                        }
                    }
                },
                {
                    opcode: 'r_Object_value_JSON',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Object_value_JSON'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '{"name":"Shawn","job":"CCW creator"}'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 'job'
                        }
                    }
                },
                {
                    opcode: 'r_Object_key',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Object_key'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '{"name":"Shawn","id":1701001}'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1701001
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Object_lastkey',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Object_lastkey'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '{"name":"Shawn","id":1701001}'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1701001
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Object_allkey',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Object_allkey'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '{"name":"Shawn","id":1701001}'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1701001
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Object_key_str',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Object_key_str'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '{"name":"Shawn","job":"CCW creator"}'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 'CCW creator'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Object_lastkey_str',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Object_lastkey_str'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '{"name":"Shawn","job":"CCW creator"}'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 'CCW creator'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Object_allkey_str',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Object_allkey_str'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '{"name":"Shawn","job":"CCW creator"}'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 'CCW creator'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Object_key_JSON',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Object_key_JSON'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '{"name":"Shawn","id":1701001}'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1701001
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Object_lastkey_JSON',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Object_lastkey_JSON'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '{"name":"Shawn","id":1701001}'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1701001
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Object_allkey_JSON',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Object_allkey_JSON'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '{"name":"Shawn","id":1701001}'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1701001
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Object_put_key',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Object_put_key'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '{"name":"Shawn"}'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 'id'
                        },
                        c: {
                            type: 'string',
                            defaultValue: 1701001
                        }
                    }
                },
                {
                    opcode: 'r_Object_put_key_str',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Object_put_key_str'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '{"name":"Shawn"}'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 'job'
                        },
                        c: {
                            type: 'string',
                            defaultValue: '"CCW creator"'
                        }
                    }
                },
                {
                    opcode: 'r_Object_put_key_JSON',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Object_put_key_JSON'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '{"name":"Shawn"}'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 'id'
                        },
                        c: {
                            type: 'string',
                            defaultValue: 1701001
                        }
                    }
                },
                {
                    opcode: 'r_Object_plus_key',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Object_plus_key'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '{"sharpness":5,"knockback":2}'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 'knockback'
                        },
                        c: {
                            type: 'string',
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'r_Object_plus',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Object_plus'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '{"sharpness":5,"knockback":2}'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 1
                        }
                    }
                },
                {
                    opcode: 'r_Object_putAll',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Object_putAll'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '{"job":"CCW creator"}'
                        },
                        b: {
                            type: 'string',
                            defaultValue: '{"name":"Shawn","job":"CCW creater"}'
                        }
                    }
                },
                {
                    opcode: 'r_Object_plus_Object',
                    blockType: 'reporter',
                    text: '[a]+[b]',
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '{"sharpness":5,"knockback":2}'
                        },
                        b: {
                            type: 'string',
                            defaultValue: '{"knockback":1,"fire aspect":2,"looting":3}'
                        }
                    }
                },
                {
                    opcode: 'r_Object_remove',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Object_remove'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '{"name":"Shawn","job":"CCW creater"}'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 'job'
                        }
                    }
                },
                {
                    opcode: 'b_Object_clear',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_Object_clear'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '{}'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'r_Object_length',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Object_length'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '{}'
                        }
                    }
                },
                {
                    opcode: 'b_isObject',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_isObject'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '{}'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                '---JSON',
                {
                    opcode: 'b_JSON_equal',
                    blockType: 'Boolean',
                    text: '[a]=[b]',
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,2]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: '[2,1]'
                        }
                    },
                    hideFromPalette: 1
                },
                {
                    opcode: 'b_JSON_strictly_equal',
                    blockType: 'Boolean',
                    text: '[a]===[b]',
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,2]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: '[2,1]'
                        }
                    },
                    hideFromPalette: 1
                }
            ],
            menus: {
                boolean: {
                    acceptReporters: true,
                    items: ['', 'true', 'false']
                }
            }
        }
    }

    docs() {
        let a = document.createElement('a');
        a.href = "https://learn.ccw.site/article/306d54d0-b83a-43f3-ba84-bd41a7183239";
        a.rel = "noopener noreferrer";
        a.target = "_blank";
        a.click();
    }
    findExtConfigComment() {
        const stage = this.runtime.getTargetForStage();
        if (!stage || !stage.comments) return undefined;
        return stage.comments[EXT_CONFIG_COMMENT_ID];
    }
    getAllExtConfig() {
        const comment = this.findExtConfigComment();
        if (!comment) return undefined;
        const lines = comment.text.split('\n');
        if (lines.length === 0) {
            console.warn(
                `${simple_reporter_extensionId}: Extension config comment does not contain valid line.`,
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
            console.warn(`${simple_reporter_extensionId}: Config comment has invalid JSON`, e);
            return undefined;
        }
    }
    parseExtConfig() {
        let config = this.getAllExtConfig();
        if (!config) return false;
        config = config[simple_reporter_extensionId];
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
        config[simple_reporter_extensionId] = this.generateExtConfig();

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
                EXT_CONFIG_COMMENT_ID,
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
    ToBoolean(a) {
        return ![0, false, '', '0', 'false', 'undefined', 'null'].includes(a)
    }
    r_reporter(args) {
        return args.a
    }
    r_boolean(args) {
        return args.a
    }
    b_ToBoolean(args) {
        return this.ToBoolean(args.a)
    }
    r_if(args) {
        return args.a ? args.b : args.c
    }
    r_if_ToBoolean(args) {
        return [0, false, '', '0', 'false', 'undefined', 'null'].includes(args.a) ? args.c : args.b
    }
    b_and(args) {
        return args.a && args.b
    }
    b_or(args) {
        return args.a || args.b
    }
    b_not(args) {
        return !args.a
    }
    b_and_ToBoolean(args) {
        return this.ToBoolean(args.a) && this.ToBoolean(args.b)
    }
    b_or_ToBoolean(args) {
        return this.ToBoolean(args.a) || this.ToBoolean(args.b)
    }
    b_not_ToBoolean(args) {
        return [0, false, '', '0', 'false', 'undefined', 'null'].includes(args.a)
    }
    r_join(args) {
        return args.a + args.b + args.c
    }
    r_remove(args) {
        return args.a.replaceAll(args.b, '')
    }
    r_interchange(args) {
        const list = String(args.a).split(args.b);
        let a = list[0].replaceAll(args.c, args.b)
        for (let i = 1; i < list.length; i++) {
            a = a + args.c + list[i].replaceAll(args.c, args.b)
        }
        return a
    }
    r_default(args) {
        if (['undefined', 'null', ''].includes(args.a)) return args.b
        return args.a
    }
    b_defined(args) {
        return !['undefined', 'null', ''].includes(args.a)
    }
    b_undefined(args) {
        return ['undefined', 'null', ''].includes(args.a)
    }
    b_not_strictly_equal(args) {
        return args.a !== args.b
    }
    b_not_contain(args) {
        return !args.a.includes(args.b)
    }
    b_not_equal(args) {
        return args.a != args.b
    }
    r_addition(args) {
        return Number(args.a) + Number(args.b) + Number(args.c)
    }
    r_addition_multiplication(args) {
        return (Number(args.a) + Number(args.b)) * args.c
    }
    r_nearest_multiple(args) {
        return Math.round(args.a / args.b) * args.b
    }
    r_round(args) {
        return (Number(args.a)).toFixed(args.b)
    }
    r_rint_from_to(args) {
        let a = Number(args.a);
        const b = args.b - args.c
        for (let i = 0; i <= b; i++) {
            a = Number(a.toFixed(args.b - i))
        }
        return a
    }
    r_rint_to_times(args) {
        let a = Number(args.a)
        for (let i = 0; i <= args.c; i++) {
            a = Number(a.toFixed(args.b - i))
        }
        return a
    }
    r_rint_times_to(args) {
        let a = Number(args.a);
        const b = Number(args.b) + Number(args.c)
        for (let i = 0; i <= args.b; i++) {
            a = Number(a.toFixed(b - i))
        }
        return a
    }
    r_PI(args) {
        return Math.PI.toFixed(args.a)
    }
    r_rad_sin(args) {
        return Math.sin(args.a)
    }
    r_rad_cos(args) {
        return Math.cos(args.a)
    }
    r_rad_tan(args) {
        return Math.tan(args.a)
    }
    r_rad_asin(args) {
        return Math.asin(args.a)
    }
    r_rad_acos(args) {
        return Math.acos(args.a)
    }
    r_rad_atan(args) {
        return Math.atan(args.a)
    }
    r_sin_multiplication(args) {
        return Math.sin(args.b) * Math.PI / 180 * args.a
    }
    r_cos_multiplication(args) {
        return Math.cos(args.b) * Math.PI / 180 * args.a
    }
    r_tan_multiplication(args) {
        return Math.tan(args.b) * Math.PI / 180 * args.a
    }
    r_asin_division(args) {
        return Math.asin(args.a / args.b) / Math.PI * 180
    }
    r_acos_division(args) {
        return Math.acos(args.a / args.b) / Math.PI * 180
    }
    r_atan_division(args) {
        return Math.atan(args.a / args.b) / Math.PI * 180
    }
    r_to_one_hundred_eighty(args) {
        const a = args.a % 360
        return a + (a > -180 ? (a > 180 ? -360 : 0) : 360)
    }
    r_to_three_hundred_sixty(args) {
        let a = Number(args.a)
        while (a < 0) {
            a += 360
        }
        return a % 360
    }
    r_add_to(args) {
        const a = Number(args.a);
        const b = Number(args.b);
        const c = args.c;
        let list = [];
        let i = a + b
        while (i < c) {
            list.push(i)
            i += b
        }
        return list
    }
    r_Array_sum(args) {
        return JSON.parse(args.a).reduce((a, b) => a + b)
    }
    r_Array_product(args) {
        return JSON.parse(args.a).reduce((a, b) => a * b)
    }
    r_Array_average(args) {
        const list = JSON.parse(args.a);
        const sum = list.reduce((a, b) => a + b);
        return sum / list.length
    }
    r_Array_max(args) {
        return Math.max(...(JSON.parse(args.a)))
    }
    r_Array_min(args) {
        return Math.min(...(JSON.parse(args.a)))
    }
    b_Array_have_big_number(args) {
        return JSON.parse(args.a).some(i => i > args.b)
    }
    b_Array_have_not_small_number(args) {
        return JSON.parse(args.a).some(i => i >= args.b)
    }
    b_Array_have_small_number(args) {
        return JSON.parse(args.a).some(i => i < args.b)
    }
    b_Array_have_not_big_number(args) {
        return JSON.parse(args.a).some(i => i <= args.b)
    }
    b_Array_have(args) {
        return JSON.parse(args.a).includes(Number(args.b))
    }
    b_Array_have_str(args) {
        return JSON.parse(args.a).includes(args.b)
    }
    b_Array_have_sth(args) {
        return JSON.parse(args.a).some(i => i == args.b)
    }
    b_Array_have_JSON(args) {
        return JSON.parse(args.a).some(i => JSON.stringify(i) == args.b)
    }
    b_Array_be_big_number(args) {
        return JSON.parse(args.a).every(i => i > args.b)
    }
    b_Array_be_not_small_number(args) {
        return JSON.parse(args.a).every(i => i >= args.b)
    }
    b_Array_be_small_number(args) {
        return JSON.parse(args.a).every(i => i < args.b)
    }
    b_Array_be_not_big_number(args) {
        return JSON.parse(args.a).every(i => i <= args.b)
    }
    b_Array_be(args) {
        return JSON.parse(args.a).every(i => i === Number(args.b))
    }
    b_Array_be_str(args) {
        return JSON.parse(args.a).every(i => i === args.b)
    }
    b_Array_be_sth(args) {
        return JSON.parse(args.a).every(i => i == args.b)
    }
    b_Array_be_JSON(args) {
        return JSON.parse(args.a).every(i => JSON.stringify(i) == args.b)
    }
    r_Array_remove_big_number(args) {
        let na = []
        JSON.parse(args.a).forEach(t => {
            if (t <= args.b) na.push(t)
        });
        return JSON.stringify(na)
    }
    r_Array_remove_not_small_number(args) {
        let na = []
        JSON.parse(args.a).forEach(t => {
            if (t < args.b) na.push(t)
        });
        return JSON.stringify(na)
    }
    r_Array_remove_small_number(args) {
        let na = []
        JSON.parse(args.a).forEach(t => {
            if (t >= args.b) na.push(t)
        });
        return JSON.stringify(na)
    }
    r_Array_remove_not_big_number(args) {
        let na = []
        JSON.parse(args.a).forEach(t => {
            if (t > args.b) na.push(t)
        });
        return JSON.stringify(na)
    }
    r_Array_remove(args) {
        const b = Number(args.b)
        let na = []
        JSON.parse(args.a).forEach(t => {
            if (t !== b) na.push(t)
        });
        return JSON.stringify(na)
    }
    r_Array_remove_str(args) {
        let na = []
        JSON.parse(args.a).forEach(t => {
            if (t !== args.b) na.push(t)
        });
        return JSON.stringify(na)
    }
    r_Array_remove_sth(args) {
        let na = []
        JSON.parse(args.a).forEach(t => {
            if (t != args.b) na.push(t)
        });
        return JSON.stringify(na)
    }
    r_Array_remove_JSON(args) {
        let na = []
        JSON.parse(args.a).forEach(t => {
            if (JSON.stringify(t) != args.b) na.push(t)
        });
        return JSON.stringify(na)
    }
    r_Array_remove_shift(args) {
        let a = JSON.parse(args.a);
        a.shift()
        return JSON.stringify(a)
    }
    r_Array_remove_pop(args) {
        let a = JSON.parse(args.a);
        a.pop()
        return JSON.stringify(a)
    }
    r_Array_remove_item(args) {
        let a = JSON.parse(args.a);
        a.splice(Number(args.b), 1)
        return JSON.stringify(a)
    }
    r_Array_remove_items(args) {
        let a = JSON.parse(args.a)
        JSON.parse(args.b).sort(function (a, b) { return b - a }).forEach(t => {
            a.splice(Number(t), 1)
        })
        return JSON.stringify(a)
    }
    r_Array_remove_item_to_item(args) {
        let a = JSON.parse(args.a);
        a.splice(Number(args.b), args.c - args.b)
        return JSON.stringify(a)
    }
    r_Array_reserve_item(args) {
        return JSON.stringify(JSON.parse(args.a).splice(Number(args.b), 1))
    }
    r_Array_shift(args) {
        return JSON.parse(args.a).shift()
    }
    r_Array_pop(args) {
        return JSON.parse(args.a).pop()
    }
    r_Array_item(args) {
        return JSON.parse(args.a).at(args.b)
    }
    r_Array_shift_JSON(args) {
        return JSON.stringify(JSON.parse(args.a).shift())
    }
    r_Array_pop_JSON(args) {
        return JSON.stringify(JSON.parse(args.a).pop())
    }
    r_Array_item_JSON(args) {
        return JSON.stringify(JSON.parse(args.a).at(args.b))
    }
    r_Array_items(args) {
        const a = JSON.parse(args.a);
        let c = []
        JSON.parse(args.b).forEach(t => {
            c.push(a.at(t))
        })
        return JSON.stringify(c)
    }
    r_Array_item_to_item(args) {
        return JSON.stringify(JSON.parse(args.a).slice(args.b, args.c))
    }
    r_Array_unshift(args) {
        let a = JSON.parse(args.a);
        a.unshift(Number(args.b))
        return JSON.stringify(a)
    }
    r_Array_push(args) {
        let a = JSON.parse(args.a);
        a.push(Number(args.b))
        return JSON.stringify(a)
    }
    r_Array_insert(args) {
        let a = JSON.parse(args.a);
        a.splice(args.c, 0, Number(args.b))
        return JSON.stringify(a)
    }
    r_Array_insert_indexes(args) {
        let a = JSON.parse(args.a);
        const b = Number(args.b)
        JSON.parse(args.c).sort(function (a, b) { return b - a }).forEach(t => {
            a.splice(t, 0, b)
        })
        return JSON.stringify(a)
    }
    r_Array_insert_index_to_index(args) {
        let a = JSON.parse(args.a);
        const b = Number(args.b);
        const c = Number(args.c)
        for (let i = 0; i < args.d - c; i++) {
            a.splice(c + i, 0, b)
        }
        return JSON.stringify(a)
    }
    r_Array_unshift_str(args) {
        let a = JSON.parse(args.a);
        a.unshift(args.b)
        return JSON.stringify(a)
    }
    r_Array_push_str(args) {
        let a = JSON.parse(args.a);
        a.push(args.b)
        return JSON.stringify(a)
    }
    r_Array_insert_str(args) {
        let a = JSON.parse(args.a);
        a.splice(args.c, 0, args.b)
        return JSON.stringify(a)
    }
    r_Array_insert_str_indexes(args) {
        let a = JSON.parse(args.a)
        JSON.parse(args.c).sort(function (a, b) { return b - a }).forEach(t => {
            a.splice(t, 0, args.b)
        })
        return JSON.stringify(a)
    }
    r_Array_insert_str_index_to_index(args) {
        let a = JSON.parse(args.a);
        const c = Number(args.c)
        for (let i = 0; i < args.d - c; i++) {
            a.splice(c + i, 0, args.b)
        }
        return JSON.stringify(a)
    }
    r_Array_unshift_JSON(args) {
        let a = JSON.parse(args.a);
        a.unshift(JSON.parse(args.b))
        return JSON.stringify(a)
    }
    r_Array_push_JSON(args) {
        let a = JSON.parse(args.a);
        a.push(JSON.parse(args.b))
        return JSON.stringify(a)
    }
    r_Array_insert_JSON(args) {
        let a = JSON.parse(args.a);
        a.splice(args.c, 0, JSON.parse(args.b))
        return JSON.stringify(a)
    }
    r_Array_insert_JSON_indexes(args) {
        let a = JSON.parse(args.a);
        const b = JSON.parse(args.b)
        JSON.parse(args.c).sort(function (a, b) { return b - a }).forEach(t => {
            a.splice(t, 0, b)
        })
        return JSON.stringify(a)
    }
    r_Array_insert_JSON_index_to_index(args) {
        let a = JSON.parse(args.a);
        const b = JSON.parse(args.b);
        const c = Number(args.c)
        for (let i = 0; i < args.d - c; i++) {
            a.splice(c + i, 0, b)
        }
        return JSON.stringify(a)
    }
    r_Array_move(args) {
        let a = JSON.parse(args.a);
        const b = a[args.b]
        if (args.b > args.c) {
            a.splice(args.b, 1);
            a.splice(args.c, 0, b)
        }
        else {
            a.splice(args.c, 0, b);
            a.splice(args.b, 1)
        }
        return JSON.stringify(a)
    }
    r_Array_interchange(args) {
        let a = JSON.parse(args.a);
        const b = a[args.b];
        a[args.b] = a[args.c];
        a[args.c] = b
        return JSON.stringify(a)
    }
    r_Array_replace(args) {
        let a = JSON.parse(args.a);
        const b = Number(args.b);
        a.fill(Number(args.c), b, b + 1)
        return JSON.stringify(a)
    }
    r_Array_replace_indexes(args) {
        let a = JSON.parse(args.a);
        const c = Number(args.c)
        JSON.parse(args.b).forEach(t => {
            a.fill(c, t, t + 1)
        })
        return JSON.stringify(a)
    }
    r_Array_replace_index_to_index(args) {
        let a = JSON.parse(args.a);
        a.fill(Number(args.d), args.b, args.c)
        return JSON.stringify(a)
    }
    r_Array_replace_str(args) {
        let a = JSON.parse(args.a);
        const b = Number(args.b);
        a.fill(args.c, b, b + 1)
        return JSON.stringify(a)
    }
    r_Array_replace_indexes_str(args) {
        let a = JSON.parse(args.a)
        JSON.parse(args.b).forEach(t => {
            a.fill(args.c, t, t + 1)
        })
        return JSON.stringify(a)
    }
    r_Array_replace_index_to_index_str(args) {
        let a = JSON.parse(args.a);
        a.fill(args.d, args.b, args.c)
        return JSON.stringify(a)
    }
    r_Array_replace_JSON(args) {
        let a = JSON.parse(args.a);
        const b = Number(args.b);
        a.fill(JSON.parse(args.c), b, b + 1)
        return JSON.stringify(a)
    }
    r_Array_replace_indexes_JSON(args) {
        let a = JSON.parse(args.a);
        const c = JSON.parse(args.c)
        JSON.parse(args.b).forEach(t => {
            a.fill(c, t, t + 1)
        })
        return JSON.stringify(a)
    }
    r_Array_replace_index_to_index_JSON(args) {
        let a = JSON.parse(args.a);
        a.fill(JSON.parse(args.d), args.b, args.c)
        return JSON.stringify(a)
    }
    r_Array_plus_index(args) {
        let a = JSON.parse(args.a);
        a[args.b] += Number(args.c)
        return JSON.stringify(a)
    }
    r_Array_plus_indexes(args) {
        let a = JSON.parse(args.a);
        const c = Number(args.c)
        JSON.parse(args.b).forEach(t => {
            a[t] += c
        })
        return JSON.stringify(a)
    }
    r_Array_plus_index_to_index(args) {
        let a = JSON.parse(args.a);
        const b = Number(args.b);
        const d = Number(args.d)
        for (let i = 0; i < args.c - b; i++) {
            a[b + i] += d
        }
        return JSON.stringify(a)
    }
    r_Array_plus(args) {
        const b = Number(args.b)
        return JSON.stringify(JSON.parse(args.a).map(t => t + b))
    }
    r_Array_minus(args) {
        return JSON.stringify(JSON.parse(args.a).map(t => t - args.b))
    }
    r_Array_index(args) {
        return JSON.parse(args.a).indexOf(Number(args.b))
    }
    r_Array_index_str(args) {
        return JSON.parse(args.a).indexOf(args.b)
    }
    r_Array_index_JSON(args) {
        return JSON.parse(args.a).indexOf(JSON.parse(args.b))
    }
    r_Array_lastindex(args) {
        return JSON.parse(args.a).lastIndexOf(Number(args.b))
    }
    r_Array_lastindex_str(args) {
        return JSON.parse(args.a).lastIndexOf(args.b)
    }
    r_Array_lastindex_JSON(args) {
        return JSON.parse(args.a).lastIndexOf(JSON.parse(args.b))
    }
    r_Array_allindex(args) {
        const b = Number(args.b);
        let idx = []
        JSON.parse(args.a).forEach((t, i) => {
            if (t === b) idx.push(i)
        })
        return JSON.stringify(idx)
    }
    r_Array_allindex_str(args) {
        let idx = []
        JSON.parse(args.a).forEach((t, i) => {
            if (t === args.b) idx.push(i)
        })
        return JSON.stringify(idx)
    }
    r_Array_allindex_JSON(args) {
        let idx = []
        JSON.parse(args.a).forEach((t, i) => {
            if (JSON.stringify(t) == args.b) idx.push(i)
        })
        return JSON.stringify(idx)
    }
    r_Array_findIndex_big_number(args) {
        return JSON.parse(args.a).findIndex(i => i > args.b)
    }
    r_Array_findIndex_not_small_number(args) {
        return JSON.parse(args.a).findIndex(i => i >= args.b)
    }
    r_Array_findIndex_small_number(args) {
        return JSON.parse(args.a).findIndex(i => i < args.b)
    }
    r_Array_findIndex_not_big_number(args) {
        return JSON.parse(args.a).findIndex(i => i <= args.b)
    }
    r_Array_count_big_number(args) {
        const b = Number(args.b);
        let c = 0
        JSON.parse(args.a).forEach(t => {
            if (t > b) c += 1
        })
        return c
    }
    r_Array_count_not_small_number(args) {
        const b = Number(args.b);
        let c = 0
        JSON.parse(args.a).forEach(t => {
            if (t >= b) c += 1
        })
        return c
    }
    r_Array_count_small_number(args) {
        const b = Number(args.b);
        let c = 0
        JSON.parse(args.a).forEach(t => {
            if (t < b) c += 1
        })
        return c
    }
    r_Array_count_not_big_number(args) {
        const b = Number(args.b);
        let c = 0
        JSON.parse(args.a).forEach(t => {
            if (t <= b) c += 1
        })
        return c
    }
    r_Array_count(args) {
        const b = Number(args.b);
        let c = 0
        JSON.parse(args.a).forEach(t => {
            if (t === b) c += 1
        })
        return c
    }
    r_Array_count_str(args) {
        let c = 0
        JSON.parse(args.a).forEach(t => {
            if (t === args.b) c += 1
        })
        return c
    }
    r_Array_count_sth(args) {
        let c = 0
        JSON.parse(args.a).forEach(t => {
            if (t == args.b) c += 1
        })
        return c
    }
    r_Array_count_JSON(args) {
        let c = 0
        JSON.parse(args.a).forEach(t => {
            if (JSON.stringify(t) == args.b) c += 1
        })
        return c
    }
    r_Array_sort_naturalOrder(args) {
        return JSON.stringify(JSON.parse(args.a).sort(Scratch.Cast.compare))
    }
    r_Array_sort_reverseOrder(args) {
        return JSON.stringify(JSON.parse(args.a).sort(Scratch.Cast.compare).reverse())
    }
    r_Array_reverse(args) {
        return JSON.stringify(JSON.parse(args.a).reverse())
    }
    b_Array_clear(args) {
        return args.a == '[]'
    }
    r_Array_length(args) {
        return JSON.parse(args.a).length
    }
    b_isArray(args) {
        return Array.isArray(JSON.parse(args.a))
    }
    r_Object_value(args) {
        return JSON.parse(args.a)[args.b]
    }
    r_Object_value_JSON(args) {
        return JSON.stringify(JSON.parse(args.a)[args.b])
    }
    r_Object_key(args) {
        const a = JSON.parse(args.a);
        const keys = Object.keys(a);
        const values = Object.values(a)
        return keys[values.indexOf(Number(args.b))]
    }
    r_Object_lastkey(args) {
        const a = JSON.parse(args.a);
        const keys = Object.keys(a);
        const values = Object.values(a)
        return keys[values.lastIndexOf(Number(args.b))]
    }
    r_Object_allkey(args) {
        const a = JSON.parse(args.a);
        const b = Number(args.b);
        const keys = Object.keys(a);
        let key = []
        Object.values(a).forEach((t, i) => {
            if (t === b) key.push(keys[i])
        })
        return JSON.stringify(key)
    }
    r_Object_key_str(args) {
        const a = JSON.parse(args.a);
        const keys = Object.keys(a);
        const values = Object.values(a)
        return keys[values.indexOf(args.b)]
    }
    r_Object_lastkey_str(args) {
        const a = JSON.parse(args.a);
        const keys = Object.keys(a);
        const values = Object.values(a)
        return keys[values.lastIndexOf(args.b)]
    }
    r_Object_allkey_str(args) {
        const a = JSON.parse(args.a);
        const keys = Object.keys(a);
        let key = []
        Object.values(a).forEach((t, i) => {
            if (t === args.b) key.push(keys[i])
        })
        return JSON.stringify(key)
    }
    r_Object_key_JSON(args) {
        const a = JSON.parse(args.a);
        const keys = Object.keys(a);
        const values = Object.values(a)
        return keys[values.indexOf(JSON.parse(args.b))]
    }
    r_Object_lastkey_JSON(args) {
        const a = JSON.parse(args.a);
        const keys = Object.keys(a);
        const values = Object.values(a)
        return keys[values.lastIndexOf(JSON.parse(args.b))]
    }
    r_Object_allkey_JSON(args) {
        const a = JSON.parse(args.a);
        const b = JSON.parse(args.b);
        const keys = Object.keys(a);
        let key = []
        Object.values(a).forEach((t, i) => {
            if (t === b) key.push(keys[i])
        })
        return JSON.stringify(key)
    }
    r_Object_put_key(args) {
        let a = JSON.parse(args.a);
        a[args.b] = Number(args.c)
        return JSON.stringify(a)
    }
    r_Object_put_key_str(args) {
        let a = JSON.parse(args.a);
        a[args.b] = args.c
        return JSON.stringify(a)
    }
    r_Object_put_key_JSON(args) {
        let a = JSON.parse(args.a);
        a[args.b] = JSON.parse(args.c)
        return JSON.stringify(a)
    }
    r_Object_plus_key(args) {
        let a = JSON.parse(args.a);
        a[args.b] += Number(args.c)
        return JSON.stringify(a)
    }
    r_Object_plus(args) {
        let a = JSON.parse(args.a);
        const b = Number(args.b)
        Object.keys(a).forEach(t => {
            a[t] += b
        })
        return JSON.stringify(a)
    }
    r_Object_putAll(args) {
        return JSON.stringify(Object.assign(JSON.parse(args.b), JSON.parse(args.a)))
    }
    r_Object_plus_Object(args) {
        let a = JSON.parse(args.a);
        const b = JSON.parse(args.b)
        Object.keys(b).forEach(t => {
            if (a[t] !== undefined) {
                a[t] += b[t]
            }
            else {
                a[t] = b[t]
            }
        })
        return JSON.stringify(a)
    }
    r_Object_remove(args) {
        let a = JSON.parse(args.a);
        delete a[args.b]
        return JSON.stringify(a)
    }
    b_Object_clear(args) {
        return args.a == '{}'
    }
    r_Object_length(args) {
        return Object.keys(JSON.parse(args.a)).length
    }
    b_isObject(args) {
        return Object.isObject(JSON.parse(args.a))
    }
    b_JSON_equal(args) {
        return
    }
    b_JSON_strictly_equal(args) {
        return
    }
}

window.tempExt = {
    Extension: simple_reporter,
    info: {
        name: "simple_reporter.name",
        description: "simple_reporter.descp",
        extensionId: simple_reporter_extensionId,
        iconURL: simple_reporter_picture,
        insetIconURL: simple_reporter_icon,
        featured: true,
        disabled: false,
        collaborator: "bilioicik @ CCW",
        collaboratorURL: "https://www.ccw.site/student/6218cd094daafc57cebfc1d3"
    },
    l10n: {
        "zh-cn": {
            "simple_reporter.name": "绿色通行",
            "simple_reporter.descp": "返回值积木"
        },
        en: {
            "simple_reporter.name": "Green for Go",
            "simple_reporter.descp": "reporter block"
        }
    }
};