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

### 📒 运算符：

**什么是运算符**？

-   运算符是用于执行数学或逻辑运算的符号。它们可以将两个值结合起来，生成一个新的值。

**算术运算符**:

-   `+` 加法
-   `-` 减法
-   `*` 乘法
-   `/` 除法
-   `%` 取模
-   `**` 幂运算
-   `+=` 自增运算符（在变量前加）
-   `-=` 自减运算符（在变量前加）
-   `++` 前缀递增运算符（先自增，再使用）
-   `--` 后缀递增运算符（先使用，后自增）

**比较运算符**:

-   `==` 等于（非严格）
-   `===` 等于（严格）
-   `!=` 不等于（非严格）
-   `!==` 不等于（严格）
-   `<` 小于
-   `>` 大于
-   `<=` 小于或等于
-   `>=` 大于或等于

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
