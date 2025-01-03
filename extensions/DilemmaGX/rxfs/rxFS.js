const ext_cover = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiCiAgICB3aWR0aD0iNTk5Ljk5OTk5IiBoZWlnaHQ9IjMwMC4wMDAwMSIgdmlld0JveD0iMCwwLDU5OS45OTk5OSwzMDAuMDAwMDEiPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjAsLTI5Ljk5OTk5KSI+CiAgICAgICAgPGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIKICAgICAgICAgICAgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIgogICAgICAgICAgICBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0tNjAsMzI5Ljk5OTk5di0zMDBoNTk5Ljk5OTk5djMwMHoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IgogICAgICAgICAgICAgICAgZmlsbD0iIzAwMDI1MiIgLz4KICAgICAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgIGQ9Ik01MzkuOTk5OTksMzB2MzAwaC0zNzAuOTk5OTl2LTMzaDgydi0zNGgxNnYtMzNoLTR2LTMzaC0yNTIuOTk5OTl2LTM0aDQ5di0zM2gxNzN2LTMzaC00MnYtMzRoLTE2N3YtMzNoMTEweiIKICAgICAgICAgICAgICAgIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSIjMmQwMGQxIiAvPgogICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICAgZD0iTTUzOS45OTk5OSwzMHYzMDBoLTM3OS45OTk5OXYtMzNoLTM5di0zNGgxMnYtMzNoNTh2LTMzaDUzdi0zNGgtOTF2LTMzaDExNnYtMzNoLTEwNHYtMzRoMzR2LTMzaC03OXoiCiAgICAgICAgICAgICAgICBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iI2IzMDBhYiIgLz4KICAgICAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgIGQ9Ik01MzkuOTk5OTksMzB2MzAwaC0zNDQuOTk5OTl2LTMzaC0zNnYtMzRoLTYxdi0zM2gxMDl2LTMzaDI1di0zNGgtMzl2LTMzaDk3bC0wLjMzMzMzLC0yNy4wODIyNmwtMTYxLDAuMDgyMjZsMC4zMzMzMywtNDBoMTAxdi0zM2gxNHoiCiAgICAgICAgICAgICAgICBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iIzA2MDBkZSIgLz4KICAgICAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgIGQ9Ik01MzkuOTk5OTksMzB2MzAwaC0zNTUuOTk5OTl2LTMzaDY0di0zNGg4OXYtMzNoLTQxdi0zM2gzNXYtMzRoLTEyN3YtMzNoNDR2LTMzaC01MHYtMzRoLTM4di0zM2gzM3oiCiAgICAgICAgICAgICAgICBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iIzM5MDBkMSIgLz4KICAgICAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgIGQ9Ik01MzkuOTk5OTgsMzB2MzAwaC0zMTguOTk5OTl2LTMzaDY0di0zNGgtODV2LTMzaDEzNXYtMzNoNTB2LTM0aC00NC45MTY2NmwtNC45ODQyNiwxLjI3OTY5bC02OS4wMTU3NCwtMC42MTMwMmwtNC41LC0wLjY2NjY3aC02My41ODMzM3YtMzNoMTQydi0zM2gtNTB2LTM0aC00MHYtMzNoNzB6IgogICAgICAgICAgICAgICAgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiM5NzAwZTYiIC8+CiAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgICBkPSJNNTM5Ljk5OTk4LDMwdjMwMGgtMjIwdi0zM2g4NHYtMzRoLTE0N3YtMzNoMTM1di0zM2gtMTQ0Ljk5OTk5di0zNGgxNi43NWw2LjA1NTU2LDEuMDU1NTZsMzMuNjQxLC0wLjE5MjM4bDM2LjEzNjc4LC0wLjg2MzE4aDY1LjQxNjY3di0zM2gtNDB2LTMzaC01NXYtMzRoLTI0di0zM2g1NXoiCiAgICAgICAgICAgICAgICBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0iIzViMDBjNCIgLz4KICAgICAgICAgICAgPHBhdGgKICAgICAgICAgICAgICAgIGQ9Ik01MzguNDk4NSwzMHYzMDBoLTIxOC45OTk5OXYtMzNoN3YtMzRoLTMxdi0zM2g4MHYtMzNoLTEzdi0zNGgtMjEuMDgzMzRsLTYuNSwxLjY2NjY3bC0zNC4xMTUxNiwtMC4yOTYwMWwtMC4xNjk2OSwtMzQuMDg2NTdsMjYuODY4MTgsLTAuMjg0MDl2LTMzaC0zMnYtMzRoMjV2LTMzaDM2eiIKICAgICAgICAgICAgICAgIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9IiBmaWxsPSIjODMwMGI4IiAvPgogICAgICAgICAgICA8cGF0aAogICAgICAgICAgICAgICAgZD0iTTUzOS45OTk5OSwzMHYzMDBoLTEzMnYtMzNoLTl2LTM0aDI3di0zM2gtODB2LTMzaDExMnYtMzRoLTY5di0zM2g2MXYtMzNoLTc1di0zNGg5NXYtMzNoLTV6IgogICAgICAgICAgICAgICAgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiNjOTAwYzMiIC8+CiAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgICBkPSJNNTM5Ljk5OTk5LDMwdjMwMGgtMTMydi0zM2g0MXYtMzRoNXYtMzNoMzB2LTMzaDV2LTM0aC0zOHYtMzNoNnYtMzNoLTQwdi0zNGgtMnYtMzNoMjZ6IgogICAgICAgICAgICAgICAgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiM5ZTAwNzEiIC8+CiAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgICBkPSJNNTM5Ljk5OTk5LDMwdjMwMGgtNjB2LTMzaDM4di0zNGgxMHYtMzNoLTE4di0zM2gtNjl2LTM0aDc1di0zM2gtMTV2LTMzaC0xOXYtMzRoNDh2LTMzaDd6IgogICAgICAgICAgICAgICAgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9IiM5MTAwMDYiIC8+CiAgICAgICAgICAgIDxwYXRoCiAgICAgICAgICAgICAgICBkPSJNMjM5Ljk5OTk1LDEyOC4yNjIyMWg2OC45ODM2NWM5LjUyNDgzLDAgMTcuMjQ2MDksNy43MjEyNyAxNy4yNDYwOSwxNy4yNDU4NnY4Ni4yMjk3NGMwLDkuNTI0NTkgLTcuNzIxMjcsMTcuMjQ1ODYgLTE3LjI0NjA5LDE3LjI0NTg2aC0xMzcuOTY3MjljLTkuNTI0ODMsMCAtMTcuMjQ1OTgsLTcuNzIxMjcgLTE3LjI0NTk4LC0xNy4yNDU4NnYtMTAzLjQ3NTYyYzAsLTkuNTcxNDggNy42NzQ0OSwtMTcuMjQ1ODYgMTcuMjQ1OTgsLTE3LjI0NTg2aDUxLjczNzc3eiIKICAgICAgICAgICAgICAgIGZpbGw9IiNmZmI5MDAiIC8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=";

const folder = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOC40NjI1IiBoZWlnaHQ9IjI3LjciIHZpZXdCb3g9IjAsMCwyOC40NjI1LDI3LjciPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMjYuMDE5NTMsLTE2NC4xMTg3NSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbD0iIzk5NjZmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IlNhbnMgU2VyaWYiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIGZvbnQtc2l6ZT0iNDAiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDIyNi4yNjk1MywxODUuNzY4NzUpIHNjYWxlKDAuNSwwLjUpIiBmb250LXNpemU9IjQwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSIjOTk2NmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0iU2FucyBTZXJpZiIgZm9udC13ZWlnaHQ9Im5vcm1hbCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHRzcGFuIHg9IjAiIGR5PSIwIj7wn5OBPC90c3Bhbj48L3RleHQ+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MTMuOTgwNDY4NzU6MTUuODgxMjQ5MjM3MDYwNTMtLT4=";
const file = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyOC40NjI1IiBoZWlnaHQ9IjI3LjciIHZpZXdCb3g9IjAsMCwyOC40NjI1LDI3LjciPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMjYuMDE5NTMsLTE2NC4xMTg3NSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbD0iIzk5NjZmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IlNhbnMgU2VyaWYiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIGZvbnQtc2l6ZT0iNDAiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDIyNi4yNjk1MywxODUuNzY4NzUpIHNjYWxlKDAuNSwwLjUpIiBmb250LXNpemU9IjQwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSIjOTk2NmZmIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0iU2FucyBTZXJpZiIgZm9udC13ZWlnaHQ9Im5vcm1hbCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHRzcGFuIHg9IjAiIGR5PSIwIj7wn5ODPC90c3Bhbj48L3RleHQ+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MTMuOTgwNDY4NzU6MTUuODgxMjQ5NjE4NTMwMjYyLS0+";

const zhcn = {
  "rc.rxblocks.rxfs.save": "保存文件系统",
  "rc.rxblocks.rxfs.start": "新建[STR]",
  "rc.rxblocks.rxfs.folder": "设置[STR]为[STR2]",
  "rc.rxblocks.rxfs.sync": "将[STR]的位置更改为[STR2]",
  "rc.rxblocks.rxfs.del": "删除[STR]",
  "rc.rxblocks.rxfs.webin": "❌从网络加载[STR]", "rc.rxblocks.rxfs.webin.tip": "功能被和谐掉了",
  "rc.rxblocks.rxfs.open": "打开[STR]",
  "rc.rxblocks.rxfs.clean": "清空文件系统",
  "rc.rxblocks.rxfs.in": "从[STR]导入文件系统",
  "rc.rxblocks.rxfs.out": "导出文件系统",
  "rc.rxblocks.rxfs.list": "列出[STR]下的所有文件",
  "rc.rxblocks.rxfs.search": "搜索[STR]",
  "rc.rxblocks.rxfs.searchin": "搜索文件内容[STR]",

  "rc.rxblocks.rxfs.folder_default": "rxFS 4!",
};

const enus = {
  "rc.rxblocks.rxfs.save": "Save file system",
  "rc.rxblocks.rxfs.start": "Create [STR]",
  "rc.rxblocks.rxfs.folder": "Set [STR] to [STR2]",
  "rc.rxblocks.rxfs.sync": "Change the location of [STR] to [STR2]",
  "rc.rxblocks.rxfs.del": "Delete [STR]",
  "rc.rxblocks.rxfs.webin": "❌Load [STR] from the web",
  "rc.rxblocks.rxfs.webin.tip": "Disabled in Gandi for safety issues",
  "rc.rxblocks.rxfs.open": "Open [STR]",
  "rc.rxblocks.rxfs.clean": "Clear the file system",
  "rc.rxblocks.rxfs.in": "Import file system from [STR]",
  "rc.rxblocks.rxfs.out": "Export file system",
  "rc.rxblocks.rxfs.list": "List all files under [STR]",
  "rc.rxblocks.rxfs.search": "Search [STR]",
  "rc.rxblocks.rxfs.searchin": "Search file contents [STR]",

  "rc.rxblocks.rxfs.folder_default": "rxFS 4!",
};

class rxFS {
  runtime;

  _formatMessage;

  constructor(runtime) {
    this.rxFSfi = [];
    this.rxFSsy = [];
    this.runtime = runtime;
    this._formatMessage = runtime.getFormatMessage({
      'zh-cn': zhcn,
      en: enus,
    });
  }

  /**
   * Translate
   * @param {keyof zhcn | keyof enus} id
   * @returns
   */
  formatMessage(id) {
    return this._formatMessage({
      id,
      default: id,
      description: id,
    });
  }

  getInfo() {
    return {
      id: 'rxfs',
      name: 'rxFS',
      color1: '#192d50',
      color2: '#192d50',
      color3: '#192d50',
      blocks: [
        {
          blockIconURI: file,
          opcode: 'start',
          blockType: 'command',
          text: this.formatMessage('rc.rxblocks.rxfs.start'),
          // text: formatMessage({ id: 'rc.rxblocks.rxfs.start', default: 'Create [STR]' }),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: '/rxFS/example',
            },
          },
        },
        {
          blockIconURI: file,
          opcode: 'folder',
          blockType: 'command',
          text: this.formatMessage('rc.rxblocks.rxfs.folder'),
          // text: formatMessage({ id: 'rc.rxblocks.rxfs.folder', default: 'Set [STR] to [STR2]' }),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: '/rxFS/example',
            },
            STR2: {
              type: 'string',
              defaultValue: this.formatMessage('rc.rxblocks.rxfs.folder_default'),
              // defaultValue: formatMessage({ id: 'rc.rxblocks.rxfs.folder_default', default: 'rxFS 3!' }),
            },
          },
        },
        {
          blockIconURI: file,
          opcode: 'sync',
          blockType: 'command',
          text: this.formatMessage('rc.rxblocks.rxfs.sync'),
          // text: formatMessage({ id: 'rc.rxblocks.rxfs.sync', default: 'Change the location of [STR] to [STR2]' }),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: '/rxFS/example',
            },
            STR2: {
              type: 'string',
              defaultValue: '/rxFS/example',
            },
          },
        },
        {
          blockIconURI: file,
          opcode: 'del',
          blockType: 'command',
          text: this.formatMessage('rc.rxblocks.rxfs.del'),
          // text: formatMessage({ id: 'rc.rxblocks.rxfs.del', default: 'Delete [STR]' }),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: '/rxFS/example',
            },
          },
        },
        {
          blockIconURI: file,
          opcode: 'webin',
          blockType: 'reporter',
          text: this.formatMessage('rc.rxblocks.rxfs.webin'),
          tooltip: this.formatMessage('rc.rxblocks.rxfs.webin.tip'),
          hideFromPalette: true,
          // text: formatMessage({ id: 'rc.rxblocks.rxfs.webin', default: 'Load [STR] from the web' }),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: 'https://0832k12.github.io/rxFS/hello.txt',
            },
          },
        },
        {
          blockIconURI: file,
          opcode: 'open',
          blockType: 'reporter',
          text: this.formatMessage('rc.rxblocks.rxfs.open'),
          // text: formatMessage({ id: 'rc.rxblocks.rxfs.open', default: 'Open [STR]' }),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: '/rxFS/example',
            },
          },
        },
        '---',
        {
          blockIconURI: folder,
          opcode: 'clean',
          blockType: 'command',
          text: this.formatMessage('rc.rxblocks.rxfs.clean'),
          // text: formatMessage({ id: 'rc.rxblocks.rxfs.clean', default: 'Clear the file system' }),
          arguments: {},
        },
        {
          blockIconURI: folder,
          opcode: 'in',
          blockType: 'command',
          text: this.formatMessage('rc.rxblocks.rxfs.in'),
          // text: formatMessage({ id: 'rc.rxblocks.rxfs.in', default: 'Import file system from [STR]' }),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: '/rxFS/',
            },
          },
        },
        {
          blockIconURI: folder,
          opcode: 'out',
          blockType: 'reporter',
          text: this.formatMessage('rc.rxblocks.rxfs.out'),
          // text: formatMessage({ id: 'rc.rxblocks.rxfs.out', default: 'Export file system' }),
          arguments: {},
        },
        {
          blockIconURI: folder,
          opcode: 'list',
          blockType: 'reporter',
          text: this.formatMessage('rc.rxblocks.rxfs.list'),
          // text: formatMessage({ id: 'rc.rxblocks.rxfs.list', default: 'List all files under [STR]' }),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: '/rxFS/',
            },
          },
        },
        {
          blockIconURI: folder,
          opcode: 'search',
          blockType: 'reporter',
          text: this.formatMessage('rc.rxblocks.rxfs.search'),
          // text: formatMessage({ id: 'rc.rxblocks.rxfs.search', default: 'Search [STR]' }),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: '/rxFS/example',
            },
          },
        },
        {
          blockIconURI: folder,
          opcode: 'searchin',
          blockType: 'reporter',
          text: this.formatMessage('rc.rxblocks.rxfs.searchin'),
          // text: formatMessage({ id: 'rc.rxblocks.rxfs.searchin', default: 'Search file contents [STR]' }),
          arguments: {
            STR: {
              type: 'string',
              defaultValue: '',
            },
          },
        },
      ],
    };
  }

  clean() {
    this.rxFSfi = [];
    this.rxFSsy = [];
  }

  sync({ STR, STR2 }) {
    const str = STR;
    const str2 = STR2;
    if (this.rxFSsy.indexOf(str) + 1 == 0) {
      this.rxFSsy[this.rxFSsy.indexOf(str) + 1 - 1] = str2;
    }
  }

  start({ STR }) {
    const str = STR;
    if (!(str.charAt(str.length - 1) == '/') && this.rxFSsy.indexOf(str) + 1 == 0) {
      this.rxFSfi.splice(this.rxFSfi.length + 1 - 1, 0, null);
      this.rxFSsy.splice(this.rxFSsy.length + 1 - 1, 0, str);
    }
  }

  open({ STR }) {
    return this.rxFSfi[this.rxFSsy.indexOf(STR) + 1 - 1];
  }

  del({ STR }) {
    const str = STR;
    this.rxFSfi[this.rxFSsy.indexOf(str) + 1 - 1] = void 0;
    this.rxFSsy[this.rxFSsy.indexOf(str) + 1 - 1] = void 0;
  }

  folder({ STR, STR2 }) {
    this.rxFSfi[this.rxFSsy.indexOf(STR) + 1 - 1] = STR2;
  }

  searchin({ STR }) {
    const Search = [];
    let i;
    for (const i_index in this.rxFSfi) {
      i = this.rxFSfi[i_index];
      if (i.indexOf(STR) + 1 != 0) {
        Search.push(this.rxFSsy[i_index]);
      }
    }
    return JSON.stringify(Search);
  }

  search({ STR }) {
    const Search = [];
    let i;
    for (const i_index in this.rxFSsy) {
      i = this.rxFSsy[i_index];
      if (i.indexOf(STR) + 1 != 0) {
        Search.push(i);
      }
    }
    return JSON.stringify(Search);
  }

  list({ STR }) {
    const Search = [];
    let i;
    if (STR.slice(-1) == '/') {
      for (const i_index in this.rxFSsy) {
        i = this.rxFSsy[i_index];
        if (i.indexOf(STR) + 1 == 1) {
          Search.push(i);
        }
      }
    }
    return JSON.stringify(Search);
  }

  webin({ STR }) {
    return 'undefined';
  }

  in({ STR }) {
    try {
      this.rxFSfi = JSON.parse(decodeURIComponent(STR.slice(0, STR.indexOf('|') + 1 - 1)));
      this.rxFSsy = JSON.parse(decodeURIComponent(STR.slice(STR.indexOf('|') + 1 + 1 - 1, STR.length)));
    } catch (e) {
      return e.message;
    }
  }

  out() {
    return `${encodeURIComponent(JSON.stringify(this.rxFSfi))}|${encodeURIComponent(JSON.stringify(this.rxFSsy))}`;
  }
}

// module.exports = rxFS;

window.tempExt = {
  Extension: rxFS,
  info: {
    name: "rxFS",
    description: "description",
    extensionId: "rxfs",
    iconURL: ext_cover,
    featured: true,
    disabled: false,
    collaboratorList: [
      {
        collaborator: "0832",
        collaboratorURL:
          "https://github.com/0832k12",
      },
      {
        collaborator: "官方小傲娇 @ CCW",
        collaboratorURL:
          "https://www.ccw.site/student/62f76ddb49c5dc44ac0c03c0",
      },
    ],
  },
  l10n: {
    "zh-cn": {
      "description": "轻松地构建一个文件系统，实现管理，存储，访问数据功能。",
    },
    en: {
      "description": "Blocks for interacting with a virtual in-memory filesystem.",
    },
  },
};
