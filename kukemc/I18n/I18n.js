import moment from "moment-timezone";
import {franc, francAll} from 'franc-min'
import pinyin from "pinyin";


const kukemc_i18n_cover =
  "data:image/jpeg;base64,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FSgyxk5fG4+CB589yzd1U7llGHF7ESlLTvCZfjiioaOKlgGIo24Hp85+dYprC6ABtDGfM+XH6B+/6F212vDLVSGV2HTO4RsPefP6gsClmfPI6SRxc9xyXHvKaEd8saiDm+9kVUFURdKO4kioCqpkwJA5VVBSBynAqpA5UUTJilwFFEFE2SDhIiLOLQiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIgAiIoAoQqKSoQoGTKIiKCQiIgAiIgAiIgAiIgAiIgDkW+vmttS2aF2HDgQeTh5is7tN1gu0W/Ed2UePEeY9o9K88U4J5KWVssTzHI3iHNPFSjmuoVq/2en1FDTXKmMNTGJG9x72nzg9y6GmsdTp24iopXmppXeDJHyfu+rvwrVr1kyQCOtHZv5dq0eCfWO5d724njD4ntkYeTmnITJZMuUrKMxktn+x2D2QXOjkpagb0UgwfOPMR6QvNb1ZZ7JVmKUbzDxjlA4PHt9CziOdzDzV2olirYDFPG2WM/guGUdgtOo8N78Hb9qO1Xllkss97qxFEN1g4ySkcGD2+hZ77s481SnliooBFBG2KMfgtGEdrQVajw08cs5zGQW2jjpacbsUYwPOfOfWsXqLJU6huJqKpxpqVvgsZzfu+ruyu1knc8qQnEEZfK9sbBzc44CntwVwucXlcsv09FTW6nENNGI29/ncfOSuBdLnBao9+Q70h8SIHifYF1lz1gyMGOiHaP5dq8cB6h3rFpp5KmV0krzI93EuceKjB2V6eU33WF2urpbhUOmmdlx4AdwHmC44RE62NRJJYRIKqgFIJkwKqoKoidCkkVAVVMmBIHKqoKQOU4FURFORcHEREXCWBERABERABERABERABERABERABERABERABERABERABERABERABERQBQhUUlQhQMmUREUEhERABERABERABERABERABXqasno370Er4j+KcZ9asoghpPZneU+raqMATRxzjz43T+jh+hc2PV9O4e+U0jD+K4H2LFkTKTRyy0tMv8TLhqyiP+jqM/wAke1W5NXQNHvdNI/8AlOA9qxVVBU97K/6Opex3lRquqkBETI4R58bx/Tw/QuqqauerfvTSvlP4x5epWUUZb5OiFUIeVBVCoiksJBVUQqhSBVAiJgJBVUApBMmBVVBVEToUkioCqpkwJbyKKJsgcdERcYwREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREQAREUAUIVFJUIUDJlERFBIREQAREQAREQAREQAREQAREQAREQBUFVUVUFArRVERMmQFUKiKQJBVUQqhSBVAiJgJBVUApBMmBVVBVEToUkioCikCwiIuYYIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiIAIiKAKEKikqEKBkyiIigkIiIAIiIAIiIAIiIAIiIAIiIAIiIAqCqqKqCgVoqiImTICqFRFIEgqqIVQpAqgREwEgqqAUgmTAqiImFLKIioGCIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIiACIigChCopKhCj/QyKIiKCQiIgAiIgAiIgAiIgAiIgAiIgAiIgCoKqoqQ5IFYRETIgKoVEUgSCqqAKqlAECImAkEUUTAf/2Q==";

const kukemc_i18n_icon =
  "data:image/svg+xml;charset=utf-8;base64,PHN2ZyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHdpZHRoPSc3Ny45Nzc4NCcgaGVpZ2h0PSc3Ny45Nzc4NCcgdmlld0JveD0nMCwwLDc3Ljk3Nzg0LDc3Ljk3Nzg0Jz48ZyB0cmFuc2Zvcm09J3RyYW5zbGF0ZSgtMjgxLjAxMTA4LC0xNDEuMDExMDgpJz48ZyBkYXRhLXBhcGVyLWRhdGE9J3smcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0nIGZpbGwtcnVsZT0nbm9uemVybycgc3Ryb2tlPSdub25lJyBzdHJva2UtbGluZWNhcD0nYnV0dCcgc3Ryb2tlLWxpbmVqb2luPSdtaXRlcicgc3Ryb2tlLW1pdGVybGltaXQ9JzEwJyBzdHJva2UtZGFzaGFycmF5PScnIHN0cm9rZS1kYXNob2Zmc2V0PScwJyBzdHlsZT0nbWl4LWJsZW5kLW1vZGU6IG5vcm1hbCc+PHBhdGggZD0nTTMyMCwxNDhjMTcuNjczMTEsMCAzMiwxNC4zMjY4OSAzMiwzMmMwLDE3LjY3MzExIC0xNC4zMjY4OSwzMiAtMzIsMzJjLTE3LjY3MzExLDAgLTMyLC0xNC4zMjY4OSAtMzIsLTMyYzAsLTE3LjY3MzExIDE0LjMyNjg5LC0zMiAzMiwtMzJ6TTI5Ni4xNzIsMTczLjU5MmMtMC4yOTYsMC4yOTYgLTAuMjk2LDAuMjk2IDAsMC41ODRjLTAuNzg4LDEuMjc2IC0yLjQ4LDEuNDMyIC0zLjY5MiwwLjY2NGMtMS4zOTYwMiw3LjQ1Mzg0IDAuMjkwMTksMTUuMTU1MTkgNC42NzMyLDIxLjM0MzcyYzQuMzgzMDEsNi4xODg1MyAxMS4wODgxNSwxMC4zMzUyMyAxOC41ODI4LDExLjQ5MjI4bC0wLjAyNCwtMC4wMmwtMC40OCwtMC4yNGMwLjksLTAuMjg4IDIuMDkyLC0wLjI4OCAyLjk4LC0wLjI4OGMtMC4yOTYsLTEuNzUyIC0wLjI5NiwtMy4yMDQgLTAuMjk2LC00Ljk2YzAsMCAtNi44NDgsLTQuOTUyIC02Ljg0OCwtNy44NzJjMCwtMi45MiAwLjg5MiwtNC4zNzIgMCwtNC4zNzJjLTEuNDkyLDAgLTMuMjgsMS4xNjggLTMuNTc2LDBjLTAuNTk2LC0xLjc1MiAtMS43ODgsLTMuMjA4IC0zLjU3NiwtMy43ODhjLTQuMSwwIC00LjY4OCwtNC40MTYgLTQuNzYsLTguOTY4bC0wLjAwNCwtMS4yNGMwLC0xLjQ2NCAtMS43ODgsLTEuNDY0IC0yLjk4LC0yLjMzNnpNMzIxLjY5MiwxNTIuMDUybDAuMzQ0LDAuMDkyYzQuNTM2LDEuMzg0IDQuNjY4LDUuOTYgMC45NDQsNS40YzAsMS40NTIgMCwzLjIgLTAuMjk2LDQuOTUyYy0wLjMsMi45MiAtMy44NzYsMi4wNDggLTQuNzY4LDMuNTA0Yy0wLjg4OCwxLjQ2IDEuNzg4LDIuOTE2IDQuNzY4LDIuMzMyYzAuODkyLDAgMCwtMC44OCAwLjYsLTEuMTY4YzEuMTg4LC0wLjI4OCAyLjY3NiwtMC4yODggMy44NjgsMGMtMS4yMTM1NCwyLjYyMjc2IC0yLjYwNzU2LDUuMTU4MTggLTQuMTcyLDcuNTg4Yy0wLjYsMC44NzIgMCwyLjYyNCAwLDMuNzg4YzAsOC43NTYgLTQuMTcyLC0yLjA0IC00Ljc2OCwtMS43NDhjLTAuNTk2LDAuNTg0IC0zLjI3MiwtMC41ODQgLTQuNDY0LC0wLjU4NGMtMS4xOTIsMCAtMC42LDIuMzMyIC0xLjc4OCwyLjMzMmMtMi4zODQsMCAtMS43ODgsLTAuNTg0IC0xLjc4OCwwLjI4OGMwLDEuMTY4IDAuMjkyLDMuNTA0IDAuMjkyLDcuMDA0YzAsMS4xNjggMi4zODQsLTAuMjg4IDMuODcyLC0wLjI4OGMxLjc4OCwwIDIuOTgsMS40NTYgNC4xNzIsMi4wNGMyLjA4LDAuODggNC4xNjgsMy43OTYgNS42NTYsNC4wOGMxLjQ4OCwwLjMgMC4yOTYsMi42MjggMi4wOCwyLjMzNmMwLjg5MiwtMC4yODggMi4wODQsMC4yOTYgMi42OCwxLjE2OGMwLjg5NiwxLjE2OCAwLjMsMi42MzIgLTAuODkyLDMuNTA0Yy0xLjc4NCwxLjc0OCAtMi4zOCwzLjc4OCAtMy4yNzIsNy44NzJjMC40ODgsLTAuMTYgMS4wNjQsMC4yNDggMS41NCwwLjc0YzkuMTAzOTUsLTIuMTA2OSAxNi41NjAwOCwtOC42MTA1OCAxOS44ODQsLTE3LjM0NGMtMi4yNjQsMi40MDQgLTQuODgsMi41ODggLTQuMTA0LDAuNTUyYy0wLjg5NiwtMS43NDggLTIuMDg4LC0zLjIxMiAtMy41NzYsLTQuNjY4Yy0yLjY4NCwtMi4zMzIgLTUuMDY4LC02LjcxMiAzLjI3NiwtMTIuODRjLTEuMjkyLC0zLjI4OCAxLjkwOCwtNi4zNiAzLjk0LC00LjA1NmMtNC4xNzkxNywtOS43MTA4MyAtMTMuNDcxNDcsLTE2LjIzOTg5IC0yNC4wMjQsLTE2Ljg4eicgZmlsbD0nI2ZmZmZmZicgc3Ryb2tlLXdpZHRoPScxJy8+PHBhdGggZD0nTTI4MS4wMTEwOCwxODBjMCwtMjEuNTMyOTkgMTcuNDU1OTMsLTM4Ljk4ODkyIDM4Ljk4ODkyLC0zOC45ODg5MmMyMS41MzI5OSwwIDM4Ljk4ODkyLDE3LjQ1NTkzIDM4Ljk4ODkyLDM4Ljk4ODkyYzAsMjEuNTMyOTkgLTE3LjQ1NTkzLDM4Ljk4ODkyIC0zOC45ODg5MiwzOC45ODg5MmMtMjEuNTMyOTksMCAtMzguOTg4OTIsLTE3LjQ1NTkzIC0zOC45ODg5MiwtMzguOTg4OTJ6JyBmaWxsLW9wYWNpdHk9JzAuMDA3ODQnIGZpbGw9JyNmZmZmZmYnIHN0cm9rZS13aWR0aD0nMCcvPjwvZz48L2c+PC9zdmc+";

const kukemc_i18n_extensionId = "kukeMCI18n";

class KukeMCI18n {
  constructor(runtime) {
    this.runtime = runtime;
    this.lastRequestTimestamp = 0;

    // 获取 ScratchVM by lpp

    function hijack(fn) {
      const _orig = Function.prototype.apply
      Function.prototype.apply = function (thisArg) {
        return thisArg
      }
      const result = fn()
      Function.prototype.apply = _orig
      return result
    }
    let virtualMachine = null;

    if (this.runtime._events['QUESTION'] instanceof Array) {
      for (const value of this.runtime._events['QUESTION']) {
        const v = hijack(value)
        if (v?.props?.vm) {
          virtualMachine = v?.props?.vm
          break
        }
      }
    } else if (this.runtime._events['QUESTION']) {
      virtualMachine = hijack(this.runtime._events['QUESTION'])?.props?.vm
    }
    if (!virtualMachine)
      throw new Error('lpp cannot get Virtual Machine instance.')
    this.vm = virtualMachine
    /** default config */

    this.language = this.vm.getLocale(); 
    if (this.language === "zh-cn") {
      this.language = "zh-CN";
    }
    
    this._initialedI18n = {
      locales: {
        [this.language]: {
          key: "value",
        },
      },
      version: 0,
    };
    this.i18n = {
      ...this._initialedI18n.locales[this.language],
    };

    this.supportedConvertibleUnits = [
      ["中文", "Chinese", "cn"],
      ["国际", "International", "intl"],
    ];
    this.supportedPinyin = [
      ["默认模式", "default", "default"],
      ["多音字模式", "heteronym", "heteronym"],
      ["无声调", "no tone", "tone"],
      ["无声调&多音字", "no tone&heteronym", "toneheteronym"],
    ];
    this.supportedTranslateCodes = [
      ["阿尔巴尼亚语", "Albanian", "sq"],
      ["阿拉伯语", "Arabic", "ar"],
      ["阿姆哈拉语", "Amharic", "am"],
      ["阿丘雅语", "Achuar", "acu"],
      ["阿瓜鲁纳语", "Aguaruna", "agr"],
      ["阿卡瓦伊语", "Akawaio", "ake"],
      ["阿穆斯戈语", "Amuzgo", "amu"],
      ["阿塞拜疆语", "Azerbaijani", "az"],
      ["爱尔兰语", "Irish", "ga"],
      ["爱沙尼亚语", "Estonian", "et"],
      ["埃维语", "Ewe", "ee"],
      ["奥吉布瓦语", "Ojibwa", "ojb"],
      ["奥罗莫语", "Oromoo", "om"],
      ["奥利亚语", "Oriya", "or"],
      ["奥赛梯语", "Ossetic", "os"],
      ["阿雅安伊富高语", "Ayangan Ifugao", "ifb"],
      ["艾马拉语", "Aymara", "aym"],
      ["阿卡特克语", "Acateco", "knj"],
      ["安蒂波洛伊富高语", "Antipolo Ifugao", "ify"],
      ["阿奇语", "Achi", "acr"],
      ["安拜语", "Ambai", "amk"],
      ["奥罗科语", "Oroko", "bdu"],
      ["阿多拉语", "Adhola", "adh"],
      ["阿格尼桑维语", "Agni Sanvi", "any"],
      ["阿舍宁卡语", "Ashéninka", "cpb"],
      ["埃菲克语", "Efik", "efi"],
      ["阿乔利语", "Acholi", "ach"],
      ["埃桑语", "Esan", "ish"],
      ["埃多语", "Edo", "bin"],
      ["阿卢尔语", "Alur", "alz"],
      ["阿亚库乔克丘亚语", "Ayacucho Quechua", "quy"],
      ["奥克语", "Occitan", "oc"],
      ["阿斯图里亚斯语", "Asturian", "ast"],
      ["阿拉贡语", "Aragonese", "an"],
      ["阿法尔语", "afar", "aa"],
      ["阿尔及利亚阿拉伯语", "Algerian Arabic", "arq"],
      ["阿布哈兹语", "Abkhaz", "ab"],
      ["巴布亚皮钦语", "Tok Pisin", "tpi"],
      ["巴拉萨纳语", "Barasana", "bsn"],
      ["巴什基尔语", "Bashkir", "ba"],
      ["巴斯克语", "Basque", "eu"],
      ["白俄罗斯语", "Belarusian", "be"],
      ["白苗文", "Hmong", "mww"],
      ["柏柏尔语", "Berber", "ber"],
      ["保加利亚语", "Bulgarian", "bg"],
      ["冰岛语", "Icelandic", "is"],
      ["比斯拉马语", "Bislama", "bi"],
      ["别姆巴语", "Bemba", "bem"],
      ["波兰语", "Polish", "pl"],
      ["波斯尼亚语", "Bosnian", "bs"],
      ["波斯语", "Persian", "fa"],
      ["波塔瓦托米语", "Potawatomi", "pot"],
      ["布列塔尼语", "Brezhoneg", "br"],
      ["波孔奇语", "Poqomchi’", "poh"],
      ["班巴拉语", "Bambara", "bam"],
      ["北部马姆语", "Northern Mam", "map"],
      ["巴里巴语", "Bariba", "bba"],
      ["博科巴鲁语", "Bokobaru", "bus"],
      ["布萨语", "Busa", "bqp"],
      ["波拉语", "Bola", "bnp"],
      ["巴里亚语", "Bariai", "bch"],
      ["班通安隆语", "Bantoanon", "bno"],
      ["班迪亚勒语", "Bandial", "bqj"],
      ["巴卡语", "Baka", "bdh"],
      ["邦邦语", "Bambam", "ptu"],
      ["巴里语", "Bari", "bfa"],
      ["布阿尔考钦语", "Bualkhaw Chin", "cbl"],
      ["北部格雷博语", "Northern Grebo", "gbo"],
      ["巴萨语", "Basaa", "bas"],
      ["布卢语", "Bulu", "bum"],
      ["邦阿西楠语", "Pangasinan", "pag"],
      ["鲍勒语", "Baoulé", "bci"],
      ["比亚克语", "Biak", "bhw"],
      ["巴塔克卡罗语", "Batak Karo", "btx"],
      ["波纳佩语", "Pohnpeian", "pon"],
      ["伯利兹克里奥尔语", "Belizean Creole", "bzj"],
      ["巴拉圭瓜拉尼语", "Paraguayan Guaraní", "gug"],
      ["北部普埃布拉纳瓦特语", "Northern Puebla Nahuatl", "ncj"],
      ["巴西葡萄牙语", "Brazilian Portuguese", "pt-BR"],
      ["邦板牙语", "Pampanga", "pam"],
      ["北索托语", "Northern Sotho", "nso"],
      ["北萨米语", "Northern Sami", "se"],
      ["查莫罗语", "Chamorro", "cha"],
      ["楚瓦什语", "Chuvash", "cv"],
      ["茨瓦纳语", "Tswana", "tn"],
      ["聪加语", "Xitsonga", "ts"],
      ["车臣语", "Chechen", "che"],
      ["查克玛语", "Chakma", "ccp"],
      ["茨鲁语", "Chiru", "cdf"],
      ["茨瓦语", "Tswa", "tsc"],
      ["楚瓦博语", "Chuwabu", "chw"],
      ["鞑靼语", "Tatar", "tt"],
      ["丹麦语", "Danish", "da"],
      ["德语", "German", "de"],
      ["德顿语", "Tetun", "tet"],
      ["迪维希语", "Divehi", "dv"],
      ["丁卡语", "Dinka", "dik"],
      ["迪尤拉语", "Dyula", "dyu"],
      ["迪塔马利语", "Ditammari", "tbz"],
      ["达迪比语", "Dadibi", "mps"],
      ["蒂穆贡-穆鲁特语", "Timugon Murut", "tih"],
      ["东部卡加延-阿格塔语", "Eastern Cagayan Agta", "duo"],
      ["丹美语", "Dangme", "ada"],
      ["杜阿拉语", "Duala", "dua"],
      ["帝力德顿语", "Tetun Dili", "tdt"],
      ["德鲁语", "Drehu", "dhv"],
      ["蒂夫语", "Tiv", "tiv"],
      ["多巴巴塔克语", "Toba Batak", "bbc"],
      ["地峡萨波特克语", "Isthmus Zapotec", "zai"],
      ["低地德语", "Low German", "nds"],
      ["道本语", "Toki Pona", "toki"],
      ["俄语", "Russian", "ru"],
      ["恩都卡语", "Ndyuka", "djk"],
      ["恩舍特语", "Enxet", "enx"],
      ["恩泽马语", "Nzema", "nzi"],
      ["恩加朱语", "Ngaju", "nij"],
      ["恩科里语", "Nkore", "nyn"],
      ["恩道语", "Ndau", "ndc"],
      ["恩敦加语", "Ndonga", "ndo"],
      ["法语", "French", "fr"],
      ["法罗语", "Faroese", "fo"],
      ["菲律宾语", "Filipino", "fil"],
      ["斐济语", "Fijian", "fj"],
      ["芬兰语", "Finnish", "fi"],
      ["法兰钦语", "Falam Chin", "cfm"],
      ["法拉法拉语", "Frafra", "gur"],
      ["佛得角克里奥尔语", "Cape Verdean Creole", "kea"],
      ["丰语", "Fon", "fon"],
      ["弗留利语", "Friulian", "fur"],
      ["法兰克-普罗旺斯语", "Franco-Provençal", "frp"],
      ["梵语", "Sanskrit", "sa"],
      ["高棉语", "Khmer", "km"],
      ["盖丘亚语", "Quichua", "quw"],
      ["刚果语", "Kikongo", "kg"],
      ["弗里西语", "Frisian", "fy"],
      ["格鲁吉亚语", "Georgian", "jy"],
      ["古吉拉特语", "Gujarati", "gu"],
      ["瓜哈哈拉语", "Guajajára", "gub"],
      ["果发语", "Goffa", "gof"],
      ["格森语", "Kasem", "xsm"],
      ["格巴亚语", "Gbaya", "krs"],
      ["龚语", "Gun", "guw"],
      ["刚果斯瓦希里语", "Congo Swahili", "swc"],
      ["圭米语", "Guaymí", "gym"],
      ["瓜拉尼语", "Guarani", "gn"],
      ["格陵兰语", "Kalaallisut", "kl"],
      ["高原马达加斯加语", "Plateau Malagasy", "plt"],
      ["古英语", "Old English", "ang"],
      ["哈萨克语", "Kazakh", "ka"],
      ["哈萨克语(西里尔)", "Kazakh(Cyrillic)", "kk"],
      ["海地克里奥尔语", "Haitian Creole", "ht"],
      ["韩语", "Korean", "ko"],
      ["豪萨语", "Hausa", "ha"],
      ["荷兰语", "Dutch", "nl"],
      ["黑山语", "Montenegrin", "me"],
      ["哈卡钦语", "Hakha Chin", "cnh"],
      ["胡里语", "Huli", "hui"],
      ["亥比语", "Halbi", "hlb"],
      ["赫雷罗语", "Herero", "her"],
      ["胡帕语", "Hupa", "hup"],
      ["吉尔吉斯语", "Kyrgyz", "ky"],
      ["基切语", "Kiche", "quc"],
      ["加莱拉语", "Galela", "gbi"],
      ["加利西亚语", "Galician", "gl"],
      ["加泰罗尼亚语", "Catalan", "ca"],
      ["捷克语", "Czech", "cs"],
      ["基里巴斯语", "Kiribati", "gil"],
      ["景颇语", "Jingpho", "kac"],
      ["加语", "Ga", "gaa"],
      ["基库尤语", "Kikuyu", "kik"],
      ["金邦杜语", "Kimbundu", "kmb"],
      ["加利富纳语", "Garifuna", "cab"],
      ["加拿大法语", "Canadian French", "fr-CA"],
      ["卡拜尔语", "Kabyle", "kab"],
      ["卡韦卡尔语", "Cabecar", "cjp"],
      ["卡克奇克尔语", "Cakchiquel", "cak"],
      ["卡纳达语", "Kannada", "kn"],
      ["凯克其语", "Qeqchi", "kek"],
      ["坎帕语", "Campa", "cni"],
      ["科普特语", "Coptic", "cop"],
      ["科奇语", "Camsa", "kbh"],
      ["科西嘉语", "Corsican", "co"],
      ["克雷塔罗奥托米语", "Queretaro Otomi", "otq"],
      ["克罗地亚语", "Croatian", "hr"],
      ["库尔德语(库尔曼奇语)", "Kurdish(Kurmanji)", "ku"],
      ["库尔德语(索拉尼语)", "Kurdish(Sorani)", "ckb"],
      ["库阿努阿语", "Kuanua", "ksd"],
      ["库斯科克丘亚语", "Cusco Quechua", "quz"],
      ["卡平阿马朗伊语", "Kapingamarangi", "kpg"],
      ["克里米亚鞑靼语", "Crimean Tatar", "crh"],
      ["卡尔梅克卫拉特语", "Kalmyk-Oirat", "xal"],
      ["克利科语", "Keliko", "kbo"],
      ["卡库瓦语", "Kakwa", "keo"],
      ["喀克其奎语", "Kaqchikel", "cki"],
      ["卡乌龙语", "Kaulong", "pss"],
      ["库隆语", "Kulung", "kle"],
      ["卡纳尔高地-基丘亚语", "Cañar Highland Quichua", "qxr"],
      ["库克群岛毛利语", "Cook Islands Māori", "rar"],
      ["卡比耶语", "Kabiye", "kbp"],
      ["卡姆巴语", "Kamba", "kam"],
      ["卡昂多语", "Kaonde", "kqn"],
      ["喀麦隆皮钦语", "Cameroonian Pidgin", "wes"],
      ["宽亚玛语", "Kwanyama", "kua"],
      ["克林贡语", "Klingon", "tlh"],
      ["卡努里语", "Kanuri", "kr"],
      ["康沃尔语", "Cornish", "kw"],
      ["卡舒比语", "Kashubian", "csb"],
      ["卢旺达语", "Kinyarwanda", "rw"],
      ["拉丁语", "Latin", "la"],
      ["拉脱维亚语", "Latvian", "lv"],
      ["老挝语", "Lao", "lo"],
      ["隆迪语", "Kirundi", "rn"],
      ["立陶宛语", "Lithuanian", "lt"],
      ["林加拉语", "Lingala", "ln"],
      ["卢干达语", "Luganda", "lg"],
      ["卢克帕语", "Lukpa", "dop"],
      ["卢森堡语", "Luxembourgish", "lb"],
      ["罗马尼亚语", "Romanian", "ro"],
      ["罗姆语", "Romani", "rmn"],
      ["隆韦语", "Lomwe", "ngl"],
      ["罗维那语", "Roviana", "rug"],
      ["勒期语", "Lacid", "lsi"],
      ["临高语", "Lingao", "ond"],
      ["罗子语", "Lozi", "loz"],
      ["卢巴开赛语", "Luba-Kasai", "lua"],
      ["卢巴-加丹加语", "Luba-Katanga", "lub"],
      ["隆打语", "Lunda", "lun"],
      ["卢乌德语", "Ruund", "rnd"],
      ["卢瓦来语", "Luvale", "lue"],
      ["林堡语", "Limburgs", "li"],
      ["逻辑语", "Lojban", "jbo"],
      ["马尔加什语", "Malagasy", "mg"],
      ["马耳他语", "Maltese", "mt"],
      ["马恩岛语", "Manx", "gv"],
      ["马拉地语", "Marathi", "mr"],
      ["马拉雅拉姆语", "Malayalam", "ml"],
      ["马来语", "Malay", "ms"],
      ["马里语", "Mari", "mhr"],
      ["马姆语", "Mam", "mam"],
      ["马其顿语", "Macedonian", "mk"],
      ["毛利语", "Maori", "mi"],
      ["蒙古语", "Mongolian", "mo"],
      ["蒙古语(西里尔)", "Mongolian(Cyrillic)", "mn"],
      ["缅甸语", "Burmese", "my"],
      ["孟加拉语", "Bengali", "bn"],
      ["曼尼普尔语", "Manipuri", "mni"],
      ["摩图语", "Motu", "meu"],
      ["马绍尔语", "Marshallese", "mah"],
      ["马拉瑙语", "Maranao", "mrw"],
      ["马勒语", "Maale", "mdy"],
      ["马都拉语", "Madurese", "mad"],
      ["莫西语", "Mossi", "mos"],
      ["穆图凡语", "Muthuvan", "muv"],
      ["米佐语", "Mizo", "lus"],
      ["毛里求斯克里奥尔语", "Mauritian Creole", "mfe"],
      ["姆班杜语", "Umbundu", "umb"],
      ["马普切语", "Mapuche", "arn"],
      ["米斯特克语", "Metlatónoc Mixtec", "mxv"],
      ["马库阿语", "Makhuwa", "vmw"],
      ["曼代灵西马隆贡语", "Batak Simalungun", "bts"],
      ["曼布韦-龙古语", "Mambwe-Lungu", "mgr"],
      ["门诺低地德语", "Plautdietsch", "pdt"],
      ["米兰达语", "Mirandese", "mwl"],
      ["迈蒂利语", "Maithili", "mai"],
      ["马来语克里奥尔语", "Malay trade and creole", "crp"],
      ["纳瓦特尔语", "Nahuatl", "nhg"],
      ["南非荷兰语", "Afrikaans", "af"],
      ["南非科萨语", "Xhosa", "xh"],
      ["南非祖鲁语", "Zulu", "zu"],
      ["尼泊尔语", "Nepali", "ne"],
      ["挪威语", "Norwegian", "no"],
      ["南阿塞拜疆语", "South Azerbaijani", "azb"],
      ["南玻利维亚克丘亚语", "South Bolivian Quechua", "quh"],
      ["弄巴湾语", "Lun Bawang", "lnd"],
      ["尼日利亚富拉语", "Nigerian Fulfulde", "fuv"],
      ["努曼干语", "Numanggang", "nop"],
      ["纳特尼语", "Nateni", "ntm"],
      ["尼亚库萨语", "Nyakyusa", "nyy"],
      ["纽埃语", "Niuean", "niu"],
      ["尼亚斯语", "Nias", "nia"],
      ["涅姆巴语", "Nyemba", "nba"],
      ["尼荣圭语", "Nyungwe", "nyu"],
      ["纳瓦霍语", "Navajo", "nav"],
      ["尼亚内卡语", "Nyaneka", "nyk"],
      ["尼日利亚皮钦语", "Nigerian Pidgin", "pcm"],
      ["南恩德贝莱语", "Southern Ndebele", "nr"],
      ["帕皮阿门托语", "Papiamento", "pap"],
      ["派特语", "Paite", "pck"],
      ["旁遮普语", "Punjabi", "pa"],
      ["葡萄牙语", "Portuguese", "pt"],
      ["普什图语", "Pashto", "ps"],
      ["佩勒-阿塔语", "Pele-Ata", "ata"],
      ["皮京语", "Pijin", "pis"],
      ["帕潘特拉托托纳克语", "Papantla Totonac", "top"],
      ["齐切瓦语", "Chewa", "ny"],
      ["契维语", "Twi", "tw"],
      ["切诺基语", "Cherokee", "chr"],
      ["奇南特克语", "Chinantec", "chq"],
      ["齐马内语", "Tsimané", "cas"],
      ["乔奎语", "Chokwe", "cjk"],
      ["乔皮语", "Chopi", "cce"],
      ["丘克语", "Chuukese", "chk"],
      ["钦博拉索高地克丘亚语", "Chimborazo Highland Quichua", "qug"],
      ["恰蒂斯加尔语", "Chhattisgarhi", "hne"],
      ["日语", "Japanese", "ja"],
      ["瑞典语", "Swedish", "sv"],
      ["萨摩亚语", "Samoan", "sm"],
      ["塞尔维亚语", "Serbian", "sr"],
      ["塞舌尔克里奥尔语", "Seychelles Creole", "crs"],
      ["塞索托语", "Sesotho", "st"],
      ["桑戈语", "Sango", "sg"],
      ["僧伽罗语", "Sinhalese", "si"],
      ["山地马里语", "Hill Mari", "mrj"],
      ["世界语", "Esperanto", "eo"],
      ["舒阿尔语", "Shuar", "jiv"],
      ["斯洛伐克语", "Slovak", "sk"],
      ["斯洛文尼亚语", "Slovenian", "sl"],
      ["斯瓦希里语", "Swahili", "sw"],
      ["苏格兰盖尔语", "Scottish Gaelic", "gd"],
      ["索马里语", "Somali", "so"],
      ["苏奥语", "Suau", "swp"],
      ["桑贝里吉语", "Samberigi", "ssx"],
      ["萨鲍特语", "Sabaot", "spy"],
      ["圣马特奥德马尔-瓦维语", "San Mateo del Mar Huave", "huv"],
      ["斯哈语", "Kisiha", "jmc"],
      ["萨拉马坎语", "Saramaccan", "srm"],
      ["桑格语", "Sangir", "sxn"],
      ["塞纳语", "Sena", "seh"],
      ["圣萨尔瓦多刚果语", "San Salvador Kongo", "kwy"],
      ["松格语", "Songe", "sop"],
      ["索西语", "Tzotzil", "tzo"],
      ["斯高克伦语", "S'gaw Karen", "ksw"],
      ["苏格兰语(低地苏格兰语)", "sco (Scots)", "sco"],
      ["书面挪威语", "Bokmål", "nb"],
      ["撒丁语", "Sardinian", "sc"],
      ["掸语", "Shan", "shn"],
      ["塞尔维亚-克罗地亚语", "Serbo-Croatian", "sh"],
      ["斯威士语", "Swazi", "ss"],
      ["上索布语", "Upper Sorbian", "hsb"],
      ["塔吉克语", "Tajik", "tg"],
      ["塔希提语", "Tahitian", "ty"],
      ["泰卢固语", "Telugu", "te"],
      ["泰米尔语", "Tamil", "ta"],
      ["泰语", "Thai", "th"],
      ["汤加语", "Tongan", "to"],
      ["提格雷语", "Tigre", "tig"],
      ["图阿雷格语", "Tamajaq", "tmh"],
      ["土耳其语", "Turkish", "tr"],
      ["土库曼语", "Turkmen", "tk"],
      ["坦普尔马语", "Tampulma", "tpm"],
      ["特丁钦语", "Tedim Chin", "ctd"],
      ["图瓦语", "Tuvan", "tyv"],
      ["图马伊鲁穆语", "Tuma-Irumu", "iou"],
      ["腾内特语", "Tennet", "tex"],
      ["通加格语", "Tungag", "lcm"],
      ["特索语", "Teso", "teo"],
      ["图瓦卢语", "Tuvaluan", "tvl"],
      ["特特拉语", "Tetela", "tll"],
      ["他加禄语", "Tagalog", "tgl"],
      ["通布卡语", "Tumbuka", "tum"],
      ["托霍拉瓦尔语", "Tojolabal", "toj"],
      ["土柔语", "Tooro", "ttj"],
      ["瓦拉莫语", "Wolaytta", "wal"],
      ["瓦瑞语", "Waray", "war"],
      ["文达语", "Venda", "ve"],
      ["沃洛夫语", "Wolof", "wol"],
      ["乌德穆尔特语", "Udmurt", "udm"],
      ["乌尔都语", "Urdu", "ur"],
      ["乌克兰语", "Ukrainian", "uk"],
      ["乌兹别克语", "Uzbek", "uz"],
      ["乌玛语", "Uma", "ppk"],
      ["乌斯潘坦语", "Uspanteco", "usp"],
      ["瓦利语", "Wali", "wlx"],
      ["佤语", "Wa", "prk"],
      ["瓦吉语", "Waskia", "wsk"],
      ["瓦里斯语", "Waris", "wrs"],
      ["文约语", "Vunjo", "vun"],
      ["威尔士语", "Welsh", "cy"],
      ["瓦利斯语", "Wallisian", "wls"],
      ["乌尔霍博语", "Urhobo", "urh"],
      ["瓦乌特拉马萨特克语", "Huautla Mazatec", "mau"],
      ["瓦尤语", "Wayuu", "guc"],
      ["瓦隆语", "Walon", "wa"],
      ["西班牙语", "Spanish", "es"],
      ["希伯来语", "Hebrew", "he"],
      ["希尔哈语", "Tachelhit", "shi"],
      ["希腊语", "Greek", "el"],
      ["夏威夷语", "Hawaiian", "haw"],
      ["信德语", "Sindhi", "sd"],
      ["匈牙利语", "Hungarian", "hu"],
      ["修纳语", "Shona", "sn"],
      ["宿务语", "Cebuano", "ceb"],
      ["叙利亚语", "Syriac", "syc"],
      ["夏威夷克里奥尔英语", "Hawaiian Creole English", "hwc"],
      ["希里莫图语", "Hiri Motu", "hmo"],
      ["西部拉威语", "Western Lawa", "lcp"],
      ["锡达莫语", "Sidamo", "sid"],
      ["西布基农马诺布语", "Western Bukidnon Manobo", "mbb"],
      ["西皮沃语", "Shipibo", "shp"],
      ["西罗伊语", "Siroi", "ssd"],
      ["西部玻利维亚瓜拉尼语", "Western Bolivian Guarani", "gnw"],
      ["西部克耶语", "Western Kayah", "kyu"],
      ["希利盖农语", "Hiligaynon", "hil"],
      ["新挪威语", "Nynorsk", "nn"],
      ["下索布语", "Lower Sorbian", "dsb"],
      ["新通用语", "Lingua Franca Nova", "lfn"],
      ["西方国际语", "Interlingue", "ie"],
      ["亚美尼亚语", "Armenian", "hy"],
      ["雅加达语", "Jakalteko", "jac"],
      ["亚齐语", "Aceh", "ace"],
      ["伊博语", "Igbo", "ig"],
      ["意大利语", "Italian", "it"],
      ["意第绪语", "Yiddish", "yi"],
      ["印地语", "Hindi", "hi"],
      ["印尼巽他语", "Sundanese", "su"],
      ["印尼语", "Indonesian", "id"],
      ["印尼爪哇语", "Javanese", "jv"],
      ["英语", "English", "en"],
      ["尤卡坦玛雅语", "Yucatec Maya", "yua"],
      ["约鲁巴语", "Yoruba", "yo"],
      ["越南语", "Vietnamese", "vi"],
      ["粤语", "Cantonese", "yue"],
      ["伊卡语", "Ika", "ikk"],
      ["伊兹语", "Izi", "izz"],
      ["约姆语", "Yom", "pil"],
      ["雅比姆语", "Yabem", "jae"],
      ["永贡语", "Yongkom", "yon"],
      ["邕北壮语", "Yongbei Zhuang", "zyb"],
      ["伊普马语", "Yipma", "byr"],
      ["伊索科语", "Isoko", "iso"],
      ["伊班语", "Iban", "iba"],
      ["伊洛卡诺语", "Ilocano", "ilo"],
      ["伊巴纳格语", "Ibanag", "ibg"],
      ["雅浦语", "Yapese", "yap"],
      ["因巴布拉高地克丘亚语", "Imbabura Highland Quichua", "qvi"],
      ["伊多语", "Ido", "io"],
      ["因特语", "Interlingua", "ia"],
      ["中文(简体)", "Chinese (Simplified)", "zh"],
      ["中文(繁体)", "Chinese (Traditional)", "cht"],
      ["宗喀语", "Dzongkha", "dz"],
      ["中部伊富高语", "Central Ifugao", "ifa"],
      ["佐通钦语", "Zotung Chin", "czt"],
      ["中部杜顺语", "Central Dusun", "dtp"],
      ["中比科尔语", "Central Bikol", "bcl"],
      ["泽塔尔语", "Tzeltal", "tzh"],
      ["赞德语", "Zande", "zne"],
      ["中部普埃布拉纳瓦特语", "Central Puebla Nahuatl", "ncx"],
      ["中部瓦斯特克纳瓦特语", "Central Huasteca Nahuatl", "nch"],
      ["中古法语", "Middle French", "frm"],
    ];
    this._formatMessage = runtime.getFormatMessage({
      "zh-cn": {
        "kukeMCI18n.div.1": "🌍 初始化语言",
        "kukeMCI18n.div.2": "💬 文本处理",
        "kukeMCI18n.div.3": "🎭 语言环境设置",
        "kukeMCI18n.div.4": "🔭 文本翻译",
        "kukeMCI18n.div.5": "⚠️ 开发时使用，翻译不稳定 ⚠️",
        "kukeMCI18n.div.6": "🪄 单位转换",
        "kukeMCI18n.div.7": "✨ I18n 示例",
        "kukeMCI18n.block.initI18nForJSON": "从JSON [JSON] 初始化i18n",
        "kukeMCI18n.block.initI18nForURL": "从URL [URL] 初始化i18n",
        "kukeMCI18n.block.initI18nForFile": "从文件 [FILE] 初始化i18n",
        "kukeMCI18n.block.setLanguage": "设置语言为 [LANG]",
        "kukeMCI18n.block.getExtraData": "额外数据 [KEY]",
        "kukeMCI18n.block.replaceText": "格式化 [TEXT] 数据源 [DATA]",
        "kukeMCI18n.block.getLanguageForI18n": "当前i18n语言",
        "kukeMCI18n.block.getLanguageForBrowser": "浏览器当前语言",
        "kukeMCI18n.block.getSupportedLanguages": "支持的语言列表",
        "kukeMCI18n.block.checkLanguageSupport": "[LANG] 是否支持",
        "kukeMCI18n.block.RecognitionLanguageName": "识别 [TEXT] 语言",
        "kukeMCI18n.block.RecognitionLanguageNameAll": "识别 [TEXT] 语言(返回全部)",
        "kukeMCI18n.block.translateText":
          "☁️ 将 [TEXT] 从 [LANG1] 翻译为 [LANG2]",
        "kukeMCI18n.block.translateTextWithClipboard":
          "☁️ 将 [TEXT] 从 [LANG1] 翻译为 [LANG2] 并复制到剪贴板",
        "kukeMCI18n.button.printSupportedLanguages": "☁️ 打印支持的语言列表",
        "kukeMCI18n.tip.frequently": "操作频繁！",
        "kukeMCI18n.tip.allSupportedLanguages": "共支持 [NUM] 个语言",
        "kukeMCI18n.block.convertUnit": "数学单位换算 [NUM] 转换为 [UNIT] 单位",
        "kukeMCI18n.block.getTimestamp": "本地时间戳",
        "kukeMCI18n.block.getTimeZone": "本地时区",
        "kukeMCI18n.block.offsetTimeZone":
          "将时间 [TIME] 从 [ZONE1] 转换为 [ZONE2]",
        "kukeMCI18n.block.formatTimestamp": "将时间 [TIME] 按 [FORMAT] 格式化",
        "kukeMCI18n.block.Pinyin": "将 [TEXT] 转换为拼音 [MODE]",
        "kukeMCI18n.block.Example": "I18n 示例",
      },
      en: {
        "kukeMCI18n.div.1": "🌍 Language Initialization",
        "kukeMCI18n.div.2": "💬 Text Processing",
        "kukeMCI18n.div.3": "🎭 Language Environment",
        "kukeMCI18n.div.4": "🔭 Text Translation",
        "kukeMCI18n.div.5":
          "⚠️ For development only - Translates text and does not guarantee stability ⚠️",
        "kukeMCI18n.div.6": "🪄 Unit conversion",
        "kukeMCI18n.div.7": "✨ I18n Example",
        "kukeMCI18n.block.initI18nForJSON": "Initialize i18n from JSON [JSON]",
        "kukeMCI18n.block.initI18nForURL": "Initialize i18n from URL [URL]",
        "kukeMCI18n.block.initI18nForFile": "Initialize i18n from file [FILE]",
        "kukeMCI18n.block.setLanguage": "Set language to [LANG]",
        "kukeMCI18n.block.getExtraData": "Extra data for [KEY]",
        "kukeMCI18n.block.replaceText": "Format [TEXT] data from [DATA]",
        "kukeMCI18n.block.getLanguageForI18n": "Current language",
        "kukeMCI18n.block.getLanguageForBrowser": "Current browser language",
        "kukeMCI18n.block.getSupportedLanguages": "List of supported languages",
        "kukeMCI18n.block.checkLanguageSupport": "Is [LANG] supported?",
        "kukeMCI18n.block.RecognitionLanguageName": "Detect language of [TEXT]",
        "kukeMCI18n.block.RecognitionLanguageNameAll": "Detect language of [TEXT](back to all)",
        "kukeMCI18n.block.translateText":
          "☁️ Translate [TEXT] from [LANG1] to [LANG2]",
        "kukeMCI18n.block.translateTextWithClipboard":
          "☁️ Translate [TEXT] from [LANG1] to [LANG2], and copy to clipboard",
        "kukeMCI18n.button.printSupportedLanguages":
          "☁️ Print the list of supported languages",
        "kukeMCI18n.tip.frequently": "Frequent operation!",
        "kukeMCI18n.tip.allSupportedLanguages":
          "Supports [NUM] languages in total",
        "kukeMCI18n.block.convertUnit":
          "Mathematical Unit Conversion: Convert [NUM] to [UNIT] unit",
        "kukeMCI18n.block.getTimestamp": "Local Timestamp",
        "kukeMCI18n.block.getTimeZone": "Local Time Zone",
        "kukeMCI18n.block.offsetTimeZone":
          "Convert time [TIME] from [ZONE1] to [ZONE2]",
        "kukeMCI18n.block.formatTimestamp": "Format time [TIME] as [FORMAT]",
        "kukeMCI18n.block.Pinyin": "Convert [TEXT] to Pinyin [MODE]",
        "kukeMCI18n.block.Example": "I18n Example",
      },
    });
  }

  get initialedI18n() {
    return this._initialedI18n;
  }

  set initialedI18n(data) {
    if (typeof data === "object") {
      this._initialedI18n = data;
    }

    try {
      const _tmp = JSON.parse(String(data));
      if ("locales" in _tmp) this._initialedI18n = _tmp;
      else
        console.error(
          `[kukeMCI18n] set i18n failed: `,
          "i18n must has locales"
        );
    } catch (e) {
      console.error(`[kukeMCI18n] set i18n failed: `, e);
    }
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
      description: id,
    });
  }

  getInfo() {
    const initI18nForJSON = {
      opcode: "initI18nForJSON",
      blockType: Scratch.BlockType.COMMAND,
      text: this.formatMessage("kukeMCI18n.block.initI18nForJSON"),
      arguments: {
        JSON: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: "{}",
        },
      },
    };
    const initI18nForURL = {
      opcode: "initI18nForURL",
      blockType: Scratch.BlockType.COMMAND,
      text: this.formatMessage("kukeMCI18n.block.initI18nForURL"),
      arguments: {
        URL: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: "https://example.com/i18n.json",
        },
      },
    };
    const initI18nForFile = {
      opcode: "initI18nForFile",
      blockType: Scratch.BlockType.COMMAND,
      text: this.formatMessage("kukeMCI18n.block.initI18nForFile"),
      arguments: {
        FILE: {
          type: Scratch.ArgumentType.STRING,
          menu: "FILE_LIST",
        },
      },
    };
    const getI18n = {
      opcode: "getI18n",
      blockType: Scratch.BlockType.REPORTER,
      text: "i18n [KEY]",
      arguments: {
        KEY: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: "test",
        },
      },
    };
    const getExtraData = {
      opcode: "getExtraData",
      blockType: Scratch.BlockType.REPORTER,
      text: this.formatMessage("kukeMCI18n.block.getExtraData"),
      arguments: {
        KEY: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: "version",
        },
      },
    };
    const setLanguage = {
      opcode: "setLanguage",
      blockType: Scratch.BlockType.COMMAND,
      text: this.formatMessage("kukeMCI18n.block.setLanguage"),
      arguments: {
        LANG: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: "zh-CN",
        },
      },
    };
    const getLanguageForI18n = {
      opcode: "getLanguageForI18n",
      blockType: Scratch.BlockType.REPORTER,
      text: this.formatMessage("kukeMCI18n.block.getLanguageForI18n"),
      arguments: {},
    };
    const getLanguageForBrowser = {
      opcode: "getLanguageForBrowser",
      blockType: Scratch.BlockType.REPORTER,
      text: this.formatMessage("kukeMCI18n.block.getLanguageForBrowser"),
      arguments: {},
    };
    const getSupportedLanguages = {
      opcode: "getSupportedLanguages",
      blockType: Scratch.BlockType.REPORTER,
      disableMonitor: true,
      text: this.formatMessage("kukeMCI18n.block.getSupportedLanguages"),
      arguments: {},
    };
    const checkLanguageSupport = {
      opcode: "checkLanguageSupport",
      blockType: Scratch.BlockType.BOOLEAN,
      text: this.formatMessage("kukeMCI18n.block.checkLanguageSupport"),
      arguments: {
        LANG: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: "zh-CN",
        },
      },
    };
    const printSupportedLanguages = {
      blockType: Scratch.BlockType.BUTTON,
      text: this.formatMessage("kukeMCI18n.button.printSupportedLanguages"),
      onClick: () => {
        this.runtime.logSystem.show();
        this.runtime.logSystem.info("");
        this.supportedTranslateCodes
          .map((t) => `| ${t[0]} | ${t[1]} | ${t[2]} |`)
          .forEach((v) => {
            this.runtime.logSystem.info(v);
          });
        this.runtime.logSystem.info(
          this.formatMessage("kukeMCI18n.tip.allSupportedLanguages").replace(
            "[NUM]",
            this.supportedTranslateCodes.length
          )
        );
      },
    };
    const translateText = {
      opcode: "translateText",
      blockType: Scratch.BlockType.REPORTER,
      text: this.formatMessage("kukeMCI18n.block.translateText"),
      arguments: {
        TEXT: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: "Hello World!",
        },
        LANG1: {
          type: Scratch.ArgumentType.STRING,
          menu: "TRANSLATE_LIST",
          defaultValue: "en",
        },
        LANG2: {
          type: Scratch.ArgumentType.STRING,
          menu: "TRANSLATE_LIST",
          defaultValue: "zh",
        },
      },
    };

    const translateTextWithClipboard = {
      opcode: "translateTextWithClipboard",
      blockType: Scratch.BlockType.COMMAND,
      text: this.formatMessage("kukeMCI18n.block.translateTextWithClipboard"),
      arguments: {
        TEXT: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: "Hello World!",
        },
        LANG1: {
          type: Scratch.ArgumentType.STRING,
          menu: "TRANSLATE_LIST",
          defaultValue: "en",
        },
        LANG2: {
          type: Scratch.ArgumentType.STRING,
          menu: "TRANSLATE_LIST",
          defaultValue: "zh",
        },
      },
    };

    const convertUnit = {
      opcode: "convertUnit",
      blockType: Scratch.BlockType.REPORTER,
      text: this.formatMessage("kukeMCI18n.block.convertUnit"),
      arguments: {
        NUM: {
          type: Scratch.ArgumentType.NUMBER,
          defaultValue: 150000,
        },
        UNIT: {
          type: Scratch.ArgumentType.STRING,
          menu: "UNIT_LIST",
          defaultValue: "cn",
        },
      },
    };

    const getTimestamp = {
      opcode: "getTimestamp",
      blockType: Scratch.BlockType.REPORTER,
      text: this.formatMessage("kukeMCI18n.block.getTimestamp"),
      arguments: {},
    };

    const getTimeZone = {
      opcode: "getTimeZone",
      blockType: Scratch.BlockType.REPORTER,
      text: this.formatMessage("kukeMCI18n.block.getTimeZone"),
      arguments: {},
    };

    const offsetTimeZone = {
      opcode: "offsetTimeZone",
      blockType: Scratch.BlockType.REPORTER,
      text: this.formatMessage("kukeMCI18n.block.offsetTimeZone"),
      arguments: {
        TIME: {
          type: Scratch.ArgumentType.NUMBER,
          defaultValue: "1609459200",
        },
        ZONE1: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: "Asia/Shanghai",
        },
        ZONE2: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: "America/New_York",
        },
      },
    };

    const formatTimestamp = {
      opcode: "formatTimestamp",
      blockType: Scratch.BlockType.REPORTER,
      text: this.formatMessage("kukeMCI18n.block.formatTimestamp"),
      arguments: {
        TIME: {
          type: Scratch.ArgumentType.NUMBER,
          defaultValue: 1609459200,
        },
        FORMAT: {
          type: Scratch.ArgumentType.STRING,
          defaultValue: "YYYY-MM-DD HH:mm:ss",
        },
      },
    };

    const replaceText = {
      opcode: "replaceText",
      blockType: Scratch.BlockType.REPORTER,
      text: this.formatMessage("kukeMCI18n.block.replaceText"),
      arguments: {
        TEXT: {
          type: Scratch.ArgumentType.STRING,
          defaultValue:
            "Hello, {name}! You are {age} years old.",
        },
        DATA: {
          type: Scratch.ArgumentType.STRING,
          defaultValue:
            "{\"name\": \"kukemc\", \"age\": 20}",
        },
      },
    };

    const RecognitionLanguageName = {
      opcode: "RecognitionLanguageName",
      blockType: Scratch.BlockType.REPORTER,
      text: this.formatMessage("kukeMCI18n.block.RecognitionLanguageName"),
      arguments: {
        TEXT: {
          type: Scratch.ArgumentType.STRING,
          defaultValue:
            "早上好!",
        },
      },
    };

    const RecognitionLanguageNameAll = {
      opcode: "RecognitionLanguageNameAll",
      blockType: Scratch.BlockType.REPORTER,
      text: this.formatMessage("kukeMCI18n.block.RecognitionLanguageNameAll"),
      arguments: {
        TEXT: {
          type: Scratch.ArgumentType.STRING,
          defaultValue:
            "Good morning! Friends from all over the world",
        },
      },
    };

    const Pinyin = {
      opcode: "Pinyin",
      blockType: Scratch.BlockType.REPORTER,
      text: this.formatMessage("kukeMCI18n.block.Pinyin"),
      arguments: {
        TEXT: {
          type: Scratch.ArgumentType.STRING,
          defaultValue:
            "我是拼音!",
        },
        MODE: {
          type: Scratch.ArgumentType.STRING,
          menu: "PINYIN_LIST",
          defaultValue: "default",
        },
      },
    }

    const Example = {
      opcode: "Example",
      blockType: Scratch.BlockType.REPORTER,
      text: this.formatMessage("kukeMCI18n.block.Example"),
      arguments: {},
    };

    return {
      id: kukemc_i18n_extensionId,
      name: "I18n",
      blockIconURI: kukemc_i18n_icon,
      menuIconURI: kukemc_i18n_icon,
      color1: "#13003a",
      color2: "#0a001e",
      docsURI:
        "https://learn.ccw.site/article/99e0432c-98f2-4394-8a32-e501beee1e27",
      blocks: [
        {
          blockType: Scratch.BlockType.LABEL,
          text: this.formatMessage("kukeMCI18n.div.1")
        },
        initI18nForJSON,
        initI18nForURL,
        initI18nForFile,
        "---" + this.formatMessage("kukeMCI18n.div.2"),
        getI18n,
        getExtraData,
        replaceText,
        "---" + this.formatMessage("kukeMCI18n.div.3"),
        setLanguage,
        getLanguageForI18n,
        getLanguageForBrowser,
        getSupportedLanguages,
        checkLanguageSupport,
        RecognitionLanguageName,
        RecognitionLanguageNameAll,
        "---" + this.formatMessage("kukeMCI18n.div.4"),
        printSupportedLanguages,
        "---" + this.formatMessage("kukeMCI18n.div.5"),
        translateText,
        translateTextWithClipboard,
        "---" + this.formatMessage("kukeMCI18n.div.6"),
        Pinyin,
        convertUnit,
        getTimestamp,
        getTimeZone,
        offsetTimeZone,
        formatTimestamp,
        "---" + this.formatMessage("kukeMCI18n.div.7"),
        Example,
      ],
      menus: {
        FILE_LIST: {
          items: "__gandiAssetsFileList",
        },
        TRANSLATE_LIST: {
          acceptReporters: true,
          items: this.supportedTranslateCodes.map((t) => {
            if (this.language === "zh-CN"){
              return {
                text: `${t[0]}`,
                value: t[2],
              };
            }
            else{
              return {
                text: `${t[1]}`,
                value: t[2],
              };
            }

          }),
        },
        UNIT_LIST: {
          acceptReporters: true,
          items: this.supportedConvertibleUnits.map((t) => {
            return {
              text: `${t[0]}(${t[1]})`,
              value: t[2],
            };
          }),
        },
        PINYIN_LIST: {
          items: this.supportedPinyin.map((t) => {
            if (this.language === "zh-CN"){
              return {
                text: `${t[0]}`,
                value: t[2],
              };
            }
            else{
              return {
                text: `${t[1]}`,
                value: t[2],
              };
            }
          }),
        }
      },
    };
  }

  __gandiAssetsFileList() {
    const list = this.runtime
      .getGandiAssetsFileList("json")
      .map((item) => item.name);
    if (list.length < 1) {
      list.push("没有文件 empty");
    }

    return list;
  }

  /**
   * @param {String || Object} JSON
   * @return {*}
   */
  initI18nForJSON({ JSON }) {
    this.initialedI18n = JSON;
    this.i18n = this.initialedI18n?.locales[this.language];
  }

  /**
   * @param {String} URL
   * @return {*}
   */
  initI18nForURL({ URL }) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", URL, false);
    xhr.send();

    if (xhr.status === 200) {
      this.initialedI18n = xhr.responseText;
      this.i18n = this.initialedI18n?.locales[this.language];
    } else {
      console.warn(`[kukeMCI18n] request i18n failed: `);
    }
  }

  /**
   * @param {String} FILE
   * @return {*}
   */
  initI18nForFile({ FILE }) {
    const asset = this.runtime.getGandiAssetContent(FILE);
    if (asset) {
      this.initialedI18n = asset.decodeText();
      this.i18n = this.initialedI18n?.locales[this.language];
    }
  }

  /**
   * @param {String} KEY
   * @return {*}
   */
  getI18n({ KEY }) {
    const i18n = this.i18n[KEY];
    if (Array.isArray(i18n) || typeof KEY === 'object' && i18n !== null) {
      return JSON.stringify(i18n);
    }
    return i18n;
  }

  getVariables() {
    const variables = {};

    Object.values({
      ...this.runtime._stageTarget.variables,
      ...this.runtime._editingTarget.variables,
    })
      .filter((v) => {
        return "id" in v && v.type === "";
      })
      .forEach((v) => {
        variables[v.name] = v.value;
      });

    return variables;
  }

  formatString(format, valuesObject) {
    return format.replace(/(\\*)\{(\w+)\}/g, function(match, escapeChars, key) {
        if (escapeChars.length % 2 === 1) { // 前面有奇数个反斜杠，说明是转义的 {}
            return match.slice(1); // 去掉最后一个反斜杠并返回剩余字符串片段
        } else {
            return typeof valuesObject[key] !== 'undefined' ? String(valuesObject[key]) : match;
        }
    }).replace(/\\(.)/g, '$1'); // 去除所有转义的字符前的反斜杠
  }

  /**
   * @description l10n 积木语句
   * @param {Object} params - 参数对象，包含TEXT和DATA属性
   * @return {String}
   */
  replaceText({ TEXT, DATA }) {
      const values = JSON.parse(DATA);
      return this.formatString(TEXT, values);
  }

  /**
   * @param {String} KEY
   * @return {*}
   */
  getExtraData({ KEY }) {
    const i18n = this.initialedI18n[KEY];
    if (Array.isArray(i18n) || typeof i18n === 'object' && i18n !== null) {
      return JSON.stringify(i18n);
    }
    return i18n;
  }

  /**
   * @param {String} LANG
   * @return {*}
   */
  setLanguage({ LANG }) {
    this.language = LANG;
    this.i18n = this.initialedI18n?.locales[LANG];
  }

  getLanguageForI18n() {
    return this.language;
  }

  getLanguageForBrowser() {
    return navigator.language;
  }

  getSupportedLanguages() {
    return JSON.stringify(Object.keys(this.initialedI18n?.locales));
  }

  /**
   * @param {String} LANG
   * @return {Boolean}
   */
  checkLanguageSupport({ LANG }) {
    return Object.keys(this.initialedI18n?.locales).includes(LANG);
  }

  /**
   * @param {Boolean} needToast
   * @return {Boolean}
   */
  canRequest(needToast = true) {
    const currentTime = Date.now();
    const result = currentTime - this.lastRequestTimestamp >= 3000;

    if (result) this.lastRequestTimestamp = Date.now();
    if (!result && needToast)
      this.runtime.scratchBlocks.utils?.toast(
        this.formatMessage("kukeMCI18n.tip.frequently")
      );
    return result;
  }

  /**
   * @param {String} TEXT 源文本
   * @param {String} LANG1 源语言
   * @param {String} LANG2 新语言
   * @return {Promise<unknown>}
   */
  async translateText({ TEXT, LANG1, LANG2 }) {
    if (this.runtime.isPlayerOnly) return "";
    if (LANG1 === LANG2) return TEXT;
      if (!this.canRequest()) return "";
      const req = await fetch("https://api-save.kuke.ink/api/translation", {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify({ text: TEXT, from: LANG1, to: LANG2 })
      });
      return req.ok ? req.text() : req.status;
  }

  /**
   * @param {Object} args
   * @return {*}
   */
  translateTextWithClipboard(args) {
    if (this.runtime.isPlayerOnly) return;
    this.translateText(args).then((v) => {
      if (typeof v === "string") navigator.clipboard.writeText(v);
    });
  }

  /**
   * @param {Number} NUM
   * @param {String} UNIT
   * @return {String}
   */
  convertUnit({ NUM, UNIT }) {
    const chineseUnits = ["千", "万", "亿", "万亿", "千亿", "兆", "京", "垓", "秭", "穰", "沟", "涧", "正", "载"];
    const internationalUnits = ["K", "M", "B"];

    let tmp = NUM;
    let unitIndex = 0;
    let divisor = 1000;

    switch (UNIT) {
      case "cn":
        while (NUM >= 10000) {
          NUM /= 10000;
          unitIndex++;
        }

        if (unitIndex === 0 & NUM.toString().length !== 4) {
          return `${NUM}`;
        }

        NUM = Math.round(NUM * 10) / 10;

        if (chineseUnits[unitIndex] == "千") {
          NUM /= 1000
        }

        return `${NUM}${chineseUnits[unitIndex]}`;
      case "intl":
        while (NUM >= divisor * 1000) {
          unitIndex++;
          divisor *= 1000;
        }
        return `${Math.round((NUM / divisor) * 1000) / 1000}${
          internationalUnits[unitIndex]
        }`;
      default:
        return `${NUM}`;
    }
  }

  getTimestamp() {
    return Math.floor(Date.now() / 1000);
  }

  getTimeZone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  }

  /**
   * @param {Number} TIME
   * @param {String} ZONE1
   * @param {String} ZONE2
   * @return {Number}
   */
  offsetTimeZone({ TIME, ZONE1, ZONE2 }) {
    const date = moment.unix(TIME);
    const formattedDate = date.format("YYYY-MM-DD HH:mm:ss");
    const sourceMoment = moment.tz(formattedDate, ZONE1);
    const targetMoment = sourceMoment.clone().tz(ZONE2);
    const targetFormattedDate = moment(
      targetMoment.format("YYYY-MM-DD HH:mm:ss")
    );

    return targetFormattedDate.unix();
  }

  /**
   * @param {Number} TIME
   * @param {String} FORMAT
   * @return {String}
   */
  formatTimestamp({ TIME, FORMAT }) {
    const date = moment.unix(TIME).local();
    return date.format(FORMAT);
  }

  RecognitionLanguageName({ TEXT }) {
    return franc(TEXT,{minLength: TEXT.length});
  }

  RecognitionLanguageNameAll({ TEXT }) {
    return JSON.stringify(francAll(TEXT,{minLength: TEXT.length}));
  }

  flattenPinyinArray(pinyinList) {
    return JSON.stringify(pinyinList.flat().map(item => item.toLowerCase())); // 如果需要转成小写拼音
  }

  Pinyin({ TEXT, MODE }) {
    if (MODE === "default") {
      return this.flattenPinyinArray(pinyin(TEXT));
    }
    else if (MODE === "heteronym") {
      return this.flattenPinyinArray(pinyin(TEXT, {
        heteronym: true,
        segment: true,
      }));
    }
    else if (MODE === "tone") {
      return this.flattenPinyinArray(pinyin(TEXT, {
        style: pinyin.STYLE_NORMAL
      }))
    }
    else if (MODE === "toneheteronym") {
      return this.flattenPinyinArray(pinyin(TEXT, {
        style: pinyin.STYLE_NORMAL,
        heteronym: true,
        segment: true,
      }))
    }
  }

  Example() {
    return JSON.stringify({
      "locales": {
        "zh-CN": {
          "test": "你好 世界",
          "start_button_text": "开始游戏",
          "start_button_skin": "StartGame_CN",
          "menu_title": "主菜单",
          "credits_text": "制作人员"
        },
        "en": {
          "test": "Hello World",
          "start_button_text": "Start Game",
          "start_button_skin": "StartGame_EN",
          "menu_title": "Main Menu",
          "credits_text": "Credits"
        }
      },
      "version": "v1.0"
  });
  }
}

window.tempExt = {
  Extension: KukeMCI18n,
  info: {
    name: "kukeMCI18n.name",
    description: "kukeMCI18n.description",
    doc: "https://learn.ccw.site/article/99e0432c-98f2-4394-8a32-e501beee1e27",
    extensionId: kukemc_i18n_extensionId,
    iconURL: kukemc_i18n_cover,
    insetIconURL: kukemc_i18n_icon,
    featured: true,
    disabled: false,
    collaborator: "酷可mc @ CCW",
    collaboratorURL: "https://www.ccw.site/student/203910367",
    collaboratorList: [
      {
        collaborator: "酷可mc @ CCW",
        collaboratorURL: "https://www.ccw.site/student/203910367",
      },
      {
        collaborator: "YUEN @ CCW",
        collaboratorURL: "https://www.ccw.site/student/236217560",
      },
    ],
  },
  l10n: {
    "zh-cn": {
      "kukeMCI18n.name": "I18n",
      "kukeMCI18n.description":
        "你的首款游戏多语言扩展，助你轻松实现游戏内容的国际化支持。",
    },
    en: {
      "kukeMCI18n.name": "I18n",
      "kukeMCI18n.description":
        "Your first game's multilingual extension, helping you effortlessly implement internationalization support for your game content.",
    },
  },
};