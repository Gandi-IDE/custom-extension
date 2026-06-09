# Lesson 1: Understanding Extension Structure

[中文版](../zh-cn/白猫扩展教程第1课.md)

**Prerequisites**: Basic computer literacy and JavaScript fundamentals.

---

## Getting Started

### 1. Get the Template

The easiest way to write a CCW extension is to start from an existing template. We recommend the **FPS extension** — it's the shortest complete extension in the codebase (~366 lines).

Get it from GitHub:
- [FPS.js template](https://github.com/Gandi-IDE/custom-extension/blob/main/extensions/wit_cat/FPS.js)


### 2. Set Up Your Editor

Install **Visual Studio Code** (VSCode) — the most convenient editor for extension development.

1. Download from the [VSCode download page](https://code.visualstudio.com/download)
2. Install and launch it

### 3. Open the Template

Open the downloaded `FPS.js` in VSCode. You'll see a large block of base64-encoded image data near the top — those are binary assets for the extension icon/cover image. **You don't need to touch that part.** Focus on the actual code below it.

---

## Structure Overview

A CCW extension is composed of several key sections:

| Section | Purpose |
|---------|---------|
| **Bilingual Text** | Language strings for Chinese/English |
| **`getInfo()`** | Extension metadata and block definitions |
| **`menus`** | Drop-down menu options for blocks |
| **Block Implementations** | The actual JavaScript logic for each block |
| **`window.tempExt`** | Registration and publishing configuration |

---

## Bilingual System

CCW supports bilingual extensions (zh-cn / en). The system is built around a key-value map:

```javascript
this._formatMessage = runtime.getFormatMessage({
    "zh-cn": {
        "MyExt.name": "[beta]My Extension",
        "MyExnt.someBlock": "do something [param]",
        // ...
    },
    en: {
        "MyExt.name": "[beta]我的扩展",
        "MyExt.someBlock": "执行操作[param]",
        // ...
    }
});
```

**Key naming convention**: `ExtensionID.functionName` — for example, `WitCatFPS.docs`. This keeps keys organized and avoids collisions.

To use these strings in your code, call `this.formatMessage("MyExt.name")`, which returns the text in the user's current language.

---

## getInfo() — Extension Info & Blocks

The `getInfo()` method returns an object that defines your extension's identity and all its blocks. Here's what it contains:

### Identity Fields

```javascript
getInfo() {
    return {
        id: witcat_fps_extensionId,    // Unique extension ID
        name: this.formatMessage("WitCatFPS.name"),  // Display name (bilingual)
        blockIconURI: witcat_fps_icon, // Icon shown on blocks
        menuIconURI: witcat_fps_icon,  // Icon in menus
        color1: "#EC3838",             // Primary block color
        color2: "#B32B2B",             // Secondary block color
        blocks: [ /* ... */ ],
        menus: { /* ... */ },
    };
}
```

### Block Types

The `blocks` array supports three element types:

#### 1. Button

A clickable button in the block palette:

```javascript
{
    blockType: "button",
    text: this.formatMessage('MyExt.docs'),
    onClick: this.openDocs,  // Function called when clicked
}
```

Use buttons for documentation links, file uploads, or utility actions.

#### 2. Separator Label

A visual divider with text:

```javascript
"---" + this.formatMessage("MyExt.sectionName")
```

#### 3. Block

The actual code blocks users drag into the editor. Four block shapes:

| Shape | `blockType` | Description |
|-------|-------------|-------------|
| Reporter (value) | `reporter` | Returns a value (round shape) |
| Command (stack) | `command` | Executes an action (hat-shaped top) |
| Boolean | `Boolean` | Returns true/false (hexagonal) |
| Hat | `hat` | Triggered by an event (curved top) |

**Example — reporter block with one parameter:**

```javascript
{
    opcode: "myBlock",           // Maps to the implementation method
    blockType: "reporter",
    text: this.formatMessage("MyExt.myBlock"),  // e.g. "compute [fps] at [num]"
    arguments: {
        fps: {
            type: "number",
            defaultValue: '30',
        },
        num: {
            type: "number",
            defaultValue: '5',
        }
    },
}
```

**Parameter types**:

| Type | Description |
|------|-------------|
| `number` | Numeric input |
| `string` | Text input |
| `Boolean` | True/false toggle |
| `menu` | Drop-down selection (see Menus below) |

> **Pro tip**: Default values should be usable examples so users can test your blocks immediately.

---

## Menus

Menus provide pre-defined options that users select from a drop-down.

### Static Menu

```javascript
menus: {
    type: [
        {
            text: this.formatMessage('MyExt.type.1'),  // "enable"
            value: 'true'
        },
        {
            text: this.formatMessage('MyExt.type.2'),  // "disable"
            value: 'false'
        },
    ],
}
```

### Block-Accepting Menu

To allow users to drag a block into the menu slot (for dynamic values):

```javascript
menus: {
    icon: {
        acceptReporters: true,
        items: [
            { text: "Current page icon", value: 'CurrentPage' },
            { text: "CCW icon", value: 'https://m.ccw.site/...' },
        ],
    },
}
```

---

## Block Implementations (opcodes)

Each block's `opcode` maps to a method on your extension class. The method receives an `args` object containing all parameter values.

```javascript
class MyExtension {
    // Method name must match the opcode
    compute(args) {
        // args.fps -> the user's input for the "fps" parameter
        // args.num -> the user's input for the "num" parameter
        return Number(args.num) / (this.scfpsn / Number(args.fps));
    }
}
```

---

## Configuration (`window.tempExt`)

At the bottom of the file, outside the class, you'll find the registration block:

```javascript
window.tempExt = {
    Extension: MyExtension,       // Your class
    info: {
        name: "MyExt.name",       // Key for bilingual name
        description: "MyExt.descp", // Key for bilingual description
        extensionId: my_extensionId,
        iconURL: my_picture,       // Cover image (data URL)
        insetIconURL: my_icon,     // Icon (data URL)
        featured: true,            // Leave as-is
        disabled: false,           // Leave as-is
        collaborator: "YourName @ CCW"   // Your credit
    },
    l10n: {
        "zh-cn": {
            "MyExt.name": "我的扩展",
            "MyExt.descp": "扩展描述"
        },
        en: {
            "MyExt.name": "My Extension",
            "MyExt.descp": "Extension description"
        }
    }
};
```

This is what CCW reads to register your extension in the extension marketplace.

---

## Summary

| Concept | Key Takeaway |
|---------|-------------|
| **Template** | Start from FPS.js — minimal, clean codebase |
| **Bilingual** | Keys map to zh-cn/en text via `formatMessage()` |
| **Blocks** | Defined in `getInfo()` with `opcode`, `blockType`, `text`, `arguments` |
| **Menus** | Static arrays or block-accepting (`acceptReporters: true`) |
| **Implementation** | Methods on your class, matched by `opcode` name |
| **Registration** | `window.tempExt` holds publishing metadata |

In **[Lesson 2](./lesson-2-writing-your-extension.md)**, we'll apply this knowledge to build a real pop-up extension from scratch.

---

## Appendix: FPS.js Source

> The full source code of FPS.js (~366 lines of actual logic + base64 assets) serves as the reference template. The complete code is available at the [GitHub repository](https://github.com/Gandi-IDE/custom-extension/blob/main/wit_cat/FPS.js).
