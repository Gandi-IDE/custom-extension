;(function (Scratch) {

    const {Cast} = Scratch;
    
    const OperatorsPropicture = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI2MDAiIGhlaWdodD0iMzc1IiB2aWV3Qm94PSIwLDAsNjAwLDM3NSI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGN4PSIyODcuMDg1OTQiIGN5PSIyMzcuNiIgcj0iMTE2LjQ4MTQ4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzU5YzA1OSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzU5YzA1OSIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48cmFkaWFsR3JhZGllbnQgY3g9IjI0MCIgY3k9IjEyMi40IiByPSIxODcuNjQ4MTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNTljMDU5Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNTljMDU5IiBzdG9wLW9wYWNpdHk9IjAiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MCw3LjUpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0tNjAsMzY3LjV2LTM3NWg2MDB2Mzc1eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMTcwLjYwNDQ2LDE5Ny42TTIxMC42MDQ0NiwxOTcuNmgxNTIuOTYyOTZjMjIuMDkxMzksMCA0MCwxNy45MDg2MSA0MCw0MGMwLDIyLjA5MTM5IC0xNy45MDg2MSw0MCAtNDAsNDBoLTE1Mi45NjI5NmMtMjIuMDkxMzksMCAtNDAsLTE3LjkwODYxIC00MCwtNDBjMCwtMjIuMDkxMzkgMTcuOTA4NjEsLTQwIDQwLC00MHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0idXJsKCNjb2xvci0xKSIgc3Ryb2tlLXdpZHRoPSIyMCIvPjxwYXRoIGQ9Ik0xNzAuNjA0NDYsMTk3LjZNMjEwLjYwNDQ2LDE5Ny42aDE1Mi45NjI5NmMyMi4wOTEzOSwwIDQwLDE3LjkwODYxIDQwLDQwYzAsMjIuMDkxMzkgLTE3LjkwODYxLDQwIC00MCw0MGgtMTUyLjk2Mjk2Yy0yMi4wOTEzOSwwIC00MCwtMTcuOTA4NjEgLTQwLC00MGMwLC0yMi4wOTEzOSAxNy45MDg2MSwtNDAgNDAsLTQweiIgZmlsbD0iIzU5YzA1OSIgc3Ryb2tlPSIjNDc5YTQ3IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNNTIuMzUxODUsODIuNE05Mi4zNTE4NSw4Mi40aDI5NS4yOTYzbDQwLDQwbC00MCw0MGgtMjk1LjI5NjNsLTQwLC00MHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0idXJsKCNjb2xvci0yKSIgc3Ryb2tlLXdpZHRoPSIyMCIvPjxwYXRoIGQ9Ik01Mi4zNTE4NSw4Mi40TTkyLjM1MTg1LDgyLjRoMjk1LjI5NjNsNDAsNDBsLTQwLDQwaC0yOTUuMjk2M2wtNDAsLTQweiIgZmlsbD0iIzU5YzA1OSIgc3Ryb2tlPSIjNDc5YTQ3IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNNzYuNzg2NzcsMjQ1LjFjLTQuMTQyMTQsMCAtNy41LC0xLjExOTI5IC03LjUsLTIuNDk5OTl2LTkuOTk5OTljMCwtMS4zODA3MiAzLjM1Nzg2LC0yLjQ5OTk5IDcuNSwtMi40OTk5OWg3LjV2LTcuNWMwLC00LjE0MjE0IDEuMTE5MjgsLTcuNSAyLjQ5OTk5LC03LjVoOS45OTk5OWMxLjM4MDcyLDAgMi40OTk5OSwzLjM1Nzg2IDIuNDk5OTksNy41djcuNWg3LjUwMDAyYzQuMTQyMTUsMCA3LjUsMS4xMTkyOCA3LjUsMi40OTk5OXY5Ljk5OTk5YzAsMS4zODA3MiAtMy4zNTc4NSwyLjQ5OTk5IC03LjUsMi40OTk5OWgtNy41MDAwMnY3LjUwMDAxYzAsNC4xNDIxNCAtMS4xMTkyOCw3LjUgLTIuNDk5OTksNy41aC05Ljk5OTk5Yy0xLjM4MDcyLDAgLTIuNDk5OTksLTMuMzU3ODYgLTIuNDk5OTksLTcuNXYtNy41MDAwMXoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzM4OTQzOCIgc3Ryb2tlLXdpZHRoPSIyIi8+PGcgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjNDc5YTQ3IiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIGQ9Ik0zNDMuMTc5ODUsMTM1Ljk3NjM0Yy0xLjQ5OTU5LDAgLTIuNzE1MjUsLTEuMjE1NjcgLTIuNzE1MjUsLTIuNzE1MjZ2LTAuMDAwMDFjMCwtMC4wMDIxNSAwLC0wLjAwNDMgMC4wMDAwMSwtMC4wMDY0NWMwLC0wLjAwMDAxIDAsLTAuMDAwMDEgMCwtMC4wMDAwMnYtMTMuNTY5ODJoLTAuMDAwMDF2LTguMTQ1NzdjMCwtMS40OTk1OSAxLjIxNTY2LC0yLjcxNTI1IDIuNzE1MjUsLTIuNzE1MjVjMC4wMDIxNiwwIDAuMDA0MzIsMCAwLjAwNjQ4LDAuMDAwMDFoMTMuNTY5ODJ2LTAuMDAwMDFoOC4xNDU3OGMxLjQ5OTU5LDAgMi43MTUyNSwxLjIxNTY3IDIuNzE1MjUsMi43MTUyNWMwLDAuMDAyMTYgMCwwLjAwNDMyIDAsMC4wMDY0N3YxMy41Njk4MnYwdjUuNDMwNTJoMC4wMDAwMXYxMy41NzYyN2MwLDAuMDA1MjggLTAuMDAwMDIsMC4wMTA1NyAtMC4wMDAwNSwwLjAxNTg0djIuNjk5NDJoMC4wMDAwM3Y4LjE0NTc3YzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI1IC0yLjcxNTI1LDIuNzE1MjVjLTAuMDAyMTYsMCAtMC4wMDQzLC0wLjAwMDAxIC0wLjAwNjQ2LC0wLjAwMDAxaC0yMS43MDkxM2MtMC4wMDIxNiwwLjAwMDAxIC0wLjAwNDMxLDAuMDAwMDEgLTAuMDA2NDcsMC4wMDAwMWMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY2IC0yLjcxNTI2LC0yLjcxNTI1YzAsLTEuNDk5NTkgMS4yMTU2NywtMi43MTUyNiAyLjcxNTI2LC0yLjcxNTI2YzAuMDAwMDEsMCAwLjAwMDAxLDAgMC4wMDAwMiwwdjBoMTYuMzAwNjRjMS40OTUzOCwtMC4wMDQ5MyAyLjcwNjEsLTEuMjE4NyAyLjcwNjEsLTIuNzE1MjVoMC4wMDAwMnYtMTAuODYxMDJoLTAuMDAwMDJ2LTAuMDAwMDFoLTAuMDAwMDFjMCwtMS40OTY1NCAtMS4yMTA3MSwtMi43MTAzMSAtMi43MDYxLC0yLjcxNTI1aC0xNi4zMDA2M3Ywek0zNDguNjAxMjUsMTE0LjI1NDMxYy0xLjQ5NTM4LDAuMDA0OTQgLTIuNzA2MSwxLjIxODcxIC0yLjcwNjEsMi43MTUyNGgtMC4wMDAwNHYxMC44NzAxNWMwLjAwNDkzLDEuNDk1MzggMS4yMTg3MSwyLjcwNjExIDIuNzE1MjUsMi43MDYxMXYwLjAwMDAzaDEwLjg3MDE1YzEuNDk1MzgsLTAuMDA0OTQgMi43MDYxLC0xLjIxODcgMi43MDYxLC0yLjcxNTI0aDAuMDAwMDR2LTEwLjg3MDE1Yy0wLjAwNDkzLC0xLjQ5NTM4IC0xLjIxODcsLTIuNzA2MSAtMi43MTUyNCwtMi43MDYxdi0wLjAwMDAzeiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iLz48cGF0aCBkPSJNMTEyLjM4Mjg2LDExMS41MzkwOGMwLC0xLjQ5OTU5IDEuMjE1NjYsLTIuNzE1MjUgMi43MTUyNSwtMi43MTUyNWMwLjAwMjE2LDAgMC4wMDQzMSwwLjAwMDAxIDAuMDA2NDYsMC4wMDAwMWgyMS43MDkxM2MwLjAwMjE1LC0wLjAwMDAxIDAuMDA0MzEsLTAuMDAwMDEgMC4wMDY0NywtMC4wMDAwMWMxLjQ5OTU5LDAgMi43MTUyNiwxLjIxNTY2IDIuNzE1MjYsMi43MTUyNWMwLDEuNDk5NTkgLTEuMjE1NjcsMi43MTUyNiAtMi43MTUyNiwyLjcxNTI2Yy0wLjAwMDAxLDAgLTAuMDAwMDEsMCAtMC4wMDAwMiwwdjAuMDAwMDFoLTE2LjMwMDY0Yy0xLjQ5NTM4LDAuMDA0OTQgLTIuNzA2MSwxLjIxODcxIC0yLjcwNjEsMi43MTUyNGgtMC4wMDAwNXYwLjAwMDAyaDAuMDAwMDVjMCwxLjQ5MzEyIDEuMjA1MTgsMi43MDQ3NiAyLjY5NTg0LDIuNzE1MTloMTYuMzA0NDFjMC4wMDIxNSwwIDAuMDA0MzEsLTAuMDAwMDEgMC4wMDY0NiwtMC4wMDAwMWMxLjQ5OTU5LDAgMi43MTUyNSwxLjIxNTY2IDIuNzE1MjUsMi43MTUyNXYxMC44NjEwNGMwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNSAtMi43MTUyNSwyLjcxNTI1Yy0wLjAwMjE1LDAgLTAuMDA0MzEsMCAtMC4wMDY0NiwwaC0yMS43MDkxMmMtMC4wMDIxNiwwLjAwMDAxIC0wLjAwNDMxLDAgLTAuMDA2NDcsMGMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY2IC0yLjcxNTI2LC0yLjcxNTI1YzAsLTEuNDk5NTkgMS4yMTU2NywtMi43MTUyNiAyLjcxNTI2LC0yLjcxNTI2YzAuMDAwMDEsMCAwLjAwMDAxLDAgMC4wMDAwMiwwdi0wLjAwMDAxaDE2LjMwMDY0YzEuNDk1MzgsLTAuMDA0OTQgMi43MDYxLC0xLjIxODcgMi43MDYxLC0yLjcxNTI0aDAuMDAwMDV2LTAuMDAwMDJoLTAuMDAwMDVjMCwtMS40OTMxMiAtMS4yMDUxOSwtMi43MDQ3NiAtMi42OTU4NCwtMi43MTUxOWgtMTYuMzA0NGMtMC4wMDIxNiwwIC0wLjAwNDMxLDAuMDAwMDEgLTAuMDA2NDYsMC4wMDAwMWMtMC45MDkwNCwwIC0xLjcxMzc0LC0wLjQ0NjcyIC0yLjIwNjU2LC0xLjEzMjZjLTAuMzIwMTksLTAuNDQ1NTkgLTAuNTA4NzUsLTAuOTkyMTQgLTAuNTA4NzUsLTEuNTgyNzNjMCwtMC4wMDU3MSAwLjAwMDAxLC0wLjAxMTQxIDAuMDAwMDUsLTAuMDE3MTF6Ii8+PHBhdGggZD0iTTE0Ny42ODExOCwxMzUuOTc2NGMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY2IC0yLjcxNTI2LC0yLjcxNTI1YzAsLTAuMDAyMTYgMCwtMC4wMDQzMiAwLjAwMDAxLC0wLjAwNjQ3di0xMy41Njk4MmgtMC4wMDAwMXYtOC4xNDU3N2MwLC0xLjQ5OTU5IDEuMjE1NjcsLTIuNzE1MjUgMi43MTUyNiwtMi43MTUyNWMwLjAwMjE1LDAgMC4wMDQzMiwwIDAuMDA2NDcsMC4wMDAwMWgxMy41Njk4MnYtMC4wMDAwMWg4LjE0NTc4YzEuNDk5NTksMCAyLjcxNTI1LDEuMjE1NjcgMi43MTUyNSwyLjcxNTI1YzAsMC4wMDIxNiAwLDAuMDA0MzIgLTAuMDAwMDEsMC4wMDY0N3YxMy41Njk4MmgwLjAwMDAxdjguMTQ1NzhjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjUgLTIuNzE1MjUsMi43MTUyNWMtMC4wMDIxNSwwIC0wLjAwNDMyLDAgLTAuMDA2NDcsLTAuMDAwMDFoLTEzLjU2OTgydjAuMDAwMDF6TTE1My4xMDI1OSwxMTQuMjU0MzVjLTEuNDk1MzgsMC4wMDQ5NCAtMi43MDYxLDEuMjE4NzEgLTIuNzA2MSwyLjcxNTI0aC0wLjAwMDA0djEwLjg3MDE1YzAuMDA0OTMsMS40OTUzOCAxLjIxODcxLDIuNzA2MSAyLjcxNTI1LDIuNzA2MXYwLjAwMDA0aDEwLjg3MDE1YzEuNDk1MzgsLTAuMDA0OTQgMi43MDYxMSwtMS4yMTg3IDIuNzA2MTEsLTIuNzE1MjRoMC4wMDAwM3YtMTAuODcwMTZjLTAuMDA0OTMsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI1LC0yLjcwNjF2LTAuMDAwMDR6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIvPjxwYXRoIGQ9Ik0xOTEuMTI1MjgsMTA4LjgyMzgyYzAuMDA1MjgsMCAwLjAxMDU3LDAuMDAwMDIgMC4wMTU4NCwwLjAwMDA1aDIuNjk5NDJ2LTAuMDAwMDNoOC4xNDU3OGMxLjQ5OTU5LDAgMi43MTUyNSwxLjIxNTY2IDIuNzE1MjUsMi43MTUyNWMwLDAuMDAyMTYgLTAuMDAwMDEsMC4wMDQzMSAtMC4wMDAwMSwwLjAwNjQ3djIxLjcwOTEzYzAuMDAwMDEsMC4wMDIxNiAwLjAwMDAxLDAuMDA0MzIgMC4wMDAwMSwwLjAwNjQ3YzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI1IC0yLjcxNTI1LDIuNzE1MjVjLTEuNDk5NTksMCAtMi43MTUyNiwtMS4yMTU2NiAtMi43MTUyNiwtMi43MTUyNWMwLC0wLjAwMDAxIDAsLTAuMDAwMDIgMCwtMC4wMDAwM2gtMC4wMDAwMXYtMTYuMzAwNjNjLTAuMDA0OTMsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI0LC0yLjcwNjF2LTAuMDAwMDFoLTAuMDAwMDRjLTEuNDk2NTQsMCAtMi43MTAzMSwxLjIxMDcyIC0yLjcxNTI0LDIuNzA2MTF2MTYuMjk0MThjMC4wMDAwMSwwLjAwMjE2IDAuMDAwMDEsMC4wMDQzMSAwLjAwMDAxLDAuMDA2NDdjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjYgLTIuNzE1MjUsMi43MTUyNmMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY3IC0yLjcxNTI2LC0yLjcxNTI2YzAsLTAuMDAwMDEgMCwtMC4wMDAwMSAwLC0wLjAwMDAyaC0wLjAwMDAxdi0xNi4zMDA2M2MtMC4wMDQ5MywtMS40OTUzOCAtMS4yMTg3LC0yLjcwNjExIC0yLjcxNTI0LC0yLjcwNjExaC0wLjAwMDAxdjAuMDAwMDFjLTEuNDk2NTQsMCAtMi43MTAzMSwxLjIxMDcxIC0yLjcxNTI0LDIuNzA2MXYxNi4zMDA2NGgtMC4wMDAwMWMwLDAuMDAwMDEgMCwwLjAwMDAyIDAsMC4wMDAwM2MwLDEuNDk5NTkgLTEuMjE1NjcsMi43MTUyNSAtMi43MTUyNiwyLjcxNTI1Yy0xLjQ5OTU5LDAgLTIuNzE1MjUsLTEuMjE1NjYgLTIuNzE1MjUsLTIuNzE1MjVjMCwtMC4wMDIxNiAwLC0wLjAwNDMyIDAuMDAwMDEsLTAuMDA2NDd2LTE5LjAwMDNoLTAuMDAwMDFjMCwwIDAsLTAuMDAwMDIgMCwtMC4wMDAwNXYtNS40MzA1MXoiLz48cGF0aCBkPSJNMjM3LjI4NDYzLDEyMi4zODI5NWMwLjAwMDA0LDAuMDA1NyAwLjAwMDA2LDAuMDExNDEgMC4wMDAwNiwwLjAxNzEyYzAsMC4yNTM3OCAtMC4wMzQ4MiwwLjQ5OTQzIC0wLjA5OTkzLDAuNzMyNDJjLTAuMDg2NDIsMC4zMDkyNCAtMC4yMjYyMSwwLjU5NjE5IC0wLjQwODgyLDAuODUwMzJjLTAuNDkyODIsMC42ODU4OCAtMS4yOTc1MiwxLjEzMjU5IC0yLjIwNjU1LDEuMTMyNTljLTAuMDAyMTUsMCAtMC4wMDQzMSwtMC4wMDAwMSAtMC4wMDY0NywtMC4wMDAwMWgtMTYuMzA0NDFjLTEuNDkwNjYsMC4wMTA0MyAtMi42OTU4NCwxLjIyMjA3IC0yLjY5NTg0LDIuNzE1MTloLTAuMDAwMDV2MC4wMDAwM2gwLjAwMDA1YzAsMS40OTY1NCAxLjIxMDcyLDIuNzEwMzEgMi43MDYxMSwyLjcxNTI0aDE2LjMwMDYzdjAuMDAwMDFjMC4wMDAwMSwwIDAuMDAwMDIsMCAwLjAwMDAzLDBjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NyAyLjcxNTI2LDIuNzE1MjZjMCwxLjQ5OTU5IC0xLjIxNTY3LDIuNzE1MjUgLTIuNzE1MjYsMi43MTUyNWMtMC4wMDIxNSwwIC0wLjAwNDMyLDAuMDAwMDEgLTAuMDA2NDcsMGgtMjEuNzA5MTNjLTAuMDAyMTUsMCAtMC4wMDQzLDAgLTAuMDA2NDYsMGMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY1IC0yLjcxNTI2LC0yLjcxNTI1di0xMC44NTE4NGMtMC4wMDAwMSwtMC4wMDMwNSAtMC4wMDAwMSwtMC4wMDYwOSAtMC4wMDAwMSwtMC4wMDkxNHYtMTAuODYxMDVjMCwtMS40OTk1OSAxLjIxNTY2LC0yLjcxNTI1IDIuNzE1MjUsLTIuNzE1MjVjMC4wMDIxNSwwIDAuMDA0MzEsMC4wMDAwMSAwLjAwNjQ2LDAuMDAwMDFoMjEuNzA5MTNjMC4wMDIxNSwtMC4wMDAwMSAwLjAwNDMxLC0wLjAwMDAxIDAuMDA2NDcsLTAuMDAwMDFjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NiAyLjcxNTI2LDIuNzE1MjVjMCwwLjAwNDgyIC0wLjAwMDAxLDAuMDA5NjUgLTAuMDAwMDQsMC4wMTQ0N3pNMjI5LjE1ODIzLDExOS42ODQ4MWMxLjQ5MDY2LC0wLjAxMDQzIDIuNjk1ODQsLTEuMjIyMDggMi42OTU4NCwtMi43MTUxOWgwLjAwMDA1di0wLjAwMDAyaC0wLjAwMDA1YzAsLTEuNDk2NTQgLTEuMjEwNzIsLTIuNzEwMzEgLTIuNzA2MTEsLTIuNzE1MjRoLTEwLjg4M2MtMS40OTM2NCwwLjAwNjk3IC0yLjcwMjMxLDEuMjE5OTUgLTIuNzAyMzEsMi43MTUyM2gtMC4wMDAwNXYwLjAwMDAyaDAuMDAwMDVjMCwxLjQ5Mzg5IDEuMjA2NDIsMi43MDYgMi42OTgxNCwyLjcxNTJ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIvPjxwYXRoIGQ9Ik0yNDguMTQ1OCw4OS44MTY4OWMwLC0xLjQ5OTU5IDEuMjE1NjYsLTIuNzE1MjYgMi43MTUyNSwtMi43MTUyNnYwYzEuNDk5NTksMCAyLjcxNTI2LDEuMjE1NjcgMi43MTUyNiwyLjcxNTI2YzAsMC4wMDAwMSAwLDAuMDAwMDEgMCwwLjAwMDAydjB2MTYuMzAwNjNjMC4wMDQ5MywxLjQ5NTM4IDEuMjE4NzEsMi43MDYxMSAyLjcxNTI1LDIuNzA2MTF2MC4wMDAwNWgwLjAwOTEyYzEuNDk1MzgsMC4wMDQ5NCAyLjcwNjEsMS4yMTg3IDIuNzA2MSwyLjcxNTI0aDAuMDAwMDV2MC4wMDAwM2gtMC4wMDAwNWMwLDAuMDAwMDIgMCwwLjAwMDA0IDAsMC4wMDAwNmgwLjAwMDA1djAuMDAwMDNoLTAuMDAwMDVjMCwxLjQ5NjU0IC0xLjIxMDcxLDIuNzEwMyAtMi43MDYxLDIuNzE1MjRoLTAuMDA5MTJ2MC4wMDAwNWMtMS40OTM0OCwwIC0yLjcwNTM1LDEuMjA1NzkgLTIuNzE1MiwyLjY5Njk3djEwLjg4ODRjMC4wMDQ5MywxLjQ5NTM4IDEuMjE4NzEsMi43MDYxIDIuNzE1MjUsMi43MDYxdjAuMDAwMDVoMC4wMDkxMmMxLjQ5NTM4LDAuMDA0OTQgMi43MDYxLDEuMjE4NzEgMi43MDYxLDIuNzE1MjRoMC4wMDAwNXYwLjAwMDAyaC0wLjAwMDA1YzAsMS40OTY1NCAtMS4yMTA3MSwyLjcxMDMxIC0yLjcwNjEsMi43MTUyNGMtMC4wMDAwMSwwIC01LjQzOTY2LDAgLTUuNDM5NjcsMGMtMC40NDk0NiwwIC0wLjg3MzQyLC0wLjEwOTIxIC0xLjI0Njc4LC0wLjMwMjUzYy0wLjg3MjM3LC0wLjQ1MTY4IC0xLjQ2ODU2LC0xLjM2MjU5IC0xLjQ2ODU2LC0yLjQxMjc2YzAsLTAuMDAwMDEgMCwtMC4wMDAwMiAwLC0wLjAwMDAzdjB2LTE2LjMwMDYzYy0wLjAwNDkzLC0xLjQ5NTM4IC0xLjIxODcsLTIuNzA2MSAtMi43MTUyNSwtMi43MDYxdi0wLjAwMDA1aC0wLjAwOTEyYy0xLjQ5NTM4LC0wLjAwNDk0IC0yLjcwNjEsLTEuMjE4NyAtMi43MDYxLC0yLjcxNTI0aC0wLjAwMDA1di0wLjAwMDAyaDAuMDAwMDVjMCwtMS4wMTAxNyAwLjU1MTYzLC0xLjg5MTUgMS4zNzAxLC0yLjM1OTE4YzAuMzk0MDksLTAuMjI1MjEgMC44NTAwNSwtMC4zNTQ1IDEuMzM2MDgsLTAuMzU2MWgwLjAwOTEydi0wLjAwMDA1YzEuNDk2NTQsMCAyLjcxMDMxLC0xLjIxMDcyIDIuNzE1MjQsLTIuNzA2MXYtMTYuMzAwNjNjMCwtMC4wMDAwMSAwLC0wLjAwMDAxIDAsLTAuMDAwMDJ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIvPjxwYXRoIGQ9Ik0yNzguMDEzNjQsMTA4LjgyMzc2YzAuMDA1MjgsMCAwLjAxMDU3LDAuMDAwMDIgMC4wMTU4NCwwLjAwMDA1aDIuNjk5NDJ2LTAuMDAwMDNoOC4xNDU3OGMxLjQ5OTU5LDAgMi43MTUyNSwxLjIxNTY2IDIuNzE1MjUsMi43MTUyNWMwLDAuMDAyMTYgLTAuMDAwMDEsMC4wMDQzMSAtMC4wMDAwMSwwLjAwNjQ3djIxLjcwOTEzYzAuMDAwMDEsMC4wMDIxNiAwLjAwMDAxLDAuMDA0MzEgMC4wMDAwMSwwLjAwNjQ3YzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI2IC0yLjcxNTI1LDIuNzE1MjZjLTEuNDk5NTksMCAtMi43MTUyNiwtMS4yMTU2NyAtMi43MTUyNiwtMi43MTUyNmMwLC0wLjAwMDAxIDAsLTAuMDAwMDEgMCwtMC4wMDAwMmgtMC4wMDAwMXYtMTYuMzAwNjNjLTAuMDA0OTMsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI0LC0yLjcwNjF2LTAuMDAwMDJoLTEwLjg2MTAydjAuMDAwMDFoLTAuMDAwMDF2MC4wMDAwMWMtMS40OTY1NCwwIC0yLjcxMDMxLDEuMjEwNzIgLTIuNzE1MjUsMi43MDYxdjE2LjMwMDY0djBjMCwwLjAwMDAxIDAsMC4wMDAwMSAwLDAuMDAwMDJjMCwxLjQ5OTU5IC0xLjIxNTY3LDIuNzE1MjYgLTIuNzE1MjYsMi43MTUyNmMtMS40OTk1OSwwIC0yLjcxNTI1LC0xLjIxNTY3IC0yLjcxNTI1LC0yLjcxNTI2YzAsLTAuMDAyMTYgMCwtMC4wMDQzMSAwLjAwMDAxLC0wLjAwNjQ3di0xOS4wMDAzaC0wLjAwMDAxYzAsMCAwLC0wLjAwMDAyIDAsLTAuMDAwMDV2LTUuNDMwNTFoMC4wMDAwOHYtMTkuMDAwMzdjLTAuMDAwMDEsLTAuMDAyMTYgLTAuMDAwMDEsLTAuMDA0MzIgLTAuMDAwMDEsLTAuMDA2NDdjMCwtMS40OTk1OSAxLjIxNTY2LC0yLjcxNTI2IDIuNzE1MjUsLTIuNzE1MjZjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NyAyLjcxNTI2LDIuNzE1MjZjMCwwLjAwMDAxIDAsMC4wMDAwMSAwLDAuMDAwMDJoMC4wMDAwMXYxNi4zMDA2NGMwLjAwNDkzLDEuNDk1MzggMS4yMTg3LDIuNzA2MSAyLjcxNTI0LDIuNzA2MXYwLjAwMDA1aDAuMDA5MTJjMC4wMDMwNCwwLjAwMDAxIDAuMDA2MTEsMC4wMDAwMiAwLjAwOTE1LDAuMDAwMDV6Ii8+PHBhdGggZD0iTTI5OS43MzU3NSwxMzUuOTc2MzRjLTEuNDk5NTksMCAtMi43MTUyNSwtMS4yMTU2NiAtMi43MTUyNSwtMi43MTUyNWMwLC0wLjAwMjE2IDAsLTAuMDA0MzEgMCwtMC4wMDY0NnYtMjEuNzA5MTJjLTAuMDAwMDEsLTAuMDAyMTYgMCwtMC4wMDQzMiAwLC0wLjAwNjQ3YzAsLTEuNDk5NTkgMS4yMTU2NiwtMi43MTUyNiAyLjcxNTI1LC0yLjcxNTI2YzEuNDk5NTksMCAyLjcxNTI2LDEuMjE1NjcgMi43MTUyNiwyLjcxNTI2YzAsMC4wMDAwMSAwLDAuMDAwMDEgMCwwLjAwMDAydjB2MjEuNzIyMDR2MGMwLDEuNDk5NTkgLTEuMjE1NjcsMi43MTUyNSAtMi43MTUyNiwyLjcxNTI1eiIvPjxwYXRoIGQ9Ik0yOTcuMDIwNDQsOTUuMjQ3NDZjMCwtMS40OTk1OSAxLjIxNTY3LC0yLjcxNTI1IDIuNzE1MjYsLTIuNzE1MjVjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NyAyLjcxNTI2LDIuNzE1MjVjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjUgLTIuNzE1MjYsMi43MTUyNWMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY2IC0yLjcxNTI2LC0yLjcxNTI1eiIvPjxwYXRoIGQ9Ik0zMjEuNDU3OCwxMDguODIzNzZjMC4wMDUyOCwwIDAuMDEwNTcsMC4wMDAwMiAwLjAxNTg0LDAuMDAwMDVoMi42OTk0MnYtMC4wMDAwM2g4LjE0NTc4YzEuNDk5NTksMCAyLjcxNTI1LDEuMjE1NjYgMi43MTUyNSwyLjcxNTI1YzAsMC4wMDIxNiAwLDAuMDA0MzEgMCwwLjAwNjQ3djIxLjcwOTEzYzAuMDAwMDEsMC4wMDIxNiAwLDAuMDA0MzEgMCwwLjAwNjQ3YzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI2IC0yLjcxNTI1LDIuNzE1MjZjLTEuNDk5NTksMCAtMi43MTUyNiwtMS4yMTU2NyAtMi43MTUyNiwtMi43MTUyNmMwLC0wLjAwMDAxIDAsLTAuMDAwMDEgMCwtMC4wMDAwMmgtMC4wMDAwMXYtMTYuMzAwNjNjLTAuMDA0OTMsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI0LC0yLjcwNjF2LTAuMDAwMDF2LTAuMDAwMDFoLTEwLjg2MTAydjAuMDAwMDF2MGgtMC4wMDAwMXYwLjAwMDAxYy0xLjQ5NjU0LDAgLTIuNzEwMzEsMS4yMTA3MiAtMi43MTUyNCwyLjcwNjF2MTYuMzAwNjR2MGMwLDAuMDAwMDEgMCwwLjAwMDAxIDAsMC4wMDAwMmMwLDEuNDk5NTkgLTEuMjE1NjcsMi43MTUyNiAtMi43MTUyNiwyLjcxNTI2Yy0xLjQ5OTU5LDAgLTIuNzE1MjUsLTEuMjE1NjcgLTIuNzE1MjUsLTIuNzE1MjZjMCwtMC4wMDIxNiAwLC0wLjAwNDMxIDAsLTAuMDA2NDd2LTE5LjAwMDN2MGMwLDAgMCwtMC4wMDAwMiAwLC0wLjAwMDA1di01LjQzMDUxeiIvPjwvZz48ZyBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM0NzlhNDciIHN0cm9rZS13aWR0aD0iMiI+PHBhdGggZD0iTTM2MC4zOTc5LDIzNy41ODI4OWMwLjAwMDA0LDAuMDA1NyAwLjAwMDA1LDAuMDExNCAwLjAwMDA1LDAuMDE3MTFjMCwwLjI1Mzc4IC0wLjAzNDgyLDAuNDk5NDMgLTAuMDk5OTMsMC43MzI0MmMtMC4wODY0MiwwLjMwOTI0IC0wLjIyNjIxLDAuNTk2MTkgLTAuNDA4ODIsMC44NTAzMmMtMC40OTI4MiwwLjY4NTg4IC0xLjI5NzUyLDEuMTMyNTkgLTIuMjA2NTYsMS4xMzI1OWMtMC4wMDIxNiwwIC0wLjAwNDMxLC0wLjAwMDAxIC0wLjAwNjQ2LC0wLjAwMDAxaC0xNi4zMDQ0Yy0xLjQ5MDY2LDAuMDEwNDMgLTIuNjk1ODQsMS4yMjIwNyAtMi42OTU4NCwyLjcxNTE5aC0wLjAwMDA1djAuMDAwMDJoMC4wMDAwNWMwLDEuNDk2NTQgMS4yMTA3MSwyLjcxMDMxIDIuNzA2MSwyLjcxNTI0aDE2LjMwMDYzdjAuMDAwMDFjMC4wMDAwMSwwIDAuMDAwMDIsMCAwLjAwMDAyLDBjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NiAyLjcxNTI2LDIuNzE1MjZjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjUgLTIuNzE1MjYsMi43MTUyNWMtMC4wMDIxNiwwIC0wLjAwNDMxLDAgLTAuMDA2NDcsLTAuMDAwMDFoLTIxLjcwOTEyYy0wLjAwMjE2LDAgLTAuMDA0MzEsMC4wMDAwMSAtMC4wMDY0NiwwLjAwMDAxYy0xLjQ5OTU5LDAgLTIuNzE1MjUsLTEuMjE1NjYgLTIuNzE1MjUsLTIuNzE1MjV2LTEwLjg1MTgzYy0wLjAwMDAxLC0wLjAwMzA1IC0wLjAwMDAyLC0wLjAwNjA5IC0wLjAwMDAyLC0wLjAwOTE1di0xMC44NjEwNGMwLC0xLjQ5OTU5IDEuMjE1NjYsLTIuNzE1MjUgMi43MTUyNSwtMi43MTUyNWMwLjAwMjE2LDAgMC4wMDQzMSwwLjAwMDAxIDAuMDA2NDYsMC4wMDAwMWgyMS43MDkxMmMwLjAwMjE2LC0wLjAwMDAxIDAuMDA0MzEsLTAuMDAwMDEgMC4wMDY0NywtMC4wMDAwMWMxLjQ5OTU5LDAgMi43MTUyNiwxLjIxNTY2IDIuNzE1MjYsMi43MTUyNWMwLDAuMDA0ODMgLTAuMDAwMDIsMC4wMDk2NSAtMC4wMDAwNCwwLjAxNDQ3ek0zNTIuMjcxNDksMjM0Ljg4NDc1YzEuNDkwNjYsLTAuMDEwNDMgMi42OTU4NCwtMS4yMjIwNyAyLjY5NTg0LC0yLjcxNTE5aDAuMDAwMDV2LTAuMDAwMDJoLTAuMDAwMDVjMCwtMS40OTY1NCAtMS4yMTA3MSwtMi43MTAzMSAtMi43MDYxLC0yLjcxNTI0aC0xMC44ODNjLTEuNDkzNjQsMC4wMDY5NyAtMi43MDIzMiwxLjIxOTk1IC0yLjcwMjMyLDIuNzE1MjNoLTAuMDAwMDV2MC4wMDAwMmgwLjAwMDA1YzAsMS40OTM4OSAxLjIwNjQyLDIuNzA2IDIuNjk4MTQsMi43MTUyeiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iLz48cGF0aCBkPSJNMjEzLjc3Mzk4LDIyNi43Mzg5N2MwLC0xLjQ5OTU5IDEuMjE1NjYsLTIuNzE1MjUgMi43MTUyNSwtMi43MTUyNWMwLjAwMjE2LDAgMC4wMDQzMSwwLjAwMDAxIDAuMDA2NDYsMC4wMDAwMWgyMS43MDkxMmMwLjAwMjE2LC0wLjAwMDAxIDAuMDA0MzEsLTAuMDAwMDEgMC4wMDY0NywtMC4wMDAwMWMxLjQ5OTU5LDAgMi43MTUyNiwxLjIxNTY2IDIuNzE1MjYsMi43MTUyNWMwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNiAtMi43MTUyNiwyLjcxNTI2Yy0wLjAwMDAxLDAgLTAuMDAwMDIsMCAtMC4wMDAwMiwwdjAuMDAwMDFoLTE2LjMwMDYzYy0xLjQ5NTM5LDAuMDA0OTMgLTIuNzA2MSwxLjIxODcgLTIuNzA2MSwyLjcxNTI0aC0wLjAwMDA1djAuMDAwMDJoMC4wMDAwNWMwLDEuNDkzMTIgMS4yMDUxOSwyLjcwNDc2IDIuNjk1ODQsMi43MTUxOWgxNi4zMDQ0YzAuMDAyMTYsMCAwLjAwNDMxLC0wLjAwMDAxIDAuMDA2NDYsLTAuMDAwMDFjMS40OTk1OSwwIDIuNzE1MjUsMS4yMTU2NiAyLjcxNTI1LDIuNzE1MjV2MTAuODYxMDRjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjUgLTIuNzE1MjUsMi43MTUyNWMtMC4wMDIxNiwwIC0wLjAwNDMxLC0wLjAwMDAxIC0wLjAwNjQ2LC0wLjAwMDAxaC0yMS43MDkxMmMtMC4wMDIxNiwwLjAwMDAxIC0wLjAwNDMxLDAuMDAwMDEgLTAuMDA2NDcsMC4wMDAwMWMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY2IC0yLjcxNTI2LC0yLjcxNTI1YzAsLTEuNDk5NTkgMS4yMTU2NiwtMi43MTUyNiAyLjcxNTI2LC0yLjcxNTI2YzAuMDAwMDEsMCAwLjAwMDAyLDAgMC4wMDAwMiwwdi0wLjAwMDAxaDE2LjMwMDYzYzEuNDk1MzksLTAuMDA0OTMgMi43MDYxLC0xLjIxODcgMi43MDYxLC0yLjcxNTI0aDAuMDAwMDV2LTAuMDAwMDJoLTAuMDAwMDVjMCwtMS40OTMxMiAtMS4yMDUxOSwtMi43MDQ3NiAtMi42OTU4NCwtMi43MTUxOWgtMTYuMzA0NGMtMC4wMDIxNiwwIC0wLjAwNDMxLDAuMDAwMDEgLTAuMDA2NDYsMC4wMDAwMWMtMC45MDkwNCwwIC0xLjcxMzc0LC0wLjQ0NjcxIC0yLjIwNjU2LC0xLjEzMjU5Yy0wLjMyMDIsLTAuNDQ1NiAtMC41MDg3NSwtMC45OTIxNCAtMC41MDg3NSwtMS41ODI3M2MwLC0wLjAwNTcxIDAuMDAwMDIsLTAuMDExNDEgMC4wMDAwNSwtMC4wMTcxMXoiLz48cGF0aCBkPSJNMjcwLjc5NDQsMjI0LjAyMzcxYzAuMDA1MjgsMCAwLjAxMDU3LDAuMDAwMDIgMC4wMTU4NCwwLjAwMDA1aDIuNjk5NDJ2LTAuMDAwMDRoOC4xNDU3N2MxLjQ5OTU5LDAgMi43MTUyNSwxLjIxNTY2IDIuNzE1MjUsMi43MTUyNWMwLDAuMDAyMTYgLTAuMDAwMDEsMC4wMDQzMSAtMC4wMDAwMSwwLjAwNjQ2djIxLjcwOTEyYzAuMDAwMDEsMC4wMDIxNiAwLjAwMDAxLDAuMDA0MzEgMC4wMDAwMSwwLjAwNjQ3YzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI2IC0yLjcxNTI1LDIuNzE1MjZjLTEuNDk5NTksMCAtMi43MTUyNiwtMS4yMTU2NiAtMi43MTUyNiwtMi43MTUyNmMwLC0wLjAwMDAxIDAsLTAuMDAwMDIgMCwtMC4wMDAwMmgtMC4wMDAwMXYtMTYuMzAwNjNjLTAuMDA0OTMsLTEuNDk1MzkgLTEuMjE4NywtMi43MDYxIC0yLjcxNTI0LC0yLjcwNjF2LTAuMDAwMDFoLTAuMDAwMDRjLTEuNDk2NTQsMCAtMi43MTAzMSwxLjIxMDcxIC0yLjcxNTI0LDIuNzA2MXYxNi4yOTQxOGMwLjAwMDAxLDAuMDAyMTYgMC4wMDAwMSwwLjAwNDMxIDAuMDAwMDEsMC4wMDY0N2MwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNiAtMi43MTUyNSwyLjcxNTI2Yy0xLjQ5OTU5LDAgLTIuNzE1MjYsLTEuMjE1NjYgLTIuNzE1MjYsLTIuNzE1MjZjMCwtMC4wMDAwMSAwLC0wLjAwMDAyIDAsLTAuMDAwMDJoLTAuMDAwMDF2LTE2LjMwMDYzYy0wLjAwNDkzLC0xLjQ5NTM5IC0xLjIxODcsLTIuNzA2MSAtMi43MTUyNCwtMi43MDYxaC0wLjAwMDAxdjAuMDAwMDFjLTEuNDk2NTQsMCAtMi43MTAzMSwxLjIxMDcxIC0yLjcxNTI0LDIuNzA2MXYxNi4zMDA2M2gtMC4wMDAwMWMwLDAuMDAwMDEgMCwwLjAwMDAyIDAsMC4wMDAwMmMwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNiAtMi43MTUyNiwyLjcxNTI2Yy0xLjQ5OTU5LDAgLTIuNzE1MjUsLTEuMjE1NjYgLTIuNzE1MjUsLTIuNzE1MjZjMCwtMC4wMDIxNiAwLC0wLjAwNDMxIDAuMDAwMDEsLTAuMDA2NDd2LTE5LjAwMDI5aC0wLjAwMDAxYzAsMCAwLC0wLjAwMDAyIDAsLTAuMDAwMDV2LTUuNDMwNTF6Ii8+PHBhdGggZD0iTTI0OS4wNzIzNSwyNTEuMTc2MjhjLTEuNDk5NTksMCAtMi43MTUyNSwtMS4yMTU2NiAtMi43MTUyNSwtMi43MTUyNWMwLC0wLjAwMjE2IDAuMDAwMDEsLTAuMDA0MzEgMC4wMDAwMSwtMC4wMDY0NnYtMjEuNzA5MTJjLTAuMDAwMDEsLTAuMDAyMTYgLTAuMDAwMDEsLTAuMDA0MzEgLTAuMDAwMDEsLTAuMDA2NDdjMCwtMS40OTk1OSAxLjIxNTY2LC0yLjcxNTI2IDIuNzE1MjUsLTIuNzE1MjZjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NiAyLjcxNTI2LDIuNzE1MjZjMCwwLjAwMDAxIDAsMC4wMDAwMiAwLDAuMDAwMDJoMC4wMDAwMXYyMS43MjIwM2gtMC4wMDAwMWMwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNSAtMi43MTUyNiwyLjcxNTI1eiIvPjxwYXRoIGQ9Ik0yNDYuMzU3MDUsMjEwLjQ0NzRjMCwtMS40OTk1OSAxLjIxNTY2LC0yLjcxNTI1IDIuNzE1MjUsLTIuNzE1MjVjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NiAyLjcxNTI2LDIuNzE1MjVjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjYgLTIuNzE1MjYsMi43MTUyNmMtMS40OTk1OSwwIC0yLjcxNTI1LC0xLjIxNTY2IC0yLjcxNTI1LC0yLjcxNTI2eiIvPjxwYXRoIGQ9Ik0yODkuODAxMTksMjQ4LjQ2MTAyYzAsLTAuMDAyMTYgLTAuMDAwMDEsLTAuMDA0MzEgMCwtMC4wMDY0N3YtMTMuNTY5ODJ2MHYtOC4xNDU3N2MwLC0xLjQ5OTU5IDEuMjE1NjYsLTIuNzE1MjUgMi43MTUyNSwtMi43MTUyNWMwLjAwMjE2LDAgMC4wMDQzMSwwIDAuMDA2NDcsMC4wMDAwMWgxMy41Njk4MnYtMC4wMDAwMWg4LjE0NTc3YzEuNDk5NTksMCAyLjcxNTI1LDEuMjE1NjYgMi43MTUyNSwyLjcxNTI1YzAsMC4wMDIxNiAwLDAuMDA0MzEgLTAuMDAwMDEsMC4wMDY0N3YxMy41Njk4MmgwLjAwMDAxdjguMTQ1NzdjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjUgLTIuNzE1MjUsMi43MTUyNWMtMC4wMDIxNiwwIC0wLjAwNDMxLDAgLTAuMDA2NDcsLTAuMDAwMDFoLTEzLjU2OTgydjAuMDAwMDFoLTIuNjk2OTRjLTAuMDAzMDUsMC4wMDAwMiAtMC4wMDYwOSwwLjAwMDA0IC0wLjAwOTE0LDAuMDAwMDVoLTAuMDA5MTJ2MC4wMDAwNWMtMS40OTY1NCwwIC0yLjcxMDMxLDEuMjEwNzEgLTIuNzE1MjQsMi43MDYxdjE2LjMwMDYzaC0wLjAwMDAxYzAsMC4wMDAwMSAwLDAuMDAwMDIgMCwwLjAwMDAyYzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI2IC0yLjcxNTI2LDIuNzE1MjZjLTEuNDk5NTksMCAtMi43MTUyNSwtMS4yMTU2NiAtMi43MTUyNSwtMi43MTUyNmMwLC0wLjAwMjE2IDAuMDAwMDEsLTAuMDA0MzEgMC4wMDAwMiwtMC4wMDY0N3YtMjEuNjk1NjljLTAuMDAwMDUsLTAuMDA2NjQgLTAuMDAwMDcsLTAuMDEzMjggLTAuMDAwMDcsLTAuMDE5OTN6TTI5Ny45Mzc4MywyMjkuNDU0MjNjLTEuNDk1MzksMC4wMDQ5MyAtMi43MDYxLDEuMjE4NyAtMi43MDYxLDIuNzE1MjRoLTAuMDAwMDR2MTAuODcwMTVjMC4wMDQ5MywxLjQ5NTM5IDEuMjE4NywyLjcwNjEgMi43MTUyNCwyLjcwNjF2MC4wMDAwNGgxMC44NzAxNWMxLjQ5NTM5LC0wLjAwNDkzIDIuNzA2MSwtMS4yMTg3IDIuNzA2MSwtMi43MTUyNGgwLjAwMDA0di0xMC44NzAxNWMtMC4wMDQ5MywtMS40OTUzOSAtMS4yMTg3LC0yLjcwNjEgLTIuNzE1MjQsLTIuNzA2MXYtMC4wMDAwNHoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9Ii8+PHBhdGggZD0iTTMyNS4wOTk2LDI1MS4xNzYyOWMtMS40OTk1OSwwIC0yLjcxNTI1LC0xLjIxNTY2IC0yLjcxNTI1LC0yLjcxNTI1YzAsLTAuMDAyMTYgMC4wMDAwMSwtMC4wMDQzMSAwLjAwMDAxLC0wLjAwNjQ2di0xOS4wMDAzOWgtMC4wMDAwN3YtNS40MzA1MWgwLjAwMDA3di0xOS4wMDAzM2MtMC4wMDAwMSwtMC4wMDIxNiAtMC4wMDAwMSwtMC4wMDQzMSAtMC4wMDAwMSwtMC4wMDY0N2MwLC0xLjQ5OTU5IDEuMjE1NjYsLTIuNzE1MjYgMi43MTUyNSwtMi43MTUyNmMxLjQ5OTU5LDAgMi43MTUyNiwxLjIxNTY2IDIuNzE1MjYsMi43MTUyNmMwLDAuMDAwMDEgMCwwLjAwMDAyIDAsMC4wMDAwMmgwLjAwMDAxdjIxLjcyMjAzaC0wLjAwMDAxYzAsMC4wMDAwMiAwLDAuMDAwMDMgMCwwLjAwMDA1YzAsMC4wMDAwMSAwLDAuMDAwMDIgMCwwLjAwMDAyaDAuMDAwMDF2MjEuNzIyMDNoLTAuMDAwMDFjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjUgLTIuNzE1MjYsMi43MTUyNXoiLz48L2c+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MzAwOjE4Ny41LS0+";
    
    const OperatorsProicon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCwwLDgwLDgwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjI3NC4wOTQ1MyIgeTE9IjIxNC4wOTQ1NSIgeDI9IjIwNS45MDU1IiB5Mj0iMTQ1LjkwNTUyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzhiYmY4YiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzhiYmY4YiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMC4wMDAwMSwtMTQwLjAwMDAzKSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMjIwLjE2MjYxLDIyMC4wMDAwM2MtMTEuMTM1NSwwIC0yMC4xNjI2LC05LjAyNzEgLTIwLjE2MjYsLTIwLjE2MjZ2LTM5LjY3NDhjMCwtMTEuMTM1NSA5LjAyNzEsLTIwLjE2MjYgMjAuMTYyNiwtMjAuMTYyNmgzOS42NzQ4YzExLjEzNTUsMCAyMC4xNjI2LDkuMDI3MSAyMC4xNjI2LDIwLjE2MjZ2MzkuNjc0OGMwLDExLjEzNTUgLTkuMDI3MSwyMC4xNjI2IC0yMC4xNjI2LDIwLjE2MjZ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0idXJsKCNjb2xvci0xKSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjIyLjY0MjI5LDIxNS4wMDAwNGMtOS43NDM1NiwwIC0xNy42NDIyNywtNy44OTg3MSAtMTcuNjQyMjcsLTE3LjY0MjI3di0zNC43MTU0NWMwLC05Ljc0MzU2IDcuODk4NzEsLTE3LjY0MjI4IDE3LjY0MjI3LC0xNy42NDIyOGgzNC43MTU0NWM5Ljc0MzU2LDAgMTcuNjQyMjgsNy44OTg3MiAxNy42NDIyOCwxNy42NDIyOHYzNC43MTU0NWMwLDkuNzQzNTYgLTcuODk4NzIsMTcuNjQyMjcgLTE3LjY0MjI4LDE3LjY0MjI3eiIgZmlsbD0iIzU5YzA1OSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMjI1LjAwMDAyLDE4Ny41MDAwMWMtNC4xNDIxNCwwIC03LjUsLTEuMTE5MjkgLTcuNSwtMi40OTk5OXYtOS45OTk5OWMwLC0xLjM4MDcyIDMuMzU3ODYsLTIuNDk5OTkgNy41LC0yLjQ5OTk5aDcuNXYtNy41YzAsLTQuMTQyMTQgMS4xMTkyOCwtNy41IDIuNDk5OTksLTcuNWg5Ljk5OTk5YzEuMzgwNzIsMCAyLjQ5OTk5LDMuMzU3ODYgMi40OTk5OSw3LjV2Ny41aDcuNTAwMDJjNC4xNDIxNSwwIDcuNSwxLjExOTI4IDcuNSwyLjQ5OTk5djkuOTk5OTljMCwxLjM4MDcyIC0zLjM1Nzg1LDIuNDk5OTkgLTcuNSwyLjQ5OTk5aC03LjUwMDAydjcuNTAwMDFjMCw0LjE0MjE0IC0xLjExOTI4LDcuNSAtMi40OTk5OSw3LjVoLTkuOTk5OTljLTEuMzgwNzIsMCAtMi40OTk5OSwtMy4zNTc4NiAtMi40OTk5OSwtNy41di03LjUwMDAxeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMzg5NDM4IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjozOS45OTk5ODUwMDAwMDAwNDozOS45OTk5NjUwMDAwMDAwOS0tPg==";
    
    const OperatorsPronumproicon = "https://m.ccw.site/user_projects_assets/240948213d2fc2650c375fb2573bfacd.png"
    
    const OperatorsProextensionId = "OperatorsPro";
    
    const EXTCONFIGCOMMENTID = '_ExtensionConfig_';

    const falseList1 = [0,false,undefined,null,'','0','false','undefined','null'];

    const falseList2 = [0,false,undefined,null,''];

    const nullList1 = [undefined,null,'undefined','null',''];

    const nullList2 = [undefined,null,''];

    class OperatorsPro{
        static extCount = 0;
        constructor(runtime) {
            this.runtime = runtime;
            OperatorsPro.extCount += 1;
            this.id = OperatorsPro.extCount;
            this.hideExtraBlocks = true
            if (!this.parseExtConfig()) {
                runtime.on('PROJECTLOADED', () => {
                  this.parseExtConfig();
                });
            }
            this._formatMessage = runtime.getFormatMessage({
                "zh-cn": {
                    'OperatorsPro.rMenuTypeof':'[a]作为[b]类型，[c]数组和对象',
                    'OperatorsPro.bMenuTypeof':'[a]作为[b]类型为[c]',
                    'OperatorsPro.rJSONTypeof':'JSON[a]类型',
                    'OperatorsPro.bJSONTypeof':'JSON[a]类型为[b]',
                    'OperatorsPro.bMenuToBoolean':'[a][b]时[c]',
                    'OperatorsPro.rMenuIf':'若[a][b]则[c]否则[d]',
                    'OperatorsPro.bMenuAnd':'[a][b][c][d]时[e]',
                    'OperatorsPro.rIf': '若[a]则[b]否则[c]',
                    'OperatorsPro.bAnd': '[a]与[b]',
                    'OperatorsPro.bOr': '[a]或[b]',
                    'OperatorsPro.bNot': '[a]不成立',
                    'OperatorsPro.rPadStart':'[a]插入[b]使长度为[c]',
                    'OperatorsPro.rPadEnd':'[a]加入[b]使长度为[c]',
                    'OperatorsPro.rRemove':'[a]去除[b]',
                    'OperatorsPro.rInterchange':'[a]字符[b]互换[c]',
                    'OperatorsPro.rReplaceExcept':'[a]字符[b]排除[c]替换为[d]',
                    'OperatorsPro.bMenuUndefined':'[a][b]是[c]',
                    'OperatorsPro.rDefault':'[a]空值则[b]',
                    'OperatorsPro.bDefined':'[a]有值',
                    'OperatorsPro.bUndefined':'[a]空值',
                    'OperatorsPro.bMenuEqual':'[a][b][c]，因为它们的[d]',
                    'OperatorsPro.bNotstrictlyequal':'[a]不全等[b]',
                    'OperatorsPro.bNotcontain':'[a]不含[b]',
                    'OperatorsPro.rRandom':'0到1随机数',
                    'OperatorsPro.rNearestMultiple':'[a]最近[b]倍数',
                    'OperatorsPro.rMod':'[a]/[b]余数',
                    'OperatorsPro.rRound':'[a]四舍五入[b]位',
                    'OperatorsPro.rRintFromTo':'[a]四舍五入，从[b]位至[c]位',
                    'OperatorsPro.rRintToTimes':'[a]四舍五入，从[b]位往前[c]次',
                    'OperatorsPro.rRintTimesTo':'[a]四舍五入，往前[b]次至[c]位',
                    'OperatorsPro.rPI':'[i]保留[a]位',
                    'OperatorsPro.rMenuRad':'弧度制[a][b][c]',
                    'OperatorsPro.rMenuToOneHundredEighty':'[a][b]在[c]角度中',
                    'OperatorsPro.rRadSin':'弧度制sin[a]',
                    'OperatorsPro.rRadCos':'弧度制cos[a]',
                    'OperatorsPro.rRadTan':'弧度制tan[a]',
                    'OperatorsPro.rRadAsin':'弧度制asin[a]',
                    'OperatorsPro.rRadAcos':'弧度制acos[a]',
                    'OperatorsPro.rRadAtan':'弧度制atan[a]',
                    'OperatorsPro.rToOneHundredEighty':'[a]在-180~180角度中',
                    'OperatorsPro.rToThreeHundredSixty':'[a]在0~360角度中',
                    'OperatorsPro.rAddTo':'[a]增加[b]至[c]',
                    'OperatorsPro.rMenuArrayRemoveItem':'[a]作为[b]删除第[c]项，返回[d]',
                    'OperatorsPro.rArrayRemoveShift':'[a]删除首项',
                    'OperatorsPro.rArrayRemovePop':'[a]删除末项',
                    'OperatorsPro.rArrayRemoveItem':'[a]删除第[b]项',
                    'OperatorsPro.rArrayRemoveItems':'[a]删除第[b]项',
                    'OperatorsPro.rArrayRemoveItemtoitem':'[a]删除第[b]至[c]项',
                    'OperatorsPro.rArrayReserveItem':'[a]保留第[b]项',
                    'OperatorsPro.rMenuArrayRemove':'[a]作为[b]删除[c][d]，因为[e]，返回[f]',
                    'OperatorsPro.rArrayRemoveJSON':'[a]删除所有JSON[b]',
                    'OperatorsPro.rArrayRemoveStr':'[a]删除所有"[b]"',
                    'OperatorsPro.rMenuArrayRemovenumber':'[a]作为[b]删除[c][d][e]，因为[f]，返回[g]',
                    'OperatorsPro.rArrayRemoveBigNumber':'[a]删除数>[b]',
                    'OperatorsPro.rArrayRemoveNotSmallNumber':'[a]删除数≥[b]',
                    'OperatorsPro.rArrayRemoveSmallNumber':'[a]删除数<[b]',
                    'OperatorsPro.rArrayRemoveNotBigNumber':'[a]删除数≤[b]',
                    'OperatorsPro.rArrayRemoveNumber':'[a]删除所有数[b]',
                    'OperatorsPro.rArrayRemove':'[a]删除所有[b]',
                    'OperatorsPro.rMenuArrayInsert':'[a]作为[b]第[c]项[d][e][f],返回[g]',
                    'OperatorsPro.rArrayUnshiftJSON':'[a]加入JSON[b]到开头',
                    'OperatorsPro.rArrayUnshiftStr':'[a]加入"[b]"到开头',
                    'OperatorsPro.rArrayUnshiftNumber':'[a]加入数[b]到开头',
                    'OperatorsPro.rArrayUnshift':'[a]加入[b]到开头',
                    'OperatorsPro.rArrayPushJSON':'[a]加入JSON[b]到末尾',
                    'OperatorsPro.rArrayPushStr':'[a]加入"[b]"到末尾',
                    'OperatorsPro.rArrayPushNumber':'[a]加入数[b]到末尾',
                    'OperatorsPro.rArrayPush':'[a]加入[b]到末尾',
                    'OperatorsPro.rArrayInsertJSON':'[a]插入JSON[b]到[c]项',
                    'OperatorsPro.rArrayInsertStr':'[a]插入"[b]"到[c]项',
                    'OperatorsPro.rArrayInsertNumber':'[a]插入数[b]到[c]项',
                    'OperatorsPro.rArrayInsert':'[a]插入[b]到[c]项',
                    'OperatorsPro.rArrayInsertJSONindextoindex':'[a]插入JSON[b]到[c]至[d]项',
                    'OperatorsPro.rArrayInsertStrindextoindex':'[a]插入"[b]"到[c]至[d]项',
                    'OperatorsPro.rArrayInsertNumberindextoindex':'[a]插入数[b]到[c]至[d]项',
                    'OperatorsPro.rArrayInsertindextoindex':'[a]插入[b]到[c]至[d]项',
                    'OperatorsPro.rArrayMove':'[a]第[b]项移到第[c]项',
                    'OperatorsPro.rArrayReplaceJSON':'[a]第[b]项设为JSON[c]',
                    'OperatorsPro.rArrayReplaceStr':'[a]第[b]项设为"[c]"',
                    'OperatorsPro.rArrayReplaceNumber':'[a]第[b]项设为数[c]',
                    'OperatorsPro.rArrayReplace':'[a]第[b]项设为[c]',
                    'OperatorsPro.rArrayReplaceindexesJSON':'[a]第[b]项设为JSON[c]',
                    'OperatorsPro.rArrayReplaceindexesstr':'[a]第[b]项设为"[c]"',
                    'OperatorsPro.rArrayReplaceindexesnumber':'[a]第[b]项设为数[c]',
                    'OperatorsPro.rArrayReplaceindexes':'[a]第[b]项设为[c]',
                    'OperatorsPro.rArrayReplaceindextoindexJSON':'[a]第[b]到[c]项设为JSON[d]',
                    'OperatorsPro.rArrayReplaceindextoindexstr':'[a]第[b]到[c]项设为"[d]"',
                    'OperatorsPro.rArrayReplaceindextoindexnumber':'[a]第[b]到[c]项设为数[d]',
                    'OperatorsPro.rArrayReplaceindextoindex':'[a]第[b]到[c]项设为[d]',
                    'OperatorsPro.rArrayInterchange':'[a]第[b]项与第[c]项互换',
                    'OperatorsPro.rArrayPlusIndex':'[a]第[b]项增加[c]',
                    'OperatorsPro.rArrayPlusIndextoindex':'[a]第[b]到[c]项增加[d]',
                    'OperatorsPro.rArrayPlus':'[a]各项增加[b]',
                    'OperatorsPro.rMenuArrayItem':'[a]作为[b]第[c]项，返回[d]',
                    'OperatorsPro.rArrayShiftJSON':'[a]首项转JSON',
                    'OperatorsPro.rArrayShift':'[a]首项',
                    'OperatorsPro.rArrayPopJSON':'[a]末项转JSON',
                    'OperatorsPro.rArrayPop':'[a]末项',
                    'OperatorsPro.rArrayItemJSON':'[a]第[b]项转JSON',
                    'OperatorsPro.rArrayItem':'[a]第[b]项',
                    'OperatorsPro.rArrayItems':'[a]第[b]项',
                    'OperatorsPro.rArrayItemtoitem':'[a]第[b]至[c]项',
                    'OperatorsPro.rMenuArrayIndex':'[a]作为[b][c][d][e]的编号，因为[f]',
                    'OperatorsPro.rMenuArrayIndexnumber':'[a]作为[b][c][d][e][f]的编号，因为[g]',
                    'OperatorsPro.rArrayIndexJSON':'[a]第一JSON[b]编号',
                    'OperatorsPro.rArrayIndexStr':'[a]第一"[b]"编号',
                    'OperatorsPro.rArrayFindIndexBigNumber':'[a]第一数>[b]编号',
                    'OperatorsPro.rArrayFindIndexNotSmallNumber':'[a]第一数≥[b]编号',
                    'OperatorsPro.rArrayFindIndexSmallNumber':'[a]第一数<[b]编号',
                    'OperatorsPro.rArrayFindIndexNotBigNumber':'[a]第一数≤[b]编号',
                    'OperatorsPro.rArrayIndexNumber':'[a]第一数[b]编号',
                    'OperatorsPro.rArrayIndex':'[a]第一[b]编号',
                    'OperatorsPro.rArrayLastIndexJSON':'[a]最后一JSON[b]编号',
                    'OperatorsPro.rArrayLastIndexStr':'[a]最后一"[b]"编号',
                    'OperatorsPro.rArrayLastIndexNumber':'[a]最后一数[b]编号',
                    'OperatorsPro.rArrayLastIndex':'[a]最后一[b]编号',
                    'OperatorsPro.rArrayAllIndexJSON':'[a]所有JSON[b]编号',
                    'OperatorsPro.rArrayAllIndexStr':'[a]所有"[b]"编号',
                    'OperatorsPro.rArrayAllIndexNumber':'[a]所有数[b]编号',
                    'OperatorsPro.rArrayAllIndex':'[a]所有[b]编号',
                    'OperatorsPro.rMenuArrayCount':'[a]作为[b]中[c][d]的数量，因为[e]',
                    'OperatorsPro.rArrayCountJSON':'[a]JSON[b]数量',
                    'OperatorsPro.rArrayCountStr':'[a]"[b]"数量',
                    'OperatorsPro.rMenuArrayCountnumber':'[a]作为[b]中[c][d][e]的数量，因为[f]',
                    'OperatorsPro.rArrayCountBigNumber':'[a]数>[b]数量',
                    'OperatorsPro.rArrayCountNotSmallNumber':'[a]数≥[b]数量',
                    'OperatorsPro.rArrayCountSmallNumber':'[a]数<[b]数量',
                    'OperatorsPro.rArrayCountNotBigNumber':'[a]数≤[b]数量',
                    'OperatorsPro.rArrayCountNumber':'[a]数[b]数量',
                    'OperatorsPro.rArrayCount':'[a][b]数量',
                    'OperatorsPro.rMenuArrayLength':'[a]作为[b][c]',
                    'OperatorsPro.rArrayLength':'[a]元素量',
                    'OperatorsPro.rArraySum':'[a]之和',
                    'OperatorsPro.rArrayProduct':'[a]之积',
                    'OperatorsPro.rArrayAverage':'[a]平均数',
                    'OperatorsPro.rArrayMax':'[a]最大值',
                    'OperatorsPro.rArrayMin':'[a]最小值',
                    'OperatorsPro.rMenuArraySort':'[a]作为[b][c]排序，返回[d]',
                    'OperatorsPro.rArraySortNaturalOrder':'[a]顺序排序',
                    'OperatorsPro.rArraySortReverseOrder':'[a]倒序排序',
                    'OperatorsPro.rArrayReverse':'[a]反转',
                    'OperatorsPro.bMenuArrayHave':'[a]作为[b][c][d][e]，因为[f]',
                    'OperatorsPro.bArrayHaveJSON':'[a]包含JSON[b]',
                    'OperatorsPro.bArrayHaveStr':'[a]包含"[b]"',
                    'OperatorsPro.bMenuArrayHavenumber':'[a]作为[b][c][d][e][f]，因为[g]',
                    'OperatorsPro.bArrayHaveBigNumber':'[a]包含数>[b]',
                    'OperatorsPro.bArrayHaveNotSmallNumber':'[a]包含数≥[b]',
                    'OperatorsPro.bArrayHaveSmallNumber':'[a]包含数<[b]',
                    'OperatorsPro.bArrayHaveNotBigNumber':'[a]包含数≤[b]',
                    'OperatorsPro.bArrayHaveNumber':'[a]包含数[b]',
                    'OperatorsPro.bArrayHave':'[a]包含[b]',
                    'OperatorsPro.bArrayBeJSON':'[a]只含JSON[b]',
                    'OperatorsPro.bArrayBeStr':'[a]只含"[b]"',
                    'OperatorsPro.bArrayBeBigNumber':'[a]只含数>[b]',
                    'OperatorsPro.bArrayBeNotSmallNumber':'[a]只含数≥[b]',
                    'OperatorsPro.bArrayBeSmallNumber':'[a]只含数<[b]',
                    'OperatorsPro.bArrayBeNotBigNumber':'[a]只含数≤[b]',
                    'OperatorsPro.bArrayBeNumber':'[a]只含数[b]',
                    'OperatorsPro.bArrayBe':'[a]只含[b]',
                    'OperatorsPro.bArrayStrictlyEqual':'[a]全等[b]',
                    'OperatorsPro.bArrayClear':'[a]无元素',
                    'OperatorsPro.bIsArray':'[a]是数组',
                    'OperatorsPro.rObjectRemove':'[a]删除键[b]',
                    'OperatorsPro.rObjectRemovekeys':'[a]删除键[b]',
                    'OperatorsPro.rMenuObjectSet':'[a]作为[b]成员[c][d][e][f]，返回[g]',
                    'OperatorsPro.rObjectPutKeyJSON':'[a]键[b]值设为JSON[c]',
                    'OperatorsPro.rObjectPutKeyStr':'[a]键[b]值设为"[c]"',
                    'OperatorsPro.rObjectPutKeyNumber':'[a]键[b]值设为数[c]',
                    'OperatorsPro.rObjectPutKey':'[a]键[b]值设为[c]',
                    'OperatorsPro.rObjectPlusKey':'[a]键[b]值增加[c]',
                    'OperatorsPro.rObjectPlus':'[a]值增加[b]',
                    'OperatorsPro.rMenuObjectMember':'[a]作为[b]成员[c]，返回[d]',
                    'OperatorsPro.rObjectValueJSON':'[a]键[b]的值转JSON',
                    'OperatorsPro.rObjectValue':'[a]键[b]的值',
                    'OperatorsPro.rObjectKeyJSON':'[a]第一值JSON[b]键',
                    'OperatorsPro.rObjectKeyStr':'[a]第一值"[b]"键',
                    'OperatorsPro.rObjectKeyNumber':'[a]第一值=[b]键',
                    'OperatorsPro.rObjectKey':'[a]第一值[b]键',
                    'OperatorsPro.rObjectLastKeyJSON':'[a]最后一值JSON[b]键',
                    'OperatorsPro.rObjectLastKeyStr':'[a]最后一值"[b]"键',
                    'OperatorsPro.rObjectLastKeyNumber':'[a]最后一值=[b]键',
                    'OperatorsPro.rObjectLastKey':'[a]最后一值[b]键',
                    'OperatorsPro.rObjectAllKeyJSON':'[a]所有值JSON[b]键',
                    'OperatorsPro.rObjectAllKeyStr':'[a]所有值"[b]"键',
                    'OperatorsPro.rObjectAllKeyNumber':'[a]所有值=[b]键',
                    'OperatorsPro.rObjectAllKey':'[a]所有值[b]键',
                    'OperatorsPro.rMenuObjectKeys':'[a]作为[b]所有[c]，返回[d]',
                    'OperatorsPro.rObjectLength':'[a]键值量',
                    'OperatorsPro.rObjectKeys':'[a]所有键',
                    'OperatorsPro.rObjectValues':'[a]所有值',
                    'OperatorsPro.rObjectEntries':'[a]所有数据',
                    'OperatorsPro.rObjectFromEntries':'[a]数据转对象',
                    'OperatorsPro.rObjectPutAll':'[a][b]合并',
                    'OperatorsPro.bObjectHasOwnProperty':'[a]包含键[b]',
                    'OperatorsPro.bObjectClear':'[a]无键值',
                    'OperatorsPro.bIsObject':'[a]是对象',
                    'OperatorsPro.Operators':'运算',
                    'OperatorsPro.showBlock': '显示不常用积木',
                    'OperatorsPro.hideBlock': '隐藏不常用积木',
                    'OperatorsPro.showBlock?':'为了避免杂乱，少量积木被隐藏。\n是否要显示它们？',
                    'OperatorsPro.true':'是',
                    'OperatorsPro.false':'否',
                    'OperatorsPro.asoriginal':'作为原型',
                    'OperatorsPro.asJSON':'作为JSON',
                    'OperatorsPro.asboolean':'作为布尔值',
                    'OperatorsPro.toboolean':'转为布尔值',
                    'OperatorsPro.asnumber':'作为数字',
                    'OperatorsPro.tonumber':'转为数字',
                    'OperatorsPro.asstring':'作为字符串',
                    'OperatorsPro.and':'与',
                    'OperatorsPro.or':'或',
                    'OperatorsPro.is':'成立',
                    'OperatorsPro.not':'不成立',
                    'OperatorsPro.roughly':'大致上',
                    'OperatorsPro.strictly':'严格上',
                    'OperatorsPro.defined':'有值',
                    'OperatorsPro.essence':'本质',
                    'OperatorsPro.content':'内容',
                    'OperatorsPro.type':'类型',
                    'OperatorsPro.contentandtype':'内容和类型',
                    'OperatorsPro.essenceandcase':'本质和大小写',
                    'OperatorsPro.contentandcase':'内容和大小写',
                    'OperatorsPro.contentandtypeandcase':'内容和类型和大小写',
                    'OperatorsPro.original':'原型',
                    'OperatorsPro.confuse':'混淆',
                    'OperatorsPro.distinguish':'区分',
                    'OperatorsPro.array':'数组',
                    'OperatorsPro.object':'对象',
                    'OperatorsPro.value':'值',
                    'OperatorsPro.lengthof':'的长度',
                    'OperatorsPro.sumof':'的和',
                    'OperatorsPro.productof':'的积',
                    'OperatorsPro.averageof':'的平均数',
                    'OperatorsPro.max':'最大值',
                    'OperatorsPro.min':'最小值',
                    'OperatorsPro.contains':'包含',
                    'OperatorsPro.onlycontains':'只含',
                    'OperatorsPro.numericalvalue':'数值',
                    'OperatorsPro.length':'长度',
                    'OperatorsPro.insert':'插入',
                    'OperatorsPro.set':'设为',
                    'OperatorsPro.plus':'增加',
                    'OperatorsPro.thefirst':'第一个',
                    'OperatorsPro.thelast':'最后一个',
                    'OperatorsPro.all':'所有',
                    'OperatorsPro.ascending':'正序',
                    'OperatorsPro.descending':'倒序',
                    'OperatorsPro.keys':'键',
                    'OperatorsPro.values':'值',
                    'OperatorsPro.datas':'数据',
                    'OperatorsPro.TYPE_NUMBER': '数字',
                    'OperatorsPro.TYPE_POSITIVE_NUMBER': '正数',
                    'OperatorsPro.TYPE_NEGATIVE_NUMBER': '负数',
                    'OperatorsPro.TYPE_EVEN_NUMBER': '偶数',
                    'OperatorsPro.TYPE_ODD_NUMBER': '奇数',
                    'OperatorsPro.TYPE_INTEGER_NUMBER': '整数',
                    'OperatorsPro.TYPE_DECIMAL_NUMBER': '小数',
                    'OperatorsPro.TYPE_PRIME_NUMBER': '质数',
                    'OperatorsPro.TYPE_COMPOSITE_NUMBER': '合数',
                    'OperatorsPro.TYPE_TEXT': '文字',
                    'OperatorsPro.TYPE_BOOLEAN': '布尔值',
                    'OperatorsPro.NAND': '与非',
                    'OperatorsPro.NOR': '或非',
                    'OperatorsPro.XOR': '异或',
                    'OperatorsPro.XNOR': '同或',
                    'OperatorsPro.boolean':'布尔值',
                    'OperatorsPro.number':'数字',
                    'OperatorsPro.arrayorobject':'数组或对象',
                    'OperatorsPro.string':'字符串',
                    'OperatorsPro.undefined':'空值',
                    'OperatorsPro.hello':'你好',
                    'OperatorsPro.yes':'是',
                    'OperatorsPro.no':'否',
                    'OperatorsPro.Types':'类型',
                    'OperatorsPro.bCheckType':'[INPUT]是[MODE]',
                    'OperatorsPro.Logic':'逻辑',
                    'OperatorsPro.StringsandNumbers':'字符串和数字',
                    'OperatorsPro.rLoopNum': '让[NUM]在[START]到[END]中循环',
                    'OperatorsPro.rMapOff': '映射[NUM]从[START1]~[END1]到[START2]~[END2]',
                    'OperatorsPro.ArrayandObject':'数组与对象',
                    'OperatorsPro.More':'更多',
                    'OperatorsPro.Tobecontinued':'未完待续'
                },
                en: {
                    'OperatorsPro.rMenuTypeof':'type of[a]as[b],[c]Object and Array',
                    'OperatorsPro.bMenuTypeof':'type of[a]as[b]is[c]',
                    'OperatorsPro.rJSONTypeof':'type of[a]as JSON',
                    'OperatorsPro.bJSONTypeof':'type of[a]as JSON is[b]',
                    'OperatorsPro.bMenuToBoolean':'[c][a][b]',
                    'OperatorsPro.rMenuIf':'if[a][b]then[c]else[d]',
                    'OperatorsPro.bMenuAnd':'[e][a][b][c][d]',
                    'OperatorsPro.rIf': 'if[a]then[b]else[c]',
                    'OperatorsPro.bAnd': '[a]and[b]',
                    'OperatorsPro.bOr': '[a]or[b]',
                    'OperatorsPro.bNot': 'not[a]',
                    'OperatorsPro.rPadStart':'[a]inserts[b]to let length be[c]',
                    'OperatorsPro.rPadEnd':'[a]joins[b]to let length be[c]',
                    'OperatorsPro.rRemove':'remove[b]from[a]',
                    'OperatorsPro.rInterchange':'[a]interchanges[b]and[c]',
                    'OperatorsPro.rReplaceExcept':'replace[b]except[c]in[a]with[d]',
                    'OperatorsPro.bMenuUndefined':'[a]is[b][c]',
                    'OperatorsPro.rDefault':'[a],default=[b]',
                    'OperatorsPro.bDefined':'[a]is defined',
                    'OperatorsPro.bUndefined':'[a]is undefined',
                    'OperatorsPro.bMenuEqual':'[a][b][c],because of their[d]',
                    'OperatorsPro.bNotstrictlyequal':'[a]is not identically[b]',
                    'OperatorsPro.bNotcontain':'[a]does not contain[b]',
                    'OperatorsPro.rRandom':'pick random 0 to 1',
                    'OperatorsPro.rNearestMultiple':'multiple of[b]near[a]',
                    'OperatorsPro.rMod':'[a]mod[b]',
                    'OperatorsPro.rRound':'round[a]to[b]decimal places',
                    'OperatorsPro.rRintFromTo':'round[a]from[b]to[c]decimal places',
                    'OperatorsPro.rRintToTimes':'round[a]to[b]decimal places,round it[c]times',
                    'OperatorsPro.rRintTimesTo':'round[a][b]times to[c]decimal places',
                    'OperatorsPro.rPI':'round[i]to[a]decimal places',
                    'OperatorsPro.rMenuRad':'[a][b][c]in rad',
                    'OperatorsPro.rMenuToOneHundredEighty':'[a][b]changes into[c]',
                    'OperatorsPro.rRadSin':'sin[a]in rad',
                    'OperatorsPro.rRadCos':'cos[a]in rad',
                    'OperatorsPro.rRadTan':'tan[a]in rad',
                    'OperatorsPro.rRadAsin':'asin[a]in rad',
                    'OperatorsPro.rRadAcos':'acos[a]in rad',
                    'OperatorsPro.rRadAtan':'atan[a]in rad',
                    'OperatorsPro.rToOneHundredEighty':'[a]changes into -180~180',
                    'OperatorsPro.rToThreeHundredSixty':'[a]changes into 0~360',
                    'OperatorsPro.rAddTo':'[a]add[b]to[c]',
                    'OperatorsPro.rMenuArrayRemoveItem':'delete item[c]of[a]as[b],return[d]',
                    'OperatorsPro.rArrayRemoveShift':'[a]delete the first item',
                    'OperatorsPro.rArrayRemovePop':'[a]delete the last item',
                    'OperatorsPro.rArrayRemoveItem':'delete item[b]of[a]',
                    'OperatorsPro.rArrayRemoveItems':'delete items[b]of[a]',
                    'OperatorsPro.rArrayRemoveItemtoitem':'delete item from[b]to[c]of[a]',
                    'OperatorsPro.rArrayReserveItem':'reserve item[b]of[a]',
                    'OperatorsPro.rMenuArrayRemove':'all[c][d]delete from[a]as[b],because of[e],return[f]',
                    'OperatorsPro.rArrayRemoveJSON':'all JSON[b]delete from[a]',
                    'OperatorsPro.rArrayRemoveStr':'all "[b]" delete from[a]',
                    'OperatorsPro.rMenuArrayRemovenumber':'all[c][d][e]delete from[a]as[b],because of[f],return[g]',
                    'OperatorsPro.rArrayRemoveBigNumber':'number>[b]delete from[a]',
                    'OperatorsPro.rArrayRemoveNotSmallNumber':'number≥[b]delete from[a]',
                    'OperatorsPro.rArrayRemoveSmallNumber':'number<[b]delete from[a]',
                    'OperatorsPro.rArrayRemoveNotBigNumber':'number≤[b]delete from[a]',
                    'OperatorsPro.rArrayRemoveNumber':'all number[b]delete from[a]',
                    'OperatorsPro.rArrayRemove':'all[b]delete from[a]',
                    'OperatorsPro.rMenuArrayInsert':'[d][e][f]at item[c]of[a]as[b],return[g]',
                    'OperatorsPro.rArrayUnshiftJSON':'[a]inserts JSON[b]at the first one',
                    'OperatorsPro.rArrayUnshiftStr':'[a]inserts "[b]" at the first one',
                    'OperatorsPro.rArrayUnshiftNumber':'[a]inserts number[b]at the first one',
                    'OperatorsPro.rArrayUnshift':'[a]inserts[b]at the first one',
                    'OperatorsPro.rArrayPushJSON':'[a]inserts JSON[b]at the last one',
                    'OperatorsPro.rArrayPushStr':'[a]inserts "[b]" at the last one',
                    'OperatorsPro.rArrayPushNumber':'[a]inserts number[b]at the last one',
                    'OperatorsPro.rArrayPush':'[a]inserts[b]at the last one',
                    'OperatorsPro.rArrayInsertJSON':'[a]inserts JSON[b]at[c]',
                    'OperatorsPro.rArrayInsertStr':'[a]inserts "[b]" at[c]',
                    'OperatorsPro.rArrayInsertNumber':'[a]inserts number[b]at[c]',
                    'OperatorsPro.rArrayInsert':'[a]inserts[b]at[c]',
                    'OperatorsPro.rArrayInsertJSONindextoindex':'[a]inserts JSON[b]from[c]to[d]',
                    'OperatorsPro.rArrayInsertStrindextoindex':'[a]inserts "[b]" from[c]to[d]',
                    'OperatorsPro.rArrayInsertNumberindextoindex':'[a]inserts number[b]from[c]to[d]',
                    'OperatorsPro.rArrayInsertindextoindex':'[a]inserts[b]from[c]to[d]',
                    'OperatorsPro.rArrayMove':'[a]item[b]move to[c]',
                    'OperatorsPro.rArrayReplaceJSON':'set item[b]of[a]to JSON[c]',
                    'OperatorsPro.rArrayReplaceStr':'set item[b]of[a]to "[c]"',
                    'OperatorsPro.rArrayReplaceNumber':'set item[b]of[a]to number[c]',
                    'OperatorsPro.rArrayReplace':'set item[b]of[a]to[c]',
                    'OperatorsPro.rArrayReplaceindexesJSON':'set items[b]of[a]to JSON[c]',
                    'OperatorsPro.rArrayReplaceindexesstr':'set items[b]of[a]to "[c]"',
                    'OperatorsPro.rArrayReplaceindexesnumber':'set items[b]of[a]to number[c]',
                    'OperatorsPro.rArrayReplaceindexes':'set items[b]of[a]to[c]',
                    'OperatorsPro.rArrayReplaceindextoindexJSON':'set item from[b]to[c]of[a]to JSON[d]',
                    'OperatorsPro.rArrayReplaceindextoindexstr':'set item from[b]to[c]of[a]to "[d]"',
                    'OperatorsPro.rArrayReplaceindextoindexnumber':'set item from[b]to[c]of[a]to number[d]',
                    'OperatorsPro.rArrayReplaceindextoindex':'set item from[b]to[c]of[a]to[d]',
                    'OperatorsPro.rArrayInterchange':'[a]interchanges item[b]and item[c]',
                    'OperatorsPro.rArrayPlusIndex':'change by[c]at[b]of[a]',
                    'OperatorsPro.rArrayPlusIndextoindex':'change by[d]from[b]to[c]of[a]',
                    'OperatorsPro.rArrayPlus':'change by[b]at every item of[a]',
                    'OperatorsPro.rMenuArrayItem':'item[c]of[a]as[b],return[d]',
                    'OperatorsPro.rArrayShiftJSON':'the first item as JSON of[a]',
                    'OperatorsPro.rArrayShift':'the first item of[a]',
                    'OperatorsPro.rArrayPopJSON':'the last item as JSON of[a]',
                    'OperatorsPro.rArrayPop':'the last item of[a]',
                    'OperatorsPro.rArrayItemJSON':'item[b]as JSON of[a]',
                    'OperatorsPro.rArrayItem':'item[b]of[a]',
                    'OperatorsPro.rArrayItems':'items[b]of[a]',
                    'OperatorsPro.rArrayItemtoitem':'item from[b]to[c]of[a]',
                    'OperatorsPro.rMenuArrayIndex':'[c][d][e]in[a]as[b],because of[f]',
                    'OperatorsPro.rMenuArrayIndexnumber':'[c][d][e][f]in[a]as[b],because of[g]',
                    'OperatorsPro.rArrayIndexJSON':'the first JSON[b]in[a]',
                    'OperatorsPro.rArrayIndexStr':'the first "[b]" in[a]',
                    'OperatorsPro.rArrayFindIndexBigNumber':'the first number>[b]in[a]',
                    'OperatorsPro.rArrayFindIndexNotSmallNumber':'the first number≥[b]in[a]',
                    'OperatorsPro.rArrayFindIndexSmallNumber':'the first number<[b]in[a]',
                    'OperatorsPro.rArrayFindIndexNotBigNumber':'the first number≤[b]in[a]',
                    'OperatorsPro.rArrayIndexNumber':'the first number[b]in[a]',
                    'OperatorsPro.rArrayIndex':'the first[b]in[a]',
                    'OperatorsPro.rArrayLastIndexJSON':'the last JSON[b]in[a]',
                    'OperatorsPro.rArrayLastIndexStr':'the last "[b]" in[a]',
                    'OperatorsPro.rArrayLastIndexNumber':'the last number[b]in[a]',
                    'OperatorsPro.rArrayLastIndex':'the last[b]in[a]',
                    'OperatorsPro.rArrayAllIndexJSON':'all JSON[b]in[a]',
                    'OperatorsPro.rArrayAllIndexStr':'all "[b]" in[a]',
                    'OperatorsPro.rArrayAllIndexNumber':'all number[b]in[a]',
                    'OperatorsPro.rArrayAllIndex':'all[b]in[a]',
                    'OperatorsPro.rMenuArrayCount':'count[c][d]in[a]as[b],because of[e]',
                    'OperatorsPro.rArrayCountJSON':'count JSON[b]in[a]',
                    'OperatorsPro.rArrayCountStr':'count "[b]" in[a]',
                    'OperatorsPro.rMenuArrayCountnumber':'count[c][d][e]in[a]as[b],because of[f]',
                    'OperatorsPro.rArrayCountBigNumber':'count number>[b]in[a]',
                    'OperatorsPro.rArrayCountNotSmallNumber':'count number≥[b]in[a]',
                    'OperatorsPro.rArrayCountSmallNumber':'count number<[b]in[a]',
                    'OperatorsPro.rArrayCountNotBigNumber':'count number≤[b]in[a]',
                    'OperatorsPro.rArrayCountNumber':'count number[b]in[a]',
                    'OperatorsPro.rArrayCount':'count[b]in[a]',
                    'OperatorsPro.rMenuArrayLength':'[c][a]as[b]',
                    'OperatorsPro.rArrayLength':'length of[a]',
                    'OperatorsPro.rArraySum':'sum of[a]',
                    'OperatorsPro.rArrayProduct':'product of[a]',
                    'OperatorsPro.rArrayAverage':'average of[a]',
                    'OperatorsPro.rArrayMax':'max[a]',
                    'OperatorsPro.rArrayMin':'min[a]',
                    'OperatorsPro.rMenuArraySort':'sort[a]as[b]by[c],return[d]',
                    'OperatorsPro.rArraySortNaturalOrder':'sort[a]by ascending',
                    'OperatorsPro.rArraySortReverseOrder':'sort[a]by descending',
                    'OperatorsPro.rArrayReverse':'reverse[a]',
                    'OperatorsPro.bMenuArrayHave':'[a]as[b][c][d][e],because of[f]',
                    'OperatorsPro.bArrayHaveJSON':'[a]contains JSON[b]',
                    'OperatorsPro.bArrayHaveStr':'[a]contains "[b]"',
                    'OperatorsPro.bMenuArrayHavenumber':'[a]as[b][c][d][e][f],because of[g]',
                    'OperatorsPro.bArrayHaveBigNumber':'[a]contains number>[b]',
                    'OperatorsPro.bArrayHaveNotSmallNumber':'[a]contains number≥[b]',
                    'OperatorsPro.bArrayHaveSmallNumber':'[a]contains number<[b]',
                    'OperatorsPro.bArrayHaveNotBigNumber':'[a]contains number≤[b]',
                    'OperatorsPro.bArrayHaveNumber':'[a]contains number[b]',
                    'OperatorsPro.bArrayHave':'[a]contains[b]',
                    'OperatorsPro.bArrayBeJSON':'[a]only contains SJON[b]',
                    'OperatorsPro.bArrayBeStr':'[a]only contains "[b]"',
                    'OperatorsPro.bArrayBeBigNumber':'[a]only contains number>[b]',
                    'OperatorsPro.bArrayBeNotSmallNumber':'[a]only contains number≥[b]',
                    'OperatorsPro.bArrayBeSmallNumber':'[a]only contains number<[b]',
                    'OperatorsPro.bArrayBeNotBigNumber':'[a]only contains number≤[b]',
                    'OperatorsPro.bArrayBeNumber':'[a]only contains number[b]',
                    'OperatorsPro.bArrayBe':'[a]only contains[b]',
                    'OperatorsPro.bArrayStrictlyEqual':'[a]is identically[b]',
                    'OperatorsPro.bArrayClear':'[a]has nothing',
                    'OperatorsPro.bIsArray':'[a]is Array',
                    'OperatorsPro.rObjectRemove':'delete key[b]from[a]',
                    'OperatorsPro.rObjectRemovekeys':'delete keys[b]from[a]',
                    'OperatorsPro.rMenuObjectSet':'[d][e][f]at member[c]of[a]as[b],return[g]',
                    'OperatorsPro.rObjectPutKeyJSON':'set[b]in[a]to JSON[c]',
                    'OperatorsPro.rObjectPutKeyStr':'set[b]in[a]to"[c]"',
                    'OperatorsPro.rObjectPutKeyNumber':'set number[b]in[a]to[c]',
                    'OperatorsPro.rObjectPutKey':'set[b]in[a]to[c]',
                    'OperatorsPro.rObjectPlusKey':'value of key[b]change by[c]in[a]',
                    'OperatorsPro.rObjectPlus':'values change by[b]in[a]',
                    'OperatorsPro.rMenuObjectMember':'member[c]of[a]as[b],return[d]',
                    'OperatorsPro.rObjectValueJSON':'value as JSON of key[b]in[a]',
                    'OperatorsPro.rObjectValue':'value of key[b]in[a]',
                    'OperatorsPro.rObjectKeyJSON':'key of the first value JSON[b]in[a]',
                    'OperatorsPro.rObjectKeyStr':'key of the first value "[b]" in[a]',
                    'OperatorsPro.rObjectKeyNumber':'key of the first value=[b]in[a]',
                    'OperatorsPro.rObjectKey':'key of the first value[b]in[a]',
                    'OperatorsPro.rObjectLastKeyJSON':'key of the last value JSON[b]in[a]',
                    'OperatorsPro.rObjectLastKeyStr':'key of the last value "[b]" in[a]',
                    'OperatorsPro.rObjectLastKeyNumber':'key of the last value=[b]in[a]',
                    'OperatorsPro.rObjectLastKey':'key of the last value[b]in[a]',
                    'OperatorsPro.rObjectAllKeyJSON':'keys of value JSON[b]in[a]',
                    'OperatorsPro.rObjectAllKeyStr':'keys of value "[b]" in[a]',
                    'OperatorsPro.rObjectAllKeyNumber':'keys of value=[b]in[a]',
                    'OperatorsPro.rObjectAllKey':'keys of value[b]in[a]',
                    'OperatorsPro.rMenuObjectKeys':'[c]of[a]as[b],return[d]',
                    'OperatorsPro.rObjectLength':'length of[a]',
                    'OperatorsPro.rObjectKeys':'keys of[a]',
                    'OperatorsPro.rObjectValues':'values of[a]',
                    'OperatorsPro.rObjectEntries':'data of[a]',
                    'OperatorsPro.rObjectFromEntries':'[a]as Object',
                    'OperatorsPro.rObjectPutAll':'concat[a][b]',
                    'OperatorsPro.bObjectHasOwnProperty':'[a]contians key[b]',
                    'OperatorsPro.bObjectClear':'[a]has nothing',
                    'OperatorsPro.bIsObject':'[a]is Object',
	                'OperatorsPro.Operators':'Operators',
                    'OperatorsPro.showBlock': 'Show Other Blocks',
                    'OperatorsPro.hideBlock': 'Hide Other Blocks',
                    'OperatorsPro.showBlock?':'To avoid clutter, a few blocks are hidden.\n Do you want to show them?',
                    'OperatorsPro.true':'true',
                    'OperatorsPro.false':'false',
                    'OperatorsPro.asoriginal':'as original',
                    'OperatorsPro.asJSON':'as JSON',
                    'OperatorsPro.asboolean':'as boolean',
                    'OperatorsPro.toboolean':'to boolean',
                    'OperatorsPro.asnumber':'as number',
                    'OperatorsPro.tonumber':'to number',
                    'OperatorsPro.asstring':'as string',
                    'OperatorsPro.and':'and',
                    'OperatorsPro.or':'or',
                    'OperatorsPro.is':'is',
                    'OperatorsPro.not':'not',
                    'OperatorsPro.roughly':'roughly',
                    'OperatorsPro.strictly':'strictly',
                    'OperatorsPro.defined':'defined',
                    'OperatorsPro.essence':'essence',
                    'OperatorsPro.content':'content',
                    'OperatorsPro.type':'type',
                    'OperatorsPro.contentandtype':'content and type',
                    'OperatorsPro.essenceandcase':'essence and case',
                    'OperatorsPro.contentandcase':'content and case',
                    'OperatorsPro.contentandtypeandcase':'content and type and case',
                    'OperatorsPro.original':'original',
                    'OperatorsPro.confuse':'confuse',
                    'OperatorsPro.distinguish':'distinguish',
                    'OperatorsPro.array':'Array',
                    'OperatorsPro.object':'Object',
                    'OperatorsPro.value':'value',
                    'OperatorsPro.lengthof':'length of',
                    'OperatorsPro.sumof':'sum of',
                    'OperatorsPro.productof':'product of',
                    'OperatorsPro.averageof':'average of',
                    'OperatorsPro.max':'max',
                    'OperatorsPro.min':'min',
                    'OperatorsPro.contains':'contains',
                    'OperatorsPro.onlycontains':'only contains',
                    'OperatorsPro.numericalvalue':'numerical value',
                    'OperatorsPro.length':'length',
                    'OperatorsPro.insert':'insert',
                    'OperatorsPro.set':'set',
                    'OperatorsPro.plus':'plus',
                    'OperatorsPro.thefirst':'the first',
                    'OperatorsPro.thelast':'the last',
                    'OperatorsPro.all':'all',
                    'OperatorsPro.ascending':'ascending',
                    'OperatorsPro.descending':'descending',
                    'OperatorsPro.keys':'keys',
                    'OperatorsPro.values':'values',
                    'OperatorsPro.datas':'datas',
                    'OperatorsPro.TYPE_NUMBER': 'number',
                    'OperatorsPro.TYPE_POSITIVE_NUMBER': 'positive number',
                    'OperatorsPro.TYPE_NEGATIVE_NUMBER': 'negative number',
                    'OperatorsPro.TYPE_EVEN_NUMBER': 'even number',
                    'OperatorsPro.TYPE_ODD_NUMBER': 'odd number',
                    'OperatorsPro.TYPE_INTEGER_NUMBER': 'integer number',
                    'OperatorsPro.TYPE_DECIMAL_NUMBER': 'decimal number',
                    'OperatorsPro.TYPE_PRIME_NUMBER': 'prime number',
                    'OperatorsPro.TYPE_COMPOSITE_NUMBER': 'composite number',
                    'OperatorsPro.TYPE_TEXT': 'text',
                    'OperatorsPro.TYPE_BOOLEAN': 'boolean',
                    'OperatorsPro.NAND': 'nand',
                    'OperatorsPro.NOR': 'nor',
                    'OperatorsPro.XOR': 'xor',
                    'OperatorsPro.XNOR': 'xnor',
                    'OperatorsPro.boolean':'boolean',
                    'OperatorsPro.number':'number',
                    'OperatorsPro.arrayorobject':'Array or Object',
                    'OperatorsPro.string':'string',
                    'OperatorsPro.undefined':'undefined',
                    'OperatorsPro.hello':'hello',
                    'OperatorsPro.yes':'yes',
                    'OperatorsPro.no':'no',
                    'OperatorsPro.Types':'Types',
                    'OperatorsPro.bCheckType':'[INPUT]is[MODE]',
                    'OperatorsPro.Logic':'Logic',
                    'OperatorsPro.StringsandNumbers':'Strings and Numbers',
                    'OperatorsPro.rLoopNum': '[NUM]loop in[START]to[END]',
                    'OperatorsPro.rMapOff': 'map[NUM]from[START1]~[END1]to[START2]~[END2]',
                    'OperatorsPro.ArrayandObject':'Array andy Object',
                    'OperatorsPro.More':'More',
                    'OperatorsPro.Tobecontinued':'To be continued'
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
                docsURI:'https://learn.ccw.site/article/306d54d0-b83a-43f3-ba84-bd41a7183239',
                id:OperatorsProextensionId,
                name:this.formatMessage('OperatorsPro.Operators'),
                blockIconURI:'',
                menuIconURI: OperatorsProicon,
                color1:'#59c059',
                color2:'#8bbf8b',
                blocks:[
                    {
                        blockType: 'button',
                        hideFromPalette: !this.hideExtraBlocks,
                        text: this.formatMessage('OperatorsPro.showBlock'),
                        onClick: () => {
                          if (confirm(this.formatMessage('OperatorsPro.showBlock?'))) {
                            this.hideExtraBlocks = false;
                            this.storeExtConfig();
                            this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE')
                          }
                        }
                    },
                    {
                        blockType: 'button',
                        text: this.formatMessage('OperatorsPro.hideBlock'),
                        hideFromPalette: this.hideExtraBlocks,
                        onClick: () => {
                          this.hideExtraBlocks = true;
                          this.storeExtConfig();
                          this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE')
                        }
                    },
                    {
                        opcode:'rTest',
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
                    {
                        blockType: Scratch.BlockType.LABEL,
                        text: this.formatMessage('OperatorsPro.Types')
                    },
                    {
                        opcode:'rMenuUnusualWord',
                        blockType:'reporter',
                        text: '[a]',
                        disableMonitor: true,
                        arguments:{
                            a:{
                                menu:'unusualword',
                                defaultValue:true
                            }
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode:'rMenuToType',
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
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode:'rMenuTypeof',
                        blockType:'reporter',
                        text:this.formatMessage('OperatorsPro.rMenuTypeof'),
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
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode:'bMenuTypeof',
                        blockType:'Boolean',
                        text:this.formatMessage('OperatorsPro.bMenuTypeof'),
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
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode:'rJSONTypeof',
                        blockType:'reporter',
                        text:this.formatMessage('OperatorsPro.rJSONTypeof'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'[]'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'bJSONTypeof',
                        blockType:'Boolean',
                        text:this.formatMessage('OperatorsPro.bJSONTypeof'),
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
                    '---',
                    {
                        opcode: 'bCheckType',
                        blockType:'Boolean',
                        text:this.formatMessage('OperatorsPro.bCheckType'),
                        arguments: {
                            INPUT: {
                                type:'string'
                            },
                            MODE: {
                                type:'string',
                                menu: 'CHECK_TYPE',
                                defaultValue: 'number'
                            }
                        },
                    },
                    {
                        blockType: Scratch.BlockType.LABEL,
                        text: this.formatMessage('OperatorsPro.Logic')
                    },
                    {
                        opcode:'bMenuToBoolean',
                        blockType:'Boolean',
                        text:this.formatMessage('OperatorsPro.bMenuToBoolean'),
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
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode:'rMenuIf',
                        blockType:'reporter',
                        text:this.formatMessage('OperatorsPro.rMenuIf'),
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
                                defaultValue:this.formatMessage('OperatorsPro.yes')
                            },
                            d:{
                                type:'string',
                                defaultValue:this.formatMessage('OperatorsPro.no')
                            }
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode:'bMenuAnd',
                        blockType:'Boolean',
                        text:this.formatMessage('OperatorsPro.bMenuAnd'),
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
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode:'rReporter',
                        blockType:'reporter',
                        text:'[a]',
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:this.formatMessage('OperatorsPro.hello')
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rBoolean',
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
                        opcode:'rIf',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rIf'),
                        arguments:{
                            a:{
                                type:'string'
                            },
                            b:{
                                type:'string',
                                defaultValue:this.formatMessage('OperatorsPro.yes')
                            },
                            c:{
                                type:'string',
                                defaultValue:this.formatMessage('OperatorsPro.no')
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rIfToBoolean',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rIf'),
                        arguments:{
                            b:{
                                type:'string',
                                defaultValue:this.formatMessage('OperatorsPro.yes')
                            },
                            c:{
                                type:'string',
                                defaultValue:this.formatMessage('OperatorsPro.no')
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'bAnd',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bAnd'),
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
                        opcode:'bAndToBoolean',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bAnd'),
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'bOr',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bOr'),
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
                        opcode:'bOrToBoolean',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bOr'),
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'bNot',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bNot'),
                        arguments:{
                            a:{
                                type:'string'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'bNotToBoolean',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bNot'),
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'bLogicGateOperation',
                        blockType: 'Boolean',
                        text: '[OPERAND1][SYMBOL][OPERAND2]',
                        arguments: {
                            SYMBOL: {
                                menu: 'LOGIC_GATE_SYMBOL'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        blockType: Scratch.BlockType.LABEL,
                        text: this.formatMessage('OperatorsPro.StringsandNumbers')
                    },
                    {
                        opcode:'rJoin',
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
                        opcode:'rPadStart',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rPadStart'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'w'
                            },
                            b:{
                                type:'string',
                                defaultValue:'c'
                            },
                            c:{
                                type:'string',
                                defaultValue:3
                            }
                        }
                    },
                    {
                        opcode:'rPadEnd',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rPadEnd'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'w'
                            },
                            b:{
                                type:'string',
                                defaultValue:'c'
                            },
                            c:{
                                type:'string',
                                defaultValue:3
                            }
                        }
                    },
                    {
                        opcode:'rRemove',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rRemove'),
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
                        opcode:'rInterchange',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rInterchange'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'ccw'
                            },
                            b:{
                                type:'string',
                                defaultValue:'w'
                            },
                            c:{
                                type:'string',
                                defaultValue:'c'
                            }
                        }
                    },
                    {
                        opcode:'rReplaceExcept',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rReplaceExcept'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'doggy'
                            },
                            b:{
                                type:'string',
                                defaultValue:'g'
                            },
                            c:{
                                type:'string',
                                defaultValue:'gy'
                            },
                            d:{
                                type:'string',
                                defaultValue:'d'
                            }
                        }
                    },
                    '---',
                    {
                        opcode:'bMenuUndefined',
                        blockType:'Boolean',
                        text:this.formatMessage('OperatorsPro.bMenuUndefined'),
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
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode:'rDefault',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rDefault'),
                        arguments:{
                            b:{
                                type:'string'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'bDefined',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bDefined'),
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'bUndefined',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bUndefined'),
                        hideFromPalette: this.hideExtraBlocks
                    },
                    '---',
                    {
                        opcode:'bMenuEqual',
                        blockType:'Boolean',
                        text:this.formatMessage('OperatorsPro.bMenuEqual'),
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
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode: 'bCompare',
                        blockType:'Boolean',
                        text: '[OPERAND1][SYMBOL][OPERAND2]',
                        arguments: {
                            OPERAND1: {
                                type:'string'
                            },
                            OPERAND2: {
                                type:'string',
                                defaultValue: '50'
                            },
                            SYMBOL: {
                                menu: 'EQUAL_SYMBOL',
                                defaultValue: 'approximatelyEqual'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'bContinuousCompare',
                        blockType:'Boolean',
                        text: '[OPERAND1][SYMBOL1][OPERAND2][SYMBOL2][OPERAND3]',
                        arguments: {
                            OPERAND1: {
                                type:'string'
                            },
                            OPERAND2: {
                                type:'string'
                            },
                            OPERAND3: {
                                type:'string'
                            },
                            SYMBOL1: {
                                menu: 'EQUAL_SYMBOL',
                                defaultValue: 'parallel'
                            },
                            SYMBOL2: {
                                menu: 'EQUAL_SYMBOL',
                                defaultValue: 'vertical'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'bApproximatelyEqual',
                        blockType:'Boolean',
                        text: '[OPERAND1]≈[OPERAND2]±[NUM]',
                        arguments: {
                            OPERAND1: {
                                type:'string',
                                defaultValue:5
                            },
                            OPERAND2: {
                                type:'string',
                                defaultValue:6
                            },
                            NUM: {
                                type:'string',
                                defaultValue:1
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'bNotstrictlyequal',
                        blockType:'Boolean',
                        text:this.formatMessage('OperatorsPro.bNotstrictlyequal'),
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
                        opcode:'bNotcontain',
                        blockType:'Boolean',
                        text:this.formatMessage('OperatorsPro.bNotcontain'),
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
                    '---',
                    {
                        opcode:'rNegative',
                        blockType:'reporter',
                        text:'-[NUM]',
                        arguments: {
                            NUM: {
                                type:'string'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rSign',
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
                        opcode:'rAddition',
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
                        opcode:'rAdditionmultiplication',
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
                        opcode:'rExponent',
                        blockType:'reporter',
                        text:'[NUM1]^[NUM2]',
                        arguments: {
                            NUM1: {
                                type:'string'
                            },
                            NUM2: {
                                type:'string'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rRoot',
                        blockType:'reporter',
                        text:'[NUM1]√[NUM2]',
                        arguments: {
                            NUM1: {
                                type:'string'
                            },
                            NUM2: {
                                type:'string'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rRandom',
                        blockType:'reporter',
                        text:this.formatMessage('OperatorsPro.rRandom'),
                        disableMonitor: true
                    },
                    {
                        opcode:'bNotequal',
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
                    '---',
                    {
                        opcode: 'rLoopNum',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rLoopNum'),
                        arguments: {
                            NUM: {
                                type:'string',
                                defaultValue:1
                            },
                            START: {
                                type:'string',
                                defaultValue:1
                            },
                            END: {
                                type:'string',
                                defaultValue:4
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'rMapOff',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rMapOff'),
                        arguments: {
                            NUM: {
                                type:'string',
                                defaultValue:10
                            },
                            START1: {
                                type:'string',
                                defaultValue:0
                            },
                            END1: {
                                type:'string',
                                defaultValue:100
                            },
                            START2: {
                                type:'string',
                                defaultValue:0
                            },
                            END2: {
                                type:'string',
                                defaultValue:1000
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rNearestMultiple',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rNearestMultiple'),
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
                        opcode:'rMod',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rMod'),
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
                        opcode:'rRound',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rRound'),
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
                        opcode:'rRintFromTo',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rRintFromTo'),
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
                        opcode:'rRintToTimes',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rRintToTimes'),
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
                        opcode:'rRintTimesTo',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rRintTimesTo'),
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
                        text:this.formatMessage('OperatorsPro.rPI'),
                        arguments:{
                            a:{
                                type:'string'
                            },
                            i:{
                                type:Scratch.ArgumentType.IMAGE,
                                dataURI:OperatorsPronumproicon,
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    '---',
                    {
                        opcode:'rMenuRad',
                        blockType:'reporter',
                        text:this.formatMessage('OperatorsPro.rMenuRad'),
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
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode:'rMenuToOneHundredEighty',
                        blockType:'reporter',
                        text:this.formatMessage('OperatorsPro.rMenuToOneHundredEighty'),
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
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode:'rRadSin',
                        blockType:'reporter',
                        text:this.formatMessage('OperatorsPro.rRadSin'),
                        arguments:{
                            a:{
                                type:'string'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rRadCos',
                        blockType:'reporter',
                        text:this.formatMessage('OperatorsPro.rRadCos'),
                        arguments:{
                            a:{
                                type:'string'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rRadTan',
                        blockType:'reporter',
                        text:this.formatMessage('OperatorsPro.rRadTan'),
                        arguments:{
                            a:{
                                type:'string'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rRadAsin',
                        blockType:'reporter',
                        text:this.formatMessage('OperatorsPro.rRadAsin'),
                        arguments:{
                            a:{
                                type:'string'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rRadAcos',
                        blockType:'reporter',
                        text:this.formatMessage('OperatorsPro.rRadAcos'),
                        arguments:{
                            a:{
                                type:'string'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rRadAtan',
                        blockType:'reporter',
                        text:this.formatMessage('OperatorsPro.rRadAtan'),
                        arguments:{
                            a:{
                                type:'string'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rSinMultiplication',
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
                        opcode:'rCosMultiplication',
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
                        opcode:'rTanMultiplication',
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
                        opcode:'rAsinDivision',
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
                        opcode:'rAcosDivision',
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
                        opcode:'rAtanDivision',
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
                        opcode:'rToOneHundredEighty',
                        blockType:'reporter',
                        text:this.formatMessage('OperatorsPro.rToOneHundredEighty'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:666
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rToThreeHundredSixty',
                        blockType:'reporter',
                        text:this.formatMessage('OperatorsPro.rToThreeHundredSixty'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:666
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rAddTo',
                        blockType:'reporter',
                        text:this.formatMessage('OperatorsPro.rAddTo'),
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
                    {
                        blockType: Scratch.BlockType.LABEL,
                        text: this.formatMessage('OperatorsPro.ArrayandObject')
                    },
                    {
                        opcode:'rMenuArrayRemoveItem',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rMenuArrayRemoveItem'),
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
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode:'rArrayRemoveShift',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayRemoveShift'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rArrayRemovePop',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayRemovePop'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rArrayRemoveItem',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayRemoveItem'),
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
                        opcode:'rArrayRemoveItems',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayRemoveItems'),
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
                        opcode:'rArrayRemoveItemtoitem',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayRemoveItemtoitem'),
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
                        opcode:'rArrayReserveItem',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayReserveItem'),
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
                        opcode:'rMenuArrayRemove',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rMenuArrayRemove'),
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
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode:'rArrayRemoveJSON',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayRemoveJSON'),
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
                        opcode:'rArrayRemoveStr',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayRemoveStr'),
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
                        opcode:'rMenuArrayRemovenumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rMenuArrayRemovenumber'),
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
                                menu:'compare',
                                defaultValue:0
                            },
                            d:{
                                type:'string',
                                defaultValue:1
                            },
                            e:{
                                menu:'tonumber',
                                defaultValue:0
                            },
                            f:{
                                menu:'numericalvalue',
                                defaultValue:0
                            },
                            g:{
                                menu:'string',
                                defaultValue:0
                            }
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode:'rArrayRemoveBigNumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayRemoveBigNumber'),
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
                        opcode:'rArrayRemoveNotSmallNumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayRemoveNotSmallNumber'),
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
                        opcode:'rArrayRemoveSmallNumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayRemoveSmallNumber'),
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
                        opcode:'rArrayRemoveNotBigNumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayRemoveNotBigNumber'),
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
                        opcode:'rArrayRemoveNumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayRemoveNumber'),
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
                        opcode:'rArrayRemove',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayRemove'),
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
                        opcode:'rMenuArrayInsert',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rMenuArrayInsert'),
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
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode:'rArrayUnshiftJSON',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayUnshiftJSON'),
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
                        opcode:'rArrayUnshiftStr',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayUnshiftStr'),
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
                        opcode:'rArrayUnshiftNumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayUnshiftNumber'),
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
                        opcode:'rArrayUnshift',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayUnshift'),
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
                        opcode:'rArrayPushJSON',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayPushJSON'),
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
                        opcode:'rArrayPushStr',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayPushStr'),
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
                        opcode:'rArrayPushNumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayPushNumber'),
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
                        opcode:'rArrayPush',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayPush'),
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
                        opcode:'rArrayInsertJSON',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayInsertJSON'),
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
                        opcode:'rArrayInsertStr',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayInsertStr'),
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
                        opcode:'rArrayInsertNumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayInsertNumber'),
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
                        opcode:'rArrayInsert',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayInsert'),
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
                        opcode:'rArrayInsertJSONindexes',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayInsertJSON'),
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
                        opcode:'rArrayInsertStrindexes',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayInsertStr'),
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
                        opcode:'rArrayInsertNumberindexes',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayInsertNumber'),
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
                        opcode:'rArrayInsertindexes',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayInsert'),
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
                        opcode:'rArrayInsertJSONindextoindex',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayInsertJSONindextoindex'),
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
                        opcode:'rArrayInsertStrindextoindex',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayInsertStrindextoindex'),
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
                        opcode:'rArrayInsertNumberindextoindex',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayInsertNumberindextoindex'),
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
                        opcode:'rArrayInsertindextoindex',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayInsertindextoindex'),
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
                        opcode:'rArrayMove',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayMove'),
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
                        opcode:'rArrayReplaceJSON',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayReplaceJSON'),
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
                        opcode:'rArrayReplaceStr',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayReplaceStr'),
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
                        opcode:'rArrayReplaceNumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayReplaceNumber'),
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
                        opcode:'rArrayReplace',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayReplace'),
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
                        opcode:'rArrayReplaceindexesJSON',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayReplaceindexesJSON'),
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
                        opcode:'rArrayReplaceindexesstr',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayReplaceindexesstr'),
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
                        opcode:'rArrayReplaceindexesnumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayReplaceindexesnumber'),
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
                        opcode:'rArrayReplaceindexes',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayReplaceindexes'),
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
                        opcode:'rArrayReplaceindextoindexJSON',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayReplaceindextoindexJSON'),
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
                        opcode:'rArrayReplaceindextoindexstr',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayReplaceindextoindexstr'),
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
                        opcode:'rArrayReplaceindextoindexnumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayReplaceindextoindexnumber'),
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
                        opcode:'rArrayReplaceindextoindex',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayReplaceindextoindex'),
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
                        opcode:'rArrayInterchange',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayInterchange'),
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
                        opcode:'rArrayPlusIndex',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayPlusIndex'),
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
                        opcode:'rArrayPlusIndexes',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayPlusIndex'),
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
                        opcode:'rArrayPlusIndextoindex',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayPlusIndextoindex'),
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
                        opcode:'rArrayPlus',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayPlus'),
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
                    '---',
                    {
                        opcode:'rMenuArrayItem',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rMenuArrayItem'),
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
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode:'rArrayShiftJSON',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayShiftJSON'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rArrayShift',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayShift'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rArrayPopJSON',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayPopJSON'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rArrayPop',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayPop'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rArrayItemJSON',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayItemJSON'),
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
                        opcode:'rArrayItem',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayItem'),
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
                        opcode:'rArrayItems',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayItems'),
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
                        opcode:'rArrayItemtoitem',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayItemtoitem'),
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
                        opcode:'rMenuArrayIndex',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rMenuArrayIndex'),
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
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode:'rMenuArrayIndexnumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rMenuArrayIndexnumber'),
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
                                menu:'compare',
                                defaultValue:0
                            },
                            e:{
                                type:'string',
                                defaultValue:1
                            },
                            f:{
                                menu:'tonumber',
                                defaultValue:0
                            },
                            g:{
                                menu:'numericalvalue',
                                defaultValue:0
                            }
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode:'rArrayIndexJSON',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayIndexJSON'),
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
                        opcode:'rArrayIndexStr',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayIndexStr'),
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
                        opcode:'rArrayFindIndexBigNumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayFindIndexBigNumber'),
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
                        opcode:'rArrayFindIndexNotSmallNumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayFindIndexNotSmallNumber'),
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
                        opcode:'rArrayFindIndexSmallNumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayFindIndexSmallNumber'),
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
                        opcode:'rArrayFindIndexNotBigNumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayFindIndexNotBigNumber'),
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
                        opcode:'rArrayIndexNumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayIndexNumber'),
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
                        opcode:'rArrayIndex',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayIndex'),
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
                        opcode:'rArrayLastIndexJSON',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayLastIndexJSON'),
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
                        opcode:'rArrayLastIndexStr',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayLastIndexStr'),
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
                        opcode:'rArrayLastIndexNumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayLastIndexNumber'),
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
                        opcode:'rArrayLastIndex',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayLastIndex'),
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
                        opcode:'rArrayAllIndexJSON',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayAllIndexJSON'),
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
                        opcode:'rArrayAllIndexStr',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayAllIndexStr'),
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
                        opcode:'rArrayAllIndexNumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayAllIndexNumber'),
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
                        opcode:'rArrayAllIndex',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayAllIndex'),
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
                        opcode:'rMenuArrayCount',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rMenuArrayCount'),
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
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode:'rArrayCountJSON',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayCountJSON'),
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
                        opcode:'rArrayCountStr',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayCountStr'),
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
                        opcode:'rMenuArrayCountnumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rMenuArrayCountnumber'),
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
                                menu:'compare',
                                defaultValue:0
                            },
                            d:{
                                type:'string',
                                defaultValue:1
                            },
                            e:{
                                menu:'tonumber',
                                defaultValue:0
                            },
                            f:{
                                menu:'numericalvalue',
                                defaultValue:0
                            }
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode:'rArrayCountBigNumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayCountBigNumber'),
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
                        opcode:'rArrayCountNotSmallNumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayCountNotSmallNumber'),
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
                        opcode:'rArrayCountSmallNumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayCountSmallNumber'),
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
                        opcode:'rArrayCountNotBigNumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayCountNotBigNumber'),
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
                        opcode:'rArrayCountNumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayCountNumber'),
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
                        opcode:'rArrayCount',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayCount'),
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
                        opcode:'rMenuArrayLength',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rMenuArrayLength'),
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
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode:'rArrayLength',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayLength'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'[1,1,4,5,1,4]'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rArraySum',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArraySum'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue: '[1,1,4,5,1,4]'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rArrayProduct',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayProduct'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue: '[1,1,4,5,1,4]'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rArrayAverage',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayAverage'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue: '[1,1,4,5,1,4]'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rArrayMax',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayMax'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue: '[1,1,4,5,1,4]'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rArrayMin',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayMin'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue: '[1,1,4,5,1,4]'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rMenuArraySort',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rMenuArraySort'),
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
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode:'rArraySortNaturalOrder',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArraySortNaturalOrder'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rArraySortReverseOrder',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArraySortReverseOrder'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rArrayReverse',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayReverse'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'bMenuArrayHave',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bMenuArrayHave'),
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
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode:'bArrayHaveJSON',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bArrayHaveJSON'),
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
                        opcode:'bArrayHaveStr',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bArrayHaveStr'),
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
                        opcode:'bMenuArrayHavenumber',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bMenuArrayHavenumber'),
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
                                menu:'compare',
                                defaultValue:0
                            },
                            e:{
                                type:'string',
                                defaultValue:1
                            },
                            f:{
                                menu:'tonumber',
                                defaultValue:0
                            },
                            g:{
                                menu:'numericalvalue',
                                defaultValue:0
                            }
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode:'bArrayHaveBigNumber',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bArrayHaveBigNumber'),
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
                        opcode:'bArrayHaveNotSmallNumber',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bArrayHaveNotSmallNumber'),
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
                        opcode:'bArrayHaveSmallNumber',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bArrayHaveSmallNumber'),
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
                        opcode:'bArrayHaveNotBigNumber',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bArrayHaveNotBigNumber'),
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
                        opcode:'bArrayHaveNumber',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bArrayHaveNumber'),
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
                        opcode:'bArrayHave',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bArrayHave'),
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
                        opcode:'bArrayBeJSON',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bArrayBeJSON'),
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
                        opcode:'bArrayBeStr',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bArrayBeStr'),
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
                        opcode:'bArrayBeBigNumber',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bArrayBeBigNumber'),
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
                        opcode:'bArrayBeNotSmallNumber',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bArrayBeNotSmallNumber'),
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
                        opcode:'bArrayBeSmallNumber',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bArrayBeSmallNumber'),
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
                        opcode:'bArrayBeNotBigNumber',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bArrayBeNotBigNumber'),
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
                        opcode:'bArrayBeNumber',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bArrayBeNumber'),
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
                        opcode:'bArrayBe',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bArrayBe'),
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
                    '---',
                    {
                        opcode:'bArrayEqual',
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
                        opcode:'bArrayStrictlyEqual',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bArrayStrictlyEqual'),
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
                        opcode:'bArrayClear',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bArrayClear'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'[]'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'bIsArray',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bIsArray'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'[]'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    '---',
                    {
                        opcode:'rObjectRemove',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectRemove'),
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
                        opcode:'rObjectRemovekeys',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectRemovekeys'),
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
                    '---',
                    {
                        opcode:'rMenuObjectSet',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rMenuObjectSet'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'{"a":0}'
                            },
                            b:{
                                menu:'JSON',
                                defaultValue:0
                            },
                            c:{
                                type:'string',
                                defaultValue:'b'
                            },
                            d:{
                                menu:'set',
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
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode:'rObjectPutKeyJSON',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectPutKeyJSON'),
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
                        opcode:'rObjectPutKeyStr',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectPutKeyStr'),
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
                        opcode:'rObjectPutKeyNumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectPutKeyNumber'),
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
                        opcode:'rObjectPutKey',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectPutKey'),
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
                        opcode:'rObjectPlusKey',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectPlusKey'),
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
                        opcode:'rObjectPlus',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectPlus'),
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
                    '---',
                    {
                        opcode:'rMenuObjectMember',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rMenuObjectMember'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'{"a":0}'
                            },
                            b:{
                                menu:'JSON',
                                defaultValue:0
                            },
                            c:{
                                type:'string',
                                defaultValue:'a'
                            },
                            d:{
                                menu:'string',
                                defaultValue:0
                            }
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode:'rObjectValueJSON',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectValueJSON'),
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
                        opcode:'rObjectValue',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectValue'),
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
                        opcode:'rObjectKeyJSON',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectKeyJSON'),
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
                        opcode:'rObjectKeyStr',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectKeyStr'),
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
                        opcode:'rObjectKeyNumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectKeyNumber'),
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
                        opcode:'rObjectKey',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectKey'),
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
                        opcode:'rObjectLastKeyJSON',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectLastKeyJSON'),
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
                        opcode:'rObjectLastKeyStr',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectLastKeyStr'),
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
                        opcode:'rObjectLastKeyNumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectLastKeyNumber'),
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
                        opcode:'rObjectLastKey',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectLastKey'),
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
                        opcode:'rObjectAllKeyJSON',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectAllKeyJSON'),
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
                        opcode:'rObjectAllKeyStr',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectAllKeyStr'),
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
                        opcode:'rObjectAllKeyNumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectAllKeyNumber'),
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
                        opcode:'rObjectAllKey',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectAllKey'),
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
                        opcode:'rMenuObjectKeys',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rMenuObjectKeys'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'{"a":0}'
                            },
                            b:{
                                menu:'JSON',
                                defaultValue:0
                            },
                            c:{
                                menu:'keys',
                                defaultValue:0
                            },
                            d:{
                                menu:'string',
                                defaultValue:0
                            }
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode:'rObjectLength',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectLength'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'{"name":"Shawn","job":"CCW creator"}'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rObjectKeys',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectKeys'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'{"name":"Shawn","job":"CCW creator"}'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rObjectValues',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectValues'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'{"name":"Shawn","job":"CCW creator"}'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rObjectEntries',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectEntries'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'{"name":"Shawn","job":"CCW creator"}'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rObjectFromEntries',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectFromEntries'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'[["name","Shawn"],["job","CCW creator"]]'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rObjectPutAll',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectPutAll'),
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
                        opcode:'rObjectPlusObject',
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
                        opcode:'bObjectHasOwnProperty',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bObjectHasOwnProperty'),
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
                    '---',
                    {
                        opcode:'bObjectClear',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bObjectClear'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'{}'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'bIsObject',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bIsObject'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'{}'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        blockType: Scratch.BlockType.LABEL,
                        text: this.formatMessage('OperatorsPro.Tobecontinued')
                    }
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
                                text: this.formatMessage('OperatorsPro.boolean'), 
                                value: 'boolean'
                            },
                            {
                                text: this.formatMessage('OperatorsPro.number'), 
                                value: 'number'
                            },
                            {
                                text: this.formatMessage('OperatorsPro.arrayorobject'), 
                                value: 'object'
                            },
                            {
                                text: this.formatMessage('OperatorsPro.string'), 
                                value: 'string'
                            },
                            {
                                text: this.formatMessage('OperatorsPro.undefined'), 
                                value: 'undefined'
                            }
                        ]
                    },
                    or:{
                        acceptReporters:true,
                        items:[
                            {
                                text: this.formatMessage('OperatorsPro.or'), 
                                value:0
                            },
                            {
                                text: this.formatMessage('OperatorsPro.and'), 
                                value:1
                            }
                        ]
                    },
                    asoriginal:{
                        acceptReporters:true,
                        items:[
                            {
                                text: this.formatMessage('OperatorsPro.asoriginal'), 
                                value:0
                            },
                            {
                                text: this.formatMessage('OperatorsPro.asboolean'), 
                                value:1
                            },
                            {
                                text: this.formatMessage('OperatorsPro.toboolean'), 
                                value:2
                            }
                        ]
                    },
                    not:{
                        acceptReporters:true,
                        items:[
                            {
                                text: this.formatMessage('OperatorsPro.not'), 
                                value:0
                            },
                            {
                                text: this.formatMessage('OperatorsPro.is'), 
                                value:1
                            }
                        ]
                    },
                    undefined:{
                        acceptReporters:true,
                        items:[
                            {
                                text: this.formatMessage('OperatorsPro.undefined'), 
                                value:0
                            },
                            {
                                text: this.formatMessage('OperatorsPro.defined'), 
                                value:1
                            }
                        ]
                    },
                    roughly:{
                        acceptReporters:true,
                        items:[
                            {
                                text: this.formatMessage('OperatorsPro.roughly'), 
                                value:0
                            },
                            {
                                text: this.formatMessage('OperatorsPro.strictly'), 
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
                                text: this.formatMessage('OperatorsPro.essence'), 
                                value:0
                            },
                            {
                                text: this.formatMessage('OperatorsPro.content'), 
                                value:1
                            },
                            {
                                text: this.formatMessage('OperatorsPro.type'), 
                                value:2
                            },
                            {
                                text: this.formatMessage('OperatorsPro.contentandtype'), 
                                value:3
                            },
                            {
                                text: this.formatMessage('OperatorsPro.essenceandcase'), 
                                value:4
                            },
                            {
                                text: this.formatMessage('OperatorsPro.contentandcase'), 
                                value:5
                            },
                            {
                                text: this.formatMessage('OperatorsPro.contentandtypeandcase'), 
                                value:6
                            }
                        ]
                    },
                    tonumber:{
                        acceptReporters:true,
                        items:[
                            {
                                text: this.formatMessage('OperatorsPro.asoriginal'), 
                                value:0
                            },
                            {
                                text: this.formatMessage('OperatorsPro.asnumber'), 
                                value:1
                            },
                            {
                                text: this.formatMessage('OperatorsPro.tonumber'), 
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
                                text: this.formatMessage('OperatorsPro.asJSON'),
                                value:0
                            },
                            {
                                 text: this.formatMessage('OperatorsPro.asoriginal'), 
                                value:1
                            },
                            {
                                text: this.formatMessage('OperatorsPro.asboolean'), 
                                value:2
                            },
                            {
                                text: this.formatMessage('OperatorsPro.toboolean'), 
                                value:3
                            },
                            {
                                text: this.formatMessage('OperatorsPro.asnumber'), 
                                value:4
                            },
                            {
                                text: this.formatMessage('OperatorsPro.tonumber'), 
                                value:5
                            },
                            {
                                text: this.formatMessage('OperatorsPro.asstring'), 
                                value:6
                            }
                        ]
                    },
                    original:{
                        acceptReporters:true,
                        items:[
                            {
                                text: this.formatMessage('OperatorsPro.original'), 
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
                                text: this.formatMessage('OperatorsPro.confuse'), 
                                value:0
                            },
                            {
                                text: this.formatMessage('OperatorsPro.distinguish'), 
                                value:1
                            }
                        ]
                    },
                    array:{
                        acceptReporters:true,
                        items:[
                            {
                                text: this.formatMessage('OperatorsPro.array'), 
                                value: 'array'
                            },
                            {
                                text: this.formatMessage('OperatorsPro.object'), 
                                value: 'object'
                            },
                            {
                                text: this.formatMessage('OperatorsPro.boolean'), 
                                value: 'boolean'
                            },
                            {
                                text: this.formatMessage('OperatorsPro.number'), 
                                value: 'number'
                            },
                            {
                                text: this.formatMessage('OperatorsPro.arrayorobject'), 
                                value: 'array or object'
                            },
                            {
                                text: this.formatMessage('OperatorsPro.string'), 
                                value: 'string'
                            },
                            {
                                text: this.formatMessage('OperatorsPro.undefined'), 
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
                                text: this.formatMessage('OperatorsPro.original'), 
                                value: 1
                            }
                        ]
                    },
                    length:{
                        acceptReporters:true,
                        items:[
                            {
                                text: this.formatMessage('OperatorsPro.lengthof'), 
                                value: 0
                            },
                            {
                                text: this.formatMessage('OperatorsPro.sumof'), 
                                value: 1
                            },
                            {
                                text: this.formatMessage('OperatorsPro.productof'), 
                                value: 2
                            },
                            {
                                text: this.formatMessage('OperatorsPro.averageof'), 
                                value: 3
                            },
                            {
                                text: this.formatMessage('OperatorsPro.max'), 
                                value: 4
                            },
                            {
                                text: this.formatMessage('OperatorsPro.min'), 
                                value: 5
                            }
                        ]
                    },
                    contains:{
                        acceptReporters:true,
                        items:[
                            {
                                text: this.formatMessage('OperatorsPro.contains'), 
                                value: 0
                            },
                            {
                                text: this.formatMessage('OperatorsPro.onlycontains'), 
                                value: 1
                            }
                        ]
                    },
                    string:{
                        acceptReporters:true,
                        items:[
                            {
                                text: this.formatMessage('OperatorsPro.string'), 
                                value: 0
                            },
                            {
                                text: this.formatMessage('OperatorsPro.original'), 
                                value: 1
                            }
                        ]
                    },
                    insert:{
                        acceptReporters:true,
                        items:[
                            {
                                text: this.formatMessage('OperatorsPro.insert'), 
                                value: 0
                            },
                            {
                                text: this.formatMessage('OperatorsPro.set'), 
                                value: 1
                            },
                            {
                                text: this.formatMessage('OperatorsPro.plus'), 
                                value: 2
                            }
                        ]
                    },
                    first:{
                        acceptReporters:true,
                        items:[
                            {
                                text: this.formatMessage('OperatorsPro.thefirst'), 
                                value: 0
                            },
                            {
                                text: this.formatMessage('OperatorsPro.thelast'), 
                                value: 1
                            },
                            {
                                text: this.formatMessage('OperatorsPro.all'), 
                                value: 2
                            }
                        ]
                    },
                    descending:{
                        acceptReporters:true,
                        items:[
                            {
                                text: this.formatMessage('OperatorsPro.descending'), 
                                value: 0
                            },
                            {
                                text: this.formatMessage('OperatorsPro.ascending'), 
                                value: 1
                            }
                        ]
                    },
                    set:{
                        acceptReporters:true,
                        items:[
                            {
                                text: this.formatMessage('OperatorsPro.set'), 
                                value: 0
                            },
                            {
                                text: this.formatMessage('OperatorsPro.plus'), 
                                value: 1
                            }
                        ]
                    },
                    keys:{
                        acceptReporters:true,
                        items:[
                            {
                                text: this.formatMessage('OperatorsPro.keys'), 
                                value: 0
                            },
                            {
                                text: this.formatMessage('OperatorsPro.values'), 
                                value: 1
                            },
                            {
                                text: this.formatMessage('OperatorsPro.datas'), 
                                value: 2
                            }
                        ]
                    },
                    compare:{
                        acceptReporters: true,
                        items: [
                            {
                                text: '≠',
                                value: 0
                            },
                            {
                                text: '=',
                                value: 1
                            },
                            {
                                text: '≥',
                                value: 2
                            },
                            {
                                text: '>',
                                value: 3
                            },
                            {
                                text: '≤',
                                value: 4
                            },
                            {
                                text: '<',
                                value: 5
                            }
                        ]
                    },
                    numericalvalue:{
                        acceptReporters: true,
                        items: [
                            {
                                text: this.formatMessage('OperatorsPro.numericalvalue'),
                                value: 0
                            },
                            {
                                text: this.formatMessage('OperatorsPro.length'),
                                value: 1
                            }
                        ]
                    },
                    EQUAL_SYMBOL: {
                        acceptReporters: false,
                        items: [
                            {
                                text: '=-',
                                value: 'equalNegative'
                            },
                            {
                                text: '=±',
                                value: 'EqualPON'
                            },
                            {
                                text: '≈',
                                value: 'approximatelyEqual'
                            },
                            {
                                text: '⊥',
                                value: 'vertical'
                            },
                            {
                                text: '∥',
                                value: 'parallel'
                            }
                        ]
                    },
                    LOGIC_GATE_SYMBOL: {
                        acceptReporters: false,
                        items: [
                            {
                                text: this.formatMessage('OperatorsPro.NAND'),
                                value: 'nand'
                            },
                            {
                                text: this.formatMessage('OperatorsPro.NOR'),
                                value: 'nor'
                            },
                            {
                                text: this.formatMessage('OperatorsPro.XOR'),
                                value: 'xor'
                            },
                            {
                                text: this.formatMessage('OperatorsPro.XNOR'),
                                value: 'xnor'
                            }
                        ]
                    },
                    CHECK_TYPE: {
                        acceptReporters: false,
                        items: [
                            {
                                text: this.formatMessage('OperatorsPro.TYPE_NUMBER'),
                                value: 'number'
                            },
                            {
                                text: this.formatMessage('OperatorsPro.TYPE_POSITIVE_NUMBER'),
                                value: 'positiveNumber'
                            },
                            {
                                text: this.formatMessage('OperatorsPro.TYPE_NEGATIVE_NUMBER'),
                                value: 'negativeNumber'
                            },
                            {
                                text: this.formatMessage('OperatorsPro.TYPE_EVEN_NUMBER'),
                                value: 'evenNumber'
                            },
                            {
                                text: this.formatMessage('OperatorsPro.TYPE_ODD_NUMBER'),
                                value: 'oddNumber'
                            },
                            {
                                text: this.formatMessage('OperatorsPro.TYPE_INTEGER_NUMBER'),
                                value: 'integerNumber'
                            },
                            {
                                text: this.formatMessage('OperatorsPro.TYPE_DECIMAL_NUMBER'),
                                value: 'decimalNumber'
                            },
                            {
                                text: this.formatMessage('OperatorsPro.TYPE_PRIME_NUMBER'),
                                value: 'primeNumber'
                            },
                            {
                                text: this.formatMessage('OperatorsPro.TYPE_COMPOSITE_NUMBER'),
                                value: 'compositeNumber'
                            },
                            {
                                text: this.formatMessage('OperatorsPro.TYPE_TEXT'),
                                value: 'text'
                            },
                            {
                                text: this.formatMessage('OperatorsPro.TYPE_BOOLEAN'),
                                value: 'boolean'
                            }
                        ]
                    }
                }
            }
        }
        findExtConfigComment() {
            const stage = this.runtime.getTargetForStage();
            if (!stage || !stage.comments) return undefined;
            return stage.comments[EXTCONFIGCOMMENTID]
        }
        getAllExtConfig() {
            const comment = this.findExtConfigComment();
            if (!comment) return undefined;
            const lines = comment.text.split('\n');
            if (lines.length === 0) {
              console.warn(
                `${OperatorsProextensionId}: Extension config comment does not contain valid line.`,
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
              console.warn(`${OperatorsProextensionId}: Config comment has invalid JSON`, e);
              return undefined
            }
        }
        parseExtConfig() {
            let config = this.getAllExtConfig();
            if (!config) return false;
            config = config[OperatorsProextensionId];
            if (!config) return false;
            if ('hideExtraBlocks' in config) {
              this.hideExtraBlocks = Cast.toBoolean(config.hideExtraBlocks);
              this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE');
            }
            return true
        }
        generateExtConfig() {
            const options = {};
            options.hideExtraBlocks = this.hideExtraBlocks;
            return options
        }
        
          storeExtConfig() {
            let config = this.getAllExtConfig();
            if (!config) config = {};
            config[OperatorsProextensionId] = this.generateExtConfig();
        
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
            this.runtime.emitProjectChanged()
        }
        rTest(args,util){
            return Object.isObject({})
        }
        rMenuUnusualWord(args){
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
        rMenuToType(args){
            return this.totype(args.a,args.b)
        }
        rMenuTypeof(args){
            if (args.b){
                const a = JSON.parse(args.a)
                return args.c && Array.isArray(a) ? 'array' : typeof a
            }
            return typeof args.a
        }
        bMenuTypeof(args){
            if (args.b){
                const a = JSON.parse(args.a)
                if(args.c==='array')return Array.isArray(a)
                if(args.c==='array or object')return typeof a === 'object'
                return typeof a === args.c
            }
            return typeof args.a === args.c
        }
        rJSONTypeof(args){
            return typeof JSON.parse(args.a)
        }
        bJSONTypeof(args){
            return typeof JSON.parse(args.a) == args.b
        }
        bCheckType({ INPUT, MODE }) {
            INPUT = String(INPUT);
            const isNumRegex = /^-?\d+(\.\d+)?$/
            switch (MODE) {
                case 'number':
                    return isNumRegex.test(INPUT);
                case 'positiveNumber':
                    return Cast.toNumber(INPUT) > 0 && isNumRegex.test(INPUT)
                case 'negativeNumber':
                    return Cast.toNumber(INPUT) < 0 && isNumRegex.test(INPUT)
                case 'evenNumber':
                    return Cast.toNumber(INPUT) % 2 === 0 && isNumRegex.test(INPUT)
                case 'oddNumber':
                    return Cast.toNumber(INPUT) % 2 !== 0 && isNumRegex.test(INPUT)
                case 'integerNumber':
                    return Cast.toNumber(INPUT) % 1 === 0 && isNumRegex.test(INPUT)
                case 'decimalNumber':
                    return Cast.toNumber(INPUT) % 1 !== 0 && isNumRegex.test(INPUT)
                case 'primeNumber':
                    return this._isPrime(Cast.toNumber(INPUT)) && isNumRegex.test(INPUT)
                case 'compositeNumber':
                    return this._isComposite(Cast.toNumber(INPUT)) && isNumRegex.test(INPUT)
                case 'text':
                    return !isNumRegex.test(INPUT) && INPUT.length >= 1
                case 'boolean':
                    return INPUT === 'true' || INPUT === 'false'
                default:
                    return false
            }
        }
        bMenuToBoolean(args){
            switch(args.b){
                case 0 :
                    return args.c ? args.a : ! args.a
                case 1 :
                    return args.c ? ! falseList2.includes(args.a) : falseList2.includes(args.a)
                default :
                    return args.c ? ! falseList1.includes(args.a) : falseList1.includes(args.a)
            }
        }
        rMenuIf(args){
            switch(args.b){
                case 0 :
                    return args.a ? args.c : args.d
                case 1 :
                    return falseList2.includes(args.a) ? args.d : args.c
                default :
                    return falseList1.includes(args.a) ? args.d : args.c
            }
        }
        bMenuAnd(args){
            if(args.b){
                switch(args.d){
                    case 0 :
                        return args.e ? args.a && args.b : !(args.a && args.b)
                    case 1 :
                        return args.e ? !( falseList2.includes(args.a) || falseList2.includes(args.c) ) : falseList2.includes(args.a) || falseList2.includes(args.c)
                    default :
                        return args.e ? !( falseList1.includes(args.a) || falseList1.includes(args.c) ) : falseList1.includes(args.a) || falseList1.includes(args.c)
                }
            }
            switch(args.d){
                case 0 :
                    return args.e ? args.a || args.b : !(args.a || args.b)
                case 1 :
                    return args.e ? !( falseList2.includes(args.a) && falseList2.includes(args.c) ) : falseList2.includes(args.a) && falseList2.includes(args.c)
                default :
                    return args.e ? !( falseList1.includes(args.a) && falseList1.includes(args.c) ) : falseList1.includes(args.a) && falseList1.includes(args.c)
            }
        }
        rReporter(args){
            return args.a
        }
        rBoolean(args){
            return args.a
        }
        bToBoolean(args){
            return ! falseList1.includes(args.a)
        }
        rIf(args){
            return args.a ? args.b : args.c
        }
        rIfToBoolean(args){
            return falseList1.includes(args.a) ? args.c : args.b
        }
        bAnd(args){
            return args.a && args.b
        }
        bAndToBoolean(args){
            return ! (falseList1.includes(args.a) || falseList1.includes(args.b))
        }
        bOr(args){
            return args.a || args.b
        }
        bOrToBoolean(args){
            return ! (falseList1.includes(args.a) && falseList1.includes(args.b))
        }
        bNot(args){
            return ! args.a
        }
        bNotToBoolean(args){
            return falseList1.includes(args.a)
        }
        bLogicGateOperation({ OPERAND1, OPERAND2, SYMBOL }) {
            const operand1 = Cast.toBoolean(OPERAND1)
            const operand2 = Cast.toBoolean(OPERAND2)
            switch(SYMBOL){
                case 'nand' :
                    return !(operand1 && operand2)
                case 'nor' :
                    return !(operand1 || operand2)
                case 'xor' :
                    return operand1 !== operand2
                default:
                    return operand1 === operand2
            }
        }
        rJoin(args){
            return String(args.a)+String(args.b)+String(args.c)
        }
        rPadStart(args){
            return args.a.padStart(args.c,args.b)
        }
        rPadEnd(args){
            return args.a.padEnd(args.c,args.b)
        }
        rRemove(args){
            return args.a.replaceAll(args.b,'')
        }
        rInterchange(args){
            let a =''
            for(const t of String(args.a).split(args.b)){
                a+=args.c+t.replaceAll(args.c,args.b)
            }
            return a.replace(args.c,'')
        }
        rReplaceExcept(args){
            let a =''
            for(const t of String(args.a).split(args.c)){
                a+=args.c+t.replaceAll(args.b,args.d)
            }
            return a.replace(args.c,'')
        }
        bMenuUndefined(args){
            if (args.b){
                if(nullList2.includes(args.a)) return args.c ? false :true
                return args.c ? true : false
            }
            if(nullList1.includes(args.a)) return args.c ? false :true
            return args.c ? true : false
        }
        rDefault(args){
            if (nullList1.includes(args.a)) return args.b
            return args.a
        }
        bDefined(args){
            return ! nullList1.includes(args.a)
        }
        bUndefined(args){
            return nullList1.includes(args.a)
        }
        bMenuEqual(args){
            return args.b ? this.equal(args.a,args.c,args.d) : this.notequal(args.a,args.c,args.d)
        }
        bCompare({ OPERAND1, OPERAND2, SYMBOL }) {
            return this._compare(OPERAND1, OPERAND2, SYMBOL)
        }
        bContinuousCompare({ OPERAND1, OPERAND2, OPERAND3, SYMBOL1, SYMBOL2 }) {
            const result1 = this._compare(OPERAND1, OPERAND2, SYMBOL1);
            const result2 = this._compare(OPERAND2, OPERAND3, SYMBOL2)
            return result1 && result2
        }
        bApproximatelyEqual({ OPERAND1, OPERAND2, NUM }) {
            OPERAND1 = Cast.toNumber(OPERAND1);
            OPERAND2 = Cast.toNumber(OPERAND2);
            NUM = Cast.toNumber(NUM)
            return Math.abs(OPERAND1 - OPERAND2) <= NUM
        }
        bNotstrictlyequal(args){
            return args.a !== args.b
        }
        bNotcontain(args){
            return ! args.a.includes(args.b)
        }
        rNegative({ NUM }) {
            return 0 - Cast.toNumber(NUM)
        }
        rSign(args){
            return Math.floor(Math.random()*2) ? args.a : 0-args.a
        }
        rAddition(args){
            return Number(args.a)+Number(args.b)+Number(args.c)
        }
        rAdditionmultiplication(args){
            return (Number(args.a)+Number(args.b))*args.c
        }
        rExponent({ NUM1, NUM2 }) {
            return Cast.toNumber(NUM1) ** Cast.toNumber(NUM2)
        }
        rRoot({ NUM1, NUM2 }) {
            return Math.pow(Cast.toNumber(NUM2), 1 / Cast.toNumber(NUM1))
        }
        rRandom(args){
            return Math.random()
        }
        bNotequal(args){
            return args.a != args.b
        }
        rLoopNum({ NUM, START, END }) {
            let num = Cast.toNumber(NUM);
            let start = Cast.toNumber(START);
            let end = Cast.toNumber(END);
            let range_num = end - start + 1;
            let result = ((num - start) % range_num + range_num) % range_num + start
            if (result > end) {
                result -= range_num
            }
            return result
        }
        rMapOff({ NUM, START1, END1, START2, END2 }) {
            NUM = Cast.toNumber(NUM);
            START1 = Cast.toNumber(START1);
            END1 = Cast.toNumber(END1);
            START2 = Cast.toNumber(START2);
            END2 = Cast.toNumber(END2)
            return ((NUM - START1) / (END1 - START1)) * (END2 - START2) + START2
        }
        rNearestMultiple(args){
            return Math.round(args.a/args.b)*args.b
        }
        rMod(args){
            return args.a % args.b
        }
        rRound(args) {
            return (Number(args.a)).toFixed(args.b)
        }
        rRintFromTo(args){
            let a = Number(args.a);
            const b = args.b-args.c
            for (let i = 0; i <= b; i++){
                a=Number(a.toFixed(args.b-i))
            }
            return a
        }
        rRintToTimes(args){
            let a = Number(args.a)
            for (let i = 0; i <= args.c; i++){
                a=Number(a.toFixed(args.b-i))
            }
            return a
        }
        rRintTimesTo(args){
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
        rMenuRad(args){
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
        rMenuToOneHundredEighty(args){
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
        rRadSin(args){
            return Math.sin(args.a)
        }
        rRadCos(args){
            return Math.cos(args.a)
        }
        rRadTan(args){
            return Math.tan(args.a)
        }
        rRadAsin(args){
            return Math.asin(args.a)
        }
        rRadAcos(args){
            return Math.acos(args.a)
        }
        rRadAtan(args){
            return Math.atan(args.a)
        }
        rSinMultiplication(args){
            return Math.sin(args.b)*Math.PI/180*args.a
        }
        rCosMultiplication(args){
            return Math.cos(args.b)*Math.PI/180*args.a
        }
        rTanMultiplication(args){
            return Math.tan(args.b)*Math.PI/180*args.a
        }
        rAsinDivision(args){
            return Math.asin(args.a/args.b)/Math.PI*180
        }
        rAcosDivision(args){
            return Math.acos(args.a/args.b)/Math.PI*180
        }
        rAtanDivision(args){
            return Math.atan(args.a/args.b)/Math.PI*180
        }
        rToOneHundredEighty(args){
            const a = args.a % 360
            return a+(a > -180 ? (a > 180 ? -360 : 0) : 360)
        }
        rToThreeHundredSixty(args){
            let a = Number(args.a)
            while (a < 0){
                a+=360
            }
            return a % 360
        }
        rAddTo(args){
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
        rMenuArrayRemoveItem(args){
            return args.d ? (args.b ? args.a :JSON.parse(args.a)).toSpliced(Number(args.c), 1) : JSON.stringify((args.b ? args.a :JSON.parse(args.a)).toSpliced(Number(args.c), 1))
        }
        rArrayRemoveShift(args){
            let a = JSON.parse(args.a);
            a.shift()
            return JSON.stringify(a)
        }
        rArrayRemovePop(args){
            let a = JSON.parse(args.a);
            a.pop()
            return JSON.stringify(a)
        }
        rArrayRemoveItem(args){
            return JSON.stringify(JSON.parse(args.a).toSpliced(Number(args.b), 1))
        }
        rArrayRemoveItems(args){
            let a = JSON.parse(args.a)
            for(const t of JSON.parse(args.b).sort(function(a,b){return b-a})){
                a.splice(Number(t), 1)
            }
            return JSON.stringify(a)
        }
        rArrayRemoveItemtoitem(args){
            return JSON.stringify(JSON.parse(args.a).toSpliced(Number(args.b), args.c-args.b))
        }
        rArrayReserveItem(args){
            return JSON.stringify(JSON.parse(args.a).splice(Number(args.b), 1))
        }
        rMenuArrayRemove(args){
            const a = args.b ? args.a : JSON.parse(args.a);
            const b = this.totype(args.c,args.d);
            const n = args.e
            if( typeof b == 'object' ){
                const c = JSON.stringify(b)
                return args.f ? a.filter(t => this.notequal(JSON.stringify(t),c,n)) : JSON.stringify(a.filter(t => this.notequal(JSON.stringify(t),c,n)))
            }
            return args.f ? a.filter(t => this.notequal(t,b,n)) : JSON.stringify(a.filter(t => this.notequal(t,b,n)))
        }
        rArrayRemoveJSON(args){
            return JSON.stringify(JSON.parse(args.a).filter(t => JSON.stringify(t)!=args.b))
        }
        rArrayRemoveStr(args){
            const b = String(args.b)
            return JSON.stringify(JSON.parse(args.a).filter(t => t!==b))
        }
        rMenuArrayRemovenumber(args){
            const a = args.b ? args.a : JSON.parse(args.a);
            const b = this.totype(args.d,args.e);
            const n = args.c
            if(args.f)return args.g ? a.filter(t => this.notcompare(t.length,b,n)) : JSON.stringify(a.filter(t => this.notcompare(t.length,b,n)))
            return args.g ? a.filter(t => this.notcompare(t,b,n)) : JSON.stringify(a.filter(t => this.notcompare(t,b,n)))
        }
        rArrayRemoveBigNumber(args){        
            return JSON.stringify(JSON.parse(args.a).filter(t => t<=args.b))
        }
        rArrayRemoveNotSmallNumber(args){
            return JSON.stringify(JSON.parse(args.a).filter(t => t<args.b))
        }
        rArrayRemoveSmallNumber(args){
            return JSON.stringify(JSON.parse(args.a).filter(t => t>=args.b))
        }
        rArrayRemoveNotBigNumber(args){
            return JSON.stringify(JSON.parse(args.a).filter(t => t>args.b))
        }
        rArrayRemoveNumber(args){
            const b = Number(args.b)
            return JSON.stringify(JSON.parse(args.a).filter(t => t!==b))
        }
        rArrayRemove(args){
            return JSON.stringify(JSON.parse(args.a).filter(t => t!=args.b))
        }
        rMenuArrayInsert(args){
            const a = args.b ? args.a : JSON.parse(args.a);
            const b = this.totype(args.e,args.f)
            switch(args.d){
                case 0 :
                    return args.g ? a.toSpliced(args.c,0,b) : JSON.stringify(a.toSpliced(args.c,0,b))
                case 1 :
                    return args.g ? a.with(args.c,b) : JSON.stringify(a.with(args.c,b))
                default :
                    return args.g ? a.with(args.c,a.at(args.c)+b) : JSON.stringify(a.with(args.c,a.at(args.c)+b))
            }
        }
        rArrayUnshiftJSON(args){
            let a = JSON.parse(args.a);
            a.unshift(JSON.parse(args.b))
            return JSON.stringify(a)
        }
        rArrayUnshiftStr(args){
            let a = JSON.parse(args.a);
            a.unshift(String(args.b))
            return JSON.stringify(a)
        }
        rArrayUnshiftNumber(args){
            let a = JSON.parse(args.a);
            a.unshift(Number(args.b))
            return JSON.stringify(a)
        }
        rArrayUnshift(args){
            let a = JSON.parse(args.a);
            a.unshift(args.b)
            return JSON.stringify(a)
        }
        rArrayPushJSON(args){
            let a = JSON.parse(args.a);
            a.push(JSON.parse(args.b))
            return JSON.stringify(a)
        }
        rArrayPushStr(args){
            let a = JSON.parse(args.a);
            a.push(String(args.b))
            return JSON.stringify(a)
        }
        rArrayPushNumber(args){
            let a = JSON.parse(args.a);
            a.push(Number(args.b))
            return JSON.stringify(a)
        }
        rArrayPush(args){
            let a = JSON.parse(args.a);
            a.push(args.b)
            return JSON.stringify(a)
        }
        rArrayInsertJSON(args){
            return JSON.stringify(JSON.parse(args.a).toSpliced(args.c,0,JSON.parse(args.b)))
        }
        rArrayInsertStr(args){
            return JSON.stringify(JSON.parse(args.a).toSpliced(args.c,0,String(args.b)))
        }
        rArrayInsertNumber(args){
            return JSON.stringify(JSON.parse(args.a).toSpliced(args.c,0,Number(args.b)))
        }
        rArrayInsert(args){
            return JSON.stringify(JSON.parse(args.a).toSpliced(args.c,0,args.b))
        }
        rArrayInsertJSONindexes(args){
            let a = JSON.parse(args.a);
            const b =JSON.parse(args.b)
            for(const t of JSON.parse(args.c).sort(function(a,b){return b-a})){
                a.splice(t,0,b)
            }
            return JSON.stringify(a)
        }
        rArrayInsertStrindexes(args){
            let a = JSON.parse(args.a);
            const b = String(args.b)
            for(const t of JSON.parse(args.c).sort(function(a,b){return b-a})){
                a.splice(t,0,b)
            }
            return JSON.stringify(a)
        }
        rArrayInsertNumberindexes(args){
            let a = JSON.parse(args.a);
            const b = Number(args.b)
            for(const t of JSON.parse(args.c).sort(function(a,b){return b-a})){
                a.splice(t,0,b)
            }
            return JSON.stringify(a)
        }
        rArrayInsertindexes(args){
            let a = JSON.parse(args.a);
            const b = args.b
            for(const t of JSON.parse(args.c).sort(function(a,b){return b-a})){
                a.splice(t,0,b)
            }
            return JSON.stringify(a)
        }
        rArrayInsertJSONindextoindex(args){
            let a = JSON.parse(args.a);
            const b =JSON.parse(args.b);
            const c = Number(args.c)
            for(let i = 0; i < args.d-c; i++){
                a.splice(c+i,0,b)
            }
            return JSON.stringify(a)
        }
        rArrayInsertStrindextoindex(args){
            let a = JSON.parse(args.a);
            const b = String(args.b);
            const c = Number(args.c)
            for(let i = 0; i < args.d-c; i++){
                a.splice(c+i,0,b)
            }
            return JSON.stringify(a)
        }
        rArrayInsertNumberindextoindex(args){
            let a = JSON.parse(args.a);
            const b = Number(args.b);
            const c = Number(args.c)
            for(let i = 0; i < args.d-c; i++){
                a.splice(c+i,0,b)
            }
            return JSON.stringify(a)
        }
        rArrayInsertindextoindex(args){
            let a = JSON.parse(args.a);
            const b = args.b;
            const c = Number(args.c)
            for(let i = 0; i < args.d-c; i++){
                a.splice(c+i,0,b)
            }
            return JSON.stringify(a)
        }
        rArrayMove(args){
            const a = JSON.parse(args.a)
            return args.b>args.c ? JSON.stringify(a.toSpliced(args.b,1).toSpliced(args.c,0,a.at(args.b))) : JSON.stringify(a.toSpliced(args.c,0,args.b).toSpliced(args.b,a.at(args.b)))
        }
        rArrayReplaceJSON(args){
            return JSON.stringify(JSON.parse(args.a).with(args.b,JSON.parse(args.c)))
        }
        rArrayReplaceStr(args){
            return JSON.stringify(JSON.parse(args.a).with(args.b,String(args.c)))
        }
        rArrayReplaceNumber(args){
            return JSON.stringify(JSON.parse(args.a).with(args.b,args.c))
        }
        rArrayReplace(args){
            return JSON.stringify(JSON.parse(args.a).with(args.b,args.c))
        }
        rArrayReplaceindexesJSON(args){
            let a = JSON.parse(args.a);
            const c = JSON.parse(args.c)
            for(const t of JSON.parse(args.b)){
                a=a.with(t,c)
            }
            return JSON.stringify(a)
        }
        rArrayReplaceindexesstr(args){
            let a = JSON.parse(args.a)
            const c = String(args.c)
            for(const t of JSON.parse(args.b)){
                a=a.with(t,c)
            }
            return JSON.stringify(a)
        }
        rArrayReplaceindexesnumber(args){
            let a = JSON.parse(args.a);
            const c = Number(args.c)
            for(const t of JSON.parse(args.b)){
                a=a.with(t,c)
            }
            return JSON.stringify(a)
        }
        rArrayReplaceindexes(args){
            let a = JSON.parse(args.a);
            const c = args.c
            for(const t of JSON.parse(args.b)){
                a=a.with(t,c)
            }
            return JSON.stringify(a)
        }
        rArrayReplaceindextoindexJSON(args){
            let a = JSON.parse(args.a);
            a.fill(JSON.parse(args.d),args.b,args.c)
            return JSON.stringify(a)
        }
        rArrayReplaceindextoindexstr(args){
            let a = JSON.parse(args.a);
            a.fill(String(args.d),args.b,args.c)
            return JSON.stringify(a)
        }
        rArrayReplaceindextoindexnumber(args){
            let a = JSON.parse(args.a);
            a.fill(Number(args.d),args.b,args.c)
            return JSON.stringify(a)
        }
        rArrayReplaceindextoindex(args){
            let a = JSON.parse(args.a);
            a.fill(args.d,args.b,args.c)
            return JSON.stringify(a)
        }
        rArrayInterchange(args){
            const a = JSON.parse(args.a)
            return JSON.stringify(a.with(args.b,a.at(args.c)).with(args.c,a.at(args.b)))
        }
        rArrayPlusIndex(args){
            let a = JSON.parse(args.a);
            a=a.with(args.b,a.at(args.b)+Number(args.c))
            return JSON.stringify(a)
        }
        rArrayPlusIndexes(args){
            let a = JSON.parse(args.a);
            const b = JSON.parse(args.b);
            const c = Number(args.c)
            for(const t of b){
                a=a.with(t,a.at(t)+c)
            }
            return JSON.stringify(a)
        }
        rArrayPlusIndextoindex(args){
            let a = JSON.parse(args.a);
            const b = Number(args.b);
            const d = Number(args.d)
            for(let i = 0; i < args.c-b; i++){
                a=a.with(b+i,a.at(b+i)+d)
            }
            return JSON.stringify(a)
        }
        rArrayPlus(args){
            const b = Number(args.b)
            return JSON.stringify(JSON.parse(args.a).map(t => t+b))
        }
        rMenuArrayItem(args){
            return args.d ? (args.b ? args.a :JSON.parse(args.a)).at(args.c) : JSON.stringify((args.b ? args.a :JSON.parse(args.a)).at(args.c))
        }
        rArrayShiftJSON(args){
            return JSON.stringify(JSON.parse(args.a).shift())
        }
        rArrayShift(args){
            return JSON.parse(args.a).shift()
        }
        rArrayPopJSON(args){
            return JSON.stringify(JSON.parse(args.a).pop())
        }
        rArrayPop(args){
            return JSON.parse(args.a).pop()
        }
        rArrayItemJSON(args){
            return JSON.stringify(JSON.parse(args.a).at(args.b))
        }
        rArrayItem(args){
            return JSON.parse(args.a).at(args.b)
        }
        rArrayItems(args){
            const a = JSON.parse(args.a);
            let c = []
            for(const t of JSON.parse(args.b)){
                c.push(a.at(t))
            }
            return JSON.stringify(c)
        }
        rArrayItemtoitem(args){
            return JSON.stringify(JSON.parse(args.a).slice(args.b,args.c))
        }
        rMenuArrayIndex(args){
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
        rMenuArrayIndexnumber(args){
            const a = args.b ? args.a : JSON.parse(args.a);
            const b = this.totype(args.e,args.f);
            const n = args.d
            if(args.g){
                switch(args.c){
                    case 0 :
                        return a.findIndex( t => this.compare(t.length,b,n))
                    case 1 :
                        return a.lastIndexOf(a.findLast( t => this.compare(t.length,b,n)))
                    default :
                        let idx = []
                        a.forEach((t,i)=>{
                            if(this.compare(t.length,b,n))idx.push(i)
                        })
                        return idx
                }
            }
            else{
                switch(args.c){
                    case 0 :
                        return a.findIndex( t => this.compare(t,b,n))
                    case 1 :
                        return a.lastIndexOf(a.findLast( t => this.compare(t,b,n)))
                    default :
                        let idx = []
                        a.forEach((t,i)=>{
                            if(this.compare(t,b,n))idx.push(i)
                        })
                        return idx
                }
            }
        }
        rArrayIndexJSON(args){
            return JSON.parse(args.a).indexOf(JSON.parse(args.b))
        }
        rArrayIndexStr(args){
            return JSON.parse(args.a).indexOf(String(args.b))
        }
        rArrayFindIndexBigNumber(args){
            return JSON.parse(args.a).findIndex(i => i > args.b)
        }
        rArrayFindIndexNotSmallNumber(args){
            return JSON.parse(args.a).findIndex(i => i >= args.b)
        }
        rArrayFindIndexSmallNumber(args){
            return JSON.parse(args.a).findIndex(i => i < args.b)
        }
        rArrayFindIndexNotBigNumber(args){
            return JSON.parse(args.a).findIndex(i => i <= args.b)
        }
        rArrayIndexNumber(args){
            return JSON.parse(args.a).indexOf(Number(args.b))
        }
        rArrayIndex(args){
            return JSON.parse(args.a).indexOf(args.b)
        }
        rArrayLastIndexJSON(args){
            return JSON.parse(args.a).lastIndexOf(JSON.parse(args.b))
        }
        rArrayLastIndexStr(args){
            return JSON.parse(args.a).lastIndexOf(String(args.b))
        }
        rArrayLastIndexNumber(args){
            return JSON.parse(args.a).lastIndexOf(Number(args.b))
        }
        rArrayLastIndex(args){
            return JSON.parse(args.a).lastIndexOf(args.b)
        }
        rArrayAllIndexJSON(args){
            let idx = []
            JSON.parse(args.a).forEach((t,i)=>{
                if(JSON.stringify(t)==args.b)idx.push(i)
            })
            return JSON.stringify(idx)
        }
        rArrayAllIndexStr(args){
            let idx = [];
            const b = String(args.b)
            JSON.parse(args.a).forEach((t,i)=>{
                if(t===b)idx.push(i)
            })
            return JSON.stringify(idx)
        }
        rArrayAllIndexNumber(args){
            const b = Number(args.b);
            let idx = []
            JSON.parse(args.a).forEach((t,i)=>{
                if(t===b)idx.push(i)
            })
            return JSON.stringify(idx)
        }
        rArrayAllIndex(args){
            const b = args.b;
            let idx = []
            JSON.parse(args.a).forEach((t,i)=>{
                if(t===b)idx.push(i)
            })
            return JSON.stringify(idx)
        }
        rMenuArrayCount(args){
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
        rArrayCountJSON(args){
            let c = 0
            for(const t of JSON.parse(args.a)){
                if(JSON.stringify(t)==args.b)c+=1
            }
            return c
        }
        rArrayCountStr(args){
            let c = 0;
            const b = String(args.b)
            for(const t of JSON.parse(args.a)){
                if(t===b)c+=1
            }
            return c
        }
        rMenuArrayCountnumber(args){
            const a = args.b ? args.a : JSON.parse(args.a);
            const b = this.totype(args.d,args.e);
            const n = args.c;
            let i = 0
            if(args.f){
                for(const t of a){
                    if(this.compare(t.length,b,n))i++
                }
                return i
            }
            else{
                for(const t of a){
                    if(this.compare(t,b,n))i++
                }
                return i
            }
        }
        rArrayCountBigNumber(args){
            const b =Number(args.b);
            let c = 0
            for(const t of JSON.parse(args.a)){
                if(t>b)c+=1
            }
            return c
        }
        rArrayCountNotSmallNumber(args){
            const b =Number(args.b);
            let c = 0
            for(const t of JSON.parse(args.a)){
                if(t>=b)c+=1
            }
            return c
        }
        rArrayCountSmallNumber(args){
            const b =Number(args.b);
            let c = 0
            for(const t of JSON.parse(args.a)){
                if(t<b)c+=1
            }
            return c
        }
        rArrayCountNotBigNumber(args){
            const b =Number(args.b);
            let c = 0
            for(const t of JSON.parse(args.a)){
                if(t<=b)c+=1
            }
            return c
        }
        rArrayCountNumber(args){
            const b =Number(args.b);
            let c = 0
            for(const t of JSON.parse(args.a)){
                if(t===b)c+=1
            }
            return c
        }
        rArrayCount(args){
            let c = 0
            for(const t of JSON.parse(args.a)){
                if(t==args.b)c+=1
            }
            return c
        }
        rMenuArrayLength(args){
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
        rArrayLength(args){
            return JSON.parse(args.a).length
        }
        rArraySum(args){
            return JSON.parse(args.a).reduce((a, b) => a + b)
        }
        rArrayProduct(args){
            return JSON.parse(args.a).reduce((a, b) => a * b)
        }
        rArrayAverage(args){
            const a = JSON.parse(args.a);
            const sum = a.reduce((a, b) => a + b);
            return sum / a.length
        }
        rArrayMax(args){
            return Math.max(...(JSON.parse(args.a)))
        }
        rArrayMin(args){
            return Math.min(...(JSON.parse(args.a)))
        }
        rMenuArraySort(args){
            const a = args.b ? args.a :JSON.parse(args.a);
            a.sort(Scratch.Cast.compare)
            if(args.c)return args.d ? a : JSON.stringify(a)
            a.reverse()
            return args.d ? a : JSON.stringify(a)
        }
        rArraySortNaturalOrder(args){
            return JSON.stringify(JSON.parse(args.a).sort(Scratch.Cast.compare))
        }
        rArraySortReverseOrder(args){
            return JSON.stringify(JSON.parse(args.a).sort(Scratch.Cast.compare).reverse())
        }
        rArrayReverse(args){
            return JSON.stringify(JSON.parse(args.a).reverse())
        }
        bMenuArrayHave(args){
            const a = args.b ? args.a : JSON.parse(args.a);
            const b = this.totype(args.d,args.e);
            const n = args.f
            if( typeof b == 'object' ){
                const c = JSON.stringify(b)
                return args.c ? a.every(i => this.equal(JSON.stringify(i),c,n)) : a.some(i => this.equal(JSON.stringify(i),c,n))
            }
            return args.c ? a.every(i => this.equal(i,b,n)) : a.some(i => this.equal(i,b,n))
        }
        bArrayHaveJSON(args){
            return JSON.parse(args.a).some(i => JSON.stringify(i) == args.b)
        }
        bArrayHaveStr(args){
            return JSON.parse(args.a).includes(String(args.b))
        }
        bMenuArrayHavenumber(args){
            const a = args.b ? args.a : JSON.parse(args.a);
            const b = this.totype(args.e,args.f);
            const n = args.d
            if(args.g)return args.c ? a.every(i => this.compare(i.length,b,n)) : a.some(i => this.compare(i.length,b,n))
            return args.c ? a.every(i => this.compare(i,b,n)) : a.some(i => this.compare(i,b,n))
        }
        bArrayHaveBigNumber(args){
            return JSON.parse(args.a).some(i => i > args.b)
        }
        bArrayHaveNotSmallNumber(args){
            return JSON.parse(args.a).some(i => i >= args.b)
        }
        bArrayHaveSmallNumber(args){
            return JSON.parse(args.a).some(i => i < args.b)
        }
        bArrayHaveNotBigNumber(args){
            return JSON.parse(args.a).some(i => i <= args.b)
        }
        bArrayHaveNumber(args){
            return JSON.parse(args.a).includes(Number(args.b))
        }
        bArrayHave(args){
            return JSON.parse(args.a).some(i => i == args.b)
        }
        bArrayBeJSON(args){
            return JSON.parse(args.a).every(i => JSON.stringify(i) == args.b)
        }
        bArrayBeStr(args){
            const b = String(args.b)
            return JSON.parse(args.a).every(i => i === b)
        }
        bArrayBeBigNumber(args){
            return JSON.parse(args.a).every(i => i > args.b)
        }
        bArrayBeNotSmallNumber(args){
            return JSON.parse(args.a).every(i => i >= args.b)
        }
        bArrayBeSmallNumber(args){
            return JSON.parse(args.a).every(i => i < args.b)
        }
        bArrayBeNotBigNumber(args){
            return JSON.parse(args.a).every(i => i <= args.b)
        }
        bArrayBeNumber(args){
            return JSON.parse(args.a).every(i => i === Number(args.b))
        }
        bArrayBe(args){
            return JSON.parse(args.a).every(i => i == args.b)
        }
        bArrayEqual(args){
            return JSON.stringify(JSON.parse(args.a).sort(Scratch.Cast.compare))==JSON.stringify(JSON.parse(args.b).sort(Scratch.Cast.compare))
        }
        bArrayStrictlyEqual(args){
            return JSON.stringify(JSON.parse(args.a).sort(Scratch.Cast.compare))===JSON.stringify(JSON.parse(args.b).sort(Scratch.Cast.compare))
        }
        bArrayClear(args){
            return args.a == '[]'
        }
        bIsArray(args){
            return Array.isArray(JSON.parse(args.a))
        }
        rObjectRemove(args){
            let a=JSON.parse(args.a);
            delete a[args.b]
            return JSON.stringify(a)
        }
        rObjectRemovekeys(args){
            let a=JSON.parse(args.a)
            for(const t of JSON.parse(args.b)){
                delete a[t]
            }
            return JSON.stringify(a)
        }
        rMenuObjectSet(args){
            const a = args.b ? args.a : JSON.parse(args.a);
            const b = this.totype(args.e,args.f)
            if(args.d){
                a[args.c] += b
            }
            else{
                a[args.c] = b
            }
            return args.g ? a : JSON.stringify(a)
        }
        rObjectPutKeyJSON(args){
            let a=JSON.parse(args.a);
            a[args.b]=JSON.parse(args.c)
            return JSON.stringify(a)
        }
        rObjectPutKeyStr(args){
            let a=JSON.parse(args.a);
            a[args.b]=String(args.c)
            return JSON.stringify(a)
        }
        rObjectPutKeyNumber(args){
            let a=JSON.parse(args.a);
            a[args.b]=Number(args.c)
            return JSON.stringify(a)
        }
        rObjectPutKey(args){
            let a=JSON.parse(args.a);
            a[args.b]=args.c
            return JSON.stringify(a)
        }
        rObjectPlusKey(args){
            let a=JSON.parse(args.a);
            a[args.b]+=Number(args.c)
            return JSON.stringify(a)
        }
        rObjectPlus(args){
            let a=JSON.parse(args.a);
            const b = Number(args.b)
            for(const t of Object.keys(a)){
                a[t] += b
            }
            return JSON.stringify(a)
        }
        rMenuObjectMember(args){
            return args.d ? (args.b ? args.a :JSON.parse(args.a))[args.c] : JSON.stringify((args.b ? args.a :JSON.parse(args.a))[args.c])
        }
        rObjectValueJSON(args){
            return JSON.stringify(JSON.parse(args.a)[args.b])
        }
        rObjectValue(args){
            return JSON.parse(args.a)[args.b]
        }
        rObjectKeyJSON(args){
            const a = JSON.parse(args.a);
            const keys = Object.keys(a);
            const values = Object.values(a)
            return keys[values.indexOf(JSON.parse(args.b))]
        }
        rObjectKeyStr(args){
            const a = JSON.parse(args.a);
            const keys = Object.keys(a);
            const values = Object.values(a)
            return keys[values.indexOf(String(args.b))]
        }
        rObjectKeyNumber(args){
            const a = JSON.parse(args.a);
            const keys = Object.keys(a);
            const values = Object.values(a)
            return keys[values.indexOf(Number(args.b))]
        }
        rObjectKey(args){
            const a = JSON.parse(args.a);
            const keys = Object.keys(a);
            const values = Object.values(a)
            return keys[values.indexOf(args.b)]
        }
        rObjectLastKeyJSON(args){
            const a = JSON.parse(args.a);
            const keys = Object.keys(a);
            const values = Object.values(a)
            return keys[values.lastIndexOf(JSON.parse(args.b))]
        }
        rObjectLastKeyStr(args){
            const a = JSON.parse(args.a);
            const keys = Object.keys(a);
            const values = Object.values(a)
            return keys[values.lastIndexOf(String(args.b))]
        }
        rObjectLastKeyNumber(args){
            const a = JSON.parse(args.a);
            const keys = Object.keys(a);
            const values = Object.values(a)
            return keys[values.lastIndexOf(Number(args.b))]
        }
        rObjectLastKey(args){
            const a = JSON.parse(args.a);
            const keys = Object.keys(a);
            const values = Object.values(a)
            return keys[values.lastIndexOf(args.b)]
        }
        rObjectAllKeyJSON(args){
            const a = JSON.parse(args.a);
            const b =JSON.parse(args.b);
            const keys = Object.keys(a);
            let key = []
            Object.values(a).forEach((t,i)=>{
                if(t===b)key.push(keys[i])
            })
            return JSON.stringify(key)
        }
        rObjectAllKeyStr(args){
            const a = JSON.parse(args.a);
            const b = String(args.b);
            const keys = Object.keys(a);
            let key = []
            Object.values(a).forEach((t,i)=>{
                if(t===b)key.push(keys[i])
            })
            return JSON.stringify(key)
        }
        rObjectAllKeyNumber(args){
            const a = JSON.parse(args.a);
            const b =Number(args.b);
            const keys = Object.keys(a);
            let key = []
            Object.values(a).forEach((t,i)=>{
                if(t===b)key.push(keys[i])
            })
            return JSON.stringify(key)
        }
        rObjectAllKey(args){
            const a = JSON.parse(args.a);
            const b = args.b;
            const keys = Object.keys(a);
            let key = []
            Object.values(a).forEach((t,i)=>{
                if(t===b)key.push(keys[i])
            })
            return JSON.stringify(key)
        }
        rMenuObjectKeys(args){
            const a = args.b ? args.a : JSON.parse(args.a)
            switch(args.c){
                case 0 :
                    return args.d ? Object.keys(a) : JSON.stringify(Object.keys(a))
                case 1 :
                    return args.d ? Object.values(a) : JSON.stringify(Object.values(a))
                default:
                    return args.d ? Object.entries(a) : JSON.stringify(Object.entries(a))
            }
        }
        rObjectLength(args){
            return Object.keys(JSON.parse(args.a)).length
        }
        rObjectKeys(args){
            return JSON.stringify(Object.keys(JSON.parse(args.a)))
        }
        rObjectValues(args){
            return JSON.stringify(Object.values(JSON.parse(args.a)))
        }
        rObjectEntries(args){
            return JSON.stringify(Object.entries(JSON.parse(args.a)))
        }
        rObjectFromEntries(args){
            return JSON.stringify(Object.fromEntries(JSON.parse(args.a)))
        }
        rObjectPutAll(args){
            return JSON.stringify(Object.assign(JSON.parse(args.b),JSON.parse(args.a)))
        }
        rObjectPlusObject(args){
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
        bObjectHasOwnProperty(args){
            return JSON.parse(args.a).hasOwnProperty(args.b)
        }
        bObjectClear(args){
            return args.a == '{}'
        }
        bIsObject(args){
            const a = JSON.parse(args.a)
            return ! Array.isArray(a) && typeof a == 'object'
        }


        _isPrime = (number) => {
            if (number <= 1) return false
            if (number <= 3) return true
            if (number % 2 === 0 || number % 3 === 0) return false
            let i = 5
            while (i * i <= number) {
                if (number % i === 0 || number % (i + 2) === 0) return false
                i += 6
            }
            return true
        }
        _isComposite = (number) => {
            if (number <= 1) return false
            for (let i = 2; i <= Math.sqrt(number); i++) {
                if (number % i === 0) return true
            }
            return false
        }
        _compare(arg1, arg2, symbol) {
            switch(symbol){
                case 'equalNegative' :
                    return Cast.compare(arg1, -arg2) === 0
                case 'EqualPON' :
                    return Cast.compare(arg1, -arg2) === 0 || Cast.compare(arg1, arg2) === 0
                case 'approximatelyEqual' :
                    return Math.abs(arg1 - arg2) <= 0.5
                case 'vertical' :
                    return ((arg1 - (arg2 - 90)) % 180) === 0
                default:
                    return ((arg1 - arg2) % 180) === 0
            }
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
        totype(a,b){
            switch(b){
                case 0 :
                    return JSON.parse(a)
                case 1 :
                    return a
                case 2 :
                    return ! falseList2.includes(a)
                case 3 :
                    return ! falseList1.includes(a)
                case 4 :
                    return Number(a)
                case 5 :
                    return Cast.toNumber(a)
                default:
                    return String(a)
            }
        }
        compare(a,b,c){
            switch(c){
                case 0 :
                    return a != b
                case 1 :
                    return a == b
                case 2 :
                    return a >= b
                case 3 :
                    return a > b
                case 4 :
                    return a <= b
                default :
                    return a < b
            }
        }
        notcompare(a,b,c){
            switch(c){
                case 0 :
                    return a == b
                case 1 :
                    return a != b
                case 2 :
                    return a < b
                case 3 :
                    return a <= b
                case 4 :
                    return a > b
                default :
                    return a >= b
            }
        }
    }
    
    window.tempExt = {
        Extension: OperatorsPro,
        info: {
            name: "OperatorsPro.name",
            description: "OperatorsPro.descp",
            extensionId: OperatorsProextensionId,
            iconURL: OperatorsPropicture,
            insetIconURL: OperatorsProicon,
            featured: true,
            disabled: false,
            collabOratorList: [
                {
                    collabOrator: "多bug的啸天犬 @ CCW",
                    collabOratorURL: "https://www.ccw.site/student/6200811f05660557606c8b15"
                },
                {
                    collabOrator: "NOname_awa @ CCW",
                    collabOratorURL: "https://www.ccw.site/student/6267e862a6666f52c7c97059"
                },
                {
                    collabOrator: "bilioicik @ CCW",
                    collabOratorURL: "https://www.ccw.site/student/6218cd094daafc57cebfc1d3"
                }
              ],
        },
        l10n: {
            "zh-cn": {
                "OperatorsPro.name": "运算pro",
                "OperatorsPro.descp": "为运行“添绿化”"
            },
            en: {
                "OperatorsPro.name": "Operation pro",
                "OperatorsPro.descp": "Green for Go"
            }
        }
    }
})(Scratch);
