// let btn = document.querySelector("#btn");

// btn.addEventListener("click", () => {
//   let text1 = document.querySelector("#text1").value;
//   let text2 = document.querySelector("#text2");

// убираем содержимое тегов
// let text3 = text1.replace(/<[^>]+>/g, "").trim();
// text2.value = text3;

// проверка строки на палиндром
//   text1 = text1.toLowerCase();
//   let text3 = text1.split("").reverse().join("");
//   text2.value = text3;
//   if (text1 == text3) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// });

// меняем местами значения переменных
// let a = 15;
// let b = 110;
// console.log(a, b);
// [a, b] = [b, a];
// console.log(a, b);

// // reverse массива своим методом
// let arr = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9];

// const r1 = (arr) => {
//   let res = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     res.push(arr[i]);
//   }
//   return res;
// };
// console.log(r1(arr));

// const r2 = (arr2) => {
//   let res = [];
//   arr2.forEach((element) => {
//     res.unshift(element);
//   });
//   return res;
// };
// console.log(r2(arr2));

// методы массива
// let num = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 8];
// let num2 = [1, 5, 8, 15, 99, 111];
// let sum = num.reduce((x, y) => x + y);
// console.log(sum);
// let uniq_num = [...new Set(num)];
// // let uniq_num = Array.from(new Set(num));
// console.log(uniq_num);
// let new_num = [...new Set(num)].filter((item) => num2.includes(item));
// console.log(new_num);
// let rand_num = num2[Math.floor(Math.random() * num2.length)];
// console.log(rand_num);
// let res = num2.filter((item, index) => item >= 0 && index % 2 == 0);
// console.log(res);
// let res1 = num2.map((item) => item * 3);
// console.log(res1);
// let rand_arr = [];
// for (let i = 0; i < 15; i++) {
//   rand_arr.push(Math.floor(Math.random() * 100));
// }
// console.log(rand_arr);

// Задачи с воркшопа Glo-academy
// const foo = (a, b) => {
//   if (!b) {
//     return x => a + x;
//   }

//   return a + b;
// };
// console.log(foo(5, 5));
// console.log(foo(5)(7));

// function Inc() {
//   let i = 0;
//   this.toString = function() {
//     return ++i;
//   };
// }

// let inc = new Inc();

// alert(inc); // 1
// alert(inc); // 2
// alert(inc); // 3
// alert(inc + inc + inc); // 15

// Убираем теги с текста в textarea
// let btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
// let text1 = document.querySelector("#t1").value;
// console.log(text1);
// console.log("btn");
// });

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

// const arr = [1,2,3,-1,-2,-3,0,5,6,7];

// map
// const map = function(arr, callback, thisArg) {
//     let results = [];
//     for (let i = 0; i < arr.length; i ++) {
//       results.push(callback.call(thisArg, arr[i], i, arr));
//     }
//     return results;
//   };

// var toMap = map(arr, item => item + 1);

// console.log(toMap);

// filter
// const filter = function(arr, callback, thisArg) {
//     let results = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (callback.call(thisArg, arr[i], i, arr)) {
//         results.push(arr[i]);
//       }
//     }
//     return results;
//   };

// const toFilter = filter(arr, item => item > 5);

// console.log(toFilter);

// reduce
// const reduce = function(arr, callback, startValue) {
//     let result = startValue;
//     for (let i = 0; i < arr.length; i++) {
//       result = callback.call(null, result, arr[i], i, arr);
//     }
//     return result;
//   };

// const toReduce = reduce(arr, (acc,cur) => acc+cur,0)

// console.log(toReduce);

// function myFunction() {
//     try {
//         if(x == "") throw "пусто";
//         if(isNaN(x)) throw "не число";
//         x = Number(x);
//         if(x < 5) throw "слишком мало";
//         if(x > 10) throw "слишком много";
//     }
//     catch(err) {
//         message.innerHTML = "Вы ввели " + err;
//     }
// }

// readdir вызывать setTimeout(), readdirSync, колбек, promise, async/await

// Круг с callback
// function showCircle(cx, cy, radius, callback) {
//   let div = document.createElement('div');
//   div.style.width = 0;
//   div.style.height = 0;
//   div.style.left = cx + 'px';
//   div.style.top = cy + 'px';
//   div.className = 'circle';
//   document.body.append(div);

//   setTimeout(() => {
//     div.style.width = radius * 2 + 'px';
//     div.style.height = radius * 2 + 'px';

//     div.addEventListener('transitionend', function handler() {
//       div.removeEventListener('transitionend', handler);
//       callback(div);
//     });
//   }, 0);
// }

// function go() {
//   showCircle(150, 150, 100, (div) => {
//     div.classList.add('message-ball');
//     div.append('Hello, world!');
//   });
// }

// Круг с Promise
// function showCircle(cx, cy, radius) {
//   let div = document.createElement('div');
//   div.style.width = 0;
//   div.style.height = 0;
//   div.style.left = cx + 'px';
//   div.style.top = cy + 'px';
//   div.className = 'circle';
//   document.body.append(div);

//   return new Promise(function (resolve) {
//     setTimeout(() => {
//       div.style.width = radius * 2 + 'px';
//       div.style.height = radius * 2 + 'px';

//       div.addEventListener('transitionend', function handler() {
//         div.removeEventListener('transitionend', handler);
//         resolve(div);
//       });
//     }, 0);
//   });
// }

// function go() {
//   showCircle(150, 150, 100).then((div) => {
//     div.classList.add('message-ball');
//     div.append('Hello, world!');
//   });
// }

// Круг с async/await
// function showCircle(cx, cy, radius) {
//   let div = document.createElement('div');
//   div.style.width = 0;
//   div.style.height = 0;
//   div.style.left = cx + 'px';
//   div.style.top = cy + 'px';
//   div.className = 'circle';
//   document.body.append(div);

//   return new Promise(function (resolve) {
//     setTimeout(() => {
//       div.style.width = radius * 2 + 'px';
//       div.style.height = radius * 2 + 'px';

//       div.addEventListener('transitionend', function handler() {
//         div.classList.add('message-ball');
//         div.append('Hello, world!');
//         div.removeEventListener('transitionend', handler);
//         resolve(div);
//       });
//     }, 0);
//   });
// }

// async function go() {
//   await showCircle(150, 150, 100);
// }

// const promise = new Promise((res, rej) => {
//   setTimeout(() => rej());
// })

// promise.catch(()=>console.log(new Error('Ошибка')))
// .finally(()=>console.log('finally'));

// const promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej();
//   }, 2000);
// });

// promise
//   .then(() => console.log('done'))
//   .catch(() => console.log(new Error('error')))
//   .finally(() => console.log('finally'));

// function delay(ms) {
//  return new Promise(function(res) {
//    setTimeout(()=>{
//      res()
//    }, ms)
//  })
// }

// delay(3000).then(() => console.log('выполнилось через 3 секунды'));

// new Promise(function(res){
//   setTimeout(()=>{
//     res(1);
//   }, 3000)
// }).then(function(result) {
//   console.log(result);
//   return result * 2;
// }).then(function(result) {
//   console.log(result);
//   return result * 2 ;
// })

// new Promise(function(res) {
//   setTimeout(()=>{
//     res(1);
//   }, 3000)
// }).then(function(result) {
//   console.log(result);
//   return new Promise(function(res) {
//     setTimeout(()=>{
//       res(result * 2);
//     }, 3000)
//   })
// }).then(function(result) {
//   console.log(result);
//   return new Promise(function(res) {
//     setTimeout(()=>{
//       res(result * 2);
//     }, 3000)
//   })
// }).then(function(result) {
//   console.log(result);
// })

// const mood = true;

// const getPhone = new Promise((res, rej) => {
//   if (mood) {
//     const phone = {
//       model: 'Samsing',
//       color: 'black',
//     };

//     res(phone);
//   }

//   const reason = new Error('Mood don`t good');
//   rej(reason);
// });

// // const secondPromise = function (phone) {
// async function secondPromise(phone) {
//   return new Promise((res) => {
//     let message = `Working ${phone.model} ${phone.color}`;

//     res(message);
//   });
// }

// async function result() {
//   try {
//     let phone = await getPhone;
//     let message = await secondPromise(phone);
//     console.log(message);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// getPhone
//   .then(secondPromise)
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((reason) => {
//     console.log(new Error(reason));
//   });

// getPhone
//   .then((phone) => {
//     console.log(`Телефон ${phone.model} ${phone.color}`);
//   })
//   .catch((reason) => {
//     console.log(new Error(reason));
//   });

// async function result() {
//   try {
//     let phone = await getPhone;
//     console.log(`Телефон ${phone.model} ${phone.color}`);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// result();

// (async () => {
//   await result();
// })();

// Promise.all([
//   new Promise((res, rej) => setTimeout(() => res(3), 2000)),
//   new Promise((res, rej) => setTimeout(() => res(2), 1000)),
//   new Promise((res, rej) => setTimeout(() => rej(new Error('Error')), 2000)),
//   new Promise((res, rej) => setTimeout(() => res(1), 5000)),
//   new Promise((res, rej) => setTimeout(() => res(4), 1000)),
// ])
//   .then(console.log)
//   .catch(console.log);

// Promise.allSettled([
//   new Promise((res, rej) => setTimeout(() => res(3), 2000)),
//   new Promise((res, rej) => setTimeout(() => res(2), 1000)),
//   new Promise((res, rej) => setTimeout(() => rej(new Error('Error')), 2000)),
//   new Promise((res, rej) => setTimeout(() => res(1), 5000)),
//   new Promise((res, rej) => setTimeout(() => res(4), 1000)),
// ]).then(console.log);

// Promise.race([
//   new Promise((res, rej) => setTimeout(() => res(3), 2000)),
//   new Promise((res, rej) => setTimeout(() => res(2), 1000)),
//   new Promise((res, rej) => setTimeout(() => rej(new Error('Error')), 2000)),
//   new Promise((res, rej) => setTimeout(() => res(1), 5000)),
//   new Promise((res, rej) => setTimeout(() => res(4), 100)),
// ]).then(console.log);

// function calcc(a, b, callback) {
//   let sum = a + b;
//   callback(sum);
// }

// calcc(2, 2, (sum) => {
//   let double = sum ** 2;
//   console.log(double);
// });

// function calc(a, b) {
//   return new Promise((res) => {
//     setTimeout(() => {
//       let sum = +a + +b;
//       res(sum);
//     }, 1000);
//   });
// }

// calc(2, 2).then((sum) => {
//   let double = sum ** 2;
//   console.log(double);
// });

// async function f(a, b) {
//   let promise = new Promise((res) => {
//     setTimeout(() => {
//       let sum = +a + +b;
//       res(sum);
//     }, 1000);
//   });

//   let sum = await promise;

//   let double = sum ** 2;

//   console.log(double);
// }

// f(2, 2);

// 11.8.1
// async function loadJson(url) {
//   let response = await fetch(url);

//   if (response.status == 200) {
//     let json = await response.json();
//     return json;
//   }

//   throw new Error(response.status);
// }

// loadJson('no-such-user.json')
//   .catch(console.log);

// 11.8.2
// class HttpError extends Error {
//   constructor(response) {
//     super(`${response.status} for ${response.url}`);
//     this.name = 'HttpError';
//     this.response = response;
//   }
// }

// async function loadJson(url) {
//   let response = await fetch(url);
//   if (response.status == 200) {
//     return response.json();
//   } else {
//     throw new HttpError(response);
//   }
// }

// async function demoGithubUser() {
//   let user;

//   while (true) {
//     let name = prompt('Введите логин?', 'iliakan');
//     try {
//       user = await loadJson(`https://api.github.com/users/${name}`);
//       break;
//     } catch (err) {
//       if (err instanceof HttpError && err.response.status == 404) {
//         alert('Такого пользователя не существует');
//       } else {
//         throw err;
//       }
//       alert(`Полное имя: ${user.name}.`);
//       return user;
//     }
//   }
// }

// demoGithubUser();

// const p = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej(new Error('error'));
//   }, 3000);
// });
// .then((res) => {
//   console.log(res);
//   return res;
// })
// .catch((err) => {
//   console.log(err.message);
//   throw err
// });

// async function f() {
//   try {
//     let result = await new Promise((res, rej) => {
//       setTimeout(() => {
//         rej(new Error('error'));
//       }, 3000);
//     });
//     console.log(result);
//   } catch (err) {
//     console.log(err.message);
//   }
// }
// f();

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
