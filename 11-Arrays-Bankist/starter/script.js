'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//左侧拦显示账户存取
const displayMovements = function (movements) {
  containerMovements.innerHTML = ''; // 清空容器内容
  movements.forEach(function (value, index) {
    const type = value > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      index + 1
    } ${type}</div>
          <div class="movements__value">${value}</div>
        </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

displayMovements(account1.movements);

//显示总余额
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${balance}€`;
};
calcDisplayBalance(account2.movements);

//获取username
const createUserName = function (accs) {
  accs.forEach(acc => {
    acc.username = acc.owner
      .split(' ')
      .map(name => name[0])
      .join('')
      .toLowerCase();
  });
};
createUserName(accounts);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

//map
// const convertUSD = 1.1;

// const movementText = movements.map(
//   (mov, index, array) =>
//     `${mov > 0 ? 'Deposit' : 'Withdrawal'} ${index + 1}: $${Math.floor(
//       Math.abs(mov) * convertUSD
//     )}`
// );

// console.log(movementText);

//filter
// const deposit = movements.filter(mov => mov > 0);
// const withdrawal = movements.filter(mov => mov < 0);

// console.log(deposit, withdrawal);

//reduce
// const balance = movements.reduce((acc, cur, index) => {
//   return acc + cur;
// }, 0);
// console.log(balance);

//Maximum value
// const maxValue = movements.reduce((arr, cur) => {
//   return arr > cur ? arr : cur;
// }, movements[0]);
// console.log(maxValue);

/* 

🐶 编程挑战 #2

朱莉娅（Julia）和凯特（Kate）又开始了她们的狗狗研究。这一次，她们想要把狗的年龄换算成人类年龄，并计算这些狗狗的平均人类年龄。

请你创建一个名为 calcAverageHumanAge 的函数，它接收一个数组 ages（代表狗狗的年龄），并按以下步骤进行操作：

⸻

✅ 要求步骤：
	1.	将狗狗年龄转换为人类年龄，转换公式如下：
	•	如果狗狗年龄小于等于 2 岁：人类年龄 = 狗狗年龄 * 2
	•	如果狗狗年龄大于 2 岁：人类年龄 = 16 + 狗狗年龄 * 4
	2.	过滤掉人类年龄低于 18 岁的狗狗（也就是说只保留成年狗）
	3.	计算所有成年狗狗的平均人类年龄
（提示：你应该已经知道怎么计算平均值了 😉）
	4.	使用以下两个测试数据集运行你的函数：

⸻

📊 测试数据：
	•	测试数据 1：[5, 2, 4, 1, 15, 8, 3]
	•	测试数据 2：[16, 6, 10, 5, 6, 1, 4]

⸻
*/

// const calcAverageHumanAge = function (dogs) {
//   const humanAges = dogs
//     .map(dogsyear => (dogsyear <= 2 ? 2 * dogsyear : 16 + dogsyear * 4))
//     .filter(adult => adult >= 18);

//   const humanAgesAvg =
//     humanAges.reduce((acc, cur) => acc + cur, 0) / humanAges.length;
//   console.log(humanAgesAvg);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
