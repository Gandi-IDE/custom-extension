// Name: Gamepad
// ID: Gamepad
// Description: Directly access gamepads instead of just mapping buttons to keys.

// Some parts of this scripts are based on or designed to be compatible-ish with:
// https://arpruss.github.io/gamepad.js (MIT Licensed)

const Icon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI3NC42ODkxIiBoZWlnaHQ9Ijg4Ljg0MzM1IiB2aWV3Qm94PSIwLDAsNzQuNjg5MSw4OC44NDMzNSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI4Mi42NTU0NSwtMTI4Ljg3MDE1KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTMxMS44NjA1NywxNjkuODk5NjVjMCwwIDAuMDExNiwtMC4xNzk4NyAwLjI2NzE1LC0wLjE3OTg3YzEuNTM3OTksMCAxNi4xOTEwNSwwIDE2LjE5MTA1LDBjMy45NzgzLC00LjE1OTU0IDEwLjA4MTU0LC01LjQ5MTM4IDE1LjQzMDg4LC0zLjM2Njk1YzUuMzQ5MzUsMi4xMjQ0MiA4Ljg3NjQzLDcuMjgwNTYgOC45MTcwNiwxMy4wMzYxN2MxLjM1ODc1LDguNzEyNjIgMi4wODY2LDE3LjUxMjE2IDIuMTc3ODMsMjYuMzI5NjNjMCw1LjI3MDI1IC0yLjE3Nzc4LDguNjQ1NTMgLTYuMzM3MzYsOS40OTQ4N2MtMC43ODExLDAuMTYwMTEgLTEuNTc2NjQsMC4yNDA2NyAtMi4zNzM5OCwwLjIzOTc0Yy0zLjg1MTMsMC4wODEyNiAtNy4yNzQ5NCwtMi40Mzk0NSAtOC4zNDA4NCwtNi4xNDEyMWMtMC44NDkzNCwtMi40MTczNSAtMi4zNzM2MiwtNS43MjgwOCAtMy4zMTAwNywtNy43MDk4NmMtNC45MjMwMSwyLjIyNjMzIC0xMC42NjQzOSwtMC41MTkwOCAtMTIuMDIxNDEsLTUuNzQ4OTFoLTQuOTIxNzljLTEuMzU0NjQsNS4yNDMyNCAtNy4xMTQ0MSw3Ljk5MjQ2IC0xMi4wNDMyMSw1Ljc0ODkxYy0wLjkzNjQ0LDIuMDAzNTcgLTIuNDYxMjcsNS4zMTQyOSAtMy4zMTA2MSw3LjcwOTg2Yy0xLjA2MzgyLDMuNjkzODEgLTQuNDc1NzYsNi4yMTI0OSAtOC4zMTkwNCw2LjE0MTIxYy0wLjc5MDA1LC0wLjAwMDggLTEuNTc3NjcsLTAuMDgxMjMgLTIuMzUxNjYsLTAuMjM5NzRjLTQuMTgxMzYsLTAuNzg0IC02LjM1OTE1LC00LjIyNDYyIC02LjM1OTE1LC05LjQ5NDg3YzAuMDkxMjQsLTguODE3NDcgMC44MTg1OCwtMTcuNjE3IDIuMTc3MzEsLTI2LjMyOTYzYzAuMDQwNjIsLTUuNzU1NjEgMy41Njc3MSwtMTAuOTExNzUgOC45MTcwNSwtMTMuMDM2MTdjMS42NzE2NywtMC42NjM4OSAzLjQxNjY0LC0wLjk5MDIzIDUuMTQ3NzEsLTAuOTk4MjljMy44MDgzNCwtMC4wMTc2OSA3LjU0ODA5LDEuNTA1NTUgMTAuMjgzMTgsNC4zNjUyNHoiIGZpbGw9Im5vbmUiIHN0cm9rZS1vcGFjaXR5PSIwLjE0OTAyIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PHBhdGggZD0iTTMyMC4wMDAwMSwxNzIuNjY0MjF2LTIxLjI5NTEyYzAsMCAwLjE2MzgxLC02LjIyNDczIDQuOTE0MjYsLTYuMjI0NzNjNC43NTA0NSwwIDUuNTk4MTMsMy45MTgxNiA1LjYzNjc0LDUuMzk1NzVjMC4wMzg2MSwxLjQ3NzU5IDAuMDc3MjIsMi45NTUxOCAwLjExNTgzLDQuNDMyNzdjMC4wMzg2MSwxLjQ3NzU5IDEuODAxODgsMy42ODU3IDQuNTg2NjMsMy42ODU3YzIuNzg0NzUsMCA0Ljk4MjExLC0xLjExMjczIDQuOTE0MjcsLTQuMDEzMzFjLTAuMDY1MjMsLTIuNzg4OCAtMC4xNjM4MiwtMTguMjc1MTIgLTAuMTYzODIsLTE4LjI3NTEyIiBmaWxsPSJub25lIiBzdHJva2Utb3BhY2l0eT0iMC4xNDkwMiIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2Utd2lkdGg9IjE1IiBzdHJva2UtbWl0ZXJsaW1pdD0iNCIvPjxwYXRoIGQ9Ik0zMTEuNjgwNywxNjkuNzE5NzdoMTYuNjM4MDhjMy45NzgzLC00LjE1OTU0IDEwLjA4MTU0LC01LjQ5MTM4IDE1LjQzMDg4LC0zLjM2Njk1YzUuMzQ5MzUsMi4xMjQ0MiA4Ljg3NjQzLDcuMjgwNTYgOC45MTcwNiwxMy4wMzYxN2MxLjM1ODc1LDguNzEyNjIgMi4wODY2LDE3LjUxMjE2IDIuMTc3ODMsMjYuMzI5NjNjMCw1LjI3MDI1IC0yLjE3Nzc4LDguNjQ1NTMgLTYuMzM3MzYsOS40OTQ4N2MtMC43ODExLDAuMTYwMTEgLTEuNTc2NjQsMC4yNDA2NyAtMi4zNzM5OCwwLjIzOTc0Yy0zLjg1MTMsMC4wODEyNiAtNy4yNzQ5NCwtMi40Mzk0NSAtOC4zNDA4NCwtNi4xNDEyMWMtMC44NDkzNCwtMi40MTczNSAtMi4zNzM2MiwtNS43MjgwOCAtMy4zMTAwNywtNy43MDk4NmMtNC45MjMwMSwyLjIyNjMzIC0xMC42NjQzOSwtMC41MTkwOCAtMTIuMDIxNDEsLTUuNzQ4OTFoLTQuOTIxNzljLTEuMzU0NjQsNS4yNDMyNCAtNy4xMTQ0MSw3Ljk5MjQ2IC0xMi4wNDMyMSw1Ljc0ODkxYy0wLjkzNjQ0LDIuMDAzNTcgLTIuNDYxMjcsNS4zMTQyOSAtMy4zMTA2MSw3LjcwOTg2Yy0xLjA2MzgyLDMuNjkzODEgLTQuNDc1NzYsNi4yMTI0OSAtOC4zMTkwNCw2LjE0MTIxYy0wLjc5MDA1LC0wLjAwMDggLTEuNTc3NjcsLTAuMDgxMjMgLTIuMzUxNjYsLTAuMjM5NzRjLTQuMTgxMzYsLTAuNzg0IC02LjM1OTE1LC00LjIyNDYyIC02LjM1OTE1LC05LjQ5NDg3YzAuMDkxMjQsLTguODE3NDcgMC44MTg1OCwtMTcuNjE3IDIuMTc3MzEsLTI2LjMyOTYzYzAuMDQwNjIsLTUuNzU1NjEgMy41Njc3MSwtMTAuOTExNzUgOC45MTcwNSwtMTMuMDM2MTdjMS42NzE2NywtMC42NjM4OSAzLjQxNjY0LC0wLjk5MDIzIDUuMTQ3NzEsLTAuOTk4MjljMy44MDgzNCwtMC4wMTc2OSA3LjU0ODA5LDEuNTA1NTUgMTAuMjgzMTgsNC4zNjUyNHoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSI5LjM0NDU0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz48cGF0aCBkPSJNMzIwLjAwMDAxLDE3Mi42NjQyMXYtMjEuMjk1MTJjMCwwIDAuMTYzODEsLTYuMjI0NzMgNC45MTQyNiwtNi4yMjQ3M2M0Ljc1MDQ1LDAgNS41OTgxMywzLjkxODE2IDUuNjM2NzQsNS4zOTU3NWMwLjAzODYxLDEuNDc3NTkgMC4wNzcyMiwyLjk1NTE4IDAuMTE1ODMsNC40MzI3N2MwLjAzODYxLDEuNDc3NTkgMS44MDE4OCwzLjY4NTcgNC41ODY2MywzLjY4NTdjMi43ODQ3NSwwIDQuOTgyMTEsLTEuMTEyNzMgNC45MTQyNywtNC4wMTMzMWMtMC4wNjUyMywtMi43ODg4IC0wLjE2MzgyLC0xOC4yNzUxMiAtMC4xNjM4MiwtMTguMjc1MTIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZkZmZmZiIgc3Ryb2tlLXdpZHRoPSI3IiBzdHJva2UtbWl0ZXJsaW1pdD0iNCIvPjxwYXRoIGQ9Ik0zMzYuMzcxODMsMTcwLjUxNzYxYzAuNzE1OTYsLTAuNjIwNDggMS42NjYwMiwtMC44OTk1NyAyLjYwMzgyLC0wLjc2NDg4YzEuNjk1OTEsMC4yNDQxOSAyLjkxNDk2LDEuNzU3MTkgMi43OTI4LDMuNDY2MjNjLTAuMTIyMTUsMS43MDkwNCAtMS41NDQsMy4wMzMyOCAtMy4yNTczOSwzLjAzMzc5Yy0xLjgwMzk5LC0wLjAwMDExIC0zLjI2NjM4LC0xLjQ2MjUgLTMuMjY2NDksLTMuMjY2NDljLTAuMDAwMDEsLTAuOTQ3NDEgMC40MTEzLC0xLjg0ODE2IDEuMTI3MjYsLTIuNDY4NjR6TTI5OC4yMjE5MywxNzEuODk3NTloNi41MzM1djQuMzU1MTRoNC4zNTU2N3Y2LjUzMzVoLTQuMzU1Njd2NC4zNTU2N2gtNi41MzM1di00LjM1NTY3aC00LjM1NTY3di02LjUzMzVoNC4zNTU2N3pNMzM5LjU5OTY3LDE3Mi45ODY3N2MwLjAwMDE1LC0wLjYwMTM3IC0wLjQ4NzIzLC0xLjA4OSAtMS4wODg2MSwtMS4wODkxN2MtMC4yODg4LC0wLjAwMDA3IC0wLjU2NTgsMC4xMTQ1OCAtMC43NzAwNiwwLjMxODc0Yy0wLjIwNDI3LDAuMjA0MTYgLTAuMzE5MDYsMC40ODExMSAtMC4zMTkxMiwwLjc2OTkxYy0wLjAwMDEzLDAuNjAxMzcgMC40ODcyNiwxLjA4OSAxLjA4ODYzLDEuMDg5MTRjMC42MDEzNywwLjAwMDE0IDEuMDg5LC0wLjQ4NzI1IDEuMDg5MTUsLTEuMDg4NjJ6TTMwMC4zOTk3NywxNzQuMDc0OTF2NC4zNTU2N2gtNC4zNTU2N3YyLjE3Nzg0aDQuMzU1Njd2NC4zNTU2N2gyLjE3Nzgzdi00LjM1NTY3aDQuMzU1Njd2LTIuMTc3ODRoLTQuMzU1Njd2LTQuMzU1Njd6TTMyOS44Mzg1LDE3Ny4wNTA4OGMwLjcxNjA4LC0wLjYyMDUgMS42NjYzLC0wLjg5OTUxIDIuNjA0MTgsLTAuNzY0NjZjMS42OTYsMC4yNDQyMSAyLjkxNTA3LDEuNzU3MzcgMi43OTI3NywzLjQ2NjQ5Yy0wLjEyMjMsMS43MDkxMiAtMS41NDQ0LDMuMDMzMjkgLTMuMjU3ODksMy4wMzM1M2MtMS44MDM5OSwtMC4wMDAxMSAtMy4yNjYzOCwtMS40NjI1IC0zLjI2NjQ5LC0zLjI2NjQ5Yy0wLjAwMDAzLC0wLjk0NzUyIDAuNDExMzUsLTEuODQ4MzcgMS4xMjc0MywtMi40Njg4OHpNMzQyLjkwNDk4LDE3Ny4wNTA4OGMwLjcxNjA4LC0wLjYyMDUgMS42NjYzLC0wLjg5OTUgMi42MDQxOCwtMC43NjQ2NWMxLjY5NTksMC4yNDQyIDIuOTE0OTQsMS43NTcyIDIuNzkyNzksMy40NjYyM2MtMC4xMjIxNSwxLjcwOTAzIC0xLjU0Mzk5LDMuMDMzMjcgLTMuMjU3MzgsMy4wMzM3OWMtMC44NjY0MSwwLjAwMDA5IC0xLjY5NzM1LC0wLjM0NDAxIC0yLjMxMDA0LC0wLjk1NjZjLTAuNjEyNjksLTAuNjEyNTkgLTAuOTU2OTMsLTEuNDQzNDggLTAuOTU2OTgsLTIuMzA5ODljLTAuMDAwMDMsLTAuOTQ3NTIgMC40MTEzNSwtMS44NDgzNyAxLjEyNzQzLC0yLjQ2ODg4ek0zMzMuMDY2NywxNzkuNTE5MTljLTAuMDAwMTUsLTAuNjAxMzggLTAuNDg3NzYsLTEuMDg4NzcgLTEuMDg5MTQsLTEuMDg4NjRjLTAuMjg4OCwwLjAwMDA2IC0wLjU2NTc1LDAuMTE0ODYgLTAuNzY5OTEsMC4zMTkxMmMtMC4yMDQxNiwwLjIwNDI2IC0wLjMxODgxLDAuNDgxMjcgLTAuMzE4NzQsMC43NzAwNmMwLjAwMDE2LDAuNjAxMzcgMC40ODc4LDEuMDg4NzYgMS4wODkxNywxLjA4ODYxYzAuNjAxMzcsLTAuMDAwMTYgMS4wODg3NiwtMC40ODc3OCAxLjA4ODYyLC0xLjA4OTE2ek0zNDUuMDQ0NTcsMTc4LjQzMDU3Yy0wLjI4ODg5LC0wLjAwMDA3IC0wLjU2NTk3LDAuMTE0NjUgLTAuNzcwMjUsMC4zMTg5M2MtMC4yMDQyOCwwLjIwNDI4IC0wLjMxOSwwLjQ4MTM3IC0wLjMxODkzLDAuNzcwMjZjMC4wMDAxNiwwLjYwMTMgMC40ODc2OCwxLjA4ODY2IDEuMDg4OTksMS4wODg2MWMwLjYwMTMxLC0wLjAwMDA1IDEuMDg4NzUsLTAuNDg3NSAxLjA4ODgsLTEuMDg4OGMwLjAwMDA1LC0wLjYwMTMgLTAuNDg3MywtMS4wODg4MyAtMS4wODg2MSwtMS4wODl6TTMzNi4zNzIwMywxODMuNTg0NDVjMC43MTU5MywtMC42MjAzNyAxLjY2NTkyLC0wLjg5OTM4IDIuNjAzNjIsLTAuNzY0NzFjMS42OTU4OSwwLjI0NDIxIDIuOTE0OTMsMS43NTcyIDIuNzkyNzgsMy40NjYyMmMtMC4xMjIxNSwxLjcwOTAyIC0xLjU0Mzk4LDMuMDMzMjYgLTMuMjU3MzYsMy4wMzM3OWMtMC44NjY0LC0wLjAwMDA1IC0xLjY5NzMsLTAuMzQ0MjkgLTIuMzA5ODksLTAuOTU2OTdjLTAuNjEyNTksLTAuNjEyNjkgLTAuOTU2NjksLTEuNDQzNjQgLTAuOTU2NiwtMi4zMTAwNGMwLjAwMDE1LC0wLjk0NzMyIDAuNDExNTIsLTEuODQ3OTIgMS4xMjc0NiwtMi40NjgyOXpNMzM5LjU5OTY3LDE4Ni4wNTMyNGMwLjAwMDE1LC0wLjYwMTM4IC0wLjQ4NzIzLC0xLjA4OTAxIC0xLjA4ODYxLC0xLjA4OTE3Yy0wLjI4ODgsLTAuMDAwMDggLTAuNTY1OCwwLjExNDU4IC0wLjc3MDA2LDAuMzE4NzRjLTAuMjA0MjcsMC4yMDQxNiAtMC4zMTkwNiwwLjQ4MTExIC0wLjMxOTEyLDAuNzY5OTFjLTAuMDAwMTMsMC42MDEzNyAwLjQ4NzI2LDEuMDg5IDEuMDg4NjMsMS4wODkxNGMwLjYwMTM3LDAuMDAwMTQgMS4wODksLTAuNDg3MjQgMS4wODkxNSwtMS4wODg2MnpNMzA1LjA4Njc3LDE5Mi4wMDgxOWMwLjY3NDMsLTEuNjI3NTQgMi4yNjI2MywtMi42ODg2MyA0LjAyNDMzLC0yLjY4ODQ1YzIuNDA1MzksMC4wMDAyNCA0LjM1NTE5LDEuOTUwMjkgNC4zNTUxNCw0LjM1NTY3Yy0wLjAwMDA0LDEuNzYxNyAtMS4wNjEzMSwzLjM0OTkgLTIuNjg4OTMsNC4wMjQwMWMtMS42Mjc2MywwLjY3NDExIC0zLjUwMTA2LDAuMzAxMzYgLTQuNzQ2NjksLTAuOTQ0NDJjLTEuMjQ1NjQsLTEuMjQ1NzggLTEuNjE4MTYsLTMuMTE5MjYgLTAuOTQzODYsLTQuNzQ2OHpNMzI2LjUzMzQzLDE5My42NzUzNWMtMC4wMDAwMiwtMi40MDU0OSAxLjk1LC00LjM1NTU2IDQuMzU1NDksLTQuMzU1NmMxLjE1NTIsLTAuMDAwMDIgMi4yNjMwOSwwLjQ1ODg3IDMuMDc5OTQsMS4yNzU3MmMwLjgxNjg1LDAuODE2ODUgMS4yNzU3NSwxLjkyNDc0IDEuMjc1NzIsMy4wNzk5NWMtMC4wMDAwNSwyLjQwNTQ5IC0xLjk1MDExLDQuMzU1NTEgLTQuMzU1NjEsNC4zNTU0OWMtMi40MDU0OSwtMC4wMDAwMSAtNC4zNTU1MywtMS45NTAwNSAtNC4zNTU1NSwtNC4zNTU1NXpNMzEwLjU5NzYzLDE5Mi4wODM0OGMtMC40NDEwNiwtMC40MTE5NCAtMS4wMzMyOCwtMC42MjIzNyAtMS42MzUzNywtMC41ODExMWMtMS4xNzM2LDAuMDc3MTEgLTIuMDczOTYsMS4wNzIxMiAtMi4wMzM3NCwyLjI0NzU2YzAuMDQwMjEsMS4xNzU0NSAxLjAwNjQ1LDIuMTA2NiAyLjE4MjU5LDIuMTAzMzJjMC41Nzc2LDAuMDAwMDEgMS4xMzE1NSwtMC4yMjk0MyAxLjUzOTk4LC0wLjYzNzg1YzAuNDA4NDIsLTAuNDA4NDMgMC42Mzc4NywtMC45NjIzOCAwLjYzNzg1LC0xLjUzOTk4YzAuMDAwMSwtMC42MDM1MSAtMC4yNTAyNCwtMS4xOCAtMC42OTEzLC0xLjU5MTkzek0zMzIuMzc1NDUsMTkyLjA4MzQ4Yy0wLjQ0MTA2LC0wLjQxMTk0IC0xLjAzMzI3LC0wLjYyMjM3IC0xLjYzNTM3LC0wLjU4MTExYy0xLjE3MzYsMC4wNzcxIC0yLjA3Mzk2LDEuMDcyMTEgLTIuMDMzNzQsMi4yNDc1NmMwLjA0MDIxLDEuMTc1NDUgMS4wMDY0NiwyLjEwNjYgMi4xODI1OSwyLjEwMzMyYzAuNTc3NiwwLjAwMDAxIDEuMTMxNTUsLTAuMjI5NDMgMS41Mzk5OCwtMC42Mzc4NmMwLjQwODQyLC0wLjQwODQzIDAuNjM3ODYsLTAuOTYyMzcgMC42Mzc4NSwtMS41Mzk5OGMwLjAwMDEsLTAuNjAzNTEgLTAuMjUwMjQsLTEuMTggLTAuNjkxMywtMS41OTE5M3oiIGZpbGw9IiMwMGI3NDUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSI5LjM0NDU0IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz48cGF0aCBkPSJNMzQ2LjE0ODMxLDE3OS41MTk1NmMtMC4wMDAwNSwwLjYwMTMgLTAuNTAyNjIsMS4xMDM4OCAtMS4xMDM5MywxLjEwMzkzYy0wLjYwMTMsMC4wMDAwNSAtMS4xMDM5NiwtMC41MDI0MyAtMS4xMDQxMiwtMS4xMDM3M2MtMC4wMDAwNywtMC4yODg4OSAwLjExOTA4LC0wLjU3NjY4IDAuMzIzMzYsLTAuNzgwOTZjMC4yMDQyOCwtMC4yMDQyOCAwLjQ5MjA3LC0wLjMyMzQ0IDAuNzgwOTYsLTAuMzIzMzZjMC42MDEzLDAuMDAwMTYgMS4xMDM3OSwwLjUwMjgyIDEuMTAzNzMsMS4xMDQxM3oiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O25vSG92ZXImcXVvdDs6ZmFsc2UsJnF1b3Q7b3JpZ0l0ZW0mcXVvdDs6WyZxdW90O1BhdGgmcXVvdDsseyZxdW90O2FwcGx5TWF0cml4JnF1b3Q7OnRydWUsJnF1b3Q7c2VnbWVudHMmcXVvdDs6W1tbMzU3Ljc0ODk3LDEzNi40MzY1Ml0sWzEuOTg2NzQsMC4wMDA1M10sWy0wLjk1NDUyLC0wLjAwMDI1XV0sW1szNTUuMjAzOTksMTM3LjQ5MDI5XSxbMC42NzQ5NSwtMC42NzQ5NV0sWy0wLjY3NDk0LDAuNjc0OTZdXSxbWzM1NC4xNTAyMywxNDAuMDM1MjddLFstMC4wMDAyNSwtMC45NTQ1Ml0sWzAuMDAwNTQsMS45ODY3NV1dLFtbMzU3Ljc0ODMzLDE0My42MzIwOV0sWy0xLjk4Njc1LDAuMDAwMTddLFsxLjk4Njc2LC0wLjAwMDE4XV0sW1szNjEuMzQ1NzksMTQwLjAzNDYzXSxbLTAuMDAwMTcsMS45ODY3NF0sWzAuMDAwMTgsLTEuOTg2NzVdXV0sJnF1b3Q7Y2xvc2VkJnF1b3Q7OnRydWUsJnF1b3Q7ZmlsbENvbG9yJnF1b3Q7OlsxLDEsMV0sJnF1b3Q7c3Ryb2tlV2lkdGgmcXVvdDs6OS4zNDQ1NH1dfSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PHBhdGggZD0iTTMzOS42MTQ4LDE3Mi45ODY3OGMtMC4wMDAxNiwwLjYwMTM3IC0wLjUwMjkxLDEuMTAzODkgLTEuMTA0MjksMS4xMDM3NWMtMC42MDEzOCwtMC4wMDAxNCAtMS4xMDM5LC0wLjUwMjkgLTEuMTAzNzYsLTEuMTA0MjhjMC4wMDAwNiwtMC4yODg4IDAuMTE5MjksLTAuNTc2NDUgMC4zMjM1NSwtMC43ODA2MWMwLjIwNDI2LC0wLjIwNDE3IDAuNDkxOTcsLTAuMzIzMjQgMC43ODA3NywtMC4zMjMxN2MwLjYwMTM4LDAuMDAwMTYgMS4xMDM4OSwwLjUwMjkzIDEuMTAzNzQsMS4xMDQzeiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7bm9Ib3ZlciZxdW90OzpmYWxzZSwmcXVvdDtvcmlnSXRlbSZxdW90OzpbJnF1b3Q7UGF0aCZxdW90Oyx7JnF1b3Q7YXBwbHlNYXRyaXgmcXVvdDs6dHJ1ZSwmcXVvdDtzZWdtZW50cyZxdW90OzpbW1szMzkuNzU4NjUsMTE4LjQ0OTgzXSxbMCwwXSxbMC4wMDA0OSwtMS45ODY5OF1dLFtbMzM2LjE2MTgyLDExNC44NTExNV0sWzEuOTg2OTksMC4wMDA1NF0sWy0wLjk1NDIxLC0wLjAwMDI1XV0sW1szMzMuNjE3NDgsMTE1LjkwNDI5XSxbMC42NzQ5LC0wLjY3NDU3XSxbLTAuNjc0OTEsMC42NzQ1Nl1dLFtbMzMyLjU2MzA5LDExOC40NDgxMl0sWzAuMDAwMjEsLTAuOTU0MjFdLFstMC4wMDA0NSwxLjk4Njk4XV0sW1szMzYuMTYwMDEsMTIyLjA0NjcxXSxbLTEuOTg2OTksLTAuMDAwNDddLFsxLjk4Njk4LDAuMDAwNDddXSxbWzMzOS43NTg2NCwxMTguNDQ5ODNdLFstMC4wMDA1MSwxLjk4Njk4XSxbMCwwXV1dLCZxdW90O2Nsb3NlZCZxdW90Ozp0cnVlLCZxdW90O2ZpbGxDb2xvciZxdW90OzpbMSwxLDFdLCZxdW90O3N0cm9rZVdpZHRoJnF1b3Q7OjkuMzQ0NTR9XX0iIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjxwYXRoIGQ9Ik0zMzMuMDgxODMsMTc5LjUxOTE5YzAuMDAwMTUsMC42MDEzOCAtMC41MDIzNywxLjEwNDE0IC0xLjEwMzc0LDEuMTA0MjljLTAuNjAxMzgsMC4wMDAxNiAtMS4xMDQxNSwtMC41MDIzNiAtMS4xMDQzMSwtMS4xMDM3M2MtMC4wMDAwNywtMC4yODg4IDAuMTE5LC0wLjU3NjUgMC4zMjMxNywtMC43ODA3N2MwLjIwNDE2LC0wLjIwNDI2IDAuNDkxODEsLTAuMzIzNDkgMC43ODA2MSwtMC4zMjM1NmMwLjYwMTM4LC0wLjAwMDEzIDEuMTA0MTMsMC41MDIzOSAxLjEwNDI4LDEuMTAzNzd6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtub0hvdmVyJnF1b3Q7OmZhbHNlLCZxdW90O29yaWdJdGVtJnF1b3Q7OlsmcXVvdDtQYXRoJnF1b3Q7LHsmcXVvdDthcHBseU1hdHJpeCZxdW90Ozp0cnVlLCZxdW90O3NlZ21lbnRzJnF1b3Q7OltbWzMxOC4xNzMyNSwxNDAuMDMzNF0sWzAsMF0sWy0wLjAwMDQ4LC0xLjk4Njk5XV0sW1szMTQuNTc0NjYsMTM2LjQzNjQ4XSxbMS45ODY5OSwtMC4wMDA0NV0sWy0wLjk1NDIxLDAuMDAwMjFdXSxbWzMxMi4wMzA4MywxMzcuNDkwODhdLFswLjY3NDU3LC0wLjY3NDldLFstMC42NzQ1NywwLjY3NDldXSxbWzMxMC45Nzc3LDE0MC4wMzUyM10sWy0wLjAwMDI1LC0wLjk1NDIxXSxbMC4wMDA1NCwxLjk4Njk4XV0sW1szMTQuNTc2NCwxNDMuNjMyMDVdLFstMS45ODY5OSwwLjAwMDUxXSxbMS45ODY5OCwtMC4wMDA1MV1dLFtbMzE4LjE3MzI2LDE0MC4wMzM0XSxbMC4wMDA0OCwxLjk4Njk5XSxbMCwwXV1dLCZxdW90O2Nsb3NlZCZxdW90Ozp0cnVlLCZxdW90O2ZpbGxDb2xvciZxdW90OzpbMSwxLDFdLCZxdW90O3N0cm9rZVdpZHRoJnF1b3Q7OjkuMzQ0NTR9XX0iIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIxLjUiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjxwYXRoIGQ9Ik0zMzkuNjE0OCwxODYuMDUzMjNjLTAuMDAwMTYsMC42MDEzOCAtMC41MDI5MSwxLjEwMzg5IC0xLjEwNDI5LDEuMTAzNzVjLTAuNjAxMzgsLTAuMDAwMTQgLTEuMTAzOSwtMC41MDI5IC0xLjEwMzc2LC0xLjEwNDI3YzAuMDAwMDYsLTAuMjg4OCAwLjExOTI5LC0wLjU3NjQ1IDAuMzIzNTUsLTAuNzgwNjFjMC4yMDQyNiwtMC4yMDQxNiAwLjQ5MTk3LC0wLjMyMzI1IDAuNzgwNzcsLTAuMzIzMTdjMC42MDEzOCwwLjAwMDE2IDEuMTAzODksMC41MDI5MyAxLjEwMzc0LDEuMTA0MzF6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtub0hvdmVyJnF1b3Q7OmZhbHNlLCZxdW90O29yaWdJdGVtJnF1b3Q7OlsmcXVvdDtQYXRoJnF1b3Q7LHsmcXVvdDthcHBseU1hdHJpeCZxdW90Ozp0cnVlLCZxdW90O3NlZ21lbnRzJnF1b3Q7OltbWzMzOS43NTg2NSwxNjEuNjIyMzNdLFswLDBdLFswLjAwMDQ5LC0xLjk4Njk5XV0sW1szMzYuMTYxODIsMTU4LjAyMzYzXSxbMS45ODY5OSwwLjAwMDUzXSxbLTAuOTU0MjEsLTAuMDAwMjZdXSxbWzMzMy42MTc0OCwxNTkuMDc2NzhdLFswLjY3NDksLTAuNjc0NTZdLFstMC42NzQ5MSwwLjY3NDU1XV0sW1szMzIuNTYzMDksMTYxLjYyMDZdLFswLjAwMDIxLC0wLjk1NDIxXSxbLTAuMDAwNDUsMS45ODY5OF1dLFtbMzM2LjE2MDAxLDE2NS4yMTkxOV0sWy0xLjk4Njk5LC0wLjAwMDQ4XSxbMS45ODY5OCwwLjAwMDQ3XV0sW1szMzkuNzU4NjQsMTYxLjYyMjMxXSxbLTAuMDAwNTEsMS45ODY5OV0sWzAsMF1dXSwmcXVvdDtjbG9zZWQmcXVvdDs6dHJ1ZSwmcXVvdDtmaWxsQ29sb3ImcXVvdDs6WzEsMSwxXSwmcXVvdDtzdHJva2VXaWR0aCZxdW90Ozo5LjM0NDU0fV19IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMS41IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz48cGF0aCBkPSJNMzMyLjM4NTc4LDE5Mi4wNzI0M2MwLjQ0MTA2LDAuNDExOTMgMC42OTYxOSwwLjk5OTQ4IDAuNjk2MSwxLjYwMjk4YzAuMDAwMDEsMC41Nzc2MSAtMC4yMzM4NSwxLjE0MjI0IC0wLjY0MjI4LDEuNTUwNjdjLTAuNDA4NDIsMC40MDg0MiAtMC45NzMwNiwwLjY0MjMxIC0xLjU1MDY3LDAuNjQyM2MtMS4xNzYxMywwLjAwMzI4IC0yLjE1NzUyLC0wLjk0MjQ5IC0yLjE5NzczLC0yLjExNzk0Yy0wLjA0MDIxLC0xLjE3NTQ1IDAuODc0MjYsLTIuMTg2MDcgMi4wNDc4NiwtMi4yNjMxOGMwLjYwMjEsLTAuMDQxMjYgMS4yMDU2NywwLjE3MzIzIDEuNjQ2NzIsMC41ODUxNnoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O25vSG92ZXImcXVvdDs6ZmFsc2UsJnF1b3Q7b3JpZ0l0ZW0mcXVvdDs6WyZxdW90O1BhdGgmcXVvdDsseyZxdW90O2FwcGx5TWF0cml4JnF1b3Q7OnRydWUsJnF1b3Q7c2VnbWVudHMmcXVvdDs6W1tbMzE1Ljg4OTMxLDE4MS41NDY2Nl0sWzAsMF0sWy0xLjQ1NzI4LC0xLjM2MTA3XV0sW1szMTAuNDg1OTMsMTc5LjYyNjYyXSxbMS45ODkzNywtMC4xMzYzM10sWy0zLjg3NzY1LDAuMjU0NzZdXSxbWzMwMy43NjYzLDE4Ny4wNTI3MV0sWy0wLjEzMjg3LC0zLjg4Mzc1XSxbMC4xMzI4NywzLjg4Mzc1XV0sW1szMTAuOTc3NzIsMTk0LjAwMjIzXSxbLTMuODg2MDEsMC4wMTA4M10sWzEuOTA4NDQsMC4wMDAwNF1dLFtbMzE2LjA2NTkxLDE5MS44OTQ3XSxbLTEuMzQ5NDYsMS4zNDk0Nl0sWzEuMzQ5NDYsLTEuMzQ5NDddXSxbWzMxOC4xNzM0MiwxODYuODA2NV0sWzAuMDAwMDQsMS45MDg0NV0sWzAuMDAwMzIsLTEuOTk0MDJdXSxbWzMxNS44ODkzMSwxODEuNTQ2NjVdLFsxLjQ1NzI5LDEuMzYxMDZdLFswLDBdXV0sJnF1b3Q7Y2xvc2VkJnF1b3Q7OnRydWUsJnF1b3Q7ZmlsbENvbG9yJnF1b3Q7OlsxLDEsMV0sJnF1b3Q7c3Ryb2tlV2lkdGgmcXVvdDs6OS4zNDQ1NH1dfSIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjQuNjcyMjciIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjxwYXRoIGQ9Ik0zMTAuNjA3OTcsMTkyLjA3MjQzYzAuNDQxMDYsMC40MTE5MyAwLjY5NjE5LDAuOTk5NDcgMC42OTYwOSwxLjYwMjk4YzAuMDAwMDEsMC41Nzc2MSAtMC4yMzM4NSwxLjE0MjI1IC0wLjY0MjI3LDEuNTUwNjdjLTAuNDA4NDIsMC40MDg0MiAtMC45NzMwNiwwLjY0MjMxIC0xLjU1MDY3LDAuNjQyM2MtMS4xNzYxMywwLjAwMzI4IC0yLjE1NzUyLC0wLjk0MjQ5IC0yLjE5NzczLC0yLjExNzk0Yy0wLjA0MDIxLC0xLjE3NTQ1IDAuODc0MjUsLTIuMTg2MDcgMi4wNDc4NSwtMi4yNjMxOGMwLjYwMjEsLTAuMDQxMjYgMS4yMDU2NywwLjE3MzIzIDEuNjQ2NzMsMC41ODUxNnoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O25vSG92ZXImcXVvdDs6ZmFsc2UsJnF1b3Q7b3JpZ0l0ZW0mcXVvdDs6WyZxdW90O1BhdGgmcXVvdDsseyZxdW90O2FwcGx5TWF0cml4JnF1b3Q7OnRydWUsJnF1b3Q7c2VnbWVudHMmcXVvdDs6W1tbMjQzLjkzMzkyLDE4MS41NDY2NV0sWzAsMF0sWy0xLjQ1NzI4LC0xLjM2MTA3XV0sW1syMzguNTMwNTQsMTc5LjYyNjYxXSxbMS45ODkzNiwtMC4xMzYzMl0sWy0zLjg3NzY2LDAuMjU0NzddXSxbWzIzMS44MTA5MSwxODcuMDUyNzFdLFstMC4xMzI4NywtMy44ODM3NV0sWzAuMTMyODcsMy44ODM3NV1dLFtbMjM5LjAyMjMyLDE5NC4wMDIyM10sWy0zLjg4NjAxLDAuMDEwODNdLFsxLjkwODQ0LDAuMDAwMDRdXSxbWzI0NC4xMTA1MSwxOTEuODk0NzFdLFstMS4zNDk0NiwxLjM0OTQ2XSxbMS4zNDk0NSwtMS4zNDk0N11dLFtbMjQ2LjIxODAyLDE4Ni44MDY1XSxbMC4wMDAwNSwxLjkwODQ1XSxbMC4wMDAzMiwtMS45OTQwMl1dLFtbMjQzLjkzMzkxLDE4MS41NDY2Nl0sWzEuNDU3MjksMS4zNjEwNl0sWzAsMF1dXSwmcXVvdDtjbG9zZWQmcXVvdDs6dHJ1ZSwmcXVvdDtmaWxsQ29sb3ImcXVvdDs6WzEsMSwxXSwmcXVvdDtzdHJva2VXaWR0aCZxdW90Ozo5LjM0NDU0fV19IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iNC42NzIyNyIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIi8+PHBhdGggZD0iTTMwMi41ODA1NywxNzQuMDYwMDdsMC4wMDc3Myw0LjM1OThsNC4zNTk4MSwwLjAwNzczdjIuMTgzNzdsLTQuMzU5ODEsMC4wMDc3M2wtMC4wMDc3Myw0LjM1OTgxaC0yLjE4Mzc3bC0wLjAwNzczLC00LjM1OTgxbC00LjM1OTgxLC0wLjAwNzczdi0yLjE4Mzc3bDQuMzU5ODEsLTAuMDA3NzNsMC4wMDc3MywtNC4zNTk4eiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7bm9Ib3ZlciZxdW90OzpmYWxzZSwmcXVvdDtvcmlnSXRlbSZxdW90OzpbJnF1b3Q7UGF0aCZxdW90Oyx7JnF1b3Q7YXBwbHlNYXRyaXgmcXVvdDs6dHJ1ZSwmcXVvdDtzZWdtZW50cyZxdW90OzpbWzIxMC4yMzk0NywxMjIuMDQ1MTFdLFsyMTAuMjM5NDcsMTM2LjQzNjUzXSxbMTk1Ljg0ODAzLDEzNi40MzY1M10sWzE5NS44NDgwMywxNDMuNjMyMjVdLFsyMTAuMjM5NDcsMTQzLjYzMjI1XSxbMjEwLjIzOTQ3LDE1OC4wMjM2OF0sWzIxNy40MzUxOCwxNTguMDIzNjhdLFsyMTcuNDM1MTgsMTQzLjYzMjI1XSxbMjMxLjgyNjYxLDE0My42MzIyNV0sWzIzMS44MjY2MSwxMzYuNDM2NTNdLFsyMTcuNDM1MTgsMTM2LjQzNjUzXSxbMjE3LjQzNTE4LDEyMi4wNDUxMV1dLCZxdW90O2Nsb3NlZCZxdW90Ozp0cnVlLCZxdW90O2ZpbGxDb2xvciZxdW90OzpbMSwxLDFdLCZxdW90O3N0cm9rZVdpZHRoJnF1b3Q7OjkuMzQ0NTR9XX0iIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSI0LjY3MjI3IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiLz48cGF0aCBkPSJNMzIyLjYyMzA1LDE3NS44OTAxNGMwLDAuNTY0OTIgLTAuNDU3OTEsMS4wMjI4NyAtMS4wMjI4MiwxLjAyMjg3aC0zLjIwMDQ5Yy0wLjU2NDkyLDAgLTEuMDIyODcsLTAuNDU3OTYgLTEuMDIyODcsLTEuMDIyODd2MGMwLC0wLjU2NDg3IDAuNDU3OTUsLTEuMDIyODMgMS4wMjI4NywtMS4wMjI4M2gzLjIwMDQ5YzAuNTY0OTIsMCAxLjAyMjgyLDAuNDU3OTUgMS4wMjI4MiwxLjAyMjgzeiIgZmlsbD0iIzAwYjc0NSIgc3Ryb2tlPSIjMDBiNzQ1IiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIvPjwvZz48L2c+PC9zdmc+";

var AXIS_DEADZONE = 0.1;
var BUTTON_DEADZONE = 0.05;

/**
 * @param {number|'any'} index 1-indexed index
 * @returns {Gamepad[]}
 */
const getGamepads = (index) => {
  if (index === "any") {
    return navigator.getGamepads().filter((i) => i);
  }
  const gamepad = navigator.getGamepads()[index - 1];
  if (gamepad) {
    return [gamepad];
  }
  return [];
};

/**
 * @param {Gamepad} gamepad
 * @param {number|'any'} buttonIndex 1-indexed index
 * @returns {boolean} false if button does not exist
 */
const isButtonPressed = (gamepad, buttonIndex) => {
  if (buttonIndex === "any") {
    return gamepad.buttons.some((i) => i.pressed);
  }
  const button = gamepad.buttons[buttonIndex - 1];
  if (!button) {
    return false;
  }
  return button.pressed;
};

/**
 * @param {Gamepad} gamepad
 * @param {number} buttonIndex 1-indexed index
 * @returns {number} 0 if button does not exist
 */
const getButtonValue = (gamepad, buttonIndex) => {
  const button = gamepad.buttons[buttonIndex - 1];
  if (!button) {
    return 0;
  }
  const value = button.value;
  if (value < BUTTON_DEADZONE) {
    return 0;
  }
  return value;
};

/**
 * @param {Gamepad} gamepad
 * @param {number} axisIndex 1-indexed index
 * @returns {number} 0 if axis does not exist
 */
const getAxisValue = (gamepad, axisIndex) => {
  const axisValue = gamepad.axes[axisIndex - 1];
  if (typeof axisValue !== "number") {
    return 0;
  }
  if (Math.abs(axisValue) < AXIS_DEADZONE) {
    return 0;
  }
  return axisValue;
};

/**
 * @param {Gamepad.id} id
 * @returns {string}
 */
const matchVendor = (id) => {
  return id.match(/vendor:\s*(\w+)/i)[1];
};

/**
 * @param {Gamepad.id} id
 * @returns {string}
 */
const matchProduct = (id) => {
  return id.match(/product:\s*(\w+)/i)[1];
};

class GamepadExtension {
  constructor(runtime) {
    this.runtime = runtime
    //Generated translation table by Chat GPT cus i am lazy
    this._formatMessage = runtime.getFormatMessage({
      'zh-cn': {
        'Gamepad.Gamepad': "游戏手柄",
        'gamepad [pad] connected?': "游戏手柄 [pad] 已连接？",
        'button [b] on pad [i] pressed?': "手柄 [i] 上的按钮 [b] 被按下？",
        'value of button [b] on pad [i]': "手柄 [i] 上的按钮 [b] 的值",
        'value of axis [b] on pad [i]': "手柄 [i] 上的轴 [b] 的值",
        'direction of axes [axis] on pad [pad]': "手柄 [pad] 上的轴 [axis] 的方向",
        'magnitude of axes [axis] on pad [pad]': "手柄 [pad] 上的轴 [axis] 的大小",
        'rumble strong [s] and weak [w] for [t] sec. on pad [i]': "在手柄 [i] 上震动强 [s] 和弱 [w] [t] 秒",
        'any': "任意",
        'Left bumper (5)': "左肩键 (5)",
        'Right bumper (6)': "右肩键 (6)",
        'Left trigger (7)': "左扳机 (7)",
        'Right trigger (8)': "右扳机 (8)",
        'Select/View (9)': "选择/视图 (9)",
        'Start/Menu (10)': "开始/菜单 (10)",
        'Left stick (11)': "左摇杆 (11)",
        'Right stick (12)': "右摇杆 (12)",
        'D-pad up (13)': "十字键上 (13)",
        'D-pad down (14)': "十字键下 (14)",
        'D-pad left (15)': "十字键左 (15)",
        'D-pad right (16)': "十字键右 (16)",
        'Left stick horizontal (1)': "左摇杆水平 (1)",
        'Left stick vertical (2)': "左摇杆垂直 (2)",
        'Right stick horizontal (3)': "右摇杆水平 (3)",
        'Right stick vertical (4)': "右摇杆垂直 (4)",
        'Left stick (1 & 2)': "左摇杆 (1 & 2)",
        'Right stick (3 & 4)': "右摇杆 (3 & 4)",
        "set axis deadzone to [i]": "将轴死区设置为 [i]",
        "set button deadzone to [i]": "将按钮死区设置为 [i]",
        "get axis deadzone":"获取轴死区",
        "get button deadzone": "获取按钮死区",
      },
      en: {
        'Gamepad.Gamepad': "Gamepad",
        'gamepad [pad] connected?': "Gamepad [pad] connected?",
        'button [b] on pad [i] pressed?': "Button [b] on pad [i] pressed?",
        'value of button [b] on pad [i]': "Value of button [b] on pad [i]",
        'value of axis [b] on pad [i]': "Value of axis [b] on pad [i]",
        'direction of axes [axis] on pad [pad]': "Direction of axes [axis] on pad [pad]",
        'magnitude of axes [axis] on pad [pad]': "Magnitude of axes [axis] on pad [pad]",
        'rumble strong [s] and weak [w] for [t] sec. on pad [i]': "Rumble strong [s] and weak [w] for [t] sec. on pad [i]",
        'any': "any",
        'Left bumper (5)': "Left bumper (5)",
        'Right bumper (6)': "Right bumper (6)",
        'Left trigger (7)': "Left trigger (7)",
        'Right trigger (8)': "Right trigger (8)",
        'Select/View (9)': "Select/View (9)",
        'Start/Menu (10)': "Start/Menu (10)",
        'Left stick (11)': "Left stick (11)",
        'Right stick (12)': "Right stick (12)",
        'D-pad up (13)': "D-pad up (13)",
        'D-pad down (14)': "D-pad down (14)",
        'D-pad left (15)': "D-pad left (15)",
        'D-pad right (16)': "D-pad right (16)",
        'Left stick horizontal (1)': "Left stick horizontal (1)",
        'Left stick vertical (2)': "Left stick vertical (2)",
        'Right stick horizontal (3)': "Right stick horizontal (3)",
        'Right stick vertical (4)': "Right stick vertical (4)",
        'Left stick (1 & 2)': "Left stick (1 & 2)",
        'Right stick (3 & 4)': "Right stick (3 & 4)",
        "set axis deadzone to [i]": "set axis deadzone to [i]",
        "set button deadzone to [i]": "set button deadzone to [i]",
        "get axis deadzone":"Get axis deadzone",
        "get button deadzone": "Get button deadzone",
      },
    });
  }

  formatMessage(id) {
    return this._formatMessage({
      id,
      default: id,
      description: id,
    })
  }

  getInfo() {
    return {
      id: "Gamepad",
      name: this.formatMessage("Gamepad"),
      blockIconURI: Icon,
      color1: '#23a89e',
      color2: '#30D5C8',
      color3: '#2abfb3',
      blocks: [
        {
          opcode: "gamepadConnected",
          blockType: Scratch.BlockType.BOOLEAN,
          text: "gamepad [pad] connected?",
          arguments: {
            pad: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: "1",
              menu: "padMenu",
            },
          },
        },
        {
          opcode: 'gamepadDetail',
          blockType: Scratch.BlockType.REPORTER,
          text: 'get [d] of pad [i]',
          arguments: {
            d: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'id',
              menu: 'detailMenu'
            },
            i: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1',
              menu: 'padMenu'
            }
          }
        },

        '---',

        {
          opcode: "buttonDown",
          blockType: Scratch.BlockType.BOOLEAN,
          text: "button [b] on pad [i] pressed?",
          arguments: {
            b: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: "1",
              menu: "buttonMenu",
            },
            i: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: "1",
              menu: "padMenu",
            },
          },
        },
        {
          opcode: "buttonValue",
          blockType: Scratch.BlockType.REPORTER,
          text: "value of button [b] on pad [i]",
          arguments: {
            b: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: "1",
              menu: "buttonMenu",
            },
            i: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: "1",
              menu: "padMenu",
            },
          },
        },
        {
          opcode: "axisValue",
          blockType: Scratch.BlockType.REPORTER,
          text: "value of axis [b] on pad [i]",
          arguments: {
            b: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: "1",
              menu: "axisMenu",
            },
            i: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: "1",
              menu: "padMenu",
            },
          },
        },

        "---",

        {
          opcode: "axisDirection",
          blockType: Scratch.BlockType.REPORTER,
          text: "direction of axes [axis] on pad [pad]",
          arguments: {
            axis: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: "1",
              menu: "axesGroupMenu",
            },
            pad: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: "1",
              menu: "padMenu",
            },
          },
        },
        {
          opcode: "axisMagnitude",
          blockType: Scratch.BlockType.REPORTER,
          text: "magnitude of axes [axis] on pad [pad]",
          arguments: {
            axis: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: "1",
              menu: "axesGroupMenu",
            },
            pad: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: "1",
              menu: "padMenu",
            },
          },
        },

        /*
        {
          opcode: 'buttonPressedReleased',
          blockType: Scratch.BlockType.EVENT,
          text: 'button [b] [pr] of pad [i]',
          arguments: {
            b: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1'
            },
            pr: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1',
              menu: 'pressReleaseMenu'
            },
            i: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1',
              menu: 'padMenu'
            },
          },
        },

        {
          opcode: 'axisMoved',
          blockType: Scratch.BlockType.EVENT,
          text: 'axis [b] of pad [i] moved',
          arguments: {
            b: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1'
            },
            i: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: '1',
              menu: 'padMenu'
            },
          },
        },
        */

        "---",

        {
          opcode: "rumble",
          blockType: Scratch.BlockType.COMMAND,
          text: "rumble strong [s] and weak [w] for [t] sec. on pad [i]",
          arguments: {
            s: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: "0.25",
            },
            w: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: "0.5",
            },
            t: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: "0.25",
            },
            i: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: "1",
              menu: "padMenu",
            },
          },
        },

        "---",

        {
        opcode: "deadzone",
        blockType: Scratch.BlockType.COMMAND,
        text: "set axis deadzone to [i]",
        arguments: {
          i: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "0.1",
          },
        },
        },

        {
        opcode: "deadzoneButton",
        blockType: Scratch.BlockType.COMMAND,
        text: "set button deadzone to [i]",
        arguments: {
          i: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "0.05",
          },
        },
        },
        {
          opcode: "getdeadzone",
          blockType: Scratch.BlockType.REPORTER,
          text: "get axis deadzone", 
        },
        {
          opcode: "getdeadzoneButton",
          blockType: Scratch.BlockType.REPORTER,
          text: "get button deadzone",
        },
      ],
  menus: {
        padMenu: {
          acceptReporters: true,
          items: [
            {
              text: "any",
              value: "any",
            },
            {
              text: "1",
              value: "1",
            },
            {
              text: "2",
              value: "2",
            },
            {
              text: "3",
              value: "3",
            },
            {
              text: "4",
              value: "4",
            },
          ],
        },
        detailMenu: {
          acceptReporters: true,
          items: ['id', 'vendor', 'product', 'mapping']
        },
        buttonMenu: {
          acceptReporters: true,
          items: [
            // Based on an Xbox controller
            {
              text: "any",
              value: "any",
            },
            {
              text: "A (1)",
              value: "1",
            },
            {
              text: "B (2)",
              value: "2",
            },
            {
              text: "X (3)",
              value: "3",
            },
            {
              text: "Y (4)",
              value: "4",
            },
            {
              text: "Left bumper (5)",
              value: "5",
            },
            {
              text: "Right bumper (6)",
              value: "6",
            },
            {
              text: "Left trigger (7)",
              value: "7",
            },
            {
              text: "Right trigger (8)",
              value: "8",
            },
            {
              text: "Select/View (9)",
              value: "9",
            },
            {
              text: "Start/Menu (10)",
              value: "10",
            },
            {
              text: "Left stick (11)",
              value: "11",
            },
            {
              text: "Right stick (12)",
              value: "12",
            },
            {
              text: "D-pad up (13)",
              value: "13",
            },
            {
              text: "D-pad down (14)",
              value: "14",
            },
            {
              text: "D-pad left (15)",
              value: "15",
            },
            {
              text: "D-pad right (16)",
              value: "16",
            },
          ],
        },
        axisMenu: {
          acceptReporters: true,
          items: [
            // Based on an Xbox controller
            {
              text: "Left stick horizontal (1)",
              value: "1",
            },
            {
              text: "Left stick vertical (2)",
              value: "2",
            },
            {
              text: "Right stick horizontal (3)",
              value: "3",
            },
            {
              text: "Right stick vertical (4)",
              value: "4",
            },
          ],
        },
        axesGroupMenu: {
          acceptReporters: true,
          items: [
            // Based on an Xbox controller
            {
              text: "Left stick (1 & 2)",
              value: "1",
            },
            {
              text: "Right stick (3 & 4)",
              value: "3",
            },
          ],
        },
        /*
        pressReleaseMenu: [
          {
            text: 'press',
            value: 1
          },
          {
            text: 'release',
            value: 0
          }
        ],
        */
      },
    };
  }

  gamepadConnected({ pad }) {
    return getGamepads(pad).length > 0;
  }

  gamepadDetail ({d, i}) {
    for (const gamepad of getGamepads(i)) {
      switch (d) {
        case 'mapping': return gamepad.mapping;
        case 'vendor': return matchVendor(gamepad.id);
        case 'product': return matchProduct(gamepad.id);
        case 'id': return gamepad.id;
      }
    }
    return 'not connected';
  }

  buttonDown({ b, i }) {
    for (const gamepad of getGamepads(i)) {
      if (isButtonPressed(gamepad, b)) {
        return true;
      }
    }
    return false;
  }

  buttonValue({ b, i }) {
    let greatestButton = 0;
    for (const gamepad of getGamepads(i)) {
      const value = getButtonValue(gamepad, b);
      if (value > greatestButton) {
        greatestButton = value;
      }
    }
    return greatestButton;
  }

  axisValue({ b, i }) {
    let greatestAxis = 0;
    for (const gamepad of getGamepads(i)) {
      const axis = getAxisValue(gamepad, b);
      if (Math.abs(axis) > Math.abs(greatestAxis)) {
        greatestAxis = axis;
      }
    }
    return greatestAxis;
  }

  axisDirection({ axis, pad }) {
    let greatestMagnitude = 0;
    let direction = 90;
    for (const gamepad of getGamepads(pad)) {
      const horizontalAxis = getAxisValue(gamepad, axis);
      const verticalAxis = getAxisValue(gamepad, +axis + 1);
      const magnitude = Math.sqrt(horizontalAxis ** 2 + verticalAxis ** 2);
      if (magnitude > greatestMagnitude) {
        greatestMagnitude = magnitude;
        direction =
          (Math.atan2(verticalAxis, horizontalAxis) * 180) / Math.PI + 90;
        if (direction < 0) {
          direction += 360;
        }
      }
    }
    return direction;
  }

  axisMagnitude({ axis, pad }) {
    let greatestMagnitude = 0;
    for (const gamepad of getGamepads(pad)) {
      const horizontalAxis = getAxisValue(gamepad, axis);
      const verticalAxis = getAxisValue(gamepad, +axis + 1);
      const magnitude = Math.sqrt(horizontalAxis ** 2 + verticalAxis ** 2);
      if (magnitude > greatestMagnitude) {
        greatestMagnitude = magnitude;
      }
    }
    return greatestMagnitude;
  }

  rumble({ s, w, t, i }) {
    const gamepads = getGamepads(i);
    for (const gamepad of gamepads) {
      // @ts-ignore
      if (gamepad.vibrationActuator) {
        // @ts-ignore
        gamepad.vibrationActuator.playEffect("dual-rumble", {
          startDelay: 0,
          duration: t * 1000,
          weakMagnitude: w,
          strongMagnitude: s,
        });
      }
    }
  } 

  deadzone({ i }) {
    AXIS_DEADZONE = i;
  }

  deadzoneButton({ i }) {
    BUTTON_DEADZONE = i;
  }

  getdeadzone({ i }) {
    return AXIS_DEADZONE;
  }

  getdeadzoneButton({ i }) {
    return BUTTON_DEADZONE;
  }
}

window.tempExt = {
  Extension: GamepadExtension,
  info: {
    name: 'Gamepad.extensionName',
    description: 'Gamepad.description',
    extensionId: 'GamepadTest',
    iconURL: "https://extensions.turbowarp.org/images/gamepad.svg",
    insetIconURL: Icon,
    featured: true,
    disabled: false,
    collaborator: 'GarboMuffin@TW',
    collaboratorList: [
      {
        collaborator: 'GarboMUffin@TW',
        collaboratorURL:
          'https://github.com/GarboMuffin',
      },
      {
        collaborator: 'DNin01@TW',
        collaboratorURL:
          'https://github.com/DNin01',
      },
      {
        collaborator: 'Meehdrescher@TW',
        collaboratorURL:
          'https://github.com/Meehdrescher',
      },
      {
        collaborator: "Fath11@Cocrea",
        collaboratorURL: "https://cocrea.world/@Fath11",
      },
    ],
  },
  l10n: {
    'zh-cn': {
      'Gamepad.extensionName': 'Gamepad 的测试',
      'Gamepad.description': 'Gamepad 的测试',
    },
    en: {
      'Gamepad.extensionName': 'Gamepad',
      'Gamepad.description': 'Directly access gamepads instead of just mapping buttons to keys.',
    },
  },
}
