// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*NOTE
示例：
给定数组 [17, 21, 23]，程序应输出字符串：

"... 17℃ in 1 days ... 21℃ in 2 days ... 23℃ in 3 days ..."

任务：
创建一个名为 printForecast 的函数，该函数接收一个数组 arr 作为参数，并按照上述格式将温度预测结果输出到控制台。

提示：
使用问题解决框架：理解问题并将其拆分成子问题！

测试数据 1： [17, 21, 23]
测试数据 2： [12, 5, -5, 0, 4]

问题解决框架：
1.温度数组需要for循环遍历，然后放到${}中。
2.天数需要for循环遍历，然后放到${}中。
3.创建一个...的字符串，使用模板字符串，...的数量是.length +1。
*/

// const printForecast = function (arr) {
//   let result = "";
//   let shenLuehao = "...";
//   for (let i = 0; i < arr.length; i++) {
//     if (i !== arr.length - 1) {
//       result += `${shenLuehao} ${arr[i]}C in ${i + 1} days `;
//     } else {
//       result += `${shenLuehao} ${arr[i]}C in ${i + 1} days ${shenLuehao}`;
//     }
//   }
//   return result;
// };
// console.log(printForecast([17, 21, 23]));

/*NOTE
假设你正在为自由职业者构建一个时间跟踪应用程序。在开发过程中，你需要一个函数，该函数接收一个某周的每日工作时长数组，并返回以下信息：
	1.	总共工作了多少小时
	2.	平均每天工作多少小时
	3.	工作时间最长的一天
	4.	实际工作的天数（不计算 0 小时的天数）
	5.	这一周是否算作全职工作（总工作时间是否达到或超过 35 小时）

测试数据： [7.5, 8, 6.5, 0, 8.5, 4, 0]

step1:总工时 = 数组的和
step2:平均工时 = 总工时/数组长度
step3:用if条件判断工作时间最长的一天，返回该天对应的索引
step4:实际工作的天数 = 数组中不为0的元素个数
step5:if(总工时 >= 35) return true; else return false;
*/

// const data = [7.5, 8, 6.5, 0, 8.5, 4, 0];

// const calcWorktime = function (data) {
//   let totalTime = 0;
//   let maxTime = 0;
//   let trueDay = 0;
//   for (let i = 0; i < data.length; i++) {
//     totalTime += data[i];

//     if (maxTime < data[i]) {
//       maxTime = data[i];
//     }
//     if (data[i] > 0) {
//       trueDay++;
//     }
//   }
//   let workData = {
//     总时长: totalTime,
//     平均工时: Math.round(totalTime / data.length),
//     最长工作时间: maxTime,
//     实际工作天数: trueDay,
//     全职工作状态: totalTime >= 35 ? `你是全职员工🏆` : `你不是全职员工😭`,
//   };
//   return workData;
// };

// console.log(calcWorktime(data));
