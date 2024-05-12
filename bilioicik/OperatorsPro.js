;(function (Scratch) {

    const {Cast} = Scratch;
    
    const OperatorsPropicture = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI2MDAiIGhlaWdodD0iMzc1IiB2aWV3Qm94PSIwLDAsNjAwLDM3NSI+PGRlZnM+PHJhZGlhbEdyYWRpZW50IGN4PSIyODcuMDg1OTQiIGN5PSIyMzcuNiIgcj0iMTE2LjQ4MTQ4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzU5YzA1OSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzU5YzA1OSIgc3RvcC1vcGFjaXR5PSIwIi8+PC9yYWRpYWxHcmFkaWVudD48cmFkaWFsR3JhZGllbnQgY3g9IjI0MCIgY3k9IjEyMi40IiByPSIxODcuNjQ4MTUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNTljMDU5Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNTljMDU5IiBzdG9wLW9wYWNpdHk9IjAiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MCw3LjUpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0tNjAsMzY3LjV2LTM3NWg2MDB2Mzc1eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMTcwLjYwNDQ2LDE5Ny42TTIxMC42MDQ0NiwxOTcuNmgxNTIuOTYyOTZjMjIuMDkxMzksMCA0MCwxNy45MDg2MSA0MCw0MGMwLDIyLjA5MTM5IC0xNy45MDg2MSw0MCAtNDAsNDBoLTE1Mi45NjI5NmMtMjIuMDkxMzksMCAtNDAsLTE3LjkwODYxIC00MCwtNDBjMCwtMjIuMDkxMzkgMTcuOTA4NjEsLTQwIDQwLC00MHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0idXJsKCNjb2xvci0xKSIgc3Ryb2tlLXdpZHRoPSIyMCIvPjxwYXRoIGQ9Ik0xNzAuNjA0NDYsMTk3LjZNMjEwLjYwNDQ2LDE5Ny42aDE1Mi45NjI5NmMyMi4wOTEzOSwwIDQwLDE3LjkwODYxIDQwLDQwYzAsMjIuMDkxMzkgLTE3LjkwODYxLDQwIC00MCw0MGgtMTUyLjk2Mjk2Yy0yMi4wOTEzOSwwIC00MCwtMTcuOTA4NjEgLTQwLC00MGMwLC0yMi4wOTEzOSAxNy45MDg2MSwtNDAgNDAsLTQweiIgZmlsbD0iIzU5YzA1OSIgc3Ryb2tlPSIjNDc5YTQ3IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNNTIuMzUxODUsODIuNE05Mi4zNTE4NSw4Mi40aDI5NS4yOTYzbDQwLDQwbC00MCw0MGgtMjk1LjI5NjNsLTQwLC00MHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0idXJsKCNjb2xvci0yKSIgc3Ryb2tlLXdpZHRoPSIyMCIvPjxwYXRoIGQ9Ik01Mi4zNTE4NSw4Mi40TTkyLjM1MTg1LDgyLjRoMjk1LjI5NjNsNDAsNDBsLTQwLDQwaC0yOTUuMjk2M2wtNDAsLTQweiIgZmlsbD0iIzU5YzA1OSIgc3Ryb2tlPSIjNDc5YTQ3IiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNNzYuNzg2NzcsMjQ1LjFjLTQuMTQyMTQsMCAtNy41LC0xLjExOTI5IC03LjUsLTIuNDk5OTl2LTkuOTk5OTljMCwtMS4zODA3MiAzLjM1Nzg2LC0yLjQ5OTk5IDcuNSwtMi40OTk5OWg3LjV2LTcuNWMwLC00LjE0MjE0IDEuMTE5MjgsLTcuNSAyLjQ5OTk5LC03LjVoOS45OTk5OWMxLjM4MDcyLDAgMi40OTk5OSwzLjM1Nzg2IDIuNDk5OTksNy41djcuNWg3LjUwMDAyYzQuMTQyMTUsMCA3LjUsMS4xMTkyOCA3LjUsMi40OTk5OXY5Ljk5OTk5YzAsMS4zODA3MiAtMy4zNTc4NSwyLjQ5OTk5IC03LjUsMi40OTk5OWgtNy41MDAwMnY3LjUwMDAxYzAsNC4xNDIxNCAtMS4xMTkyOCw3LjUgLTIuNDk5OTksNy41aC05Ljk5OTk5Yy0xLjM4MDcyLDAgLTIuNDk5OTksLTMuMzU3ODYgLTIuNDk5OTksLTcuNXYtNy41MDAwMXoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iIzM4OTQzOCIgc3Ryb2tlLXdpZHRoPSIyIi8+PGcgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjNDc5YTQ3IiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIGQ9Ik0zNDMuMTc5ODUsMTM1Ljk3NjM0Yy0xLjQ5OTU5LDAgLTIuNzE1MjUsLTEuMjE1NjcgLTIuNzE1MjUsLTIuNzE1MjZ2LTAuMDAwMDFjMCwtMC4wMDIxNSAwLC0wLjAwNDMgMC4wMDAwMSwtMC4wMDY0NWMwLC0wLjAwMDAxIDAsLTAuMDAwMDEgMCwtMC4wMDAwMnYtMTMuNTY5ODJoLTAuMDAwMDF2LTguMTQ1NzdjMCwtMS40OTk1OSAxLjIxNTY2LC0yLjcxNTI1IDIuNzE1MjUsLTIuNzE1MjVjMC4wMDIxNiwwIDAuMDA0MzIsMCAwLjAwNjQ4LDAuMDAwMDFoMTMuNTY5ODJ2LTAuMDAwMDFoOC4xNDU3OGMxLjQ5OTU5LDAgMi43MTUyNSwxLjIxNTY3IDIuNzE1MjUsMi43MTUyNWMwLDAuMDAyMTYgMCwwLjAwNDMyIDAsMC4wMDY0N3YxMy41Njk4MnYwdjUuNDMwNTJoMC4wMDAwMXYxMy41NzYyN2MwLDAuMDA1MjggLTAuMDAwMDIsMC4wMTA1NyAtMC4wMDAwNSwwLjAxNTg0djIuNjk5NDJoMC4wMDAwM3Y4LjE0NTc3YzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI1IC0yLjcxNTI1LDIuNzE1MjVjLTAuMDAyMTYsMCAtMC4wMDQzLC0wLjAwMDAxIC0wLjAwNjQ2LC0wLjAwMDAxaC0yMS43MDkxM2MtMC4wMDIxNiwwLjAwMDAxIC0wLjAwNDMxLDAuMDAwMDEgLTAuMDA2NDcsMC4wMDAwMWMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY2IC0yLjcxNTI2LC0yLjcxNTI1YzAsLTEuNDk5NTkgMS4yMTU2NywtMi43MTUyNiAyLjcxNTI2LC0yLjcxNTI2YzAuMDAwMDEsMCAwLjAwMDAxLDAgMC4wMDAwMiwwdjBoMTYuMzAwNjRjMS40OTUzOCwtMC4wMDQ5MyAyLjcwNjEsLTEuMjE4NyAyLjcwNjEsLTIuNzE1MjVoMC4wMDAwMnYtMTAuODYxMDJoLTAuMDAwMDJ2LTAuMDAwMDFoLTAuMDAwMDFjMCwtMS40OTY1NCAtMS4yMTA3MSwtMi43MTAzMSAtMi43MDYxLC0yLjcxNTI1aC0xNi4zMDA2M3Ywek0zNDguNjAxMjUsMTE0LjI1NDMxYy0xLjQ5NTM4LDAuMDA0OTQgLTIuNzA2MSwxLjIxODcxIC0yLjcwNjEsMi43MTUyNGgtMC4wMDAwNHYxMC44NzAxNWMwLjAwNDkzLDEuNDk1MzggMS4yMTg3MSwyLjcwNjExIDIuNzE1MjUsMi43MDYxMXYwLjAwMDAzaDEwLjg3MDE1YzEuNDk1MzgsLTAuMDA0OTQgMi43MDYxLC0xLjIxODcgMi43MDYxLC0yLjcxNTI0aDAuMDAwMDR2LTEwLjg3MDE1Yy0wLjAwNDkzLC0xLjQ5NTM4IC0xLjIxODcsLTIuNzA2MSAtMi43MTUyNCwtMi43MDYxdi0wLjAwMDAzeiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iLz48cGF0aCBkPSJNMTEyLjM4Mjg2LDExMS41MzkwOGMwLC0xLjQ5OTU5IDEuMjE1NjYsLTIuNzE1MjUgMi43MTUyNSwtMi43MTUyNWMwLjAwMjE2LDAgMC4wMDQzMSwwLjAwMDAxIDAuMDA2NDYsMC4wMDAwMWgyMS43MDkxM2MwLjAwMjE1LC0wLjAwMDAxIDAuMDA0MzEsLTAuMDAwMDEgMC4wMDY0NywtMC4wMDAwMWMxLjQ5OTU5LDAgMi43MTUyNiwxLjIxNTY2IDIuNzE1MjYsMi43MTUyNWMwLDEuNDk5NTkgLTEuMjE1NjcsMi43MTUyNiAtMi43MTUyNiwyLjcxNTI2Yy0wLjAwMDAxLDAgLTAuMDAwMDEsMCAtMC4wMDAwMiwwdjAuMDAwMDFoLTE2LjMwMDY0Yy0xLjQ5NTM4LDAuMDA0OTQgLTIuNzA2MSwxLjIxODcxIC0yLjcwNjEsMi43MTUyNGgtMC4wMDAwNXYwLjAwMDAyaDAuMDAwMDVjMCwxLjQ5MzEyIDEuMjA1MTgsMi43MDQ3NiAyLjY5NTg0LDIuNzE1MTloMTYuMzA0NDFjMC4wMDIxNSwwIDAuMDA0MzEsLTAuMDAwMDEgMC4wMDY0NiwtMC4wMDAwMWMxLjQ5OTU5LDAgMi43MTUyNSwxLjIxNTY2IDIuNzE1MjUsMi43MTUyNXYxMC44NjEwNGMwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNSAtMi43MTUyNSwyLjcxNTI1Yy0wLjAwMjE1LDAgLTAuMDA0MzEsMCAtMC4wMDY0NiwwaC0yMS43MDkxMmMtMC4wMDIxNiwwLjAwMDAxIC0wLjAwNDMxLDAgLTAuMDA2NDcsMGMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY2IC0yLjcxNTI2LC0yLjcxNTI1YzAsLTEuNDk5NTkgMS4yMTU2NywtMi43MTUyNiAyLjcxNTI2LC0yLjcxNTI2YzAuMDAwMDEsMCAwLjAwMDAxLDAgMC4wMDAwMiwwdi0wLjAwMDAxaDE2LjMwMDY0YzEuNDk1MzgsLTAuMDA0OTQgMi43MDYxLC0xLjIxODcgMi43MDYxLC0yLjcxNTI0aDAuMDAwMDV2LTAuMDAwMDJoLTAuMDAwMDVjMCwtMS40OTMxMiAtMS4yMDUxOSwtMi43MDQ3NiAtMi42OTU4NCwtMi43MTUxOWgtMTYuMzA0NGMtMC4wMDIxNiwwIC0wLjAwNDMxLDAuMDAwMDEgLTAuMDA2NDYsMC4wMDAwMWMtMC45MDkwNCwwIC0xLjcxMzc0LC0wLjQ0NjcyIC0yLjIwNjU2LC0xLjEzMjZjLTAuMzIwMTksLTAuNDQ1NTkgLTAuNTA4NzUsLTAuOTkyMTQgLTAuNTA4NzUsLTEuNTgyNzNjMCwtMC4wMDU3MSAwLjAwMDAxLC0wLjAxMTQxIDAuMDAwMDUsLTAuMDE3MTF6Ii8+PHBhdGggZD0iTTE0Ny42ODExOCwxMzUuOTc2NGMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY2IC0yLjcxNTI2LC0yLjcxNTI1YzAsLTAuMDAyMTYgMCwtMC4wMDQzMiAwLjAwMDAxLC0wLjAwNjQ3di0xMy41Njk4MmgtMC4wMDAwMXYtOC4xNDU3N2MwLC0xLjQ5OTU5IDEuMjE1NjcsLTIuNzE1MjUgMi43MTUyNiwtMi43MTUyNWMwLjAwMjE1LDAgMC4wMDQzMiwwIDAuMDA2NDcsMC4wMDAwMWgxMy41Njk4MnYtMC4wMDAwMWg4LjE0NTc4YzEuNDk5NTksMCAyLjcxNTI1LDEuMjE1NjcgMi43MTUyNSwyLjcxNTI1YzAsMC4wMDIxNiAwLDAuMDA0MzIgLTAuMDAwMDEsMC4wMDY0N3YxMy41Njk4MmgwLjAwMDAxdjguMTQ1NzhjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjUgLTIuNzE1MjUsMi43MTUyNWMtMC4wMDIxNSwwIC0wLjAwNDMyLDAgLTAuMDA2NDcsLTAuMDAwMDFoLTEzLjU2OTgydjAuMDAwMDF6TTE1My4xMDI1OSwxMTQuMjU0MzVjLTEuNDk1MzgsMC4wMDQ5NCAtMi43MDYxLDEuMjE4NzEgLTIuNzA2MSwyLjcxNTI0aC0wLjAwMDA0djEwLjg3MDE1YzAuMDA0OTMsMS40OTUzOCAxLjIxODcxLDIuNzA2MSAyLjcxNTI1LDIuNzA2MXYwLjAwMDA0aDEwLjg3MDE1YzEuNDk1MzgsLTAuMDA0OTQgMi43MDYxMSwtMS4yMTg3IDIuNzA2MTEsLTIuNzE1MjRoMC4wMDAwM3YtMTAuODcwMTZjLTAuMDA0OTMsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI1LC0yLjcwNjF2LTAuMDAwMDR6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIvPjxwYXRoIGQ9Ik0xOTEuMTI1MjgsMTA4LjgyMzgyYzAuMDA1MjgsMCAwLjAxMDU3LDAuMDAwMDIgMC4wMTU4NCwwLjAwMDA1aDIuNjk5NDJ2LTAuMDAwMDNoOC4xNDU3OGMxLjQ5OTU5LDAgMi43MTUyNSwxLjIxNTY2IDIuNzE1MjUsMi43MTUyNWMwLDAuMDAyMTYgLTAuMDAwMDEsMC4wMDQzMSAtMC4wMDAwMSwwLjAwNjQ3djIxLjcwOTEzYzAuMDAwMDEsMC4wMDIxNiAwLjAwMDAxLDAuMDA0MzIgMC4wMDAwMSwwLjAwNjQ3YzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI1IC0yLjcxNTI1LDIuNzE1MjVjLTEuNDk5NTksMCAtMi43MTUyNiwtMS4yMTU2NiAtMi43MTUyNiwtMi43MTUyNWMwLC0wLjAwMDAxIDAsLTAuMDAwMDIgMCwtMC4wMDAwM2gtMC4wMDAwMXYtMTYuMzAwNjNjLTAuMDA0OTMsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI0LC0yLjcwNjF2LTAuMDAwMDFoLTAuMDAwMDRjLTEuNDk2NTQsMCAtMi43MTAzMSwxLjIxMDcyIC0yLjcxNTI0LDIuNzA2MTF2MTYuMjk0MThjMC4wMDAwMSwwLjAwMjE2IDAuMDAwMDEsMC4wMDQzMSAwLjAwMDAxLDAuMDA2NDdjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjYgLTIuNzE1MjUsMi43MTUyNmMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY3IC0yLjcxNTI2LC0yLjcxNTI2YzAsLTAuMDAwMDEgMCwtMC4wMDAwMSAwLC0wLjAwMDAyaC0wLjAwMDAxdi0xNi4zMDA2M2MtMC4wMDQ5MywtMS40OTUzOCAtMS4yMTg3LC0yLjcwNjExIC0yLjcxNTI0LC0yLjcwNjExaC0wLjAwMDAxdjAuMDAwMDFjLTEuNDk2NTQsMCAtMi43MTAzMSwxLjIxMDcxIC0yLjcxNTI0LDIuNzA2MXYxNi4zMDA2NGgtMC4wMDAwMWMwLDAuMDAwMDEgMCwwLjAwMDAyIDAsMC4wMDAwM2MwLDEuNDk5NTkgLTEuMjE1NjcsMi43MTUyNSAtMi43MTUyNiwyLjcxNTI1Yy0xLjQ5OTU5LDAgLTIuNzE1MjUsLTEuMjE1NjYgLTIuNzE1MjUsLTIuNzE1MjVjMCwtMC4wMDIxNiAwLC0wLjAwNDMyIDAuMDAwMDEsLTAuMDA2NDd2LTE5LjAwMDNoLTAuMDAwMDFjMCwwIDAsLTAuMDAwMDIgMCwtMC4wMDAwNXYtNS40MzA1MXoiLz48cGF0aCBkPSJNMjM3LjI4NDYzLDEyMi4zODI5NWMwLjAwMDA0LDAuMDA1NyAwLjAwMDA2LDAuMDExNDEgMC4wMDAwNiwwLjAxNzEyYzAsMC4yNTM3OCAtMC4wMzQ4MiwwLjQ5OTQzIC0wLjA5OTkzLDAuNzMyNDJjLTAuMDg2NDIsMC4zMDkyNCAtMC4yMjYyMSwwLjU5NjE5IC0wLjQwODgyLDAuODUwMzJjLTAuNDkyODIsMC42ODU4OCAtMS4yOTc1MiwxLjEzMjU5IC0yLjIwNjU1LDEuMTMyNTljLTAuMDAyMTUsMCAtMC4wMDQzMSwtMC4wMDAwMSAtMC4wMDY0NywtMC4wMDAwMWgtMTYuMzA0NDFjLTEuNDkwNjYsMC4wMTA0MyAtMi42OTU4NCwxLjIyMjA3IC0yLjY5NTg0LDIuNzE1MTloLTAuMDAwMDV2MC4wMDAwM2gwLjAwMDA1YzAsMS40OTY1NCAxLjIxMDcyLDIuNzEwMzEgMi43MDYxMSwyLjcxNTI0aDE2LjMwMDYzdjAuMDAwMDFjMC4wMDAwMSwwIDAuMDAwMDIsMCAwLjAwMDAzLDBjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NyAyLjcxNTI2LDIuNzE1MjZjMCwxLjQ5OTU5IC0xLjIxNTY3LDIuNzE1MjUgLTIuNzE1MjYsMi43MTUyNWMtMC4wMDIxNSwwIC0wLjAwNDMyLDAuMDAwMDEgLTAuMDA2NDcsMGgtMjEuNzA5MTNjLTAuMDAyMTUsMCAtMC4wMDQzLDAgLTAuMDA2NDYsMGMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY1IC0yLjcxNTI2LC0yLjcxNTI1di0xMC44NTE4NGMtMC4wMDAwMSwtMC4wMDMwNSAtMC4wMDAwMSwtMC4wMDYwOSAtMC4wMDAwMSwtMC4wMDkxNHYtMTAuODYxMDVjMCwtMS40OTk1OSAxLjIxNTY2LC0yLjcxNTI1IDIuNzE1MjUsLTIuNzE1MjVjMC4wMDIxNSwwIDAuMDA0MzEsMC4wMDAwMSAwLjAwNjQ2LDAuMDAwMDFoMjEuNzA5MTNjMC4wMDIxNSwtMC4wMDAwMSAwLjAwNDMxLC0wLjAwMDAxIDAuMDA2NDcsLTAuMDAwMDFjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NiAyLjcxNTI2LDIuNzE1MjVjMCwwLjAwNDgyIC0wLjAwMDAxLDAuMDA5NjUgLTAuMDAwMDQsMC4wMTQ0N3pNMjI5LjE1ODIzLDExOS42ODQ4MWMxLjQ5MDY2LC0wLjAxMDQzIDIuNjk1ODQsLTEuMjIyMDggMi42OTU4NCwtMi43MTUxOWgwLjAwMDA1di0wLjAwMDAyaC0wLjAwMDA1YzAsLTEuNDk2NTQgLTEuMjEwNzIsLTIuNzEwMzEgLTIuNzA2MTEsLTIuNzE1MjRoLTEwLjg4M2MtMS40OTM2NCwwLjAwNjk3IC0yLjcwMjMxLDEuMjE5OTUgLTIuNzAyMzEsMi43MTUyM2gtMC4wMDAwNXYwLjAwMDAyaDAuMDAwMDVjMCwxLjQ5Mzg5IDEuMjA2NDIsMi43MDYgMi42OTgxNCwyLjcxNTJ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIvPjxwYXRoIGQ9Ik0yNDguMTQ1OCw4OS44MTY4OWMwLC0xLjQ5OTU5IDEuMjE1NjYsLTIuNzE1MjYgMi43MTUyNSwtMi43MTUyNnYwYzEuNDk5NTksMCAyLjcxNTI2LDEuMjE1NjcgMi43MTUyNiwyLjcxNTI2YzAsMC4wMDAwMSAwLDAuMDAwMDEgMCwwLjAwMDAydjB2MTYuMzAwNjNjMC4wMDQ5MywxLjQ5NTM4IDEuMjE4NzEsMi43MDYxMSAyLjcxNTI1LDIuNzA2MTF2MC4wMDAwNWgwLjAwOTEyYzEuNDk1MzgsMC4wMDQ5NCAyLjcwNjEsMS4yMTg3IDIuNzA2MSwyLjcxNTI0aDAuMDAwMDV2MC4wMDAwM2gtMC4wMDAwNWMwLDAuMDAwMDIgMCwwLjAwMDA0IDAsMC4wMDAwNmgwLjAwMDA1djAuMDAwMDNoLTAuMDAwMDVjMCwxLjQ5NjU0IC0xLjIxMDcxLDIuNzEwMyAtMi43MDYxLDIuNzE1MjRoLTAuMDA5MTJ2MC4wMDAwNWMtMS40OTM0OCwwIC0yLjcwNTM1LDEuMjA1NzkgLTIuNzE1MiwyLjY5Njk3djEwLjg4ODRjMC4wMDQ5MywxLjQ5NTM4IDEuMjE4NzEsMi43MDYxIDIuNzE1MjUsMi43MDYxdjAuMDAwMDVoMC4wMDkxMmMxLjQ5NTM4LDAuMDA0OTQgMi43MDYxLDEuMjE4NzEgMi43MDYxLDIuNzE1MjRoMC4wMDAwNXYwLjAwMDAyaC0wLjAwMDA1YzAsMS40OTY1NCAtMS4yMTA3MSwyLjcxMDMxIC0yLjcwNjEsMi43MTUyNGMtMC4wMDAwMSwwIC01LjQzOTY2LDAgLTUuNDM5NjcsMGMtMC40NDk0NiwwIC0wLjg3MzQyLC0wLjEwOTIxIC0xLjI0Njc4LC0wLjMwMjUzYy0wLjg3MjM3LC0wLjQ1MTY4IC0xLjQ2ODU2LC0xLjM2MjU5IC0xLjQ2ODU2LC0yLjQxMjc2YzAsLTAuMDAwMDEgMCwtMC4wMDAwMiAwLC0wLjAwMDAzdjB2LTE2LjMwMDYzYy0wLjAwNDkzLC0xLjQ5NTM4IC0xLjIxODcsLTIuNzA2MSAtMi43MTUyNSwtMi43MDYxdi0wLjAwMDA1aC0wLjAwOTEyYy0xLjQ5NTM4LC0wLjAwNDk0IC0yLjcwNjEsLTEuMjE4NyAtMi43MDYxLC0yLjcxNTI0aC0wLjAwMDA1di0wLjAwMDAyaDAuMDAwMDVjMCwtMS4wMTAxNyAwLjU1MTYzLC0xLjg5MTUgMS4zNzAxLC0yLjM1OTE4YzAuMzk0MDksLTAuMjI1MjEgMC44NTAwNSwtMC4zNTQ1IDEuMzM2MDgsLTAuMzU2MWgwLjAwOTEydi0wLjAwMDA1YzEuNDk2NTQsMCAyLjcxMDMxLC0xLjIxMDcyIDIuNzE1MjQsLTIuNzA2MXYtMTYuMzAwNjNjMCwtMC4wMDAwMSAwLC0wLjAwMDAxIDAsLTAuMDAwMDJ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIvPjxwYXRoIGQ9Ik0yNzguMDEzNjQsMTA4LjgyMzc2YzAuMDA1MjgsMCAwLjAxMDU3LDAuMDAwMDIgMC4wMTU4NCwwLjAwMDA1aDIuNjk5NDJ2LTAuMDAwMDNoOC4xNDU3OGMxLjQ5OTU5LDAgMi43MTUyNSwxLjIxNTY2IDIuNzE1MjUsMi43MTUyNWMwLDAuMDAyMTYgLTAuMDAwMDEsMC4wMDQzMSAtMC4wMDAwMSwwLjAwNjQ3djIxLjcwOTEzYzAuMDAwMDEsMC4wMDIxNiAwLjAwMDAxLDAuMDA0MzEgMC4wMDAwMSwwLjAwNjQ3YzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI2IC0yLjcxNTI1LDIuNzE1MjZjLTEuNDk5NTksMCAtMi43MTUyNiwtMS4yMTU2NyAtMi43MTUyNiwtMi43MTUyNmMwLC0wLjAwMDAxIDAsLTAuMDAwMDEgMCwtMC4wMDAwMmgtMC4wMDAwMXYtMTYuMzAwNjNjLTAuMDA0OTMsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI0LC0yLjcwNjF2LTAuMDAwMDJoLTEwLjg2MTAydjAuMDAwMDFoLTAuMDAwMDF2MC4wMDAwMWMtMS40OTY1NCwwIC0yLjcxMDMxLDEuMjEwNzIgLTIuNzE1MjUsMi43MDYxdjE2LjMwMDY0djBjMCwwLjAwMDAxIDAsMC4wMDAwMSAwLDAuMDAwMDJjMCwxLjQ5OTU5IC0xLjIxNTY3LDIuNzE1MjYgLTIuNzE1MjYsMi43MTUyNmMtMS40OTk1OSwwIC0yLjcxNTI1LC0xLjIxNTY3IC0yLjcxNTI1LC0yLjcxNTI2YzAsLTAuMDAyMTYgMCwtMC4wMDQzMSAwLjAwMDAxLC0wLjAwNjQ3di0xOS4wMDAzaC0wLjAwMDAxYzAsMCAwLC0wLjAwMDAyIDAsLTAuMDAwMDV2LTUuNDMwNTFoMC4wMDAwOHYtMTkuMDAwMzdjLTAuMDAwMDEsLTAuMDAyMTYgLTAuMDAwMDEsLTAuMDA0MzIgLTAuMDAwMDEsLTAuMDA2NDdjMCwtMS40OTk1OSAxLjIxNTY2LC0yLjcxNTI2IDIuNzE1MjUsLTIuNzE1MjZjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NyAyLjcxNTI2LDIuNzE1MjZjMCwwLjAwMDAxIDAsMC4wMDAwMSAwLDAuMDAwMDJoMC4wMDAwMXYxNi4zMDA2NGMwLjAwNDkzLDEuNDk1MzggMS4yMTg3LDIuNzA2MSAyLjcxNTI0LDIuNzA2MXYwLjAwMDA1aDAuMDA5MTJjMC4wMDMwNCwwLjAwMDAxIDAuMDA2MTEsMC4wMDAwMiAwLjAwOTE1LDAuMDAwMDV6Ii8+PHBhdGggZD0iTTI5OS43MzU3NSwxMzUuOTc2MzRjLTEuNDk5NTksMCAtMi43MTUyNSwtMS4yMTU2NiAtMi43MTUyNSwtMi43MTUyNWMwLC0wLjAwMjE2IDAsLTAuMDA0MzEgMCwtMC4wMDY0NnYtMjEuNzA5MTJjLTAuMDAwMDEsLTAuMDAyMTYgMCwtMC4wMDQzMiAwLC0wLjAwNjQ3YzAsLTEuNDk5NTkgMS4yMTU2NiwtMi43MTUyNiAyLjcxNTI1LC0yLjcxNTI2YzEuNDk5NTksMCAyLjcxNTI2LDEuMjE1NjcgMi43MTUyNiwyLjcxNTI2YzAsMC4wMDAwMSAwLDAuMDAwMDEgMCwwLjAwMDAydjB2MjEuNzIyMDR2MGMwLDEuNDk5NTkgLTEuMjE1NjcsMi43MTUyNSAtMi43MTUyNiwyLjcxNTI1eiIvPjxwYXRoIGQ9Ik0yOTcuMDIwNDQsOTUuMjQ3NDZjMCwtMS40OTk1OSAxLjIxNTY3LC0yLjcxNTI1IDIuNzE1MjYsLTIuNzE1MjVjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NyAyLjcxNTI2LDIuNzE1MjVjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjUgLTIuNzE1MjYsMi43MTUyNWMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY2IC0yLjcxNTI2LC0yLjcxNTI1eiIvPjxwYXRoIGQ9Ik0zMjEuNDU3OCwxMDguODIzNzZjMC4wMDUyOCwwIDAuMDEwNTcsMC4wMDAwMiAwLjAxNTg0LDAuMDAwMDVoMi42OTk0MnYtMC4wMDAwM2g4LjE0NTc4YzEuNDk5NTksMCAyLjcxNTI1LDEuMjE1NjYgMi43MTUyNSwyLjcxNTI1YzAsMC4wMDIxNiAwLDAuMDA0MzEgMCwwLjAwNjQ3djIxLjcwOTEzYzAuMDAwMDEsMC4wMDIxNiAwLDAuMDA0MzEgMCwwLjAwNjQ3YzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI2IC0yLjcxNTI1LDIuNzE1MjZjLTEuNDk5NTksMCAtMi43MTUyNiwtMS4yMTU2NyAtMi43MTUyNiwtMi43MTUyNmMwLC0wLjAwMDAxIDAsLTAuMDAwMDEgMCwtMC4wMDAwMmgtMC4wMDAwMXYtMTYuMzAwNjNjLTAuMDA0OTMsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI0LC0yLjcwNjF2LTAuMDAwMDF2LTAuMDAwMDFoLTEwLjg2MTAydjAuMDAwMDF2MGgtMC4wMDAwMXYwLjAwMDAxYy0xLjQ5NjU0LDAgLTIuNzEwMzEsMS4yMTA3MiAtMi43MTUyNCwyLjcwNjF2MTYuMzAwNjR2MGMwLDAuMDAwMDEgMCwwLjAwMDAxIDAsMC4wMDAwMmMwLDEuNDk5NTkgLTEuMjE1NjcsMi43MTUyNiAtMi43MTUyNiwyLjcxNTI2Yy0xLjQ5OTU5LDAgLTIuNzE1MjUsLTEuMjE1NjcgLTIuNzE1MjUsLTIuNzE1MjZjMCwtMC4wMDIxNiAwLC0wLjAwNDMxIDAsLTAuMDA2NDd2LTE5LjAwMDN2MGMwLDAgMCwtMC4wMDAwMiAwLC0wLjAwMDA1di01LjQzMDUxeiIvPjwvZz48ZyBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiM0NzlhNDciIHN0cm9rZS13aWR0aD0iMiI+PHBhdGggZD0iTTM2MC4zOTc5LDIzNy41ODI4OWMwLjAwMDA0LDAuMDA1NyAwLjAwMDA1LDAuMDExNCAwLjAwMDA1LDAuMDE3MTFjMCwwLjI1Mzc4IC0wLjAzNDgyLDAuNDk5NDMgLTAuMDk5OTMsMC43MzI0MmMtMC4wODY0MiwwLjMwOTI0IC0wLjIyNjIxLDAuNTk2MTkgLTAuNDA4ODIsMC44NTAzMmMtMC40OTI4MiwwLjY4NTg4IC0xLjI5NzUyLDEuMTMyNTkgLTIuMjA2NTYsMS4xMzI1OWMtMC4wMDIxNiwwIC0wLjAwNDMxLC0wLjAwMDAxIC0wLjAwNjQ2LC0wLjAwMDAxaC0xNi4zMDQ0Yy0xLjQ5MDY2LDAuMDEwNDMgLTIuNjk1ODQsMS4yMjIwNyAtMi42OTU4NCwyLjcxNTE5aC0wLjAwMDA1djAuMDAwMDJoMC4wMDAwNWMwLDEuNDk2NTQgMS4yMTA3MSwyLjcxMDMxIDIuNzA2MSwyLjcxNTI0aDE2LjMwMDYzdjAuMDAwMDFjMC4wMDAwMSwwIDAuMDAwMDIsMCAwLjAwMDAyLDBjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NiAyLjcxNTI2LDIuNzE1MjZjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjUgLTIuNzE1MjYsMi43MTUyNWMtMC4wMDIxNiwwIC0wLjAwNDMxLDAgLTAuMDA2NDcsLTAuMDAwMDFoLTIxLjcwOTEyYy0wLjAwMjE2LDAgLTAuMDA0MzEsMC4wMDAwMSAtMC4wMDY0NiwwLjAwMDAxYy0xLjQ5OTU5LDAgLTIuNzE1MjUsLTEuMjE1NjYgLTIuNzE1MjUsLTIuNzE1MjV2LTEwLjg1MTgzYy0wLjAwMDAxLC0wLjAwMzA1IC0wLjAwMDAyLC0wLjAwNjA5IC0wLjAwMDAyLC0wLjAwOTE1di0xMC44NjEwNGMwLC0xLjQ5OTU5IDEuMjE1NjYsLTIuNzE1MjUgMi43MTUyNSwtMi43MTUyNWMwLjAwMjE2LDAgMC4wMDQzMSwwLjAwMDAxIDAuMDA2NDYsMC4wMDAwMWgyMS43MDkxMmMwLjAwMjE2LC0wLjAwMDAxIDAuMDA0MzEsLTAuMDAwMDEgMC4wMDY0NywtMC4wMDAwMWMxLjQ5OTU5LDAgMi43MTUyNiwxLjIxNTY2IDIuNzE1MjYsMi43MTUyNWMwLDAuMDA0ODMgLTAuMDAwMDIsMC4wMDk2NSAtMC4wMDAwNCwwLjAxNDQ3ek0zNTIuMjcxNDksMjM0Ljg4NDc1YzEuNDkwNjYsLTAuMDEwNDMgMi42OTU4NCwtMS4yMjIwNyAyLjY5NTg0LC0yLjcxNTE5aDAuMDAwMDV2LTAuMDAwMDJoLTAuMDAwMDVjMCwtMS40OTY1NCAtMS4yMTA3MSwtMi43MTAzMSAtMi43MDYxLC0yLjcxNTI0aC0xMC44ODNjLTEuNDkzNjQsMC4wMDY5NyAtMi43MDIzMiwxLjIxOTk1IC0yLjcwMjMyLDIuNzE1MjNoLTAuMDAwMDV2MC4wMDAwMmgwLjAwMDA1YzAsMS40OTM4OSAxLjIwNjQyLDIuNzA2IDIuNjk4MTQsMi43MTUyeiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iLz48cGF0aCBkPSJNMjEzLjc3Mzk4LDIyNi43Mzg5N2MwLC0xLjQ5OTU5IDEuMjE1NjYsLTIuNzE1MjUgMi43MTUyNSwtMi43MTUyNWMwLjAwMjE2LDAgMC4wMDQzMSwwLjAwMDAxIDAuMDA2NDYsMC4wMDAwMWgyMS43MDkxMmMwLjAwMjE2LC0wLjAwMDAxIDAuMDA0MzEsLTAuMDAwMDEgMC4wMDY0NywtMC4wMDAwMWMxLjQ5OTU5LDAgMi43MTUyNiwxLjIxNTY2IDIuNzE1MjYsMi43MTUyNWMwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNiAtMi43MTUyNiwyLjcxNTI2Yy0wLjAwMDAxLDAgLTAuMDAwMDIsMCAtMC4wMDAwMiwwdjAuMDAwMDFoLTE2LjMwMDYzYy0xLjQ5NTM5LDAuMDA0OTMgLTIuNzA2MSwxLjIxODcgLTIuNzA2MSwyLjcxNTI0aC0wLjAwMDA1djAuMDAwMDJoMC4wMDAwNWMwLDEuNDkzMTIgMS4yMDUxOSwyLjcwNDc2IDIuNjk1ODQsMi43MTUxOWgxNi4zMDQ0YzAuMDAyMTYsMCAwLjAwNDMxLC0wLjAwMDAxIDAuMDA2NDYsLTAuMDAwMDFjMS40OTk1OSwwIDIuNzE1MjUsMS4yMTU2NiAyLjcxNTI1LDIuNzE1MjV2MTAuODYxMDRjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjUgLTIuNzE1MjUsMi43MTUyNWMtMC4wMDIxNiwwIC0wLjAwNDMxLC0wLjAwMDAxIC0wLjAwNjQ2LC0wLjAwMDAxaC0yMS43MDkxMmMtMC4wMDIxNiwwLjAwMDAxIC0wLjAwNDMxLDAuMDAwMDEgLTAuMDA2NDcsMC4wMDAwMWMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY2IC0yLjcxNTI2LC0yLjcxNTI1YzAsLTEuNDk5NTkgMS4yMTU2NiwtMi43MTUyNiAyLjcxNTI2LC0yLjcxNTI2YzAuMDAwMDEsMCAwLjAwMDAyLDAgMC4wMDAwMiwwdi0wLjAwMDAxaDE2LjMwMDYzYzEuNDk1MzksLTAuMDA0OTMgMi43MDYxLC0xLjIxODcgMi43MDYxLC0yLjcxNTI0aDAuMDAwMDV2LTAuMDAwMDJoLTAuMDAwMDVjMCwtMS40OTMxMiAtMS4yMDUxOSwtMi43MDQ3NiAtMi42OTU4NCwtMi43MTUxOWgtMTYuMzA0NGMtMC4wMDIxNiwwIC0wLjAwNDMxLDAuMDAwMDEgLTAuMDA2NDYsMC4wMDAwMWMtMC45MDkwNCwwIC0xLjcxMzc0LC0wLjQ0NjcxIC0yLjIwNjU2LC0xLjEzMjU5Yy0wLjMyMDIsLTAuNDQ1NiAtMC41MDg3NSwtMC45OTIxNCAtMC41MDg3NSwtMS41ODI3M2MwLC0wLjAwNTcxIDAuMDAwMDIsLTAuMDExNDEgMC4wMDAwNSwtMC4wMTcxMXoiLz48cGF0aCBkPSJNMjcwLjc5NDQsMjI0LjAyMzcxYzAuMDA1MjgsMCAwLjAxMDU3LDAuMDAwMDIgMC4wMTU4NCwwLjAwMDA1aDIuNjk5NDJ2LTAuMDAwMDRoOC4xNDU3N2MxLjQ5OTU5LDAgMi43MTUyNSwxLjIxNTY2IDIuNzE1MjUsMi43MTUyNWMwLDAuMDAyMTYgLTAuMDAwMDEsMC4wMDQzMSAtMC4wMDAwMSwwLjAwNjQ2djIxLjcwOTEyYzAuMDAwMDEsMC4wMDIxNiAwLjAwMDAxLDAuMDA0MzEgMC4wMDAwMSwwLjAwNjQ3YzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI2IC0yLjcxNTI1LDIuNzE1MjZjLTEuNDk5NTksMCAtMi43MTUyNiwtMS4yMTU2NiAtMi43MTUyNiwtMi43MTUyNmMwLC0wLjAwMDAxIDAsLTAuMDAwMDIgMCwtMC4wMDAwMmgtMC4wMDAwMXYtMTYuMzAwNjNjLTAuMDA0OTMsLTEuNDk1MzkgLTEuMjE4NywtMi43MDYxIC0yLjcxNTI0LC0yLjcwNjF2LTAuMDAwMDFoLTAuMDAwMDRjLTEuNDk2NTQsMCAtMi43MTAzMSwxLjIxMDcxIC0yLjcxNTI0LDIuNzA2MXYxNi4yOTQxOGMwLjAwMDAxLDAuMDAyMTYgMC4wMDAwMSwwLjAwNDMxIDAuMDAwMDEsMC4wMDY0N2MwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNiAtMi43MTUyNSwyLjcxNTI2Yy0xLjQ5OTU5LDAgLTIuNzE1MjYsLTEuMjE1NjYgLTIuNzE1MjYsLTIuNzE1MjZjMCwtMC4wMDAwMSAwLC0wLjAwMDAyIDAsLTAuMDAwMDJoLTAuMDAwMDF2LTE2LjMwMDYzYy0wLjAwNDkzLC0xLjQ5NTM5IC0xLjIxODcsLTIuNzA2MSAtMi43MTUyNCwtMi43MDYxaC0wLjAwMDAxdjAuMDAwMDFjLTEuNDk2NTQsMCAtMi43MTAzMSwxLjIxMDcxIC0yLjcxNTI0LDIuNzA2MXYxNi4zMDA2M2gtMC4wMDAwMWMwLDAuMDAwMDEgMCwwLjAwMDAyIDAsMC4wMDAwMmMwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNiAtMi43MTUyNiwyLjcxNTI2Yy0xLjQ5OTU5LDAgLTIuNzE1MjUsLTEuMjE1NjYgLTIuNzE1MjUsLTIuNzE1MjZjMCwtMC4wMDIxNiAwLC0wLjAwNDMxIDAuMDAwMDEsLTAuMDA2NDd2LTE5LjAwMDI5aC0wLjAwMDAxYzAsMCAwLC0wLjAwMDAyIDAsLTAuMDAwMDV2LTUuNDMwNTF6Ii8+PHBhdGggZD0iTTI0OS4wNzIzNSwyNTEuMTc2MjhjLTEuNDk5NTksMCAtMi43MTUyNSwtMS4yMTU2NiAtMi43MTUyNSwtMi43MTUyNWMwLC0wLjAwMjE2IDAuMDAwMDEsLTAuMDA0MzEgMC4wMDAwMSwtMC4wMDY0NnYtMjEuNzA5MTJjLTAuMDAwMDEsLTAuMDAyMTYgLTAuMDAwMDEsLTAuMDA0MzEgLTAuMDAwMDEsLTAuMDA2NDdjMCwtMS40OTk1OSAxLjIxNTY2LC0yLjcxNTI2IDIuNzE1MjUsLTIuNzE1MjZjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NiAyLjcxNTI2LDIuNzE1MjZjMCwwLjAwMDAxIDAsMC4wMDAwMiAwLDAuMDAwMDJoMC4wMDAwMXYyMS43MjIwM2gtMC4wMDAwMWMwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNSAtMi43MTUyNiwyLjcxNTI1eiIvPjxwYXRoIGQ9Ik0yNDYuMzU3MDUsMjEwLjQ0NzRjMCwtMS40OTk1OSAxLjIxNTY2LC0yLjcxNTI1IDIuNzE1MjUsLTIuNzE1MjVjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NiAyLjcxNTI2LDIuNzE1MjVjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjYgLTIuNzE1MjYsMi43MTUyNmMtMS40OTk1OSwwIC0yLjcxNTI1LC0xLjIxNTY2IC0yLjcxNTI1LC0yLjcxNTI2eiIvPjxwYXRoIGQ9Ik0yODkuODAxMTksMjQ4LjQ2MTAyYzAsLTAuMDAyMTYgLTAuMDAwMDEsLTAuMDA0MzEgMCwtMC4wMDY0N3YtMTMuNTY5ODJ2MHYtOC4xNDU3N2MwLC0xLjQ5OTU5IDEuMjE1NjYsLTIuNzE1MjUgMi43MTUyNSwtMi43MTUyNWMwLjAwMjE2LDAgMC4wMDQzMSwwIDAuMDA2NDcsMC4wMDAwMWgxMy41Njk4MnYtMC4wMDAwMWg4LjE0NTc3YzEuNDk5NTksMCAyLjcxNTI1LDEuMjE1NjYgMi43MTUyNSwyLjcxNTI1YzAsMC4wMDIxNiAwLDAuMDA0MzEgLTAuMDAwMDEsMC4wMDY0N3YxMy41Njk4MmgwLjAwMDAxdjguMTQ1NzdjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjUgLTIuNzE1MjUsMi43MTUyNWMtMC4wMDIxNiwwIC0wLjAwNDMxLDAgLTAuMDA2NDcsLTAuMDAwMDFoLTEzLjU2OTgydjAuMDAwMDFoLTIuNjk2OTRjLTAuMDAzMDUsMC4wMDAwMiAtMC4wMDYwOSwwLjAwMDA0IC0wLjAwOTE0LDAuMDAwMDVoLTAuMDA5MTJ2MC4wMDAwNWMtMS40OTY1NCwwIC0yLjcxMDMxLDEuMjEwNzEgLTIuNzE1MjQsMi43MDYxdjE2LjMwMDYzaC0wLjAwMDAxYzAsMC4wMDAwMSAwLDAuMDAwMDIgMCwwLjAwMDAyYzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI2IC0yLjcxNTI2LDIuNzE1MjZjLTEuNDk5NTksMCAtMi43MTUyNSwtMS4yMTU2NiAtMi43MTUyNSwtMi43MTUyNmMwLC0wLjAwMjE2IDAuMDAwMDEsLTAuMDA0MzEgMC4wMDAwMiwtMC4wMDY0N3YtMjEuNjk1NjljLTAuMDAwMDUsLTAuMDA2NjQgLTAuMDAwMDcsLTAuMDEzMjggLTAuMDAwMDcsLTAuMDE5OTN6TTI5Ny45Mzc4MywyMjkuNDU0MjNjLTEuNDk1MzksMC4wMDQ5MyAtMi43MDYxLDEuMjE4NyAtMi43MDYxLDIuNzE1MjRoLTAuMDAwMDR2MTAuODcwMTVjMC4wMDQ5MywxLjQ5NTM5IDEuMjE4NywyLjcwNjEgMi43MTUyNCwyLjcwNjF2MC4wMDAwNGgxMC44NzAxNWMxLjQ5NTM5LC0wLjAwNDkzIDIuNzA2MSwtMS4yMTg3IDIuNzA2MSwtMi43MTUyNGgwLjAwMDA0di0xMC44NzAxNWMtMC4wMDQ5MywtMS40OTUzOSAtMS4yMTg3LC0yLjcwNjEgLTIuNzE1MjQsLTIuNzA2MXYtMC4wMDAwNHoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9Ii8+PHBhdGggZD0iTTMyNS4wOTk2LDI1MS4xNzYyOWMtMS40OTk1OSwwIC0yLjcxNTI1LC0xLjIxNTY2IC0yLjcxNTI1LC0yLjcxNTI1YzAsLTAuMDAyMTYgMC4wMDAwMSwtMC4wMDQzMSAwLjAwMDAxLC0wLjAwNjQ2di0xOS4wMDAzOWgtMC4wMDAwN3YtNS40MzA1MWgwLjAwMDA3di0xOS4wMDAzM2MtMC4wMDAwMSwtMC4wMDIxNiAtMC4wMDAwMSwtMC4wMDQzMSAtMC4wMDAwMSwtMC4wMDY0N2MwLC0xLjQ5OTU5IDEuMjE1NjYsLTIuNzE1MjYgMi43MTUyNSwtMi43MTUyNmMxLjQ5OTU5LDAgMi43MTUyNiwxLjIxNTY2IDIuNzE1MjYsMi43MTUyNmMwLDAuMDAwMDEgMCwwLjAwMDAyIDAsMC4wMDAwMmgwLjAwMDAxdjIxLjcyMjAzaC0wLjAwMDAxYzAsMC4wMDAwMiAwLDAuMDAwMDMgMCwwLjAwMDA1YzAsMC4wMDAwMSAwLDAuMDAwMDIgMCwwLjAwMDAyaDAuMDAwMDF2MjEuNzIyMDNoLTAuMDAwMDFjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjUgLTIuNzE1MjYsMi43MTUyNXoiLz48L2c+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MzAwOjE4Ny41LS0+";
    
    const OperatorsProicon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCwwLDgwLDgwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjI3NC4wOTQ1MyIgeTE9IjIxNC4wOTQ1NSIgeDI9IjIwNS45MDU1IiB5Mj0iMTQ1LjkwNTUyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzhiYmY4YiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzhiYmY4YiIgc3RvcC1vcGFjaXR5PSIwIi8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIwMC4wMDAwMSwtMTQwLjAwMDAzKSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMjIwLjE2MjYxLDIyMC4wMDAwM2MtMTEuMTM1NSwwIC0yMC4xNjI2LC05LjAyNzEgLTIwLjE2MjYsLTIwLjE2MjZ2LTM5LjY3NDhjMCwtMTEuMTM1NSA5LjAyNzEsLTIwLjE2MjYgMjAuMTYyNiwtMjAuMTYyNmgzOS42NzQ4YzExLjEzNTUsMCAyMC4xNjI2LDkuMDI3MSAyMC4xNjI2LDIwLjE2MjZ2MzkuNjc0OGMwLDExLjEzNTUgLTkuMDI3MSwyMC4xNjI2IC0yMC4xNjI2LDIwLjE2MjZ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0idXJsKCNjb2xvci0xKSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjIyLjY0MjI5LDIxNS4wMDAwNGMtOS43NDM1NiwwIC0xNy42NDIyNywtNy44OTg3MSAtMTcuNjQyMjcsLTE3LjY0MjI3di0zNC43MTU0NWMwLC05Ljc0MzU2IDcuODk4NzEsLTE3LjY0MjI4IDE3LjY0MjI3LC0xNy42NDIyOGgzNC43MTU0NWM5Ljc0MzU2LDAgMTcuNjQyMjgsNy44OTg3MiAxNy42NDIyOCwxNy42NDIyOHYzNC43MTU0NWMwLDkuNzQzNTYgLTcuODk4NzIsMTcuNjQyMjcgLTE3LjY0MjI4LDE3LjY0MjI3eiIgZmlsbD0iIzU5YzA1OSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMjI1LjAwMDAyLDE4Ny41MDAwMWMtNC4xNDIxNCwwIC03LjUsLTEuMTE5MjkgLTcuNSwtMi40OTk5OXYtOS45OTk5OWMwLC0xLjM4MDcyIDMuMzU3ODYsLTIuNDk5OTkgNy41LC0yLjQ5OTk5aDcuNXYtNy41YzAsLTQuMTQyMTQgMS4xMTkyOCwtNy41IDIuNDk5OTksLTcuNWg5Ljk5OTk5YzEuMzgwNzIsMCAyLjQ5OTk5LDMuMzU3ODYgMi40OTk5OSw3LjV2Ny41aDcuNTAwMDJjNC4xNDIxNSwwIDcuNSwxLjExOTI4IDcuNSwyLjQ5OTk5djkuOTk5OTljMCwxLjM4MDcyIC0zLjM1Nzg1LDIuNDk5OTkgLTcuNSwyLjQ5OTk5aC03LjUwMDAydjcuNTAwMDFjMCw0LjE0MjE0IC0xLjExOTI4LDcuNSAtMi40OTk5OSw3LjVoLTkuOTk5OTljLTEuMzgwNzIsMCAtMi40OTk5OSwtMy4zNTc4NiAtMi40OTk5OSwtNy41di03LjUwMDAxeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjMzg5NDM4IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjozOS45OTk5ODUwMDAwMDAwNDozOS45OTk5NjUwMDAwMDAwOS0tPg==";
    
    const OperatorsPronumproicon = "https://m.ccw.site/user_projects_assets/240948213d2fc2650c375fb2573bfacd.png"
    
    const OperatorsProextensionId = "OperatorsPro";
    
    const EXTCONFIGCOMMENTID = '_ExtensionConfig_';
    
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
    
                    'OperatorsPro.bmenuToBoolean':'[a][b]时[c]',
                    'OperatorsPro.rmenuif':'若[a][b]则[c]否则[d]',
                    'OperatorsPro.bmenuand':'[a][b][c][d]时[e]',
                    'OperatorsPro.bmenuundefined':'[a][b]是[c]',
                    'OperatorsPro.bmenuequal':'[a][b][c]，因为它们的[d]',
                    'OperatorsPro.rmenurad':'弧度制[a][b][c]',
                    'OperatorsPro.rmenutoonehundredeighty':'[a][b]在[c]角度中',
                    'OperatorsPro.rmenutypeof':'[a]作为[b]类型，[c]数组和对象',
                    'OperatorsPro.bmenutypeof':'[a]作为[b]类型为[c]',
                    'OperatorsPro.rmenuArraylength':'[a]作为[b][c]',
                    'OperatorsPro.bmenuArrayhave':'[a]作为[b][c][d][e]，因为[f]',
                    'OperatorsPro.bmenuArrayhavenumber':'[a]作为[b][c][d][e][f]，因为[g]',
                    'OperatorsPro.rmenuArrayremove':'[a]作为[b]删除[c][d]，因为[e]，返回[f]',
                    'OperatorsPro.rmenuArrayremovenumber':'[a]作为[b]删除[c][d][e]，因为[f]，返回[g]',
                    'OperatorsPro.rmenuArrayremoveitem':'[a]作为[b]删除第[c]项，返回[d]',
                    'OperatorsPro.rmenuArrayitem':'[a]作为[b]第[c]项，返回[d]',
                    'OperatorsPro.rmenuArrayinsert':'[a]作为[b]第[c]项[d][e][f],返回[g]',
                    'OperatorsPro.rmenuArrayindex':'[a]作为[b][c][d][e]的编号，因为[f]',
                    'OperatorsPro.rmenuArrayindexnumber':'[a]作为[b][c][d][e][f]的编号，因为[g]',
                    'OperatorsPro.rmenuArraycount':'[a]作为[b]中[c][d]的数量，因为[e]',
                    'OperatorsPro.rmenuArraycountnumber':'[a]作为[b]中[c][d][e]的数量，因为[f]',
                    'OperatorsPro.rmenuArraysort':'[a]作为[b][c]排序，返回[d]',
                    'OperatorsPro.rmenuObjectmember':'[a]作为[b]成员[c]，返回[d]',
                    'OperatorsPro.rmenuObjectset':'[a]作为[b]成员[c][d][e][f]，返回[g]',
                    'OperatorsPro.rmenuObjectkeys':'[a]作为[b]所有[c]，返回[d]',
    
                    'OperatorsPro.Types':'类型',
                    'OperatorsPro.rJSONtypeof':'JSON[a]类型',
                    'OperatorsPro.bJSONtypeof':'JSON[a]类型为[b]',
                    'OperatorsPro.bCheckType':'[INPUT]是[MODE]',
    
                    'OperatorsPro.Logic':'逻辑',
                    'OperatorsPro.StringsandNumbers':'字符串和数字',
                    'OperatorsPro.rif': '若[a]则[b]否则[c]',
                    'OperatorsPro.band': '[a]与[b]',
                    'OperatorsPro.bor': '[a]或[b]',
                    'OperatorsPro.bnot': '[a]不成立',
                    'OperatorsPro.rpadstart':'[a]插入[b]使长度为[c]',
                    'OperatorsPro.rpadend':'[a]加入[b]使长度为[c]',
                    'OperatorsPro.rremove':'[a]去除[b]',
                    'OperatorsPro.rinterchange':'[a]字符[b]互换[c]',
                    'OperatorsPro.rreplaceexcept':'[a]字符[b]排除[c]替换为[d]',
                    'OperatorsPro.rdefault':'[a]空值则[b]',
                    'OperatorsPro.bdefined':'[a]有值',
                    'OperatorsPro.bundefined':'[a]空值',
                    'OperatorsPro.bnotstrictlyequal':'[a]不全等[b]',
                    'OperatorsPro.bnotcontain':'[a]不含[b]',
                    'OperatorsPro.rrandom':'0到1随机数',
                    'OperatorsPro.rLoopNum': '让[NUM]在[START]到[END]中循环',
                    'OperatorsPro.rMapOff': '映射[NUM]从[START1]~[END1]到[START2]~[END2]',
                    'OperatorsPro.rnearestmultiple':'[a]最近[b]倍数',
                    'OperatorsPro.rmod':'[a]/[b]余数',
                    'OperatorsPro.rround':'[a]四舍五入[b]位',
                    'OperatorsPro.rrintfromto':'[a]四舍五入，从[b]位至[c]位',
                    'OperatorsPro.rrinttotimes':'[a]四舍五入，从[b]位往前[c]次',
                    'OperatorsPro.rrinttimesto':'[a]四舍五入，往前[b]次至[c]位',
                    'OperatorsPro.rPI':'[i]保留[a]位',
                    'OperatorsPro.rradsin':'弧度制sin[a]',
                    'OperatorsPro.rradcos':'弧度制cos[a]',
                    'OperatorsPro.rradtan':'弧度制tan[a]',
                    'OperatorsPro.rradasin':'弧度制asin[a]',
                    'OperatorsPro.rradacos':'弧度制acos[a]',
                    'OperatorsPro.rradatan':'弧度制atan[a]',
                    'OperatorsPro.rtoonehundredeighty':'[a]在-180~180角度中',
                    'OperatorsPro.rtothreehundredsixty':'[a]在0~360角度中',
                    'OperatorsPro.raddto':'[a]增加[b]至[c]',
    
                    'OperatorsPro.ArrayandObject':'数组与对象',
    
                    'OperatorsPro.rArrayunshiftnumber':'[a]加入数[b]到开头',
                    'OperatorsPro.rArraypushnumber':'[a]加入数[b]到末尾',
                    'OperatorsPro.rArrayinsertnumber':'[a]插入数[b]到[c]项',
                    'OperatorsPro.rArrayinsertnumberindextoindex':'[a]插入数[b]到[c]至[d]项',
                    'OperatorsPro.rArrayreplacenumber':'[a]第[b]项设为数[c]',
                    'OperatorsPro.rArrayreplaceindexesnumber':'[a]第[b]项设为数[c]',
                    'OperatorsPro.rArrayreplaceindextoindexnumber':'[a]第[b]到[c]项设为数[d]',
    
                    'OperatorsPro.bArraystrictlyequal':'[a]全等[b]',
                    'OperatorsPro.rArraysum':'[a]之和',
                    'OperatorsPro.rArrayproduct':'[a]之积',
                    'OperatorsPro.rArrayaverage':'[a]平均数',
                    'OperatorsPro.rArraymax':'[a]最大值',
                    'OperatorsPro.rArraymin':'[a]最小值',
                    'OperatorsPro.bArrayhavebignumber':'[a]包含数>[b]',
                    'OperatorsPro.bArrayhavenotsmallnumber':'[a]包含数≥[b]',
                    'OperatorsPro.bArrayhavesmallnumber':'[a]包含数<[b]',
                    'OperatorsPro.bArrayhavenotbignumber':'[a]包含数≤[b]',
                    'OperatorsPro.bArrayhavenumber':'[a]包含数[b]',
                    'OperatorsPro.bArrayhavestr':'[a]包含"[b]"',
                    'OperatorsPro.bArrayhave':'[a]包含[b]',
                    'OperatorsPro.bArrayhaveJSON':'[a]包含JSON[b]',
                    'OperatorsPro.bArraybebignumber':'[a]只含数>[b]',
                    'OperatorsPro.bArraybenotsmallnumber':'[a]只含数≥[b]',
                    'OperatorsPro.bArraybesmallnumber':'[a]只含数<[b]',
                    'OperatorsPro.bArraybenotbignumber':'[a]只含数≤[b]',
                    'OperatorsPro.bArraybenumber':'[a]只含数[b]',
                    'OperatorsPro.bArraybestr':'[a]只含"[b]"',
                    'OperatorsPro.bArraybe':'[a]只含[b]',
                    'OperatorsPro.bArraybeJSON':'[a]只含JSON[b]',
                    'OperatorsPro.rArrayremovebignumber':'[a]删除数>[b]',
                    'OperatorsPro.rArrayremovenotsmallnumber':'[a]删除数≥[b]',
                    'OperatorsPro.rArrayremovesmallnumber':'[a]删除数<[b]',
                    'OperatorsPro.rArrayremovenotbignumber':'[a]删除数≤[b]',
                    'OperatorsPro.rArrayremovenumber':'[a]删除所有数[b]',
                    'OperatorsPro.rArrayremovestr':'[a]删除所有"[b]"',
                    'OperatorsPro.rArrayremove':'[a]删除所有[b]',
                    'OperatorsPro.rArrayremoveJSON':'[a]删除所有JSON[b]',
                    'OperatorsPro.rArrayremoveshift':'[a]删除首项',
                    'OperatorsPro.rArrayremovepop':'[a]删除末项',
                    'OperatorsPro.rArrayremoveitem':'[a]删除第[b]项',
                    'OperatorsPro.rArrayremoveitems':'[a]删除第[b]项',
                    'OperatorsPro.rArrayremoveitemtoitem':'[a]删除第[b]至[c]项',
                    'OperatorsPro.rArrayreserveitem':'[a]保留第[b]项',
                    'OperatorsPro.rArrayshift':'[a]首项',
                    'OperatorsPro.rArraypop':'[a]末项',
                    'OperatorsPro.rArrayitem':'[a]第[b]项',
                    'OperatorsPro.rArrayitems':'[a]第[b]项',
                    'OperatorsPro.rArrayshiftJSON':'[a]首项转JSON',
                    'OperatorsPro.rArraypopJSON':'[a]末项转JSON',
                    'OperatorsPro.rArrayitemJSON':'[a]第[b]项转JSON',
                    'OperatorsPro.rArrayitemtoitem':'[a]第[b]至[c]项',
                    'OperatorsPro.rArrayunshift':'[a]加入[b]到开头',
                    'OperatorsPro.rArraypush':'[a]加入[b]到末尾',
                    'OperatorsPro.rArrayinsert':'[a]插入[b]到[c]项',
                    'OperatorsPro.rArrayinsertindextoindex':'[a]插入[b]到[c]至[d]项',
                    'OperatorsPro.rArrayunshiftstr':'[a]加入"[b]"到开头',
                    'OperatorsPro.rArraypushstr':'[a]加入"[b]"到末尾',
                    'OperatorsPro.rArrayinsertstr':'[a]插入"[b]"到[c]项',
                    'OperatorsPro.rArrayinsertstrindextoindex':'[a]插入"[b]"到[c]至[d]项',
                    'OperatorsPro.rArrayunshiftJSON':'[a]加入JSON[b]到开头',
                    'OperatorsPro.rArraypushJSON':'[a]加入JSON[b]到末尾',
                    'OperatorsPro.rArrayinsertJSON':'[a]插入JSON[b]到[c]项',
                    'OperatorsPro.rArrayinsertJSONindextoindex':'[a]插入JSON[b]到[c]至[d]项',
                    'OperatorsPro.rArraymove':'[a]第[b]项移到第[c]项',
                    'OperatorsPro.rArrayinterchange':'[a]第[b]项与第[c]项互换',
                    'OperatorsPro.rArrayreplace':'[a]第[b]项设为[c]',
                    'OperatorsPro.rArrayreplaceindexes':'[a]第[b]项设为[c]',
                    'OperatorsPro.rArrayreplaceindextoindex':'[a]第[b]到[c]项设为[d]',
                    'OperatorsPro.rArrayreplacestr':'[a]第[b]项设为"[c]"',
                    'OperatorsPro.rArrayreplaceindexesstr':'[a]第[b]项设为"[c]"',
                    'OperatorsPro.rArrayreplaceindextoindexstr':'[a]第[b]到[c]项设为"[d]"',
                    'OperatorsPro.rArrayreplaceJSON':'[a]第[b]项设为JSON[c]',
                    'OperatorsPro.rArrayreplaceindexesJSON':'[a]第[b]项设为JSON[c]',
                    'OperatorsPro.rArrayreplaceindextoindexJSON':'[a]第[b]到[c]项设为JSON[d]',
                    'OperatorsPro.rArrayplusindex':'[a]第[b]项增加[c]',
                    'OperatorsPro.rArrayplusindextoindex':'[a]第[b]到[c]项增加[d]',
                    'OperatorsPro.rArrayplus':'[a]各项增加[b]',
                    'OperatorsPro.rArrayindex':'[a]第一[b]编号',
                    'OperatorsPro.rArrayindexnumber':'[a]第一数[b]编号',
                    'OperatorsPro.rArrayindexstr':'[a]第一"[b]"编号',
                    'OperatorsPro.rArrayindexJSON':'[a]第一JSON[b]编号',
                    'OperatorsPro.rArraylastindex':'[a]最后一[b]编号',
                    'OperatorsPro.rArraylastindexnumber':'[a]最后一数[b]编号',
                    'OperatorsPro.rArraylastindexstr':'[a]最后一"[b]"编号',
                    'OperatorsPro.rArraylastindexJSON':'[a]最后一JSON[b]编号',
                    'OperatorsPro.rArrayallindex':'[a]所有[b]编号',
                    'OperatorsPro.rArrayallindexnumber':'[a]所有数[b]编号',
                    'OperatorsPro.rArrayallindexstr':'[a]所有"[b]"编号',
                    'OperatorsPro.rArrayallindexJSON':'[a]所有JSON[b]编号',
                    'OperatorsPro.rArrayfindIndexbignumber':'[a]第一数>[b]编号',
                    'OperatorsPro.rArrayfindIndexnotsmallnumber':'[a]第一数≥[b]编号',
                    'OperatorsPro.rArrayfindIndexsmallnumber':'[a]第一数<[b]编号',
                    'OperatorsPro.rArrayfindIndexnotbignumber':'[a]第一数≤[b]编号',
                    'OperatorsPro.rArraycountbignumber':'[a]数>[b]数量',
                    'OperatorsPro.rArraycountnotsmallnumber':'[a]数≥[b]数量',
                    'OperatorsPro.rArraycountsmallnumber':'[a]数<[b]数量',
                    'OperatorsPro.rArraycountnotbignumber':'[a]数≤[b]数量',
                    'OperatorsPro.rArraycountnumber':'[a]数[b]数量',
                    'OperatorsPro.rArraycountstr':'[a]"[b]"数量',
                    'OperatorsPro.rArraycount':'[a][b]数量',
                    'OperatorsPro.rArraycountJSON':'[a]JSON[b]数量',
                    'OperatorsPro.rArraysortnaturalOrder':'[a]顺序排序',
                    'OperatorsPro.rArraysortreverseOrder':'[a]倒序排序',
                    'OperatorsPro.rArrayreverse':'[a]反转',
                    'OperatorsPro.bArrayclear':'[a]无元素',
                    'OperatorsPro.rArraylength':'[a]元素量',
                    'OperatorsPro.bisArray':'[a]是数组',
    
                    'OperatorsPro.rObjectkeynumber':'[a]第一值=[b]键',
                    'OperatorsPro.rObjectlastkeynumber':'[a]最后一值=[b]键',
                    'OperatorsPro.rObjectallkeynumber':'[a]所有值=[b]键',
    
                    'OperatorsPro.rObjectvalue':'[a]键[b]的值',
                    'OperatorsPro.rObjectvalueJSON':'[a]键[b]的值转JSON',
                    'OperatorsPro.rObjectkey':'[a]第一值[b]键',
                    'OperatorsPro.rObjectlastkey':'[a]最后一值[b]键',
                    'OperatorsPro.rObjectallkey':'[a]所有值[b]键',
                    'OperatorsPro.rObjectkeystr':'[a]第一值"[b]"键',
                    'OperatorsPro.rObjectlastkeystr':'[a]最后一值"[b]"键',
                    'OperatorsPro.rObjectallkeystr':'[a]所有值"[b]"键',
                    'OperatorsPro.rObjectkeyJSON':'[a]第一值JSON[b]键',
                    'OperatorsPro.rObjectlastkeyJSON':'[a]最后一值JSON[b]键',
                    'OperatorsPro.rObjectallkeyJSON':'[a]所有值JSON[b]键',
                    'OperatorsPro.rObjectputkey':'[a]键[b]值设为[c]',
                    'OperatorsPro.rObjectputkeynumber':'[a]键[b]值设为数[c]',
                    'OperatorsPro.rObjectputkeystr':'[a]键[b]值设为"[c]"',
                    'OperatorsPro.rObjectputkeyJSON':'[a]键[b]值设为JSON[c]',
                    'OperatorsPro.rObjectpluskey':'[a]键[b]值增加[c]',
                    'OperatorsPro.rObjectplus':'[a]值增加[b]',
                    'OperatorsPro.rObjectputAll':'[a][b]合并',
                    'OperatorsPro.rObjectremove':'[a]删除键[b]',
                    'OperatorsPro.rObjectremovekeys':'[a]删除键[b]',
                    'OperatorsPro.rObjectkeys':'[a]所有键',
                    'OperatorsPro.rObjectvalues':'[a]所有值',
                    'OperatorsPro.rObjectentries':'[a]所有数据',
                    'OperatorsPro.rObjectfromentries':'[a]数据转对象',
                    'OperatorsPro.bObjecthasownproperty':'[a]包含键[b]',
                    'OperatorsPro.bObjectclear':'[a]无键值',
                    'OperatorsPro.rObjectlength':'[a]键值量',
                    'OperatorsPro.bisObject':'[a]是对象',
    
                    'OperatorsPro.More':'更多',
    
                    'OperatorsPro.Tobecontinued':'未完待续'
                },
                en: {
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
    
                    'OperatorsPro.bmenuToBoolean':'[c][a][b]',
                    'OperatorsPro.rmenuif':'if[a][b]then[c]else[d]',
                    'OperatorsPro.bmenuand':'[e][a][b][c][d]',
                    'OperatorsPro.bmenuundefined':'[a]is[b][c]',
                    'OperatorsPro.bmenuequal':'[a][b][c],because of their[d]',
                    'OperatorsPro.rmenurad':'[a][b][c]in rad',
                    'OperatorsPro.rmenutoonehundredeighty':'[a][b]changes into[c]',
                    'OperatorsPro.rmenutypeof':'type of[a]as[b],[c]Object and Array',
                    'OperatorsPro.bmenutypeof':'type of[a]as[b]is[c]',
                    'OperatorsPro.rArraymenu':'[c]of[a][b]',
                    'OperatorsPro.rmenuArraylength':'[c][a]as[b]',
                    'OperatorsPro.bmenuArrayhave':'[a]as[b][c][d][e],because of[f]',
                    'OperatorsPro.bmenuArrayhavenumber':'[a]as[b][c][d][e][f],because of[g]',
                    'OperatorsPro.rmenuArrayremove':'all[c][d]delete from[a]as[b],because of[e],return[f]',
                    'OperatorsPro.rmenuArrayremovenumber':'all[c][d][e]delete from[a]as[b],because of[f],return[g]',
                    'OperatorsPro.rmenuArrayremoveitem':'delete item[c]of[a]as[b],return[d]',
                    'OperatorsPro.rmenuArrayitem':'item[c]of[a]as[b],return[d]',
                    'OperatorsPro.rmenuArrayinsert':'[d][e][f]at item[c]of[a]as[b],return[g]',
                    'OperatorsPro.rmenuArrayindex':'[c][d][e]in[a]as[b],because of[f]',
                    'OperatorsPro.rmenuArrayindexnumber':'[c][d][e][f]in[a]as[b],because of[g]',
                    'OperatorsPro.rmenuArraycount':'count[c][d]in[a]as[b],because of[e]',
                    'OperatorsPro.rmenuArraycountnumber':'count[c][d][e]in[a]as[b],because of[f]',
                    'OperatorsPro.rmenuArraysort':'sort[a]as[b]by[c],return[d]',
                    'OperatorsPro.rmenuObjectmember':'member[c]of[a]as[b],return[d]',
                    'OperatorsPro.rmenuObjectset':'[d][e][f]at member[c]of[a]as[b],return[g]',
                    'OperatorsPro.rmenuObjectkeys':'[c]of[a]as[b],return[d]',
    
                    'OperatorsPro.Types':'Types',
                    'OperatorsPro.rJSONtypeof':'type of[a]as JSON',
                    'OperatorsPro.bJSONtypeof':'type of[a]as JSON is[b]',
                    'OperatorsPro.bCheckType':'[INPUT]is[MODE]',
    
                    'OperatorsPro.Logic':'Logic',
                    'OperatorsPro.StringsandNumbers':'Strings and Numbers',
                    'OperatorsPro.rif': 'if[a]then[b]else[c]',
                    'OperatorsPro.band': '[a]and[b]',
                    'OperatorsPro.bor': '[a]or[b]',
                    'OperatorsPro.bnot': 'not[a]',
                    'OperatorsPro.rpadstart':'[a]inserts[b]to let length be[c]',
                    'OperatorsPro.rpadend':'[a]joins[b]to let length be[c]',
                    'OperatorsPro.rremove':'remove[b]from[a]',
                    'OperatorsPro.rinterchange':'[a]interchanges[b]and[c]',
                    'OperatorsPro.rreplaceexcept':'replace[b]except[c]in[a]with[d]',
                    'OperatorsPro.rdefault':'[a],default=[b]',
                    'OperatorsPro.bdefined':'[a]is defined',
                    'OperatorsPro.bundefined':'[a]is undefined',
                    'OperatorsPro.bnotstrictlyequal':'[a]is not identically[b]',
                    'OperatorsPro.bnotcontain':'[a]does not contain[b]',
                    'OperatorsPro.rrandom':'pick random 0 to 1',
                    'OperatorsPro.rLoopNum': '[NUM]loop in[START]to[END]',
                    'OperatorsPro.rMapOff': 'map[NUM]from[START1]~[END1]to[START2]~[END2]',
                    'OperatorsPro.rnearestmultiple':'multiple of[b]near[a]',
                    'OperatorsPro.rmod':'[a]mod[b]',
                    'OperatorsPro.rround':'round[a]to[b]decimal places',
                    'OperatorsPro.rrintfromto':'round[a]from[b]to[c]decimal places',
                    'OperatorsPro.rrinttotimes':'round[a]to[b]decimal places,round it[c]times',
                    'OperatorsPro.rrinttimesto':'round[a][b]times to[c]decimal places',
                    'OperatorsPro.rPI':'round[i]to[a]decimal places',
                    'OperatorsPro.rradsin':'sin[a]in rad',
                    'OperatorsPro.rradcos':'cos[a]in rad',
                    'OperatorsPro.rradtan':'tan[a]in rad',
                    'OperatorsPro.rradasin':'asin[a]in rad',
                    'OperatorsPro.rradacos':'acos[a]in rad',
                    'OperatorsPro.rradatan':'atan[a]in rad',
                    'OperatorsPro.rtoonehundredeighty':'[a]changes into -180~180',
                    'OperatorsPro.rtothreehundredsixty':'[a]changes into 0~360',
                    'OperatorsPro.raddto':'[a]add[b]to[c]',
    
                    'OperatorsPro.ArrayandObject':'Array andy Object',
    
                    'OperatorsPro.rArrayunshiftnumber':'[a]inserts number[b]at the first one',
                    'OperatorsPro.rArraypushnumber':'[a]inserts number[b]at the last one',
                    'OperatorsPro.rArrayinsertnumber':'[a]inserts number[b]at[c]',
                    'OperatorsPro.rArrayinsertnumberindextoindex':'[a]inserts number[b]from[c]to[d]',
                    'OperatorsPro.rArrayreplacenumber':'set item[b]of[a]to number[c]',
                    'OperatorsPro.rArrayreplaceindexesnumber':'set items[b]of[a]to number[c]',
                    'OperatorsPro.rArrayreplaceindextoindexnumber':'set item from[b]to[c]of[a]to number[d]',
    
                    'OperatorsPro.bArraystrictlyequal':'[a]is identically[b]',
                    'OperatorsPro.rArraysum':'sum of[a]',
                    'OperatorsPro.rArrayproduct':'product of[a]',
                    'OperatorsPro.rArrayaverage':'average of[a]',
                    'OperatorsPro.rArraymax':'max[a]',
                    'OperatorsPro.rArraymin':'min[a]',
                    'OperatorsPro.bArrayhavebignumber':'[a]contains number>[b]',
                    'OperatorsPro.bArrayhavenotsmallnumber':'[a]contains number≥[b]',
                    'OperatorsPro.bArrayhavesmallnumber':'[a]contains number<[b]',
                    'OperatorsPro.bArrayhavenotbignumber':'[a]contains number≤[b]',
                    'OperatorsPro.bArrayhavenumber':'[a]contains number[b]',
                    'OperatorsPro.bArrayhavestr':'[a]contains "[b]"',
                    'OperatorsPro.bArrayhave':'[a]contains[b]',
                    'OperatorsPro.bArrayhaveJSON':'[a]contains JSON[b]',
                    'OperatorsPro.bArraybebignumber':'[a]only contains number>[b]',
                    'OperatorsPro.bArraybenotsmallnumber':'[a]only contains number≥[b]',
                    'OperatorsPro.bArraybesmallnumber':'[a]only contains number<[b]',
                    'OperatorsPro.bArraybenotbignumber':'[a]only contains number≤[b]',
                    'OperatorsPro.bArraybenumber':'[a]only contains number[b]',
                    'OperatorsPro.bArraybestr':'[a]only contains "[b]"',
                    'OperatorsPro.bArraybe':'[a]only contains[b]',
                    'OperatorsPro.bArraybeJSON':'[a]only contains SJON[b]',
                    'OperatorsPro.rArrayremovebignumber':'number>[b]delete from[a]',
                    'OperatorsPro.rArrayremovenotsmallnumber':'number≥[b]delete from[a]',
                    'OperatorsPro.rArrayremovesmallnumber':'number<[b]delete from[a]',
                    'OperatorsPro.rArrayremovenotbignumber':'number≤[b]delete from[a]',
                    'OperatorsPro.rArrayremovenumber':'all number[b]delete from[a]',
                    'OperatorsPro.rArrayremovestr':'all "[b]" delete from[a]',
                    'OperatorsPro.rArrayremove':'all[b]delete from[a]',
                    'OperatorsPro.rArrayremoveJSON':'all JSON[b]delete from[a]',
                    'OperatorsPro.rArrayremoveshift':'[a]delete the first item',
                    'OperatorsPro.rArrayremovepop':'[a]delete the last item',
                    'OperatorsPro.rArrayremoveitem':'delete item[b]of[a]',
                    'OperatorsPro.rArrayremoveitems':'delete items[b]of[a]',
                    'OperatorsPro.rArrayremoveitemtoitem':'delete item from[b]to[c]of[a]',
                    'OperatorsPro.rArrayreserveitem':'reserve item[b]of[a]',
                    'OperatorsPro.rArrayshift':'the first item of[a]',
                    'OperatorsPro.rArraypop':'the last item of[a]',
                    'OperatorsPro.rArrayitem':'item[b]of[a]',
                    'OperatorsPro.rArrayitems':'items[b]of[a]',
                    'OperatorsPro.rArrayshiftJSON':'the first item as JSON of[a]',
                    'OperatorsPro.rArraypopJSON':'the last item as JSON of[a]',
                    'OperatorsPro.rArrayitemJSON':'item[b]as JSON of[a]',
                    'OperatorsPro.rArrayitemtoitem':'item from[b]to[c]of[a]',
                    'OperatorsPro.rArrayunshift':'[a]inserts[b]at the first one',
                    'OperatorsPro.rArraypush':'[a]inserts[b]at the last one',
                    'OperatorsPro.rArrayinsert':'[a]inserts[b]at[c]',
                    'OperatorsPro.rArrayinsertindextoindex':'[a]inserts[b]from[c]to[d]',
                    'OperatorsPro.rArrayunshiftstr':'[a]inserts "[b]" at the first one',
                    'OperatorsPro.rArraypushstr':'[a]inserts "[b]" at the last one',
                    'OperatorsPro.rArrayinsertstr':'[a]inserts "[b]" at[c]',
                    'OperatorsPro.rArrayinsertstrindextoindex':'[a]inserts "[b]" from[c]to[d]',
                    'OperatorsPro.rArrayunshiftJSON':'[a]inserts JSON[b]at the first one',
                    'OperatorsPro.rArraypushJSON':'[a]inserts JSON[b]at the last one',
                    'OperatorsPro.rArrayinsertJSON':'[a]inserts JSON[b]at[c]',
                    'OperatorsPro.rArrayinsertJSONindextoindex':'[a]inserts JSON[b]from[c]to[d]',
                    'OperatorsPro.rArraymove':'[a]item[b]move to[c]',
                    'OperatorsPro.rArrayinterchange':'[a]interchanges item[b]and item[c]',
                    'OperatorsPro.rArrayreplace':'set item[b]of[a]to[c]',
                    'OperatorsPro.rArrayreplaceindexes':'set items[b]of[a]to[c]',
                    'OperatorsPro.rArrayreplaceindextoindex':'set item from[b]to[c]of[a]to[d]',
                    'OperatorsPro.rArrayreplacestr':'set item[b]of[a]to "[c]"',
                    'OperatorsPro.rArrayreplaceindexesstr':'set items[b]of[a]to "[c]"',
                    'OperatorsPro.rArrayreplaceindextoindexstr':'set item from[b]to[c]of[a]to "[d]"',
                    'OperatorsPro.rArrayreplaceJSON':'set item[b]of[a]to JSON[c]',
                    'OperatorsPro.rArrayreplaceindexesJSON':'set items[b]of[a]to JSON[c]',
                    'OperatorsPro.rArrayreplaceindextoindexJSON':'set item from[b]to[c]of[a]to JSON[d]',
                    'OperatorsPro.rArrayplusindex':'change by[c]at[b]of[a]',
                    'OperatorsPro.rArrayplusindextoindex':'change by[d]from[b]to[c]of[a]',
                    'OperatorsPro.rArrayplus':'change by[b]at every item of[a]',
                    'OperatorsPro.rArrayindex':'the first[b]in[a]',
                    'OperatorsPro.rArrayindexnumber':'the first number[b]in[a]',
                    'OperatorsPro.rArrayindexstr':'the first "[b]" in[a]',
                    'OperatorsPro.rArrayindexJSON':'the first JSON[b]in[a]',
                    'OperatorsPro.rArraylastindex':'the last[b]in[a]',
                    'OperatorsPro.rArraylastindexnumber':'the last number[b]in[a]',
                    'OperatorsPro.rArraylastindexstr':'the last "[b]" in[a]',
                    'OperatorsPro.rArraylastindexJSON':'the last JSON[b]in[a]',
                    'OperatorsPro.rArrayallindex':'all[b]in[a]',
                    'OperatorsPro.rArrayallindexnumber':'all number[b]in[a]',
                    'OperatorsPro.rArrayallindexstr':'all "[b]" in[a]',
                    'OperatorsPro.rArrayallindexJSON':'all JSON[b]in[a]',
                    'OperatorsPro.rArrayfindIndexbignumber':'the first number>[b]in[a]',
                    'OperatorsPro.rArrayfindIndexnotsmallnumber':'the first number≥[b]in[a]',
                    'OperatorsPro.rArrayfindIndexsmallnumber':'the first number<[b]in[a]',
                    'OperatorsPro.rArrayfindIndexnotbignumber':'the first number≤[b]in[a]',
                    'OperatorsPro.rArraycountbignumber':'count number>[b]in[a]',
                    'OperatorsPro.rArraycountnotsmallnumber':'count number≥[b]in[a]',
                    'OperatorsPro.rArraycountsmallnumber':'count number<[b]in[a]',
                    'OperatorsPro.rArraycountnotbignumber':'count number≤[b]in[a]',
                    'OperatorsPro.rArraycountnumber':'count number[b]in[a]',
                    'OperatorsPro.rArraycountstr':'count "[b]" in[a]',
                    'OperatorsPro.rArraycount':'count[b]in[a]',
                    'OperatorsPro.rArraycountJSON':'count JSON[b]in[a]',
                    'OperatorsPro.rArraysortnaturalOrder':'sort[a]by ascending',
                    'OperatorsPro.rArraysortreverseOrder':'sort[a]by descending',
                    'OperatorsPro.rArrayreverse':'reverse[a]',
                    'OperatorsPro.bArrayclear':'[a]has nothing',
                    'OperatorsPro.rArraylength':'length of[a]',
                    'OperatorsPro.bisArray':'[a]is Array',
    
                    'OperatorsPro.rObjectkeynumber':'key of the first value=[b]in[a]',
                    'OperatorsPro.rObjectlastkeynumber':'key of the last value=[b]in[a]',
                    'OperatorsPro.rObjectallkeynumber':'keys of value=[b]in[a]',
    
                    'OperatorsPro.rObjectvalue':'value of key[b]in[a]',
                    'OperatorsPro.rObjectvalueJSON':'value as JSON of key[b]in[a]',
                    'OperatorsPro.rObjectkey':'key of the first value[b]in[a]',
                    'OperatorsPro.rObjectlastkey':'key of the last value[b]in[a]',
                    'OperatorsPro.rObjectallkey':'keys of value[b]in[a]',
                    'OperatorsPro.rObjectkeystr':'key of the first value "[b]" in[a]',
                    'OperatorsPro.rObjectlastkeystr':'key of the last value "[b]" in[a]',
                    'OperatorsPro.rObjectallkeystr':'keys of value "[b]" in[a]',
                    'OperatorsPro.rObjectkeyJSON':'key of the first value JSON[b]in[a]',
                    'OperatorsPro.rObjectlastkeyJSON':'key of the last value JSON[b]in[a]',
                    'OperatorsPro.rObjectallkeyJSON':'keys of value JSON[b]in[a]',
                    'OperatorsPro.rObjectputkey':'set[b]in[a]to[c]',
                    'OperatorsPro.rObjectputkeynumber':'set number[b]in[a]to[c]',
                    'OperatorsPro.rObjectputkeystr':'set[b]in[a]to"[c]"',
                    'OperatorsPro.rObjectputkeyJSON':'set[b]in[a]to JSON[c]',
                    'OperatorsPro.rObjectpluskey':'value of key[b]change by[c]in[a]',
                    'OperatorsPro.rObjectplus':'values change by[b]in[a]',
                    'OperatorsPro.rObjectputAll':'concat[a][b]',
                    'OperatorsPro.rObjectremove':'delete key[b]from[a]',
                    'OperatorsPro.rObjectremovekeys':'delete keys[b]from[a]',
                    'OperatorsPro.rObjectkeys':'keys of[a]',
                    'OperatorsPro.rObjectvalues':'values of[a]',
                    'OperatorsPro.rObjectentries':'data of[a]',
                    'OperatorsPro.rObjectfromentries':'[a]as Object',
                    'OperatorsPro.bObjecthasownproperty':'[a]contians key[b]',
                    'OperatorsPro.bObjectclear':'[a]has nothing',
                    'OperatorsPro.rObjectlength':'length of[a]',
                    'OperatorsPro.bisObject':'[a]is Object',
    
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
                    {
                        blockType: Scratch.BlockType.LABEL,
                        text: this.formatMessage('OperatorsPro.Types')
                    },
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
                        },
                        hideFromPalette: ! this.hideExtraBlocks
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
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode:'rmenutypeof',
                        blockType:'reporter',
                        text:this.formatMessage('OperatorsPro.rmenutypeof'),
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
                        opcode:'bmenutypeof',
                        blockType:'Boolean',
                        text:this.formatMessage('OperatorsPro.bmenutypeof'),
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
                        opcode:'rJSONtypeof',
                        blockType:'reporter',
                        text:this.formatMessage('OperatorsPro.rJSONtypeof'),
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
                        text:this.formatMessage('OperatorsPro.bJSONtypeof'),
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
                        opcode:'bmenuToBoolean',
                        blockType:'Boolean',
                        text:this.formatMessage('OperatorsPro.bmenuToBoolean'),
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
                        opcode:'rmenuif',
                        blockType:'reporter',
                        text:this.formatMessage('OperatorsPro.rmenuif'),
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
                        opcode:'bmenuand',
                        blockType:'Boolean',
                        text:this.formatMessage('OperatorsPro.bmenuand'),
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
                        opcode:'rreporter',
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
                        text: this.formatMessage('OperatorsPro.rif'),
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
                        opcode:'rifToBoolean',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rif'),
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
                        opcode:'band',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.band'),
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
                        text: this.formatMessage('OperatorsPro.band'),
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'bor',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bor'),
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
                        text: this.formatMessage('OperatorsPro.bor'),
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'bnot',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bnot'),
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
                        text: this.formatMessage('OperatorsPro.bnot'),
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
                        opcode:'rpadstart',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rpadstart'),
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
                        opcode:'rpadend',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rpadend'),
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
                        opcode:'rremove',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rremove'),
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
                        text: this.formatMessage('OperatorsPro.rinterchange'),
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
                        opcode:'rreplaceexcept',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rreplaceexcept'),
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
                        opcode:'bmenuundefined',
                        blockType:'Boolean',
                        text:this.formatMessage('OperatorsPro.bmenuundefined'),
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
                        opcode:'rdefault',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rdefault'),
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
                        text: this.formatMessage('OperatorsPro.bdefined'),
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'bundefined',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bundefined'),
                        hideFromPalette: this.hideExtraBlocks
                    },
                    '---',
                    {
                        opcode:'bmenuequal',
                        blockType:'Boolean',
                        text:this.formatMessage('OperatorsPro.bmenuequal'),
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
                        opcode:'bnotstrictlyequal',
                        blockType:'Boolean',
                        text:this.formatMessage('OperatorsPro.bnotstrictlyequal'),
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
                        text:this.formatMessage('OperatorsPro.bnotcontain'),
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
                        opcode:'rrandom',
                        blockType:'reporter',
                        text:this.formatMessage('OperatorsPro.rrandom'),
                        disableMonitor: true
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
                        opcode:'rnearestmultiple',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rnearestmultiple'),
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
                        text: this.formatMessage('OperatorsPro.rmod'),
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
                        text: this.formatMessage('OperatorsPro.rround'),
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
                        text: this.formatMessage('OperatorsPro.rrintfromto'),
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
                        text: this.formatMessage('OperatorsPro.rrinttotimes'),
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
                        text: this.formatMessage('OperatorsPro.rrinttimesto'),
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
                        opcode:'rmenurad',
                        blockType:'reporter',
                        text:this.formatMessage('OperatorsPro.rmenurad'),
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
                        opcode:'rmenutoonehundredeighty',
                        blockType:'reporter',
                        text:this.formatMessage('OperatorsPro.rmenutoonehundredeighty'),
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
                        opcode:'rradsin',
                        blockType:'reporter',
                        text:this.formatMessage('OperatorsPro.rradsin'),
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
                        text:this.formatMessage('OperatorsPro.rradcos'),
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
                        text:this.formatMessage('OperatorsPro.rradtan'),
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
                        text:this.formatMessage('OperatorsPro.rradasin'),
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
                        text:this.formatMessage('OperatorsPro.rradacos'),
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
                        text:this.formatMessage('OperatorsPro.rradatan'),
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
                        text:this.formatMessage('OperatorsPro.rtoonehundredeighty'),
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
                        text:this.formatMessage('OperatorsPro.rtothreehundredsixty'),
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
                        text:this.formatMessage('OperatorsPro.raddto'),
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
                        opcode:'rmenuArrayremoveitem',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rmenuArrayremoveitem'),
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
                        opcode:'rArrayremoveshift',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayremoveshift'),
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
                        text: this.formatMessage('OperatorsPro.rArrayremovepop'),
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
                        text: this.formatMessage('OperatorsPro.rArrayremoveitem'),
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
                        text: this.formatMessage('OperatorsPro.rArrayremoveitems'),
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
                        text: this.formatMessage('OperatorsPro.rArrayremoveitemtoitem'),
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
                        text: this.formatMessage('OperatorsPro.rArrayreserveitem'),
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
                        opcode:'rmenuArrayremove',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rmenuArrayremove'),
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
                        opcode:'rArrayremoveJSON',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayremoveJSON'),
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
                        text: this.formatMessage('OperatorsPro.rArrayremovestr'),
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
                        opcode:'rmenuArrayremovenumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rmenuArrayremovenumber'),
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
                        opcode:'rArrayremovebignumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayremovebignumber'),
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
                        text: this.formatMessage('OperatorsPro.rArrayremovenotsmallnumber'),
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
                        text: this.formatMessage('OperatorsPro.rArrayremovesmallnumber'),
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
                        text: this.formatMessage('OperatorsPro.rArrayremovenotbignumber'),
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
                        text: this.formatMessage('OperatorsPro.rArrayremovenumber'),
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
                        text: this.formatMessage('OperatorsPro.rArrayremove'),
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
                        opcode:'rmenuArrayinsert',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rmenuArrayinsert'),
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
                        opcode:'rArrayunshiftJSON',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayunshiftJSON'),
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
                        text: this.formatMessage('OperatorsPro.rArrayunshiftstr'),
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
                        text: this.formatMessage('OperatorsPro.rArrayunshiftnumber'),
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
                        text: this.formatMessage('OperatorsPro.rArrayunshift'),
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
                        text: this.formatMessage('OperatorsPro.rArraypushJSON'),
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
                        text: this.formatMessage('OperatorsPro.rArraypushstr'),
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
                        text: this.formatMessage('OperatorsPro.rArraypushnumber'),
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
                        text: this.formatMessage('OperatorsPro.rArraypush'),
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
                        text: this.formatMessage('OperatorsPro.rArrayinsertJSON'),
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
                        text: this.formatMessage('OperatorsPro.rArrayinsertstr'),
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
                        text: this.formatMessage('OperatorsPro.rArrayinsertnumber'),
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
                        text: this.formatMessage('OperatorsPro.rArrayinsert'),
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
                        text: this.formatMessage('OperatorsPro.rArrayinsertJSON'),
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
                        text: this.formatMessage('OperatorsPro.rArrayinsertstr'),
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
                        text: this.formatMessage('OperatorsPro.rArrayinsertnumber'),
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
                        text: this.formatMessage('OperatorsPro.rArrayinsert'),
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
                        text: this.formatMessage('OperatorsPro.rArrayinsertJSONindextoindex'),
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
                        text: this.formatMessage('OperatorsPro.rArrayinsertstrindextoindex'),
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
                        text: this.formatMessage('OperatorsPro.rArrayinsertnumberindextoindex'),
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
                        text: this.formatMessage('OperatorsPro.rArrayinsertindextoindex'),
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
                        text: this.formatMessage('OperatorsPro.rArraymove'),
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
                        text: this.formatMessage('OperatorsPro.rArrayreplaceJSON'),
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
                        text: this.formatMessage('OperatorsPro.rArrayreplacestr'),
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
                        text: this.formatMessage('OperatorsPro.rArrayreplacenumber'),
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
                        text: this.formatMessage('OperatorsPro.rArrayreplace'),
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
                        text: this.formatMessage('OperatorsPro.rArrayreplaceindexesJSON'),
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
                        text: this.formatMessage('OperatorsPro.rArrayreplaceindexesstr'),
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
                        text: this.formatMessage('OperatorsPro.rArrayreplaceindexesnumber'),
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
                        text: this.formatMessage('OperatorsPro.rArrayreplaceindexes'),
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
                        text: this.formatMessage('OperatorsPro.rArrayreplaceindextoindexJSON'),
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
                        text: this.formatMessage('OperatorsPro.rArrayreplaceindextoindexstr'),
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
                        text: this.formatMessage('OperatorsPro.rArrayreplaceindextoindexnumber'),
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
                        text: this.formatMessage('OperatorsPro.rArrayreplaceindextoindex'),
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
                        text: this.formatMessage('OperatorsPro.rArrayinterchange'),
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
                        text: this.formatMessage('OperatorsPro.rArrayplusindex'),
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
                        text: this.formatMessage('OperatorsPro.rArrayplusindex'),
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
                        text: this.formatMessage('OperatorsPro.rArrayplusindextoindex'),
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
                        text: this.formatMessage('OperatorsPro.rArrayplus'),
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
                        opcode:'rmenuArrayitem',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rmenuArrayitem'),
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
                        opcode:'rArrayshiftJSON',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayshiftJSON'),
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
                        text: this.formatMessage('OperatorsPro.rArrayshift'),
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
                        text: this.formatMessage('OperatorsPro.rArraypopJSON'),
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
                        text: this.formatMessage('OperatorsPro.rArraypop'),
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
                        text: this.formatMessage('OperatorsPro.rArrayitemJSON'),
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
                        text: this.formatMessage('OperatorsPro.rArrayitem'),
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
                        text: this.formatMessage('OperatorsPro.rArrayitems'),
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
                        text: this.formatMessage('OperatorsPro.rArrayitemtoitem'),
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
                        opcode:'rmenuArrayindex',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rmenuArrayindex'),
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
                        opcode:'rmenuArrayindexnumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rmenuArrayindexnumber'),
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
                        opcode:'rArrayindexJSON',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArrayindexJSON'),
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
                        text: this.formatMessage('OperatorsPro.rArrayindexstr'),
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
                        text: this.formatMessage('OperatorsPro.rArrayfindIndexbignumber'),
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
                        text: this.formatMessage('OperatorsPro.rArrayfindIndexnotsmallnumber'),
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
                        text: this.formatMessage('OperatorsPro.rArrayfindIndexsmallnumber'),
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
                        text: this.formatMessage('OperatorsPro.rArrayfindIndexnotbignumber'),
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
                        text: this.formatMessage('OperatorsPro.rArrayindexnumber'),
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
                        text: this.formatMessage('OperatorsPro.rArrayindex'),
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
                        text: this.formatMessage('OperatorsPro.rArraylastindexJSON'),
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
                        text: this.formatMessage('OperatorsPro.rArraylastindexstr'),
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
                        text: this.formatMessage('OperatorsPro.rArraylastindexnumber'),
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
                        text: this.formatMessage('OperatorsPro.rArraylastindex'),
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
                        text: this.formatMessage('OperatorsPro.rArrayallindexJSON'),
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
                        text: this.formatMessage('OperatorsPro.rArrayallindexstr'),
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
                        text: this.formatMessage('OperatorsPro.rArrayallindexnumber'),
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
                        text: this.formatMessage('OperatorsPro.rArrayallindex'),
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
                        opcode:'rmenuArraycount',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rmenuArraycount'),
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
                        opcode:'rArraycountJSON',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArraycountJSON'),
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
                        text: this.formatMessage('OperatorsPro.rArraycountstr'),
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
                        opcode:'rmenuArraycountnumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rmenuArraycountnumber'),
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
                        opcode:'rArraycountbignumber',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArraycountbignumber'),
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
                        text: this.formatMessage('OperatorsPro.rArraycountnotsmallnumber'),
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
                        text: this.formatMessage('OperatorsPro.rArraycountsmallnumber'),
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
                        text: this.formatMessage('OperatorsPro.rArraycountnotbignumber'),
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
                        text: this.formatMessage('OperatorsPro.rArraycountnumber'),
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
                        text: this.formatMessage('OperatorsPro.rArraycount'),
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
                        opcode:'rmenuArraylength',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rmenuArraylength'),
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
                        opcode:'rArraylength',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArraylength'),
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
                        text: this.formatMessage('OperatorsPro.rArraysum'),
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
                        text: this.formatMessage('OperatorsPro.rArrayproduct'),
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
                        text: this.formatMessage('OperatorsPro.rArrayaverage'),
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
                        text: this.formatMessage('OperatorsPro.rArraymax'),
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
                        text: this.formatMessage('OperatorsPro.rArraymin'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue: '[1,1,4,5,1,4]'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'rmenuArraysort',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rmenuArraysort'),
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
                        opcode:'rArraysortnaturalOrder',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rArraysortnaturalOrder'),
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
                        text: this.formatMessage('OperatorsPro.rArraysortreverseOrder'),
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
                        text: this.formatMessage('OperatorsPro.rArrayreverse'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:'[1,"1",4,5,1,4,"fun","k"]'
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode:'bmenuArrayhave',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bmenuArrayhave'),
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
                        opcode:'bArrayhaveJSON',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bArrayhaveJSON'),
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
                        text: this.formatMessage('OperatorsPro.bArrayhavestr'),
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
                        opcode:'bmenuArrayhavenumber',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bmenuArrayhavenumber'),
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
                        opcode:'bArrayhavebignumber',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bArrayhavebignumber'),
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
                        text: this.formatMessage('OperatorsPro.bArrayhavenotsmallnumber'),
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
                        text: this.formatMessage('OperatorsPro.bArrayhavesmallnumber'),
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
                        text: this.formatMessage('OperatorsPro.bArrayhavenotbignumber'),
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
                        text: this.formatMessage('OperatorsPro.bArrayhavenumber'),
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
                        text: this.formatMessage('OperatorsPro.bArrayhave'),
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
                        text: this.formatMessage('OperatorsPro.bArraybeJSON'),
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
                        text: this.formatMessage('OperatorsPro.bArraybestr'),
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
                        text: this.formatMessage('OperatorsPro.bArraybebignumber'),
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
                        text: this.formatMessage('OperatorsPro.bArraybenotsmallnumber'),
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
                        text: this.formatMessage('OperatorsPro.bArraybesmallnumber'),
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
                        text: this.formatMessage('OperatorsPro.bArraybenotbignumber'),
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
                        text: this.formatMessage('OperatorsPro.bArraybenumber'),
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
                        text: this.formatMessage('OperatorsPro.bArraybe'),
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
                        text: this.formatMessage('OperatorsPro.bArraystrictlyequal'),
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
                        text: this.formatMessage('OperatorsPro.bArrayclear'),
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
                        text: this.formatMessage('OperatorsPro.bisArray'),
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
                        opcode:'rObjectremove',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectremove'),
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
                        text: this.formatMessage('OperatorsPro.rObjectremovekeys'),
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
                        opcode:'rmenuObjectset',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rmenuObjectset'),
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
                        opcode:'rObjectputkeyJSON',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectputkeyJSON'),
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
                        text: this.formatMessage('OperatorsPro.rObjectputkeystr'),
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
                        text: this.formatMessage('OperatorsPro.rObjectputkeynumber'),
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
                        text: this.formatMessage('OperatorsPro.rObjectputkey'),
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
                        text: this.formatMessage('OperatorsPro.rObjectpluskey'),
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
                        text: this.formatMessage('OperatorsPro.rObjectplus'),
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
                        opcode:'rmenuObjectmember',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rmenuObjectmember'),
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
                        opcode:'rObjectvalueJSON',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectvalueJSON'),
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
                        text: this.formatMessage('OperatorsPro.rObjectvalue'),
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
                        text: this.formatMessage('OperatorsPro.rObjectkeyJSON'),
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
                        text: this.formatMessage('OperatorsPro.rObjectkeystr'),
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
                        text: this.formatMessage('OperatorsPro.rObjectkeynumber'),
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
                        text: this.formatMessage('OperatorsPro.rObjectkey'),
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
                        text: this.formatMessage('OperatorsPro.rObjectlastkeyJSON'),
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
                        text: this.formatMessage('OperatorsPro.rObjectlastkeystr'),
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
                        text: this.formatMessage('OperatorsPro.rObjectlastkeynumber'),
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
                        text: this.formatMessage('OperatorsPro.rObjectlastkey'),
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
                        text: this.formatMessage('OperatorsPro.rObjectallkeyJSON'),
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
                        text: this.formatMessage('OperatorsPro.rObjectallkeystr'),
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
                        text: this.formatMessage('OperatorsPro.rObjectallkeynumber'),
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
                        text: this.formatMessage('OperatorsPro.rObjectallkey'),
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
                        opcode:'rmenuObjectkeys',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rmenuObjectkeys'),
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
                        opcode:'rObjectlength',
                        blockType:'reporter',
                        text: this.formatMessage('OperatorsPro.rObjectlength'),
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
                        text: this.formatMessage('OperatorsPro.rObjectkeys'),
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
                        text: this.formatMessage('OperatorsPro.rObjectvalues'),
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
                        text: this.formatMessage('OperatorsPro.rObjectentries'),
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
                        text: this.formatMessage('OperatorsPro.rObjectfromentries'),
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
                        text: this.formatMessage('OperatorsPro.rObjectputAll'),
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
                        text: this.formatMessage('OperatorsPro.bObjecthasownproperty'),
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
                        opcode:'bObjectclear',
                        blockType:'Boolean',
                        text: this.formatMessage('OperatorsPro.bObjectclear'),
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
                        text: this.formatMessage('OperatorsPro.bisObject'),
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
        rtest(args,util){
            return Object.isObject({})
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
        bmenuArrayhavenumber(args){
            const a = args.b ? args.a : JSON.parse(args.a);
            const b = this.totype(args.e,args.f);
            const n = args.d
            if(args.g)return args.c ? a.every(i => this.compare(i.length,b,n)) : a.some(i => this.compare(i.length,b,n))
            return args.c ? a.every(i => this.compare(i,b,n)) : a.some(i => this.compare(i,b,n))
        }
        rmenuArrayremove(args){
            const a = args.b ? args.a : JSON.parse(args.a);
            const b = this.totype(args.c,args.d);
            const n = args.e
            if( typeof b == 'object' ){
                const c = JSON.stringify(b)
                return args.f ? a.filter(t => this.notequal(JSON.stringify(t),c,n)) : JSON.stringify(a.filter(t => this.notequal(JSON.stringify(t),c,n)))
            }
            return args.f ? a.filter(t => this.notequal(t,b,n)) : JSON.stringify(a.filter(t => this.notequal(t,b,n)))
        }
        rmenuArrayremovenumber(args){
            const a = args.b ? args.a : JSON.parse(args.a);
            const b = this.totype(args.d,args.e);
            const n = args.c
            if(args.f)return args.g ? a.filter(t => this.notcompare(t.length,b,n)) : JSON.stringify(a.filter(t => this.notcompare(t.length,b,n)))
            return args.g ? a.filter(t => this.notcompare(t,b,n)) : JSON.stringify(a.filter(t => this.notcompare(t,b,n)))
        }
        rmenuArrayremoveitem(args){
            return args.d ? (args.b ? args.a :JSON.parse(args.a)).toSpliced(Number(args.c), 1) : JSON.stringify((args.b ? args.a :JSON.parse(args.a)).toSpliced(Number(args.c), 1))
        }
        rmenuArrayitem(args){
            return args.d ? (args.b ? args.a :JSON.parse(args.a)).at(args.c) : JSON.stringify((args.b ? args.a :JSON.parse(args.a)).at(args.c))
        }
        rmenuArrayinsert(args){
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
        rmenuArrayindexnumber(args){
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
        rmenuArraycountnumber(args){
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
        rmenuArraysort(args){
            const a = args.b ? args.a :JSON.parse(args.a);
            a.sort(Scratch.Cast.compare)
            if(args.c)return args.d ? a : JSON.stringify(a)
            a.reverse()
            return args.d ? a : JSON.stringify(a)
        }
        rmenuObjectmember(args){
            return args.d ? (args.b ? args.a :JSON.parse(args.a))[args.c] : JSON.stringify((args.b ? args.a :JSON.parse(args.a))[args.c])
        }
        rmenuObjectset(args){
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
        rmenuObjectkeys(args){
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
        rpadstart(args){
            return args.a.padStart(args.c,args.b)
        }
        rpadend(args){
            return args.a.padEnd(args.c,args.b)
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
        rreplaceexcept(args){
            let a =''
            for(const t of String(args.a).split(args.c)){
                a+=args.c+t.replaceAll(args.b,args.d)
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
        rExponent({ NUM1, NUM2 }) {
            return Cast.toNumber(NUM1) ** Cast.toNumber(NUM2)
        }
        rRoot({ NUM1, NUM2 }) {
            return Math.pow(Cast.toNumber(NUM2), 1 / Cast.toNumber(NUM1))
        }
        rrandom(args){
            return Math.random()
        }
        bnotequal(args){
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
        rNegative({ NUM }) {
            return 0 - Cast.toNumber(NUM)
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
            return JSON.stringify(JSON.parse(args.a).filter(t => t<=args.b))
        }
        rArrayremovenotsmallnumber(args){
            return JSON.stringify(JSON.parse(args.a).filter(t => t<args.b))
        }
        rArrayremovesmallnumber(args){
            return JSON.stringify(JSON.parse(args.a).filter(t => t>=args.b))
        }
        rArrayremovenotbignumber(args){
            return JSON.stringify(JSON.parse(args.a).filter(t => t>args.b))
        }
        rArrayremovenumber(args){
            const b = Number(args.b)
            return JSON.stringify(JSON.parse(args.a).filter(t => t!==b))
        }
        rArrayremovestr(args){
            const b = String(args.b)
            return JSON.stringify(JSON.parse(args.a).filter(t => t!==b))
        }
        rArrayremove(args){
            return JSON.stringify(JSON.parse(args.a).filter(t => t!=args.b))
        }
        rArrayremoveJSON(args){
            return JSON.stringify(JSON.parse(args.a).filter(t => JSON.stringify(t)!=args.b))
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
        Extension: OperatorsPro,
        info: {
            name: "OperatorsPro.name",
            description: "OperatorsPro.descp",
            extensionId: OperatorsProextensionId,
            iconURL: OperatorsPropicture,
            insetIconURL: OperatorsProicon,
            featured: true,
            disabled: false,
            collaboratorList: [
                {
                    collaborator: "多bug的啸天犬 @ CCW",
                    collaboratorURL: "https://www.ccw.site/student/6200811f05660557606c8b15"
                },
                {
                    collaborator: "NOname_awa @ CCW",
                    collaboratorURL: "https://www.ccw.site/student/6267e862a6666f52c7c97059"
                },
                {
                    collaborator: "bilioicik @ CCW",
                    collaboratorURL: "https://www.ccw.site/student/6218cd094daafc57cebfc1d3"
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
