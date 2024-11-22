import math from './math.js';
const witcat_interpreter_picture = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI2NDIuNTY0OCIgaGVpZ2h0PSIzNjUuOTI1MTEiIHZpZXdCb3g9IjAsMCw2NDIuNTY0OCwzNjUuOTI1MTEiPjxkZWZzPjxsaW5lYXJHcmFkaWVudCB4MT0iMzIwIiB5MT0iLTAuMDgxODYiIHgyPSIzMjAiIHkyPSIzNjAuMDgxODYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjM2MzYzRhIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjM2MzYzRhIiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMzIwIiB5MT0iMzYwLjA4MTg1IiB4Mj0iMzIwIiB5Mj0iLTAuMDgxODUiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMWUxZTI2Ii8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMWUxZTI2IiBzdG9wLW9wYWNpdHk9IjAiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMjQuOTc2MTYiIHkxPSIwLjM0NzI1IiB4Mj0iMjQuOTc2MTYiIHkyPSIxODQuOTQ3MjUiIGdyYWRpZW50VHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0Ljk1MjMsLTM1LjMwNjk5KSBzY2FsZSgyLDIpIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgaWQ9ImNvbG9yLTMiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2MwYzBjYyIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzE4MTgxYSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEuMjgyNCw0LjU1MzUyKSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0tMC42MDAyNywzNjAuNDIyOTV2LTM2MC44NDU4NGg2NDEuMjAwNTV2MzYwLjg0NTg0eiIgZmlsbD0iIzMzMzM0MCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTS0xLjI4MjQsMzYwLjA4MTg2di0zNjAuMTYzNzFoNjQyLjU2NDh2MzYwLjE2MzcxeiIgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aW5kZXgmcXVvdDs6bnVsbH0iIGZpbGw9InVybCgjY29sb3ItMSkiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik02NDEuMjgyNCwtMC4wODE4NXYzNjAuMTYzNzFoLTY0Mi41NjQ4di0zNjAuMTYzNzF6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIgZmlsbD0idXJsKCNjb2xvci0yKSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOTMuNzQ1NjEsMzQuNTM3MDcpIHNjYWxlKDAuNDI3NzksMC40Mjc3OSkiIGZvbnQtc2l6ZT0iNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IiM2NjY2ODAiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJTYW5zIFNlcmlmIiBmb250LXdlaWdodD0ibm9ybWFsIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48dHNwYW4geD0iMCIgZHk9IjAiPjA8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjE8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjA8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjA8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjE8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjE8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjE8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjA8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjE8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjE8L3RzcGFuPjwvdGV4dD48dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1NzguODY3NjksMjExLjU2OTc4KSBzY2FsZSgwLjQ0NjQyLDAuNDQ2NDIpIiBmb250LXNpemU9IjQwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSIjNjY2NjgwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0iU2FucyBTZXJpZiIgZm9udC13ZWlnaHQ9Im5vcm1hbCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHRzcGFuIHg9IjAiIGR5PSIwIj4wPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4wPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4wPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48L3RleHQ+PHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTk5LjAxODQ2LDM5LjUzNzA3KSBzY2FsZSgwLjQyNzc5LDAuNDI3NzkpIiBmb250LXNpemU9IjQwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSIjNjY2NjgwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0iU2FucyBTZXJpZiIgZm9udC13ZWlnaHQ9Im5vcm1hbCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHRzcGFuIHg9IjAiIGR5PSIwIj4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4wPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4wPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48L3RleHQ+PHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzc0LjQ1NDMyLDE3LjE5NjQ4KSBzY2FsZSgwLjUsMC41KSIgZm9udC1zaXplPSI0MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iIzY2NjY4MCIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IlNhbnMgU2VyaWYiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0c3BhbiB4PSIwIiBkeT0iMCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MDwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MDwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MDwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ5LjE3NTM1LDI1Ni42Nzg5NSkgc2NhbGUoMC40Mjc3OSwwLjQyNzc5KSIgZm9udC1zaXplPSI0MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iI2MwYzBjYyIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IlNhbnMgU2VyaWYiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0c3BhbiB4PSIwIiBkeT0iMCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MDwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MDwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDE3LjQ3NjE1LDE3LjY1MzUpIHNjYWxlKDAuNSwwLjUpIiBmb250LXNpemU9IjQwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSJ1cmwoI2NvbG9yLTMpIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0iU2FucyBTZXJpZiIgZm9udC13ZWlnaHQ9Im5vcm1hbCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHRzcGFuIHg9IjAiIGR5PSIwIj4wPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4wPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4wPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4wPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48L3RleHQ+PHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjE3LjA2Njg3LDE4LjMzNTYzKSBzY2FsZSgwLjUsMC41KSIgZm9udC1zaXplPSI0MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iI2MwYzBjYyIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IlNhbnMgU2VyaWYiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0c3BhbiB4PSIwIiBkeT0iMCI+MDwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MDwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MDwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDUxNi41NjIxLDE4LjEwMzY5KSBzY2FsZSgwLjUsMC41KSIgZm9udC1zaXplPSI0MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iIzY2NjY4MCIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IlNhbnMgU2VyaWYiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0c3BhbiB4PSIwIiBkeT0iMCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MDwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MDwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MDwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDM4NS4xNDMyNywyODUuNzI5OTEpIHNjYWxlKDAuNSwwLjUpIiBmb250LXNpemU9IjQwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSIjNjY2NjgwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0iU2FucyBTZXJpZiIgZm9udC13ZWlnaHQ9Im5vcm1hbCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHRzcGFuIHg9IjAiIGR5PSIwIj4wPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48L3RleHQ+PHRleHQgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjgwLjU0NTcxLDE4LjEwMzY5KSBzY2FsZSgwLjUsMC41KSIgZm9udC1zaXplPSI0MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iIzY2NjY4MCIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IlNhbnMgU2VyaWYiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0c3BhbiB4PSIwIiBkeT0iMCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MDwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDQzNS4yNTk5NCw5MC4yMzk2OCkgc2NhbGUoMC40Mjc3OSwwLjQyNzc5KSIgZm9udC1zaXplPSI0MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iIzY2NjY4MCIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IlNhbnMgU2VyaWYiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0c3BhbiB4PSIwIiBkeT0iMCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MDwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0NC42NzMzMSwxNzMuNDU5MzEpIHNjYWxlKDAuNDI3NzksMC40Mjc3OSkiIGZvbnQtc2l6ZT0iNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IiNjMGMwY2MiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJTYW5zIFNlcmlmIiBmb250LXdlaWdodD0ibm9ybWFsIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48dHNwYW4geD0iMCIgZHk9IjAiPjE8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjE8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjE8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjA8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjA8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjE8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjA8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjE8L3RzcGFuPjwvdGV4dD48dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NjYuMTgwODEsMTUuNDMwNjYpIHNjYWxlKDAuNDI3NzksMC40Mjc3OSkiIGZvbnQtc2l6ZT0iNDAiIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IiNjMGMwY2MiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJTYW5zIFNlcmlmIiBmb250LXdlaWdodD0ibm9ybWFsIiB0ZXh0LWFuY2hvcj0ic3RhcnQiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48dHNwYW4geD0iMCIgZHk9IjAiPjA8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjE8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjA8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjA8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjE8L3RzcGFuPjx0c3BhbiB4PSIwIiBkeT0iNDYuMTUwMDAwMDAwMDAwMDA2cHgiPjE8L3RzcGFuPjwvdGV4dD48dGV4dCB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NjIuOTA1ODksMjYxLjg1NTQyKSBzY2FsZSgwLjUsMC41KSIgZm9udC1zaXplPSI0MCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgZmlsbD0iI2MwYzBjYyIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9IlNhbnMgU2VyaWYiIGZvbnQtd2VpZ2h0PSJub3JtYWwiIHRleHQtYW5jaG9yPSJzdGFydCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjx0c3BhbiB4PSIwIiBkeT0iMCI+MDwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MDwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MTwvdHNwYW4+PHRzcGFuIHg9IjAiIGR5PSI0Ni4xNTAwMDAwMDAwMDAwMDZweCI+MDwvdHNwYW4+PC90ZXh0Pjx0ZXh0IHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzNS4wNzUwNCwzMDguMjQwMTMpIHNjYWxlKDAuNSwwLjUpIiBmb250LXNpemU9IjQwIiB4bWw6c3BhY2U9InByZXNlcnZlIiBmaWxsPSIjNjY2NjgwIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0iU2FucyBTZXJpZiIgZm9udC13ZWlnaHQ9Im5vcm1hbCIgdGV4dC1hbmNob3I9InN0YXJ0IiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHRzcGFuIHg9IjAiIGR5PSIwIj4wPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48dHNwYW4geD0iMCIgZHk9IjQ2LjE1MDAwMDAwMDAwMDAwNnB4Ij4xPC90c3Bhbj48L3RleHQ+PHBhdGggZD0iTTI2NC43MDQ2NCwyMTguMTA4OTR2LTYwLjI0MjM2aDExMC4yNzc2OXY2MC4yNDIzNnoiIGZpbGw9IiMwYzBjMGMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yNjQuODk3OTUsMTU2LjMzMzczdi0xMy41NjUyOGgxMTAuMjc3Njl2MTMuNTY1Mjh6IiBmaWxsPSIjZDVkOWRmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMzc1LjExMjEyLDE1Ni45Njc2OGgtMTEwLjY4NDIzIiBmaWxsPSJub25lIiBzdHJva2U9IiM4YjkzOWMiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48cGF0aCBkPSJNMzY0LjcwMzIsMTQ4Ljg0MDk4di00LjkwNzQ3aDQuOTA3NDd2NC45MDc0N3oiIGZpbGw9IiM4YjkzOWMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0zNDguNjMyNzQsMTQ4Ljg5MzI2di00LjkwNzQ3aDQuOTA3NDd2NC45MDc0N3oiIGZpbGw9IiM4YjkzOWMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0zNTYuNjU5MDUsMTQ4Ljg2MTUzdi00LjkwNzQ3aDQuOTA3NDd2NC45MDc0N3oiIGZpbGw9IiM4YjkzOWMiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yNjUuMzYyNzYsMTU1Ljc1OTAzdi02LjEwMjIxaDEwOS4yMDQxN3Y2LjEwMjIxeiIgZmlsbD0iI2NiY2NjZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTI2NC4xNzUzMywyMTcuNjA3MzR2LTc1LjcxNjIzaDExMS42NDkzNnY3NS43MTYyM3oiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzhiOTM5YyIgc3Ryb2tlLXdpZHRoPSIyLjUiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTI4Mi4zMTQ1NSwxODguODEyNDh2LTUuMTMzMTJsMjMuMTQ0ODgsLTEyLjM3NDQ5djcuMTk1NTRsLTE1LjQ5MTAzLDcuNzQ1NTJsMTUuNDkxMDMsNy43OTEzNXY3LjE0OTcxek0zMjEuMDQyMTIsMTY4LjE4ODMzaDYuNTk5NzNsLTEwLjgxNjIyLDM2LjI5ODUxaC02LjU5OTczek0zMzIuNDA4MzIsMTcxLjMwNDg3bDIzLjE0NDg4LDEyLjM3NDQ5djUuMTMzMTJsLTIzLjE0NDg4LDEyLjM3NDQ5di03LjE0OTcxbDE1LjUzNjg2LC03Ljc5MTM1bC0xNS41MzY4NiwtNy43NDU1MnoiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjwvZz48L2c+PC9zdmc+";

const witcat_interpreter_icon = "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMjcuODI5MjUiIGhlaWdodD0iMTI3LjgyOTI2IiB2aWV3Qm94PSIwLDAsMTI3LjgyOTI1LDEyNy44MjkyNiI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIzMjAuMDAwMDIiIHkxPSIxMTYuMDg1MzciIHgyPSIzMjAuMDAwMDIiIHkyPSIyNDMuOTE0NjMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBpZD0iY29sb3ItMSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMWUxZTI2IiBzdG9wLW9wYWNpdHk9IjAiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMxZTFlMjYiLz48L2xpbmVhckdyYWRpZW50PjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjU2LjA4NTM4LC0xMTYuMDg1MzcpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMjY4LjAwMjE2LDI0My45MTQ2M2MtNS4wNDI3MiwwIC0xMS45MTY3NywtNC40NTMxOSAtMTEuOTE2NzcsLTExLjYzNjQ5YzAsLTI2LjMxOTcyIDAsLTg5LjI5MTI2IDAsLTEwNC4xNTc3NGMwLC02LjE2MDY0IDYuODc0MDUsLTEyLjAzNTAzIDExLjkxNjc3LC0xMi4wMzUwM2gxMDQuNDI0MzRjNS4wNDI3MiwwIDExLjQ4ODE0LDQuMTUzMDUgMTEuNDg4MTQsMTEuODIwNzFjMCwyNi44MjI3OSAwLDg5LjQyOTYxIDAsMTA0LjE1Nzc0YzAsNi4xNzM3MiAtNi44NzQwNSwxMS44NTA4MSAtMTEuOTE2NzcsMTEuODUwODF6IiBmaWxsPSIjMzMzMzQwIi8+PHBhdGggZD0iTTI2OC4wMDIxNiwyNDMuOTE0NjNjLTUuMDQyNzIsMCAtMTEuOTE2NzcsLTQuNDUzMTkgLTExLjkxNjc3LC0xMS42MzY0OWMwLC0yNi4zMTk3MiAwLC04OS4yOTEyNiAwLC0xMDQuMTU3NzRjMCwtNi4xNjA2NCA2Ljg3NDA1LC0xMi4wMzUwMyAxMS45MTY3NywtMTIuMDM1MDNoMTA0LjQyNDM0YzUuMDQyNzIsMCAxMS40ODgxNCw0LjE1MzA1IDExLjQ4ODE0LDExLjgyMDcxYzAsMjYuODIyNzkgMCw4OS40Mjk2MSAwLDEwNC4xNTc3NGMwLDYuMTczNzIgLTYuODc0MDUsMTEuODUwODEgLTExLjkxNjc3LDExLjg1MDgxeiIgZmlsbD0idXJsKCNjb2xvci0xKSIvPjxwYXRoIGQ9Ik0yNjkuODc2NDUsMTgzLjM4NzU4di03LjAyNjA4bDMxLjY4MDA5LC0xNi45Mzc4N3Y5Ljg0OTA1bC0yMS4yMDM3LDEwLjYwMTg2bDIxLjIwMzcsMTAuNjY0NTl2OS43ODYzM3pNMzIyLjg4NTcxLDE1NS4xNTc3OWg5LjAzMzUzbC0xNC44MDQ5NSw0OS42ODQ0MmgtOS4wMzM1M3pNMzM4LjQ0MzQ2LDE1OS40MjM2MmwzMS42ODAwOSwxNi45Mzc4N3Y3LjAyNjA4bC0zMS42ODAwOSwxNi45Mzc4N3YtOS43ODYzM2wyMS4yNjY0NCwtMTAuNjY0NTlsLTIxLjI2NjQzLC0xMC42MDE4NXoiIGZpbGw9IiNmZmZmZmYiLz48L2c+PC9nPjwvc3ZnPg==";

const witcat_interpreter_extensionId = "WitCatInterpreter";

const {
    BlockType, ArgumentType, TargetType, Cast,
} = Scratch;

/** @typedef {string|number|boolean} SCarg 来自Scratch圆形框的参数，虽然这个框可能只能输入数字，但是可以放入变量，因此有可能获得数字、布尔和文本（极端情况下还有 null 或 undefined，需要同时处理 */

let hacked = false;

class WitCatInterpreter {
    constructor(runtime) {
        this.runtime = runtime;
        this.asyncMap = [];
        this.returnMap = {};
        this.variableMap = {};
        this.taskMap = {};
        this.whileOutNumber = 999;

        this._formatMessage = runtime.getFormatMessage({
            "zh-cn": {
                "WitCatInterpreter.name": "白猫的解释器",
                "WitCatInterpreter.docs": "📖拓展教程",
                "WitCatInterpreter.code": "代码",
                "WitCatInterpreter.runs": "执行",
                "WitCatInterpreter.rule": "规则",
                "WitCatInterpreter.run": "执行代码[code]并[wait]",
                "WitCatInterpreter.asyncMarkUp": "标记函数[func]为[async]函数",
                "WitCatInterpreter.async.1": "异步",
                "WitCatInterpreter.async.2": "同步",
                "WitCatInterpreter.wait.1": "等待",
                "WitCatInterpreter.wait.2": "不等待",
                "WitCatInterpreter.expression": "表达式[code]",
                "WitCatInterpreter.response": "执行函数[func]:传参=[params] 内部代码=[code]",
                "WitCatInterpreter.returns": "返回[return]",
                "WitCatInterpreter.taskOn": "触发线程[task]",
                "WitCatInterpreter.taskRemove": "移除线程缓存[task]",
                "WitCatInterpreter.whileOut": "设置循环溢出[while]",
                "WitCatInterpreter.createClass": "创建类[class]",
                "WitCatInterpreter.classFunc": "创建方法[func]",
                "WitCatInterpreter.classAttribute": "创建[pub]属性[attribute]初始化为[num]",
                "WitCatInterpreter.attribute.1": "公开",
                "WitCatInterpreter.attribute.2": "私有",
            },
            en: {
                "WitCatInterpreter.name": "WitCat’s Interpreter",
                "WitCatInterpreter.docs": "📖 Tutorial",
                "WitCatInterpreter.code": "code",
                "WitCatInterpreter.runs": "run",
                "WitCatInterpreter.rule": "rule",
                "WitCatInterpreter.run": "Run code[code]and[wait]",
                "WitCatInterpreter.asyncMarkUp": "Mark func[func]to[async]",
                "WitCatInterpreter.async.1": "async",
                "WitCatInterpreter.async.2": "sync",
                "WitCatInterpreter.wait.1": "wait",
                "WitCatInterpreter.wait.2": "no-wait",
                "WitCatInterpreter.expression": "Expression[code]",
                "WitCatInterpreter.response": "Func[func]:params=[params] codeInsite=[code]",
                "WitCatInterpreter.returns": "Return[return]",
                "WitCatInterpreter.taskOn": "Trigger thread[task]",
                "WitCatInterpreter.taskRemove": "Remove thread[task]",
                "WitCatInterpreter.whileOut": "Set loop overflow[while]",
                "WitCatInterpreter.createClass": "创建类[class]",
                "WitCatInterpreter.classFunc": "创建方法[func]",
                "WitCatInterpreter.classAttribute": "创建[pub]属性[attribute]初始化为[num]",
                "WitCatInterpreter.attribute.1": "公开",
                "WitCatInterpreter.attribute.2": "私有",
            }
        })
    }

    /**
     * 翻译
     * @param {string} id
     * @return {string}
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
            id: witcat_interpreter_extensionId, // 拓展id
            name: this.formatMessage("WitCatInterpreter.name"), // 拓展名
            blockIconURI: witcat_interpreter_icon,
            menuIconURI: witcat_interpreter_icon,
            color1: "#333340",
            color2: "#1e1e26",
            blocks: [
                {
                    blockType: "button",
                    text: this.formatMessage('WitCatInterpreter.docs'),
                    onClick: this.docs,
                },
                "---" + this.formatMessage("WitCatInterpreter.code"),
                {
                    opcode: "run",
                    blockType: "command",
                    text: this.formatMessage("WitCatInterpreter.run"),
                    arguments: {
                        code: {
                            type: "string",
                            defaultValue: "print(1+1)"
                        },
                        wait: {
                            type: "Boolean",
                            menu: "wait"
                        },
                    },
                },
                {
                    opcode: "taskOn",
                    blockType: "command",
                    text: this.formatMessage("WitCatInterpreter.taskOn"),
                    arguments: {
                        task: {
                            type: "string",
                            defaultValue: "func"
                        },
                    },
                },
                {
                    opcode: "taskRemove",
                    blockType: "command",
                    text: this.formatMessage("WitCatInterpreter.taskRemove"),
                    arguments: {
                        task: {
                            type: "string",
                            defaultValue: "func"
                        },
                    },
                },
                {
                    opcode: "taskOnWithReturn",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatInterpreter.taskOn"),
                    arguments: {
                        task: {
                            type: "string",
                            defaultValue: "func"
                        },
                    },
                },
                {
                    opcode: "expressions",
                    blockType: "reporter",
                    text: this.formatMessage("WitCatInterpreter.expression"),
                    arguments: {
                        code: {
                            type: "string",
                            defaultValue: "1==1"
                        },
                    },
                },
                "---" + this.formatMessage("WitCatInterpreter.runs"),
                {
                    opcode: "asyncMarkUp",
                    blockType: "command",
                    text: this.formatMessage("WitCatInterpreter.asyncMarkUp"),
                    arguments: {
                        func: {
                            type: "string",
                            defaultValue: "print"
                        },
                        async: {
                            type: "string",
                            menu: "async"
                        },
                    },
                },
                {
                    opcode: "response",
                    blockType: "hat",
                    isEdgeActivated: false,
                    shouldRestartExistingThreads: false,
                    text: this.formatMessage("WitCatInterpreter.response"),
                    arguments: {
                        func: {
                            type: "string",
                            defaultValue: "print"
                        },
                        params: {
                            type: "ccw_hat_parameter"
                        },
                        code: {
                            type: "ccw_hat_parameter"
                        },
                    },
                },
                {
                    opcode: "returns",
                    blockType: "command",
                    isTerminal: true,
                    text: this.formatMessage("WitCatInterpreter.returns"),
                    arguments: {
                        return: {
                            type: "string",
                            defaultValue: "witcat"
                        },
                    },
                },
                "---" + this.formatMessage("WitCatInterpreter.rule"),
                {
                    opcode: "whileOut",
                    blockType: "command",
                    text: this.formatMessage("WitCatInterpreter.whileOut"),
                    arguments: {
                        while: {
                            type: "number",
                            defaultValue: "1000"
                        },
                    },
                },

                // {
                //     opcode: "createClass",
                //     blockType: "hat",
                //     isEdgeActivated: false,
                //     shouldRestartExistingThreads: false,
                //     text: this.formatMessage("WitCatInterpreter.createClass"),
                //     arguments: {
                //         class: {
                //             type: "string",
                //             defaultValue: "witcat"
                //         },
                //     },
                // },
                // {
                //     opcode: "classFunc",
                //     blockType: "conditional",
                //     text: this.formatMessage("WitCatInterpreter.classFunc"),
                //     arguments: {
                //         func: {
                //             type: "string",
                //             defaultValue: "log"
                //         },
                //     },
                // },
                // {
                //     opcode: "classAttribute",
                //     blockType: "command",
                //     text: this.formatMessage("WitCatInterpreter.classAttribute"),
                //     arguments: {
                //         pub: {
                //             type: "string",
                //             menu: "attribute"
                //         },
                //         attribute: {
                //             type: "string",
                //             defaultValue: "log"
                //         },
                //         num: {
                //             type: "string",
                //             defaultValue: "0"
                //         },
                //     },
                // },
            ],
            menus: {
                wait: [
                    {
                        text: this.formatMessage('WitCatInterpreter.wait.1'),
                        value: true
                    },
                    {
                        text: this.formatMessage('WitCatInterpreter.wait.2'),
                        value: false
                    },
                ],
                async: [
                    {
                        text: this.formatMessage('WitCatInterpreter.async.1'),
                        value: 'async'
                    },
                    {
                        text: this.formatMessage('WitCatInterpreter.async.2'),
                        value: 'sync'
                    },
                ],
                attribute: [
                    {
                        text: this.formatMessage('WitCatInterpreter.attribute.1'),
                        value: 'public'
                    },
                    {
                        text: this.formatMessage('WitCatInterpreter.attribute.2'),
                        value: 'self'
                    },
                ],
            },
        };
    }

    /** 打开教程 */
    docs() {
        let a = document.createElement('a');
        a.href = "https://www.ccw.site/post/d6d96e80-3f58-4a19-b7e6-c567d3a6a583";
        a.rel = "noopener noreferrer";
        a.target = "_blank";
        a.click();
    }

    response() {
        return true;
    }

    taskOn(args) {
        const body = this.taskMap[args.task];
        if (body)
            return this.runcode(body);
    }

    taskRemove(args) {
        delete this.taskMap[args.task];
    }

    taskOnWithReturn(args) {
        const body = this.taskMap[args.task];
        if (body)
            return this.runcode(body);
    }

    returns(args, util) {
        const topBlock = util.thread?.topBlock;
        if (topBlock) {
            this.returnMap[topBlock] = args.return;
            util.stopThisScript();
        }
    }

    whileOut(args) {
        this.whileOutNumber = Number(args.while);
    }

    asyncMarkUp(args) {
        if (args.async == 'async') {
            if (this.asyncMap.indexOf(args.func) == -1)
                this.asyncMap.push(args.func);
        } else {
            if (this.asyncMap.indexOf(args.func) != -1)
                this.asyncMap.splice(this.asyncMap.indexOf(args.func), 1);
        }
    }

    /**
     * 计算
     * @param {object} args
     * @param {SCarg} args.code
     * @return {number}
     */
    async run(args) {
        if (args.wait)
            await this.runcode(String(args.code));
        else
            this.runcode(String(args.code));
    }

    async expressions(args) {
        return await this.expression(String(args.code));
    }
    /**
     * 运行代码
     * @param {string} code 需要执行的代码
     * @return {number}
     */
    runcode = async (code) => {
        const lines = code.split('\n').map(line => line.trim()).filter(line => line);
        let i = 0, returns = null;

        while (i < lines.length && returns === null) {
            const line = lines[i];
            if (line.match(/else\s*{/)) {
                let b = 0;
                i++;
                while (i < lines.length && b < 1) {
                    const line = lines[i].trim();

                    if (line.startsWith('}')) {
                        b++;
                        continue;
                    }

                    i++;
                }
                continue;
            }

            // 匹配函数调用，比如 func(param1, param2)
            const functionCallMatch = line.match(/^(\w+)\((.*)\)$/);
            if (functionCallMatch) {
                const funcName = functionCallMatch[1];
                const params = functionCallMatch[2].split(',').map(param => param.trim());
                if (funcName === 'return') {
                    returns = this.expression(params[0]);
                    continue;
                } else
                    await this.runCodeRow(funcName, params, null); // 不传递函数体
                i++;
                continue;
            }

            // 匹配函数定义，比如 func(args) { ... }
            const functionDefMatch = line.match(/^(\w+)\((.*)\)\s*{$/);
            if (functionDefMatch) {
                const funcName = functionDefMatch[1];
                const params = functionDefMatch[2].split(',').map(param => param.trim());
                let body = '';

                // 找到对应的函数体，直到遇到独立的行
                i++; // 移动到函数体的第一行
                let b = 1;
                while (i < lines.length && b > 0) {
                    if (lines[i].trim().startsWith('}'))
                        --b;
                    else if (lines[i].trim().includes('{'))
                        ++b;
                    body += lines[i] + '\n';
                    i++;
                }
                body = body.slice(0, body.lastIndexOf('}')).trim();
                let returnValue = null;
                returnValue = await this.runCodeRow(funcName, params, body.trim());
                if (funcName == 'if' || funcName == 'elif') {
                    if (returnValue) {
                        let b = 0;
                        while (i < lines.length && b < 2) {
                            const line = lines[i].trim();

                            if (line.match(/else\s*{/)) {
                                b++;
                                continue;
                            }
                            if (line.startsWith('}') && b == 1) {
                                b++;
                                continue;
                            }
                            i++;
                        }
                    } else {
                        i--;
                        let b = 0;
                        while (i < lines.length && b < 1) {
                            const line = lines[i].trim();

                            if (line.match(/elif\s*\(([^()]*)\)\s*\{/)) {
                                b++;
                                continue;
                            }
                            if (line.match(/else\s*{/)) {
                                b++;
                                continue;
                            }
                            i++;
                        }
                        if (lines[i]) {
                            const line = lines[i].trim();
                            if (line.match(/else\s*{/))
                                i++;
                        }
                    }
                }
                continue;
            }

            const letAssignmentPattern = /let\s+(\w+)\s*=\s*(.+)/;
            const match = line.match(letAssignmentPattern);

            if (match) {
                const variableName = match[1]; // 提取变量名
                const valueExpression = match[2].trim(); // 提取赋值部分

                // 进行后续操作，这里可以使用 await
                const value = await this.expression(valueExpression);
                this.variableMap[variableName] = value; // 存储变量的值
            }

            i++;
        }
        return returns;
    }

    /**
     * 执行一行代码
     * @param {string} func 函数名
     * @param {Array} args 传入的参数列表
     * @param {string} body 函数体内容
     * @returns {void}
     */
    runCodeRow = async (func, args, body) => {
        if (func === 'if' || func === 'elif') {
            const condition = await this.expression(args[0]); // 假设 args[0] 是条件

            if (condition === 'true') {
                this.runcode(body);
                return true;
            } else {
                return false;
            }
        } else if (func === 'on') {
            this.taskMap[args[0]] = body;
            return;
        } else if (func === 'task') {
            const body = this.taskMap[args[0]];
            if (body)
                return this.runcode(body);
        } else {
            return new Promise(async (resolve, reject) => {
                const out = this.runtime.startHatsWithParams(
                    `${witcat_interpreter_extensionId}_response`,
                    {
                        parameters: { params: JSON.stringify(args), code: body },
                        fields: { TEXT: Cast.toString(func) },
                    },
                );
                const checkThreads = () => {
                    const waiting = out.some(thread => this.runtime.threads.indexOf(thread) !== -1);
                    if (!waiting) {
                        out.forEach(item => {
                            if (item.topBlock) {
                                const topBlockContent = item.topBlock;
                                // 执行代码
                                const v = this.returnMap[topBlockContent];
                                if (v) {
                                    delete this.returnMap[topBlockContent];
                                    resolve(v);
                                }
                            }
                        });

                        resolve('');
                    } else {
                        setTimeout(checkThreads, 100);
                    }
                };
                if (out.length == 0) {
                    if (func === 'while') {
                        let i = 0;
                        while (await this.expression(args[0]) === 'true' && this.whileOutNumber > i) {
                            await this.runcode(body);
                            ++i;
                        }
                        if (this.whileOutNumber == i && await this.expression(args[0]) === 'true') {
                            console.warn(`解释器：超过循环上限，请联系作品作者，当前上限为：${this.whileOutNumber}\nInterpreter:the cycle limit has exceeded, please contact the author, the current limit is ${this.whileOutNumber}`);
                        }
                    } else if (func === 'for') {
                        await this.runcode('let ' + args[0]);
                        let i = 0;
                        while (await this.expression(args[1]) === 'true' && this.whileOutNumber > i) {
                            await this.runcode(body);
                            await this.runcode('let ' + args[2]);
                            ++i;
                        }
                        if (this.whileOutNumber == i && await this.expression(args[1]) === 'true') {
                            console.warn(`解释器：超过循环上限，请联系作品作者，当前上限为：${this.whileOutNumber}\nInterpreter:the cycle limit has exceeded, please contact the author, the current limit is ${this.whileOutNumber}`);
                        }
                    }
                    resolve('');
                }
                else {
                    if (this.asyncMap.indexOf(func) == -1)
                        checkThreads();
                    else
                        resolver('');
                }
            });
        }
    }


    async expression(args) {

        // 临时函数用于计算比较和逻辑表达式
        const evaluateCondition = (condition) => {
            // 处理括号
            while (condition.match(/\([^()]*\)/)) {
                const innerConditionMatch = condition.match(/\(([^()]+)\)/);
                if (innerConditionMatch) {
                    const innerValue = evaluateCondition(innerConditionMatch[1]);
                    condition = condition.replace(innerConditionMatch[0], innerValue);
                }
            }

            // 处理逻辑运算符
            // 先处理 ! 逻辑运算
            if (condition.startsWith('!')) {
                condition = condition.replace(/!(\S+)/g, (match, inner) => {
                    const value = evaluateCondition(inner);
                    return !value; // 取反
                });
            }

            // 处理 && 和 ||
            const andMatch = condition.split('&&');
            if (andMatch.length > 1) {
                return andMatch.every(part => evaluateCondition(part.trim())); // 所有部分都为真
            }

            const orMatch = condition.split('||');
            if (orMatch.length > 1) {
                return orMatch.some(part => evaluateCondition(part.trim())); // 任何部分为真
            }

            // 处理比较表达式，如 a == b, a < b 等
            const comparisonMatch = condition.match(/([^()=<>!|&]+)\s*([!=<>]=?)\s*([^()=<>!|&]+)/);
            if (comparisonMatch) {
                let left = comparisonMatch[1].trim();
                const operator = comparisonMatch[2];
                let right = comparisonMatch[3].trim();
                let result;

                const isNumeric = (str) => {
                    return !isNaN(str) && !isNaN(parseFloat(str));
                }

                if (isNumeric(left)) left = parseFloat(left);
                if (isNumeric(right)) right = parseFloat(right);

                // 根据操作符计算结果
                switch (operator) {
                    case '==':
                        result = left == right; // 注意类型转换
                        break;
                    case '!=':
                        result = left != right; // 注意类型转换
                        break;
                    case '>':
                        result = left > right;
                        break;
                    case '<':
                        result = left < right;
                        break;
                    case '>=':
                        result = left >= right;
                        break;
                    case '<=':
                        result = left <= right;
                        break;
                    default:
                        return condition; // 不支持的操作符，返回原条件
                }
                return result; // 返回布尔值
            }

            try {
                // 没有匹配，则进行数学运算
                return math.evaluate(condition) || condition;
            } catch (error) {
                return condition; // 如果运算出错，返回原条件
            }
        };

        let v;
        // 替换变量
        v = String(args).replace(/\$([^\s()=<>!|&]+)\$/g, (match, varName) => {
            const value = this.getVariable(varName);
            return value !== null ? value : match; // 如果变量存在，替换为其值；否则返回原始匹配
        });

        // 匹配函数调用，比如 func(param1, param2)
        const functionCallMatch = v.match(/^(\w+)\((.*)\)$/);
        if (functionCallMatch) {
            const funcName = functionCallMatch[1];
            const params = functionCallMatch[2].split(',').map(param => param.trim());
            const s = await this.runCodeRow(funcName, params, null);
            v = String(s); // 不传递函数体
        }

        // 处理比较和逻辑表达式
        const finalResult = String(evaluateCondition(v));
        return finalResult; // 返回最终计算结果
    }

    getVariable = (name) => {
        return this.variableMap[name] || null; // 返回变量值 
    }

}

window.tempExt = {
    Extension: WitCatInterpreter,
    info: {
        name: "WitCatInterpreter.name",
        description: "WitCatInterpreter.descp",
        extensionId: witcat_interpreter_extensionId,
        iconURL: witcat_interpreter_picture,
        insetIconURL: witcat_interpreter_icon,
        featured: true,
        disabled: false,
        collaborator: "白猫 @ CCW",
        collaboratorList: [
            {
                collaborator: '白猫 @ CCW',
                collaboratorURL: 'https://www.ccw.site/student/6173f57f48cf8f4796fc860e'
            },
        ],
    },
    l10n: {
        "zh-cn": {
            "WitCatInterpreter.name": "白猫的解释器",
            "WitCatInterpreter.descp": "更简单的开发模组支持"
        },
        en: {
            "WitCatInterpreter.name": "WitCat’s Interpreter",
            "WitCatInterpreter.descp": "Easier development mod support"
        }
    }
};
