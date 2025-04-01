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
```

---
