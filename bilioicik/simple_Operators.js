//感谢多莉pro的源码让我知道如何隐藏积木

const { Scratch } = window;

const {
    BlockType, ArgumentType, TargetType, Cast,
  } = Scratch;

const simpleOperatorspicture = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI2MDAiIGhlaWdodD0iMzc1IiB2aWV3Qm94PSIwLDAsNjAwLDM3NSI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGN4PSIyODcuMDg1OTQiIGN5PSIyMzcuNiIgcj0iMTE2LjQ4MTQ4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzU5YzA1OSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzU5YzA1OSIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48cmFkaWFsR3JhZGllbnQgY3g9IjI0MCIgY3k9IjEyMi40IiByPSIxODcuNjQ4MTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNTljMDU5Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNTljMDU5IiBzdG9wLW9wYWNpdHk9IjAiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MCw3LjUpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0tNjAsMzY3LjV2LTM3NWg2MDB2Mzc1eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMTcwLjYwNDQ2LDE5Ny42TTIxMC42MDQ0NiwxOTcuNmgxNTIuOTYyOTZjMjIuMDkxMzksMCA0MCwxNy45MDg2MSA0MCw0MGMwLDIyLjA5MTM5IC0xNy45MDg2MSw0MCAtNDAsNDBoLTE1Mi45NjI5NmMtMjIuMDkxMzksMCAtNDAsLTE3LjkwODYxIC00MCwtNDBjMCwtMjIuMDkxMzkgMTcuOTA4NjEsLTQwIDQwLC00MHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0idXJsKCNjb2xvci0xKSIgc3Ryb2tlLXdpZHRoPSIyMCIvPjxwYXRoIGQ9Ik0xNzAuNjA0NDYsMTk3LjZNMjEwLjYwNDQ2LDE5Ny42aDE1Mi45NjI5NmMyMi4wOTEzOSwwIDQwLDE3LjkwODYxIDQwLDQwYzAsMjIuMDkxMzkgLTE3LjkwODYxLDQwIC00MCw0MGgtMTUyLjk2Mjk2Yy0yMi4wOTEzOSwwIC00MCwtMTcuOTA4NjEgLTQwLC00MGMwLC0yMi4wOTEzOSAxNy45MDg2MSwtNDAgNDAsLTQweiIgZmlsbD0iIzU5YzA1OSIgc3Ryb2tlPSIjNDc5YTQ3IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNNTIuMzUxODUsODIuNE05Mi4zNTE4NSw4Mi40aDI5NS4yOTYzbDQwLDQwbC00MCw0MGgtMjk1LjI5NjNsLTQwLC00MHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0idXJsKCNjb2xvci0yKSIgc3Ryb2tlLXdpZHRoPSIyMCIvPjxwYXRoIGQ9Ik01Mi4zNTE4NSw4Mi40TTkyLjM1MTg1LDgyLjRoMjk1LjI5NjNsNDAsNDBsLTQwLDQwaC0yOTUuMjk2M2wtNDAsLTQweiIgZmlsbD0iIzU5YzA1OSIgc3Ryb2tlPSIjNDc5YTQ3IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNNzYuNzg2NzcsMjQ1LjFjLTQuMTQyMTQsMCAtNy41LC0xLjExOTI5IC03LjUsLTIuNDk5OTl2LTkuOTk5OTljMCwtMS4zODA3MiAzLjM1Nzg2LC0yLjQ5OTk5IDcuNSwtMi40OTk5OWg3LjV2LTcuNWMwLC00LjE0MjE0IDEuMTE5MjgsLTcuNSAyLjQ5OTk5LC03LjVoOS45OTk5OWMxLjM4MDcyLDAgMi40OTk5OSwzLjM1Nzg2IDIuNDk5OTksNy41djcuNWg3LjUwMDAyYzQuMTQyMTUsMCA3LjUsMS4xMTkyOCA3LjUsMi40OTk5OXY5Ljk5OTk5YzAsMS4zODA3MiAtMy4zNTc4NSwyLjQ5OTk5IC03LjUsMi40OTk5OWgtNy41MDAwMnY3LjUwMDAxYzAsNC4xNDIxNCAtMS4xMTkyOCw3LjUgLTIuNDk5OTksNy41aC05Ljk5OTk5Yy0xLjM4MDcyLDAgLTIuNDk5OTksLTMuMzU3ODYgLTIuNDk5OTksLTcuNXYtNy41MDAwMXoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzM4OTQzOCIgc3Ryb2tlLXdpZHRoPSIyIi8+PGcgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjNDc5YTQ3IiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIGQ9Ik0zNDMuMTc5ODUsMTM1Ljk3NjM0Yy0xLjQ5OTU5LDAgLTIuNzE1MjUsLTEuMjE1NjcgLTIuNzE1MjUsLTIuNzE1MjZ2LTAuMDAwMDFjMCwtMC4wMDIxNSAwLC0wLjAwNDMgMC4wMDAwMSwtMC4wMDY0NWMwLC0wLjAwMDAxIDAsLTAuMDAwMDEgMCwtMC4wMDAwMnYtMTMuNTY5ODJoLTAuMDAwMDF2LTguMTQ1NzdjMCwtMS40OTk1OSAxLjIxNTY2LC0yLjcxNTI1IDIuNzE1MjUsLTIuNzE1MjVjMC4wMDIxNiwwIDAuMDA0MzIsMCAwLjAwNjQ4LDAuMDAwMDFoMTMuNTY5ODJ2LTAuMDAwMDFoOC4xNDU3OGMxLjQ5OTU5LDAgMi43MTUyNSwxLjIxNTY3IDIuNzE1MjUsMi43MTUyNWMwLDAuMDAyMTYgMCwwLjAwNDMyIDAsMC4wMDY0N3YxMy41Njk4MnYwdjUuNDMwNTJoMC4wMDAwMXYxMy41NzYyN2MwLDAuMDA1MjggLTAuMDAwMDIsMC4wMTA1NyAtMC4wMDAwNSwwLjAxNTg0djIuNjk5NDJoMC4wMDAwM3Y4LjE0NTc3YzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI1IC0yLjcxNTI1LDIuNzE1MjVjLTAuMDAyMTYsMCAtMC4wMDQzLC0wLjAwMDAxIC0wLjAwNjQ2LC0wLjAwMDAxaC0yMS43MDkxM2MtMC4wMDIxNiwwLjAwMDAxIC0wLjAwNDMxLDAuMDAwMDEgLTAuMDA2NDcsMC4wMDAwMWMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY2IC0yLjcxNTI2LC0yLjcxNTI1YzAsLTEuNDk5NTkgMS4yMTU2NywtMi43MTUyNiAyLjcxNTI2LC0yLjcxNTI2YzAuMDAwMDEsMCAwLjAwMDAxLDAgMC4wMDAwMiwwdjBoMTYuMzAwNjRjMS40OTUzOCwtMC4wMDQ5MyAyLjcwNjEsLTEuMjE4NyAyLjcwNjEsLTIuNzE1MjVoMC4wMDAwMnYtMTAuODYxMDJoLTAuMDAwMDJ2LTAuMDAwMDFoLTAuMDAwMDFjMCwtMS40OTY1NCAtMS4yMTA3MSwtMi43MTAzMSAtMi43MDYxLC0yLjcxNTI1aC0xNi4zMDA2M3Ywek0zNDguNjAxMjUsMTE0LjI1NDMxYy0xLjQ5NTM4LDAuMDA0OTQgLTIuNzA2MSwxLjIxODcxIC0yLjcwNjEsMi43MTUyNGgtMC4wMDAwNHYxMC44NzAxNWMwLjAwNDkzLDEuNDk1MzggMS4yMTg3MSwyLjcwNjExIDIuNzE1MjUsMi43MDYxMXYwLjAwMDAzaDEwLjg3MDE1YzEuNDk1MzgsLTAuMDA0OTQgMi43MDYxLC0xLjIxODcgMi43MDYxLC0yLjcxNTI0aDAuMDAwMDR2LTEwLjg3MDE1Yy0wLjAwNDkzLC0xLjQ5NTM4IC0xLjIxODcsLTIuNzA2MSAtMi43MTUyNCwtMi43MDYxdi0wLjAwMDAzeiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iLz48cGF0aCBkPSJNMTEyLjM4Mjg2LDExMS41MzkwOGMwLC0xLjQ5OTU5IDEuMjE1NjYsLTIuNzE1MjUgMi43MTUyNSwtMi43MTUyNWMwLjAwMjE2LDAgMC4wMDQzMSwwLjAwMDAxIDAuMDA2NDYsMC4wMDAwMWgyMS43MDkxM2MwLjAwMjE1LC0wLjAwMDAxIDAuMDA0MzEsLTAuMDAwMDEgMC4wMDY0NywtMC4wMDAwMWMxLjQ5OTU5LDAgMi43MTUyNiwxLjIxNTY2IDIuNzE1MjYsMi43MTUyNWMwLDEuNDk5NTkgLTEuMjE1NjcsMi43MTUyNiAtMi43MTUyNiwyLjcxNTI2Yy0wLjAwMDAxLDAgLTAuMDAwMDEsMCAtMC4wMDAwMiwwdjAuMDAwMDFoLTE2LjMwMDY0Yy0xLjQ5NTM4LDAuMDA0OTQgLTIuNzA2MSwxLjIxODcxIC0yLjcwNjEsMi43MTUyNGgtMC4wMDAwNXYwLjAwMDAyaDAuMDAwMDVjMCwxLjQ5MzEyIDEuMjA1MTgsMi43MDQ3NiAyLjY5NTg0LDIuNzE1MTloMTYuMzA0NDFjMC4wMDIxNSwwIDAuMDA0MzEsLTAuMDAwMDEgMC4wMDY0NiwtMC4wMDAwMWMxLjQ5OTU5LDAgMi43MTUyNSwxLjIxNTY2IDIuNzE1MjUsMi43MTUyNXYxMC44NjEwNGMwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNSAtMi43MTUyNSwyLjcxNTI1Yy0wLjAwMjE1LDAgLTAuMDA0MzEsMCAtMC4wMDY0NiwwaC0yMS43MDkxMmMtMC4wMDIxNiwwLjAwMDAxIC0wLjAwNDMxLDAgLTAuMDA2NDcsMGMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY2IC0yLjcxNTI2LC0yLjcxNTI1YzAsLTEuNDk5NTkgMS4yMTU2NywtMi43MTUyNiAyLjcxNTI2LC0yLjcxNTI2YzAuMDAwMDEsMCAwLjAwMDAxLDAgMC4wMDAwMiwwdi0wLjAwMDAxaDE2LjMwMDY0YzEuNDk1MzgsLTAuMDA0OTQgMi43MDYxLC0xLjIxODcgMi43MDYxLC0yLjcxNTI0aDAuMDAwMDV2LTAuMDAwMDJoLTAuMDAwMDVjMCwtMS40OTMxMiAtMS4yMDUxOSwtMi43MDQ3NiAtMi42OTU4NCwtMi43MTUxOWgtMTYuMzA0NGMtMC4wMDIxNiwwIC0wLjAwNDMxLDAuMDAwMDEgLTAuMDA2NDYsMC4wMDAwMWMtMC45MDkwNCwwIC0xLjcxMzc0LC0wLjQ0NjcyIC0yLjIwNjU2LC0xLjEzMjZjLTAuMzIwMTksLTAuNDQ1NTkgLTAuNTA4NzUsLTAuOTkyMTQgLTAuNTA4NzUsLTEuNTgyNzNjMCwtMC4wMDU3MSAwLjAwMDAxLC0wLjAxMTQxIDAuMDAwMDUsLTAuMDE3MTF6Ii8+PHBhdGggZD0iTTE0Ny42ODExOCwxMzUuOTc2NGMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY2IC0yLjcxNTI2LC0yLjcxNTI1YzAsLTAuMDAyMTYgMCwtMC4wMDQzMiAwLjAwMDAxLC0wLjAwNjQ3di0xMy41Njk4MmgtMC4wMDAwMXYtOC4xNDU3N2MwLC0xLjQ5OTU5IDEuMjE1NjcsLTIuNzE1MjUgMi43MTUyNiwtMi43MTUyNWMwLjAwMjE1LDAgMC4wMDQzMiwwIDAuMDA2NDcsMC4wMDAwMWgxMy41Njk4MnYtMC4wMDAwMWg4LjE0NTc4YzEuNDk5NTksMCAyLjcxNTI1LDEuMjE1NjcgMi43MTUyNSwyLjcxNTI1YzAsMC4wMDIxNiAwLDAuMDA0MzIgLTAuMDAwMDEsMC4wMDY0N3YxMy41Njk4MmgwLjAwMDAxdjguMTQ1NzhjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjUgLTIuNzE1MjUsMi43MTUyNWMtMC4wMDIxNSwwIC0wLjAwNDMyLDAgLTAuMDA2NDcsLTAuMDAwMDFoLTEzLjU2OTgydjAuMDAwMDF6TTE1My4xMDI1OSwxMTQuMjU0MzVjLTEuNDk1MzgsMC4wMDQ5NCAtMi43MDYxLDEuMjE4NzEgLTIuNzA2MSwyLjcxNTI0aC0wLjAwMDA0djEwLjg3MDE1YzAuMDA0OTMsMS40OTUzOCAxLjIxODcxLDIuNzA2MSAyLjcxNTI1LDIuNzA2MXYwLjAwMDA0aDEwLjg3MDE1YzEuNDk1MzgsLTAuMDA0OTQgMi43MDYxMSwtMS4yMTg3IDIuNzA2MTEsLTIuNzE1MjRoMC4wMDAwM3YtMTAuODcwMTZjLTAuMDA0OTMsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI1LC0yLjcwNjF2LTAuMDAwMDR6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIvPjxwYXRoIGQ9Ik0xOTEuMTI1MjgsMTA4LjgyMzgyYzAuMDA1MjgsMCAwLjAxMDU3LDAuMDAwMDIgMC4wMTU4NCwwLjAwMDA1aDIuNjk5NDJ2LTAuMDAwMDNoOC4xNDU3OGMxLjQ5OTU5LDAgMi43MTUyNSwxLjIxNTY2IDIuNzE1MjUsMi43MTUyNWMwLDAuMDAyMTYgLTAuMDAwMDEsMC4wMDQzMSAtMC4wMDAwMSwwLjAwNjQ3djIxLjcwOTEzYzAuMDAwMDEsMC4wMDIxNiAwLjAwMDAxLDAuMDA0MzIgMC4wMDAwMSwwLjAwNjQ3YzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI1IC0yLjcxNTI1LDIuNzE1MjVjLTEuNDk5NTksMCAtMi43MTUyNiwtMS4yMTU2NiAtMi43MTUyNiwtMi43MTUyNWMwLC0wLjAwMDAxIDAsLTAuMDAwMDIgMCwtMC4wMDAwM2gtMC4wMDAwMXYtMTYuMzAwNjNjLTAuMDA0OTMsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI0LC0yLjcwNjF2LTAuMDAwMDFoLTAuMDAwMDRjLTEuNDk2NTQsMCAtMi43MTAzMSwxLjIxMDcyIC0yLjcxNTI0LDIuNzA2MTF2MTYuMjk0MThjMC4wMDAwMSwwLjAwMjE2IDAuMDAwMDEsMC4wMDQzMSAwLjAwMDAxLDAuMDA2NDdjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjYgLTIuNzE1MjUsMi43MTUyNmMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY3IC0yLjcxNTI2LC0yLjcxNTI2YzAsLTAuMDAwMDEgMCwtMC4wMDAwMSAwLC0wLjAwMDAyaC0wLjAwMDAxdi0xNi4zMDA2M2MtMC4wMDQ5MywtMS40OTUzOCAtMS4yMTg3LC0yLjcwNjExIC0yLjcxNTI0LC0yLjcwNjExaC0wLjAwMDAxdjAuMDAwMDFjLTEuNDk2NTQsMCAtMi43MTAzMSwxLjIxMDcxIC0yLjcxNTI0LDIuNzA2MXYxNi4zMDA2NGgtMC4wMDAwMWMwLDAuMDAwMDEgMCwwLjAwMDAyIDAsMC4wMDAwM2MwLDEuNDk5NTkgLTEuMjE1NjcsMi43MTUyNSAtMi43MTUyNiwyLjcxNTI1Yy0xLjQ5OTU5LDAgLTIuNzE1MjUsLTEuMjE1NjYgLTIuNzE1MjUsLTIuNzE1MjVjMCwtMC4wMDIxNiAwLC0wLjAwNDMyIDAuMDAwMDEsLTAuMDA2NDd2LTE5LjAwMDNoLTAuMDAwMDFjMCwwIDAsLTAuMDAwMDIgMCwtMC4wMDAwNXYtNS40MzA1MXoiLz48cGF0aCBkPSJNMjM3LjI4NDYzLDEyMi4zODI5NWMwLjAwMDA0LDAuMDA1NyAwLjAwMDA2LDAuMDExNDEgMC4wMDAwNiwwLjAxNzEyYzAsMC4yNTM3OCAtMC4wMzQ4MiwwLjQ5OTQzIC0wLjA5OTkzLDAuNzMyNDJjLTAuMDg2NDIsMC4zMDkyNCAtMC4yMjYyMSwwLjU5NjE5IC0wLjQwODgyLDAuODUwMzJjLTAuNDkyODIsMC42ODU4OCAtMS4yOTc1MiwxLjEzMjU5IC0yLjIwNjU1LDEuMTMyNTljLTAuMDAyMTUsMCAtMC4wMDQzMSwtMC4wMDAwMSAtMC4wMDY0NywtMC4wMDAwMWgtMTYuMzA0NDFjLTEuNDkwNjYsMC4wMTA0MyAtMi42OTU4NCwxLjIyMjA3IC0yLjY5NTg0LDIuNzE1MTloLTAuMDAwMDV2MC4wMDAwM2gwLjAwMDA1YzAsMS40OTY1NCAxLjIxMDcyLDIuNzEwMzEgMi43MDYxMSwyLjcxNTI0aDE2LjMwMDYzdjAuMDAwMDFjMC4wMDAwMSwwIDAuMDAwMDIsMCAwLjAwMDAzLDBjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NyAyLjcxNTI2LDIuNzE1MjZjMCwxLjQ5OTU5IC0xLjIxNTY3LDIuNzE1MjUgLTIuNzE1MjYsMi43MTUyNWMtMC4wMDIxNSwwIC0wLjAwNDMyLDAuMDAwMDEgLTAuMDA2NDcsMGgtMjEuNzA5MTNjLTAuMDAyMTUsMCAtMC4wMDQzLDAgLTAuMDA2NDYsMGMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY1IC0yLjcxNTI2LC0yLjcxNTI1di0xMC44NTE4NGMtMC4wMDAwMSwtMC4wMDMwNSAtMC4wMDAwMSwtMC4wMDYwOSAtMC4wMDAwMSwtMC4wMDkxNHYtMTAuODYxMDVjMCwtMS40OTk1OSAxLjIxNTY2LC0yLjcxNTI1IDIuNzE1MjUsLTIuNzE1MjVjMC4wMDIxNSwwIDAuMDA0MzEsMC4wMDAwMSAwLjAwNjQ2LDAuMDAwMDFoMjEuNzA5MTNjMC4wMDIxNSwtMC4wMDAwMSAwLjAwNDMxLC0wLjAwMDAxIDAuMDA2NDcsLTAuMDAwMDFjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NiAyLjcxNTI2LDIuNzE1MjVjMCwwLjAwNDgyIC0wLjAwMDAxLDAuMDA5NjUgLTAuMDAwMDQsMC4wMTQ0N3pNMjI5LjE1ODIzLDExOS42ODQ4MWMxLjQ5MDY2LC0wLjAxMDQzIDIuNjk1ODQsLTEuMjIyMDggMi42OTU4NCwtMi43MTUxOWgwLjAwMDA1di0wLjAwMDAyaC0wLjAwMDA1YzAsLTEuNDk2NTQgLTEuMjEwNzIsLTIuNzEwMzEgLTIuNzA2MTEsLTIuNzE1MjRoLTEwLjg4M2MtMS40OTM2NCwwLjAwNjk3IC0yLjcwMjMxLDEuMjE5OTUgLTIuNzAyMzEsMi43MTUyM2gtMC4wMDAwNXYwLjAwMDAyaDAuMDAwMDVjMCwxLjQ5Mzg5IDEuMjA2NDIsMi43MDYgMi42OTgxNCwyLjcxNTJ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIvPjxwYXRoIGQ9Ik0yNDguMTQ1OCw4OS44MTY4OWMwLC0xLjQ5OTU5IDEuMjE1NjYsLTIuNzE1MjYgMi43MTUyNSwtMi43MTUyNnYwYzEuNDk5NTksMCAyLjcxNTI2LDEuMjE1NjcgMi43MTUyNiwyLjcxNTI2YzAsMC4wMDAwMSAwLDAuMDAwMDEgMCwwLjAwMDAydjB2MTYuMzAwNjNjMC4wMDQ5MywxLjQ5NTM4IDEuMjE4NzEsMi43MDYxMSAyLjcxNTI1LDIuNzA2MTF2MC4wMDAwNWgwLjAwOTEyYzEuNDk1MzgsMC4wMDQ5NCAyLjcwNjEsMS4yMTg3IDIuNzA2MSwyLjcxNTI0aDAuMDAwMDV2MC4wMDAwM2gtMC4wMDAwNWMwLDAuMDAwMDIgMCwwLjAwMDA0IDAsMC4wMDAwNmgwLjAwMDA1djAuMDAwMDNoLTAuMDAwMDVjMCwxLjQ5NjU0IC0xLjIxMDcxLDIuNzEwMyAtMi43MDYxLDIuNzE1MjRoLTAuMDA5MTJ2MC4wMDAwNWMtMS40OTM0OCwwIC0yLjcwNTM1LDEuMjA1NzkgLTIuNzE1MiwyLjY5Njk3djEwLjg4ODRjMC4wMDQ5MywxLjQ5NTM4IDEuMjE4NzEsMi43MDYxIDIuNzE1MjUsMi43MDYxdjAuMDAwMDVoMC4wMDkxMmMxLjQ5NTM4LDAuMDA0OTQgMi43MDYxLDEuMjE4NzEgMi43MDYxLDIuNzE1MjRoMC4wMDAwNXYwLjAwMDAyaC0wLjAwMDA1YzAsMS40OTY1NCAtMS4yMTA3MSwyLjcxMDMxIC0yLjcwNjEsMi43MTUyNGMtMC4wMDAwMSwwIC01LjQzOTY2LDAgLTUuNDM5NjcsMGMtMC40NDk0NiwwIC0wLjg3MzQyLC0wLjEwOTIxIC0xLjI0Njc4LC0wLjMwMjUzYy0wLjg3MjM3LC0wLjQ1MTY4IC0xLjQ2ODU2LC0xLjM2MjU5IC0xLjQ2ODU2LC0yLjQxMjc2YzAsLTAuMDAwMDEgMCwtMC4wMDAwMiAwLC0wLjAwMDAzdjB2LTE2LjMwMDYzYy0wLjAwNDkzLC0xLjQ5NTM4IC0xLjIxODcsLTIuNzA2MSAtMi43MTUyNSwtMi43MDYxdi0wLjAwMDA1aC0wLjAwOTEyYy0xLjQ5NTM4LC0wLjAwNDk0IC0yLjcwNjEsLTEuMjE4NyAtMi43MDYxLC0yLjcxNTI0aC0wLjAwMDA1di0wLjAwMDAyaDAuMDAwMDVjMCwtMS4wMTAxNyAwLjU1MTYzLC0xLjg5MTUgMS4zNzAxLC0yLjM1OTE4YzAuMzk0MDksLTAuMjI1MjEgMC44NTAwNSwtMC4zNTQ1IDEuMzM2MDgsLTAuMzU2MWgwLjAwOTEydi0wLjAwMDA1YzEuNDk2NTQsMCAyLjcxMDMxLC0xLjIxMDcyIDIuNzE1MjQsLTIuNzA2MXYtMTYuMzAwNjNjMCwtMC4wMDAwMSAwLC0wLjAwMDAxIDAsLTAuMDAwMDJ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIvPjxwYXRoIGQ9Ik0yNzguMDEzNjQsMTA4LjgyMzc2YzAuMDA1MjgsMCAwLjAxMDU3LDAuMDAwMDIgMC4wMTU4NCwwLjAwMDA1aDIuNjk5NDJ2LTAuMDAwMDNoOC4xNDU3OGMxLjQ5OTU5LDAgMi43MTUyNSwxLjIxNTY2IDIuNzE1MjUsMi43MTUyNWMwLDAuMDAyMTYgLTAuMDAwMDEsMC4wMDQzMSAtMC4wMDAwMSwwLjAwNjQ3djIxLjcwOTEzYzAuMDAwMDEsMC4wMDIxNiAwLjAwMDAxLDAuMDA0MzEgMC4wMDAwMSwwLjAwNjQ3YzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI2IC0yLjcxNTI1LDIuNzE1MjZjLTEuNDk5NTksMCAtMi43MTUyNiwtMS4yMTU2NyAtMi43MTUyNiwtMi43MTUyNmMwLC0wLjAwMDAxIDAsLTAuMDAwMDEgMCwtMC4wMDAwMmgtMC4wMDAwMXYtMTYuMzAwNjNjLTAuMDA0OTMsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI0LC0yLjcwNjF2LTAuMDAwMDJoLTEwLjg2MTAydjAuMDAwMDFoLTAuMDAwMDF2MC4wMDAwMWMtMS40OTY1NCwwIC0yLjcxMDMxLDEuMjEwNzIgLTIuNzE1MjUsMi43MDYxdjE2LjMwMDY0djBjMCwwLjAwMDAxIDAsMC4wMDAwMSAwLDAuMDAwMDJjMCwxLjQ5OTU5IC0xLjIxNTY3LDIuNzE1MjYgLTIuNzE1MjYsMi43MTUyNmMtMS40OTk1OSwwIC0yLjcxNTI1LC0xLjIxNTY3IC0yLjcxNTI1LC0yLjcxNTI2YzAsLTAuMDAyMTYgMCwtMC4wMDQzMSAwLjAwMDAxLC0wLjAwNjQ3di0xOS4wMDAzaC0wLjAwMDAxYzAsMCAwLC0wLjAwMDAyIDAsLTAuMDAwMDV2LTUuNDMwNTFoMC4wMDAwOHYtMTkuMDAwMzdjLTAuMDAwMDEsLTAuMDAyMTYgLTAuMDAwMDEsLTAuMDA0MzIgLTAuMDAwMDEsLTAuMDA2NDdjMCwtMS40OTk1OSAxLjIxNTY2LC0yLjcxNTI2IDIuNzE1MjUsLTIuNzE1MjZjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NyAyLjcxNTI2LDIuNzE1MjZjMCwwLjAwMDAxIDAsMC4wMDAwMSAwLDAuMDAwMDJoMC4wMDAwMXYxNi4zMDA2NGMwLjAwNDkzLDEuNDk1MzggMS4yMTg3LDIuNzA2MSAyLjcxNTI0LDIuNzA2MXYwLjAwMDA1aDAuMDA5MTJjMC4wMDMwNCwwLjAwMDAxIDAuMDA2MTEsMC4wMDAwMiAwLjAwOTE1LDAuMDAwMDV6Ii8+PHBhdGggZD0iTTI5OS43MzU3NSwxMzUuOTc2MzRjLTEuNDk5NTksMCAtMi43MTUyNSwtMS4yMTU2NiAtMi43MTUyNSwtMi43MTUyNWMwLC0wLjAwMjE2IDAsLTAuMDA0MzEgMCwtMC4wMDY0NnYtMjEuNzA5MTJjLTAuMDAwMDEsLTAuMDAyMTYgMCwtMC4wMDQzMiAwLC0wLjAwNjQ3YzAsLTEuNDk5NTkgMS4yMTU2NiwtMi43MTUyNiAyLjcxNTI1LC0yLjcxNTI2YzEuNDk5NTksMCAyLjcxNTI2LDEuMjE1NjcgMi43MTUyNiwyLjcxNTI2YzAsMC4wMDAwMSAwLDAuMDAwMDEgMCwwLjAwMDAydjB2MjEuNzIyMDR2MGMwLDEuNDk5NTkgLTEuMjE1NjcsMi43MTUyNSAtMi43MTUyNiwyLjcxNTI1eiIvPjxwYXRoIGQ9Ik0yOTcuMDIwNDQsOTUuMjQ3NDZjMCwtMS40OTk1OSAxLjIxNTY3LC0yLjcxNTI1IDIuNzE1MjYsLTIuNzE1MjVjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NyAyLjcxNTI2LDIuNzE1MjVjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjUgLTIuNzE1MjYsMi43MTUyNWMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY2IC0yLjcxNTI2LC0yLjcxNTI1eiIvPjxwYXRoIGQ9Ik0zMjEuNDU3OCwxMDguODIzNzZjMC4wMDUyOCwwIDAuMDEwNTcsMC4wMDAwMiAwLjAxNTg0LDAuMDAwMDVoMi42OTk0MnYtMC4wMDAwM2g4LjE0NTc4YzEuNDk5NTksMCAyLjcxNTI1LDEuMjE1NjYgMi43MTUyNSwyLjcxNTI1YzAsMC4wMDIxNiAwLDAuMDA0MzEgMCwwLjAwNjQ3djIxLjcwOTEzYzAuMDAwMDEsMC4wMDIxNiAwLDAuMDA0MzEgMCwwLjAwNjQ3YzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI2IC0yLjcxNTI1LDIuNzE1MjZjLTEuNDk5NTksMCAtMi43MTUyNiwtMS4yMTU2NyAtMi43MTUyNiwtMi43MTUyNmMwLC0wLjAwMDAxIDAsLTAuMDAwMDEgMCwtMC4wMDAwMmgtMC4wMDAwMXYtMTYuMzAwNjNjLTAuMDA0OTMsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI0LC0yLjcwNjF2LTAuMDAwMDF2LTAuMDAwMDFoLTEwLjg2MTAydjAuMDAwMDF2MGgtMC4wMDAwMXYwLjAwMDAxYy0xLjQ5NjU0LDAgLTIuNzEwMzEsMS4yMTA3MiAtMi43MTUyNCwyLjcwNjF2MTYuMzAwNjR2MGMwLDAuMDAwMDEgMCwwLjAwMDAxIDAsMC4wMDAwMmMwLDEuNDk5NTkgLTEuMjE1NjcsMi43MTUyNiAtMi43MTUyNiwyLjcxNTI2Yy0xLjQ5OTU5LDAgLTIuNzE1MjUsLTEuMjE1NjcgLTIuNzE1MjUsLTIuNzE1MjZjMCwtMC4wMDIxNiAwLC0wLjAwNDMxIDAsLTAuMDA2NDd2LTE5LjAwMDN2MGMwLDAgMCwtMC4wMDAwMiAwLC0wLjAwMDA1di01LjQzMDUxeiIvPjwvZz48ZyBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM0NzlhNDciIHN0cm9rZS13aWR0aD0iMiI+PHBhdGggZD0iTTM2MC4zOTc5LDIzNy41ODI4OWMwLjAwMDA0LDAuMDA1NyAwLjAwMDA1LDAuMDExNCAwLjAwMDA1LDAuMDE3MTFjMCwwLjI1Mzc4IC0wLjAzNDgyLDAuNDk5NDMgLTAuMDk5OTMsMC43MzI0MmMtMC4wODY0MiwwLjMwOTI0IC0wLjIyNjIxLDAuNTk2MTkgLTAuNDA4ODIsMC44NTAzMmMtMC40OTI4MiwwLjY4NTg4IC0xLjI5NzUyLDEuMTMyNTkgLTIuMjA2NTYsMS4xMzI1OWMtMC4wMDIxNiwwIC0wLjAwNDMxLC0wLjAwMDAxIC0wLjAwNjQ2LC0wLjAwMDAxaC0xNi4zMDQ0Yy0xLjQ5MDY2LDAuMDEwNDMgLTIuNjk1ODQsMS4yMjIwNyAtMi42OTU4NCwyLjcxNTE5aC0wLjAwMDA1djAuMDAwMDJoMC4wMDAwNWMwLDEuNDk2NTQgMS4yMTA3MSwyLjcxMDMxIDIuNzA2MSwyLjcxNTI0aDE2LjMwMDYzdjAuMDAwMDFjMC4wMDAwMSwwIDAuMDAwMDIsMCAwLjAwMDAyLDBjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NiAyLjcxNTI2LDIuNzE1MjZjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjUgLTIuNzE1MjYsMi43MTUyNWMtMC4wMDIxNiwwIC0wLjAwNDMxLDAgLTAuMDA2NDcsLTAuMDAwMDFoLTIxLjcwOTEyYy0wLjAwMjE2LDAgLTAuMDA0MzEsMC4wMDAwMSAtMC4wMDY0NiwwLjAwMDAxYy0xLjQ5OTU5LDAgLTIuNzE1MjUsLTEuMjE1NjYgLTIuNzE1MjUsLTIuNzE1MjV2LTEwLjg1MTgzYy0wLjAwMDAxLC0wLjAwMzA1IC0wLjAwMDAyLC0wLjAwNjA5IC0wLjAwMDAyLC0wLjAwOTE1di0xMC44NjEwNGMwLC0xLjQ5OTU5IDEuMjE1NjYsLTIuNzE1MjUgMi43MTUyNSwtMi43MTUyNWMwLjAwMjE2LDAgMC4wMDQzMSwwLjAwMDAxIDAuMDA2NDYsMC4wMDAwMWgyMS43MDkxMmMwLjAwMjE2LC0wLjAwMDAxIDAuMDA0MzEsLTAuMDAwMDEgMC4wMDY0NywtMC4wMDAwMWMxLjQ5OTU5LDAgMi43MTUyNiwxLjIxNTY2IDIuNzE1MjYsMi43MTUyNWMwLDAuMDA0ODMgLTAuMDAwMDIsMC4wMDk2NSAtMC4wMDAwNCwwLjAxNDQ3ek0zNTIuMjcxNDksMjM0Ljg4NDc1YzEuNDkwNjYsLTAuMDEwNDMgMi42OTU4NCwtMS4yMjIwNyAyLjY5NTg0LC0yLjcxNTE5aDAuMDAwMDV2LTAuMDAwMDJoLTAuMDAwMDVjMCwtMS40OTY1NCAtMS4yMTA3MSwtMi43MTAzMSAtMi43MDYxLC0yLjcxNTI0aC0xMC44ODNjLTEuNDkzNjQsMC4wMDY5NyAtMi43MDIzMiwxLjIxOTk1IC0yLjcwMjMyLDIuNzE1MjNoLTAuMDAwMDV2MC4wMDAwMmgwLjAwMDA1YzAsMS40OTM4OSAxLjIwNjQyLDIuNzA2IDIuNjk4MTQsMi43MTUyeiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iLz48cGF0aCBkPSJNMjEzLjc3Mzk4LDIyNi43Mzg5N2MwLC0xLjQ5OTU5IDEuMjE1NjYsLTIuNzE1MjUgMi43MTUyNSwtMi43MTUyNWMwLjAwMjE2LDAgMC4wMDQzMSwwLjAwMDAxIDAuMDA2NDYsMC4wMDAwMWgyMS43MDkxMmMwLjAwMjE2LC0wLjAwMDAxIDAuMDA0MzEsLTAuMDAwMDEgMC4wMDY0NywtMC4wMDAwMWMxLjQ5OTU5LDAgMi43MTUyNiwxLjIxNTY2IDIuNzE1MjYsMi43MTUyNWMwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNiAtMi43MTUyNiwyLjcxNTI2Yy0wLjAwMDAxLDAgLTAuMDAwMDIsMCAtMC4wMDAwMiwwdjAuMDAwMDFoLTE2LjMwMDYzYy0xLjQ5NTM5LDAuMDA0OTMgLTIuNzA2MSwxLjIxODcgLTIuNzA2MSwyLjcxNTI0aC0wLjAwMDA1djAuMDAwMDJoMC4wMDAwNWMwLDEuNDkzMTIgMS4yMDUxOSwyLjcwNDc2IDIuNjk1ODQsMi43MTUxOWgxNi4zMDQ0YzAuMDAyMTYsMCAwLjAwNDMxLC0wLjAwMDAxIDAuMDA2NDYsLTAuMDAwMDFjMS40OTk1OSwwIDIuNzE1MjUsMS4yMTU2NiAyLjcxNTI1LDIuNzE1MjV2MTAuODYxMDRjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjUgLTIuNzE1MjUsMi43MTUyNWMtMC4wMDIxNiwwIC0wLjAwNDMxLC0wLjAwMDAxIC0wLjAwNjQ2LC0wLjAwMDAxaC0yMS43MDkxMmMtMC4wMDIxNiwwLjAwMDAxIC0wLjAwNDMxLDAuMDAwMDEgLTAuMDA2NDcsMC4wMDAwMWMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY2IC0yLjcxNTI2LC0yLjcxNTI1YzAsLTEuNDk5NTkgMS4yMTU2NiwtMi43MTUyNiAyLjcxNTI2LC0yLjcxNTI2YzAuMDAwMDEsMCAwLjAwMDAyLDAgMC4wMDAwMiwwdi0wLjAwMDAxaDE2LjMwMDYzYzEuNDk1MzksLTAuMDA0OTMgMi43MDYxLC0xLjIxODcgMi43MDYxLC0yLjcxNTI0aDAuMDAwMDV2LTAuMDAwMDJoLTAuMDAwMDVjMCwtMS40OTMxMiAtMS4yMDUxOSwtMi43MDQ3NiAtMi42OTU4NCwtMi43MTUxOWgtMTYuMzA0NGMtMC4wMDIxNiwwIC0wLjAwNDMxLDAuMDAwMDEgLTAuMDA2NDYsMC4wMDAwMWMtMC45MDkwNCwwIC0xLjcxMzc0LC0wLjQ0NjcxIC0yLjIwNjU2LC0xLjEzMjU5Yy0wLjMyMDIsLTAuNDQ1NiAtMC41MDg3NSwtMC45OTIxNCAtMC41MDg3NSwtMS41ODI3M2MwLC0wLjAwNTcxIDAuMDAwMDIsLTAuMDExNDEgMC4wMDAwNSwtMC4wMTcxMXoiLz48cGF0aCBkPSJNMjcwLjc5NDQsMjI0LjAyMzcxYzAuMDA1MjgsMCAwLjAxMDU3LDAuMDAwMDIgMC4wMTU4NCwwLjAwMDA1aDIuNjk5NDJ2LTAuMDAwMDRoOC4xNDU3N2MxLjQ5OTU5LDAgMi43MTUyNSwxLjIxNTY2IDIuNzE1MjUsMi43MTUyNWMwLDAuMDAyMTYgLTAuMDAwMDEsMC4wMDQzMSAtMC4wMDAwMSwwLjAwNjQ2djIxLjcwOTEyYzAuMDAwMDEsMC4wMDIxNiAwLjAwMDAxLDAuMDA0MzEgMC4wMDAwMSwwLjAwNjQ3YzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI2IC0yLjcxNTI1LDIuNzE1MjZjLTEuNDk5NTksMCAtMi43MTUyNiwtMS4yMTU2NiAtMi43MTUyNiwtMi43MTUyNmMwLC0wLjAwMDAxIDAsLTAuMDAwMDIgMCwtMC4wMDAwMmgtMC4wMDAwMXYtMTYuMzAwNjNjLTAuMDA0OTMsLTEuNDk1MzkgLTEuMjE4NywtMi43MDYxIC0yLjcxNTI0LC0yLjcwNjF2LTAuMDAwMDFoLTAuMDAwMDRjLTEuNDk2NTQsMCAtMi43MTAzMSwxLjIxMDcxIC0yLjcxNTI0LDIuNzA2MXYxNi4yOTQxOGMwLjAwMDAxLDAuMDAyMTYgMC4wMDAwMSwwLjAwNDMxIDAuMDAwMDEsMC4wMDY0N2MwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNiAtMi43MTUyNSwyLjcxNTI2Yy0xLjQ5OTU5LDAgLTIuNzE1MjYsLTEuMjE1NjYgLTIuNzE1MjYsLTIuNzE1MjZjMCwtMC4wMDAwMSAwLC0wLjAwMDAyIDAsLTAuMDAwMDJoLTAuMDAwMDF2LTE2LjMwMDYzYy0wLjAwNDkzLC0xLjQ5NTM5IC0xLjIxODcsLTIuNzA2MSAtMi43MTUyNCwtMi43MDYxaC0wLjAwMDAxdjAuMDAwMDFjLTEuNDk2NTQsMCAtMi43MTAzMSwxLjIxMDcxIC0yLjcxNTI0LDIuNzA2MXYxNi4zMDA2M2gtMC4wMDAwMWMwLDAuMDAwMDEgMCwwLjAwMDAyIDAsMC4wMDAwMmMwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNiAtMi43MTUyNiwyLjcxNTI2Yy0xLjQ5OTU5LDAgLTIuNzE1MjUsLTEuMjE1NjYgLTIuNzE1MjUsLTIuNzE1MjZjMCwtMC4wMDIxNiAwLC0wLjAwNDMxIDAuMDAwMDEsLTAuMDA2NDd2LTE5LjAwMDI5aC0wLjAwMDAxYzAsMCAwLC0wLjAwMDAyIDAsLTAuMDAwMDV2LTUuNDMwNTF6Ii8+PHBhdGggZD0iTTI0OS4wNzIzNSwyNTEuMTc2MjhjLTEuNDk5NTksMCAtMi43MTUyNSwtMS4yMTU2NiAtMi43MTUyNSwtMi43MTUyNWMwLC0wLjAwMjE2IDAuMDAwMDEsLTAuMDA0MzEgMC4wMDAwMSwtMC4wMDY0NnYtMjEuNzA5MTJjLTAuMDAwMDEsLTAuMDAyMTYgLTAuMDAwMDEsLTAuMDA0MzEgLTAuMDAwMDEsLTAuMDA2NDdjMCwtMS40OTk1OSAxLjIxNTY2LC0yLjcxNTI2IDIuNzE1MjUsLTIuNzE1MjZjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NiAyLjcxNTI2LDIuNzE1MjZjMCwwLjAwMDAxIDAsMC4wMDAwMiAwLDAuMDAwMDJoMC4wMDAwMXYyMS43MjIwM2gtMC4wMDAwMWMwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNSAtMi43MTUyNiwyLjcxNTI1eiIvPjxwYXRoIGQ9Ik0yNDYuMzU3MDUsMjEwLjQ0NzRjMCwtMS40OTk1OSAxLjIxNTY2LC0yLjcxNTI1IDIuNzE1MjUsLTIuNzE1MjVjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NiAyLjcxNTI2LDIuNzE1MjVjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjYgLTIuNzE1MjYsMi43MTUyNmMtMS40OTk1OSwwIC0yLjcxNTI1LC0xLjIxNTY2IC0yLjcxNTI1LC0yLjcxNTI2eiIvPjxwYXRoIGQ9Ik0yODkuODAxMTksMjQ4LjQ2MTAyYzAsLTAuMDAyMTYgLTAuMDAwMDEsLTAuMDA0MzEgMCwtMC4wMDY0N3YtMTMuNTY5ODJ2MHYtOC4xNDU3N2MwLC0xLjQ5OTU5IDEuMjE1NjYsLTIuNzE1MjUgMi43MTUyNSwtMi43MTUyNWMwLjAwMjE2LDAgMC4wMDQzMSwwIDAuMDA2NDcsMC4wMDAwMWgxMy41Njk4MnYtMC4wMDAwMWg4LjE0NTc3YzEuNDk5NTksMCAyLjcxNTI1LDEuMjE1NjYgMi43MTUyNSwyLjcxNTI1YzAsMC4wMDIxNiAwLDAuMDA0MzEgLTAuMDAwMDEsMC4wMDY0N3YxMy41Njk4MmgwLjAwMDAxdjguMTQ1NzdjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjUgLTIuNzE1MjUsMi43MTUyNWMtMC4wMDIxNiwwIC0wLjAwNDMxLDAgLTAuMDA2NDcsLTAuMDAwMDFoLTEzLjU2OTgydjAuMDAwMDFoLTIuNjk2OTRjLTAuMDAzMDUsMC4wMDAwMiAtMC4wMDYwOSwwLjAwMDA0IC0wLjAwOTE0LDAuMDAwMDVoLTAuMDA5MTJ2MC4wMDAwNWMtMS40OTY1NCwwIC0yLjcxMDMxLDEuMjEwNzEgLTIuNzE1MjQsMi43MDYxdjE2LjMwMDYzaC0wLjAwMDAxYzAsMC4wMDAwMSAwLDAuMDAwMDIgMCwwLjAwMDAyYzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI2IC0yLjcxNTI2LDIuNzE1MjZjLTEuNDk5NTksMCAtMi43MTUyNSwtMS4yMTU2NiAtMi43MTUyNSwtMi43MTUyNmMwLC0wLjAwMjE2IDAuMDAwMDEsLTAuMDA0MzEgMC4wMDAwMiwtMC4wMDY0N3YtMjEuNjk1NjljLTAuMDAwMDUsLTAuMDA2NjQgLTAuMDAwMDcsLTAuMDEzMjggLTAuMDAwMDcsLTAuMDE5OTN6TTI5Ny45Mzc4MywyMjkuNDU0MjNjLTEuNDk1MzksMC4wMDQ5MyAtMi43MDYxLDEuMjE4NyAtMi43MDYxLDIuNzE1MjRoLTAuMDAwMDR2MTAuODcwMTVjMC4wMDQ5MywxLjQ5NTM5IDEuMjE4NywyLjcwNjEgMi43MTUyNCwyLjcwNjF2MC4wMDAwNGgxMC44NzAxNWMxLjQ5NTM5LC0wLjAwNDkzIDIuNzA2MSwtMS4yMTg3IDIuNzA2MSwtMi43MTUyNGgwLjAwMDA0di0xMC44NzAxNWMtMC4wMDQ5MywtMS40OTUzOSAtMS4yMTg3LC0yLjcwNjEgLTIuNzE1MjQsLTIuNzA2MXYtMC4wMDAwNHoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9Ii8+PHBhdGggZD0iTTMyNS4wOTk2LDI1MS4xNzYyOWMtMS40OTk1OSwwIC0yLjcxNTI1LC0xLjIxNTY2IC0yLjcxNTI1LC0yLjcxNTI1YzAsLTAuMDAyMTYgMC4wMDAwMSwtMC4wMDQzMSAwLjAwMDAxLC0wLjAwNjQ2di0xOS4wMDAzOWgtMC4wMDAwN3YtNS40MzA1MWgwLjAwMDA3di0xOS4wMDAzM2MtMC4wMDAwMSwtMC4wMDIxNiAtMC4wMDAwMSwtMC4wMDQzMSAtMC4wMDAwMSwtMC4wMDY0N2MwLC0xLjQ5OTU5IDEuMjE1NjYsLTIuNzE1MjYgMi43MTUyNSwtMi43MTUyNmMxLjQ5OTU5LDAgMi43MTUyNiwxLjIxNTY2IDIuNzE1MjYsMi43MTUyNmMwLDAuMDAwMDEgMCwwLjAwMDAyIDAsMC4wMDAwMmgwLjAwMDAxdjIxLjcyMjAzaC0wLjAwMDAxYzAsMC4wMDAwMiAwLDAuMDAwMDMgMCwwLjAwMDA1YzAsMC4wMDAwMSAwLDAuMDAwMDIgMCwwLjAwMDAyaDAuMDAwMDF2MjEuNzIyMDNoLTAuMDAwMDFjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjUgLTIuNzE1MjYsMi43MTUyNXoiLz48L2c+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MzAwOjE4Ny41LS0+";

const simpleOperatorsicon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCwwLDgwLDgwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjI3NC4wOTQ1MyIgeTE9IjIxNC4wOTQ1NSIgeDI9IjIwNS45MDU1IiB5Mj0iMTQ1LjkwNTUyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzhiYmY4YiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzhiYmY4YiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMC4wMDAwMSwtMTQwLjAwMDAzKSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMjIwLjE2MjYxLDIyMC4wMDAwM2MtMTEuMTM1NSwwIC0yMC4xNjI2LC05LjAyNzEgLTIwLjE2MjYsLTIwLjE2MjZ2LTM5LjY3NDhjMCwtMTEuMTM1NSA5LjAyNzEsLTIwLjE2MjYgMjAuMTYyNiwtMjAuMTYyNmgzOS42NzQ4YzExLjEzNTUsMCAyMC4xNjI2LDkuMDI3MSAyMC4xNjI2LDIwLjE2MjZ2MzkuNjc0OGMwLDExLjEzNTUgLTkuMDI3MSwyMC4xNjI2IC0yMC4xNjI2LDIwLjE2MjZ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0idXJsKCNjb2xvci0xKSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjIyLjY0MjI5LDIxNS4wMDAwNGMtOS43NDM1NiwwIC0xNy42NDIyNywtNy44OTg3MSAtMTcuNjQyMjcsLTE3LjY0MjI3di0zNC43MTU0NWMwLC05Ljc0MzU2IDcuODk4NzEsLTE3LjY0MjI4IDE3LjY0MjI3LC0xNy42NDIyOGgzNC43MTU0NWM5Ljc0MzU2LDAgMTcuNjQyMjgsNy44OTg3MiAxNy42NDIyOCwxNy42NDIyOHYzNC43MTU0NWMwLDkuNzQzNTYgLTcuODk4NzIsMTcuNjQyMjcgLTE3LjY0MjI4LDE3LjY0MjI3eiIgZmlsbD0iIzU5YzA1OSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMjI1LjAwMDAyLDE4Ny41MDAwMWMtNC4xNDIxNCwwIC03LjUsLTEuMTE5MjkgLTcuNSwtMi40OTk5OXYtOS45OTk5OWMwLC0xLjM4MDcyIDMuMzU3ODYsLTIuNDk5OTkgNy41LC0yLjQ5OTk5aDcuNXYtNy41YzAsLTQuMTQyMTQgMS4xMTkyOCwtNy41IDIuNDk5OTksLTcuNWg5Ljk5OTk5YzEuMzgwNzIsMCAyLjQ5OTk5LDMuMzU3ODYgMi40OTk5OSw3LjV2Ny41aDcuNTAwMDJjNC4xNDIxNSwwIDcuNSwxLjExOTI4IDcuNSwyLjQ5OTk5djkuOTk5OTljMCwxLjM4MDcyIC0zLjM1Nzg1LDIuNDk5OTkgLTcuNSwyLjQ5OTk5aC03LjUwMDAydjcuNTAwMDFjMCw0LjE0MjE0IC0xLjExOTI4LDcuNSAtMi40OTk5OSw3LjVoLTkuOTk5OTljLTEuMzgwNzIsMCAtMi40OTk5OSwtMy4zNTc4NiAtMi40OTk5OSwtNy41di03LjUwMDAxeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMzg5NDM4IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjozOS45OTk5ODUwMDAwMDAwNDozOS45OTk5NjUwMDAwMDAwOS0tPg==";

const simpleOperatorsextensionId = "simpleOperators";

const EXTCONFIGCOMMENTID = '_ExtensionConfig_';

class simpleOperators{
    static extCount = 0;
    constructor(runtime) {
        this.runtime = runtime;
        simpleOperators.extCount += 1;
        this.id = simpleOperators.extCount;
        this.hideExtraBlocks = true;
        if (!this.parseExtConfig()) {
            runtime.on('PROJECTLOADED', () => {
              this.parseExtConfig();
            });
        }
        this._formatMessage = runtime.getFormatMessage({
            "zh-cn": {
                'Operators':'运算',
                'simpleOperatorsdocs':'文档',
                'simpleOperatorstip':'⚠仅支持编译模式',
                'simpleOperatorsshowBlock': '显示不常用积木',
                'simpleOperatorshideBlock': '隐藏不常用积木',
                'simpleOperatorsshowBlock?':'为了避免杂乱，少量积木被隐藏。\n是否要显示它们？',

                'true':'是',
                'false':'否',
                'asoriginal':'作为原型',
                'asJSON':'作为JSON',
                'asboolean':'作为布尔值',
                'toboolean':'转为布尔值',
                'asnumber':'作为数字',
                'tonumber':'转为数字',
                'asstring':'作为字符串',
                'and':'与',
                'or':'或',
                'is':'成立',
                'not':'不成立',
                'roughly':'大致上',
                'strictly':'严格上',
                'defined':'有值',
                
                'essence':'本质',
                'content':'内容',
                'type':'类型',
                'contentandtype':'内容和类型',
                'essenceandcase':'本质和大小写',
                'contentandcase':'内容和大小写',
                'contentandtypeandcase':'内容和类型和大小写',
                

                'original':'原型',
                'confuse':'混淆',
                'distinguish':'区分',
                'array':'数组',
                'object':'对象',
                'value':'值',

                'lengthof':'的长度',
                'sumof':'的和',
                'productof':'的积',
                'averageof':'的平均数',
                'max':'最大值',
                'min':'最小值',
                'contains':'包含',
                'onlycontains':'只含',
                'insert':'插入',
                'set':'设为',
                'plus':'增加',
                'thefirst':'第一个',
                'thelast':'最后一个',
                'all':'所有',
                'ascending':'正序',
                'descending':'倒序',


                'boolean':'布尔值',
                'number':'数字',
                'arrayorobject':'数组或对象',
                'string':'字符串',
                'undefined':'空值',

                'hello':'你好',
                'yes':'是',
                'no':'否',

                'bmenuToBoolean':'[a][b]时[c]',
                'rmenuif':'若[a][b]则[c]否则[d]',
                'bmenuand':'[a][b][c][d]时[e]',
                'bmenuundefined':'[a][b]是[c]',
                'bmenuequal':'[a][b][c]，因为它们的[d]',
                'rmenurad':'弧度制[a][b][c]',
                'rmenutoonehundredeighty':'[a][b]在[c]角度中',
                'rmenutypeof':'[a]作为[b]类型，[c]数组和对象',
                'bmenutypeof':'[a]作为[b]类型为[c]',
                'rmenuArraylength':'[a]作为[b][c]',
                'bmenuArrayhave':'[a]作为[b][c][d][e]，因为[f]',
                'rmenuArrayremove':'[a]作为[b]删除[c][d]，因为[e]，返回[f]',
                'rmenuArrayremoveitem':'[a]作为[b]删除第[c]项，返回[d]',
                'rmenuArrayitem':'[a]作为[b]第[c]项，返回[d]',
                'rmenuArrayinsert':'[a]作为[b]第[c]项[d][e][f],返回[g]',
                'rmenuArrayindex':'[a]作为[b][c][d][e]的编号，因为[f]',
                'rmenuArraycount':'[a]作为[b]中[c][d]的数量，因为[e]',
                'rmenuArraysort':'[a]作为[b][c]排序，返回[d]',

                'Types':'类型',
                'rJSONtypeof':'JSON[a]类型',
                'bJSONtypeof':'JSON[a]类型为[b]',

                'StringsandNumbers':'字符串和数字',
                'rif': '若[a]则[b]否则[c]',
                'band': '[a]与[b]',
                'bor': '[a]或[b]',
                'bnot': '[a]不成立',
                'rremove':'[a]去除[b]',
                'rinterchange':'[a]字符[b]互换[c]',
                'rdefault':'[a]空值则[b]',
                'bdefined':'[a]有值',
                'bundefined':'[a]空值',
                'bnotstrictlyequal':'[a]不全等[b]',
                'bnotcontain':'[a]不含[b]',
                'rnearestmultiple':'[a]最近[b]倍数',
                'rmod':'[a]/[b]余数',
                'rround':'[a]四舍五入[b]位',
                'rrintfromto':'[a]四舍五入，从[b]位至[c]位',
                'rrinttotimes':'[a]四舍五入，从[b]位往前[c]次',
                'rrinttimesto':'[a]四舍五入，往前[b]次至[c]位',
                'rPI':'π保留[a]位',
                'rradsin':'弧度制sin[a]',
                'rradcos':'弧度制cos[a]',
                'rradtan':'弧度制tan[a]',
                'rradasin':'弧度制asin[a]',
                'rradacos':'弧度制acos[a]',
                'rradatan':'弧度制atan[a]',
                'rtoonehundredeighty':'[a]在-180~180角度中',
                'rtothreehundredsixty':'[a]在0~360角度中',
                'raddto':'[a]增加[b]至[c]',

                'ArrayandObject':'数组与对象',

                'rArrayunshiftnumber':'[a]加入数[b]到开头',
                'rArraypushnumber':'[a]加入数[b]到末尾',
                'rArrayinsertnumber':'[a]插入数[b]到[c]项',
                'rArrayinsertnumberindextoindex':'[a]插入数[b]到[c]至[d]项',
                'rArrayreplacenumber':'[a]第[b]项设为数[c]',
                'rArrayreplaceindexesnumber':'[a]第[b]项设为数[c]',
                'rArrayreplaceindextoindexnumber':'[a]第[b]到[c]项设为数[d]',

                'bArraystrictlyequal':'[a]全等[b]',
                'rArraysum':'[a]之和',
                'rArrayproduct':'[a]之积',
                'rArrayaverage':'[a]平均数',
                'rArraymax':'[a]最大值',
                'rArraymin':'[a]最小值',
                'bArrayhavebignumber':'[a]包含数>[b]',
                'bArrayhavenotsmallnumber':'[a]包含数≥[b]',
                'bArrayhavesmallnumber':'[a]包含数<[b]',
                'bArrayhavenotbignumber':'[a]包含数≤[b]',
                'bArrayhavenumber':'[a]包含数[b]',
                'bArrayhavestr':'[a]包含"[b]"',
                'bArrayhave':'[a]包含[b]',
                'bArrayhaveJSON':'[a]包含JSON[b]',
                'bArraybebignumber':'[a]只含数>[b]',
                'bArraybenotsmallnumber':'[a]只含数≥[b]',
                'bArraybesmallnumber':'[a]只含数<[b]',
                'bArraybenotbignumber':'[a]只含数≤[b]',
                'bArraybenumber':'[a]只含数[b]',
                'bArraybestr':'[a]只含"[b]"',
                'bArraybe':'[a]只含[b]',
                'bArraybeJSON':'[a]只含JSON[b]',
                'rArrayremovebignumber':'[a]删除数>[b]',
                'rArrayremovenotsmallnumber':'[a]删除数≥[b]',
                'rArrayremovesmallnumber':'[a]删除数<[b]',
                'rArrayremovenotbignumber':'[a]删除数≤[b]',
                'rArrayremovenumber':'[a]删除所有数[b]',
                'rArrayremovestr':'[a]删除所有"[b]"',
                'rArrayremove':'[a]删除所有[b]',
                'rArrayremoveJSON':'[a]删除所有JSON[b]',
                'rArrayremoveshift':'[a]删除首项',
                'rArrayremovepop':'[a]删除末项',
                'rArrayremoveitem':'[a]删除第[b]项',
                'rArrayremoveitems':'[a]删除第[b]项',
                'rArrayremoveitemtoitem':'[a]删除第[b]至[c]项',
                'rArrayreserveitem':'[a]保留第[b]项',
                'rArrayshift':'[a]首项',
                'rArraypop':'[a]末项',
                'rArrayitem':'[a]第[b]项',
                'rArrayitems':'[a]第[b]项',
                'rArrayshiftJSON':'[a]首项转JSON',
                'rArraypopJSON':'[a]末项转JSON',
                'rArrayitemJSON':'[a]第[b]项转JSON',
                'rArrayitemtoitem':'[a]第[b]至[c]项',
                'rArrayunshift':'[a]加入[b]到开头',
                'rArraypush':'[a]加入[b]到末尾',
                'rArrayinsert':'[a]插入[b]到[c]项',
                'rArrayinsertindextoindex':'[a]插入[b]到[c]至[d]项',
                'rArrayunshiftstr':'[a]加入"[b]"到开头',
                'rArraypushstr':'[a]加入"[b]"到末尾',
                'rArrayinsertstr':'[a]插入"[b]"到[c]项',
                'rArrayinsertstrindextoindex':'[a]插入"[b]"到[c]至[d]项',
                'rArrayunshiftJSON':'[a]加入JSON[b]到开头',
                'rArraypushJSON':'[a]加入JSON[b]到末尾',
                'rArrayinsertJSON':'[a]插入JSON[b]到[c]项',
                'rArrayinsertJSONindextoindex':'[a]插入JSON[b]到[c]至[d]项',
                'rArraymove':'[a]第[b]项移到第[c]项',
                'rArrayinterchange':'[a]第[b]项与第[c]项互换',
                'rArrayreplace':'[a]第[b]项设为[c]',
                'rArrayreplaceindexes':'[a]第[b]项设为[c]',
                'rArrayreplaceindextoindex':'[a]第[b]到[c]项设为[d]',
                'rArrayreplacestr':'[a]第[b]项设为"[c]"',
                'rArrayreplaceindexesstr':'[a]第[b]项设为"[c]"',
                'rArrayreplaceindextoindexstr':'[a]第[b]到[c]项设为"[d]"',
                'rArrayreplaceJSON':'[a]第[b]项设为JSON[c]',
                'rArrayreplaceindexesJSON':'[a]第[b]项设为JSON[c]',
                'rArrayreplaceindextoindexJSON':'[a]第[b]到[c]项设为JSON[d]',
                'rArrayplusindex':'[a]第[b]项增加[c]',
                'rArrayplusindextoindex':'[a]第[b]到[c]项增加[d]',
                'rArrayplus':'[a]各项增加[b]',
                'rArrayindex':'[a]第一[b]编号',
                'rArrayindexnumber':'[a]第一数[b]编号',
                'rArrayindexstr':'[a]第一"[b]"编号',
                'rArrayindexJSON':'[a]第一JSON[b]编号',
                'rArraylastindex':'[a]最后一[b]编号',
                'rArraylastindexnumber':'[a]最后一数[b]编号',
                'rArraylastindexstr':'[a]最后一"[b]"编号',
                'rArraylastindexJSON':'[a]最后一JSON[b]编号',
                'rArrayallindex':'[a]所有[b]编号',
                'rArrayallindexnumber':'[a]所有数[b]编号',
                'rArrayallindexstr':'[a]所有"[b]"编号',
                'rArrayallindexJSON':'[a]所有JSON[b]编号',
                'rArrayfindIndexbignumber':'[a]第一数>[b]编号',
                'rArrayfindIndexnotsmallnumber':'[a]第一数≥[b]编号',
                'rArrayfindIndexsmallnumber':'[a]第一数<[b]编号',
                'rArrayfindIndexnotbignumber':'[a]第一数≤[b]编号',
                'rArraycountbignumber':'[a]数>[b]数量',
                'rArraycountnotsmallnumber':'[a]数≥[b]数量',
                'rArraycountsmallnumber':'[a]数<[b]数量',
                'rArraycountnotbignumber':'[a]数≤[b]数量',
                'rArraycountnumber':'[a]数[b]数量',
                'rArraycountstr':'[a]"[b]"数量',
                'rArraycount':'[a][b]数量',
                'rArraycountJSON':'[a]JSON[b]数量',
                'rArraysortnaturalOrder':'[a]顺序排序',
                'rArraysortreverseOrder':'[a]倒序排序',
                'rArrayreverse':'[a]反转',
                'bArrayclear':'[a]无元素',
                'rArraylength':'[a]元素量',
                'bisArray':'[a]是数组',

                'rObjectkeynumber':'[a]第一值=[b]键',
                'rObjectlastkeynumber':'[a]最后一值=[b]键',
                'rObjectallkeynumber':'[a]所有值=[b]键',

                'rObjectvalue':'[a]键[b]的值',
                'rObjectvalueJSON':'[a]键[b]的值转JSON',
                'rObjectkey':'[a]第一值[b]键',
                'rObjectlastkey':'[a]最后一值[b]键',
                'rObjectallkey':'[a]所有值[b]键',
                'rObjectkeystr':'[a]第一值"[b]"键',
                'rObjectlastkeystr':'[a]最后一值"[b]"键',
                'rObjectallkeystr':'[a]所有值"[b]"键',
                'rObjectkeyJSON':'[a]第一值JSON[b]键',
                'rObjectlastkeyJSON':'[a]最后一值JSON[b]键',
                'rObjectallkeyJSON':'[a]所有值JSON[b]键',
                'rObjectputkey':'[a]键[b]值设为[c]',
                'rObjectputkeynumber':'[a]键[b]值设为数[c]',
                'rObjectputkeystr':'[a]键[b]值设为"[c]"',
                'rObjectputkeyJSON':'[a]键[b]值设为JSON[c]',
                'rObjectpluskey':'[a]键[b]值增加[c]',
                'rObjectplus':'[a]值增加[b]',
                'rObjectputAll':'[a][b]合并',
                'rObjectremove':'[a]删除键[b]',
                'rObjectremovekeys':'[a]删除键[b]',
                'rObjectkeys':'[a]所有键',
                'rObjectvalues':'[a]所有值',
                'rObjectentries':'[a]所有数据',
                'rObjectfromentries':'[a]数据转对象',
                'bObjecthasownproperty':'[a]包含键[b]',
                'bObjectclear':'[a]无键值',
                'rObjectlength':'[a]键值量',
                'bisObject':'[a]是对象',

                'More':'更多',

                'Tobecontinued':'未完待续',
                
                'r':'',
            },
            en: {
                'Operators':'Operators',
                'simpleOperatorsdocs':'documentation',
                'simpleOperatorstip':'⚠only Compile Mode',
                'simpleOperatorsshowBlock': 'show other blocks',
                'simpleOperatorshideBlock': 'hide other blocks',
                'simpleOperatorsshowBlock?':'To avoid clutter, a few blocks are hidden.\n Do you want to show them?',

                'true':'true',
                'false':'false',
                'asoriginal':'as original',
                'asJSON':'as JSON',
                'asboolean':'as boolean',
                'toboolean':'to boolean',
                'asnumber':'as number',
                'tonumber':'to number',
                'asstring':'as string',
                'and':'and',
                'or':'or',
                'is':'is',
                'not':'not',
                'roughly':'roughly',
                'strictly':'strictly',
                'defined':'defined',
                
                'essence':'essence',
                'content':'content',
                'type':'type',
                'contentandtype':'content and type',
                'essenceandcase':'essence and case',
                'contentandcase':'content and case',
                'contentandtypeandcase':'content and type and case',

                'original':'original',
                'confuse':'confuse',
                'distinguish':'distinguish',
                'array':'Array',
                'object':'Object',
                'value':'value',

                'lengthof':'length of',
                'sumof':'sum of',
                'productof':'product of',
                'averageof':'average of',
                'max':'max',
                'min':'min',
                'contains':'contains',
                'onlycontains':'only contains',
                'insert':'insert',
                'set':'set',
                'plus':'plus',
                'thefirst':'the first',
                'thelast':'the last',
                'all':'all',
                'ascending':'ascending',
                'descending':'descending',

                'boolean':'boolean',
                'number':'number',
                'arrayorobject':'Array or Object',
                'string':'string',
                'undefined':'undefined',

                'hello':'hello',
                'yes':'yes',
                'no':'no',

                'bmenuToBoolean':'[c][a][b]',
                'rmenuif':'if[a][b]then[c]else[d]',
                'bmenuand':'[e][a][b][c][d]',
                'bmenuundefined':'[a]is[b][c]',
                'bmenuequal':'[a][b][c],because of their[d]',
                'rmenurad':'[a][b][c]in rad',
                'rmenutoonehundredeighty':'[a][b]changes into[c]',
                'rmenutypeof':'type of[a]as[b],[c]Object and Array',
                'bmenutypeof':'type of[a]as[b]is[c]',
                'rArraymenu':'[c]of[a][b]',
                'rmenuArraylength':'[c][a]as[b]',
                'bmenuArrayhave':'[a]as[b][c][d][e],because of[f]',
                'rmenuArrayremove':'all[c][d]delete from[a]as[b],because of[e],return[f]',
                'rmenuArrayremoveitem':'delete item[c]of[a]as[b],return[d]',
                'rmenuArrayitem':'item[c]of[a]as[b],return[d]',
                'rmenuArrayinsert':'[d][e][f]at item[c]of[a]as[b],return[g]',
                'rmenuArrayindex':'[c][d][e]in[a]as[b],because of[f]',
                'rmenuArraycount':'count[c][d]in[a]as[b],because of[e]',
                'rmenuArraysort':'sort[a]as[b]by[c],return[d]',

                'Types':'Types',
                'rJSONtypeof':'type of[a]as JSON',
                'bJSONtypeof':'type of[a]as JSON is[b]',

                'StringsandNumbers':'Strings and Numbers',
                'rif': 'if[a]then[b]else[c]',
                'band': '[a]and[b]',
                'bor': '[a]or[b]',
                'bnot': 'not[a]',
                'rremove':'remove[b]from[a]',
                'rinterchange':'[a]interchanges[b]and[c]',
                'rdefault':'[a],default=[b]',
                'bdefined':'[a]is defined',
                'bundefined':'[a]is undefined',
                'bnotstrictlyequal':'[a]is not identically[b]',
                'bnotcontain':'[a]does not contain[b]',
                'rnearestmultiple':'multiple of[b]near[a]',
                'rmod':'[a]mod[b]',
                'rround':'round[a]to[b]decimal places',
                'rrintfromto':'round[a]from[b]to[c]decimal places',
                'rrinttotimes':'round[a]to[b]decimal places,round it[c]times',
                'rrinttimesto':'round[a][b]times to[c]decimal places',
                'rPI':'round π to[a]decimal places',
                'rradsin':'sin[a]in rad',
                'rradcos':'cos[a]in rad',
                'rradtan':'tan[a]in rad',
                'rradasin':'asin[a]in rad',
                'rradacos':'acos[a]in rad',
                'rradatan':'atan[a]in rad',
                'rtoonehundredeighty':'[a]changes into -180~180',
                'rtothreehundredsixty':'[a]changes into 0~360',
                'raddto':'[a]add[b]to[c]',

                'ArrayandObject':'Array andy Object',

                'rArrayunshiftnumber':'[a]inserts number[b]at the first one',
                'rArraypushnumber':'[a]inserts number[b]at the last one',
                'rArrayinsertnumber':'[a]inserts number[b]at[c]',
                'rArrayinsertnumberindextoindex':'[a]inserts number[b]from[c]to[d]',
                'rArrayreplacenumber':'set item[b]of[a]to number[c]',
                'rArrayreplaceindexesnumber':'set items[b]of[a]to number[c]',
                'rArrayreplaceindextoindexnumber':'set item from[b]to[c]of[a]to number[d]',

                'bArraystrictlyequal':'[a]is identically[b]',
                'rArraysum':'sum of[a]',
                'rArrayproduct':'product of[a]',
                'rArrayaverage':'average of[a]',
                'rArraymax':'max[a]',
                'rArraymin':'min[a]',
                'bArrayhavebignumber':'[a]contains number>[b]',
                'bArrayhavenotsmallnumber':'[a]contains number≥[b]',
                'bArrayhavesmallnumber':'[a]contains number<[b]',
                'bArrayhavenotbignumber':'[a]contains number≤[b]',
                'bArrayhavenumber':'[a]contains number[b]',
                'bArrayhavestr':'[a]contains "[b]"',
                'bArrayhave':'[a]contains[b]',
                'bArrayhaveJSON':'[a]contains JSON[b]',
                'bArraybebignumber':'[a]only contains number>[b]',
                'bArraybenotsmallnumber':'[a]only contains number≥[b]',
                'bArraybesmallnumber':'[a]only contains number<[b]',
                'bArraybenotbignumber':'[a]only contains number≤[b]',
                'bArraybenumber':'[a]only contains number[b]',
                'bArraybestr':'[a]only contains "[b]"',
                'bArraybe':'[a]only contains[b]',
                'bArraybeJSON':'[a]only contains SJON[b]',
                'rArrayremovebignumber':'number>[b]delete from[a]',
                'rArrayremovenotsmallnumber':'number≥[b]delete from[a]',
                'rArrayremovesmallnumber':'number<[b]delete from[a]',
                'rArrayremovenotbignumber':'number≤[b]delete from[a]',
                'rArrayremovenumber':'all number[b]delete from[a]',
                'rArrayremovestr':'all "[b]" delete from[a]',
                'rArrayremove':'all[b]delete from[a]',
                'rArrayremoveJSON':'all JSON[b]delete from[a]',
                'rArrayremoveshift':'[a]delete the first item',
                'rArrayremovepop':'[a]delete the last item',
                'rArrayremoveitem':'delete item[b]of[a]',
                'rArrayremoveitems':'delete items[b]of[a]',
                'rArrayremoveitemtoitem':'delete item from[b]to[c]of[a]',
                'rArrayreserveitem':'reserve item[b]of[a]',
                'rArrayshift':'the first item of[a]',
                'rArraypop':'the last item of[a]',
                'rArrayitem':'item[b]of[a]',
                'rArrayitems':'items[b]of[a]',
                'rArrayshiftJSON':'the first item as JSON of[a]',
                'rArraypopJSON':'the last item as JSON of[a]',
                'rArrayitemJSON':'item[b]as JSON of[a]',
                'rArrayitemtoitem':'item from[b]to[c]of[a]',
                'rArrayunshift':'[a]inserts[b]at the first one',
                'rArraypush':'[a]inserts[b]at the last one',
                'rArrayinsert':'[a]inserts[b]at[c]',
                'rArrayinsertindextoindex':'[a]inserts[b]from[c]to[d]',
                'rArrayunshiftstr':'[a]inserts "[b]" at the first one',
                'rArraypushstr':'[a]inserts "[b]" at the last one',
                'rArrayinsertstr':'[a]inserts "[b]" at[c]',
                'rArrayinsertstrindextoindex':'[a]inserts "[b]" from[c]to[d]',
                'rArrayunshiftJSON':'[a]inserts JSON[b]at the first one',
                'rArraypushJSON':'[a]inserts JSON[b]at the last one',
                'rArrayinsertJSON':'[a]inserts JSON[b]at[c]',
                'rArrayinsertJSONindextoindex':'[a]inserts JSON[b]from[c]to[d]',
                'rArraymove':'[a]item[b]move to[c]',
                'rArrayinterchange':'[a]interchanges item[b]and item[c]',
                'rArrayreplace':'set item[b]of[a]to[c]',
                'rArrayreplaceindexes':'set items[b]of[a]to[c]',
                'rArrayreplaceindextoindex':'set item from[b]to[c]of[a]to[d]',
                'rArrayreplacestr':'set item[b]of[a]to "[c]"',
                'rArrayreplaceindexesstr':'set items[b]of[a]to "[c]"',
                'rArrayreplaceindextoindexstr':'set item from[b]to[c]of[a]to "[d]"',
                'rArrayreplaceJSON':'set item[b]of[a]to JSON[c]',
                'rArrayreplaceindexesJSON':'set items[b]of[a]to JSON[c]',
                'rArrayreplaceindextoindexJSON':'set item from[b]to[c]of[a]to JSON[d]',
                'rArrayplusindex':'change by[c]at[b]of[a]',
                'rArrayplusindextoindex':'change by[d]from[b]to[c]of[a]',
                'rArrayplus':'change by[b]at every item of[a]',
                'rArrayindex':'the first[b]in[a]',
                'rArrayindexnumber':'the first number[b]in[a]',
                'rArrayindexstr':'the first "[b]" in[a]',
                'rArrayindexJSON':'the first JSON[b]in[a]',
                'rArraylastindex':'the last[b]in[a]',
                'rArraylastindexnumber':'the last number[b]in[a]',
                'rArraylastindexstr':'the last "[b]" in[a]',
                'rArraylastindexJSON':'the last JSON[b]in[a]',
                'rArrayallindex':'all[b]in[a]',
                'rArrayallindexnumber':'all number[b]in[a]',
                'rArrayallindexstr':'all "[b]" in[a]',
                'rArrayallindexJSON':'all JSON[b]in[a]',
                'rArrayfindIndexbignumber':'the first number>[b]in[a]',
                'rArrayfindIndexnotsmallnumber':'the first number≥[b]in[a]',
                'rArrayfindIndexsmallnumber':'the first number<[b]in[a]',
                'rArrayfindIndexnotbignumber':'the first number≤[b]in[a]',
                'rArraycountbignumber':'count number>[b]in[a]',
                'rArraycountnotsmallnumber':'count number≥[b]in[a]',
                'rArraycountsmallnumber':'count number<[b]in[a]',
                'rArraycountnotbignumber':'count number≤[b]in[a]',
                'rArraycountnumber':'count number[b]in[a]',
                'rArraycountstr':'count "[b]" in[a]',
                'rArraycount':'count[b]in[a]',
                'rArraycountJSON':'count JSON[b]in[a]',
                'rArraysortnaturalOrder':'sort[a]by ascending',
                'rArraysortreverseOrder':'sort[a]by descending',
                'rArrayreverse':'reverse[a]',
                'bArrayclear':'[a]has nothing',
                'rArraylength':'length of[a]',
                'bisArray':'[a]is Array',

                'rObjectkeynumber':'key of the first value=[b]in[a]',
                'rObjectlastkeynumber':'key of the last value=[b]in[a]',
                'rObjectallkeynumber':'keys of value=[b]in[a]',

                'rObjectvalue':'value of key[b]in[a]',
                'rObjectvalueJSON':'value as JSON of key[b]in[a]',
                'rObjectkey':'key of the first value[b]in[a]',
                'rObjectlastkey':'key of the last value[b]in[a]',
                'rObjectallkey':'keys of value[b]in[a]',
                'rObjectkeystr':'key of the first value "[b]" in[a]',
                'rObjectlastkeystr':'key of the last value "[b]" in[a]',
                'rObjectallkeystr':'keys of value "[b]" in[a]',
                'rObjectkeyJSON':'key of the first value JSON[b]in[a]',
                'rObjectlastkeyJSON':'key of the last value JSON[b]in[a]',
                'rObjectallkeyJSON':'keys of value JSON[b]in[a]',
                'rObjectputkey':'set[b]in[a]to[c]',
                'rObjectputkeynumber':'set number[b]in[a]to[c]',
                'rObjectputkeystr':'set[b]in[a]to"[c]"',
                'rObjectputkeyJSON':'set[b]in[a]to JSON[c]',
                'rObjectpluskey':'value of key[b]change by[c]in[a]',
                'rObjectplus':'values change by[b]in[a]',
                'rObjectputAll':'concat[a][b]',
                'rObjectremove':'delete key[b]from[a]',
                'rObjectremovekeys':'delete keys[b]from[a]',
                'rObjectkeys':'keys of[a]',
                'rObjectvalues':'values of[a]',
                'rObjectentries':'data of[a]',
                'rObjectfromentries':'[a]as Object',
                'bObjecthasownproperty':'[a]contians key[b]',
                'bObjectclear':'[a]has nothing',
                'rObjectlength':'length of[a]',
                'bisObject':'[a]is Object',

                'More':'More',
                
                'Tobecontinued':'To be continued',

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
            id:simpleOperatorsextensionId,
            name:this.formatMessage('Operators'),
            blockIconURI:'',
            menuIconURI: simpleOperatorsicon,
            color1:'#59c059',
            color2:'#8bbf8b',
            blocks:[
                {
                    blockType: "button",
                    text: this.formatMessage('simpleOperatorsdocs'),
                    onClick: this.docs,
                },
                '---'+this.formatMessage('simpleOperatorstip'),
                {
                    blockType: 'button',
                    hideFromPalette: !this.hideExtraBlocks,
                    text: this.formatMessage('simpleOperatorsshowBlock'),
                    onClick: () => {
                      if (confirm(this.formatMessage('simpleOperatorsshowBlock?'))) {
                        this.hideExtraBlocks = false;
                        this.storeExtConfig();
                        this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE')
                      }
                    },
                },
                {
                    blockType: 'button',
                    text: this.formatMessage('simpleOperatorshideBlock'),
                    hideFromPalette: this.hideExtraBlocks,
                    onClick: () => {
                      this.hideExtraBlocks = true;
                      this.storeExtConfig();
                      this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE')
                    },
                },
                {
                    opcode:'rtest',
                    blockType:'reporter',
                    text:'test[a][b]',
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            type:'string'
                        }
                    },
                    hideFromPalette: 1
                },
                '---' + this.formatMessage('Types'),
                {
                    opcode:'rmenuunusualword',
                    blockType:'reporter',
                    text: '[a]',
                    disableMonitor: true,
                    arguments:{
                        a:{
                            menu:'unusualword',
                            defaultValue:true
                        }
                    }
                },
                {
                    opcode:'rmenutotype',
                    blockType:'reporter',
                    text: '[a][b]',
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[]',
                        },
                        b:{
                            menu:'totype',
                            defaultValue:0
                        }
                    }
                },
                {
                    opcode:'rmenutypeof',
                    blockType:'reporter',
                    text:this.formatMessage('rmenutypeof'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[]',
                        },
                        b:{
                            menu:'original',
                            defaultValue:0
                        },
                        c:{
                            menu:'confuse',
                            defaultValue:0
                        }
                    }
                },
                {
                    opcode:'bmenutypeof',
                    blockType:'Boolean',
                    text:this.formatMessage('bmenutypeof'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[]',
                        },
                        b:{
                            menu:'original',
                            defaultValue:0
                        },
                        c:{
                            menu:'array',
                            defaultValue:'array'
                        }
                    }
                },
                {
                    opcode:'rJSONtypeof',
                    blockType:'reporter',
                    text:this.formatMessage('rJSONtypeof'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bJSONtypeof',
                    blockType:'Boolean',
                    text:this.formatMessage('bJSONtypeof'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[]'
                        },
                        b:{
                            menu:'type',
                            defaultValue:'boolean'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                '---' + this.formatMessage('StringsandNumbers'),
                {
                    opcode:'bmenuToBoolean',
                    blockType:'Boolean',
                    text:this.formatMessage('bmenuToBoolean'),
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            menu:'asoriginal',
                            defaultValue:0
                        },
                        c:{
                            menu:'not',
                            defaultValue:0
                        }
                    }
                },
                {
                    opcode:'rmenuif',
                    blockType:'reporter',
                    text:this.formatMessage('rmenuif'),
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            menu:'asoriginal',
                            defaultValue:0
                        },
                        c:{
                            type:'string',
                            defaultValue:this.formatMessage('yes')
                        },
                        d:{
                            type:'string',
                            defaultValue:this.formatMessage('no')
                        }
                    }
                },
                {
                    opcode:'bmenuand',
                    blockType:'Boolean',
                    text:this.formatMessage('bmenuand'),
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            menu:'or',
                            defaultValue:0
                        },
                        c:{
                            type:'string'
                        },
                        d:{
                            menu:'asoriginal',
                            defaultValue:0
                        },
                        e:{
                            menu:'not',
                            defaultValue:0
                        }
                    }
                },
                {
                    opcode:'bmenuundefined',
                    blockType:'Boolean',
                    text:this.formatMessage('bmenuundefined'),
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            menu:'roughly',
                            defaultValue:0
                        },
                        c:{
                            menu:'undefined',
                            defaultValue:0
                        }
                    }
                },
                {
                    opcode:'bmenuequal',
                    blockType:'Boolean',
                    text:this.formatMessage('bmenuequal'),
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            menu:'notequal',
                            defaultValue:0
                        },
                        c:{
                            type:'string'
                        },
                        d:{
                            menu:'essence',
                            defaultValue:0
                        }
                    }
                },
                {
                    opcode:'rreporter',
                    blockType:'reporter',
                    text:'[a]',
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:this.formatMessage('hello')
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rboolean',
                    blockType:'Boolean',
                    text:'[a]',
                    arguments:{
                        a:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bToBoolean',
                    blockType:'Boolean',
                    text:'[a]',
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rif',
                    blockType:'reporter',
                    text: this.formatMessage('rif'),
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            type:'string',
                            defaultValue:this.formatMessage('yes')
                        },
                        c:{
                            type:'string',
                            defaultValue:this.formatMessage('no')
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rifToBoolean',
                    blockType:'reporter',
                    text: this.formatMessage('rif'),
                    arguments:{
                        b:{
                            type:'string',
                            defaultValue:this.formatMessage('yes')
                        },
                        c:{
                            type:'string',
                            defaultValue:this.formatMessage('no')
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'band',
                    blockType:'Boolean',
                    text: this.formatMessage('band'),
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bandToBoolean',
                    blockType:'Boolean',
                    text: this.formatMessage('band'),
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bor',
                    blockType:'Boolean',
                    text: this.formatMessage('bor'),
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'borToBoolean',
                    blockType:'Boolean',
                    text: this.formatMessage('bor'),
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bnot',
                    blockType:'Boolean',
                    text: this.formatMessage('bnot'),
                    arguments:{
                        a:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bnotToBoolean',
                    blockType:'Boolean',
                    text: this.formatMessage('bnot'),
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rjoin',
                    blockType:'reporter',
                    text:'[a][b][c]',
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'c'
                        },
                        b:{
                            type:'string',
                            defaultValue:'c'
                        },
                        c:{
                            type:'string',
                            defaultValue:'w'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rremove',
                    blockType:'reporter',
                    text: this.formatMessage('rremove'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'bilioicik'
                        },
                        b:{
                            type:'string',
                            defaultValue:'i'
                        }
                    }
                },
                {
                    opcode:'rinterchange',
                    blockType:'reporter',
                    text: this.formatMessage('rinterchange'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'god'
                        },
                        b:{
                            type:'string',
                            defaultValue:'d'
                        },
                        c:{
                            type:'string',
                            defaultValue:'g'
                        }
                    }
                },
                {
                    opcode:'rdefault',
                    blockType:'reporter',
                    text: this.formatMessage('rdefault'),
                    arguments:{
                        b:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bdefined',
                    blockType:'Boolean',
                    text: this.formatMessage('bdefined'),
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bundefined',
                    blockType:'Boolean',
                    text: this.formatMessage('bundefined'),
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bnotstrictlyequal',
                    blockType:'Boolean',
                    text:this.formatMessage('bnotstrictlyequal'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'Shawn'
                        },
                        b:{
                            type:'string',
                            defaultValue:'shawn'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bnotcontain',
                    blockType:'Boolean',
                    text:this.formatMessage('bnotcontain'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'apple'
                        },
                        b:{
                            type:'string',
                            defaultValue:'app'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rmenurad',
                    blockType:'reporter',
                    text:this.formatMessage('rmenurad'),
                    arguments:{
                        a:{
                            menu:'sin',
                            defaultValue:'sin'
                        },
                        b:{
                            type:'string',
                            defaultValue:24
                        },
                        c:{
                            menu:'tonumber',
                            defaultValue:0
                        }
                    }
                },
                {
                    opcode:'rmenutoonehundredeighty',
                    blockType:'reporter',
                    text:this.formatMessage('rmenutoonehundredeighty'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:666
                        },
                        b:{
                            menu:'tonumber',
                            defaultValue:0
                        },
                        c:{
                            menu:'onehundredeighty',
                            defaultValue:0
                        }
                    }
                },
                {
                    opcode:'rsign',
                    blockType:'reporter',
                    text:'±[a]',
                    arguments:{
                        a:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'raddition',
                    blockType:'reporter',
                    text:'[a]+[b]+[c]',
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            type:'string'
                        },
                        c:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                }, 
                {
                    opcode:'radditionmultiplication',
                    blockType:'reporter',
                    text:'([a]+[b])*[c]',
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            type:'string'
                        },
                        c:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bnotequal',
                    blockType:'Boolean',
                    text:'[a]≠[b]',
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rnearestmultiple',
                    blockType:'reporter',
                    text: this.formatMessage('rnearestmultiple'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:12
                        },
                        b:{
                            type:'string',
                            defaultValue:7
                        }
                    }
                },
                {
                    opcode:'rmod',
                    blockType:'reporter',
                    text: this.formatMessage('rmod'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:-12
                        },
                        b:{
                            type:'string',
                            defaultValue:7
                        }
                    }
                }, 
                {
                    opcode:'rround',
                    blockType:'reporter',
                    text: this.formatMessage('rround'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:3.1415926
                        },
                        b:{
                            type:'string',
                            defaultValue:3
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                }, 
                {
                    opcode:'rrintfromto',
                    blockType:'reporter',
                    text: this.formatMessage('rrintfromto'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:3.1415926
                        },
                        b:{
                            type:'string',
                            defaultValue:6
                        },
                        c:{
                            type:'string',
                            defaultValue:3
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                }, 
                {
                    opcode:'rrinttotimes',
                    blockType:'reporter',
                    text: this.formatMessage('rrinttotimes'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:3.1415926
                        },
                        b:{
                            type:'string',
                            defaultValue:6
                        },
                        c:{
                            type:'string',
                            defaultValue:3
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                }, 
                {
                    opcode:'rrinttimesto',
                    blockType:'reporter',
                    text: this.formatMessage('rrinttimesto'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:3.1415926
                        },
                        b:{
                            type:'string',
                            defaultValue:3
                        },
                        c:{
                            type:'string',
                            defaultValue:3
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rPI',
                    blockType:'reporter',
                    text:this.formatMessage('rPI'),
                    arguments:{
                        a:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rradsin',
                    blockType:'reporter',
                    text:this.formatMessage('rradsin'),
                    arguments:{
                        a:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rradcos',
                    blockType:'reporter',
                    text:this.formatMessage('rradcos'),
                    arguments:{
                        a:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rradtan',
                    blockType:'reporter',
                    text:this.formatMessage('rradtan'),
                    arguments:{
                        a:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rradasin',
                    blockType:'reporter',
                    text:this.formatMessage('rradasin'),
                    arguments:{
                        a:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rradacos',
                    blockType:'reporter',
                    text:this.formatMessage('rradacos'),
                    arguments:{
                        a:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rradatan',
                    blockType:'reporter',
                    text:this.formatMessage('rradatan'),
                    arguments:{
                        a:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rsinmultiplication',
                    blockType:'reporter',
                    text:'[a]*sin[b]',
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                }, 
                {
                    opcode:'rcosmultiplication',
                    blockType:'reporter',
                    text:'[a]*cos[b]',
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                }, 
                {
                    opcode:'rtanmultiplication',
                    blockType:'reporter',
                    text:'[a]*tan[b]',
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rasindivision',
                    blockType:'reporter',
                    text:'asin[a]/[b]',
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                }, 
                {
                    opcode:'racosdivision',
                    blockType:'reporter',
                    text:'acos[a]/[b]',
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                }, 
                {
                    opcode:'ratandivision',
                    blockType:'reporter',
                    text:'atan[a]/[b]',
                    arguments:{
                        a:{
                            type:'string'
                        },
                        b:{
                            type:'string'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rtoonehundredeighty',
                    blockType:'reporter',
                    text:this.formatMessage('rtoonehundredeighty'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:666
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rtothreehundredsixty',
                    blockType:'reporter',
                    text:this.formatMessage('rtothreehundredsixty'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:666
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'raddto',
                    blockType:'reporter',
                    text:this.formatMessage('raddto'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:233
                        },
                        b:{
                            type:'string',
                            defaultValue:6
                        },
                        c:{
                            type:'string',
                            defaultValue:250
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                '---' + this.formatMessage('ArrayandObject'),
                {
                    opcode:'rmenuArraylength',
                    blockType:'reporter',
                    text: this.formatMessage('rmenuArraylength'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,1,4,5,1,4]'
                        },
                        b:{
                            menu:'JSON',
                            defaultValue:0
                        },
                        c:{
                            menu:'length',
                            defaultValue:0
                        }
                    }
                },
                {
                    opcode:'bmenuArrayhave',
                    blockType:'Boolean',
                    text: this.formatMessage('bmenuArrayhave'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,1,4,5,1,4]'
                        },
                        b:{
                            menu:'JSON',
                            defaultValue:0
                        },
                        c:{
                            menu:'contains',
                            defaultValue:0
                        },
                        d:{
                            type:'string',
                            defaultValue:1
                        },
                        e:{
                            menu:'totype',
                            defaultValue:0
                        },
                        f:{
                            menu:'essence',
                            defaultValue:0
                        }
                    }
                },
                {
                    opcode:'rmenuArrayremove',
                    blockType:'reporter',
                    text: this.formatMessage('rmenuArrayremove'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,1,4,5,1,4]'
                        },
                        b:{
                            menu:'JSON',
                            defaultValue:0
                        },
                        c:{
                            type:'string',
                            defaultValue:1
                        },
                        d:{
                            menu:'totype',
                            defaultValue:0
                        },
                        e:{
                            menu:'essence',
                            defaultValue:0
                        },
                        f:{
                            menu:'string',
                            defaultValue:0
                        }
                    }
                },
                {
                    opcode:'rmenuArrayremoveitem',
                    blockType:'reporter',
                    text: this.formatMessage('rmenuArrayremoveitem'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,1,4,5,1,4]'
                        },
                        b:{
                            menu:'JSON',
                            defaultValue:0
                        },
                        c:{
                            type:'string',
                            defaultValue:1
                        },
                        d:{
                            menu:'string',
                            defaultValue:0
                        }
                    }
                },
                {
                    opcode:'rmenuArrayitem',
                    blockType:'reporter',
                    text: this.formatMessage('rmenuArrayitem'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,1,4,5,1,4]'
                        },
                        b:{
                            menu:'JSON',
                            defaultValue:0
                        },
                        c:{
                            type:'string',
                            defaultValue:1
                        },
                        d:{
                            menu:'string',
                            defaultValue:0
                        }
                    }
                },
                {
                    opcode:'rmenuArrayinsert',
                    blockType:'reporter',
                    text: this.formatMessage('rmenuArrayinsert'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,1,4,5,1,4]'
                        },
                        b:{
                            menu:'JSON',
                            defaultValue:0
                        },
                        c:{
                            type:'string',
                            defaultValue:1
                        },
                        d:{
                            menu:'insert',
                            defaultValue:0
                        },
                        e:{
                            type:'string',
                            defaultValue:1
                        },
                        f:{
                            menu:'totype',
                            defaultValue:0
                        },
                        g:{
                            menu:'string',
                            defaultValue:0
                        }
                    }
                },
                {
                    opcode:'rmenuArrayindex',
                    blockType:'reporter',
                    text: this.formatMessage('rmenuArrayindex'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,1,4,5,1,4]'
                        },
                        b:{
                            menu:'JSON',
                            defaultValue:0
                        },
                        c:{
                            menu:'first',
                            defaultValue:0
                        },
                        d:{
                            type:'string',
                            defaultValue:1
                        },
                        e:{
                            menu:'totype',
                            defaultValue:0
                        },
                        f:{
                            menu:'essence',
                            defaultValue:0
                        }
                    }
                },
                {
                    opcode:'rmenuArraycount',
                    blockType:'reporter',
                    text: this.formatMessage('rmenuArraycount'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,1,4,5,1,4]'
                        },
                        b:{
                            menu:'JSON',
                            defaultValue:0
                        },
                        c:{
                            type:'string',
                            defaultValue:1
                        },
                        d:{
                            menu:'totype',
                            defaultValue:0
                        },
                        e:{
                            menu:'essence',
                            defaultValue:0
                        }
                    }
                },
                {
                    opcode:'rmenuArraysort',
                    blockType:'reporter',
                    text: this.formatMessage('rmenuArraysort'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,1,4,5,1,4]'
                        },
                        b:{
                            menu:'JSON',
                            defaultValue:0
                        },
                        c:{
                            menu:'descending',
                            defaultValue:0
                        },
                        d:{
                            menu:'string',
                            defaultValue:0
                        }
                    }
                },
                {
                    opcode:'rArrayremoveshift',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayremoveshift'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayremovepop',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayremovepop'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayremoveitem',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayremoveitem'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:0
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayremoveitems',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayremoveitems'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:'[1,1,0,2]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayremoveitemtoitem',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayremoveitemtoitem'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:0
                        },
                        c:{
                            type:'string',
                            defaultValue:6
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayreserveitem',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayreserveitem'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:0
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayremoveJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayremoveJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayremovestr',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayremovestr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayremovebignumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayremovebignumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayremovenotsmallnumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayremovenotsmallnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayremovesmallnumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayremovesmallnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayremovenotbignumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayremovenotbignumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayremovenumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayremovenumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayremove',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayremove'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayunshiftJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayunshiftJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayunshiftstr',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayunshiftstr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayunshiftnumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayunshiftnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayunshift',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayunshift'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraypushJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rArraypushJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraypushstr',
                    blockType:'reporter',
                    text: this.formatMessage('rArraypushstr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraypushnumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArraypushnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraypush',
                    blockType:'reporter',
                    text: this.formatMessage('rArraypush'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayinsertJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayinsertJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        },
                        c:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayinsertstr',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayinsertstr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        },
                        c:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayinsertnumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayinsertnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        },
                        c:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayinsert',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayinsert'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        },
                        c:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayinsertJSONindexes',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayinsertJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        },
                        c:{
                            type:'string',
                            defaultValue:'[1,1,0,2]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayinsertstrindexes',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayinsertstr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        },
                        c:{
                            type:'string',
                            defaultValue:'[1,1,0,2]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayinsertnumberindexes',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayinsertnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        },
                        c:{
                            type:'string',
                            defaultValue:'[1,1,0,2]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayinsertindexes',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayinsert'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        },
                        c:{
                            type:'string',
                            defaultValue:'[1,1,0,2]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayinsertJSONindextoindex',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayinsertJSONindextoindex'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        },
                        c:{
                            type:'string',
                            defaultValue:1
                        },
                        d:{
                            type:'string',
                            defaultValue:6
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayinsertstrindextoindex',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayinsertstrindextoindex'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        },
                        c:{
                            type:'string',
                            defaultValue:1
                        },
                        d:{
                            type:'string',
                            defaultValue:6
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayinsertnumberindextoindex',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayinsertnumberindextoindex'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        },
                        c:{
                            type:'string',
                            defaultValue:1
                        },
                        d:{
                            type:'string',
                            defaultValue:6
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayinsertindextoindex',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayinsertindextoindex'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        },
                        c:{
                            type:'string',
                            defaultValue:1
                        },
                        d:{
                            type:'string',
                            defaultValue:6
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraymove',
                    blockType:'reporter',
                    text: this.formatMessage('rArraymove'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        },
                        c:{
                            type:'string',
                            defaultValue:6
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayreplaceJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayreplaceJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        },
                        c:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayreplacestr',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayreplacestr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        },
                        c:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayreplacenumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayreplacenumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        },
                        c:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayreplace',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayreplace'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        },
                        c:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayreplaceindexesJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayreplaceindexesJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:'[1,1,0,2]'
                        },
                        c:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayreplaceindexesstr',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayreplaceindexesstr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:'[1,1,0,2]'
                        },
                        c:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayreplaceindexesnumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayreplaceindexesnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:'[1,1,0,2]'
                        },
                        c:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayreplaceindexes',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayreplaceindexes'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:'[1,1,0,2]'
                        },
                        c:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayreplaceindextoindexJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayreplaceindextoindexJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        },
                        c:{
                            type:'string',
                            defaultValue:6
                        },
                        d:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayreplaceindextoindexstr',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayreplaceindextoindexstr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        },
                        c:{
                            type:'string',
                            defaultValue:6
                        },
                        d:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayreplaceindextoindexnumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayreplaceindextoindexnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        },
                        c:{
                            type:'string',
                            defaultValue:6
                        },
                        d:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayreplaceindextoindex',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayreplaceindextoindex'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        },
                        c:{
                            type:'string',
                            defaultValue:6
                        },
                        d:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayinterchange',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayinterchange'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        },
                        c:{
                            type:'string',
                            defaultValue:6
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayplusindex',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayplusindex'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        },
                        c:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayplusindexes',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayplusindex'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue:'[1,1,0,2]'
                        },
                        c:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayplusindextoindex',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayplusindextoindex'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        },
                        c:{
                            type:'string',
                            defaultValue:6
                        },
                        d:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayplus',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayplus'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue:114514
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayshiftJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayshiftJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayshift',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayshift'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraypopJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rArraypopJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraypop',
                    blockType:'reporter',
                    text: this.formatMessage('rArraypop'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayitemJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayitemJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayitem',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayitem'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:-1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayitems',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayitems'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:'[1,1,0,2]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayitemtoitem',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayitemtoitem'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        },
                        c:{
                            type:'string',
                            defaultValue:6
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayindexJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayindexJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayindexstr',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayindexstr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayfindIndexbignumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayfindIndexbignumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayfindIndexnotsmallnumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayfindIndexnotsmallnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayfindIndexsmallnumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayfindIndexsmallnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayfindIndexnotbignumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayfindIndexnotbignumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayindexnumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayindexnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayindex',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayindex'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraylastindexJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rArraylastindexJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraylastindexstr',
                    blockType:'reporter',
                    text: this.formatMessage('rArraylastindexstr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraylastindexnumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArraylastindexnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraylastindex',
                    blockType:'reporter',
                    text: this.formatMessage('rArraylastindex'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayallindexJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayallindexJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayallindexstr',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayallindexstr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayallindexnumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayallindexnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayallindex',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayallindex'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraycountJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rArraycountJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraycountstr',
                    blockType:'reporter',
                    text: this.formatMessage('rArraycountstr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraycountbignumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArraycountbignumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraycountnotsmallnumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArraycountnotsmallnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraycountsmallnumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArraycountsmallnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraycountnotbignumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArraycountnotbignumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraycountnumber',
                    blockType:'reporter',
                    text: this.formatMessage('rArraycountnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraycount',
                    blockType:'reporter',
                    text: this.formatMessage('rArraycount'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraylength',
                    blockType:'reporter',
                    text: this.formatMessage('rArraylength'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,1,4,5,1,4]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraysum',
                    blockType:'reporter',
                    text: this.formatMessage('rArraysum'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayproduct',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayproduct'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayaverage',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayaverage'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraymax',
                    blockType:'reporter',
                    text: this.formatMessage('rArraymax'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraymin',
                    blockType:'reporter',
                    text: this.formatMessage('rArraymin'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraysortnaturalOrder',
                    blockType:'reporter',
                    text: this.formatMessage('rArraysortnaturalOrder'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArraysortreverseOrder',
                    blockType:'reporter',
                    text: this.formatMessage('rArraysortreverseOrder'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rArrayreverse',
                    blockType:'reporter',
                    text: this.formatMessage('rArrayreverse'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArrayhaveJSON',
                    blockType:'Boolean',
                    text: this.formatMessage('bArrayhaveJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArrayhavestr',
                    blockType:'Boolean',
                    text: this.formatMessage('bArrayhavestr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArrayhavebignumber',
                    blockType:'Boolean',
                    text: this.formatMessage('bArrayhavebignumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArrayhavenotsmallnumber',
                    blockType:'Boolean',
                    text: this.formatMessage('bArrayhavenotsmallnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArrayhavesmallnumber',
                    blockType:'Boolean',
                    text: this.formatMessage('bArrayhavesmallnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArrayhavenotbignumber',
                    blockType:'Boolean',
                    text: this.formatMessage('bArrayhavenotbignumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArrayhavenumber',
                    blockType:'Boolean',
                    text: this.formatMessage('bArrayhavenumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArrayhave',
                    blockType:'Boolean',
                    text: this.formatMessage('bArrayhave'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArraybeJSON',
                    blockType:'Boolean',
                    text: this.formatMessage('bArraybeJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArraybestr',
                    blockType:'Boolean',
                    text: this.formatMessage('bArraybestr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArraybebignumber',
                    blockType:'Boolean',
                    text: this.formatMessage('bArraybebignumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArraybenotsmallnumber',
                    blockType:'Boolean',
                    text: this.formatMessage('bArraybenotsmallnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArraybesmallnumber',
                    blockType:'Boolean',
                    text: this.formatMessage('bArraybesmallnumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArraybenotbignumber',
                    blockType:'Boolean',
                    text: this.formatMessage('bArraybenotbignumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,1,4,5,1,4]'
                        },
                        b:{
                            type:'string',
                            defaultValue: 4
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArraybenumber',
                    blockType:'Boolean',
                    text: this.formatMessage('bArraybenumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArraybe',
                    blockType:'Boolean',
                    text: this.formatMessage('bArraybe'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue: '[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArrayequal',
                    blockType:'Boolean',
                    text: '[a]=[b]',
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:'["fun","k",1,"1",4,5,1,4]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArraystrictlyequal',
                    blockType:'Boolean',
                    text: this.formatMessage('bArraystrictlyequal'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                        },
                        b:{
                            type:'string',
                            defaultValue:'["Fun","k",1,"1",4,5,1,4]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bArrayclear',
                    blockType:'Boolean',
                    text: this.formatMessage('bArrayclear'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bisArray',
                    blockType:'Boolean',
                    text: this.formatMessage('bisArray'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectremove',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectremove'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","job":"CCW creater"}'
                        },
                        b:{
                            type:'string',
                            defaultValue:'job'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectremovekeys',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectremovekeys'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","job":"CCW creater"}'
                        },
                        b:{
                            type:'string',
                            defaultValue:'["name","job"]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectputkeyJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectputkeyJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn"}'
                        },
                        b:{
                            type:'string',
                            defaultValue:'id'
                        },
                        c:{
                            type:'string',
                            defaultValue:1701001
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectputkeystr',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectputkeystr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn"}'
                        },
                        b:{
                            type:'string',
                            defaultValue:'job'
                        },
                        c:{
                            type:'string',
                            defaultValue:'CCW creator'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectputkeynumber',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectputkeynumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn"}'
                        },
                        b:{
                            type:'string',
                            defaultValue:'id'
                        },
                        c:{
                            type:'string',
                            defaultValue:1701001
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectputkey',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectputkey'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn"}'
                        },
                        b:{
                            type:'string',
                            defaultValue:'id'
                        },
                        c:{
                            type:'string',
                            defaultValue:1701001
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectpluskey',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectpluskey'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"sharpness":5,"knockback":2}'
                        },
                        b:{
                            type:'string',
                            defaultValue:'knockback'
                        },
                        c:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectplus',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectplus'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"sharpness":5,"knockback":2}'
                        },
                        b:{
                            type:'string',
                            defaultValue:1
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectvalueJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectvalueJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","job":"CCW creator"}'
                        },
                        b:{
                            type:'string',
                            defaultValue:'job'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectvalue',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectvalue'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","job":"CCW creator"}'
                        },
                        b:{
                            type:'string',
                            defaultValue:'job'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectkeyJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectkeyJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","id":1701001}'
                        },
                        b:{
                            type:'string',
                            defaultValue:1701001
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectkeystr',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectkeystr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","job":"CCW creator"}'
                        },
                        b:{
                            type:'string',
                            defaultValue:'CCW creator'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectkeynumber',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectkeynumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","id":1701001}'
                        },
                        b:{
                            type:'string',
                            defaultValue:1701001
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectkey',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectkey'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","id":1701001}'
                        },
                        b:{
                            type:'string',
                            defaultValue:1701001
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectlastkeyJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectlastkeyJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","id":1701001}'
                        },
                        b:{
                            type:'string',
                            defaultValue:1701001
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectlastkeystr',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectlastkeystr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","job":"CCW creator"}'
                        },
                        b:{
                            type:'string',
                            defaultValue:'CCW creator'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectlastkeynumber',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectlastkeynumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","id":1701001}'
                        },
                        b:{
                            type:'string',
                            defaultValue:1701001
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectlastkey',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectlastkey'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","id":1701001}'
                        },
                        b:{
                            type:'string',
                            defaultValue:1701001
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectallkeyJSON',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectallkeyJSON'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","id":1701001}'
                        },
                        b:{
                            type:'string',
                            defaultValue:1701001
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectallkeystr',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectallkeystr'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","job":"CCW creator"}'
                        },
                        b:{
                            type:'string',
                            defaultValue:'CCW creator'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectallkeynumber',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectallkeynumber'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","id":1701001}'
                        },
                        b:{
                            type:'string',
                            defaultValue:1701001
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectallkey',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectallkey'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","id":1701001}'
                        },
                        b:{
                            type:'string',
                            defaultValue:1701001
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectlength',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectlength'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","job":"CCW creator"}'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectkeys',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectkeys'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","job":"CCW creator"}'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectvalues',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectvalues'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","job":"CCW creator"}'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectentries',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectentries'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","job":"CCW creator"}'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectfromentries',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectfromentries'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'[["name","Shawn"],["job","CCW creator"]]'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectputAll',
                    blockType:'reporter',
                    text: this.formatMessage('rObjectputAll'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"job":"CCW creator"}'
                        },
                        b:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","job":"CCW creater"}'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'rObjectplusObject',
                    blockType:'reporter',
                    text:'[a]+[b]',
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"sharpness":5,"knockback":2}'
                        },
                        b:{
                            type:'string',
                            defaultValue:'{"knockback":1,"fire aspect":2,"looting":3}'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bObjecthasownproperty',
                    blockType:'Boolean',
                    text: this.formatMessage('bObjecthasownproperty'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{"name":"Shawn","job":"CCW creator"}'
                        },
                        b:{
                            type:'string',
                            defaultValue:'job'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bObjectclear',
                    blockType:'Boolean',
                    text: this.formatMessage('bObjectclear'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{}'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                {
                    opcode:'bisObject',
                    blockType:'Boolean',
                    text: this.formatMessage('bisObject'),
                    arguments:{
                        a:{
                            type:'string',
                            defaultValue:'{}'
                        }
                    },
                    hideFromPalette: this.hideExtraBlocks
                },
                
                '---' + this.formatMessage('Tobecontinued')
            ],
            menus:{
                boolean:{
                    acceptReporters:true,
                    items:['','true','false']
                },
                sin:{
                    acceptReporters:true,
                    items:['sin','cos','tan','asin','acos','atan']
                },
                type: {
                    acceptReporters:true,
                    items:[
                        {
                            text: this.formatMessage('boolean'), 
                            value: 'boolean'
                        },
                        {
                            text: this.formatMessage('number'), 
                            value: 'number'
                        },
                        {
                            text: this.formatMessage('arrayorobject'), 
                            value: 'object'
                        },
                        {
                            text: this.formatMessage('string'), 
                            value: 'string'
                        },
                        {
                            text: this.formatMessage('undefined'), 
                            value: 'undefined'
                        }
                    ]
                },
                or:{
                    acceptReporters:true,
                    items:[
                        {
                            text: this.formatMessage('or'), 
                            value:0
                        },
                        {
                            text: this.formatMessage('and'), 
                            value:1
                        }
                    ]
                },
                asoriginal:{
                    acceptReporters:true,
                    items:[
                        {
                            text: this.formatMessage('asoriginal'), 
                            value:0
                        },
                        {
                            text: this.formatMessage('asboolean'), 
                            value:1
                        },
                        {
                            text: this.formatMessage('toboolean'), 
                            value:2
                        }
                    ]
                },
                not:{
                    acceptReporters:true,
                    items:[
                        {
                            text: this.formatMessage('not'), 
                            value:0
                        },
                        {
                            text: this.formatMessage('is'), 
                            value:1
                        }
                    ]
                },
                undefined:{
                    acceptReporters:true,
                    items:[
                        {
                            text: this.formatMessage('undefined'), 
                            value:0
                        },
                        {
                            text: this.formatMessage('defined'), 
                            value:1
                        }
                    ]
                },
                roughly:{
                    acceptReporters:true,
                    items:[
                        {
                            text: this.formatMessage('roughly'), 
                            value:0
                        },
                        {
                            text: this.formatMessage('strictly'), 
                            value:1
                        }
                    ]
                },
                notequal:{
                    acceptReporters:true,
                    items:[
                        {
                            text: '≠', 
                            value:0
                        },
                        {
                            text: '=', 
                            value:1
                        }
                    ]
                },
                essence:{
                    acceptReporters:true,
                    items:[
                        {
                            text: this.formatMessage('essence'), 
                            value:0
                        },
                        {
                            text: this.formatMessage('content'), 
                            value:1
                        },
                        {
                            text: this.formatMessage('type'), 
                            value:2
                        },
                        {
                            text: this.formatMessage('contentandtype'), 
                            value:3
                        },
                        {
                            text: this.formatMessage('essenceandcase'), 
                            value:4
                        },
                        {
                            text: this.formatMessage('contentandcase'), 
                            value:5
                        },
                        {
                            text: this.formatMessage('contentandtypeandcase'), 
                            value:6
                        }
                    ]
                },
                tonumber:{
                    acceptReporters:true,
                    items:[
                        {
                            text: this.formatMessage('asoriginal'), 
                            value:0
                        },
                        {
                            text: this.formatMessage('asnumber'), 
                            value:1
                        },
                        {
                            text: this.formatMessage('tonumber'), 
                            value:2
                        }
                    ]
                },
                onehundredeighty:{
                    acceptReporters:true,
                    items:[
                        {
                            text: '-180~180', 
                            value:0
                        },
                        {
                            text: '0~360', 
                            value:1
                        }
                    ]
                },
                unusualword:{
                    acceptReporters:true,
                    items:[
                        {
                            text: 'true', 
                            value:true
                        },
                        {
                            text: 'false', 
                            value:false
                        },
                        {
                            text: '∞', 
                            value:Infinity
                        },
                        {
                            text: 'NaN', 
                            value:NaN
                        },
                        {
                            text: 'null', 
                            value:null
                        },
                        {
                            text: 'undefined', 
                            value:undefined
                        }
                    ]
                },
                totype:{
                    acceptReporters:true,
                    items:[
                        {
                            text: this.formatMessage('asJSON'),
                            value:0
                        },
                        {
                             text: this.formatMessage('asoriginal'), 
                            value:1
                        },
                        {
                            text: this.formatMessage('asboolean'), 
                            value:2
                        },
                        {
                            text: this.formatMessage('toboolean'), 
                            value:3
                        },
                        {
                            text: this.formatMessage('asnumber'), 
                            value:4
                        },
                        {
                            text: this.formatMessage('tonumber'), 
                            value:5
                        },
                        {
                            text: this.formatMessage('asstring'), 
                            value:6
                        }
                    ]
                },
                original:{
                    acceptReporters:true,
                    items:[
                        {
                            text: this.formatMessage('original'), 
                            value:0
                        },
                        {
                            text: 'JSON', 
                            value:1
                        }
                    ]
                },
                confuse:{
                    acceptReporters:true,
                    items:[
                        {
                            text: this.formatMessage('confuse'), 
                            value:0
                        },
                        {
                            text: this.formatMessage('distinguish'), 
                            value:1
                        }
                    ]
                },
                array:{
                    acceptReporters:true,
                    items:[
                        {
                            text: this.formatMessage('array'), 
                            value: 'array'
                        },
                        {
                            text: this.formatMessage('object'), 
                            value: 'object'
                        },
                        {
                            text: this.formatMessage('boolean'), 
                            value: 'boolean'
                        },
                        {
                            text: this.formatMessage('number'), 
                            value: 'number'
                        },
                        {
                            text: this.formatMessage('arrayorobject'), 
                            value: 'array or object'
                        },
                        {
                            text: this.formatMessage('string'), 
                            value: 'string'
                        },
                        {
                            text: this.formatMessage('undefined'), 
                            value: 'undefined'
                        }
                    ]
                },
                JSON:{
                    acceptReporters:true,
                    items:[
                        {
                            text: 'JSON', 
                            value: 0
                        },
                        {
                            text: this.formatMessage('original'), 
                            value: 1
                        }
                    ]
                },
                length:{
                    acceptReporters:true,
                    items:[
                        {
                            text: this.formatMessage('lengthof'), 
                            value: 0
                        },
                        {
                            text: this.formatMessage('sumof'), 
                            value: 1
                        },
                        {
                            text: this.formatMessage('productof'), 
                            value: 2
                        },
                        {
                            text: this.formatMessage('averageof'), 
                            value: 3
                        },
                        {
                            text: this.formatMessage('max'), 
                            value: 4
                        },
                        {
                            text: this.formatMessage('min'), 
                            value: 5
                        }
                    ]
                },
                contains:{
                    acceptReporters:true,
                    items:[
                        {
                            text: this.formatMessage('contains'), 
                            value: 0
                        },
                        {
                            text: this.formatMessage('onlycontains'), 
                            value: 1
                        }
                    ]
                },
                string:{
                    acceptReporters:true,
                    items:[
                        {
                            text: this.formatMessage('string'), 
                            value: 0
                        },
                        {
                            text: this.formatMessage('original'), 
                            value: 1
                        }
                    ]
                },
                insert:{
                    acceptReporters:true,
                    items:[
                        {
                            text: this.formatMessage('insert'), 
                            value: 0
                        },
                        {
                            text: this.formatMessage('set'), 
                            value: 1
                        },
                        {
                            text: this.formatMessage('plus'), 
                            value: 2
                        }
                    ]
                },
                first:{
                    acceptReporters:true,
                    items:[
                        {
                            text: this.formatMessage('thefirst'), 
                            value: 0
                        },
                        {
                            text: this.formatMessage('thelast'), 
                            value: 1
                        },
                        {
                            text: this.formatMessage('all'), 
                            value: 2
                        }
                    ]
                },
                descending:{
                    acceptReporters:true,
                    items:[
                        {
                            text: this.formatMessage('descending'), 
                            value: 0
                        },
                        {
                            text: this.formatMessage('ascending'), 
                            value: 1
                        }
                    ]
                }
            }
        }
    }

    docs() {
        let a = document.createElement('a');
        a.href = "https://learn.ccw.site/article/306d54d0-b83a-43f3-ba84-bd41a7183239";
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
            `${simpleOperatorsextensionId}: Extension config comment does not contain valid line.`,
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
          console.warn(`${simpleOperatorsextensionId}: Config comment has invalid JSON`, e);
          return undefined;
        }
    }
    parseExtConfig() {
        let config = this.getAllExtConfig();
        if (!config) return false;
        config = config[simpleOperatorsextensionId];
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
        config[simpleOperatorsextensionId] = this.generateExtConfig();
    
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
    rtest(args,util){
        return Object.isObject({})
    }
    bmenuToBoolean(args){
        switch(args.b){
            case 0 :
                return args.c ? args.a : ! args.a
            case 1 :
                return args.c ? ! [0,false,undefined,null,''].includes(args.a) : [0,false,undefined,null,''].includes(args.a)
            default :
                return args.c ? ! [0,false,undefined,null,'','0','false','undefined','null'].includes(args.a) : [0,false,undefined,null,'','0','false','undefined','null'].includes(args.a)
        }
    }
    rmenuif(args){
        switch(args.b){
            case 0 :
                return args.a ? args.c : args.d
            case 1 :
                return [0,false,undefined,null,''].includes(args.a) ? args.d : args.c
            default :
                return [0,false,undefined,null,'','0','false','undefined','null'].includes(args.a) ? args.d : args.c
        }
    }
    bmenuand(args){
        if(args.b){
            switch(args.d){
                case 0 :
                    return args.e ? args.a && args.b : !(args.a && args.b)
                case 1 :
                    return args.e ? !( [0,false,undefined,null,''].includes(args.a) || [0,false,undefined,null,''].includes(args.c) ) : [0,false,undefined,null,''].includes(args.a) || [0,false,undefined,null,''].includes(args.c)
                default :
                    return args.e ? !( [0,false,undefined,null,'','0','false','undefined','null'].includes(args.a) || [0,false,undefined,null,'','0','false','undefined','null'].includes(args.c) ) : [0,false,undefined,null,'','0','false','undefined','null'].includes(args.a) || [0,false,undefined,null,'','0','false','undefined','null'].includes(args.c)
            }
        }
        switch(args.d){
            case 0 :
                return args.e ? args.a || args.b : !(args.a || args.b)
            case 1 :
                return args.e ? !( [0,false,undefined,null,''].includes(args.a) && [0,false,undefined,null,''].includes(args.c) ) : [0,false,undefined,null,''].includes(args.a) && [0,false,undefined,null,''].includes(args.c)
            default :
                return args.e ? !( [0,false,undefined,null,'','0','false','undefined','null'].includes(args.a) && [0,false,undefined,null,'','0','false','undefined','null'].includes(args.c) ) : [0,false,undefined,null,'','0','false','undefined','null'].includes(args.a) && [0,false,undefined,null,'','0','false','undefined','null'].includes(args.c)
        }
    }
    bmenuundefined(args){
        if (args.b){
            if([undefined,null,''].includes(args.a)) return args.c ? false :true
            return args.c ? true : false
        }
        if([undefined,null,'undefined','null',''].includes(args.a)) return args.c ? false :true
        return args.c ? true : false
    }
    equal(a,b,c){
        switch(c){
            case 0 :
                return (typeof a == 'string' ? a.toLowerCase() : a) == (typeof b == 'string' ? b.toLowerCase() : b)
            case 1 :
                return String(a).toLowerCase() == String(b).toLowerCase()
            case 2 :
                return typeof a == typeof b
            case 3 :
                return (typeof a == 'string' ? a.toLowerCase() : a) === (typeof b == 'string' ? b.toLowerCase() : b)
            case 4 :
                return a == b
            case 5 :
                return Object.is(a,b)
            default :
                return a === b
        }
    }
    notequal(a,b,c){
        switch(c){
            case 0 :
                return (typeof a == 'string' ? a.toLowerCase() : a) != (typeof b == 'string' ? b.toLowerCase() : b)
            case 1 :
                return String(a).toLowerCase() != String(b).toLowerCase()
            case 2 :
                return typeof a != typeof b
            case 3 :
                return (typeof a == 'string' ? a.toLowerCase() : a) !== (typeof b == 'string' ? b.toLowerCase() : b)
            case 4 :
                return a != b
            case 5 :
                return ! Object.is(a,b)
            default :
                return a !== b
        }
    }
    bmenuequal(args){
        return args.b ? this.equal(args.a,args.c,args.d) : this.notequal(args.a,args.c,args.d)
    }
    rmenurad(args){
        let b
        switch(args.c){
            case 0 :
                b = args.b
            case 1 :
                b = Number(args.b)
            default:
                b = Cast.toNumber(args.b)
        }
        switch(args.a){
            case 'sin' :
                return Math.sin(b)
            case 'cos' :
                return Math.cos(b)
            case 'tan' :
                return Math.tan(b)
            case 'asin' :
                return Math.asin(b)
            case 'acos' :
                return Math.acos(b)
            default:
                return Math.atan(b)
        }
            
        
    }
    rmenutoonehundredeighty(args){
        let a
        switch(args.b){
            case 0 :
                a = args.a
            case 1 :
                a = Number(args.a)
            default:
                a = Cast.toNumber(args.a)
        }
        if(args.c){
            while (a < 0){
                a+=360
            }
            return a % 360
        }
        const b = a % 360
        return b+(b > -180 ? (b > 180 ? -360 : 0) : 360)
    }
    rmenuunusualword(args){
        if (typeof args.a == 'string'){
            switch(args.a){
                case 'true' :
                    return true
                case 'false' :
                    return false
                case 'Infinity' :
                    return Infinity
                case 'NaN' :
                    return NaN
                case 'null' :
                    return null
                default :
                    return undefined
            }
        }
        return args.a
    }
    totype(a,b){
        switch(b){
            case 0 :
                return JSON.parse(a)
            case 1 :
                return a
            case 2 :
                return ! [0,false,undefined,null,''].includes(a)
            case 3 :
                return ! [0,false,undefined,null,'','0','false','undefined','null'].includes(a)
            case 4 :
                return Number(a)
            case 5 :
                return Cast.toNumber(a)
            default:
                return String(a)
        }
    }
    rmenutotype(args){
        return this.totype(args.a,args.b)
    }
    rmenutypeof(args){
        if (args.b){
            const a = JSON.parse(args.a)
            return args.c && Array.isArray(a) ? 'array' : typeof a
        }
        return typeof args.a
    }
    bmenutypeof(args){
        if (args.b){
            const a = JSON.parse(args.a)
            if(args.c==='array')return Array.isArray(a)
            if(args.c==='array or object')return typeof a === 'object'
            return typeof a === args.c
        }
        return typeof args.a === args.c
    }
    rmenuArraylength(args){
        const a = args.b ? args.a : JSON.parse(args.a)
        switch(args.c){
            case 0 :
                return a.length
            case 1 :
                return a.reduce((a, b) => a + b)
            case 2 :
                return a.reduce((a, b) => a * b)
            case 3 :
                return a.reduce((a, b) => a + b) / a.length
            case 4 :
                return Math.max(...a)
            default:
                return Math.min(...a)
        }
    }
    bmenuArrayhave(args){
        const a = args.b ? args.a : JSON.parse(args.a);
        const b = this.totype(args.d,args.e);
        const n = args.f
        if( typeof b == 'object' ){
            const c = JSON.stringify(b)
            return args.c ? a.every(i => this.equal(JSON.stringify(i),c,n)) : a.some(i => this.equal(JSON.stringify(i),c,n))
        }
        return args.c ? a.every(i => this.equal(i,b,n)) : a.some(i => this.equal(i,b,n))
    }
    rmenuArrayremove(args){
        const a = args.b ? args.a : JSON.parse(args.a);
        const b = this.totype(args.c,args.d);
        const n = args.e;
        const w = []
        if( typeof b == 'object' ){
            const c = JSON.stringify(b)
            for(const t of a){
                if(this.notequal(JSON.stringify(t),c,n))w.push(t)
            }
        }
        else{
            for(const t of a){
                if(this.notequal(t,b,n))w.push(t)
            }
        }
        return args.f ? w : JSON.stringify(w)
    }
    rmenuArrayremoveitem(args){
        return args.d ? (args.b ? args.a :JSON.parse(args.a)).toSpliced(Number(args.c), 1) : JSON.stringify((args.b ? args.a :JSON.parse(args.a)).toSpliced(Number(args.c), 1))
    }
    rmenuArrayitem(args){
        return args.d ? (args.b ? args.a :JSON.parse(args.a)).at(args.c) : JSON.stringify((args.b ? args.a :JSON.parse(args.a)).at(args.c))
    }
    rmenuArrayinsert(args){
        const a = args.b ? args.a : JSON.parse(args.a);
        const b = this.totype(args.e,args.f);
        switch(args.d){
            case 0 :
                return args.g ? a.toSpliced(args.c,0,b) : JSON.stringify(a.toSpliced(args.c,0,b))
            case 1 :
                return args.g ? a.with(args.c,b) : JSON.stringify(a.with(args.c,b))
            default :
                return args.g ? a.with(args.c,a.at(args.c)+b) : JSON.stringify(a.with(args.c,a.at(args.c)+b))
        }
    }
    rmenuArrayindex(args){
        const a = args.b ? args.a : JSON.parse(args.a);
        const b = this.totype(args.d,args.e);
        const n = args.f
        if( typeof b == 'object' ){
            const c = JSON.stringify(b)
            switch(args.c){
                case 0 :
                    return a.findIndex( t => this.equal(JSON.stringify(t),c,n))
                case 1 :
                    return a.lastIndexOf(a.findLast( t => this.equal(JSON.stringify(t),c,n)))
                default :
                    let idx = []
                    a.forEach((t,i)=>{
                        if(this.equal(JSON.stringify(t),c,n))idx.push(i)
                    })
                    return idx
            }
        }
        else{
            switch(args.c){
                case 0 :
                    return a.findIndex( t => this.equal(t,b,n))
                case 1 :
                    return a.lastIndexOf(a.findLast( t => this.equal(t,b,n)))
                default :
                    let idx = []
                    a.forEach((t,i)=>{
                        if(this.equal(t,b,n))idx.push(i)
                    })
                    return idx
            }
        }
    }
    rmenuArraycount(args){
        const a = args.b ? args.a : JSON.parse(args.a);
        const b = this.totype(args.c,args.d);
        const n = args.e;
        let i = 0
        if( typeof b == 'object' ){
            const c = JSON.stringify(b)
            for(const t of a){
                if(this.equal(JSON.stringify(t),c,n))i++
            }
            return i
        }
        else{
            for(const t of a){
                if(this.equal(t,b,n))i++
            }
            return i
        }
    }
    rmenuArraysort(args){
        const a = args.b ? args.a :JSON.parse(args.a);
        a.sort(Scratch.Cast.compare)
        if(args.c)return args.d ? a : JSON.stringify(a)
        a.reverse()
        return args.d ? a : JSON.stringify(a)
    }
    rreporter(args){
        return args.a
    }
    rboolean(args){
        return args.a
    }
    bToBoolean(args){
        return ! [0,false,undefined,null,'','0','false','undefined','null'].includes(args.a)
    }
    rif(args){
        return args.a ? args.b : args.c
    }
    rifToBoolean(args){
        return [0,false,undefined,null,'','0','false','undefined','null'].includes(args.a) ? args.c : args.b
    }
    band(args){
        return args.a && args.b
    }
    bor(args){
        return args.a || args.b
    }
    bnot(args){
        return ! args.a
    }
    bandToBoolean(args){
        return ! ([0,false,undefined,null,'','0','false','undefined','null'].includes(args.a) || [0,false,undefined,null,'','0','false','undefined','null'].includes(args.b))
    }
    borToBoolean(args){
        return ! ([0,false,undefined,null,'','0','false','undefined','null'].includes(args.a) && [0,false,undefined,null,'','0','false','undefined','null'].includes(args.b))
    }
    bnotToBoolean(args){
        return [0,false,undefined,null,'','0','false','undefined','null'].includes(args.a)
    }
    rjoin(args){
        return String(args.a)+String(args.b)+String(args.c)
    }
    rremove(args){
        return args.a.replaceAll(args.b,'')
    }
    rinterchange(args){
        let a =''
        for(const t of String(args.a).split(args.b)){
            a+=args.c+t.replaceAll(args.c,args.b)
        }
        return a.replace(args.c,'')
    }
    rdefault(args){
        if ([undefined,null,'undefined','null',''].includes(args.a)) return args.b
        return args.a
    }
    bdefined(args){
        return ! [undefined,null,'undefined','null',''].includes(args.a)
    }
    bundefined(args){
        return [undefined,null,'undefined','null',''].includes(args.a)
    }
    bnotstrictlyequal(args){
        return args.a !== args.b
    }
    bnotcontain(args){
        return ! args.a.includes(args.b)
    }
    bnotequal(args){
        return args.a != args.b
    }
    rsign(args){
        return Math.floor(Math.random()*2) ? args.a : 0-args.a
    }
    raddition(args){
        return Number(args.a)+Number(args.b)+Number(args.c)
    }
    radditionmultiplication(args){
        return (Number(args.a)+Number(args.b))*args.c
    }
    rmod(args){
        return args.a % args.b
    }
    rnearestmultiple(args){
        return Math.round(args.a/args.b)*args.b
    }
    rround(args) {
        return (Number(args.a)).toFixed(args.b)
    }
    rrintfromto(args){
        let a = Number(args.a);
        const b = args.b-args.c
        for (let i = 0; i <= b; i++){
            a=Number(a.toFixed(args.b-i))
        }
        return a
    }
    rrinttotimes(args){
        let a = Number(args.a)
        for (let i = 0; i <= args.c; i++){
            a=Number(a.toFixed(args.b-i))
        }
        return a
    }
    rrinttimesto(args){
        let a = Number(args.a);
        const b = Number(args.b)+Number(args.c)
        for (let i = 0; i <= args.b; i++){
            a=Number(a.toFixed(b-i))
        }
        return a
    }
    rPI(args){
        return Math.PI.toFixed(args.a)
    }
    rradsin(args){
        return Math.sin(args.a)
    }
    rradcos(args){
        return Math.cos(args.a)
    }
    rradtan(args){
        return Math.tan(args.a)
    }
    rradasin(args){
        return Math.asin(args.a)
    }
    rradacos(args){
        return Math.acos(args.a)
    }
    rradatan(args){
        return Math.atan(args.a)
    }
    rsinmultiplication(args){
        return Math.sin(args.b)*Math.PI/180*args.a
    }
    rcosmultiplication(args){
        return Math.cos(args.b)*Math.PI/180*args.a
    }
    rtanmultiplication(args){
        return Math.tan(args.b)*Math.PI/180*args.a
    }
    rasindivision(args){
        return Math.asin(args.a/args.b)/Math.PI*180
    }
    racosdivision(args){
        return Math.acos(args.a/args.b)/Math.PI*180
    }
    ratandivision(args){
        return Math.atan(args.a/args.b)/Math.PI*180
    }
    rtoonehundredeighty(args){
        const a = args.a % 360
        return a+(a > -180 ? (a > 180 ? -360 : 0) : 360)
    }
    rtothreehundredsixty(args){
        let a = Number(args.a)
        while (a < 0){
            a+=360
        }
        return a % 360
    }
    raddto(args){
        const a = Number(args.a);
        const b = Number(args.b);
        const c = args.c;
        let list = [];
        let i = a + b
        while (i < c){
            list.push(i)
            i += b
        }
        return list
    }
    rJSONtypeof(args){
        return typeof JSON.parse(args.a)
    }
    bJSONtypeof(args){
        return typeof JSON.parse(args.a) == args.b
    }
    bArrayequal(args){
        return JSON.stringify(JSON.parse(args.a).sort(Scratch.Cast.compare))==JSON.stringify(JSON.parse(args.b).sort(Scratch.Cast.compare))
    }
    bArraystrictlyequal(args){
        return JSON.stringify(JSON.parse(args.a).sort(Scratch.Cast.compare))===JSON.stringify(JSON.parse(args.b).sort(Scratch.Cast.compare))
    }
    rArraysum(args){
        return JSON.parse(args.a).reduce((a, b) => a + b)
    }
    rArrayproduct(args){
        return JSON.parse(args.a).reduce((a, b) => a * b)
    }
    rArrayaverage(args){
        const a = JSON.parse(args.a);
        const sum = a.reduce((a, b) => a + b);
        return sum / a.length
    }
    rArraymax(args){
        return Math.max(...(JSON.parse(args.a)))
    }
    rArraymin(args){
        return Math.min(...(JSON.parse(args.a)))
    }
    bArrayhavebignumber(args){
        return JSON.parse(args.a).some(i => i > args.b)
    }
    bArrayhavenotsmallnumber(args){
        return JSON.parse(args.a).some(i => i >= args.b)
    }
    bArrayhavesmallnumber(args){
        return JSON.parse(args.a).some(i => i < args.b)
    }
    bArrayhavenotbignumber(args){
        return JSON.parse(args.a).some(i => i <= args.b)
    }
    bArrayhavenumber(args){
        return JSON.parse(args.a).includes(Number(args.b))
    }
    bArrayhavestr(args){
        return JSON.parse(args.a).includes(String(args.b))
    }
    bArrayhave(args){
        return JSON.parse(args.a).some(i => i == args.b)
    }
    bArrayhaveJSON(args){
        return JSON.parse(args.a).some(i => JSON.stringify(i) == args.b)
    }
    bArraybebignumber(args){
        return JSON.parse(args.a).every(i => i > args.b)
    }
    bArraybenotsmallnumber(args){
        return JSON.parse(args.a).every(i => i >= args.b)
    }
    bArraybesmallnumber(args){
        return JSON.parse(args.a).every(i => i < args.b)
    }
    bArraybenotbignumber(args){
        return JSON.parse(args.a).every(i => i <= args.b)
    }
    bArraybenumber(args){
        return JSON.parse(args.a).every(i => i === Number(args.b))
    }
    bArraybestr(args){
        const b = String(args.b)
        return JSON.parse(args.a).every(i => i === b)
    }
    bArraybe(args){
        return JSON.parse(args.a).every(i => i == args.b)
    }
    bArraybeJSON(args){
        return JSON.parse(args.a).every(i => JSON.stringify(i) == args.b)
    }
    rArrayremovebignumber(args){        
        let na=[]
        for(const t of JSON.parse(args.a)){
            if (t<=args.b)na.push(t)
        }
        return JSON.stringify(na)
    }
    rArrayremovenotsmallnumber(args){
        let na=[]
        for(const t of JSON.parse(args.a)){
            if (t<args.b)na.push(t)
        }
        return JSON.stringify(na)
    }
    rArrayremovesmallnumber(args){
        let na=[]
        for(const t of JSON.parse(args.a)){
            if (t>=args.b)na.push(t)
        }
        return JSON.stringify(na)
    }
    rArrayremovenotbignumber(args){
        let na=[]
        for(const t of JSON.parse(args.a)){
            if (t>args.b)na.push(t)
        }
        return JSON.stringify(na)
    }
    rArrayremovenumber(args){
        const b = Number(args.b)
        let na=[]
        for(const t of JSON.parse(args.a)){
            if (t!==b)na.push(t)
        }
        return JSON.stringify(na)
    }
    rArrayremovestr(args){
        let na=[];
        const b = String(args.b)
        for(const t of JSON.parse(args.a)){
            if (t!==b)na.push(t)
        }
        return JSON.stringify(na)
    }
    rArrayremove(args){
        let na=[]
        for(const t of JSON.parse(args.a)){
            if (t!=args.b)na.push(t)
        }
        return JSON.stringify(na)
    }
    rArrayremoveJSON(args){
        let na=[]
        for(const t of JSON.parse(args.a)){
            if (JSON.stringify(t)!=args.b)na.push(t)
        }
        return JSON.stringify(na)
    }
    rArrayremoveshift(args){
        let a = JSON.parse(args.a);
        a.shift()
        return JSON.stringify(a)
    }
    rArrayremovepop(args){
        let a = JSON.parse(args.a);
        a.pop()
        return JSON.stringify(a)
    }
    rArrayremoveitem(args){
        return JSON.stringify(JSON.parse(args.a).toSpliced(Number(args.b), 1))
    }
    rArrayremoveitems(args){
        let a = JSON.parse(args.a)
        for(const t of JSON.parse(args.b).sort(function(a,b){return b-a})){
            a.splice(Number(t), 1)
        }
        return JSON.stringify(a)
    }
    rArrayremoveitemtoitem(args){
        return JSON.stringify(JSON.parse(args.a).toSpliced(Number(args.b), args.c-args.b))
    }
    rArrayreserveitem(args){
        return JSON.stringify(JSON.parse(args.a).splice(Number(args.b), 1))
    }
    rArrayshift(args){
        return JSON.parse(args.a).shift()
    }
    rArraypop(args){
        return JSON.parse(args.a).pop()
    }
    rArrayitem(args){
        return JSON.parse(args.a).at(args.b)
    }
    rArrayshiftJSON(args){
        return JSON.stringify(JSON.parse(args.a).shift())
    }
    rArraypopJSON(args){
        return JSON.stringify(JSON.parse(args.a).pop())
    }
    rArrayitemJSON(args){
        return JSON.stringify(JSON.parse(args.a).at(args.b))
    }
    rArrayitems(args){
        const a = JSON.parse(args.a);
        let c = []
        for(const t of JSON.parse(args.b)){
            c.push(a.at(t))
        }
        return JSON.stringify(c)
    }
    rArrayitemtoitem(args){
        return JSON.stringify(JSON.parse(args.a).slice(args.b,args.c))
    }
    rArrayunshift(args){
        let a = JSON.parse(args.a);
        a.unshift(args.b)
        return JSON.stringify(a)
    }
    rArraypush(args){
        let a = JSON.parse(args.a);
        a.push(args.b)
        return JSON.stringify(a)
    }
    rArrayinsert(args){
        return JSON.stringify(JSON.parse(args.a).toSpliced(args.c,0,args.b))
    }
    rArrayinsertindexes(args){
        let a = JSON.parse(args.a);
        const b = args.b
        for(const t of JSON.parse(args.c).sort(function(a,b){return b-a})){
            a.splice(t,0,b)
        }
        return JSON.stringify(a)
    }
    rArrayinsertindextoindex(args){
        let a = JSON.parse(args.a);
        const b = args.b;
        const c = Number(args.c)
        for(let i = 0; i < args.d-c; i++){
            a.splice(c+i,0,b)
        }
        return JSON.stringify(a)
    }
    rArrayunshiftnumber(args){
        let a = JSON.parse(args.a);
        a.unshift(Number(args.b))
        return JSON.stringify(a)
    }
    rArraypushnumber(args){
        let a = JSON.parse(args.a);
        a.push(Number(args.b))
        return JSON.stringify(a)
    }
    rArrayinsertnumber(args){
        return JSON.stringify(JSON.parse(args.a).toSpliced(args.c,0,Number(args.b)))
    }
    rArrayinsertnumberindexes(args){
        let a = JSON.parse(args.a);
        const b = Number(args.b)
        for(const t of JSON.parse(args.c).sort(function(a,b){return b-a})){
            a.splice(t,0,b)
        }
        return JSON.stringify(a)
    }
    rArrayinsertnumberindextoindex(args){
        let a = JSON.parse(args.a);
        const b = Number(args.b);
        const c = Number(args.c)
        for(let i = 0; i < args.d-c; i++){
            a.splice(c+i,0,b)
        }
        return JSON.stringify(a)
    }
    rArrayunshiftstr(args){
        let a = JSON.parse(args.a);
        a.unshift(String(args.b))
        return JSON.stringify(a)
    }
    rArraypushstr(args){
        let a = JSON.parse(args.a);
        a.push(String(args.b))
        return JSON.stringify(a)
    }
    rArrayinsertstr(args){
        return JSON.stringify(JSON.parse(args.a).toSpliced(args.c,0,String(args.b)))
    }
    rArrayinsertstrindexes(args){
        let a = JSON.parse(args.a);
        const b = String(args.b)
        for(const t of JSON.parse(args.c).sort(function(a,b){return b-a})){
            a.splice(t,0,b)
        }
        return JSON.stringify(a)
    }
    rArrayinsertstrindextoindex(args){
        let a = JSON.parse(args.a);
        const b = String(args.b);
        const c = Number(args.c)
        for(let i = 0; i < args.d-c; i++){
            a.splice(c+i,0,b)
        }
        return JSON.stringify(a)
    }
    rArrayunshiftJSON(args){
        let a = JSON.parse(args.a);
        a.unshift(JSON.parse(args.b))
        return JSON.stringify(a)
    }
    rArraypushJSON(args){
        let a = JSON.parse(args.a);
        a.push(JSON.parse(args.b))
        return JSON.stringify(a)
    }
    rArrayinsertJSON(args){
        return JSON.stringify(JSON.parse(args.a).toSpliced(args.c,0,JSON.parse(args.b)))
    }
    rArrayinsertJSONindexes(args){
        let a = JSON.parse(args.a);
        const b =JSON.parse(args.b)
        for(const t of JSON.parse(args.c).sort(function(a,b){return b-a})){
            a.splice(t,0,b)
        }
        return JSON.stringify(a)
    }
    rArrayinsertJSONindextoindex(args){
        let a = JSON.parse(args.a);
        const b =JSON.parse(args.b);
        const c = Number(args.c)
        for(let i = 0; i < args.d-c; i++){
            a.splice(c+i,0,b)
        }
        return JSON.stringify(a)
    }
    rArraymove(args){
        const a = JSON.parse(args.a)
        return args.b>args.c ? JSON.stringify(a.toSpliced(args.b,1).toSpliced(args.c,0,a.at(args.b))) : JSON.stringify(a.toSpliced(args.c,0,args.b).toSpliced(args.b,a.at(args.b)))
    }
    rArrayinterchange(args){
        const a = JSON.parse(args.a)
        return JSON.stringify(a.with(args.b,a.at(args.c)).with(args.c,a.at(args.b)))
    }
    rArrayreplace(args){
        return JSON.stringify(JSON.parse(args.a).with(args.b,args.c))
    }
    rArrayreplaceindexes(args){
        let a = JSON.parse(args.a);
        const c = args.c
        for(const t of JSON.parse(args.b)){
            a=a.with(t,c)
        }
        return JSON.stringify(a)
    }
    rArrayreplaceindextoindex(args){
        let a = JSON.parse(args.a);
        a.fill(args.d,args.b,args.c)
        return JSON.stringify(a)
    }
    rArrayreplacenumber(args){
        return JSON.stringify(JSON.parse(args.a).with(args.b,args.c))
    }
    rArrayreplaceindexesnumber(args){
        let a = JSON.parse(args.a);
        const c = Number(args.c)
        for(const t of JSON.parse(args.b)){
            a=a.with(t,c)
        }
        return JSON.stringify(a)
    }
    rArrayreplaceindextoindexnumber(args){
        let a = JSON.parse(args.a);
        a.fill(Number(args.d),args.b,args.c)
        return JSON.stringify(a)
    }
    rArrayreplacestr(args){
        return JSON.stringify(JSON.parse(args.a).with(args.b,String(args.c)))
    }
    rArrayreplaceindexesstr(args){
        let a = JSON.parse(args.a)
        const c = String(args.c)
        for(const t of JSON.parse(args.b)){
            a=a.with(t,c)
        }
        return JSON.stringify(a)
    }
    rArrayreplaceindextoindexstr(args){
        let a = JSON.parse(args.a);
        a.fill(String(args.d),args.b,args.c)
        return JSON.stringify(a)
    }
    rArrayreplaceJSON(args){
        return JSON.stringify(JSON.parse(args.a).with(args.b,JSON.parse(args.c)))
    }
    rArrayreplaceindexesJSON(args){
        let a = JSON.parse(args.a);
        const c = JSON.parse(args.c)
        for(const t of JSON.parse(args.b)){
            a=a.with(t,c)
        }
        return JSON.stringify(a)
    }
    rArrayreplaceindextoindexJSON(args){
        let a = JSON.parse(args.a);
        a.fill(JSON.parse(args.d),args.b,args.c)
        return JSON.stringify(a)
    }
    rArrayplusindex(args){
        let a = JSON.parse(args.a);
        a=a.with(args.b,a.at(args.b)+Number(args.c))
        return JSON.stringify(a)
    }
    rArrayplusindexes(args){
        let a = JSON.parse(args.a);
        const b = JSON.parse(args.b);
        const c = Number(args.c)
        for(const t of b){
            a=a.with(t,a.at(t)+c)
        }
        return JSON.stringify(a)
    }
    rArrayplusindextoindex(args){
        let a = JSON.parse(args.a);
        const b = Number(args.b);
        const d = Number(args.d)
        for(let i = 0; i < args.c-b; i++){
            a=a.with(b+i,a.at(b+i)+d)
        }
        return JSON.stringify(a)
    }
    rArrayplus(args){
        const b = Number(args.b)
        return JSON.stringify(JSON.parse(args.a).map(t => t+b))
    }
    rArrayminus(args){
        return JSON.stringify(JSON.parse(args.a).map(t => t-args.b))
    }
    rArrayindex(args){
        return JSON.parse(args.a).indexOf(args.b)
    }
    rArrayindexnumber(args){
        return JSON.parse(args.a).indexOf(Number(args.b))
    }
    rArrayindexstr(args){
        return JSON.parse(args.a).indexOf(String(args.b))
    }
    rArrayindexJSON(args){
        return JSON.parse(args.a).indexOf(JSON.parse(args.b))
    }
    rArraylastindex(args){
        return JSON.parse(args.a).lastIndexOf(args.b)
    }
    rArraylastindexnumber(args){
        return JSON.parse(args.a).lastIndexOf(Number(args.b))
    }
    rArraylastindexstr(args){
        return JSON.parse(args.a).lastIndexOf(String(args.b))
    }
    rArraylastindexJSON(args){
        return JSON.parse(args.a).lastIndexOf(JSON.parse(args.b))
    }
    rArrayallindex(args){
        const b = args.b;
        let idx = []
        JSON.parse(args.a).forEach((t,i)=>{
            if(t===b)idx.push(i)
        })
        return JSON.stringify(idx)
    }
    rArrayallindexnumber(args){
        const b = Number(args.b);
        let idx = []
        JSON.parse(args.a).forEach((t,i)=>{
            if(t===b)idx.push(i)
        })
        return JSON.stringify(idx)
    }
    rArrayallindexstr(args){
        let idx = [];
        const b = String(args.b)
        JSON.parse(args.a).forEach((t,i)=>{
            if(t===b)idx.push(i)
        })
        return JSON.stringify(idx)
    }
    rArrayallindexJSON(args){
        let idx = []
        JSON.parse(args.a).forEach((t,i)=>{
            if(JSON.stringify(t)==args.b)idx.push(i)
        })
        return JSON.stringify(idx)
    }
    rArrayfindIndexbignumber(args){
        return JSON.parse(args.a).findIndex(i => i > args.b)
    }
    rArrayfindIndexnotsmallnumber(args){
        return JSON.parse(args.a).findIndex(i => i >= args.b)
    }
    rArrayfindIndexsmallnumber(args){
        return JSON.parse(args.a).findIndex(i => i < args.b)
    }
    rArrayfindIndexnotbignumber(args){
        return JSON.parse(args.a).findIndex(i => i <= args.b)
    }
    rArraycountbignumber(args){
        const b =Number(args.b);
        let c = 0
        for(const t of JSON.parse(args.a)){
            if(t>b)c+=1
        }
        return c
    }
    rArraycountnotsmallnumber(args){
        const b =Number(args.b);
        let c = 0
        for(const t of JSON.parse(args.a)){
            if(t>=b)c+=1
        }
        return c
    }
    rArraycountsmallnumber(args){
        const b =Number(args.b);
        let c = 0
        for(const t of JSON.parse(args.a)){
            if(t<b)c+=1
        }
        return c
    }
    rArraycountnotbignumber(args){
        const b =Number(args.b);
        let c = 0
        for(const t of JSON.parse(args.a)){
            if(t<=b)c+=1
        }
        return c
    }
    rArraycountnumber(args){
        const b =Number(args.b);
        let c = 0
        for(const t of JSON.parse(args.a)){
            if(t===b)c+=1
        }
        return c
    }
    rArraycountstr(args){
        let c = 0;
        const b = String(args.b)
        for(const t of JSON.parse(args.a)){
            if(t===b)c+=1
        }
        return c
    }
    rArraycount(args){
        let c = 0
        for(const t of JSON.parse(args.a)){
            if(t==args.b)c+=1
        }
        return c
    }
    rArraycountJSON(args){
        let c = 0
        for(const t of JSON.parse(args.a)){
            if(JSON.stringify(t)==args.b)c+=1
        }
        return c
    }
    rArraysortnaturalOrder(args){
        return JSON.stringify(JSON.parse(args.a).sort(Scratch.Cast.compare))
    }
    rArraysortreverseOrder(args){
        return JSON.stringify(JSON.parse(args.a).sort(Scratch.Cast.compare).reverse())
    }
    rArrayreverse(args){
        return JSON.stringify(JSON.parse(args.a).reverse())
    }
    bArrayclear(args){
        return args.a == '[]'
    }
    rArraylength(args){
        return JSON.parse(args.a).length
    }
    bisArray(args){
        return Array.isArray(JSON.parse(args.a))
    }
    rObjectvalue(args){
        return JSON.parse(args.a)[args.b]
    }
    rObjectvalueJSON(args){
        return JSON.stringify(JSON.parse(args.a)[args.b])
    }
    rObjectkey(args){
        const a = JSON.parse(args.a);
        const keys = Object.keys(a);
        const values = Object.values(a)
        return keys[values.indexOf(args.b)]
    }
    rObjectlastkey(args){
        const a = JSON.parse(args.a);
        const keys = Object.keys(a);
        const values = Object.values(a)
        return keys[values.lastIndexOf(args.b)]
    }
    rObjectallkey(args){
        const a = JSON.parse(args.a);
        const b = args.b;
        const keys = Object.keys(a);
        let key = []
        Object.values(a).forEach((t,i)=>{
            if(t===b)key.push(keys[i])
        })
        return JSON.stringify(key)
    }
    rObjectkeynumber(args){
        const a = JSON.parse(args.a);
        const keys = Object.keys(a);
        const values = Object.values(a)
        return keys[values.indexOf(Number(args.b))]
    }
    rObjectlastkeynumber(args){
        const a = JSON.parse(args.a);
        const keys = Object.keys(a);
        const values = Object.values(a)
        return keys[values.lastIndexOf(Number(args.b))]
    }
    rObjectallkeynumber(args){
        const a = JSON.parse(args.a);
        const b =Number(args.b);
        const keys = Object.keys(a);
        let key = []
        Object.values(a).forEach((t,i)=>{
            if(t===b)key.push(keys[i])
        })
        return JSON.stringify(key)
    }
    rObjectkeystr(args){
        const a = JSON.parse(args.a);
        const keys = Object.keys(a);
        const values = Object.values(a)
        return keys[values.indexOf(String(args.b))]
    }
    rObjectlastkeystr(args){
        const a = JSON.parse(args.a);
        const keys = Object.keys(a);
        const values = Object.values(a)
        return keys[values.lastIndexOf(String(args.b))]
    }
    rObjectallkeystr(args){
        const a = JSON.parse(args.a);
        const b = String(args.b);
        const keys = Object.keys(a);
        let key = []
        Object.values(a).forEach((t,i)=>{
            if(t===b)key.push(keys[i])
        })
        return JSON.stringify(key)
    }
    rObjectkeyJSON(args){
        const a = JSON.parse(args.a);
        const keys = Object.keys(a);
        const values = Object.values(a)
        return keys[values.indexOf(JSON.parse(args.b))]
    }
    rObjectlastkeyJSON(args){
        const a = JSON.parse(args.a);
        const keys = Object.keys(a);
        const values = Object.values(a)
        return keys[values.lastIndexOf(JSON.parse(args.b))]
    }
    rObjectallkeyJSON(args){
        const a = JSON.parse(args.a);
        const b =JSON.parse(args.b);
        const keys = Object.keys(a);
        let key = []
        Object.values(a).forEach((t,i)=>{
            if(t===b)key.push(keys[i])
        })
        return JSON.stringify(key)
    }
    rObjectputkey(args){
        let a=JSON.parse(args.a);
        a[args.b]=args.c
        return JSON.stringify(a)
    }
    rObjectputkeynumber(args){
        let a=JSON.parse(args.a);
        a[args.b]=Number(args.c)
        return JSON.stringify(a)
    }
    rObjectputkeystr(args){
        let a=JSON.parse(args.a);
        a[args.b]=String(args.c)
        return JSON.stringify(a)
    }
    rObjectputkeyJSON(args){
        let a=JSON.parse(args.a);
        a[args.b]=JSON.parse(args.c)
        return JSON.stringify(a)
    }
    rObjectpluskey(args){
        let a=JSON.parse(args.a);
        a[args.b]+=Number(args.c)
        return JSON.stringify(a)
    }
    rObjectplus(args){
        let a=JSON.parse(args.a);
        const b = Number(args.b)
        for(const t of Object.keys(a)){
            a[t] += b
        }
        return JSON.stringify(a)
    }
    rObjectputAll(args){
        return JSON.stringify(Object.assign(JSON.parse(args.b),JSON.parse(args.a)))
    }
    rObjectplusObject(args){
        let a = JSON.parse(args.a);
        const b = JSON.parse(args.b)
        for(const t of Object.keys(b)){
            if(a.hasOwnProperty(t)){
                a[t]+=b[t]
            }
            else {
                a[t]=b[t]
            }
        }
        return JSON.stringify(a)
    }
    rObjectremove(args){
        let a=JSON.parse(args.a);
        delete a[args.b]
        return JSON.stringify(a)
    }
    rObjectremovekeys(args){
        let a=JSON.parse(args.a)
        for(const t of JSON.parse(args.b)){
            delete a[t]
        }
        return JSON.stringify(a)
    }
    rObjectkeys(args){
        return JSON.stringify(Object.keys(JSON.parse(args.a)))
    }
    rObjectvalues(args){
        return JSON.stringify(Object.values(JSON.parse(args.a)))
    }
    rObjectentries(args){
        return JSON.stringify(Object.entries(JSON.parse(args.a)))
    }
    rObjectfromentries(args){
        return JSON.stringify(Object.fromEntries(JSON.parse(args.a)))
    }
    bObjecthasownproperty(args){
        return JSON.parse(args.a).hasOwnProperty(args.b)
    }
    bObjectclear(args){
        return args.a == '{}'
    }
    rObjectlength(args){
        return Object.keys(JSON.parse(args.a)).length
    }
    bisObject(args){
        const a = JSON.parse(args.a)
        return ! Array.isArray(a) && typeof a == 'object'
    }
}

window.tempExt = {
    Extension: simpleOperators,
    info: {
        name: "simpleOperators.name",
        description: "simpleOperators.descp",
        extensionId: simpleOperatorsextensionId,
        iconURL: simpleOperatorspicture,
        insetIconURL: simpleOperatorsicon,
        featured: true,
        disabled: false,
        collaborator: "bilioicik @ CCW",
        collaboratorURL: "https://www.ccw.site/student/6218cd094daafc57cebfc1d3"
    },
    l10n: {
        "zh-cn": {
            "simpleOperators.name": "简单运算",
            "simpleOperators.descp": "为运行添绿化"
        },
        en: {
            "simpleOperators.name": "Simple Operators",
            "simpleOperators.descp": "Green for Go"
        }
    }
}