# Patcher 工具使用文档

[English](../en/patcher-doc.md)

## 简介

Patcher 是一个用于解决 Scratch 扩展对函数 patch 冲突和性能问题的工具。它提供了一种更优雅、更高效的方式来对函数进行 patch，支持注册 before/after 钩子，避免传统 wrapper 方式的层层套娃问题，同时支持 unpatch 清理操作。

> [!NOTE]
> 这是一个 Arkos 开发的工具，位于 gandi-vm 仓库里，并通过 Scratch 对象暴露给 Scratch 扩展使用。

### 传统 patch 方法的缺点

我们经常遇到扩展 Scratch 原有功能的需求。例如，假设我们希望在 Scratch 每一帧的开始、结束时添加一些自定义行为，这需要 patch `runtime._step` 方法（即 Scratch 引擎的主循环）。传统的 patch 方法通常是这样的：

```javascript
const runtimeProto = Object.getPrototypeOf(runtime);
// 记录原函数
const orig = runtimeProto._step;
// 定义新函数，添加自定义逻辑
runtimeProto._step = function(a, b) {
  console.log('before _step:', a, b);
  const result = orig.call(this, a, b);
  console.log('after _step:', result, a, b);
  return result;
};
```

这种方法存在以下缺点：
- 当多个扩展对同一个方法 patch 时，会导致层层套娃，影响性能；
- 而很多时候只是需要在函数前/后执行自定义动作，没必要使用 wrapper 方式
- 无法 unpatch，若直接恢复原函数，会导致其他扩展的 patch 失效

### Patcher 的优点

使用 Patcher 可以解决这些问题：
- 通过 Scratch.Patcher 获取和使用该工具，统一多扩展的 patch 管理
- 支持注册 before、after 钩子，避免 wrapper 层层套娃，提高性能
- 支持 unpatch 清理，且 unpatch 时不会直接替换原函数导致传统 patch 失效

### 原理

- 首次 patch 时，将原函数替换为统一的 patched 代理函数；该 patched 函数一经创建便不再被替换/移除，后续仅通过修改闭包内的变量（before 钩子数组、wrapped 核心函数、after 钩子数组）来更新 patch 逻辑
- unpatch 操作**不会直接恢复原函数**，而是仍然保留空壳的 patched 代理函数，以避免直接恢复原函数导致其他传统 patch 丢失。

## 基本用法

### 创建 Patcher 实例

```javascript
const { Patcher } = Scratch; // 从全局 Scratch 对象中引入 Patcher
const patcher = new Patcher('myExtensionId'); // 可用扩展 ID 作为 patch id
```

### before 钩子示例

```javascript
patcher.patch(runtime, 'exampleMethod', {
  before: function (a, b) {
    console.log('before:', a, b);
    if (a > 10) return a; // 提前返回
  }
});
```

### after 钩子示例

```javascript
patcher.patch(runtime, 'exampleMethod', {
  after: function (result, a, b) {
    console.log('after:', result, a, b);
    return result * 2; // 可修改返回值，无返回值则默认不修改
  }
});
```

### wrapper 模式示例

```javascript
patcher.patch(runtime, 'exampleMethod', function (next, a, b) {
  console.log('do something mysterious');
  return next.call(this, a, b);
});
```

### 在扩展中使用 Patcher

```javascript
(function (Scratch) {
  // 从全局 Scratch 对象中引入 Patcher
  const { Patcher, runtime } = Scratch;
  // 你的扩展类
  class MyExtension {
    constructor() {
      // 1. 创建 Patcher 实例
      this.patcher = new Patcher('myExtensionId'); // 可用扩展 ID 作为 patch id

      // 2. patch 特定方法
      // 注：Patcher会自动查找原型链上的方法（即 runtime.__proto__._step）
      this.patcher.patch(runtime, '_step', {
        // 注册 before 钩子，会在原函数执行前调用
        before: function (a, b) {
          console.log('before:', a, b);
          if (a > 10) {
            // 支持提前返回值（跳过原函数执行）
            return a; 
          }
        },
        // 注册 after 钩子，会在原函数执行后调用
        after: function (result, a, b) {
          console.log('after:', result, a, b);
          // 可以修改返回值。
          return result * 2;
        },
        // 也支持 wrapper 模式（但建议优先使用before/after钩子，避免层层套娃）
        wrapper: function (orig, a, b) {
          console.log('before:', a, b);
          const result = orig.call(this, a, b);
          console.log('after:', result, a, b);
          return result;
        }
      });

      // 可以在必要的时候 unpatch
      // this.patcher.unpatch(runtime, '_step');

      // 清理所有 patch
      // this.patcher.unpatchAll();

      
      // 临时暂停特定 patch
      this.patcher.pause(runtime, '_step');
      // 稍后恢复特定 patch
      this.patcher.resume(runtime, '_step');
    }
    ...
    
  }
})(Scratch);
```
## 高级用法


### 多次 patch

**同一个 patcher**对同一个方法**多次 patch**，默认会覆盖之前的 patch 。

> 这么设计是出于以下考虑：
> - 通常一个扩展对一个方法只会 patch 一次（多次 patch 也可以合并为一个）
> - 避免意外重复应用相同的 patch （例如扩展重复加载）

```javascript
patcher.patch(runtime, '_step', {
  before: function () {
    console.log('1');
  }
});
// 重复 patch 时，会覆盖之前的 patch
patcher.patch(runtime, '_step', {
  before: function () {
    console.log('2');
  }
});
runtime._step();
// 输出:
// 2
```

若要保留多个 patch，需指定不同的 **name** 来区分。
> 注：默认使用 'default'作为 name；同名 patch 会发生覆盖
```javascript
patcher.patch(runtime, '_step', {
  name: '功能1',
  before: function (a, b) {
    console.log('fun1');
  }
});
patcher.patch(runtime, '_step', {
  name: '功能2',
  before: function (a, b) {
    console.log('fun2');
  }
});
// 同名则覆盖之前的 patch
patcher.patch(runtime, '_step', {
  name: '功能2',
  before: function (a, b) {
    console.log('覆盖！');
  }
});
// 移除指定 name 的 patch
patcher.unpatch(runtime, '_step', '功能2');
```

### patch 顺序

支持指定 patch 顺序，顺序越小，执行越早。

可使用预设值：
- `Patcher.ORDER_EARLY（-1）：比其他 patch 先执行
- `Patcher.ORDER_NORMAL（0）：默认值
- `Patcher.ORDER_LATE（1）：比其他 patch 后执行
例如
```javascript
const patcher1 = new Patcher('ext1');
const patcher2 = new Patcher('ext2');
const patcher3 = new Patcher('ext3');
let obj = {
  test: function () {
    console.log('original');
  }
}
patcher1.patch(obj, 'test', {
  order: Patcher.ORDER_LATE,  // 比其他 patch 先执行
  before: function () {
    console.log('ext1');
  }
});
patcher2.patch(obj, 'test', {
  order: Patcher.ORDER_EARLY, // 比其他 patch 后执行
  before: function () {
    console.log('ext2');
  }
});
patcher3.patch(obj, 'test', {
  order: Patcher.ORDER_NORMAL, // 默认值
  before: function () {
    console.log('ext3');
  }
});
obj.test();
// 输出:
// ext2
// ext3
// ext1
// original
```

### Patcher.UNDEFINED
用于在 before / after 钩子中显式返回 undefined：
- before 钩子返回 `Patcher.UNDEFINED` 以提前结束原函数执行（返回普通的 undefined 视为无返回值，继续执行原函数）
- after 钩子返回 `Patcher.UNDEFINED` 以修改原函数返回值为 undefined

## API 参考

### 构造函数

```javascript
new Patcher(id, options)
```

**参数：**
- `id` (string)：patch 的唯一标识符，例如扩展 ID
- `options` (object)：可选配置
  - `patchOwner` (boolean)：是否在拥有该方法的原型上打 patch，默认值为 true

### patch 方法

```javascript
patcher.patch(target, methodName, spec)
```

**作用：** 对目标对象的方法进行 patch。

**参数：**
- `target` (object)：目标对象
- `methodName` (string)：要 patch 的方法名
- `spec` (object)：补丁信息
  - `name` (string)：可选，patch 的名称，默认值为 'default'。同名 patch 会发生覆盖
  - `before` (Function)：before 钩子函数
    - 参数：原函数参数
    - 返回值：
      - 无返回值/返回 undefined 则继续执行原函数；
      - 有返回值则作为原函数的返回值返回，跳过原函数执行；
      - 返回 `Patcher.UNDEFINED` 则跳过原函数执行且返回 undefined
  - `after` (Function)：after 钩子函数
    - 参数：(原函数返回值, ...原函数参数)
    - 返回值：
      - 无返回值/返回 undefined 则不做任何额外处理；
      - 有返回值则修改原函数的返回值，且传递给后续 after 钩子；
      - 返回 `Patcher.UNDEFINED` 则显式修改返回值为 undefined
  - `wrapper` (Function)：包装函数，用于包装新函数
    - 参数：(原函数, ...原函数参数)
    - 返回值：原函数返回值
  - `replace` (Function)：替换函数，将直接替换原函数（不建议使用），其他扩展的 patch 仍有效
  - `patchOnce` (boolean)：是否只 patch 一次
    - 默认值为 false，同 id 的 patcher 多次 patch 同一个函数时，后续 patch 会覆盖之前的 patch
    - 若设置为 true，则后续 patch 会被忽略

**返回值：** boolean，是否成功 patch

### unpatch 方法

```javascript
patcher.unpatch(target, methodName, name='default')
```

**作用：** 对目标对象的方法进行 unpatch

**参数：**
- `target` (object)：目标对象
- `methodName` (string)：要 unpatch 的方法名
- `name` (string)：可选，要 unpatch 的 patch 名称，默认值为 'default'

**返回值：** boolean，是否成功 unpatch

### unpatchAll 方法

```javascript
patcher.unpatchAll()
```

**作用：** 卸载当前 id 的所有 patch

**返回值：** number，成功 unpatch 的方法数量

### listPatches 方法

```javascript
patcher.listPatches()
```

**作用：** 获取当前 id 对哪些 owner 上的方法进行了 patch

**返回值：** Array<{owner: object, methodName: string, name: string}>，patch 信息列表

### getCustomInfo 方法

```javascript
patcher.getCustomInfo()
```

**作用：** 可以存放一些当前 id 的 patcher 的一些额外自定义信息

**返回值：** object，自定义信息对象

### pause 方法

```javascript
patcher.pause(target, methodName, name='default')
```

**作用：** 暂停对目标对象的方法的 patch

**参数：**
- `target` (object)：目标对象
- `methodName` (string)：要暂停 patch 的方法名
- `name` (string)：可选，要暂停 patch 的名称，默认值为 'default'

**返回值：** boolean，是否成功暂停 patch

### resume 方法

```javascript
patcher.resume(target, methodName, name='default')
```

**作用：** 恢复对目标对象的方法的 patch

**参数：**
- `target` (object)：目标对象
- `methodName` (string)：要恢复 patch 的方法名
- `name` (string)：可选，要恢复 patch 的名称，默认值为 'default'

**返回值：** boolean，是否成功恢复 patch

### pauseAll 方法

```javascript
patcher.pauseAll()
```

**作用：** 暂停当前 id 对所有方法的 patch

**返回值：** boolean，是否成功暂停所有 patch

### resumeAll 方法

```javascript
patcher.resumeAll()
```

**作用：** 恢复当前 id 对所有方法的 patch

**返回值：** boolean，是否成功恢复所有 patch