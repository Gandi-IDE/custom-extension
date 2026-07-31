/*
 * HTML5 Game Container for Gandi IDE / CCW
 * Formal CCW approved-extension entry.
 * SPDX-License-Identifier: LGPL-2.1-or-later
 */
(function () {
  'use strict'

  const EXTENSION_ID = 'html5GameContainer'
  const STAGE_WIDTH = 640
  const STAGE_HEIGHT = 360
  const MIN_SIZE = 1
  const MAX_SIZE = 8192

  const extensionScriptURL =
    document.currentScript && document.currentScript.src
      ? document.currentScript.src
      : ''

  const assetURL = relativePath => {
    if (!extensionScriptURL) return relativePath
    return new URL(relativePath, extensionScriptURL).href
  }

  class HTML5GameContainer {
    constructor(runtime) {
      this.runtime = runtime
      this.gameWidth = STAGE_WIDTH
      this.gameHeight = STAGE_HEIGHT
      this.stageCanvas = null
      this.container = null
      this.iframe = null
      this.resizeObserver = null
      this.positionFrame = null
      this.lastLayoutKey = ''

      this.updatePosition = this.updatePosition.bind(this)
      this.closeGame = this.closeGame.bind(this)

      this.formatMessage = runtime.getFormatMessage({
        'zh-cn': {
          'html5GameContainer.name': 'HTML5 游戏容器',
          'html5GameContainer.load': '加载游戏 [URL]',
          'html5GameContainer.close': '关闭游戏',
          'html5GameContainer.resize': '调整显示大小 宽度 [WIDTH] 高度 [HEIGHT]'
        },
        en: {
          'html5GameContainer.name': 'HTML5 Game Container',
          'html5GameContainer.load': 'load game [URL]',
          'html5GameContainer.close': 'close game',
          'html5GameContainer.resize':
            'set display size width [WIDTH] height [HEIGHT]'
        }
      })

      if (runtime && typeof runtime.on === 'function') {
        runtime.on('PROJECT_STOP_ALL', this.closeGame)
        runtime.on('RUNTIME_DISPOSED', this.closeGame)
      }
    }

    message(id) {
      return this.formatMessage({
        id,
        default: id,
        description: id
      })
    }

    getInfo() {
      return {
        id: EXTENSION_ID,
        name: this.message('html5GameContainer.name'),
        color1: '#5865F2',
        color2: '#4752C4',
        color3: '#36409E',
        menuIconURI: assetURL('./assets/icon.svg'),
        blockIconURI: assetURL('./assets/icon.svg'),
        blocks: [
          {
            opcode: 'loadGame',
            blockType: 'command',
            text: this.message('html5GameContainer.load'),
            arguments: {
              URL: {
                type: 'string',
                defaultValue: 'demo/index.html'
              }
            }
          },
          {
            opcode: 'closeGame',
            blockType: 'command',
            text: this.message('html5GameContainer.close')
          },
          {
            opcode: 'resizeGame',
            blockType: 'command',
            text: this.message('html5GameContainer.resize'),
            arguments: {
              WIDTH: {
                type: 'number',
                defaultValue: STAGE_WIDTH
              },
              HEIGHT: {
                type: 'number',
                defaultValue: STAGE_HEIGHT
              }
            }
          }
        ]
      }
    }

    findStageCanvas() {
      const renderer = this.runtime && this.runtime.renderer
      const rendererCanvas =
        renderer &&
        (renderer.canvas ||
          (renderer._gl && renderer._gl.canvas) ||
          (renderer.gl && renderer.gl.canvas))

      if (
        rendererCanvas &&
        rendererCanvas.nodeName === 'CANVAS' &&
        rendererCanvas.isConnected
      ) {
        return rendererCanvas
      }

      const visibleCanvases = Array.from(
        document.querySelectorAll('canvas')
      ).filter(canvas => {
        const rect = canvas.getBoundingClientRect()
        const style = getComputedStyle(canvas)
        if (
          rect.width < 160 ||
          rect.height < 90 ||
          style.display === 'none' ||
          style.visibility === 'hidden'
        ) {
          return false
        }

        const aspectRatio = rect.width / rect.height
        return aspectRatio >= 1.3 && aspectRatio <= 1.9
      })

      visibleCanvases.sort((a, b) => {
        const aRect = a.getBoundingClientRect()
        const bRect = b.getBoundingClientRect()
        return bRect.width * bRect.height - aRect.width * aRect.height
      })

      return visibleCanvases[0] || null
    }

    resolveGameURL(value) {
      const input = String(value == null ? '' : value).trim()
      if (!input) {
        throw new Error('游戏入口文件或地址不能为空。')
      }

      let url
      try {
        if (/^[a-zA-Z][a-zA-Z\d+.-]*:/.test(input)) {
          url = new URL(input)
        } else {
          if (!extensionScriptURL) {
            throw new Error('relative-url-without-extension-base')
          }
          url = new URL(input, extensionScriptURL)
        }
      } catch (error) {
        throw new Error(
          '游戏地址无效。请填写完整 HTTPS 地址，或填写相对于 extension.js 的路径。'
        )
      }

      const isLocalDevelopment =
        url.protocol === 'http:' &&
        ['127.0.0.1', 'localhost', '[::1]'].includes(url.hostname)

      if (url.protocol !== 'https:' && !isLocalDevelopment) {
        throw new Error('发布环境只允许 HTTPS 游戏地址。')
      }

      return url.href
    }

    createContainer() {
      const container = document.createElement('div')
      container.dataset.ccwHtml5GameContainer = EXTENSION_ID
      container.setAttribute('aria-label', 'HTML5 game container')

      Object.assign(container.style, {
        position: 'fixed',
        display: 'block',
        overflow: 'hidden',
        margin: '0',
        padding: '0',
        border: '0',
        background: '#000',
        pointerEvents: 'auto',
        zIndex: '100',
        isolation: 'isolate'
      })

      return container
    }

    createIframe(gameURL) {
      const iframe = document.createElement('iframe')
      iframe.src = gameURL
      iframe.title = 'HTML5 game'
      iframe.allow =
        'autoplay; fullscreen; gamepad; clipboard-read; clipboard-write'
      iframe.allowFullscreen = true
      iframe.loading = 'eager'
      iframe.setAttribute('scrolling', 'no')
      iframe.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin')
      iframe.setAttribute(
        'sandbox',
        [
          'allow-downloads',
          'allow-forms',
          'allow-modals',
          'allow-pointer-lock',
          'allow-same-origin',
          'allow-scripts'
        ].join(' ')
      )

      Object.assign(iframe.style, {
        position: 'absolute',
        display: 'block',
        left: '50%',
        top: '50%',
        margin: '0',
        padding: '0',
        border: '0',
        background: '#000',
        transformOrigin: 'center center'
      })

      iframe.addEventListener('load', () => {
        iframe.focus()
      })

      return iframe
    }

    loadGame(args) {
      const canvas = this.findStageCanvas()
      if (!canvas) {
        throw new Error('未找到 Gandi/Scratch 舞台画布。')
      }

      const gameURL = this.resolveGameURL(args && args.URL)
      this.closeGame()

      this.stageCanvas = canvas
      this.container = this.createContainer()
      this.iframe = this.createIframe(gameURL)
      this.container.appendChild(this.iframe)
      document.body.appendChild(this.container)

      window.addEventListener('resize', this.updatePosition, { passive: true })
      window.addEventListener('scroll', this.updatePosition, {
        passive: true,
        capture: true
      })

      if (typeof ResizeObserver !== 'undefined') {
        this.resizeObserver = new ResizeObserver(this.updatePosition)
        this.resizeObserver.observe(canvas)
      }

      this.updatePosition()
      this.watchStagePosition()
    }

    resizeGame(args) {
      this.gameWidth = this.normalizeDimension(
        args && args.WIDTH,
        STAGE_WIDTH
      )
      this.gameHeight = this.normalizeDimension(
        args && args.HEIGHT,
        STAGE_HEIGHT
      )
      this.lastLayoutKey = ''
      this.updatePosition()
    }

    normalizeDimension(value, fallback) {
      const number = Number(value)
      if (!Number.isFinite(number)) return fallback
      return Math.min(MAX_SIZE, Math.max(MIN_SIZE, Math.round(number)))
    }

    updatePosition() {
      if (!this.container || !this.iframe) return

      if (!this.stageCanvas || !this.stageCanvas.isConnected) {
        this.stageCanvas = this.findStageCanvas()
      }

      if (!this.stageCanvas) {
        this.container.style.display = 'none'
        return
      }

      const rect = this.stageCanvas.getBoundingClientRect()
      const isVisible =
        rect.width > 0 &&
        rect.height > 0 &&
        rect.right > 0 &&
        rect.bottom > 0 &&
        rect.left < window.innerWidth &&
        rect.top < window.innerHeight

      this.container.style.display = isVisible ? 'block' : 'none'
      if (!isVisible) return

      const layoutKey = [
        rect.left,
        rect.top,
        rect.width,
        rect.height,
        this.gameWidth,
        this.gameHeight
      ]
        .map(number => Math.round(number * 100) / 100)
        .join(':')

      if (layoutKey === this.lastLayoutKey) return
      this.lastLayoutKey = layoutKey

      Object.assign(this.container.style, {
        left: `${rect.left}px`,
        top: `${rect.top}px`,
        width: `${rect.width}px`,
        height: `${rect.height}px`
      })

      const scale = Math.min(
        rect.width / this.gameWidth,
        rect.height / this.gameHeight
      )

      Object.assign(this.iframe.style, {
        width: `${this.gameWidth}px`,
        height: `${this.gameHeight}px`,
        transform: `translate(-50%, -50%) scale(${scale})`
      })
    }

    watchStagePosition() {
      if (!this.container) return
      this.updatePosition()
      this.positionFrame = requestAnimationFrame(() =>
        this.watchStagePosition()
      )
    }

    closeGame() {
      if (this.positionFrame !== null) {
        cancelAnimationFrame(this.positionFrame)
        this.positionFrame = null
      }

      if (this.resizeObserver) {
        this.resizeObserver.disconnect()
        this.resizeObserver = null
      }

      window.removeEventListener('resize', this.updatePosition)
      window.removeEventListener('scroll', this.updatePosition, true)

      if (this.iframe) {
        this.iframe.src = 'about:blank'
      }
      if (this.container) {
        this.container.remove()
      }

      this.stageCanvas = null
      this.container = null
      this.iframe = null
      this.lastLayoutKey = ''
    }

    dispose() {
      this.closeGame()

      if (this.runtime && typeof this.runtime.off === 'function') {
        this.runtime.off('PROJECT_STOP_ALL', this.closeGame)
        this.runtime.off('RUNTIME_DISPOSED', this.closeGame)
      }
    }
  }

  window.tempExt = {
    Extension: HTML5GameContainer,
    info: {
      name: 'html5GameContainer.extensionName',
      description: 'html5GameContainer.description',
      extensionId: EXTENSION_ID,
      iconURL: assetURL('./assets/cover.svg'),
      insetIconURL: assetURL('./assets/icon.svg'),
      featured: false,
      disabled: false,
      collaborator: 'jiayan'
    },
    l10n: {
      'zh-cn': {
        'html5GameContainer.extensionName': 'HTML5 游戏容器',
        'html5GameContainer.description':
          '在 Gandi/Scratch 舞台内显示完整的 HTML5 网页游戏。'
      },
      en: {
        'html5GameContainer.extensionName': 'HTML5 Game Container',
        'html5GameContainer.description':
          'Display a complete HTML5 web game inside the Gandi/Scratch stage.'
      }
    }
  }
})()
