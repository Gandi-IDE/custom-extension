# HTML5 游戏容器

面向共创世界（CCW）/ Gandi IDE 扩展库的正式审核扩展。扩展不包含游戏
逻辑，只在舞台画布上创建一个受约束的 iframe，让已经完成的 HTML5 网页
游戏在舞台内运行。

## 积木

- `加载游戏 [游戏入口文件 / 游戏地址]`
- `关闭游戏`
- `调整显示大小 宽度 [640] 高度 [360]`

默认逻辑视口为 640 × 360，对应 16:9 舞台。其他尺寸会保持比例并居中
缩放到舞台内。

## 游戏地址

正式项目建议填写完整 HTTPS 地址：

```text
https://game.example.com/index.html
```

也可以填写相对于 `extension.js` 的路径，例如审核演示使用：

```text
demo/index.html
```

网页服务器必须允许 iframe 嵌入。如果响应包含 `X-Frame-Options: DENY`、
`X-Frame-Options: SAMEORIGIN`，或 CSP 的 `frame-ancestors` 不允许 CCW，
浏览器会拒绝显示，扩展不能绕过该安全策略。

## 输入与游戏运行

- 鼠标事件由 iframe 内的游戏直接接收。
- 用户点击游戏后，键盘事件由 iframe 内的游戏直接接收。
- JavaScript、Canvas、WebGL、图片和音频仍在原网页环境运行。
- 浏览器的音频自动播放规则仍然有效；有声播放通常需要用户先点击游戏。
- 扩展不读取、不修改游戏 DOM，也不转发或保存输入数据。

## 正式提交

1. Fork 官方 `Gandi-IDE/custom-extension` 仓库。
2. 把本目录复制到：

   ```text
   extensions/html5-game-container/
   ```

3. 在 Gandi 中使用部署后的 `extension.js` 地址测试。
4. 按 `REVIEW.md` 完成人工测试。
5. 发起 Pull Request，申请加入 Gandi 扩展库。

官方运行时使用 `extension.js` 中的 `window.tempExt` 注册信息。
`extension.config.json` 是项目配置和审核辅助文件，不是 Chrome/Firefox
浏览器扩展的 manifest。

## 文件结构

```text
ccw-html5-game-container/
├── extension.js
├── extension.config.json
├── README.md
├── REVIEW.md
├── LICENSE
├── assets/
│   ├── cover.svg
│   └── icon.svg
└── demo/
    └── index.html
```
