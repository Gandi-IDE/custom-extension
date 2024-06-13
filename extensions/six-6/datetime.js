// import Cast from "cast.js";

const _picture = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1MDUuMTYyNTkiIGhlaWdodD0iMzc4LjQ3MjkzIiB2aWV3Qm94PSIwLDAsNTA1LjE2MjU5LDM3OC40NzI5MyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIyNDAuMDAwMDEiIHkxPSItOS4yMzY0NiIgeDI9IjI0MC4wMDAwMSIgeTI9IjM2OS4yMzY0OCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNiNGZmY2IiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM2NmZmOTQiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMi41ODEyOSw5LjIzNjQ2KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0tMTIuNTgxMjksMzY5LjIzNjQ4di0zNzguNDcyOTNoNTA1LjE2MjU5djM3OC40NzI5M3oiIGZpbGw9InVybCgjY29sb3ItMSkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxnPjxwYXRoIGQ9Ik0zMS45MDE2NSwxODIuNjI4MzhjMCwtNTUuOTc0OCA0NS4zNzY1NCwtMTAxLjM1MTM1IDEwMS4zNTEzNSwtMTAxLjM1MTM1YzU1Ljk3NDgxLDAgMTAxLjM1MTM2LDQ1LjM3NjU0IDEwMS4zNTEzNiwxMDEuMzUxMzVjMCw1NS45NzQ4MSAtNDUuMzc2NTUsMTAxLjM1MTM1IC0xMDEuMzUxMzYsMTAxLjM1MTM1Yy01NS45NzQ4LDAgLTEwMS4zNTEzNSwtNDUuMzc2NTUgLTEwMS4zNTEzNSwtMTAxLjM1MTM1eiIgZmlsbD0iIzQ4YjM2OCIgc3Ryb2tlPSIjNDhiMzY4IiBzdHJva2Utd2lkdGg9IjE1IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yMy4zOTU2NSwxNzMuMzcxNjRjMCwtNTUuOTc0OCA0NS4zNzY1NSwtMTAxLjM1MTM1IDEwMS4zNTEzNiwtMTAxLjM1MTM1YzU1Ljk3NDgsMCAxMDEuMzUxMzUsNDUuMzc2NTQgMTAxLjM1MTM1LDEwMS4zNTEzNWMwLDU1Ljk3NDgxIC00NS4zNzY1NCwxMDEuMzUxMzUgLTEwMS4zNTEzNSwxMDEuMzUxMzVjLTU1Ljk3NDgsMCAtMTAxLjM1MTM1LC00NS4zNzY1NSAtMTAxLjM1MTM1LC0xMDEuMzUxMzV6IiBmaWxsPSIjYmVmZmQyIiBzdHJva2U9IiM1YmUyODQiIHN0cm9rZS13aWR0aD0iMTUiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTEyNi4zOTcyLDE3OC41MTUyN2wtODguOTIxMTksLTQwLjc0ODY4YzAsMCAyMi44MDMxMiwtNTguODI4NjkgODguODAyNzIsLTU4LjA0ODk2YzAuMTQ2OTUsMC4wMDE3MyAwLjExODQ3LDk4Ljc5NzY0IDAuMTE4NDcsOTguNzk3NjR6IiBmaWxsPSIjYTdlMGI4IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTgxLjcxODM1LDE1Ni43Mjc3N2w0My41MjcyNywyMC43NzU1NyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDhiMzY4IiBzdHJva2Utd2lkdGg9IjE1IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMTI1LjI0NTYyLDE3Ny41NTN2LTcyLjA3MjA3IiBmaWxsPSJub25lIiBzdHJva2U9IiM0OGIzNjgiIHN0cm9rZS13aWR0aD0iMTUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik02OS44MDY5MSw1MS42NTEyOGwxNi42OTA4Nyw0LjEyNzc1YzAsMCAtMjcuNzE2MjIsMTIuMzk0OTcgLTQxLjk0Nzk2LDI0LjM4NDI4Yy0xNi4xOTMwNywxMy42NDE2MSAtMzIuMzYxMjUsMzcuODc0MjcgLTMyLjM2MTI1LDM3Ljg3NDI3IiBmaWxsPSJub25lIiBzdHJva2U9IiM0OGIzNjgiIHN0cm9rZS13aWR0aD0iNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjMuODU4MTYsNzkuMjI3MjMpIHJvdGF0ZSgtMzkuOTI5MDMpIHNjYWxlKDAuNjAzOTksMC42MDM5OSkiIGZvbnQtc2l6ZT0iNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IiM0OGIzNjgiIGZpbGwtcnVsZT0ibm9uemVy" +
  "byIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJTYW5zIFNlcmlmIiBmb250LXdlaWdodD0ibm9ybWFsIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48dHNwYW4geD0iMCIgZHk9IjAiPjJoPC90c3Bhbj48L3RleHQ+PHBhdGggZD0iTTE4MS4wMDAwMSwxODYuOTM5NnYtMThoMjR2MTh6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODIuMDAwMDEsMTg0LjkzOTYpIHNjYWxlKDAuNSwwLjUpIiBmb250LXNpemU9IjQwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSIjNDhiMzY4IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0iU2FucyBTZXJpZiIgZm9udC13ZWlnaHQ9Im5vcm1hbCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHRzcGFuIHg9IjAiIGR5PSIwIj4xODwvdHNwYW4+PC90ZXh0PjwvZz48cGF0aCBkPSJNMjc0LjAwMDAxLDI3OC42MDYyN3YtMTg0aDE4NXYxODR6IiBmaWxsPSIjNDhiMzY4IiBzdHJva2U9IiM0OGIzNjgiIHN0cm9rZS13aWR0aD0iMTUiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTI2NS4wMDAwMSwyNjkuNjA2Mjd2LTE4NGgxODV2MTg0eiIgZmlsbD0iI2JlZmZkMiIgc3Ryb2tlPSIjNWJlMjg0IiBzdHJva2Utd2lkdGg9IjE1IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDMxOC4wMDAwMSwxMjEuNzc5MTcpIHNjYWxlKDAuNjU4MzYsMC42NTgzNikiIGZvbnQtc2l6ZT0iNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IiM0OGIzNjgiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJTYW5zIFNlcmlmIiBmb250LXdlaWdodD0ibm9ybWFsIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48dHNwYW4geD0iMCIgZHk9IjAiPuaYn+acn+S4gDwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDI5Ny4wMDAwMSwyMTEuOTUwNzYpIHNjYWxlKDIuNTMyMzQsMi41MzIzNCkiIGZvbnQtc2l6ZT0iNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IiM0OGIzNjgiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJTYW5zIFNlcmlmIiBmb250LXdlaWdodD0ibm9ybWFsIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48dHNwYW4geD0iMCIgZHk9IjAiPjE4PC90c3Bhbj48L3RleHQ+PHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjc2LjAwMDAxLDI1NC4xMDYyNykgc2NhbGUoMC42MzAwMSwwLjYzMDAxKSIgZm9udC1zaXplPSI0MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iIzQ4YjM2OCIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IlNhbnMgU2VyaWYiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9Im1p" +
  "eC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0c3BhbiB4PSIwIiBkeT0iMCI+MjAyMjwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDM5Mi4zMzI2MiwyNTQuMDU4Mykgc2NhbGUoMC41NzA4NCwwLjU3MDg0KSIgZm9udC1zaXplPSI0MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iIzQ4YjM2OCIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IlNhbnMgU2VyaWYiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0c3BhbiB4PSIwIiBkeT0iMCI+5LiD5pyIPC90c3Bhbj48L3RleHQ+PC9nPjwvZz48L3N2Zz4=";

const _icon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI2NC43MDI3MSIgaGVpZ2h0PSI2NC43MDI3MSIgdmlld0JveD0iMCwwLDY0LjcwMjcxLDY0LjcwMjcxIj48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjA3LjY0ODY0LC0xNDcuNjQ4NjUpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PGc+PHBhdGggZD0iTTIwOS42NDg2NCwxODBjMCwtMTYuNzYyNTkgMTMuNTg4NzcsLTMwLjM1MTM1IDMwLjM1MTM2LC0zMC4zNTEzNWMxNi43NjI1OSwwIDMwLjM1MTM1LDEzLjU4ODc2IDMwLjM1MTM1LDMwLjM1MTM1YzAsMTYuNzYyNTkgLTEzLjU4ODc2LDMwLjM1MTM1IC0zMC4zNTEzNSwzMC4zNTEzNWMtMTYuNzYyNTksMCAtMzAuMzUxMzUsLTEzLjU4ODc3IC0zMC4zNTEzNSwtMzAuMzUxMzV6IiBmaWxsPSIjYmVmZmQyIiBzdHJva2U9IiM1YmUyODQiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjQwLjQ5NDE4LDE4MS41NDAzNWwtMjYuNjI4OTMsLTEyLjIwMjg3YzAsMCA2LjgyODc3LC0xNy42MTcyMyAyNi41OTM0NiwtMTcuMzgzNzNjMC4wNDQwMSwwLjAwMDUyIDAuMDM1NDgsMjkuNTg2NiAwLjAzNTQ4LDI5LjU4NjZ6IiBmaWxsPSIjYTdlMGI4IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTIyNy4xMTQzNSwxNzUuMDE1NzJsMTMuMDM0OTcsNi4yMjE1OSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDhiMzY4IiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yNDAuMTQ5MzIsMTgxLjI1MjE4di0yMS41ODMxOCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNDhiMzY4IiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48L2c+PC9nPjwvc3ZnPg==";

/** @typedef {string|number|boolean} SCarg 来自Scratch圆形框的参数，虽然这个框可能只能输入数字，但是可以放入变量，因此有可能获得数字和文本，需要同时处理 */

class DateTime {
  constructor(runtime) {
    this._formatMessage = runtime.getFormatMessage({
      "zh-cn": {
        "DateTime.name": "时间计算",
        "DateTime.date": "[YEAR] 年 [MONTH] 月 [DATE] 日",
        "DateTime.time": "[YEAR] 年 [MONTH] 月 [DATE] 日 [HOUR] 时 [MINUTE] 分 [SECOND] 秒",
        "DateTime.now": "现在时刻",
        "DateTime.today": "今天",
        "DateTime.after2000": " 2000年过 [DAYS] 天的时刻",
        "DateTime.diff2000": "[TIME] 距2000年的天数",
        "DateTime.diff": "[TIME1] 距 [TIME2] 的 [UNIT] 数",
        "DateTime.add": "[TIME1] 过 [TIME2] [UNIT] 的时刻",
        "DateTime.get": "[TIME] 的 [UNIT]",
        "DateTime.get.year": "年",
        "DateTime.get.month": "月",
        "DateTime.get.date": "日",
        "DateTime.get.day": "星期",
        "DateTime.get.days": "天",
        "DateTime.get.hour": "小时",
        "DateTime.get.minute": "分钟",
        "DateTime.get.second": "秒",
        "DateTime.get.millisecond": "毫秒",
        "DateTime.timezone": "当前时区",
        "DateTime.timezonemin": "当前时区分钟数",
      },
      en: {
        "DateTime.name": "Date/Time",
        "DateTime.date": "[MONTH]/[DATE], [YEAR]",
        "DateTime.time": "[MONTH]/[DATE],[YEAR] [HOUR]:[MINUTE]:[SECOND]",
        "DateTime.now": "now",
        "DateTime.today": "today",
        "DateTime.after2000": "[DAYS] days after 2000",
        "DateTime.diff2000": "days since 2000 of [TIME]",
        "DateTime.diff": "difference between [TIME1] and [TIME2] in [UNIT]",
        "DateTime.add": "[TIME2] [UNIT] after [TIME1]",
        "DateTime.get": "[UNIT] of [TIME]",
        "DateTime.get.year": "year",
        "DateTime.get.month": "month",
        "DateTime.get.date": "date",
        "DateTime.get.day": "day",
        "DateTime.get.days": "days",
        "DateTime.get.hour": "hours",
        "DateTime.get.minute": "minutes",
        "DateTime.get.second": "seconds",
        "DateTime.get.millisecond": "milliseconds",
        "DateTime.timezone": "timezone",
        "DateTime.timezonemin": "timezone offset in minutes",
      }
    })
  }

  /**
   * 翻译
   * @param {string} id
   * @returns {string}
   */
  formatMessage(id) {
    return this._formatMessage({
      id,
      default: id,
      description: id
    });
  }

  getInfo() {
    return {
      id: "DateTime", // 拓展id
      name: this.formatMessage("DateTime.name"), // 拓展名
      // docsURI: "https://www.baidu.com",
      blockIconURI: _icon,
      menuIconURI: _icon,
      color1: "#40ff80",
      color2: "#00CC80",
      blocks: [{
        opcode: "date",
        blockType: "reporter",
        text: this.formatMessage("DateTime.date"),
        arguments: {
          YEAR: {
            type: "number",
            defaultValue: new Date().getFullYear()
          },
          MONTH: {
            type: "number",
            defaultValue: new Date().getMonth() + 1
          },
          DATE: {
            type: "number",
            defaultValue: new Date().getDate()
          }
        }
      }, {
        opcode: "time",
        blockType: "reporter",
        text: this.formatMessage("DateTime.time"),
        arguments: {
          YEAR: {
            type: "number",
            defaultValue: new Date().getFullYear()
          },
          MONTH: {
            type: "number",
            defaultValue: new Date().getMonth() + 1
          },
          DATE: {
            type: "number",
            defaultValue: new Date().getDate()
          },
          HOUR: {
            type: "number",
            defaultValue: new Date().getHours()
          },
          MINUTE: {
            type: "number",
            defaultValue: new Date().getMinutes()
          },
          SECOND: {
            type: "number",
            defaultValue: new Date().getSeconds()
          }
        }
      }, {
        opcode: "now",
        blockType: "reporter",
        text: this.formatMessage("DateTime.now"),
        arguments: {}
      }, {
        opcode: "today",
        blockType: "reporter",
        text: this.formatMessage("DateTime.today"),
        arguments: {}
      }, {
        opcode: "after2000",
        blockType: "reporter",
        text: this.formatMessage("DateTime.after2000"),
        arguments: {
          DAYS: {
            type: "number",
            defaultValue: this.diff({
              TIME1: "2000-01-01T00:00:00.000Z",
              TIME2: this.now(),
              UNIT: "days"
            })
          }
        }
      }, {
        opcode: "diff2000",
        blockType: "reporter",
        text: this.formatMessage("DateTime.diff2000"),
        arguments: {
          TIME: {
            type: "string",
            defaultValue: this.now()
          }
        }
      }, {
        opcode: "diff",
        blockType: "reporter",
        text: this.formatMessage("DateTime.diff"),
        arguments: {
          TIME1: {
            type: "string",
            defaultValue: "2000-01-23T12:34:56"
          },
          TIME2: {
            type: "string",
            defaultValue: this.now()
          },
          UNIT: {
            type: "string",
            menu: "DiffUnits",
            defaultValue: "days"
          }
        }
      }, {
        opcode: "add",
        blockType: "reporter",
        text: this.formatMessage("DateTime.add"),
        arguments: {
          TIME1: {
            type: "string",
            defaultValue: "2000-01-23T12:34:56"
          },
          TIME2: {
            type: "number",
            defaultValue: 1234
          },
          UNIT: {
            type: "string",
            menu: "DiffUnits",
            defaultValue: "days"
          }
        }
      }, {
        opcode: "get",
        blockType: "reporter",
        text: this.formatMessage("DateTime.get"),
        arguments: {
          TIME: {
            type: "string",
            defaultValue: this.now()
          },
          UNIT: {
            type: "string",
            menu: "Units",
            defaultValue: "date"
          }
        }
      }, {
        opcode: "timezone",
        blockType: "reporter",
        text: this.formatMessage("DateTime.timezone"),
        arguments: {}
      }, {
        opcode: "timezonemin",
        blockType: "reporter",
        text: this.formatMessage("DateTime.timezonemin"),
        arguments: {}
      }],
      menus: {
        DiffUnits: {
          items: [{
              text: this.formatMessage("DateTime.get.days"),
              value: "days"
            },
            {
              text: this.formatMessage("DateTime.get.hour"),
              value: "hour"
            },
            {
              text: this.formatMessage("DateTime.get.minute"),
              value: "minute"
            },
            {
              text: this.formatMessage("DateTime.get.second"),
              value: "second"
            },
            {
              text: this.formatMessage("DateTime.get.millisecond"),
              value: "millisecond"
            }
          ]
        },
        Units: {
          items: [{
              text: this.formatMessage("DateTime.get.year"),
              value: "year"
            },
            {
              text: this.formatMessage("DateTime.get.month"),
              value: "month"
            },
            {
              text: this.formatMessage("DateTime.get.date"),
              value: "date"
            },
            {
              text: this.formatMessage("DateTime.get.day"),
              value: "day"
            },
            {
              text: this.formatMessage("DateTime.get.hour"),
              value: "hour"
            },
            {
              text: this.formatMessage("DateTime.get.minute"),
              value: "minute"
            },
            {
              text: this.formatMessage("DateTime.get.second"),
              value: "second"
            },
            {
              text: this.formatMessage("DateTime.get.millisecond"),
              value: "millisecond"
            }
          ]
        }
      }
    };
  }

  /**
   * 将 str 转化为数字并在前面补 0 直到长度 n
   * @param {SCarg} str
   * @param {number} n
   * @returns {string}
   */
  _padZero(str, n) {
    const num = Number(str);
    if (isNaN(num) || num < 0) throw new Error(`\`${str}' 不是一个合适的数字`);
    return String(Math.floor(num)).padStart(n, "0");
  }

  /**
   * 返回函数的执行结果，或者错误描述
   * @template T
   * @param {()=>T} func
   * @returns {T|Error}
   */
  _catchret(func) {
    try {
      return func();
    } catch (e) {
      if (e instanceof Error) {
        return e;
      } else {
        throw e;
      }
    }
  }

  /**
   * 根据数据创建日期文本
   * @param {object} args
   * @param {SCarg} args.YEAR 年
   * @param {SCarg} args.MONTH 月
   * @param {SCarg} args.DATE 日
   * @returns {string|Error}
   */
  date(args) {
    return this._catchret(() => {
      const result = this._localDate(new Date(`${this._padZero(args.YEAR, 4)}-${this._padZero(args.MONTH, 2)}-${this._padZero(args.DATE, 2)}T00:00:00.000`)).split("T")[0];
      if (result === undefined) {
        throw new Error(`日期时间扩展错误，Date() 的格式改变`);
      }
      return result;
    });
  }

  /**
   * 根据数据创建时间文本（本地时间）
   * @param {object} args
   * @param {SCarg} args.YEAR 年
   * @param {SCarg} args.MONTH 月
   * @param {SCarg} args.DATE 日
   * @param {SCarg} args.HOUR 时
   * @param {SCarg} args.MINUTE 分
   * @param {SCarg} args.SECOND 秒
   * @returns {string|Error}
   */
  time(args) {
    return this._catchret(() => {
      return this._localDate(new Date(`${this._padZero(args.YEAR, 4)}-${this._padZero(args.MONTH, 2)}-${this._padZero(args.DATE, 2)}T${this._padZero(args.HOUR, 2)}:${this._padZero(args.MINUTE, 2)}:${this._padZero(args.SECOND, 2)}.000`));
    });
  }

  /**
   * 获取“本地时间”表示，返回文本
   * 实际上是当前时间减去时差，换算成 ISO 格式后去掉后面的 Z，字面上相当于本地时间
   * @param {Date} date
   * @return {string} “本地时间”文本表示，类似 2022-06-10T12:34:56.789
   */
  _localDate(date) {
    const timeoffs = date.getTimezoneOffset();
    return new Date(date.getTime() - timeoffs * 1000 * 60)
      .toISOString().slice(0, -1);
  }

  /**
   * 现在的时间
   * @returns {string}
   */
  now() {
    return this._localDate(new Date());
  }

  /**
   * 今天，也就是现在的时间去掉“时:分:秒.毫秒”部分
   * @returns {string}
   */
  today() {
    const result = this.now().split("T")[0];
    if (result === undefined) {
      throw new Error(`日期时间扩展错误，Date() 的格式改变`);
    }
    return result;
  }

  /**
   * 2000年1月1日0点整后 DAYS 天对应的时间（对应 Scratch 相关积木）
   * @param {object} args
   * @param {SCarg} args.DAYS
   * @returns {string|Error}
   */
  after2000(args) {
    return this.add({
      TIME1: "2000-01-01T00:00:00Z",
      TIME2: args.DAYS,
      UNIT: "days"
    });
  }

  /**
   * 时间 TIME 距离 UTC 2000年1月1日0点整的天数（对应 Scratch 相关积木）
   * @param {object} args
   * @param {SCarg} args.TIME
   * @returns {number|Error}
   */
  diff2000(args) {
    return this.diff({
      TIME1: "2000-01-01T00:00:00Z",
      TIME2: args.TIME,
      UNIT: "days"
    });
  }

  /**
   * 比较两个时间
   * @param {object} args
   * @param {SCarg} args.TIME1 开始时间
   * @param {SCarg} args.TIME2 结束时间
   * @param {SCarg} args.UNIT 单位
   * @returns {number|Error}
   */
  diff(args) {
    return this._catchret(() => {
      const diff = new Date(String(args.TIME2)).getTime() - new Date(String(args.TIME1)).getTime();
      switch (args.UNIT) {
        case "days":
          return diff / (24 * 60 * 60 * 1000);
        case "hour":
          return diff / (60 * 60 * 1000);
        case "minute":
          return diff / (60 * 1000);
        case "second":
          return diff / (1000);
        case "millisecond":
          return diff;
        default:
          throw new Error(`选项错误`);
      }
    });
  }

  /**
   * 增加时间
   * @param {object} args
   * @param {SCarg} args.TIME1 开始时间
   * @param {SCarg} args.TIME2 增加的数值
   * @param {SCarg} args.UNIT 增加数值的单位
   * @returns {string|Error}
   */
  add(args) {
    return this._catchret(() => {
      const orig = new Date(String(args.TIME1)).getTime();
      let diff = Number(args.TIME2);
      switch (args.UNIT) {
        case "days":
          diff *= 24 * 60 * 60 * 1000;
          break;
        case "hour":
          diff *= 60 * 60 * 1000;
          break;
        case "minute":
          diff *= 60 * 1000;
          break;
        case "second":
          diff *= 1000;
          break;
        case "millisecond":
          // diff *= 1;
          break;
      }
      return this._localDate(new Date(orig + diff));
    });
  }

  /**
   * 获得时间的部分
   * @param {object} args
   * @param {SCarg} args.TIME 时间
   * @param {SCarg} args.UNIT 部分
   * @returns {number|Error}
   */
  get(args) {
    return this._catchret(() => {
      const orig = new Date(String(args.TIME));
      switch (args.UNIT) {
        case "year":
          return orig.getFullYear();
        case "month":
          return orig.getMonth() + 1;
        case "day":
          return orig.getDay() + 1;
        case "date":
          return orig.getDate();
        case "hour":
          return orig.getHours();
        case "minute":
          return orig.getMinutes();
        case "second":
          return orig.getSeconds();
        case "millisecond":
          return orig.getMilliseconds();
        default:
          throw new Error(`选项错误`);
      }
    });
  }

  /**
   * 获得时区
   * @returns {string}
   */
  timezone() {
    const toff = new Date().getTimezoneOffset();
    return (toff > 0 ? "-" : "+") +
      this._padZero(Math.abs(toff) / 60, 2) +
      this._padZero(Math.abs(toff) % 60, 2);
  }

  /**
   * 获得时区偏移分钟数
   * @returns {number}
   */
  timezonemin() {
    const toff = new Date().getTimezoneOffset();
    return -toff;
  }
}

window.tempExt = {
  Extension: DateTime,
  info: {
    name: "DateTime.name",
    description: "DateTime.descp",
    extensionId: "DateTime",
    iconURL: _picture,
    insetIconURL: _icon,
    featured: true,
    disabled: false,
    collaborator: "six-6 x CCW"
  },
  l10n: {
    "zh-cn": {
      "DateTime.name": "时间计算",
      "DateTime.descp": "计算日期与时间"
    },
    en: {
      "DateTime.name": "Date and time calculator",
      "DateTime.descp": "Calculate date and time"
    }
  }
};

/* vim: set expandtab tabstop=2 shiftwidth=2: */
