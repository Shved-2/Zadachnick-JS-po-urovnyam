// Task 1 ============================================
/* Заполните массив целыми числами от 1 до 10.*/
let a1 = [];

function t1() {
  for (let i = 0; i < 10; i++) {
    a1.push(i + 1);
  }
  document.querySelector('.out-1').innerHTML = a1;
}
document.querySelector('.b-1').addEventListener('click', t1);

// Task 2============================================
/* Заполните массив четными числами из промежутка от 1 до 100.*/
let a2 = [];

function t2() {
  a2 = [];
  while (a2.length < 20) {
    let num = Math.round(Math.random() * 100);
    if (num % 2 == 0) {
      a2.push(num);
    }
  }
  console.log(a2);
  document.querySelector('.out-2').innerHTML = a2;
}
document.querySelector('.b-2').addEventListener('click', t2);

// Task 3============================================
/* Дан массив с дробями:
[1.456, 2.125, 3.32, 4.1, 5.34]
Округлите эти дроби до одного знака в дробной части.*/
let a3 = [1.456, 2.125, 3.32, 4.1, 5.34];

function t3() {
  let arr = [];
  for (let item of a3) {
    arr.push(item.toFixed(1));
  }
  a3 = arr;
  console.log(a3);
  document.querySelector('.out-3').innerHTML = a3;
}
document.querySelector('.b-3').addEventListener('click', t3);
