/*Icon积木/菜单/小图标*/
const Icon="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI3OS41IiBoZWlnaHQ9Ijc5LjUiIHZpZXdCb3g9IjAsMCw3OS41LDc5LjUiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMDAuMjUsLTE0MC4yNSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMjAwLjI1LDE4MGMwLC0yMS45NTMzMiAxNy43OTY2OCwtMzkuNzUgMzkuNzUsLTM5Ljc1YzIxLjk1MzMyLDAgMzkuNzUsMTcuNzk2NjggMzkuNzUsMzkuNzVjMCwyMS45NTMzMiAtMTcuNzk2NjgsMzkuNzUgLTM5Ljc1LDM5Ljc1Yy0yMS45NTMzMiwwIC0zOS43NSwtMTcuNzk2NjggLTM5Ljc1LC0zOS43NXoiIGZpbGw9IiMwZTdiZWQiIHN0cm9rZT0iIzU5YzBlYiIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxnIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iMi41Ij48cGF0aCBkPSJNMjIxLjg1OTM2LDE4OC44NjM3NGw3LjEzNTQsLTQuMTgzMDgiIHN0cm9rZT0iIzU5YzBlYiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTIyMi4wMTk4MiwxODkuNDIxMzRjMS45ODU2NSwzLjM4NzA4IDAuODQ5NTcsNy43NDI1NCAtMi41Mzc1MSw5LjcyODJjLTMuMzg3MDgsMS45ODU2NSAtNy43NDI1NSwwLjg0OTU3IC05LjcyODIsLTIuNTM3NTFjLTEuOTg1NjUsLTMuMzg3MDggLTAuODQ5NTcsLTcuNzQyNTQgMi41Mzc1MSwtOS43MjgyYzMuMzg3MDgsLTEuOTg1NjUgNy43NDI1NSwtMC44NDk1NyA5LjcyODIsMi41Mzc1MXoiIHN0cm9rZT0iI2ViNTk1OSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48L2c+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNTljMGViIiBzdHJva2Utd2lkdGg9IjIuNSI+PHBhdGggZD0iTTIzOS45OTc5NCwxNTguNTA0ODd2OC4yNzExNiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTIzMi44MTM1NiwxNTEuMzA3NTJjMCwtMy45Njc4MyAzLjIxNjU2LC03LjE4NDM5IDcuMTg0MzksLTcuMTg0MzljMy45Njc4MiwwIDcuMTg0MzgsMy4yMTY1NiA3LjE4NDM4LDcuMTg0MzljMCwzLjk2NzgzIC0zLjIxNjU2LDcuMTg0MzggLTcuMTg0MzgsNy4xODQzOGMtMy45Njc4MiwwIC03LjE4NDM5LC0zLjIxNjU2IC03LjE4NDM5LC03LjE4NDM4eiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48L2c+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIyLjUiPjxwYXRoIGQ9Ik0yNTguMTQwNjQsMTg4Ljg2Mzc0bC03LjEzNTQsLTQuMTgzMDgiIHN0cm9rZT0iIzU5YzBlYiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTI2Ny43MDgzOCwxODYuODgzODNjMy4zODcwOCwxLjk4NTY1IDQuNTIzMTYsNi4zNDExMSAyLjUzNzUxLDkuNzI4MmMtMS45ODU2NSwzLjM4NzA4IC02LjM0MTEyLDQuNTIzMTYgLTkuNzI4MiwyLjUzNzUxYy0zLjM4NzA4LC0xLjk4NTY1IC00LjUyMzE2LC02LjM0MTExIC0yLjUzNzUxLC05LjcyODJjMS45ODU2NSwtMy4zODcwOCA2LjM0MTExLC00LjUyMzE2IDkuNzI4MiwtMi41Mzc1MXoiIHN0cm9rZT0iIzZmZWI1OSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48L2c+PGcgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiPjxnIGZpbGw9IiM4YmQ3ZjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PGc+PHBhdGggZD0iTTI0MS45NTUxNywxNjMuMjQ5MTRsMC45MDUxOCwzLjUxMjA3bDMuNDM5NjUsMS41OTMxbC0xLjYyOTMxLDIuODk2NTVsLTkuNjY3MjQsLTAuMTA4NjJsLTEuMzAzNDUsLTIuODk2NTVsMy40NzU4NiwtMS40NDgyN2wwLjg2ODk3LC0zLjU0ODI4eiIvPjxwYXRoIGQ9Ik0yMzguMDQ0ODIsMTk2Ljc1MDg2bC0wLjg2ODk3LC0zLjU0ODI3bC0zLjQ3NTg2LC0xLjQ0ODI3bDEuMzAzNDUsLTIuODk2NTVsOS42NjcyNCwtMC4xMDg2MmwxLjYyOTMxLDIuODk2NTVsLTMuNDM5NjUsMS41OTMxbC0wLjkwNTE4LDMuNTEyMDd6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIvPjwvZz48Zz48cGF0aCBkPSJNMjIzLjI0OTE0LDE3OC4wNDQ4M2wzLjUxMjA3LC0wLjkwNTE4bDEuNTkzMSwtMy40Mzk2NmwyLjg5NjU1LDEuNjI5MzFsLTAuMTA4NjIsOS42NjcyNGwtMi44OTY1NSwxLjMwMzQ1bC0xLjQ0ODI3LC0zLjQ3NTg2bC0zLjU0ODI4LC0wLjg2ODk3eiIvPjxwYXRoIGQ9Ik0yNTYuNzUwODYsMTgxLjk1NTE3bC0zLjU0ODI3LDAuODY4OTdsLTEuNDQ4MjcsMy40NzU4NmwtMi44OTY1NSwtMS4zMDM0NWwtMC4xMDg2MiwtOS42NjcyNGwyLjg5NjU1LC0xLjYyOTMxbDEuNTkzMSwzLjQzOTY2bDMuNTEyMDcsMC45MDUxOHoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9Ii8+PC9nPjxnPjxwYXRoIGQ9Ik0yNTMuMjI3MTYsMTY5LjUzNzg3bC0xLjg0MzM1LDMuMTIzNDZsMS4zMDU3MSwzLjU1ODdsLTMuMjAwMjcsMC44OTYwN2wtNi43NTg5NywtNi45MTI1OGwxLjEyNjQ5LC0yLjk2OTg1bDMuNDgxODksMS40MzM3MmwzLjEyMzQ2LC0xLjg5NDU2eiIvPjxwYXRoIGQ9Ik0yMjYuNzcyODMsMTkwLjQ2MjEzbDEuODk0NTYsLTMuMTIzNDZsLTEuNDMzNzIsLTMuNDgxODlsMi45Njk4NSwtMS4xMjY0OWw2LjkxMjU4LDYuNzU4OTdsLTAuODk2MDgsMy4yMDAyN2wtMy41NTg3LC0xLjMwNTcxbC0zLjEyMzQ2LDEuODQzMzV6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIvPjwvZz48Zz48cGF0aCBkPSJNMjI5LjUzNzg3LDE2Ni43NzI4NGwzLjEyMzQ2LDEuODQzMzVsMy41NTg3LC0xLjMwNTcxbDAuODk2MDgsMy4yMDAyN2wtNi45MTI1OCw2Ljc1ODk3bC0yLjk2OTg1LC0xLjEyNjQ5bDEuNDMzNzIsLTMuNDgxODlsLTEuODk0NTYsLTMuMTIzNDZ6Ii8+PHBhdGggZD0iTTI1MC40NjIxMywxOTMuMjI3MTZsLTMuMTIzNDYsLTEuODk0NTZsLTMuNDgxODksMS40MzM3MmwtMS4xMjY0OSwtMi45Njk4NWw2Ljc1ODk3LC02LjkxMjU4bDMuMjAwMjcsMC44OTYwN2wtMS4zMDU3MSwzLjU1ODdsMS44NDMzNSwzLjEyMzQ2eiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iLz48L2c+PC9nPjxnIHN0cm9rZS1saW5lY2FwPSJidXR0Ij48cGF0aCBkPSJNMjI5LjQ1NDE1LDE3OS43YzAsLTUuODI0MzEgNC43MjE1NCwtMTAuNTQ1ODUgMTAuNTQ1ODUsLTEwLjU0NTg1YzUuODI0MzEsMCAxMC41NDU4NCw0LjcyMTU0IDEwLjU0NTg0LDEwLjU0NTg1YzAsNS44MjQzMSAtNC43MjE1NCwxMC41NDU4NSAtMTAuNTQ1ODQsMTAuNTQ1ODVjLTUuODI0MzEsMCAtMTAuNTQ1ODUsLTQuNzIxNTMgLTEwLjU0NTg1LC0xMC41NDU4NXoiIGZpbGw9IiM1OWMwZWIiLz48cGF0aCBkPSJNMjMxLjk4MDcyLDE3OS43YzAsLTQuNDI4OTIgMy41OTAzNiwtOC4wMTkyOCA4LjAxOTI4LC04LjAxOTI4YzQuNDI4OTIsMCA4LjAxOTI4LDMuNTkwMzUgOC4wMTkyOCw4LjAxOTI4YzAsNC40Mjg5MiAtMy41OTAzNSw4LjAxOTI4IC04LjAxOTI4LDguMDE5MjhjLTQuNDI4OTIsMCAtOC4wMTkyOCwtMy41OTAzNSAtOC4wMTkyOCwtOC4wMTkyOHoiIGZpbGw9IiNmZmZmZmYiLz48L2c+PC9nPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjM5Ljc1OjM5Ljc1LS0+";
/*insetIcon大图标*/
const insetIcon="data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI2MDAiIGhlaWdodD0iMzcyIiB2aWV3Qm94PSIwLDAsNjAwLDM3MiI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjAsNikiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNLTYwLDM2NnYtMzcyaDYwMHYzNzJ6IiBmaWxsPSIjMGU3YmVkIiBzdHJva2U9IiMwOTBlM2UiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48Zz48ZyBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjcuNSI+PHBhdGggZD0iTTE5Mi44NjY2MSwyMzMuNzczNTdsLTMwLjU1OTU5LDE3LjkxNTM2IiBzdHJva2U9IiM1OWMwZWIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0xNjIuOTk0MjQsMjU0LjA3NzAyYzguNTA0MTcsMTQuNTA2MjQgMy42Mzg1NSwzMy4xNTk4NiAtMTAuODY3NjgsNDEuNjY0MDdjLTE0LjUwNjI0LDguNTA0MTcgLTMzLjE1OTksMy42Mzg1NSAtNDEuNjY0MDcsLTEwLjg2NzY4Yy04LjUwNDE3LC0xNC41MDYyNCAtMy42Mzg1NSwtMzMuMTU5ODYgMTAuODY3NjgsLTQxLjY2NDA3YzE0LjUwNjI0LC04LjUwNDE3IDMzLjE1OTksLTMuNjM4NTUgNDEuNjY0MDcsMTAuODY3Njh6IiBzdHJva2U9IiNlYjU5NTkiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PC9nPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzU5YzBlYiIgc3Ryb2tlLXdpZHRoPSI3LjUiPjxwYXRoIGQ9Ik0yMzkuOTkxMTgsMTIxLjY2NzUzdjM1LjQyMzg0IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMjA5LjIyMTgyLDkwLjg0MjYyYzAsLTE2Ljk5MzQ4IDEzLjc3NTkzLC0zMC43Njk0IDMwLjc2OTQxLC0zMC43Njk0YzE2Ljk5MzQzLDAgMzAuNzY5MzYsMTMuNzc1OTIgMzAuNzY5MzYsMzAuNzY5NDFjMCwxNi45OTM0OCAtMTMuNzc1OTMsMzAuNzY5MzcgLTMwLjc2OTM2LDMwLjc2OTM3Yy0xNi45OTM0NCwwIC0zMC43Njk0MSwtMTMuNzc1OTMgLTMwLjc2OTQxLC0zMC43NjkzN3oiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PC9nPjxnIGZpbGw9Im5vbmUiIHN0cm9rZS13aWR0aD0iNy41Ij48cGF0aCBkPSJNMjg3LjEzMzQsMjMzLjc3MzU3bDMwLjU1OTU5LDE3LjkxNTM2IiBzdHJva2U9IiM1OWMwZWIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0zNTguNjY5ODQsMjQzLjIwOTM0YzE0LjUwNjI0LDguNTA0MTcgMTkuMzcxODUsMjcuMTU3NzkgMTAuODY3NjgsNDEuNjY0MDdjLTguNTA0MTcsMTQuNTA2MjQgLTI3LjE1NzgzLDE5LjM3MTg1IC00MS42NjQwNywxMC44Njc2OWMtMTQuNTA2MjQsLTguNTA0MTcgLTE5LjM3MTg1LC0yNy4xNTc4IC0xMC44Njc2OCwtNDEuNjY0MDdjOC41MDQxNywtMTQuNTA2MjQgMjcuMTU3NzksLTE5LjM3MTg1IDQxLjY2NDA3LC0xMC44Njc2OHoiIHN0cm9rZT0iIzZmZWI1OSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48L2c+PGcgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiPjxnIGZpbGw9IiM4YmQ3ZjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PGc+PHBhdGggZD0iTTI0OC4zNzM2MywxNDEuOTg2MzZsMy44NzY3MiwxNS4wNDE1NGwxNC43MzEzOSw2LjgyMjk1bC02Ljk3ODA0LDEyLjQwNTM4bC00MS40MDI5OSwtMC40NjUybC01LjU4MjQ0LC0xMi40MDUzOGwxNC44ODY0NiwtNi4yMDI2N2wzLjcyMTY0LC0xNS4xOTY2MnoiLz48cGF0aCBkPSJNMjMxLjYyNjMzLDI4NS40Njc5OWwtMy43MjE2NCwtMTUuMTk2NThsLTE0Ljg4NjQ2LC02LjIwMjY3bDUuNTgyNDQsLTEyLjQwNTM4bDQxLjQwMjk5LC0wLjQ2NTJsNi45NzgwMywxMi40MDUzOGwtMTQuNzMxMzgsNi44MjI5NWwtMy44NzY3MiwxNS4wNDE1NHoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9Ii8+PC9nPjxnPjxwYXRoIGQ9Ik0xNjguMjU5MTksMjA1LjM1MzU1bDE1LjA0MTU0LC0zLjg3NjcxbDYuODIyOTUsLTE0LjczMTQzbDEyLjQwNTM4LDYuOTc4MDNsLTAuNDY1Miw0MS40MDI5OWwtMTIuNDA1MzgsNS41ODI0M2wtNi4yMDI2NywtMTQuODg2NDZsLTE1LjE5NjYyLC0zLjcyMTY0eiIvPjxwYXRoIGQ9Ik0zMTEuNzQwODIsMjIyLjEwMDgxbC0xNS4xOTY1OCwzLjcyMTYzbC02LjIwMjY3LDE0Ljg4NjQ2bC0xMi40MDUzOSwtNS41ODI0M2wtMC40NjUyLC00MS40MDI5OWwxMi40MDUzOSwtNi45NzgwNGw2LjgyMjk1LDE0LjczMTQzbDE1LjA0MTU0LDMuODc2NzJ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIvPjwvZz48Zz48cGF0aCBkPSJNMjk2LjY0OTQ3LDE2OC45MTk4MmwtNy44OTQ3MiwxMy4zNzcybDUuNTkyMTEsMTUuMjQxMjVsLTEzLjcwNjE2LDMuODM3N2wtMjguOTQ3NDIsLTI5LjYwNTI5bDQuODI0NTUsLTEyLjcxOTMybDE0LjkxMjI4LDYuMTQwMzZsMTMuMzc3MiwtOC4xMTQwNXoiLz48cGF0aCBkPSJNMTgzLjM1MDQ5LDI1OC41MzQ1M2w4LjExNDA1LC0xMy4zNzcybC02LjE0MDM1LC0xNC45MTIyOWwxMi43MTkzMSwtNC44MjQ1NWwyOS42MDUzLDI4Ljk0NzQxbC0zLjgzNzc1LDEzLjcwNjE2bC0xNS4yNDEyNSwtNS41OTIxMWwtMTMuMzc3Miw3Ljg5NDcyeiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iLz48L2c+PGc+PHBhdGggZD0iTTE5NS4xOTI2NSwxNTcuMDc3NzFsMTMuMzc3Miw3Ljg5NDcybDE1LjI0MTI1LC01LjU5MjExbDMuODM3NzQsMTMuNzA2MTZsLTI5LjYwNTI5LDI4Ljk0NzQxbC0xMi43MTkzMSwtNC44MjQ1NWw2LjE0MDM2LC0xNC45MTIyOWwtOC4xMTQwNSwtMTMuMzc3MnoiLz48cGF0aCBkPSJNMjg0LjgwNzM1LDI3MC4zNzY2NGwtMTMuMzc3MTksLTguMTE0MDVsLTE0LjkxMjI5LDYuMTQwMzZsLTQuODI0NTUsLTEyLjcxOTMxbDI4Ljk0NzQxLC0yOS42MDUzbDEzLjcwNjE2LDMuODM3N2wtNS41OTIxMSwxNS4yNDEyNWw3Ljg5NDcyLDEzLjM3NzJ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIvPjwvZz48L2c+PGcgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiPjxwYXRoIGQ9Ik0xOTQuODM0MDksMjEyLjQ0MjMzYzAsLTI0Ljk0NDQzIDIwLjIyMTQ4LC00NS4xNjU5MiA0NS4xNjU5MiwtNDUuMTY1OTJjMjQuOTQ0NDQsMCA0NS4xNjU4NywyMC4yMjE0OCA0NS4xNjU4Nyw0NS4xNjU5MmMwLDI0Ljk0NDQ0IC0yMC4yMjE0Nyw0NS4xNjU5MiAtNDUuMTY1ODcsNDUuMTY1OTJjLTI0Ljk0NDQzLDAgLTQ1LjE2NTkyLC0yMC4yMjE0NCAtNDUuMTY1OTIsLTQ1LjE2NTkyeiIgZmlsbD0iIzU5YzBlYiIvPjxwYXRoIGQ9Ik0yMDUuNjU0OTIsMjEyLjQ0MjMzYzAsLTE4Ljk2ODI0IDE1LjM3Njg1LC0zNC4zNDUwOSAzNC4zNDUwOSwtMzQuMzQ1MDljMTguOTY4MjQsMCAzNC4zNDUwOCwxNS4zNzY4IDM0LjM0NTA4LDM0LjM0NTA5YzAsMTguOTY4MjQgLTE1LjM3NjgsMzQuMzQ1MDkgLTM0LjM0NTA4LDM0LjM0NTA5Yy0xOC45NjgyNCwwIC0zNC4zNDUwOSwtMTUuMzc2OCAtMzQuMzQ1MDksLTM0LjM0NTA5eiIgZmlsbD0iI2ZmZmZmZiIvPjwvZz48L2c+PC9nPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjMwMDoxODYtLT4=";

class easyStruct {
  constructor(runtime) {
    this.runtime = runtime;
    this._formatMessage = runtime.getFormatMessage({
      'en':{
        //qxsckeasystruct.
        'qxsckeasystruct.name':'Easy struct',

        'qxsckeasystruct.type':"type",
        'qxsckeasystruct.length':"length",
        'qxsckeasystruct.memberLength':"number of members",
        'qxsckeasystruct.members':"members",

        'qxsckeasystruct.structTypes':"struct types",
        'qxsckeasystruct.structs':"structs",
        'qxsckeasystruct.structLists':"struct lists",

        'qxsckeasystruct.clearAll':"clear all",
        'qxsckeasystruct.clearData':'clear all [TYPE]',

        'qxsckeasystruct.sort.tip':'Please ensure that the sorting rule is one of ascending is "asc",\
        descending is "desc" or not sorting is "none",the sorting type is one of string "str" for lexicographic sorting or number "num" for size sorting,\
        wrong parameter can inevitably leading to stop sorting.',

        'qxsckeasystruct.setStructType':'set struct type,name = [NAME] , members = [MEMBERS]',
        'qxsckeasystruct.setStruct':'set struct,name = [NAME] , type = [TYPE]',
        'qxsckeasystruct.setStructList':'set struct list,name = [NAME] , type = [TYPE]',
        'qxsckeasystruct.getStructTypeData':'[TYPE] in struct type [NAME]',
        'qxsckeasystruct.getData':'all names of [TYPE]',
        'qxsckeasystruct.deleteData':'delete [TYPE] [NAME]',

        'qxsckeasystruct.checkData':'have [TYPE] [NAME] ?',
        'qxsckeasystruct.checkDataMember':'[TYPE] [NAME] have member [MEMBER] ?',

        'qxsckeasystruct.getStructType':'type of struct [NAME]',
        'qxsckeasystruct.setStructMemberData':'set member [MEMBER] in struct [NAME] to [DATA]',
        'qxsckeasystruct.getStructMember':'member [MEMBER] in struct [NAME]',
        'qxsckeasystruct.getStructMemberIndex':'item [INDEX] of members in struct [NAME]',

        'qxsckeasystruct.getStructListData':'[TYPE] of struct list [NAME]',
        'qxsckeasystruct.structListPushData':'push [NUM] none datas to struct list [NAME]',

        'qxsckeasystruct.setStructListMemberData':'set item [INDEX] of member [MEMBER] in struct list [NAME] to [DATA]',
        'qxsckeasystruct.getStructListMember':'item [INDEX] of member [MEMBER] in struct list [NAME]',
        'qxsckeasystruct.getStructListMemberIndex':'item [INDEX2] of the [INDEX] member in the struct list [NAME]',
        'qxsckeasystruct.deleteStructListMember':'delete item [INDEX] in struct list [NAME]',
        'qxsckeasystruct.sortHelp':'help of struct list sorting',
        'qxsckeasystruct.structListSort':'sort struct list [NAME] with rule [RULE]',
      },
      'zh-cn': {
        //qxsckeasystruct.
        'qxsckeasystruct.name':'简易结构体',

        'qxsckeasystruct.type':"类型",
        'qxsckeasystruct.length':"长度",
        'qxsckeasystruct.memberLength':"成员数量",
        'qxsckeasystruct.members':"成员",

        'qxsckeasystruct.structTypes':"结构体定义",
        'qxsckeasystruct.structs':"结构体",
        'qxsckeasystruct.structLists':"结构体列表",

        'qxsckeasystruct.clearAll':"清空所有数据",
        'qxsckeasystruct.clearData':'清空所有 [TYPE]',

        'qxsckeasystruct.sort.tip':'请确保排序规则为升序“asc”，降序“desc”，不作排序“none”，\
        请确保排序类型为字符串“str”以进行字典序排序，数字“num”以进行大小排序，参数填写错误会导致无法排序。',

        'qxsckeasystruct.setStructType':'设置结构体类型，类型名称 = [NAME] ，成员 = [MEMBERS]',
        'qxsckeasystruct.setStruct':'设置结构体，结构体名称 = [NAME] ，结构体类型名称 = [TYPE]',
        'qxsckeasystruct.setStructList':'设置结构体列表，结构体列表名称 = [NAME] ，结构体类型名称 = [TYPE]',
        'qxsckeasystruct.getStructTypeData':'结构体类型 [NAME] 的 [TYPE]',
        'qxsckeasystruct.getData':'所有 [TYPE]',
        'qxsckeasystruct.deleteData':'删除 [TYPE] [NAME]',

        'qxsckeasystruct.checkData':'存在 [TYPE] [NAME] ？',
        'qxsckeasystruct.checkDataMember':'[TYPE] [NAME] 存在成员 [MEMBER] ？',

        'qxsckeasystruct.getStructType':'结构体 [NAME] 的类型',
        'qxsckeasystruct.setStructMemberData':'设置结构体 [NAME] 的成员 [MEMBER] 的数据为 [DATA]',
        'qxsckeasystruct.getStructMember':'结构体 [NAME] 的成员 [MEMBER]',
        'qxsckeasystruct.getStructMemberIndex':'结构体 [NAME] 的第 [INDEX] 个成员',

        'qxsckeasystruct.getStructListData':'结构体列表 [NAME] 的 [TYPE]',
        'qxsckeasystruct.structListPushData':'结构体列表 [NAME] 增加 [NUM] 项空白项',

        'qxsckeasystruct.setStructListMemberData':'设置结构体列表 [NAME] 的第 [INDEX] 项的成员 [MEMBER] 的数据为 [DATA]',
        'qxsckeasystruct.getStructListMember':'结构体列表 [NAME] 的第 [INDEX] 项的成员 [MEMBER]',
        'qxsckeasystruct.getStructListMemberIndex':'结构体列表 [NAME] 的第 [INDEX] 项的第 [INDEX2] 个成员',
        'qxsckeasystruct.deleteStructListMember':'删除结构体列表 [NAME] 的第 [INDEX] 项',
        'qxsckeasystruct.sortHelp':'结构体列表排序帮助',
        'qxsckeasystruct.structListSort':'使用规则 [RULE] 排序结构体列表 [NAME]',
      },
    });
    this.structs=Object.create(null);
    this.useStructs=Object.create(null);
    this.useStructLists=Object.create(null);
    this.structListsortFunc=function(rule_member,rule_type,rule_order){
      return(a,b)=>{
        for(let i=0;i<rule_member.length;i++){
          let key=rule_member[i],value=rule_order[i],type_=rule_type[i];
          //console.log(key,value,type_,i);
          if(value!=='none'){
            let cmp_;
            if(type_==='str'){
              let aval=a[key],bval=b[key];
              cmp_=(value==='asc' ?
                aval<bval?-1 : aval>bval?1:0
                : aval>bval?-1 : aval<bval?1:0
              );
            }else if(type_==='num'){
              let ak=Number(a[key]),bk=Number(b[key]);
              let aval=Number.isNaN(ak)?0:Number(ak),
                  bval=Number.isNaN(bk)?0:Number(bk);
              cmp_=(value==='asc' ? aval-bval : bval-aval);
            }
            if(cmp_!==0) return cmp_;
          }
        }
        return 0;
      };
    };
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
      id: "qxsckeasystruct",
      name: this.formatMessage("qxsckeasystruct.name"),
      color1: '#0e7bed',
      color2: '#0e7bed',
      blockIconURI: Icon,
      menuIconURI: Icon,
      blocks: [
        //command,reporter,Boolean,hat
        {
          opcode: "clearAll",
          blockType: 'command',
          text: this.formatMessage("qxsckeasystruct.clearAll"),
          arguments: {},
        },
        {
          opcode: "clearData",
          blockType: 'command',
          text: this.formatMessage("qxsckeasystruct.clearData"),
          arguments: {
            TYPE:{
              type: 'string',
              menu: 'structData.List',
            },
          },
        },

        '---',

        {
          opcode: "setStructType",
          blockType: 'command',
          text: this.formatMessage("qxsckeasystruct.setStructType"),
          arguments: {
            NAME: {
              type: 'string',
              defaultValue: 'struct_'
            },
            MEMBERS: {
              type: 'string',
              defaultValue: 'mem1 mem2'
            },
          },
        },
        {
          opcode: "setStruct",
          blockType: 'command',
          text: this.formatMessage("qxsckeasystruct.setStruct"),
          arguments: {
            NAME: {
              type: 'string',
              defaultValue: 'struct'
            },
            TYPE: {
              type: 'string',
              defaultValue: 'struct_'
            },
          },
        },
        {
          opcode: "setStructList",
          blockType: 'command',
          text: this.formatMessage("qxsckeasystruct.setStructList"),
          arguments: {
            NAME: {
              type: 'string',
              defaultValue: 'structList'
            },
            TYPE: {
              type: 'string',
              defaultValue: 'struct_'
            },
          },
        },
        {
          opcode: "getStructTypeData",
          blockType: 'reporter',
          text: this.formatMessage("qxsckeasystruct.getStructTypeData"),
          arguments: {
            NAME: {
              type: 'string',
              defaultValue: 'struct_'
            },
            TYPE:{
              type: 'string',
              menu: 'getStructTypeData.List',
            },
          },
          disableMonitor: true,
        },
        {
          opcode: "getData",
          blockType: 'reporter',
          text: this.formatMessage("qxsckeasystruct.getData"),
          arguments: {
            TYPE:{
              type: 'string',
              menu: 'structData.List',
            },
          },
          disableMonitor: true,
        },
        {
          opcode: "deleteData",
          blockType: 'command',
          text: this.formatMessage("qxsckeasystruct.deleteData"),
          arguments: {
            NAME: {
              type: 'string',
              defaultValue: 'struct_'
            },
            TYPE:{
              type: 'string',
              menu: 'structData.List',
            },
          },
        },

        '---',

        {
          opcode: "checkData",
          blockType: 'Boolean',
          text: this.formatMessage("qxsckeasystruct.checkData"),
          arguments: {
            NAME: {
              type: 'string',
              defaultValue: 'struct_'
            },
            TYPE:{
              type: 'string',
              menu: 'structData.List',
            },
          },
        },
        {
          opcode: "checkDataMember",
          blockType: 'Boolean',
          text: this.formatMessage("qxsckeasystruct.checkDataMember"),
          arguments: {
            NAME: {
              type: 'string',
              defaultValue: 'struct_'
            },
            MEMBER: {
              type: 'string',
              defaultValue: 'mem1'
            },
            TYPE:{
              type: 'string',
              menu: 'structData.List',
            },
          },
        },

        '---',

        {
          opcode: "getStructType",
          blockType: 'reporter',
          text: this.formatMessage("qxsckeasystruct.getStructType"),
          arguments: {
            NAME: {
              type: 'string',
              defaultValue: 'struct'
            },
          },
          disableMonitor: true,
        },
        {
          opcode: "setStructMemberData",
          blockType: 'command',
          text: this.formatMessage("qxsckeasystruct.setStructMemberData"),
          arguments: {
            NAME: {
              type: 'string',
              defaultValue: 'struct'
            },
            MEMBER: {
              type: 'string',
              defaultValue: 'mem1'
            },
            DATA: {
              type: 'string',
              defaultValue: 'data'
            },
          },
        },
        {
          opcode: "getStructMember",
          blockType: 'reporter',
          text: this.formatMessage("qxsckeasystruct.getStructMember"),
          arguments: {
            NAME: {
              type: 'string',
              defaultValue: 'struct'
            },
            MEMBER: {
              type: 'string',
              defaultValue: 'mem1'
            },
          },
          disableMonitor: true,
        },
        {
          opcode: "getStructMemberIndex",
          blockType: 'reporter',
          text: this.formatMessage("qxsckeasystruct.getStructMemberIndex"),
          arguments: {
            NAME: {
              type: 'string',
              defaultValue: 'struct'
            },
            INDEX: {
              type: 'string',
              defaultValue: '1'
            },
          },
          disableMonitor: true,
        },

        '---',

        {
          opcode: "getStructListData",
          blockType: 'reporter',
          text: this.formatMessage("qxsckeasystruct.getStructListData"),
          arguments: {
            NAME: {
              type: 'string',
              defaultValue: 'structList'
            },
            TYPE:{
              type: 'string',
              menu: 'getStructListData.List',
            }
          },
          disableMonitor: true,
        },
        {
          opcode: "structListPushData",
          blockType: 'command',
          text: this.formatMessage("qxsckeasystruct.structListPushData"),
          arguments: {
            NAME: {
              type: 'string',
              defaultValue: 'structList'
            },
            NUM: {
              type: 'string',
              defaultValue: '1'
            },
          },
        },
        {
          opcode: "setStructListMemberData",
          blockType: 'command',
          text: this.formatMessage("qxsckeasystruct.setStructListMemberData"),
          arguments: {
            NAME: {
              type: 'string',
              defaultValue: 'structList'
            },
            MEMBER: {
              type: 'string',
              defaultValue: 'mem1'
            },
            DATA: {
              type: 'string',
              defaultValue: 'data'
            },
            INDEX: {
              type: 'string',
              defaultValue: '1'
            },
          },
        },
        {
          opcode: "getStructListMember",
          blockType: 'reporter',
          text: this.formatMessage("qxsckeasystruct.getStructListMember"),
          arguments: {
            NAME: {
              type: 'string',
              defaultValue: 'structList'
            },
            MEMBER: {
              type: 'string',
              defaultValue: 'mem1'
            },
            INDEX: {
              type: 'string',
              defaultValue: '1'
            },
          },
          disableMonitor: true,
        },
        {
          opcode: "getStructListMemberIndex",
          blockType: 'reporter',
          text: this.formatMessage("qxsckeasystruct.getStructListMemberIndex"),
          arguments: {
            NAME: {
              type: 'string',
              defaultValue: 'structList'
            },
            INDEX: {
              type: 'string',
              defaultValue: '1'
            },
            INDEX2: {
              type: 'string',
              defaultValue: '1'
            },
          },
          disableMonitor: true,
        },
        {
          opcode: "deleteStructListMember",
          blockType: 'command',
          text: this.formatMessage("qxsckeasystruct.deleteStructListMember"),
          arguments: {
            NAME: {
              type: 'string',
              defaultValue: 'structList'
            },
            INDEX: {
              type: 'string',
              defaultValue: '1'
            },
          },
        },
        {
          opcode: "sortHelp",
          blockType: 'reporter',
          text: this.formatMessage("qxsckeasystruct.sortHelp"),
          arguments: {},
          disableMonitor: true,
        },
        {
          opcode: "structListSort",
          blockType: 'command',
          text: this.formatMessage("qxsckeasystruct.structListSort"),
          arguments: {
            NAME: {
              type: 'string',
              defaultValue: 'structList'
            },
            RULE: {
              type: 'string',
              defaultValue: 'mem1 num asc mem2 str none'
            },
          },
        },
      ],
      menus: {
        'getStructListData.List':[
          {
            text: this.formatMessage("qxsckeasystruct.type"),
            value: 'type'
          },
          {
            text: this.formatMessage("qxsckeasystruct.length"),
            value: 'length'
          },
        ],
        'structData.List':[
          {
            text: this.formatMessage("qxsckeasystruct.structTypes"),
            value: 'structTypes'
          },
          {
            text: this.formatMessage("qxsckeasystruct.structs"),
            value: 'structs'
          },
          {
            text: this.formatMessage("qxsckeasystruct.structLists"),
            value: 'structLists'
          },
        ],
        'getStructTypeData.List':[
          {
            text: this.formatMessage("qxsckeasystruct.memberLength"),
            value: 'length'
          },
          {
            text: this.formatMessage("qxsckeasystruct.members"),
            value: 'members'
          },
        ],
      }
    };
  }

  clearAll(){
    this.structs=Object.create(null);
    this.useStructs=Object.create(null);
    this.useStructLists=Object.create(null);
  }
  clearData(args){
    let type_=String(args.TYPE);
    if(type_==='structTypes'){
      this.structs=Object.create(null);
      this.useStructs=Object.create(null);
      this.useStructLists=Object.create(null);
    }
    else if(type_==='structs') this.useStructs=Object.create(null);
    else if(type_==='structLists') this.useStructLists=Object.create(null);
  }

  setStructType(args){
    let name=String(args.NAME),members=String(args.MEMBERS).split(' ');
    if(!(name in this.structs)){
      let flag=0,v={};
      for(let i in members){
        if(v[members[i]]) flag=1;
        v[members[i]] = true;
      }
      if(flag===0){
        this.structs[name]=members;
      }
    }
  }
  setStruct(args){
    let name=String(args.NAME),type=String(args.TYPE);
    if(!(name in this.useStructs)){
      if(type in this.structs){
        let members=this.structs[type];
        let json={"type":type,"data":{}};
        for(let i in members) json['data'][members[i]]="";
        this.useStructs[name]=json;
      }
    }
  }
  setStructList(args){
    let name=String(args.NAME),type=String(args.TYPE);
    if(!(name in this.useStructLists)){
      if(type in this.structs){
        let members=this.structs[type];
        let json={"type":type,"members":members,"data":[]};
        this.useStructLists[name]=json;
      }
    }
  }
  getStructTypeData(args){
    let name=String(args.NAME),type_=String(args.TYPE);
    if(name in this.structs){
      if(type_==='length') return this.structs[name].length;
      else if(type_==='members'){
        let members=this.structs[name];
        return '['+members.map(value=>'"'+String(value)+'"').join(',')+']';
      }
    }else return '';
  }
  getData(args){
    let type_=String(args.TYPE);
    if(type_==='structTypes') return '['+Object.keys(this.structs).map(value=>'"'+String(value)+'"').join(',')+']';
    else if(type_==='structs') return '['+Object.keys(this.useStructs).map(value=>'"'+String(value)+'"').join(',')+']';
    else if(type_==='structLists') return '['+Object.keys(this.useStructLists).map(value=>'"'+String(value)+'"').join(',')+']';
    else return '';
  }
  deleteData(args){
    let type_=String(args.TYPE),name=String(args.NAME);
    if(type_==='structTypes'){
      if((name in this.structs)){
        delete this.structs[name];
        for(let key in Object.keys(this.useStructs)){
          if(this.useStructs[key].type===name){
            delete this.useStructs[key];
          }
        }
        for(let key in Object.keys(this.useStructLists)){
          if(this.useStructLists[key].type===name){
            delete this.useStructLists[key];
          }
        }
      }
    }
    else if(type_==='structs'){
      if((name in this.useStructs)) delete this.useStructs[name];
    }
    else if(type_==='structLists'){
      if((name in this.useStructLists)) delete this.useStructLists[name];
    }
  }

  checkData(args){
    let type_=String(args.TYPE),name=String(args.NAME);
    if(type_==='structTypes') return (name in this.structs);
    else if(type_==='structs') return (name in this.useStructs);
    else if(type_==='structLists') return (name in this.useStructLists);
    else return '';
  }
  checkDataMember(args){
    let type_=String(args.TYPE),name=String(args.NAME),member=String(args.MEMBER);
    if(type_==='structTypes'){
      if(name in this.structs) return (this.structs[name].indexOf(member)>-1);
      else return false;
    }
    else if(type_==='structs'){
      if(name in this.useStructs) return (member in this.useStructs[name]['data']);
      else return false;
    }
    else if(type_==='structLists'){
      if(name in this.useStructLists) return (this.useStructLists[name]['members'].indexOf(member)>-1);
      else return false;
    }
    else return '';
  }

  getStructType(args){
    let name=String(args.NAME);
    if(name in this.useStructs) return this.useStructs[name]['type'];
    else return '';
  }
  setStructMemberData(args){
    let name=String(args.NAME),member=String(args.MEMBER),data=String(args.DATA);
    if(name in this.useStructs) if(member in this.useStructs[name]['data']) this.useStructs[name]['data'][member]=data;
  }
  getStructMember(args){
    let name=String(args.NAME),member=String(args.MEMBER);
    if(name in this.useStructs){
      if(member in this.useStructs[name]['data']) return this.useStructs[name]['data'][member];
      else return '';
    }
    else return '';
  }
  getStructMemberIndex(args){
    let name=String(args.NAME),index=Number(args.INDEX);
    if(name in this.useStructs){
      let members=Object.keys(this.useStructs[name]['data']);
      if(index<=members.length) return this.useStructs[name]['data'][members[index-1]];
      else return '';
    }
    else return '';
  }

  getStructListData(args){
    let type_=String(args.TYPE),name=String(args.NAME);
    if(type_==="type"){
      if(name in this.useStructLists) return this.useStructLists[name]['type'];
      return '';
    }else if(type_==='length'){
      if(name in this.useStructLists) return this.useStructLists[name]['data'].length;
      else return -1;
    }else return '';
  }
  structListPushData(args){
    let name=String(args.NAME),num=Number(args.NUM);
    if(name in this.useStructLists){
      let type=this.useStructLists[name]['type'],members=this.structs[type],json={};
      for(let i in members) json[members[i]]="";
      for(let i=0;i<num;i++) this.useStructLists[name]['data'].push(json);
    }
  }
  setStructListMemberData(args){
    let name=String(args.NAME),member=String(args.MEMBER),data=String(args.DATA),index=Number(args.INDEX);
    if(name in this.useStructLists)
      if(index<=this.useStructLists[name]['data'].length)
        if(member in this.useStructLists[name]['data'][index-1]) this.useStructLists[name]['data'][index-1][member]=data;
  }
  getStructListMember(args){
    let name=String(args.NAME),member=String(args.MEMBER),index=Number(args.INDEX);
    if(name in this.useStructLists){
      if(index<=this.useStructLists[name]['data'].length){
        if(member in this.useStructLists[name]['data'][index-1]) return this.useStructLists[name]['data'][index-1][member];
        else return '';
      }
      else return '';
    }
    else return '';
  }
  getStructListMemberIndex(args){
    let name=String(args.NAME),index=Number(args.INDEX),index2=Number(args.INDEX2);
    if(name in this.useStructLists) if(index<=this.useStructLists[name]['data'].length){
      let members=Object.keys(this.useStructLists[name]['data'][index-1]);
      if(index2<=members.length) return this.useStructLists[name]['data'][index-1][members[index2-1]];
      else return '';
    }
    else return '';
  }
  deleteStructListMember(args){
    let name=String(args.NAME),index=Number(args.INDEX);
    if(name in this.useStructLists)
      if(index<=this.useStructLists[name]['data'].length)
        this.useStructLists[name]['data'].splice(index-1, 1);
  }
  sortHelp(){
    return this.formatMessage("qxsckeasystruct.sort.tip");
  }
  structListSort(args){
    let name=String(args.NAME),rule_arr=String(args.RULE).split(" ");
    if(name in this.useStructLists){
      let type=this.useStructLists[name]['type'],members=this.structs[type];
      let flag=0;
      if(members.length===rule_arr.length/3 && rule_arr.length%3===0){
        let rule_member=[],rule_type=[],rule_order=[];
        for(let i=0;i<rule_arr.length/3;i++){
          if( (rule_arr[i*3+2]!=='asc' && rule_arr[i*3+2]!=='desc' && rule_arr[i*3+2]!=='none') || (rule_arr[i*3+1]!=='num' && rule_arr[i*3+1]!=='str') ){
            flag=i;break;
          }
          else rule_member.push(rule_arr[i*3]),rule_type.push(rule_arr[i*3+1]),rule_order.push(rule_arr[i*3+2]);
        }
        if(flag===0){
          let arr=this.useStructLists[name]['data'];
          //console.log(rule_member,rule_type,rule_order);
          let result=arr.sort(this.structListsortFunc(rule_member,rule_type,rule_order));
          //console.log(result);
          this.useStructLists[name]['data']=result;
        }else{
          console.log('第'+String(flag)+'个排序项的排序规则或者排序类型有问题：');
          console.log('请确保排序规则为升序“asc”，降序“desc”，不作排序“none”，');
          console.log('请确保排序类型为字符串“str”以进行字典序排序，数字“num”以进行大小排序。');
          console.log('There is an issue with the sorting rule or type of the '+String(flag)+' th sorting item:');
          console.log('Please ensure that the sorting rule is one of ascending is "asc",descending is "desc" or not sorting is "none",');
          console.log('the sorting type is one of string "str" for lexicographic sorting or number "num" for size sorting.');
        }
      }
    }
  }
}

window.tempExt = {
  Extension: easyStruct,
  info: {
    name: 'qxsckeasystruct.name',
    description: 'qxsckeasystruct.description',
    extensionId: 'qxsckeasystruct',
    iconURL: insetIcon,
    insetIconURL: Icon,
    featured: true,
    disabled: false,
    collaborator: 'CK七星松@CCW'
  },
  l10n: {
    'zh-cn': {
      'qxsckeasystruct.name': '简易结构体',
      'qxsckeasystruct.description': '一些关于简易结构体的积木',
    },
    'en': {
      'qxsckeasystruct.name': 'Easy struct',
      'qxsckeasystruct.description': 'Some blocks of use easy struct.',
    },
  },
}
