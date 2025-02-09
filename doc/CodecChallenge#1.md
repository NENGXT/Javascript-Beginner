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
---

