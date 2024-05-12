// Task 1 ============================================
/* Заполните массив целыми числами от 1 до 10.*/
let a1 = 565;

function t1() {
  let str = String(a1);
  document.querySelector('.out-1').innerHTML = str[0];
}
document.querySelector('.b-1').addEventListener('click', t1);

// Task 2============================================
/* Заполните массив четными числами из промежутка от 1 до 100.*/
let a2 = 569848;

function t2() {
  let str = String(a2);
  document.querySelector('.out-2').innerHTML = str[str.length - 1];
}
document.querySelector('.b-2').addEventListener('click', t2);

// Task 3============================================
/* Дан массив с дробями:
[1.456, 2.125, 3.32, 4.1, 5.34]
Округлите эти дроби до одного знака в дробной части.*/
let a3 = 569848;

function t2() {
  let str = String(a2);
  document.querySelector('.out-2').innerHTML = str[str.length - 1];
}
document.querySelector('.b-2').addEventListener('click', t2);
