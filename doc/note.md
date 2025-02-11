
<font face="monospace">

# Javascript Notes
什么是Javascript？
Javascript是一种解释型的编程语言，广泛用于网页开发中。
JavaScript可以用来创建动态的网页，实现交互式功能。

## 基本概念 

### 📒值（Values）和变量（Variables）：
- 值是最基本的信息单位，可以是数字、字符串或布尔值。
- 变量是用来存储数据的容器，可以用来存储不同的值。
- 变量的命名不可以使用Javascript自带的关键字，也不能以数字开头。 例如：`var name = "John";`
- 变量的命名应该有意义，便于理解。例如：`myName = "John";`

### 📒值的类型：
- 在 JavaScript 中，值分为两大类：原始值（Primitive）和对象（Object）。
    - **原始值（Primitive）**: 不可变的基本数据类型，包括：
        - 数字（如 `1`, `2.5`）
        - 字符串（如 `"hello"`）
        - 布尔值（如 `true`, `false`）
        - null
        - undefined
        - Symbol（ES6引入的类型）
        - BigInt（ES10引入的类型）
    - **对象（Object）**: 可变的复杂数据类型，包括：
        - 数组（如 `[1, 2, 3]`）
        - 函数（如 `function() {}`）
        - 普通对象（如 `{ name: 'Alice', age: 25 }`）

### 📒真值与假值：
- 在 JavaScript 中，任何非零的数值、字符串、布尔值（除了 `false`），以及 `null` 和 `undefined` 都被视为真值。
- 0, "", false, undefined, null 都被视为假值。
- 可以使用 `Boolean()`来验证一个变量的真假值。

### 📒运算符：

**什么是运算符**？
- 运算符是用于执行数学或逻辑运算的符号。它们可以将两个值结合起来，生成一个新的值。

**算术运算符**:
- `+` 加法
- `-` 减法
- `*` 乘法
- `/` 除法
- `%` 取模
- `**` 幂运算
- `+=` 自增运算符（在变量前加）
- `-=` 自减运算符（在变量前加）
- `++` 前缀递增运算符（先自增，再使用）
- `--` 后缀递增运算符（先使用，后自增）
  
**比较运算符**:
- `==` 等于（非严格）
- `===` 等于（严格）
- `!=` 不等于（非严格）
- `!==` 不等于（严格）
- `<` 小于
- `>` 大于
- `<=` 小于或等于
- `>=` 大于或等于

### 📒布尔逻辑：
**什么是布尔逻辑？**
- 布尔逻辑是通过真值和假值来解决复杂问题的方法。

**AND/OR/NOT**
- **AND**（与）: 如果两个条件都为真，则返回真。用`&&`表示。
- **OR**（或）: 如果至少有一个条件为真，则返回真。用`||`表示。
- **NOT**（非）: 如果条件为真，则返回假，否则返回真。用`!`表示。

## 基本语法
- 使用`console.log()`输出内容到控制台。使用`alert()`显示一个警告框。

```js
console.log("Hello World");
alert("Hello World");
```

### 语句和表达式(Statements and Expressions )
- **语句**：一组命令，用于完成特定的任务。例如`if...else`、`for`循环等。
- **表达式**：计算结果（生成值）的代码块。例如`1 + 2`、`"Hello World!"`等。

- 使用`typeof(变量名)`来检查变量的类型。
```js
let isFun = true;
let message = "Hello world!";
console.log("messgae type is "+typeof(message) + " and isFun type is " + typeof(isFun));
//输出结果：message type is string and isFun type is boolean
```

- 使用`变量 命名 = 值`来定义变量的时候，如果一开始已经定义了变量的名字，那么想要重新赋值给这个变量时，可以直接使用`变量名 = 新的值`。
```js
let number = 10;
//重新赋值
number = 20；
```
- 声明变量的三种方式（**更多细节稍后更新**）：
  - `let`:当我们需要改变变量的值的时候，可以使用`let`来声明变量。
  - `const`:用于不需要改变变量的值的时候，如果强行修改了这个变量的值，就会报错。可以理解为`const`为常量。
  - `var`:在ES6之前，我们使用的声明变量的方式。现在不推荐使用。

- 模版字符串：
  - 使用模版字符串（template string）来定义多行文本和嵌入表达式。模板字符串用反引号（``）包围，可以包含多行文本，并且可以在文本中嵌入表达式。
  - 使用模板字符串的插值语法（`${}`）来嵌入变量/表达式等。这样可以使代码更加简洁和易读，并且不需要总是使用`+`号连接字符串。一下是一个例子：
```js
const firstName = "AXITEE";
const job = "Software Engineer";
const age = new Date().getFullYear() - 1995;

const aboutMe = '我是' + firstName + '，我是一名' + job + '，我今年' + age + '。';
const newMe = `我是${firstName}，我是一名${job},我今年${age}。`;

console.log(aboutMe);
console.log(newMe);
//aboutMe: "我是AXITEE，我是一名Software Engineer，我今年36岁。"
//newMe: "我是AXITEE，我是一名Software Engineer，我今年36岁。"
```
- if/else:
  - 使用`if/else`语句来根据条件执行不同的代码块。以下是一个例子：
```js
const age = 18;
const isEnough = age >= 18;

if (isEnough) {
    console.log(`你已满${age}岁，你可以开车了。`);
} else {
    const isOk = 18 - age;
    console.log(`你未满${age}岁，不能开车。你还需要${isOk}年才能开车。`);
}

```
  - if()语句用于检查条件是否为真。else()语句用于在条件为假时执行的代码块。

- 类型转换:
  - 在 JavaScript 中，进行数学运算时，如果涉及字符串和数字，JavaScript 会进行自动类型转换（Type Coercion）。以下是一些例子：
    - 在加号 (+) 运算中，如果参与运算的有字符串，JavaScript 会执行字符串连接。
    - 在其他数学运算（如减法、乘法和除法）中，JavaScript 会将字符串转换为数字，以进行相应的计算。
  - 可以使用 `Number()` `string()` 和 `parseInt()` 等函数来手动进行类型转换。
  - 可以通过`else if()`语句来检查多个条件。

- switch语句:
  - switch的使用场景：根据一个变量的不同值执行不同的代码块。
  - 语法：
```js
const guessNumber = 2;
switch (guessNumber) {
    case 1:
        console.log('You guessed 1!');
        break;
    case 2:
        console.log('You guessed 2!');
        break;
    case 3:
        console.log('You guessed 3!');
        break;
    default:
        console.log('Invalid input!');
}
```

- 条件运算符:
  - 条件运算符（三元运算符）：`(条件) ? (如果为真执行的代码) : (如果为假执行的代码)`。
  - 示例1(通过判断已知变量的值，作为条件运行代码)：
```js
const isAdult = true;
isAdult ? console.log('You are an adult!') : console.log('You are not an adult!');
```
  - 示例2(通过一个新的变量来储存条件运算符的结果):
```js
const age = 18;
const isAdult = age >= 18 ? '😝' : '😭'; //isAdult的值是根据age的值来决定的，如果age大于或等于18，则isAdult的值为'😝'，否则为'😭'
console.log(isAdult);
```
  - 条件运算符可以作为模版字符串中的占位符使用，因为他本质是一个表达式。例如：
```js
const score = 91;
const message = score >= 60 ? '恭喜通过期末考🥳' : `你不及格😭`;
console.log(`同学，你的考试成绩是${score}分，${message}`);
```
</font>