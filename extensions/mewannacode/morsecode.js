class MorseCodeExtension {
    constructor(runtime) {
        this.runtime = runtime;
    }

    getInfo() {
        return {
            id: 'morsecode',
            name: 'Morse Code',
            blocks: [
                {
                    opcode: 'englishToMorse',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[TEXT] to morse',
                    arguments: {
                        TEXT: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'hello'
                        }
                    }
                },
                {
                    opcode: 'morseToEnglish',
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[MORSE] to english',
                    arguments: {
                        MORSE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '.... . .-.. .-.. ---'
                        }
                    }
                }
            ]
        };
    }

    englishToMorse(args) {
        const morseCode = {
            'A': '.-',    'B': '-...',  'C': '-.-.',  'D': '-..',   'E': '.',
            'F': '..-.',  'G': '--.',   'H': '....',  'I': '..',    'J': '.---',
            'K': '-.-',   'L': '.-..',  'M': '--',    'N': '-.',    'O': '---',
            'P': '.--.',  'Q': '--.-',  'R': '.-.',   'S': '...',   'T': '-',
            'U': '..-',   'V': '...-',  'W': '.--',   'X': '-..-',  'Y': '-.--',
            'Z': '--..',  '0': '-----', '1': '.----', '2': '..---', '3': '...--',
            '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..',
            '9': '----.', '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.',
            '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...',
            ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-',
            '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.'
        };

        return args.TEXT
            .toUpperCase()
            .split('')
            .map(char => morseCode[char] || '')
            .join(' ')
            .replace(/  +/g, ' / ');
    }

    morseToEnglish(args) {
        const englishCode = {
            '.-': 'A',    '-...': 'B',  '-.-.': 'C',  '-..': 'D',   '.': 'E',
            '..-.': 'F',  '--.': 'G',   '....': 'H',  '..': 'I',    '.---': 'J',
            '-.-': 'K',   '.-..': 'L',  '--': 'M',    '-.': 'N',    '---': 'O',
            '.--.': 'P',  '--.-': 'Q',  '.-.': 'R',   '...': 'S',   '-': 'T',
            '..-': 'U',   '...-': 'V',  '.--': 'W',   '-..-': 'X',  '-.--': 'Y',
            '--..': 'Z',  '-----': '0', '.----': '1', '..---': '2', '...--': '3',
            '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8',
            '----.': '9', '.-.-.-': '.', '--..--': ',', '..--..': '?', '.----.': "'",
            '-.-.--': '!', '-..-.': '/', '-.--.': '(', '-.--.-': ')', '.-...': '&',
            '---...': ':', '-.-.-.': ';', '-...-': '=', '.-.-.': '+', '-....-': '-',
            '..--.-': '_', '.-..-.': '"', '...-..-': '$', '.--.-.': '@'
        };

        return args.MORSE
            .split(' / ')
            .map(word => 
                word.split(' ')
                    .map(char => englishCode[char] || '')
                    .join('')
            )
            .join(' ');
    }
}

Scratch.extensions.register(new MorseCodeExtension());
