# 挑战 #1

Mark 和 John 想要比较他们的 BMI（身体质量指数），计算公式如下：

```
BMI = 质量 / (身高 * 身高)
```

（质量单位：公斤，身高单位：米）

## 你的任务

编写代码帮助他们计算 BMI：

1. 使用变量 `massMark`、`heightMark`、`massJohn` 和 `heightJohn` 存储 Mark 和 John 的质量和身高。
2. 使用 BMI 公式计算他们的 BMI，并将结果存储在变量 `BMIMark` 和 `BMIJohn` 中。
3. 在控制台打印 `BMIMark` 和 `BMIJohn` 的值。
4. **额外任务**：创建一个布尔变量 `markHigherBMI`，表示 Mark 的 BMI 是否比 John 更高，并在控制台打印它。

## 测试数据

**测试数据 1**：
- Mark：78 kg，1.69 m
- John：92 kg，1.95 m

**测试数据 2**：
- Mark：95 kg，1.88 m
- John：85 kg，1.76 m

## 重要提示

- 由于 `**` 运算符不被支持，请使用 `mass / (height * height)` 公式，而不是 `mass / (height ** 2)`。

---

# 最终代码

**测试数据 1**：
- Mark：78 kg，1.69 m
- John：92 kg，1.95 m

**测试数据 2**：
- Mark：95 kg，1.88 m
- John：85 kg，1.76 m

```js
const markData1 = [78, 1.69];
const johnData1 = [92, 1.95];

const markData2 = [95, 1.88];
const johnData2 = [85, 1.76];

const markBMI = [markData1[0] / markData1[1] ** 2, markData2[0] / markData2[1] ** 2];
const johnBMI = [johnData1[0] / johnData1[1] ** 2, johnData2[0] / johnData2[1] ** 2];

const result1 = markBMI[0] > johnBMI[0];
const result2 = markBMI[1] > johnBMI[1];

console.log(`Mark's BMI is ${markBMI}, and John's BMI is ${johnBMI})`);
console.log(`${result1 ? 'Mark is heavier' : 'John is heavier'}`);
console.log(`${result2 ? 'Mark is heavier' : 'John is heavier'}`);
```
# 挑战 #2

使用挑战 #1 的 BMI 示例和你已编写的代码，并进行改进：

## 任务

1. 在控制台打印一个友好的输出，告诉用户谁的 BMI 更高。
   - 可能的输出信息：
     - `"Mark 的 BMI 比 John 更高！"`
     - `"John 的 BMI 比 Mark 更高！"`

2. 修改输出，使用模板字符串（template literals）在消息中包含 BMI 数值。
   - 示例：
     - `"Mark 的 BMI (${BMIMark}) 比 John (${BMIJohn}) 更高！"`
     - `"John 的 BMI (${BMIJohn}) 比 Mark (${BMIMark}) 更高！"`

## 重要提示

- **不要对 BMI 数值进行四舍五入，保持原始精度。**
- **`**` 运算符不被支持，请使用 `mass / (height * height)` 公式，而不是 `mass / (height ** 2)`。**


# 挑战 #3

有两支体操队：Dolphins（海豚队）和 Koalas（考拉队）。他们比赛 3 次，平均得分最高的队伍获胜并赢得奖杯！

## 你的任务

1. 计算每支队伍的平均得分，使用下面的测试数据。

   - Dolphins 的平均得分存储在 `scoreDolphins` 变量中。
   - Koalas 的平均得分存储在 `scoreKoalas` 变量中。

2. 比较两支队伍的平均得分，确定比赛的获胜者，并在控制台打印结果：

   - 如果 Dolphins 获胜，打印：`Dolphins win the trophy`
   - 如果 Koalas 获胜，打印：`Koalas win the trophy`
   - 如果双方得分相同，打印：`Both win the trophy`

## 测试数据

- **Dolphins** 得分：96、108、89
- **Koalas** 得分：88、91、110

# 挑战 #4

Steven 需要一个 **简单的小费计算器**，以便在餐厅就餐时计算小费。在他的国家，通常有以下小费规则：  

- **如果账单金额在 50 到 300 之间（包括 50 和 300）**，小费为 **15%**。  
- **否则（低于 50 或高于 300）**，小费为 **20%**。  

---

### 📝 任务
1. **计算小费**，根据账单金额计算相应的小费，并存储在变量 `tip` 中。  
2. **不能使用 `if...else` 语句**（如果觉得难，可以先用 `if...else`，然后转换为**三元运算符**）。  
3. **打印结果**，包括：
   - 账单金额（bill）
   - 小费（tip）
   - **最终总金额**（bill + tip）

**示例输出：**  
```
The bill was 275, the tip was 41.25, and the total value 316.25.
```
（注意：**不要硬编码数值**，要使用 `bill` 和 `tip` 变量计算输出！）

---

### 📊 测试数据
请使用以下不同的账单金额进行测试：
- `275`
- `40`
- `430`

---

### 💡 提示
1. **计算 20% 的方法**：
   ```js
   20% 的计算方式 = bill * 20 / 100  = bill * 0.2
   ```
2. **判断账单是否在 50~300 之间**：
   ```js
   bill >= 50 && bill <= 300
   ```
   
现在，试着写代码吧！💻✨





