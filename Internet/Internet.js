(function(Scratch) {
  'use strict';
  class Fetch {
    getInfo() {
      return {
        id: 'Internet',
        name: '网页相关',
        color1: '#4D7EB4',
        menuIconURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADPSURBVFhH7c6xCsJAEIThFFaCoMVJ7GysLexs7HwJ3x9RfIdzcaeYZkhCBD2Yj62muPu7+pecNYWzplBZ97hT38UlzDPgoQ9MWmNZz7jLYRk38qFB+U7CpDmLYNKcRTBpziKYNGcRTJqzCCat8azvwieaswg+0RrPwjxDvpMwac4imDRnEUyaswgmzVkEk+YsgklzFsGkOYtg0pxFMGmNZT3izvtF3MiHBuU7CZPWWNYr7nY9xvXbEod5htWmxO3KOg6T1ljWjzlrCmeNV+sbN52MOVG+nU0AAAAASUVORK5CYII=',
        blockIconURI: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAC7SURBVGhD7dgxCsIwFIfxKJ2kHRwK3sLBO3gJz+oRCp5Ci12czaDkkcEtPqHwt/l+EEIGCR9vaQwA6rDK+1cOu/BK+zDaMXH93sHu+VC8Z533v+cKabuNLUV1TkQZIWoIUUOIGkLUEJKlr9Q5lhsTUUNIll5ucyw3JqKGEDWEqCFEDSFqCFFDiBpC1NQZEuPTlqLFTMT1Pj4d9/af0/lytfN4n356X5d0297uaZto59v0KN6zmIkAqEIIb40/LHWtsmPjAAAAAElFTkSuQmCC',
        docsURI: 'https://learn.ccw.site/article/6222ab3e-98fc-4456-b435-c614d9806641',
        blocks: [
          {
            opcode: 'SendPost',
            blockType: Scratch.BlockType.COMMAND,
            blockAllThreads: false,
            text: '发送Post请求到 [SERVER] 服务器',
            arguments: {
              SERVER: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "https://ccw.site/",
              },
            },
            func: 'SendPost'
          },
          {
            opcode: 'SendGet',
            blockType: Scratch.BlockType.REPORTER,
            branchCount: 0,
            isTerminal: true,
            blockAllThreads: false,
            text: '发送Get请求到 [SERVER] 服务器并返回结果',
            arguments: {
              SERVER: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "https://ccw.site/",
              },
            },
            func: 'SendGet',
            filter: ['someBlocks.wedo2', 'sprite', 'stage']
          },
          {
            opcode: 'RunJS',
            blockType: Scratch.BlockType.COMMAND,
            blockAllThreads: false,
            text: '执行JS命令 [ANS]',
            arguments: {
              ANS: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "alert('网页相关');",
              },
            },
            func: 'RunJS'
          }
        ],
      }
    }
    SendPost(args) {
      var url = args.SERVER;
      var httpRequest = new XMLHttpRequest();
      httpRequest.open('POST',url,true);
      httpRequest.send();
      return true;
    }
    SendGet(args) {
      return Scratch.fetch(args.SERVER)
        .then(r => r.text())
        .catch(() => '');
    }
    RunJS(args) {
      var run = new Function(args.ANS);
      run();
      return true;
    }
  }
  Scratch.extensions.register(new Fetch());
})(Scratch);
