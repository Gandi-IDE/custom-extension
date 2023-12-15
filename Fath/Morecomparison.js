// Name: More Comparisons
// ID: nonameawacomparisons
// Description: More comparison blocks.
// By: NOname-awa
const quadrilateral =
"data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI3Ny4wMjc4MSIgaGVpZ2h0PSI1NC44MDY1NCIgdmlld0JveD0iMCwwLDc3LjAyNzgxLDU0LjgwNjU0Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjAxLjUwNDMsLTE1Mi4yMTk3MykiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMjI4LjE3ODc4LDE1NS40NzM3NGw0Ni40MDEwMywxOS44ODYxNmwtMjIuNTM3NjQsMjkuMTY2MzZoLTQ2LjYyMTk5eiIvPjwvZz48L2c+PC9zdmc+";
const cover = 
"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwIDAgNTk5Ljk5OTk4IDI5OS45OTk5OSI+PHBhdGggZmlsbD0iIzFiYzIxYiIgZD0iTTAgMzAwVjBoNjAwdjMwMHoiIHN0eWxlPSJzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIvPjxwYXRoIGZpbGw9IiMwN2E4MDciIGQ9Ik0xNjkuMTk0MDkgNTYuNTE4OTRoMjcuNjI5OTVsLjEwNDI2LjE2MDc0Yy4wNjA4LjA5MTIgMy4xNDA5NSA1LjQyMTczIDYuODQ2NjcgMTEuODUxMzQgMy43MTAwNiA2LjQyNTI3IDYuNzcyODIgMTEuNzM4MzggNi44MDc1NyAxMS43OTkyMS4wNzM4LjEyMTY1LjgxMjQtMS4xNzI5OC04LjM5MzI0IDE0Ljc0NDY1LTMuMzIzNDIgNS43NDc1NS01LjIyMTg5IDkuMDMxODctNS4zMzA1IDkuMjI3MzZsLS4wNzM4LjEzNDY4aC0xMy43NjI4NGMtNy41Njc4MiAwLTEzLjc4ODktLjAxNzQtMTMuODE0OTctLjAzNDgtLjA0NzgtLjAzMDQtMy4zNzk5LTUuNzgyMzEtMTIuNDk0My0yMS41NTY1Ny0xLjM1NTQzLTIuMzQ1OTQtMS4zOTAxOS0yLjQxMTEtMS4zMjUwMi0yLjUxOTcxLjAzNDgtLjA2MDggMy4xMTA1NC01LjM2OTU5IDYuODI5MjktMTEuNzk0ODYgMy43MjMxLTYuNDI5NjEgNi44MTYyNS0xMS43NjAxMSA2Ljg3MjczLTExLjg1MTM0eiIgc3R5bGU9InN0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIi8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDdhODA3IiBzdHJva2UtbGluZWpvaW49ImJldmVsIiBzdHJva2Utd2lkdGg9IjIwMCIgZD0ibTE0NyA2MTQuOTk5OTcgNzIuNzc1NjktNDU4LjczMTIyIDQxLjMxNjMzIDI5Mi4yMTM3MSA1MC4xNjUyNi01OTEuNzMzNzQgNTIuNzYyMjEgMzU5LjU0MjQxIDcxLjMyMTkxLTQ2Ny4yODI4OCIgc3R5bGU9InN0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIi8+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNmNmNTZjIiBzdHJva2UtbGluZWpvaW49ImJldmVsIiBzdHJva2Utd2lkdGg9IjIwMCIgZD0ibTE4MC45NDM1NSA2MTEuNDYyMTUgNTUuMzQwMDQtNDU4LjczMTIyIDMxLjQxNzczIDI5Mi4yMTM3MSAzOC4xNDY2My01OTEuNzMzNzQgNDAuMTIxMzkgMzU5LjU0MjQxIDU0LjIzNDU0LTQ2Ny4yODI4OCIgc3R5bGU9InN0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIi8+PHBhdGggZmlsbD0iIzA3YTgwNyIgZD0iTTM1LjkxNjU2IDI3LjUxMTA4aDI2LjQ4MTI2bC4wOTk5My4xNTQwNmMuMDU4MjkuMDg3NCAzLjAxMDM4IDUuMTk2MzMgNi41NjIwMiAxMS4zNTg2MyAzLjU1NTgxIDYuMTU4MTQgNi40OTEyNCAxMS4yNTAzOCA2LjUyNDU1IDExLjMwODY3LjA3MDc4LjExNjU5Ljc3ODYyLTEuMTI0Mi04LjA0NDMxIDE0LjEzMTY3LTMuMTg1MjQgNS41MDg2LTUuMDA0NzkgOC42NTYzOC01LjEwODg5IDguODQzNzRsLS4wNzA3OC4xMjkwOEg0OS4xNjk2N2MtNy4yNTMyIDAtMTMuMjE1NjUtLjAxNjctMTMuMjQwNjMtLjAzMzMtLjA0NTgtLjAyOTEtMy4yMzkzNy01LjU0MTkxLTExLjk3NDg2LTIwLjY2MDM4LTEuMjk5MDgtMi4yNDg0MS0xLjMzMjM5LTIuMzEwODYtMS4yNjk5NC0yLjQxNDk1LjAzMzMxLS4wNTgzIDIuOTgxMjItNS4xNDYzNiA2LjU0NTM3LTExLjMwNDUxIDMuNTY4MzEtNi4xNjIzIDYuNTMyODgtMTEuMjcxMTkgNi41ODcwMS0xMS4zNTg2M3pNNjkuMDIwNDYgMTEyLjUxODk0SDkwLjMwNzdsLjA4MDMzLjEyMzg0Yy4wNDY4Ni4wNzAzIDIuNDE5OTIgNC4xNzcxMiA1LjI3NDk1IDkuMTMwNzUgMi44NTgzOCA0Ljk1MDI5IDUuMjE4MDUgOS4wNDM3MyA1LjI0NDgzIDkuMDkwNTkuMDU2OS4wOTM3LjYyNTktLjkwMzcxLTYuNDY2NSAxMS4zNTk4OS0yLjU2MDUgNC40MjgxNS00LjAyMzE2IDYuOTU4NTItNC4xMDY4NCA3LjEwOTE0bC0uMDU2OS4xMDM3Nkg3OS42NzQxMWMtNS44MzA1NiAwLTEwLjYyMzU0LS4wMTM0LTEwLjY0MzYyLS4wMjY4LS4wMzY4Mi0uMDIzNC0yLjYwNDAxLTQuNDU0OTMtOS42MjYxMi0xNi42MDgwNy0xLjA0NDI4LTEuODA3NDEtMS4wNzEwNi0xLjg1NzYxLTEuMDIwODUtMS45NDEyOS4wMjY3OC0uMDQ2OSAyLjM5NjQ5LTQuMTM2OTUgNS4yNjE1Ny05LjA4NzI0IDIuODY4NDMtNC45NTM2MyA1LjI1MTUyLTkuMDYwNDcgNS4yOTUwMy05LjEzMDc1ek0yNS4yNzYxMSAxOTQuMzcwNDFoMzUuNzg4MTJsLjEzNTA1LjIwODIxYy4wNzg3OC4xMTgxNiA0LjA2ODM3IDcuMDIyNTggOC44NjgyNSAxNS4zNTA2MyA0LjgwNTUxIDguMzIyNDMgOC43NzI2IDE1LjIwNDMyIDguODE3NjIgMTUuMjgzMS4wOTU2NS4xNTc1NiAxLjA1MjI2LTEuNTE5MzEtMTAuODcxNDkgMTkuMDk4MjUtNC4zMDQ3IDcuNDQ0NjEtNi43NjM3MyAxMS42OTg2Ny02LjkwNDQxIDExLjk1MTg4bC0uMDk1NjUuMTc0NDRINDMuMTg3MDZjLTkuODAyMzUgMC0xNy44NjAzLS4wMjI1LTE3Ljg5NDA2LS4wNDUtLjA2MTktLjAzOTQtNC4zNzc4Ny03LjQ4OTYzLTE2LjE4MzQ0LTI3LjkyMTQ5LTEuNzU1NjQtMy4wMzg2Mi0xLjgwMDY2LTMuMTIzMDEtMS43MTYyNS0zLjI2MzY5LjA0NTAxLS4wNzg4IDQuMDI4OTctNi45NTUwNSA4Ljg0NTc0LTE1LjI3NzQ4IDQuODIyNC04LjMyODA0IDguODI4ODYtMTUuMjMyNDYgOC45MDIwMS0xNS4zNTA2M3pNNDI2LjI3NjExIDI3MS4zNzA0MWgzNS43ODgxMmwuMTM1MDUuMjA4MjFjLjA3ODguMTE4MTYgNC4wNjgzNyA3LjAyMjU4IDguODY4MjUgMTUuMzUwNjMgNC44MDU1MSA4LjMyMjQzIDguNzcyNiAxNS4yMDQzMiA4LjgxNzYyIDE1LjI4MzEuMDk1Ni4xNTc1NiAxLjA1MjI2LTEuNTE5MzEtMTAuODcxNDkgMTkuMDk4MjUtNC4zMDQ3IDcuNDQ0NjEtNi43NjM3MyAxMS42OTg2Ny02LjkwNDQxIDExLjk1MTg4bC0uMDk1Ni4xNzQ0NGgtMTcuODI2NTRjLTkuODAyMzUgMC0xNy44NjAzLS4wMjI1LTE3Ljg5NDA2LS4wNDUtLjA2MTktLjAzOTQtNC4zNzc4Ny03LjQ4OTYzLTE2LjE4MzQ0LTI3LjkyMTQ5LTEuNzU1NjQtMy4wMzg2Mi0xLjgwMDY2LTMuMTIzMDEtMS43MTYyNS0zLjI2MzY5LjA0NS0uMDc4OCA0LjAyODk3LTYuOTU1MDUgOC44NDU3NC0xNS4yNzc0OCA0LjgyMjQtOC4zMjgwNCA4LjgyODg2LTE1LjIzMjQ2IDguOTAyMDEtMTUuMzUwNjN6TTUxNy43MzgxOCAxODQuNzY4ODRINTU0LjQ0OTc4bC4xMzg1My4yMTM1OGMuMDgwOC4xMjEyMSA0LjE3MzM1IDcuMjAzNzkgOS4wOTcwOSAxNS43NDY3NCA0LjkyOTUxIDguNTM3MTggOC45OTg5NyAxNS41OTY2NSA5LjA0NTE1IDE1LjY3NzQ3LjA5ODEuMTYxNjMgMS4wNzk0MS0xLjU1ODUxLTExLjE1MjAyIDE5LjU5MTA2LTQuNDE1NzggNy42MzY3MS02LjkzODI2IDEyLjAwMDU0LTcuMDgyNTcgMTIuMjYwMjlsLS4wOTgxLjE3ODk0SDUzNi4xMTEzYy0xMC4wNTUyOSAwLTE4LjMyMTE3LS4wMjMxLTE4LjM1NTgtLjA0NjItLjA2MzUtLjA0MDQtNC40OTA4NC03LjY4Mjg5LTE2LjYwMTA0LTI4LjY0MTk4LTEuODAwOTQtMy4xMTcwMy0xLjg0NzEyLTMuMjAzNi0xLjc2MDU0LTMuMzQ3OTEuMDQ2Mi0uMDgwOCA0LjEzMjkzLTcuMTM0NTIgOS4wNzQtMTUuNjcxNyA0Ljk0Njg0LTguNTQyOTQgOS4wNTY2OC0xNS42MjU1MiA5LjEzMTcyLTE1Ljc0Njc0ek01MzUuMDgyODMgMjQuNzY4ODRINTU0LjQ5NjE2bC4wNzMzLjExMjk1Yy4wNDI3LjA2NDEgMi4yMDY4OSAzLjgwOTQxIDQuODEwNiA4LjMyNjk4IDIuNjA2NzYgNC41MTQ1MiA0Ljc1ODcxIDguMjQ3NjEgNC43ODMxNCA4LjI5MDM0LjA1MTkuMDg1NS41NzA4LS44MjQxNS01Ljg5NzI2IDEwLjM1OTg4LTIuMzM1MDkgNC4wMzgzNC0zLjY2OSA2LjM0NTk2LTMuNzQ1MzEgNi40ODMzMmwtLjA1MTkuMDk0NmgtOS42NzAwNGMtNS4zMTczIDAtOS42ODgzNS0uMDEyMi05LjcwNjY2LS4wMjQ0LS4wMzM2LS4wMjE0LTIuMzc0NzgtNC4wNjI3Ni04Ljc3ODczLTE1LjE0NjA2LS45NTIzNS0xLjY0ODMxLS45NzY3Ny0xLjY5NDA4LS45MzA5OC0xLjc3MDQuMDI0NC0uMDQyNyAyLjE4NTUyLTMuNzcyNzggNC43OTgzOS04LjI4NzI5IDIuNjE1OTItNC41MTc1NiA0Ljc4OTIzLTguMjYyODcgNC44Mjg5MS04LjMyNjk4ek01ODAuOTk1ODIgOTkuMjA2MTVoMjcuMjMzN2wuMTAyNzYuMTU4NDRjLjA2LjA4OTkgMy4wOTU5MiA1LjM0Mzk3IDYuNzQ4NDggMTEuNjgxMzcgMy42NTY4NSA2LjMzMzEyIDYuNjc1NjkgMTEuNTcwMDQgNi43MDk5NSAxMS42Mjk5OS4wNzI4LjExOTkuODAwNzMtMS4xNTYxNS04LjI3Mjg4IDE0LjUzMzItMy4yNzU3NSA1LjY2NTEzLTUuMTQ3IDguOTAyMzQtNS4yNTQwNSA5LjA5NTAzbC0uMDcyOC4xMzI3NGgtMTMuNTY1NDdjLTcuNDU5MyAwLTEzLjU5MTE1LS4wMTcxLTEzLjYxNjg0LS4wMzQyLS4wNDcxLS4wMy0zLjMzMTQyLTUuNjk5MzktMTIuMzE1MTItMjEuMjQ3NDMtMS4zMzU5OS0yLjMxMjMtMS4zNzAyNS0yLjM3NjUyLTEuMzA2MDItMi40ODM1Ny4wMzQzLS4wNiAzLjA2NTkzLTUuMjkyNTkgNi43MzEzNS0xMS42MjU3MSAzLjY2OTctNi4zMzczOSA2LjcxODUtMTEuNTkxNDUgNi43NzQxNi0xMS42ODEzN3oiIHN0eWxlPSJzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIvPjxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNmNmNTZjIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMi41IiBkPSJNMzkyLjk4NzU5IDMwLjQ2NTY1djI0LjA5Mjc4aDIzLjk2NTk4djEzLjU2ODA0aC0yMy45NjU5OHYyMy44MzkxOGgtMTMuNTY4MDRWNjguMTI2NDdoLTIzLjk2NTk4VjU0LjU1ODQzaDIzLjk2NTk4VjMwLjQ2NTY1Wm0yMy45NjU5OCA3OS4zNzkzOWgtNjEuNVY5Ni4yNzdoNjEuNXoiIHN0eWxlPSJzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIvPjxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjNmNmNTZjIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMS41IiBkPSJtMjc0LjkwNTA5IDE0NS44NDk4OS05LjMzNzY0LTYuMzU0NzhjLjQ3NTUzLTIuODk2NCAxLjc5NDA0LTUuNjk1NTMgMy45NTU1My04LjM5NzM5IDIuMTYxNDktMi43MDE4NyA0Ljc5ODUxLTQuOTE3MzkgNy45MTEwNi02LjY0NjU5IDIuMDM5NjMtMS4xNTI5MyA0LjI2MzI4LTEuOTQ0NDcgNi41NzI2Ni0yLjMzOTYgMS4wMjEwMi0uMTY5MzMgMi4wNTQyNC0uMjU0MzUgMy4wODkyLS4yNTQxOSAxLjI2OTg3LS4wMDYgMi41MzgwMS4wOTQ2IDMuNzkwODIuMzAyMTggMS44MzQ2Ny4zMTM4NSAzLjQ1NjY2Ljg3MjM4IDQuODY1OTUgMS42NzU1OSAxLjM5MDcuNzg5NzcgMi43NDg3OSAxLjYzNTYxIDQuMDcwOTUgMi41MzU0My43NDMyOS41MDcxNiAxLjQ3MjQyIDEuMDM0NzcgMi4xODY1NiAxLjU4MjIxIDEuNzcyNDIgMS4zNDAxMyAzLjU4ODA3IDIuNTgyOTggNS40NDY5NiAzLjcyODU3IDEuNjQ3NjMgMS4wMDY4NiAzLjUyMDA0IDEuNTg3NjIgNS40NDgyNSAxLjY4OTg1LjMwMTc5LjAxOTIuNjA0MTMuMDI4Ny45MDY1My4wMjg1IDEuMTI2NTEuMDE0IDIuMjQ1NjQtLjE4MzU0IDMuMjk5My0uNTgyMzEgMS4zOTYtLjU1NjExIDIuNjEwNy0xLjQ4ODAyIDMuNTA5NC0yLjY5MjM1IDEuNjg1OTYtMi4xODMxMSAzLjAwNDQ3LTQuNTkzMTcgMy45NTU1My03LjIzMDE5bDkuMzM3NjQgNi4yMjUwOWMtLjMwNTI5IDEuOTYyNjgtLjk2NzcgMy44NTI3OC0xLjk1NDQyIDUuNTc2NjUtLjU1ODk1Ljk4OTE2LTEuMTk1NTYgMS45MzIzNy0xLjkwMzg0IDIuODIwNzUtMi4xMzk4OCAyLjcwMTg3LTQuNzc2OSA0LjkxNzM5LTcuOTExMDYgNi42NDY1OS0yLjIzMDk2IDEuMjU0MTItNC42Nzc5NyAyLjA3NzI2LTcuMjEzMzMgMi40MjY0OS0uODQzOTkuMTExNzItMS42OTQ0NC4xNjc2MS0yLjU0NTguMTY3My0xLjM0MTU3LjAwNy0yLjY4MTA2LS4xMDY1MS00LjAwMjIyLS4zMzk3OS0xLjcwNjcxLS4zMTEyNS0zLjI0NzQyLS44MzU2My00LjYyMjEzLTEuNTczMTMtMS43MjY5OC0uOTIwMzktMy4zODE0MS0xLjk3MDg4LTQuOTQ4OTUtMy4xNDIzOC0uNTAwODMtLjM3NjQyLS45OTEyNC0uNzY2NS0xLjQ3MDY4LTEuMTY5OC0xLjU5OTUxLTEuMzgzMzUtMy4zMzk1LTIuNjE1NC01LjIyLTMuNjk2MTUtMS43MzIyMy0uOTg3NDQtMy42Nzg1OC0xLjUzODg5LTUuNjcxMzItMS42MDY4NS0uMjE2ODgtLjAxLS40MzM5NS0uMDE0My0uNjUxMDQtLjAxNDMtMi44NTMxNyAwLTUuMTMzNTQgMS4wOTE1NS02Ljg0MTEyIDMuMjc0NjZzLTMuMDU4NTEgNC42MzY0LTQuMDUyOCA3LjM1OTg4em0uNTE4NzYgMzEuMzg0ODUtOS4zMzc2NC02LjM1NDc4Yy40NzU1My0yLjg5NjQgMS43OTQwNC01LjY5NTUzIDMuOTU1NTMtOC4zOTczOSAyLjE2MTQ5LTIuNzAxODcgNC43OTg1MS00LjkxNzM5IDcuOTExMDYtNi42NDY1OSAyLjAzOTYzLTEuMTUyOTMgNC4yNjMyOC0xLjk0NDQ3IDYuNTcyNjYtMi4zMzk2IDEuMDIxMDItLjE2OTMzIDIuMDU0MjQtLjI1NDM1IDMuMDg5Mi0uMjU0MTkgMS4yNjk4Ny0uMDA2IDIuNTM4MDEuMDk0NiAzLjc5MDgyLjMwMjE4IDEuODM0NjcuMzEzODUgMy40NTY2Ni44NzIzOCA0Ljg2NTk1IDEuNjc1NTkgMS4zOTA3Ljc4OTc3IDIuNzQ4NzkgMS42MzU2MSA0LjA3MDk1IDIuNTM1NDMuNzQzMjkuNTA3MTYgMS40NzI0MiAxLjAzNDc3IDIuMTg2NTYgMS41ODIyMSAxLjc3MjQyIDEuMzQwMTMgMy41ODgwNyAyLjU4Mjk4IDUuNDQ2OTYgMy43Mjg1NyAxLjY0NzYzIDEuMDA2ODYgMy41MjAwNCAxLjU4NzYyIDUuNDQ4MjUgMS42ODk4NS4zMDE3OS4wMTkyLjYwNDEzLjAyODcuOTA2NTMuMDI4NSAxLjEyNjUxLjAxNCAyLjI0NTY0LS4xODM1NCAzLjI5OTMtLjU4MjMxIDEuMzk2LS41NTYxMSAyLjYxMDctMS40ODgwMiAzLjUwOTQtMi42OTIzNSAxLjY4NTk2LTIuMTgzMTEgMy4wMDQ0Ny00LjU5MzE3IDMuOTU1NTMtNy4yMzAxOWw5LjMzNzY0IDYuMjI1MDljLS4zMDUyOSAxLjk2MjY4LS45Njc3IDMuODUyNzgtMS45NTQ0MiA1LjU3NjY1LS41NTg5NS45ODkxNi0xLjE5NTU2IDEuOTMyMzctMS45MDM4NCAyLjgyMDc1LTIuMTM5ODggMi43MDE4Ny00Ljc3NjkgNC45MTczOS03LjkxMTA2IDYuNjQ2NTktMi4yMzA5NiAxLjI1NDEyLTQuNjc3OTcgMi4wNzcyNi03LjIxMzMzIDIuNDI2NDktLjg0Mzk5LjExMTcyLTEuNjk0NDQuMTY3NjEtMi41NDU4LjE2NzMtMS4zNDE1Ny4wMDctMi42ODEwNi0uMTA2NTEtNC4wMDIyMi0uMzM5NzktMS43MDY3MS0uMzExMjUtMy4yNDc0Mi0uODM1NjMtNC42MjIxMy0xLjU3MzEzLTEuNzI2OTgtLjkyMDM5LTMuMzgxNDEtMS45NzA4OC00Ljk0ODk1LTMuMTQyMzgtLjUwMDgzLS4zNzY0Mi0uOTkxMjQtLjc2NjUtMS40NzA2OC0xLjE2OTgtMS41OTk1MS0xLjM4MzM1LTMuMzM5NS0yLjYxNTQtNS4yMi0zLjY5NjE1LTEuNzMyMjMtLjk4NzQ0LTMuNjc4NTgtMS41Mzg4OS01LjY3MTMyLTEuNjA2ODUtLjIxNjg4LS4wMS0uNDMzOTUtLjAxNDMtLjY1MTA0LS4wMTQzLTIuODUzMTcgMC01LjEzMzU0IDEuMDkxNTUtNi44NDExMiAzLjI3NDY2cy0zLjA1ODUxIDQuNjM2NC00LjA1MjggNy4zNTk4OHoiIHN0eWxlPSJzdHJva2UtbWl0ZXJsaW1pdDoxMDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MCIvPjxwYXRoIGZpbGw9IiNmZmYiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0ibTI1NC4wMjkwMiAyMDkuMDU4MjItNTUuMjAwNyAyMS45OTkzMXYtMTAuNzU3MzdsMzkuMjA1ODktMTUuNjUxNDktMzkuMjA1ODktMTUuNjUxNXYtMTAuODU0MjhsNTUuMjAwNzEgMjIuMDk2MjJ6bTIuNTI5NDEgMzUuNDcwMjVoLTYxLjE1MjI2di05LjAxMjk0aDYxLjE1MjI3eiIgc3R5bGU9InN0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2UtZGFzaG9mZnNldDowIi8+PC9zdmc+";
const icon =
"data:image/png;base64,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";

class MoreComparisons {
getInfo() {
  return {
    id: "nonameawacomparisons",
    name: "More comparisons",
    color1: "#00a889",
    color2: "#1e8c76",
    color3: "#1e8c76",
    blockIconURI: icon,
    blocks: [
      "---" + "🌟Made by NOname-awa from Turbowarp",
      {
        opcode: "true",
        blockType: Scratch.BlockType.BOOLEAN,
        text: "true",
        arguments: {},
      },
      {
        opcode: "false",
        blockType: Scratch.BlockType.BOOLEAN,
        text: "false",
        arguments: {},
      },
      {
        opcode: "boolean",
        blockType: Scratch.BlockType.BOOLEAN,
        text: "[a]",
        arguments: {
          a: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: "",
          },
        },
      },
      {
        opcode: "booleanToInt",
        blockType: Scratch.BlockType.REPORTER,
        text: "[a]",
        arguments: {
          a: {
            type: Scratch.ArgumentType.BOOLEAN,
          },
        },
      },
      "---",
      {
        opcode: "equal",
        blockType: Scratch.BlockType.BOOLEAN,
        text: "[a] ⩵ [b]",
        arguments: {
          a: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: "A",
          },
          b: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: "a",
          },
        },
      },
      {
        opcode: "equalNegative",
        blockType: Scratch.BlockType.BOOLEAN,
        text: "[a] =- [b]",
        arguments: {
          a: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "5",
          },
          b: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "-5",
          },
        },
      },
      {
        opcode: "equalPlusMinus",
        blockType: Scratch.BlockType.BOOLEAN,
        text: "[a] =± [b]",
        arguments: {
          a: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "5",
          },
          b: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "-5",
          },
        },
      },
      {
        opcode: "notEqual",
        blockType: Scratch.BlockType.BOOLEAN,
        text: "[a] ≠ [b]",
        arguments: {
          a: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: "\n",
          },
          b: {
            type: Scratch.ArgumentType.STRING,
            defaultValue: "\n",
          },
        },
      },
      {
        opcode: "almostEqual2n",
        blockType: Scratch.BlockType.BOOLEAN,
        text: "[a] ≈ [b]",
        arguments: {
          a: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "5.5",
          },
          b: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "6",
          },
        },
      },
      {
        opcode: "almostEqual3n",
        blockType: Scratch.BlockType.BOOLEAN,
        text: "[a] ≈ [b] ± [c]",
        arguments: {
          a: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "5",
          },
          b: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "6",
          },
          c: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "1",
          },
        },
      },
      {
        opcode: "xor",
        blockType: Scratch.BlockType.BOOLEAN,
        text: "[a] ^ [b]",
        arguments: {
          a: {
            type: Scratch.ArgumentType.BOOLEAN,
          },
          b: {
            type: Scratch.ArgumentType.BOOLEAN,
          },
        },
      },
      "---",
      {
        opcode: "equalOrGreater",
        blockType: Scratch.BlockType.BOOLEAN,
        text: "[a] ≥ [b]",
        arguments: {
          a: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "\n",
          },
          b: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "50",
          },
        },
      },
      {
        opcode: "equalOrLess",
        blockType: Scratch.BlockType.BOOLEAN,
        text: "[a] ≤ [b]",
        arguments: {
          a: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "\n",
          },
          b: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "50",
          },
        },
      },
      {
        opcode: "between",
        blockType: Scratch.BlockType.BOOLEAN,
        text: "[a] < [b] < [c]",
        arguments: {
          a: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "\n",
          },
          b: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "\n",
          },
          c: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "\n",
          },
        },
      },
      {
        opcode: "betweenEqual",
        blockType: Scratch.BlockType.BOOLEAN,
        text: "[a] ≤ [b] ≤ [c]",
        arguments: {
          a: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "\n",
          },
          b: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "\n",
          },
          c: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "\n",
          },
        },
      },
      "---",
      {
        opcode: "vertical",
        blockType: Scratch.BlockType.BOOLEAN,
        text: "[a] ⊥ [b]",
        arguments: {
          a: {
            type: Scratch.ArgumentType.ANGLE,
            defaultValue: "0",
          },
          b: {
            type: Scratch.ArgumentType.ANGLE,
            defaultValue: "90",
          },
        },
      },
      {
        opcode: "segment_one",
        blockType: Scratch.BlockType.BOOLEAN,
        text: "⎵ ([x1],[y1]) ([x2],[y2]) = [n]",
        arguments: {
          x1: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "-100",
          },
          y1: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "0",
          },
          x2: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "0",
          },
          y2: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "0",
          },

          n: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "100",
          },
        },
      },
      {
        opcode: "segment_two",
        blockType: Scratch.BlockType.BOOLEAN,
        text: "⎵ ([x11],[y11]) ([x12],[y12]) = ⎵ ([x21],[y21]) ([x22],[y22])",
        arguments: {
          x11: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "-100",
          },
          y11: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "0",
          },
          x12: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "0",
          },
          y12: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "-100",
          },

          x21: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "100",
          },
          y21: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "0",
          },
          x22: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "0",
          },
          y22: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "100",
          },
        },
      },
      {
        opcode: "segment",
        blockType: Scratch.BlockType.REPORTER,
        text: "⎵ ([x1],[y1]) ([x2],[y2])",
        arguments: {
          x1: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "-100",
          },
          y1: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "0",
          },
          x2: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "0",
          },
          y2: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "0",
          },
        },
      },
      "---",
      {
        opcode: "Squadrilateral_one",
        blockType: Scratch.BlockType.BOOLEAN,
        text: "[IMAGE] ([x1],[y1]) ([x2],[y2]) ([x3],[y3]) ([x4],[y4]) = [n]",
        arguments: {
          x1: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "0",
          },
          y1: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "10",
          },
          x2: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "10",
          },
          y2: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "10",
          },
          x3: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "10",
          },
          y3: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "0",
          },
          x4: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "0",
          },
          y4: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "0",
          },

          n: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "100",
          },

          IMAGE: {
            type: Scratch.ArgumentType.IMAGE,
            dataURI: quadrilateral,
            flipRTL: true,
          },
        },
      },
      {
        opcode: "Squadrilateral",
        blockType: Scratch.BlockType.REPORTER,
        text: "[IMAGE] ([x1],[y1]) ([x2],[y2]) ([x3],[y3]) ([x4],[y4])",
        arguments: {
          x1: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "0",
          },
          y1: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "10",
          },
          x2: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "10",
          },
          y2: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "10",
          },
          x3: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "10",
          },
          y3: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "0",
          },
          x4: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "0",
          },
          y4: {
            type: Scratch.ArgumentType.NUMBER,
            defaultValue: "0",
          },

          IMAGE: {
            type: Scratch.ArgumentType.IMAGE,
            dataURI: quadrilateral,
            flipRTL: true,
          },
        },
      },
    ],
  };
}
true() {
  return true;
}
false() {
  return false;
}
boolean(args) {
  return Scratch.Cast.toBoolean(args.a);
}
booleanToInt(args) {
  if (Scratch.Cast.toBoolean(args.a)) {
    return 1;
  }
  return 0;
}
equal(args) {
  return args.a == args.b;
}
equalNegative(args) {
  if (isNaN(args.a) || isNaN(args.b)) {
    return false;
  } else {
    return args.a == 0 - args.b;
  }
}
equalPlusMinus(args) {
  if (isNaN(args.a) || isNaN(args.b)) {
    return false;
  } else {
    return args.a == 0 - args.b || args.a == args.b;
  }
}
almostEqual2n(args) {
  return Math.round(args.a) == Math.round(args.b);
}
almostEqual3n(args) {
  return Math.abs(args.a - args.b) <= args.c;
}
between(args) {
  return args.a < args.b && args.b < args.c;
}
betweenEqual(args) {
  return args.a <= args.b && args.b <= args.c;
}
notEqual(args) {
  return args.a != args.b;
}
xor(args) {
  return Scratch.Cast.toBoolean(args.a) !== Scratch.Cast.toBoolean(args.b);
}
equalOrGreater(args) {
  return args.a >= args.b;
}
equalOrLess(args) {
  return args.a <= args.b;
}
vertical(args) {
  if (isNaN(args.a) || isNaN(args.b)) {
    return false;
  } else {
    return (args.a - (args.b - 90)) % 180 == 0;
  }
}
segment_one(args) {
  return (
    Math.round(
      Math.sqrt(
        Math.pow(args.x1 - args.x2, 2) + Math.pow(args.y1 - args.y2, 2)
      )
    ) == args.n
  );
}
segment_two(args) {
  return (
    Math.round(
      Math.sqrt(
        Math.pow(args.x11 - args.x12, 2) + Math.pow(args.y11 - args.y12, 2)
      )
    ) ==
    Math.round(
      Math.sqrt(
        Math.pow(args.x21 - args.x22, 2) + Math.pow(args.y21 - args.y22, 2)
      )
    )
  );
}
segment(args) {
  return Math.sqrt(
    Math.pow(args.x1 - args.x2, 2) + Math.pow(args.y1 - args.y2, 2)
  );
}
Squadrilateral_one(args) {
  let points = [
    [args.x1, args.y1],
    [args.x2, args.y2],
    [args.x3, args.y3],
    [args.x4, args.y4],
  ];
  let area = 0;
  let n = points.length;
  for (let i = 0; i < n; i++) {
    let x1 = points[i][0];
    let y1 = points[i][1];
    let x2 = points[(i + 1) % n][0];
    let y2 = points[(i + 1) % n][1];
    area += x1 * y2;
    area -= x2 * y1;
  }
  area = Math.abs(area) / 2;
  return Math.round(area) == args.n;
}
Squadrilateral(args) {
  let points = [
    [args.x1, args.y1],
    [args.x2, args.y2],
    [args.x3, args.y3],
    [args.x4, args.y4],
  ];
  let area = 0;
  let n = points.length;
  for (let i = 0; i < n; i++) {
    let x1 = points[i][0];
    let y1 = points[i][1];
    let x2 = points[(i + 1) % n][0];
    let y2 = points[(i + 1) % n][1];
    area += x1 * y2;
    area -= x2 * y1;
  }
  area = Math.abs(area) / 2;
  return area;
}
}

window.tempExt = {
Extension: MoreComparisons,
info: {
  name: 'comparison.extensionName',
  description: 'comparison.description',
  extensionId: 'nonameawacomparisons',
  iconURL: cover,
  insetIconURL: icon,
  featured: true,
  disabled: false,
  collaborator: 'NOname-awa@TW',
  collaboratorURL: 'https://github.com/NOname-awa',
  collaboratorList: [
        {
            collaborator: 'NOname-awa@TW',
            collaboratorURL: 'https://github.com/NOname-awa'
        },
        {
            collaborator: 'Fath11@Cocrea',
            collaboratorURL: 'https://cocrea.world/@Fath11'
        },
    ]
},
l10n: {
  'zh-cn': {
    'comparison.extensionName': "跟多比较",
    'comparison.description': '跟多比较块',
  },
  'en': {
    'comparison.extensionName': "More Comparisons",
    'comparison.description': 'More comparison blocks.',
  },
},
};
