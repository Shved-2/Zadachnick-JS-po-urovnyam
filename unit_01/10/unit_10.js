// Task 1 ============================================
/* Заполните массив случайными числами из промежутка от 1 до 100.*/
let a1 = [];

function t1() {
  while (a1.length < 20) {
    a1.push(Math.round(Math.random() * 100));
  }
  document.querySelector('.out-1').innerHTML = a1;
  console.log(a1);
}
document.querySelector('.b-1').addEventListener('click', t1);

// Task 2============================================
/* Дано некоторое число:
12345
Выведите в консоль все его символы с конца.*/
let a2 = 12345;

function t2() {
  let str = String(a2).split('').reverse().join(' ');

  document.querySelector('.out-2').innerHTML = str;
  console.log(str);
}
document.querySelector('.b-2').addEventListener('click', t2);

// Task 3============================================
/* Дан некоторый массив, например, вот такой:
[1, 2, 3, 4, 5, 6]
По очереди выведите в консоль подмассивы из двух элементов нашего массива:

[1, 2]
[3, 4]
[5, 6]*/
let a3 = [1, 2, 3, 4, 5, 6];

function t3() {
  let finArr = [];
  for (let i = 0; i < a3.length; i += 2) {
    finArr.push([a3[i], a3[i + 1]]);
  }
  document.querySelector('.out-3').innerHTML = finArr;
  console.log(finArr);
}
document.querySelector('.b-3').addEventListener('click', t3);

// Task 4 ============================================
/*  Даны два массива:

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
Слейте эти массивы в новый массив:
[1, 2, 3, 4, 5, 6]*/

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let a4 = [];

function t4() {
  a4 = arr1.concat(arr2);
  document.querySelector('.out-4').innerHTML = a4;
  console.log(a4);
}
document.querySelector('.b-4').addEventListener('click', t4);
