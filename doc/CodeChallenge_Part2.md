# 挑战 #1

我们要开发一个足球（足球在美国称为 Soccer）的投注应用！⚽💰

假设我们从某个网络服务中获取到了一场比赛的数据（如下所示）。在这个挑战中，我们将使用这些数据完成以下任务：

## 任务列表 📝

1. **创建两个球队的球员数组**（变量分别命名为 `players1` 和 `players2`）。
2. **在每个球队的球员数组中**：
    - 第一个球员是**守门员**（goalkeeper，简称 GK），请创建一个变量 `gk` 来存储 **拜仁慕尼黑队（team 1）** 的守门员名字。
    - 剩下的 10 名球员是**场上球员**（field players），请创建一个数组 `fieldPlayers` 存储这些球员的名字。
3. **创建一个新的数组 `allPlayers`**，包含两支球队的所有球员（共 22 人）。
4. **在比赛中，拜仁慕尼黑队（team 1）换上了 3 名替补球员**：
    - 创建一个新的数组 `players1Final`，其中包含**拜仁慕尼黑的全部原始球员**，并额外加入 `Thiago`、`Coutinho` 和 `Perisic`。
5. **基于 `game.odds` 对象，创建三个变量**：
    - `team1`（拜仁慕尼黑的赔率）
    - `draw`（平局的赔率）
    - `team2`（多特蒙德的赔率）
6. **编写一个函数 `printGoals`**：
    - 该函数接受**任意数量的球员名字**（不是数组！）。
    - 遍历这些球员名字，并将**每个名字输出到控制台**。
    - **同时打印总共传入了多少个球员名字**（表示这些球员总共进了多少球）。
7. **确定哪支球队更可能获胜**：
    - **不使用 `if/else` 语句或三元运算符**，在控制台中打印**最有可能获胜的球队**（即赔率最低的球队）。

-   测试数据 6：使用球员 ‘Davies’、‘Muller’、‘Lewandowski’ 和 ‘Kimmich’。然后，再次调用函数，传入来自 game.scored 的球员。

### 让我们继续开发我们的足球投注应用！

1. 遍历 `game.scored` 数组，依次将每个进球球员的名字和进球编号打印到控制台  
   （例如："Goal 1: Lewandowski"）。

2. 使用循环计算平均赔率，并将其打印到控制台  
   （我们之前已经学习过如何计算平均值，如果忘记了可以回顾一下）。

3. 将 3 个赔率以漂亮的格式打印到控制台，格式如下：  
    Odd of victory Bayern Munich: 1.33  
    Odd of draw: 3.25  
    Odd of victory Borrussia Dortmund: 6.5  
   要求直接从 `game` 对象中获取球队的名字，不要硬编码（"draw" 除外）。  
   提示：注意赔率和 `game` 对象的属性名称是相同的 😉

**BONUS：**  
创建一个名为 `scorers` 的对象，该对象的属性为进球球员的名字，属性值为他们进球的数量。  
在这个比赛中，示例结果如下：

```javascript
{
  Gnarby: 1,
  Hummels: 1,
  Lewandowski: 2
}
```

### 编程挑战 #3

让我们继续开发我们的足球投注应用！这一次，我们有一个 Map，它记录了比赛过程中发生的事件。Map 中的值是事件本身，键是事件发生的分钟数（注意：一场足球比赛有 90 分钟外加一些补时）。

1️⃣ 创建一个名为 `events` 的数组，其中包含比赛中发生的所有不同事件（**不重复**）

2️⃣ 比赛结束后发现，第 64 分钟的黄牌是误判，因此需要将其从事件记录中删除

3️⃣ 在控制台打印如下字符串：
👉 "An event happened, on average, every 9 minutes"  
 （注意，一场比赛总共是 90 分钟）

4️⃣ 遍历整个事件 Map，按如下格式将事件打印到控制台，并标明是上半场还是下半场（45 分钟之后为下半场）：
👉 `[FIRST HALF] 17: ⚽️ GOAL`

祝你好运 😀

---

```javascript
//题目代码
const game = {
    team1: "Bayern Munich",
    team2: "Borrussia Dortmund",
    players: [
        [
            "Neuer",
            "Pavard",
            "Martinez",
            "Alaba",
            "Davies",
            "Kimmich",
            "Goretzka",
            "Coman",
            "Muller",
            "Gnarby",
            "Lewandowski",
        ],
        [
            "Burki",
            "Schulz",
            "Hummels",
            "Akanji",
            "Hakimi",
            "Weigl",
            "Witsel",
            "Hazard",
            "Brandt",
            "Sancho",
            "Gotze",
        ],
    ],
    score: "4:0",
    scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
    date: "Nov 9th, 2037",
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

const gameEvents = new Map([
    [17, "⚽️ GOAL"],
    [36, "🔁 Substitution"],
    [47, "⚽️ GOAL"],
    [61, "🔁 Substitution"],
    [64, "🔶 Yellow card"],
    [69, "🔴 Red card"],
    [70, "🔁 Substitution"],
    [72, "🔁 Substitution"],
    [76, "⚽️ GOAL"],
    [80, "⚽️ GOAL"],
    [92, "🔶 Yellow card"],
]);
```

---

当然可以！以下是将你刚才那道挑战题的中文翻译版整理成的 Markdown 格式 ✅
你可以直接复制粘贴到笔记、Notion 或 VS Code 里用～

⸻

## 📘 编程挑战 #4：变量命名转换（underscore_case → camelCase）

---

### 🧠 题目描述：

编写一个程序，从网页中的 `<textarea>` 文本框中获取一组变量名（每行一个），这些变量名使用 **下划线命名法（underscore_case）**。

当点击按钮时，将这些变量名转换为 **驼峰命名法（camelCase）**，并使用 `console.log()` 将结果输出到控制台。

---

### 📥 输入示例（粘贴到 `<textarea>` 的文本）：

underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure

---

### 📤 输出要求（控制台输出，带对齐和 ✅）：

underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅

---

### 💡 提示（Hints）：

-   ✅ 每一行之间用 `\n`（换行符）分隔
-   ✅ 你只需要处理「两个单词」的变量，比如 `some_variable`
-   ✅ 可以先完成 camelCase 的转换部分，再处理 ✅ 的输出
-   ✅ 输出可以用 `.padEnd()` 方法对齐
-   ✅ 如果卡住了，可以先看一部分参考解法视频，再暂停动手写

---

### 📚 camelCase 是什么？

camelCase（驼峰命名法）：

-   第一个单词小写
-   后续每个单词首字母大写
-   不使用 `_` 分隔符

示例：

-   `first_name` → `firstName`
-   `calculate_age` → `calculateAge`

---

### 🧪 延伸练习建议：

-   尝试自己写一组变量测试不同的输入情况
-   尝试添加错误处理（例如输入为空，或非两个词）
-   尝试拓展为支持多个单词以上的 camelCase 转换

---

💪 加油！这是一个非常实用的字符串处理 + DOM 操作练习！

⸻
