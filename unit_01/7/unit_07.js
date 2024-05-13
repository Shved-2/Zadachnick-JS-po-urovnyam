// Task 1 ============================================
/* Дана строка:'abcde'
Получите массив букв этой строки.*/
let a1 = 'abcde';
function t1() {
  let arr = a1.split('');
  document.querySelector('.out-1').innerHTML = arr;
}
document.querySelector('.b-1').addEventListener('click', t1);

// Task 2============================================
/* Дано некоторое число:
12345
Получите массив цифр этого числа.*/
let a2 = 12345;

function t2() {
  let str = String(a2);
  let arr = str.split('');
  document.querySelector('.out-2').innerHTML = arr;
}
document.querySelector('.b-2').addEventListener('click', t2);

// Task 3============================================
/* Дано некоторое число:
12345
Переверните его:*/
let a3 = 12345;

function t3() {
  let arr = String(a3).split('').reverse();

  document.querySelector('.out-3').innerHTML = arr;
}
document.querySelector('.b-3').addEventListener('click', t3);

// Task 4============================================
/* Дано некоторое число: 12345 Найдите сумму цифр этого числа.*/
let a4 = 12345;
function t4() {
  let arr = String(a4).split('');
  let summ = 0;
  for (let item of arr) {
    summ += Number(item);
  }
  document.querySelector('.out-4').innerHTML = summ;
}
document.querySelector('.b-4').addEventListener('click', t4);
