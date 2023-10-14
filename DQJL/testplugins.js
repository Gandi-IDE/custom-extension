class HttpExtension {
  constructor(runtime) {
    this.runtime = runtime;
  }

  getInfo() {
    return {
      id: 'httpExtension',
      name: 'HTTP Extension',
      color1: '#FF5733',
      blocks: [
        {
          opcode: 'httpGet',
          blockType: Scratch.BlockType.REPORTER,
          text: 'HTTP GET request to [URL]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://example.com',
            },
          },
        },
        {
          opcode: 'httpPost',
          blockType: Scratch.BlockType.REPORTER,
          text: 'HTTP POST request to [URL] with data [DATA]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://example.com',
            },
            DATA: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'data to post',
            },
          },
        },
      ],
    };
  }

  httpGet(args) {
    const url = args.URL;
    return fetch(url, {
      method: 'GET',
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('HTTP GET request failed');
        }
      });
  }

  httpPost(args) {
    const url = args.URL;
    const data = args.DATA;
    return fetch(url, {
      method: 'POST',
      body: data,
      headers: {
        'Content-Type': 'application/json', // Modify this based on your data format
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.text();
        } else {
          throw new Error('HTTP POST request failed');
        }
      });
  }
}

// Register the extension
Scratch.extensions.register(new HttpExtension());
