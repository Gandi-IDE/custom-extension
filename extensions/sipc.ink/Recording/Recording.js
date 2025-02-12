(function (Scratch) {
  "use strict";
  let mediaRecorder;
  let recordedChunks = [];
  let isRecording = false;
  const cover =
    "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI2MDAiIGhlaWdodD0iMzAwIiB2aWV3Qm94PSIwLDAsNjAwLDMwMCI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjAsLTMwKSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTS02MCwzMzB2LTMwMGg2MDB2MzAweiIgZmlsbD0iIzY5Njk2OSIvPjxwYXRoIGQ9Ik0yOTEuNTE1NzUsMTY5LjMxMTA4YzIuODQwNjksMCA1LjE0MzU0LDIuMzAyODYgNS4xNDM1NCw1LjE0MzU0YzAsMjkuNTMwNjcgLTIyLjU5MTg4LDUzLjc4NDY5IC01MS40MzQ5MSw1Ni40MjE1N2wtMC4wMDA0OCwxMC42ODU1NWgzMS4xODI3MWMyLjg0MDY5LDAgNS4xNDM1NCwyLjMwMjg1IDUuMTQzNTQsNS4xNDM1NGMwLDIuODQwNjggLTIuMzAyODUsNS4xNDM1NCAtNS4xNDM1NCw1LjE0MzU0aC03Mi42NTI0OWMtMi44NDA2OCwwIC01LjE0MzU0LC0yLjMwMjg2IC01LjE0MzU0LC01LjE0MzU0YzAsLTIuODQwNjggMi4zMDI4NSwtNS4xNDM1NCA1LjE0MzU0LC01LjE0MzU0aDMxLjE4MjcxbC0wLjAwMDQ5LC0xMC42NzEwOGMtMjguOTE5ODcsLTIuNTYxMTUgLTUxLjU5NTY0LC0yNi44NTA1NiAtNTEuNTk1NjQsLTU2LjQzNjAzYzAsLTIuODQwNjggMi4zMDI4NSwtNS4xNDM1NCA1LjE0MzU0LC01LjE0MzU0YzIuODEyMjQsMCA1LjA5NzQxLDIuMjU3MDYgNS4xNDI5LDUuMDU4MzVsMC4wMDA2NCwwLjA4NTE5YzAsMjUuNjEwNjUgMjAuNzYxNTgsNDYuMzcyMjIgNDYuMzcyMjIsNDYuMzcyMjJjMjUuMzU0NDMsMCA0NS45NTY1NiwtMjAuMzQ4MzIgNDYuMzY1OTUsLTQ1LjYwNTUxbDAuMDA2MjcsLTAuNzY2NzFjMCwtMi44NDA2OCAyLjMwMjg1LC01LjE0MzU0IDUuMTQzNTQsLTUuMTQzNTR6TTI0MC4wODAzNiwxMDguMTUxMThjMTkuNzczODUsMCAzNS44NDEzMSwxNS44Njk1OSAzNi4xNjA2OSwzNS41Njc1N2wwLjAwNDgzLDAuNTk3OTV2MjkuODk2ODNjMCwxOS45NzM2NSAtMTYuMTkxODYsMzYuMTY1NTEgLTM2LjE2NTUxLDM2LjE2NTUxYy0xOS43NzM4NSwwIC0zNS44NDEzLC0xNS44Njk2IC0zNi4xNjA2OSwtMzUuNTY3NTdsLTAuMDA0ODEsLTAuNTk3OTN2LTI5Ljg5NjgyYzAsLTE5Ljk3MzY1IDE2LjE5MTg2LC0zNi4xNjU1MSAzNi4xNjU1LC0zNi4xNjU1MXpNMjQwLjA4MDM2LDExOC40MzgyN2MtMTQuMTQ5MzksMCAtMjUuNjQ2NDgsMTEuMzU1NjUgLTI1Ljg3NDg4LDI1LjQ1MDU1bC0wLjAwMzU0LDAuNDI3ODh2MjkuODk2ODNjMCwxNC4yOTIyOSAxMS41ODYxMywyNS44Nzg0NCAyNS44Nzg0MiwyNS44Nzg0NGMxNC4xNDkzOSwwIDI1LjY0NjUsLTExLjM1NTY1IDI1Ljg3NDg5LC0yNS40NTA1NmwwLjAwMzU0LC0wLjQyNzg4di0yOS44OTY4MmMwLC0xNC4yOTIyOSAtMTEuNTg2MTUsLTI1Ljg3ODQyIC0yNS44Nzg0NCwtMjUuODc4NDJ6TTI2MC4wOTg4NSwxNjAuMDAzMDRjMi43OTQ4OCwxNC4zNzgyOCAtNi41OTUyOSwyOC4yOTk3NSAtMjAuOTczNTgsMzEuMDk0NjNjLTIuNzg4NDQsMC41NDIgLTUuNDg4NDgsLTEuMjc5MTMgLTYuMDMwNDgsLTQuMDY3NThjLTAuNTM2NTMsLTIuNzYwNjMgMS4yNDI5NywtNS40MzQ0NyAzLjk4NDMxLC02LjAxMzZsMC4wODMyNiwtMC4wMTY4N2M4LjcxMzMxLC0xLjY5MzY3IDE0LjQzNDA2LC0xMC4wNjI2OSAxMi44ODc0NiwtMTguNzY5NzRsLTAuMDQ5MDMsLTAuMjYzOTNjLTAuNTQyLC0yLjc4ODQ0IDEuMjc5MTMsLTUuNDg4NDcgNC4wNjc1OCwtNi4wMzA0N2MyLjc4ODYsLTAuNTQyIDUuNDg4NDgsMS4yNzkxMyA2LjAzMDQ4LDQuMDY3NTd6IiBmaWxsPSIjZmZmZmZmIi8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MzAwLjAwMDAwMDAwMDAwMDI6MTUwLS0+";
  const icon =
    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjg1MTAzNzAzNDU1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMzMjIiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guNzc4MTA2OS4wLmkxIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxwYXRoIGQ9Ik04MzMgNDQ1LjVjMTcuNjczIDAgMzIgMTQuMzI3IDMyIDMyIDAgMTgzLjcyMi0xNDAuNTUzIDMzNC42MTYtMzE5Ljk5NyAzNTEuMDIxTDU0NSA4OTVoMTk0YzE3LjY3MyAwIDMyIDE0LjMyNyAzMiAzMiAwIDE3LjY3My0xNC4zMjcgMzItMzIgMzJIMjg3Yy0xNy42NzMgMC0zMi0xNC4zMjctMzItMzIgMC0xNy42NzMgMTQuMzI3LTMyIDMyLTMyaDE5NGwtMC4wMDMtNjYuMzg5QzMwMS4wNzUgODEyLjY3NyAxNjAgNjYxLjU2MyAxNjAgNDc3LjVjMC0xNy42NzMgMTQuMzI3LTMyIDMyLTMyIDE3LjQ5NiAwIDMxLjcxMyAxNC4wNDIgMzEuOTk2IDMxLjQ3bDAuMDA0IDAuNTNDMjI0IDYzNi44MzQgMzUzLjE2NiA3NjYgNTEyLjUgNzY2YzE1Ny43NCAwIDI4NS45MTQtMTI2LjU5NSAyODguNDYxLTI4My43M2wwLjAzOS00Ljc3YzAtMTcuNjczIDE0LjMyNy0zMiAzMi0zMnpNNTEzIDY1YzEyMy4wMjEgMCAyMjIuOTgzIDk4LjczMSAyMjQuOTcgMjIxLjI4TDczOCAyOTB2MTg2YzAgMTI0LjI2NC0xMDAuNzM2IDIyNS0yMjUgMjI1LTEyMy4wMjEgMC0yMjIuOTgzLTk4LjczMS0yMjQuOTctMjIxLjI4TDI4OCA0NzZWMjkwYzAtMTI0LjI2NCAxMDAuNzM2LTIyNSAyMjUtMjI1eiBtMCA2NGMtODguMDI5IDAtMTU5LjU1NyA3MC42NDgtMTYwLjk3OCAxNTguMzM4TDM1MiAyOTB2MTg2YzAgODguOTE4IDcyLjA4MiAxNjEgMTYxIDE2MSA4OC4wMjkgMCAxNTkuNTU3LTcwLjY0OCAxNjAuOTc4LTE1OC4zMzhMNjc0IDQ3NlYyOTBjMC04OC45MTgtNzIuMDgyLTE2MS0xNjEtMTYxeiBtMTI0LjU0MyAyNTguNTkxYzE3LjM4OCA4OS40NTMtNDEuMDMyIDE3Ni4wNjQtMTMwLjQ4NSAxOTMuNDUyLTE3LjM0OCAzLjM3Mi0zNC4xNDYtNy45NTgtMzcuNTE4LTI1LjMwNi0zLjMzOC0xNy4xNzUgNy43MzMtMzMuODEgMjQuNzg4LTM3LjQxM2wwLjUxOC0wLjEwNWM1NC4yMDktMTAuNTM3IDg5LjgtNjIuNjA0IDgwLjE3OC0xMTYuNzc0bC0wLjMwNS0xLjY0MmMtMy4zNzItMTcuMzQ4IDcuOTU4LTM0LjE0NiAyNS4zMDYtMzcuNTE4IDE3LjM0OS0zLjM3MiAzNC4xNDYgNy45NTggMzcuNTE4IDI1LjMwNnoiIGZpbGw9IiNmZmZmZmYiIHAtaWQ9IjMzMjMiPjwvcGF0aD48L3N2Zz4=";
  const icon2 =
    "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNjg1MTAzNzAzNDU1IiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjMzMjIiIGRhdGEtc3BtLWFuY2hvci1pZD0iYTMxM3guNzc4MTA2OS4wLmkxIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiPjxwYXRoIGQ9Ik04MzMgNDQ1LjVjMTcuNjczIDAgMzIgMTQuMzI3IDMyIDMyIDAgMTgzLjcyMi0xNDAuNTUzIDMzNC42MTYtMzE5Ljk5NyAzNTEuMDIxTDU0NSA4OTVoMTk0YzE3LjY3MyAwIDMyIDE0LjMyNyAzMiAzMiAwIDE3LjY3My0xNC4zMjcgMzItMzIgMzJIMjg3Yy0xNy42NzMgMC0zMi0xNC4zMjctMzItMzIgMC0xNy42NzMgMTQuMzI3LTMyIDMyLTMyaDE5NGwtMC4wMDMtNjYuMzg5QzMwMS4wNzUgODEyLjY3NyAxNjAgNjYxLjU2MyAxNjAgNDc3LjVjMC0xNy42NzMgMTQuMzI3LTMyIDMyLTMyIDE3LjQ5NiAwIDMxLjcxMyAxNC4wNDIgMzEuOTk2IDMxLjQ3bDAuMDA0IDAuNTNDMjI0IDYzNi44MzQgMzUzLjE2NiA3NjYgNTEyLjUgNzY2YzE1Ny43NCAwIDI4NS45MTQtMTI2LjU5NSAyODguNDYxLTI4My43M2wwLjAzOS00Ljc3YzAtMTcuNjczIDE0LjMyNy0zMiAzMi0zMnpNNTEzIDY1YzEyMy4wMjEgMCAyMjIuOTgzIDk4LjczMSAyMjQuOTcgMjIxLjI4TDczOCAyOTB2MTg2YzAgMTI0LjI2NC0xMDAuNzM2IDIyNS0yMjUgMjI1LTEyMy4wMjEgMC0yMjIuOTgzLTk4LjczMS0yMjQuOTctMjIxLjI4TDI4OCA0NzZWMjkwYzAtMTI0LjI2NCAxMDAuNzM2LTIyNSAyMjUtMjI1eiBtMCA2NGMtODguMDI5IDAtMTU5LjU1NyA3MC42NDgtMTYwLjk3OCAxNTguMzM4TDM1MiAyOTB2MTg2YzAgODguOTE4IDcyLjA4MiAxNjEgMTYxIDE2MSA4OC4wMjkgMCAxNTkuNTU3LTcwLjY0OCAxNjAuOTc4LTE1OC4zMzhMNjc0IDQ3NlYyOTBjMC04OC45MTgtNzIuMDgyLTE2MS0xNjEtMTYxeiBtMTI0LjU0MyAyNTguNTkxYzE3LjM4OCA4OS40NTMtNDEuMDMyIDE3Ni4wNjQtMTMwLjQ4NSAxOTMuNDUyLTE3LjM0OCAzLjM3Mi0zNC4xNDYtNy45NTgtMzcuNTE4LTI1LjMwNi0zLjMzOC0xNy4xNzUgNy43MzMtMzMuODEgMjQuNzg4LTM3LjQxM2wwLjUxOC0wLjEwNWM1NC4yMDktMTAuNTM3IDg5LjgtNjIuNjA0IDgwLjE3OC0xMTYuNzc0bC0wLjMwNS0xLjY0MmMtMy4zNzItMTcuMzQ4IDcuOTU4LTM0LjE0NiAyNS4zMDYtMzcuNTE4IDE3LjM0OS0zLjM3MiAzNC4xNDYgNy45NTggMzcuNTE4IDI1LjMwNnoiIGZpbGw9IiNmZmZmZmYiIHAtaWQ9IjMzMjMiPjwvcGF0aD48L3N2Zz4=";
  Scratch.translate.setup({
    zh: {
      Recording_startRecording: "开始录音",
      Recording_stopRecording: "停止录音",
      Recording_stopRecordingAndDownload: "停止录音并用 [name] 作为文件名下载",
      Recording_isRecording: "录音？",
      Recording_Recordingdata: "音频数据",
      Recording_error: "浏览器不支持录音功能",
    },
  });
  class Recording {
    getInfo() {
      return {
        id: "sipc.ink.Recording",
        name: "Recording",
        color1: "#696969",
        menuIconURI: icon,
        blockIconURI: icon2,
        blocks: [
          {
            opcode: "startRecording",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({
              id: "Recording_startRecording",
              default: "Start Recording",
            }),
            arguments: {},
          },
          {
            opcode: "stopRecording",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({
              id: "Recording_stopRecording",
              default: "Stop Recording",
            }),
            arguments: {},
          },
          {
            opcode: "stopRecordingAndDownload",
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({
              id: "Recording_stopRecordingAndDownload",
              default: "Stop recording and download as [name] file",
            }),
            arguments: {
              name: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "recording.wav",
              },
            },
          },
          {
            opcode: "isRecording",
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate({
              id: "Recording_isRecording",
              default: "Is Recording?",
            }),
            arguments: {},
          },
          {
            opcode: "Recordingdata",
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate({
              id: "Recording_Recordingdata",
              default: "Recording data",
            }),
            arguments: {},
          },
        ],
      };
    }
    startRecording() {
      recordedChunks = [];
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        console.error("The browser does not support the recording function");
        return;
      }
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then(function (stream) {
          mediaRecorder = new MediaRecorder(stream);
          isRecording = true;
          mediaRecorder.addEventListener("dataavailable", function (e) {
            recordedChunks.push(e.data);
          });
          mediaRecorder.start();
          console.log("Start Recording");
        })
        .catch(function (err) {
          console.error("Unable to access audio device:", err);
        });
    }
    stopRecording() {
      if (!mediaRecorder) {
        console.error("Recording has not started");
        return;
      }
      isRecording = false;
      mediaRecorder.stop();
      console.log("Stop recording");
    }
    stopRecordingAndDownload({ name }) {
      if (!mediaRecorder) {
        console.error("Recording has not started");
        return;
      }
      isRecording = false;
      mediaRecorder.stop();
      console.log("Stop recording");
      mediaRecorder.addEventListener("dataavailable", function (e) {
        recordedChunks.push(e.data);
      });
      mediaRecorder.addEventListener("stop", function () {
        const blob = new Blob(recordedChunks, { type: "audio/wav" });
        const url = URL.createObjectURL(blob);
        const downloadLink = document.createElement("a");
        downloadLink.href = url;
        downloadLink.download = name;
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(url);
      });
    }
    isRecording() {
      return isRecording;
    }
    Recordingdata() {
      return new Promise((resolve) => {
        const blob = new Blob(recordedChunks, { type: "audio/wav" });
        const reader = new FileReader();
        reader.onload = function () {
          const dataURL = reader.result;
          resolve(dataURL);
        };
        reader.readAsDataURL(blob);
      });
    }
  }
  Scratch.extensions.register(new Recording());
//   window.tempExt = {
//     Extension: Recording,
//     info: {
//       name: "Recording",
//       description: "Recording.Description",
//       extensionID: "sipc.ink.Recording",
//       iconURL: cover,
//       insetIconURL: icon,
//       collaborator: "sipc.ink@CCW",
//     },
//     l10n: {
//       "zh-cn": {
//         "Recording.Description": "从网易云,URL获取并播放音乐",
//       },
//       en: {
//         "Recording.Description": "Get and play music from netease cloud,URL",
//       },
//     },
//   };
})(Scratch);

//BY -SIPC- 502415953
