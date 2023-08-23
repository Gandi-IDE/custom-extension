const icon='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI1OTkuNSIgaGVpZ2h0PSIzNzEuNSIgdmlld0JveD0iMCwwLDU5OS41LDM3MS41Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1OS43NSw1Ljc1KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0tNTgsMzY0di0zNjhoNTk2djM2OHoiIGZpbGw9IiM1M2FhZTciIHN0cm9rZT0iIzUzYWFlNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjYjBkNWVlIiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjxwYXRoIGQ9Ik0xODguNjUxOCw3OS4wODQ3NWMwLDAgLTUzLjA3MjU4LDEyLjcyMTE5IC00OS42NzE3OSwzNy45ODQzMWMzLjQwMDgzLDI1LjI2MzExIDU2LjQ1OTU1LDkuMjIzNzUgNTkuODk4MzYsMzcuOTg0MzFjMy4zNTExNSwyOC4wMjc3MSAtNTAuMTI3MzYsMzAuMTYwOSAtNTAuMTI3MzYsMzAuMTYwOWMwLDAgLTEuMTYzNzQsLTAuNjExMDEgLTEuNzM1ODUsLTAuOTQyMTciLz48Zz48cGF0aCBkPSJNMjAyLjIyMjA2LDEzNC42MTk2N2MyMS44MTQ4NywtMTUuMDk1OTUgNTUuNDk1NTUsLTEzLjA5MTY5IDY2Ljg3NzY3LDEyLjE3Mzg3IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtvcmlnUm90JnF1b3Q7OjB9Ii8+PHBhdGggZD0iTTI1OC4xOTkyOCwyMDAuOTc3ODRjMCwwIC0yMy4wNjQ3MSw2MC4xNDUwOCAtMjUuMDg4NDUsMTUuMDEyMzRjLTIuMDIzNywtNDUuMTMyNzMgMjAuODgxMzMsLTEwOC44MzkyNyAyMC44ODEzMywtMTA4LjgzOTI3IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtvcmlnUm90JnF1b3Q7OjB9Ii8+PC9nPjxnPjxwYXRoIGQ9Ik0yODMuNjg0MTEsMjgwLjkxNTI1YzAsMCAtMTAuNjY2MiwtNTguOTU4NzggLTQuODgxNDQsLTc4LjY0NTU0YzUuNzg0NzYsLTE5LjY4Njc3IDM4LjUwOTE5LC0zNS43OTcyNyAzOC41MDkxOSwtMzUuNzk3MjciLz48cGF0aCBkPSJNMzQxLjE3NjcxLDIwNC45ODE1OWMwLDAgLTE4LjcxOTczLDE2LjgwMTM1IC0yOC43NTMyOCwxNi41Mjc2OWMtOS44NTA0NywtMC4yNjg2NSAtMzIuMjEwNTUsLTE5LjEzMTE0IC0zMi4yMTA1NSwtMTkuMTMxMTQiLz48L2c+PC9nPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzUzYWFlNyIgc3Ryb2tlLXdpZHRoPSIzLjUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTE4OC42NTE4LDc5LjA4NDc1YzAsMCAtNTMuMDcyNTgsMTIuNzIxMTkgLTQ5LjY3MTc5LDM3Ljk4NDMxYzMuNDAwODMsMjUuMjYzMTEgNTYuNDU5NTUsOS4yMjM3NSA1OS44OTgzNiwzNy45ODQzMWMzLjM1MTE1LDI4LjAyNzcxIC01MC4xMjczNiwzMC4xNjA5IC01MC4xMjczNiwzMC4xNjA5YzAsMCAtMS4xNjM3NCwtMC42MTEwMSAtMS43MzU4NSwtMC45NDIxNyIvPjxnPjxwYXRoIGQ9Ik0yMDIuMjIyMDYsMTM0LjYxOTY3YzIxLjgxNDg3LC0xNS4wOTU5NSA1NS40OTU1NSwtMTMuMDkxNjkgNjYuODc3NjcsMTIuMTczODciIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O29yaWdSb3QmcXVvdDs6MH0iLz48cGF0aCBkPSJNMjU4LjE5OTI4LDIwMC45Nzc4NGMwLDAgLTIzLjA2NDcxLDYwLjE0NTA4IC0yNS4wODg0NSwxNS4wMTIzNGMtMi4wMjM3LC00NS4xMzI3MyAyMC44ODEzMywtMTA4LjgzOTI3IDIwLjg4MTMzLC0xMDguODM5MjciIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O29yaWdSb3QmcXVvdDs6MH0iLz48L2c+PGc+PHBhdGggZD0iTTI4My42ODQxMSwyODAuOTE1MjVjMCwwIC0xMC42NjYyLC01OC45NTg3OCAtNC44ODE0NCwtNzguNjQ1NTRjNS43ODQ3NiwtMTkuNjg2NzcgMzguNTA5MTksLTM1Ljc5NzI3IDM4LjUwOTE5LC0zNS43OTcyNyIvPjxwYXRoIGQ9Ik0zNDEuMTc2NzEsMjA0Ljk4MTU5YzAsMCAtMTguNzE5NzMsMTYuODAxMzUgLTI4Ljc1MzI4LDE2LjUyNzY5Yy05Ljg1MDQ3LC0wLjI2ODY1IC0zMi4yMTA1NSwtMTkuMTMxMTQgLTMyLjIxMDU1LC0xOS4xMzExNCIvPjwvZz48L2c+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6Mjk5Ljc0OTk5OTk5OTk5OTgzOjE4NS43NS0tPg==';
const insetIcon='data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI3OS44IiBoZWlnaHQ9Ijc5LjgiIHZpZXdCb3g9IjAsMCw3OS44LDc5LjgiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDAuMSwtMTQwLjEpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTIwMS44NSwxODBjMCwtMjEuMDY5NjYgMTcuMDgwMzQsLTM4LjE1IDM4LjE1LC0zOC4xNWMyMS4wNjk2NiwwIDM4LjE1LDE3LjA4MDM0IDM4LjE1LDM4LjE1YzAsMjEuMDY5NjYgLTE3LjA4MDM0LDM4LjE1IC0zOC4xNSwzOC4xNWMtMjEuMDY5NjYsMCAtMzguMTUsLTE3LjA4MDM0IC0zOC4xNSwtMzguMTV6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNiMGQ1ZWUiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2IwZDVlZSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjxwYXRoIGQ9Ik0yMjUuOTUzNzksMTUyLjM5NDgxYzAsMCAtMTQuNTE3OTEsMy40Nzk4NiAtMTMuNTg3NjMsMTAuMzkwNTRjMC45MzAyOSw2LjkxMDY4IDE1LjQ0NDQxLDIuNTIzMTQgMTYuMzg1MDksMTAuMzkwNTRjMC45MTY3LDcuNjY2OTMgLTEzLjcxMjI1LDguMjUwNDYgLTEzLjcxMjI1LDguMjUwNDZjMCwwIC0wLjMxODM0LC0wLjE2NzE0IC0wLjQ3NDg0LC0wLjI1NzczIi8+PGc+PHBhdGggZD0iTTIyOS42NjU5MSwxNjcuNTg2MjljNS45Njc0MiwtNC4xMjk0NyAxNS4xODA3MSwtMy41ODEyMSAxOC4yOTQyNywzLjMzMDE0IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtvcmlnUm90JnF1b3Q7OjB9Ii8+PHBhdGggZD0iTTI0NC45NzgzOCwxODUuNzM4NDVjMCwwIC02LjMwOTMxLDE2LjQ1MjU4IC02Ljg2MjksNC4xMDY2Yy0wLjU1MzU4LC0xMi4zNDU5OCA1LjcxMjA1LC0yOS43NzI3OSA1LjcxMjA1LC0yOS43NzI3OSIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7b3JpZ1JvdCZxdW90OzowfSIvPjwvZz48Zz48cGF0aCBkPSJNMjUxLjk0OTcxLDIwNy42MDUxOWMwLDAgLTIuOTE3NzIsLTE2LjEyODA3IC0xLjMzNTMxLC0yMS41MTMzNWMxLjU4MjQxLC01LjM4NTI4IDEwLjUzNDEyLC05Ljc5MjI4IDEwLjUzNDEyLC05Ljc5MjI4Ii8+PHBhdGggZD0iTTI2Ny42NzY3MSwxODYuODMzNjdjMCwwIC01LjEyMDc1LDQuNTk1OTggLTcuODY1NDEsNC41MjExMmMtMi42OTQ1OCwtMC4wNzM0OSAtOC44MTExNCwtNS4yMzMyOSAtOC44MTExNCwtNS4yMzMyOSIvPjwvZz48L2c+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNTNhYWU3IiBzdHJva2Utd2lkdGg9IjAuNzUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTIyNS45NTM3OSwxNTIuMzk0ODFjMCwwIC0xNC41MTc5MSwzLjQ3OTg2IC0xMy41ODc2MywxMC4zOTA1NGMwLjkzMDI5LDYuOTEwNjggMTUuNDQ0NDEsMi41MjMxNCAxNi4zODUwOSwxMC4zOTA1NGMwLjkxNjcsNy42NjY5MyAtMTMuNzEyMjUsOC4yNTA0NiAtMTMuNzEyMjUsOC4yNTA0NmMwLDAgLTAuMzE4MzQsLTAuMTY3MTQgLTAuNDc0ODQsLTAuMjU3NzMiLz48Zz48cGF0aCBkPSJNMjI5LjY2NTkxLDE2Ny41ODYyOWM1Ljk2NzQyLC00LjEyOTQ3IDE1LjE4MDcxLC0zLjU4MTIxIDE4LjI5NDI3LDMuMzMwMTQiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O29yaWdSb3QmcXVvdDs6MH0iLz48cGF0aCBkPSJNMjQ0Ljk3ODM4LDE4NS43Mzg0NWMwLDAgLTYuMzA5MzEsMTYuNDUyNTggLTYuODYyOSw0LjEwNjZjLTAuNTUzNTgsLTEyLjM0NTk4IDUuNzEyMDUsLTI5Ljc3Mjc5IDUuNzEyMDUsLTI5Ljc3Mjc5IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtvcmlnUm90JnF1b3Q7OjB9Ii8+PC9nPjxnPjxwYXRoIGQ9Ik0yNTEuOTQ5NzEsMjA3LjYwNTE5YzAsMCAtMi45MTc3MiwtMTYuMTI4MDcgLTEuMzM1MzEsLTIxLjUxMzM1YzEuNTgyNDEsLTUuMzg1MjggMTAuNTM0MTIsLTkuNzkyMjggMTAuNTM0MTIsLTkuNzkyMjgiLz48cGF0aCBkPSJNMjY3LjY3NjcxLDE4Ni44MzM2N2MwLDAgLTUuMTIwNzUsNC41OTU5OCAtNy44NjU0MSw0LjUyMTEyYy0yLjY5NDU4LC0wLjA3MzQ5IC04LjgxMTE0LC01LjIzMzI5IC04LjgxMTE0LC01LjIzMzI5Ii8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjozOS45MDAwMDAwMDAwMDAxMjozOS44OTk5OTk5OTk5OTk5OC0tPg==';

class str_mani {
    constructor(runtime) {
        this.runtime = runtime;
    }
    
    formatMessage(id) {
        return this._formatMessage({
            id,
            default: id,
            description: id,
        })
    }
    get strIsAvailable1() {
        return [
            {text:'邮箱', value:'1'},
            {text:'网址', value:'2'}
        ];
    }
    getInfo() {
        return {
            id: 'strmani',
            name: '字符串处理',
            color1: '#53aae7',
            color2: '#53aae7',
            blockIconURI: 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI3OS44IiBoZWlnaHQ9Ijc5LjgiIHZpZXdCb3g9IjAsMCw3OS44LDc5LjgiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDAuMSwtMTQwLjEpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTIwMS44NSwxODBjMCwtMjEuMDY5NjYgMTcuMDgwMzQsLTM4LjE1IDM4LjE1LC0zOC4xNWMyMS4wNjk2NiwwIDM4LjE1LDE3LjA4MDM0IDM4LjE1LDM4LjE1YzAsMjEuMDY5NjYgLTE3LjA4MDM0LDM4LjE1IC0zOC4xNSwzOC4xNWMtMjEuMDY5NjYsMCAtMzguMTUsLTE3LjA4MDM0IC0zOC4xNSwtMzguMTV6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNiMGQ1ZWUiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2IwZDVlZSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjxwYXRoIGQ9Ik0yMjUuOTUzNzksMTUyLjM5NDgxYzAsMCAtMTQuNTE3OTEsMy40Nzk4NiAtMTMuNTg3NjMsMTAuMzkwNTRjMC45MzAyOSw2LjkxMDY4IDE1LjQ0NDQxLDIuNTIzMTQgMTYuMzg1MDksMTAuMzkwNTRjMC45MTY3LDcuNjY2OTMgLTEzLjcxMjI1LDguMjUwNDYgLTEzLjcxMjI1LDguMjUwNDZjMCwwIC0wLjMxODM0LC0wLjE2NzE0IC0wLjQ3NDg0LC0wLjI1NzczIi8+PGc+PHBhdGggZD0iTTIyOS42NjU5MSwxNjcuNTg2MjljNS45Njc0MiwtNC4xMjk0NyAxNS4xODA3MSwtMy41ODEyMSAxOC4yOTQyNywzLjMzMDE0IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtvcmlnUm90JnF1b3Q7OjB9Ii8+PHBhdGggZD0iTTI0NC45NzgzOCwxODUuNzM4NDVjMCwwIC02LjMwOTMxLDE2LjQ1MjU4IC02Ljg2MjksNC4xMDY2Yy0wLjU1MzU4LC0xMi4zNDU5OCA1LjcxMjA1LC0yOS43NzI3OSA1LjcxMjA1LC0yOS43NzI3OSIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7b3JpZ1JvdCZxdW90OzowfSIvPjwvZz48Zz48cGF0aCBkPSJNMjUxLjk0OTcxLDIwNy42MDUxOWMwLDAgLTIuOTE3NzIsLTE2LjEyODA3IC0xLjMzNTMxLC0yMS41MTMzNWMxLjU4MjQxLC01LjM4NTI4IDEwLjUzNDEyLC05Ljc5MjI4IDEwLjUzNDEyLC05Ljc5MjI4Ii8+PHBhdGggZD0iTTI2Ny42NzY3MSwxODYuODMzNjdjMCwwIC01LjEyMDc1LDQuNTk1OTggLTcuODY1NDEsNC41MjExMmMtMi42OTQ1OCwtMC4wNzM0OSAtOC44MTExNCwtNS4yMzMyOSAtOC44MTExNCwtNS4yMzMyOSIvPjwvZz48L2c+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNTNhYWU3IiBzdHJva2Utd2lkdGg9IjAuNzUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTIyNS45NTM3OSwxNTIuMzk0ODFjMCwwIC0xNC41MTc5MSwzLjQ3OTg2IC0xMy41ODc2MywxMC4zOTA1NGMwLjkzMDI5LDYuOTEwNjggMTUuNDQ0NDEsMi41MjMxNCAxNi4zODUwOSwxMC4zOTA1NGMwLjkxNjcsNy42NjY5MyAtMTMuNzEyMjUsOC4yNTA0NiAtMTMuNzEyMjUsOC4yNTA0NmMwLDAgLTAuMzE4MzQsLTAuMTY3MTQgLTAuNDc0ODQsLTAuMjU3NzMiLz48Zz48cGF0aCBkPSJNMjI5LjY2NTkxLDE2Ny41ODYyOWM1Ljk2NzQyLC00LjEyOTQ3IDE1LjE4MDcxLC0zLjU4MTIxIDE4LjI5NDI3LDMuMzMwMTQiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O29yaWdSb3QmcXVvdDs6MH0iLz48cGF0aCBkPSJNMjQ0Ljk3ODM4LDE4NS43Mzg0NWMwLDAgLTYuMzA5MzEsMTYuNDUyNTggLTYuODYyOSw0LjEwNjZjLTAuNTUzNTgsLTEyLjM0NTk4IDUuNzEyMDUsLTI5Ljc3Mjc5IDUuNzEyMDUsLTI5Ljc3Mjc5IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtvcmlnUm90JnF1b3Q7OjB9Ii8+PC9nPjxnPjxwYXRoIGQ9Ik0yNTEuOTQ5NzEsMjA3LjYwNTE5YzAsMCAtMi45MTc3MiwtMTYuMTI4MDcgLTEuMzM1MzEsLTIxLjUxMzM1YzEuNTgyNDEsLTUuMzg1MjggMTAuNTM0MTIsLTkuNzkyMjggMTAuNTM0MTIsLTkuNzkyMjgiLz48cGF0aCBkPSJNMjY3LjY3NjcxLDE4Ni44MzM2N2MwLDAgLTUuMTIwNzUsNC41OTU5OCAtNy44NjU0MSw0LjUyMTEyYy0yLjY5NDU4LC0wLjA3MzQ5IC04LjgxMTE0LC01LjIzMzI5IC04LjgxMTE0LC01LjIzMzI5Ii8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjozOS45MDAwMDAwMDAwMDAxMjozOS44OTk5OTk5OTk5OTk5OC0tPg==',
            menuIconURI: 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI3OS44IiBoZWlnaHQ9Ijc5LjgiIHZpZXdCb3g9IjAsMCw3OS44LDc5LjgiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDAuMSwtMTQwLjEpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTIwMS44NSwxODBjMCwtMjEuMDY5NjYgMTcuMDgwMzQsLTM4LjE1IDM4LjE1LC0zOC4xNWMyMS4wNjk2NiwwIDM4LjE1LDE3LjA4MDM0IDM4LjE1LDM4LjE1YzAsMjEuMDY5NjYgLTE3LjA4MDM0LDM4LjE1IC0zOC4xNSwzOC4xNWMtMjEuMDY5NjYsMCAtMzguMTUsLTE3LjA4MDM0IC0zOC4xNSwtMzguMTV6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNiMGQ1ZWUiIHN0cm9rZS13aWR0aD0iMy41IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2IwZDVlZSIgc3Ryb2tlLXdpZHRoPSIzIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjxwYXRoIGQ9Ik0yMjUuOTUzNzksMTUyLjM5NDgxYzAsMCAtMTQuNTE3OTEsMy40Nzk4NiAtMTMuNTg3NjMsMTAuMzkwNTRjMC45MzAyOSw2LjkxMDY4IDE1LjQ0NDQxLDIuNTIzMTQgMTYuMzg1MDksMTAuMzkwNTRjMC45MTY3LDcuNjY2OTMgLTEzLjcxMjI1LDguMjUwNDYgLTEzLjcxMjI1LDguMjUwNDZjMCwwIC0wLjMxODM0LC0wLjE2NzE0IC0wLjQ3NDg0LC0wLjI1NzczIi8+PGc+PHBhdGggZD0iTTIyOS42NjU5MSwxNjcuNTg2MjljNS45Njc0MiwtNC4xMjk0NyAxNS4xODA3MSwtMy41ODEyMSAxOC4yOTQyNywzLjMzMDE0IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtvcmlnUm90JnF1b3Q7OjB9Ii8+PHBhdGggZD0iTTI0NC45NzgzOCwxODUuNzM4NDVjMCwwIC02LjMwOTMxLDE2LjQ1MjU4IC02Ljg2MjksNC4xMDY2Yy0wLjU1MzU4LC0xMi4zNDU5OCA1LjcxMjA1LC0yOS43NzI3OSA1LjcxMjA1LC0yOS43NzI3OSIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7b3JpZ1JvdCZxdW90OzowfSIvPjwvZz48Zz48cGF0aCBkPSJNMjUxLjk0OTcxLDIwNy42MDUxOWMwLDAgLTIuOTE3NzIsLTE2LjEyODA3IC0xLjMzNTMxLC0yMS41MTMzNWMxLjU4MjQxLC01LjM4NTI4IDEwLjUzNDEyLC05Ljc5MjI4IDEwLjUzNDEyLC05Ljc5MjI4Ii8+PHBhdGggZD0iTTI2Ny42NzY3MSwxODYuODMzNjdjMCwwIC01LjEyMDc1LDQuNTk1OTggLTcuODY1NDEsNC41MjExMmMtMi42OTQ1OCwtMC4wNzM0OSAtOC44MTExNCwtNS4yMzMyOSAtOC44MTExNCwtNS4yMzMyOSIvPjwvZz48L2c+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNTNhYWU3IiBzdHJva2Utd2lkdGg9IjAuNzUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTIyNS45NTM3OSwxNTIuMzk0ODFjMCwwIC0xNC41MTc5MSwzLjQ3OTg2IC0xMy41ODc2MywxMC4zOTA1NGMwLjkzMDI5LDYuOTEwNjggMTUuNDQ0NDEsMi41MjMxNCAxNi4zODUwOSwxMC4zOTA1NGMwLjkxNjcsNy42NjY5MyAtMTMuNzEyMjUsOC4yNTA0NiAtMTMuNzEyMjUsOC4yNTA0NmMwLDAgLTAuMzE4MzQsLTAuMTY3MTQgLTAuNDc0ODQsLTAuMjU3NzMiLz48Zz48cGF0aCBkPSJNMjI5LjY2NTkxLDE2Ny41ODYyOWM1Ljk2NzQyLC00LjEyOTQ3IDE1LjE4MDcxLC0zLjU4MTIxIDE4LjI5NDI3LDMuMzMwMTQiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O29yaWdSb3QmcXVvdDs6MH0iLz48cGF0aCBkPSJNMjQ0Ljk3ODM4LDE4NS43Mzg0NWMwLDAgLTYuMzA5MzEsMTYuNDUyNTggLTYuODYyOSw0LjEwNjZjLTAuNTUzNTgsLTEyLjM0NTk4IDUuNzEyMDUsLTI5Ljc3Mjc5IDUuNzEyMDUsLTI5Ljc3Mjc5IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtvcmlnUm90JnF1b3Q7OjB9Ii8+PC9nPjxnPjxwYXRoIGQ9Ik0yNTEuOTQ5NzEsMjA3LjYwNTE5YzAsMCAtMi45MTc3MiwtMTYuMTI4MDcgLTEuMzM1MzEsLTIxLjUxMzM1YzEuNTgyNDEsLTUuMzg1MjggMTAuNTM0MTIsLTkuNzkyMjggMTAuNTM0MTIsLTkuNzkyMjgiLz48cGF0aCBkPSJNMjY3LjY3NjcxLDE4Ni44MzM2N2MwLDAgLTUuMTIwNzUsNC41OTU5OCAtNy44NjU0MSw0LjUyMTEyYy0yLjY5NDU4LC0wLjA3MzQ5IC04LjgxMTE0LC01LjIzMzI5IC04LjgxMTE0LC01LjIzMzI5Ii8+PC9nPjwvZz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjozOS45MDAwMDAwMDAwMDAxMjozOS44OTk5OTk5OTk5OTk5OC0tPg==',
            blocks: [
                {
                    opcode: 'length',
                    blockType: 'reporter',
                    text: '[STR] 的长度',
                    arguments: {
                        STR: {
                            type: 'string',
                            defaultValue: 'string'
                        }
                    }
                },
                {
                    opcode: 'reversal',
                    blockType: 'reporter',
                    text: '反转 [STR]',
                    arguments: {
                        STR: {
                            type: 'string',
                            defaultValue: 'string'
                        }
                    }
                },
                {
                    opcode: 'strPalindrome',
                    blockType: 'Boolean',
                    text: '[STR] 是回文字符串吗？',
                    arguments: {
                        STR: {
                            type: 'string',
                            defaultValue: 'strrts'
                        }
                    }
                },
                {
                    opcode: 'indexOf',
                    blockType: 'reporter',
                    text: '从 [STR] 的第 [NUM] 个字符开始找到第一个 [STR2] 出现的位置',
                    arguments: {
                        STR: {
                            type: 'string',
                            defaultValue: 'string'
                        },
                        STR2: {
                            type: 'string',
                            defaultValue: 'str'
                        },
                        NUM: {
                            type: 'number',
                            defaultValue: '1'
                        }
                    }
                },
                {
                    opcode: 'lastIndexOf',
                    blockType: 'reporter',
                    text: '从 [STR] 的第 [NUM] 个字符开始找到最后一个 [STR2] 出现的位置',
                    arguments: {
                        STR: {
                            type: 'string',
                            defaultValue: 'string'
                        },
                        STR2: {
                            type: 'string',
                            defaultValue: 'str'
                        },
                        NUM: {
                            type: 'number',
                            defaultValue: '3'
                        }
                    }
                },
                {
                    opcode: 'slicetwo',
                    blockType: 'reporter',
                    text: '截取 [STR] 第 [NUM1] 到 [NUM2] 个字符',
                    arguments: {
                        STR: {
                            type: 'string',
                            defaultValue: 'string'
                        },
                        NUM1: {
                            type: 'number',
                            defaultValue: '1'
                        },
                        NUM2: {
                            type: 'number',
                            defaultValue: '2'
                        }
                    }
                },
                {
                    opcode: 'sliceone',
                    blockType: 'reporter',
                    text: '截取 [STR] 从 [NUM] 开始的内容',
                    arguments: {
                        STR: {
                            type: 'string',
                            defaultValue: 'string'
                        },
                        NUM: {
                            type: 'number',
                            defaultValue: '1'
                        }
                    }
                },
                {
                    opcode: 'substr',
                    blockType: 'reporter',
                    text: '截取从 [STR] 的第 [NUM1] 个字符开始长度为 [NUM2] 的子字符串',
                    arguments: {
                        STR: {
                            type: 'string',
                            defaultValue: 'string'
                        },
                        NUM1: {
                            type: 'number',
                            defaultValue: '1'
                        },
                        NUM2: {
                            type: 'number',
                            defaultValue: '3'
                        }
                    }
                },
                {
                    opcode: 'replace',
                    blockType: 'reporter',
                    text: '把 [STR] 中的第一个 [STR2] 替换成 [STR3]',
                    arguments: {
                        STR: {
                            type: 'string',
                            defaultValue: 'str in string'
                        },
                        STR2: {
                            type: 'string',
                            defaultValue: 'str'
                        },
                        STR3: {
                            type: 'string',
                            defaultValue: 'num'
                        }
                    }
                },
                {
                    opcode: 'replaceAll',
                    blockType: 'reporter',
                    text: '把 [STR] 中的 [STR2] 都替换成 [STR3]',
                    arguments: {
                        STR: {
                            type: 'string',
                            defaultValue: 'str in string'
                        },
                        STR2: {
                            type: 'string',
                            defaultValue: 'str'
                        },
                        STR3: {
                            type: 'string',
                            defaultValue: 'num'
                        }
                    }
                },
                {
                    opcode: 'toUpperCase',
                    blockType: 'reporter',
                    text: '将 [STR] 里的小写字母转为大写',
                    arguments: {
                        STR: {
                            type: 'string',
                            defaultValue: 'string'
                        }
                    }
                },
                {
                    opcode: 'toLowerCase',
                    blockType: 'reporter',
                    text: '将 [STR] 里的小写字母转为小写',
                    arguments: {
                        STR: {
                            type: 'string',
                            defaultValue: 'STRING'
                        }
                    }
                },
                {
                    opcode: 'padStart',
                    blockType: 'reporter',
                    text: '在 [STR] 的开头填充 [STR2] 直到长度为 [NUM]',
                    arguments: {
                        STR: {
                            type: 'string',
                            defaultValue: 'str'
                        },
                        STR2: {
                            type: 'string',
                            defaultValue: 's'
                        },
                        NUM: {
                            type: 'number',
                            defaultValue: '5'
                        }
                    }
                },
                {
                    opcode: 'padEnd',
                    blockType: 'reporter',
                    text: '在 [STR] 的结尾填充 [STR2] 直到长度为[NUM]',
                    arguments: {
                        STR: {
                            type: 'string',
                            defaultValue: 'str'
                        },
                        STR2: {
                            type: 'string',
                            defaultValue: 'r'
                        },
                        NUM: {
                            type: 'number',
                            defaultValue: '5'
                        }
                    }
                },
                {
                    opcode: 'titleCase',
                    blockType: 'reporter',
                    text: '将 [STR] 每个单词的首字母大写',
                    arguments: {
                        STR: {
                            type: 'string',
                            defaultValue: 'string is good'
                        }
                    }
                },
                {
                    opcode: 'charAt',
                    blockType: 'reporter',
                    text: '[STR] 的第 [NUM] 个字符',
                    arguments: {
                        STR: {
                            type: 'string',
                            defaultValue: 'string'
                        },
                        NUM: {
                            type: 'number',
                            defaultValue: '1'
                        }
                    }
                },
                {
                    opcode: 'includes',
                    blockType: 'Boolean',
                    text: '[STR] 包括 [STR2] ？',
                    arguments: {
                        STR: {
                            type: 'string',
                            defaultValue: 'string'
                        },
                        STR2: {
                            type: 'string',
                            defaultValue: 'str'
                        }
                    }
                },
                {
                    opcode: 'includesNum',
                    blockType: 'Boolean',
                    text: '从 [STR] 的第 [NUM] 个字符开始包括 [STR2] ？',
                    arguments: {
                        STR: {
                            type: 'string',
                            defaultValue: 'string'
                        },
                        STR2: {
                            type: 'string',
                            defaultValue: 'str'
                        },
                        NUM: {
                            type: 'number',
                            defaultValue: '2'
                        }
                    }
                },
                {
                    opcode: 'startsWith',
                    blockType: 'Boolean',
                    text: '[STR] 以 [STR2] 开头？',
                    arguments: {
                        STR: {
                            type: 'string',
                            defaultValue: 'string'
                        },
                        STR2: {
                            type: 'string',
                            defaultValue: 'str'
                        }
                    }
                },
                {
                    opcode: 'endsWith',
                    blockType: 'Boolean',
                    text: '[STR] 以 [STR2] 结尾？',
                    arguments: {
                        STR: {
                            type: 'string',
                            defaultValue: 'string'
                        },
                        STR2: {
                            type: 'string',
                            defaultValue: 'str'
                        }
                    }
                },
                {
                    opcode: 'strictlyequal',
                    blockType: 'Boolean',
                    text: '[STR] === [STR2]',
                    arguments: {
                        STR: {
                            type: 'string',
                            defaultValue: 'Str'
                        },
                        STR2: {
                            type: 'string',
                            defaultValue: 'str'
                        }
                    }
                },
                {
                    opcode: 'splittojson',
                    blockType: 'reporter',
                    text: '用 [STR2] 分割 [STR]，并返回json',
                    hideFromPalette: true,
                    arguments: {
                        STR: {
                            type: 'string',
                            defaultValue: 'str.ing'
                        },
                        STR2: {
                            type: 'string',
                            defaultValue: '.'
                        }
                    }
                },
                {
                    opcode: 'split',
                    blockType: 'reporter',
                    text: '用 [STR2] 分割 [STR]，并返回',
                    arguments: {
                        STR: {
                            type: 'string',
                            defaultValue: 'str.ing'
                        },
                        STR2: {
                            type: 'string',
                            defaultValue: '.'
                        }
                    }
                },
                {
                    opcode: 'splitid',
                    blockType: 'reporter',
                    text: '用 [STR2] 分割 [STR]，并返回第 [ID] 项',
                    arguments: {
                        STR: {
                            type: 'string',
                            defaultValue: 'str.ing'
                        },
                        STR2: {
                            type: 'string',
                            defaultValue: '.'
                        },
                        ID: {
                            type: 'string',
                            defaultValue: '1'
                        }
                    }
                },
                {
                    opcode: 'getStrNumInStr',
                    blockType: 'reporter',
                    text: ' [STR2] 在 [STR] 里出现的次数',
                    arguments: {
                        STR: {
                            type: 'string',
                            defaultValue: 'str in string'
                        },
                        STR2: {
                            type: 'string',
                            defaultValue: 'str'
                        }
                    }
                },
                {
                    opcode: 'strIsAvailable',
                    blockType: 'Boolean',
                    text: '[STR]是有效[CLASS]？',
                    hideFromPalette: true,
                    arguments: {
                        STR: {
                            type: 'string',
                            defaultValue: '114514@homo.com'
                        },
                        CLASS: {
                            type: 'string',
                            defaultValue: '邮箱',
                            menu: 'strIsAvailable1',
                        }
                    }
                },
                {
                    opcode: 'fillStart',
                    blockType: 'reporter',
                    text: '在 [STR] 的开头填充 [NUM] 个 [STR2]',
                    arguments: {
                        STR: {
                            type: 'string',
                            defaultValue: 'str'
                        },
                        STR2: {
                            type: 'string',
                            defaultValue: 'ing'
                        },
                        NUM: {
                            type: 'number',
                            defaultValue: '2'
                        }
                    }
                },
                {
                    opcode: 'fillEnd',
                    blockType: 'reporter',
                    text: '在 [STR] 的末尾填充 [NUM] 个 [STR2]',
                    arguments: {
                        STR: {
                            type: 'string',
                            defaultValue: 'str'
                        },
                        STR2: {
                            type: 'string',
                            defaultValue: 'ing'
                        },
                        NUM: {
                            type: 'number',
                            defaultValue: '2'
                        }
                    }
                },
                {
                    opcode: 'repeatString',
                    blockType: 'reporter',
                    text: '重复 [STR] [NUM] 个',
                    arguments: {
                        STR: {
                            type: 'string',
                            defaultValue: 'str'
                        },
                        NUM: {
                            type: 'number',
                            defaultValue: '2'
                        }
                    }
                },
            ],
            menus: {
                strIsAvailable1: this.strIsAvailable1,
            }
        };
    }

    length(args){
        return args.STR.length;
    }
    reversal(args){
        var arr=args.STR.split('');
        arr=arr.reverse().join("");
        return arr;
    }
    strPalindrome(args){
        var arr=args.STR.split('');
        arr=arr.reverse().join("");
        return arr===args.STR;
    }
    indexOf(args){
        if(args.STR.indexOf(args.STR2,Number(args.NUM)-1)!=-1) return args.STR.indexOf(args.STR2,Number(args.NUM)-1)+1;
        else return -1;
    }
    lastIndexOf(args) {
        if(args.STR.lastIndexOf(args.STR2,Number(args.NUM)-1)!=-1) return args.STR.lastIndexOf(args.STR2,Number(args.NUM)-1)+1;
        else return -1;
    }
    slicetwo(args){
        return args.STR.slice(Number(args.NUM1)-1,Number(args.NUM2));
    }
    sliceone(args){
        return args.STR.slice(Number(args.NUM)-1);
    }
    substr(args){
        return args.STR.substr(Number(args.NUM1)-1,Number(args.NUM2));
    }
    replace(args){
        return args.STR.replace(args.STR2,args.STR3);
    }
    replaceAll(args){
        return args.STR.replaceAll(args.STR2,args.STR3);
    }
    toUpperCase(args){
        return args.STR.toUpperCase();
    }
    toLowerCase(args){
        return args.STR.toLowerCase();
    }
    padStart(args){
        return args.STR.padStart(Number(args.NUM),args.STR2);
    }
    padEnd(args){
        return args.STR.padEnd(Number(args.NUM),args.STR2);
    }
    titleCase(args){
        var newStr=args.STR.split(" ");
        for(var i=0;i<newStr.length;i++){
            newStr[i]=newStr[i].slice(0,1).toUpperCase() + newStr[i].slice(1).toLowerCase();
        }
        return newStr.join(" ");
    }
    charAt(args){
        return args.STR.charAt(Number(args.NUM)-1);
    }
    includes(args){
        return args.STR.includes(args.STR2);
    }
    includesNum(args) {
        return args.STR.includes(args.STR2,Number(args.NUM));
    }
    startsWith(args) {
        return args.STR.startsWith(args.STR2);
    }
    endsWith(args) {
        return args.STR.endsWith(args.STR2);
    }
    strictlyequal(args) {
        return args.STR===args.STR2;
    }
    splittojson(args) {
        var str_=args.STR.split(args.STR2);
        return JSON.stringify(str_);
    }
    split(args) {
        var str_=args.STR.split(args.STR2);
        return str_;
    }
    splitid(args) {
        var str_=args.STR.split(args.STR2);
        var id=Number(args.ID);
        if(id<=str_.length) return str_[id-1];
    }
    getStrNumInStr(args){
      if(typeof(args.STR)!=="string" || typeof(args.STR2)!=="string") return 0;
      if(args.STR.length<args.STR2.length) return 0;
      let Nums=0;
      for(let i=0;i<args.STR.length;i++){
         let flag=true;
         let k=i;
         for(let n=0;n<args.STR2.length;k++,n++){
            i++;
            if(args.STR[k]!==args.STR2[n]) {
               flag=false;
               break;
            }
         }
         if(flag) Nums++;
         i--;
      }
      return Nums;
    }
    strIsAvailable(args) {
        var str=args.STR;
        if(args.CLASS='1'){
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(str); 
        }else{
            const urlRegex = /^([http,https]?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w.-]*)*\/?$/;
            return urlRegex.test(str);
        }
    }
    fillStart(args){
        var str=args.STR;
        for(var i=0;i<Number(args.NUM);i++){
            str=args.STR2+str;
        }
        return str;
    }
    fillEnd(args){
        var str=args.STR;
        for(var i=0;i<Number(args.NUM);i++){
            str+=args.STR2;
        }
        return str;
    }
    repeatString(args){
        var str="";
        for(var i=0;i<Number(args.NUM);i++) str+=args.STR;
        return str;
    }
}

window.tempExt = {
    Extension: str_mani,
    info: {
        name: 'qxsck.name',
        description: 'qxsck.description',
        extensionId: 'strmani',
        iconURL: icon,
        insetIconURL: insetIcon,
        featured: true,
        disabled: false,
        collaborator: 'CK七星松@ccw',
    },
    l10n: {
        'zh-cn': {
            'qxsck.name': '字符串处理',
            'qxsck.description': '一些处理字符串的方法',
        },
        en: {
            'qxsck.name': 'String proces',
            'qxsck.description': 'Some methods for handling strings.',
        },
    },
}
