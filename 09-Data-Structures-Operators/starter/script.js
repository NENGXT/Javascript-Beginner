'use strict';

// Data needed for first part of the section

'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6增强对象字面量
  // openHours,
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

//'?.'
const openStore = {
  mon: { open: 7, close: 9 },
  wed: { open: 2, close: 9 },
  fri: { open: 7, close: 9 },
};

const days = ['mon', 'tue', 'wed', 'thr', 'fri'];

for (const day of days) {
  const whenOpen = openStore[day]?.open ?? 'close';
}

const users = [{ name: 'kuma', id: '0754' }];

//遍历对象的key
const propeties = Object.keys(openHours);
// console.log(`We are opening in ${propeties.length} days`);
for (const day of propeties) {
  // console.log(day);
}

//遍历对象的value
const values = Object.values(openHours);

//entries对象
const entries = Object.entries(openHours);
for (const [day, { open, close }] of entries) {
  // console.log(`on ${day},we open at ${open} and close at ${close}`);
}

//SET
const arr2 = new Set([1, 1, 4, 5, 1, 4]);

// .has
const eki = new Set([
  'Shibuya',
  'Shinjuku',
  'Ikebukuro',
  'Tokyo',
  'Ueno',
  'Akihabara',
]);
//.delete & .add
eki.delete('Tokyo');
eki.add('Tokyo');

//////////////////SET的新方法/////////////////////
const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

//.intersection 比较两组set中的相同元素
const commonFoods = italianFoods.intersection(mexicanFoods);
//.union 合并两组set中的元素
const italianMixmexican = italianFoods.union(mexicanFoods);
//.difference 会识别两组set中，第一组（被使用difference方法的）不相同的元素
const differnceFoods = italianFoods.difference(mexicanFoods);

//////////////////SET的新方法/////////////////////

//Maps
const restFoods = new Map();
restFoods
  .set(1, 'lajiaochaorou')
  .set(2, 'udon')
  .set(true, 'お客様は注文しています')
  .set(false, 'ただいま商品は在庫しておりません');

const order = 0;
// console.log(restFoods.get(order >= 1 && order <= 2));
const question = new Map([
  ['问题', '世界上最发达的国家是哪个'],
  [1, '美国'],
  [2, '中国'],
  ['correct', 2],
  [true, 'YESSSSSSS'],
  [false, '错误'],
]);

for (let [key, value] of question) {
  if (typeof key === 'number') {
  }
}
const prompt = 2;
// console.log(question.get(question.get('correct') === prompt));

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

// 编码挑战 #2

/*
让我们继续完善这个足球竞猜应用！

1. 遍历 `game.scored` 数组，把每个进球球员的名字以及进球序号打印到控制台。
   示例：`Goal 1: Lewandowski`

2. 使用循环计算平均赔率，并把结果打印到控制台。
   （我们之前已经学过怎么求平均值，如果你忘了可以回去看看）

3. 把这 3 个赔率以漂亮的格式打印到控制台，格式必须和下面完全一致：
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5

   球队名称要直接从 `game` 对象中获取，不要手动写死
   （只有 `"draw"` 可以直接写）。
   提示：注意 `odds` 对象和 `game` 对象里用了相同的属性名 😉

加分题：
创建一个叫做 `scorers` 的对象，
把进球球员的名字作为属性名，把进球数作为属性值。

在这场比赛里，它看起来会像这样：

      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

祝你好运 😀
*/
//第一题
for (const [no, goal] of game.scored.entries()) {
  // console.log(`Goal ${no + 1}:${goal}`);
}
//第二题
const odd = Object.entries(game.odds);
let oddAvg = 0;

for (const [i, j] of odd) {
  let msg = ``;
  oddAvg += j;
}
// console.log(oddAvg / odd.length);
//第三题
for (const [team, z] of odd) {
  const teamSTR = team === 'x' ? 'draw' : `vistory ${game[team]}`;
  // console.log(`odd of ${teamSTR} is ${z}`);
}
//加分题
const scorers = {};
for (const player of game.scored) {
  if (scorers[player]) {
    scorers[player]++;
  } else {
    scorers[player] = 1;
  }
}
