const simple_reporter_picture = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI2MDAiIGhlaWdodD0iMzc1IiB2aWV3Qm94PSIwLDAsNjAwLDM3NSI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGN4PSIzNDcuMDg1OTQiIGN5PSIyNDUuMSIgcj0iMTE2LjQ4MTQ4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzU5YzA1OSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzU5YzA1OSIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48cmFkaWFsR3JhZGllbnQgY3g9IjMwMCIgY3k9IjEyOS45IiByPSIxODcuNjQ4MTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNTljMDU5Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNTljMDU5IiBzdG9wLW9wYWNpdHk9IjAiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDM3NXYtMzc1aDYwMHYzNzV6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yMzAuNjA0NDYsMjA1LjFNMjcwLjYwNDQ2LDIwNS4xaDE1Mi45NjI5NmMyMi4wOTEzOSwwIDQwLDE3LjkwODYxIDQwLDQwYzAsMjIuMDkxMzkgLTE3LjkwODYxLDQwIC00MCw0MGgtMTUyLjk2Mjk2Yy0yMi4wOTEzOSwwIC00MCwtMTcuOTA4NjEgLTQwLC00MGMwLC0yMi4wOTEzOSAxNy45MDg2MSwtNDAgNDAsLTQweiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ1cmwoI2NvbG9yLTEpIiBzdHJva2Utd2lkdGg9IjIwIi8+PHBhdGggZD0iTTIzMC42MDQ0NiwyMDUuMU0yNzAuNjA0NDYsMjA1LjFoMTUyLjk2Mjk2YzIyLjA5MTM5LDAgNDAsMTcuOTA4NjEgNDAsNDBjMCwyMi4wOTEzOSAtMTcuOTA4NjEsNDAgLTQwLDQwaC0xNTIuOTYyOTZjLTIyLjA5MTM5LDAgLTQwLC0xNy45MDg2MSAtNDAsLTQwYzAsLTIyLjA5MTM5IDE3LjkwODYxLC00MCA0MCwtNDB6IiBmaWxsPSIjNTljMDU5IiBzdHJva2U9IiM0NzlhNDciIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik0xMTIuMzUxODUsODkuOU0xNTIuMzUxODUsODkuOWgyOTUuMjk2M2w0MCw0MGwtNDAsNDBoLTI5NS4yOTYzbC00MCwtNDB6IiBmaWxsPSJub25lIiBzdHJva2U9InVybCgjY29sb3ItMikiIHN0cm9rZS13aWR0aD0iMjAiLz48cGF0aCBkPSJNMTEyLjM1MTg1LDg5LjlNMTUyLjM1MTg1LDg5LjloMjk1LjI5NjNsNDAsNDBsLTQwLDQwaC0yOTUuMjk2M2wtNDAsLTQweiIgZmlsbD0iIzU5YzA1OSIgc3Ryb2tlPSIjNDc5YTQ3IiBzdHJva2Utd2lkdGg9IjIiLz48dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzIuMzgyODEsMTQ0LjMpIHNjYWxlKDMsMykiIGZvbnQtc2l6ZT0iMTYiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjNDc5YTQ3IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSImcXVvdDtDb29wZXIgQmxhY2smcXVvdDssIFNhbnMgU2VyaWYiIGZvbnQtd2VpZ2h0PSI1MDAiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0c3BhbiB4PSIwIiBkeT0iMCI+c29tZXRoaW5nPC90c3Bhbj48L3RleHQ+PHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjY2LjU1NDY5LDI1OS41KSBzY2FsZSgzLDMpIiBmb250LXNpemU9IjE2IiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iIzQ3OWE0NyIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0iJnF1b3Q7Q29vcGVyIEJsYWNrJnF1b3Q7LCBTYW5zIFNlcmlmIiBmb250LXdlaWdodD0iNTAwIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48dHNwYW4geD0iMCIgZHk9IjAiPnNpbXBsZTwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyNy4zODI4MSwyNjkuNSkgc2NhbGUoNS4wODMzMyw1LjA4MzMzKSIgZm9udC1zaXplPSIxNiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9IiM0NzlhNDciIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IiZxdW90O0Nvb3BlciBCbGFjayZxdW90OywgU2FucyBTZXJpZiIgZm9udC13ZWlnaHQ9IjUwMCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHRzcGFuIHg9IjAiIGR5PSIwIj4rPC90c3Bhbj48L3RleHQ+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjozMDA6MTg3LjUtLT4=";

const simple_reporter_icon = "";

const simple_reporter_extensionId = "simple_reporter";

class simple_reporter {
    constructor(runtime) {
        this._formatMessage = runtime.getFormatMessage({
            "zh-cn": {
                'r_name': '简单返回值',
                'simple_reporter_docs': '文档',

                'title_Strings': '字符串',
                'r_reporter_DV': '你好',
                'b_ToBoolean': '判断[a]',
                'r_if': '若[a]则[b]否则[c]',
                'r_if_b_DV': '是',
                'r_if_c_DV': '否',
                'b_and': '[a]和[b]',
                'b_or': '[a]或[b]',
                'b_not': '[a]不成立',
                'b_and_ToBoolean': '判断[a]和[b]',
                'b_or_ToBoolean': '判断[a]或[b]',
                'b_not_ToBoolean': '判断[a]不成立',
                'r_remove': '[a]去除[b]',
                'r_interchange': '[a]字符[b]与[c]互换',
                'r_default': '[a]空值则[b]',
                'b_defined': '[a]有值',
                'b_undefined': '[a]空值',
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
                'r_to_three_hundred_thirty': '[a]在0~360角度中',
                'r_add_to': '[a]增加[b]至[c]',

                'title_JSON_Array': 'JSON数组',
                'r_Array_sum': '[a]之和',
                'r_Array_product': '[a]之积',
                'r_Array_average': '[a]平均数',
                'r_Array_max': '[a]最大值',
                'r_Array_min': '[a]最小值',
                'r_Array_remove_big_number': '[a]删除数>[b]',
                'r_Array_remove_not_small_number': '[a]删除数≥[b]',
                'r_Array_remove_small_number': '[a]删除数<[b]',
                'r_Array_remove_not_big_number': '[a]删除数≤[b]',
                'r_Array_remove_all': '[a]删除所有元素=[b]',
                'r_Array_remove_item': '[a]删除第[b]项',
                'r_Array_reserve_item': '[a]保留第[b]项',
                'r_Array_item': '[a]第[b]项',
                'r_Array_items': '[a]第[b]项',
                'r_Array_item_to_item': '[a]第[b]至[c]项',
                'r_Array_insert': '[a]插入[b]至[c]项',
                'r_Array_insert_str': '[a]插入"[b]"至[c]项',
                'r_Array_index': '[a]第一[b]编号',
                'r_Array_index_str': '[a]第一"[b]"编号',
                'r_Array_lastindex': '[a]最后一[b]编号',
                'r_Array_lastindex_str': '[a]最后一"[b]"编号',
                'r_Array_sort_naturalOrder': '[a]顺序排序',
                'r_Array_sort_reverseOrder': '[a]倒序排序',
                'r_Array_reverse': '[a]反转',

                'title_JSON_Object': 'JSON对象',
                'r_Object_put': '[a]键[b]值设为[c]',
                'r_Object_putAll': '[a][b]合并',

                'title_JSON': 'JSON数组和对象',
                'b_JSON_have': '[a]有元素',

                'r_': '',
            },
            en: {
                'r_name': 'simple reporter',
                'simple_reporter_docs': 'documentation',

                'title_Strings': 'Strings',
                'r_reporter_DV': 'hello',
                'b_ToBoolean': '[a]as boolean',
                'r_if': 'if[a]then[b]else[c]',
                'r_if_b_DV': 'yes',
                'r_if_c_DV': 'no',
                'b_and': '[a]and[b]',
                'b_or': '[a]or[b]',
                'b_not': 'not[a]',
                'b_and_ToBoolean': '[a]and[b]as boolean',
                'b_or_ToBoolean': '[a]or[b]as boolean',
                'b_not_ToBoolean': 'not[a]as boolean',
                'r_remove': 'remove[b]from[a]',
                'r_interchange': '[a]interchange[b]and[c]',
                'r_default': '[a],default=[b]',
                'b_defined': '[a]is defined',
                'b_undefined': '[a]is undefined',
                'b_not_contain': '[a]does not contain[b]',

                'title_Operators': 'Operators',
                'r_nearest_multiple': 'multiple of[b]near[a]',
                'r_round': 'round[a]to[b]decimal places',
                'r_rint_from_to': 'round[a]from[b]to[c]decimal places',
                'r_rint_to_times': 'round[a]to[b]decimal places,then round it more accurate[c]times',
                'r_rint_times_to': 'round[a][b]times to[c]decimal places',
                'r_PI': 'round π to[a]decimal places',
                'r_rad_sin': 'sin[a]in rad',
                'r_rad_cos': 'cos[a]in rad',
                'r_rad_tan': 'tan[a]in rad',
                'r_rad_asin': 'asin[a]in rad',
                'r_rad_acos': 'acos[a]in rad',
                'r_rad_atan': 'atan[a]in rad',
                'r_to_one_hundred_eighty': '[a]changes into -180~180',
                'r_to_three_hundred_thirty': '[a]changes into 0~360',
                'r_add_to': '[a]add[b]to[c]',

                'title_JSON_Array': 'JSON Array',
                'r_Array_sum': 'sum of[a]',
                'r_Array_product': 'product of[a]',
                'r_Array_average': 'average of[a]',
                'r_Array_max': 'max[a]',
                'r_Array_min': 'min[a]',
                'r_Array_remove_big_number': 'number>[b]delete from[a]',
                'r_Array_remove_not_small_number': 'number≥[b]delete from[a]',
                'r_Array_remove_small_number': 'number<[b]delete from[a]',
                'r_Array_remove_not_big_number': 'number≤[b]delete from[a]',
                'r_Array_remove_all': 'all[b]delete from[a]',
                'r_Array_remove_item': 'delete item[b]of[a]',
                'r_Array_reserve_item': 'reserve item[b]of[a]',
                'r_Array_item': 'item[b]of[a]',
                'r_Array_items': 'items[b]of[a]',
                'r_Array_item_to_item': 'item[b]to item[c]of[a]',
                'r_Array_insert': '[a]inserts[b]at[c]',
                'r_Array_insert_str': '[a]inserts"[b]"at[c]',
                'r_Array_index': 'the first[b]in[a]',
                'r_Array_index_str': 'the first "[b]" in[a]',
                'r_Array_lastindex': 'the last[b]in[a]',
                'r_Array_lastindex_str': 'the last "[b]" in[a]',
                'r_Array_sort_naturalOrder': 'sort[a]by ascending',
                'r_Array_sort_reverseOrder': 'sort[a]by descending',
                'r_Array_reverse': 'reverse[a]',

                'title_JSON_Object': 'JSON Object',
                'r_Object_put': 'set[b]in[a]to[c]',
                'r_Object_putAll': 'concat[a][b]',

                'title_JSON': 'JSON Array and Object',
                'b_JSON_have': '[a]has sth',

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
            blockIconURI: simple_reporter_icon,
            menuIconURI: simple_reporter_icon,
            color1: '#59c059',
            color2: '#8bbf8b',
            blocks: [
                {
                    blockType: "button",
                    text: this.formatMessage('simple_reporter_docs'),
                    onClick: this.docs,
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
                            type: 'string',
                            menu: 'tf'
                        }
                    }
                },
                {
                    opcode: 'b_ToBoolean',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_ToBoolean'),
                    arguments: {
                        a: {
                            type: 'string',
                            menu: 'tf'
                        }
                    }
                },
                {
                    opcode: 'r_if',
                    blockType: 'reporter',
                    text: this.formatMessage('r_if'),
                    arguments: {
                        a: {
                            type: 'string',
                            menu: 'tf'
                        },
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
                    text: this.formatMessage('b_and')
                },
                {
                    opcode: 'b_or',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_or')
                },
                {
                    opcode: 'b_not',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_not')
                },
                {
                    opcode: 'b_and_ToBoolean',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_and_ToBoolean')
                },
                {
                    opcode: 'b_or_ToBoolean',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_or_ToBoolean')
                },
                {
                    opcode: 'b_not_ToBoolean',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_not_ToBoolean')
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
                    }
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
                            defaultValue: 'a'
                        }
                    }
                },
                '---' + this.formatMessage('title_Operators'),
                {
                    opcode: 'b_not_equal',
                    blockType: 'Boolean',
                    text: '[a]≠[b]',
                    arguments: {
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
                        c: {
                            type: 'string'
                        }
                    }
                },
                {
                    opcode: 'r_addition_multiplication',
                    blockType: 'reporter',
                    text: '([a]+[b])*[c]',
                    arguments: {
                        b: {
                            type: 'string'
                        },
                        c: {
                            type: 'string'
                        }
                    }
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
                    }
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
                    }
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
                    }
                },
                {
                    opcode: 'r_PI',
                    blockType: 'reporter',
                    text: this.formatMessage('r_PI')
                },
                {
                    opcode: 'r_rad_sin',
                    blockType: 'reporter',
                    text: this.formatMessage('r_rad_sin')
                },
                {
                    opcode: 'r_rad_cos',
                    blockType: 'reporter',
                    text: this.formatMessage('r_rad_cos')
                },
                {
                    opcode: 'r_rad_tan',
                    blockType: 'reporter',
                    text: this.formatMessage('r_rad_tan')
                },
                {
                    opcode: 'r_rad_asin',
                    blockType: 'reporter',
                    text: this.formatMessage('r_rad_asin')
                },
                {
                    opcode: 'r_rad_acos',
                    blockType: 'reporter',
                    text: this.formatMessage('r_rad_acos')
                },
                {
                    opcode: 'r_rad_atan',
                    blockType: 'reporter',
                    text: this.formatMessage('r_rad_atan')
                },
                {
                    opcode: 'r_sin_multiplication',
                    blockType: 'reporter',
                    text: '[a]*sin[b]',
                    arguments: {
                        a: {
                            type: 'string'
                        }
                    }
                },
                {
                    opcode: 'r_cos_multiplication',
                    blockType: 'reporter',
                    text: '[a]*cos[b]',
                    arguments: {
                        a: {
                            type: 'string'
                        }
                    }
                },
                {
                    opcode: 'r_tan_multiplication',
                    blockType: 'reporter',
                    text: '[a]*tan[b]',
                    arguments: {
                        a: {
                            type: 'string'
                        }
                    }
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
                    }
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
                    }
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
                    }
                },
                {
                    opcode: 'r_to_one_hundred_eighty',
                    blockType: 'reporter',
                    text: this.formatMessage('r_to_one_hundred_eighty')
                },
                {
                    opcode: 'r_to_three_hundred_thirty',
                    blockType: 'reporter',
                    text: this.formatMessage('r_to_three_hundred_thirty')
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
                    }
                },
                '---' + this.formatMessage('title_JSON_Array'),
                {
                    opcode: 'r_Array_sum',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_sum')
                },
                {
                    opcode: 'r_Array_product',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_product')
                },
                {
                    opcode: 'r_Array_average',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_average')
                },
                {
                    opcode: 'r_Array_max',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_max')
                },
                {
                    opcode: 'r_Array_min',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_min')
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
                    }
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
                    }
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
                    }
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
                    }
                },
                {
                    opcode: 'r_Array_remove_all',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_remove_all'),
                    arguments: {
                        a: {
                            type: 'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b: {
                            type: 'string',
                            defaultValue: 'fun'
                        }
                    }
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
                    }
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
                            defaultValue: 0
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
                    }
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
                            defaultValue: 0
                        },
                        c: {
                            type: 'string',
                            defaultValue: 6
                        }
                    }
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
                    }
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
                    }
                },
                {
                    opcode: 'r_Array_sort_naturalOrder',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_sort_naturalOrder')
                },
                {
                    opcode: 'r_Array_sort_reverseOrder',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_sort_reverseOrder')
                },
                {
                    opcode: 'r_Array_reverse',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Array_reverse')
                },
                '---' + this.formatMessage('title_JSON_Object'),
                {
                    opcode: 'r_Object_put',
                    blockType: 'reporter',
                    text: this.formatMessage('r_Object_put'),
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
                '---' + this.formatMessage('title_JSON'),
                {
                    opcode: 'b_JSON_have',
                    blockType: 'Boolean',
                    text: this.formatMessage('b_JSON_have')
                },
            ],
            menus: {
                tf: {
                    acceptReporters: true,
                    items: ['', 'true', 'false']
                }
            }
        }
    }

    docs() {
        let a = document.createElement('a');
        a.href = "https://learn.ccw.site/article/3b2ab1c2-6335-49f8-b712-14d49ff691f8";
        a.rel = "noopener noreferrer";
        a.target = "_blank";
        a.click();
    }
    ToBoolean(a) {
        return [0, false, '', '0', 'false', 'undefined', 'null'].indexOf(a) < 0
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
        return this.ToBoolean(args.a) ? args.b : args.c
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
        return !this.ToBoolean(args.a)
    }
    r_join(args) {
        return args.a + args.b + args.c
    }
    r_remove(args) {
        return args.a.replaceAll(args.b, '')
    }
    r_interchange(args) {
        const list = String(args.a).split(args.b)
        let a = list[0].replaceAll(args.c, args.b)
        for (let i = 1; i < list.length; i++) {
            a = a + args.c + list[i].replaceAll(args.c, args.b)
        }
        return a
    }
    r_default(args) {
        if (['undefined', 'null', ''].indexOf(args.a) < 0) {
            return args.a;
        }
        return args.b
    }
    b_defined(args) {
        return ['undefined', 'null', ''].indexOf(args.a) < 0
    }
    b_undefined(args) {
        return ['undefined', 'null', ''].indexOf(args.a) >= 0
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
        let a = Number(args.a)
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
        let a = Number(args.a)
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
    r_to_three_hundred_thirty(args) {
        let a = Number(args.a)
        while (a < 0) {
            a += 360
        }
        return a % 360
    }
    r_add_to(args) {
        const a = Number(args.a)
        const b = Number(args.b)
        const c = args.c
        let list = []
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
        const list = JSON.parse(args.a)
        const sum = list.reduce((a, b) => a + b);
        return sum / list.length
    }
    r_Array_max(args) {
        return Math.max(...(JSON.parse(args.a)))
    }
    r_Array_min(args) {
        return Math.min(...(JSON.parse(args.a)))
    }
    r_Array_remove_big_number(args) {
        const list = JSON.parse(args.a)
        let newlist = []
        for (let i = 0; i < list.length; i++) {
            let inumber = list[i]
            if (inumber < args.b) {
                newlist.push(inumber)
            }
        }
        return JSON.stringify(newlist)
    }
    r_Array_remove_not_small_number(args) {
        const list = JSON.parse(args.a)
        let newlist = []
        for (let i = 0; i < list.length; i++) {
            let inumber = list[i]
            if (inumber <= args.b) {
                newlist.push(inumber)
            }
        }
        return JSON.stringify(newlist)
    }
    r_Array_remove_small_number(args) {
        const list = JSON.parse(args.a)
        let newlist = []
        for (let i = 0; i < list.length; i++) {
            let inumber = list[i]
            if (inumber > args.b) {
                newlist.push(inumber)
            }
        }
        return JSON.stringify(newlist)
    }
    r_Array_remove_not_big_number(args) {
        const list = JSON.parse(args.a)
        let newlist = []
        for (let i = 0; i < list.length; i++) {
            let inumber = list[i]
            if (inumber >= args.b) {
                newlist.push(inumber)
            }
        }
        return JSON.stringify(newlist)
    }
    r_Array_remove_all(args) {
        const list = JSON.parse(args.a)
        let newlist = []
        for (let i = 0; i < list.length; i++) {
            let inumber = list[i]
            if (inumber != args.b) {
                newlist.push(inumber)
            }
        }
        return JSON.stringify(newlist)
    }
    r_Array_remove_item(args) {
        let a = JSON.parse(args.a)
        a.splice(Number(args.b), 1)
        return JSON.stringify(a)
    }
    r_Array_reserve_item(args) {
        return JSON.stringify(JSON.parse(args.a).splice(Number(args.b), 1))
    }
    r_Array_item(args) {
        return JSON.parse(args.a)[args.b]
    }
    r_Array_items(args) {
        const a = JSON.parse(args.a)
        const b = JSON.parse(args.b)
        let c = []
        for (let i = 0; i < b.length; i++) {
            c.push(a[b[i]])
        }
        return JSON.stringify(c)
    }
    r_Array_item_to_item(args) {
        return JSON.stringify(JSON.parse(args.a).slice(args.b, args.c))
    }
    r_Array_insert(args) {
        let a = JSON.parse(args.a)
        a.splice(args.c, 0, Number(args.b))
        return JSON.stringify(a)
    }
    r_Array_insert_str(args) {
        let a = JSON.parse(args.a)
        a.splice(args.c, 0, args.b)
        return JSON.stringify(a)
    }
    r_Array_index(args) {
        return JSON.parse(args.a).indexOf(Number(args.b))
    }
    r_Array_index_str(args) {
        return JSON.parse(args.a).indexOf(args.b)
    }
    r_Array_lastindex(args) {
        return JSON.parse(args.a).lastIndexOf(Number(args.b))
    }
    r_Array_lastindex_str(args) {
        return JSON.parse(args.a).lastIndexOf(args.b)
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
    r_Object_put(args) {
        let a = JSON.parse(args.a)
        a[args.b] = JSON.parse(args.c)
        return JSON.stringify(a)
    }
    r_Object_putAll(args) {
        let b = JSON.parse(args.b)
        const a = JSON.parse(args.a)
        const keys = Object.keys(a)
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i]
            b[key] = a[key]
        }
        return JSON.stringify(b)

    }
    b_JSON_have(args) {
        return Boolean(JSON.parse(args.a).length)
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