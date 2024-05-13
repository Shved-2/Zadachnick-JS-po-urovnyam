// Task 1 ============================================
/*  Дано число. Выведите в консоль первую цифру этого числа..*/
let a1 = 565;

function t1() {
  let str = String(a1);
  document.querySelector('.out-1').innerHTML = str[0];
}
document.querySelector('.b-1').addEventListener('click', t1);

// Task 2============================================
/*  Дано число. Выведите в консоль последнюю цифру этого числа.*/
let a2 = 569848;

function t2() {
  let str = String(a2);
  document.querySelector('.out-2').innerHTML = str[str.length - 1];
}
document.querySelector('.b-2').addEventListener('click', t2);

// Task 3 ============================================
/*  Дано число. Выведите в консоль сумму первой и последней цифры этого числа.*/
let a3 = 654987;

function t3() {
  let str = String(a3);
  let num = Number(str[0]) + Number(str[str.length - 1]);
  document.querySelector('.out-3').innerHTML = num;
}
document.querySelector('.b-3').addEventListener('click', t3);

// Task 4 ============================================
/*  Дано число. Выведите количество цифр в этом числе.*/
let a4 = 5658714;

function t4() {
  let str = String(a4);
  document.querySelector('.out-4').innerHTML = str.length;
}
document.querySelector('.b-4').addEventListener('click', t4);

// Task 5 ============================================
/* Даны два числа. Проверьте, что первые цифры этих чисел совпадают.*/
let num51 = 6532;
let num52 = 768224;

function t5() {
  let str1 = String(num51);
  let str2 = String(num52);
  let str = '';
  if (str1[0] == str2[0]) {
    str = 'Совпадают';
  } else {
    str = 'Несовпадают';
  }
  document.querySelector('.out-5').innerHTML = str;
}
document.querySelector('.b-5').addEventListener('click', t5);
