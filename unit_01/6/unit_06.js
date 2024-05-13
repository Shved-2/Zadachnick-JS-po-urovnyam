// Task 1 ============================================
/*  Дан массив с числами. Найдите сумму квадратов элементов этого массива.*/
let arr = [6, 5, 8, 2, -9, 45, -8, 6, 12, 10, -6, 8, 9, 1, -3, -4];

function t1() {
  let summ = 0;
  for (let item of arr) {
    summ += item * item;
  }

  document.querySelector('.out-1').innerHTML = summ;
}
document.querySelector('.b-1').addEventListener('click', t1);

// Task 2============================================
/* Дан массив с числами. Найдите сумму квадратных корней элементов этого массива.*/
let arr2 = [6, 5, 8, 2, 9, 45, 8, 6, 12, 10, 6, 8, 9, 1, 3, 4];
function t2() {
  let summ = 0;
  for (let item of arr2) {
    summ += Math.sqrt(item);
  }

  document.querySelector('.out-2').innerHTML = summ;
}
document.querySelector('.b-2').addEventListener('click', t2);

// Task 3============================================
/* Дан массив с числами. Найдите сумму положительных элементов этого массива.*/

function t3() {
  let summ = 0;

  for (let item of arr) {
    if (item % 2 == 0) {
      summ += item;
    }
  }
  document.querySelector('.out-3').innerHTML = summ;
}
document.querySelector('.b-3').addEventListener('click', t3);

// Task 4 ============================================
/* Дан массив с числами. Найдите сумму тех элементов этого массива, которые больше нуля и меньше десяти.*/
let arr4 = [6, 5, 8, 2, -9, 45, -8, 6, 12, 10, -6, 8, 19, 1, -3, -4];
function t4() {
  let summ = 0;

  for (let item of arr4) {
    if (item > 0 && item < 10) {
      summ += item;
    }
  }
  document.querySelector('.out-4').innerHTML = summ;
}
document.querySelector('.b-4').addEventListener('click', t4);
