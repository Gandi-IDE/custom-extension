(function() {
    class MorseCodeExtension {
        constructor(runtime) {
            this.runtime = runtime;
        }

        getInfo() {
            return {
                id: 'mewannacodeMorseCode', // Made ID completely unique to avoid cache conflicts
                name: 'Morse Code',
                blocks: [
                    {
                        opcode: 'englishToMorse',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '[TEXT] to morse',
                        arguments: {
                            TEXT: { type: Scratch.ArgumentType.STRING, defaultValue: 'hello' }
                        }
                    },
                    {
                        opcode: 'morseToEnglish',
                        blockType: Scratch.BlockType.REPORTER,
                        text: '[MORSE] to english',
                        arguments: {
                            MORSE: { type: Scratch.ArgumentType.STRING, defaultValue: '.... . .-.. .-.. ---' }
                        }
                    }
                ]
            };
        }

        englishToMorse(args) {
            const morseCode = {
                'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....',
                'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.',
                'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
                'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-',
                '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.', '.': '.-.-.-', ',': '--..--',
                '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...',
                ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.',
                '$': '...-..-', '@': '.--.-.'
            };
            return args.TEXT
                .toUpperCase()
                .split('')
                .map(char => {
                    if (char === ' ') return '/'; // Handle spaces cleanly before formatting
                    return morseCode[char] || '';
                })
                .join(' ')
                .replace(/ +/g, ' ') // Cleans up double spacing
                .trim();
        }

        morseToEnglish(args) {
            const englishCode = {
                '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H',
                '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P',
                '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X',
                '--.-': 'Y', '--..': 'Z', '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4',
                '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9', '.-.-.-': '.', '--..--': ',',
                '..--..': '?', '.----.': "'", '-.-.--': '!', '-..-.': '/', '-.--.': '(', '-.--.-': ')', '.-...': '&',
                '---...': ':', '-.-.-.': ';', '-...-': '=', '.-.-.': '+', '-....-': '-', '..--.-': '_', '.-..-.': '"',
                '...-..-': '$', '.--.-.': '@'
            };
            return args.MORSE
                .split('/')
                .map(word => word.trim().split(' ').map(char => englishCode[char] || '').join(''))
                .join(' ')
                .trim();
        }
    }

    // This wrapper checks the environment state securely before running
    if (typeof Scratch !== 'undefined' && Scratch.extensions) {
        Scratch.extensions.register(new MorseCodeExtension());
    } else if (window.Scratch && window.Scratch.extensions) {
        window.Scratch.extensions.register(new MorseCodeExtension());
    }
})();
