# Lesson 2: Writing Your First Extension

[中文版](../zh-cn/白猫扩展教程第2课.md)

**Objective**: Build a **Pop-up Extension** from the FPS template, implementing browser dialogs and system notifications.

---

## 1. Define Requirements

Before writing code, decide what your extension should do. We'll build an extension with four blocks:

| # | Block | Type | Description |
|---|-------|------|-------------|
| 1 | Browser popup \[content\] | Command | Shows `alert()` with custom text |
| 2 | Ask \[content\] and get user input | Reporter | Shows `prompt()` and returns input |
| 3 | User confirm \[content\] | Boolean | Shows `confirm()` and returns true/false |
| 4 | Win notification \[content\] title \[title\] icon \[icon\] | Command | Sends a system Notification with title and icon |

---

## 2. Fork the Template

Start by copying the FPS.js template from [Lesson 1](./lesson-1-understanding-extension-structure.md). The first task is to replace all template-specific identifiers with your own.

### 2.1 Replace the Extension ID

Press **Ctrl+H** in VSCode to open search-and-replace:

1. **Find**: `WitCatFPS` (the original FPS extension ID)
2. **Replace**: `popUps` (our new extension ID)

Review the highlighted matches in the file preview, then click the **Replace All** button.

### 2.2 Update Registration Info

Find `window.tempExt` at the bottom of the file and update the metadata:

```javascript
window.tempExt = {
    Extension: popUps,
    info: {
        name: "popUps.name",
        description: "popUps.descp",
        extensionId: witcat_popUps_extensionId,
        iconURL: witcat_popUps_picture,
        insetIconURL: witcat_popUps_icon,
        featured: true,
        disabled: false,
        collaborator: "YourName @ CCW"
    },
    l10n: {
        "zh-cn": {
            "popUps.name": "弹窗拓展",
            "popUps.descp": "更多弹窗"
        },
        en: {
            "popUps.name": "Pop-up Extension",
            "popUps.descp": "More pop-ups"
        }
    }
};
```

### 2.3 Rename Global Variables

The template has three global variables for assets. Rename them to avoid collision with other extensions:

| Old Name | New Name |
|----------|----------|
| `witcat_fps_picture` | `witcat_popUps_picture` |
| `witcat_fps_icon` | `witcat_popUps_icon` |
| `witcat_fps_extensionId` | `witcat_popUps_extensionId` |

Again, use **Ctrl+H** to perform these replacements.

### 2.4 Customize the Cover Image & Icon

The base64 strings at the top of the file encode the extension's cover image and icon. To generate your own:

1. Find an online **file-to-data-URL** converter (e.g., [tu.chacuo.net](http://tu.chacuo.net))
2. Upload your image
3. Copy the generated data URL (the full string including `data:image/png;base64,...`)
4. Replace the values of `witcat_popUps_picture` and `witcat_popUps_icon`

> **Note**: These are data URLs, not bare base64 — they include the `data:image/...;base64,` prefix.

---

## 3. Add Bilingual Strings

Update the `_formatMessage` block with the new strings:

```javascript
this._formatMessage = runtime.getFormatMessage({
    "zh-cn": {
        "popUps.name": "弹窗拓展",
        "popUps.popup": "浏览器弹窗[content]",
        "popUps.ask": "询问[content]并获取用户输入",
        "popUps.confirmation": "用户确认[content]",
        "popUps.win": "win消息提示[content]标题[title]图标[icon]",
        "popUps.icon.1": "当前网页图标",
        "popUps.icon.2": "ccw图标",
        "popUps.icon.3": "gandi图标",
        "popUps.docs": "📖拓展教程",
    },
    en: {
        "popUps.name": "Pop-up Extension",
        "popUps.popup": "Browser popup[content]",
        "popUps.ask": "Ask for [content] and get user input",
        "popUps.confirmation": "User confirm [content]",
        "popUps.win": "Win notification [content] title [title] icon [icon]",
        "popUps.icon.1": "Current page icon",
        "popUps.icon.2": "ccw icon",
        "popUps.icon.3": "gandi icon",
        "popUps.docs": "📖 Tutorial",
    }
});
```

**Key principle**: The text between `[brackets]` defines parameter names — these become keys in the `arguments` object of each block.

---

## 4. Define Blocks

Now replace the `blocks` array in `getInfo()` with our four blocks:

### Block 1: Browser Popup (Command)

```javascript
{
    opcode: "popup",
    blockType: "command",
    text: this.formatMessage("popUps.popup"),
    arguments: {
        content: {
            type: "string",
            defaultValue: 'A popup',
        },
    },
},
```

### Block 2: Prompt Input (Reporter)

```javascript
{
    opcode: "ask",
    blockType: "reporter",
    text: this.formatMessage("popUps.ask"),
    arguments: {
        content: {
            type: "string",
            defaultValue: 'Enter something:',
        },
    },
},
```

### Block 3: Confirm Dialog (Boolean)

```javascript
{
    opcode: "confirmation",
    blockType: "Boolean",
    text: this.formatMessage("popUps.confirmation"),
    arguments: {
        content: {
            type: "string",
            defaultValue: 'Are you sure?',
        },
    },
},
```

### Block 4: System Notification (Command with Menu)

```javascript
{
    opcode: "win",
    blockType: "command",
    text: this.formatMessage("popUps.win"),
    arguments: {
        content: {
            type: "string",
            defaultValue: 'Notification body',
        },
        title: {
            type: "string",
            defaultValue: 'Notification title',
        },
        icon: {
            type: "string",
            menu: 'icon',   // References the menu defined below
        },
    },
},
```

---

## 5. Define Menus

Add the `icon` menu to the `menus` object:

```javascript
menus: {
    icon: {
        acceptReporters: true,  // Allow block-dragging into the menu slot
        items: [
            {
                text: this.formatMessage('popUps.icon.1'),
                value: 'CurrentPage'
            },
            {
                text: this.formatMessage('popUps.icon.2'),
                value: 'https://m.ccw.site/community/images/logo-ccw.png'
            },
            {
                text: this.formatMessage('popUps.icon.3'),
                value: 'https://super-static-assets.s3.amazonaws.com/.../favicon.png'
            }
        ]
    },
}
```

---

## 6. Implement Block Logic

Write the actual JavaScript below `getInfo()`:

### Helper: Docs Button

Update the tutorial link:

```javascript
/** Open tutorial */
docs() {
    let a = document.createElement('a');
    a.href = "https://your-tutorial-url.com";  // Replace with your tutorial
    a.rel = "noopener noreferrer";
    a.target = "_blank";
    a.click();
}
```

### Block 1: Browser Popup

```javascript
popup(args) {
    alert(String(args.content));
}
```

### Block 2: Prompt Input

```javascript
ask(args) {
    return prompt(String(args.content));
}
```

### Block 3: Confirm Dialog

```javascript
confirmation(args) {
    return confirm(String(args.content));
}
```

### Block 4: System Notification

This one needs two methods — one to request permission, one to send the notification:

```javascript
async ask_notif_perm() {
    const perm = Notification.permission;
    if (perm === "default") {
        await Notification.requestPermission();
    }
}

async win(args) {
    await this.ask_notif_perm();
    let perm = Notification.permission;
    if (perm !== "granted") {
        console.warn(`popUps: notification permission not granted`);
        return;
    }
    let icon = String(args.icon);
    if (icon === "CurrentPage") {
        // Grab the first <link> tag's href for the current page icon
        icon = document.getElementsByTagName("link")[0].href;
    }
    new Notification(String(args.title), {
        body: String(args.content),
        icon: icon,
    });
}
```

---

## 7. Customize Block Colors

Tweak the extension's look by updating `color1` and `color2` in `getInfo()`:

```javascript
color1: "#EC3838",  // Primary block color
color2: "#B32B2B",  // Secondary color (dividers, background areas)
```

---

## 8. Final Checklist

Before testing your extension:

- [ ] Extension ID is globally unique and consistent everywhere
- [ ] All global variable names are unique to this extension
- [ ] Bilingual strings are complete for both zh-cn and en
- [ ] Every block has a matching `opcode` method
- [ ] Every argument has a sensible `defaultValue`
- [ ] The docs button links to a real tutorial URL
- [ ] `collaborator` follows the `"Name @ CCW"` format
- [ ] Color values are valid hex codes

---

## Summary

In this lesson you learned to:

1. **Fork** an existing extension template and rename all identifiers
2. **Design** bilingual blocks with typed parameters
3. **Build** block-accepting menus for dynamic input
4. **Implement** four types of browser/system pop-ups
5. **Register** your extension with proper metadata

The complete pop-up extension is operational — test it in the CCW editor, then refer to the publishing guide for submission instructions.
