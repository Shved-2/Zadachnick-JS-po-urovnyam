// Task 1 ============================================
/*  Найдите сумму всех целых чисел от 1 до 100.*/

function t1() {
  let summ = 0;
  for (let i = 0; i <= 100; i++) {
    summ += i;
  }
  document.querySelector('.out-1').innerHTML = summ;
}
document.querySelector('.b-1').addEventListener('click', t1);

// Task 2============================================
/*  Найдите сумму всех целых четных чисел в промежутке от 1 до 100.*/

function t2() {
  let summ = 0;
  for (let i = 0; i <= 100; i++) {
    if (i % 2 == 0) {
      summ += i;
    }
  }
  document.querySelector('.out-2').innerHTML = summ;
}
document.querySelector('.b-2').addEventListener('click', t2);

// Task 3============================================
/*  Найдите сумму всех целых нечетных чисел в промежутке от 1 до 100.*/

function t3() {
  let summ = 0;
  for (let i = 0; i <= 100; i++) {
    if (i % 2 != 0) {
      summ += i;
    }
  }
  document.querySelector('.out-3').innerHTML = summ;
}
document.querySelector('.b-3').addEventListener('click', t3);

// Task 4 ============================================
/*  Даны два целых числа. Найдите остаток от деления первого числа на второе.*/

function t4() {
  let num1 = +document.querySelector('.i-4-1').value;
  let num2 = +document.querySelector('.i-4-2').value;
  let del = num1 % num2;
  document.querySelector('.out-4').innerHTML = del;
}
document.querySelector('.b-4').addEventListener('click', t4);

// Task 5 ============================================
/* Дана некоторая строка. Переберите и выведите в консоль по очереди все символы с конца строки.*/

function t5() {
  let text = document.querySelector('.i-5').value;
  let str = '';

  for (let i = text.length; i > 0; i--) {
    str += text[i - 1] + ' ';
  }
  document.querySelector('.out-5').innerHTML = str;
}
document.querySelector('.b-5').addEventListener('click', t5);
