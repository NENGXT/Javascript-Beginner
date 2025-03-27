/*
1.声明名为 country 、 continent 和 population 的变量，并根据您自己国家的值（以百万为单位的人口）赋值。
将它们的值记录到控制台。
*/
// const country = "CHINA";
// const continent = "Asia";
// let population = 1400;
/*
声明一个名为 isIsland 的变量，并根据你的国家设置其值。该变量应保存一个布尔值。
然后，还要声明一个变量 language ，但暂时不要给它赋值。
将 isIsland 、 population 、 country 和 language 的类型记录到控制台。
*/

/*
考虑哪些变量应该是 const 变量（哪些值永远不会改变，哪些可能会改变？）。然后，将这些变量更改为 const 。
*/
// const isIsland = true;
// const language = "Chinese";
// console.log(isIsland, population, country, language);

/*
如果你的国家一分为二，每一半将包含一半的人口，那么每一半将有多少人？

将你国家的人口增加 1，并将结果记录到控制台。

芬兰的人口为 600 万。你的国家的人口是否超过芬兰？

一个国家的平均人口是 3300 万人。你的国家的人口少于平均国家吗？

根据你创建的变量，创建一个新变量 description使用模版字符串 ，其包含格式为： 'Portugal is in Europe, and its 11 million people speak portuguese' 的字符串。
*/
// let population2 = population / 2;
// let addPopulation = population + 1;
// let finLandPopulation = 6;
// let averageCountryPopulation = 33;
// let description = `${country} is in ${continent},and its ${population} million people speck ${language}`;
// console.log(description);

/*
如果你所在国家的人口超过 3300 万，请在控制台记录一个字符串，如下所示： "Portugal's population is 22 million below average" （22 是 33 减去该国人口的平均值）。
检查结果后，暂时将人口更改为 13，然后更改为 130。查看不同的结果，并将人口设置回原始值。
*/

// if (population > averageCountryPopulation) {
//     console.log(
//         `${country}'s population is ${
//             averageCountryPopulation - population
//         } million below average`
//     );
// }

/*
根据提示输入声明一个变量 numNeighbours ，像这样:

prompt('How many neighbour countries does your contry have?');

如果只有 1 个邻居，向控制台记录 '只有 1 个边界!'（暂时使用宽松相等 == ）。

使用一个 else-if 块在 numNeighbours 大于 1 的情况下记录 '超过 1 个边界'。

使用一个 else 块来记录 '无边框'（当 numNeighbours 为 0 或任何其他值时，将执行此块）。

使用不同的 numNeighbours 值测试代码，包括 1 和 0。

将 == 更改为 === ，然后再次测试代码，使用相同的 numNeighbours 值。注意当恰好有 1 个边框时会发生什么！为什么会这样？
最后，将 numNeighbours 转换为数字，然后观察当你输入 1 时会发生什么。
*/

// const numNeighbours = Number(
//     prompt("How many neighbour countries does your country have?")
// );

// if (numNeighbours === 1) {
//     alert("Only one border!");
// } else if (numNeighbours > 1) {
//     alert("More than 1 border");
// } else {
//     alert("No borders");
// }
