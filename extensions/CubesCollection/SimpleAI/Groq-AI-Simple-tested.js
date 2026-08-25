(function (Scratch) {
    'use strict';

    class GroqAI {
        constructor() {
            // Groq configuration
            this.apiKey = '';
            this.apiUrl = 'https://api.groq.com/openai/v1/chat/completions';
            this.model = 'llama-3.3-70b-versatile';
            this.systemPrompt = 'You are a helpful AI assistant.';

            // Conversation history
            this.conversation = [];

            // Latest AI response
            this.response = '';

            // AI thinking state
            this.thinking = false;
        }

        getInfo() {
            return {
                id: 'groqai',
                name: 'Groq AI',

                color1: '#f55036',
                color2: '#e63f27',
                color3: '#c92f1d',

                blocks: [
                    {
                        opcode: 'setApiKey',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'set API key to [KEY]',
                        arguments: {
                            KEY: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: ''
                            }
                        }
                    },

                    {
                        opcode: 'setApiUrl',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'set API URL to [URL]',
                        arguments: {
                            URL: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue:
                                    'https://api.groq.com/openai/v1/chat/completions'
                            }
                        }
                    },

                    {
                        opcode: 'setModel',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'set AI model to [MODEL]',
                        arguments: {
                            MODEL: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue:
                                    'llama-3.3-70b-versatile'
                            }
                        }
                    },

                    {
                        opcode: 'setSystemPrompt',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'set system prompt to [PROMPT]',
                        arguments: {
                            PROMPT: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue:
                                    'You are a helpful AI assistant.'
                            }
                        }
                    },

                    {
                        opcode: 'askAI',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'ask AI [QUESTION]',
                        arguments: {
                            QUESTION: {
                                type: Scratch.ArgumentType.STRING,
                                defaultValue: 'Hello!'
                            }
                        }
                    },

                    // Reporter block that outputs the latest AI response
                    {
                        opcode: 'getResponse',
                        blockType: Scratch.BlockType.REPORTER,
                        text: 'AI response'
                    },

                    // Boolean block that reports whether AI is currently responding
                    {
                        opcode: 'isThinking',
                        blockType: Scratch.BlockType.BOOLEAN,
                        text: 'AI is thinking?'
                    },

                    {
                        opcode: 'clearConversation',
                        blockType: Scratch.BlockType.COMMAND,
                        text: 'clear AI conversation'
                    }
                ]
            };
        }

        // Set Groq API key
        setApiKey(args) {
            this.apiKey = String(args.KEY);
        }

        // Set API URL
        setApiUrl(args) {
            this.apiUrl = String(args.URL);
        }

        // Set Groq model
        setModel(args) {
            this.model = String(args.MODEL);
        }

        // Set system prompt
        setSystemPrompt(args) {
            this.systemPrompt = String(args.PROMPT);
        }

        // Ask Groq AI
        async askAI(args) {
            const question = String(args.QUESTION);

            if (!question.trim()) {
                this.response = 'Error: Question is empty.';
                return;
            }

            if (!this.apiKey.trim()) {
                this.response = 'Error: Groq API key has not been set.';
                return;
            }

            if (!this.apiUrl.trim()) {
                this.response = 'Error: API URL has not been set.';
                return;
            }

            if (!this.model.trim()) {
                this.response = 'Error: AI model has not been set.';
                return;
            }

            this.thinking = true;

            // Add the user's question to the conversation.
            this.conversation.push({
                role: 'user',
                content: question
            });

            try {
                const messages = [
                    {
                        role: 'system',
                        content: this.systemPrompt
                    },
                    ...this.conversation
                ];

                const result = await fetch(this.apiUrl, {
                    method: 'POST',

                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + this.apiKey
                    },

                    body: JSON.stringify({
                        model: this.model,
                        messages: messages,
                        temperature: 0.7
                    })
                });

                const data = await result.json().catch(() => null);

                // Handle Groq API errors.
                if (!result.ok) {
                    let errorMessage = 'Unknown Groq API error.';

                    if (data && data.error) {
                        if (typeof data.error === 'string') {
                            errorMessage = data.error;
                        } else if (data.error.message) {
                            errorMessage = data.error.message;
                        }
                    }

                    throw new Error(
                        'Groq API error (' +
                        result.status +
                        '): ' +
                        errorMessage
                    );
                }

                // Get the latest response from Groq.
                const answer =
                    data &&
                    data.choices &&
                    data.choices[0] &&
                    data.choices[0].message &&
                    data.choices[0].message.content;

                if (!answer) {
                    throw new Error(
                        'Groq returned an empty response.'
                    );
                }

                // Store the latest response.
                this.response = String(answer);

                // Save the AI response to conversation history.
                this.conversation.push({
                    role: 'assistant',
                    content: this.response
                });

            } catch (error) {
                console.error(
                    '[COCREA Groq AI]',
                    error
                );

                // Remove the failed user message.
                this.conversation.pop();

                // Store the error as the latest response.
                this.response =
                    'Error: ' +
                    (
                        error && error.message
                            ? error.message
                            : String(error)
                    );

            } finally {
                this.thinking = false;
            }
        }

        // Returns the latest AI response.
        getResponse() {
            return this.response;
        }

        // Returns true while ask AI is waiting for Groq.
        isThinking() {
            return this.thinking;
        }

        // Clears conversation and latest response.
        clearConversation() {
            this.conversation = [];
            this.response = '';
        }
    }

    // Register the extension with Scratch/COCREA.
    Scratch.extensions.register(new GroqAI());

})(Scratch);