class MusicExtension {
    constructor(runtime) {
      this.runtime = runtime;
      this.audioElement = null;
      Scratch.translate.setup({
        zh: {
          CloudMusic_SearchMusic: '搜索音乐 [name]',
          CloudMusic_Getmusic: '获取音乐url [id]',
          CloudMusic_Getlyrics: '获取 [id] 的歌词',
          CloudMusic_Gettranslatedlyrics: '获取 [id] 的翻译歌词',
          CloudMusic_getcover: '获取 [id] 的封面',
          CloudMusic_playmusic: '从 [url] 播放音乐',
          CloudMusic_Getradiotracks: '获取电台节目 [id]',
          CloudMusic_WebIDtomusicID: '电台音乐ID转音乐ID [id]',
          CloudMusic_resumemusic: '播放音乐',
          CloudMusic_pausemusic: '暂停音乐',
          CloudMusic_stopmusic: '停止音乐',
          CloudMusic_jumptotime: '跳转到时间 [time] 秒',
          CloudMusic_adjustthevolume: '将音量调到 [volume]',
          CloudMusic_Ismusicplaying: '是否正在播放音乐?',
          CloudMusic_Getplaytime: '音乐播放时间（秒）',
          CloudMusic_Getthetotaldurationofmusic: '音乐总时长（秒）',
          CloudMusic_Getcurrenttimelyrics: '[lyricsText] 在 [currentTime] 时显示',
          CloudMusic_Getthelineoflyricsatthecurrenttime: '[lyricsText] 在 [currentTime] 时是第几行',
          CloudMusic_Getthelyricstimeofthefirstfewlines: '[lyricsText] 在 [currentTime] 行时是第几秒',
          CloudMusic_lyrics: '歌词',
          CloudMusic_time: '时间'
        }
      })
    }
    getInfo() {
      return {
        id: 'sipc.ink.CloudMusic',
        name: 'CloudMusic',
        color1: "#4d4d4f",
        blocks: [
          {
            opcode: 'SearchMusic',
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate({ id: "CloudMusic_SearchMusic", default: "Search Music [name]" }),
            arguments: {
              name: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: "Let's live"
              }
            }
          },
          {
            opcode: 'Getmusic',
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate({ id: "CloudMusic_Getmusic", default: "Get music url [id]" }),
            arguments: {
              id: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '1952657896'
              }
            }
          },
          {
            opcode: 'Getlyrics',
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate({ id: "CloudMusic_Getlyrics", default: "Get the lyrics of [id]" }),
            arguments: {
              id: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '1952657896'
              }
            }
          },
          {
            opcode: 'Gettranslatedlyrics',
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate({ id: "CloudMusic_Gettranslatedlyrics", default: "Get [id]'s translated lyrics" }),
            arguments: {
              id: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '1952657896'
              }
            }
          },
          {
            opcode: 'getCover',
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate({ id: "CloudMusic_getcover", default: "Get the cover of [id]" }),
            arguments: {
              id: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '1952657896'
              }
            }
          },
          {
            opcode: 'playMusic',
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({ id: "CloudMusic_playmusic", default: "Play music from [url]" }),
            arguments: {
              url: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: 'https://example.com/music.mp3'
              }
            }
          },
          {
            opcode: 'Getradiotracks',
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate({ id: "CloudMusic_Getradiotracks", default: "Get radio program [id]" }),
            arguments: {
              id: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '350080224'
              }
            }
          },
          {
            opcode: 'WebIDtomusicID',
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate({ id: "CloudMusic_WebIDtomusicID", default: "Radio Music ID to Music ID [id]" }),
            arguments: {
              id: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: '2521984465'
              }
            }
          },
          {
            opcode: 'resumeMusic',
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({ id: "CloudMusic_resumemusic", default: "Play Music" })
          },
          {
            opcode: 'pauseMusic',
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({ id: "CloudMusic_pausemusic", default: "Pause Music" })
          },
          {
            opcode: 'stopMusic',
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({ id: "CloudMusic_stopmusic", default: "Stop Music" })
          },
          {
            opcode: 'jumpTotime',
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({ id: "CloudMusic_jumptotime", default: "Skip to time [time] seconds" }),
            arguments: {
              time: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 0
              }
            }
          },
          {
            opcode: 'adjustthevolume',
            blockType: Scratch.BlockType.COMMAND,
            text: Scratch.translate({ id: "CloudMusic_adjustthevolume", default: "Adjust the volume to [volume]" }),
            arguments: {
              volume: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: 100
              }
            }
          },
          {
            opcode: 'Ismusicplaying',
            blockType: Scratch.BlockType.BOOLEAN,
            text: Scratch.translate({ id: "CloudMusic_Ismusicplaying", default: "Is music playing?" })
          },
          {
            opcode: 'Getplaytime',
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate({ id: "CloudMusic_Getplaytime", default: "Music play time (sec)" })
          },
          {
            opcode: 'Getthetotaldurationofmusic',
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate({ id: "CloudMusic_Getthetotaldurationofmusic", default: "Current time lyrics (sec)" })
          },
          {
            opcode: 'Getcurrenttimelyrics',
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate({ id: "CloudMusic_Getcurrenttimelyrics", default: "[lyricsText] is shown at [currentTime]" }),
            arguments: {
              lyricsText: {
                type: Scratch.ArgumentType.STRING,
                defaultValue: Scratch.translate({ id: "CloudMusic_lyrics", default: "lyricsText" })
              },
              currentTime: {
                type: Scratch.ArgumentType.NUMBER,
                defaultValue: Scratch.translate({ id: "CloudMusic_time", default: "currentTime" })
              }
            }
          },
          {
            opcode: 'Getthelineoflyricsatthecurrenttime',
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate({ id: "CloudMusic_Getthelineoflyricsatthecurrenttime", default: "[lyricsText] is in line at [currentTime]" }),
            arguments: {
                lyricsText: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: Scratch.translate({ id: "CloudMusic_lyrics", default: "lyricsText" })
                },
                currentTime: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: Scratch.translate({ id: "CloudMusic_time", default: "currentTime" })
                }
              }
          },
          {
            opcode: 'Getthelyricstimeofthefirstfewlines',
            blockType: Scratch.BlockType.REPORTER,
            text: Scratch.translate({ id: "CloudMusic_Getthelyricstimeofthefirstfewlines", default: "[lyricsText] in [currentTime] line is the first second" }),
            arguments: {
                lyricsText: {
                  type: Scratch.ArgumentType.STRING,
                  defaultValue: Scratch.translate({ id: "CloudMusic_lyrics", default: "lyricsText" })
                },
                currentTime: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: Scratch.translate({ id: "CloudMusic_time", default: "currentTime" })
                }
              }
          },
        ],
      };
    }
    //音乐部分
    SearchMusic(args) {
      return new Promise((resolve, reject) => {
        const url = `https://163.sipc-api.top/search?keywords=${args.name}`;
        fetch(url)
          .then(response => response.json())
          .then(data => {
            const songs = data.result.songs;
            function extractSongInfo(songs) {
              return songs.map(song => {
                const artists = song.artists;
                const firstArtistName = artists.length > 0 ? artists[0].name : '';
                return { id: song.id, name: song.name, artists: firstArtistName };
              });
            }
            const songInfo = extractSongInfo(songs);
            const songInfoString = JSON.stringify(songInfo);
            resolve(songInfoString);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  
    Getmusic(args) {
      return new Promise((resolve, reject) => {
        const url = `https://163.sipc-api.top/song/url?id=${args.id}`;
        fetch(url)
          .then(response => response.json())
          .then(data => {
            function getMusicUrl(data) {
              return new Promise((resolve, reject) => {
                if (data && data.code === 200 && data.data && data.data.length > 0) {
                  resolve(data.data[0].url.replace(/^http:/, 'https:'));
                } else {
                  reject(new Error('Unable to get music download link'));
                }
              });
            }
            const songInfo = getMusicUrl(data);
            resolve(songInfo);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
    getCover(args) {
      return new Promise((resolve, reject) => {
        const url = `https://163.sipc-api.top/song/detail?ids=${args.id}`;
        fetch(url)
          .then(response => response.json())
          .then(data => {
            const picUrl = data.songs[0].al.picUrl;
            resolve(picUrl);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  
    playMusic(args) {
      const url = args.url;
      if (this.audioElement) {
        this.audioElement.pause();
      }
  
      this.audioElement = new Audio(url);
      this.audioElement.play();
    }
    Getlyrics(args) {
      const cacheKey = `lyrics_${args.id}`;
      const cachedLyrics = localStorage.getItem(cacheKey);
      if (cachedLyrics) {
        return Promise.resolve(cachedLyrics);
      }
      return new Promise((resolve, reject) => {
        const url = `https://163.sipc-api.top/lyric?id=${args.id}`;
        fetch(url)
          .then(response => response.json())
          .then(data => {
            const lrc = data.lrc.lyric;
            localStorage.setItem(cacheKey, lrc);
            resolve(lrc);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
    Gettranslatedlyrics(args) {
      const cacheKey = `tranlates_lyrics_${args.id}`;
      const cachedLyrics = localStorage.getItem(cacheKey);
      if (cachedLyrics) {
        return Promise.resolve(cachedLyrics);
      }
      return new Promise((resolve, reject) => {
        const url = `https://163.sipc-api.top/lyric?id=${args.id}`;
        fetch(url)
          .then(response => response.json())
          .then(data => {
            const lrc = data.tlyric.lyric;
            localStorage.setItem(cacheKey, lrc);
            resolve(lrc);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  
    //电台部分
    Getradiotracks(args) {
      return new Promise((resolve, reject) => {
        const url = `https://163.sipc-api.top/dj/program?rid=${args.id}`;
        fetch(url)
          .then(response => response.json())
          .then(data => {
            if (data && data.code === 200 && data.programs && data.programs.length > 0) {
              const formattedData = data.programs.map(program => ({
                name: program.mainSong.name,
                id: program.mainSong.id
              }));
              resolve(JSON.stringify(formattedData));
            } else {
              reject(new Error('Unable to get station information'));
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    }
    WebIDtomusicID(args) {
      return new Promise((resolve, reject) => {
        const url = `https://163.sipc-api.top/dj/program/detail?id=${args.id}`;
        fetch(url)
          .then(response => response.json())
          .then(data => {
            const songId = data.program.mainSong.id;
            resolve(songId);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
    //控制部分
    pauseMusic() {
      if (this.audioElement) {
        this.audioElement.pause();
      }
    }
  
    resumeMusic() {
      if (this.audioElement) {
        this.audioElement.play();
      }
    }
  
    stopMusic() {
      if (this.audioElement) {
        this.audioElement.pause();
        this.audioElement = null;
      }
    }
    jumpTotime(args) {
      const time = args.time;
      if (this.audioElement) {
        this.audioElement.currentTime = time;
      }
    }
    adjustthevolume(args) {
      if (this.audioElement) {
        const volumePercent = args.volume;
        if (volumePercent >= 0 && volumePercent <= 100) {
          const volume = volumePercent / 100;
          this.audioElement.volume = volume;
        }
      }
    }
    //信息部分
    Ismusicplaying() {
      if (this.audioElement) {
        if (!this.audioElement.paused && !this.audioElement.ended) {
          return true;
        } else if (this.audioElement.paused) {
          return "pause";
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  
    Getplaytime() {
      if (this.audioElement) {
        return this.audioElement.currentTime;
      }
      return 0;
    }
  
    Getthetotaldurationofmusic() {
      if (this.audioElement) {
        return this.audioElement.duration;
      }
      return 0;
    }
    Getcurrenttimelyrics(args) {
      const lines = args.lyricsText.trim().split('\n');
      const lyrics = [];
  
      for (let line of lines) {
        const matches = line.match(/\[(\d+):(\d+\.\d+)\](.*)/);
        if (matches) {
          const time = parseFloat(matches[1]) * 60 + parseFloat(matches[2]);
          const text = matches[3].trim();
          lyrics.push({ time, text });
        }
      }
  
      for (let i = lyrics.length - 1; i >= 0; i--) {
        const { time, text } = lyrics[i];
        if (time <= args.currentTime) {
          return text;
        }
      }
      return '';
    }
  
    Getthelineoflyricsatthecurrenttime(args) {
      const lines = args.lyricsText.trim().split('\n');
      const currentTime = args.currentTime;
  
      for (let i = lines.length - 1; i >= 0; i--) {
        const matches = lines[i].match(/\[(\d+):(\d+\.\d+)\](.*)/);
        if (matches) {
          const time = parseFloat(matches[1]) * 60 + parseFloat(matches[2]);
          if (time <= currentTime) {
            return i + 1;
          }
        }
      }
      return 0;
    }
    Getthelyricstimeofthefirstfewlines(args){
      const lines = args.lyricsText.trim().split('\n');
      if (!lines || lines.length === 0) {
        return '0';
      }
      if (args.linenumber < 0 || args.linenumber >= lines.length) {
        return '0';
      }
      const line = lines[args.linenumber];
      if (!line) {
        return '0';
      }  
      const matches = line.match(/\[(\d+):(\d+\.\d+)\](.*)/);
      if (!matches) {
        return '0';
      }
      const minutes = parseFloat(matches[1]);
      const seconds = parseFloat(matches[2]);
      if (isNaN(minutes) || isNaN(seconds)) {
        return '0';
      }
      return minutes * 60 + seconds; 
    }
  }
  Scratch.extensions.register(new MusicExtension());
  const tempExt = {
    Extension: MusicExtension,
    info: {
        name: 'CloudMusic',
        description: 'CloudMusic.Description',
        extensionID: 'sipc.ink.CloudMusic',
        // iconURL: 'cover.svg',
        // insetIconURL: 'cover.svg',
        collaborator: 'sipc.ink@Gandi'
    },
    l10n: {
        'zh': {
            'CloudMusic.Description':'从网易云,URL获取并播放音乐'
        },
        'en': {
            'CloudMusic.Description':'Get and play music from netease cloud,URL'
        }
    },
}
//BY -SIPC- 502415953