'use strict';
//创建一个用来接收出生年龄的函数
function calcAge(birthYear) {
  const age = new Date().getFullYear() - birthYear;

  function printAGE() {
    let output = `${firstName}.You are ${age} years old`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 2000) {
      var millennial = true;
      const str = `You are a millennial`;
      console.log(str);

      //创造同名变量在子结构中
      const firstName = 'John';
      output = `New output`;

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millennial);
    // add(2, 3);
    console.log(output);
  }

  printAGE();
  return age;
}

const firstName = 'AIXTEE';
console.log(calcAge(1995));
