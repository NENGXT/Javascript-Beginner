// 获取需要切换类名的元素
const balloon = document.querySelector(".from-left");

// 创建媒体查询监听器
const mediaQuery = window.matchMedia("(max-width: 1200px)");

// 切换类名的函数
function handleWindowChange(e) {
    if (e.matches) {
        // 当窗口宽度 <= 1200px
        balloon.classList.remove("from-left");
    } else {
        // 当窗口宽度 > 1200px
        balloon.classList.add("from-left");
    }
}

// 添加监听器
mediaQuery.addListener(handleWindowChange);

// 初始检查
handleWindowChange(mediaQuery);

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

/*
Comment out the previous code so the prompt doesn't get in the way.
注释掉之前的代码，以免提示干扰。

Let's say Sarah is looking for a new country to live in. She wants to live in a country that speaks English, has less than 50 million people and is not an island.
假设莎拉正在寻找一个新的居住国家。她想住在一个讲英语、人口少于 5000 万且不是岛屿的国家。

Write an if statement to help Sarah figure out if your country is right for her. You will need to write a condition that accounts for all of Sarah's criteria. Take your time with this, and check part of the solution if necessary.
写一个 if 语句来帮助莎拉判断你的国家是否适合她。你需要写一个考虑到莎拉所有标准的条件。慢慢来，如果有必要，可以检查部分解决方案。

If yours is the right country, log a strings like this 'You should live in Portugal :)'. If not, log 'Portugal does not meet your criteria :('.
如果你的国家是合适的，记录一个字符串像这样 'You should live in Portugal :)' 。如果不是，记录 'Portugal does not meet your criteria :(' 。

Probably your country does not meet all the criteria. So go back and temporarily change some variables in order to make the condition true (unless you live in Canada :D).
可能你的国家不符合所有标准。所以返回去暂时更改一些变量以使条件为真（除非你住在加拿大 :D）。
*/

// const livingPlace = {
//     conunty: "China",
//     language: "Chinese",
//     population: 1400,
//     isIsland: false,
// };

// let { language, population, isIsland } = livingPlace;

// if (language === "English" && population < 50 && isIsland) {
//     console.log("You should live in China :)");
// } else {
//     console.log("China does not meet your criteria :(");
// }

/*
Use a switch statement to log the following string for the given language:
使用 switch 语句记录以下字符串以获取给定的 language :

chinese or mandarin: 'MOST number of native speakers!';
中文或普通话: 'MOST number of native speakers!' ;

spanish: '2nd place in number of native speakers';  
西班牙语: '2nd place in number of native speakers' ;

english: '3rd place';  
英语: '3rd place' ;

hindi: 'Number 4';  
印地语: 'Number 4' ;

arabic: '5th most spoken language';  
阿拉伯语: '5th most spoken language' ;

for all other simply log 'Great language too :D'.
对于所有其他，只需记录 'Great language too :D' .
*/

// let language = "Japan";
// switch (language) {
//     case "Chinese":
//         console.log("MOST number of native speakers!");
//         break;
//     case "Spanish":
//         console.log("2nd place in number of native speakers");
//         break;
//     case "English":
//         console.log("3rd place");
//         break;
//     case "Hindi":
//         console.log("Number 4");
//         break;
//     case "Arabic":
//         console.log("5th most spoken language");
//         break;
//     default:
//         console.log("Great language too :D");
//         break;
// }

/*
If your country's population is greater than 33 million, use the ternary operator to log a string like this to the console: "Portugal's population is above average". Otherwise, simply log "Portugal's population is below average". Notice how only one word change between these two sentences!
如果你所在国家的人口超过 3300 万，请使用三元运算符将类似这样的字符串记录到控制台： "Portugal's population is above average" 。否则，只需记录 "Portugal's population is below average" 。注意这两句话之间只有一个单词的变化！

After checking the result, change the population temporarily to 13 and then to 130. See the different results, and set the population back to original.
检查结果后，暂时将人口更改为 13，然后更改为 130。查看不同的结果，并将人口设置回原始值。
*/

// const livingPlace = {
//     conunty: "China",
//     language: "Chinese",
//     population: 1400,
//     isIsland: false,
// };

// let { conunty, population } = livingPlace;
// const isLargePopulation =
//     population > 33
//         ? `${conunty}'s population is above 33`
//         : `${conunty}'s population is below 33`;
// console.log(isLargePopulation);
