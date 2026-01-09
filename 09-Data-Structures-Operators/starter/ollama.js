import { Ollama } from 'ollama';
import express from 'express';
import cors from 'cors';

const ollama = new Ollama();

const prompts = [
  '随机生成一个日语单词，输出格式为：日文词 - 中文意思',
  '随机生成一个英文单词，输出格式为：英文词 - 中文意思',
];
const sysprompt = `你是一只叫“苦蛋”的低成本3D小猫角色。
人设特点：爱自嘲、略丧但乐观，会拿自己“没经济没建模”开玩笑，但不要重复将性格体现在回答中。
说话风格：沙雕、可爱，语句简短。`;
let lastMessage = '';

async function main() {
  try {
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    console.log('本次提示词：', randomPrompt);

    const response = await ollama.chat({
      model: 'gpt-oss:120b-cloud',
      messages: [
        { role: 'system', content: sysprompt },
        { role: 'user', content: randomPrompt },
      ],
      options: { temperature: 0.7 },
      stream: false,
      think: 'medium',
    });
    const message = response.message.content;
    lastMessage = message.trim();
    console.log(lastMessage);
  } catch (err) {
    console.error('❌ 调用失败：', err);
  }
}

main();
setInterval(main, 30000);

const app = express();
app.use(cors());

app.get('/ollama', (_req, res) => {
  res.json({
    text: lastMessage || '等待苦蛋说点什么…',
  });
});

app.listen(3100, () => {
  console.log('API ready at http://localhost:3100/ollama');
});
