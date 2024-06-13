const l10n = {
  extensionName: ['高级数据结构', 'Advanced Data Structure'],
  docsURI: [
    'https://learn.ccw.site/article/3b5fb890-b480-4157-b104-dacd53449549',
    'https://learn.ccw.site/article/3b5fb890-b480-4157-b104-dacd53449549',
  ],
  'name.list': ['（列表）', '(list) '],
  'name.object': ['（对象）', '(object) '],
  'tag.config': ['⚙️ 扩展设置（会通过舞台注释保存在作品中）', '⚙️ Settings (will be saved in stage\'s comment)'],
  'block.setAutoCreate': ['设置的对象不存在时自动创建[ON]', 'auto create when object not exist[ON]'],
  'tooltip.setAutoCreate': [
    '（默认关闭）当设置对象属性时，对象不存在，是否自动创建对象。',
    '(Off by default) Whether to create the object automatically when the object to set dose not exist.',
  ],
  'block.setShowPrefix': ['返回值显示前缀[ON]', 'show prefix[ON]'],
  'tooltip.setShowPrefix': [
    '（默认开启）是否在返回值/变量显示器中，显示 (list) 或 (object) 前缀作为对象类型的提示\n注：类型提示不影响实际的值，只作为视觉上的提示。',
    '(On by default) Whether to use \'(list)\' or \'(object)\' prefixes in the return value bubble/variable monitor as a hint for the object type.\nNote: The type hint does not affect the actual value, only as a visual hint.',
  ],
  'block.allowInputJSON': ['允许传入JSON[ON]', 'allow JSON input[ON]'],
  'tooltip.allowInputJSON': [
    '（默认开启）对于接受对象的参数，是否允许直接输入JSON字符串。\n例如：开启后，允许直接用长度积木读取JSON\'[1,2,3]\'的长度为3；否则，JSON\'[1,2,3]\'会当成普通字符串处理。',
    '(On by default) Whether JSON strings can be directly input for arguments expecting an object.\nFor instance, if enabled, the "size of" block can directly read the length of JSON \'[1,2,3]\' as 3; otherwise the JSON \'[1,2,3]\' will be treated as a string, not an object.',
  ],
  'block.indexStart': ['列表索引从[IDX]开始', 'list index start from [IDX]'],
  'tooltip.indexStart': [
    '列表索引从 0 开始还是从 1 开始（默认为1，和 Scratch 列表一致）',
    'Set the list index to start from 0 or 1 (default is 1, consistent with Scratch\'s list convention)',
  ],
  'block.setCase': ['列表查找区分大小写[ON]', 'case sensitive [ON] for list searches'],
  'tooltip.setCase': [
    '（默认关闭）查找列表内容时，是否区分大小写。\n- 例如，关闭大小写区分时，判断列表 ["a","b","c"] 包含 A 将返回true',
    '(Off by default) Whether to be case-sensitive when searching for content in the list.\n- For example, with case sensitivity turned off, checking if the list ["a","b","c"] contains "A" will return true.',
  ],
  'block.pop': ['从[LIST]弹出第[IDX]项', 'pop item[IDX] from [LIST]'],
  'tooltip.pop': [
    '从列表弹出某一项，并返回。\n支持负数索引，如-1表示最后一项。',
    'Pop nth item from list and return the item.\nNegative indices supported (e.g. -1 for the last item)',
  ],
  'menu.on': ['开启', 'On'],
  'menu.off': ['关闭', 'Off'],
  'tag.tempData': ['数据', 'Data'],
  'tag.tools': ['🔧常用工具', '🔧Common Tools'],
  'tag.tempVar': ['💾临时数据', '💾Temporary Data'],
  'tag.complexData': ['🗄️对象/列表', '🗄️Object/List'],
  'tag.var': ['变量', 'Variable'],
  'tag.list': ['📃列表专用', '📃List Dedicated'],
  'tag.object': ['对象专用', 'Object Dedicated'],
  tip: ['注：列表读/写积木合并到了对象积木中', 'Note: Read/Write blocks for list are merged into object blocks.'],
  // 'tag.Advlist': ['高级列表操作', 'Advanced List Operation'],
  'tag.ScratchList': ['🐱原版列表', '🐱Scratch List'],
  'block.getScratchList': ['🗄️原版列表[NAME]', '🗄️Scratch list[NAME]'],
  'block.setScratchList': [
    '将原版列表[NAME]指向🗄️列表[OBJ]',
    'set Scratch list[NAME]to🗄️[OBJ]',
  ],
  'button.showMoreList': ['显示更多列表积木', 'Show More List Blocks'],
  'button.showMoreObj': ['显示更多对象积木', 'Show More Object Blocks'],
  'button.hideMoreList': ['隐藏下方列表积木', 'Hide Extra List Blocks'],
  'button.hideMoreObj': ['隐藏下方对象积木', 'Hide Extra Object Blocks'],
  'config.tip': [
    '该注释用于保存高级数据结构扩展信息\n可以删除这个注释来清除扩展配置信息',
    'Configuration for Advanced Data Structure Extension(Inspired by TurboWarp)\nCan be deleted to remove the stored settings.',
  ],
  'block.deleteAllTempData': ['删除所有数据', 'delete all data'],
  'block.getSubObject': ['🗄️根据键[KEYS]获取[OBJ]的[TYPE]', '🗄️get [TYPE] from [OBJ] by keys[KEYS]'],
  'menu.values': ['值列表', 'values'],
  'menu.subObj': ['子对象', 'sub-object'],
  'tooltip.getSubObject': ['根据键(属性)列表，从对象中获取值/子对象。', 'Get the values/object from an object based on a list of keys (properties).'],
  'block.getCountOfTempData': ['数据量', 'data count'],
  'block.listAllData': ['已有数据名称', 'names of existing data'],
  'block.delTempData': [
    '删除名为[NAME]的数据',
    'delete data named[NAME]',
  ],
  'block.ifTempDataExist': [
    '存在名为[NAME]的数据？',
    'data named[NAME]exists?',
  ],
  'defaultValue.dataName': ['数据', 'data'],
  'defaultValue.listName': ['列表', 'list'],
  'defaultValue.objName': ['对象', 'object'],
  'defaultValue.JSON': [
    '"a":1,"b":2',
    '"a":1,"b":2',
  ],
  'defaultValue.LIST': [
    '[1,2,3]',
    '[1,2,3]',
  ],
  'defaultValue.dataNameOrObj': [
    '名称(或传入对象)',
    'name (or input object)',
  ],
  'button.showNestingSupportedBlock': [
    '显示高级积木',
    'Show Advanced Block',
  ],
  'button.hideNestingSupportedBlock': [
    '隐藏高级积木',
    'Hide Advanced Block',
  ],

  'block.setTempData': ['名为[NAME]的数据[OP][VALUE]', 'data named[NAME][OP][VALUE]'],
  'block.createObjFromKeyValue': ['🗄️根据键[KEYS]值[VALUES]列表创建对象', '🗄️create object from lists of keys[KEYS]values[VALUES]'],
  'tooltip.createObjFromKeyValue': [
    '根据键（属性）列表和值列表创建对象',
    'Create an object from a list of keys (properties) and a list of values',
  ],
  'menu.op.set': ['设为', 'set to'],
  'menu.op.add': ['增加', 'change by'],
  'menu.op.insert': ['前插入', 'insert before'],
  'menu.op.parse': ['从JSON解析', 'parse from JSON'],
  'menu.op.parse_warning': ['从JSON解析', 'parse from JSON'],
  'menu.op.shallowCopy': ['单层拷贝对象', 'shallow copy from'],
  'menu.op.deepCopy': ['深度拷贝对象', 'deep copy from'],

  'block.copyFrom': ['🗄️[OP]复制对象[OBJ]', '🗄️[OP]object[OBJ]'],
  'menu.shallow': ['单层', 'shallow copy'],
  'menu.deep': ['完全', 'deep copy'],

  'block.getTempData': ['名为[NAME]的数据', 'data named[NAME]'],
  'menu.getOption.objectAllowed': ['值', 'value'],
  'menu.getOption.json': ['JSON', 'JSON'],
  'block.getObjFromJson': [
    '🗄️[VALUE]解析为对象',
    '🗄️parse JSON [VALUE] to object',
  ],
  'block.newEmptyObjOrArray': [
    '🗄️返回一个[OPTION]',
    '🗄️create an [OPTION]',
  ],
  'block.checkType': ['[VALUE]是[TYPE]？', 'is[VALUE][TYPE]?'],
  'menu.list': ['列表', 'a list'],
  'menu.object': ['对象', 'an object'],
  'menu.listOrObj': ['对象或列表', 'a list or object'],
  'menu.emptyList': ['空列表', 'empty list'],
  'menu.emptyObj': ['空对象', 'empty object'],
  'block.getNewList': ['🗄️空列表', '🗄️ empty list'],
  'block.getNewObject': ['🗄️空对象', '🗄️ empty object'],
  'block.createList': ['🗄️列表', '🗄️list'],
  'block.createObj': ['🗄️对象', '🗄️object'],
  'block.defaultList': ['苹果,香蕉,东西', 'apple,banana,thing'],
  'block.defaultProps': ['子属性', 'sub-prop'],
  'block.de': ['', ''],
  'block.x': ['x', 'x'],
  'block.defaultObj': [
    '名称=小明,年龄=12,得分=100,朋友=泰拉,属性=东西',
    'name=Tera,age=12,score=100,property=thing',
  ],
  'block.typeOf': ['[VALUE]的类型', 'type of [VALUE]'],
  'block.strictlyEqual': ['[A]就是[B]', '[A]is exactly[B]'],
  'block.JSONOf': ['对象[VALUE]转JSON字符串', 'convert object[VALUE] to JSON'],
  'block.createOrClearList': [
    '将数据[NAME]设为空列表',
    'set data[NAME] to an empty list',
  ],
  'block.addItemToList': [
    '向列表[NAME_OR_OBJ]加入[VALUE]',
    'add [VALUE] to list [NAME_OR_OBJ]',
  ],

  'block.mergeList': ['🗄️[OP][LIST1][LIST2]', '🗄️[OP][LIST1][LIST2]'],
  'menu.merge': ['合并列表', 'merge lists'],
  'menu.union': ['合并列表并去重', 'merge lists and remove duplicates'],
  'menu.intersection': ['列表交集', 'common elements between lists'],
  'menu.difference': [
    '列表1有而列表2没有',
    'elements in list1 but not in list2',
  ],

  'block.mergeObject': [
    '给[NAME_OR_OBJ]追加🗄️[OBJ]里的内容',
    'add contents of🗄️[OBJ] to [NAME_OR_OBJ]',
  ],
  'block.opList': ['将列表[NAME_OR_OBJ][OP]', '[OP]list[NAME_OR_OBJ]'],
  'menu.shuffle': ['打乱', 'shuffle'],
  'menu.reverse': ['反转', 'reverse'],
  'menu.ascSort': ['升序排序', 'sort (ascending)'],
  'menu.descSort': ['降序排序', 'sort (descending)'],
  'menu.removeDuplicates': ['去重', 'remove duplicates from'],
  'block.sortListByProp': [
    '将列表[NAME_OR_OBJ]里的每个对象以属性[PROP][OP]',
    '[OP]list[NAME_OR_OBJ]containing objects by property[PROP]',
  ],

  'block.addItemToList2': [
    '向[NAME_OR_OBJ][OP][VALUE]',
    '[VALUE][OP][NAME_OR_OBJ]',
  ],
  'menu.addTo': ['加入', 'add to'],
  'menu.removeFrom': ['移除', 'remove from'],
  'menu.ifNotExistsaddTo': ['(如果不存在)加入', '(if not exists) add to'],

  'block.addItemToListAndReturn': [
    '🗄️向[OBJ][OP][VALUE]并返回',
    '🗄️[VALUE][OP]list[OBJ]and return',
  ],
  'block.createListWithLength': [
    '🗄️含[N]个[VALUE]的列表',
    '🗄️list with [N]of[VALUE]',
  ],
  'defaultValue.thing': ['东西', 'thing'],
  'block.setItemOfList': [
    '列表[NAME_OR_OBJ]第[IDX]项[OP][VALUE]',
    'item [IDX] of list [NAME_OR_OBJ][OP][VALUE]',
  ],
  'block.insertItemIntoList': [
    '在列表[NAME_OR_OBJ]第[IDX]项前插入[VALUE]',
    'insert [VALUE] at [IDX] of list [NAME_OR_OBJ]',
  ],
  'menu.value': ['值', 'value'],
  'block.delItemOfList': [
    '删除列表[NAME_OR_OBJ]第[IDX]项',
    'delete item [IDX] of list [NAME_OR_OBJ]',
  ],
  'block.getItemOfList': [
    '列表[NAME_OR_OBJ]第[IDX]项',
    'item [IDX] of list [NAME_OR_OBJ]',
  ],
  'block.lengthOfList': [
    '列表[NAME_OR_OBJ]长度',
    'length of list [NAME_OR_OBJ]',
  ],
  'block.ifListItemExist': [
    '列表[NAME_OR_OBJ]包含[VALUE]？',
    'list [NAME_OR_OBJ] contains [VALUE]?',
  ],
  'block.split': [
    '🗄️以[CH]切割[STR]为列表',
    '🗄️split[STR]by[CH]as a list',
  ],
  'block.slice': [
    '🗄️取列表[NAME_OR_OBJ][A]~[B]项',
    'get items [A]~[B]from list[NAME_OR_OBJ]',
  ],
  'block.join': [
    '用[CH]连接列表[NAME_OR_OBJ]为字符串',
    'join list[NAME_OR_OBJ] with[CH] as a string',
  ],
  'block.getListItemIdxByItem': [
    '列表[NAME_OR_OBJ]中第一个[VALUE]的编号',
    'item # of [VALUE] in list [NAME_OR_OBJ]',
  ],
  'block.indexOf': [
    '列表[NAME_OR_OBJ]中[VALUE]第[N]次出现的位置',
    'item # of [N]th occurrence of [VALUE] in [NAME_OR_OBJ]',
  ],
  'tooltip.indexOf': [
    '获取内容在列表中第[N]次出现时的位置。\n支持负数，-1表示最后一次出现的位置，以此类推。',
    'Get position of the [N]th occurrence of content in the list.\n- Supports negative indices. For instance, -1 represents the the last occurrence.',
  ],
  'block.createOrClearObject': [
    '将数据[NAME]设为空对象',
    'set data[NAME]to an empty object',
  ],
  'block.clear': [
    '清空[NAME]中的内容',
    'clear contents of[NAME]',
  ],
  'tooltip.clear': [
    '删除某个已有对象/列表中的所有内容',
    'clear all contents of the object/list',
  ],
  'block.setPropOfObject': [
    '[NAME_OR_OBJ]的[PROP][OP][VALUE]',
    '[PROP] of [NAME_OR_OBJ][OP][VALUE]',
  ],
  'block.setPropOfObjectAndReturn': [
    '🗄️[OBJ]的[PROP][OP][VALUE]并返回',
    '🗄️[PROP] of [OBJ][OP][VALUE]and return',
  ],
  'defaultValue.prop': ['属性', 'prop'],
  'block.delPropOfObject': [
    '删除[NAME_OR_OBJ]的[PROP]',
    'delete [PROP] of [NAME_OR_OBJ]',
  ],
  'block.getPropOfObject': [
    '[NAME_OR_OBJ]的[PROP]',
    '[PROP]of[NAME_OR_OBJ]',
  ],
  'block.getPropOfObjectByIdx': [
    '对象[NAME_OR_OBJ]第[IDX]项的[OPTION]',
    '[OPTION] of item [IDX] of object [NAME_OR_OBJ]',
  ],
  'menu.conInfo.name': ['名称', 'name'],
  'menu.conInfo.value': ['内容', 'content'],
  'menu.conInfo.objValue': ['内容', 'content'],
  'menu.conInfo.json': ['JSON', 'JSON'],
  'block.getAllProperties': [
    '🗄️对象[NAME_OR_OBJ]的所有[OPTION]的列表',
    '🗄️get [OPTION] list of object [NAME_OR_OBJ]',
  ],
  'block.setProtoOfObj': [
    '⚠️对象[NAME_OR_OBJ]的原型设为🗄️[OBJ]',
    '⚠️set prototype of [NAME_OR_OBJ] to 🗄️[OBJ]',
  ],
  'warn.cyclicProto': [
    '检测到循环的原型链。原型关系不能形成一个环！',
    'A circular prototype chain detected. Prototype relationships cannot form a loop!',
  ],
  'menu.keys': ['键', 'keys'],
  'menu.values': ['值', 'values'],
  'menu.entries': [' [键, 值] 对', 'entries'],
  'block.sizeOfObject': [
    '[NAME_OR_OBJ]的内容数',
    'size of [NAME_OR_OBJ]',
  ],
  'block.ifObjectPropExist': [
    '[NAME_OR_OBJ]包含[PROP]？',
    '[NAME_OR_OBJ] has [PROP]?',
  ],

  // tooltip
  'tooltip.typeOf': [
    '判断输入数据的类型，有以下几种可能结果：\n'
        + '- list: 列表；\n'
        + '- object: 对象；\n'
        + '- number: 数字；\n'
        + '- string: 字符串；\n'
        + '- boolean: 布尔值(true/false)；\n'
        + '- undefined: 未填入内容；',
    'Get the type of the value, with the following possible types:\n'
        + '- list;\n'
        + '- object;\n'
        + '- number;\n'
        + '- string;\n'
        + '- boolean(true/false);\n'
        + '- undefined(nothing enter);',
  ],
  'tooltip.insertItemIntoList': [
    '在列表的第 n 项前插入一个值。',
    'Insert a value before the nth item of the list.',
  ],
  'tooltip.checkType': [
    '判断输入内容是否是列表/对象/列表或对象',
    'Check if the input content is a list / object / list or object.',
  ],
  'tooltip.strictlyEqual': [
    '判断两个对象是否就是同一个对象',
    'Check if two objects are the exact same object.',
  ],
  'tooltip.JSONOf': [
    '将对象转换为JSON字符串。',
    'Convert an object to a JSON string.',
  ],
  'tooltip.getObjFromJson': [
    '将JSON字符串转换为对象。',
    'Convert a JSON string to an object.',
  ],
  'tooltip.copyFrom': [
    '单层或完全复制对象。\n- 单层复制：仅复制对象的第一层，如果对象的属性指向了另一个对象，则只复制引用；\n- 完全复制：完全复制整个对象。如果对象的属性指向了另一个对象，则将连同另一个对象完整复制。',
    'Shallow or deep copy an object.\n- Shallow copy: Only copies the first layer of the object;\n- Deep copy: Fully duplicates the entire object.',
  ],
  'tooltip.deleteAllTempData': [
    '删除所有通过名字创建的数据',
    'Delete all data created by name.',
  ],
  'tooltip.getCountOfTempData': [
    '获取存在的临时数据的数量',
    'Get count of existing data.',
  ],
  'tooltip.listAllData': [
    '列出所有已存在临时数据的名称，用逗号分隔。',
    'List names of all existing data, separated by commas.',
  ],
  'tooltip.delTempData': [
    '删除指定名称的临时数据。',
    'Delete the data with certain name.',
  ],
  'tooltip.ifTempDataExist': [
    '判断指定名称的数据是否存在。',
    'Determine if the data with certain name exists.',
  ],
  'tooltip.setTempData': [
    '将特定名称的数据设为或增加某个值。当指定名字的数据不存在，会自动创建。',
    'Set or add a value to the data with specified name, automatically created if not exists.',
  ],
  'tooltip.getTempData': [
    '获取对应名称的数据',
    'Get data with the specified name.',
  ],
  // \n- 以"🗄️"开头的积木暗示了这个积木会返回一个复杂对象（列表/对象）\n- 列表/对象和字符串不一样，是一个特殊的类型。当一个列表/对象在返回值中显示，通常\n会以“<SafeObject>”开头作为视觉上的提示。但并不意味者它实际以这串字符开头。\n
  // \n- Blocks starting with "🗄️" indicate that they will return a complex object (i.e. list/object).\n- Lists/objects are special types distinct from strings. When a list/object is displayed in a return value, it is often\n visually indicated with a prefix like "<SafeObject>". However, this does not mean that they actually starts with those characters.\n
  'tooltip.getNewList': [
    '创建一个列表。\n- 点击“+/-”号，增减列表内容。\n*鸣谢：感谢Nights/凌提供的可扩展积木！',
    'Create a list.\n- Click the "+/-" button to add / remove list items.\n*Credits: Thanks Nights/FurryR for the extendible blocks!',
  ],
  'tooltip.createListWithLength': [
    '创建一个含有 n 个指定内容的列表\n- 可以用复杂对象作为项目创建列表（传入的对象会被完全复制）；\n- 通过嵌套使用可以创建多维列表，例如 4 x 3 的二维列表。',
    'Create a list with n specified items.\n- You can use list/object as items to create the list (the passed objects will be fully duplicated);\n- By nesting the use of this block, you can create N-D lists, such as a 4 x 3 two-dimensional list.',
  ],
  'tooltip.addItemToListAndReturn': [
    '将内容加入列表，并返回该列表本身',
    'Add item to list and return the list itself.',
  ],
  'tooltip.createOrClearList': [
    '将特定名字的数据设为空列表\n注：也可传入列表来清空该列表；传入含普通值的变量没有效果。',
    'Set the data with a specific name to an empty list.\nNote: You can also pass a list to empty it. However, passing a variable containing a non-list value will have no effect.',
  ],
  'tooltip.addItemToList': ['向列表加入内容。', 'Add item to list.'],
  'tooltip.addItemToList2': [
    '向列表加入/移除某个内容。有三个选项：\n- 将内容直接加到末尾；\n- 从列表中移除特定内容(如果内容多次出现，只会移除第一个)；\n- 如果要加入的内容在列表中不存在，才将内容加入。',
    'Add/remove content to/from the list. There are three options:\n- Add content directly to the end of the list;\n- Remove content from the list (if it occurs more than once, only the first one will be removed);\n- Add content only if it does not exist in the list.',
  ],
  'tooltip.setItemOfList': [
    '将列表的第 n 项设为/增加某个值',
    'Set/add a value to the nth item of the list.',
  ],
  'tooltip.delItemOfList': [
    '删除列表的第 n 项',
    'Delete the nth item from the list.',
  ],
  'tooltip.getItemOfList': [
    '获取列表第 n 项\n- 可以使用负索引（例如-1是最后一项，-2是倒数第二项，以此类推）',
    'Get the nth item in the list\n- Negative index supported (e.g. -1 for the last item, -2 for the second-to-last item, etc.)',
  ],
  'tooltip.lengthOfList': ['获取列表长度', 'Get the length of the list'],
  'tooltip.ifListItemExist': [
    '判断列表中是否包含某内容。',
    'Determines whether something is in a list.',
  ],
  'tooltip.getListItemIdxByItem': [
    '获取内容在列表中第一次出现的位置。如果不存在则返回0。',
    'Get the first occurrence of the content in the list. If not exist, return 0.',
  ],
  'tooltip.mergeList': [
    '合并两个列表，并返回一个新列表。有 4 个选项：\n'
        + '- 直接合并为一个列表；\n'
        + '- 合并且去除重复内容；\n'
        + '- 合并且只保留两个列表共有的内容；\n'
        + '- 合并且只保留列表1有而列表2没有的内容。',
    'Merge two lists and return a new list. There are 4 options:\n'
        + '- Combine the lists directly;\n'
        + '- Merge and remove duplicate items;\n'
        + '- Merge and keep only the common items in both lists;\n'
        + '- Merge and keep only the items in list 1 that are not in list 2.',
  ],
  'tooltip.slice': [
    '获取列表A~B项（含A、B自己）\n- 可以使用负索引',
    'Get items from index A to index B (including A and B themselves)\n- Negative indices supported (e.g. -1 is the last item, -2 is the second-to-last item, etc.)',
  ],
  'tooltip.split': [
    '用分隔符分割字符串，并返回列表',
    'Split the string with the separator and return a list.',
  ],
  'tooltip.join': [
    '将列表用字符串连起来。',
    'Join the list items with a specific string',
  ],
  'tooltip.opList': [
    '对列表执行某个操作：\n'
        + '- 打乱：将列表的内容随机重排；\n'
        + '- 反转：将列表内容反转过来；\n'
        + '- 升序排序：将列表内容从小到大排序；\n'
        + '- 降序排序：将列表内容从大到小排序；\n'
        + '- 去重：删除列表中的重复项。',
    'Perform an operation on the list:\n'
        + '- Shuffle: Randomly rearrange the contents of the list;\n'
        + '- Reverse: Reverse the order of the list contents;\n'
        + '- Sort Ascending: Sort the list contents from smallest to biggest;\n'
        + '- Sort Descending: Sort the list contents from biggest to smallest;\n'
        + '- Remove Duplicates: Delete duplicate items from the list.',
  ],
  'tooltip.sortListByProp': [
    '在列表中每一项都是对象的情况下，根据列表中每个对象的某个属性进行排序。\n例如，假设列表每一项是包含“分数”属性的对象，根据分数对对象进行排序。',
    'When each item in the list is an object, sort the objects based on a certain property of each list item.\ne.g., assuming that each item in the list is an object containing the "score" property, and sort the objects according to their scores.',
  ],
  'tooltip.getNewObject': [
    '创建一个对象。\n点击“+/-”号，增加或减少对象的属性。\n*鸣谢：感谢Nights/凌提供的可扩展积木！',
    'Create an object.\nClick the "+/-" button to add / remove properties of object.\n*Credits: Thanks Nights/FurryR for the extendible blocks!',
  ],
  'tooltip.setPropOfObjectAndReturn': [
    '设置对象的属性，并返回对象本身。',
    'Set/change a property of the object and return the object itself.',
  ],
  'tooltip.createOrClearObject': [
    '将特定名字的数据设为空对象\n注：也可传入对象来清空该对象；传入含普通值的变量没有效果。',
    'Set the data with a specific name to an empty object.\nNote: You can also pass a object to empty it. However, passing a variable containing a non-object value will have no effect.',
  ],
  'tooltip.setPropOfObject': [
    '修改列表第 n 项，或修改对象特定名称的内容。\n- 第一个空可以直接填临时数据名称，也可以传入一个列表/对象；\n- 对于对象，填数据的名称。\n- 对于列表，填数字索引（从1开始，支持负数索引。例如-2是倒数第二项）\n- 点“+/-”访问嵌套的子对象的属性',
    'Set/change a property of a list/object.\n- For object, set property by name;\n- For list, use numerical indices starting from 1. Negative indices supported (e.g. -1 for the last item, -2 for the second-to-last item, etc.)\nClick the "+/-" button to set prop of the nested sub-object.',
  ],
  'tooltip.delPropOfObject': [
    '删除列表中第 n 项，或删除对象中指定名称的内容。',
    'Remove the nth item from the list, or property with the specified name from the object.',
  ],
  'tooltip.getPropOfObject': [
    '获取列表第 n 项，或者对象中指定名称的内容。\n- 对于对象，填数据的名称。\n- 对于列表，使用从1开始的数字索引。支持负数索引（例如-2是倒数第二项）\n- 点“+/-”访问嵌套的子对象的属性',
    'Get item from a list or property from an object.\n- For object, get property by name;\n- For list, use numerical indices starting from 1. Negative indices supported (e.g. -1 for the last item etc.)\nClick the "+/-" button to get prop of the nested sub-object.',
  ],
  'tooltip.sizeOfObject': [
    '获取列表/对象中内容的数量。',
    'Get the number of items/properties in the list/object.',
  ],
  'tooltip.ifObjectPropExist': [
    '判断列表是否包含某个内容，或对象是否有某个名称的属性。',
    'Determine whether the list has a certain thing, or if the object has a specific named property.',
  ],
  'tooltip.getPropOfObjectByIdx': [
    '获取对象的第n个属性的键(属性)/值',
    'Get the key/value of the nth property of the object.',
  ],
  'tooltip.getAllProperties': [
    '获取对象的所有键(属性)列表/值列表/[键,值]对列表。',
    'Get list of keys(properties)/values/[key, value] pairs of the object.',
  ],
  'tooltip.mergeObject': [
    '将一个对象中的内容复制一份到另一个对象。\n- 也可用于列表，将一个列表中的内容加到另一个列表的末尾',
    'Copy the contents of one object to another.\n- Can also be used for lists, to append the contents of one list to the end of another list.',
  ],
  'tooltip.setProtoOfObj': [
    '（实验性功能）将一个对象的“原型”设为另一个对象：\n'
        + '- 当读取对象的属性不存在时，如果该对象有原型，则读取原型的属性。\n'
        + '- 通过将多个对象指向同一个“原型”，实现共享通用的属性。\n'
        + '- 例如：将“苹果”、“香蕉”的原型设为“水果”，然后在“水果”中设置苹果和香蕉通用的属性。\n',
    '(Experimental) Set the "prototype" of an object to another object:\n'
        + '- When reading something non-existing in an object, it will read from the prototype of the object;\n'
        + '- Multiple objects can be pointed to the same prototype, enabling them to share common props\n'
        + '- For instance, set the prototype of "apple" and "banana" to "fruit", and set common props of apple and banana in "fruit".',
  ],
  'tooltip.getScratchList': [
    '获取原版 Scratch 列表。\n可以将它传给列表相关积木来实现操作原版列表！',
    'Get the Scratch list.\nYou can manipulate the list by pass it to the list operation blocks!',
  ],
  'tooltip.setScratchList': [
    '将原版列表指向一个列表。\n可以让两个列表指向同一列表。此时操纵其中一个列表都会导致另一个列表也发生改变。',
    'Point the Scratch list to a list.\n- Allows two Scratch lists to refer to the same list. Modifying one of them will update the other as well.',
  ],
};

export default l10n;
