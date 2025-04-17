## 💻 编程挑战 #1：投票应用（Poll App）

我们要创建一个简单的投票系统，投票内容、选项和结果都保存在一个 `poll` 对象中。

---

### ✅ 功能需求

#### 1. 创建 `registerNewAnswer()` 方法

-   在 `poll` 对象中创建一个方法 `registerNewAnswer`
-   方法中：

    -   弹出一个 prompt 窗口，提示用户输入投票选项编号，格式如下：

        ```text
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
        ```

    -   根据输入更新 `answers` 数组中对应索引的值 +1
    -   需要验证输入是否为有效数字，且是否在选项范围内

#### 2. 点击按钮时调用投票函数

-   当用户点击“Answer poll”按钮时，调用 `registerNewAnswer()`

#### 3. 创建 `displayResults(type)` 方法

-   显示投票结果的方法，接收一个参数 `type`
-   如果 `type === 'array'`，直接 `console.log(this.answers)`
-   如果 `type === 'string'`，输出：`Poll results are 13, 2, 4, 1`
-   默认参数为 `'array'`
-   每次 `registerNewAnswer()` 调用结束后都调用一次 `displayResults()`

---

### 💡 提示

-   你可以使用数组方法、模板字符串、类型判断等知识点
-   可以尝试用 `.call()` 来手动设置 `this`

---

### 🎁 BONUS

-   用 `displayResults()` 显示以下两个数组的结果：
    ```js
    [5, 2, 3][(1, 5, 3, 9, 6, 1)];
    ```
-   要求展示方式包括 `'array'` 和 `'string'`
-   注意：这些数组 **不属于 poll 对象内部**
-   想一想此时 `this` 该如何指定？（使用 `.call()`）

---

### 🏁 目标示例结构（starter）

```js
const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0),

    registerNewAnswer() {
        // TODO
    },

    displayResults(type = "array") {
        // TODO
    },
};
```

---

💪 GOOD LUCK!
