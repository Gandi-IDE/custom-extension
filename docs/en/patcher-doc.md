# Patcher Documentation

[中文文档](../zh-cn/patcher-doc.md)

## Introduction

Patcher is a tool designed to solve function patching conflicts and performance issues in Scratch extensions. It provides a more elegant and efficient way to patch functions, supporting before/after hook registration to avoid the nested wrapper problem of traditional approaches, while also supporting unpatch cleanup operations.

### Drawbacks of Traditional Patching Methods

We often encounter the need to extend Scratch's existing functionality. For example, suppose we want to add custom behavior at the beginning and end of each Scratch frame. This requires patching the `runtime._step` method (the main loop of the Scratch engine). Traditional patching methods typically look like this:

```javascript
const runtimeProto = Object.getPrototypeOf(runtime);
// Record the original function
const orig = runtimeProto._step;
// Define a new function with custom logic
runtimeProto._step = function(a, b) {
  console.log('before _step:', a, b);
  const result = orig.call(this, a, b);
  console.log('after _step:', result, a, b);
  return result;
};
```

This approach has several drawbacks:
- When multiple extensions patch the same method, it creates nested wrappers that impact performance
- Many times we only need to execute custom actions before/after the function, making the wrapper approach unnecessary
- No unpatch support: directly restoring the original function would invalidate patches from other extensions

### Advantages of Patcher

Using Patcher solves these problems:
- Access and use the tool through `Scratch.Patcher` for unified patch management across multiple extensions
- Supports before/after hook registration to avoid nested wrappers and improve performance
- Supports unpatch cleanup without directly replacing the original function (which would break traditional patches)

### Principles of Patcher

- On first patch, replaces the original function with a  patched function. Once created, this patched function is never replaced/removed. Subsequent updates modify closure variables (the before hook array, the wrapped core function, the after hook array) to update patch logic
- Unpatch operations **do not directly restore the original function**, but keep the patched function shell to avoid breaking traditional patches from other extensions

## Examples

### Before Hook Example

```javascript
patcher.patch(runtime, 'exampleMethod', {
  before: function (a, b) {
    console.log('before:', a, b);
    if (a > 10) return a; // Early return
  }
});
```

### After Hook Example

```javascript
patcher.patch(runtime, 'exampleMethod', {
  after: function (result, a, b) {
    console.log('after:', result, a, b);
    return result * 2; // Modify return value
  }
});
```

### Wrapper Pattern Example

```javascript
patcher.patch(runtime, 'exampleMethod', function (next, a, b) {
    console.log('before:', a, b);
    const result = next.call(this, a, b);
    console.log('after:', result, a, b);
    return result;
});
```

### Using Patcher in Extensions

```javascript
(function (Scratch) {
  // Import Patcher from the global Scratch object
  const { Patcher, runtime } = Scratch;
  // Your extension class
  class MyExtension {
    constructor() {
      // 1. Create a Patcher instance
      this.patcher = new Patcher('myExtensionId'); // Use extension ID as patch identifier

      // 2. Patch specific methods
      // Note: Patcher automatically finds the method on the prototype chain (runtime.__proto__._step)
      patcher.patch(runtime, '_step', {
        // Register before hook, called before original function executes
        before: function (a, b) {
          console.log('before:', a, b);
          if (a > 10) {
            // Support early return (skips original function execution)
            return a;
          }
        },
        // Register after hook, called after original function executes
        after: function (result, a, b) {
          console.log('after:', result, a, b);
          // Modify return value
          return result * 2;
        },
        // Still supports wrapper pattern (but prefer before/after hooks to avoid nesting)
        wrapper: function (orig, a, b) {
          console.log('before:', a, b);
          const result = orig.call(this, a, b);
          console.log('after:', result, a, b);
          return result;
        }
      });

      // Unpatch when necessary
      // patcher.unpatch(runtime, '_step');
    }

    // 3. Clean up all patches when extension is destroyed
    // Note: Extensions don't have a dispose method yet, this is just a future consideration
    dispose() {
      this.patcher.unpatchAll();
    }

    ...
    
  }
})(Scratch);

```

## Advanced Features

### Multiple Patches

**The same patcher** can patch the same method **multiple times** by specifying different **names** to distinguish them.

- If no name is specified, 'default' is used as the default name.
- Patches with the same name will overwrite each other.

Example:
```javascript
patcher.patch(runtime, '_step', {
  name: 'feature1',
  before: function (a, b) {
    console.log('fun1');
  }
});
patcher.patch(runtime, '_step', {
  name: 'feature2',
  before: function (a, b) {
    console.log('fun2');
  }
});
// Same name overwrites previous patch
patcher.patch(runtime, '_step', {
  name: 'feature2',
  before: function (a, b) {
    console.log('overwrite!');
  }
});
// Remove patch with specified name
patcher.unpatch(runtime, '_step', 'feature2');
```

### patch Order

Supports specifying patch execution order: the smaller the order value, the earlier the patch will be executed.

You can use the following preset values:
- `Patcher.ORDER_EARLY (-1)`: Executes before other patches
- `Patcher.ORDER_NORMAL (0)`: Default value
- `Patcher.ORDER_LATE (1)`: Executes after other patches

For example:
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
  order: Patcher.ORDER_LATE,  // Executes after other patches
  before: function () {
    console.log('ext1');
  }
});
patcher2.patch(obj, 'test', {
  order: Patcher.ORDER_EARLY, // Executes before other patches
  before: function () {
    console.log('ext2');
  }
});
patcher3.patch(obj, 'test', {
  order: Patcher.ORDER_NORMAL, // Default value
  before: function () {
    console.log('ext3');
  }
});
obj.test();
// Output:
// ext2
// ext3
// ext1
// original
```
### Patcher.UNDEFINED

Used to explicitly return undefined in before/after hooks:
- Before hook returns `Patcher.UNDEFINED` to skip original function execution (returning regular undefined means no return value, continuing original function execution)
- After hook returns `Patcher.UNDEFINED` to explicitly set return value to undefined

## API Reference

### Constructor

```javascript
new Patcher(id, options)
```

**Parameters:**
- `id` (string): Unique identifier for the patch, e.g., extension ID
- `options` (object): Optional configuration
  - `patchOwner` (boolean): Whether to patch the method on the prototype that owns it, default value is true

### patch Method

```javascript
patcher.patch(target, methodName, spec)
```

**Purpose:** Patch a method on the target object. Note: Each patcher instance can only patch a method once. Subsequent patches with the same ID will overwrite previous ones.

**Parameters:**
- `target` (object): Target object
- `methodName` (string): Name of the method to patch
- `spec` (object): Patch information
  - `name` (string): Optional, name of the patch, default value is 'default'
  - `before` (Function): Before hook function
    - Parameters: Original function parameters
    - Return value:
      - No return value/undefined: Continue executing original function
      - Any other value: Use as return value instead of executing original function
      - `Patcher.UNDEFINED`: Skip original function execution and return undefined
  - `after` (Function): After hook function
    - Parameters: (Original function return value, ...original function parameters)
    - Return value:
      - No return value/undefined: No additional processing
      - Any other value: Modify return value and pass to subsequent after hooks
      - `Patcher.UNDEFINED`: Explicitly set return value to undefined
  - `wrapper` (Function): Wrapper function for wrapping the new function
    - Parameters: (Original function, ...original function parameters)
    - Return value: Original function return value
  - `replace` (Function): Replacement function to directly replace the original function (not recommended), patches from other extensions still work
  - `patchOnce` (boolean): Whether to patch only once
    - Default: false, subsequent patches with the same ID overwrite previous ones
    - If true: Only patch once, subsequent patches are ignored

**Return value:** boolean indicating whether patching succeeded

### unpatch Method

```javascript
patcher.unpatch(target, methodName, name='default')
```

**Purpose:** Unpatch a method on the target object

**Parameters:**
- `target` (object): Target object
- `methodName` (string): Name of the method to unpatch
- `name` (string): Optional, name of the patch to unpatch, default value is 'default'

**Return value:** boolean indicating whether unpatching succeeded

### unpatchAll Method

```javascript
patcher.unpatchAll()
```

**Purpose:** Uninstall all patches for the current ID

**Return value:** Number of successfully unpatch methods

### listPatches Method

```javascript
patcher.listPatches()
```

**Purpose:** Get information about which methods on which owners have been patched by the current ID

**Return value:** Array<{owner: object, methodName: string, name: string}> containing patch information

### getCustomInfo Method

```javascript
patcher.getCustomInfo()
```

**Purpose:** Store additional custom information for the current ID's patcher

**Return value:** Object containing custom information

### pause Method

```javascript
patcher.pause(target, methodName, name='default')
```

**Purpose:** Pause patching a method on the target object

**Parameters:**
- `target` (object): Target object
- `methodName` (string): Name of the method to pause patching
- `name` (string): Optional, name of the patch to pause, default value is 'default'

**Return value:** boolean indicating whether pausing succeeded

### resume Method

```javascript
patcher.resume(target, methodName, name='default')
```

**Purpose:** Resume patching a method on the target object

**Parameters:**
- `target` (object): Target object
- `methodName` (string): Name of the method to resume patching
- `name` (string): Optional, name of the patch to resume, default value is 'default'

**Return value:** boolean indicating whether resuming succeeded

### pauseAll Method

```javascript
patcher.pauseAll()
```

**Purpose:** Pause all patches for the current ID

**Return value:** boolean indicating whether all patches were successfully paused

### resumeAll Method

```javascript
patcher.resumeAll()
```

**Purpose:** Resume all patches for the current ID

**Return value:** boolean indicating whether all patches were successfully resumed
