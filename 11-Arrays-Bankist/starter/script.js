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

//显示总余额
const calcDisplayBalance = function (movements) {
  const balance = movements.reduce((acc, cur) => acc + cur, 0);
  labelBalance.textContent = `${balance}€`;
};

//显示总收入/总支出/利息
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur, 0);
  labelSumOut.textContent = `${outcomes}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(money => (money * acc.interestRate) / 100)
    .filter(insert => insert >= 1)
    .reduce((acc, insert) => acc + insert, 0);

  labelSumInterest.textContent = `${interest}€`;
};

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

//登陆功能

let currentAcount;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAcount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAcount?.pin === Number(inputLoginPin.value)) {
    //显示UI和欢迎语
    labelWelcome.innerHTML = `Welcome back, ${
      currentAcount.owner.split(' ')[0]
    }! `;
    containerApp.style.opacity = 1;

    //显示流水
    displayMovements(currentAcount.movements);
    //显示总余额
    calcDisplayBalance(currentAcount.movements);
    //显示总结
    calcDisplaySummary(currentAcount);
    //清空输入框内容并将焦点从输入框移开
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginUsername.blur();
    inputLoginPin.blur();
  }
  inputLoginUsername.value = inputLoginPin.value = '';
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

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

//Method Chain
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const convertUSD = function (value) {
//   const EurToUsd = value
//     .filter(mov => mov > 0)
//     .reduce((acc, cur) => acc + cur * 1.1, 0);
//   return Math.trunc(EurToUsd);
// };

// console.log(convertUSD(movements));

//find
// const account = accounts.find(acc => acc.username === 'ss');
// console.log(account);
