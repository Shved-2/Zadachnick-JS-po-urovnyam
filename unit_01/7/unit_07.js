// Task 1 ============================================
/* Дана строка:'abcde'
Получите массив букв этой строки.*/
let a1 = 565;

function t1() {
  let str = String(a1);
  document.querySelector('.out-1').innerHTML = str[0];
}
document.querySelector('.b-1').addEventListener('click', t1);

// Task 2============================================
/* Дано некоторое число:
12345
Получите массив цифр этого числа.*/
let a2 = 569848;

function t2() {
  let str = String(a2);
  document.querySelector('.out-2').innerHTML = str[str.length - 1];
}
document.querySelector('.b-2').addEventListener('click', t2);

// Task 3============================================
/* Дано некоторое число:
12345
Переверните его:*/
let a3 = 569848;

function t2() {
  let str = String(a2);
  document.querySelector('.out-2').innerHTML = str[str.length - 1];
}
document.querySelector('.b-2').addEventListener('click', t2);

function t1() {
  let str = String(a1);
  document.querySelector('.out-1').innerHTML = str[0];
}
document.querySelector('.b-1').addEventListener('click', t1);
