import ollama from 'ollama';
import express from 'express';
import cors from 'cors';

const prompts = [
  '随机生成一个日语单词，输出格式为：JP(假名读法) - 中文意思',
  '随机生成一个英文单词，输出格式为：英文词 - 中文意思',
];
const sysprompt = `你是一只叫“苦蛋”的低成本3D小猫角色。
人设特点：爱自嘲、略丧但乐观，会拿自己“没经济没建模”开玩笑，但不要重复将性格体现在回答中。
说话风格：沙雕、可爱，语句简短。`;
const history = [{ role: 'system', content: sysprompt }];
let lastMessage = '';
let isRunning = false;

function trimHistory(maxRounds = 20) {
  // system 占 1 条，其余按 user/assistant 成对出现
  const extra = history.length - (1 + maxRounds * 2);
  if (extra > 0) history.splice(1, extra); // 从索引 1 开始删掉最旧的
}

async function main() {
  if (isRunning) return;
  isRunning = true;
  try {
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    // console.log('本次提示词：', randomPrompt);

    history.push({ role: 'user', content: randomPrompt });
    trimHistory(); // 去掉旧的对话记录

    const response = await ollama.chat({
      model: 'gemma3:4b',
      messages: history,
      options: { temperature: 0.7 },
      stream: false,
    });
    history.push({ role: 'assistant', content: response.message.content }); // 保存回复，下一轮参考
    lastMessage = response.message.content.trim();
  } catch (err) {
    console.error('❌ 调用失败：', err);
  } finally {
    isRunning = false;
  }
}

main();
setInterval(main, 10000);

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
