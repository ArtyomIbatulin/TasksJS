// напиши функцию - вендинговый автомат, на вход ей первым параметром подается сумма покупки, вторым - массив монеток (купюр) - любые числа. функция должна вернуть два массива - первый монетки которые уходят в оплату, второй - сдача. Автомат может принимать только следующие номиналы - 1,2,5,10,50,100. Если денег недостаточно - возвращает первый массив - пустой, второй - все монеты. Учти что нежелательно брать 5 монет по 1 если есть монета номиналом 5

// function auto(sum, arr) {
//   console.log(arr);
//   arr.sort((a, b) => b - a);
//   let result = arr.reduce((summ, current) => summ + current, 0);
//   const cur = result - sum;
//   const coins = [];
//   const odd = [];
//   let dif = sum;
//   console.log(arr);
//   console.log('Сумма' + ' ' + sum);
//   console.log('Количество денег' + ' ' + result);
//   console.log('Сдача с суммы' + ' ' + cur);
//   if (sum <= result) {
//     arr.forEach((val) => {
//       if (result > cur && dif >= val) {
//         coins.push(val);
//         result -= val;
//         dif -= val;
//       } else {
//         odd.push(val);
//       }
//     });
//     console.log('Потребовавшиеся монеты:' + ' ' + coins);
//     console.log('Сдача' + ' ' + odd);
//   } else {
//     console.log('Денег не хватает');
//     console.log('Потребовавшиеся монеты:' + ' ' + coins);
//     console.log('Сдача' + ' ' + arr);
//   }
// }
// const output = auto(39, [1, 2, 5, 10, 10, 5, 2, 2, 5, 1, 1, 1]);

// function auto(sum, arr) {
//   console.log(arr);
//   arr.sort((a, b) => b - a);
//   let result = arr.reduce((summ, current) => summ + current, 0);
//   let cur = result - sum;
//   let coins = [];
//   let odd = [];
//   let dif = sum;

//   console.log(arr);
//   console.log('Сумма' + ' ' + sum);
//   console.log('Количество денег' + ' ' + result);
//   console.log('Сдача с суммы' + ' ' + cur);

//   // if (sum > result) {
//   //   console.log('Денег не хватает');
//   //   alert('Денег не хватает');
//   // } else {
//   //   for (let i = 0; i < arr.length; i++) {
//   //     let val = arr[i];

//   //     if (result > cur && dif >= val) {
//   //       arr.splice(i, 1);
//   //       coins.push(val);
//   //       result -= val;
//   //       dif -= val;
//   //       i--;
//   //     }
//   //   }
//   // }

//   if (sum <= result) {
//     arr.forEach((val) => {
//       if (result > cur && dif >= val) {
//         coins.push(val);
//         result -= val;
//         dif -= val;
//       } else {
//         odd.push(val);
//       }
//     });
//   } else {
//     console.log('Денег не хватает');
//     // alert('Денег не хватает');
//   }

//   console.log('Потребовавшиеся монеты:' + ' ' + coins);
//   // console.log('Сдача:' + ' ' + arr);

//   sum <= result
//     ? console.log('Сдача:' + ' ' + odd)
//     : console.log('Сдача:' + ' ' + arr);

//   // return [coins, odd];
// }

// let output = auto(19, [1, 2, 5, 10, 10, 5, 2, 2, 5, 1, 1, 1]);
// alert('Потребовавшиеся монеты:' + ' ' + output[0]);
// alert('Сдача:' + ' ' + output[1]);

// let urls = [
//   'https://api.github.com/users/iliakan',
//   'https://api.github.com/users/remy',
//   'https://no-such-url',
// ];

// Promise.allSettled(urls.map((url) => fetch(url))).then((results) => {
//   // (*)
//   results.forEach((result, num) => {
//     if (result.status == 'fulfilled') {
//       alert(`${urls[num]}: ${result.value.status}`);
//     }
//     if (result.status == 'rejected') {
//       alert(`${urls[num]}: ${result.reason}`);
//     }
//   });
// });

// 2.1;
// alert('Я JavaScript!');

// 2.4.1;
// let admin;
// let name = 'Джон';
// admin = name;
// alert(admin);

// 2.4.2
// const BIRTHDAY = '18.04.1982';   // значение известно до выполнение кода
// const age = someCode(birthday);  // значение вычисляется в коде

// 2.5;
// let name = 'Ilya';
// alert(`hello ${1}`);         // hello 1
// alert(`hello ${'name'}`);    // hello name
// alert(`hello ${name}`);      // hello Ilya

// 2.6
// let name = prompt('Введите свое имя', '');
// alert(`Здравствуй, ${name}!`);

// 2.8.1
// let a = 1,
//   b = 1;
// // 2 2
// let c = ++a; // 2
// let d = b++; // 1

// 2.8.2
// let a = 2;

// let x = 1 + (a *= 2);
// a = 4 x = 5

// 2.8.4
// let a = prompt('Первое число?', 1);
// let b = prompt('Второе число?', 2);

// alert(a + b); //12
// alert(parseInt(a) + parseInt(b)); // 3

// 2.9
// 1  true +
// 2  false+
// 3  true +
// 4  true +
// 5  false+
// 6  false+
// 7  false+

// 2.10.1
// Alert выведется, так как строка '0' - true

// 2.10.2
// let message = prompt('Какое «официальное» название JavaScript?', '');
// if (message == 'ECMAScript') {
//   alert('Правильно!');
// } else {
//   alert('Не знаете? “ECMAScript”!');
// }

//2.10.3
// let number = prompt('Введите число', '');
// if (number > 0) {
//   alert(1);
// } else if (number < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

// 2.10.4
// let a = prompt('Введите a', '');
// let b = prompt('Введите b', '');
// let result = +a + +b < 4 ? `Мало` : `Много`;

// alert(result);

// 2.10.5
// let message;
// let login = prompt('Введите логин', '');

// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = 'Неправильно!';
// }

// message =
//   login == 'Сотрудник'
//     ? `Привет`
//     : login == 'Директор'
//     ? `Здравствуйте`
//     : login == ''
//     ? `Нет логина`
//     : `Неправильно!`;

// alert(message);

// 2.11.1
// let age = prompt('Введите значение', '');
// if (age >= 14 && age <= 90) {
//   alert('Правильно');
// } else {
//   alert('Неправильно');
// }

// 2.11.2
// let age = prompt('Введите значение', '');
// if (age < 14 || age > 90) {
//   alert('Правильно');
// } else {
//   alert('Неправильно');
// }

// let age = prompt('Введите значение', '');
// if (!(age >= 14 && age <= 90)) {
//   alert('Правильно');
// } else {
//   alert('Неправильно');
// }

// 2.11.3
// 1 true first
// 2 false
// 3 true third

// 2.11.4
// let userName = prompt('Кто там?', '');
// if (userName === 'Админ') {
//   let pass = prompt('Введите пароль', '');
//   if (pass === 'Я Главный') {
//     alert('Здравствуйте');
//   } else if (pass === '' || pass === null) {
//     alert('Отменено');
//   } else {
//     alert('Неверный пароль');
//   }
// } else if (userName === '' || userName === null) {
//   alert('Отменено');
// } else {
//   alert('Я вас не знаю');
// }

// 2.13.1
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) {
//     alert(i);
//   }
// }

// 2.13.2
// let i = 0;
// while (i < 3) {
//   alert(`number ${i}!`);
//   i++;
// }

// 2.13.3
// let number;
// do {
//   number = prompt('Введите число > 100', '');
//   if (number === null || number === '') {
//     break;
//   }
// } while (number <= 100);

// let num;
// do {
//   num = prompt('Введите число, большее 100?', 0);
// } while (num <= 100 && num);

// 2.13.4
// let n = prompt('Введите n', '');
// nextNum: for (i = 2; i <= n; i++) {
//   for (j = 2; j < i; j++) {
//     if (i % j == 0) {
//       continue nextNum;
//     }
//   }
//   console.log(i);
// }

// 2.14.1
// let browser = prompt('Введите название вашего браузера', '');
// if (browser === 'Edge') {
//   alert("You've got the Edge!");
// } else if (
//   browser === 'Chrome' ||
//   browser === 'Firefox' ||
//   browser === 'Safari' ||
//   browser === 'Opera'
// ) {
//   alert('Okay we support these browsers too');
// } else {
//   alert('We hope that this page looks ok!');
// }

// 2.14.2
// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
//   case 0:
//     alert('Вы ввели число 0');
//     break;
//   case 1:
//     alert('Вы ввели число 1');
//     break;

//   case 2:
//   case 3:
//     alert('Вы ввели число 2, а может и 3');
//     break;
// }

// 2.15.1
// let age = prompt('Введите возраст', '');

// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// }

// function checkAge(age) {
//   return (age = age > 18 ? true : confirm('Родители разрешили?'));
// }

// function checkAge(age) {
//   return (age = age > 18 || confirm('Родители разрешили?'));
// }

// checkAge(age);

// 2.15.2
// function min(a, b) {
//   let res = a < b ? a : b;
//   alert(res);
// }

// min(10, 0);

// 2.15.3
// let x = prompt('Введите x');
// let n = prompt('Введите n');

// function pow(x, n) {
//   if (n >= 1) {
//     x = x ** n;
//   }
//   alert(x);
// }

// pow(x, n);

// function pow(x, n) {
//   let result = x;

//   for (let i = 1; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// let x = prompt('x?', '');
// let n = prompt('n?', '');

// if (n < 1) {
//   alert(`Степень ${n} не поддерживается, используйте натуральное число`);
// } else {
//   alert(pow(x, n));
// }
// 2.17.1
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   'Вы согласны?',
//   () => {
//     alert('Вы согласились.');
//   },
//   () => {
//     alert('Вы отменили выполнение.');
//   }
// );

// 4.1.1
// const user = {};
// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;
// console.log(user);

// 4.1.2
// function isEmpty(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }
// let user = {};
// alert(isEmpty(user));

// 4.1.3
// let salaries = { John: 100, Ann: 160, Pete: 130 };

// let sum = 0;

// for (let key in salaries) {
//   sum += parseInt(salaries[key]);
// }

// alert(sum);

// 4.1.4
// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };

// function multiplyNumeric(obj) {
//   for (let key in obj) {
//     if (typeof obj[key] == 'number') {
//       obj[key] *= 2;
//     }
//   }
//   console.log(menu);
// }

// multiplyNumeric(menu);

//4.4.1
// let calculator = {
//   read() {
//     calculator.a = prompt('a', '');
//     calculator.b = prompt('b', '');
//   },
//   sum() {
//     let sum;
//     sum = +this.a + +this.b;
//     return sum;
//   },
//   mul() {
//     let mul;
//     mul = this.a * this.b;
//     return mul;
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// let calculator = {
//   read() {
//     this.a = +prompt('a', '');
//     this.b = +prompt('b', '');
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   mul() {
//     return this.a * this.b;
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// 4.4.2
// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showStep: function () {
//     alert(this.step);
//     return this;
//   },
// };

// ladder.up().up().down().showStep();

// 4.5.1
// function Calculator(a, b) {
//   this.read = function () {
//     this.a = +prompt('a', '');
//     this.b = +prompt('b', '');
//   };

//   this.sum = function () {
//     return this.a + this.b;
//   };
//   this.mul = function () {
//     return this.a * this.b;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// alert('Sum=' + calculator.sum());
// alert('Mul=' + calculator.mul());

// 4.5.2
// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function () {
//     this.value += +prompt('Значение', '');
//   };
// }

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений

// 5.2.1
// let a = prompt('a', '');
// let b = prompt('b', '');
// let sum = +a + +b;
// alert(sum);

// 5.2.2
// alert(Math.round(6.35 * 10) / 10);

// 5.2.3
// function readNumber() {
//   let num;
//   do {
//     num = prompt('Введите значение', '');
//   } while (!isFinite(num));
//   if (num === '' || num === null) {
//     return null;
//   }
//   return +num;
// }

// alert(`Число ${readNumber()}`);

// 5.2.4
// function random(min, max) {
//   return min + Math.random() * (max - min);
// }
// alert(random(1, 5));

// 5.2.5
// function randomInteger(min, max) {
//   let rand = min + Math.random() * (max + 1 - min);
//   return Math.floor(rand);
// }
// alert(randomInteger(1, 5));

// 5.3.1
// function ucFirst(str) {
//   if (!str) {
//     return str;
//   }
//   str = str[0].toUpperCase() + str.slice(1);
//   return str;
// }
// alert(ucFirst('hello'));

// 5.3.2
// Ошибка в учебнике (не сравнивает 'XXX')
// function checkSpam(str) {
//   str = str.toLowerCase();
//   return str.includes('viagra') || str.includes('xxx');
// }

// alert(checkSpam('buy ViAgRA now'));
// alert(checkSpam('free xxxxx'));
// alert(checkSpam('innocent rabbit'));

// 5.3.3.
// function truncate(str, maxlength) {
//   if (str.length < maxlength) {
//     return str;
//   } else {
//     return str.slice(0, maxlength - 1) + '\u2026';
//   }
// }

// alert(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
// alert('Всем привет!', 20);

// 5.3.4
// function extractCurrencyValue(str) {
//   return +str.slice(1);
// }

// alert(extractCurrencyValue('$120'));

// function extractCurrencyValue(str) {
//   return str.match(/\d/g).join('');
// }
// alert(extractCurrencyValue('$1dd20777dfgdsfds'));
// function extractCurrencyValue(str) {
//   let newStr = '';

//   for (let char of str) {
//     if (+char < 10) {
//       newStr += +char;
//     } else {
//       continue;
//     }
//   }

//   return +newStr;
// }
// alert(extractCurrencyValue('$120dfdf'));

// 5.4.1
// let styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-ролл');
// let half = Math.floor((styles.length - 1) / 2);
// styles[half] = 'Классика';
// console.log(styles.shift());
// styles.unshift('Рэп', 'Регги');
// console.log(styles);

// 5.4.2

//   do {
//     num = prompt('Введите значение', '');
//   } while (!isFinite(num));
//   if (num === '' || num === null) {
//     return null;
//   }
// return +num;

// function sumInput() {
//   const arr = [];
//   let num,
//     sum = 0;

//   do {
//     num = prompt('Введите число', '');
//     if (!isNaN(num)) {
//       arr.push(+num);
//     }
//     console.log(arr);
//     if (!num) break;
//   } while (isFinite(num));

//   for (let numbers of arr) {
//     sum += numbers;
//   }
//   return sum;
// }

// alert(sumInput());

// function sumInput() {
//   let arr = [];

//   while (true) {
//     let num = prompt('Введите значение', '');
//     if (num === '' || num === null || !isFinite(num)) break;
//     arr.push(+num);
//   }

//   let sum = 0;
//   for (let numbers of arr) {
//     sum += numbers;
//   }
//   return sum;
// }
// alert(sumInput());

// 5.4.3
// function getMaxSubSum(arr) {
//   let maxSum = 0;

//   for (i = 0; i < arr.length; i++) {
//     let subSum = 0;
//     for (j = i; j < arr.length; j++) {
//       subSum += arr[j];
//       maxSum = Math.max(maxSum, subSum);
//     }
//   }

//   return maxSum;
// }

// alert(getMaxSubSum([-1, 2, 3, -9]));
// alert(getMaxSubSum([2, -1, 2, 3, -9]));
// alert(getMaxSubSum([-1, 2, 3, -9, 11]));
// alert(getMaxSubSum([-2, -1, 1, 2]));
// alert(getMaxSubSum([100, -9, 2, -3, 5]));
// alert(getMaxSubSum([1, 2, 3]));
// alert(getMaxSubSum([-1, -2, -3]));

// function getMaxSubSum(arr) {
//   let maxSum = 0;
//   let subSum = 0;

//   for (let item of arr) {
//     subSum += item;
//     maxSum = Math.max(maxSum, subSum);
//     if (subSum < 0) {
//       subSum = 0;
//     }
//   }

//   return maxSum;
// }

// alert(getMaxSubSum([-1, 2, 3, -9]));
// alert(getMaxSubSum([2, -1, 2, 3, -9]));
// alert(getMaxSubSum([-1, 2, 3, -9, 11]));
// alert(getMaxSubSum([-2, -1, 1, 2]));
// alert(getMaxSubSum([100, -9, 2, -3, 5]));
// alert(getMaxSubSum([1, 2, 3]));
// alert(getMaxSubSum([-1, -2, -3]));

// 5.5.1
// function camelize(str) {
//   return str
//     .split('-')
//     .map((item, index) =>
//       index == 0 ? item : item[0].toUpperCase() + item.slice(1)
//     )
//     .join('');
// }

// alert(camelize('background-color'));
// alert(camelize('list-style-image'));
// alert(camelize('-webkit-transition'));

// 5.5.2
// function filterRange(arr, a, b) {
//   return arr.filter((item) => item >= a && item <= b);
// }

// let arr = [5, 3, 8, 1];

// let filtered = filterRange(arr, 1, 4);

// alert(filtered); // 3,1 (совпадающие значения)

// alert(arr); // 5,3,8,1 (без изменений)

// 5.5.3

// function filterRangeInPlace(arr, a, b) {
//   for (let i = 0; i < arr.length; i++) {
//     let val = arr[i];
//     if (val < a || val > b) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
// }

// let arr = [5, 3, 8, 1];

// filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert(arr); // [3, 1]

// 5.5.4
// let arr = [5, 2, 1, -10, 8];

// arr.sort(function (a, b) {
//   return b - a; // по убыванию
//   // return a - b; // по возрастанию
// });

// alert(arr); // 8, 5, 2, 1, -10

// 5.5.5

// function copySorted(arr) {
//   return arr.slice().sort();
// }

// let arr = ['HTML', 'JavaScript', 'CSS'];

// let sorted = copySorted(arr);

// alert(sorted); // CSS, HTML, JavaScript
// alert(arr); // HTML, JavaScript, CSS (без изменений)

// 5.5.6 (copy)
// function Calculator() {
//   this.methods = {
//     '-': (a, b) => a - b,
//     '+': (a, b) => a + b,
//   };

//   this.calculate = function (str) {
//     let split = str.split(' '),
//       a = +split[0],
//       op = split[1],
//       b = +split[2];

//     if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//       return NaN;
//     }

//     return this.methods[op](a, b);
//   };

//   this.addMethod = function (name, func) {
//     this.methods[name] = func;
//   };
// }

// let calc = new Calculator();

// alert(calc.calculate('25 + 67'));

// let powerCalc = new Calculator();
// powerCalc.addMethod('*', (a, b) => a * b);
// powerCalc.addMethod('/', (a, b) => a / b);
// powerCalc.addMethod('**', (a, b) => a ** b);

// let result = powerCalc.calculate('2 ** 3');
// alert(result);

// 5.5.7
// let vasya = { name: 'Вася', age: 25 };
// let petya = { name: 'Петя', age: 30 };
// let masha = { name: 'Маша', age: 28 };
// let dasha = { name: 'Даша', age: 29 };

// let users = [vasya, petya, masha, dasha];

// let names = users.map((item) => item.name);

// alert(names);

// 5.5.8
// let vasya = { name: 'Вася', surname: 'Пупкин', id: 1 };
// let petya = { name: 'Петя', surname: 'Иванов', id: 2 };
// let masha = { name: 'Маша', surname: 'Петрова', id: 3 };

// let users = [vasya, petya, masha];

// let usersMapped = users.map((item) => ({
//   fullName: `${item.name} ${item.surname}`,
//   id: item.id,
// }));

// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */
// alert(usersMapped[0].id); // 1
// alert(usersMapped[0].fullName); // Вася Пупкин

// 5.5.9
// function sortByAge(arr) {
//   arr.sort((a, b) => (a.age > b.age ? 1 : -1));
// }

// let vasya = { name: 'Вася', age: 25 };
// let petya = { name: 'Петя', age: 30 };
// let masha = { name: 'Маша', age: 28 };

// let arr = [vasya, petya, masha];

// sortByAge(arr);

// // теперь: [vasya, masha, petya]
// alert(arr[0].name); // Вася
// alert(arr[1].name); // Маша
// alert(arr[2].name); // Петя

// 5.5.10
// function shuffle(array) {
//   array.sort(() => Math.random() - 0.5); // плохой пример
// }

// // подсчёт вероятности для всех возможных вариантов
// let count = {
//   123: 0,
//   132: 0,
//   213: 0,
//   231: 0,
//   321: 0,
//   312: 0,
// };

// for (let i = 0; i < 1000000; i++) {
//   let array = [1, 2, 3];
//   shuffle(array);
//   count[array.join('')]++;
// }

// // показать количество всех возможных вариантов
// for (let key in count) {
//   alert(`${key}: ${count[key]}`);
// }

// 5.5.11
// function getAverageAge(users) {
//   return users.reduce((prev, user) => prev + user.age, 0) / users.length;
// }

// let vasya = { name: 'Вася', age: 25 };
// let petya = { name: 'Петя', age: 30 };
// let masha = { name: 'Маша', age: 29 };

// let arr = [vasya, petya, masha];

// alert(getAverageAge(arr)); // 28

// 5.5.12
// function unique(arr) {
//   let result = [];

//   for (let str of arr) {
//     if (!result.includes(str)) {
//       result.push(str);
//     }
//   }

//   return result;
// }

// let strings = [
//   'кришна',
//   'кришна',
//   'харе',
//   'харе',
//   'харе',
//   'харе',
//   'кришна',
//   'кришна',
//   ':-O',
// ];

// alert(unique(strings)); // кришна, харе, :-O

// 5.7
// function unique(arr) {
//   return Array.from(new Set(arr));
// }

// let values = [
//   'Hare',
//   'Krishna',
//   'Hare',
//   'Krishna',
//   'Krishna',
//   'Krishna',
//   'Hare',
//   'Hare',
//   ':-O',
// ];

// alert(unique(values));

// 6.1
// function sumTo(n) {
//   if (n == 1) return 1;
//   return n + sumTo(n - 1);
// }

// alert(sumTo(100));

// 6.2
// function factorial(n) {
//   return n != 1 ? n * factorial(n - 1) : 1;
// }

// alert(factorial(5));
// function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// fib(77); // вычисляется очень долго

// function fib(n) {
//   let a = 1;
//   let b = 1;
//   for (let i = 3; i <= n; i++) {
//     let c = a + b;
//     a = b;
//     b = c;
//   }
//   return b;
// // }

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757

// const a = 100;
// console.log('TEST');

// console.log('TEST2');

// console.log(a);

// Задача с множественными вызовами
// function sum(a) {
//   let currentSum = a;

//   function f(b) {
//     if (!b) {
//       return currentSum;
//     }
//     currentSum += b;
//     return f;
//   }

//   // f.toString = function () {
//   //   return currentSum;
//   // };

//   return f;
// }

// alert(sum(3)(4)(2)());
// alert(sum(3)(6)(5)());
// alert(sum(6)(-1)(-2)());
// alert(sum(1)(6)(2)(-3)(4)());

// let prices = {
//   banana: 1,
//   orange: 2,
//   meat: 4,
// };

// let doublePrices = Object.fromEntries(
//   // преобразовать в массив, затем map, затем fromEntries обратно в объект
//   Object.entries(prices).map(([key, value]) => [key, value * 2])
// );

// console.log(prices);
// console.log(doublePrices);

// 5.10.1
// let user = { name: 'John', years: 30 };

// let { name, years: age, isAdmin = false } = user;

// alert(name); // John
// alert(age); // 30
// alert(isAdmin); // false

// 5.10.2
// function topSalary(salaries) {
//   let maxValue = 0;
//   let maxName = null;
//   for (let [key, value] of Object.entries(salaries)) {
//     if (value > maxValue) {
//       maxValue = value;
//       maxName = key;
//     }
//   }

//   return maxName;
// }

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
//   Artem: 415000,
// };

// alert(topSalary(salaries));

// 6.3.1
// function sum(a) {
//   return function (b) {
//     return a + b;
//   };
// }

// alert(sum(1)(2));
// alert(sum(5)(-1));
// alert(sum(5)(15));

// 6.3.2
// function inBetween(a, b) {
//   return function (x) {
//     return x >= a && x <= b;
//   };
// }

// function inArray(arr) {
//   return function (x) {
//     return arr.includes(x);
//   };
// }

// let arr = [1, 2, 3, 4, 5, 6, 7];

// alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

// alert(arr.filter(inArray([1, 2, 10]))); // 1,2

// 6.3.3 посмотреть в консоли по шагам
// function byField(field) {
//   return (a, b) => (a[field] > b[field] ? 1 : -1);
// }

// let users = [
//   { name: 'John', age: 20, surname: 'Johnson' },
//   { name: 'Pete', age: 18, surname: 'Peterson' },
//   { name: 'Ann', age: 19, surname: 'Hathaway' },
// ];

// users.sort(byField('name ddd'));
// users.forEach((item) => alert(item.name));
// users.sort(byField('age'));
// users.forEach((item) => alert(item.age));

// Пример с замыканием
// function getDomain(domain) {
//   return function (url) {
//     return `https://${url}.${domain}`;
//   };
// }
// const domainCom = getDomain('com');
// const domainRu = getDomain('ru');

// console.log(domainCom('google'));
// console.log(domainRu('yandex'));

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

// const arr = [1, 2, 3, -1, -2, -3, 0, 5, 6, 7];

// // map
// const map = function (arr, callback, thisArg) {
//   let results = [];
//   for (let i = 0; i < arr.length; i++) {
//     results.push(callback.call(thisArg, arr[i], i, arr));
//   }
//   return results;
// };

// const toMap = map(arr, (item) => item + 1);

// console.log(toMap);
// alert(toMap);

// // filter
// const filter = function (arr, callback, thisArg) {
//   let results = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (callback.call(thisArg, arr[i], i, arr)) {
//       results.push(arr[i]);
//     }
//   }
//   return results;
// };

// const toFilter = filter(arr, (item) => item > 5);

// console.log(toFilter);
// alert(toFilter);

// // reduce
// const reduce = function (arr, callback, startValue) {
//   let result = startValue;
//   for (let i = 0; i < arr.length; i++) {
//     result = callback.call(null, result, arr[i], i, arr);
//   }
//   return result;
// };

// const toReduce = reduce(arr, (acc, cur) => acc + cur, 0);

// console.log(toReduce);
// alert(toReduce);

// 12.1.1
// function* pseudoRandom(seed) {
//   let value = seed;

//   while (true) {
//     value = (value * 16807) % 2147483647;
//     yield value;
//   }
// }

// let generator = pseudoRandom(1);

// alert(generator.next().value);
// alert(generator.next().value);
// alert(generator.next().value);

// let user = {
//   firstName: 'Bob',
//   sayHi() {
//     console.log(`Привет, ${this.firstName}!`);
//   },
// };

// // setTimeout(user.sayHi, 3000); // Привет, undefined!

// // setTimeout(function () {
// //   user.sayHi();
// // }, 5000);

// const fn = user.sayHi.bind(user);

// setTimeout(fn, 5000);

// bind
// const person = {
//   name: 'Bob',
//   age: 40,
// };

// function info(phone, email) {
//   console.log(this.name, this.age, phone, email);
// }

// Простой способ с bind
// function bind(fn, context, ...rest) {
//   return fn.bind(context, ...rest);
// }

// Способ без встренных методов
// function bind(fn, context, ...rest) {
//   return function (...args) {
//     const uniqId = Date.now().toString();
//     context[uniqId] = fn;
//     let result = context[uniqId](...rest.concat(args));
//     delete context[uniqId];
//     return result;
//   };
// }

// ES5
// function bind(fn, context) {
//   let rest = Array.prototype.slice.call(arguments, 2);
//   return function () {
//     let args = Array.prototype.slice.call(arguments);
//     return fn.apply(context, rest.concat(args));
//   };
// }

// ES6
// function bind(fn, context, ...rest) {
//   return function (...args) {
//     return fn.apply(context, rest.concat(args));
//     // return fn.call(context, ...rest.concat(args));
//   };
// }

// function call(fn, context, ...args) {
//   const uniqId = Date.now().toString();
//   context[uniqId] = fn;
//   let result = context[uniqId](...args);
//   delete context[uniqId];
//   return result;
// }

// call(info, person, '+89898989', 'dfdfdfdf@gdfgdf');

// function apply(fn, context, args) {
//   const uniqId = Date.now().toString();
//   context[uniqId] = fn;
//   let result = context[uniqId](...args);
//   delete context[uniqId];
//   return result;
// }
// apply(info, person, ['+89898989', 'dfdfdfdf@gdfgdf']);

// bind(info, person)('+78995455', 'ghggj@mail.ru');
// bind(info, person, '+78995455')('ghggj@mail.ru');
// bind(info, person, '+78995455', 'ghggj@mail.ru')();

// Армия функций
// function makeArmy() {
//   let shooters = [];
//   let i = 0;
//   while (i < 10) {
//     let j = i;
//     let shooter = function () {
//       // функция shooter
//       console.log(j); // должна выводить порядковый номер
//     };
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
/*
const fs = require(‘fs’);
const path = require(‘path’);
const fullPath = path.join(__dirname, ‘build’, __fileName);
const stat = fs.statSync(fullPath);
  if (!stat.isFile()) {
    console.log(`Error: ${fullPath} is not a file!`);
      return [0, 0];
      }
  return stat.size
*/

const fs = require('fs'),
  path = require('path'),
  fullPath = path.join(__dirname, '', '');
// sum = [];
// let res = 0;
let tmp = 0;

function getAllSizes(folderName) {
  fs.readdir(folderName, (err, files) => {
    if (err) {
      throw err;
    }

    for (let file of files) {
      fs.stat(folderName + '/' + file, (err, stats) => {
        if (err) {
          throw err;
        }

        if (!stats.isDirectory()) {
          // console.log(`${file} ${stats.size} bytes`);
          // sum.push(stats.size);
          // res = sum.reduce((acc, cur) => acc + cur);
          // return res;
          // console.log(`Вся хуйня равна ${res}`);
          tmp += stats.size;

          // console.log(`Общий размер составляет ${tmp} bytes`);
          // return tmp;
        } else {
          getAllSizes(folderName + '/' + file);
        }
      });
    }
  });
}

getAllSizes('./');

setTimeout(() => console.log(`Общий размер составляет ${tmp} bytes`), 1000);

// let ans = getAllSizes('./');
// console.log('Размер составляет ' + ans);

// const fs = require('fs');
// function scaner(y) {
//   let y1 = fs.readdirSync(y);
//   for (let x of y1) {
//     let stat = fs.statSync(y + x); // тут забыли путь
//     if (!stat.isFile()) {
//       let path = y + x + '/';
//       scaner(path);
//     }
//     console.log(stat.size);
//   }
// }
// scaner('./');

// const fs = require('fs'),
//   path = require('path');
// function crawl(dir) {
//   let files = fs.readdirSync(dir);
//   for (let x in files) {
//     let next = path.join(dir, files[x]);
//     if (fs.statSync(next).isDirectory() == true) {
//       crawl(next);
//     } else {
//       console.log(next);
//     }
//   }
// }
// crawl(__dirname);

// 9.1.1
// Переписать с фун-ий в класс
// function Clock({ template }) {
//   let timer;

//   function render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   this.stop = function () {
//     clearInterval(timer);
//   };

//   this.start = function () {
//     render();
//     timer = setInterval(render, 1000);
//   };
// }

// class Clock {
//   constructor({ template }) {
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }
//   stop() {
//     clearInterval(this.timer);
//   }
//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   }
// }

// let clock = new Clock({ template: 'h:m:s' });
// clock.start();

// 9.2.1
// class Animal {
//   constructor(name) {
//     this.name = name;
//   }
// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit('Белый кролик'); // Error: this is not defined
// console.log(rabbit.name);

// 9.3.1
// class Rabbit extends Object {
//   constructor(name) {
//     super(); // наследуем конструктор родителя
//     this.name = name;
//   }
// }

// let rabbit = new Rabbit('Кроль');

// console.log(rabbit.hasOwnProperty('name'));

// 11.2.2
// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

// delay(3000).then(() => console.log('Выполнилось через 2 секунды'));

/* 
1) Написать рекурсивную функцию вычисления чисел Фибоначчи. На вход функции подавать длину конечного массива чисел.
*/

// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
// function fib(n) {
//   return n <= 1 ? n : fib(n - 1) + fib(n - 2);
// }

// console.log(fib(9));

// // Фибоначчи с фун-ей генератором
// function* fiboGen(len, current = 0, next = 1) {
//   if (len === 0) {
//     return current;
//   }
//   yield current;
//   yield* fiboGen(len - 1, next, current + next);
// }

// const fibo = [...fiboGen(9)];

// console.log(fibo);

// const fib2 = (n) => {
//   if (n == 0) {
//     return [0, 1];
//   } else {
//     const [prev, next] = fib2(n - 1);
//     return [next, prev + next];
//   }
// };

// const fib = (n) => fib2(n)[0];

// function fib(n, undefined) {
//   if (fib.cache[n] === undefined) {
//     fib.cache[n] = fib(n - 1) + fib(n - 2);
//   }

//   return fib.cache[n];
// }

// fib.cache = [0, 1, 1];

// fib(8);
// console.log(fib.cache);

// function fibb(n) {
//   return n <= 1 ? fibb.arr[n] : (fibb.arr[n] = fibb(n - 1) + fibb(n - 2));
// }

// fibb.arr = [0, 1, 1];
// fibb(8);
// console.log(fibb.arr);

/*
2) Функция. Принимает массив строк. Должна вернуть массив результатов проверки двух строк. Если у одной строки с последующей первый и последний символы одинаковы, то true. Например ["asd", "afffd", "cc", "kk"]. Для такого массива функция должна вернуть [true, false, false]
*/
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
