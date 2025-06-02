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

/*
Write a function called describeCountry which takes three parameters: country, population and capitalCity. Based on this input, the function returns a string with this format: 'Finland has 6 million people and its capital city is Helsinki'.
编写一个名为 describeCountry 的函数，该函数接受三个参数： country 、 population 和 capitalCity 。根据这些输入，函数返回一个格式为 'Finland has 6 million people and its capital city is Helsinki' 的字符串。

Call this function 3 times, with input data for 3 different countries. Store the returned values in 3 different variables, and log them to the console.
调用此函数 3 次，使用 3 个不同国家的输入数据。将返回的值存储在 3 个不同的变量中，并将它们记录到控制台。
*/

// const describeCountry = function (country, population, capitalCity) {
//     return `${country} has ${population} million people and its capital city is ${capitalCity}`;
// };

// const countries = {
//     China: describeCountry("China", 1400, "Beijing"),
//     Japan: describeCountry("Japan", 120, "Tokyo"),
//     Korea: describeCountry("Korea", 50, "Seoul"),
// };

// let { China, Japan, Korea } = countries;
// console.log(China);
// console.log(Japan);
// console.log(Korea);

/*

The world population is 7900 million people. Create a function declaration called percentageOfWorld1 which receives a population value, and returns the percentage of the world population that the given population represents. For example, China has 1441 million people, so it's about 18.2% of the world population.
世界人口为 79 亿人。创建一个名为 percentageOfWorld1 的函数声明，该函数接收一个 population 值，并返回该人口占世界人口的百分比。例如，中国有 14.41 亿人，因此约占世界人口的 18.2%。

To calculate the percentage, divide the given population value by 7900 and then multiply by 100.
要计算百分比，将给定的 population 值除以 7900，然后乘以 100。

Call percentageOfWorld1 for 3 populations of countries of your choice, store the results into variables, and log them to the console.
调用 percentageOfWorld1 ，针对您选择的 3 个人口国家，存储结果到变量中，并将其记录到控制台。

Create a function expression which does the exact same thing, called percentageOfWolrd2, and also call it with 3 country populations (can be the same populations).
创建一个函数表达式，执行完全相同的操作，命名为 percentageOfWolrd2 ，并使用 3 个国家的人口（可以是相同的人口）调用它。

Recreate the last assignment, but this time create an arrow function called percentageOfWorld3.
重新创建上一个作业，但这次创建一个名为 percentageOfWorld3 的箭头函数。
*/

// const [china, japan, us] = [1441, 126, 332];

// const percentageOfWorld1 = function (...population) {
//     let average = 0;
//     for (let i = 0; i < population.length; i++) {
//         average = (population[i] / 7900) * 100;
//         console.log(average);
//     }
// };

// function percentageOfWolrd2(...population) {
//     let average = 0;
//     for (let i = 0; i < population.length; i++) {
//         average = (population[i] / 7900) * 100;
//         console.log(average);
//     }
// }
// const percentageOfWolrd3 = (...population) => {
//     let average = 0;
//     for (let i = 0; i < population.length; i++) {
//         average = (population[i] / 7900) * 100;
//         console.log(average);
//     }
// };

// percentageOfWorld1(china, japan, us);
// percentageOfWolrd2(china, japan, us);
// percentageOfWolrd3(china, japan, us);

/*----------分割线----------*/

/*
Create a function called describePopulation. Use the function type you like the most. This function takes in two arguments: country and population, and returns a strings like this: 'China has 1441 million people, which is about 18.2% of the world'.
创建一个名为 describePopulation 的函数。使用你最喜欢的函数类型。这个函数接受两个参数： country 和 population ，并返回一个字符串，如下所示： 'China has 1441 million people, which is about 18.2% of the world' 。

To calculate the percentage, describePopulation calls the percentageOfWorld1 you created earlier.
为了计算百分比， describePopulation 调用你之前创建的 percentageOfWorld1 。

Call describePopulation with data for 3 countries of your choice.
使用你选择的 3 个国家的数据调用 describePopulation 。
*/

// const percentageOfWorld1 = function (population1) {
//     let average = (population1 / 7900) * 100;
//     return average;
// };

// const describePopulation = (country, population) => {
//     return `${country} 有 ${population} 百万人口，占世界总人口的约 ${percentageOfWorld1(
//         population
//     )}%`;
// };

// console.log(describePopulation("中国", 1400));

/*----------分割线----------*/
/*
Create an array containing 4 population values of 4 countries of your choice. You may use the values you have been using previously. Store this array into a variable called populations.
创建一个包含您选择的 4 个国家的 4 个人口值的数组。您可以使用之前使用的值。将此数组存储到一个名为 populations 的变量中。

Log to the console whether the array has 4 elements or not (true or false).
在控制台记录数组是否有 4 个元素（ true 或 false ）。

Create an array called percentages containing the percentages of the world population for these 4 population values. Use the function percentageOfWorld1 that you created earlier to compute the 4 percentage values.
创建一个名为 percentages 的数组，包含这 4 个人口值的世界人口百分比。使用您之前创建的函数 percentageOfWorld1 来计算这 4 个百分比值。
*/

// const percentageOfWorld1 = function (...population1) {
//     let arr = [];
//     for (let i = 0; i < population1.length; i++) {
//         arr.push((population1[i] / 7900) * 100);

//         // console.log(average);
//     }
//     return arr;
// };

// const populations = [1441, 126, 332, 500];
// const percentages = percentageOfWorld1(...populations);
// console.log(percentages);

/*----------分割线----------*/
/*
Create an array containing all the neighbouring countries of a country of your choice. Choose a country which has at least 2 or 3 neighbours. Store the array into a variable called neighbours.
创建一个包含您选择的国家所有邻国的数组。选择一个至少有 2 或 3 个邻国的国家。将数组存储到一个名为 neighbours 的变量中。

At some point, a new country called 'Utopia' is created in the neighbourhood of your selected country, so add it to the end of the neighbours array.
在某个时刻，一个名为 '乌托邦' 的新国家在您选择的国家附近创建，因此将其添加到 neighbours 数组的末尾。

Unfortunately, after some time the new country is dissolved, so remove it from the end of the array.
不幸的是，过了一段时间，新国家被解散，因此将其从数组的末尾移除。

If the neighbours array does not include the country 'Germany', log to the console: 'Probably not a central european country :D'.
如果 neighbours 数组不包含国家 '德国'，请在控制台中记录： 'Probably not a central european country :D' 。

Change the name of one of your neighbouring countries. To do that, find the index of the country in the neighbours array, and then use that index to change the array at that index position. For example, you can search for 'Sweden' in the array, and then replace it with 'Republic of Sweden'.
更改您邻国之一的名称。为此，找到该国家在 neighbours 数组中的索引，然后使用该索引在该索引位置更改数组。例如，您可以在数组中搜索 '瑞典'，然后将其替换为 '瑞典共和国'。
*/

// const neighbours = ["North Korea", "Mongula", "Russia"];
// neighbours.push("Utopia");
// neighbours.pop();
// console.log(neighbours);
// const index = neighbours.indexOf("Germany");
// if (index !== -1) {
//     neighbours[index] = "Germany";
// } else {
//     console.log("Probably not a central european country :D");
// }

// if (neighbours[neighbours.indexOf("North Korea")]) {
//     neighbours[neighbours.indexOf("North Korea")] = "North Korea Republic";
//     console.log(neighbours);
// } else {
//     console.log("Probably not a central european country :D");
// }

/*
Create an object called myCountry for a country of your choice, containing properties country, capital, language, population and neighbours (an array like we used in previous assignments).
为您选择的国家创建一个名为 myCountry 的对象，包含属性 country 、 capital 、 language 、 population 和 neighbours （一个像我们在之前的作业中使用的数组）。

Using the object from the previous assignment, log a string like this to the console: 'Finland has 6 million finnish-speaking people, 3 neighbouring countries and a capital called Helsinki'.
使用上一个作业中的对象，将字符串记录到控制台，如：'芬兰有 600 万讲芬兰语的人，3 个邻国和一个名为赫尔辛基的首都'。

Increase the country's population by two million using dot notation, and then decrease it by two million using bracket notation.
使用点表示法将国家的人口增加两百万，然后使用括号表示法减少两百万。
*/
// const myCountry = {
//     country: "China",
//     capital: "Beijing",
//     language: "Chinese",
//     population: 1400000000,
//     neighbours: ["Japan", "Korea", "India"],
// };

// console.log(
//     `${myCountry.country} has ${myCountry.population} people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
// );

// myCountry.population += 20000000;
// console.log(myCountry.population); // 输出结果:1420000000
// myCountry["population"] -= 20000000;
// console.log(myCountry.population); // 输出结果:1400000000

/*
Add a method called describe to the myCountry object. This method will log a string to the console, similar to the string logged in the previous assignment, but this time using the 'this' keyword.
向 myCountry 对象添加一个名为 describe 的方法。该方法将向控制台记录一个字符串，类似于上一个作业中记录的字符串，但这次使用 'this' 关键字。

Call the describe method.  调用 describe 方法。

Add a method called checkIsland to the myCountry object. This method will set a new property on the object, called isIsland. isIsland will be true if there are no neighbouring countries, and false if there are. Use the ternary operator to set the property.
向 myCountry 对象添加一个名为 checkIsland 的方法。该方法将在对象上设置一个新属性，名为 isIsland 。如果没有邻国， isIsland 将是 true ，如果有邻国，则是 false 。使用三元运算符来设置该属性。
*/

// const myCountry = {
//     country: "China",
//     capital: "Beijing",
//     language: "Chinese",
//     population: 1400000000,
//     neighbours: ["Japan", "Korea", "India"],
//     describe: function () {
//         console.log(
//             `The country is ${this.country}, the capital is ${this.capital}, the language is ${this.language}, and the population is ${this.population}.`
//         );
//     },
//     checkIsland: function () {
//         const isIsland =
//             this.neighbours == []
//                 ? console.log(`This is an island.`)
//                 : console.log(`This is not an island.`);
//     },
// };

/*----------分割线----------*/
/*
There are elections in your country! in a small town, there are only 50 voters. Use a for loop to simulate the 50 people voting, by logging a string like this to the console (for numbers 1 to 50): 'Voter number 1 is currently voting'.
你们国家有选举！在一个小镇上，只有 50 名选民。使用 for 循环来模拟 50 个人投票，通过在控制台记录一个像这样字符串（对于数字 1 到 50）： 'Voter number 1 is currently voting' 。
*/
// let voters = 50;
// for (let i = 0; i < voters; i++) {
//     console.log(`Voter number ${i + 1} is currently voting`);
// }

/*
Let's bring back the populations array from a previous assignment.
让我们从之前的作业中带回 populations 数组。

Use a for loop to compute an array called percentages2 containing the percentages of the world population for the 4 population values. Use the function percentageWOrld1 that you created earlier.
使用 for 循环计算一个名为 percentages2 的数组，该数组包含 4 个人口值的世界人口百分比。使用你之前创建的函数 percentageWOrld1 。

Confirm that percentages2 contains exactly the same values as the percentages array that we created manually in the previous assignment, and reflect on how much better this solution is.
确认 percentages2 包含与我们在之前的作业中手动创建的 percentages 数组完全相同的值，并反思这个解决方案有多么更好。
*/

// populations = [1441, 3765, 982, 5378];

// const percentageWOrld1 = (...inputAgument) => {
//     let sum = [];
//     for (let i = 0; i < inputAgument.length; i++) {
//         sum.push((inputAgument[i] / 7900) * 100);
//     }
//     return sum;
// };
// console.log(percentageWOrld1(...populations));

/*----------分割线----------*/
/*
Store this array of arrays into a variable called listOfNeighbours:
将这个数组的数组存储到一个名为 listOfNeighbours 的变量中：

[['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];
Log only the neighbouring countries to the console, one by one, not the entire arrays. Log a string like 'Neighbour: Canada' for each country.
仅将相邻国家逐个记录到控制台，而不是整个数组。为每个国家记录一个像 'Neighbour: Canada' 的字符串。

You will need a loop inside a loop for this. This is actually a bit tricky, so don't worry if it's too difficult for you! But you can still try to figure this out anyway 😉
你需要在循环中再嵌套一个循环。其实这有点棘手，所以如果你觉得太难也不要担心！但你仍然可以尝试解决这个问题😉
*/

// const listOfNeighbours = [
//     ["Canada", "Mexico"],
//     ["Spain"],
//     ["Norway", "Sweden", "Russia"],
// ];

// for (let i = 0; i < listOfNeighbours.length; i++) {
//     // console.log(listOfNeighbours[i]);
//     for (let j = 0; j < listOfNeighbours[i].length; j++) {
//         console.log(listOfNeighbours[i][j]);
//     }
// }

// const voters = 10;
// let i = 0;
// while (i < voters) {
//     i++;
//     console.log("投票者：", i);
// }
// while (i < listOfNeighbours.length) {
//     let j = 0;
//     while (j < listOfNeighbours[i].length) {
//         console.log("邻国：", listOfNeighbours[i][j]);
//         j++;
//     }
//     i++;
// }

/*----------分割线----------*/

// const books = [
//     {
//         title: "Algorithms",
//         author: ["Robert Sedgewick", "Kevin Wayne"],
//         publisher: "Addison-Wesley Professional",
//         publicationDate: "2011-03-24",
//         edition: 4,
//         keywords: [
//             "computer science",
//             "programming",
//             "algorithms",
//             "data structures",
//             "java",
//             "math",
//             "software",
//             "engineering",
//         ],
//         pages: 976,
//         format: "hardcover",
//         ISBN: "9780321573513",
//         language: "English",
//         programmingLanguage: "Java",
//         onlineContent: true,
//         thirdParty: {
//             goodreads: {
//                 rating: 4.41,
//                 ratingsCount: 1733,
//                 reviewsCount: 63,
//                 fiveStarRatingCount: 976,
//                 oneStarRatingCount: 13,
//             },
//         },
//         highlighted: true,
//     },
//     {
//         title: "Structure and Interpretation of Computer Programs",
//         author: [
//             "Harold Abelson",
//             "Gerald Jay Sussman",
//             "Julie Sussman (Contributor)",
//         ],
//         publisher: "The MIT Press",
//         publicationDate: "2022-04-12",
//         edition: 2,
//         keywords: [
//             "computer science",
//             "programming",
//             "javascript",
//             "software",
//             "engineering",
//         ],
//         pages: 640,
//         format: "paperback",
//         ISBN: "9780262543231",
//         language: "English",
//         programmingLanguage: "JavaScript",
//         onlineContent: false,
//         thirdParty: {
//             goodreads: {
//                 rating: 4.36,
//                 ratingsCount: 14,
//                 reviewsCount: 3,
//                 fiveStarRatingCount: 8,
//                 oneStarRatingCount: 0,
//             },
//         },
//         highlighted: true,
//     },
//     {
//         title: "Computer Systems: A Programmer's Perspective",
//         author: ["Randal E. Bryant", "David Richard O'Hallaron"],
//         publisher: "Prentice Hall",
//         publicationDate: "2002-01-01",
//         edition: 1,
//         keywords: [
//             "computer science",
//             "computer systems",
//             "programming",
//             "software",
//             "C",
//             "engineering",
//         ],
//         pages: 978,
//         format: "hardcover",
//         ISBN: "9780130340740",
//         language: "English",
//         programmingLanguage: "C",
//         onlineContent: false,
//         thirdParty: {
//             goodreads: {
//                 rating: 4.44,
//                 ratingsCount: 1010,
//                 reviewsCount: 57,
//                 fiveStarRatingCount: 638,
//                 oneStarRatingCount: 16,
//             },
//         },
//         highlighted: true,
//     },
//     {
//         title: "Operating System Concepts",
//         author: ["Abraham Silberschatz", "Peter B. Galvin", "Greg Gagne"],
//         publisher: "John Wiley & Sons",
//         publicationDate: "2004-12-14",
//         edition: 10,
//         keywords: [
//             "computer science",
//             "operating systems",
//             "programming",
//             "software",
//             "C",
//             "Java",
//             "engineering",
//         ],
//         pages: 921,
//         format: "hardcover",
//         ISBN: "9780471694663",
//         language: "English",
//         programmingLanguage: "C, Java",
//         onlineContent: false,
//         thirdParty: {
//             goodreads: {
//                 rating: 3.9,
//                 ratingsCount: 2131,
//                 reviewsCount: 114,
//                 fiveStarRatingCount: 728,
//                 oneStarRatingCount: 65,
//             },
//         },
//     },
//     {
//         title: "Engineering Mathematics",
//         author: ["K.A. Stroud", "Dexter J. Booth"],
//         publisher: "Palgrave",
//         publicationDate: "2007-01-01",
//         edition: 14,
//         keywords: ["mathematics", "engineering"],
//         pages: 1288,
//         format: "paperback",
//         ISBN: "9781403942463",
//         language: "English",
//         programmingLanguage: null,
//         onlineContent: true,
//         thirdParty: {
//             goodreads: {
//                 rating: 4.35,
//                 ratingsCount: 370,
//                 reviewsCount: 18,
//                 fiveStarRatingCount: 211,
//                 oneStarRatingCount: 6,
//             },
//         },
//         highlighted: true,
//     },
//     {
//         title: "The Personal MBA: Master the Art of Business",
//         author: "Josh Kaufman",
//         publisher: "Portfolio",
//         publicationDate: "2010-12-30",
//         keywords: ["business"],
//         pages: 416,
//         format: "hardcover",
//         ISBN: "9781591843528",
//         language: "English",
//         thirdParty: {
//             goodreads: {
//                 rating: 4.11,
//                 ratingsCount: 40119,
//                 reviewsCount: 1351,
//                 fiveStarRatingCount: 18033,
//                 oneStarRatingCount: 1090,
//             },
//         },
//     },
//     {
//         title: "Crafting Interpreters",
//         author: "Robert Nystrom",
//         publisher: "Genever Benning",
//         publicationDate: "2021-07-28",
//         keywords: [
//             "computer science",
//             "compilers",
//             "engineering",
//             "interpreters",
//             "software",
//             "engineering",
//         ],
//         pages: 865,
//         format: "paperback",
//         ISBN: "9780990582939",
//         language: "English",
//         thirdParty: {
//             goodreads: {
//                 rating: 4.7,
//                 ratingsCount: 253,
//                 reviewsCount: 23,
//                 fiveStarRatingCount: 193,
//                 oneStarRatingCount: 0,
//             },
//         },
//     },
//     {
//         title: "Deep Work: Rules for Focused Success in a Distracted World",
//         author: "Cal Newport",
//         publisher: "Grand Central Publishing",
//         publicationDate: "2016-01-05",
//         edition: 1,
//         keywords: ["work", "focus", "personal development", "business"],
//         pages: 296,
//         format: "hardcover",
//         ISBN: "9781455586691",
//         language: "English",
//         thirdParty: {
//             goodreads: {
//                 rating: 4.19,
//                 ratingsCount: 144584,
//                 reviewsCount: 11598,
//                 fiveStarRatingCount: 63405,
//                 oneStarRatingCount: 1808,
//             },
//         },
//         highlighted: true,
//     },
// ];

/*
1.1
Destructure the books array into two variables called firstBook and secondBook.
将 books 数组解构为两个变量，分别叫做 firstBook 和 secondBook 。
1.2
Destructure the books array into a variable called thirdBook. You must skip the first two books.
将 books 数组解构为一个变量，叫做 thirdBook 。你必须跳过前两本书。
1.3
Below is the nested ratings array that contains two other arrays. Destructure the nested ratings arrays into two variables called rating and ratingsCount. In the result of your destructuring, the ratings variable should store a number 4.19, and the ratingsCount variable should store a number 144584.
下面是包含两个其他数组的嵌套 ratings 数组。将嵌套的 ratings 数组解构为两个变量，分别叫做 rating 和 ratingsCount 。在你的解构结果中， ratings 变量应该存储数字 4.19， ratingsCount 变量应该存储数字 144584。
1.4
Below is the ratingStars array. Destructure it into three variables called fiveStarRatings, oneStarRatings and threeStarRatings. Assign the threeStarRatings variable with a default value of 0.
以下是 ratingStars 数组。将其解构为三个变量，分别称为 fiveStarRatings 、 oneStarRatings 和 threeStarRatings 。将 threeStarRatings 变量赋予默认值 0。
*/

// let [firstBook, secondBook] = books;
// let [, , thirdBook] = books;
// const ratings = [
//     ["rating", 4.19],
//     ["ratingsCount", 144584],
// ];
// let [[, rating], [, ratingsCount]] = ratings;
// const ratingStars = [63405, 1808];
// let [fiveStarRatings, oneStarRatings, threeStarRatings = 0] = ratingStars;

/*
# JavaScript 练习题

下面的练习题基于你学习笔记中的内容，涵盖了：

- 数据结构  
- 现代运算符  
- 字符串、数组和对象解构  
- 扩展运算符、剩余参数  
- 逻辑运算符、for-of 循环  
- 对象字面量、集合（Sets）等知识点  

请尝试完成以下 10 道题，巩固你的学习内容。

---
*/

/*
假设你在开发一家在线商城的订单管理系统。
每个订单都包含若干个产品，每个产品用一个对象表示，例如：
{ id: 101, name: "手机", price: 2999 }
*/
// const order1 = [
//     { id: 101, name: "手机", price: 2999 },
//     { id: 102, name: "耳机", price: 399 },
// ];

// const order2 = [
//     { id: 103, name: "笔记本", price: 7999 },
//     { id: 104, name: "鼠标", price: 199 },
// ];

// const mergedOrder = function (...orders) {
//     const merged = [...orders];
//     return merged;
// };
// const result = mergedOrder(...order1, ...order2);
// console.log(result);
// 期望 mergedOrder 为：
// [
//   { id: 101, name: "手机", price: 2999 },
//   { id: 102, name: "耳机", price: 399 },
//   { id: 103, name: "笔记本", price: 7999 },
//   { id: 104, name: "鼠标", price: 199 }
// ]

// const updatedOrder = function (order, newProduct) {
//     const newOrder = [...order, newProduct];
//     console.log(newOrder);
// };

// updatedOrder(result, { id: 105, name: "键盘", price: 599 });
// 期望 updatedOrder 为 mergedOrder 加上新产品键盘

/*
	1.	合并多个播放列表
编写一个函数 mergePlaylists(...playlists)，使用剩余参数语法接收任意数量的播放列表数组作为参数。
	•	要求：使用扩展运算符将所有播放列表合并为一个新的数组，并返回该数组。
	•	提示：可以利用 [].concat(...playlists) 或者 [...playlists.flat()] 来实现合并。
	2.	添加新歌曲到播放列表
编写一个函数 addSong(playlist, newSong)，该函数接收一个播放列表数组和一个新歌曲对象。
	•	要求：使用扩展运算符，将新歌曲添加到播放列表数组的末尾，返回一个新的播放列表数组（不要直接修改原数组）。
    
*/
// const playlist1 = [
//     { title: "Song A", artist: "Artist X" },
//     { title: "Song B", artist: "Artist Y" },
// ];

// const playlist2 = [
//     { title: "Song C", artist: "Artist Z" },
//     { title: "Song D", artist: "Artist W" },
// ];

// const mergePlaylists = function (...playlists) {
//     const merged = [].concat(...playlists);
//     return merged;
// };

// const oldSong = mergePlaylists(playlist1, playlist2);
// console.log(oldSong);

// const addSong = function (playList, newSong) {
//     const newPlaylist = [...playList, newSong];
//     return newPlaylist;
// };

// console.log(addSong(oldSong, { title: "New Song", artist: "Artist Q" }));

/*
你正在开发一个图书馆管理系统，图书馆的库存信息以一个对象的形式存储，
其中每个键（key）是书籍的名称，而对应的值（value）是该书的库存数量。
请完成以下任务：
	1.	获取所有书籍名称
使用 Object.keys() 方法获取 libraryInventory 对象中所有的书名，并打印出这些书名。
	2.	统计总库存
使用 Object.values() 方法获取所有库存数量，然后计算出图书馆所有书籍的总库存数量，并打印出来。
	3.	遍历库存详情
使用 Object.entries() 方法遍历整个 libraryInventory 对象，打印出每本书的名称和库存数量。
格式要求为：《书名》库存：数量
*/

// const libraryInventory = {
//     "JavaScript 入门": 3,
//     "深入理解 Node.js": 5,
//     "CSS 权威指南": 2,
//     "HTML5 高级编程": 4,
// };

// const bookName = Object.keys(libraryInventory);
// let bookCount = 0;
// for (let i of Object.values(libraryInventory)) {
//     bookCount += i;
// }
// console.log(bookCount);
// const bookentries = Object.entries(libraryInventory);
// for (let [name, count] of bookentries) {
//     console.log(`${name} 库存： ${count}`);
// }

/*----------分割线----------*/
/*
当然可以！你刚刚完成的 camelCase 转换已经很强了，那我现在给你出一个真实项目中常见 + 字符串处理能力提升版的挑战题目 ✅

⸻

✨ 编程练习：格式化接口字段 → 转成人类可读标题

⸻

💡 题目背景（真实开发场景）：

你从后端拿到了一个 JSON 数据对象，它的字段是用下划线命名（snake_case）的，比如：

const apiData = {
  user_id: 8127,
  full_name: 'Kuma Tsu',
  account_created_at: '2024-03-01T12:00:00Z',
  last_login_ip: '192.168.1.1',
};

你要把这些字段名转换成「表格列标题」，也就是：

User Id
Full Name
Account Created At
Last Login Ip
⸻

✅ 任务目标：

请你编写一个函数 formatFieldNames(obj)，它接收一个对象，并返回一个新数组，数组中是格式化后的字段名（首字母大写，空格分隔）

⸻

📥 输入：

{
  user_id: 8127,
  full_name: 'Kuma Tsu',
  account_created_at: '2024-03-01T12:00:00Z',
  last_login_ip: '192.168.1.1',
}
⸻

📤 输出：

[
  'User Id',
  'Full Name',
  'Account Created At',
  'Last Login Ip'
]
⸻

💡 提示：
	1.	你可以用 Object.keys(obj) 获取所有字段名
	2.	每个字段可以用 .split('_') 拆成词组
	3.	每个词再首字母大写，最后用空格拼接 .join(' ')
	4.	封装成函数后，返回这个数组
⸻
*/

// const apiData = {
//     user_id: 8127,
//     full_name: "Kuma Tsu",
//     account_created_at: "2024-03-01T12:00:00Z",
//     last_login_ip: "192.168.1.1",
//     my_data_is_very_long:
//         "This is a very long piece of data that needs to be stored.",
// };

// const letterConvert = function (data) {
//     const keyList = Object.keys(data);
//     const output = [];
//     for (let key of keyList) {
//         const part = key.split("_");
//         const newPart = [];
//         for (let word of part) {
//             const convertWord = word[0].toUpperCase() + word.slice(1);
//             newPart.push(convertWord);
//         }
//         output.push(newPart.join(" "));
//     }

//     console.log(output);
// };

// letterConvert(apiData);

/*----------分割线----------*/
/*

🎯 场景题：多语言问候机（考点：函数作为返回值 + this）

你正在为一个网页开发一个“多语言欢迎模块”。有一个用户信息对象，你需要根据用户的语言设置，自动返回一个不同语言的欢迎语。

👉 题目要求：
	1.	创建一个 createGreeter(language) 函数，接收语言代码（如 'en', 'jp', 'zh'）
	2.	返回一个新的函数 greeter(name)，输出不同语言的欢迎语
	3.	欢迎语要求如下：
	•	'en' → Hello, [name]!
	•	'zh' → 你好，[name]！
	•	'jp' → こんにちは、[name]！
	•	其他语言 → Hi, [name]!
	4.	最后用 createGreeter('jp')('Kuma') 测试，输出结果为？

⸻

*/

// const createGreeter = function (language) {
//     return function greeter(name) {
//         const languageList = {
//             jp: `こんにちは、${name}！`,
//             en: `Hello, ${name}!`,
//             zh: `你好，${name}！`,
//         };
//         console.log(languageList[language] || `巴巴博一, ${name}!`);
//     };
// };

// createGreeter("jp")("Kuma");

/*Json抓取练习*/

const dataCatch = async function () {
    try {
        const response = await fetch("singers.json");
        const singerList = await response.json();
        const singerListFilter = singerList
            .map((item) => {
                if (item.fanCount >= 10000 && item.fanCount <= 60000) {
                    return { name: item.name, fan: item.fanCount };
                } else {
                    return null;
                }
            })
            .filter((item) => item);
        console.log(singerListFilter);
    } catch (err) {
        console.error(err);
    }
};

dataCatch();
