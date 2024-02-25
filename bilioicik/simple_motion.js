const { Scratch } = window;

const {
    BlockType, ArgumentType, TargetType, Cast,
  } = Scratch;

const speed = Symbol("speed");
const dt = Symbol("dt");
const turn = Symbol("turn")

const simplemotionpicture = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI2MDAiIGhlaWdodD0iMzc1IiB2aWV3Qm94PSIwLDAsNjAwLDM3NSI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGN4PSIyODcuMDg1OTQiIGN5PSIyMzcuNiIgcj0iMTE2LjQ4MTQ4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2E1Y2FmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2E1Y2FmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48cmFkaWFsR3JhZGllbnQgY3g9IjI0MCIgY3k9IjEyMi40MDAwMSIgcj0iMTUxLjk3MTg4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTIiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2E1Y2FmZiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2E1Y2FmZiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjAsNy41KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNLTYwLDM2Ny41di0zNzVoNjAwdjM3NXoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTE3MC42MDQ0NiwxOTcuNk0yMTAuNjA0NDYsMTk3LjZoMTUyLjk2Mjk2YzIyLjA5MTM5LDAgNDAsMTcuOTA4NjEgNDAsNDBjMCwyMi4wOTEzOSAtMTcuOTA4NjEsNDAgLTQwLDQwaC0xNTIuOTYyOTZjLTIyLjA5MTM5LDAgLTQwLC0xNy45MDg2MSAtNDAsLTQwYzAsLTIyLjA5MTM5IDE3LjkwODYxLC00MCA0MCwtNDB6IiBmaWxsPSJub25lIiBzdHJva2U9InVybCgjY29sb3ItMSkiIHN0cm9rZS13aWR0aD0iMjAiLz48cGF0aCBkPSJNODguMDI4MTEsNzcuODI4NTdjMCwtNC4xMDI2OSAzLjMyNTg4LC03LjQyODU3IDcuNDI4NTcsLTcuNDI4NTdoMTQuODU3MTRjMy43MTQyOSwwIDUuNTcxNDMsMS44NTcxNCA3LjQyODU3LDMuNzE0MjhsNy40Mjg1Nyw3LjQyODU3YzEuODU3MTUsMS44NTcxNSAzLjcxNDI5LDMuNzE0MjkgNy40Mjg1NywzLjcxNDI5aDIyLjI4NTcyYzMuNzE0MjgsMCA1LjU3MTQzLC0xLjg1NzE0IDcuNDI4NTcsLTMuNzE0MjlsNy40Mjg1NywtNy40Mjg1N2MxLjg1NzE1LC0xLjg1NzE1IDMuNzE0MjksLTMuNzE0MjggNy40Mjg1NywtMy43MTQyOGgyMDcuMzcyMzVjNC4xMDI2OSwwIDcuNDI4NTcsMy4zMjU4OCA3LjQyODU3LDcuNDI4NTd2NzQuMjg1NzJjMCw0LjEwMjY5IC0zLjMyNTg4LDcuNDI4NTcgLTcuNDI4NTcsNy40Mjg1N2gtMjA3LjM3MjM0Yy0zLjcxNDI4LDAgLTUuNTcxNDMsMS44NTcxNSAtNy40Mjg1NywzLjcxNDI5bC03LjQyODU3LDcuNDI4NTdjLTEuODU3MTUsMS44NTcxNSAtMy43MTQyOSwzLjcxNDI5IC03LjQyODU3LDMuNzE0MjloLTIyLjI4NTcyYy0zLjcxNDI4LDAgLTUuNTcxNDIsLTEuODU3MTQgLTcuNDI4NTcsLTMuNzE0MjlsLTcuNDI4NTcsLTcuNDI4NTdjLTEuODU3MTUsLTEuODU3MTUgLTMuNzE0MjksLTMuNzE0MjkgLTcuNDI4NTcsLTMuNzE0MjloLTE0Ljg1NzE0Yy00LjEwMjY5LDAgLTcuNDI4NTcsLTMuMzI1ODggLTcuNDI4NTcsLTcuNDI4NTd6IiBmaWxsPSJub25lIiBzdHJva2U9InVybCgjY29sb3ItMikiIHN0cm9rZS13aWR0aD0iMjAiLz48cGF0aCBkPSJNODguMDI4MTEsNzcuODI4NTdjMCwtNC4xMDI2OSAzLjMyNTg4LC03LjQyODU3IDcuNDI4NTcsLTcuNDI4NTdoMTQuODU3MTRjMy43MTQyOSwwIDUuNTcxNDMsMS44NTcxNCA3LjQyODU3LDMuNzE0MjhsNy40Mjg1Nyw3LjQyODU3YzEuODU3MTUsMS44NTcxNSAzLjcxNDI5LDMuNzE0MjkgNy40Mjg1NywzLjcxNDI5aDIyLjI4NTcyYzMuNzE0MjgsMCA1LjU3MTQzLC0xLjg1NzE0IDcuNDI4NTcsLTMuNzE0MjlsNy40Mjg1NywtNy40Mjg1N2MxLjg1NzE1LC0xLjg1NzE1IDMuNzE0MjksLTMuNzE0MjggNy40Mjg1NywtMy43MTQyOGgyMDcuMzcyMzVjNC4xMDI2OSwwIDcuNDI4NTcsMy4zMjU4OCA3LjQyODU3LDcuNDI4NTd2NzQuMjg1NzJjMCw0LjEwMjY5IC0zLjMyNTg4LDcuNDI4NTcgLTcuNDI4NTcsNy40Mjg1N2gtMjA3LjM3MjM0Yy0zLjcxNDI4LDAgLTUuNTcxNDMsMS44NTcxNSAtNy40Mjg1NywzLjcxNDI5bC03LjQyODU3LDcuNDI4NTdjLTEuODU3MTUsMS44NTcxNSAtMy43MTQyOSwzLjcxNDI5IC03LjQyODU3LDMuNzE0MjloLTIyLjI4NTcyYy0zLjcxNDI4LDAgLTUuNTcxNDIsLTEuODU3MTQgLTcuNDI4NTcsLTMuNzE0MjlsLTcuNDI4NTcsLTcuNDI4NTdjLTEuODU3MTUsLTEuODU3MTUgLTMuNzE0MjksLTMuNzE0MjkgLTcuNDI4NTcsLTMuNzE0MjloLTE0Ljg1NzE0Yy00LjEwMjY5LDAgLTcuNDI4NTcsLTMuMzI1ODggLTcuNDI4NTcsLTcuNDI4NTd6IiBmaWxsPSIjNGM5N2ZmIiBzdHJva2U9IiMzYzc4Y2MiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDExMi4zODI4MSwxMzYuOCkgc2NhbGUoMywzKSIgZm9udC1zaXplPSIxNiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iI2ZmZmZmZiIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9IiMzYzc4Y2MiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IiZxdW90O0Nvb3BlciBCbGFjayZxdW90OywgU2FucyBTZXJpZiIgZm9udC13ZWlnaHQ9IjUwMCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHRzcGFuIHg9IjAiIGR5PSIwIj5zb21ldGhpbmc8L3RzcGFuPjwvdGV4dD48cGF0aCBkPSJNMTcwLjYxMzcyLDE5Ny42TTIxMC42MTM3MiwxOTcuNmgxNTIuOTUzN2MyMi4wOTEzOSwwIDQwLDE3LjkwODYxIDQwLDQwYzAsMjIuMDkxMzkgLTE3LjkwODYxLDQwIC00MCw0MGgtMTUyLjk1MzdjLTIyLjA5MTM5LDAgLTQwLC0xNy45MDg2MSAtNDAsLTQwYzAsLTIyLjA5MTM5IDE3LjkwODYxLC00MCA0MCwtNDB6IiBmaWxsPSIjNGM5N2ZmIiBzdHJva2U9IiMzYzc4Y2MiIHN0cm9rZS13aWR0aD0iMiIvPjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDIwNi41NTQ2OSwyNTIpIHNjYWxlKDMsMykiIGZvbnQtc2l6ZT0iMTYiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IiNmZmZmZmYiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjM2M3OGNjIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSImcXVvdDtDb29wZXIgQmxhY2smcXVvdDssIFNhbnMgU2VyaWYiIGZvbnQtd2VpZ2h0PSI1MDAiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0c3BhbiB4PSIwIiBkeT0iMCI+c2ltcGxlPC90c3Bhbj48L3RleHQ+PHBhdGggZD0iTTY5LjI4Njc3LDIyOC42MDAwMmgxOS41NzQ1NXYtMTMuNDk5OTlsMjUuNDI1NDQsMjIuNDk5OTlsLTI1LjQyNTQ0LDIyLjQ5OTk5di0xMy40OTk5OWgtMTkuNTc0NTV6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiMzMzczY2MiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjMwMDoxODcuNS0tPg==";

const simplemotionicon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCwwLDgwLDgwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjI3NC4wOTQ1NiIgeTE9IjIxNC4wOTQ1OCIgeDI9IjIwNS45MDU1MSIgeTI9IjE0NS45MDU1MyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNhNWNhZmYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNhNWNhZmYiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDAuMDAwMDMsLTE0MC4wMDAwNSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTIyMC4xNjI2NCwyMjAuMDAwMDVjLTExLjEzNTUsMCAtMjAuMTYyNiwtOS4wMjcxIC0yMC4xNjI2LC0yMC4xNjI2di0zOS42NzQ4YzAsLTExLjEzNTUgOS4wMjcxLC0yMC4xNjI2IDIwLjE2MjYsLTIwLjE2MjZoMzkuNjc0OGMxMS4xMzU1LDAgMjAuMTYyNiw5LjAyNzEgMjAuMTYyNiwyMC4xNjI2djM5LjY3NDhjMCwxMS4xMzU1IC05LjAyNzEsMjAuMTYyNiAtMjAuMTYyNiwyMC4xNjI2eiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9InVybCgjY29sb3ItMSkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTIyMi42NDIzMiwyMTUuMDAwMDVjLTkuNzQzNTYsMCAtMTcuNjQyMjcsLTcuODk4NzEgLTE3LjY0MjI3LC0xNy42NDIyN3YtMzQuNzE1NDVjMCwtOS43NDM1NiA3Ljg5ODcxLC0xNy42NDIyOCAxNy42NDIyNywtMTcuNjQyMjhoMzQuNzE1NDVjOS43NDM1NiwwIDE3LjY0MjI4LDcuODk4NzIgMTcuNjQyMjgsMTcuNjQyMjh2MzQuNzE1NDVjMCw5Ljc0MzU2IC03Ljg5ODcyLDE3LjY0MjI3IC0xNy42NDIyOCwxNy42NDIyN3oiIGZpbGw9IiM0Yzk3ZmYiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTTIxNy41MDAwMSwxNzFoMTkuNTc0NTV2LTEzLjQ5OTk5bDI1LjQyNTQ0LDIyLjQ5OTk5bC0yNS40MjU0NCwyMi40OTk5OXYtMTMuNDk5OTloLTE5LjU3NDU1eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMzM3M2NjIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjozOS45OTk5NjU6MzkuOTk5OTQ1MDAwMDAwMDI1LS0+";

const simplemotionextensionId = "simplemotion";

const turnrighticon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAqCAYAAADI3bkcAAAAAXNSR0IArs4c6QAABPdJREFUWEfVmW1QVFUYx+/dFxdYWFBEGNBAS3ISTdgFRtnF7eUDGpFGjBrNNNNk9qHyDXUvTc7ONMji4DBUzjTNNFCDNZPlNJXTqwaCQrILhtg4BEjaQAYhw2LL8nJv8/wPiy4stgKR9/nyu3vuuef+z/+ee+5zzvLcNMNscTxAl47wUhZRIfEriRIvxaBJnrvCwF0mjvL8T8SzBfo6X7dcLzSsZdeLu0GRayRW2wyFt9fnp6mXu+cFGy31ZjjG86VEbYByNdGcMB99fmiJFowMmwde7xsCr3YPgq1df4P2NuePRKUkHoCTKqkH7UqqJmJB7rJgYulX11g7ve4k4hlbMhz32+F7X7BVUlCPTG5HETFUq8oj7sxcgp4/uoo5q1D43WfUb+oYAA+f+I09gZ7BbuKBp2MjiE8YFqK85Iur4InabguxxmaAjqnvJjfBJqG+hHqUsjx0F/Hg1qXosS5QBc40RFFCE3Ut/eC6FaFeTZ5uuoHf1o/bTxKrbYbMOzosG8EmwbGdehIfHfge8eiOB9FTjRpDes6i3zWCe2W++XMvHC40hPt0WDaCTUID3lKthsPrW7EnIZAYHqL26WpjuxPlX9ZjGuWqmtmY0wYowdVxmE65DXr21qdNGKP+PqptR5pR9Vq3K8HLYdkJNgqOd6kHr2yM2UHcYoz0aULZqS6Ul53qbMABz+cTgp26SqJT6wpCuXLYiNOiKBAzEhciV8jPifPXXNSzfdYBnrT3Qtf4PCw7waZ8O744Xx9cg0Gn1bCx6ImWTpYLvHT0ci0xyKl7BPXfXu72ZZneaofTQYMcnkTe5lhMN1kpbEz7G980/IWqhcc7PvRyWDaCzZZGDKqYCDXy14o9SGsnxa73W1B2oW0gnVhVqK++k0tGi72YzuekLdpLfG0sB/HXWU+9zl72ALcWN7fCYdkJNgn1aaQ8cZmuhlj6YrxPE7KLLqK8d1AZQqy0rmRp1xRhEhzf06mdTy5+nHh/FKb1uw6naxTXvH6sjeXNshNsFOypcHhpCNZab233dtiTVZnfaEAPqw8Z8EX8tzBaHBlwhOeQz840JI77AO3JTvB6y/lkUh6m05wnfi5gqTYeEktbueyipmHiDbe4iFhpTeybqWvTuZ6XnWCz9RLSqlG3C1+6j/YmBBAXh2u8DCg/PZ5DYAVy5pABq+e5Dl52gj0OmQR7BR0/mx6VS3w5g23geMKzz5Bbcul3KnONcsjGzhUkseXvHMV4tiY7wWbBvoJMUqkVSPE/3b8K6Vqo1nuV7Flp7Cv/tZPOu4dFE7HGltw+FyaPOyw7wbfGMtuPyEyOwGywf3OsT+MuXGFrun3lrZifh4akH4gizx0nSqP8t8Szh5PwJGYrJu38ePYjZCN47e5zSKtUAfOQbeVtug/ZXFaK7xTipptlU45W5njNL+wD6HkCf/QNHaPf1YWG52bD5UkOy06wx4VUa52OjgOGVVXEFx6LXkPclh6FKmqlf7uWzxQ1YQvH2cOFEb8rfvjmTJye8q6yE+xx4dYQUZdRWVSYZgvxqVQ2pjfoseXFLQj2vUOUbbuILfiuPwcWEGtL1rn+E4dlK3iiGybBvmms7PkxbiTOD1bjz43IUOZ0jxPTM9fTP/IOmyX0r87EWc+1/r05t91JdoInupST8wlyjuvxcdFEUVSAqiGujVh5xMC2N2cp7trh/1vwP9cs2QedJT9+AAAAAElFTkSuQmCC";

const turnlefticon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAqCAYAAADI3bkcAAAAAXNSR0IArs4c6QAABOxJREFUWEfVWXtQVFUYv2dhYUleogQ0hmKQZTO5speQQR5ajTE2aZPj2OQYZWN/NOjYg9xddGgqFmY0J5txJiMipwfV9JqEnCbLdokIlmoYhXQFUcEHtirChjyW03y/s5eJZWFFRL3fP7+955x77u/87ne/c75vmeRl6eaGRdSk4TwFXVxTQWCzJJ/3HkvX2YU/BxK6+yLuJmQSv0eM47jmjJ0Fct5MWG0x1Il+xn3N56+NqZZwdn7tLCIfFq5rJcxdGqclfKey3YlFuTUywQB3D0EfJm0kDNYGbCCcfXtwGDBah+ExkUHAzq5+YPMpF7Dd2Sfmk6TPMW2AtIOw5g25xZ+6eK4ySHWEM432p4n8w/qocsKC1QlYS4XtHHD39+3w4aAANoPwyaxYDeG6JXHo1waM8i6fgrWc7UX7/j+E0F/Vdg4SDgxKbxE6g3VbCZsK7xOvxsuGn6I6wouN9lJazEsr4tcTrkyNHrG2937owHWOYSZw1oxgnwpOtNHZPYBbtn9zEljdfOkToEV+alyFVUc4w2RvohWV582/l3BubMhExZrU+IFBEZY3lh4BHjrh2gKli+WS/0887MOqIZyeX434GXrbtMuEVdv0WJDm6j764cUrvmg9fAltjW09wIsu4aNKfFa+jYQY32+wy4WgIa3ZfghRwtXvnkNoK5LPEDLVEc4w2ZcT85TE8H2EO55JmpAvvv/jaYz/1Hqui7B/cGgvlGBSLVDiiN9DnC3Gm9OwPMKXV8RPJ3w0RUQdbyvzzPvhT2d2UZ/VIm/CfGokXETMn33wDiNh7lKxc12tfflbJ4a+ve+kFb4WJC9BQyHDmcPbsl+pi6U2rg2swX3PJWFLXZAQOmJod68b18tf/+sC5rXI2GFJYZURNjYcJOY71ydlERruQtCYsL1WcRz3HGi8aBaKGCDEWJZuqs/B8xLCq4TSOD6PsrU7D6Pt+IUriUJh9RG2txHzsrz5swkT465th2v1nMJydzU1eHwO5+exLG1zDR40PSoEB+XKAr3PyP9imQNT1Du68G2wDKPqCNevEiqwPR41EB+vwbrFNBwZiK0oBbmgP8sw2k/RmKptemQ8obqAEbfklx/Dda2j+yGPwioj7E+BqepXfDgiMgSpx3fmBfDpQK/MZcteoXDNkcuPQOGpIuRvXtURzjQ1rKZFLVsY9RmhaRUOZcPGPVWLJ0oa0ebs6Yu/qQqrhvBwpag/9AApVrIuKZMwbV7ECIX/bBVBZ1PpUVSKbBY59aYorBrChg12VJKmRbFv4bvJUThLGD2+y7w+/xfe9eR2ba41NM5abICv37AoccsTzjTX3UmKcM7ETsrZWoLHF0UnE25+DB/9KFNywoKPW371+C4yFcWmTOFbnnD6q3YoEROpLSa8f05YOqFyvtbPFefssSpGHc4+9D+/uxlpd1dvP6JCtSX16JQorDrCWaYGFMf2F+rhuzotipt+ra3zCsaYPzqGsmbH+V5kPr8UP1Dv6+br5sOqIZyT50AZc2hmD7amqq16xNuxKkcnPIp+USOy7cr6f37HD85zCQ5a5L/Hey2TVlh1hBU1Moz2r+l32ryIlYRK9VP5j0PxVcfpf5FeM4m/SWgNlj/AHGPUMbzVnrTCqiWsHMgDdUHLhE9KqDMzJoni25AGylpLFtrEIq/T/3TjOfx4fTeK8H8WdOl31/lNoAAAAABJRU5ErkJggg==";

const EXTCONFIGCOMMENTID = '_ExtensionConfig_';

class simplemotion{
    static extCount = 0;
    constructor(runtime) {
        this.runtime = runtime;
        simplemotion.extCount += 1;
        this.id = simplemotion.extCount;
        this.hideExtraBlocks = true;
        this.homex=0;
        this.homey=0;
        if (!this.parseExtConfig()) {
            runtime.on('PROJECTLOADED', () => {
              this.parseExtConfig();
            });
        }
        runtime.targets.forEach((target) => this.implementForTarget(target));
            runtime.on("targetWasCreated", (target, originalTarget) =>
            this.implementForTarget(target, originalTarget)
        );
        runtime.on("PROJECT_LOADED", () => {
            runtime.targets.forEach((target) => this.implementForTarget(target));
        });
        
        this._formatMessage = runtime.getFormatMessage({
            "zh-cn": {
                'cmname':'简单运动',
                'simplemotiondocs':'文档',
                'simplemotionshowBlock': '显示不常用积木',
                'simplemotionhideBlock': '隐藏不常用积木',
                'simplemotionshowBlock?':'为了避免积木过多，一些不常用积木被隐藏了。\n是否显示隐藏积木？',

                'titleMove':'移动',
                'cmsethome':'设为出生点',
                'cmgohome':'移到出生点',
                'moveab':'向[a]移动[b]步',
                'moveabx':'向[a]移动[b]步所得x',
                'moveaby':'向[a]移动[b]步所得y',
                'movea':'向[a]移动',
                'moveax':'向[a]移动所得x',
                'moveay':'向[a]移动所得y',
                'moveb':'移动[b]步',
                'movebx':'移动[b]步所得x',
                'moveby':'移动[b]步所得y',
                'move':'移动',
                'movex':'移动所得x',
                'movey':'移动所得y',
                'rspeed':'速度',
                'rdirection':'方向',
                'cmsetspeed':'速度设为[a]',
                'cmsetdirection':'方向设为[a]',
                'cmchangespeed':'速度增加[a]',
                'cmchangedirection':'方向增加[a]',
                'turn':'旋转[i]',
                'rturn':'旋转角度',
                'cmsetturn':'旋转角度设为[a]',
                'cmchangeturn':'旋转角度增加[a]',


                'titleCoordinateandDirection':'坐标与方向',
                'rdistancetocoordinate':'到x:[x]y:[y]的距离',
                'rdirectiontocoordinate':'到x:[x]y:[y]的方向',
                'cmsetdirectiontocoordinate':'方向设到x:[x]y:[y]',
                'cmdirectiontocoordinate':'面向x:[x]y:[y]',
                'cmcoordinateadd':'x,y各增加[x][y]',
                'turndegreearound':'绕x:[x]y:[y]旋转[i][d]度',

                'titletobecontinued':'未完待续',
                
                'r':'',
            },
            en: {
                'cmname':'simple motion',
                'simplemotiondocs':'documentation',
                'simplemotionshowBlock': 'show other blocks',
                'simplemotionhideBlock': 'hide other blocks',
                'simplemotionshowBlock?':'To avoid clutter, some infrequently used blocks are hidden.\nDo you want to show hidden blocks?',

                'titleMove':'Move',
                'cmsethome':'set home',
                'cmgohome':'go home',
                'moveab':'move[b]steps in direction[a]',
                'moveabx':'x after moving[b]steps in direction[a]',
                'moveaby':'y after moving[b]steps in direction[a]',
                'movea':'move in direction[a]',
                'moveax':'x after moving in direction[a]',
                'moveay':'y after moving in direction[a]',
                'moveb':'move[b]steps',
                'movebx':'x after[b]-step-move',
                'moveby':'y after[b]-step-move',
                'move':'move',
                'movex':'x after move',
                'movey':'y after move',
                'rspeed':'speed',
                'rdirection':'direction',
                'cmsetspeed':'set speed to[a]',
                'cmsetdirection':'set direction to[a]',
                'cmchangespeed':'change speed by[a]',
                'cmchangedirection':'change direction by[a]',
                'turn':'turn[i]degrees',
                'rturn':'rotation angle',
                'cmsetturn':'set rotation angle to[a]degrees',
                'cmchangeturn':'change rotation angle by[a]',

                'titleCoordinateandDirection':'Coordinate and Direction',
                'rdistancetocoordinate':'distance to x:[x]y:[y]',
                'rdirectiontocoordinate':'direction to x:[x]y:[y]',
                'cmsetdirectiontocoordinate':'set direction to x:[x]y:[y]',
                'cmdirectiontocoordinate':'point towards x:[x]y:[y]',
                'cmcoordinateadd':'changed x and y by[x][y]',
                'turndegreearound':'turn[i][d]degrees around x:[x]y:[y]',
                
                'titletobecontinued':'To be continued',

                'r':'',
            }
        })
	}
    formatMessage(id) {
        return this._formatMessage({
            id,
            default: id,
            description: id
        });
    }
    getInfo(){
        return{
            id:simplemotionextensionId,
            name:this.formatMessage('cmname'),
            blockIconURI:'',
            menuIconURI: simplemotionicon,
            color1:'#4c97ff',
            color2:'#a5caff',
            blocks:[
                {
                    blockType: "button",
                    text: this.formatMessage('simplemotiondocs'),
                    onClick: this.docs,
                },
                {
                    blockType: 'button',
                    hideFromPalette: !this.hideExtraBlocks,
                    text: this.formatMessage('simplemotionshowBlock'),
                    onClick: () => {
                      if (confirm(this.formatMessage('simplemotionshowBlock?'))) {
                        this.hideExtraBlocks = false;
                        this.storeExtConfig();
                        this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE')
                      }
                    },
                },
                {
                    blockType: 'button',
                    text: this.formatMessage('simplemotionhideBlock'),
                    hideFromPalette: this.hideExtraBlocks,
                    onClick: () => {
                        this.hideExtraBlocks = true;
                        this.storeExtConfig();
                        this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE')
                    },
                },
                '---' + this.formatMessage('titleMove'),
                {
                    opcode: 'rtest',
                    blockType: 'reporter',
                    text:'test',
                    filter: ['sprite'],
                    hideFromPalette: 1
                },
                {
                    opcode: 'cmtest',
                    blockType: 'command',
                    text:'test',
                    filter: ['sprite'],
                    hideFromPalette: 1
                },
                {
                    opcode: 'rmoveab',
                    blockType: 'reporter',
                    text:this.formatMessage('moveab'),
                    arguments:{
                        a:{
                            type:'angle',
                            defaultValue:23
                        },
                        b:{
                            type:'string',
                            defaultValue:24
                        }
                    },
                    filter: ['sprite'],
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'rmoveabx',
                    blockType: 'reporter',
                    text:this.formatMessage('moveabx'),
                    arguments:{
                        a:{
                            type:'angle',
                            defaultValue:23
                        },
                        b:{
                            type:'string',
                            defaultValue:24
                        }
                    },
                    filter: ['sprite'],
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'rmoveaby',
                    blockType: 'reporter',
                    text:this.formatMessage('moveaby'),
                    arguments:{
                        a:{
                            type:'angle',
                            defaultValue:23
                        },
                        b:{
                            type:'string',
                            defaultValue:24
                        }
                    },
                    filter: ['sprite'],
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'cmmoveab',
                    blockType: 'command',
                    text:this.formatMessage('moveab'),
                    arguments:{
                        a:{
                            type:'angle',
                            defaultValue:23
                        },
                        b:{
                            type:'string',
                            defaultValue:24
                        }
                    },
                    filter: ['sprite']
                },
                {
                    opcode: 'rmovea',
                    blockType: 'reporter',
                    text:this.formatMessage('movea'),
                    arguments:{
                        a:{
                            type:'angle',
                            defaultValue:23
                        }
                    },
                    filter: ['sprite'],
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'rmoveax',
                    blockType: 'reporter',
                    text:this.formatMessage('moveax'),
                    arguments:{
                        a:{
                            type:'angle',
                            defaultValue:23
                        }
                    },
                    filter: ['sprite'],
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'rmoveay',
                    blockType: 'reporter',
                    text:this.formatMessage('moveay'),
                    arguments:{
                        a:{
                            type:'angle',
                            defaultValue:23
                        }
                    },
                    filter: ['sprite'],
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'cmmovea',
                    blockType: 'command',
                    text:this.formatMessage('movea'),
                    arguments:{
                        a:{
                            type:'angle',
                            defaultValue:23
                        }
                    },
                    filter: ['sprite']
                },
                {
                    opcode: 'rmoveb',
                    blockType: 'reporter',
                    text:this.formatMessage('moveb'),
                    arguments:{
                        b:{
                            type:'string',
                            defaultValue:24
                        }
                    },
                    filter: ['sprite'],
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'rmovebx',
                    blockType: 'reporter',
                    text:this.formatMessage('movebx'),
                    arguments:{
                        b:{
                            type:'string',
                            defaultValue:24
                        }
                    },
                    filter: ['sprite'],
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'rmoveby',
                    blockType: 'reporter',
                    text:this.formatMessage('moveby'),
                    arguments:{
                        b:{
                            type:'string',
                            defaultValue:24
                        }
                    },
                    filter: ['sprite'],
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'cmmoveb',
                    blockType: 'command',
                    text:this.formatMessage('moveb'),
                    arguments:{
                        b:{
                            type:'string',
                            defaultValue:24
                        }
                    },
                    filter: ['sprite']
                },
                {
                    opcode: 'rmove',
                    blockType: 'reporter',
                    text:this.formatMessage('move'),
                    disableMonitor: true,
                    filter: ['sprite'],
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'rmovex',
                    blockType: 'reporter',
                    text:this.formatMessage('movex'),
                    disableMonitor: true,
                    filter: ['sprite'],
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'rmovey',
                    blockType: 'reporter',
                    text:this.formatMessage('movey'),
                    disableMonitor: true,
                    filter: ['sprite'],
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'cmmove',
                    blockType: 'command',
                    text:this.formatMessage('move'),
                    filter: ['sprite']
                },
                {
                    opcode: 'rspeed',
                    blockType: 'reporter',
                    text:this.formatMessage('rspeed'),
                    filter: ['sprite']
                },
                {
                    opcode: 'rdirection',
                    blockType: 'reporter',
                    text:this.formatMessage('rdirection'),
                    filter: ['sprite']
                },
                {
                    opcode: 'cmsetspeed',
                    blockType: 'command',
                    text:this.formatMessage('cmsetspeed'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:24
                        }
                    },
                    filter: ['sprite']
                },
                {
                    opcode: 'cmsetdirection',
                    blockType: 'command',
                    text:this.formatMessage('cmsetdirection'),
                    arguments:{
                        a:{
                            type:'angle',
                            defaultValue:24
                        }
                    },
                    filter: ['sprite']
                },
                {
                    opcode: 'cmchangespeed',
                    blockType: 'command',
                    text:this.formatMessage('cmchangespeed'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:24
                        }
                    },
                    filter: ['sprite']
                },
                {
                    opcode: 'cmchangedirection',
                    blockType: 'command',
                    text:this.formatMessage('cmchangedirection'),
                    arguments:{
                        a:{
                            type:'angle',
                            defaultValue:24
                        }
                    },
                    filter: ['sprite']
                },
                {
                    opcode: 'rturnright',
                    blockType: 'reporter',
                    text:this.formatMessage('turn'),
                    arguments:{
                        i:{
                            type:Scratch.ArgumentType.IMAGE,
                            dataURI: turnrighticon,
                        }
                    },
                    disableMonitor: true,
                    filter: ['sprite'],
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'rturnleft',
                    blockType: 'reporter',
                    text:this.formatMessage('turn'),
                    arguments:{
                        i:{
                            type:Scratch.ArgumentType.IMAGE,
                            dataURI: turnlefticon,
                        }
                    },
                    disableMonitor: true,
                    filter: ['sprite'],
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode: 'cmturnright',
                    blockType: 'command',
                    text:this.formatMessage('turn'),
                    arguments:{
                        i:{
                            type:Scratch.ArgumentType.IMAGE,
                            dataURI: turnrighticon,
                        }
                    },
                    filter: ['sprite']
                },
                {
                    opcode: 'cmturnleft',
                    blockType: 'command',
                    text:this.formatMessage('turn'),
                    arguments:{
                        i:{
                            type:Scratch.ArgumentType.IMAGE,
                            dataURI: turnlefticon,
                        }
                    },
                    filter: ['sprite']
                },
                {
                    opcode: 'rturn',
                    blockType: 'reporter',
                    text:this.formatMessage('rturn'),
                    filter: ['sprite']
                },
                {
                    opcode: 'cmsetturn',
                    blockType: 'command',
                    text:this.formatMessage('cmsetturn'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:24
                        }
                    },
                    filter: ['sprite']
                },
                {
                    opcode: 'cmchangeturn',
                    blockType: 'command',
                    text:this.formatMessage('cmchangeturn'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:24
                        }
                    },
                    filter: ['sprite']
                },
                '---' + this.formatMessage('titleCoordinateandDirection'),
                {
                    opcode: 'rdistancetocoordinate',
                    blockType: 'reporter',
                    text:this.formatMessage('rdistancetocoordinate'),
                    arguments:{
                        x:{
                            type:'string',
                            defaultValue:23
                        },
                        y:{
                            type:'string',
                            defaultValue:33
                        }
                    },
                    filter: ['sprite']
                },
                {
                    opcode: 'rdirectiontocoordinate',
                    blockType: 'reporter',
                    text:this.formatMessage('rdirectiontocoordinate'),
                    arguments:{
                        x:{
                            type:'string',
                            defaultValue:23
                        },
                        y:{
                            type:'string',
                            defaultValue:33
                        }
                    },
                    filter: ['sprite']
                },
                {
                    opcode: 'cmsetdirectiontocoordinate',
                    blockType: 'command',
                    text:this.formatMessage('cmsetdirectiontocoordinate'),
                    arguments:{
                        x:{
                            type:'string',
                            defaultValue:23
                        },
                        y:{
                            type:'string',
                            defaultValue:33
                        }
                    },
                    filter: ['sprite']
                },
                {
                    opcode: 'cmdirectiontocoordinate',
                    blockType: 'command',
                    text:this.formatMessage('cmdirectiontocoordinate'),
                    arguments:{
                        x:{
                            type:'string',
                            defaultValue:23
                        },
                        y:{
                            type:'string',
                            defaultValue:33
                        }
                    },
                    filter: ['sprite']
                },
                {
                    opcode: 'rxy',
                    blockType: 'reporter',
                    text:'x,y',
                    filter: ['sprite']
                },
                {
                    opcode: 'cmcoordinateadd',
                    blockType: 'command',
                    text:this.formatMessage('cmcoordinateadd'),
                    arguments:{
                        x:{
                            type:'string',
                            defaultValue:23
                        },
                        y:{
                            type:'string',
                            defaultValue:33
                        }
                    },
                    filter: ['sprite']
                },
                {
                    opcode: 'cmturnrightaround',
                    blockType: 'command',
                    text:this.formatMessage('turndegreearound'),
                    arguments:{
                        x:{
                            type:'string',
                            defaultValue:23
                        },
                        y:{
                            type:'string',
                            defaultValue:33
                        },
                        d:{
                            type:'angle',
                            defaultValue:33
                        },
                        i:{
                            type:Scratch.ArgumentType.IMAGE,
                            dataURI: turnrighticon,
                        }
                    },
                    filter: ['sprite']
                },
                {
                    opcode: 'cmturnleftaround',
                    blockType: 'command',
                    text:this.formatMessage('turndegreearound'),
                    arguments:{
                        x:{
                            type:'string',
                            defaultValue:23
                        },
                        y:{
                            type:'string',
                            defaultValue:33
                        },
                        d:{
                            type:'angle',
                            defaultValue:33
                        },
                        i:{
                            type:Scratch.ArgumentType.IMAGE,
                            dataURI: turnlefticon,
                        }
                    },
                    filter: ['sprite']
                },

                '---' + this.formatMessage('titletobecontinued')
            ],
            menus:{
                boolean:{
                    acceptReporters:true,
                    items:['','true','false']
                }
            }
        }
    }

    docs() {
        let a = document.createElement('a');
        a.href = "https://learn.ccw.site/article/ded82bb8-3d48-43ea-872e-eb7d2dcbb7cf";
        a.rel = "noopener noreferrer";
        a.target = "blank";
        a.click();
    }
    findExtConfigComment() {
        const stage = this.runtime.getTargetForStage();
        if (!stage || !stage.comments) return undefined;
        return stage.comments[EXTCONFIGCOMMENTID];
    }
    getAllExtConfig() {
        const comment = this.findExtConfigComment();
        if (!comment) return undefined;
        const lines = comment.text.split('\n');
        if (lines.length === 0) {
          console.warn(
            `${simplemotionextensionId}: Extension config comment does not contain valid line.`,
          );
          return undefined;
        }
        const jsonText = lines[lines.length - 1];
        try {
          const parsed = JSON.parse(jsonText);
          if (!parsed || typeof parsed !== 'object') {
            throw new Error('Invalid object');
          }
          return parsed;
        } catch (e) {
          console.warn(`${simplemotionextensionId}: Config comment has invalid JSON`, e);
          return undefined;
        }
    }
    parseExtConfig() {
        let config = this.getAllExtConfig();
        if (!config) return false;
        config = config[simplemotionextensionId];
        if (!config) return false;
        if ('hideExtraBlocks' in config) {
          this.hideExtraBlocks = Cast.toBoolean(config.hideExtraBlocks);
          this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE');
        }
        return true;
    }
    generateExtConfig() {
        const options = {};
        options.hideExtraBlocks = this.hideExtraBlocks;
        return options;
    }
    
      storeExtConfig() {
        let config = this.getAllExtConfig();
        if (!config) config = {};
        config[simplemotionextensionId] = this.generateExtConfig();
    
        const existingComment = this.findExtConfigComment();
        if (existingComment) {
          const lines = existingComment.text.split('\n');
          if (lines.length === 0) {
            lines.push('');
          }
          lines[lines.length - 1] = JSON.stringify(config);
          existingComment.text = lines.join('\n');
        } else {
          const target = this.runtime.getTargetForStage();
          const text = `${this.formatMessage('config.tip')}\n${JSON.stringify(
            config,
          )}`;
          target.createComment(
            EXTCONFIGCOMMENTID,
            null,
            text,
            1,
            1,
            400,
            200,
            false,
          );
        }
        this.runtime.emitProjectChanged();
    }
    implementForTarget(target, originalTarget){
        if (speed in target)return;
        target[speed] = originalTarget ? originalTarget[speed] : 10;
        target[dt] = originalTarget ? originalTarget[dt] : 90;
        target[turn] = originalTarget ? originalTarget[turn] : 45
    }
    ToBoolean(a){
        return ! [0,false,'','0','false','undefined','null'].includes(a)
    }
    rtest(args,util){
        return NaN == NaN
    }
    cmtest(args,util){
        util.target.stopAll();
    }
    rmoveab(args,util){
        const a = Math.PI*args.a/180
        return (util.target.x + args.b * Math.sin(a)) + ',' + (util.target.y + args.b * Math.cos(a))
    }
    rmoveabx(args,util){
        return util.target.x + args.b * Math.sin(Math.PI*args.a/180)
    }
    rmoveaby(args,util){
        return util.target.y + args.b * Math.cos(Math.PI*args.a/180)
    }
    cmmoveab(args,util){
        const d = Math.PI*args.a/180;
        util.target.setXY(util.target.x + args.b * Math.sin(d),util.target.y + args.b * Math.cos(d))
    }
    rmovea(args,util){
        const a = Math.PI*args.a/180
        return (util.target.x + util.target[speed] * Math.sin(a)) + ',' + (util.target.y + util.target[speed] * Math.cos(a))
    }
    rmoveax(args,util){
        return util.target.x + util.target[speed] * Math.sin(Math.PI*args.a/180)
    }
    rmoveay(args,util){
        return util.target.y + util.target[speed] * Math.cos(Math.PI*args.a/180)
    }
    cmmovea(args,util){
        const d = Math.PI*args.a/180;
        util.target.setXY(util.target.x + util.target[speed] * Math.sin(d),util.target.y + util.target[speed] * Math.cos(d))
    }
    rmoveb(args,util){
        const a = Math.PI*util.target[dt]/180
        return (util.target.x + args.b * Math.sin(a)) + ',' + (util.target.y + args.b * Math.cos(a))
    }
    rmovebx(args,util){
        return util.target.x + args.b * Math.sin(Math.PI*util.target[dt]/180)
    }
    rmoveby(args,util){
        return util.target.y + args.b * Math.cos(Math.PI*util.target[dt]/180)
    }
    cmmoveb(args,util){
        const d = Math.PI*util.target[dt]/180;
        util.target.setXY(util.target.x + args.b * Math.sin(d),util.target.y + args.b * Math.cos(d))
    }
    rmove(args,util){
        const a = Math.PI*util.target[dt]/180
        return (util.target.x + util.target[speed] * Math.sin(a)) + ',' + (util.target.y + util.target[speed] * Math.cos(a))
    }
    rmovex(args,util){
        return util.target.x + util.target[speed] * Math.sin(Math.PI*util.target[dt]/180)
    }
    rmovey(args,util){
        return util.target.y + util.target[speed] * Math.cos(Math.PI*util.target[dt]/180)
    }
    cmmove(args,util){
        const d = Math.PI*util.target[dt]/180;
        util.target.setXY(util.target.x + util.target[speed] * Math.sin(d),util.target.y + util.target[speed] * Math.cos(d))
    }
    rspeed(args,util){
        return util.target[speed]
    }
    rdirection(ars,util){
        return util.target[dt]
    }
    cmsetspeed(args,util){
        util.target[speed] = Number(args.a)
    }
    cmsetdirection(args,util){
        util.target[dt] = Number(args.a)
    }
    cmchangespeed(args,util){
        util.target[speed] += Number(args.a)
    }
    cmchangedirection(args,util){
        util.target[dt] += Number(args.a)
    }
    rturnright(args,util){
        return util.target.direction + util.target[turn]
    }
    rturnleft(args,util){
        return util.target.direction - util.target[turn]
    }
    cmturnright(args,util){
        util.target.setDirection(util.target.direction + util.target[turn])
    }
    cmturnleft(args,util){
        util.target.setDirection(util.target.direction - util.target[turn])
    }
    rturn(args,util){
        return util.target[turn]
    }
    cmsetturn(args,util){
        util.target[turn] = Number(args.a)
    }
    cmchangeturn(args,util){
        util.target[turn] += Number(args.a)
    }
    rdistancetocoordinate(args,util){
        const dx = util.target.x - args.x
        const dy = util.target.y - args.y
        return Math.sqrt(dx * dx + dy * dy)
    }
    rdirectiontocoordinate(args,util){
        const dx = args.x - util.target.x;
        const dy = args.y - util.target.y;
        const dr = dx/dy
        if (isNaN(dr))return;
        if (dy > 0)return Math.atan(dr) / Math.PI * 180
        if(dx > 0)return Math.atan(dr) / Math.PI * 180 + 180
        return Math.atan(dr) / Math.PI * 180 - 180
    }
    cmsetdirectiontocoordinate(args,util){
        const dy = util.target.y - args.y ;
        util.target[dt] = (Math.atan((util.target.x - args.x) / (dy)) / Math.PI * 180 + (dy > 0 ? 180 : 0))
    }
    cmdirectiontocoordinate(args,util){
        const dy = util.target.y - args.y ;
        util.target.setDirection(Math.atan((util.target.x - args.x) / (dy)) / Math.PI * 180 + (dy > 0 ? 180 : 0))
    }
    rxy(args,util){
        return (util.target.x) + ',' + (util.target.y);
    }
    cmcoordinateadd(args,util){
        util.target.setXY(util.target.x + Number(args.x),util.target.y + Number(args.y))
    }
    cmturnrightaround(args,util){
        const dx = util.target.x - args.x;
        const dy = util.target.y - args.y;
        const dr = dx/dy;
        if (isNaN(dr))return;
        const r = Math.sqrt(dx * dx + dy * dy);
        const d = (-args.d-(dy > 0 ? 270 : 90))*Math.PI/180 - Math.atan(dr);
        util.target.setXY(Math.cos(d)*r,Math.sin(d)*r)
    }
    cmturnleftaround(args,util){
        const dx = util.target.x - args.x;
        const dy = util.target.y - args.y;
        const dr = dx/dy;
        if (isNaN(dr))return;
        const r = Math.sqrt(dx * dx + dy * dy);
        const d = (args.d-(dy > 0 ? 270 : 90))*Math.PI/180 - Math.atan(dr);
        util.target.setXY(Math.cos(d)*r,Math.sin(d)*r)
    }
}

window.tempExt = {
    Extension: simplemotion,
    info: {
        name: "simplemotion.name",
        description: "simplemotion.descp",
        extensionId: simplemotionextensionId,
        iconURL: simplemotionpicture,
        insetIconURL: simplemotionicon,
        featured: true,
        disabled: false,
        collaborator: "bilioicik @ CCW",
        collaboratorURL: "https://www.ccw.site/student/6218cd094daafc57cebfc1d3"
    },
    l10n: {
        "zh-cn": {
            "simplemotion.name": "向前移动",
            "simplemotion.descp": "关于动作的指令积木"
        },
        en: {
            "simplemotion.name": "Moving Onwards",
            "simplemotion.descp": "command block about motion"
        }
    }
};