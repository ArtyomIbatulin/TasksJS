// Армия функций
// function makeArmy() {
//   let shooters = [];
//   let i = 0;
//   while (i < 10) {
//     // let j = i;
//     let shooter = (function (i) {
//       // функция shooter
//       return function () {
//         console.log(i); // должна выводить порядковый номер
//       };
//     })(i);

//     shooters.push(shooter);
//     i++;
//   }

//   return shooters;
// }

// let army = makeArmy();

// army[0](); // у 0-го стрелка будет номер 10
// army[1]();
// army[2]();
// army[3]();
// army[4]();
// army[5](); // и у 5-го стрелка тоже будет номер 10
// army[6]();
// army[7]();
// army[8]();
// army[9]();
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...

// Рекурсивный проход по папкам и файлам
// const fs = require('fs');
// const path = require('path');
// let tmp = 0;

// const t = fs.readdirSync('./');
// console.log(t);

// function getAllSizes(folderName) {
//   fs.readdir(folderName, (err, files) => {
//     if (err) {
//       throw err;
//     }

//     for (let file of files) {
//       fs.stat(folderName + '/' + file, (err, stats) => {
//         if (err) {
//           throw err;
//         }

//         if (!stats.isDirectory()) {
//           tmp += stats.size;
//         } else {
//           getAllSizes(folderName + '/' + file);
//         }
//       });
//     }
//   });
// }

// getAllSizes('./');

// setTimeout(() => console.log(`Общий размер составляет ${tmp} bytes`), 1000);
// console.log(`Общий размер составляет ${tmp} bytes`);

/* 
1) Написать рекурсивную функцию вычисления чисел Фибоначчи. На вход функции подавать длину конечного массива чисел.
*/
// const arr = [];
// function fib(n) {
//   return n <= 1 ? fib.arr[n] : (fib.arr[n] = fib(n - 1) + fib(n - 2));
// }

// fib.arr = [0, 1];
// fib(8);
// console.log(fib.arr);

// function fib(limit) {
//   const result = [0, 1];

//   function recurs() {
//     if (result.length === limit) {
//       return result;
//     }

//     const newValue = result[result.length - 1] + result[result.length - 2];
//     result.push(newValue);

//     return recurs();
//   }

//   return recurs();
// }

// console.log(fib(9));

/*
2) Функция. Принимает массив строк. Должна вернуть массив результатов проверки двух строк. Если у одной строки с последующей первый и последний символы одинаковы, то true. Например ["asd", "afffd", "cc", "kk"]. Для такого массива функция должна вернуть [true, false, false]. Переписать с map 
// */
// const arrRes = [];
// let tmp, tmpArr, result;
// function res(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     tmp = arr[i] + ' ' + arr[i + 1];
//     if (arr[i + 1] == undefined) {
//       continue;
//     }
//     tmpArr = tmp.split(' ');
//     if (
//       tmpArr[0][0] == tmpArr[1][0] &&
//       tmpArr[0][arr[i].length - 1] == tmpArr[1][arr[i + 1].length - 1]
//     ) {
//       result = true;
//       arrRes.push(result);
//     } else {
//       result = false;
//       arrRes.push(result);
//     }
//   }
//   return arrRes;
// }
// res(['asd', 'afffd', 'cc', 'kk']);
// console.log(arrRes);
// let pur = [];
// function res(arr) {
//   arr.map((el, index, arr) => {
//     if (arr[index + 1] === undefined) return;
//     if (
//       el[0] == arr[index + 1][0] &&
//       el[el.length - 1] == arr[index + 1][arr[index + 1].length - 1]
//     ) {
//       pur.push(true);
//     } else {
//       pur.push(false);
//     }
//   });
// }
// res(['asd', 'afffd', 'cc', 'kk', 'ksfddk', 'dfgdfdfdf', 'g7878g']);
// console.log(pur);

// function res(arr) {
//   let pur = arr.map((el, index, arr) => {
//     if (arr[index + 1] === undefined) return;
//     if (
//       el[0] == arr[index + 1][0] &&
//       el[el.length - 1] == arr[index + 1][arr[index + 1].length - 1]
//     ) {
//       return true;
//     } else {
//       return false;
//     }
//   });
//   pur.pop();
//   console.log(pur);
// }
// res(['asd', 'afffd', 'cc', 'kk', 'ksfddk', 'dfgdfdfdf', 'g7878g']);

/*
3) Написать функцию, которая принимает целочисленный number и рисует спиральную матрицу NxN, где N - входной параметр.
Например, matrix(3)
Ответ:
1 2 3
8 9 4
7 6 5
*/

// function matrix(num) {
//   const arr = [];
//   for (let i = 0; i < num; i++) {
//     const items = [];
//     for (let j = 0; j < num; j++) {
//       items.push(0);
//     }
//     arr.push(items);
//   }
//   const spiral = function (arr) {
//     let count = 1,
//       k = 0,
//       m = arr.length,
//       l = 0,
//       n = arr[0].length;

//     while (k < m && l < n) {
//       // слева направо
//       for (let i = l; i < n; i++) {
//         arr[k][i] = count;
//         count++;
//       }
//       k++;

//       //  сверху вниз
//       for (let i = k; i < m; i++) {
//         arr[i][n - 1] = count;
//         count++;
//       }
//       n--;

//       // справа налево
//       if (k < m) {
//         for (let i = n - 1; i >= l; i--) {
//           arr[m - 1][i] = count;
//           count++;
//         }
//         m--;
//       }

//       // снизу вверх
//       if (l < n) {
//         for (let i = m - 1; i >= k; i--) {
//           arr[i][l] = count;
//           count++;
//         }
//         l++;
//       }
//     }
//     return arr;
//   };
//   return spiral(arr);
// }

// console.log(matrix(5));

// const p = new Promise(function (res, rej) {
//   setTimeout(() => {
//     res();
//     // rej(new Error());
//   }, 1000);
// });

// p.then(
//   function (result) {
//     console.log('done');
//   }
//   // function (error) {
//   //   console.log('error!!!');
//   // }
// )
//   .catch(function (error) {
//     console.log('error!');
//   })
//   .finally(function () {
//     console.log('Well');
//   });

// function delay(ms) {
//   return new Promise(function (res, rej) {
//     setTimeout(() => {
//       res();
//     }, ms);
//   });
// }

// delay(5000).then(() => console.log('выполнилось через 5 секунд'));

// new Promise(function (res, rej) {
//   setTimeout(() => {
//     res(1);
//   }, 2000);
// })
//   .then(function (result) {
//     console.log(result);

//     return result * 2;
//   })
//   .then(function (result) {
//     console.log(result);

//     return result * 2;
//   })
//   .then(function (result) {
//     console.log(result);

//     return result * 2;
//   })
//   .then(function (result) {
//     console.log(result);
//     return result * 2;
//   });
// console.log(111111);

// function primer() {
//   new Promise(function (res, rej) {
//     setTimeout(() => {
//       res(1);
//     }, 2000);
//   }).then(function (result) {
//     console.log(result);

//     return new Promise(function (res, rej) {
//       setTimeout(() => {
//         res(result * 2);
//       }, 2000);
//     }).then(function (result) {
//       console.log(result);

//       return new Promise(function (res, rej) {
//         setTimeout(() => {
//           res(result * 2);
//         }, 2000);
//       }).then(function (result) {
//         console.log(result);
//       });
//     });
//   });
// }

// primer();
// function getAllSizes(folderName) {
//   fs.readdir(folderName, (err, files) => {
//     if (err) {
//       throw err;
//     }

//     for (let file of files) {
//       fs.stat(folderName + '/' + file, (err, stats) => {
//         if (err) {
//           throw err;
//         }

//         if (!stats.isDirectory()) {
//           tmp += stats.size;
//         } else {
//           getAllSizes(folderName + '/' + file);
//         }
//       });
//     }
//   });
// }
// getAllSizes('./');
// setTimeout(() => console.log(`Общий размер составляет ${tmp} bytes`), 1000);

// const string = "DDDddd111";
// const newString = string.replace(/[A-Z]*/, " ");
// console.log(newString);

// function factorial(n) {
//   let result = 1;

//   while (n > 1) {
//     result *= n;
//     n -= 1;
//   }

//   return result;
// }

// console.log(factorial(5));
// console.log("1");

// setTimeout(function () {
//   console.log("2");
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log("3");
//   })
//   .then(() => {
//     console.log("4");
//   });

// console.log("5");

// function sum(n) {
//   console.log(n);
//   return function (a) {
//     return sum(a + n);
//   };
// }

// sum(5)(4)(1);

// for (var i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 10);
// }

// function sumArr(arr) {
//   let res = 0;
//   for (let i = 0; i < arr.length; i++) {
//     res += arr[i];
//   }
//   return res;
// }

// function sumArray(arr) {
//   let res = 0;
//   arr.forEach((element) => {
//     res += element;
//   });
//   return res;
// }

// console.log(sumArr([1, 2, 3, 4, 10, 11]));
// console.log(sumArray([1, 2, 3, 4, 10, 11]));

// function compareTriplets(a, b) {
//   const res = [0, 0];
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] > b[i]) {
//       res[0] += 1;
//     }
//     if (a[i] < b[i]) {
//       res[1] += 1;
//     }
//   }
//   return res;
// }

// console.log(compareTriplets([17, 28, 30], [99, 16, 8]));

// function aVeryBigSum(arr) {
//   let res = arr.reduce((prev, cur) => prev + cur);
//   return res;
// }

// console.log(aVeryBigSum([1001, 1002, 1003]));

// function getRandomArbitrary(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }

// function diagonalDifference(arr) {
//   const mas = [];
//   for (let i = 0; i < arr[1]; i++) {
//     mas[i] = [];
//     for (let j = 0; j < arr[0]; j++) {
//       mas[i][j] = getRandomArbitrary(0, 9);
//     }
//   }
//   console.log(mas);

//   let sum = 0;
//   let sum2 = 0;

//   for (let i = 0; i < mas.length; i++) {
//     sum += mas[i][i];
//     sum2 += mas[i][mas[i].length - 1 - i];
//   }

//   let res = Math.abs(sum - sum2);
//   console.log(sum, sum2, res);
// }
// diagonalDifference([3, 3]);

// function foo(arr) {
//   let sumP = 0;
//   let sumN = 0;
//   let sumZ = 0;
//   let resP = 0;
//   let resN = 0;
//   let resZ = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sumP += 1;
//     }
//     if (arr[i] < 0) {
//       sumN += 1;
//     }
//     if (arr[i] == 0) {
//       sumZ += 1;
//     }
//   }

//   resP = (sumP / arr.length).toFixed(6);
//   resN = (sumN / arr.length).toFixed(6);
//   resZ = (sumZ / arr.length).toFixed(6);
//   console.log(resP, resN, resZ);
// }

// foo([-4, 3, -9, 0, 4, 1]);

// reduce как map, filter
// const arr = [3, 5, 7];
// const doubleArr = arr.reduce((prev, cur) => {
//   if (cur > 4) {
//     prev.push(cur * 2);
//   }
//   return prev;
// }, []);
// console.log(doubleArr);

// Считаем количество одинаковых элементов в массиве
// const fruit = [
//   "banana",
//   "apple",
//   "cherry",
//   "orange",
//   "banana",
//   "apple",
//   "cherry",
//   "orange",
//   "banana",
//   "apple",
//   "cherry",
//   "fig",
//   "fig",
// ];
// const count = fruit.reduce((prev, cur) => {
//   prev[cur] = (prev[cur] || 0) + 1;
//   return prev;
// }, {});
// console.log(count);

// Объединяем массивы в один
// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// const flat = arr.reduce((prev, cur) => {
//   return prev.concat(cur);
// }, []);

// console.log(flat);

// const data = [
//   { a: "happy", b: "robin", c: ["blue", "green"] },
//   { a: "tired", b: "panther", c: ["green", "black", "orange", "blue"] },
//   { a: "sad", b: "goldfish", c: ["green", "red"] },
// ];

// const colors = data.reduce((prev, cur) => {
//   cur.c.forEach((color) => {
//     if (prev.indexOf(color) === -1) {
//       prev.push(color);
//     }
//   });
//   return prev;
// }, []);
// console.log(colors);

// function staircase(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log("#".repeat(i).padStart(n));
//   }

//   Array(n)
//     .fill()
//     .forEach((v, i) => console.log("#".repeat(i + 1).padStart(n)));

//   for (let i = 1; i <= n; i++) {
//     console.log(" ".repeat(n - i) + "#".repeat(n - (n - i)));
//   }

//   const arr = [];

//   for (let i = 0; i < n; i++) {
//     arr[i] = [];
//     for (let j = 0; j < n; j++) {
//       if (j >= n - i - 1) {
//         arr[i][j] = "#";
//       } else {
//         arr[i][j] = " ";
//       }
//     }
//   }
//   return arr;
// }

// console.log(staircase(6));

// function miniMaxSum(arr) {
//   const res = [];

//   for (let i = 0; i < arr.length; i++) {
//     let a = arr.reduce((prev, cur, index) => {
//       index === i ? (prev += 0) : (prev += cur);
//       return prev;
//     }, 0);
//     res.push(a);
//   }

//   return `${Math.min(...res)} ${Math.max(...res)}`;
// }

// console.log(miniMaxSum([1, 2, 3, 4, 5]));

// function birthdayCakeCandles(candles) {
//   let count = 0;
//   let res = Math.max(...candles);
//   for (let i = 0; i < candles.length; i++) {
//     if (candles[i] === res) {
//       count += 1;
//     }
//   }
//   console.log(count);
// }

// birthdayCakeCandles([3, 1, 2, 3]);

// function timeConversion(s) {
//   const arr = s.split(/[.,:\/ -]/);

//   let hh = arr[0];
//   let mm = arr[1];
//   let ss = arr[2].substr(0, 2);
//   let mod = arr[2].substr(2, 2);

//   if (mod === "AM" && hh === "12") {
//     hh = "00";
//   } else if (mod === "PM" && hh === "12") {
//     hh = "12";
//   } else if (mod === "PM") {
//     hh = +arr[0] + +12;
//   }

//   return `${hh}:${mm}:${ss}`;
// }

// console.time("Мой способ");
// console.log(timeConversion("4:59:59PM"));
// console.timeEnd("Мой способ");

// function foo(s) {
//   let AMPM = s.slice(-2);
//   let timeArr = s.slice(0, -2).split(":");

//   if (AMPM === "AM" && timeArr[0] === "12") {
//     // catching edge-case of 12AM
//     timeArr[0] = "00";
//   } else if (AMPM === "PM") {
//     // everything with PM can just be mod'd and added with 12 - the max will be 23
//     timeArr[0] = (timeArr[0] % 12) + 12;
//   }

//   return timeArr.join(":");
// }

// console.time("foo metod");
// console.log(foo("04:59:59PM"));
// console.timeEnd("foo metod");

// function timeConversionMain(s) {
//   const time = `${s.slice(0, s.length - 2)} ${s.slice(-2)}`;
//   const d = new Date(`2020-05-05 ${time}`);

//   return new Intl.DateTimeFormat("en-US", {
//     hour12: false,
//     hour: "numeric",
//     minute: "numeric",
//     second: "numeric",
//     timeStyle: "medium",
//   }).format(d);
// }

// console.time("timeConversionMain metod");
// console.log(timeConversionMain("04:59:59PM"));
// console.timeEnd("timeConversionMain metod");

// function gradingStudents(grades) {
//   const res = [];

//   for (let i = 0; i < grades.length; i++) {
//     let tmp = grades[i];

//     while (tmp % 5 !== 0) {
//       tmp++;
//     }

//     if (grades[i] < 38) {
//       res.push(grades[i]);
//     } else if (tmp - grades[i] < 3) {
//       res.push(tmp);
//     } else {
//       res.push(grades[i]);
//     }
//   }
//   return res;
// }

// console.log(gradingStudents([73, 67, 38, 33]));

// function foo(grades) {
//   return grades.map((grade) =>
//     grade < 38 || grade % 5 < 3 ? grade : grade + (5 - (grade % 5))
//   );
// }
// console.log(foo([73, 67, 38, 33]));

// function printNumbers(from, to) {
//   let current = from;

//   let timerId = setInterval(function () {
//     console.log(current);
//     if (current == to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }, 1000);
// }

// printNumbers(0, 9);

// function foo() {
//   let current = 0;
//   let timer = setInterval(function () {
//     console.log(current);
//     if (current === 9) {
//       clearInterval(timer);
//     }
//     current++;
//   }, 100);
// }
// foo();

// function plus(num) {
//   return this + num;
// }

// function minus(num) {
//   return this - num;
// }

// Number.prototype.plus = plus;
// Number.prototype.minus = minus;

// console.log((2).plus(3).minus(1));

// for (let i = 0; i < 10; i++) {
//   const timer = setInterval(function () {
//     console.log(i);
//     clearInterval(timer);
//   }, 100);
// }

// for (var i = 0; i < 10; i++) {
//   const timer = setInterval(function () {
//     console.log(i);
//     clearInterval(timer);
//   }, 100);
// }

// console.log("abc" === new String("abc"));
// console.log(typeof "abc");
// console.log(typeof new String("abc"));

// const str = "h2h40h";
// const r = str
//   .split("h")
//   .map((s) => s + 10)
//   .filter((s) => s.length < 4);
// console.log(r);

// let obj = {
//   0: 1,
//   0: 2,
// };
// console.log(obj["0"] + obj[0]);

// function foo() {}
// foo.x = 10;
// console.log(foo.x);

// var a = "hello";
// function b() {
//   console.log(a);
//   var a = "world";
//   console.log(a);
// }
// b();

// const map = new Map();

// map.set("0", "1");
// map.set("s2", "2s");
// map.set("3s", "s3");

// const arr = [...map.values];
// const r = arr.map((value) => parseInt(value, 10));
// console.log(r);

// console.log(0 || (1 && 2) || 3);

// var x = 10;
// function bar(funArg) {
//   var x = 30;
//   funArg();
// }

// function foo() {
//   console.log(x);
// }

// foo.x = 20;
// bar.x = 40;
// bar(foo);

// for (var i = 0; i < 10; i++) {
//   setTimeout(function f() {
//     console.log(i);
//   });
// }

// const s1 = ["a", "b", "c"];
// const s2 = ["d", "e", "f"];

// const r = s1.concat(s2).join("+");
// console.log(r);

// var obj = {
//   a: () => {
//     console.log(this.prop);
//   },
//   prop: 1,
// };
// obj.a();
// var fn = obj.a.bind(obj);
// fn();

// const a = { name: "Вася" };
// const b = structuredClone(a);
// b.name = "Петя";
// console.log(a.name);
// console.log(b.name);

// const perm1 = new Promise((resolve, reject) => {
//   console.log(3);
//   resolve(res);
// });
// perm1.then((res) => console.log(res));

// // https://skillbox.ru/media/code/kak-stat-programmistom-v-37/

// function test() {
//   let num = 1;

//   return function () {
//     console.log(num);
//     num++;
//   };
// }

// test()();
// test()();

// Определить сколько раз каждый элемент встречается в массиве.
const fruits = ["kiwi", "apple", "kiwi", "orange", "kiwi", "apple"];

const countItems = (list) => {
  const count = {};
  list.forEach((f) => {
    if (!count[f]) {
      count[f] = 1;
    } else {
      count[f]++;
    }
  });
  return count;
};

const countResult = countItems(fruits);
console.log(countResult);

// Требуется создать функцию, получающую на вход число
// от 0 до 100 000 и показывающее его текстовый эквивалент.
//   Например: 441 => четыреста сорок один

let strNum = {
  unit: [
    "",
    "один",
    "два",
    "три",
    "четыре",
    "пять",
    "шесть",
    "семь",
    "восемь",
    "девять",
  ],
  ten: [
    "",
    "",
    "двадцать",
    "тридцать",
    "сорок",
    "пятьдесят",
    "шестьдесят",
    "семьдесят",
    "восемьдесят",
    "девяносто",
  ],
  teen: [
    "десять",
    "одинадцать",
    "двенадцать",
    "тринадцать",
    "четырнадцать",
    "пятнадцать",
    "шестнадцать",
    "семнадцать",
    "восемнадцать",
    "девятнадцать",
  ],
  hundred: [
    "",
    "сто",
    "двести",
    "триста",
    "четыреста",
    "пятьсот",
    "шестьсот",
    "семьсот",
    "восемьсот",
    "девятьсот",
  ],
  thousand: ["тысячи ", "тысяч "],
};
function calcXX(numXX = 0, numX) {
  if (!numXX && !numX) {
    return "";
  }
  switch (numXX) {
    case 0:
      return strNum.unit[numX];
    case 1:
      return strNum.teen[numX];
    default:
      return strNum.ten[numXX] + " " + strNum.unit[numX];
  }
}
function toThousand(numX, finalString) {
  switch (numX) {
    case 1:
      return finalString.replace("один ", "одна тысяча ");
    case 2:
      finalString = finalString.replace("два ", "две ");
    case 3:
    case 4:
      return (finalString += strNum.thousand[0]);
    default:
      return (finalString += strNum.thousand[1]);
  }
}
function numberToString(num) {
  if (+num >= 100000 || isNaN(+num)) {
    return false;
  }
  let numArray = num.toString().padStart(5, ".").split("");
  let finalString = "";
  if (numArray[0] != ".") {
    finalString += calcXX(+numArray[0], +numArray[1]) + " ";
  } else if (numArray[1] != ".") {
    finalString += calcXX(undefined, +numArray[1]) + " ";
  }

  if (numArray[2] != ".") {
    if (numArray[1] != ".") {
      if (numArray[0] != "1") {
        finalString = toThousand(+numArray[1], finalString);
      } else {
        finalString += strNum.thousand[1];
      }
    }
    finalString = finalString + strNum.hundred[+numArray[2]] + " ";
  }
  if (numArray[3] != ".") {
    finalString += calcXX(+numArray[3], +numArray[4]) + " ";
  } else if (numArray[4] != ".") {
    finalString += calcXX(undefined, +numArray[4]) + " ";
  }
  return finalString;
}

setInterval(() => {
  let rng = Math.floor(Math.random() * 100000);
  console.log(rng);
  console.log(numberToString(+rng));
  console.log("______________________");
}, 5000);

/* 
Реализовать собственные версии методов map, filter, reduce не используя аналогичные методы
из объекта типа Array (можно использовать только for, while и do while).
Интерфейс функции map:
map(array: array<T>, callback: (item: T) => T): array<T>
Пример использования:
map([1,2,3], (item) => item + 1)
Ответ: [2, 3, 4]
Входной массив мутироваться (изменяться) не должен.
Прочие функции должны работать аналогично map с поправкой на их назначение.
*/

const arr = [1, 2, 3, -1, -2, -3, 0, 5, 6, 7];

map;
const map = function (arr, callback, thisArg) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    results.push(callback.call(thisArg, arr[i], i, arr));
  }
  return results;
};

var toMap = map(arr, (item) => item + 1);

console.log(toMap);

filter;
const filter = function (arr, callback, thisArg) {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback.call(thisArg, arr[i], i, arr)) {
      results.push(arr[i]);
    }
  }
  return results;
};

const toFilter = filter(arr, (item) => item > 5);

console.log(toFilter);

reduce;
const reduce = function (arr, callback, startValue) {
  let result = startValue;
  for (let i = 0; i < arr.length; i++) {
    result = callback.call(null, result, arr[i], i, arr);
  }
  return result;
};

const toReduce = reduce(arr, (acc, cur) => acc + cur, 0);

console.log(toReduce);
