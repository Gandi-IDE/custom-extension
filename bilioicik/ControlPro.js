;(function (Scratch) {
    
    const {Cast} = Scratch;

    const age = Symbol("age")

    const ControlPropicture = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI2MDAiIGhlaWdodD0iMzc1IiB2aWV3Qm94PSIwLDAsNjAwLDM3NSI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSI5Mi43MDM3IiB5MT0iMjAxIiB4Mj0iNDIwIiB5Mj0iMjAxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTEiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmYWIxOSIgc3RvcC1vcGFjaXR5PSIwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZhYjE5IiBzdG9wLW9wYWNpdHk9IjAuOCIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IHgxPSIxMjQuNzAzNyIgeTE9IjIwOSIgeDI9IjM0MS42NjY2OCIgeTI9IjIwOSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0yIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmFiMTkiIHN0b3Atb3BhY2l0eT0iMCIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmYWIxOSIgc3RvcC1vcGFjaXR5PSIwLjgiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2MCw3LjUpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0tNjAsMzY3LjV2LTM3NWg2MDB2Mzc1eiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48Zz48Zz48cGF0aCBkPSJNOTIuNzAzNyw3M2MwLC00LjQxODI4IDMuNTgxNzIsLTggOCwtOGgxNmM0LDAgNiwyIDgsNGw4LDhjMiwyIDQsNCA4LDRoMjRjNCwwIDYsLTIgOCwtNGw4LC04YzIsLTIgNCwtNCA4LC00aDIyMy4yOTYzYzQuNDE4MjgsMCA4LDMuNTgxNzIgOCw4djgwYzAsNC40MTgyOCAtMy41ODE3Miw4IC04LDhoLTE5Mi4wOTYzdjBjLTQsMCAtNiwyIC04LDRsLTgsOGMtMiwyIC00LDQgLTgsNGgtMjRjLTQsMCAtNiwtMiAtOCwtNGwtOCwtOGMtMiwtMiAtNCwtNCAtOCwtNGgtMTUuMmMtNC40MTgyOCwwIC04LDMuNTgxNzIgLTgsOHY4MGMwLDQuNDE4MjggMy41ODE3Miw4IDgsOGgyNzkuMjk2M2M0LjQxODI4LDAgOCwzLjU4MTcyIDgsOHY0OGMwLDQuNDE4MjggLTMuNTgxNzIsOCAtOCw4aC0yMjMuMjk2M3YwYy00LDAgLTYsMiAtOCw0bC04LDhjLTIsMiAtNCw0IC04LDRoLTI0Yy00LDAgLTYsLTIgLTgsLTRsLTgsLThjLTIsLTIgLTQsLTQgLTgsLTRoLTE2Yy00LjQxODI4LDAgLTgsLTMuNTgxNzIgLTgsLTh6IiBmaWxsPSJub25lIiBzdHJva2U9InVybCgjY29sb3ItMSkiIHN0cm9rZS13aWR0aD0iMjAiLz48cGF0aCBkPSJNOTIuNzAzNyw3M2MwLC00LjQxODI4IDMuNTgxNzIsLTggOCwtOGgxNmM0LDAgNiwyIDgsNGw4LDhjMiwyIDQsNCA4LDRoMjRjNCwwIDYsLTIgOCwtNGw4LC04YzIsLTIgNCwtNCA4LC00aDIyMy4yOTYzYzQuNDE4MjgsMCA4LDMuNTgxNzIgOCw4djgwYzAsNC40MTgyOCAtMy41ODE3Miw4IC04LDhoLTE5Mi4wOTYzdjBjLTQsMCAtNiwyIC04LDRsLTgsOGMtMiwyIC00LDQgLTgsNGgtMjRjLTQsMCAtNiwtMiAtOCwtNGwtOCwtOGMtMiwtMiAtNCwtNCAtOCwtNGgtMTUuMmMtNC40MTgyOCwwIC04LDMuNTgxNzIgLTgsOHY4MGMwLDQuNDE4MjggMy41ODE3Miw4IDgsOGgyNzkuMjk2M2M0LjQxODI4LDAgOCwzLjU4MTcyIDgsOHY0OGMwLDQuNDE4MjggLTMuNTgxNzIsOCAtOCw4aC0yMjMuMjk2M3YwYy00LDAgLTYsMiAtOCw0bC04LDhjLTIsMiAtNCw0IC04LDRoLTI0Yy00LDAgLTYsLTIgLTgsLTRsLTgsLThjLTIsLTIgLTQsLTQgLTgsLTRoLTE2Yy00LjQxODI4LDAgLTgsLTMuNTgxNzIgLTgsLTh6IiBmaWxsPSIjZmZhYjE5IiBzdHJva2U9IiNjYzg5MTQiIHN0cm9rZS13aWR0aD0iMiIvPjwvZz48cGF0aCBkPSJNMTI0LjcwMzcsMTY5YzAsLTQuNDE4MjggMy41ODE3MiwtOCA4LC04aDE2YzQsMCA2LDIgOCw0bDgsOGMyLDIgNCw0IDgsNGgyNGM0LDAgNiwtMiA4LC00bDgsLThjMiwtMiA0LC00IDgsLTRoMTEyLjk2Mjk4YzQuNDE4MjgsMCA4LDMuNTgxNzIgOCw4djgwYzAsNC40MTgyOCAtMy41ODE3Miw4IC04LDhoLTIwMC45NjI5OGMtNC40MTgyOCwwIC04LC0zLjU4MTcyIC04LC04eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJ1cmwoI2NvbG9yLTIpIiBzdHJva2Utd2lkdGg9IjIwIi8+PHBhdGggZD0iTTEyNC43MDM3LDE2OWMwLC00LjQxODI4IDMuNTgxNzIsLTggOCwtOGgxNmM0LDAgNiwyIDgsNGw4LDhjMiwyIDQsNCA4LDRoMjRjNCwwIDYsLTIgOCwtNGw4LC04YzIsLTIgNCwtNCA4LC00aDExMi45NjI5OGM0LjQxODI4LDAgOCwzLjU4MTcyIDgsOHY4MGMwLDQuNDE4MjggLTMuNTgxNzIsOCAtOCw4aC0yMDAuOTYyOThjLTQuNDE4MjgsMCAtOCwtMy41ODE3MiAtOCwtOHoiIGZpbGw9IiNmZmFiMTkiIHN0cm9rZT0iI2NjODkxNCIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjxnIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2NjODkxNCIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJNMzQxLjc0NjI0LDEyOS40Nzc5NmMtMS40OTk1OSwwIC0yLjcxNTI1LC0xLjIxNTY3IC0yLjcxNTI1LC0yLjcxNTI2di0wLjAwMDAxYzAsLTAuMDAyMTUgMCwtMC4wMDQzIDAuMDAwMDEsLTAuMDA2NDVjMCwtMC4wMDAwMSAwLC0wLjAwMDAxIDAsLTAuMDAwMDJ2LTEzLjU2OTgyaC0wLjAwMDAxdi04LjE0NTc3YzAsLTEuNDk5NTkgMS4yMTU2NiwtMi43MTUyNSAyLjcxNTI1LC0yLjcxNTI1YzAuMDAyMTYsMCAwLjAwNDMyLDAgMC4wMDY0OCwwLjAwMDAxaDEzLjU2OTgydi0wLjAwMDAxaDguMTQ1NzhjMS40OTk1OSwwIDIuNzE1MjUsMS4yMTU2NyAyLjcxNTI1LDIuNzE1MjVjMCwwLjAwMjE2IDAsMC4wMDQzMiAwLDAuMDA2NDd2MTMuNTY5ODJ2MHY1LjQzMDUyaDAuMDAwMDF2MTMuNTc2MjdjMCwwLjAwNTI4IC0wLjAwMDAyLDAuMDEwNTcgLTAuMDAwMDUsMC4wMTU4NHYyLjY5OTQyaDAuMDAwMDN2OC4xNDU3N2MwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNSAtMi43MTUyNSwyLjcxNTI1Yy0wLjAwMjE2LDAgLTAuMDA0MywtMC4wMDAwMSAtMC4wMDY0NiwtMC4wMDAwMWgtMjEuNzA5MTNjLTAuMDAyMTYsMC4wMDAwMSAtMC4wMDQzMSwwLjAwMDAxIC0wLjAwNjQ3LDAuMDAwMDFjLTEuNDk5NTksMCAtMi43MTUyNiwtMS4yMTU2NiAtMi43MTUyNiwtMi43MTUyNWMwLC0xLjQ5OTU5IDEuMjE1NjcsLTIuNzE1MjYgMi43MTUyNiwtMi43MTUyNmMwLjAwMDAxLDAgMC4wMDAwMSwwIDAuMDAwMDIsMHYwaDE2LjMwMDY0YzEuNDk1MzgsLTAuMDA0OTMgMi43MDYxLC0xLjIxODcgMi43MDYxLC0yLjcxNTI1aDAuMDAwMDJ2LTEwLjg2MTAyaC0wLjAwMDAydi0wLjAwMDAxaC0wLjAwMDAxYzAsLTEuNDk2NTQgLTEuMjEwNzEsLTIuNzEwMzEgLTIuNzA2MSwtMi43MTUyNWgtMTYuMzAwNjN2MHpNMzQ3LjE2NzY0LDEwNy43NTU5M2MtMS40OTUzOCwwLjAwNDk0IC0yLjcwNjEsMS4yMTg3MSAtMi43MDYxLDIuNzE1MjRoLTAuMDAwMDR2MTAuODcwMTVjMC4wMDQ5MywxLjQ5NTM4IDEuMjE4NzEsMi43MDYxMSAyLjcxNTI1LDIuNzA2MTF2MC4wMDAwM2gxMC44NzAxNWMxLjQ5NTM4LC0wLjAwNDk0IDIuNzA2MSwtMS4yMTg3IDIuNzA2MSwtMi43MTUyNGgwLjAwMDA0di0xMC44NzAxNWMtMC4wMDQ5MywtMS40OTUzOCAtMS4yMTg3LC0yLjcwNjEgLTIuNzE1MjQsLTIuNzA2MXYtMC4wMDAwM3oiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9Ii8+PHBhdGggZD0iTTExMC45NDkyNSwxMDUuMDQwN2MwLC0xLjQ5OTU5IDEuMjE1NjYsLTIuNzE1MjUgMi43MTUyNSwtMi43MTUyNWMwLjAwMjE2LDAgMC4wMDQzMSwwLjAwMDAxIDAuMDA2NDYsMC4wMDAwMWgyMS43MDkxM2MwLjAwMjE1LC0wLjAwMDAxIDAuMDA0MzEsLTAuMDAwMDEgMC4wMDY0NywtMC4wMDAwMWMxLjQ5OTU5LDAgMi43MTUyNiwxLjIxNTY2IDIuNzE1MjYsMi43MTUyNWMwLDEuNDk5NTkgLTEuMjE1NjcsMi43MTUyNiAtMi43MTUyNiwyLjcxNTI2Yy0wLjAwMDAxLDAgLTAuMDAwMDEsMCAtMC4wMDAwMiwwdjAuMDAwMDFoLTE2LjMwMDY0Yy0xLjQ5NTM4LDAuMDA0OTQgLTIuNzA2MSwxLjIxODcxIC0yLjcwNjEsMi43MTUyNGgtMC4wMDAwNXYwLjAwMDAyaDAuMDAwMDVjMCwxLjQ5MzEyIDEuMjA1MTgsMi43MDQ3NiAyLjY5NTg0LDIuNzE1MTloMTYuMzA0NDFjMC4wMDIxNSwwIDAuMDA0MzEsLTAuMDAwMDEgMC4wMDY0NiwtMC4wMDAwMWMxLjQ5OTU5LDAgMi43MTUyNSwxLjIxNTY2IDIuNzE1MjUsMi43MTUyNXYxMC44NjEwNGMwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNSAtMi43MTUyNSwyLjcxNTI1Yy0wLjAwMjE1LDAgLTAuMDA0MzEsMCAtMC4wMDY0NiwwaC0yMS43MDkxMmMtMC4wMDIxNiwwLjAwMDAxIC0wLjAwNDMxLDAgLTAuMDA2NDcsMGMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY2IC0yLjcxNTI2LC0yLjcxNTI1YzAsLTEuNDk5NTkgMS4yMTU2NywtMi43MTUyNiAyLjcxNTI2LC0yLjcxNTI2YzAuMDAwMDEsMCAwLjAwMDAxLDAgMC4wMDAwMiwwdi0wLjAwMDAxaDE2LjMwMDY0YzEuNDk1MzgsLTAuMDA0OTQgMi43MDYxLC0xLjIxODcgMi43MDYxLC0yLjcxNTI0aDAuMDAwMDV2LTAuMDAwMDJoLTAuMDAwMDVjMCwtMS40OTMxMiAtMS4yMDUxOSwtMi43MDQ3NiAtMi42OTU4NCwtMi43MTUxOWgtMTYuMzA0NGMtMC4wMDIxNiwwIC0wLjAwNDMxLDAuMDAwMDEgLTAuMDA2NDYsMC4wMDAwMWMtMC45MDkwNCwwIC0xLjcxMzc0LC0wLjQ0NjcyIC0yLjIwNjU2LC0xLjEzMjZjLTAuMzIwMTksLTAuNDQ1NTkgLTAuNTA4NzUsLTAuOTkyMTQgLTAuNTA4NzUsLTEuNTgyNzNjMCwtMC4wMDU3MSAwLjAwMDAxLC0wLjAxMTQxIDAuMDAwMDUsLTAuMDE3MTF6Ii8+PHBhdGggZD0iTTE0Ni4yNDc1NywxMjkuNDc4MDJjLTEuNDk5NTksMCAtMi43MTUyNiwtMS4yMTU2NiAtMi43MTUyNiwtMi43MTUyNWMwLC0wLjAwMjE2IDAsLTAuMDA0MzIgMC4wMDAwMSwtMC4wMDY0N3YtMTMuNTY5ODJoLTAuMDAwMDF2LTguMTQ1NzdjMCwtMS40OTk1OSAxLjIxNTY3LC0yLjcxNTI1IDIuNzE1MjYsLTIuNzE1MjVjMC4wMDIxNSwwIDAuMDA0MzIsMCAwLjAwNjQ3LDAuMDAwMDFoMTMuNTY5ODJ2LTAuMDAwMDFoOC4xNDU3OGMxLjQ5OTU5LDAgMi43MTUyNSwxLjIxNTY3IDIuNzE1MjUsMi43MTUyNWMwLDAuMDAyMTYgMCwwLjAwNDMyIC0wLjAwMDAxLDAuMDA2NDd2MTMuNTY5ODJoMC4wMDAwMXY4LjE0NTc4YzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI1IC0yLjcxNTI1LDIuNzE1MjVjLTAuMDAyMTUsMCAtMC4wMDQzMiwwIC0wLjAwNjQ3LC0wLjAwMDAxaC0xMy41Njk4MnYwLjAwMDAxek0xNTEuNjY4OTgsMTA3Ljc1NTk3Yy0xLjQ5NTM4LDAuMDA0OTQgLTIuNzA2MSwxLjIxODcxIC0yLjcwNjEsMi43MTUyNGgtMC4wMDAwNHYxMC44NzAxNWMwLjAwNDkzLDEuNDk1MzggMS4yMTg3MSwyLjcwNjEgMi43MTUyNSwyLjcwNjF2MC4wMDAwNGgxMC44NzAxNWMxLjQ5NTM4LC0wLjAwNDk0IDIuNzA2MTEsLTEuMjE4NyAyLjcwNjExLC0yLjcxNTI0aDAuMDAwMDN2LTEwLjg3MDE2Yy0wLjAwNDkzLC0xLjQ5NTM4IC0xLjIxODcsLTIuNzA2MSAtMi43MTUyNSwtMi43MDYxdi0wLjAwMDA0eiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iLz48cGF0aCBkPSJNMTg5LjY5MTY3LDEwMi4zMjU0NGMwLjAwNTI4LDAgMC4wMTA1NywwLjAwMDAyIDAuMDE1ODQsMC4wMDAwNWgyLjY5OTQydi0wLjAwMDAzaDguMTQ1NzhjMS40OTk1OSwwIDIuNzE1MjUsMS4yMTU2NiAyLjcxNTI1LDIuNzE1MjVjMCwwLjAwMjE2IC0wLjAwMDAxLDAuMDA0MzEgLTAuMDAwMDEsMC4wMDY0N3YyMS43MDkxM2MwLjAwMDAxLDAuMDAyMTYgMC4wMDAwMSwwLjAwNDMyIDAuMDAwMDEsMC4wMDY0N2MwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNSAtMi43MTUyNSwyLjcxNTI1Yy0xLjQ5OTU5LDAgLTIuNzE1MjYsLTEuMjE1NjYgLTIuNzE1MjYsLTIuNzE1MjVjMCwtMC4wMDAwMSAwLC0wLjAwMDAyIDAsLTAuMDAwMDNoLTAuMDAwMDF2LTE2LjMwMDYzYy0wLjAwNDkzLC0xLjQ5NTM4IC0xLjIxODcsLTIuNzA2MSAtMi43MTUyNCwtMi43MDYxdi0wLjAwMDAxaC0wLjAwMDA0Yy0xLjQ5NjU0LDAgLTIuNzEwMzEsMS4yMTA3MiAtMi43MTUyNCwyLjcwNjExdjE2LjI5NDE4YzAuMDAwMDEsMC4wMDIxNiAwLjAwMDAxLDAuMDA0MzEgMC4wMDAwMSwwLjAwNjQ3YzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI2IC0yLjcxNTI1LDIuNzE1MjZjLTEuNDk5NTksMCAtMi43MTUyNiwtMS4yMTU2NyAtMi43MTUyNiwtMi43MTUyNmMwLC0wLjAwMDAxIDAsLTAuMDAwMDEgMCwtMC4wMDAwMmgtMC4wMDAwMXYtMTYuMzAwNjNjLTAuMDA0OTMsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxMSAtMi43MTUyNCwtMi43MDYxMWgtMC4wMDAwMXYwLjAwMDAxYy0xLjQ5NjU0LDAgLTIuNzEwMzEsMS4yMTA3MSAtMi43MTUyNCwyLjcwNjF2MTYuMzAwNjRoLTAuMDAwMDFjMCwwLjAwMDAxIDAsMC4wMDAwMiAwLDAuMDAwMDNjMCwxLjQ5OTU5IC0xLjIxNTY3LDIuNzE1MjUgLTIuNzE1MjYsMi43MTUyNWMtMS40OTk1OSwwIC0yLjcxNTI1LC0xLjIxNTY2IC0yLjcxNTI1LC0yLjcxNTI1YzAsLTAuMDAyMTYgMCwtMC4wMDQzMiAwLjAwMDAxLC0wLjAwNjQ3di0xOS4wMDAzaC0wLjAwMDAxYzAsMCAwLC0wLjAwMDAyIDAsLTAuMDAwMDV2LTUuNDMwNTF6Ii8+PHBhdGggZD0iTTIzNS44NTEwMiwxMTUuODg0NTdjMC4wMDAwNCwwLjAwNTcgMC4wMDAwNiwwLjAxMTQxIDAuMDAwMDYsMC4wMTcxMmMwLDAuMjUzNzggLTAuMDM0ODIsMC40OTk0MyAtMC4wOTk5MywwLjczMjQyYy0wLjA4NjQyLDAuMzA5MjQgLTAuMjI2MjEsMC41OTYxOSAtMC40MDg4MiwwLjg1MDMyYy0wLjQ5MjgyLDAuNjg1ODggLTEuMjk3NTIsMS4xMzI1OSAtMi4yMDY1NSwxLjEzMjU5Yy0wLjAwMjE1LDAgLTAuMDA0MzEsLTAuMDAwMDEgLTAuMDA2NDcsLTAuMDAwMDFoLTE2LjMwNDQxYy0xLjQ5MDY2LDAuMDEwNDMgLTIuNjk1ODQsMS4yMjIwNyAtMi42OTU4NCwyLjcxNTE5aC0wLjAwMDA1djAuMDAwMDNoMC4wMDAwNWMwLDEuNDk2NTQgMS4yMTA3MiwyLjcxMDMxIDIuNzA2MTEsMi43MTUyNGgxNi4zMDA2M3YwLjAwMDAxYzAuMDAwMDEsMCAwLjAwMDAyLDAgMC4wMDAwMywwYzEuNDk5NTksMCAyLjcxNTI2LDEuMjE1NjcgMi43MTUyNiwyLjcxNTI2YzAsMS40OTk1OSAtMS4yMTU2NywyLjcxNTI1IC0yLjcxNTI2LDIuNzE1MjVjLTAuMDAyMTUsMCAtMC4wMDQzMiwwLjAwMDAxIC0wLjAwNjQ3LDBoLTIxLjcwOTEzYy0wLjAwMjE1LDAgLTAuMDA0MywwIC0wLjAwNjQ2LDBjLTEuNDk5NTksMCAtMi43MTUyNiwtMS4yMTU2NSAtMi43MTUyNiwtMi43MTUyNXYtMTAuODUxODRjLTAuMDAwMDEsLTAuMDAzMDUgLTAuMDAwMDEsLTAuMDA2MDkgLTAuMDAwMDEsLTAuMDA5MTR2LTEwLjg2MTA1YzAsLTEuNDk5NTkgMS4yMTU2NiwtMi43MTUyNSAyLjcxNTI1LC0yLjcxNTI1YzAuMDAyMTUsMCAwLjAwNDMxLDAuMDAwMDEgMC4wMDY0NiwwLjAwMDAxaDIxLjcwOTEzYzAuMDAyMTUsLTAuMDAwMDEgMC4wMDQzMSwtMC4wMDAwMSAwLjAwNjQ3LC0wLjAwMDAxYzEuNDk5NTksMCAyLjcxNTI2LDEuMjE1NjYgMi43MTUyNiwyLjcxNTI1YzAsMC4wMDQ4MiAtMC4wMDAwMSwwLjAwOTY1IC0wLjAwMDA0LDAuMDE0NDd6TTIyNy43MjQ2MiwxMTMuMTg2NDNjMS40OTA2NiwtMC4wMTA0MyAyLjY5NTg0LC0xLjIyMjA4IDIuNjk1ODQsLTIuNzE1MTloMC4wMDAwNXYtMC4wMDAwMmgtMC4wMDAwNWMwLC0xLjQ5NjU0IC0xLjIxMDcyLC0yLjcxMDMxIC0yLjcwNjExLC0yLjcxNTI0aC0xMC44ODNjLTEuNDkzNjQsMC4wMDY5NyAtMi43MDIzMSwxLjIxOTk1IC0yLjcwMjMxLDIuNzE1MjNoLTAuMDAwMDV2MC4wMDAwMmgwLjAwMDA1YzAsMS40OTM4OSAxLjIwNjQyLDIuNzA2IDIuNjk4MTQsMi43MTUyeiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iLz48cGF0aCBkPSJNMjQ2LjcxMjE5LDgzLjMxODUxYzAsLTEuNDk5NTkgMS4yMTU2NiwtMi43MTUyNiAyLjcxNTI1LC0yLjcxNTI2djBjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NyAyLjcxNTI2LDIuNzE1MjZjMCwwLjAwMDAxIDAsMC4wMDAwMSAwLDAuMDAwMDJ2MHYxNi4zMDA2M2MwLjAwNDkzLDEuNDk1MzggMS4yMTg3MSwyLjcwNjExIDIuNzE1MjUsMi43MDYxMXYwLjAwMDA1aDAuMDA5MTJjMS40OTUzOCwwLjAwNDk0IDIuNzA2MSwxLjIxODcgMi43MDYxLDIuNzE1MjRoMC4wMDAwNXYwLjAwMDAzaC0wLjAwMDA1YzAsMC4wMDAwMiAwLDAuMDAwMDQgMCwwLjAwMDA2aDAuMDAwMDV2MC4wMDAwM2gtMC4wMDAwNWMwLDEuNDk2NTQgLTEuMjEwNzEsMi43MTAzIC0yLjcwNjEsMi43MTUyNGgtMC4wMDkxMnYwLjAwMDA1Yy0xLjQ5MzQ4LDAgLTIuNzA1MzUsMS4yMDU3OSAtMi43MTUyLDIuNjk2OTd2MTAuODg4NGMwLjAwNDkzLDEuNDk1MzggMS4yMTg3MSwyLjcwNjEgMi43MTUyNSwyLjcwNjF2MC4wMDAwNWgwLjAwOTEyYzEuNDk1MzgsMC4wMDQ5NCAyLjcwNjEsMS4yMTg3MSAyLjcwNjEsMi43MTUyNGgwLjAwMDA1djAuMDAwMDJoLTAuMDAwMDVjMCwxLjQ5NjU0IC0xLjIxMDcxLDIuNzEwMzEgLTIuNzA2MSwyLjcxNTI0Yy0wLjAwMDAxLDAgLTUuNDM5NjYsMCAtNS40Mzk2NywwYy0wLjQ0OTQ2LDAgLTAuODczNDIsLTAuMTA5MjEgLTEuMjQ2NzgsLTAuMzAyNTNjLTAuODcyMzcsLTAuNDUxNjggLTEuNDY4NTYsLTEuMzYyNTkgLTEuNDY4NTYsLTIuNDEyNzZjMCwtMC4wMDAwMSAwLC0wLjAwMDAyIDAsLTAuMDAwMDN2MHYtMTYuMzAwNjNjLTAuMDA0OTMsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI1LC0yLjcwNjF2LTAuMDAwMDVoLTAuMDA5MTJjLTEuNDk1MzgsLTAuMDA0OTQgLTIuNzA2MSwtMS4yMTg3IC0yLjcwNjEsLTIuNzE1MjRoLTAuMDAwMDV2LTAuMDAwMDJoMC4wMDAwNWMwLC0xLjAxMDE3IDAuNTUxNjMsLTEuODkxNSAxLjM3MDEsLTIuMzU5MThjMC4zOTQwOSwtMC4yMjUyMSAwLjg1MDA1LC0wLjM1NDUgMS4zMzYwOCwtMC4zNTYxaDAuMDA5MTJ2LTAuMDAwMDVjMS40OTY1NCwwIDIuNzEwMzEsLTEuMjEwNzIgMi43MTUyNCwtMi43MDYxdi0xNi4zMDA2M2MwLC0wLjAwMDAxIDAsLTAuMDAwMDEgMCwtMC4wMDAwMnoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9Ii8+PHBhdGggZD0iTTI3Ni41ODAwMywxMDIuMzI1MzhjMC4wMDUyOCwwIDAuMDEwNTcsMC4wMDAwMiAwLjAxNTg0LDAuMDAwMDVoMi42OTk0MnYtMC4wMDAwM2g4LjE0NTc4YzEuNDk5NTksMCAyLjcxNTI1LDEuMjE1NjYgMi43MTUyNSwyLjcxNTI1YzAsMC4wMDIxNiAtMC4wMDAwMSwwLjAwNDMxIC0wLjAwMDAxLDAuMDA2NDd2MjEuNzA5MTNjMC4wMDAwMSwwLjAwMjE2IDAuMDAwMDEsMC4wMDQzMSAwLjAwMDAxLDAuMDA2NDdjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjYgLTIuNzE1MjUsMi43MTUyNmMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY3IC0yLjcxNTI2LC0yLjcxNTI2YzAsLTAuMDAwMDEgMCwtMC4wMDAwMSAwLC0wLjAwMDAyaC0wLjAwMDAxdi0xNi4zMDA2M2MtMC4wMDQ5MywtMS40OTUzOCAtMS4yMTg3LC0yLjcwNjEgLTIuNzE1MjQsLTIuNzA2MXYtMC4wMDAwMmgtMTAuODYxMDJ2MC4wMDAwMWgtMC4wMDAwMXYwLjAwMDAxYy0xLjQ5NjU0LDAgLTIuNzEwMzEsMS4yMTA3MiAtMi43MTUyNSwyLjcwNjF2MTYuMzAwNjR2MGMwLDAuMDAwMDEgMCwwLjAwMDAxIDAsMC4wMDAwMmMwLDEuNDk5NTkgLTEuMjE1NjcsMi43MTUyNiAtMi43MTUyNiwyLjcxNTI2Yy0xLjQ5OTU5LDAgLTIuNzE1MjUsLTEuMjE1NjcgLTIuNzE1MjUsLTIuNzE1MjZjMCwtMC4wMDIxNiAwLC0wLjAwNDMxIDAuMDAwMDEsLTAuMDA2NDd2LTE5LjAwMDNoLTAuMDAwMDFjMCwwIDAsLTAuMDAwMDIgMCwtMC4wMDAwNXYtNS40MzA1MWgwLjAwMDA4di0xOS4wMDAzN2MtMC4wMDAwMSwtMC4wMDIxNiAtMC4wMDAwMSwtMC4wMDQzMiAtMC4wMDAwMSwtMC4wMDY0N2MwLC0xLjQ5OTU5IDEuMjE1NjYsLTIuNzE1MjYgMi43MTUyNSwtMi43MTUyNmMxLjQ5OTU5LDAgMi43MTUyNiwxLjIxNTY3IDIuNzE1MjYsMi43MTUyNmMwLDAuMDAwMDEgMCwwLjAwMDAxIDAsMC4wMDAwMmgwLjAwMDAxdjE2LjMwMDY0YzAuMDA0OTMsMS40OTUzOCAxLjIxODcsMi43MDYxIDIuNzE1MjQsMi43MDYxdjAuMDAwMDVoMC4wMDkxMmMwLjAwMzA0LDAuMDAwMDEgMC4wMDYxMSwwLjAwMDAyIDAuMDA5MTUsMC4wMDAwNXoiLz48cGF0aCBkPSJNMjk4LjMwMjE0LDEyOS40Nzc5NmMtMS40OTk1OSwwIC0yLjcxNTI1LC0xLjIxNTY2IC0yLjcxNTI1LC0yLjcxNTI1YzAsLTAuMDAyMTYgMCwtMC4wMDQzMSAwLC0wLjAwNjQ2di0yMS43MDkxMmMtMC4wMDAwMSwtMC4wMDIxNiAwLC0wLjAwNDMyIDAsLTAuMDA2NDdjMCwtMS40OTk1OSAxLjIxNTY2LC0yLjcxNTI2IDIuNzE1MjUsLTIuNzE1MjZjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NyAyLjcxNTI2LDIuNzE1MjZjMCwwLjAwMDAxIDAsMC4wMDAwMSAwLDAuMDAwMDJ2MHYyMS43MjIwNHYwYzAsMS40OTk1OSAtMS4yMTU2NywyLjcxNTI1IC0yLjcxNTI2LDIuNzE1MjV6Ii8+PHBhdGggZD0iTTI5NS41ODY4Myw4OC43NDkwOGMwLC0xLjQ5OTU5IDEuMjE1NjcsLTIuNzE1MjUgMi43MTUyNiwtMi43MTUyNWMxLjQ5OTU5LDAgMi43MTUyNiwxLjIxNTY3IDIuNzE1MjYsMi43MTUyNWMwLDEuNDk5NTkgLTEuMjE1NjYsMi43MTUyNSAtMi43MTUyNiwyLjcxNTI1Yy0xLjQ5OTU5LDAgLTIuNzE1MjYsLTEuMjE1NjYgLTIuNzE1MjYsLTIuNzE1MjV6Ii8+PHBhdGggZD0iTTMyMC4wMjQxOSwxMDIuMzI1MzhjMC4wMDUyOCwwIDAuMDEwNTcsMC4wMDAwMiAwLjAxNTg0LDAuMDAwMDVoMi42OTk0MnYtMC4wMDAwM2g4LjE0NTc4YzEuNDk5NTksMCAyLjcxNTI1LDEuMjE1NjYgMi43MTUyNSwyLjcxNTI1YzAsMC4wMDIxNiAwLDAuMDA0MzEgMCwwLjAwNjQ3djIxLjcwOTEzYzAuMDAwMDEsMC4wMDIxNiAwLDAuMDA0MzEgMCwwLjAwNjQ3YzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI2IC0yLjcxNTI1LDIuNzE1MjZjLTEuNDk5NTksMCAtMi43MTUyNiwtMS4yMTU2NyAtMi43MTUyNiwtMi43MTUyNmMwLC0wLjAwMDAxIDAsLTAuMDAwMDEgMCwtMC4wMDAwMmgtMC4wMDAwMXYtMTYuMzAwNjNjLTAuMDA0OTMsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI0LC0yLjcwNjF2LTAuMDAwMDF2LTAuMDAwMDFoLTEwLjg2MTAydjAuMDAwMDF2MGgtMC4wMDAwMXYwLjAwMDAxYy0xLjQ5NjU0LDAgLTIuNzEwMzEsMS4yMTA3MiAtMi43MTUyNCwyLjcwNjF2MTYuMzAwNjR2MGMwLDAuMDAwMDEgMCwwLjAwMDAxIDAsMC4wMDAwMmMwLDEuNDk5NTkgLTEuMjE1NjcsMi43MTUyNiAtMi43MTUyNiwyLjcxNTI2Yy0xLjQ5OTU5LDAgLTIuNzE1MjUsLTEuMjE1NjcgLTIuNzE1MjUsLTIuNzE1MjZjMCwtMC4wMDIxNiAwLC0wLjAwNDMxIDAsLTAuMDA2NDd2LTE5LjAwMDN2MGMwLDAgMCwtMC4wMDAwMiAwLC0wLjAwMDA1di01LjQzMDUxeiIvPjwvZz48cGF0aCBkPSJNMzYxLjIyMzkyLDMxMS40Yy0yLjAyMjE0LDAgLTMuNjYxNDIsLTEuNjM5MjcgLTMuNjYxNDIsLTMuNjYxNDJ2LTM3LjY3NzE2YzAsLTIuMDIyMTQgMS42MzkyNywtMy42NjE0MiAzLjY2MTQyLC0zLjY2MTQyaDM3LjY3NzE2YzIuMDIyMTQsMCAzLjY2MTQyLDEuNjM5MjcgMy42NjE0MiwzLjY2MTQydjkuNDE5MjljMCwtMS4wMTEwNyAtMS4yMjk0NiwtMS44MzA3MSAtMi43NDYwNywtMS44MzA3MWgtMjguMjU3ODdjLTEuNTE2NjEsMCAtMi43NDYwNiwwLjgxOTY0IC0yLjc0NjA2LDEuODMwNzF2MTguODM4NThjMCwxLjAxMTA3IDEuMjI5NDUsMS44MzA3MSAyLjc0NjA2LDEuODMwNzFoMjguMjU3ODdjMS41MTY2MSwwIDIuNzQ2MDcsLTAuODE5NjQgMi43NDYwNywtMS44MzA3MXY5LjQxOTI5YzAsMi4wMjIxNCAtMS42MzkyNywzLjY2MTQyIC0zLjY2MTQyLDMuNjYxNDJ6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNjZjhiMTciIHN0cm9rZS13aWR0aD0iMiIvPjxnIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2NjODkxNCIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJNMjg1LjA5MjcyLDIxNS4yODEyNmMwLjAwMDA0LDAuMDA1NyAwLjAwMDA1LDAuMDExNDEgMC4wMDAwNSwwLjAxNzEyYzAsMC4yNTM3OCAtMC4wMzQ4MSwwLjQ5OTQzIC0wLjA5OTkzLDAuNzMyNDJjLTAuMDg2NDIsMC4zMDkyNCAtMC4yMjYyMSwwLjU5NjE5IC0wLjQwODgyLDAuODUwMzJjLTAuNDkyODIsMC42ODU4OCAtMS4yOTc1MiwxLjEzMjU5IC0yLjIwNjU2LDEuMTMyNTljLTAuMDAyMTYsMCAtMC4wMDQzMSwtMC4wMDAwMSAtMC4wMDY0NiwtMC4wMDAwMWgtMTYuMzA0MzljLTEuNDkwNjYsMC4wMTA0MyAtMi42OTU4NCwxLjIyMjA3IC0yLjY5NTg0LDIuNzE1MTloLTAuMDAwMDV2MC4wMDAwMmgwLjAwMDA1YzAsMS40OTY1NCAxLjIxMDcxLDIuNzEwMzEgMi43MDYxLDIuNzE1MjRoMTYuMzAwNjN2MC4wMDAwMWMwLjAwMDAxLDAgMC4wMDAwMSwwIDAuMDAwMDIsMGMxLjQ5OTU5LDAgMi43MTUyNiwxLjIxNTY2IDIuNzE1MjYsMi43MTUyNWMwLDEuNDk5NTggLTEuMjE1NjcsMi43MTUyNiAtMi43MTUyNiwyLjcxNTI2Yy0wLjAwMjE2LDAgLTAuMDA0MzEsMCAtMC4wMDY0NywtMC4wMDAwMWgtMjEuNzA5MTJjLTAuMDAyMTYsMCAtMC4wMDQzMSwwLjAwMDAxIC0wLjAwNjQ2LDAuMDAwMDFjLTEuNDk5NTksMCAtMi43MTUyNSwtMS4yMTU2NiAtMi43MTUyNSwtMi43MTUyNnYtMTAuODUxODJjLTAuMDAwMDEsLTAuMDAzMDQgLTAuMDAwMDIsLTAuMDA2MSAtMC4wMDAwMiwtMC4wMDkxNXYtMTAuODYxMDRjMCwtMS40OTk1OSAxLjIxNTY3LC0yLjcxNTI1IDIuNzE1MjUsLTIuNzE1MjVjMC4wMDIxNiwwIDAuMDA0MzEsMC4wMDAwMSAwLjAwNjQ2LDAuMDAwMDFoMjEuNzA5MTJjMC4wMDIxNiwtMC4wMDAwMSAwLjAwNDMyLC0wLjAwMDAxIDAuMDA2NDcsLTAuMDAwMDFjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NyAyLjcxNTI2LDIuNzE1MjVjMCwwLjAwNDgzIC0wLjAwMDAyLDAuMDA5NjUgLTAuMDAwMDQsMC4wMTQ0N3pNMjc2Ljk2NjMxLDIxMi41ODMxM2MxLjQ5MDY2LC0wLjAxMDQzIDIuNjk1ODUsLTEuMjIyMDggMi42OTU4NSwtMi43MTUxOWgwLjAwMDA1di0wLjAwMDAyaC0wLjAwMDA1YzAsLTEuNDk2NTQgLTEuMjEwNzEsLTIuNzEwMzEgLTIuNzA2MSwtMi43MTUyNGgtMTAuODgzMDFjLTEuNDkzNjUsMC4wMDY5NyAtMi43MDIzMSwxLjIxOTk1IC0yLjcwMjMxLDIuNzE1MjNoLTAuMDAwMDV2MC4wMDAwMmgwLjAwMDA1YzAsMS40OTM4OSAxLjIwNjQyLDIuNzA2IDIuNjk4MTQsMi43MTUyMXoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9Ii8+PHBhdGggZD0iTTEzOC40Njg4MSwyMDQuNDM3MzVjMCwtMS40OTk1OSAxLjIxNTY3LC0yLjcxNTI2IDIuNzE1MjUsLTIuNzE1MjZjMC4wMDIxNSwwIDAuMDA0MzEsMC4wMDAwMSAwLjAwNjQ2LDAuMDAwMDFoMjEuNzA5MTFjMC4wMDIxNSwtMC4wMDAwMSAwLjAwNDMyLC0wLjAwMDAxIDAuMDA2NDcsLTAuMDAwMDFjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NyAyLjcxNTI2LDIuNzE1MjZjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjUgLTIuNzE1MjYsMi43MTUyNWMtMC4wMDAwMSwwIC0wLjAwMDAxLDAgLTAuMDAwMDIsMHYwLjAwMDAxaC0xNi4zMDA2MmMtMS40OTUzOCwwLjAwNDkzIC0yLjcwNjExLDEuMjE4NyAtMi43MDYxMSwyLjcxNTI0aC0wLjAwMDA1djAuMDAwMDJoMC4wMDAwNWMwLDEuNDkzMTEgMS4yMDUxOSwyLjcwNDc2IDIuNjk1ODUsMi43MTUxOWgxNi4zMDQ0YzAuMDAyMTUsMCAwLjAwNDMxLC0wLjAwMDAxIDAuMDA2NDYsLTAuMDAwMDFjMS40OTk1OCwwIDIuNzE1MjUsMS4yMTU2NSAyLjcxNTI1LDIuNzE1MjV2MTAuODYxMDRjMCwxLjQ5OTU5IC0xLjIxNTY3LDIuNzE1MjUgLTIuNzE1MjUsMi43MTUyNWMtMC4wMDIxNSwwIC0wLjAwNDMxLC0wLjAwMDAxIC0wLjAwNjQ2LC0wLjAwMDAxaC0yMS43MDkxMmMtMC4wMDIxNSwwLjAwMDAxIC0wLjAwNDMxLDAuMDAwMDEgLTAuMDA2NDcsMC4wMDAwMWMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY3IC0yLjcxNTI2LC0yLjcxNTI1YzAsLTEuNDk5NTkgMS4yMTU2NywtMi43MTUyNiAyLjcxNTI2LC0yLjcxNTI2YzAuMDAwMDEsMCAwLjAwMDAxLDAgMC4wMDAwMiwwdjBoMTYuMzAwNjNjMS40OTUzOCwtMC4wMDQ5MyAyLjcwNjEsLTEuMjE4NyAyLjcwNjEsLTIuNzE1MjVoMC4wMDAwNXYtMC4wMDAwMmgtMC4wMDAwNWMwLC0xLjQ5MzExIC0xLjIwNTE5LC0yLjcwNDc2IC0yLjY5NTg0LC0yLjcxNTE5aC0xNi4zMDQzOWMtMC4wMDIxNSwwIC0wLjAwNDMxLDAgLTAuMDA2NDYsMGMtMC45MDkwMywwIC0xLjcxMzc0LC0wLjQ0NjcxIC0yLjIwNjU2LC0xLjEzMjU5Yy0wLjMyMDIsLTAuNDQ1NTkgLTAuNTA4NzUsLTAuOTkyMTUgLTAuNTA4NzUsLTEuNTgyNzRjMCwtMC4wMDU3MSAwLjAwMDAxLC0wLjAxMTQxIDAuMDAwMDYsLTAuMDE3MTF6Ii8+PHBhdGggZD0iTTE5NS40ODkyMiwyMDEuNzIyMDhjMC4wMDUyOCwwIDAuMDEwNTcsMC4wMDAwMiAwLjAxNTg0LDAuMDAwMDVoMi42OTk0MnYtMC4wMDAwNGg4LjE0NTc4YzEuNDk5NTksMCAyLjcxNTI1LDEuMjE1NjcgMi43MTUyNSwyLjcxNTI1YzAsMC4wMDIxNSAtMC4wMDAwMSwwLjAwNDMxIC0wLjAwMDAxLDAuMDA2NDZ2MjEuNzA5MTJjMC4wMDAwMSwwLjAwMjE1IDAuMDAwMDEsMC4wMDQzMSAwLjAwMDAxLDAuMDA2NDdjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjYgLTIuNzE1MjUsMi43MTUyNmMtMS40OTk1OSwwIC0yLjcxNTI2LC0xLjIxNTY3IC0yLjcxNTI2LC0yLjcxNTI2YzAsLTAuMDAwMDEgMCwtMC4wMDAwMSAwLC0wLjAwMDAyaC0wLjAwMDAxdi0xNi4zMDA2MmMtMC4wMDQ5MywtMS40OTUzOCAtMS4yMTg3LC0yLjcwNjEgLTIuNzE1MjQsLTIuNzA2MXYtMC4wMDAwMWgtMC4wMDAwNGMtMS40OTY1NCwwIC0yLjcxMDMxLDEuMjEwNzEgLTIuNzE1MjQsMi43MDYxdjE2LjI5NDE4YzAuMDAwMDEsMC4wMDIxNSAwLDAuMDA0MzEgMCwwLjAwNjQ3YzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI2IC0yLjcxNTI1LDIuNzE1MjZjLTEuNDk5NTksMCAtMi43MTUyNiwtMS4yMTU2NyAtMi43MTUyNiwtMi43MTUyNmMwLC0wLjAwMDAxIDAsLTAuMDAwMDEgMCwtMC4wMDAwMmgtMC4wMDAwMXYtMTYuMzAwNjNjLTAuMDA0OTMsLTEuNDk1MzggLTEuMjE4NywtMi43MDYxIC0yLjcxNTI0LC0yLjcwNjFoLTAuMDAwMDF2MC4wMDAwMWMtMS40OTY1NCwwIC0yLjcxMDMxLDEuMjEwNzEgLTIuNzE1MjQsMi43MDYxdjE2LjMwMDYyaC0wLjAwMDAxYzAsMC4wMDAwMSAwLDAuMDAwMDEgMCwwLjAwMDAyYzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI2IC0yLjcxNTI2LDIuNzE1MjZjLTEuNDk5NTksMCAtMi43MTUyNSwtMS4yMTU2NyAtMi43MTUyNSwtMi43MTUyNmMwLC0wLjAwMjE1IDAsLTAuMDA0MzEgMCwtMC4wMDY0N3YtMTkuMDAwMjl2MGMwLDAgMCwtMC4wMDAwMSAwLC0wLjAwMDA1di01LjQzMDUxeiIvPjxwYXRoIGQ9Ik0xNzMuNzY3MTcsMjI4Ljg3NDY1Yy0xLjQ5OTU5LDAgLTIuNzE1MjUsLTEuMjE1NjcgLTIuNzE1MjUsLTIuNzE1MjVjMCwtMC4wMDIxNSAwLC0wLjAwNDMxIDAsLTAuMDA2NDZ2LTIxLjcwOTEyYy0wLjAwMDAxLC0wLjAwMjE1IDAsLTAuMDA0MzEgMCwtMC4wMDY0N2MwLC0xLjQ5OTU5IDEuMjE1NjcsLTIuNzE1MjYgMi43MTUyNSwtMi43MTUyNmMxLjQ5OTU5LDAgMi43MTUyNiwxLjIxNTY3IDIuNzE1MjYsMi43MTUyNmMwLDAuMDAwMDEgMCwwLjAwMDAxIDAsMC4wMDAwMnYwdjIxLjcyMjAzdjBjMCwxLjQ5OTU5IC0xLjIxNTY3LDIuNzE1MjUgLTIuNzE1MjYsMi43MTUyNXoiLz48cGF0aCBkPSJNMTcxLjA1MTg3LDE4OC4xNDU3OGMwLC0xLjQ5OTU5IDEuMjE1NjcsLTIuNzE1MjUgMi43MTUyNSwtMi43MTUyNWMxLjQ5OTU5LDAgMi43MTUyNiwxLjIxNTY3IDIuNzE1MjYsMi43MTUyNWMwLDEuNDk5NTkgLTEuMjE1NjcsMi43MTUyNSAtMi43MTUyNiwyLjcxNTI1Yy0xLjQ5OTU5LDAgLTIuNzE1MjUsLTEuMjE1NjYgLTIuNzE1MjUsLTIuNzE1MjV6Ii8+PHBhdGggZD0iTTIxNC40OTYsMjI2LjE1OTM5YzAsLTAuMDAyMTUgLTAuMDAwMDEsLTAuMDA0MzEgMCwtMC4wMDY0N3YtMTMuNTY5ODJ2MHYtOC4xNDU3N2MwLC0xLjQ5OTU5IDEuMjE1NjYsLTIuNzE1MjUgMi43MTUyNSwtMi43MTUyNWMwLjAwMjE2LDAgMC4wMDQzMiwwIDAuMDA2NDgsMC4wMDAwMWgxMy41Njk4MXYtMC4wMDAwMWg4LjE0NTc4YzEuNDk5NTksMCAyLjcxNTI1LDEuMjE1NjcgMi43MTUyNSwyLjcxNTI1YzAsMC4wMDIxNSAwLDAuMDA0MzIgLTAuMDAwMDEsMC4wMDY0N3YxMy41Njk4MmgwLjAwMDAxdjguMTQ1NzdjMCwxLjQ5OTU5IC0xLjIxNTY3LDIuNzE1MjUgLTIuNzE1MjUsMi43MTUyNWMtMC4wMDIxNiwwIC0wLjAwNDMxLDAuMDAwMDEgLTAuMDA2NDcsMGgtMTMuNTY5ODJ2MGgtMi42OTY5M2MtMC4wMDMwNCwwLjAwMDAyIC0wLjAwNjA5LDAuMDAwMDMgLTAuMDA5MTUsMC4wMDAwNWgtMC4wMDkxMXYwLjAwMDA1Yy0xLjQ5NjU0LDAgLTIuNzEwMzEsMS4yMTA3MiAtMi43MTUyNSwyLjcwNjF2MTYuMzAwNjNoLTAuMDAwMDFjMCwwLjAwMDAxIDAsMC4wMDAwMSAwLDAuMDAwMDJjMCwxLjQ5OTU5IC0xLjIxNTY2LDIuNzE1MjYgLTIuNzE1MjYsMi43MTUyNmMtMS40OTk1OSwwIC0yLjcxNTI1LC0xLjIxNTY3IC0yLjcxNTI1LC0yLjcxNTI2YzAsLTAuMDAyMTYgMCwtMC4wMDQzMSAwLjAwMDAxLC0wLjAwNjQ3di0yMS42OTU2OWMtMC4wMDAwNSwtMC4wMDY2MyAtMC4wMDAwNywtMC4wMTMyOCAtMC4wMDAwNywtMC4wMTk5NHpNMjIyLjYzMjY0LDIwNy4xNTI2Yy0xLjQ5NTM4LDAuMDA0OTMgLTIuNzA2MSwxLjIxODcxIC0yLjcwNjEsMi43MTUyNWgtMC4wMDAwNHYxMC44NzAxNWMwLjAwNDkzLDEuNDk1MzggMS4yMTg3MSwyLjcwNjEgMi43MTUyNCwyLjcwNjF2MC4wMDAwM2gxMC44NzAxNWMxLjQ5NTM4LC0wLjAwNDkzIDIuNzA2MSwtMS4yMTg3IDIuNzA2MSwtMi43MTUyNGgwLjAwMDA0di0xMC44NzAxNWMtMC4wMDQ5MywtMS40OTUzOCAtMS4yMTg3LC0yLjcwNjEgLTIuNzE1MjQsLTIuNzA2MXYtMC4wMDAwNHoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9Ii8+PHBhdGggZD0iTTI0OS43OTQ0MiwyMjguODc0NjdjLTEuNDk5NTksMCAtMi43MTUyNSwtMS4yMTU2NyAtMi43MTUyNSwtMi43MTUyNmMwLC0wLjAwMjE1IDAuMDAwMDEsLTAuMDA0MzEgMC4wMDAwMSwtMC4wMDY0NnYtMTkuMDAwMzhoLTAuMDAwMDd2LTUuNDMwNTFoMC4wMDAwN3YtMTkuMDAwMzNjLTAuMDAwMDEsLTAuMDAyMTUgLTAuMDAwMDEsLTAuMDA0MzIgLTAuMDAwMDEsLTAuMDA2NDdjMCwtMS40OTk1OSAxLjIxNTY3LC0yLjcxNTI2IDIuNzE1MjUsLTIuNzE1MjZjMS40OTk1OSwwIDIuNzE1MjYsMS4yMTU2NyAyLjcxNTI2LDIuNzE1MjZjMCwwLjAwMDAxIDAsMC4wMDAwMSAwLDAuMDAwMDJoMC4wMDAwMXYyMS43MjIwM2gtMC4wMDAwMWMwLDAuMDAwMDEgMCwwLjAwMDAzIDAsMC4wMDAwNWMwLDAuMDAwMDEgMCwwLjAwMDAxIDAsMC4wMDAwMmgwLjAwMDAxdjIxLjcyMjAzaC0wLjAwMDAxYzAsMS40OTk1OSAtMS4yMTU2NiwyLjcxNTI2IC0yLjcxNTI2LDIuNzE1MjZ6Ii8+PC9nPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjMwMDoxODcuNS0tPg=="

    const ControlProicon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCwwLDgwLDgwIj48ZGVmcz48bGluZWFyR3JhZGllbnQgeDE9IjI3NC4wOTQ1MiIgeTE9IjIxNC4wOTQ1MiIgeDI9IjIwNS45MDU0OSIgeTI9IjE0NS45MDU0OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIGlkPSJjb2xvci0xIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmZmQ1OGQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmQ1OGQiIHN0b3Atb3BhY2l0eT0iMCIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDAsLTE0MCkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTIyMC4xNjI2LDIyMGMtMTEuMTM1NSwwIC0yMC4xNjI2LC05LjAyNzEgLTIwLjE2MjYsLTIwLjE2MjZ2LTM5LjY3NDhjMCwtMTEuMTM1NSA5LjAyNzEsLTIwLjE2MjYgMjAuMTYyNiwtMjAuMTYyNmgzOS42NzQ4YzExLjEzNTUsMCAyMC4xNjI2LDkuMDI3MSAyMC4xNjI2LDIwLjE2MjZ2MzkuNjc0OGMwLDExLjEzNTUgLTkuMDI3MSwyMC4xNjI2IC0yMC4xNjI2LDIwLjE2MjZ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0idXJsKCNjb2xvci0xKSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjIyLjY0MjI5LDIxNS4wMDAwNWMtOS43NDM1NiwwIC0xNy42NDIyNywtNy44OTg3MSAtMTcuNjQyMjcsLTE3LjY0MjI3di0zNC43MTU0NWMwLC05Ljc0MzU2IDcuODk4NzEsLTE3LjY0MjI4IDE3LjY0MjI3LC0xNy42NDIyOGgzNC43MTU0NWM5Ljc0MzU2LDAgMTcuNjQyMjgsNy44OTg3MiAxNy42NDIyOCwxNy42NDIyOHYzNC43MTU0NWMwLDkuNzQzNTYgLTcuODk4NzIsMTcuNjQyMjcgLTE3LjY0MjI4LDE3LjY0MjI3eiIgZmlsbD0iI2ZmYWIxOSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjEiLz48cGF0aCBkPSJNMjIxLjE2MTQyLDIwMi41MDAwMmMtMi4wMjIxNCwwIC0zLjY2MTQyLC0xLjYzOTI3IC0zLjY2MTQyLC0zLjY2MTQydi0zNy42NzcxNmMwLC0yLjAyMjE0IDEuNjM5MjcsLTMuNjYxNDIgMy42NjE0MiwtMy42NjE0MmgzNy42NzcxNmMyLjAyMjE0LDAgMy42NjE0MiwxLjYzOTI3IDMuNjYxNDIsMy42NjE0MnY5LjQxOTI5YzAsLTEuMDExMDcgLTEuMjI5NDYsLTEuODMwNzEgLTIuNzQ2MDcsLTEuODMwNzFoLTI4LjI1Nzg3Yy0xLjUxNjYxLDAgLTIuNzQ2MDYsMC44MTk2NCAtMi43NDYwNiwxLjgzMDcxdjE4LjgzODU4YzAsMS4wMTEwNyAxLjIyOTQ1LDEuODMwNzEgMi43NDYwNiwxLjgzMDcxaDI4LjI1Nzg3YzEuNTE2NjEsMCAyLjc0NjA3LC0wLjgxOTY0IDIuNzQ2MDcsLTEuODMwNzF2OS40MTkyOWMwLDIuMDIyMTQgLTEuNjM5MjcsMy42NjE0MiAtMy42NjE0MiwzLjY2MTQyeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjY2Y4YjE3IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjo0MC4wMDAwMDAwMDAwMDAwMzo0MC0tPg==";

    const ControlProextensionId = "ControlPro";

    const EXTCONFIGCOMMENTID = '_ExtensionConfig_';

    class ControlPro{
        static extCount = 0;
        constructor(runtime) {
            this.runtime = runtime;
            ControlPro.extCount += 1;
            this.id = ControlPro.extCount;
            this.hideExtraBlocks = true;
            this.branchNumber = 2;
            this.branchNewNumber = 2;
            this.branchSurface =["?"]
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
                    'ControlPro.Control':'控制',
                    'ControlPro.showBlock': '显示不常用积木',
                    'ControlPro.hideBlock': '隐藏不常用积木',
                    'ControlPro.showBlock?':'为了避免杂乱，少量积木被隐藏。\n是否要显示它们？',

                    'ControlPro.Branch':'一些支路',
                    'ControlPro.times':'次',
                    'ControlPro.seconds':'秒',
                    'ControlPro.while':'当',
                    'ControlPro.until':'直到',
                    'ControlPro.cmMenuWait':'等待[a][b][c][d]',
                    'ControlPro.cmWait':'等待[a]次',
                    'ControlPro.cmWaitWhile':'等待[a]次当[b]',
                    'ControlPro.cmWaitWhileNot':'等待[a]次直到[b]',
                    'ControlPro.cmWaitSecondsWhile':'等待[a]秒当[b]',
                    'ControlPro.cmWaitSecondsWhileNot':'等待[a]秒直到[b]',

                    'ControlPro.cnMenuRepeat':'循环[a][b][c][d]',
                    'ControlPro.cnRepeatWhile':'循环[a]次当[b]',
                    'ControlPro.cnRepeatWhileNot':'循环[a]次直到[b]',
                    'ControlPro.cnRepeatSeconds':'循环[a]秒',
                    'ControlPro.cnRepeatSecondsWhile':'循环[a]秒当[b]',
                    'ControlPro.cnRepeatSecondsWhileNot':'循环[a]秒直到[b]',
                    'ControlPro.cnRepeatIf':'循环[a]次，如果[b]',
                    'ControlPro.cnForeverIf':'循环，如果[a]',
                    'ControlPro.cnIfFor':'如果[a]循环[b]次',
                    'ControlPro.cnElseFor':'否则循环[c]次',
                    'ControlPro.cnIfForever':'如果[a]循环',
                    'ControlPro.cnElseForever':'否则循环',
                    
                    'ControlPro.if':'如果',
                    'ControlPro.unless':'除非',
                    'ControlPro.repeatWhile':'循环当',
                    'ControlPro.repeatUntil':'循环直到',
                    'ControlPro.cnIf':'如果[a]',
                    'ControlPro.cnIfNot':'除非[a]',
                    'ControlPro.else':'否则',
                    'ControlPro.cnWhile':'循环当[a]',
                    'ControlPro.cnWhileNot':'循环直到[a]',
    
                    'ControlPro.Branches':'亿些支路',
                    'ControlPro.run':'执行',
                    'ControlPro.repeat':'循环',
                    'ControlPro.cnMenuIfReference':'[a]脚本[b]',
                    'ControlPro.cnIfReference':'执行脚本[a]',
                    'ControlPro.cnWhileReference':'循环脚本[a]',
                    
                    'ControlPro.Dangerous':'⚠危',
                    'ControlPro.setBranch':'自定义支路数量',
                    'ControlPro.inputBranch':'输入支路数量。下方积木会因此更新\n该功能暂且存在问题。新造的积木无法在重开页面被使用',
                    
                    'ControlPro.':'',
    
                    'ControlPro.Tobecontinued':'未完待续'
                },
                en: {
                    'ControlPro.Control':'Control',
                    'ControlPro.showBlock': 'Show Other Blocks',
                    'ControlPro.hideBlock': 'Hide Other Blocks',
                    'ControlPro.showBlock?':'To avoid clutter, a few blocks are hidden.\n Do you want to show them?',

                    'ControlPro.Branch':'Branch',
                    'ControlPro.times':'times',
                    'ControlPro.seconds':'seconds',
                    'ControlPro.while':'while',
                    'ControlPro.until':'until',
                    'ControlPro.cmMenuWait':'wait[a][b][c][d]',
                    'ControlPro.cmWait':'wait[a]times',
                    'ControlPro.cmWaitWhile':'wait[a]times while[b]',
                    'ControlPro.cmWaitWhileNot':'wait[a]times until[b]',
                    'ControlPro.cmWaitSecondsWhile':'wait[a]seconds while[b]',
                    'ControlPro.cmWaitSecondsWhileNot':'wait[a]seconds until[b]',

                    'ControlPro.cnMenuRepeat':'repeat for[a][b][c][d]',
                    'ControlPro.cnRepeatWhileNot':'repeat[a]until[b]',
                    'ControlPro.cnRepeatSeconds':'repeat for[a]seconds',
                    'ControlPro.cnRepeatSecondsWhile':'repeat for[a]seconds while[b]',
                    'ControlPro.cnRepeatSecondsWhileNot':'repeat for[a]seconds until[b]',
                    'ControlPro.cnRepeatIf':'repeat[a],if[b]',
                    'ControlPro.cnForeverIf':'forever,if[a]',
                    'ControlPro.cnIfFor':'if[a]repeat[b]',
                    'ControlPro.cnElseFor':'else repeat[c]',
                    'ControlPro.cnIfForever':'if[a]forever',
                    'ControlPro.cnElseForever':'else forever',

                    'ControlPro.if':'if',
                    'ControlPro.unless':'unless',
                    'ControlPro.repeatWhile':'repeat while',
                    'ControlPro.repeatUntil':'repeat until',
                    'ControlPro.cnIf':'if[a]',
                    'ControlPro.cnIfNot':'unless[a]',
                    'ControlPro.else':'else',
                    'ControlPro.cnWhile':'while[a]',
                    'ControlPro.cnRepeatWhile':'repeat[a]while[b]',
                    'ControlPro.cnWhileNot':'repeat until[a]',

                    'ControlPro.Branches':'Branches',
                    'ControlPro.run':'run',
                    'ControlPro.repeat':'repeat',
                    'ControlPro.cnMenuIfReference':'[a]script[b]',
                    'ControlPro.cnIfReference':'script[a]',
                    'ControlPro.cnWhileReference':'repeat script[a]',
                    
                    'ControlPro.Dangerous':'⚠Dangerous',
                    'ControlPro.setBranch':'Set Branches',
                    'ControlPro.inputBranch':'Input the new number of branches. The blocks below will be changed.\nThis function has a problem now. The created blocks cannot be used next time',

                    'ControlPro.':'',

                    'ControlPro.Tobecontinued':'To be continued'
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
                docsURI:'https://learn.ccw.site/article/94b02f81-cc94-451d-9b2e-7a5404fbaa6e',
                id:ControlProextensionId,
                name:this.formatMessage('ControlPro.Control'),
                blockIconURI:'',
                menuIconURI: ControlProicon,
                color1:'#ffab19',
                color2:'#ffd58d',
                blocks:[
                    {
                        blockType: 'button',
                        hideFromPalette: !this.hideExtraBlocks,
                        text: this.formatMessage('ControlPro.showBlock'),
                        onClick: () => {
                        if (confirm(this.formatMessage('ControlPro.showBlock?'))) {
                            this.hideExtraBlocks = false;
                            this.storeExtConfig();
                            this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE')
                        }
                        }
                    },
                    {
                        blockType: 'button',
                        text: this.formatMessage('ControlPro.hideBlock'),
                        hideFromPalette: this.hideExtraBlocks,
                        onClick: () => {
                            this.hideExtraBlocks = true;
                            this.storeExtConfig();
                            this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE')
                        }
                    },
                    '---',
                    {
                        opcode: 'rTest',
                        blockType: 'reporter',
                        text:'test',
                        filter: ['sprite'],
                        hideFromPalette: 1
                    },
                    {
                        opcode: 'cmTest',
                        blockType: 'command',
                        text:'test',
                        filter: ['sprite'],
                        hideFromPalette: 1
                    },

                    {
                        blockType: Scratch.BlockType.LABEL,
                        text: this.formatMessage('ControlPro.Branch')
                    },
                    {
                        opcode: 'cmMenuWait',
                        blockType: 'command',
                        text:this.formatMessage('ControlPro.cmMenuWait'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:233
                            },
                            b:{
                                menu:'times',
                                defaultValue:0
                            },
                            c:{
                                menu:'while',
                                defaultValue:0
                            }
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode: 'cmWait',
                        blockType: 'command',
                        text:this.formatMessage('ControlPro.cmWait'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:233
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cmWaitWhile',
                        blockType: 'command',
                        text:this.formatMessage('ControlPro.cmWaitWhile'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:233
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cmWaitWhileNot',
                        blockType: 'command',
                        text:this.formatMessage('ControlPro.cmWaitWhileNot'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:233
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cmWaitSecondsWhile',
                        blockType: 'command',
                        text:this.formatMessage('ControlPro.cmWaitSecondsWhile'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:233
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cmWaitSecondsWhileNot',
                        blockType: 'command',
                        text:this.formatMessage('ControlPro.cmWaitSecondsWhileNot'),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:233
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    '---',
                    {
                        opcode: 'cnMenuRepeat',
                        blockType: 'conditional',
                        text:[this.formatMessage('ControlPro.cnMenuRepeat')],
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:233
                            },
                            b:{
                                menu:'times',
                                defaultValue:0
                            },
                            c:{
                                menu:'while',
                                defaultValue:0
                            }
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode: 'cnRepeatWhile',
                        blockType: 'conditional',
                        branchCount: 1,
                        text:[this.formatMessage('ControlPro.cnRepeatWhile')],
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:233
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cnRepeatWhileNot',
                        blockType: 'conditional',
                        branchCount: 1,
                        text:[this.formatMessage('ControlPro.cnRepeatWhileNot')],
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:233
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cnRepeatSeconds',
                        blockType: 'conditional',
                        branchCount: 1,
                        text:[this.formatMessage('ControlPro.cnRepeatSeconds')],
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:233
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cnRepeatSecondsWhile',
                        blockType: 'conditional',
                        branchCount: 1,
                        text:[this.formatMessage('ControlPro.cnRepeatSecondsWhile')],
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:233
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cnRepeatSecondsWhileNot',
                        blockType: 'conditional',
                        branchCount: 1,
                        text:[this.formatMessage('ControlPro.cnRepeatSecondsWhileNot')],
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:233
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cnRepeatIfElse',
                        blockType: 'conditional',
                        branchCount: 2,
                        text:[this.formatMessage('ControlPro.cnRepeatIf'),this.formatMessage('ControlPro.else')],
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:233
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cnForeverIfElse',
                        blockType: 'conditional',
                        branchCount: 2,
                        isTerminal:true,
                        text:[this.formatMessage('ControlPro.cnForeverIf'),this.formatMessage('ControlPro.else')],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    '---',
                    {
                        opcode: 'cnMenuIf',
                        blockType: 'conditional',
                        branchCount: 1,
                        text:['[a][b]'],
                        arguments:{
                            a:{
                                menu:'if'
                            }
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode: 'cnIf',
                        blockType: 'conditional',
                        branchCount: 1,
                        text:[this.formatMessage('ControlPro.cnIf')],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cnIfNot',
                        blockType: 'conditional',
                        branchCount: 1,
                        text:[this.formatMessage('ControlPro.cnIfNot')],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cnIfElse',
                        blockType: 'conditional',
                        branchCount: 2,
                        text:[this.formatMessage('ControlPro.cnIf'),this.formatMessage('ControlPro.else')],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cnWhile',
                        blockType: 'conditional',
                        branchCount: 1,
                        text:[this.formatMessage('ControlPro.cnWhile')],
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cnWhileNot',
                        blockType: 'conditional',
                        branchCount: 1,
                        text:[this.formatMessage('ControlPro.cnWhileNot')],
                        hideFromPalette: this.hideExtraBlocks
                    },

                    {
                        blockType: Scratch.BlockType.LABEL,
                        text: this.formatMessage('ControlPro.Branches')
                    },
                    {
                        opcode: 'cnMenuIfReferenceSixteen',
                        blockType: 'conditional',
                        branchCount: 16,
                        text:[this.formatMessage('ControlPro.cnMenuIfReference'),'2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'],
                        arguments:{
                            a:{
                                menu:'run'
                            },
                            b:{
                                type:'string',
                                defaultValue:0
                            }
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode: 'cnIfReferenceSixteen',
                        blockType: 'conditional',
                        branchCount: 16,
                        text:[this.formatMessage('ControlPro.cnIfReference'),'2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'],
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:0
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cnWhileReferenceSixteen',
                        blockType: 'conditional',
                        branchCount: 16,
                        text:[this.formatMessage('ControlPro.cnWhileReference'),'2','3','4','5','6','7','8','9','10','11','12','13','14','15','16'],
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:0
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        blockType: Scratch.BlockType.LABEL,
                        text: this.formatMessage('ControlPro.Dangerous')
                    },
                    {
                        blockType: 'button',
                        text: this.formatMessage('ControlPro.setBranch'),
                        onClick: () => {
                            this.branchNewNumber=Cast.toNumber(prompt(this.formatMessage('ControlPro.inputBranch')))
                            if (this.branchNewNumber>=2) {
                                this.branchNumber = this.branchNewNumber;
                                this.branchSurface = ["2"];
                                for(let i = 3; i <= this.branchNumber; i++)this.branchSurface.push(String(i));
                                this.runtime.emit('TOOLBOX_EXTENSIONS_NEED_UPDATE')
                            }
                        }
                    },
                    {
                        opcode: 'cnMenuIfReference',
                        blockType: 'conditional',
                        branchCount: this.branchNumber,
                        text:[this.formatMessage('ControlPro.cnMenuIfReference')].concat(this.branchSurface),
                        arguments:{
                            a:{
                                menu:'run'
                            },
                            b:{
                                type:'string',
                                defaultValue:0
                            }
                        },
                        hideFromPalette: ! this.hideExtraBlocks
                    },
                    {
                        opcode: 'cnIfReference',
                        blockType: 'conditional',
                        branchCount: this.branchNumber,
                        text:[this.formatMessage('ControlPro.cnIfReference')].concat(this.branchSurface),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:0
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        opcode: 'cnWhileReference',
                        blockType: 'conditional',
                        branchCount: this.branchNumber,
                        text:[this.formatMessage('ControlPro.cnWhileReference')].concat(this.branchSurface),
                        arguments:{
                            a:{
                                type:'string',
                                defaultValue:0
                            }
                        },
                        hideFromPalette: this.hideExtraBlocks
                    },
                    {
                        blockType: Scratch.BlockType.LABEL,
                        text: this.formatMessage('ControlPro.Tobecontinued')
                    }
                ],
                menus:{
                    times: {
                        acceptReporters:true,
                        items:[
                            {
                                text: this.formatMessage('ControlPro.times'), 
                                value: 0
                            },
                            {
                                text: this.formatMessage('ControlPro.seconds'), 
                                value: 1
                            }
                        ]
                    },
                    while: {
                        acceptReporters:true,
                        items:[
                            {
                                text: this.formatMessage('ControlPro.while'), 
                                value: 0
                            },
                            {
                                text: this.formatMessage('ControlPro.until'), 
                                value: 1
                            }
                        ]
                    },
                    if: {
                        acceptReporters:true,
                        items:[
                            {
                                text: this.formatMessage('ControlPro.if'), 
                                value: 0
                            },
                            {
                                text: this.formatMessage('ControlPro.unless'), 
                                value: 1
                            },
                            {
                                text: this.formatMessage('ControlPro.repeatWhile'), 
                                value: 2
                            },
                            {
                                text: this.formatMessage('ControlPro.repeatUntil'), 
                                value: 3
                            }
                        ]
                    },
                    run: {
                        acceptReporters:true,
                        items:[
                            {
                                text: this.formatMessage('ControlPro.run'), 
                                value: 0
                            },
                            {
                                text: this.formatMessage('ControlPro.repeat'), 
                                value: 1
                            }
                        ]
                    },
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
                `${ControlProextensionId}: Extension config comment does not contain valid line.`,
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
            console.warn(`${ControlProextensionId}: Config comment has invalid JSON`, e);
            return undefined
            }
        }
        parseExtConfig() {
            let config = this.getAllExtConfig();
            if (!config) return false;
            config = config[ControlProextensionId];
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
        config[ControlProextensionId] = this.generateExtConfig()

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
        implementForTarget(target, originalTarget){
            if (age in target)return;
            target[age] = originalTarget ? originalTarget[age] : 0;
        }
        rTest(args,util){
            return 
        }
        cmTest(args,util){
            util.target.stopAll()
        }

        isDefinedStrictly(a){
            ! [0,false,undefined,null,'','0','false','undefined','null'].includes(a)
        }
        isUndefinedStrictly(a){
            [0,false,undefined,null,'','0','false','undefined','null'].includes(a)
        }

        cmMenuWait(args, util){
            if(args.b){
                if ([0,false,undefined,null,'','0','false','undefined','null'].includes(args.d) == args.c) {
                    if (util.stackTimerNeedsInit()) {
                        util.startStackTimer(Math.max(0, 1000*args.a));
                        this.runtime.requestRedraw();
                        util.yield();
                        return;
                    }
                    if (!util.stackTimerFinished()) {
                        util.yield()
                    }
                }
            }
            else{
                const { stackFrame } = util;
                if (typeof stackFrame.i === "undefined") {
                    stackFrame.n = Math.round(Number(args.a));
                    stackFrame.i = 1;
                } 
                else {
                    stackFrame.i += 1;
                }
                if (stackFrame.i > stackFrame.n || ! [0,false,undefined,null,'','0','false','undefined','null'].includes(args.d) == args.c) {
                    return;
                }
                util.yield()
            }
        }
        cmWait(args, util){
            const { stackFrame } = util;
            if (typeof stackFrame.i === "undefined") {
                stackFrame.n = Math.round(Number(args.a));
                stackFrame.i = 1;
            } 
            else {
                stackFrame.i += 1;
            }
            if (stackFrame.i > stackFrame.n) {
                return;
            }
            util.yield()
        }
        cmWaitWhile(args, util){
            const { stackFrame } = util;
            if (typeof stackFrame.i === "undefined") {
                stackFrame.n = Math.round(Number(args.a));
                stackFrame.i = 1;
            } 
            else {
                stackFrame.i += 1;
            }
            if (stackFrame.i > stackFrame.n || [0,false,undefined,null,'','0','false','undefined','null'].includes(args.b)) {
                return;
            }
            util.yield()
        }
        cmWaitWhileNot(args, util){
            const { stackFrame } = util;
            if (typeof stackFrame.i === "undefined") {
                stackFrame.n = Math.round(Number(args.a));
                stackFrame.i = 1;
            } 
            else {
                stackFrame.i += 1;
            }
            if (stackFrame.i > stackFrame.n || (! [0,false,undefined,null,'','0','false','undefined','null'].includes(args.b))) {
                return;
            }
            util.yield()
        }
        cmWaitSecondsWhile(args, util){
            if (! [0,false,undefined,null,'','0','false','undefined','null'].includes(args.b)) {
                if (util.stackTimerNeedsInit()) {
                    util.startStackTimer(Math.max(0, 1000*args.a));
                    this.runtime.requestRedraw();
                    util.yield();
                    return;
                }
                if (!util.stackTimerFinished()) {
                    util.yield()
                }
            }
        }
        cmWaitSecondsWhileNot(args, util){
            if ([0,false,undefined,null,'','0','false','undefined','null'].includes(args.b)) {
                if (util.stackTimerNeedsInit()) {
                    util.startStackTimer(Math.max(0, 1000*args.a));
                    this.runtime.requestRedraw();
                    util.yield();
                    return;
                }
                if (!util.stackTimerFinished()) {
                    util.yield()
                }
            }
        }
        
        cnMenuRepeat(args, util){
            if(args.b){
                if ([0,false,undefined,null,'','0','false','undefined','null'].includes(args.d) == args.c) {
                    if (util.stackTimerNeedsInit()) {
                        util.startStackTimer(Math.max(0, 1000*args.a));
                        this.runtime.requestRedraw();
                        util.startBranch(1,true);
                        return;
                    }
                    if (!util.stackTimerFinished()) {
                        util.startBranch(1,true)
                    }
                }
            }
            else{
                const { stackFrame } = util;
                if (typeof stackFrame.i === "undefined") {
                    stackFrame.n = Math.round(Number(args.a));
                    stackFrame.i = 1;
                } 
                else {
                    stackFrame.i += 1;
                }
                if (stackFrame.i > stackFrame.n || ! [0,false,undefined,null,'','0','false','undefined','null'].includes(args.d) == args.c) {
                    return;
                }
                util.startBranch(1,true)
            }
        }
        cnRepeatWhile(args, util){
            const { stackFrame } = util;
            if (typeof stackFrame.i === "undefined") {
                stackFrame.n = Math.round(Number(args.a));
                stackFrame.i = 1;
            } 
            else {
                stackFrame.i += 1;
            }
            if (stackFrame.i > stackFrame.n || [0,false,undefined,null,'','0','false','undefined','null'].includes(args.b)) {
                return;
            }
            util.startBranch(1,true)
        }
        cnRepeatWhileNot(args, util){
            const { stackFrame } = util;
            if (typeof stackFrame.i === "undefined") {
                stackFrame.n = Math.round(Number(args.a));
                stackFrame.i = 1;
            } 
            else {
                stackFrame.i += 1;
            }
            if (stackFrame.i > stackFrame.n || (! [0,false,undefined,null,'','0','false','undefined','null'].includes(args.b))) {
                return;
            }
            util.startBranch(1,true)
        }
        cnRepeatSeconds(args, util){
            if (util.stackTimerNeedsInit()) {
                util.startStackTimer(Math.max(0, 1000*args.a));
                this.runtime.requestRedraw();
                util.startBranch(1,true);
                return;
            }
            if (!util.stackTimerFinished()) {
                util.startBranch(1,true)
            }
        }
        cnRepeatSecondsWhile(args, util){
            if (! [0,false,undefined,null,'','0','false','undefined','null'].includes(args.b)) {
                if (util.stackTimerNeedsInit()) {
                    util.startStackTimer(Math.max(0, 1000*args.a));
                    this.runtime.requestRedraw();
                    util.startBranch(1,true);
                    return;
                }
                if (!util.stackTimerFinished()) {
                    util.startBranch(1,true)
                }
            }
        }
        cnRepeatSecondsWhileNot(args, util){
            if ([0,false,undefined,null,'','0','false','undefined','null'].includes(args.b)) {
                if (util.stackTimerNeedsInit()) {
                    util.startStackTimer(Math.max(0, 1000*args.a));
                    this.runtime.requestRedraw();
                    util.startBranch(1,true);
                    return;
                }
                if (!util.stackTimerFinished()) {
                    util.startBranch(1,true)
                }
            }
        }
        cnRepeatIfElse(args, util){
            const { stackFrame } = util;
            if (typeof stackFrame.i === "undefined") {
                stackFrame.n = Math.round(Number(args.a));
                stackFrame.i = 1;
            } 
            else {
                stackFrame.i += 1;
            }
            if (stackFrame.i > stackFrame.n) {
                return;
            }
            util.startBranch(1+[0,false,undefined,null,'','0','false','undefined','null'].includes(args.b),true)
        }
        cnForeverIfElse(args, util){
            util.startBranch(1+[0,false,undefined,null,'','0','false','undefined','null'].includes(args.a),true)
        }
        cnMenuIf(args, util){
            switch(args.a){
                case 0 :
                    if (! [0,false,undefined,null,'','0','false','undefined','null'].includes(args.b))util.startBranch()
                case 1 :
                    if ([0,false,undefined,null,'','0','false','undefined','null'].includes(args.b))util.startBranch()
                case 2 :
                    if (! [0,false,undefined,null,'','0','false','undefined','null'].includes(args.b))util.startBranch(1,true)
                default :
                    if ([0,false,undefined,null,'','0','false','undefined','null'].includes(args.b))util.startBranch(1,true)
            }
        }
        cnIf(args, util){
            if (! [0,false,undefined,null,'','0','false','undefined','null'].includes(args.a))util.startBranch()
        }
        cnIfNot(args, util){
            if ([0,false,undefined,null,'','0','false','undefined','null'].includes(args.a))util.startBranch()
        }
        cnIfElse(args, util){
            util.startBranch(1+[0,false,undefined,null,'','0','false','undefined','null'].includes(args.a))
        }
        cnWhile(args, util){
            if (! [0,false,undefined,null,'','0','false','undefined','null'].includes(args.a))util.startBranch(1,true)
        }
        cnWhileNot(args, util){
            if ([0,false,undefined,null,'','0','false','undefined','null'].includes(args.a))util.startBranch(1,true)
        }
        
        cnMenuIfReferenceSixteen(args, util){
            if (! [0,false,undefined,null,'','0','false','undefined','null'].includes(args.b)){
                util.startBranch(Number(args.b),args.a)
            }
        }
        cnIfReferenceSixteen(args, util){
            if (! [0,false,undefined,null,'','0','false','undefined','null'].includes(args.a)){
                util.startBranch(Number(args.a))
            }
        }
        cnWhileReferenceSixteen(args, util){
            if (! [0,false,undefined,null,'','0','false','undefined','null'].includes(args.a)){
                util.startBranch(Number(args.a),true)
            }
        }

        cnMenuIfReference(args, util){
            if (! [0,false,undefined,null,'','0','false','undefined','null'].includes(args.b)){
                util.startBranch(Number(args.b),args.a)
            }
        }
        cnIfReference(args, util){
            if (! [0,false,undefined,null,'','0','false','undefined','null'].includes(args.a)){
                util.startBranch(Number(args.a))
            }
        }
        cnWhileReference(args, util){
            if (! [0,false,undefined,null,'','0','false','undefined','null'].includes(args.a)){
                util.startBranch(Number(args.a),true)
            }
        }
    }

    window.tempExt = {
        Extension: ControlPro,
        info: {
            name: "ControlPro.name",
            description: "ControlPro.descp",
            extensionId: ControlProextensionId,
            iconURL: ControlPropicture,
            insetIconURL: ControlProicon,
            featured: true,
            disabled: false,
            collaborator: "bilioicik @ CCW",
            collaboratorURL: "https://www.ccw.site/student/6218cd094daafc57cebfc1d3"
        },
        l10n: {
            "zh-cn": {
                "ControlPro.name": "控制pro",
                "ControlPro.descp": "永无止境的“驱动”"
            },
            en: {
                "ControlPro.name": "Control pro",
                "ControlPro.descp": "Endless Drive"
            }
        }
    }
})(Scratch);
