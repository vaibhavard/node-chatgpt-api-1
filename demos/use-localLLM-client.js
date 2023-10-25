import { LocalLLMClient } from '../index.js';

// All possible options
const options = {
    host: 'localhost',
    port: '3002',
    systemMessage: 'You are an AI assistant. Write the AI\'s next reply in a chat between the user and the AI. Write a single reply only.',
    max_tokens: 4096,
    startToken: '### Instruction: ',
    endToken: '### Response: ',
    stream: false,
    temperature: 0.8,
    presence_penalty: 1.1,
    stop: ['### Instruction: '],
};

const localLLMClient = new LocalLLMClient(options);
const response = await localLLMClient.sendMessage('Hello, how are you?');
/* Request received by LLM server:
{
    "messages": [
      {
        "role": "system",
        "content": "You are an AI assistant. Write the AI's next reply in a chat between the user and the AI. Write a single reply only."
      },
      {
        "role": "user",
        "content": "### Instruction: Hello, how are you?### Response: "
      }
    ],
    "stream": false,
    "temperature": 0.8,
    "presence_penalty": 1.1,
    "stop": [
      "### Instruction: "
    ]
  }
*/
console.log(response); // {response: 'Hello there! I am doing well, thank you for asking. How about yourself?', conversationId: 'aaa58902-8ba7-4058-b659-2cb9388668e5', parentMessageId: '62cd9bf2-85e8-4485-ac0e-8dcb850c7d5a', messageId: '3ed94561-be9d-4876-916c-74ac677b70ca', details: {…}}
