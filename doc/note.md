<font face="monospace">

# Javascript Notes

什么是 Javascript？
Javascript 是一种解释型的编程语言，广泛用于网页开发中。
JavaScript 可以用来创建动态的网页，实现交互式功能。

## 基本概念

### 📒 值（Values）和变量（Variables）：

-   值是最基本的信息单位，可以是数字、字符串或布尔值。
-   变量是用来存储数据的容器，可以用来存储不同的值。
-   变量的命名不可以使用 Javascript 自带的关键字，也不能以数字开头。 例如：`var name = "John";`
-   变量的命名应该有意义，便于理解。例如：`myName = "John";`

### 📒 值的类型：

-   在 JavaScript 中，值分为两大类：原始值（Primitive）和对象（Object）。
    -   **原始值（Primitive）**: 不可变的基本数据类型，包括：
        -   数字（如 `1`, `2.5`）
        -   字符串（如 `"hello"`）
        -   布尔值（如 `true`, `false`）
        -   null
        -   undefined
        -   Symbol（ES6 引入的类型）
        -   BigInt（ES10 引入的类型）
    -   **对象（Object）**: 可变的复杂数据类型，包括：
        -   数组（如 `[1, 2, 3]`）
        -   函数（如 `function() {}`）
        -   普通对象（如 `{ name: 'Alice', age: 25 }`）

### 📒 真值与假值：

-   在 JavaScript 中，任何非零的数值、字符串、布尔值（除了 `false`），以及 `null` 和 `undefined` 都被视为真值。
-   0, "", false, undefined, null 都被视为假值。
-   可以使用 `Boolean()`来验证一个变量的真假值。

### 📒 运算符（Operators）

运算符是用于执行数学运算、赋值、比较或逻辑运算的特殊符号或关键词。

---

#### 🔹 算术运算符（Arithmetic Operators）

| 运算符 | 描述   | 示例     | 结果         |
| ------ | ------ | -------- | ------------ |
| `+`    | 加法   | `1 + 2`  | `3`          |
| `-`    | 减法   | `5 - 2`  | `3`          |
| `*`    | 乘法   | `3 * 2`  | `6`          |
| `/`    | 除法   | `6 / 3`  | `2`          |
| `%`    | 取模   | `5 % 2`  | `1`          |
| `**`   | 幂运算 | `2 ** 3` | `8`          |
| `++`   | 自增   | `x++`    | x 先使用后+1 |
| `--`   | 自减   | `x--`    | x 先使用后-1 |

---

#### 🔹 赋值运算符（Assignment Operators）

| 运算符 | 描述     | 示例                        |
| ------ | -------- | --------------------------- |
| `=`    | 赋值     | `x = 10`                    |
| `+=`   | 加后赋值 | `x += 5` 等价于 `x = x + 5` |
| `-=`   | 减后赋值 | `x -= 3`                    |
| `*=`   | 乘后赋值 | `x *= 2`                    |
| `/=`   | 除后赋值 | `x /= 4`                    |

---

#### 🔹 比较运算符（Comparison Operators）

| 运算符 | 描述                | 示例        | 结果    |
| ------ | ------------------- | ----------- | ------- |
| `==`   | 相等（值）          | `5 == '5'`  | `true`  |
| `===`  | 严格相等（值+类型） | `5 === '5'` | `false` |
| `!=`   | 不等                | `5 != '5'`  | `false` |
| `!==`  | 严格不等            | `5 !== '5'` | `true`  |
| `>`    | 大于                | `6 > 5`     | `true`  |
| `<`    | 小于                | `3 < 5`     | `true`  |
| `>=`   | 大于或等于          | `5 >= 5`    | `true`  |
| `<=`   | 小于或等于          | `4 <= 5`    | `true`  |

---

#### 🔹 其他常见运算符

-   **逻辑运算符**

    -   `&&` 与
    -   `||` 或
    -   `!` 非
    -   `??` 空值合并运算符

-   **展开运算符（Spread）**
    -   `{ ...obj }`：复制对象（浅拷贝）
    -   `[ ...arr ]`：复制数组

---

### 📒 布尔逻辑：

**什么是布尔逻辑？**

-   布尔逻辑是通过真值和假值来解决复杂问题的方法。

**AND/OR/NOT**

-   **AND**（与）: 如果两个条件都为真，则返回真。用`&&`表示。
-   **OR**（或）: 如果至少有一个条件为真，则返回真。用`||`表示。
-   **NOT**（非）: 如果条件为真，则返回假，否则返回真。用`!`表示。

### 📒Function：

-   什么是 Function?
    -   大白话版：Function 是一种**对象**，用于封装一段可重用的代码。
    -   Function 可以像变量一样储存(代码)，也可以像函数一样调用。
    -   我们可以把 Function 看作一个机器，它可以通过内部的代码来将我们传递给它的参数进行处理，并且返回(`return`)给我们内部处理的结果。
    -   `return`返回的结果可以被其他函数使用或存储。
    -   在 Js 中，函数其实也只是个值，因为函数是值，所以可以被储存在声明的变量中
    -   ⚠️ 如果使用函数表达式定义的话，不可以在函数还没有被定义的时候提前调用要储存该函数的变量 ⚠️

### 📒 数组：

-   数组是一种特殊的对象，可以用来存储多个数据项。
-   数组可以存储不同类型的数据项，包括字符串、数字、布尔值等，甚至是表达式。

### 📒 对象：

-   数组可以储存很多的信息，但是要搜索或者编辑它只能通过索引，所以有更方便的方法让我们通过键来访问和修改数据项。那就是对象。
-   对象的键(key)是访问特定值的标识符。类似于数组的索引，对象的键是通过字符串或符号来标识的。
-   对象的值(value)是对象中存储的数据。又叫属性(property)。
-   对象可以保存任意类型的数据，包括字符串、数字、布尔值、数组、对象，甚至是函数。

### 📒For 循环：

-   `for` 循环是 JavaScript 中最常用的循环之一，用于重复执行一段代码。
-   经常使用 `for` 循环来遍历数组或对象中的元素。

### 📒While 循环：

-   `while` 循环是 JavaScript 中另一种常用的循环之一，用于重复执行一段代码。
-   `while`和`for`的区别在于它们的执行条件不同。`while`循环通常用于当你不知道循环次数的情况下，直到某个条件为 false 时才停止。

## 基本语法

-   使用`console.log()`输出内容到控制台。使用`alert()`显示一个警告框。

```js
console.log("Hello World");
alert("Hello World");
```

### 语句和表达式(Statements and Expressions )

-   **语句**：一组命令，用于完成特定的任务。例如`if...else`、`for`循环等。
-   **表达式**：计算结果（生成值）的代码块。例如`1 + 2`、`"Hello World!"`等。

-   使用`typeof(变量名)`来检查变量的类型。

```js
let isFun = true;
let message = "Hello world!";
console.log(
    "messgae type is " + typeof message + " and isFun type is " + typeof isFun
);
//输出结果：message type is string and isFun type is boolean
```

-   使用`变量 命名 = 值`来定义变量的时候，如果一开始已经定义了变量的名字，那么想要重新赋值给这个变量时，可以直接使用`变量名 = 新的值`。

```js
let number = 10;
//重新赋值
number = 20；
```

-   声明变量的三种方式（**更多细节稍后更新**）：

    -   `let`:当我们需要改变变量的值的时候，可以使用`let`来声明变量。
    -   `const`:用于不需要改变变量的值的时候，如果强行修改了这个变量的值，就会报错。可以理解为`const`为常量。
    -   `var`:在 ES6 之前，我们使用的声明变量的方式。现在不推荐使用。

-   模版字符串：
    -   使用模版字符串（template string）来定义多行文本和嵌入表达式。模板字符串用反引号（``）包围，可以包含多行文本，并且可以在文本中嵌入表达式。
    -   使用模板字符串的插值语法（`${}`）来嵌入变量/表达式等。这样可以使代码更加简洁和易读，并且不需要总是使用`+`号连接字符串。一下是一个例子：

```js
const firstName = "AXITEE";
const job = "Software Engineer";
const age = new Date().getFullYear() - 1995;

const aboutMe =
    "我是" + firstName + "，我是一名" + job + "，我今年" + age + "。";
const newMe = `我是${firstName}，我是一名${job},我今年${age}。`;

console.log(aboutMe);
console.log(newMe);
//aboutMe: "我是AXITEE，我是一名Software Engineer，我今年36岁。"
//newMe: "我是AXITEE，我是一名Software Engineer，我今年36岁。"
```

-   if/else:
    -   使用`if/else`语句来根据条件执行不同的代码块。以下是一个例子：

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

-   if()语句用于检查条件是否为真。else()语句用于在条件为假时执行的代码块。

-   类型转换:

    -   在 JavaScript 中，进行数学运算时，如果涉及字符串和数字，JavaScript 会进行自动类型转换（Type Coercion）。以下是一些例子：
        -   在加号 (+) 运算中，如果参与运算的有字符串，JavaScript 会执行字符串连接。
        -   在其他数学运算（如减法、乘法和除法）中，JavaScript 会将字符串转换为数字，以进行相应的计算。
    -   可以使用 `Number()` `string()` 和 `parseInt()` 等函数来手动进行类型转换。
    -   可以通过`else if()`语句来检查多个条件。

-   switch 语句:
    -   switch 的使用场景：根据一个变量的不同值执行不同的代码块。
    -   语法：

```js
const guessNumber = 2;
switch (guessNumber) {
    case 1:
        console.log("You guessed 1!");
        break;
    case 2:
        console.log("You guessed 2!");
        break;
    case 3:
        console.log("You guessed 3!");
        break;
    default:
        console.log("Invalid input!");
}
```

-   条件运算符:
    -   条件运算符（三元运算符）：`(条件) ? (如果为真执行的代码) : (如果为假执行的代码)`。
    -   示例 1(通过判断已知变量的值，作为条件运行代码)：

```js
const isAdult = true;
isAdult
    ? console.log("You are an adult!")
    : console.log("You are not an adult!");
```

-   示例 2(通过一个新的变量来储存条件运算符的结果):

```js
const age = 18;
const isAdult = age >= 18 ? "😝" : "😭"; //isAdult的值是根据age的值来决定的，如果age大于或等于18，则isAdult的值为'😝'，否则为'😭'
console.log(isAdult);
```

-   条件运算符可以作为模版字符串中的占位符使用，因为他本质是一个表达式。例如：

```js
const score = 91;
const message = score >= 60 ? "恭喜通过期末考🥳" : `你不及格😭`;
console.log(`同学，你的考试成绩是${score}分，${message}`);
```

-   **Function:**

    -   基本的格式：`function 函数名(参数1, 参数2, ...) { ... }`
    -   调用函数的基本格式：
        ```js
        function looger() {
            console.log("Hello World");
        }
        looger(); // 调用函数
        ```
    -   函数不仅可以重复使用 body 内的代码，还可以**接受参数作为输入，并返回结果输出，让我们在函数外使用这个结果。** 例如：

        ```js
        //第一种情况：
        function 函数名(参数1, 参数2) {
            return 参数1 + 参数2;
        }
        console.log(函数名(1, 2)); // 调用输出函数的返回值
        // 输出：3

        //第二种情况：
        function fruitMachine(apples, oranges) {
            console.log(apples, oranges);
            const juice = `juice made with ${apples} apples and ${oranges} oranges`; //创造一个变量，储存返回值
            return juice; // 返回变量的值
        }
        console.log(fruitMachine(10, 20)); //对函数的输入对应参数，并调用函数输出结果
        // 输出：juice made with 10 apples and 20 oranges

        //
        ```

    -   函数的几种声明方式：

        -   普通函数声明:普通的函数声明，使用 function 关键字来定义一个函数。例：

        ```js
        function calcAge1(birthday) {
            const age = new Date().getFullYear() - birthday;
            return age;
        }
        const age1 = calcAge1(2000); // 调用函数并传入参数
        console.log(age1); // 输出结果
        ```

        -   函数表达式声明:使用 function 关键字来定义一个匿名函数，然后赋值给变量。例：

        ```js
        const calcAge1 = function(birthday) {/
            const age = new Date().getFullYear() - birthday;
            return age;
        }
        console.log(calcAge1(1995)); // 输出结果
        ```

        -   箭头函数声明:使用箭头符号=>来定义一个匿名函数，不需要 function 关键字。例：

        ```js
        //基本语法:
        const 变量名 = (参数) => 返回结果;
        //当返回值是一个复杂代码时，可以使用大括号{}包裹起来。
        const 变量名 = (参数) => {
            const 函数内变量名 = 赋值;
            return 函数变量名;
        };
        console.log(变量名(参数)); // 输出结果
        ```

        -   **函数内部调用函数:**

        ```mermaid
        graph TD;
        A[调用 mainFunction] -->  B[传入参数]
        B --> |调用和传入例：console.log mainFunction（param1, param2）;| C[调用 helperFunction]
        C --> |在mainFunction调用helperFunction| D[处理数据]
        D --> E[返回结果]
        E --> F[mainFunction 接收结果]
        F --> G[返回最终输出]
        ```

        -   代码示例:

        ```js
        //辅助函数
        function fruitCutter(fruit) {
            return fruit * 4; //这里的fruit将会接受来自fruitMachine的参数
        }

        //主函数
        function fruitMachine(apples, oranges) {
            //调用辅助函数，传给辅助函数参数，并返回辅助函数的处理结果
            const appleJuice = fruitCutter(apples);
            const orangeJuice = fruitCutter(oranges);

            return `做苹果汁需要${applesJuice}个苹果，做橙汁需要${orangeJuice}个橙子`;
        }
        const juice = fruitMachine(2, 3); //调用函数并传入参数到主函数
        console.log(juice); //输出结果:做苹果汁需要16个苹果，做橙汁需要24个橙子。
        ```

-   **数组语法:**

    -   用`[]`来创建一个数组。
    -   也可以使用`new Array()`来创建一个数组。
    -   如果要调用数组中的某个元素，可以使用**索引**。索引从 0 开始，所以第一个元素的索引是 0，第二个元素的索引是 1，依此类推。例子如下：
        ```js
        const fruits = ["apple", "orange", "banana"];
        console.log(fruits[0]); //输出结果:apple
        console.log(fruits[1]); //输出结果:orange
        console.log(fruits[2]); //输出结果:banana
        ```
    -   🚀 数组操作技巧:
        -   `数组变量名.length`:
            -   可以用来获取数组的长度。例子如下：
                ```js
                const fruits = ["banana", "orange", "watermelon"];
                console.log(fruits.length); // 输出结果:3
                ```
            -   使用`变量名(变量名.length-1)`可以用来获取数组中最后一个元素(因为总长度一定比索引大一)。
        -   `变量名.includes()`:可以用来判断数组中是否包含某个元素。例子如下：
            ```js
            const artist = ["张三", "李四", "王五"];
            console.log(artist.includes("张三")); // 输出结果:true
            ```
        -   `数组变量名.indexOf(元素)`:可以用来查找元素在数组中的索引位置，如果找不到则返回-1。
        -   ➕ 添加数组元素的方法：
            -   `数组变量名.push()`可以将一个或多个值添加到数组的**末尾**。例子如下：
                ```js
                const age = [18, 19, 20];
                age.push(35);
                console.log(age); // 输出结果:[18, 19, 20, 35]
                ```
            -   `数组变量名.unshift()`可以将一个或多个值添加到数组的**开头**。例子如下：
                ```js
                const age = [18, 19, 20];
                age.unshift(35);
                console.log(age); // 输出结果:[35, 18, 19, 20]
                ```
        -   ➖ 删减数组元素的方法：
            -   `数组变量名.pop()`可以移除数组的**末尾**的一个值。例子如下：
                ```js
                const studentList = ["Eric", "John", "Mike"];
                studentList.pop();
                console.log(studentList); // 输出结果:['Eric', 'John']
                ```
                -   `pop()`自身会返回被移除的元素。例子如下：
                    ```js
                    const studentList = ["Eric", "John", "Mike"];
                    console.log(studentList.pop()); // 输出结果:'Mike'
                    ```
            -   `数组变量名.shift()`可以移除数组的**开头**的一个值。例子如下:
                ```js
                const studentList = ["Eric", "John", "Mike"];
                studentList.shift();
                console.log(studentList); // 输出结果:['John', 'Mike']
                ```

-   **对象语法:**

    -   用`{}`定义一个空对象。
    -   使用`:`分隔键和值(属性)。
    -   如何从对象中获取数据:
        -   使用`对象名.属性名`来访问对象的属性。
        -   使用`对象名['属性名']`来访问对象的属性。
        -   两者的不同：使用`对象名['属性名']`时，括号内可以包含变量/表达式。
    -   使用动态生成的键来访问对象的属性。以下是一个例子：

    ```js
    const aboutMe = {
        myName: "AXITEE",
        myJob: "Rookie Progarmer",
        age: new Date().getFullYear() - 1995,
        country: "Japan",
    };
    //aboutMe['my' + namekey] 等价于 aboutMe['myName']，访问的是对象 aboutMe 的 myName 属性
    const namekey = "Name";
    console.log(aboutMe["my" + namekey]);
    ```

    -   添加属性到对象中：`对象名.新属性名 = 值;` 或 `对象名['新属性名'] = 值;`
    -   在对象中添加函数：`对象名.新方法名 = function() { ... };` 或 `对象名['新方法名'] = function() { ... };`
    -   在对象中，如果有函数方法的话，可以使用`this.属性名`来访问当前对象的属性。也可以在函数中通过`this.新属性名 = 新值`来添加新的属性。

-   **For 循环语法:**

    -   `for(循环变量; 条件表达式; 循环体)`：当条件为真时，执行循环体。以下是代码示例：

    ```js
    for (let i = 1; i < 10; i++) {
        console.log(i);
        //输出: 1, 2, ..., 10
    }
    ```

    -   for 循环中的循环变量，不可以用`const`，因为`const`只能在声明时赋值，不能在循环中重新赋值。
    -   想要遍历数组，可以使用 `for` 循环，并且循环终止条件是数组的长度。例如：

    ```js
    const nameArray = ["Mark", "John", "Jane"];
    for (let i = 0; i < nameArray.length; i++) {
        console.log(nameArray[i]);
        //输出: Mark, John, Jane
    }
    ```

    -   在 `for` 循环中，可以使用 `continue` 和 `break` 来控制循环的执行。
    -   `continue`：跳过当前循环的剩余部分，并继续下一次循环。例如：

    ```js
    const nameArray = ['Mark', 'John', 'Jane'];
    for(let i = 0; i < nameArray.length; i++){
      if(nameArray[i] === 'John'){
        continue;
      }
      console.log(nameArray[i]);
      //输出: Mark, Jane
    ```

    -   `break`：终止整个循环。例如：

    ```js
    const nameArray = ['Mark', 'John', 'Jane'];
    for(let i = 0; i < nameArray.length; i++){
      if(nameArray[i] === 'John'){
        break;
      }
      console.log(nameArray[i]);
      //输出: Mark
    ```

    -   **循环嵌套**：一个循环在另一个循环内部。例如：

    ```js
    for (let exe = 1; exe < 4; exe++) {
        console.log(`-----START-----${exe}`);
        for (let rep = 1; rep < 6; rep++) {
            console.log(`该组第${rep}次`);
        }
    }
    /*输出:
    -----START-----1
    该组第1次
    该组第2次
    该组第3次
    该组第4次
    该组第5次
    -----START-----2
    ....
    */
    ```

-   **While 循环语法:**

    -   基本语法：`while (条件) {执行代码}`
    -   在不知道循环次数的情况下使用。例如：

    ```js
    let dice = Math.trunc(Math.random() * 6 + 1);
    while (dice != 6) {
        console.log(`你的骰子是${dice}!`);
        dice = Math.trunc(Math.random() * 6 + 1);
    }
    console.log(`🎉恭喜，你猜对了🎉`);
    //输出会直到dice等于6为止。
    ```

    </font>

-   **Math.方法:**
    -   `Math.random()`生成 0 到 1 之间的随机数（不包含 1）
    -   `Math.trunc()` 取整数部分（去掉小数）

## DOM 操作

### 什么是 DOM：

DOM 是一种用于与 HTML 和 JavaScript 进行交互的技术，它允许你通过 JavaScript 来修改和控制网页的内容。DOM 提供了多种方法来选择、操作和添加元素到页面中。

JavaScript 能够通过 document 进入 DOM 来访问 HTML。
基本上，可以把 DOM 看作一个“桥”，用来连接 HTML 和 JavaScript。而 document 相当于“桥”的入口点。

### 选择器（Selectors）：

-   `document.querySelector('.类名').该类的属性值`是 DOM 中一种选择器，用于选择具有特定类名的元素。你可以通过这个选择器从 html 中获取到一个或多个元素，并对它们进行操作。

    -   有几种方式可以让 DOM 获取元素：
        -   `document.querySelectorAll('元素ID')`：通过元素的 ID 获取。
        -   `document.querySelectorAll('.类名')`：通过类名获取。
        -   `document.querySelectorAll('标签名')`：通过标签名获取。
    -   `doucument.querySelectorAll().textContent` 可以返回所有具有该类名的元素的文本内容。
    -   使用`.textContent = '想要修改的文本'`可以将选定的元素的内容修改为指定的文本。**注意：**如果要将获取的文本内容赋值给一个变量，需要使用 `let`而不是`const`。
    -   `doucument.querySelectorAll().value` 可以返回所有具有该类名的元素的值属性（即输入框中的内容）。
    -   `doucument.querySelectorAll('').style.xxx = 'xxx'` 是用来设置元素的样式属性。例如：

        ```js
        // 设置按钮的背景颜色为红色
        document.querySelector(".button").style.backgroundColor = "red";
        // 设置<body>的背景颜色为绿色
        document.querySelector("body").style.backgroundColor = "green";
        ```

    -   **`querySelector`和`querySelectorAll`的区别：**

        -   `querySelector`：匹配的第一个元素。
        -   `querySelectorAll`：匹配所有同名元素。

-   `getElementById`是 DOM 中另一种选择器，它是通过元素的 `id` 属性来选择的。

    -   使用`getElementById`时，不需要 **#** 号。

-   `.classList` 是一个类列表对象，可以用来操作元素的类名。

    -   `classList.add(className)`：添加一个类名。
    -   `classList.remove(className)`：移除一个类名。
    -   `classList.toggle(className)`：如果类名存在，则移除；如果不存在，则添加。
    -   `classList.contains(className)`：检查类名是否存在。

-   `.src` 是一个属性，可以用来设置或获取元素的源文件路径。

-   **通常在 JavaScript 中操控页面时，最好给这个元素添加一个要被操作的单独的类名，这样可以方便地进行样式控制和事件处理。**

### 事件监听器( EventListener)

-   `.addEventListener`是用于添加事件监听器的方法。它接受两个参数：第一个是要监听的事件类型（例如 `'click'`），第二个是一个回调函数，**当该事件发生时会执行这个回调函数。**

    -   `.addEventListener` 的第二个参数的作用是**事件处理程序**，它是你定义的函数，当事件触发时会被调用。以下是一个简单的例子：

    ```js
    document.querySelector(".button").addEventListener("click", function () {
        console.log("按钮被点击了");
    });
    ```

    -   总而言之，`addEventListener('',()=>)` 的第二个参数必须是**Function**，它是你定义的函数，当事件触发时会被调用。

    -   想要使`SelectorAll`中的所有元素都添加相同的事件监听器，可以使用 for 循环来遍历这些元素，并为每个元素添加事件监听器。

    -   可以直接在`document`上添加事件监听器，这样所有的元素都会触发这个事件（全局事件）。

## 关键字

### this

-   `this` 表示当前执行上下文的调用者，也就是“谁调用我，我就指向谁”。
-   `this` 的值会随着函数的调用方式而变化。下面是一些常见的场景：

| 场景             | this 指向                                    |
| ---------------- | -------------------------------------------- |
| **普通函数调用** | 全局对象（在浏览器中是 `window`）            |
| **对象方法调用** | 调用该方法的对象                             |
| **构造函数中**   | 新创建的实例对象                             |
| **箭头函数**     | 没有自己的 `this`，会继承外层作用域的 `this` |
| **事件监听器中** | 默认指向绑定事件的元素（如按钮等）           |

#### ✅ 示例说明：

```js
// 1. 普通函数调用
function showThis() {
    console.log(this);
}
showThis(); // 浏览器中输出：window

// 2. 对象方法调用
const person = {
    name: "AXITEE",
    greet() {
        console.log(this.name);
    },
};
person.greet(); // 输出：AXITEE

// 3. 构造函数
function Person(name) {
    this.name = name;
}
const p = new Person("AXITEE");
console.log(p.name); // 输出：AXITEE

// 4. 箭头函数
const obj = {
    name: "AXITEE",
    greet: () => {
        console.log(this.name); // this 不指向 obj，而是继承自外层（例如 window）
    },
};
obj.greet(); // 输出：undefined

// 5. 事件监听器
document.querySelector("button").addEventListener("click", function () {
    console.log(this); // this 指向被点击的 button 元素
});
```

### arguments

-   `arguments` 是一个**类数组对象**，包含函数调用时传入的所有参数。
-   它只在 **普通函数（非箭头函数）** 中有效。
-   通常用于**不确定传入参数个数时**，对所有参数进行处理。
-   从 ES6 开始，更推荐使用 `...rest` 参数来代替 `arguments`，因为 rest 更加直观并且是标准数组。

#### ✅ 示例说明：

```js
function sumAll() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}
console.log(sumAll(1, 2, 3, 4)); // 输出：10
```

#### ✅ 推荐替代写法（ES6）：

```js
function sumAll(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}
console.log(sumAll(1, 2, 3, 4)); // 输出：10
```

## 数据结构、现代运算符与字符串

### 数组解构

数组解构是一种可以从数组中提取值，并将其赋值给变量的简洁语法。这是 ES6 引入的一种特性，使得代码更加简洁和可读。

#### 语法

可以使用以下语法来进行数组解构：

```javascript
const [变量1, 变量2, ...其余变量] = 数组;
```

通过这一方式，你可以快速将数组中的值分配给对应的变量。例如：

```javascript
const fruits = ["apple", "banana", "cherry"];
const [firstFruit, secondFruit] = fruits;

console.log(firstFruit); // 输出: 'apple'
console.log(secondFruit); // 输出: 'banana'
```

在上面的例子中，`firstFruit` 和 `secondFruit` 分别被赋值为数组 `fruits` 中的两个元素 `'apple'` 和 `'banana'`。

#### 高级用法

1. **默认值**
   如果数组中的元素少于变量的数量，可以给变量赋予默认值：

    ```javascript
    const [x, y] = [10];
    console.log(x); // 输出: 10
    console.log(y); // 输出: undefined

    const [x = 1, y = 1, z = 1] = [10];
    console.log(x, y, z); // 输出: 10,1,1
    ```

2. **跳过元素**
   可以通过在逗号间留下空位来跳过数组中的某些元素：

    ```javascript
    const numbers = [1, 2, 3];
    const [, , thirdNumber] = numbers;
    console.log(thirdNumber); // 输出: 3
    ```

数组解构是提升代码可读性和简洁度的有力工具，尤其是在处理复杂的数据结构时。

### 对象解构

对象解构和数组解构一样，是一种可以从对象中提取值，并将其赋值给变量的简洁语法。

#### 语法

可以使用以下语法来进行对象解构：

```javascript
const { 变量1, 变量2, ...其余变量 } = 对象;
//变量名需要和对象中的属性名一致。
```

如果想要使用不同的变量名，可以使用冒号来重命名：

```javascript
const retaurant = {
    name: "The Restaurant",
    location: "Tokyo",
};
const { name: restaurantName } = restaurant;
```

如果想要在对象中添加默认值，可以在属性后面加上一个等于号和默认值：

```javascript
const person = {
    name: "John",
    age: 25,
    city: "New York",
};
const { name: personName, country = [] } = person;
```

对象的变量交换可以通过解构赋值来实现。例如，将两个对象的属性交换：

```javascript
//对象的变量交换
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

({ a, b } = obj);
//在 JavaScript 中，如果你直接写 { a, b } = obj;，会被当成一个代码块（block statement），导致语法错误。
```

对于带有嵌套结构的对象，可以参考以下的例子：

```javascript
const person = {
    name: "John",
    age: 25,
    address: {
        city: "New York",
        zipCode: "10001",
    },
};
const {
    address: { city, zipCode },
} = person;
console.log(city, zipCode);
```

在函数的参数中，直接解构一个对象并给里面的属性赋值，可以参考以下的例子：

```javaScript
const person = {
    name: "John",
    age: 25,
    address: function({city,country}){
        console.log(`I live in ${country} and ${city}`);//会输出"I live in Japan and Tokyo"
    }
}

const address = {
    city: "Tokyo",
    country: "Japan",
};
person.address(address);
```

### 扩展运算符`...`

扩展运算符（Spread Operator）`...` 主要用于数组、对象和函数参数的展开，提供了一种简洁的方式来操作数据。

```javascript
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];

const newArr = [1, 2, ...arr];
console.log(newArr);
```

### Rest Pattern（剩余模式）和 Rest Parameters（剩余参数）

作用：使用`...展开变量名`用于数组解构和对象解构，将剩余的值收集成一个数组或对象。

```javascript
const arr = [1, 2, 3, 4, 5];
const [a, b, ...others] = arr;
console.log(a, b, others); //1 2 [3,4,5]
```

**通过`...`收集剩余的元素时，必须保证它是在数组的最后一个参数上。**

### 深入了解`&&`和`||`

逻辑运算符，除了可以用于布尔值比较和条件判断，还可以做短路求值。

-   `||`：会返回第一个真值，如果两个都是假值，则返回最后一个假值。如果两个值都为真值，则返回第一个真值。

```javascript
console.log(3 || "hello"); // 3
console.log("" || "hello"); // hello
```

```javascript
//常见用途：给变量设置默认值。
const userName = "" || "Guest";
console.log(userName); // "Guest" ✅ 如果 `""` 是空字符串，使用默认值。
```

-   `&&`：如果左侧为 false，直接返回左侧值，否则返回右侧值。

```javascript
console.log(3 && "hello"); //返回 "hello"
console.log(false && "hello"); // 返回 false
console.log("" && "hello"); // 返回 ""
```

```javascript
//常见用途，判断条件是否满足
const isLoggedIn = true;
isLoggedIn && console.log("Welcome!"); // ✅ "Welcome!"  (执行 `console.log`)

const isMember = false;
isMember && console.log("You have access!"); // ❌ 不执行（因为 isMember 是 false）
```

### `??`空值合并运算符的用法

作用：当左侧是 null 或 undefined 时，返回右侧值；否则返回左侧值。

`??`可以有效避免 0 和""被视为 false 的情况。例如：

```javascript
const num = 0;
console.log(num ?? 1); //0
```

### 逻辑赋值运算符（Logical Assignment Operators）

ES2021 引入了 三种逻辑赋值运算符，用于简化 &&、|| 和 ?? 的赋值逻辑。

-   `||=`或赋值运算符：如果左边的值为假值，则将右边的值赋给左边。例如：

```javascript
const person = {
    personName: "AXITEE",
    age: 20,
    gender: "male",
};
person.country ||= "China";
console.log(person.country); // 输出：China
```

-   `??=`空值合并赋值运算符：与`??`相同，当左边的值为 null 或者 undefined 时，将右边的值赋给左边（不包含 0）。例如：

```javascript
const musicList = {
    name: "Scary Monster",
    artists: "Skrillex",
    fllowers: 0,
};
musicList.fllowers ??= 10;
console.log(musicList.fllowers); //输出0
```

-   `&&=` 运算符：与`&&`相同，如果左侧的值为假，则不执行右侧的代码，如果左侧的值为真，则执行右侧的代码。

```javascript
let a = 1;
a &&= 2; // a 现在是 2
console.log(a); // 输出 2
```

### `for-of`循环

是一种更简洁的方式来遍历数组或字符串中的每个元素。它不需要显式地使用索引，而是直接访问每个元素。以下是一个简单的示例：

```javascript
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const i of num) {
    console.log(i);
}
// Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
```

如果需要访问元素的索引，可以使用 `entries()` 方法。它返回一个包含键值对的数组，其中键是元素的索引，值是元素本身。例如：

```javascript
const num = [1, 2, 3];
for (const i of num.entries()) {
    console.log(i);
}
// Output: [0, 1], [1, 2], [2, 3]
```

### 对象字面量（ES6）

ES6 新增的编写对象字面量时的三种方式：

-   通过变量名创建属性：

```javascript
const person ={
    name: "kuma";
    age: 25;
};
const personList ={
    kuma, // 等价于 personList = {kuma: kuma}
}
```

-   在对象内不需要写`function`关键字就可创造函数：

```javascript
const person={
    name:"kuma",
    age:25,
    sayHi:(){
        console.log('hi');
    }
}
```

-   可以使用方括号 [] 包裹表达式，动态计算属性名。这使得对象的键（key）可以基于变量或表达式的值自动生成。

```javascript
const voters = ["Bob", "Alice", "Charlie"];
const votes = {
    [voters[0]]: "Yes",
    [voters[1]]: "No",
    [voters[2]]: "Maybe",
};
console.log(votes); // { Bob: 'Yes', Alice: 'No', Charlie: 'Maybe' }
```

### 可选链`?.`

可选链操作符（`?.`）允许你安全地访问嵌套对象和数组的属性，而不会因为中间的属性不存在而导致错误。这样可以让我们省去用 if 判断等方法来检查是否存在某个属性。

```javascript
const person = {
    name: "john",
    age: 30,
};
console.log(person?.country); // Output: undefined;
```

除了判断对象是否存在之外，可选链操作符还可以用于判断函数方法。例如：

```javascript
const person = {
    name: "kuma",
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    },
};
person.greet?.(); // Output: Hello, my name is kuma
```

### 遍历对象

-   使用 `Object.keys()` 方法获取对象的所有键：

```javascript
const person = {
    name: "kuma",
    age: 30,
};
console.log(Object.keys(person)); // 输出 ['name', 'age']
```

-   使用 `Object.values()` 方法获取对象的所有值：

```javascript
const person = {
    name: "kuma",
    age: 30,
};
console.log(Object.values(person)); //[ 'kuma', 30 ]
```

-   使用 `Object.entries()` 方法遍历对象的键值对，返回一个数组，其中每个元素都是一个包含键和值的数组。

```javascript
const person = {
    name: "kuma",
    age: 30,
};
console.log(Object.entries(person)); //输出：[ [ 'name', 'kuma' ], [ 'age', 30 ] ]
```

### 集合｜ Sets

集合（Sets）是 JavaScript ES6 中引入的一种内置数据结构，用来存储一组唯一的值，也就是说，集合中的每个值都是独一无二的，不会出现重复。

一下是集合的常用方法：

```javascript
//声明一个新的集合
const mySet = new Set([数组]);
const mySet = new Set("字符串");

//获取集合的大小
const size = mySet.size;

//检查某个值是否在集合中
const hasValue = mySet.has(value);

//添加一个值到集合中
mySet.add(value);

//删除一个值从集合中
mySet.delete(value);

//在两个集合中进行交集操作
const intersection = mySet.intersection(otherSet);

//将两个集合合并成一个新的集合
const union = mySet.union(otherSet);

//difference：返回一个新集合，包含第一个集合中所有不在第二个集合中的元素。
const difference = mySet.difference(otherSet);
```

**在实际场景中，集合主要是用来去除数组中的重复元素。**

### 映射｜ Maps

映射是一种数据结构，用于存储键值对。每个键都必须是唯一的，并且可以是任何类型的值。和对象不同的是，映射的 key 可以是任何类型。

以下是 Maps 的用法：

```javascript
// 创建一个新的Map对象
const myMap = new Map();

// 直接在构造函数中初始化map对象
const myMap = new Map([
    ["key1", "value1"],
    ["key2", "value2"],
]);

//添加键值对
myMap.set("key1", "value1");

//可以连续使用set方法添加多个键值对
myMap.set("1", "2").set("3", "4");

//获取map的某一个值
myMap.get("key1");

//在map.get里添加表达式
myMap.set(1, "value");
myMap.get(0 + 1); //输出‘value’

//检查某个值是否在映射中
myMap.has("key1");

//删除某个键值对
myMap.delete("key2");

//当key是数组时，直接通过get(数组)的方式是无法获取到对应的值。需要先命名一个变量，然后通过赋值变量才能使用。
const arr = [1, 2];
const myMap = new Map().set(arr, "value");
console.log(myMap.get(arr)); // value

//映射可以用for循环去遍历
for (let i of myMap) {
    console.log(i); //输出的是键值对
}
```

### 数组和集合，对象和映射

---

#### 🟦 Arrays

```js
const tasks = ["Code", "Eat", "Code"];
// ["Code", "Eat", "Code"]
```

-   👉 使用场景：
    -   你需要一个**有序（Ordered）**的值列表
    -   允许包含**重复值**
    -   需要频繁地 **操作 / 变换数据（manipulate）**

---

#### 🟩 Sets

```js
const tasks = new Set(["Code", "Eat", "Code"]);
// {"Code", "Eat"}
```

-   👉 使用场景：
    -   你需要只包含**唯一值（Unique values）**
    -   对 **性能要求高**（高性能查找 / 去重）
    -   快速地从数组中**移除重复项**

---

#### 🧠 总结对比（Array vs Set）

| 特性/用途                 | Array                           | Set                                 |
| ------------------------- | ------------------------------- | ----------------------------------- |
| 是否有序（保持插入顺序）  | ✅ 是                           | ✅ 是                               |
| 是否允许重复              | ✅ 是                           | ❌ 不允许                           |
| 是否适合频繁操作/变换数据 | ✅ 适合（支持 map/filter/sort） | ❌ 不太适合（只能用 for...of 遍历） |
| 是否自动去重              | ❌ 不会                         | ✅ 会自动去重                       |
| 性能优势                  | 一般                            | 更快的查找（基于哈希）              |

---

#### 🟧 Objects

```js
task = {
    task: "Code",
    date: "today",
    repeat: true,
};
```

-   👉 更“传统”的 key/value 存储方式（有时被滥用）
-   👉 使用 `.` 和 `[]` 更容易读写属性值

---

#### 🟨 Maps

```js
task = new Map([
    ["task", "Code"],
    ["date", "today"],
    [false, "Start coding!"],
]);
```

-   👉 性能更好（Better performance）
-   👉 键可以是 **任何数据类型**（Keys can have any type）
-   👉 更容易迭代（如 `for...of`）
-   👉 更容易获取 size（使用 `.size`）

---

#### 🧠 总结对比（Object vs Map）

| 特性/用途 | Object                          | Map                                |
| --------- | ------------------------------- | ---------------------------------- |
| 键的类型  | 只能是字符串或 Symbol           | 任意类型（包括对象、布尔值等）     |
| 插入顺序  | 不保证顺序                      | 保持插入顺序                       |
| 遍历方式  | `for...in` / `Object.entries()` | `forEach()` 或 `for...of` 直接遍历 |
| 获取大小  | 需要手动计算                    | 使用 `.size` 属性                  |
| 使用场景  | 简单结构或 JSON                 | 复杂结构、性能要求高、键类型多样   |

### 字符串处理

-   `string[index]`: 获取指定位置的字符。
-   `string.length`: 获取字符串的长度。
-   `string.indexOf()`: 返回指定值在字符串中首次出现的位置，如果未找到则返回 -1。
-   `string.lastIndexOf()`: 返回指定值在字符串中最后出现的位置，如果未找到则返回 -1。
-   `string.slice()`: 根据索引截取字符串，返回一个新的字符串。例如：

```javascript
const name = "AXITEE NENG";
console.log(name.slice(7)); //输出：NENG
console.log(name.slice(name.indexOf("A"))); //输出：AXITEE NENG
console.log(name.slice(name.indexOf("A", "E"))); //输出：AXITEE
```

-   `string.toLowerCase()`: 将字符串转换为小写。
-   `string.toUpperCase()`: 将字符串转换为大写。
-   `string.trim()`: 去掉字符串两端的空格。
-   `string.replace()`: 用于替换字符串中**首个出现的**特定子字符串。第一个参数是要被替换的子字符串，第二个参数是替换后的子字符串。例如:

```javascript
const name = "AXITEE NENG";
const newName = name.replace("NENG", "XIONG");
console.log(newName); //输出：AXITEE XIONG
```

-   `string.replaceAll()`: 用于将字符串中所有匹配的子字符串都替换为指定的字符串。例如:

```javascript
const name = "AXITAA NENG";
const newName = name.replace("A", "E");
console.log(newName); //输出：AXITEE NENG
```

-   `string.includes()`: 检查字符串是否包含指定的子字符串。返回一个布尔值。

-   `string.startsWith()`: 判断字符串是否以指定的子字符串开头。以指定的字符串结尾的话用`string.endWith()`

-   `string.split()`: 非常重点的一个语法,可以使一个字符串按照某个字符拆分成数组。

```javascript
// 按空格分词
const sentence = "前端 编程 真有趣";
console.log(sentence.split(" ")); // ["前端", "编程", "真有趣"]

// 按每个字母切开
console.log("Hello".split("")); // ["H", "e", "l", "l", "o"]

// 限制分割次数（最多分成两段）
console.log("one-two-three".split("-", 2)); // ["one", "two"]
```

-   `string.join()`: 和 split 相反，join 方法可以把被拆分开的数组按照分隔符组合成新的字符串。

```javascript
const [name, id] = "AXITEE 0821".split(" ");
const sentence = [name, "id", "is", id].join(" ");
console.log(sentence); //AXITEE id is 0821
```

-   ` string.padStart()` `string.padEnd()`: 分别在原字符串的开头和结尾添加一定数量的字符。括号内的第一个参数代表最终的字符数量的总长度，第二个参数代表要添加的字符

```javascript
const message = "hello world";
console.log(message.padStart(12, "*")); //*hello world
console.log(message.padEnd(12, "*")); //hello world*
```

-   `string.repeat()`: 可以用于重复字符串指定的次数。例如，`'abc'.repeat(3)` 将返回 `'abcabcabc'`。

## 更深一步了解 Function

### 默认参数

-   在 JavaScript 中，您可以为函数参数设置默认值，以便在未提供该参数时使用默认值。例如，您可以定义一个函数，如 `function example(param = defaultValue) {}`，其中 `defaultValue` 是当 `param` 未传递时使用的值，例如：

```javascript
const person = function (name, age, country = "中国") {
    return country;
}; //在没有外部传入新的数据到country，将保持原有的值。
```

-   默认参数可以是具体的值，也可以是表达式。

### 参数传递的工作方式：值传递 vs.引用传递

-   值类型（Primitive Types）

    -   包括：string、number、boolean、undefined、null、symbol、bigint
    -   通过值传递
    -   会将值复制一份传给函数参数
    -   函数内部的修改不会影响外部变量

-   引用类型（Reference Types）

    -   包括：object、array、function
    -   通过引用传递
    -   实际上传的是地址（引用）
    -   函数内部的修改会影响原始对象

-   ⚠️ 在函数内部操作对象时，应避免直接修改原始对象的内容。
    这会带来副作用，特别是当多个函数共享同一个对象时，可能会因为其中一个函数的修改影响其他逻辑，导致数据异常或难以排查的 Bug。

-   原始值的传递方式

```
原始值变量
┌────────────┐
│  name = "Kuma" │
└────────────┘
        ↓ 复制值
┌────────────┐
│ function(n = "Kuma") │ // 改动 n，不影响外部
└────────────┘

```

-   对象的传递方式

```
对象变量
┌────────────┐
│ person --> 内存地址 0xA1 │
└────────────┘

        ↓ 复制“引用值”（0xA1）

┌────────────┐
│ function(obj = 0xA1) │
│ obj.name = ...       │ // ✅ 改了原对象
│ obj = { ... }        │ // ❌ 只是改了 obj 本身，不影响外部变量
└────────────┘
```

### 一等函数与高阶函数

-   在 js 中，函数被定义为一等公民，这意味着该函数仅被视为一种值。

-   为什么函数在 js 中是这样工作的？ 因为函数在 js 中被视为 object 的一种，而 object 本身就是一种值类型。

-   不要混淆**一等函数**和**高阶函数**。一等函数是一种特性，表示函数本身在该编程语言中视为一种值，而正是因为这种特性，才有高阶函数这种**写法**（函数套函数）

### 接受回调函数的函数

-   在 javascript 中，可以写一个高阶函数，该函数接受其他函数处理的结果并返回，例如:

```javascript
const person = function (name) {
    return name + "!!";
};

const highLevel = function (name, fn) {
    console.log(`${fn(name)}`);
};

highLevel("AXITEE", person); //输出："AXITEE!!"
```

### 返回函数的函数

-   **函数返回函数**是一种常见的函数式编程技巧，适用于**函数工厂**、**部分应用（partial application）**等场景。

```js
const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting}, ${name}`);
    };
};

const result = greet("Hello");
result("AXITEE"); // 输出：Hello, AXITEE
```

-   返回函数的函数也可以用复数个箭头函数连接：

```javascript
const person = (name) => (age) =>
    console.log(`I am ${name} and I am ${age} years old`);
person("AXITEE")(19);
```

### This 关键字

-   JavaScript 中，函数内部的 `this`，**并不是在函数被定义时决定的**。
-   它的值是在**函数被执行的那一刻，根据“谁调用了它”动态决定的**。
-   如果函数是被某个对象调用的（例如 `obj.函数()`），那 `this` 就指向那个对象。
-   但如果函数是“单独调用”的（例如 `函数()`），那 `this` 就是 `undefined`（在严格模式下），因为没有调用者。
-   所以当我们把一个对象的方法单独赋值给变量再调用时，由于没有对象参与调用，`this` 会丢失。

在 JavaScript 中，`this` 的值取决于函数的调用方式。通过使用 `.call()`、`.apply()` 或 `.bind()` 方法，可以显式地指定 `this` 的值（调用的对象）。例如：

-   `.call()`

```javascript
const oldperson = {
    name: "KUMA",
    age(date) {
        console.log(`${this.name}'s age is ${date}`);
    },
};

oldperson.age(30);

const newperson = {
    name: "AXITEE",
};

const newage = oldperson.age;
newage.call(newperson, 29);
```

**第一个参数不需要和原对象的名字一样，但这个对象必须拥有原方法内部用到的属性**

-   `.apply()` :**和 call 一样括号内第一个是调用 this 的对象，但是 apply 的参数部分只接受数组形式的值**

```javascript
const oldperson = {
    name: "KUMA",
    age(birthyear, year) {
        console.log(`${this.name}'s age is ${year - birthyear}`);
    },
};

const ageFn = oldperson.age;
ageFn.apply(oldperson, [1995, 2025]);
```

-   `.bind()` 和 .call() 一样，括号内第一个参数是调用时 this 的对象，但和 .call() / .apply() 不同的是：.bind() 不会立即执行函数，而是返回一个新的函数，这个函数已经绑定好了 this 和你传入的参数，可以稍后再执行。

```javascript
const oldperson = {
    name: "小咪",
    age(year, birthday) {
        console.log(`${this.name}'s age is ${year - birthday}`);
    },
};

const newperson = {
    name: "小汪",
};

const useFn = oldperson.age;
const newFn = useFn.blind(newperson);

newFn(2025, 1995); //输出
```

-   在使用`.bind()`做部分应用时，如果原函数内部不使用 this，可以将 this 参数设为 null，只利用 bind 的“预填参数”功能。

```javascript
const addTax = (rate, value) => value + value * rate;

const addJP = addTax.bind(null, 0.1);

console.log(addJP(200)); //输出220
```

### 立即调用的函数(IIFE)

在 Js 中，有时候需要一些只执行一次的函数,可以用括号将该函数包括起来再调用它，例如：

```javascript
(function () {
    console.log("once!!");
})();
```

该函数只会是一个表达式，不能被反复调用.

### 闭包
