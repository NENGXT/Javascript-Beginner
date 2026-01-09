'use strict';
//-------------特殊练习-------------//
const getMessage = document.getElementById('message');
async function updateMessage() {
  try {
    getMessage.textContent = '🤖 等苦蛋说话...';
    const res = await fetch('http://localhost:3100/ollama');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    const text = (data.text || '（暂无消息）').trim();
    getMessage.textContent = text;
  } catch (err) {
    getMessage.textContent = `⚠️ ${err.message}`;
  }
}

updateMessage();
setInterval(updateMessage, 3000);
//-------------------------------//

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openHours: {
    mon: { open: 12, close: 2 },
    wed: { open: 11, close: 2 },
    fri: { open: 11, close: 11 },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, address, time }) {
    // console.log(
    //   `来自${address}的客户订购了${this.starterMenu[starterIndex]}的${this.mainMenu[mainIndex]}\n于${time}`
    // );
  },

  orderPasta: function (ing1, ing2, ing3) {
    const orderText = `这是你的意大利面，配料有${ing1},${ing2},和${ing3}`;
  },

  orderPizza: function (mainIng, ...subIng) {
    const orderText = `这是你的披萨,主料是${mainIng},配料有${subIng}`;
  },
};

//数组解构
const [starter, main] = restaurant.order(2, 0);

const nested = [1, 2, 3, [4, 5, 6]];
const [a, , , [b, c, d]] = nested;

//对象解构
const { name: restaurantName, openHours, categories, isSale = [] } = restaurant;
let a1 = 1;
let b1 = 2;
const obj = { a1: 10, b1: 20 };
({ a1, b1 } = obj); //这是一个表达式，不是代码块，所以要用（）

const {
  fri: { open, close },
} = openHours;
// console.log(open, close);

restaurant.orderDelivery({
  time: new Date(),
  address: 'St. Main St',
  starterIndex: 2,
  mainIndex: 0,
});

//Spread运算符
const arr1 = [1, 2, 3];
const spread = [4, 5, ...arr1];

const copyMainMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
const str = 'AXITEE';

const ing = ['apple', 'becon', 'chicken'];
restaurant.orderPasta(...ing);

const newRestaurant = { foundedIn: 1995, ...restaurant };

//Rest运算符
const [eg1, eg2, ...rest] = [1, 2, 3, 4, 5, 6];
const [pizza, , risotto, ...other] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
const { mon, ...otherday } = restaurant.openHours;
restaurant.orderPizza('chicken', 'mushroom', 'onion');

//'||'和'&&'
restaurant.orderPizza && restaurant.orderPizza('chicken', 'mushroom');

//'??'
const num = null;
const val = num ?? 10;

const rest1 = {
  name: '老八食堂',
  numGuest: 10,
};

const rest2 = {
  name: '季季红',
  owner: '老登',
};

rest1.owner ||= '老八';
rest2.numGuest = rest1.numGuest || 10;

///////////////////////////////////////
// 编码挑战 #1

/*
我们要做一个足球（给美国朋友：soccer 😅）竞猜应用！

假设我们从某个 Web 服务拿到了某场比赛的数据（见下方）。在这个挑战里我们要使用这些数据。任务如下：

1.为每支球队创建一个球员数组（变量名 players1 和 players2）
2.任意球员数组的第一个球员是守门员，其余是场上球员。对拜仁慕尼黑（球队1）创建一个变量 gk 保存守门员名字，再创建一个数组 fieldPlayers 保存其余 10 名场上球员
3.创建一个数组 allPlayers，包含两队所有球员（22人）
4.比赛中拜仁慕尼黑（球队1）使用了 3 名替补球员。创建一个新数组 players1Final，包含原球队1球员并加入 'Thiago'、'Coutinho'、'Perisic'
5.基于 game.odds 对象，为每个赔率创建一个变量（分别叫 team1、draw、team2）
6.写一个函数 printGoals，接收任意数量的球员名字（不是数组），把每个名字打印到控制台，同时打印总进球数（即传入的名字数量）
8.赔率更低的球队更可能获胜。用 不使用 if/else 或三元运算符 的方式打印更可能获胜的球队
第6题测试数据：使用球员 'Davies'、'Muller'、'Lewandowski'、'Kimmich'。然后再用 game.scored 里的球员调用一次。

祝你好运 😀
*/
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
  printGoals: function (...socredPlayer) {
    // console.log(`进球的球员:`, ...socredPlayer, `goals:${socredPlayer.length}`);
  },
};

//第一题
const [player1, player2] = game.players;
//第二题
const [gk, ...fieldPlayers] = player1;
//第三题
const allPlayers = [...player1, ...player2];
//第四题
const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
//第五题
const {
  odds: { team1, x: draw, team2 },
} = game;
//第六题
game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
//第七题
const whoWon = team1 < team2;
// console.log(whoWon);
///////////////////////////////////////

//for of
const arr = [1, 2, 3, 4, 5];
